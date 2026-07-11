# SFIA v2.6 — Review Pack (full)

**Date/heure :** 2026-07-11 17:36 CEST
**Cycle :** Validation corrective finale — Lot 0 / Archive Scope Clarification
**Profil :** Critical
**Branche :** `audit/sfia-v2.6-repository-cartography`
**HEAD initial :** `06a898058265f509e68930bd8e85886cd82cb1d1`
**HEAD final :** `1bb521a6d9fd56a17515a7221fbb69bc097b796e`
**Base inventaire :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
**PR :** #165
**PR HEAD (tip branche) :** `ceedca8579a3705c397af8c3992cd7372b3b63fc` — Map repository for SFIA v2.6 compliance
**synthesis only :** no

---

## Local Git Truth Check

| Check | Result |
|-------|--------|
| Branche | `audit/sfia-v2.6-repository-cartography` |
| HEAD local | `06a898058265f509e68930bd8e85886cd82cb1d1` |
| HEAD remote PR | `ceedca8579a3705c397af8c3992cd7372b3b63fc` |
| PR #165 | OPEN, non draft, non mergée |
| Worktree tracked | 2 fichiers docs modifiés (rapport + plan) |
| CSV modifié | NON |

## CSV (inchangé)

- Lignes données : **1045**
- Champs : **36**
- SHA-256 avant/après : `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2` (identique)

## Définition des ensembles

- **A (Lot 0)** : `migration_lot_candidate = lot-0`
- **B (archives non-v3)** : `proposed_disposition = archive` ET `trajectory != SFIA v3.0`

## Volumes

| Métrique | Valeur |
|----------|-------:|
| \|A\| | **103** |
| \|B\| | **204** |
| \|A ∩ B\| | **56** |
| \|A \\ B\| | **47** |
| \|B \\ A\| | **148** |
| archive total | **227** |
| archive v3 | **23** |
| Lot C | **23** |
| v3 dans B | **0** |

**Contrôles :** 103 = 56+47 · 204 = 56+148 · archive 227 = 204+23

## A ∩ B — liste complète

- `method/sfia-fast-track/archive/interv360-realization/notion-integration-plan.md`
- `method/sfia-fast-track/archive/interv360-realization/realization-checklists.md`
- `method/sfia-fast-track/archive/interv360-realization/realization-deliverables-standard.md`
- `method/sfia-fast-track/archive/interv360-realization/realization-method.md`
- `method/sfia-fast-track/archive/interv360-realization/realization-prompt-family.md`
- `method/sfia-fast-track/archive/interv360-realization/realization-templates.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/README.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/README.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-post-merge-status.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/inventory-complementary-methods.md-list.txt`
- `method/sfia-fast-track/documentation/capitalization/inventory-interv360-docs.md-list.txt`
- `method/sfia-fast-track/documentation/capitalization/inventory-platform-docs.md-list.txt`
- `method/sfia-fast-track/documentation/capitalization/inventory-platform-templates.md-list.txt`
- `method/sfia-fast-track/documentation/capitalization/inventory-practices.md-list.txt`
- `method/sfia-fast-track/documentation/capitalization/inventory-prompts.md-list.txt`
- `method/sfia-fast-track/documentation/capitalization/inventory-sfia-fast-track.md-list.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-all.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-depth3.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-docs-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-exports-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-interv360-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-markdown-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-method-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-prompts-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-tools-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-all-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-directory-map.txt`
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-folder-volume.txt`
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-markdown-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/post-cleanup-all-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/post-cleanup-markdown-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-all-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth2.txt`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth4.txt`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-docs-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-markdown-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-method-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-methods-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-projects-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-scripts-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-sfia-notion-sync-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-all.txt`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-depth3.txt`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/docs-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/exports-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/interv360-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/markdown-files-all.txt`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/method-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/methods-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/post-round-2-markdown-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/prompts-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md`

## A \ B — Lot 0 non archive (liste complète)

- `method/complementary/controlled-delivery/controlled-delivery-checklist.md`
- `method/complementary/controlled-delivery/controlled-delivery-index-integration.md`
- `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md`
- `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md`
- `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md`
- `method/complementary/controlled-delivery/controlled-delivery-standard.md`
- `method/complementary/controlled-delivery/controlled-delivery-template.md`
- `method/sfia-fast-track/README.md`
- `method/sfia-fast-track/audit-rex/README.md`
- `method/sfia-fast-track/automation/README.md`
- `method/sfia-fast-track/checklists/README.md`
- `method/sfia-fast-track/checklists/guardrails-checklist.md`
- `method/sfia-fast-track/checklists/notion-publication-checklist.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/checklists/validation-checklist.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/cycles/README.md`
- `method/sfia-fast-track/documentation/README.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4.1-documentation-status-promotion-report.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md`
- `method/sfia-fast-track/documentation/notion-publication-plan.md`
- `method/sfia-fast-track/documentation/notion-target-content-map.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-engine-design.md`
- `method/sfia-fast-track/ui/README.md`
- `method/sfia-fast-track/ui/figma-design-first-ui-method.md`

## B \ A — archives non-v3 hors Lot 0 (liste complète)

- `docs/foundation/README.md`
- `method/sfia-fast-track/archive/interv360-realization/README.md`
- `projects/interv360/archive/README.md`
- `projects/interv360/archive/adr-early/04-adr/adr-structuring-scope.md`
- `projects/interv360/archive/adr-early/README.md`
- `projects/interv360/archive/architecture-historical/README.md`
- `projects/interv360/archive/clarification/README.md`
- `projects/interv360/archive/clarification/clarification-workshop-minutes-summary.md`
- `projects/interv360/archive/clarification/clarification-workshop-minutes-template-summary.md`
- `projects/interv360/archive/clarification/clarification-workshop-minutes-template.md`
- `projects/interv360/archive/clarification/clarification-workshop-minutes.md`
- `projects/interv360/archive/clarification/clarification-workshop-preparation.md`
- `projects/interv360/archive/clarification/clarification-workshop-summary.md`
- `projects/interv360/archive/cmp/README.md`
- `projects/interv360/archive/cmp/cmp-project-schema-extension-for-governance-content.md`
- `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-architecture-security.md`
- `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-final-prompt-lot.md`
- `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-qa-library.md`
- `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-uxui.md`
- `projects/interv360/archive/cmp/prompt-catalog-enrichment-after-ux-ui-v1-standard.md`
- `projects/interv360/archive/cmp/prompt-catalog-qa-tester-validation.md`
- `projects/interv360/archive/cmp/prompt-catalog-ux-ui-v1-validation.md`
- `projects/interv360/archive/figma-v1/README.md`
- `projects/interv360/archive/figma-v1/figma-design-instructions.md`
- `projects/interv360/archive/figma-v1/figma-first-draft-review.md`
- `projects/interv360/archive/figma-v1/figma-production-prompt.md`
- `projects/interv360/archive/figma-v1/figma-review-session-minutes-template.md`
- `projects/interv360/archive/figma-v1/figma-review-session-minutes.md`
- `projects/interv360/archive/figma-v1/figma-review-session-preparation.md`
- `projects/interv360/archive/figma-v1/sfia-figma-v1-standard-candidate-review.md`
- `projects/interv360/archive/figma-v1/sfia-figma-v1-standard-candidate.md`
- `projects/interv360/archive/figma-v1/sfia-figma-v1-standard-promotion-preparation.md`
- `projects/interv360/archive/figma-v1/ux-ui-design-research-and-benchmark.md`
- `projects/interv360/archive/figma-v1/ux-ui-figma-opening-note.md`
- `projects/interv360/archive/inc-01/README.md`
- `projects/interv360/archive/inc-01/inc-01-acceptance-criteria.md`
- `projects/interv360/archive/inc-01/inc-01-api-strategy.md`
- `projects/interv360/archive/inc-01/inc-01-app-foundation-summary.md`
- `projects/interv360/archive/inc-01/inc-01-application-architecture.md`
- `projects/interv360/archive/inc-01/inc-01-controlled-workflow-skeleton-summary.md`
- `projects/interv360/archive/inc-01/inc-01-controlled-workflow-validation.md`
- `projects/interv360/archive/inc-01/inc-01-data-model.md`
- `projects/interv360/archive/inc-01/inc-01-data-scope.md`
- `projects/interv360/archive/inc-01/inc-01-demo-data.md`
- `projects/interv360/archive/inc-01/inc-01-demo-reset-summary.md`
- `projects/interv360/archive/inc-01/inc-01-demo-script.md`
- `projects/interv360/archive/inc-01/inc-01-detailed-backlog.md`
- `projects/interv360/archive/inc-01/inc-01-effort-estimation.md`
- `projects/interv360/archive/inc-01/inc-01-final-demo-package.md`
- `projects/interv360/archive/inc-01/inc-01-global-summary.md`
- `projects/interv360/archive/inc-01/inc-01-implementation-estimate.md`
- `projects/interv360/archive/inc-01/inc-01-implementation-plan.md`
- `projects/interv360/archive/inc-01/inc-01-implementation-preparation-plan.md`
- `projects/interv360/archive/inc-01/inc-01-implementation-preparation-summary.md`
- `projects/interv360/archive/inc-01/inc-01-intervention-readonly-skeleton-summary.md`
- `projects/interv360/archive/inc-01/inc-01-list-skeleton-summary.md`
- `projects/interv360/archive/inc-01/inc-01-merge-summary.md`
- `projects/interv360/archive/inc-01/inc-01-planning-readonly-skeleton-summary.md`
- `projects/interv360/archive/inc-01/inc-01-pr-preparation.md`
- `projects/interv360/archive/inc-01/inc-01-push-and-pr.md`
- `projects/interv360/archive/inc-01/inc-01-qa-scenarios.md`
- `projects/interv360/archive/inc-01/inc-01-qa-strategy.md`
- `projects/interv360/archive/inc-01/inc-01-qualification-readonly-skeleton-summary.md`
- `projects/interv360/archive/inc-01/inc-01-readonly-demo-summary.md`
- `projects/interv360/archive/inc-01/inc-01-realization-backlog.md`
- `projects/interv360/archive/inc-01/inc-01-realization-slicing.md`
- `projects/interv360/archive/inc-01/inc-01-realization-start-checklist.md`
- `projects/interv360/archive/inc-01/inc-01-refusal-scenarios.md`
- `projects/interv360/archive/inc-01/inc-01-request-detail-skeleton-summary.md`
- `projects/interv360/archive/inc-01/inc-01-stack-options.md`
- `projects/interv360/archive/inc-01/inc-01-start-checklist.md`
- `projects/interv360/archive/inc-01/inc-01-status-rules.md`
- `projects/interv360/archive/inc-01/inc-01-technical-qa-planning.md`
- `projects/interv360/archive/inc-01/inc-01-technical-scope.md`
- `projects/interv360/archive/inc-01/inc-01-user-stories.md`
- `projects/interv360/archive/inc-02/README.md`
- `projects/interv360/archive/inc-02/inc-02-merge-summary.md`
- `projects/interv360/archive/inc-02/inc-02-pr-preparation.md`
- `projects/interv360/archive/inc-02/inc-02-push-and-pr.md`
- `projects/interv360/archive/inc-02/inc-02-ux-demo-improvement.md`
- `projects/interv360/archive/inc-03/README.md`
- `projects/interv360/archive/inc-03/inc-03-merge-summary.md`
- `projects/interv360/archive/inc-03/inc-03-multi-requests-local-demo.md`
- `projects/interv360/archive/inc-03/inc-03-pr-preparation.md`
- `projects/interv360/archive/inc-03/inc-03-push-and-pr.md`
- `projects/interv360/archive/inc-04/README.md`
- `projects/interv360/archive/inc-04/inc-04-list-filtering-local-summary.md`
- `projects/interv360/archive/notion-sync/README.md`
- `projects/interv360/archive/notion-sync/notion-publication-tooling-check.md`
- `projects/interv360/archive/notion-sync/notion-sync-architecture-p1-summary.md`
- `projects/interv360/archive/notion-sync/notion-sync-architecture-p2-summary.md`
- `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-preparation.md`
- `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-blocked.md`
- `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-publication-log.md`
- `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-review.md`
- `projects/interv360/archive/notion-sync/notion-sync-existing-prompt-library-inventory.md`
- `projects/interv360/archive/notion-sync/notion-sync-figma-v1-cmp-publication-log.md`
- `projects/interv360/archive/notion-sync/notion-sync-figma-v1-cmp-publication-preparation.md`
- `projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-cmp-payload-review.md`
- `projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-preparation.md`
- `projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-publication-log.md`
- `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-cmp-payload-review.md`
- `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-preparation.md`
- `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-publication-log.md`
- `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload-review.md`
- `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-preparation.md`
- `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-publication-log.md`
- `projects/interv360/archive/notion-sync/notion-sync-qa-prompt-library-cmp-payload-review.md`
- `projects/interv360/archive/notion-sync/notion-sync-qa-prompt-library-preparation.md`
- `projects/interv360/archive/notion-sync/notion-sync-qa-prompt-library-publication-log.md`
- `projects/interv360/archive/notion-sync/notion-sync-qa-tester-cmp-publication-log.md`
- `projects/interv360/archive/notion-sync/notion-sync-qa-tester-governance-review.md`
- `projects/interv360/archive/notion-sync/notion-sync-qa-tester-governance-summary.md`
- `projects/interv360/archive/notion-sync/notion-sync-summary.md`
- `projects/interv360/archive/notion-sync/pull-request-qa-tester-governance-notion-sync.md`
- `projects/interv360/archive/pre-delivery-phases/03-process/README.md`
- `projects/interv360/archive/pre-delivery-phases/03-process/interv360-integration-errors-preparation.md`
- `projects/interv360/archive/pre-delivery-phases/03-process/interv360-sav-exceptions-preparation.md`
- `projects/interv360/archive/pre-delivery-phases/03-process/interv360-sav-mvp-preparation.md`
- `projects/interv360/archive/pre-delivery-phases/03-process/process-analysis.md`
- `projects/interv360/archive/pre-delivery-phases/03-process/process-scope.md`
- `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/business-objects.md`
- `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/dashboard-and-alerts.md`
- `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-scope.md`
- `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-summary.md`
- `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-domains.md`
- `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/integration-functional-view.md`
- `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/status-and-transitions.md`
- `projects/interv360/archive/pre-delivery-phases/06-ux-ui/dashboard-ux-view.md`
- `projects/interv360/archive/pre-delivery-phases/06-ux-ui/screen-functional-specs.md`
- `projects/interv360/archive/pre-delivery-phases/06-ux-ui/screen-inventory.md`
- `projects/interv360/archive/pre-delivery-phases/06-ux-ui/user-journeys.md`
- `projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md`
- `projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-scope.md`
- `projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-summary.md`
- `projects/interv360/archive/pre-delivery-phases/README.md`
- `projects/interv360/archive/role-enrichment/README.md`
- `projects/interv360/archive/role-enrichment/qa-tester-role-candidate-review.md`
- `projects/interv360/archive/role-enrichment/qa-tester-role-research-and-benchmark.md`
- `projects/interv360/archive/role-enrichment/qa-transverse-analysis-summary.md`
- `projects/interv360/archive/role-enrichment/qa-transverse-analysis.md`
- `projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p1.md`
- `projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p2.md`
- `projects/interv360/archive/role-enrichment/role-methods-enrichment-after-figma-v1.md`
- `projects/interv360/archive/stubs/04-delivery-stub-readme.md`
- `projects/interv360/archive/stubs/05-tests/README.md`
- `projects/interv360/archive/stubs/06-documentation/README.md`
- `projects/interv360/archive/stubs/README.md`

## Preuve champs inchangés

- usage unknown : **481**
- authority unknown : **534**
- lifecycle unknown : **0**
- lot-0 count : **103**

## Rapport — §8 modifié

```markdown
## 8. Lot 0

**103 fichiers** tagués `migration_lot_candidate = lot-0` — qualification manuelle Morris avant migrations A–J.

**Composition (recalculée CSV) :**

| Disposition dans Lot 0 | Count |
|------------------------|------:|
| `proposed_disposition = archive` | 56 |
| `proposed_disposition = keep` | 47 |
| **Total Lot 0** | **103** |

Lot 0 regroupe des cas structurants (gates Morris, canonical, investigate hors tag lot-0, delete-candidate hors tag lot-0) — **pas** l'intégralité des archives non-v3.

### Relation Lot 0 / archives non-v3

Deux dimensions **distinctes** du CSV :

- **Lot 0 (A)** : `migration_lot_candidate = lot-0`
- **Archives non-v3 (B)** : `proposed_disposition = archive` **ET** `trajectory != SFIA v3.0`

| Ensemble | Définition | \|·\| |
|----------|------------|------:|
| **A** — Lot 0 | Tag migration lot-0 | **103** |
| **B** — Archives non-v3 | Disposition archive hors v3 | **204** |
| **A ∩ B** | Archive non-v3 **dans** Lot 0 | **56** |
| **A \\ B** | Lot 0 **sans** archive non-v3 | **47** |
| **B \\ A** | Archives non-v3 **hors** Lot 0 | **148** |

**Contrôles :** |A| = |A ∩ B| + |A \\ B| = 56 + 47 = 103 · |B| = |A ∩ B| + |B \\ A| = 56 + 148 = 204 · aucun v3 dans B.

**Formulation exacte :**

- Lot 0 contient **56** fichiers également classés archive non-v3.
- **148** archives non-v3 sont affectées à d'autres lots (`lot-G` : 146 ; `lot-E` : 2).
- **47** fichiers Lot 0 ont une autre disposition (`keep` — cas structurants en attente de décision Morris).

Un fichier peut être **archive non-v3 sans être Lot 0** — les champs `proposed_disposition` et `migration_lot_candidate` sont indépendants.

**Aucune modification de lot** pendant ce cycle — clarification documentaire uniquement.

---
```

## Rapport — §12 Contract Freeze (HEAD explicites)

```markdown
## 12. Cartography Contract Freeze

**Horodatage :** 2026-07-11 15:46 Europe/Paris
**HEAD initial :** `bde680c32ae0aa36497a3c8dcde913ea530279a7`
**HEAD final :** `06a898058265f509e68930bd8e85886cd82cb1d1`
**CSV :** 1045 × 36 — SHA-256 `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2`

### Chaîne de commits (traçabilité)

| Cycle | HEAD |
|-------|------|
| Pass L | `7e60935f4f506218ed3331ebb704f8e27f64a355` |
| Lifecycle applicability correction | `bde680c32ae0aa36497a3c8dcde913ea530279a7` |
| Contract freeze | `06a898058265f509e68930bd8e85886cd82cb1d1` |
| Lot 0 / archive scope clarification | *(commit présent micro-correctif)* |

### A. Source de vérité

- **CSV** = seule source statistique de la cartographie
- Inventaire figé : `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6` — **1045** fichiers
- **3 artefacts d'audit PR #165 exclus** du CSV (pas de self-inventory)
- Rapport, plan, review pack et handoff = **dérivés du CSV** — recalcul obligatoire

### B. Schéma final (36 champs — ordre exact)

1. `current_path`
2. `filename`
3. `extension`
4. `size_bytes`
5. `primary_family`
6. `subfamily`
7. `lifecycle_status`
8. `lifecycle_applicability`
9. `authority`
10. `usage`
11. `scope`
12. `project`
13. `phase`
14. `trajectory`
15. `trajectory_role`
16. `logical_location_current`
17. `logical_location_target`
18. `naming_rule_regime`
19. `naming_compliance`
20. `location_compliance`
21. `metadata_profile`
22. `content_summary`
23. `incoming_references`
24. `outgoing_references`
25. `duplicate_or_overlap`
26. `canonical_candidate`
27. `proposed_disposition`
28. `proposed_target_path`
29. `proposed_target_filename`
30. `rationale`
31. `risk_level`
32. `morris_gate_required`
33. `confidence`
34. `evidence`
35. `reserve_or_question`
36. `migration_lot_candidate`

### C. Vocabulaires contrôlés

**lifecycle_applicability :** `document-lifecycle` | `technical-artifact-lifecycle` | `not-applicable` | `unknown`

**lifecycle_status :** `draft` | `candidate` | `validated` | `deprecated` | `superseded` | `archived` | `not-applicable` | `unknown`

**usage :** `operational` | `non-operational` | `unknown`

**authority :** `canonical` | `reference` | `supporting` | `informational` | `unknown`

**proposed_disposition :** `keep` | `rename` | `archive` | `investigate` | `delete-candidate`

**migration_lot_candidate :** `lot-0` | `lot-A` | `lot-B` | `lot-C` | `lot-D` | `lot-E` | `lot-F` | `lot-G` | `lot-H` | `lot-I` | `lot-J` | *(vide)*

### D. Règles de preuve

- `validated` → preuve forte obligatoire (explicit-status, morris-decision, validated-report, merged-approved-cycle, closure-evidence, canonical-source)
- `superseded` → remplaçant explicite dans evidence/reserve
- `delete-candidate` → preuve + `morris_gate_required: yes`
- `unknown` → réserve justifiée obligatoire
- `not-applicable` ≠ `non-operational` (Usage traité séparément)
- merge sur main ≠ validated automatique
- canonical → gate Morris

### E. Règles d'applicabilité

- Lifecycle documentaire **non forcé** sur artefacts techniques (`not-applicable`)
- Usage et Authority = passes séparées — **aucune déduction croisée sans preuve**
- `technical-artifact-lifecycle` (10 fichiers) = lifecycle technique réel identifiable

### F. Règles de génération des statistiques

1. Recalcul **programmatique** depuis le CSV
2. Contrôle de somme : chaque distribution = **1045**
3. Cohérence croisée rapport/plan/handoff/PR
4. **Interdit** : recopie manuelle non vérifiée
5. Divergence → **STOP** avant commit

### G. Statut du contrat

```
CARTOGRAPHY CONTRACT FROZEN FOR PASS USAGE AND PASS AUTHORITY
```

Le contrat est **gelé** pour les deux prochaines passes. Il reste **candidate** — pas baseline SFIA sans GO Morris.

### État courant gelé (recalculé)

| Distribution | Count |
|--------------|------:|
| applicability document-lifecycle | 697 |
| applicability technical-artifact-lifecycle | 10 |
| applicability not-applicable | 338 |
| lifecycle validated | 145 |
| lifecycle candidate | 154 |
| lifecycle draft | 138 |
| lifecycle archived | 265 |
| lifecycle superseded | 5 |
| lifecycle not-applicable | 338 |
| usage unknown | 481 |
| authority unknown | 534 |

---
```

## Rapport — §13 micro-correctif

```markdown
## 13. Lot 0 / archive scope clarification

**Horodatage :** 2026-07-11 17:35 Europe/Paris
**HEAD initial :** `06a898058265f509e68930bd8e85886cd82cb1d1`
**HEAD final :** `LOT0_CLARIFY_HEAD`
**CSV :** inchangé byte-for-byte — SHA-256 `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2`

Correction documentaire de la relation Lot 0 ↔ archives non-v3 (voir §8). Aucune modification CSV, lot, disposition ou gate.

---
```

## Plan — §3 Lot 0 modifié

```markdown
## 3. Lot 0 — Qualification manuelle

| Champ | Contenu |
|-------|---------|
| **Volume tag CSV (A)** | **103** |
| **Objectif** | Trancher cas structurants avant migrations — gate Morris |
| **Intersection A ∩ B** | **56** — archive non-v3 également dans Lot 0 |
| **A \\ B (Lot 0 non archive)** | **47** — disposition `keep` |
| **B \\ A (archive non-v3 hors Lot 0)** | **148** — surtout `lot-G` (146), `lot-E` (2) |
| **Archives non-v3 total (B)** | **204** — hors Lot C v3 (23) |
| **Gate** | Critical — Morris |
| **Règle** | Aucun lot A–J sur cas structurants non tranchés |

**Clarification :** Lot 0 **ne contient pas** les 204 archives non-v3 — seulement **56** d'entre elles. `proposed_disposition` et `migration_lot_candidate` sont deux dimensions indépendantes.

---
```

## Fichiers modifiés (versionnés)

1. `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`
2. `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`

## Diff utile

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
index ae4ae49..3a4f090 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
@@ -161,9 +161,44 @@ Documents superseded (foundation v1.1, documentation-audit, workspace-audit roun
 
 ## 8. Lot 0
 
-**103 fichiers** tagués `lot-0` — qualification manuelle avant migrations A–J.
+**103 fichiers** tagués `migration_lot_candidate = lot-0` — qualification manuelle Morris avant migrations A–J.
 
-Inclut : investigate (38) ; archive non-v3 (**204**) ; delete-candidate (11) ; gates Morris ; cas structurants.
+**Composition (recalculée CSV) :**
+
+| Disposition dans Lot 0 | Count |
+|------------------------|------:|
+| `proposed_disposition = archive` | 56 |
+| `proposed_disposition = keep` | 47 |
+| **Total Lot 0** | **103** |
+
+Lot 0 regroupe des cas structurants (gates Morris, canonical, investigate hors tag lot-0, delete-candidate hors tag lot-0) — **pas** l'intégralité des archives non-v3.
+
+### Relation Lot 0 / archives non-v3
+
+Deux dimensions **distinctes** du CSV :
+
+- **Lot 0 (A)** : `migration_lot_candidate = lot-0`
+- **Archives non-v3 (B)** : `proposed_disposition = archive` **ET** `trajectory != SFIA v3.0`
+
+| Ensemble | Définition | \|·\| |
+|----------|------------|------:|
+| **A** — Lot 0 | Tag migration lot-0 | **103** |
+| **B** — Archives non-v3 | Disposition archive hors v3 | **204** |
+| **A ∩ B** | Archive non-v3 **dans** Lot 0 | **56** |
+| **A \\ B** | Lot 0 **sans** archive non-v3 | **47** |
+| **B \\ A** | Archives non-v3 **hors** Lot 0 | **148** |
+
+**Contrôles :** |A| = |A ∩ B| + |A \\ B| = 56 + 47 = 103 · |B| = |A ∩ B| + |B \\ A| = 56 + 148 = 204 · aucun v3 dans B.
+
+**Formulation exacte :**
+
+- Lot 0 contient **56** fichiers également classés archive non-v3.
+- **148** archives non-v3 sont affectées à d'autres lots (`lot-G` : 146 ; `lot-E` : 2).
+- **47** fichiers Lot 0 ont une autre disposition (`keep` — cas structurants en attente de décision Morris).
+
+Un fichier peut être **archive non-v3 sans être Lot 0** — les champs `proposed_disposition` et `migration_lot_candidate` sont indépendants.
+
+**Aucune modification de lot** pendant ce cycle — clarification documentaire uniquement.
 
 ---
 
@@ -340,7 +375,7 @@ Les **10** `technical-artifact-lifecycle` conservent un lifecycle réel (schemas
 
 **Horodatage :** 2026-07-11 15:46 Europe/Paris
 **HEAD initial :** `bde680c32ae0aa36497a3c8dcde913ea530279a7`
-**HEAD final :** commit `docs: freeze repository cartography contract` — HEAD courant PR = `git rev-parse HEAD` (review pack / handoff)
+**HEAD final :** `06a898058265f509e68930bd8e85886cd82cb1d1`
 **CSV :** 1045 × 36 — SHA-256 `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2`
 
 ### Chaîne de commits (traçabilité)
@@ -349,7 +384,8 @@ Les **10** `technical-artifact-lifecycle` conservent un lifecycle réel (schemas
 |-------|------|
 | Pass L | `7e60935f4f506218ed3331ebb704f8e27f64a355` |
 | Lifecycle applicability correction | `bde680c32ae0aa36497a3c8dcde913ea530279a7` |
-| Contract freeze (courant PR) | HEAD branche PR #165 (review pack) |
+| Contract freeze | `06a898058265f509e68930bd8e85886cd82cb1d1` |
+| Lot 0 / archive scope clarification | *(commit présent micro-correctif)* |
 
 ### A. Source de vérité
 
@@ -461,6 +497,17 @@ Le contrat est **gelé** pour les deux prochaines passes. Il reste **candidate**
 
 ---
 
+## 13. Lot 0 / archive scope clarification
+
+**Horodatage :** 2026-07-11 17:35 Europe/Paris
+**HEAD initial :** `06a898058265f509e68930bd8e85886cd82cb1d1`
+**HEAD final :** `LOT0_CLARIFY_HEAD`
+**CSV :** inchangé byte-for-byte — SHA-256 `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2`
+
+Correction documentaire de la relation Lot 0 ↔ archives non-v3 (voir §8). Aucune modification CSV, lot, disposition ou gate.
+
+---
+
 ## Annexe — Contrôles d'exhaustivité
 
 | Contrôle | Résultat |
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index 06e0c53..469f4ba 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -57,12 +57,17 @@ Cartographie finale (PR #165)
 
 | Champ | Contenu |
 |-------|---------|
-| **Volume tag CSV** | **103** |
-| **Objectif** | Trancher cas structurants avant migrations |
-| **Inclut** | investigate (38) ; archive non-v3 (**204**) ; delete-candidate (11) ; gates Morris (43) ; cas structurants |
+| **Volume tag CSV (A)** | **103** |
+| **Objectif** | Trancher cas structurants avant migrations — gate Morris |
+| **Intersection A ∩ B** | **56** — archive non-v3 également dans Lot 0 |
+| **A \\ B (Lot 0 non archive)** | **47** — disposition `keep` |
+| **B \\ A (archive non-v3 hors Lot 0)** | **148** — surtout `lot-G` (146), `lot-E` (2) |
+| **Archives non-v3 total (B)** | **204** — hors Lot C v3 (23) |
 | **Gate** | Critical — Morris |
 | **Règle** | Aucun lot A–J sur cas structurants non tranchés |
 
+**Clarification :** Lot 0 **ne contient pas** les 204 archives non-v3 — seulement **56** d'entre elles. `proposed_disposition` et `migration_lot_candidate` sont deux dimensions indépendantes.
+
 ---
 
 ## 4. Lot A — Canonical / core
@@ -94,7 +99,7 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 | **Actions lot futur unique** | `git mv` vers `method/.../documentation/archive/sfia-v3/` ; lifecycle/trajectory ; refs directes ; contrôle non-réactivation |
 | **D10** | 23/23 non-conformités D10 = v3 → **Lot C exclusivement** |
 | **Gate** | Critical — Morris |
-| **Archive non-v3 (204)** | **Hors Lot C** — traités via Lot 0 |
+| **Archive non-v3 (204 total)** | **Hors Lot C** — 56 dans Lot 0 ; 148 dans autres lots (lot-G) |
 | **Archive total (`proposed_disposition`)** | **227** (dont 23 v3 Lot C) |
 
 ---
@@ -186,7 +191,9 @@ Les 3 livrables PR ne sont **pas** dans le CSV. Ils ne participent à aucun lot
 | Pass Usage | **Pending** |
 | Pass Authority | **Pending** |
 | lifecycle not-applicable | **338** |
-| archive non-v3 | **204** |
+| archive non-v3 (total B) | **204** |
+| Lot 0 ∩ archive non-v3 | **56** |
+| archive non-v3 hors Lot 0 | **148** |
 | delete-candidate | **11** |
 | superseded | **5** |
 

```

## Risques

- Confusion résiduelle si lecteurs mélangent disposition et lot — atténuée par §8 explicite.
- Lot 0 contient 47 fichiers `keep` nécessitant décision Morris avant migration.

## Réserves

- investigate (38) et delete-candidate (11) ne sont **pas** tagués lot-0 dans le CSV — ancienne formulation rapport était fausse sur ce point aussi.
- Pass Usage et Pass Authority restent pending.

## Verdict

- LOT 0 / ARCHIVE NON-V3 RELATION COMPUTED
- LOT 0 TOTAL = 103
- ARCHIVE NON-V3 TOTAL = 204
- INTERSECTION EXPLICITLY DOCUMENTED (= 56)
- LOT 0 NON-ARCHIVE FILES DOCUMENTED (= 47)
- ARCHIVE NON-V3 OUTSIDE LOT 0 DOCUMENTED (= 148)
- CSV UNCHANGED
- CSV SHA UNCHANGED
- NO USAGE REQUALIFICATION
- NO AUTHORITY REQUALIFICATION
- NO LIFECYCLE REQUALIFICATION
- NO LOT ASSIGNMENT CHANGE
- HEAD TRACEABILITY COMPLETE (post-commit final SHA in handoff)
- REPORT AND PLAN CONSISTENT
- CARTOGRAPHY CONTRACT REMAINS FROZEN
- READY FOR CHATGPT MICRO-CORRECTIVE REVIEW
- PASS USAGE NOT STARTED
- PASS AUTHORITY NOT STARTED
