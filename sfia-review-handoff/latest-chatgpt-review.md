---
status: temporary-review-handoff
branch: sfia/review-handoff
source: .tmp-sfia-review/chatgpt-review.md
canonical: false
merge_to_main: forbidden
updated_for: PR 165 Direct Usage Evidence Final Review
cycle: Direct Usage Evidence Final Review
head_pr: 7ff924fb026b5dc98503fa1e27900906479ef3c6
---

# SFIA v2.6 — Review Pack (Full)

**Date/heure :** 2026-07-11 19:34 Europe/Paris
**Cycle :** Validation corrective finale de cartographie — Direct Usage Evidence Review
**Profil :** Critical
**Branche :** audit/sfia-v2.6-repository-cartography
**HEAD initial :** `e48980216e86a4092cbfe3b859c7ff274ccd0272`
**Commit substantif :** `7ff924fb026b5dc98503fa1e27900906479ef3c6`
**HEAD courant PR :** `7ff924fb026b5dc98503fa1e27900906479ef3c6`
**Base :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
**synthesis only = no**

## Local Git Truth Check

- Repository: mcleland147/sfia-workspace
- Branche: audit/sfia-v2.6-repository-cartography
- HEAD initial: `e48980216e86a4092cbfe3b859c7ff274ccd0272`
- PR #165: OPEN, non-draft, non-mergée
- Worktree tracked/staged: propre (untracked préservés)

## Définition de D

Lignes `usage=operational` avec `usage-graph-review;result=operational` — 197 operational conservés après Graph Review.

## Volume D

|D| = 197

## Matrice préalable

| Métrique | Valeur |
|----------|-------:|
| Consommateurs distincts déclarés | 11 |
| Références exactes consommateur déclaré | 15 |
| Références absentes consommateur déclaré | 182 |
| Chaînes README tests Interv360 | 24 |
| Chaînes README domain Interv360 | 72 |
| Chaînes rules-and-guardrails | 43 |
| Chaînes export-manifest | 6 |

## Liste complète de D

- `.cursor/mcp-templates/penpot-mcp.example.json`
- `docker/penpot/README.md`
- `docs/architecture/sfia-decision-engine.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `docs/architecture/sfia-domain-model.md`
- `docs/architecture/sfia-meta-model.md`
- `docs/architecture/sfia-platform-architecture.md`
- `docs/architecture/sfia-repository-blueprint.md`
- `docs/foundation/sfia-engineering-principles.md`
- `docs/practices/process/bpmn-deliverables-standard.md`
- `docs/practices/process/bpmn-integration-checklist.md`
- `docs/practices/process/bpmn-method-integration-audit.md`
- `docs/practices/process/bpmn-process-modeling-method.md`
- `docs/practices/roles/qa-tester-method.md`
- `docs/templates/tooling/penpot/README.md`
- `docs/tooling/penpot/penpot-sfia-method-integration.md`
- `exports/notion/components.json`
- `exports/notion/experiments.json`
- `exports/notion/kpi.json`
- `exports/notion/projects.json`
- `exports/notion/standards.json`
- `exports/notion/templates.json`
- `method/complementary/controlled-delivery/controlled-delivery-checklist.md`
- `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md`
- `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md`
- `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md`
- `method/complementary/controlled-delivery/controlled-delivery-standard.md`
- `method/complementary/controlled-delivery/controlled-delivery-template.md`
- `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md`
- `method/sfia-fast-track/audit-rex/interv360-application-rex.md`
- `method/sfia-fast-track/automation/sfia-automation-architecture.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/guardrails-checklist.md`
- `method/sfia-fast-track/checklists/notion-publication-checklist.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/checklists/validation-checklist.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-consolidation-roadmap.md`
- `method/sfia-fast-track/core/sfia-global-capitalization.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-rules-update.md`
- `method/sfia-fast-track/cycles/interv360-final-capitalization.md`
- `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md`
- `method/sfia-fast-track/documentation/notion-publication-plan.md`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md`
- `method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md`
- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md`
- `method/sfia-fast-track/templates/audit-template.md`
- `method/sfia-fast-track/templates/cycle-template.md`
- `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md`
- `method/sfia-fast-track/templates/post-merge-template.md`
- `method/sfia-fast-track/templates/pr-body-template.md`
- `method/sfia-fast-track/templates/rex-template.md`
- `method/sfia-fast-track/ui/figma-design-first-ui-method.md`
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md`
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md`
- `projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md`
- `projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md`
- `projects/chantiers360-v2/04-design/captures/01-dashboard-cockpit-premium.png`
- `projects/chantiers360-v2/04-design/captures/02-fiche-chantier-taches.png`
- `projects/chantiers360-v2/04-design/captures/03-fiche-chantier-reserves.png`
- `projects/chantiers360-v2/04-design/captures/04-creation-chantier.png`
- `projects/chantiers360-v2/04-design/figma-review-checklist.md`
- `projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md`
- `projects/chantiers360-v2/06-figma-fidelity-spike/figma-reference.md`
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md`
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md`
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md`
- `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md`
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-implementation-report.md`
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md`
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md`
- `projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md`
- `projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01.md`
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md`
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md`
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md`
- `projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md`
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md`
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md`
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md`
- `projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03.md`
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-implementation-report.md`
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md`
- `projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md`
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md`
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md`
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-report.md`
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md`
- `projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md`
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.md`
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-report.md`
- `projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md`
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.md`
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-report.md`
- `projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md`
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.md`
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-report.md`
- `projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-report.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md`
- `projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md`
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-final-pilot-rex-report.md`
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md`
- `projects/chantiers360-v2/09-capitalization/v0-vs-sfia-v2-methodological-comparison.md`
- `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md`
- `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md`
- `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md`
- `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md`
- `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md`
- `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md`
- `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md`
- `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md`
- `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md`
- `projects/interv360/02-architecture/architecture-p2-design-impact-summary.md`
- `projects/interv360/02-architecture/figma-first-draft-screens/05-dashboard-sav.png`
- `projects/interv360/02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png`
- `projects/interv360/02-architecture/figma-first-draft-screens/08-planning-semaine.png`
- `projects/interv360/02-architecture/figma-first-draft-screens/09-fiche-intervention-mobile.png`
- `projects/interv360/02-architecture/figma-first-draft-screens/10-compte-rendu-mobile.png`
- `projects/interv360/02-architecture/figma-first-draft-screens/11-suivi-erreurs-integration.png`
- `projects/interv360/02-architecture/figma-first-draft-screens/12-vue-dirigeant.png`
- `projects/interv360/02-architecture/mvp-clarifications-summary.md`
- `projects/interv360/02-architecture/rules-rg-prioritization-summary.md`
- `projects/interv360/02-architecture/status-mapping-summary.md`
- `projects/interv360/03-design/design-v2-cycle-opening.md`
- `projects/interv360/03-design/penpot-application-frame-template.md`
- `projects/interv360/03-design/penpot-first-screen-v2-visual-instructions.md`
- `projects/interv360/04-delivery/auth-user-switcher.md`
- `projects/interv360/04-delivery/batch-03-demo-readiness-package.md`
- `projects/interv360/04-delivery/demo-feedback-review.md`
- `projects/interv360/04-delivery/demo-mvp-closure.md`
- `projects/interv360/04-delivery/demo-polish.md`
- `projects/interv360/04-delivery/demo-presentation-feedback.md`
- `projects/interv360/04-delivery/demo-presentation-review.md`
- `projects/interv360/04-delivery/end-to-end-demo-hardening.md`
- `projects/interv360/04-delivery/frontend-api-connection-framing.md`
- `projects/interv360/04-delivery/frontend-api-connection.md`
- `projects/interv360/04-delivery/implementation-planning-plan.md`
- `projects/interv360/04-delivery/premium-design-system.md`
- `projects/interv360/04-delivery/product-industrialization.md`
- `projects/interv360/04-delivery/product-ux-finalization.md`
- `projects/interv360/04-delivery/realization-preparation-plan.md`
- `projects/interv360/04-delivery/realization-start-plan.md`
- `projects/interv360/04-delivery/technical-design-plan.md`
- `projects/interv360/05-release/mvp-release-readiness.md`
- `projects/interv360/08-presentation/interv360-demo-presentation-package.md`
- `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md`
- `projects/interv360/09-roadmap/interv360-next-product-axis.md`
- `projects/interv360/09-roadmap/interv360-product-roadmap-after-role-simulation.md`
- `projects/interv360/09-roadmap/interv360-product-roadmap-next.md`
- `prompts/qa/delivery-qa-test-prompt-family.md`
- `prompts/qa/qa-tester-prompt-family.md`
- `prompts/templates/01-create-foundation-document.md`
- `prompts/templates/02-update-document-v1-1.md`
- `prompts/templates/03-create-operational-checklist.md`
- `prompts/templates/04-validate-cursor-result.md`
- `prompts/templates/05-validate-pr-readiness.md`
- `prompts/templates/06-prepare-pr-summary.md`
- `prompts/templates/07-write-post-merge-status.md`
- `prompts/templates/08-capitalize-method-asset.md`
- `prompts/templates/09-prepare-notion-mapping.md`
- `prompts/templates/10-perform-safe-repository-cleanup.md`
- `prompts/templates/sfia-cycle-execution-template.md`
- `prompts/tooling/penpot/penpot-design-agent-prompt-family.md`
- `prompts/ux-ui/ux-ui-reprise-prompt-family.md`

## Conclusion par fichier (D)

### `.cursor/mcp-templates/penpot-mcp.example.json` — **operational confirmé**
- consumer: `docs/tooling/penpot/penpot-mcp-self-host-rex.md`
- reference: L50
- relation: method-use
- snippet: `Voir aussi : [`.cursor/mcp-templates/penpot-mcp.example.json`](../../../.cursor/mcp-templates/penpot`

### `docker/penpot/README.md` — **operational confirmé**
- consumer: `docs/tooling/penpot/penpot-cursor-agent-rules.md`
- reference: L117
- relation: method-use
- snippet: `Voir : [`penpot-mcp-self-host-rex.md`](penpot-mcp-self-host-rex.md), [`.cursor/mcp-templates/README.`

### `docs/architecture/sfia-decision-engine.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L35
- relation: template-use
- snippet: `- `docs/architecture/sfia-decision-engine.md``

### `docs/architecture/sfia-delivery-pipeline.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

### `docs/architecture/sfia-domain-model.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

### `docs/architecture/sfia-meta-model.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

### `docs/architecture/sfia-platform-architecture.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

### `docs/architecture/sfia-repository-blueprint.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

### `docs/foundation/sfia-engineering-principles.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L34
- relation: template-use
- snippet: `- `docs/foundation/sfia-engineering-principles.md``

### `docs/practices/process/bpmn-deliverables-standard.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `docs/practices/process/bpmn-integration-checklist.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `docs/practices/process/bpmn-method-integration-audit.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `docs/practices/process/bpmn-process-modeling-method.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `docs/practices/roles/qa-tester-method.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `docs/templates/tooling/penpot/README.md` — **operational confirmé**
- consumer: `docs/tooling/penpot/penpot-cursor-agent-rules.md`
- reference: L117
- relation: method-use
- snippet: `Voir : [`penpot-mcp-self-host-rex.md`](penpot-mcp-self-host-rex.md), [`.cursor/mcp-templates/README.`

### `docs/tooling/penpot/penpot-sfia-method-integration.md` — **operational confirmé**
- consumer: `docs/tooling/penpot/penpot-cursor-agent-rules.md`
- reference: L7
- relation: navigation
- snippet: `**Documents associés** : [`penpot-design-agent-architecture.md`](penpot-design-agent-architecture.md`

### `exports/notion/components.json` — **operational confirmé**
- consumer: `exports/notion/export-manifest.json`
- reference: L14
- relation: manifest
- snippet: `"file": "components.json",`

### `exports/notion/experiments.json` — **operational confirmé**
- consumer: `exports/notion/export-manifest.json`
- reference: L7
- relation: manifest
- snippet: `"file": "experiments.json",`

### `exports/notion/kpi.json` — **operational confirmé**
- consumer: `exports/notion/export-manifest.json`
- reference: L56
- relation: manifest
- snippet: `"file": "kpi.json",`

### `exports/notion/projects.json` — **operational confirmé**
- consumer: `exports/notion/export-manifest.json`
- reference: L70
- relation: manifest
- snippet: `"file": "projects.json",`

### `exports/notion/standards.json` — **operational confirmé**
- consumer: `exports/notion/export-manifest.json`
- reference: L35
- relation: manifest
- snippet: `"file": "standards.json",`

### `exports/notion/templates.json` — **operational confirmé**
- consumer: `exports/notion/export-manifest.json`
- reference: L28
- relation: manifest
- snippet: `"file": "templates.json",`

### `method/complementary/controlled-delivery/controlled-delivery-checklist.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `method/complementary/controlled-delivery/controlled-delivery-publication-package.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `method/complementary/controlled-delivery/controlled-delivery-standard.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `method/complementary/controlled-delivery/controlled-delivery-template.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `method/sfia-fast-track/audit-rex/interv360-application-rex.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `method/sfia-fast-track/automation/sfia-automation-architecture.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L39
- relation: template-use
- snippet: `- `method/sfia-fast-track/automation/sfia-automation-architecture.md``

### `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L36
- relation: template-use
- snippet: `- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md``

### `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L37
- relation: template-use
- snippet: `- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md``

### `method/sfia-fast-track/automation/sfia-validation-engine.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L38
- relation: template-use
- snippet: `- `method/sfia-fast-track/automation/sfia-validation-engine.md``

### `method/sfia-fast-track/checklists/guardrails-checklist.md` — **unknown**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direc`

### `method/sfia-fast-track/checklists/notion-publication-checklist.md` — **unknown**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direc`

### `method/sfia-fast-track/checklists/sfia-validation-checklist.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L40
- relation: template-use
- snippet: `- `method/sfia-fast-track/checklists/sfia-validation-checklist.md``

### `method/sfia-fast-track/checklists/validation-checklist.md` — **unknown**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direc`

### `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` — **unknown**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direc`

### `method/sfia-fast-track/core/sfia-consolidation-roadmap.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/core/sfia-global-capitalization.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/core/sfia-knowledge-layer.md` — **unknown**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direc`

### `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` — **unknown**
- consumer déclaré/graphe: `method/sfia-fast-track/automation/sfia-validation-engine.md`
- segment: `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direc`

### `method/sfia-fast-track/core/sfia-rules-update.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/app/App.css`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `method/sfia-fast-track/cycles/interv360-final-capitalization.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/backend/src/domain/types.ts`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/05-technical-architecture/validation-and-delivery-readiness.md`
- reference: L89
- relation: method-use
- snippet: `**Référence :** `sfia-v2-delivery-qa-test-standard.md` (main `cadf25a` / PR #107)`

### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/09-capitalization/mvp-capitalization-report.md`
- reference: L185
- relation: method-use
- snippet: `| 3 | **Design coverage / R-UX-01** | Mergé PR #129 — aligné PR #130 — `sfia-v2-design-coverage-stan`

### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/04-design/design-decisions.md`
- reference: L15
- relation: method-use
- snippet: `| 3 | Standard SFIA v2.0 appliqué | `sfia-v2-design-figma-cycle-standard.md` | ✅ PR #100 |`

### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1282
- relation: template-use
- snippet: `| **Liens** | `sfia-v2-design-figma-cycle-standard.md` ; `sfia-v2-figma-fidelity-gate-standard.md` |`

### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/09-capitalization/inc-01-capitalization-report.md`
- reference: L175
- relation: method-use
- snippet: `| M1 | Chaîne delivery complète standardisable | `sfia-v2-incremental-delivery-closure-standard.md` `

### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/00-framing/project-framing.md`
- reference: L35
- relation: method-use
- snippet: `| **SFIA v2.x Method Versioning** | Mergée PR #133 — alignée PR #134 — v2.3 / v2.3.1 actées — `sfia-`

### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/00-framing/project-framing.md`
- reference: L34
- relation: method-use
- snippet: `| **Technical Architecture & Decision Documentation** | Mergée PR #131 — alignée PR #132 — `sfia-v2-`

### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1328
- relation: template-use
- snippet: `| **Standard** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidatio`

### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `method/sfia-fast-track/documentation/notion-publication-plan.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/templates/audit-template.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/templates/cycle-template.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/templates/post-merge-template.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `method/sfia-fast-track/templates/pr-body-template.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `method/sfia-fast-track/templates/rex-template.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `method/sfia-fast-track/ui/figma-design-first-ui-method.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md`
- reference: L45
- relation: method-use
- snippet: `| `00-framing/chantiers360-post-mvp-framing.md` | Roadmap post-MVP, registre réserves |`

### `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md`
- reference: L46
- relation: method-use
- snippet: `| `00-framing/chantiers360-post-mvp-option-a-reserves-first.md` | Cadrage Option A2, §4 R-UX-01 |`

### `projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/00-framing/project-framing.md`
- reference: L246
- relation: method-use
- snippet: `| `ux-ui-overview.md` | Principes UX, contraintes, critères validation |`

### `projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/00-framing/project-framing.md`
- reference: L256
- relation: method-use
- snippet: `| `mvp-backlog-overview.md` | Vue d'ensemble cycle backlog |`

### `projects/chantiers360-v2/04-design/captures/01-dashboard-cockpit-premium.png` — **operational confirmé**
- consumer: `projects/chantiers360-v2/04-design/figma-brief.md`
- reference: L50
- relation: method-use
- snippet: `| **01 — Dashboard cockpit premium** | `38:502` | Liste chantiers / dashboard (US-02) | `captures/01`

### `projects/chantiers360-v2/04-design/captures/02-fiche-chantier-taches.png` — **operational confirmé**
- consumer: `projects/chantiers360-v2/04-design/figma-brief.md`
- reference: L51
- relation: method-use
- snippet: `| **02 — Fiche chantier — Tâches** | `38:294` | Fiche pivot + section tâches (US-03, US-06, US-07) |`

### `projects/chantiers360-v2/04-design/captures/03-fiche-chantier-reserves.png` — **operational confirmé**
- consumer: `projects/chantiers360-v2/04-design/figma-brief.md`
- reference: L52
- relation: method-use
- snippet: `| **03 — Fiche chantier — Réserves** | `38:105` | Fiche pivot + section réserves (US-03, US-08, US-0`

### `projects/chantiers360-v2/04-design/captures/04-creation-chantier.png` — **operational confirmé**
- consumer: `projects/chantiers360-v2/04-design/figma-brief.md`
- reference: L53
- relation: method-use
- snippet: `| **04 — Création chantier** | `38:3` | Formulaire création chantier (US-01) | `captures/04-creation`

### `projects/chantiers360-v2/04-design/figma-review-checklist.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/00-framing/project-framing.md`
- reference: L272
- relation: method-use
- snippet: `| `04-design/figma-review-checklist.md` | Checklist revue Morris |`

### `projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/00-framing/project-framing.md`
- reference: L280
- relation: method-use
- snippet: `| `05-technical-architecture/technical-architecture-overview.md` | Vue d'ensemble cycle architecture`

### `projects/chantiers360-v2/06-figma-fidelity-spike/figma-reference.md` — **non-operational**
- consumer déclaré/graphe: `tools/cmp-001/package.json`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md` — **non-operational**
- consumer déclaré/graphe: `tools/cmp-001/package.json`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md` — **non-operational**
- consumer déclaré/graphe: `tools/cmp-001/package.json`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md` — **non-operational**
- consumer déclaré/graphe: `tools/cmp-001/package.json`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md`
- reference: L12
- relation: navigation
- snippet: `- [`r-ux-01-prochaines-actions-figma-to-code-gap-review.md`](r-ux-01-prochaines-actions-figma-to-cod`

### `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-implementation-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md`
- reference: L40
- relation: method-use
- snippet: `**Documents liés :** `delivery-inc-01-overview.md`, `inc-01-closure-report.md`, `../03-backlog/accep`

### `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md`
- reference: L161
- relation: method-use
- snippet: `**Documents liés :** `qa-readiness.md`, `qa-reserves.md`, `qa-execution-report.md`, `local-e2e-runbo`

### `projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md`
- reference: L34
- relation: method-use
- snippet: `| V5 | Clôture INC-01 ? | ✅ **CLOSED WITH RESERVES** — Morris (2026-07-06) — `inc-01-closure-report.`

### `projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/05-technical-architecture/validation-and-delivery-readiness.md`
- reference: L87
- relation: method-use
- snippet: `| PR readiness INC-01 | ✅ **Éligible** — GO Morris — `07-delivery-inc-01/pr-readiness-inc-01.md` |`

### `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/backend/src/domain/types.ts`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/09-capitalization/inc-01-capitalization-report.md`
- reference: L165
- relation: method-use
- snippet: `| E4 | PR readiness avant PR | Document `07-delivery-inc-02/pr-readiness-inc-02.md` |`

### `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/backend/src/domain/types.ts`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/backend/src/domain/types.ts`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-implementation-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-decisions.md`
- reference: L38
- relation: method-use
- snippet: `**Documents liés :** `delivery-inc-04-overview.md`, `../08-qa-test/inc-04/qa-readiness.md``

### `projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-validation-report.md`
- reference: L39
- relation: method-use
- snippet: `**Documents liés :** `inc-04-closure-report.md`, `pr-readiness-inc-04.md`, `../08-qa-test/inc-04/qa-`

### `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md`
- reference: L49
- relation: method-use
- snippet: `| `07-delivery-inc-05/delivery-inc-05-decisions.md` | D9 — accepté sans maquette dédiée |`

### `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/backend/src/domain/types.ts`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md`
- reference: L47
- relation: method-use
- snippet: `| `08-qa-test/inc-05/qa-reserves.md` | Constat, garde-fous R-UX-01 |`

### `projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md`
- reference: L161
- relation: method-use
- snippet: `**Documents liés :** `qa-readiness.md`, `qa-reserves.md`, `qa-execution-report.md`, `local-e2e-runbo`

### `projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md`
- reference: L161
- relation: method-use
- snippet: `**Documents liés :** `qa-readiness.md`, `qa-reserves.md`, `qa-execution-report.md`, `local-e2e-runbo`

### `projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md`
- reference: L161
- relation: method-use
- snippet: `**Documents liés :** `qa-readiness.md`, `qa-reserves.md`, `qa-execution-report.md`, `local-e2e-runbo`

### `projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md`
- reference: L161
- relation: method-use
- snippet: `**Documents liés :** `qa-readiness.md`, `qa-reserves.md`, `qa-execution-report.md`, `local-e2e-runbo`

### `projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md`
- reference: L47
- relation: method-use
- snippet: `| `08-qa-test/inc-05/qa-reserves.md` | Constat, garde-fous R-UX-01 |`

### `projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md` — **non-operational**
- consumer déclaré/graphe: `projects/chantiers360-v2/app/docker-compose.test.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/backend/src/domain/types.ts`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/chantiers360-v2/09-capitalization/chantiers360-v2-final-pilot-rex-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/chantiers360-v2/09-capitalization/v0-vs-sfia-v2-methodological-comparison.md` — **operational confirmé**
- consumer: `projects/chantiers360-v2/00-framing/project-framing.md`
- reference: L36
- relation: method-use
- snippet: `| **Comparaison V0 vs SFIA v2** | ✅ Mergée PR #136 — `09-capitalization/v0-vs-sfia-v2-methodological`

### `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/interv360/02-architecture/architecture-p2-design-impact-summary.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/interv360/02-architecture/figma-first-draft-screens/05-dashboard-sav.png` — **operational confirmé**
- consumer: `projects/interv360/03-design/figma-first-screen-review.md`
- reference: L76
- relation: method-use
- snippet: `**Note — compteurs en haut de page :** les compteurs affichés (ex. total demandes, à qualifier, en r`

### `projects/interv360/02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png` — **operational confirmé**
- consumer: `projects/interv360/03-design/figma-fresh-start-instructions.md`
- reference: L47
- relation: navigation
- snippet: `| [`07-fiche-demande-sav.png`](../02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png`

### `projects/interv360/02-architecture/figma-first-draft-screens/08-planning-semaine.png` — **operational confirmé**
- consumer: `projects/interv360/03-design/figma-fresh-start-instructions.md`
- reference: L48
- relation: navigation
- snippet: `| [`08-planning-semaine.png`](../02-architecture/figma-first-draft-screens/08-planning-semaine.png) `

### `projects/interv360/02-architecture/figma-first-draft-screens/09-fiche-intervention-mobile.png` — **operational confirmé**
- consumer: `projects/interv360/03-design/figma-fresh-start-instructions.md`
- reference: L49
- relation: navigation
- snippet: `| [`09-fiche-intervention-mobile.png`](../02-architecture/figma-first-draft-screens/09-fiche-interve`

### `projects/interv360/02-architecture/figma-first-draft-screens/10-compte-rendu-mobile.png` — **operational confirmé**
- consumer: `projects/interv360/03-design/figma-fresh-start-instructions.md`
- reference: L50
- relation: navigation
- snippet: `| [`10-compte-rendu-mobile.png`](../02-architecture/figma-first-draft-screens/10-compte-rendu-mobile`

### `projects/interv360/02-architecture/figma-first-draft-screens/11-suivi-erreurs-integration.png` — **operational confirmé**
- consumer: `projects/interv360/03-design/figma-fresh-start-instructions.md`
- reference: L51
- relation: navigation
- snippet: `| [`11-suivi-erreurs-integration.png`](../02-architecture/figma-first-draft-screens/11-suivi-erreurs`

### `projects/interv360/02-architecture/figma-first-draft-screens/12-vue-dirigeant.png` — **operational confirmé**
- consumer: `projects/interv360/03-design/figma-fresh-start-instructions.md`
- reference: L52
- relation: navigation
- snippet: `| [`12-vue-dirigeant.png`](../02-architecture/figma-first-draft-screens/12-vue-dirigeant.png) | Réfé`

### `projects/interv360/02-architecture/mvp-clarifications-summary.md` — **operational confirmé**
- consumer: `projects/interv360/02-architecture/geo-ai-arbitration.md`
- reference: L33
- relation: method-use
- snippet: `| `mvp-clarifications-summary.md` | Synthèse géoloc / IA hors MVP |`

### `projects/interv360/02-architecture/rules-rg-prioritization-summary.md` — **operational confirmé**
- consumer: `projects/interv360/02-architecture/closure-without-signature.md`
- reference: L35
- relation: method-use
- snippet: `| `rules-rg-prioritization-summary.md` | Synthèse décisions signature et clôture |`

### `projects/interv360/02-architecture/status-mapping-summary.md` — **operational confirmé**
- consumer: `projects/interv360/02-architecture/closure-without-signature.md`
- reference: L37
- relation: method-use
- snippet: `| `status-mapping-summary.md` | Vue d'ensemble statuts et points à préciser |`

### `projects/interv360/03-design/design-v2-cycle-opening.md` — **operational confirmé**
- consumer: `projects/interv360/03-design/penpot-screen-prioritization.md`
- reference: L11
- relation: navigation
- snippet: `**Documents associés** : [`penpot-project-reference.md`](penpot-project-reference.md), [`design-v2-c`

### `projects/interv360/03-design/penpot-application-frame-template.md` — **operational confirmé**
- consumer: `projects/interv360/03-design/figma-reprise-path.md`
- reference: L61
- relation: navigation
- snippet: `- gabarit layout ([`penpot-application-frame-template.md`](penpot-application-frame-template.md)) ;`

### `projects/interv360/03-design/penpot-first-screen-v2-visual-instructions.md` — **operational confirmé**
- consumer: `projects/interv360/03-design/penpot-first-screen-cycle-summary.md`
- reference: L9
- relation: navigation
- snippet: `**Documents associés** : [`penpot-visual-quality-benchmark.md`](penpot-visual-quality-benchmark.md),`

### `projects/interv360/04-delivery/auth-user-switcher.md` — **operational confirmé**
- consumer: `projects/interv360/04-delivery/backend-users-session.md`
- reference: L25
- relation: method-use
- snippet: `- `./auth-user-switcher.md``

### `projects/interv360/04-delivery/batch-03-demo-readiness-package.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `projects/interv360/04-delivery/demo-feedback-review.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `projects/interv360/04-delivery/demo-mvp-closure.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/app/App.css`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/interv360/04-delivery/demo-polish.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/app/App.css`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/interv360/04-delivery/demo-presentation-feedback.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/app/App.css`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/interv360/04-delivery/demo-presentation-review.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `projects/interv360/04-delivery/end-to-end-demo-hardening.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `projects/interv360/04-delivery/frontend-api-connection-framing.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/app/App.css`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/interv360/04-delivery/frontend-api-connection.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/tests/README.md`
- segment: `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

### `projects/interv360/04-delivery/implementation-planning-plan.md` — **operational confirmé**
- consumer: `projects/interv360/04-delivery/implementation-planning-summary.md`
- reference: L10
- relation: navigation
- snippet: `**Documents associés** : [`implementation-planning-plan.md`](implementation-planning-plan.md), [`inc`

### `projects/interv360/04-delivery/premium-design-system.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/domain/README.md`
- segment: `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

### `projects/interv360/04-delivery/product-industrialization.md` — **operational confirmé**
- consumer: `projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md`
- reference: L996
- relation: method-use
- snippet: ``../04-delivery/product-industrialization.md``

### `projects/interv360/04-delivery/product-ux-finalization.md` — **operational confirmé**
- consumer: `projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md`
- reference: L883
- relation: method-use
- snippet: ``../04-delivery/product-ux-finalization.md``

### `projects/interv360/04-delivery/realization-preparation-plan.md` — **operational confirmé**
- consumer: `projects/interv360/04-delivery/realization-preparation-summary.md`
- reference: L10
- relation: navigation
- snippet: `**Documents associés** : [`realization-preparation-plan.md`](realization-preparation-plan.md), [`inc`

### `projects/interv360/04-delivery/realization-start-plan.md` — **operational confirmé**
- consumer: `projects/interv360/04-delivery/realization-start-summary.md`
- reference: L10
- relation: navigation
- snippet: `**Documents associés** : [`realization-start-plan.md`](realization-start-plan.md), [`inc-01-stack-op`

### `projects/interv360/04-delivery/technical-design-plan.md` — **operational confirmé**
- consumer: `projects/interv360/04-delivery/technical-design-summary.md`
- reference: L10
- relation: navigation
- snippet: `**Documents associés** : [`technical-design-plan.md`](technical-design-plan.md), [`inc-01-applicatio`

### `projects/interv360/05-release/mvp-release-readiness.md` — **operational confirmé**
- consumer: `projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md`
- reference: L1118
- relation: method-use
- snippet: ``../04-delivery/mvp-release-readiness.md``

### `projects/interv360/08-presentation/interv360-demo-presentation-package.md` — **operational confirmé**
- consumer: `projects/interv360/08-presentation/interv360-demo-one-page-summary.md`
- reference: L75
- relation: method-use
- snippet: `**Documents** : `08-presentation/interv360-demo-presentation-package.md` · `interv360-demo-script.md`

### `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md` — **operational confirmé**
- consumer: `projects/interv360/04-delivery/backend-minimal-prototype.md`
- reference: L36
- relation: method-use
- snippet: `- le contrat API (`09-roadmap/interv360-backend-api-contract-framing.md`).`

### `projects/interv360/09-roadmap/interv360-next-product-axis.md` — **operational confirmé**
- consumer: `projects/interv360/09-roadmap/interv360-auth-foundation-framing.md`
- reference: L46
- relation: method-use
- snippet: `Le document `interv360-next-product-axis.md` recommande désormais l’axe **Auth Foundation / base use`

### `projects/interv360/09-roadmap/interv360-product-roadmap-after-role-simulation.md` — **non-operational**
- consumer déclaré/graphe: `projects/interv360/app/src/app/App.tsx`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

### `projects/interv360/09-roadmap/interv360-product-roadmap-next.md` — **operational confirmé**
- consumer: `projects/interv360/09-roadmap/interv360-auth-and-user-framing.md`
- reference: L31
- relation: navigation
- snippet: `Référence : [`interv360-product-roadmap-next.md`](./interv360-product-roadmap-next.md)`

### `prompts/qa/delivery-qa-test-prompt-family.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1262
- relation: template-use
- snippet: `| **Fichier** | `prompts/qa/delivery-qa-test-prompt-family.md` |`

### `prompts/qa/qa-tester-prompt-family.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1264
- relation: template-use
- snippet: `| **Distinct de** | `PROMPT-QA-001` à `010` — famille amont `qa-tester-prompt-family.md` |`

### `prompts/templates/01-create-foundation-document.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1198
- relation: template-use
- snippet: `| `prompts/templates/01-create-foundation-document.md` | Create Foundation Document | Candidate |`

### `prompts/templates/02-update-document-v1-1.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1199
- relation: template-use
- snippet: `| `prompts/templates/02-update-document-v1-1.md` | Update Document to v1.1 | Candidate |`

### `prompts/templates/03-create-operational-checklist.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1200
- relation: template-use
- snippet: `| `prompts/templates/03-create-operational-checklist.md` | Create Operational Checklist | Candidate `

### `prompts/templates/04-validate-cursor-result.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1201
- relation: template-use
- snippet: `| `prompts/templates/04-validate-cursor-result.md` | Validate Cursor Result | Candidate |`

### `prompts/templates/05-validate-pr-readiness.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1202
- relation: template-use
- snippet: `| `prompts/templates/05-validate-pr-readiness.md` | Validate PR Readiness | Candidate |`

### `prompts/templates/06-prepare-pr-summary.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1203
- relation: template-use
- snippet: `| `prompts/templates/06-prepare-pr-summary.md` | Prepare PR Summary | Candidate |`

### `prompts/templates/07-write-post-merge-status.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1204
- relation: template-use
- snippet: `| `prompts/templates/07-write-post-merge-status.md` | Write Post-Merge Status | Candidate |`

### `prompts/templates/08-capitalize-method-asset.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1205
- relation: template-use
- snippet: `| `prompts/templates/08-capitalize-method-asset.md` | Capitalize Method Asset | Candidate |`

### `prompts/templates/09-prepare-notion-mapping.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1206
- relation: template-use
- snippet: `| `prompts/templates/09-prepare-notion-mapping.md` | Prepare Notion Mapping | Candidate |`

### `prompts/templates/10-perform-safe-repository-cleanup.md` — **operational confirmé**
- consumer: `prompts/prompt-catalog.md`
- reference: L1207
- relation: template-use
- snippet: `| `prompts/templates/10-perform-safe-repository-cleanup.md` | Perform Safe Repository Cleanup | Cand`

### `prompts/templates/sfia-cycle-execution-template.md` — **non-operational**
- consumer déclaré/graphe: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- segment: `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

### `prompts/tooling/penpot/penpot-design-agent-prompt-family.md` — **operational confirmé**
- consumer: `docs/tooling/penpot/penpot-cursor-agent-rules.md`
- reference: L134
- relation: method-use
- snippet: `- Prompts : [`../../../prompts/tooling/penpot/penpot-design-agent-prompt-family.md`](../../../prompt`

### `prompts/ux-ui/ux-ui-reprise-prompt-family.md` — **non-operational**
- consumer déclaré/graphe: `docker/penpot/docker-compose.override.example.yml`
- segment: `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

## Synthèse résultats

| Métrique | Avant | Après |
|----------|------:|------:|
| operational | 577 | 469 |
| non-operational | 443 | 545 |
| unknown | 25 | 31 |
| operational confirmés (D) | — | 89 |
| rétrogradés non-operational (D) | — | 102 |
| rétrogradés unknown (D) | — | 6 |

## Nouveaux unknown (6)

- `method/sfia-fast-track/checklists/guardrails-checklist.md`
- `method/sfia-fast-track/checklists/notion-publication-checklist.md`
- `method/sfia-fast-track/checklists/validation-checklist.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

## Unknown globaux (31)

- `method/sfia-fast-track/checklists/guardrails-checklist.md`
- `method/sfia-fast-track/checklists/notion-publication-checklist.md`
- `method/sfia-fast-track/checklists/validation-checklist.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
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

## Section rapport modifiée — §17 Direct Usage Evidence Final Review

**Horodatage :** 2026-07-11 19:35 Europe/Paris
**HEAD initial :** `e48980216e86a4092cbfe3b859c7ff274ccd0272`
**Commit substantif :** *(review pack / handoff — pas d’auto-référence amend dans ce document)*
**HEAD courant PR :** *(review pack / handoff)*

### Définition de D

Lignes avec `usage = operational` et `usage-graph-review;result=operational` — les **197** operational conservés après Usage Evidence Graph Review.

### Volume D

**|D| = 197**

### Matrice préalable

| Métrique | Valeur |
|----------|-------:|
| Consommateurs directs déclarés (graphe) | **11** |
| Références exactes dans consommateur déclaré | **15** |
| Références absentes dans consommateur déclaré | **182** |
| Chaînes `projects/interv360/app/src/tests/README.md` | **24** |
| Chaînes `projects/interv360/app/src/domain/README.md` | **72** |
| Chaînes `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | **43** |
| Chaînes `exports/notion/export-manifest.json` | **6** |
| Chaînes `docs/architecture/README.md` | **0** |

**Top consommateurs déclarés (graphe) :** domain README Interv360 (72), rules-and-guardrails (43), docker-compose.test.yml (27), tests README Interv360 (24), backend types.ts (12), export-manifest (6).

### Méthode de preuve directe

Pour chaque ligne de D : ouverture du consommateur déclaré ou recherche d’un référent direct unique ; capture ligne/section/import ; vérification direction **consumer → current_path** ; type relation fonctionnel ; activité indépendante du consommateur ; format `usage-direct-review;result=…;consumer=…;reference=…;relation=…;consumer-active-proof=…;current-use=…;confidence=…`. Chaînes indirectes, citation-only, audit-only et README génériques Interv360 rejetés.

### Résultats avant / après (direct)

| Usage | Avant | Après | Δ |
|-------|------:|------:|--:|
| operational | 577 | **469** | −108 |
| non-operational | 443 | **545** | +102 |
| unknown | 25 | **31** | +6 |

### Résultats sur D

| Action | Count |
|--------|------:|
| operational **confirmés** (preuve directe complète) | **89** |
| rétrogradés **non-operational** | **102** |
| rétrogradés **unknown** | **6** |

### Usage global final

| Usage | Count |
|-------|------:|
| operational | **469** |
| non-operational | **545** |
| unknown | **31** |

### Unknown globaux (31)

- **25** inchangés (18 revue evidence + 7 graphe)
- **6** nouveaux (preuve directe partielle — consommateur en D sans preuve propre)

Liste exhaustive des 6 nouveaux unknown :

1. `method/sfia-fast-track/checklists/guardrails-checklist.md`
2. `method/sfia-fast-track/checklists/notion-publication-checklist.md`
3. `method/sfia-fast-track/checklists/validation-checklist.md`
4. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
5. `method/sfia-fast-track/core/sfia-knowledge-layer.md`
6. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

### Exemples preuves directes valides

- `docs/tooling/penpot/penpot-mcp-self-host-rex.md` L50 → `.cursor/mcp-templates/penpot-mcp.example.json` (method-use, lien markdown)
- `exports/notion/export-manifest.json` L7–L14 → payloads Notion JSON (manifest, processus export actif)
- `prompts/prompt-catalog.md` L35 → `docs/architecture/sfia-decision-engine.md` (template-use, génération prompts SFIA)
- `docs/tooling/penpot/penpot-cursor-agent-rules.md` L117 → `docker/penpot/README.md` (method-use)

### Exemples chaînes / preuves rejetées

- `projects/interv360/app/src/domain/README.md` → méthodes BPMN / standards sans lien domaine applicatif (**42** rejets `interv360-domain-readme-generic`)
- `projects/interv360/app/src/tests/README.md` → templates SFIA / Penpot sans lien tests (**15** rejets `interv360-tests-readme-generic`)
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` → cibles hors guardrails sans référence directe (**6** rejets)
- Chaîne docker-compose → QA docs sans référence dans le YAML (**39** rejets `indirect-chain-no-direct-reference`)
- `sfia-foundation-v1.1-consolidation-plan.md` → table inventaire architecture (citation-only / inventory)
- closure-report / runbook « Références » → listes documentaires sans consommation fonctionnelle

### Références absentes / directions

| Contrôle | Count |
|----------|------:|
| Référence directe absente (consommateur déclaré) | **182** (matrice préalable) |
| Directions inversées acceptées | **0** |
| Citation-only conservées | **0** |

### Contrôles prioritaires

| Racine | Résultat |
|--------|----------|
| README tests Interv360 | **0** confirmé / **15** rejeté — racine générique invalidée |
| README domain Interv360 | **0** confirmé / **42** rejeté — racine générique invalidée |
| rules-and-guardrails | **0** confirmé via racine générique / **6** rejetés |
| docs/architecture/README | **0** dans D |
| export-manifest | **6/6** confirmés — référence directe + manifest actif |

### Anomalies hors passe

Aucune — lifecycle, authority, lots et dispositions inchangés.

### Statut final

**USAGE DIMENSION FROZEN** — Pass Authority pending.

---

## Section plan modifiée — en-tête statut Usage

```
# SFIA v2.6 — Repository Migration Lots Plan (Final Scope)

*Plan de mise en conformité — périmètre stable 1045 — Lots B/C disjoints*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`
**Date et heure :** 2026-07-11 19:35 Europe/Paris
**Statut :** **Candidate** — contrat gelé — **USAGE DIMENSION FROZEN** — aucune exécution
**Cycle :** Validation corrective finale — Direct Usage Evidence Final Review
**Profil SFIA :** **Critical**
**Base inventaire :** `072058a` — **1045 fichiers**
**Artefacts audit exclus :** 3 livrables PR #165 (hors CSV)
**Source CSV :** SHA-256 `2000dc36a3410ec37a803d0baeb53846eda67b38cd1d45bfbc805bda8a0ab51a`

**Pass Lifecycle :** **completed and corrected**
**Pass Usage :** **completed**
**Usage Evidence Corrective Review :** **completed**
**Usage Evidence Graph Review :** **completed**
**Direct Usage Evidence Final Review :** **completed**
**Usage dimension :** **frozen**
**Pass Authority :** **pending**

---

## 1. Règle de non-double-affectation B/C

```

## Preuve Lifecycle inchangé

- lifecycle_status: 0 modification
- lifecycle_applicability: 0 modification

## Preuve Authority inchangée

- authority: 0 modification

## Preuve lots/dispositions inchangés

- migration_lot_candidate: 0 modification
- proposed_disposition: 0 modification

## CSV Large Artifact Protocol

- chemin: `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv`
- SHA-256: `2000dc36a3410ec37a803d0baeb53846eda67b38cd1d45bfbc805bda8a0ab51a`
- lignes: 1045
- champs: 36
- synthesis only = no

### En-tête complet

current_path,filename,extension,size_bytes,primary_family,subfamily,lifecycle_status,lifecycle_applicability,authority,usage,scope,project,phase,trajectory,trajectory_role,logical_location_current,logical_location_target,naming_rule_regime,naming_compliance,location_compliance,metadata_profile,content_summary,incoming_references,outgoing_references,duplicate_or_overlap,canonical_candidate,proposed_disposition,proposed_target_path,proposed_target_filename,rationale,risk_level,morris_gate_required,confidence,evidence,reserve_or_question,migration_lot_candidate

### 20 premières lignes

.cursor/mcp-templates/README.md|README.md|md|3733|F13||candidate|document-lifecycle|reference|non-operational|repository|||SFIA v2.4|baseline|repository|repository|documentary|compliant|compliant|E|# Cursor MCP templates — Penpot **Dossier** : `.cursor/mcp-templates/` **Statut** : Exemples non secrets — configurat|docs/tooling/penpot/penpot-cursor-agent-rules.md; docs/tooling/penpot/penpot-self-host-docker-guide.md|](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-design-agent-architecture.md); ](../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-cursor-agent-rules.md)|no|no|keep|.cursor/mcp-templates/README.md|README.md|Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.gitignore`. Usage Graph Review: non-operational — no-active-root.|low|no|medium|lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=.cursor/mcp-templates/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.gitignore;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=no-active-root;checks=gitignore-invalid-edge;confidence=medium|Usage Graph Review: non-operational (no-active-root) — consumer `.gitignore`, edge=gitignore-invalid. Checks: gitignore-invalid-edge. |lot-E
.cursor/mcp-templates/penpot-mcp.example.json|penpot-mcp.example.json|json|265|F17||not-applicable|not-applicable|informational|operational|repository|||SFIA v2.4|baseline|repository|repository|technical-convention|compliant|compliant|N/A|{ "mcpServers": { "penpot-self-host": { "type": "http", "url": "http://localhost:9001/mcp/stream?userT|.cursor/mcp-templates/README.md; docs/tooling/penpot/penpot-mcp-self-host-rex.md; docs/tooling/penpot/penpot-self-host-docker-guide.md||no|no|keep|.cursor/mcp-templates/penpot-mcp.example.json|penpot-mcp.example.json|Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`. Direct Usage Review: operational via `docs/tooling/penpot/penpot-mcp-self-host-rex.md` L50.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-review;result=operational;proof=external-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> .cursor/mcp-templates/penpot-mcp.example.json;relation=mcp-procedure;consumer-status=runtime-root;confidence=high;usage-direct-review;result=operational;consumer=docs/tooling/penpot/penpot-mcp-self-host-rex.md;reference=L50;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high|Direct Usage Review: operational — `docs/tooling/penpot/penpot-mcp-self-host-rex.md` L50 (method-use). Ref: `Voir aussi : [`.cursor/mcp-templates/penpot-mcp.example.json`](../../../.cursor/`. Active: operational-outside-graph-set. directly referenced by active consumer for current operational purpose.|lot-E
.github/workflows/interv360-ci.yml|interv360-ci.yml|yml|1225|F16||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|name: Interv360 CI on: pull_request: paths: - "projects/interv360/**" - ".github/workflows/interv360-|||no|no|keep|.github/workflows/interv360-ci.yml|interv360-ci.yml|Regime technical-convention; family F16; D10 compliant (current=tools, target=tools); lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=inferred-role;usage-pass;result=operational;proof=active-config-reference;source=.github/workflows/interv360-ci.yml;confidence=high;checks=repository/tooling configuration artifact|Usage Pass: qualified operational (active-config-reference). Lifecycle inferred insufficiently. Heuristic qualification only — not validated.|lot-I
.gitignore|.gitignore|none|262|F17||not-applicable|not-applicable|informational|non-operational|repository|||SFIA v2.4|baseline|repository|repository|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (none)|||no|no|keep|.gitignore|.gitignore|Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference. Usage Evidence Review: operational confirmed via `docker/penpot/README.md`. Usage Graph Review: non-operational — no-active-root.|low|no|medium|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=.gitignore;confidence=high;checks=repository/tooling configuration artifact;usage-review;result=operational;proof=active-config-reference;consumer=docker/penpot/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=no-active-root;checks=gitignore-invalid-edge;confidence=medium|Usage Graph Review: non-operational (no-active-root) — consumer `docker/penpot/README.md`, edge=gitignore-invalid. Checks: gitignore-invalid-edge. |lot-E
README.md|README.md|md|3571|F13||candidate|document-lifecycle|reference|non-operational|repository|||SFIA v2.4|baseline|repository|repository|documentary|compliant|compliant|E|# SFIA Workspace Workspace local officiel de la **SFIA** (Software Factory & Intelligence Architecture). Ce dépôt est|||no|no|keep|README.md|README.md|Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.|low|no|medium|lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium|Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. |lot-E
components/README.md|README.md|md|224|F13||candidate|document-lifecycle|reference|non-operational|repository|||SFIA v2.4|baseline|repository|repository|documentary|compliant|compliant|E|# Components Espace local pour les notes et artefacts liés aux composants SFIA. Le registre officiel des composants re|||no|no|keep|components/README.md|README.md|Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.|low|no|medium|lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=components/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium|Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. |lot-E
docker/penpot/.env.example|.env.example|example|400|F17||not-applicable|not-applicable|informational|non-operational|repository|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (example)|||no|no|keep|docker/penpot/.env.example|.env.example|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference. Usage Evidence Review: operational confirmed via `.gitignore`. Usage Graph Review: non-operational — inactive-consumer.|low|no|medium|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=docker/penpot/.env.example;confidence=high;checks=environment/config template for active tooling onboarding;usage-review;result=operational;proof=active-config-reference;consumer=.gitignore;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=gitignore-invalid-edge+inactive-consumer-non-operational;confidence=medium|Usage Graph Review: non-operational (inactive-consumer) — consumer `.gitignore`, edge=gitignore-invalid. Checks: gitignore-invalid-edge; inactive-consumer-non-operational. |lot-E
docker/penpot/README.md|README.md|md|2792|F13||candidate|document-lifecycle|reference|operational|repository|||SFIA v2.4|baseline|tools|tools|documentary|compliant|compliant|E|# Penpot Docker — Templates SFIA **Dossier** : `docker/penpot/` **Statut** : Templates sûrs — pas d'installation stan||](https://help.penpot.app/technical-guide/getting-started/docker/); ](https://help.penpot.app/technical-guide/getting-started/); ](https://help.penpot.app/technical-guide/getting-started/docker/); ](../../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../.cursor/mcp-templates/penpot-mcp.example.json)|no|no|keep|docker/penpot/README.md|README.md|Regime documentary; family F13; D10 compliant (current=tools, target=tools); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`. Direct Usage Review: operational via `docs/tooling/penpot/penpot-cursor-agent-rules.md` L117.|low|no|high|lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docker/penpot/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> docker/penpot/README.md;relation=mcp-procedure;consumer-status=runtime-root;confidence=high;usage-direct-review;result=operational;consumer=docs/tooling/penpot/penpot-cursor-agent-rules.md;reference=L117;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high|Direct Usage Review: operational — `docs/tooling/penpot/penpot-cursor-agent-rules.md` L117 (method-use). Ref: `Voir : [`penpot-mcp-self-host-rex.md`](penpot-mcp-self-host-rex.md), [`.cursor/m`. Active: operational-outside-graph-set. directly referenced by active consumer for current operational purpose.|lot-E
docker/penpot/docker-compose.override.example.yml|docker-compose.override.example.yml|yml|378|F17||not-applicable|not-applicable|informational|operational|repository|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|# Example override for a local SFIA Penpot setup. # Use only with the official Penpot docker-compose.yml. # Do not treat|docker/penpot/README.md||no|no|keep|docker/penpot/docker-compose.override.example.yml|docker-compose.override.example.yml|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=docker/penpot/docker-compose.override.example.yml;confidence=high;checks=environment/config template for active tooling onboarding|Usage Pass: qualified operational (active-config-reference). Heuristic qualification only — not validated.|lot-E
docs/README.md|README.md|md|1104|F13||candidate|document-lifecycle|reference|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|E|# SFIA Platform Documentation Ce dossier contient la documentation plateforme SFIA. Il est distinct de la méthode acti|||no|no|keep|docs/README.md|README.md|Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.|low|no|medium|lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium|Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. |lot-E
docs/adr/README.md|README.md|md|131|F13||candidate|document-lifecycle|reference|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|E|# ADR Architecture Decision Records — décisions structurantes tracées. Source Notion : base ADR (`exports/notion/adr.j|||no|no|keep|docs/adr/README.md|README.md|Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.|low|no|medium|lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/adr/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium|Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. |lot-E
docs/architecture/README.md|README.md|md|1966|F13||candidate|document-lifecycle|reference|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|E|# SFIA Architecture Documentation d'architecture SFIA : Domain Model, composants, flux et vues. Source Notion : Compon|||no|no|keep|docs/architecture/README.md|README.md|Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.|low|no|medium|lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/architecture/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium|Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. |lot-E
docs/architecture/sfia-decision-engine.md|sfia-decision-engine.md|md|56513|F06||validated|document-lifecycle|unknown|operational|tooling|||N/A|N/A|docs|docs|documentary|non-compliant|compliant|F|--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati|docs/architecture/README.md||no|no|rename|docs/architecture/sfia-decision-engine.md|YYYY-MM-DD-sfia-decision-engine.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: operational via `prompts/prompt-catalog.md` L35.|low|no|high|lifecycle-corrective;strong-proof=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;all=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-decision-engine.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-decision-engine.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=operational;consumer=prompts/prompt-catalog.md;reference=L35;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high|Direct Usage Review: operational — `prompts/prompt-catalog.md` L35 (template-use). Ref: `- `docs/architecture/sfia-decision-engine.md``. Active: operational-outside-graph-set. directly referenced by active consumer for current operational purpose.|lot-D
docs/architecture/sfia-delivery-pipeline.md|sfia-delivery-pipeline.md|md|57907|F06||validated|document-lifecycle|unknown|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:|docs/architecture/README.md||no|no|keep|docs/architecture/sfia-delivery-pipeline.md|sfia-delivery-pipeline.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.|low|no|medium|lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-delivery-pipeline.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-delivery-pipeline.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium|Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.|lot-E
docs/architecture/sfia-domain-model.md|sfia-domain-model.md|md|26327|F06||validated|document-lifecycle|unknown|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:|docs/architecture/README.md||no|no|keep|docs/architecture/sfia-domain-model.md|sfia-domain-model.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.|low|no|medium|lifecycle-corrective;proof=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-domain-model.md;confidence=high;checks=validated doc referenced by 16 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-domain-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium|Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.|lot-E
docs/architecture/sfia-meta-model.md|sfia-meta-model.md|md|45992|F06||validated|document-lifecycle|unknown|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:|docs/architecture/README.md||no|no|keep|docs/architecture/sfia-meta-model.md|sfia-meta-model.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.|low|no|medium|lifecycle-corrective;strong-proof=explicit-status+canonical-source;all=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-meta-model.md;confidence=high;checks=validated doc referenced by 15 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-meta-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium|Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.|lot-E
docs/architecture/sfia-platform-architecture.md|sfia-platform-architecture.md|md|63116|F06||validated|document-lifecycle|unknown|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:|docs/architecture/README.md||no|no|keep|docs/architecture/sfia-platform-architecture.md|sfia-platform-architecture.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.|low|no|medium|lifecycle-corrective;proof=explicit-status+merged-approved-cycle+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-platform-architecture.md;confidence=high;checks=validated doc referenced by 19 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-platform-architecture.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium|Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.|lot-E
docs/architecture/sfia-repository-blueprint.md|sfia-repository-blueprint.md|md|41225|F06||validated|document-lifecycle|unknown|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:|docs/architecture/README.md||no|no|keep|docs/architecture/sfia-repository-blueprint.md|sfia-repository-blueprint.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.|low|no|medium|lifecycle-corrective;proof=explicit-status+merged-approved-cycle+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-repository-blueprint.md;confidence=high;checks=validated doc referenced by 27 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-repository-blueprint.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium|Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.|lot-E
docs/foundation/README.md|README.md|md|208|F13||archived|document-lifecycle|reference|non-operational|tooling|||SFIA v1.1|historical|docs|docs|documentary|compliant|compliant|E|# Foundation Principes fondateurs, gouvernance et cadre de la plateforme SFIA. Source Notion : Knowledge Articles, Sta|||no|no|archive|docs/foundation/README.md|README.md|Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective archived. Usage Pass: operational per explicit-current-use. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.|low|no|medium|lifecycle-pass-L;trajectory-v1.1-historical;readme-index-role;git=586671c init: create SFIA workspace structure;usage-pass;result=operational;proof=explicit-current-use;source=docs/foundation/README.md;confidence=high;checks=archive disposition but 78 active consumer(s);usage-review;result=operational;proof=explicit-current-use;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium|Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. |lot-E
docs/foundation/sfia-engineering-principles.md|sfia-engineering-principles.md|md|10488|F06||validated|document-lifecycle|unknown|operational|tooling|||SFIA v1.1|historical|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati|docs/architecture/README.md||no|no|keep|docs/foundation/sfia-engineering-principles.md|sfia-engineering-principles.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: operational via `prompts/prompt-catalog.md` L34.|low|no|high|lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/foundation/sfia-engineering-principles.md;confidence=high;checks=validated doc referenced by 48 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/foundation/sfia-engineering-principles.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=operational;consumer=prompts/prompt-catalog.md;reference=L34;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high|Direct Usage Review: operational — `prompts/prompt-catalog.md` L34 (template-use). Ref: `- `docs/foundation/sfia-engineering-principles.md``. Active: operational-outside-graph-set. directly referenced by active consumer for current operational purpose.|lot-E

### 20 dernières lignes

tools/cmp-001/src/schemas/template.schema.json|template.schema.json|json|642|F15||draft|technical-artifact-lifecycle|unknown|operational|tooling|||SFIA v2.4|baseline|tools|tools|unknown|unknown|compliant|F|{ "$schema": "https://json-schema.org/draft/2020-12/schema", "title": "Template", "type": "object", "properties"|||no|no|investigate|tools/cmp-001/src/schemas/template.schema.json|template.schema.json|Regime unknown; family F15; D10 compliant (current=tools, target=tools); D12 unknown.; lifecycle-corrective draft. Usage Pass: operational per manifest-reference.|low|no|high|path+content-sample+regime=unknown+incoming=0;usage-pass;result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/template.schema.json;confidence=high;checks=schema consumed by CMP tooling|Usage Pass: qualified operational (manifest-reference). Naming rule regime uncertain — investigate before rename. Documentary naming status uncertain. Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createADR.js|createADR.js|js|111|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createADR.js|createADR.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createADR.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createComponent.js|createComponent.js|js|123|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createComponent.js|createComponent.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createComponent.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createExperiment.js|createExperiment.js|js|125|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createExperiment.js|createExperiment.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createExperiment.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createKPI.js|createKPI.js|js|111|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createKPI.js|createKPI.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createKPI.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createKnowledgeArticle.js|createKnowledgeArticle.js|js|130|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createKnowledgeArticle.js|createKnowledgeArticle.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createKnowledgeArticle.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createObject.js|createObject.js|js|826|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createObject.js|createObject.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createObject.js;confidence=high;checks=code artifact with 11 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createProject.js|createProject.js|js|119|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createProject.js|createProject.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createProject.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createPrompt.js|createPrompt.js|js|117|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createPrompt.js|createPrompt.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createPrompt.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createREX.js|createREX.js|js|111|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createREX.js|createREX.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createREX.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createReferencePage.js|createReferencePage.js|js|132|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createReferencePage.js|createReferencePage.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createReferencePage.js;confidence=high;checks=code artifact with 1 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createStandard.js|createStandard.js|js|121|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createStandard.js|createStandard.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createStandard.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/createTemplate.js|createTemplate.js|js|121|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/createTemplate.js|createTemplate.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createTemplate.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/discover.js|discover.js|js|5562|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/discover.js|discover.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/discover.js;confidence=high;checks=code artifact with 1 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/export.js|export.js|js|7318|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/export.js|export.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/export.js;confidence=high;checks=code artifact with 1 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/updateKnowledgeArticle.js|updateKnowledgeArticle.js|js|130|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/updateKnowledgeArticle.js|updateKnowledgeArticle.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/updateKnowledgeArticle.js;confidence=high;checks=code artifact with 1 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/updateObject.js|updateObject.js|js|735|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/updateObject.js|updateObject.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/updateObject.js;confidence=high;checks=code artifact with 2 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/services/updateProject.js|updateProject.js|js|119|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|||no|no|keep|tools/cmp-001/src/services/updateProject.js|updateProject.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/updateProject.js;confidence=high;checks=code artifact with 1 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/src/validate.js|validate.js|js|3691|F17||not-applicable|not-applicable|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|tools/cmp-001/CHANGELOG.md||no|no|keep|tools/cmp-001/src/validate.js|validate.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per runtime-reference.|low|no|high|lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/src/validate.js;confidence=high;checks=code artifact with 4 active importer(s)+application/tooling source|Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.|lot-I
tools/cmp-001/tests/run-all-tests.js|run-all-tests.js|js|4453|F17||validated|technical-artifact-lifecycle|informational|non-operational|tooling|||SFIA v2.4|baseline|tools|tools|technical-convention|compliant|compliant|N/A|Binary or non-text artifact (js)|tools/cmp-001/CHANGELOG.md||no|no|keep|tools/cmp-001/tests/run-all-tests.js|run-all-tests.js|Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective validated. Usage Pass: operational per runtime-reference. Usage Evidence Review: operational confirmed via `tools/cmp-001/CHANGELOG.md`. Usage Graph Review: non-operational — citation-only.|low|no|medium|path+content-sample+regime=technical-convention+incoming=1; convention=dot-separated tool convention;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/tests/run-all-tests.js;confidence=high;checks=technical artifact with active consumer;usage-review;result=operational;proof=runtime-reference;consumer=tools/cmp-001/CHANGELOG.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium|Usage Graph Review: non-operational (citation-only) — consumer `tools/cmp-001/CHANGELOG.md`, edge=document-reference. Checks: inactive-consumer-non-operational. |lot-I

### Lignes D modifiées (197)

#### `.cursor/mcp-templates/penpot-mcp.example.json`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=docs/tooling/penpot/penpot-mcp-self-host-rex.md;reference=L50;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by act`

#### `docker/penpot/README.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=docs/tooling/penpot/penpot-cursor-agent-rules.md;reference=L117;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by a`

#### `docs/architecture/sfia-decision-engine.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L35;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for cur`

#### `docs/architecture/sfia-delivery-pipeline.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

#### `docs/architecture/sfia-domain-model.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

#### `docs/architecture/sfia-meta-model.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

#### `docs/architecture/sfia-platform-architecture.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

#### `docs/architecture/sfia-repository-blueprint.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

#### `docs/foundation/sfia-engineering-principles.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L34;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for cur`

#### `docs/practices/process/bpmn-deliverables-standard.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `docs/practices/process/bpmn-integration-checklist.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `docs/practices/process/bpmn-method-integration-audit.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `docs/practices/process/bpmn-process-modeling-method.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `docs/practices/roles/qa-tester-method.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `docs/templates/tooling/penpot/README.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=docs/tooling/penpot/penpot-cursor-agent-rules.md;reference=L117;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by a`

#### `docs/tooling/penpot/penpot-sfia-method-integration.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=docs/tooling/penpot/penpot-cursor-agent-rules.md;reference=L7;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked from active index f`

#### `exports/notion/components.json`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=exports/notion/export-manifest.json;reference=L14;relation=manifest;consumer-active-proof=export-manifest-index;current-use=listed in active Notion export manifest for publ`

#### `exports/notion/experiments.json`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=exports/notion/export-manifest.json;reference=L7;relation=manifest;consumer-active-proof=export-manifest-index;current-use=listed in active Notion export manifest for publi`

#### `exports/notion/kpi.json`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=exports/notion/export-manifest.json;reference=L56;relation=manifest;consumer-active-proof=export-manifest-index;current-use=listed in active Notion export manifest for publ`

#### `exports/notion/projects.json`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=exports/notion/export-manifest.json;reference=L70;relation=manifest;consumer-active-proof=export-manifest-index;current-use=listed in active Notion export manifest for publ`

#### `exports/notion/standards.json`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=exports/notion/export-manifest.json;reference=L35;relation=manifest;consumer-active-proof=export-manifest-index;current-use=listed in active Notion export manifest for publ`

#### `exports/notion/templates.json`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=exports/notion/export-manifest.json;reference=L28;relation=manifest;consumer-active-proof=export-manifest-index;current-use=listed in active Notion export manifest for publ`

#### `method/complementary/controlled-delivery/controlled-delivery-checklist.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `method/complementary/controlled-delivery/controlled-delivery-publication-package.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `method/complementary/controlled-delivery/controlled-delivery-standard.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `method/complementary/controlled-delivery/controlled-delivery-template.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `method/sfia-fast-track/audit-rex/interv360-application-rex.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `method/sfia-fast-track/automation/sfia-automation-architecture.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L39;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for cur`

#### `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L36;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for cur`

#### `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L37;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for cur`

#### `method/sfia-fast-track/automation/sfia-validation-engine.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L38;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for cur`

#### `method/sfia-fast-track/checklists/guardrails-checklist.md`
- usage: unknown (action: downgrade_unknown)
- evidence (direct segment): `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;confidence=low`

#### `method/sfia-fast-track/checklists/notion-publication-checklist.md`
- usage: unknown (action: downgrade_unknown)
- evidence (direct segment): `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;confidence=low`

#### `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L40;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for cur`

#### `method/sfia-fast-track/checklists/validation-checklist.md`
- usage: unknown (action: downgrade_unknown)
- evidence (direct segment): `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;confidence=low`

#### `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- usage: unknown (action: downgrade_unknown)
- evidence (direct segment): `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;confidence=low`

#### `method/sfia-fast-track/core/sfia-consolidation-roadmap.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/core/sfia-global-capitalization.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- usage: unknown (action: downgrade_unknown)
- evidence (direct segment): `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;confidence=low`

#### `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- usage: unknown (action: downgrade_unknown)
- evidence (direct segment): `result=unknown;proof=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;checks=consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof;confidence=low`

#### `method/sfia-fast-track/core/sfia-rules-update.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `method/sfia-fast-track/cycles/interv360-final-capitalization.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/05-technical-architecture/validation-and-delivery-readiness.md;reference=L89;relation=method-use;consumer-active-proof=operational-outside-graph-se`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/09-capitalization/mvp-capitalization-report.md;reference=L185;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=d`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/04-design/design-decisions.md;reference=L15;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1282;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/09-capitalization/inc-01-capitalization-report.md;reference=L175;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-us`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/00-framing/project-framing.md;reference=L35;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/00-framing/project-framing.md;reference=L34;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1328;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `method/sfia-fast-track/documentation/notion-publication-plan.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/templates/audit-template.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/templates/cycle-template.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/templates/post-merge-template.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `method/sfia-fast-track/templates/pr-body-template.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `method/sfia-fast-track/templates/rex-template.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `method/sfia-fast-track/ui/figma-design-first-ui-method.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md;reference=L45;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=`

#### `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md;reference=L46;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=`

#### `projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/00-framing/project-framing.md;reference=L246;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly reference`

#### `projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/00-framing/project-framing.md;reference=L256;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly reference`

#### `projects/chantiers360-v2/04-design/captures/01-dashboard-cockpit-premium.png`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/04-design/figma-brief.md;reference=L50;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by a`

#### `projects/chantiers360-v2/04-design/captures/02-fiche-chantier-taches.png`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/04-design/figma-brief.md;reference=L51;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by a`

#### `projects/chantiers360-v2/04-design/captures/03-fiche-chantier-reserves.png`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/04-design/figma-brief.md;reference=L52;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by a`

#### `projects/chantiers360-v2/04-design/captures/04-creation-chantier.png`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/04-design/figma-brief.md;reference=L53;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by a`

#### `projects/chantiers360-v2/04-design/figma-review-checklist.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/00-framing/project-framing.md;reference=L272;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly reference`

#### `projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/00-framing/project-framing.md;reference=L280;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly reference`

#### `projects/chantiers360-v2/06-figma-fidelity-spike/figma-reference.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md;reference=L12;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-us`

#### `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-implementation-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md;reference=L40;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=d`

#### `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md;reference=L161;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=dir`

#### `projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md;reference=L34;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=d`

#### `projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/05-technical-architecture/validation-and-delivery-readiness.md;reference=L87;relation=method-use;consumer-active-proof=operational-outside-graph-se`

#### `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/09-capitalization/inc-01-capitalization-report.md;reference=L165;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-us`

#### `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-implementation-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-decisions.md;reference=L38;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=d`

#### `projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-validation-report.md;reference=L39;relation=method-use;consumer-active-proof=operational-outside-graph-set;curre`

#### `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md;reference=L49;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=`

#### `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md;reference=L47;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=`

#### `projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md;reference=L161;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=dir`

#### `projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md;reference=L161;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=dir`

#### `projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md;reference=L161;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=dir`

#### `projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md;reference=L161;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=dir`

#### `projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md;reference=L47;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=`

#### `projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/chantiers360-v2/09-capitalization/chantiers360-v2-final-pilot-rex-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/chantiers360-v2/09-capitalization/v0-vs-sfia-v2-methodological-comparison.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/chantiers360-v2/00-framing/project-framing.md;reference=L36;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced`

#### `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/interv360/02-architecture/architecture-p2-design-impact-summary.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/interv360/02-architecture/figma-first-draft-screens/05-dashboard-sav.png`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/03-design/figma-first-screen-review.md;reference=L76;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referen`

#### `projects/interv360/02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/03-design/figma-fresh-start-instructions.md;reference=L47;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked from`

#### `projects/interv360/02-architecture/figma-first-draft-screens/08-planning-semaine.png`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/03-design/figma-fresh-start-instructions.md;reference=L48;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked from`

#### `projects/interv360/02-architecture/figma-first-draft-screens/09-fiche-intervention-mobile.png`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/03-design/figma-fresh-start-instructions.md;reference=L49;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked from`

#### `projects/interv360/02-architecture/figma-first-draft-screens/10-compte-rendu-mobile.png`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/03-design/figma-fresh-start-instructions.md;reference=L50;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked from`

#### `projects/interv360/02-architecture/figma-first-draft-screens/11-suivi-erreurs-integration.png`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/03-design/figma-fresh-start-instructions.md;reference=L51;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked from`

#### `projects/interv360/02-architecture/figma-first-draft-screens/12-vue-dirigeant.png`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/03-design/figma-fresh-start-instructions.md;reference=L52;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked from`

#### `projects/interv360/02-architecture/mvp-clarifications-summary.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/02-architecture/geo-ai-arbitration.md;reference=L33;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenc`

#### `projects/interv360/02-architecture/rules-rg-prioritization-summary.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/02-architecture/closure-without-signature.md;reference=L35;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly r`

#### `projects/interv360/02-architecture/status-mapping-summary.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/02-architecture/closure-without-signature.md;reference=L37;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly r`

#### `projects/interv360/03-design/design-v2-cycle-opening.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/03-design/penpot-screen-prioritization.md;reference=L11;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked from a`

#### `projects/interv360/03-design/penpot-application-frame-template.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/03-design/figma-reprise-path.md;reference=L61;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked from active inde`

#### `projects/interv360/03-design/penpot-first-screen-v2-visual-instructions.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/03-design/penpot-first-screen-cycle-summary.md;reference=L9;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked fr`

#### `projects/interv360/04-delivery/auth-user-switcher.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/04-delivery/backend-users-session.md;reference=L25;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly reference`

#### `projects/interv360/04-delivery/batch-03-demo-readiness-package.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `projects/interv360/04-delivery/demo-feedback-review.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `projects/interv360/04-delivery/demo-mvp-closure.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/interv360/04-delivery/demo-polish.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/interv360/04-delivery/demo-presentation-feedback.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/interv360/04-delivery/demo-presentation-review.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `projects/interv360/04-delivery/end-to-end-demo-hardening.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `projects/interv360/04-delivery/frontend-api-connection-framing.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/interv360/04-delivery/frontend-api-connection.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium`

#### `projects/interv360/04-delivery/implementation-planning-plan.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/04-delivery/implementation-planning-summary.md;reference=L10;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked f`

#### `projects/interv360/04-delivery/premium-design-system.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium`

#### `projects/interv360/04-delivery/product-industrialization.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md;reference=L996;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly ref`

#### `projects/interv360/04-delivery/product-ux-finalization.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md;reference=L883;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly ref`

#### `projects/interv360/04-delivery/realization-preparation-plan.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/04-delivery/realization-preparation-summary.md;reference=L10;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked f`

#### `projects/interv360/04-delivery/realization-start-plan.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/04-delivery/realization-start-summary.md;reference=L10;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked from ac`

#### `projects/interv360/04-delivery/technical-design-plan.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/04-delivery/technical-design-summary.md;reference=L10;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked from act`

#### `projects/interv360/05-release/mvp-release-readiness.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md;reference=L1118;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly re`

#### `projects/interv360/08-presentation/interv360-demo-presentation-package.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/08-presentation/interv360-demo-one-page-summary.md;reference=L75;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=dire`

#### `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/04-delivery/backend-minimal-prototype.md;reference=L36;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly refer`

#### `projects/interv360/09-roadmap/interv360-next-product-axis.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/09-roadmap/interv360-auth-foundation-framing.md;reference=L46;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directl`

#### `projects/interv360/09-roadmap/interv360-product-roadmap-after-role-simulation.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

#### `projects/interv360/09-roadmap/interv360-product-roadmap-next.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=projects/interv360/09-roadmap/interv360-auth-and-user-framing.md;reference=L31;relation=navigation;consumer-active-proof=operational-outside-graph-set;current-use=linked fr`

#### `prompts/qa/delivery-qa-test-prompt-family.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1262;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/qa/qa-tester-prompt-family.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1264;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/templates/01-create-foundation-document.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1198;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/templates/02-update-document-v1-1.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1199;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/templates/03-create-operational-checklist.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1200;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/templates/04-validate-cursor-result.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1201;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/templates/05-validate-pr-readiness.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1202;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/templates/06-prepare-pr-summary.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1203;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/templates/07-write-post-merge-status.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1204;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/templates/08-capitalize-method-asset.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1205;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/templates/09-prepare-notion-mapping.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1206;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/templates/10-perform-safe-repository-cleanup.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=prompts/prompt-catalog.md;reference=L1207;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for c`

#### `prompts/templates/sfia-cycle-execution-template.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium`

#### `prompts/tooling/penpot/penpot-design-agent-prompt-family.md`
- usage: operational (action: confirmed)
- evidence (direct segment): `result=operational;consumer=docs/tooling/penpot/penpot-cursor-agent-rules.md;reference=L134;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by a`

#### `prompts/ux-ui/ux-ui-reprise-prompt-family.md`
- usage: non-operational (action: downgrade_non_operational)
- evidence (direct segment): `result=non-operational;proof=indirect-chain-no-direct-reference;checks=indirect-chain-no-direct-reference;confidence=medium`

## Diff utile

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
index 2ca837c..3466609 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
@@ -1,41 +1,41 @@
 current_path,filename,extension,size_bytes,primary_family,subfamily,lifecycle_status,lifecycle_applicability,authority,usage,scope,project,phase,trajectory,trajectory_role,logical_location_current,logical_location_target,naming_rule_regime,naming_compliance,location_compliance,metadata_profile,content_summary,incoming_references,outgoing_references,duplicate_or_overlap,canonical_candidate,proposed_disposition,proposed_target_path,proposed_target_filename,rationale,risk_level,morris_gate_required,confidence,evidence,reserve_or_question,migration_lot_candidate
 .cursor/mcp-templates/README.md,README.md,md,3733,F13,,candidate,document-lifecycle,reference,non-operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Cursor MCP templates — Penpot **Dossier** : `.cursor/mcp-templates/` **Statut** : Exemples non secrets — configurat,docs/tooling/penpot/penpot-cursor-agent-rules.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-design-agent-architecture.md); ](../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-cursor-agent-rules.md),no,no,keep,.cursor/mcp-templates/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.gitignore`. Usage Graph Review: non-operational — no-active-root.",low,no,medium,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=.cursor/mcp-templates/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.gitignore;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=no-active-root;checks=gitignore-invalid-edge;confidence=medium,"Usage Graph Review: non-operational (no-active-root) — consumer `.gitignore`, edge=gitignore-invalid. Checks: gitignore-invalid-edge. ",lot-E
-.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,json,265,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,"{ ""mcpServers"": { ""penpot-self-host"": { ""type"": ""http"", ""url"": ""http://localhost:9001/mcp/stream?userT",.cursor/mcp-templates/README.md; docs/tooling/penpot/penpot-mcp-self-host-rex.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,,no,no,keep,.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-review;result=operational;proof=external-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> .cursor/mcp-templates/penpot-mcp.example.json;relation=mcp-procedure;consumer-status=runtime-root;confidence=high,"Usage Graph Review: operational — chain `.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> .cursor/mcp-templates/penpot-mcp.example.json` (root: projects/interv360/app/src/tests/README.md, runtime-root).",lot-E
+.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,json,265,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,"{ ""mcpServers"": { ""penpot-self-host"": { ""type"": ""http"", ""url"": ""http://localhost:9001/mcp/stream?userT",.cursor/mcp-templates/README.md; docs/tooling/penpot/penpot-mcp-self-host-rex.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,,no,no,keep,.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`. Direct Usage Review: operational via `docs/tooling/penpot/penpot-mcp-self-host-rex.md` L50.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-review;result=operational;proof=external-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> .cursor/mcp-templates/penpot-mcp.example.json;relation=mcp-procedure;consumer-status=runtime-root;confidence=high;usage-direct-review;result=operational;consumer=docs/tooling/penpot/penpot-mcp-self-host-rex.md;reference=L50;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high,Direct Usage Review: operational — `docs/tooling/penpot/penpot-mcp-self-host-rex.md` L50 (method-use). Ref: `Voir aussi : [`.cursor/mcp-templates/penpot-mcp.example.json`](../../../.cursor/`. Active: operational-outside-graph-set. directly referenced by active consumer for current operational purpose.,lot-E
 .github/workflows/interv360-ci.yml,interv360-ci.yml,yml,1225,F16,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,"name: Interv360 CI on: pull_request: paths: - ""projects/interv360/**"" - "".github/workflows/interv360-",,,no,no,keep,.github/workflows/interv360-ci.yml,interv360-ci.yml,"Regime technical-convention; family F16; D10 compliant (current=tools, target=tools); lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=inferred-role;usage-pass;result=operational;proof=active-config-reference;source=.github/workflows/interv360-ci.yml;confidence=high;checks=repository/tooling configuration artifact,Usage Pass: qualified operational (active-config-reference). Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-I
 .gitignore,.gitignore,none,262,F17,,not-applicable,not-applicable,informational,non-operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (none),,,no,no,keep,.gitignore,.gitignore,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference. Usage Evidence Review: operational confirmed via `docker/penpot/README.md`. Usage Graph Review: non-operational — no-active-root.",low,no,medium,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=.gitignore;confidence=high;checks=repository/tooling configuration artifact;usage-review;result=operational;proof=active-config-reference;consumer=docker/penpot/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=no-active-root;checks=gitignore-invalid-edge;confidence=medium,"Usage Graph Review: non-operational (no-active-root) — consumer `docker/penpot/README.md`, edge=gitignore-invalid. Checks: gitignore-invalid-edge. ",lot-E
 README.md,README.md,md,3571,F13,,candidate,document-lifecycle,reference,non-operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# SFIA Workspace Workspace local officiel de la **SFIA** (Software Factory & Intelligence Architecture). Ce dépôt est,,,no,no,keep,README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
 components/README.md,README.md,md,224,F13,,candidate,document-lifecycle,reference,non-operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Components Espace local pour les notes et artefacts liés aux composants SFIA. Le registre officiel des composants re,,,no,no,keep,components/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=components/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
 docker/penpot/.env.example,.env.example,example,400,F17,,not-applicable,not-applicable,informational,non-operational,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (example),,,no,no,keep,docker/penpot/.env.example,.env.example,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference. Usage Evidence Review: operational confirmed via `.gitignore`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=docker/penpot/.env.example;confidence=high;checks=environment/config template for active tooling onboarding;usage-review;result=operational;proof=active-config-reference;consumer=.gitignore;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=gitignore-invalid-edge+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.gitignore`, edge=gitignore-invalid. Checks: gitignore-invalid-edge; inactive-consumer-non-operational. ",lot-E
-docker/penpot/README.md,README.md,md,2792,F13,,candidate,document-lifecycle,reference,operational,repository,,,SFIA v2.4,baseline,tools,tools,documentary,compliant,compliant,E,# Penpot Docker — Templates SFIA **Dossier** : `docker/penpot/` **Statut** : Templates sûrs — pas d'installation stan,,](https://help.penpot.app/technical-guide/getting-started/docker/); ](https://help.penpot.app/technical-guide/getting-started/); ](https://help.penpot.app/technical-guide/getting-started/docker/); ](../../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../.cursor/mcp-templates/penpot-mcp.example.json),no,no,keep,docker/penpot/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=tools, target=tools); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`.",low,no,high,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docker/penpot/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> docker/penpot/README.md;relation=mcp-procedure;consumer-status=runtime-root;confidence=high,"Usage Graph Review: operational — chain `.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> docker/penpot/README.md` (root: projects/interv360/app/src/tests/README.md, runtime-root).",lot-E
+docker/penpot/README.md,README.md,md,2792,F13,,candidate,document-lifecycle,reference,operational,repository,,,SFIA v2.4,baseline,tools,tools,documentary,compliant,compliant,E,# Penpot Docker — Templates SFIA **Dossier** : `docker/penpot/` **Statut** : Templates sûrs — pas d'installation stan,,](https://help.penpot.app/technical-guide/getting-started/docker/); ](https://help.penpot.app/technical-guide/getting-started/); ](https://help.penpot.app/technical-guide/getting-started/docker/); ](../../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../.cursor/mcp-templates/penpot-mcp.example.json),no,no,keep,docker/penpot/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=tools, target=tools); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`. Direct Usage Review: operational via `docs/tooling/penpot/penpot-cursor-agent-rules.md` L117.",low,no,high,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docker/penpot/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=.cursor/mcp-templates/README.md -> projects/interv360/app/src/tests/README.md -> docker/penpot/README.md;relation=mcp-procedure;consumer-status=runtime-root;confidence=high;usage-direct-review;result=operational;consumer=docs/tooling/penpot/penpot-cursor-agent-rules.md;reference=L117;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high,"Direct Usage Review: operational — `docs/tooling/penpot/penpot-cursor-agent-rules.md` L117 (method-use). Ref: `Voir : [`penpot-mcp-self-host-rex.md`](penpot-mcp-self-host-rex.md), [`.cursor/m`. Active: operational-outside-graph-set. directly referenced by active consumer for current operational purpose.",lot-E
 docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,yml,378,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,# Example override for a local SFIA Penpot setup. # Use only with the official Penpot docker-compose.yml. # Do not treat,docker/penpot/README.md,,no,no,keep,docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=docker/penpot/docker-compose.override.example.yml;confidence=high;checks=environment/config template for active tooling onboarding,Usage Pass: qualified operational (active-config-reference). Heuristic qualification only — not validated.,lot-E
 docs/README.md,README.md,md,1104,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Platform Documentation Ce dossier contient la documentation plateforme SFIA. Il est distinct de la méthode acti,,,no,no,keep,docs/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
 docs/adr/README.md,README.md,md,131,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# ADR Architecture Decision Records — décisions structurantes tracées. Source Notion : base ADR (`exports/notion/adr.j,,,no,no,keep,docs/adr/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/adr/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
 docs/architecture/README.md,README.md,md,1966,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,"# SFIA Architecture Documentation d'architecture SFIA : Domain Model, composants, flux et vues. Source Notion : Compon",,,no,no,keep,docs/architecture/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/architecture/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
-docs/architecture/sfia-decision-engine.md,sfia-decision-engine.md,md,56513,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,rename,docs/architecture/sfia-decision-engine.md,YYYY-MM-DD-sfia-decision-engine.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;all=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-decision-engine.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-decision-engine.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-decision-engine.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-D
-docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,md,57907,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-delivery-pipeline.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-delivery-pipeline.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-delivery-pipeline.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
-docs/architecture/sfia-domain-model.md,sfia-domain-model.md,md,26327,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-domain-model.md,sfia-domain-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;proof=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-domain-model.md;confidence=high;checks=validated doc referenced by 16 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-domain-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-domain-model.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
-docs/architecture/sfia-meta-model.md,sfia-meta-model.md,md,45992,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-meta-model.md,sfia-meta-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+canonical-source;all=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-meta-model.md;confidence=high;checks=validated doc referenced by 15 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-meta-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-meta-model.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
-docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,md,63116,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-platform-architecture.md;confidence=high;checks=validated doc referenced by 19 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-platform-architecture.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-platform-architecture.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
-docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,md,41225,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-repository-blueprint.md;confidence=high;checks=validated doc referenced by 27 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-repository-blueprint.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-repository-blueprint.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
+docs/architecture/sfia-decision-engine.md,sfia-decision-engine.md,md,56513,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,rename,docs/architecture/sfia-decision-engine.md,YYYY-MM-DD-sfia-decision-engine.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: operational via `prompts/prompt-catalog.md` L35.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;all=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-decision-engine.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-decision-engine.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=operational;consumer=prompts/prompt-catalog.md;reference=L35;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high,Direct Usage Review: operational — `prompts/prompt-catalog.md` L35 (template-use). Ref: `- `docs/architecture/sfia-decision-engine.md``. Active: operational-outside-graph-set. directly referenced by active consumer for current operational purpose.,lot-D
+docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,md,57907,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.",low,no,medium,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-delivery-pipeline.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-delivery-pipeline.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium,Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.,lot-E
+docs/architecture/sfia-domain-model.md,sfia-domain-model.md,md,26327,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-domain-model.md,sfia-domain-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.",low,no,medium,lifecycle-corrective;proof=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-domain-model.md;confidence=high;checks=validated doc referenced by 16 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-domain-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium,Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.,lot-E
+docs/architecture/sfia-meta-model.md,sfia-meta-model.md,md,45992,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-meta-model.md,sfia-meta-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.",low,no,medium,lifecycle-corrective;strong-proof=explicit-status+canonical-source;all=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-meta-model.md;confidence=high;checks=validated doc referenced by 15 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-meta-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium,Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.,lot-E
+docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,md,63116,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.",low,no,medium,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-platform-architecture.md;confidence=high;checks=validated doc referenced by 19 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-platform-architecture.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium,Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.,lot-E
+docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,md,41225,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.",low,no,medium,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-repository-blueprint.md;confidence=high;checks=validated doc referenced by 27 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-repository-blueprint.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium,Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.,lot-E
 docs/foundation/README.md,README.md,md,208,F13,,archived,document-lifecycle,reference,non-operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,E,"# Foundation Principes fondateurs, gouvernance et cadre de la plateforme SFIA. Source Notion : Knowledge Articles, Sta",,,no,no,archive,docs/foundation/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective archived. Usage Pass: operational per explicit-current-use. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-pass-L;trajectory-v1.1-historical;readme-index-role;git=586671c init: create SFIA workspace structure;usage-pass;result=operational;proof=explicit-current-use;source=docs/foundation/README.md;confidence=high;checks=archive disposition but 78 active consumer(s);usage-review;result=operational;proof=explicit-current-use;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
-docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,md,10488,F06,,validated,document-lifecycle,unknown,operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,keep,docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/foundation/sfia-engineering-principles.md;confidence=high;checks=validated doc referenced by 48 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/foundation/sfia-engineering-principles.md;relation=navigation;consumer-status=canonical-method-root;confidence=high,"Usage Graph Review: operational — chain `docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/foundation/sfia-engineering-principles.md` (root: method/sfia-fast-track/core/sfia-rules-and-guardrails.md, canonical-method-root).",lot-E
+docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,md,10488,F06,,validated,document-lifecycle,unknown,operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,keep,docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: operational via `prompts/prompt-catalog.md` L34.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/foundation/sfia-engineering-principles.md;confidence=high;checks=validated doc referenced by 48 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/foundation/sfia-engineering-principles.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=operational;consumer=prompts/prompt-catalog.md;reference=L34;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high,Direct Usage Review: operational — `prompts/prompt-catalog.md` L34 (template-use). Ref: `- `docs/foundation/sfia-engineering-principles.md``. Active: operational-outside-graph-set. directly referenced by active consumer for current operational purpose.,lot-E
 docs/knowledge/README.md,README.md,md,183,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# Knowledge Articles de connaissance SFIA. Source Notion : base Knowledge Articles (`exports/notion/knowledge.json`).,,,no,no,keep,docs/knowledge/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/knowledge/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
 docs/practices/README.md,README.md,md,592,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,"# SFIA Platform — Practices Ce dossier contient les pratiques plateforme SFIA par rôle, discipline ou domaine. Il ne c",,,no,no,keep,docs/practices/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/practices/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
 docs/practices/architecture/functional-architecture-checklist.md,functional-architecture-checklist.md,md,4845,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Checklist — Architecture fonctionnelle détaillée **Type** : Checklist SFIA **Domaine** : Architecture fonctionnelle,prompts/architecture/functional-architecture-prompt-family.md,,no,no,keep,docs/practices/architecture/functional-architecture-checklist.md,functional-architecture-checklist.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/templates/architecture/functional-architecture-cycle-closure-template.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=1;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-checklist.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/templates/architecture/functional-architecture-cycle-closure-template.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=consumer-depends-on-audit;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/templates/architecture/functional-architecture-cycle-closure-template.md`, edge=document-reference. Checks: consumer-depends-on-audit. ",lot-E
 docs/practices/architecture/functional-architecture-deliverables-standard.md,functional-architecture-deliverables-standard.md,md,9546,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Standard des livrables — Architecture fonctionnelle détaillée **Type** : Standard documentaire SFIA **Domaine** : A,docs/practices/architecture/functional-architecture-checklist.md; prompts/architecture/functional-architecture-prompt-family.md,,no,no,keep,docs/practices/architecture/functional-architecture-deliverables-standard.md,functional-architecture-deliverables-standard.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/architecture/functional-architecture-checklist.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=2;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-deliverables-standard.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/architecture/functional-architecture-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/architecture/functional-architecture-checklist.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
 docs/practices/architecture/functional-architecture-method.md,functional-architecture-method.md,md,12902,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Méthode — Architecture fonctionnelle détaillée **Type** : Méthode SFIA **Domaine** : Architecture fonctionnelle *,docs/practices/architecture/functional-architecture-checklist.md; prompts/architecture/functional-architecture-prompt-family.md,,no,no,keep,docs/practices/architecture/functional-architecture-method.md,functional-architecture-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/architecture/functional-architecture-checklist.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=2;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/architecture/functional-architecture-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/architecture/functional-architecture-checklist.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
 docs/practices/methods-structure-check.md,methods-structure-check.md,md,7511,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Methods Structure Check **Statut** : Draft **Objet** : contrôle de cohérence post-réorganisation des méthode,,,no,no,keep,docs/practices/methods-structure-check.md,methods-structure-check.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-method-cycle-closure.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/methods-structure-check.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/process/bpmn-method-cycle-closure.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=consumer-depends-on-audit;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/process/bpmn-method-cycle-closure.md`, edge=document-reference. Checks: consumer-depends-on-audit. ",lot-E
-docs/practices/process/bpmn-deliverables-standard.md,bpmn-deliverables-standard.md,md,5625,F06,,candidate,document-lifecycle,supporting,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Standard des livrables BPMN **Type** : Standard méthodologique **Statut** : Draft **Domaine** : Process Mo,docs/practices/process/bpmn-integration-checklist.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-method-integration-audit.md; docs/practices/process/bpmn-process-modeling-method.md; prompts/bpmn/bpmn-prompt-family.md,,no,no,keep,docs/practices/process/bpmn-deliverables-standard.md,bpmn-deliverables-standard.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective candidate. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-integration-checklist.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`.",low,no,high,path+content-sample+regime=documentary+incoming=5;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-integration-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=docs/practices/process/bpmn-integration-checklist.md -> projects/interv360/app/src/tests/README.md -> docs/practices/process/bpmn-deliverables-standard.md;relation=functional-reference;consumer-status=runtime-root;confidence=high,"Usage Graph Review: operational — chain `docs/practices/process/bpmn-integration-checklist.md -> projects/interv360/app/src/tests/README.md -> docs/practices/process/bpmn-deliverables-standard.md` (root: projects/interv360/app/src/tests/README.md, runtime-root).",lot-E
-docs/practices/process/bpmn-integration-checklist.md,bpmn-integration-checklist.md,md,5221,F06,,draft,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Checklist d'intégration BPMN **Type** : Checklist méthodologique **Statut** : Draft **Domaine** : Process,docs/practices/process/bpmn-deliverables-standard.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-method-integration-audit.md; docs/practices/process/bpmn-process-modeling-method.md; prompts/bpmn/bpmn-prompt-family.md,,no,no,keep,docs/practices/process/bpmn-integration-checklist.md,bpmn-integration-checklist.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-deliverables-standard.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`.",low,no,high,path+content-sample+regime=documentary+incoming=5;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-deliverables-standard.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-integration-checklist.md;relation=functional-reference;consumer-status=runtime-root;confidence=high,"Usage Graph Review: operational — chain `docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-integration-checklist.md` (root: projects/interv360/app/src/domain/README.md, runtime-root).",lot-E
+docs/practices/process/bpmn-deliverables-standard.md,bpmn-deliverables-standard.md,md,5625,F06,,candidate,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Standard des livrables BPMN **Type** : Standard méthodologique **Statut** : Draft **Domaine** : Process Mo,docs/practices/process/bpmn-integration-checklist.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-method-integration-audit.md; docs/practices/process/bpmn-process-modeling-method.md; prompts/bpmn/bpmn-prompt-family.md,,no,no,keep,docs/practices/process/bpmn-deliverables-standard.md,bpmn-deliverables-standard.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective candidate. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-integration-checklist.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`. Direct Usage Review: non-operational — interv360-tests-readme-generic.",low,no,medium,path+content-sample+regime=documentary+incoming=5;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-integration-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=docs/practices/process/bpmn-integration-checklist.md -> projects/interv360/app/src/tests/README.md -> docs/practices/process/bpmn-deliverables-standard.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium,Direct Usage Review: non-operational (interv360-tests-readme-generic). Consumer: `projects/interv360/app/src/tests/README.md`. No direct functional consumption demonstrated.,lot-E
+docs/practices/process/bpmn-integration-checklist.md,bpmn-integration-checklist.md,md,5221,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Checklist d'intégration BPMN **Type** : Checklist méthodologique **Statut** : Draft **Domaine** : Process,docs/practices/process/bpmn-deliverables-standard.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-method-integration-audit.md; docs/practices/process/bpmn-process-modeling-method.md; prompts/bpmn/bpmn-prompt-family.md,,no,no,keep,docs/practices/process/bpmn-integration-checklist.md,bpmn-integration-checklist.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-deliverables-standard.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`. Direct Usage Review: non-operational — interv360-domain-readme-generic.",low,no,medium,path+content-sample+regime=documentary+incoming=5;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-deliverables-standard.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-integration-checklist.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium,Direct Usage Review: non-operational (interv360-domain-readme-generic). Consumer: `projects/interv360/app/src/domain/README.md`. No direct functional consumption demonstrated.,lot-E
 docs/practices/process/bpmn-method-cycle-closure.md,bpmn-method-cycle-closure.md,md,8126,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,# SFIA — Clôture du cycle méthode BPMN **Type** : Synthèse de clôture méthodologique **Statut** : Draft — prêt pour P,,,no,no,rename,docs/practices/process/bpmn-method-cycle-closure.md,YYYY-MM-DD-bpmn-method-cycle-closure.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 non-compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`. Usage Graph Review: non-operational — audit-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/process/bpmn-method-cycle-closure.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=audit-only;checks=audit-only+consumer-depends-on-audit;confidence=medium,"Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge=audit-cartography-only. Checks: audit-only; consumer-depends-on-audit. ",lot-D
-docs/practices/process/bpmn-method-integration-audit.md,bpmn-method-integration-audit.md,md,16086,F09,,draft,document-lifecycle,supporting,operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,B,# SFIA — Audit d'intégration BPMN dans la méthodologie **Type** : Audit méthodologique **Statut** : Draft **Phase**,docs/practices/process/bpmn-deliverables-standard.md; docs/practices/process/bpmn-integration-checklist.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-process-modeling-method.md,,no,no,rename,docs/practices/process/bpmn-method-integration-audit.md,YYYY-MM-DD-bpmn-method-integration-audit.md,"Regime documentary; family F09; D10 compliant (current=docs, target=docs); D12 non-compliant.; lifecycle-corrective draft. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-deliverables-standard.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`.",medium,no,high,path+content-sample+regime=documentary+incoming=4;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-deliverables-standard.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-method-integration-audit.md;relation=functional-reference;consumer-status=runtime-root;confidence=high,"Usage Graph Review: operational — chain `docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-method-integration-audit.md` (root: projects/interv360/app/src/domain/README.md, runtime-root).",lot-D
-docs/practices/process/bpmn-process-modeling-method.md,bpmn-process-modeling-method.md,md,8382,F06,,candidate,document-lifecycle,supporting,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Méthode de modélisation BPMN **Type** : Méthode **Statut** : Draft **Domaine** : Process Modeling / BPMN,docs/practices/process/bpmn-deliverables-standard.md; docs/practices/process/bpmn-integration-checklist.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-method-integration-audit.md; prompts/bpmn/bpmn-prompt-family.md,,no,no,keep,docs/practices/process/bpmn-process-modeling-method.md,bpmn-process-modeling-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective candidate. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-deliverables-standard.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`.",low,no,high,path+content-sample+regime=documentary+incoming=5;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-deliverables-standard.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-process-modeling-method.md;relation=functional-reference;consumer-status=runtime-root;confidence=high,"Usage Graph Review: operational — chain `docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-process-modeling-method.md` (root: projects/interv360/app/src/domain/README.md, runtime-root).",lot-E
+docs/practices/process/bpmn-method-integration-audit.md,bpmn-method-integration-audit.md,md,16086,F09,,draft,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,B,# SFIA — Audit d'intégration BPMN dans la méthodologie **Type** : Audit méthodologique **Statut** : Draft **Phase**,docs/practices/process/bpmn-deliverables-standard.md; docs/practices/process/bpmn-integration-checklist.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-process-modeling-method.md,,no,no,rename,docs/practices/process/bpmn-method-integration-audit.md,YYYY-MM-DD-bpmn-method-integration-audit.md,"Regime documentary; family F09; D10 compliant (current=docs, target=docs); D12 non-compliant.; lifecycle-corrective draft. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-deliverables-standard.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`. Direct Usage Review: non-operational — interv360-domain-readme-generic.",medium,no,medium,path+content-sample+regime=documentary+incoming=4;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-deliverables-standard.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-method-integration-audit.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium,Direct Usage Review: non-operational (interv360-domain-readme-generic). Consumer: `projects/interv360/app/src/domain/README.md`. No direct functional consumption demonstrated.,lot-D
+docs/practices/process/bpmn-process-modeling-method.md,bpmn-process-modeling-method.md,md,8382,F06,,candidate,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Méthode de modélisation BPMN **Type** : Méthode **Statut** : Draft **Domaine** : Process Modeling / BPMN,docs/practices/process/bpmn-deliverables-standard.md; docs/practices/process/bpmn-integration-checklist.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-method-integration-audit.md; prompts/bpmn/bpmn-prompt-family.md,,no,no,keep,docs/practices/process/bpmn-process-modeling-method.md,bpmn-process-modeling-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective candidate. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-deliverables-standard.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`. Direct Usage Review: non-operational — interv360-domain-readme-generic.",low,no,medium,path+content-sample+regime=documentary+incoming=5;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-deliverables-standard.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-process-modeling-method.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium,Direct Usage Review: non-operational (interv360-domain-readme-generic). Consumer: `projects/interv360/app/src/domain/README.md`. No direct functional consumption demonstrated.,lot-E
 docs/practices/roles/README.md,README.md,md,466,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Role Methods Ce dossier contient les **méthodes SFIA par rôle**. Chaque fichier décrit : - la mission du rôle,,,no,no,keep,docs/practices/roles/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/practices/roles/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
 docs/practices/roles/architect-method.md,architect-method.md,md,16398,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Architecte — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-methods-fra,,,no,no,keep,docs/practices/roles/architect-method.md,architect-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/architect-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operatio
```

## Risques

- 31 unknown résiduels — décisions Morris ponctuelles possibles
- 6 checklists/core SFIA en unknown — activité consommateur en chaîne D non démontrée indépendamment
- Usage gelé — toute réouverture requiert anomalie factuelle précise

## Réserves

- Aucune migration exécutée
- Pass Authority non démarrée
- SFIA v2.4 reste baseline ; v2.6 candidate

## Verdict

```
DIRECT USAGE EVIDENCE FINAL REVIEW COMPLETE
TARGET DIRECT SET = 197
DIRECT CONSUMER REQUIRED
EXACT REFERENCE REQUIRED
FUNCTIONAL RELATION REQUIRED
CONSUMER ACTIVITY REQUIRED
INDIRECT CHAINS REJECTED AS PRIMARY PROOF
INVALID DIRECTIONS REJECTED
OPERATIONAL STATES CONFIRMED WITH DIRECT EVIDENCE
WEAK DIRECT STATES RECLASSIFIED
RESIDUAL USAGE UNKNOWNS JUSTIFIED
NO USAGE CHANGE OUTSIDE TARGET DIRECT SET
PREVIOUS 25 UNKNOWNS UNCHANGED
LIFECYCLE VALUES UNCHANGED
LIFECYCLE APPLICABILITY UNCHANGED
AUTHORITY VALUES UNCHANGED
LOTS AND DISPOSITIONS UNCHANGED
CARTOGRAPHY CONTRACT REMAINS FROZEN
USAGE DIMENSION FROZEN
BASE INVENTORY REMAINS 1045
CSV FIELD COUNT = 36
NO EXISTING REPOSITORY FILE MODIFIED
NO PHYSICAL MIGRATION EXECUTED
PR #165 UPDATED
PR NOT MERGED
REVIEW HANDOFF COMPLETE — REMOTE VERIFIED
READY FOR CHATGPT FINAL USAGE REVIEW
PASS AUTHORITY NOT STARTED
SFIA v2.4 REMAINS BASELINE
SFIA v2.6 REMAINS CANDIDATE
```