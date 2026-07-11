# SFIA v2.6 — Review Pack (full) — Usage Evidence Corrective Review

**Date/heure :** 2026-07-11 18:55 CEST
**Cycle :** Validation corrective de cartographie — Usage Evidence Review
**Profil :** Critical
**Branche :** `audit/sfia-v2.6-repository-cartography`
**HEAD initial :** `47d826915b87c33d7e2bdc1794c224999e9abd03`
**HEAD final :** `0f423ad09f69ea532b61acb231c9e903c585fd53`
**synthesis only :** no

## Local Git Truth Check
- HEAD initial verified
- PR #165 OPEN

## Définition de C
- **|C| = 414**
- self_source: 367
- no_external_evidence: 413
- technical excluded: 380

## Usage avant/après review
| | Avant | Après |
|---|------:|------:|
| operational | 794 | **754** |
| non-operational | 251 | **273** |
| unknown | 0 | **18** |

## Résultats C
- confirmed operational: **374**
- downgrade non-operational: **22**
- downgrade unknown: **18**

## Preuves Lifecycle/Authority/lots inchangés
- lifecycle_status: **0** modifiés
- lifecycle_applicability: **0** modifiés
- authority: **0** modifiés
- migration_lot_candidate: **0** modifiés
- proposed_disposition: **0** modifiés

## Liste complète C — résultat final
- `.cursor/mcp-templates/README.md` → **operational** consumer=`.gitignore`
- `.cursor/mcp-templates/penpot-mcp.example.json` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `.gitignore` → **operational** consumer=`docker/penpot/README.md`
- `README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `components/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docker/penpot/.env.example` → **operational** consumer=`.gitignore`
- `docker/penpot/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/adr/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/architecture/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/architecture/sfia-decision-engine.md` → **operational** consumer=`docs/architecture/README.md`
- `docs/architecture/sfia-delivery-pipeline.md` → **operational** consumer=`docs/architecture/README.md`
- `docs/architecture/sfia-domain-model.md` → **operational** consumer=`docs/architecture/README.md`
- `docs/architecture/sfia-meta-model.md` → **operational** consumer=`docs/architecture/README.md`
- `docs/architecture/sfia-platform-architecture.md` → **operational** consumer=`docs/architecture/README.md`
- `docs/architecture/sfia-repository-blueprint.md` → **operational** consumer=`docs/architecture/README.md`
- `docs/foundation/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/foundation/sfia-engineering-principles.md` → **operational** consumer=`docs/architecture/README.md`
- `docs/knowledge/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/practices/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/practices/architecture/functional-architecture-checklist.md` → **operational** consumer=`docs/templates/architecture/functional-architecture-cycle-closure-template.md`
- `docs/practices/architecture/functional-architecture-deliverables-standard.md` → **operational** consumer=`docs/practices/architecture/functional-architecture-checklist.md`
- `docs/practices/architecture/functional-architecture-method.md` → **operational** consumer=`docs/practices/architecture/functional-architecture-checklist.md`
- `docs/practices/methods-structure-check.md` → **operational** consumer=`docs/practices/process/bpmn-method-cycle-closure.md`
- `docs/practices/process/bpmn-deliverables-standard.md` → **operational** consumer=`docs/practices/process/bpmn-integration-checklist.md`
- `docs/practices/process/bpmn-integration-checklist.md` → **operational** consumer=`docs/practices/process/bpmn-deliverables-standard.md`
- `docs/practices/process/bpmn-method-cycle-closure.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `docs/practices/process/bpmn-method-integration-audit.md` → **operational** consumer=`docs/practices/process/bpmn-deliverables-standard.md`
- `docs/practices/process/bpmn-process-modeling-method.md` → **operational** consumer=`docs/practices/process/bpmn-deliverables-standard.md`
- `docs/practices/roles/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/practices/roles/architect-method.md` → **operational** consumer=`docs/practices/methods-structure-check.md`
- `docs/practices/roles/business-analyst-method.md` → **operational** consumer=`docs/practices/methods-structure-check.md`
- `docs/practices/roles/product-owner-method.md` → **operational** consumer=`docs/practices/methods-structure-check.md`
- `docs/practices/roles/project-manager-method.md` → **operational** consumer=`docs/practices/methods-structure-check.md`
- `docs/practices/roles/qa-tester-method.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
- `docs/practices/roles/rssi-method.md` → **operational** consumer=`docs/practices/methods-structure-check.md`
- `docs/practices/roles/ux-ui-designer-method.md` → **operational** consumer=`docs/practices/methods-structure-check.md`
- `docs/practices/ux-ui/ux-ui-reprise-checklist.md` → **operational** consumer=`docs/templates/ux-ui/ux-ui-cycle-closure-template.md`
- `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md` → **operational** consumer=`docs/practices/ux-ui/ux-ui-reprise-checklist.md`
- `docs/practices/ux-ui/ux-ui-reprise-method.md` → **operational** consumer=`docs/practices/ux-ui/ux-ui-reprise-checklist.md`
- `docs/rex/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/roadmaps/cmp-technical-roadmap.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
- `docs/standards/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/standards/ux-ui-v1-governance-standard.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `docs/templates/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/templates/architecture/functional-architecture-cycle-closure-template.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `docs/templates/architecture/functional-architecture-scope-template.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `docs/templates/architecture/functional-architecture-summary-template.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `docs/templates/process/bpmn-cycle-closure-template.md` → **operational** consumer=`docs/practices/process/bpmn-method-cycle-closure.md`
- `docs/templates/process/bpmn-process-analysis-template.md` → **operational** consumer=`docs/practices/process/bpmn-method-cycle-closure.md`
- `docs/templates/process/bpmn-process-scope-template.md` → **operational** consumer=`docs/practices/process/bpmn-method-cycle-closure.md`
- `docs/templates/tooling/penpot/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `docs/templates/ux-ui/ux-ui-cycle-closure-template.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `docs/templates/ux-ui/ux-ui-reprise-scope-template.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `docs/templates/ux-ui/ux-ui-reprise-summary-template.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `docs/tooling/mcp/sfia-mcp-v2-architecture.md` → **non-operational**
- `docs/tooling/penpot/penpot-sfia-method-integration.md` → **operational** consumer=`docs/templates/tooling/penpot/README.md`
- `docs/workspace-readiness-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `exports/notion/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `exports/notion/adr.json` → **operational** consumer=`docs/adr/README.md`
- `exports/notion/components.json` → **operational** consumer=`exports/notion/export-manifest.json`
- `exports/notion/experiments.json` → **operational** consumer=`exports/notion/export-manifest.json`
- `exports/notion/knowledge.json` → **operational** consumer=`docs/knowledge/README.md`
- `exports/notion/kpi.json` → **operational** consumer=`exports/notion/export-manifest.json`
- `exports/notion/projects.json` → **operational** consumer=`exports/notion/export-manifest.json`
- `exports/notion/prompts.json` → **operational** consumer=`docs/roadmaps/cmp-technical-roadmap.md`
- `exports/notion/rex.json` → **operational** consumer=`docs/rex/README.md`
- `exports/notion/standards.json` → **operational** consumer=`exports/notion/export-manifest.json`
- `exports/notion/templates.json` → **operational** consumer=`exports/notion/export-manifest.json`
- `method/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/complementary/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/complementary/controlled-delivery/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/complementary/controlled-delivery/controlled-delivery-checklist.md` → **operational** consumer=`method/complementary/controlled-delivery/README.md`
- `method/complementary/controlled-delivery/controlled-delivery-index-integration.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md` → **operational** consumer=`method/complementary/controlled-delivery/README.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md` → **operational** consumer=`method/complementary/controlled-delivery/README.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md` → **operational** consumer=`method/complementary/controlled-delivery/controlled-delivery-index-integration.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md` → **operational** consumer=`method/complementary/controlled-delivery/README.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md` → **operational** consumer=`method/complementary/controlled-delivery/README.md`
- `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md` → **operational** consumer=`method/complementary/controlled-delivery/README.md`
- `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md` → **operational** consumer=`method/complementary/controlled-delivery/README.md`
- `method/complementary/controlled-delivery/controlled-delivery-standard.md` → **operational** consumer=`method/complementary/controlled-delivery/README.md`
- `method/complementary/controlled-delivery/controlled-delivery-template.md` → **operational** consumer=`method/complementary/controlled-delivery/README.md`
- `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md` → **operational** consumer=`method/complementary/controlled-delivery/README.md`
- `method/sfia-fast-track/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/sfia-fast-track/audit-rex/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/sfia-fast-track/audit-rex/interv360-application-rex.md` → **operational** consumer=`docs/architecture/sfia-delivery-pipeline.md`
- `method/sfia-fast-track/automation/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/sfia-fast-track/automation/sfia-automation-architecture.md` → **operational** consumer=`docs/architecture/README.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` → **operational** consumer=`docs/architecture/README.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` → **operational** consumer=`docs/architecture/README.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md` → **operational** consumer=`docs/architecture/README.md`
- `method/sfia-fast-track/checklists/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/sfia-fast-track/checklists/guardrails-checklist.md` → **operational** consumer=`docs/architecture/sfia-delivery-pipeline.md`
- `method/sfia-fast-track/checklists/notion-publication-checklist.md` → **operational** consumer=`docs/architecture/sfia-delivery-pipeline.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md` → **operational** consumer=`docs/architecture/README.md`
- `method/sfia-fast-track/checklists/validation-checklist.md` → **operational** consumer=`docs/architecture/README.md`
- `method/sfia-fast-track/core/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/sfia-fast-track/core/sfia-architecture-standards.md` → **operational** consumer=`docs/standards/README.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` → **operational** consumer=`docs/architecture/README.md`
- `method/sfia-fast-track/core/sfia-consolidation-roadmap.md` → **operational** consumer=`method/sfia-fast-track/README.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` → **operational** consumer=`docs/tooling/mcp/sfia-mcp-v2-architecture.md`
- `method/sfia-fast-track/core/sfia-global-capitalization.md` → **operational** consumer=`method/sfia-fast-track/README.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md` → **operational** consumer=`docs/architecture/README.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` → **operational** consumer=`docs/architecture/README.md`
- `method/sfia-fast-track/core/sfia-rules-update.md` → **operational** consumer=`docs/architecture/sfia-delivery-pipeline.md`
- `method/sfia-fast-track/cycles/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/sfia-fast-track/cycles/interv360-final-capitalization.md` → **operational** consumer=`method/sfia-fast-track/README.md`
- `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md` → **operational** consumer=`method/sfia-fast-track/README.md`
- `method/sfia-fast-track/documentation/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-post-merge-status.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
- `method/sfia-fast-track/documentation/capitalization/inventory-complementary-methods.md-list.txt` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/inventory-interv360-docs.md-list.txt` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/inventory-platform-docs.md-list.txt` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/inventory-platform-templates.md-list.txt` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/inventory-practices.md-list.txt` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/inventory-prompts.md-list.txt` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/inventory-sfia-fast-track.md-list.txt` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` → **operational** consumer=`docs/tooling/mcp/sfia-mcp-v2-architecture.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` → **operational** consumer=`method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md` → **operational** consumer=`method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md` → **operational** consumer=`method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md` → **operational** consumer=`method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md` → **operational** consumer=`method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md` → **operational** consumer=`method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4.1-documentation-status-promotion-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/notion-publication-plan.md` → **operational** consumer=`method/sfia-fast-track/README.md`
- `method/sfia-fast-track/documentation/notion-target-content-map.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-engine-design.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-all.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-depth3.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-docs-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-exports-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-interv360-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-markdown-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-method-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-prompts-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-tools-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-all-files.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-directory-map.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-markdown-files.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `method/sfia-fast-track/documentation/workspace-audit/post-cleanup-all-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md`
- `method/sfia-fast-track/documentation/workspace-audit/post-cleanup-markdown-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md`
- `method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-all-files.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth2.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth4.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-docs-files.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-markdown-files.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-method-files.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-projects-files.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-all.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-depth3.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/docs-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/exports-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/interv360-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/markdown-files-all.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/round-2/method-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/post-round-2-markdown-files.txt` → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/round-2/prompts-files.txt` → **operational** consumer=`method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-consolidation-roadmap.md`
- `method/sfia-fast-track/templates/audit-template.md` → **operational** consumer=`method/sfia-fast-track/README.md`
- `method/sfia-fast-track/templates/cycle-template.md` → **operational** consumer=`method/sfia-fast-track/README.md`
- `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md` → **operational** consumer=`method/sfia-fast-track/README.md`
- `method/sfia-fast-track/templates/post-merge-template.md` → **operational** consumer=`docs/architecture/sfia-delivery-pipeline.md`
- `method/sfia-fast-track/templates/pr-body-template.md` → **operational** consumer=`docs/architecture/sfia-delivery-pipeline.md`
- `method/sfia-fast-track/templates/rex-template.md` → **operational** consumer=`method/sfia-fast-track/README.md`
- `method/sfia-fast-track/ui/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `method/sfia-fast-track/ui/figma-design-first-ui-method.md` → **operational** consumer=`method/sfia-fast-track/README.md`
- `projects/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`
- `projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md` → **operational** consumer=`projects/chantiers360-v2/00-framing/project-framing.md`
- `projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md` → **operational** consumer=`projects/chantiers360-v2/00-framing/project-framing.md`
- `projects/chantiers360-v2/04-design/captures/01-dashboard-cockpit-premium.png` → **operational** consumer=`projects/chantiers360-v2/04-design/figma-brief.md`
- `projects/chantiers360-v2/04-design/captures/02-fiche-chantier-taches.png` → **operational** consumer=`projects/chantiers360-v2/04-design/figma-brief.md`
- `projects/chantiers360-v2/04-design/captures/03-fiche-chantier-reserves.png` → **operational** consumer=`projects/chantiers360-v2/04-design/figma-brief.md`
- `projects/chantiers360-v2/04-design/captures/04-creation-chantier.png` → **operational** consumer=`projects/chantiers360-v2/04-design/figma-brief.md`
- `projects/chantiers360-v2/04-design/figma-review-checklist.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`
- `projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md` → **operational** consumer=`projects/chantiers360-v2/00-framing/project-framing.md`
- `projects/chantiers360-v2/06-figma-fidelity-spike/figma-reference.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`
- `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-implementation-report.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md`
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md`
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md`
- `projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md` → **operational** consumer=`projects/chantiers360-v2/00-framing/project-framing.md`
- `projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01.md` → **operational** consumer=`projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md`
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md`
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md`
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md`
- `projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-02/inc-02-closure-report.md`
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md`
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md`
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md`
- `projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-03/inc-03-closure-report.md`
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-implementation-report.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md`
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-decisions.md`
- `projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-validation-report.md`
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md` → **operational** consumer=`projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md`
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-05/inc-05-closure-report.md`
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-strategy.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-strategy.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-strategy.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-strategy.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`
- `projects/chantiers360-v2/09-capitalization/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-final-pilot-rex-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
- `projects/chantiers360-v2/09-capitalization/v0-vs-sfia-v2-methodological-comparison.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
- `projects/chantiers360-v2/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/chantiers360-v2/app/.env.example` → **operational** consumer=`.gitignore`
- `projects/chantiers360-v2/app/.env.test.example` → **operational** consumer=`projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md`
- `projects/chantiers360-v2/app/.gitignore` → **operational** consumer=`docker/penpot/README.md`
- `projects/interv360/00-intake/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/00-intake/interv360-sfia-test-strategy.md` → **operational** consumer=`projects/interv360/00-intake/README.md`
- `projects/interv360/00-intake/project-intake.md` → **operational** consumer=`projects/interv360/00-intake/README.md`
- `projects/interv360/01-cadrage/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/01-cadrage/adr-candidates.md` → **operational** consumer=`projects/interv360/01-cadrage/cadrage-phase-gate.md`
- `projects/interv360/01-cadrage/cadrage-phase-gate.md` → **unknown**
- `projects/interv360/01-cadrage/notion-sync-payload.json` → **operational** consumer=`method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md`
- `projects/interv360/01-cadrage/role-methods-framing.md` → **operational** consumer=`docs/practices/methods-structure-check.md`
- `projects/interv360/01-cadrage/role-methods-review.md` → **operational** consumer=`docs/practices/methods-structure-check.md`
- `projects/interv360/01-cadrage/ux-ui-brief-validation.md` → **operational** consumer=`projects/interv360/01-cadrage/cadrage-phase-gate.md`
- `projects/interv360/01-cadrage/ux-ui-brief.md` → **operational** consumer=`docs/practices/roles/ux-ui-designer-method.md`
- `projects/interv360/02-architecture/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json`
- `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json`
- `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json`
- `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json`
- `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json`
- `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json`
- `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json`
- `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json`
- `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json`
- `projects/interv360/02-architecture/architecture-p1-summary.md` → **operational** consumer=`projects/interv360/02-architecture/architecture-p2-design-impact-summary.md`
- `projects/interv360/02-architecture/architecture-p2-design-impact-summary.md` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json`
- `projects/interv360/02-architecture/closure-without-signature-summary.md` → **non-operational**
- `projects/interv360/02-architecture/figma-first-draft-screens/05-dashboard-sav.png` → **operational** consumer=`projects/interv360/03-design/figma-first-screen-review.md`
- `projects/interv360/02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png` → **operational** consumer=`projects/interv360/03-design/figma-fresh-start-instructions.md`
- `projects/interv360/02-architecture/figma-first-draft-screens/08-planning-semaine.png` → **operational** consumer=`projects/interv360/03-design/figma-fresh-start-instructions.md`
- `projects/interv360/02-architecture/figma-first-draft-screens/09-fiche-intervention-mobile.png` → **operational** consumer=`projects/interv360/03-design/figma-fresh-start-instructions.md`
- `projects/interv360/02-architecture/figma-first-draft-screens/10-compte-rendu-mobile.png` → **operational** consumer=`projects/interv360/03-design/figma-fresh-start-instructions.md`
- `projects/interv360/02-architecture/figma-first-draft-screens/11-suivi-erreurs-integration.png` → **operational** consumer=`projects/interv360/03-design/figma-fresh-start-instructions.md`
- `projects/interv360/02-architecture/figma-first-draft-screens/12-vue-dirigeant.png` → **operational** consumer=`projects/interv360/03-design/figma-fresh-start-instructions.md`
- `projects/interv360/02-architecture/geo-ai-arbitration-summary.md` → **unknown**
- `projects/interv360/02-architecture/mvp-clarifications-summary.md` → **operational** consumer=`projects/interv360/02-architecture/geo-ai-arbitration.md`
- `projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json` → **operational** consumer=`method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md`
- `projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json` → **operational** consumer=`method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md`
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-project-update.json` → **unknown**
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json` → **unknown**
- `projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.json` → **operational** consumer=`method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md`
- `projects/interv360/02-architecture/notion-sync-figma-v1-closure-payload.json` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-figma-v1-cmp-project-update.json`
- `projects/interv360/02-architecture/notion-sync-figma-v1-cmp-project-update.json` → **unknown**
- `projects/interv360/02-architecture/notion-sync-prompt-library-final-lot-cmp-payload.json` → **unknown**
- `projects/interv360/02-architecture/notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json` → **unknown**
- `projects/interv360/02-architecture/notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload.json` → **unknown**
- `projects/interv360/02-architecture/notion-sync-qa-prompt-library-cmp-payload.json` → **unknown**
- `projects/interv360/02-architecture/notion-sync-qa-prompt-library-payload.json` → **unknown**
- `projects/interv360/02-architecture/notion-sync-qa-tester-cmp-project-update.json` → **unknown**
- `projects/interv360/02-architecture/notion-sync-qa-tester-governance-payload.json` → **operational** consumer=`projects/interv360/02-architecture/notion-sync-qa-tester-cmp-project-update.json`
- `projects/interv360/02-architecture/rules-rg-prioritization-summary.md` → **operational** consumer=`projects/interv360/02-architecture/closure-without-signature.md`
- `projects/interv360/02-architecture/status-mapping-summary.md` → **operational** consumer=`projects/interv360/02-architecture/closure-without-signature.md`
- `projects/interv360/03-design/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/03-design/design-v2-cycle-opening.md` → **operational** consumer=`projects/interv360/03-design/penpot-screen-prioritization.md`
- `projects/interv360/03-design/figma-premium-redesign-brief.md` → **unknown**
- `projects/interv360/03-design/penpot-application-frame-template.md` → **operational** consumer=`projects/interv360/03-design/figma-reprise-path.md`
- `projects/interv360/03-design/penpot-first-screen-v2-visual-instructions.md` → **operational** consumer=`projects/interv360/03-design/penpot-first-screen-cycle-summary.md`
- `projects/interv360/04-delivery/api-demo-hardening.md` → **non-operational**
- `projects/interv360/04-delivery/api-product-validation.md` → **unknown**
- `projects/interv360/04-delivery/auth-user-switcher.md` → **operational** consumer=`projects/interv360/04-delivery/backend-users-session.md`
- `projects/interv360/04-delivery/backend-persistence.md` → **non-operational**
- `projects/interv360/04-delivery/batch-01-demo-credibility.md` → **operational** consumer=`method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md`
- `projects/interv360/04-delivery/batch-02-demo-control-scenario.md` → **non-operational**
- `projects/interv360/04-delivery/batch-03-demo-readiness-package.md` → **operational** consumer=`projects/interv360/08-presentation/interv360-demo-presentation-package.md`
- `projects/interv360/04-delivery/batch-04-demo-presentation-package.md` → **non-operational**
- `projects/interv360/04-delivery/connected-ux-productization.md` → **unknown**
- `projects/interv360/04-delivery/delivery-detailing-plan.md` → **operational** consumer=`projects/interv360/04-delivery/delivery-detailing-summary.md`
- `projects/interv360/04-delivery/demo-feedback-review.md` → **operational** consumer=`projects/interv360/04-delivery/demo-presentation-feedback.md`
- `projects/interv360/04-delivery/demo-mvp-closure.md` → **operational** consumer=`projects/interv360/09-roadmap/interv360-product-industrialization-framing.md`
- `projects/interv360/04-delivery/demo-polish.md` → **operational** consumer=`projects/interv360/04-delivery/demo-mvp-closure.md`
- `projects/interv360/04-delivery/demo-presentation-feedback.md` → **operational** consumer=`projects/interv360/04-delivery/demo-mvp-closure.md`
- `projects/interv360/04-delivery/demo-presentation-review.md` → **operational** consumer=`projects/interv360/04-delivery/demo-presentation-feedback.md`
- `projects/interv360/04-delivery/end-to-end-demo-hardening.md` → **operational** consumer=`projects/interv360/04-delivery/demo-feedback-review.md`
- `projects/interv360/04-delivery/frontend-api-connection-framing.md` → **operational** consumer=`projects/interv360/04-delivery/frontend-api-connection.md`
- `projects/interv360/04-delivery/frontend-api-connection.md` → **operational** consumer=`projects/interv360/04-delivery/demo-mvp-closure.md`
- `projects/interv360/04-delivery/implementation-go-no-go.md` → **operational** consumer=`projects/interv360/04-delivery/technical-arbitration.md`
- `projects/interv360/04-delivery/implementation-planning-plan.md` → **operational** consumer=`projects/interv360/04-delivery/implementation-planning-summary.md`
- `projects/interv360/04-delivery/premium-design-system.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `projects/interv360/04-delivery/product-demo-consolidation.md` → **unknown**
- `projects/interv360/04-delivery/product-industrialization.md` → **operational** consumer=`projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md`
- `projects/interv360/04-delivery/product-ux-finalization.md` → **operational** consumer=`projects/interv360/04-delivery/product-industrialization.md`
- `projects/interv360/04-delivery/realization-preparation-plan.md` → **operational** consumer=`projects/interv360/04-delivery/realization-preparation-summary.md`
- `projects/interv360/04-delivery/realization-start-plan.md` → **operational** consumer=`projects/interv360/04-delivery/realization-start-summary.md`
- `projects/interv360/04-delivery/request-model-productization.md` → **non-operational**
- `projects/interv360/04-delivery/technical-arbitration.md` → **non-operational**
- `projects/interv360/04-delivery/technical-design-plan.md` → **operational** consumer=`projects/interv360/04-delivery/technical-design-summary.md`
- `projects/interv360/04-delivery/workflow-light-extension.md` → **operational** consumer=`projects/interv360/04-delivery/workflow-requalification.md`
- `projects/interv360/04-delivery/workflow-requalification.md` → **non-operational**
- `projects/interv360/05-release/mvp-release-readiness.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `projects/interv360/06-audit-rex/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/07-documentation/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/08-presentation/interv360-demo-presentation-package.md` → **operational** consumer=`projects/interv360/04-delivery/demo-presentation-review.md`
- `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md` → **operational** consumer=`projects/interv360/04-delivery/backend-minimal-prototype.md`
- `projects/interv360/09-roadmap/interv360-backend-persistence-decision.md` → **unknown**
- `projects/interv360/09-roadmap/interv360-next-product-axis.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `projects/interv360/09-roadmap/interv360-product-industrialization-framing.md` → **operational** consumer=`projects/interv360/09-roadmap/interv360-backend-persistence-decision.md`
- `projects/interv360/09-roadmap/interv360-product-roadmap-after-role-simulation.md` → **operational** consumer=`projects/interv360/09-roadmap/interv360-role-simulation-review.md`
- `projects/interv360/09-roadmap/interv360-product-roadmap-next.md` → **operational** consumer=`projects/interv360/09-roadmap/interv360-auth-and-user-framing.md`
- `projects/interv360/09-roadmap/interv360-role-simulation-review.md` → **operational** consumer=`projects/interv360/04-delivery/workflow-light-extension.md`
- `projects/interv360/09-roadmap/interv360-workflow-extension-framing.md` → **operational** consumer=`projects/interv360/04-delivery/workflow-light-extension.md`
- `projects/interv360/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/app/.env.example` → **operational** consumer=`.gitignore`
- `projects/interv360/app/.gitignore` → **operational** consumer=`docker/penpot/README.md`
- `projects/interv360/app/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/app/src/data/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/app/src/domain/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/app/src/seed/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/app/src/tests/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/app/src/ui/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/backend/.env.example` → **operational** consumer=`.gitignore`
- `projects/interv360/backend/.gitignore` → **operational** consumer=`docker/penpot/README.md`
- `projects/interv360/backend/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `projects/interv360/project.json` → **unknown**
- `prompts/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `prompts/architecture/functional-architecture-prompt-family.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `prompts/bpmn/bpmn-prompt-family.md` → **operational** consumer=`docs/practices/process/bpmn-method-cycle-closure.md`
- `prompts/qa/delivery-qa-test-prompt-family.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/qa/qa-tester-prompt-family.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `prompts/templates/01-create-foundation-document.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/02-update-document-v1-1.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/03-create-operational-checklist.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/04-validate-cursor-result.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/05-validate-pr-readiness.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/06-prepare-pr-summary.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/07-write-post-merge-status.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/08-capitalize-method-asset.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/09-prepare-notion-mapping.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/10-perform-safe-repository-cleanup.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `prompts/templates/sfia-cycle-execution-template.md` → **operational** consumer=`method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `prompts/templates/sfia-prompt-templates-context-pack.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `prompts/tooling/penpot/penpot-design-agent-prompt-family.md` → **operational** consumer=`docs/tooling/penpot/penpot-cursor-agent-rules.md`
- `prompts/ux-ui/figma-fidelity-gate-prompt-family.md` → **operational** consumer=`method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `prompts/ux-ui/ux-ui-reprise-prompt-family.md` → **operational** consumer=`docs/tooling/penpot/penpot-sfia-method-integration.md`
- `tools/cmp-001/.env.example` → **operational** consumer=`.gitignore`
- `tools/cmp-001/.gitignore` → **operational** consumer=`docker/penpot/README.md`
- `tools/cmp-001/CHANGELOG.md` → **operational** consumer=`docs/tooling/mcp/sfia-mcp-v2-architecture.md`
- `tools/cmp-001/README.md` → **operational** consumer=`.cursor/mcp-templates/README.md`
- `tools/cmp-001/ROADMAP.md` → **operational** consumer=`docs/tooling/mcp/sfia-mcp-v2-architecture.md`
- `tools/cmp-001/WORKSPACE.md` → **operational** consumer=`docs/workspace-readiness-report.md`
- `tools/cmp-001/config/sfia-v1-1-workspace.config.json` → **operational** consumer=`method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md`
- `tools/cmp-001/docs/components-database-evolution.md` → **operational** consumer=`tools/cmp-001/docs/consolidation-report.md`
- `tools/cmp-001/docs/consolidation-report.md` → **non-operational**
- `tools/cmp-001/docs/status-matrix.md` → **unknown**
- `tools/cmp-001/package-lock.json` → **operational** consumer=`docs/tooling/mcp/sfia-mcp-v2-architecture.md`
- `tools/cmp-001/tests/run-all-tests.js` → **operational** consumer=`tools/cmp-001/CHANGELOG.md`

## Unknown résiduels (18)
- `projects/interv360/01-cadrage/cadrage-phase-gate.md`
  - Usage Evidence Review: unknown — active project doc — no external reference found; verify RUN/maintenance use. Searches: repo reference index, incoming_references field. External c...
- `projects/interv360/02-architecture/geo-ai-arbitration-summary.md`
  - Usage Evidence Review: unknown — active project doc — no external reference found; verify RUN/maintenance use. Searches: repo reference index, incoming_references field. External c...
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-project-update.json`
  - Usage Evidence Review: unknown — insufficient external consumer evidence after corrective review. Searches: repo reference index, incoming_references field. External consumers foun...
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json`
  - Usage Evidence Review: unknown — insufficient external consumer evidence after corrective review. Searches: repo reference index, incoming_references field. External consumers foun...
- `projects/interv360/02-architecture/notion-sync-figma-v1-cmp-project-update.json`
  - Usage Evidence Review: unknown — insufficient external consumer evidence after corrective review. Searches: repo reference index, incoming_references field. External consumers foun...
- `projects/interv360/02-architecture/notion-sync-prompt-library-final-lot-cmp-payload.json`
  - Usage Evidence Review: unknown — insufficient external consumer evidence after corrective review. Searches: repo reference index, incoming_references field. External consumers foun...
- `projects/interv360/02-architecture/notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json`
  - Usage Evidence Review: unknown — insufficient external consumer evidence after corrective review. Searches: repo reference index, incoming_references field. External consumers foun...
- `projects/interv360/02-architecture/notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload.json`
  - Usage Evidence Review: unknown — insufficient external consumer evidence after corrective review. Searches: repo reference index, incoming_references field. External consumers foun...
- `projects/interv360/02-architecture/notion-sync-qa-prompt-library-cmp-payload.json`
  - Usage Evidence Review: unknown — insufficient external consumer evidence after corrective review. Searches: repo reference index, incoming_references field. External consumers foun...
- `projects/interv360/02-architecture/notion-sync-qa-prompt-library-payload.json`
  - Usage Evidence Review: unknown — insufficient external consumer evidence after corrective review. Searches: repo reference index, incoming_references field. External consumers foun...
- `projects/interv360/02-architecture/notion-sync-qa-tester-cmp-project-update.json`
  - Usage Evidence Review: unknown — insufficient external consumer evidence after corrective review. Searches: repo reference index, incoming_references field. External consumers foun...
- `projects/interv360/03-design/figma-premium-redesign-brief.md`
  - Usage Evidence Review: unknown — active project doc — no external reference found; verify RUN/maintenance use. Searches: repo reference index, incoming_references field. External c...
- `projects/interv360/04-delivery/api-product-validation.md`
  - Usage Evidence Review: unknown — active project doc — no external reference found; verify RUN/maintenance use. Searches: repo reference index, incoming_references field. External c...
- `projects/interv360/04-delivery/connected-ux-productization.md`
  - Usage Evidence Review: unknown — active project doc — no external reference found; verify RUN/maintenance use. Searches: repo reference index, incoming_references field. External c...
- `projects/interv360/04-delivery/product-demo-consolidation.md`
  - Usage Evidence Review: unknown — active project doc — no external reference found; verify RUN/maintenance use. Searches: repo reference index, incoming_references field. External c...
- `projects/interv360/09-roadmap/interv360-backend-persistence-decision.md`
  - Usage Evidence Review: unknown — active project doc — no external reference found; verify RUN/maintenance use. Searches: repo reference index, incoming_references field. External c...
- `projects/interv360/project.json`
  - Usage Evidence Review: unknown — insufficient external consumer evidence after corrective review. Searches: repo reference index, incoming_references field. External consumers foun...
- `tools/cmp-001/docs/status-matrix.md`
  - Usage Evidence Review: unknown — insufficient external consumer evidence after corrective review. Searches: repo reference index, incoming_references field. External consumers foun...

## Rapport §15
```markdown
## 15. Usage Evidence Corrective Review

**Horodatage :** 2026-07-11 18:55 Europe/Paris
**HEAD initial :** `47d826915b87c33d7e2bdc1794c224999e9abd03`
**HEAD final :** *(commit présent cycle)*
**CSV :** SHA-256 `301c0e34252350503de9139fb2eb07210181e72c092b4427fc3300681f096337`

### Définition de C

Lignes `usage = operational` avec preuve faible, auto-référentielle ou sans consommateur externe démontré :

- `proof` ∈ {current-method-reference, active-navigation-reference, explicit-current-use, inferred-role, path-only, …}
- `source = current_path` ou absence de chemin consommateur externe
- README / méthode / template / rapport sans consommateur externe
- familles F08/F13/F06/F04 avec preuve non comportementale

**Exclus de C :** preuves techniques fortes correctement démontrées (runtime-reference, ci-reference, manifest-reference, … sur code/config actif) — **380** lignes.

### Volume C

| Métrique | Valeur |
|----------|-------:|
| **\|C\|** | **414** |
| preuves auto-référentielles (`source=current_path`) | **367** |
| sans consommateur externe dans evidence initiale | **413** |
| exclus (preuve technique forte) | **380** |

### Matrice des preuves initiales (C)

| Preuve usage-pass | Count |
|-------------------|------:|
| current-method-reference | 224 |
| active-navigation-reference | 54 |
| explicit-current-use | 47 |
| current-cycle-reference | 15 |
| manifest-reference | 10 |
| active-config-reference | 12 |
| runtime-reference | 3 |
| weak-proof | 2 |
| (sans usage-pass explicite) | 47 |

### Méthode

Index des références entrantes repository ; filtrage consommateurs actifs (exclusion zones historiques pures, consumers non-operational/archived) ; requalification **uniquement C** ; preuve renforcée `usage-review;result=…;consumer=…` pour operational conservé.

### Résultats avant / après (review)

| Usage | Avant review | Après review | Δ |
|-------|-------------:|-------------:|--:|
| operational | 794 | **754** | −40 |
| non-operational | 251 | **273** | +22 |
| unknown | 0 | **18** | +18 |

### Résultats sur C

| Action | Count |
|--------|------:|
| operational **confirmés** (consommateur externe) | **374** |
| rétrogradés **non-operational** | **22** |
| rétrogradés **unknown** | **18** |

### Unknown résiduels (liste exhaustive — 18)

1. `projects/interv360/01-cadrage/cadrage-phase-gate.md`
2. `projects/interv360/02-architecture/geo-ai-arbitration-summary.md`
3. `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-project-update.json`
4. `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json`
5. `projects/interv360/02-architecture/notion-sync-figma-v1-cmp-project-update.json`
6. `projects/interv360/02-architecture/notion-sync-prompt-library-final-lot-cmp-payload.json`
7. `projects/interv360/02-architecture/notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json`
8. `projects/interv360/02-architecture/notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload.json`
9. `projects/interv360/02-architecture/notion-sync-qa-prompt-library-cmp-payload.json`
10. `projects/interv360/02-architecture/notion-sync-qa-prompt-library-payload.json`
11. `projects/interv360/02-architecture/notion-sync-qa-tester-cmp-project-update.json`
12. `projects/interv360/03-design/figma-premium-redesign-brief.md`
13. `projects/interv360/04-delivery/api-product-validation.md`
14. `projects/interv360/04-delivery/connected-ux-productization.md`
15. `projects/interv360/04-delivery/product-demo-consolidation.md`
16. `projects/interv360/09-roadmap/interv360-backend-persistence-decision.md`
17. `projects/interv360/project.json`
18. `tools/cmp-001/docs/status-matrix.md`

### Cas significatifs

- **README revus (49 dans C)** — operational conservé uniquement avec index/consommateur externe actif ; sinon non-operational ou unknown
- **Méthodes/templates/checklists** — exigent référence cycle/prompt/procédure active distincte
- **Archives / snapshots audit** — rétrogradés non-operational (ex. listes `workspace-audit/*.txt`)
- **`docs/tooling/mcp/sfia-mcp-v2-architecture.md`** — rétrogradé **non-operational** : références principalement trajectoire MCP/v3 expérimentale, pas consommateur v2.4 actif
- **`2026-07-11-sfia-v2.6-repository-read-only-audit.md`** — confirmé **operational** via consommateur `…-repository-cartography.md` (cycle v2.6 PR #165)
- **`2026-07-11-sfia-v2.6-repository-standard-principles.md`** — confirmé **operational** via cartography report (mapping §10)

### Corrections secondaires / anomalies

**Aucune** — lots, dispositions, lifecycle, authority inchangés.

### Aucune migration

Aucune exécution physique.

---
```

## Large Artifact Protocol — CSV
- SHA-256: `301c0e34252350503de9139fb2eb07210181e72c092b4427fc3300681f096337`
- rows: 1045 fields: 36

### Header
```
current_path,filename,extension,size_bytes,primary_family,subfamily,lifecycle_status,lifecycle_applicability,authority,usage,scope,project,phase,trajectory,trajectory_role,logical_location_current,logical_location_target,naming_rule_regime,naming_compliance,location_compliance,metadata_profile,content_summary,incoming_references,outgoing_references,duplicate_or_overlap,canonical_candidate,proposed_disposition,proposed_target_path,proposed_target_filename,rationale,risk_level,morris_gate_required,confidence,evidence,reserve_or_question,migration_lot_candidate
```
### First 20 data rows
```
.cursor/mcp-templates/README.md,README.md,md,3733,F13,,candidate,document-lifecycle,reference,operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Cursor MCP templates — Penpot **Dossier** : `.cursor/mcp-templates/` **Statut** : Exemples non secrets — configurat,docs/tooling/penpot/penpot-cursor-agent-rules.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-design-agent-architecture.md); ](../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-cursor-agent-rules.md),no,no,keep,.cursor/mcp-templates/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.gitignore`.",low,no,high,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=.cursor/mcp-templates/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.gitignore;consumer-status=potential-active-consumer;confidence=high,Usage Evidence Review: operational confirmed — external consumer `.gitignore` (potential-active-consumer).,lot-E
.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,json,265,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,"{ ""mcpServers"": { ""penpot-self-host"": { ""type"": ""http"", ""url"": ""http://localhost:9001/mcp/stream?userT",.cursor/mcp-templates/README.md; docs/tooling/penpot/penpot-mcp-self-host-rex.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,,no,no,keep,.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-review;result=operational;proof=external-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high,Usage Evidence Review: operational confirmed — external consumer `.cursor/mcp-templates/README.md` (potential-active-consumer).,lot-E
.github/workflows/interv360-ci.yml,interv360-ci.yml,yml,1225,F16,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,"name: Interv360 CI on: pull_request: paths: - ""projects/interv360/**"" - "".github/workflows/interv360-",,,no,no,keep,.github/workflows/interv360-ci.yml,interv360-ci.yml,"Regime technical-convention; family F16; D10 compliant (current=tools, target=tools); lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=inferred-role;usage-pass;result=operational;proof=active-config-reference;source=.github/workflows/interv360-ci.yml;confidence=high;checks=repository/tooling configuration artifact,Usage Pass: qualified operational (active-config-reference). Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-I
.gitignore,.gitignore,none,262,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (none),,,no,no,keep,.gitignore,.gitignore,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference. Usage Evidence Review: operational confirmed via `docker/penpot/README.md`.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=.gitignore;confidence=high;checks=repository/tooling configuration artifact;usage-review;result=operational;proof=active-config-reference;consumer=docker/penpot/README.md;consumer-status=potential-active-consumer;confidence=high,Usage Evidence Review: operational confirmed — external consumer `docker/penpot/README.md` (potential-active-consumer).,lot-E
README.md,README.md,md,3571,F13,,candidate,document-lifecycle,reference,operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# SFIA Workspace Workspace local officiel de la **SFIA** (Software Factory & Intelligence Architecture). Ce dépôt est,,,no,no,keep,README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`.",low,no,high,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high,Usage Evidence Review: operational confirmed — external consumer `.cursor/mcp-templates/README.md` (potential-active-consumer).,lot-E
components/README.md,README.md,md,224,F13,,candidate,document-lifecycle,reference,operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Components Espace local pour les notes et artefacts liés aux composants SFIA. Le registre officiel des composants re,,,no,no,keep,components/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`.",low,no,high,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=components/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high,Usage Evidence Review: operational confirmed — external consumer `.cursor/mcp-templates/README.md` (potential-active-consumer).,lot-E
docker/penpot/.env.example,.env.example,example,400,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (example),,,no,no,keep,docker/penpot/.env.example,.env.example,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference. Usage Evidence Review: operational confirmed via `.gitignore`.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=docker/penpot/.env.example;confidence=high;checks=environment/config template for active tooling onboarding;usage-review;result=operational;proof=active-config-reference;consumer=.gitignore;consumer-status=potential-active-consumer;confidence=high,Usage Evidence Review: operational confirmed — external consumer `.gitignore` (potential-active-consumer).,lot-E
docker/penpot/README.md,README.md,md,2792,F13,,candidate,document-lifecycle,reference,operational,repository,,,SFIA v2.4,baseline,tools,tools,documentary,compliant,compliant,E,# Penpot Docker — Templates SFIA **Dossier** : `docker/penpot/` **Statut** : Templates sûrs — pas d'installation stan,,](https://help.penpot.app/technical-guide/getting-started/docker/); ](https://help.penpot.app/technical-guide/getting-started/); ](https://help.penpot.app/technical-guide/getting-started/docker/); ](../../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../.cursor/mcp-templates/penpot-mcp.example.json),no,no,keep,docker/penpot/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=tools, target=tools); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`.",low,no,high,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docker/penpot/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high,Usage Evidence Review: operational confirmed — external consumer `.cursor/mcp-templates/README.md` (potential-active-consumer).,lot-E
docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,yml,378,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,# Example override for a local SFIA Penpot setup. # Use only with the official Penpot docker-compose.yml. # Do not treat,docker/penpot/README.md,,no,no,keep,docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=docker/penpot/docker-compose.override.example.yml;confidence=high;checks=environment/config template for active tooling onboarding,Usage Pass: qualified operational (active-config-reference). Heuristic qualification only — not validated.,lot-E
docs/README.md,README.md,md,1104,F13,,candidate,document-lifecycle,reference,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Platform Documentation Ce dossier contient la documentation plateforme SFIA. Il est distinct de la méthode acti,,,no,no,keep,docs/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`.",low,no,high,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high,Usage Evidence Review: operational confirmed — external consumer `.cursor/mcp-templates/README.md` (potential-active-consumer).,lot-E
docs/adr/README.md,README.md,md,131,F13,,candidate,document-lifecycle,reference,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# ADR Architecture Decision Records — décisions structurantes tracées. Source Notion : base ADR (`exports/notion/adr.j,,,no,no,keep,docs/adr/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`.",low,no,high,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/adr/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high,Usage Evidence Review: operational confirmed — external consumer `.cursor/mcp-templates/README.md` (potential-active-consumer).,lot-E
docs/architecture/README.md,README.md,md,1966,F13,,candidate,document-lifecycle,reference,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,"# SFIA Architecture Documentation d'architecture SFIA : Domain Model, composants, flux et vues. Source Notion : Compon",,,no,no,keep,docs/architecture/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`.",low,no,high,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/architecture/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high,Usage Evidence Review: operational confirmed — external consumer `.cursor/mcp-templates/README.md` (potential-active-consumer).,lot-E
docs/architecture/sfia-decision-engine.md,sfia-decision-engine.md,md,56513,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,rename,docs/architecture/sfia-decision-engine.md,YYYY-MM-DD-sfia-decision-engine.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;all=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-decision-engine.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high,Usage Evidence Review: operational confirmed — external consumer `docs/architecture/README.md` (active-scope-document).,lot-D
docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,md,57907,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-delivery-pipeline.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high,Usage Evidence Review: operational confirmed — external consumer `docs/architecture/README.md` (active-scope-document).,lot-E
docs/architecture/sfia-domain-model.md,sfia-domain-model.md,md,26327,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-domain-model.md,sfia-domain-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`.",low,no,high,lifecycle-corrective;proof=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-domain-model.md;confidence=high;checks=validated doc referenced by 16 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high,Usage Evidence Review: operational confirmed — external consumer `docs/architecture/README.md` (active-scope-document).,lot-E
docs/architecture/sfia-meta-model.md,sfia-meta-model.md,md,45992,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-meta-model.md,sfia-meta-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+canonical-source;all=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-meta-model.md;confidence=high;checks=validated doc referenced by 15 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high,Usage Evidence Review: operational confirmed — external consumer `docs/architecture/README.md` (active-scope-document).,lot-E
docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,md,63116,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`.",low,no,high,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-platform-architecture.md;confidence=high;checks=validated doc referenced by 19 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high,Usage Evidence Review: operational confirmed — external consumer `docs/architecture/README.md` (active-scope-document).,lot-E
docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,md,41225,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`.",low,no,high,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-repository-blueprint.md;confidence=high;checks=validated doc referenced by 27 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high,Usage Evidence Review: operational confirmed — external consumer `docs/architecture/README.md` (active-scope-document).,lot-E
docs/foundation/README.md,README.md,md,208,F13,,archived,document-lifecycle,reference,operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,E,"# Foundation Principes fondateurs, gouvernance et cadre de la plateforme SFIA. Source Notion : Knowledge Articles, Sta",,,no,no,archive,docs/foundation/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective archived. Usage Pass: operational per explicit-current-use. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`.",low,no,high,lifecycle-pass-L;trajectory-v1.1-historical;readme-index-role;git=586671c init: create SFIA workspace structure;usage-pass;result=operational;proof=explicit-current-use;source=docs/foundation/README.md;confidence=high;checks=archive disposition but 78 active consumer(s);usage-review;result=operational;proof=explicit-current-use;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high,Usage Evidence Review: operational confirmed — external consumer `.cursor/mcp-templates/README.md` (potential-active-consumer).,lot-E
docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,md,10488,F06,,validated,document-lifecycle,unknown,operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,keep,docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/foundation/sfia-engineering-principles.md;confidence=high;checks=validated doc referenced by 48 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high,Usage Evidence Review: operational confirmed — external consumer `docs/architecture/README.md` (active-scope-document).,lot-E
```
### Last 20 rows
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
tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,js,4453,F17,,validated,technical-artifact-lifecycle,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective validated. Usage Pass: operational per runtime-reference. Usage Evidence Review: operational confirmed via `tools/cmp-001/CHANGELOG.md`.",low,no,high,path+content-sample+regime=technical-convention+incoming=1; convention=dot-separated tool convention;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/tests/run-all-tests.js;confidence=high;checks=technical artifact with active consumer;usage-review;result=operational;proof=runtime-reference;consumer=tools/cmp-001/CHANGELOG.md;consumer-status=active-scope-document;confidence=high,Usage Evidence Review: operational confirmed — external consumer `tools/cmp-001/CHANGELOG.md` (active-scope-document).,lot-I
```

## Lignes C modifiées (usage change)
- `docs/tooling/mcp/sfia-mcp-v2-architecture.md`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-all-files.txt`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-directory-map.txt`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-markdown-files.txt`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-all-files.txt`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth2.txt`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth4.txt`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-docs-files.txt`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-markdown-files.txt`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-method-files.txt`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-projects-files.txt`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/round-2/markdown-files-all.txt`: operational → **non-operational**
- `method/sfia-fast-track/documentation/workspace-audit/round-2/post-round-2-markdown-files.txt`: operational → **non-operational**
- `projects/interv360/01-cadrage/cadrage-phase-gate.md`: operational → **unknown**
- `projects/interv360/02-architecture/closure-without-signature-summary.md`: operational → **non-operational**
- `projects/interv360/02-architecture/geo-ai-arbitration-summary.md`: operational → **unknown**
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-project-update.json`: operational → **unknown**
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json`: operational → **unknown**
- `projects/interv360/02-architecture/notion-sync-figma-v1-cmp-project-update.json`: operational → **unknown**
- `projects/interv360/02-architecture/notion-sync-prompt-library-final-lot-cmp-payload.json`: operational → **unknown**
- `projects/interv360/02-architecture/notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json`: operational → **unknown**
- `projects/interv360/02-architecture/notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload.json`: operational → **unknown**
- `projects/interv360/02-architecture/notion-sync-qa-prompt-library-cmp-payload.json`: operational → **unknown**
- `projects/interv360/02-architecture/notion-sync-qa-prompt-library-payload.json`: operational → **unknown**
- `projects/interv360/02-architecture/notion-sync-qa-tester-cmp-project-update.json`: operational → **unknown**
- `projects/interv360/03-design/figma-premium-redesign-brief.md`: operational → **unknown**
- `projects/interv360/04-delivery/api-demo-hardening.md`: operational → **non-operational**
- `projects/interv360/04-delivery/api-product-validation.md`: operational → **unknown**
- `projects/interv360/04-delivery/backend-persistence.md`: operational → **non-operational**
- `projects/interv360/04-delivery/batch-02-demo-control-scenario.md`: operational → **non-operational**
- `projects/interv360/04-delivery/batch-04-demo-presentation-package.md`: operational → **non-operational**
- `projects/interv360/04-delivery/connected-ux-productization.md`: operational → **unknown**
- `projects/interv360/04-delivery/product-demo-consolidation.md`: operational → **unknown**
- `projects/interv360/04-delivery/request-model-productization.md`: operational → **non-operational**
- `projects/interv360/04-delivery/technical-arbitration.md`: operational → **non-operational**
- `projects/interv360/04-delivery/workflow-requalification.md`: operational → **non-operational**
- `projects/interv360/09-roadmap/interv360-backend-persistence-decision.md`: operational → **unknown**
- `projects/interv360/project.json`: operational → **unknown**
- `tools/cmp-001/docs/consolidation-report.md`: operational → **non-operational**
- `tools/cmp-001/docs/status-matrix.md`: operational → **unknown**

## Verdict
- USAGE EVIDENCE CORRECTIVE REVIEW COMPLETE
- EXTERNAL CONSUMERS REQUIRED FOR OPERATIONAL
- RESIDUAL USAGE UNKNOWNS = 18
- NO USAGE CHANGE OUTSIDE TARGET SET
- LIFECYCLE/AUTHORITY/LOTS UNCHANGED
- READY FOR CHATGPT USAGE EVIDENCE REVIEW
