# SFIA v2.6 — Review Pack — Usage Evidence Graph Review

**Date/heure :** 2026-07-11 19:18 CEST
**Cycle :** Usage Evidence Graph Review
**Profil :** Critical
**HEAD initial :** `0fb03ceb4c3d71df8940243e052fab1752cd8026`
**Commit substantif :** `58d10c255c6cc1d534acfe59838401bbb5f3f945`
**HEAD courant PR :** `e48980216e86a4092cbfe3b859c7ff274ccd0272`
**synthesis only :** no

## Définition G
- |G| = **374**

## Matrice consommateurs
- G_count: 374
- distinct_consumers: 109
- mcp_template_readme: 50
- gitignore_consumer: 6
- audit_cartography_consumers: 63
- inventory_consumers: 0
- cycles_2: 4

## Top consommateurs
- `.cursor/mcp-templates/README.md`: **50**
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`: **35**
- `docs/architecture/README.md`: **16**
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`: **16**
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`: **15**
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`: **14**
- `method/complementary/controlled-delivery/README.md`: **10**
- `method/sfia-fast-track/README.md`: **10**
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`: **10**
- `docs/practices/methods-structure-check.md`: **8**
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`: **7**
- `.gitignore`: **6**
- `exports/notion/export-manifest.json`: **6**
- `docs/architecture/sfia-delivery-pipeline.md`: **6**
- `projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json`: **6**

## Usage avant/après
| | Avant | Après |
|---|------:|------:|
| operational | 754 | **577** |
| non-operational | 273 | **443** |
| unknown | 18 | **25** |

## Résultats G
- confirmed: **197**
- downgrade non-operational: **170**
- downgrade unknown: **7**

## Chaîne par operational conservé (197)
- `.cursor/mcp-templates/penpot-mcp.example.json`
  - root: `projects/interv360/app/src/tests/README.md` chain: .cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> .cursor/mcp-templates/penpot-mcp.example.json
- `docker/penpot/README.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: .cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> docker/penpot/README.md
- `docs/architecture/sfia-decision-engine.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-decision-engine.md
- `docs/architecture/sfia-delivery-pipeline.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-delivery-pipeline.md
- `docs/architecture/sfia-domain-model.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-domain-model.md
- `docs/architecture/sfia-meta-model.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-meta-model.md
- `docs/architecture/sfia-platform-architecture.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-platform-architecture.md
- `docs/architecture/sfia-repository-blueprint.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-repository-blueprint.md
- `docs/foundation/sfia-engineering-principles.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/foundation/sfia-engineering-principles.md
- `docs/practices/process/bpmn-deliverables-standard.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: docs/practices/process/bpmn-integration-checklist.md -> projects/interv360/app/src/tests/README.md -> docs/practices/process/bpmn-deliverables-standard.md
- `docs/practices/process/bpmn-integration-checklist.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-integration-checklist.md
- `docs/practices/process/bpmn-method-integration-audit.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-method-integration-audit.md
- `docs/practices/process/bpmn-process-modeling-method.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-process-modeling-method.md
- `docs/practices/roles/qa-tester-method.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md -> projects/interv360/app/src/domain/README.md -> docs/practices/roles/qa-tester-method.md
- `docs/templates/tooling/penpot/README.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: .cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> docs/templates/tooling/penpot/README.md
- `docs/tooling/penpot/penpot-sfia-method-integration.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: docs/templates/tooling/penpot/README.md -> docs/tooling/penpot/penpot-design-agent-architecture.md -> docs/tooling/penpot/penpot-cursor-agent-rules.md -> projects/interv360/app/src/tests/README.md -> docs/tooling/penpot/penpot-sfia-method-integration.md
- `exports/notion/components.json`
  - root: `exports/notion/export-manifest.json` chain: exports/notion/export-manifest.json -> exports/notion/components.json
- `exports/notion/experiments.json`
  - root: `exports/notion/export-manifest.json` chain: exports/notion/export-manifest.json -> exports/notion/experiments.json
- `exports/notion/kpi.json`
  - root: `exports/notion/export-manifest.json` chain: exports/notion/export-manifest.json -> exports/notion/kpi.json
- `exports/notion/projects.json`
  - root: `exports/notion/export-manifest.json` chain: exports/notion/export-manifest.json -> exports/notion/projects.json
- `exports/notion/standards.json`
  - root: `exports/notion/export-manifest.json` chain: exports/notion/export-manifest.json -> exports/notion/standards.json
- `exports/notion/templates.json`
  - root: `exports/notion/export-manifest.json` chain: exports/notion/export-manifest.json -> exports/notion/templates.json
- `method/complementary/controlled-delivery/controlled-delivery-checklist.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: method/complementary/controlled-delivery/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-prep.md -> projects/interv360/app/src/tests/README.md -> method/complementary/controlled-delivery/controlled-delivery-checklist.md
- `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: method/complementary/controlled-delivery/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-prep.md -> projects/interv360/app/src/tests/README.md -> method/complementary/controlled-delivery/controlled-delivery-prompt-family.md
- `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: method/complementary/controlled-delivery/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-prep.md -> projects/interv360/app/src/tests/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md
- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: method/complementary/controlled-delivery/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-prep.md -> projects/interv360/app/src/tests/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-package.md
- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/complementary/controlled-delivery/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-package.md -> projects/interv360/app/src/domain/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-prep.md
- `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: method/complementary/controlled-delivery/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-prep.md -> projects/interv360/app/src/tests/README.md -> method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md
- `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: method/complementary/controlled-delivery/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-prep.md -> projects/interv360/app/src/tests/README.md -> method/complementary/controlled-delivery/controlled-delivery-standard-summary.md
- `method/complementary/controlled-delivery/controlled-delivery-standard.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: method/complementary/controlled-delivery/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-prep.md -> projects/interv360/app/src/tests/README.md -> method/complementary/controlled-delivery/controlled-delivery-standard.md
- `method/complementary/controlled-delivery/controlled-delivery-template.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: method/complementary/controlled-delivery/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-prep.md -> projects/interv360/app/src/tests/README.md -> method/complementary/controlled-delivery/controlled-delivery-template.md
- `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: method/complementary/controlled-delivery/README.md -> method/complementary/controlled-delivery/controlled-delivery-publication-prep.md -> projects/interv360/app/src/tests/README.md -> method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md
- `method/sfia-fast-track/audit-rex/interv360-application-rex.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/sfia-delivery-pipeline.md -> method/sfia-fast-track/core/sfia-rules-update.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/audit-rex/interv360-application-rex.md
- `method/sfia-fast-track/automation/sfia-automation-architecture.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/automation/sfia-automation-architecture.md
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/automation/sfia-prompt-generation-engine.md
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/automation/sfia-repository-execution-engine.md
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/automation/sfia-validation-engine.md
- `method/sfia-fast-track/checklists/guardrails-checklist.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/sfia-delivery-pipeline.md -> method/sfia-fast-track/core/sfia-rules-update.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/checklists/guardrails-checklist.md
- `method/sfia-fast-track/checklists/notion-publication-checklist.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/sfia-delivery-pipeline.md -> method/sfia-fast-track/core/sfia-rules-update.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/checklists/notion-publication-checklist.md
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/checklists/sfia-validation-checklist.md
- `method/sfia-fast-track/checklists/validation-checklist.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/checklists/validation-checklist.md
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- `method/sfia-fast-track/core/sfia-consolidation-roadmap.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/README.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/core/sfia-consolidation-roadmap.md
- `method/sfia-fast-track/core/sfia-global-capitalization.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/README.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/core/sfia-global-capitalization.md
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/core/sfia-knowledge-layer.md
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/README.md -> method/sfia-fast-track/automation/sfia-validation-engine.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- `method/sfia-fast-track/core/sfia-rules-update.md`
  - root: `projects/interv360/app/src/app/App.css` chain: docs/architecture/sfia-delivery-pipeline.md -> method/sfia-fast-track/audit-rex/interv360-application-rex.md -> projects/interv360/app/src/app/App.css -> method/sfia-fast-track/core/sfia-rules-update.md
- `method/sfia-fast-track/cycles/interv360-final-capitalization.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/README.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/cycles/interv360-final-capitalization.md
- `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/README.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md -> prompts/templates/sfia-cycle-execution-template.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md -> projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md -> projects/interv360/backend/src/domain/types.ts -> method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/checklists/sfia-validation-checklist.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/checklists/sfia-validation-checklist.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/checklists/sfia-validation-checklist.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/checklists/sfia-validation-checklist.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/checklists/sfia-validation-checklist.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/automation/sfia-prompt-generation-engine.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md
- `method/sfia-fast-track/documentation/notion-publication-plan.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/README.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/notion-publication-plan.md
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md
- `method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md
- `method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md
- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/core/sfia-consolidation-roadmap.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md
- `method/sfia-fast-track/templates/audit-template.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/README.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/templates/audit-template.md
- `method/sfia-fast-track/templates/cycle-template.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/README.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/templates/cycle-template.md
- `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/README.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/templates/mvp-delivery-pattern-template.md
- `method/sfia-fast-track/templates/post-merge-template.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/sfia-delivery-pipeline.md -> method/sfia-fast-track/core/sfia-rules-update.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/templates/post-merge-template.md
- `method/sfia-fast-track/templates/pr-body-template.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/architecture/sfia-delivery-pipeline.md -> method/sfia-fast-track/core/sfia-rules-update.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> method/sfia-fast-track/templates/pr-body-template.md
- `method/sfia-fast-track/templates/rex-template.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/README.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/templates/rex-template.md
- `method/sfia-fast-track/ui/figma-design-first-ui-method.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/README.md -> projects/interv360/app/src/domain/README.md -> method/sfia-fast-track/ui/figma-design-first-ui-method.md
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md -> projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md -> projects/interv360/backend/src/domain/types.ts -> projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md -> projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md -> projects/interv360/backend/src/domain/types.ts -> projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md
- `projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/chantiers360-v2/00-framing/project-framing.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md
- `projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/chantiers360-v2/00-framing/project-framing.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md
- `projects/chantiers360-v2/04-design/captures/01-dashboard-cockpit-premium.png`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/chantiers360-v2/04-design/figma-brief.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/04-design/captures/01-dashboard-cockpit-premium.png
- `projects/chantiers360-v2/04-design/captures/02-fiche-chantier-taches.png`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/chantiers360-v2/04-design/figma-brief.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/04-design/captures/02-fiche-chantier-taches.png
- `projects/chantiers360-v2/04-design/captures/03-fiche-chantier-reserves.png`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/chantiers360-v2/04-design/figma-brief.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/04-design/captures/03-fiche-chantier-reserves.png
- `projects/chantiers360-v2/04-design/captures/04-creation-chantier.png`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/chantiers360-v2/04-design/figma-brief.md -> method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/04-design/captures/04-creation-chantier.png
- `projects/chantiers360-v2/04-design/figma-review-checklist.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/04-design/figma-review-checklist.md
- `projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/chantiers360-v2/00-framing/project-framing.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md
- `projects/chantiers360-v2/06-figma-fidelity-spike/figma-reference.md`
  - root: `tools/cmp-001/package.json` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md -> tools/cmp-001/package.json -> projects/chantiers360-v2/06-figma-fidelity-spike/figma-reference.md
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md`
  - root: `tools/cmp-001/package.json` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md -> tools/cmp-001/package.json -> projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md`
  - root: `tools/cmp-001/package.json` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md -> tools/cmp-001/package.json -> projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md`
  - root: `tools/cmp-001/package.json` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md -> tools/cmp-001/package.json -> projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md
- `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md -> projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md -> projects/interv360/backend/src/domain/types.ts -> projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-implementation-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md -> projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md -> projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-implementation-report.md
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md -> projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md -> projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md -> projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md
- `projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/chantiers360-v2/00-framing/project-framing.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md
- `projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md -> projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md -> projects/interv360/backend/src/domain/types.ts -> projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01.md
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md -> projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md -> projects/interv360/backend/src/domain/types.ts -> projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md -> projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-validation-report.md -> projects/chantiers360-v2/08-qa-test/inc-01/qa-readiness.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md -> projects/chantiers360-v2/08-qa-test/inc-01/qa-readiness.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md
- `projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: projects/chantiers360-v2/07-delivery-inc-02/inc-02-closure-report.md -> projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md -> projects/interv360/backend/src/domain/types.ts -> projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md -> projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md -> projects/interv360/backend/src/domain/types.ts -> projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md -> projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-validation-report.md -> projects/chantiers360-v2/08-qa-test/inc-01/qa-readiness.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md -> projects/chantiers360-v2/08-qa-test/inc-01/qa-readiness.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md
- `projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: projects/chantiers360-v2/07-delivery-inc-03/inc-03-closure-report.md -> projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md -> projects/interv360/backend/src/domain/types.ts -> projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03.md
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-implementation-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md -> projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-validation-report.md -> projects/chantiers360-v2/08-qa-test/inc-01/qa-readiness.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-implementation-report.md
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-decisions.md -> projects/chantiers360-v2/08-qa-test/inc-01/qa-readiness.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md
- `projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-validation-report.md -> projects/chantiers360-v2/08-qa-test/inc-01/qa-readiness.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md -> projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md -> projects/interv360/backend/src/domain/types.ts -> projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: projects/chantiers360-v2/07-delivery-inc-05/inc-05-closure-report.md -> projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-implementation-report.md -> projects/interv360/backend/src/domain/types.ts -> projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-report.md
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md
- `projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.md
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-report.md
- `projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.md
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-report.md
- `projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.md
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-report.md
- `projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.md
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-report.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-report.md
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md
- `projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md
- `projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md`
  - root: `projects/interv360/backend/src/domain/types.ts` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md -> projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md -> projects/interv360/backend/src/domain/types.ts -> projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-final-pilot-rex-report.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md -> method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/09-capitalization/chantiers360-v2-final-pilot-rex-report.md
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md -> method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md
- `projects/chantiers360-v2/09-capitalization/v0-vs-sfia-v2-methodological-comparison.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md -> method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> projects/interv360/app/src/domain/README.md -> projects/chantiers360-v2/09-capitalization/v0-vs-sfia-v2-methodological-comparison.md
- `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json -> projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md
- `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json -> projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md
- `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json -> projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md
- `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json -> projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md
- `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json -> projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md
- `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json -> projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md
- `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json -> projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md
- `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json -> projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md
- `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json -> projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md
- `projects/interv360/02-architecture/architecture-p2-design-impact-summary.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json -> projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/architecture-p2-design-impact-summary.md
- `projects/interv360/02-architecture/figma-first-draft-screens/05-dashboard-sav.png`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/03-design/figma-first-screen-review.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/screen-functional-specs.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/figma-first-draft-screens/05-dashboard-sav.png
- `projects/interv360/02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/03-design/figma-fresh-start-instructions.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-summary.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png
- `projects/interv360/02-architecture/figma-first-draft-screens/08-planning-semaine.png`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/03-design/figma-fresh-start-instructions.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-summary.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/figma-first-draft-screens/08-planning-semaine.png
- `projects/interv360/02-architecture/figma-first-draft-screens/09-fiche-intervention-mobile.png`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/03-design/figma-fresh-start-instructions.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-summary.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/figma-first-draft-screens/09-fiche-intervention-mobile.png
- `projects/interv360/02-architecture/figma-first-draft-screens/10-compte-rendu-mobile.png`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/03-design/figma-fresh-start-instructions.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-summary.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/figma-first-draft-screens/10-compte-rendu-mobile.png
- `projects/interv360/02-architecture/figma-first-draft-screens/11-suivi-erreurs-integration.png`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/03-design/figma-fresh-start-instructions.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-summary.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/figma-first-draft-screens/11-suivi-erreurs-integration.png
- `projects/interv360/02-architecture/figma-first-draft-screens/12-vue-dirigeant.png`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/03-design/figma-fresh-start-instructions.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-summary.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/figma-first-draft-screens/12-vue-dirigeant.png
- `projects/interv360/02-architecture/mvp-clarifications-summary.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/geo-ai-arbitration.md -> projects/interv360/archive/role-enrichment/qa-transverse-analysis.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/mvp-clarifications-summary.md
- `projects/interv360/02-architecture/rules-rg-prioritization-summary.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/closure-without-signature.md -> projects/interv360/archive/role-enrichment/qa-transverse-analysis.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/rules-rg-prioritization-summary.md
- `projects/interv360/02-architecture/status-mapping-summary.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/02-architecture/closure-without-signature.md -> projects/interv360/archive/role-enrichment/qa-transverse-analysis.md -> prompts/prompt-catalog.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/02-architecture/status-mapping-summary.md
- `projects/interv360/03-design/design-v2-cycle-opening.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: projects/interv360/03-design/penpot-screen-prioritization.md -> docs/tooling/penpot/penpot-cursor-agent-rules.md -> projects/interv360/app/src/tests/README.md -> projects/interv360/03-design/design-v2-cycle-opening.md
- `projects/interv360/03-design/penpot-application-frame-template.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/03-design/figma-reprise-path.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/screen-inventory.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/03-design/penpot-application-frame-template.md
- `projects/interv360/03-design/penpot-first-screen-v2-visual-instructions.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/03-design/penpot-first-screen-cycle-summary.md -> projects/interv360/03-design/penpot-first-screen-review.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/screen-functional-specs.md -> projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/03-design/penpot-first-screen-v2-visual-instructions.md
- `projects/interv360/04-delivery/auth-user-switcher.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: projects/interv360/04-delivery/backend-users-session.md -> projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md -> projects/interv360/05-release/mvp-release-readiness.md -> projects/interv360/app/src/tests/README.md -> projects/interv360/04-delivery/auth-user-switcher.md
- `projects/interv360/04-delivery/batch-03-demo-readiness-package.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: projects/interv360/08-presentation/interv360-demo-presentation-package.md -> projects/interv360/app/src/tests/README.md -> projects/interv360/04-delivery/batch-03-demo-readiness-package.md
- `projects/interv360/04-delivery/demo-feedback-review.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: projects/interv360/04-delivery/demo-presentation-feedback.md -> projects/interv360/04-delivery/demo-presentation-review.md -> projects/interv360/08-presentation/interv360-demo-presentation-package.md -> projects/interv360/app/src/tests/README.md -> projects/interv360/04-delivery/demo-feedback-review.md
- `projects/interv360/04-delivery/demo-mvp-closure.md`
  - root: `projects/interv360/app/src/app/App.css` chain: projects/interv360/09-roadmap/interv360-product-industrialization-framing.md -> projects/interv360/04-delivery/frontend-api-connection.md -> projects/interv360/app/src/app/App.css -> projects/interv360/04-delivery/demo-mvp-closure.md
- `projects/interv360/04-delivery/demo-polish.md`
  - root: `projects/interv360/app/src/app/App.css` chain: projects/interv360/04-delivery/demo-mvp-closure.md -> projects/interv360/04-delivery/frontend-api-connection.md -> projects/interv360/app/src/app/App.css -> projects/interv360/04-delivery/demo-polish.md
- `projects/interv360/04-delivery/demo-presentation-feedback.md`
  - root: `projects/interv360/app/src/app/App.css` chain: projects/interv360/04-delivery/demo-mvp-closure.md -> projects/interv360/04-delivery/frontend-api-connection.md -> projects/interv360/app/src/app/App.css -> projects/interv360/04-delivery/demo-presentation-feedback.md
- `projects/interv360/04-delivery/demo-presentation-review.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: projects/interv360/04-delivery/demo-presentation-feedback.md -> projects/interv360/04-delivery/demo-feedback-review.md -> projects/interv360/08-presentation/interv360-e2e-demo-runbook.md -> projects/interv360/app/src/tests/README.md -> projects/interv360/04-delivery/demo-presentation-review.md
- `projects/interv360/04-delivery/end-to-end-demo-hardening.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: projects/interv360/04-delivery/demo-feedback-review.md -> projects/interv360/08-presentation/interv360-e2e-demo-runbook.md -> projects/interv360/app/src/tests/README.md -> projects/interv360/04-delivery/end-to-end-demo-hardening.md
- `projects/interv360/04-delivery/frontend-api-connection-framing.md`
  - root: `projects/interv360/app/src/app/App.css` chain: projects/interv360/04-delivery/frontend-api-connection.md -> projects/interv360/app/src/app/App.css -> projects/interv360/04-delivery/frontend-api-connection-framing.md
- `projects/interv360/04-delivery/frontend-api-connection.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: projects/interv360/04-delivery/demo-mvp-closure.md -> projects/interv360/04-delivery/end-to-end-demo-hardening.md -> projects/interv360/app/src/tests/README.md -> projects/interv360/04-delivery/frontend-api-connection.md
- `projects/interv360/04-delivery/implementation-planning-plan.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/interv360/04-delivery/implementation-planning-summary.md -> projects/interv360/archive/inc-01/inc-01-demo-data.md -> projects/interv360/archive/inc-01/inc-01-technical-qa-planning.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/interv360/04-delivery/implementation-planning-plan.md
- `projects/interv360/04-delivery/premium-design-system.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/04-delivery/premium-design-system.md
- `projects/interv360/04-delivery/product-industrialization.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md -> projects/interv360/05-release/mvp-release-readiness.md -> projects/interv360/app/src/tests/README.md -> projects/interv360/04-delivery/product-industrialization.md
- `projects/interv360/04-delivery/product-ux-finalization.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/04-delivery/product-industrialization.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/04-delivery/product-ux-finalization.md
- `projects/interv360/04-delivery/realization-preparation-plan.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/interv360/04-delivery/realization-preparation-summary.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/interv360/04-delivery/realization-preparation-plan.md
- `projects/interv360/04-delivery/realization-start-plan.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: projects/interv360/04-delivery/realization-start-summary.md -> projects/interv360/archive/inc-01/inc-01-project-structure-decision.md -> projects/interv360/app/src/tests/README.md -> projects/interv360/04-delivery/realization-start-plan.md
- `projects/interv360/04-delivery/technical-design-plan.md`
  - root: `projects/chantiers360-v2/app/docker-compose.test.yml` chain: projects/interv360/04-delivery/technical-design-summary.md -> projects/interv360/archive/inc-01/inc-01-technical-qa-planning.md -> projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md -> projects/chantiers360-v2/app/docker-compose.test.yml -> projects/interv360/04-delivery/technical-design-plan.md
- `projects/interv360/05-release/mvp-release-readiness.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/05-release/mvp-release-readiness.md
- `projects/interv360/08-presentation/interv360-demo-presentation-package.md`
  - root: `projects/interv360/app/src/tests/README.md` chain: projects/interv360/04-delivery/demo-presentation-review.md -> projects/interv360/08-presentation/interv360-e2e-demo-runbook.md -> projects/interv360/app/src/tests/README.md -> projects/interv360/08-presentation/interv360-demo-presentation-package.md
- `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: projects/interv360/04-delivery/backend-minimal-prototype.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md
- `projects/interv360/09-roadmap/interv360-next-product-axis.md`
  - root: `projects/interv360/app/src/domain/README.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/09-roadmap/interv360-next-product-axis.md
- `projects/interv360/09-roadmap/interv360-product-roadmap-after-role-simulation.md`
  - root: `projects/interv360/app/src/app/App.tsx` chain: projects/interv360/09-roadmap/interv360-role-simulation-review.md -> projects/interv360/04-delivery/role-simulation.md -> projects/interv360/app/src/app/App.tsx -> projects/interv360/09-roadmap/interv360-product-roadmap-after-role-simulation.md
- `projects/interv360/09-roadmap/interv360-product-roadmap-next.md`
  - root: `projects/interv360/app/src/app/App.tsx` chain: projects/interv360/09-roadmap/interv360-auth-and-user-framing.md -> projects/interv360/04-delivery/role-simulation.md -> projects/interv360/app/src/app/App.tsx -> projects/interv360/09-roadmap/interv360-product-roadmap-next.md
- `prompts/qa/delivery-qa-test-prompt-family.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/qa/delivery-qa-test-prompt-family.md
- `prompts/qa/qa-tester-prompt-family.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/qa/qa-tester-prompt-family.md
- `prompts/templates/01-create-foundation-document.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/templates/01-create-foundation-document.md
- `prompts/templates/02-update-document-v1-1.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/templates/02-update-document-v1-1.md
- `prompts/templates/03-create-operational-checklist.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/templates/03-create-operational-checklist.md
- `prompts/templates/04-validate-cursor-result.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/templates/04-validate-cursor-result.md
- `prompts/templates/05-validate-pr-readiness.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/templates/05-validate-pr-readiness.md
- `prompts/templates/06-prepare-pr-summary.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/templates/06-prepare-pr-summary.md
- `prompts/templates/07-write-post-merge-status.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/templates/07-write-post-merge-status.md
- `prompts/templates/08-capitalize-method-asset.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/templates/08-capitalize-method-asset.md
- `prompts/templates/09-prepare-notion-mapping.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/templates/09-prepare-notion-mapping.md
- `prompts/templates/10-perform-safe-repository-cleanup.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-cycle-routing-guide.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/templates/10-perform-safe-repository-cleanup.md
- `prompts/templates/sfia-cycle-execution-template.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/templates/sfia-cycle-execution-template.md
- `prompts/tooling/penpot/penpot-design-agent-prompt-family.md`
  - root: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` chain: docs/tooling/penpot/penpot-cursor-agent-rules.md -> method/sfia-fast-track/checklists/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> prompts/tooling/penpot/penpot-design-agent-prompt-family.md
- `prompts/ux-ui/ux-ui-reprise-prompt-family.md`
  - root: `docker/penpot/docker-compose.override.example.yml` chain: docs/tooling/penpot/penpot-sfia-method-integration.md -> docs/tooling/penpot/penpot-self-host-docker-guide.md -> docker/penpot/docker-compose.override.example.yml -> prompts/ux-ui/ux-ui-reprise-prompt-family.md

## Rétrogradés non-operational (170) — liste
- `.cursor/mcp-templates/README.md` — ['gitignore-invalid-edge']
- `.gitignore` — ['gitignore-invalid-edge']
- `README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `components/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `docker/penpot/.env.example` — ['gitignore-invalid-edge', 'inactive-consumer-non-operational']
- `docs/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `docs/adr/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `docs/architecture/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `docs/foundation/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `docs/knowledge/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `docs/practices/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `docs/practices/architecture/functional-architecture-checklist.md` — ['consumer-depends-on-audit']
- `docs/practices/architecture/functional-architecture-deliverables-standard.md` — ['inactive-consumer-non-operational']
- `docs/practices/architecture/functional-architecture-method.md` — ['inactive-consumer-non-operational']
- `docs/practices/methods-structure-check.md` — ['consumer-depends-on-audit']
- `docs/practices/process/bpmn-method-cycle-closure.md` — ['audit-only', 'consumer-depends-on-audit']
- `docs/practices/roles/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `docs/practices/roles/architect-method.md` — ['inactive-consumer-non-operational']
- `docs/practices/roles/business-analyst-method.md` — ['inactive-consumer-non-operational']
- `docs/practices/roles/product-owner-method.md` — ['inactive-consumer-non-operational']
- `docs/practices/roles/project-manager-method.md` — ['inactive-consumer-non-operational']
- `docs/practices/roles/rssi-method.md` — ['inactive-consumer-non-operational']
- `docs/practices/roles/ux-ui-designer-method.md` — ['inactive-consumer-non-operational']
- `docs/practices/ux-ui/ux-ui-reprise-checklist.md` — ['consumer-depends-on-audit']
- `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md` — ['inactive-consumer-non-operational']
- `docs/practices/ux-ui/ux-ui-reprise-method.md` — ['inactive-consumer-non-operational']
- `docs/rex/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `docs/roadmaps/cmp-technical-roadmap.md` — ['audit-only']
- `docs/standards/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `docs/standards/ux-ui-v1-governance-standard.md` — ['audit-only', 'consumer-depends-on-audit']
- `docs/templates/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `docs/templates/architecture/functional-architecture-cycle-closure-template.md` — ['audit-only', 'consumer-depends-on-audit']
- `docs/templates/architecture/functional-architecture-scope-template.md` — ['audit-only', 'consumer-depends-on-audit']
- `docs/templates/architecture/functional-architecture-summary-template.md` — ['audit-only', 'consumer-depends-on-audit']
- `docs/templates/process/bpmn-cycle-closure-template.md` — ['inactive-consumer-non-operational', 'consumer-depends-on-audit']
- `docs/templates/process/bpmn-process-analysis-template.md` — ['inactive-consumer-non-operational', 'consumer-depends-on-audit']
- `docs/templates/process/bpmn-process-scope-template.md` — ['inactive-consumer-non-operational', 'consumer-depends-on-audit']
- `docs/templates/ux-ui/ux-ui-cycle-closure-template.md` — ['audit-only', 'consumer-depends-on-audit']
- `docs/templates/ux-ui/ux-ui-reprise-scope-template.md` — ['audit-only', 'consumer-depends-on-audit']
- `docs/templates/ux-ui/ux-ui-reprise-summary-template.md` — ['audit-only', 'consumer-depends-on-audit']
- `docs/workspace-readiness-report.md` — ['audit-only', 'consumer-depends-on-audit']
- `exports/notion/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `exports/notion/adr.json` — ['inactive-consumer-non-operational', 'no-active-root']
- `exports/notion/knowledge.json` — ['inactive-consumer-non-operational', 'no-active-root']
- `exports/notion/prompts.json` — ['inactive-consumer-non-operational', 'consumer-depends-on-audit']
- `exports/notion/rex.json` — ['inactive-consumer-non-operational', 'no-active-root']
- `method/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `method/complementary/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `method/complementary/controlled-delivery/README.md` — ['mcp-template-readme-generic-consumer', 'inactive-consumer-non-operational']
- `method/complementary/controlled-delivery/controlled-delivery-index-integration.md` — ['audit-only', 'consumer-depends-on-audit']
- ... et 120 autres

## Nouveaux unknown (7)
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-strategy.md`
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-strategy.md`
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md`
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-strategy.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-strategy.md`
- `projects/interv360/02-architecture/architecture-p1-summary.md`
- `projects/interv360/04-delivery/delivery-detailing-plan.md`

## Unknown globaux (25)
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-strategy.md`
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-strategy.md`
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md`
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-strategy.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-strategy.md`
- `projects/interv360/01-cadrage/cadrage-phase-gate.md`
- `projects/interv360/02-architecture/architecture-p1-summary.md`
- `projects/interv360/02-architecture/geo-ai-arbitration-summary.md`
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-project-update.json`
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json`
- `projects/interv360/02-architecture/notion-sync-figma-v1-cmp-project-update.json`
- `projects/interv360/02-architecture/notion-sync-prompt-library-final-lot-cmp-payload.json`
- `projects/interv360/02-architecture/notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json`
- `projects/interv360/02-architecture/notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload.json`
- `projects/interv360/02-architecture/notion-sync-qa-prompt-library-cmp-payload.json`
- `projects/interv360/02-architecture/notion-sync-qa-prompt-library-payload.json`
- `projects/interv360/02-architecture/notion-sync-qa-tester-cmp-project-update.json`
- `projects/interv360/03-design/figma-premium-redesign-brief.md`
- `projects/interv360/04-delivery/api-product-validation.md`
- `projects/interv360/04-delivery/connected-ux-productization.md`
- `projects/interv360/04-delivery/delivery-detailing-plan.md`
- `projects/interv360/04-delivery/product-demo-consolidation.md`
- `projects/interv360/09-roadmap/interv360-backend-persistence-decision.md`
- `projects/interv360/project.json`
- `tools/cmp-001/docs/status-matrix.md`

## Rapport §16
```markdown
## 16. Usage Evidence Graph Review

**Horodatage :** 2026-07-11 19:20 Europe/Paris
**HEAD initial :** `0fb03ceb4c3d71df8940243e052fab1752cd8026`
**Commit substantif :** *(commit `docs: validate repository usage evidence graph` — SHA dans review pack / handoff)*
**HEAD courant PR :** *(review pack / handoff — pas d’auto-référence amend dans ce document)*

### Définition de G

Lignes `usage = operational` avec `usage-review;result=operational;consumer=…` — les **374** operational confirmés de la revue evidence précédente.

### Volume G

**|G| = 374**

### Matrice initiale des consommateurs

| Métrique | Valeur |
|----------|-------:|
| Consommateurs distincts | **109** |
| `.cursor/mcp-templates/README.md` | **50** |
| `…-repository-read-only-audit.md` | **35** |
| `.gitignore` | **6** |
| consommateurs audit/cartographie | **63** |
| cycles longueur 2 | **4** |

**Top consommateurs :** `.cursor/mcp-templates/README.md` (50), read-only-audit (35), `docs/architecture/README.md` (16), workspace final audit (16), `sfia-cycle-routing-guide.md` (15).

### Faux consommateurs rejetés

- **`.cursor/mcp-templates/README.md`** — 47/50 arêtes rejetées (consommateur générique sans finalité MCP/Penpot) ; 3 conservées (cibles penpot/mcp)
- **`.gitignore`** — 6/6 arêtes rejetées (pas consommateur documentaire)
- **read-only-audit** — 35/35 arêtes rejetées (audit-only, pas consommation opérationnelle)
- **audits / cartographies / inventaires** — rejet citation-only et audit-only

### Cycles

4 paires réciproques A ↔ B détectées — aucune utilisée comme seule justification sans racine active.

### Racines actives acceptées

- workflows CI (`.github/workflows/`)
- manifests tooling (`tools/cmp-001/package.json`)
- runtime (`backend/src`, `app/src`, `tools/cmp-001/src`)
- index racine (`README.md`, `docs/README.md`, `method/README.md`)
- `export-manifest.json` → payloads Notion
- `sfia-cycle-routing-guide.md`, `sfia-rules-and-guardrails.md` (avec chaîne documentée)

### Résultats avant / après (graphe)

| Usage | Avant | Après | Δ |
|-------|------:|------:|--:|
| operational | 754 | **577** | −177 |
| non-operational | 273 | **443** | +170 |
| unknown | 18 | **25** | +7 |

### Résultats sur G

| Action | Count |
|--------|------:|
| operational **confirmés** (chaîne → racine active) | **197** |
| rétrogradés **non-operational** | **170** |
| rétrogradés **unknown** | **7** |

### Unknown globaux (25)

- **18** inchangés (revue evidence précédente)
- **7** nouveaux (graphe incomplet — project QA/delivery docs)

Liste des 7 nouveaux unknown : `chantiers360-v2/08-qa-test/inc-0{1..5}/qa-strategy.md`, `interv360/02-architecture/architecture-p1-summary.md`, `interv360/04-delivery/delivery-detailing-plan.md`.

### Exemples chaînes valides

- `exports/notion/export-manifest.json` → payload JSON export Notion (manifest-root)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` → checklist/cycle actif (cycle-routing-root)
- `docker/penpot/README.md` → config Penpot (3 fichiers via MCP README avec finalité penpot)

### Exemples chaînes rejetées

- `.cursor/mcp-templates/README.md` → README projet générique (mcp-readme-generic)
- `read-only-audit.md` → fichier listé dans audit (audit-only)
- `.gitignore` → README (gitignore-invalid)
- boucle documentaire audit ↔ cartographie sans racine RUN

### Preuves inchangées

lifecycle, authority, lots, dispositions : **0 modification**. **18 unknown** précédents : **inchangés**.

---
```

## Large Artifact Protocol
- SHA: `3a88f304b8812ed2ef904cafba5e7f1c0e3f1d0d953fd6d95562dbc79baa7d08`
```
current_path,filename,extension,size_bytes,primary_family,subfamily,lifecycle_status,lifecycle_applicability,authority,usage,scope,project,phase,trajectory,trajectory_role,logical_location_current,logical_location_target,naming_rule_regime,naming_compliance,location_compliance,metadata_profile,content_summary,incoming_references,outgoing_references,duplicate_or_overlap,canonical_candidate,proposed_disposition,proposed_target_path,proposed_target_filename,rationale,risk_level,morris_gate_required,confidence,evidence,reserve_or_question,migration_lot_candidate
```
```
.cursor/mcp-templates/README.md,README.md,md,3733,F13,,candidate,document-lifecycle,reference,non-operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Cursor MCP templates — Penpot **Dossier** : `.cursor/mcp-templates/` **Statut** : Exemples non secrets — configurat,docs/tooling/penpot/penpot-cursor-agent-rules.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-design-agent-architecture.md); ](../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-cursor-agent-rules.md),no,no,keep,.cursor/mcp-templates/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.gitignore`. Usage Graph Review: non-operational — no-active-root.",low,no,medium,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=.cursor/mcp-templates/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.gitignore;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=no-active-root;checks=gitignore-invalid-edge;confidence=medium,"Usage Graph Review: non-operational (no-active-root) — consumer `.gitignore`, edge=gitignore-invalid. Checks: gitignore-invalid-edge. ",lot-E
.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,json,265,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,"{ ""mcpServers"": { ""penpot-self-host"": { ""type"": ""http"", ""url"": ""http://localhost:9001/mcp/stream?userT",.cursor/mcp-templates/README.md; docs/tooling/penpot/penpot-mcp-self-host-rex.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,,no,no,keep,.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-review;result=operational;proof=external-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> .cursor/mcp-templates/penpot-mcp.example.json;relation=mcp-procedure;consumer-status=runtime-root;confidence=high,"Usage Graph Review: operational — chain `.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> .cursor/mcp-templates/penpot-mcp.example.json` (root: projects/interv360/app/src/tests/README.md, runtime-root).",lot-E
.github/workflows/interv360-ci.yml,interv360-ci.yml,yml,1225,F16,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,"name: Interv360 CI on: pull_request: paths: - ""projects/interv360/**"" - "".github/workflows/interv360-",,,no,no,keep,.github/workflows/interv360-ci.yml,interv360-ci.yml,"Regime technical-convention; family F16; D10 compliant (current=tools, target=tools); lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=inferred-role;usage-pass;result=operational;proof=active-config-reference;source=.github/workflows/interv360-ci.yml;confidence=high;checks=repository/tooling configuration artifact,Usage Pass: qualified operational (active-config-reference). Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-I
.gitignore,.gitignore,none,262,F17,,not-applicable,not-applicable,informational,non-operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (none),,,no,no,keep,.gitignore,.gitignore,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference. Usage Evidence Review: operational confirmed via `docker/penpot/README.md`. Usage Graph Review: non-operational — no-active-root.",low,no,medium,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=.gitignore;confidence=high;checks=repository/tooling configuration artifact;usage-review;result=operational;proof=active-config-reference;consumer=docker/penpot/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=no-active-root;checks=gitignore-invalid-edge;confidence=medium,"Usage Graph Review: non-operational (no-active-root) — consumer `docker/penpot/README.md`, edge=gitignore-invalid. Checks: gitignore-invalid-edge. ",lot-E
README.md,README.md,md,3571,F13,,candidate,document-lifecycle,reference,non-operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# SFIA Workspace Workspace local officiel de la **SFIA** (Software Factory & Intelligence Architecture). Ce dépôt est,,,no,no,keep,README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
components/README.md,README.md,md,224,F13,,candidate,document-lifecycle,reference,non-operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Components Espace local pour les notes et artefacts liés aux composants SFIA. Le registre officiel des composants re,,,no,no,keep,components/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=components/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
docker/penpot/.env.example,.env.example,example,400,F17,,not-applicable,not-applicable,informational,non-operational,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (example),,,no,no,keep,docker/penpot/.env.example,.env.example,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference. Usage Evidence Review: operational confirmed via `.gitignore`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=docker/penpot/.env.example;confidence=high;checks=environment/config template for active tooling onboarding;usage-review;result=operational;proof=active-config-reference;consumer=.gitignore;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=gitignore-invalid-edge+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.gitignore`, edge=gitignore-invalid. Checks: gitignore-invalid-edge; inactive-consumer-non-operational. ",lot-E
docker/penpot/README.md,README.md,md,2792,F13,,candidate,document-lifecycle,reference,operational,repository,,,SFIA v2.4,baseline,tools,tools,documentary,compliant,compliant,E,# Penpot Docker — Templates SFIA **Dossier** : `docker/penpot/` **Statut** : Templates sûrs — pas d'installation stan,,](https://help.penpot.app/technical-guide/getting-started/docker/); ](https://help.penpot.app/technical-guide/getting-started/); ](https://help.penpot.app/technical-guide/getting-started/docker/); ](../../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../.cursor/mcp-templates/penpot-mcp.example.json),no,no,keep,docker/penpot/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=tools, target=tools); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`.",low,no,high,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docker/penpot/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> docker/penpot/README.md;relation=mcp-procedure;consumer-status=runtime-root;confidence=high,"Usage Graph Review: operational — chain `.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> docker/penpot/README.md` (root: projects/interv360/app/src/tests/README.md, runtime-root).",lot-E
docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,yml,378,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,# Example override for a local SFIA Penpot setup. # Use only with the official Penpot docker-compose.yml. # Do not treat,docker/penpot/README.md,,no,no,keep,docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=docker/penpot/docker-compose.override.example.yml;confidence=high;checks=environment/config template for active tooling onboarding,Usage Pass: qualified operational (active-config-reference). Heuristic qualification only — not validated.,lot-E
docs/README.md,README.md,md,1104,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Platform Documentation Ce dossier contient la documentation plateforme SFIA. Il est distinct de la méthode acti,,,no,no,keep,docs/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
docs/adr/README.md,README.md,md,131,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# ADR Architecture Decision Records — décisions structurantes tracées. Source Notion : base ADR (`exports/notion/adr.j,,,no,no,keep,docs/adr/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/adr/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
docs/architecture/README.md,README.md,md,1966,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,"# SFIA Architecture Documentation d'architecture SFIA : Domain Model, composants, flux et vues. Source Notion : Compon",,,no,no,keep,docs/architecture/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/architecture/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
docs/architecture/sfia-decision-engine.md,sfia-decision-engine.md,md,56513,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,rename,docs/architecture/sfia-decision-engine.md,YYYY-MM-DD-sfia-decision-engine.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;all=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-decision-engine.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-decision-engine.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-decision-engine.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-D
docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,md,57907,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-delivery-pipeline.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-delivery-pipeline.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-delivery-pipeline.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
docs/architecture/sfia-domain-model.md,sfia-domain-model.md,md,26327,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-domain-model.md,sfia-domain-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;proof=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-domain-model.md;confidence=high;checks=validated doc referenced by 16 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-domain-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-domain-model.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
docs/architecture/sfia-meta-model.md,sfia-meta-model.md,md,45992,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-meta-model.md,sfia-meta-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+canonical-source;all=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-meta-model.md;confidence=high;checks=validated doc referenced by 15 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-meta-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-meta-model.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,md,63116,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-platform-architecture.md;confidence=high;checks=validated doc referenced by 19 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-platform-architecture.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-platform-architecture.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,md,41225,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-repository-blueprint.md;confidence=high;checks=validated doc referenced by 27 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-repository-blueprint.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-repository-blueprint.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
docs/foundation/README.md,README.md,md,208,F13,,archived,document-lifecycle,reference,non-operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,E,"# Foundation Principes fondateurs, gouvernance et cadre de la plateforme SFIA. Source Notion : Knowledge Articles, Sta",,,no,no,archive,docs/foundation/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective archived. Usage Pass: operational per explicit-current-use. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-pass-L;trajectory-v1.1-historical;readme-index-role;git=586671c init: create SFIA workspace structure;usage-pass;result=operational;proof=explicit-current-use;source=docs/foundation/README.md;confidence=high;checks=archive disposition but 78 active consumer(s);usage-review;result=operational;proof=explicit-current-use;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,md,10488,F06,,validated,document-lifecycle,unknown,operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,keep,docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/foundation/sfia-engineering-principles.md;confidence=high;checks=validated doc referenced by 48 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/foundation/sfia-engineering-principles.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/foundation/sfia-engineering-principles.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
```
```
tools/cmp-001/src/schemas/template.schema.json,template.schema.json,json,642,F15,,draft,technical-artifact-lifecycle,unknown,operational,tooling,,,SFIA v2.4,baseline,tools,tools,unknown,unknown,compliant,F,"{ ""$schema"": ""https://json-schema.org/draft/2020-12/schema"", ""title"": ""Template"", ""type"": ""object"", ""properties""",,,no,no,investigate,tools/cmp-001/src/schemas/template.schema.json,template.schema.json,"Regime unknown; family F15; D10 compliant (current=tools, target=tools); D12 unknown.; lifecycle-corrective draft. Usage Pass: operational per manifest-reference.",low,no,high,path+content-sample+regime=unknown+incoming=0;usage-pass;result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/template.schema.json;confidence=high;checks=schema consumed by CMP tooling,Usage Pass: qualified operational (manifest-reference). Naming rule regime uncertain — investigate before rename. Documentary naming status uncertain. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createADR.js,createADR.js,js,111,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createADR.js,createADR.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createADR.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createComponent.js,createComponent.js,js,123,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createComponent.js,createComponent.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createComponent.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createExperiment.js,createExperiment.js,js,125,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createExperiment.js,createExperiment.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createExperiment.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createKPI.js,createKPI.js,js,111,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createKPI.js,createKPI.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createKPI.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createKnowledgeArticle.js,createKnowledgeArticle.js,js,130,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createKnowledgeArticle.js,createKnowledgeArticle.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createKnowledgeArticle.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createObject.js,createObject.js,js,826,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createObject.js,createObject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createObject.js;confidence=high;checks=code artifact with 11 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createProject.js,createProject.js,js,119,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createProject.js,createProject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createProject.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createPrompt.js,createPrompt.js,js,117,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createPrompt.js,createPrompt.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createPrompt.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createREX.js,createREX.js,js,111,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createREX.js,createREX.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createREX.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createReferencePage.js,createReferencePage.js,js,132,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createReferencePage.js,createReferencePage.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createReferencePage.js;confidence=high;checks=code artifact with 1 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createStandard.js,createStandard.js,js,121,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createStandard.js,createStandard.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createStandard.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createTemplate.js,createTemplate.js,js,121,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createTemplate.js,createTemplate.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createTemplate.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/discover.js,discover.js,js,5562,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/discover.js,discover.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/discover.js;confidence=high;checks=code artifact with 1 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/export.js,export.js,js,7318,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/export.js,export.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/export.js;confidence=high;checks=code artifact with 1 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateKnowledgeArticle.js,updateKnowledgeArticle.js,js,130,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateKnowledgeArticle.js,updateKnowledgeArticle.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/updateKnowledgeArticle.js;confidence=high;checks=code artifact with 1 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateObject.js,updateObject.js,js,735,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateObject.js,updateObject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/updateObject.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateProject.js,updateProject.js,js,119,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateProject.js,updateProject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/updateProject.js;confidence=high;checks=code artifact with 1 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/validate.js,validate.js,js,3691,F17,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/src/validate.js,validate.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/validate.js;confidence=high;checks=code artifact with 4 active importer(s)+application/tooling source,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,js,4453,F17,,validated,technical-artifact-lifecycle,informational,non-operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective validated. Usage Pass: operational per runtime-reference. Usage Evidence Review: operational confirmed via `tools/cmp-001/CHANGELOG.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=technical-convention+incoming=1; convention=dot-separated tool convention;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/tests/run-all-tests.js;confidence=high;checks=technical artifact with active consumer;usage-review;result=operational;proof=runtime-reference;consumer=tools/cmp-001/CHANGELOG.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `tools/cmp-001/CHANGELOG.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-I
```

## Lignes G modifiées
- `.cursor/mcp-templates/README.md`: **non-operational** (downgrade_non_operational)
- `.cursor/mcp-templates/penpot-mcp.example.json`: **operational** (confirmed)
- `.gitignore`: **non-operational** (downgrade_non_operational)
- `README.md`: **non-operational** (downgrade_non_operational)
- `components/README.md`: **non-operational** (downgrade_non_operational)
- `docker/penpot/.env.example`: **non-operational** (downgrade_non_operational)
- `docker/penpot/README.md`: **operational** (confirmed)
- `docs/README.md`: **non-operational** (downgrade_non_operational)
- `docs/adr/README.md`: **non-operational** (downgrade_non_operational)
- `docs/architecture/README.md`: **non-operational** (downgrade_non_operational)
- `docs/architecture/sfia-decision-engine.md`: **operational** (confirmed)
- `docs/architecture/sfia-delivery-pipeline.md`: **operational** (confirmed)
- `docs/architecture/sfia-domain-model.md`: **operational** (confirmed)
- `docs/architecture/sfia-meta-model.md`: **operational** (confirmed)
- `docs/architecture/sfia-platform-architecture.md`: **operational** (confirmed)
- `docs/architecture/sfia-repository-blueprint.md`: **operational** (confirmed)
- `docs/foundation/README.md`: **non-operational** (downgrade_non_operational)
- `docs/foundation/sfia-engineering-principles.md`: **operational** (confirmed)
- `docs/knowledge/README.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/README.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/architecture/functional-architecture-checklist.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/architecture/functional-architecture-deliverables-standard.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/architecture/functional-architecture-method.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/methods-structure-check.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/process/bpmn-deliverables-standard.md`: **operational** (confirmed)
- `docs/practices/process/bpmn-integration-checklist.md`: **operational** (confirmed)
- `docs/practices/process/bpmn-method-cycle-closure.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/process/bpmn-method-integration-audit.md`: **operational** (confirmed)
- `docs/practices/process/bpmn-process-modeling-method.md`: **operational** (confirmed)
- `docs/practices/roles/README.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/roles/architect-method.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/roles/business-analyst-method.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/roles/product-owner-method.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/roles/project-manager-method.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/roles/qa-tester-method.md`: **operational** (confirmed)
- `docs/practices/roles/rssi-method.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/roles/ux-ui-designer-method.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/ux-ui/ux-ui-reprise-checklist.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md`: **non-operational** (downgrade_non_operational)
- `docs/practices/ux-ui/ux-ui-reprise-method.md`: **non-operational** (downgrade_non_operational)
- `docs/rex/README.md`: **non-operational** (downgrade_non_operational)
- `docs/roadmaps/cmp-technical-roadmap.md`: **non-operational** (downgrade_non_operational)
- `docs/standards/README.md`: **non-operational** (downgrade_non_operational)
- `docs/standards/ux-ui-v1-governance-standard.md`: **non-operational** (downgrade_non_operational)
- `docs/templates/README.md`: **non-operational** (downgrade_non_operational)
- `docs/templates/architecture/functional-architecture-cycle-closure-template.md`: **non-operational** (downgrade_non_operational)
- `docs/templates/architecture/functional-architecture-scope-template.md`: **non-operational** (downgrade_non_operational)
- `docs/templates/architecture/functional-architecture-summary-template.md`: **non-operational** (downgrade_non_operational)
- `docs/templates/process/bpmn-cycle-closure-template.md`: **non-operational** (downgrade_non_operational)
- `docs/templates/process/bpmn-process-analysis-template.md`: **non-operational** (downgrade_non_operational)
- `docs/templates/process/bpmn-process-scope-template.md`: **non-operational** (downgrade_non_operational)
- `docs/templates/tooling/penpot/README.md`: **operational** (confirmed)
- `docs/templates/ux-ui/ux-ui-cycle-closure-template.md`: **non-operational** (downgrade_non_operational)
- `docs/templates/ux-ui/ux-ui-reprise-scope-template.md`: **non-operational** (downgrade_non_operational)
- `docs/templates/ux-ui/ux-ui-reprise-summary-template.md`: **non-operational** (downgrade_non_operational)
- `docs/tooling/penpot/penpot-sfia-method-integration.md`: **operational** (confirmed)
- `docs/workspace-readiness-report.md`: **non-operational** (downgrade_non_operational)
- `exports/notion/README.md`: **non-operational** (downgrade_non_operational)
- `exports/notion/adr.json`: **non-operational** (downgrade_non_operational)
- `exports/notion/components.json`: **operational** (confirmed)
- `exports/notion/experiments.json`: **operational** (confirmed)
- `exports/notion/knowledge.json`: **non-operational** (downgrade_non_operational)
- `exports/notion/kpi.json`: **operational** (confirmed)
- `exports/notion/projects.json`: **operational** (confirmed)
- `exports/notion/prompts.json`: **non-operational** (downgrade_non_operational)
- `exports/notion/rex.json`: **non-operational** (downgrade_non_operational)
- `exports/notion/standards.json`: **operational** (confirmed)
- `exports/notion/templates.json`: **operational** (confirmed)
- `method/README.md`: **non-operational** (downgrade_non_operational)
- `method/complementary/README.md`: **non-operational** (downgrade_non_operational)
- `method/complementary/controlled-delivery/README.md`: **non-operational** (downgrade_non_operational)
- `method/complementary/controlled-delivery/controlled-delivery-checklist.md`: **operational** (confirmed)
- `method/complementary/controlled-delivery/controlled-delivery-index-integration.md`: **non-operational** (downgrade_non_operational)
- `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md`: **operational** (confirmed)
- `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md`: **operational** (confirmed)
- `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md`: **non-operational** (downgrade_non_operational)
- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md`: **operational** (confirmed)
- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md`: **operational** (confirmed)
- `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md`: **operational** (confirmed)
- `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md`: **operational** (confirmed)
- `method/complementary/controlled-delivery/controlled-delivery-standard.md`: **operational** (confirmed)
- `method/complementary/controlled-delivery/controlled-delivery-template.md`: **operational** (confirmed)
- `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md`: **operational** (confirmed)
- `method/sfia-fast-track/README.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/audit-rex/README.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/audit-rex/interv360-application-rex.md`: **operational** (confirmed)
- `method/sfia-fast-track/automation/README.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/automation/sfia-automation-architecture.md`: **operational** (confirmed)
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`: **operational** (confirmed)
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`: **operational** (confirmed)
- `method/sfia-fast-track/automation/sfia-validation-engine.md`: **operational** (confirmed)
- `method/sfia-fast-track/checklists/README.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/checklists/guardrails-checklist.md`: **operational** (confirmed)
- `method/sfia-fast-track/checklists/notion-publication-checklist.md`: **operational** (confirmed)
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`: **operational** (confirmed)
- `method/sfia-fast-track/checklists/validation-checklist.md`: **operational** (confirmed)
- `method/sfia-fast-track/core/README.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/core/sfia-architecture-standards.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`: **operational** (confirmed)
- `method/sfia-fast-track/core/sfia-consolidation-roadmap.md`: **operational** (confirmed)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/core/sfia-global-capitalization.md`: **operational** (confirmed)
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`: **operational** (confirmed)
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`: **operational** (confirmed)
- `method/sfia-fast-track/core/sfia-rules-update.md`: **operational** (confirmed)
- `method/sfia-fast-track/cycles/README.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/cycles/interv360-final-capitalization.md`: **operational** (confirmed)
- `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/README.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/README.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/README.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-post-merge-status.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/inventory-complementary-methods.md-list.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/inventory-interv360-docs.md-list.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/inventory-platform-docs.md-list.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/inventory-platform-templates.md-list.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/inventory-practices.md-list.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/inventory-prompts.md-list.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/inventory-sfia-fast-track.md-list.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4.1-documentation-status-promotion-report.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/notion-publication-plan.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/notion-target-content-map.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-engine-design.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-all.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-depth3.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-docs-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-exports-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-interv360-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-markdown-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-method-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-prompts-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-tools-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/workspace-audit/post-cleanup-all-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/post-cleanup-markdown-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md`: **operational** (confirmed)
- `method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-all.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-depth3.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/round-2/docs-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/round-2/exports-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/round-2/interv360-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/round-2/method-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/round-2/prompts-files.txt`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md`: **operational** (confirmed)
- `method/sfia-fast-track/templates/audit-template.md`: **operational** (confirmed)
- `method/sfia-fast-track/templates/cycle-template.md`: **operational** (confirmed)
- `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md`: **operational** (confirmed)
- `method/sfia-fast-track/templates/post-merge-template.md`: **operational** (confirmed)
- `method/sfia-fast-track/templates/pr-body-template.md`: **operational** (confirmed)
- `method/sfia-fast-track/templates/rex-template.md`: **operational** (confirmed)
- `method/sfia-fast-track/ui/README.md`: **non-operational** (downgrade_non_operational)
- `method/sfia-fast-track/ui/figma-design-first-ui-method.md`: **operational** (confirmed)
- `projects/README.md`: **non-operational** (downgrade_non_operational)
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md`: **operational** (confirmed)
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md`: **operational** (confirmed)
- `projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md`: **operational** (confirmed)
- `projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md`: **operational** (confirmed)
- `projects/chantiers360-v2/04-design/captures/01-dashboard-cockpit-premium.png`: **operational** (confirmed)
- `projects/chantiers360-v2/04-design/captures/02-fiche-chantier-taches.png`: **operational** (confirmed)
- `projects/chantiers360-v2/04-design/captures/03-fiche-chantier-reserves.png`: **operational** (confirmed)
- `projects/chantiers360-v2/04-design/captures/04-creation-chantier.png`: **operational** (confirmed)
- `projects/chantiers360-v2/04-design/figma-review-checklist.md`: **operational** (confirmed)
- `projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md`: **operational** (confirmed)
- `projects/chantiers360-v2/06-figma-fidelity-spike/figma-reference.md`: **operational** (confirmed)
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md`: **operational** (confirmed)
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md`: **operational** (confirmed)
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md`: **operational** (confirmed)
- `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-implementation-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-implementation-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md`: **operational** (confirmed)
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-strategy.md`: **unknown** (downgrade_unknown)
- `projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-strategy.md`: **unknown** (downgrade_unknown)
- `projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md`: **unknown** (downgrade_unknown)
- `projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-strategy.md`: **unknown** (downgrade_unknown)
- `projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-strategy.md`: **unknown** (downgrade_unknown)
- `projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md`: **operational** (confirmed)
- `projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/09-capitalization/README.md`: **non-operational** (downgrade_non_operational)
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-final-pilot-rex-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md`: **operational** (confirmed)
- `projects/chantiers360-v2/09-capitalization/v0-vs-sfia-v2-methodological-comparison.md`: **operational** (confirmed)
- `projects/chantiers360-v2/README.md`: **non-operational** (downgrade_non_operational)
- `projects/chantiers360-v2/app/.env.example`: **non-operational** (downgrade_non_operational)
- `projects/chantiers360-v2/app/.env.test.example`: **non-operational** (downgrade_non_operational)
- `projects/chantiers360-v2/app/.gitignore`: **non-operational** (downgrade_non_operational)
- `projects/interv360/00-intake/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/00-intake/interv360-sfia-test-strategy.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/00-intake/project-intake.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/01-cadrage/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/01-cadrage/adr-candidates.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/01-cadrage/notion-sync-payload.json`: **non-operational** (downgrade_non_operational)
- `projects/interv360/01-cadrage/role-methods-framing.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/01-cadrage/role-methods-review.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/01-cadrage/ux-ui-brief-validation.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/01-cadrage/ux-ui-brief.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/02-architecture/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/architecture-p1-summary.md`: **unknown** (downgrade_unknown)
- `projects/interv360/02-architecture/architecture-p2-design-impact-summary.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/figma-first-draft-screens/05-dashboard-sav.png`: **operational** (confirmed)
- `projects/interv360/02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png`: **operational** (confirmed)
- `projects/interv360/02-architecture/figma-first-draft-screens/08-planning-semaine.png`: **operational** (confirmed)
- `projects/interv360/02-architecture/figma-first-draft-screens/09-fiche-intervention-mobile.png`: **operational** (confirmed)
- `projects/interv360/02-architecture/figma-first-draft-screens/10-compte-rendu-mobile.png`: **operational** (confirmed)
- `projects/interv360/02-architecture/figma-first-draft-screens/11-suivi-erreurs-integration.png`: **operational** (confirmed)
- `projects/interv360/02-architecture/figma-first-draft-screens/12-vue-dirigeant.png`: **operational** (confirmed)
- `projects/interv360/02-architecture/mvp-clarifications-summary.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json`: **non-operational** (downgrade_non_operational)
- `projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json`: **non-operational** (downgrade_non_operational)
- `projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.json`: **non-operational** (downgrade_non_operational)
- `projects/interv360/02-architecture/notion-sync-figma-v1-closure-payload.json`: **non-operational** (downgrade_non_operational)
- `projects/interv360/02-architecture/notion-sync-qa-tester-governance-payload.json`: **non-operational** (downgrade_non_operational)
- `projects/interv360/02-architecture/rules-rg-prioritization-summary.md`: **operational** (confirmed)
- `projects/interv360/02-architecture/status-mapping-summary.md`: **operational** (confirmed)
- `projects/interv360/03-design/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/03-design/design-v2-cycle-opening.md`: **operational** (confirmed)
- `projects/interv360/03-design/penpot-application-frame-template.md`: **operational** (confirmed)
- `projects/interv360/03-design/penpot-first-screen-v2-visual-instructions.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/auth-user-switcher.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/batch-01-demo-credibility.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/04-delivery/batch-03-demo-readiness-package.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/delivery-detailing-plan.md`: **unknown** (downgrade_unknown)
- `projects/interv360/04-delivery/demo-feedback-review.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/demo-mvp-closure.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/demo-polish.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/demo-presentation-feedback.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/demo-presentation-review.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/end-to-end-demo-hardening.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/frontend-api-connection-framing.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/frontend-api-connection.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/implementation-go-no-go.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/04-delivery/implementation-planning-plan.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/premium-design-system.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/product-industrialization.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/product-ux-finalization.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/realization-preparation-plan.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/realization-start-plan.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/technical-design-plan.md`: **operational** (confirmed)
- `projects/interv360/04-delivery/workflow-light-extension.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/05-release/mvp-release-readiness.md`: **operational** (confirmed)
- `projects/interv360/06-audit-rex/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/07-documentation/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/08-presentation/interv360-demo-presentation-package.md`: **operational** (confirmed)
- `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md`: **operational** (confirmed)
- `projects/interv360/09-roadmap/interv360-next-product-axis.md`: **operational** (confirmed)
- `projects/interv360/09-roadmap/interv360-product-industrialization-framing.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/09-roadmap/interv360-product-roadmap-after-role-simulation.md`: **operational** (confirmed)
- `projects/interv360/09-roadmap/interv360-product-roadmap-next.md`: **operational** (confirmed)
- `projects/interv360/09-roadmap/interv360-role-simulation-review.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/09-roadmap/interv360-workflow-extension-framing.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/app/.env.example`: **non-operational** (downgrade_non_operational)
- `projects/interv360/app/.gitignore`: **non-operational** (downgrade_non_operational)
- `projects/interv360/app/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/app/src/data/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/app/src/domain/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/app/src/seed/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/app/src/tests/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/app/src/ui/README.md`: **non-operational** (downgrade_non_operational)
- `projects/interv360/backend/.env.example`: **non-operational** (downgrade_non_operational)
- `projects/interv360/backend/.gitignore`: **non-operational** (downgrade_non_operational)
- `projects/interv360/backend/README.md`: **non-operational** (downgrade_non_operational)
- `prompts/README.md`: **non-operational** (downgrade_non_operational)
- `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md`: **non-operational** (downgrade_non_operational)
- `prompts/architecture/functional-architecture-prompt-family.md`: **non-operational** (downgrade_non_operational)
- `prompts/bpmn/bpmn-prompt-family.md`: **non-operational** (downgrade_non_operational)
- `prompts/qa/delivery-qa-test-prompt-family.md`: **operational** (confirmed)
- `prompts/qa/qa-tester-prompt-family.md`: **operational** (confirmed)
- `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md`: **non-operational** (downgrade_non_operational)
- `prompts/templates/01-create-foundation-document.md`: **operational** (confirmed)
- `prompts/templates/02-update-document-v1-1.md`: **operational** (confirmed)
- `prompts/templates/03-create-operational-checklist.md`: **operational** (confirmed)
- `prompts/templates/04-validate-cursor-result.md`: **operational** (confirmed)
- `prompts/templates/05-validate-pr-readiness.md`: **operational** (confirmed)
- `prompts/templates/06-prepare-pr-summary.md`: **operational** (confirmed)
- `prompts/templates/07-write-post-merge-status.md`: **operational** (confirmed)
- `prompts/templates/08-capitalize-method-asset.md`: **operational** (confirmed)
- `prompts/templates/09-prepare-notion-mapping.md`: **operational** (confirmed)
- `prompts/templates/10-perform-safe-repository-cleanup.md`: **operational** (confirmed)
- `prompts/templates/README.md`: **non-operational** (downgrade_non_operational)
- `prompts/templates/sfia-cycle-execution-template.md`: **operational** (confirmed)
- `prompts/templates/sfia-prompt-templates-context-pack.md`: **non-operational** (downgrade_non_operational)
- `prompts/tooling/penpot/penpot-design-agent-prompt-family.md`: **operational** (confirmed)
- `prompts/ux-ui/figma-fidelity-gate-prompt-family.md`: **non-operational** (downgrade_non_operational)
- `prompts/ux-ui/ux-ui-reprise-prompt-family.md`: **operational** (confirmed)
- `tools/cmp-001/.env.example`: **non-operational** (downgrade_non_operational)
- `tools/cmp-001/.gitignore`: **non-operational** (downgrade_non_operational)
- `tools/cmp-001/CHANGELOG.md`: **non-operational** (downgrade_non_operational)
- `tools/cmp-001/README.md`: **non-operational** (downgrade_non_operational)
- `tools/cmp-001/ROADMAP.md`: **non-operational** (downgrade_non_operational)
- `tools/cmp-001/WORKSPACE.md`: **non-operational** (downgrade_non_operational)
- `tools/cmp-001/config/sfia-v1-1-workspace.config.json`: **non-operational** (downgrade_non_operational)
- `tools/cmp-001/docs/components-database-evolution.md`: **non-operational** (downgrade_non_operational)
- `tools/cmp-001/package-lock.json`: **non-operational** (downgrade_non_operational)
- `tools/cmp-001/tests/run-all-tests.js`: **non-operational** (downgrade_non_operational)

## Verdict
- USAGE EVIDENCE GRAPH REVIEW COMPLETE
- TARGET GRAPH SET = 374
- ACTIVE ROOT REQUIRED FOR OPERATIONAL
- PREVIOUS 18 UNKNOWNS UNCHANGED
- NO USAGE CHANGE OUTSIDE G
