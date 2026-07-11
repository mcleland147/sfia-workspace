# SFIA Review Pack — Lifecycle Applicability and Evidence Correction

**Date/heure :** 2026-07-11 15:38 Europe/Paris
**Repository :** mcleland147/sfia-workspace
**Cycle :** Validation corrective de cartographie — Lifecycle applicability and evidence review
**Profil :** Critical
**PR :** #165
**Branche :** audit/sfia-v2.6-repository-cartography
**HEAD initial :** 7e60935f4f506218ed3331ebb704f8e27f64a355
**HEAD final :** f9483bf3dda81e5ce3b078ce9bcc731e4165bb23
**Base inventaire :** main @ 072058a1e3eea7a7647b638be4b8512df6b84ea6
**Remote sync :** local HEAD = origin/audit/sfia-v2.6-repository-cartography

---

## Local Git Truth Check

| Élément | Valeur |
|---------|--------|
| Repository | mcleland147/sfia-workspace |
| Branche | audit/sfia-v2.6-repository-cartography |
| HEAD initial | `7e60935f4f506218ed3331ebb704f8e27f64a355` |
| HEAD final | `f9483bf3dda81e5ce3b078ce9bcc731e4165bb23` |
| PR #165 | OPEN — non mergée |
| Worktree | Propre |
| Fichiers versionnés modifiés | 3 livrables |

---

## Correctif — lifecycle_applicability (36 champs)

| Valeur | Count |
|--------|------:|
| document-lifecycle | 697 |
| technical-artifact-lifecycle | 10 |
| not-applicable | 338 |
| unknown | 0 |

---

## lifecycle_status avant/après

| Statut | Avant | Après |
|--------|------:|------:|
| validated | 476 | 145 |
| candidate | 140 | 154 |
| draft | 154 | 138 |
| archived | 270 | 265 |
| superseded | 5 | 5 |
| not-applicable | 0 | 338 |
| unknown | 0 | 0 |

---

## Artefacts techniques revus

**338** fichiers → `lifecycle_applicability=not-applicable` + `lifecycle_status=not-applicable`

Exemples : .gitignore, .env.example, CI workflows, code source, exports Notion, package manifests.

---

## Audit 184 unknown→validated (Pass L)

- Total : 184
- Techniques reclassés not-applicable : 6
- Audit documentaire : 178
- **validated confirmés (preuve forte) :** 132
- **rétrogradés candidate :** 45

### Détail audit (178)

- `.cursor/mcp-templates/README.md` proofs=[inferred-role] strong=false → **candidate**
- `README.md` proofs=[inferred-role] strong=false → **candidate**
- `components/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docker/penpot/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docs/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docs/adr/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docs/architecture/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docs/architecture/sfia-decision-engine.md` proofs=[explicit-status,merged-approved-cycle,closure-evidence,validated-report,canonical-source] strong=true → **validated**
- `docs/architecture/sfia-delivery-pipeline.md` proofs=[explicit-status,closure-evidence,canonical-source] strong=true → **validated**
- `docs/architecture/sfia-domain-model.md` proofs=[explicit-status,canonical-source] strong=true → **validated**
- `docs/architecture/sfia-meta-model.md` proofs=[explicit-status,canonical-source] strong=true → **validated**
- `docs/architecture/sfia-platform-architecture.md` proofs=[explicit-status,merged-approved-cycle,closure-evidence,canonical-source] strong=true → **validated**
- `docs/architecture/sfia-repository-blueprint.md` proofs=[explicit-status,merged-approved-cycle,canonical-source] strong=true → **validated**
- `docs/foundation/sfia-engineering-principles.md` proofs=[explicit-status,closure-evidence,canonical-source] strong=true → **validated**
- `docs/knowledge/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docs/practices/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docs/practices/roles/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docs/practices/roles/qa-tester-method.md` proofs=[explicit-status] strong=true → **validated**
- `docs/rex/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docs/standards/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docs/standards/ux-ui-v1-governance-standard.md` proofs=[explicit-status,closure-evidence] strong=true → **validated**
- `docs/templates/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docs/templates/tooling/penpot/README.md` proofs=[inferred-role] strong=false → **candidate**
- `docs/workspace-readiness-report.md` proofs=[insufficient] strong=false → **candidate**
- `exports/notion/README.md` proofs=[inferred-role] strong=false → **candidate**
- `method/README.md` proofs=[inferred-role] strong=false → **candidate**
- `method/complementary/README.md` proofs=[inferred-role] strong=false → **candidate**
- `method/complementary/controlled-delivery/README.md` proofs=[inferred-role] strong=false → **candidate**
- `method/complementary/controlled-delivery/controlled-delivery-index-integration.md` proofs=[inferred-role] strong=false → **candidate**
- `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md` proofs=[inferred-role] strong=false → **candidate**
- `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md` proofs=[explicit-status,closure-evidence] strong=true → **validated**
- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md` proofs=[inferred-role] strong=false → **candidate**
- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md` proofs=[inferred-role] strong=false → **candidate**
- `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md` proofs=[explicit-status,closure-evidence] strong=true → **validated**
- `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md` proofs=[explicit-status,closure-evidence] strong=true → **validated**
- `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/README.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/audit-rex/README.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/audit-rex/interv360-application-rex.md` proofs=[closure-evidence] strong=true → **validated**
- `method/sfia-fast-track/automation/README.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/automation/sfia-automation-architecture.md` proofs=[explicit-status,canonical-source] strong=true → **validated**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` proofs=[explicit-status,closure-evidence,canonical-source] strong=true → **validated**
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` proofs=[explicit-status,morris-decision,closure-evidence,canonical-source] strong=true → **validated**
- `method/sfia-fast-track/automation/sfia-validation-engine.md` proofs=[explicit-status,closure-evidence,canonical-source] strong=true → **validated**
- `method/sfia-fast-track/checklists/README.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/checklists/guardrails-checklist.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/checklists/notion-publication-checklist.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md` proofs=[explicit-status,morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `method/sfia-fast-track/checklists/validation-checklist.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/cycles/README.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/cycles/interv360-final-capitalization.md` proofs=[closure-evidence] strong=true → **validated**
- `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md` proofs=[closure-evidence] strong=true → **validated**
- `method/sfia-fast-track/documentation/README.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md` proofs=[merged-approved-cycle,canonical-source] strong=true → **validated**
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md` proofs=[merged-approved-cycle,closure-evidence,canonical-source] strong=true → **validated**
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md` proofs=[explicit-status,closure-evidence,canonical-source] strong=true → **validated**
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md` proofs=[merged-approved-cycle,closure-evidence,validated-report,canonical-source] strong=true → **validated**
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` proofs=[merged-approved-cycle,closure-evidence,validated-report,canonical-source] strong=true → **validated**
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md` proofs=[merged-approved-cycle,closure-evidence,canonical-source] strong=true → **validated**
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` proofs=[closure-evidence,canonical-source] strong=true → **validated**
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `method/sfia-fast-track/documentation/notion-publication-plan.md` proofs=[closure-evidence] strong=true → **validated**
- `method/sfia-fast-track/documentation/notion-target-content-map.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md` proofs=[explicit-status,merged-approved-cycle] strong=true → **validated**
- `method/sfia-fast-track/ui/README.md` proofs=[inferred-role] strong=false → **candidate**
- `method/sfia-fast-track/ui/figma-design-first-ui-method.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/README.md` proofs=[inferred-role] strong=false → **candidate**
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/00-framing/project-framing.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/05-technical-architecture/technical-decisions.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md` proofs=[morris-decision,merged-approved-cycle] strong=true → **validated**
- `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md` proofs=[morris-decision,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-validation-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-02/inc-02-closure-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-validation-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-03/inc-03-closure-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-decisions.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-validation-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-04/inc-04-closure-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md` proofs=[merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-validation-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-05/inc-05-closure-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/07-delivery-inc-05/pr-readiness-inc-05.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-execution-report.md` proofs=[morris-decision] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-readiness.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-g4-post-merge-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-readiness.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-reserves.md` proofs=[merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-g4-post-merge-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-readiness.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-reserves.md` proofs=[merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-g4-post-merge-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-readiness.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-reserves.md` proofs=[merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-g4-post-merge-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-readiness.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md` proofs=[merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/09-capitalization/README.md` proofs=[merged-approved-cycle,closure-evidence,inferred-role] strong=true → **validated**
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-final-pilot-rex-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md` proofs=[merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/09-capitalization/inc-01-capitalization-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence,validated-report] strong=true → **validated**
- `projects/chantiers360-v2/09-capitalization/mvp-capitalization-report.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence,validated-report] strong=true → **validated**
- `projects/chantiers360-v2/09-capitalization/v0-vs-sfia-v2-methodological-comparison.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/chantiers360-v2/README.md` proofs=[morris-decision,merged-approved-cycle,closure-evidence,inferred-role] strong=true → **validated**
- `projects/interv360/00-intake/README.md` proofs=[inferred-role] strong=false → **candidate**
- `projects/interv360/00-intake/interv360-sfia-test-strategy.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/00-intake/project-intake.md` proofs=[explicit-status,closure-evidence] strong=true → **validated**
- `projects/interv360/01-cadrage/README.md` proofs=[inferred-role] strong=false → **candidate**
- `projects/interv360/01-cadrage/mvp-arbitration-validation.md` proofs=[explicit-status,closure-evidence,filename-only] strong=true → **validated**
- `projects/interv360/01-cadrage/ux-ui-brief.md` proofs=[explicit-status,closure-evidence] strong=true → **validated**
- `projects/interv360/02-architecture/README.md` proofs=[inferred-role] strong=false → **candidate**
- `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` proofs=[explicit-status,closure-evidence] strong=true → **validated**
- `projects/interv360/02-architecture/architecture-p2-design-impact-summary.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/03-design/README.md` proofs=[inferred-role] strong=false → **candidate**
- `projects/interv360/03-design/figma-first-screen-review.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/03-design/penpot-first-screen-cycle-summary.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/api-demo-hardening.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/backend-minimal-prototype.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/backend-persistence.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/batch-01-demo-credibility.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/batch-02-demo-control-scenario.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/batch-03-demo-readiness-package.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/batch-04-demo-presentation-package.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/delivery-detailing-summary.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/delivery-readiness-summary.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/demo-mvp-closure.md` proofs=[explicit-status,merged-approved-cycle,closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/demo-polish.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/end-to-end-demo-hardening.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/frontend-api-connection.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/implementation-go-no-go.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/implementation-planning-summary.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/premium-design-system.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/product-industrialization.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/realization-preparation-summary.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/realization-start-summary.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/request-model-productization.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/role-simulation.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/technical-arbitration.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/technical-design-summary.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/04-delivery/workflow-requalification.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/05-release/mvp-release-readiness.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/06-audit-rex/README.md` proofs=[inferred-role] strong=false → **candidate**
- `projects/interv360/07-documentation/README.md` proofs=[inferred-role] strong=false → **candidate**
- `projects/interv360/08-presentation/interv360-e2e-demo-runbook.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/09-roadmap/interv360-auth-and-user-framing.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/09-roadmap/interv360-backend-data-model-decision.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/09-roadmap/interv360-next-product-axis.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/09-roadmap/interv360-product-industrialization-framing.md` proofs=[merged-approved-cycle] strong=true → **validated**
- `projects/interv360/09-roadmap/interv360-role-simulation-review.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/09-roadmap/interv360-workflow-extension-framing.md` proofs=[closure-evidence] strong=true → **validated**
- `projects/interv360/README.md` proofs=[closure-evidence,inferred-role] strong=true → **validated**
- `projects/interv360/app/README.md` proofs=[closure-evidence,inferred-role] strong=true → **validated**
- `projects/interv360/backend/README.md` proofs=[inferred-role] strong=false → **candidate**
- `prompts/README.md` proofs=[inferred-role] strong=false → **candidate**
- `prompts/templates/README.md` proofs=[merged-approved-cycle,canonical-source,inferred-role] strong=true → **validated**
- `tools/cmp-001/README.md` proofs=[inferred-role] strong=false → **candidate**

---

## ADR-CAND-009

{
  "path": "projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md",
  "result": "validated",
  "reason": "explicit-status Confirmed Post-MVP"
}

---

## Unknown résiduels

0

---

## Usage unchanged proof

0 modifications champ `usage` vs HEAD 7e60935.

---

## Authority unchanged proof

0 modifications champ `authority` vs HEAD 7e60935.

---

## Rapport §11 (intégral)

## 11. Lifecycle applicability and evidence correction

**Horodatage :** 2026-07-11 15:38 Europe/Paris
**HEAD initial :** `7e60935f4f506218ed3331ebb704f8e27f64a355`
**HEAD final :** `297caee3c3e21554a4d280ae789b4dd66e6ef0f0`
**CSV :** 1045 × **36** champs (+ `lifecycle_applicability`)

### Distribution lifecycle_applicability

| Valeur | Count |
|--------|------:|
| document-lifecycle | 697 |
| technical-artifact-lifecycle | 15 |
| not-applicable | 338 |
| unknown | 0 |

### lifecycle_status avant/après correctif

| Statut | Avant (7e60935) | Après |
|--------|----------------:|------:|
| validated | 476 | **145** |
| candidate | 140 | **154** |
| draft | 154 | **138** |
| archived | 270 | 265 |
| superseded | 5 | 5 |
| not-applicable | 0 | **338** |
| unknown | 0 | 0 |

### Artefacts techniques → not-applicable

**338** fichiers — code source, configs, manifests, CI, `.gitignore`, `.env.example`, exports Notion, assets, etc.

Les **15** `technical-artifact-lifecycle` conservent un lifecycle réel (schemas cmp-001 draft, configs candidate, etc.).

### Audit des 184 unknown → validated (Pass L)

| Catégorie | Count |
|-----------|------:|
| Total initial | 184 |
| Reclassés not-applicable (techniques) | 6 |
| Audit documentaire | 178 |
| **validated confirmés** (preuve forte) | **132** |
| Rétrogradés candidate | 45 |
| Rétrogradés draft | 0 |

**Types de preuve forte retenus :** explicit-status, morris-decision, validated-report, merged-approved-cycle, closure-evidence, canonical-source.

**Preuves faibles rejetées seules :** inferred-role (README), project-cycle heuristique sans marqueur, path-only, filename-only.

### ADR-CAND-009

`projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md`

- **Résultat :** `validated` (conservé)
- **Preuve :** `explicit-status` — « Statut : Confirmed — Post-MVP »
- **Réserve :** confirmation hors MVP, pas ADR formelle pending

### Unknown résiduels

**0**

### Confirmations

| Élément | Statut |
|---------|--------|
| Usage | **Inchangé** (481 unknown) |
| Authority | **Inchangée** (534 unknown) |
| Lot B | **0** |
| Lot C | **23** |
| Migration | **Aucune** |

---



---

## Large Artifact Protocol — CSV

| Élément | Valeur |
|---------|--------|
| Chemin | method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv |
| SHA-256 | `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2` |
| Lignes | 1045 |
| Champs | 36 |
| synthesis only | **no** |

### En-tête

```
current_path,filename,extension,size_bytes,primary_family,subfamily,lifecycle_status,lifecycle_applicability,authority,usage,scope,project,phase,trajectory,trajectory_role,logical_location_current,logical_location_target,naming_rule_regime,naming_compliance,location_compliance,metadata_profile,content_summary,incoming_references,outgoing_references,duplicate_or_overlap,canonical_candidate,proposed_disposition,proposed_target_path,proposed_target_filename,rationale,risk_level,morris_gate_required,confidence,evidence,reserve_or_question,migration_lot_candidate
```

### 20 premières lignes

```
current_path,filename,extension,size_bytes,primary_family,subfamily,lifecycle_status,lifecycle_applicability,authority,usage,scope,project,phase,trajectory,trajectory_role,logical_location_current,logical_location_target,naming_rule_regime,naming_compliance,location_compliance,metadata_profile,content_summary,incoming_references,outgoing_references,duplicate_or_overlap,canonical_candidate,proposed_disposition,proposed_target_path,proposed_target_filename,rationale,risk_level,morris_gate_required,confidence,evidence,reserve_or_question,migration_lot_candidate
.cursor/mcp-templates/README.md,README.md,md,3733,F13,,candidate,document-lifecycle,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Cursor MCP templates — Penpot **Dossier** : `.cursor/mcp-templates/` **Statut** : Exemples non secrets — configurat,docs/tooling/penpot/penpot-cursor-agent-rules.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-design-agent-architecture.md); ](../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-cursor-agent-rules.md),no,no,keep,.cursor/mcp-templates/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role,Explicit candidate/draft marker — no strong validation proof. Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,json,265,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,"{ ""mcpServers"": { ""penpot-self-host"": { ""type"": ""http"", ""url"": ""http://localhost:9001/mcp/stream?userT",.cursor/mcp-templates/README.md; docs/tooling/penpot/penpot-mcp-self-host-rex.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,,no,no,keep,.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Document lifecycle not applicable — technical/operational artifact; Usage pass will qualify operational role.,lot-E
.github/workflows/interv360-ci.yml,interv360-ci.yml,yml,1225,F16,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,"name: Interv360 CI on: pull_request: paths: - ""projects/interv360/**"" - "".github/workflows/interv360-",,,no,no,keep,.github/workflows/interv360-ci.yml,interv360-ci.yml,"Regime technical-convention; family F16; D10 compliant (current=tools, target=tools); lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=inferred-role,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-I
.gitignore,.gitignore,none,262,F17,,not-applicable,not-applicable,informational,unknown,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (none),,,no,no,keep,.gitignore,.gitignore,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-E
README.md,README.md,md,3571,F13,,candidate,document-lifecycle,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# SFIA Workspace Workspace local officiel de la **SFIA** (Software Factory & Intelligence Architecture). Ce dépôt est,,,no,no,keep,README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role,"README index — operational reference, not validated foundation document.",lot-E
components/README.md,README.md,md,224,F13,,candidate,document-lifecycle,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Components Espace local pour les notes et artefacts liés aux composants SFIA. Le registre officiel des composants re,,,no,no,keep,components/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role,"README index — operational reference, not validated foundation document.",lot-E
docker/penpot/.env.example,.env.example,example,400,F17,,not-applicable,not-applicable,informational,unknown,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (example),,,no,no,keep,docker/penpot/.env.example,.env.example,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-E
docker/penpot/README.md,README.md,md,2792,F13,,candidate,document-lifecycle,reference,unknown,repository,,,SFIA v2.4,baseline,tools,tools,documentary,compliant,compliant,E,# Penpot Docker — Templates SFIA **Dossier** : `docker/penpot/` **Statut** : Templates sûrs — pas d'installation stan,,](https://help.penpot.app/technical-guide/getting-started/docker/); ](https://help.penpot.app/technical-guide/getting-started/); ](https://help.penpot.app/technical-guide/getting-started/docker/); ](../../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../.cursor/mcp-templates/penpot-mcp.example.json),no,no,keep,docker/penpot/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=tools, target=tools); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role,Explicit candidate/draft marker — no strong validation proof. Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,yml,378,F17,,not-applicable,not-applicable,informational,unknown,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,# Example override for a local SFIA Penpot setup. # Use only with the official Penpot docker-compose.yml. # Do not treat,docker/penpot/README.md,,no,no,keep,docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-E
docs/README.md,README.md,md,1104,F13,,candidate,document-lifecycle,reference,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Platform Documentation Ce dossier contient la documentation plateforme SFIA. Il est distinct de la méthode acti,,,no,no,keep,docs/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role,"README index — operational reference, not validated foundation document.",lot-E
docs/adr/README.md,README.md,md,131,F13,,candidate,document-lifecycle,reference,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# ADR Architecture Decision Records — décisions structurantes tracées. Source Notion : base ADR (`exports/notion/adr.j,,,no,no,keep,docs/adr/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role,"README index — operational reference, not validated foundation document.",lot-E
docs/architecture/README.md,README.md,md,1966,F13,,candidate,document-lifecycle,reference,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,"# SFIA Architecture Documentation d'architecture SFIA : Domain Model, composants, flux et vues. Source Notion : Compon",,,no,no,keep,docs/architecture/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role,"README index — operational reference, not validated foundation document.",lot-E
docs/architecture/sfia-decision-engine.md,sfia-decision-engine.md,md,56513,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,rename,docs/architecture/sfia-decision-engine.md,YYYY-MM-DD-sfia-decision-engine.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;all=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-D
docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,md,57907,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-domain-model.md,sfia-domain-model.md,md,26327,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-domain-model.md,sfia-domain-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,medium,lifecycle-corrective;proof=explicit-status+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-meta-model.md,sfia-meta-model.md,md,45992,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-meta-model.md,sfia-meta-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+canonical-source;all=explicit-status+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,md,63116,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,medium,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+closure-evidence+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,md,41225,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,medium,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/foundation/README.md,README.md,md,208,F13,,archived,document-lifecycle,reference,unknown,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,E,"# Foundation Principes fondateurs, gouvernance et cadre de la plateforme SFIA. Source Notion : Knowledge Articles, Sta",,,no,no,archive,docs/foundation/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective archived.",low,no,medium,lifecycle-pass-L;trajectory-v1.1-historical;readme-index-role;git=586671c init: create SFIA workspace structure,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,md,10488,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,keep,docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
```

### 20 dernières lignes

```
tools/cmp-001/src/schemas/template.schema.json,template.schema.json,json,642,F15,,draft,technical-artifact-lifecycle,unknown,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,unknown,unknown,compliant,F,"{ ""$schema"": ""https://json-schema.org/draft/2020-12/schema"", ""title"": ""Template"", ""type"": ""object"", ""properties""",,,no,no,investigate,tools/cmp-001/src/schemas/template.schema.json,template.schema.json,"Regime unknown; family F15; D10 compliant (current=tools, target=tools); D12 unknown.; lifecycle-corrective draft.",low,no,medium,path+content-sample+regime=unknown+incoming=0,Usage unknown — verify references and operational role. Naming rule regime uncertain — investigate before rename. Documentary naming status uncertain. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createADR.js,createADR.js,js,111,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createADR.js,createADR.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createComponent.js,createComponent.js,js,123,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createComponent.js,createComponent.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createExperiment.js,createExperiment.js,js,125,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createExperiment.js,createExperiment.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createKPI.js,createKPI.js,js,111,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createKPI.js,createKPI.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createKnowledgeArticle.js,createKnowledgeArticle.js,js,130,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createKnowledgeArticle.js,createKnowledgeArticle.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createObject.js,createObject.js,js,826,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createObject.js,createObject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createProject.js,createProject.js,js,119,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createProject.js,createProject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createPrompt.js,createPrompt.js,js,117,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createPrompt.js,createPrompt.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createREX.js,createREX.js,js,111,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createREX.js,createREX.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createReferencePage.js,createReferencePage.js,js,132,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createReferencePage.js,createReferencePage.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createStandard.js,createStandard.js,js,121,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createStandard.js,createStandard.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createTemplate.js,createTemplate.js,js,121,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createTemplate.js,createTemplate.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/discover.js,discover.js,js,5562,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/discover.js,discover.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/export.js,export.js,js,7318,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/export.js,export.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateKnowledgeArticle.js,updateKnowledgeArticle.js,js,130,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateKnowledgeArticle.js,updateKnowledgeArticle.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateObject.js,updateObject.js,js,735,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateObject.js,updateObject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateProject.js,updateProject.js,js,119,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateProject.js,updateProject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/validate.js,validate.js,js,3691,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/src/validate.js,validate.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,js,4453,F17,,validated,technical-artifact-lifecycle,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective validated.",low,no,medium,path+content-sample+regime=technical-convention+incoming=1; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
```

### Lignes modifiées (1045)

- .cursor/mcp-templates/README.md: lc validated→candidate app document-lifecycle
- .cursor/mcp-templates/penpot-mcp.example.json: lc validated→not-applicable app not-applicable
- .github/workflows/interv360-ci.yml: lc validated→not-applicable app not-applicable
- .gitignore: lc validated→not-applicable app not-applicable
- README.md: lc validated→candidate app document-lifecycle
- components/README.md: lc validated→candidate app document-lifecycle
- docker/penpot/.env.example: lc validated→not-applicable app not-applicable
- docker/penpot/README.md: lc validated→candidate app document-lifecycle
- docker/penpot/docker-compose.override.example.yml: lc validated→not-applicable app not-applicable
- docs/README.md: lc validated→candidate app document-lifecycle
- docs/adr/README.md: lc validated→candidate app document-lifecycle
- docs/architecture/README.md: lc validated→candidate app document-lifecycle
- docs/architecture/sfia-decision-engine.md: lc validated→validated app document-lifecycle
- docs/architecture/sfia-delivery-pipeline.md: lc validated→validated app document-lifecycle
- docs/architecture/sfia-domain-model.md: lc validated→validated app document-lifecycle
- docs/architecture/sfia-meta-model.md: lc validated→validated app document-lifecycle
- docs/architecture/sfia-platform-architecture.md: lc validated→validated app document-lifecycle
- docs/architecture/sfia-repository-blueprint.md: lc validated→validated app document-lifecycle
- docs/foundation/README.md: lc archived→archived app document-lifecycle
- docs/foundation/sfia-engineering-principles.md: lc validated→validated app document-lifecycle
- docs/knowledge/README.md: lc validated→candidate app document-lifecycle
- docs/practices/README.md: lc validated→candidate app document-lifecycle
- docs/practices/architecture/functional-architecture-checklist.md: lc draft→draft app document-lifecycle
- docs/practices/architecture/functional-architecture-deliverables-standard.md: lc draft→draft app document-lifecycle
- docs/practices/architecture/functional-architecture-method.md: lc draft→draft app document-lifecycle
- docs/practices/methods-structure-check.md: lc draft→draft app document-lifecycle
- docs/practices/process/bpmn-deliverables-standard.md: lc candidate→candidate app document-lifecycle
- docs/practices/process/bpmn-integration-checklist.md: lc draft→draft app document-lifecycle
- docs/practices/process/bpmn-method-cycle-closure.md: lc draft→draft app document-lifecycle
- docs/practices/process/bpmn-method-integration-audit.md: lc draft→draft app document-lifecycle
- docs/practices/process/bpmn-process-modeling-method.md: lc candidate→candidate app document-lifecycle
- docs/practices/roles/README.md: lc validated→candidate app document-lifecycle
- docs/practices/roles/architect-method.md: lc draft→draft app document-lifecycle
- docs/practices/roles/business-analyst-method.md: lc draft→draft app document-lifecycle
- docs/practices/roles/product-owner-method.md: lc draft→draft app document-lifecycle
- docs/practices/roles/project-manager-method.md: lc draft→draft app document-lifecycle
- docs/practices/roles/qa-tester-method.md: lc validated→validated app document-lifecycle
- docs/practices/roles/rssi-method.md: lc draft→draft app document-lifecycle
- docs/practices/roles/ux-ui-designer-method.md: lc draft→draft app document-lifecycle
- docs/practices/ux-ui/ux-ui-reprise-checklist.md: lc draft→draft app document-lifecycle
- docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md: lc draft→draft app document-lifecycle
- docs/practices/ux-ui/ux-ui-reprise-method.md: lc draft→draft app document-lifecycle
- docs/rex/README.md: lc validated→candidate app document-lifecycle
- docs/roadmaps/cmp-technical-roadmap.md: lc draft→draft app document-lifecycle
- docs/standards/README.md: lc validated→candidate app document-lifecycle
- docs/standards/ux-ui-v1-governance-standard.md: lc validated→validated app document-lifecycle
- docs/templates/README.md: lc validated→candidate app document-lifecycle
- docs/templates/architecture/functional-architecture-cycle-closure-template.md: lc draft→draft app document-lifecycle
- docs/templates/architecture/functional-architecture-scope-template.md: lc draft→draft app document-lifecycle
- docs/templates/architecture/functional-architecture-summary-template.md: lc draft→draft app document-lifecycle
- docs/templates/process/bpmn-cycle-closure-template.md: lc draft→draft app document-lifecycle
- docs/templates/process/bpmn-process-analysis-template.md: lc draft→draft app document-lifecycle
- docs/templates/process/bpmn-process-scope-template.md: lc draft→draft app document-lifecycle
- docs/templates/tooling/penpot/README.md: lc validated→candidate app document-lifecycle
- docs/templates/ux-ui/ux-ui-cycle-closure-template.md: lc draft→draft app document-lifecycle
- docs/templates/ux-ui/ux-ui-reprise-scope-template.md: lc draft→draft app document-lifecycle
- docs/templates/ux-ui/ux-ui-reprise-summary-template.md: lc draft→draft app document-lifecycle
- docs/tooling/mcp/sfia-3-cycle-engine.md: lc archived→archived app document-lifecycle
- docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md: lc archived→archived app document-lifecycle
- docs/tooling/mcp/sfia-3-orchestration-doctrine.md: lc archived→archived app document-lifecycle
- docs/tooling/mcp/sfia-mcp-v2-architecture.md: lc draft→draft app document-lifecycle
- docs/tooling/penpot/penpot-cursor-agent-rules.md: lc draft→draft app document-lifecycle
- docs/tooling/penpot/penpot-design-agent-architecture.md: lc draft→draft app document-lifecycle
- docs/tooling/penpot/penpot-mcp-self-host-rex.md: lc draft→draft app document-lifecycle
- docs/tooling/penpot/penpot-self-host-docker-guide.md: lc draft→draft app document-lifecycle
- docs/tooling/penpot/penpot-sfia-method-integration.md: lc draft→draft app document-lifecycle
- docs/workspace-readiness-report.md: lc validated→candidate app document-lifecycle
- exports/notion/README.md: lc validated→candidate app document-lifecycle
- exports/notion/adr.json: lc validated→not-applicable app not-applicable
- exports/notion/components.json: lc validated→not-applicable app not-applicable
- exports/notion/experiments.json: lc validated→validated app technical-artifact-lifecycle
- exports/notion/export-manifest.json: lc validated→not-applicable app not-applicable
- exports/notion/knowledge.json: lc validated→not-applicable app not-applicable
- exports/notion/kpi.json: lc validated→not-applicable app not-applicable
- exports/notion/projects.json: lc validated→not-applicable app not-applicable
- exports/notion/prompts.json: lc validated→validated app technical-artifact-lifecycle
- exports/notion/rex.json: lc validated→not-applicable app not-applicable
- exports/notion/standards.json: lc validated→not-applicable app not-applicable
- exports/notion/templates.json: lc validated→not-applicable app not-applicable
- method/README.md: lc validated→candidate app document-lifecycle
- method/complementary/README.md: lc validated→candidate app document-lifecycle
- method/complementary/controlled-delivery/README.md: lc validated→candidate app document-lifecycle
- method/complementary/controlled-delivery/controlled-delivery-checklist.md: lc draft→draft app document-lifecycle
- method/complementary/controlled-delivery/controlled-delivery-index-integration.md: lc validated→candidate app document-lifecycle
- method/complementary/controlled-delivery/controlled-delivery-prompt-family.md: lc draft→draft app document-lifecycle
- method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md: lc validated→candidate app document-lifecycle
- method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md: lc validated→validated app document-lifecycle
- method/complementary/controlled-delivery/controlled-delivery-publication-package.md: lc validated→candidate app document-lifecycle
- method/complementary/controlled-delivery/controlled-delivery-publication-prep.md: lc validated→candidate app document-lifecycle
- method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md: lc validated→validated app document-lifecycle
- method/complementary/controlled-delivery/controlled-delivery-standard-summary.md: lc validated→validated app document-lifecycle
- method/complementary/controlled-delivery/controlled-delivery-standard.md: lc draft→draft app document-lifecycle
- method/complementary/controlled-delivery/controlled-delivery-template.md: lc draft→draft app document-lifecycle
- method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/README.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/archive/interv360-realization/README.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/archive/interv360-realization/capitalization-plan.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/archive/interv360-realization/capitalization-summary.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/archive/interv360-realization/notion-integration-plan.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/archive/interv360-realization/realization-checklists.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/archive/interv360-realization/realization-deliverables-standard.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/archive/interv360-realization/realization-method.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/archive/interv360-realization/realization-prompt-family.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/archive/interv360-realization/realization-templates.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/audit-rex/README.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/audit-rex/interv360-application-rex.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/automation/README.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/automation/sfia-automation-architecture.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/automation/sfia-prompt-generation-engine.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/automation/sfia-repository-execution-engine.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/automation/sfia-validation-engine.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/checklists/README.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/checklists/guardrails-checklist.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/checklists/notion-publication-checklist.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/checklists/sfia-validation-checklist.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/checklists/validation-checklist.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/core/README.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/core/sfia-architecture-standards.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/core/sfia-consolidation-roadmap.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/core/sfia-global-capitalization.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/core/sfia-knowledge-layer.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/core/sfia-rules-update.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/cycles/README.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/cycles/interv360-final-capitalization.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/README.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/README.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md: lc superseded→superseded app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/README.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-post-merge-status.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md: lc superseded→superseded app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/inventory-complementary-methods.md-list.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/inventory-interv360-docs.md-list.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/inventory-platform-docs.md-list.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/inventory-platform-templates.md-list.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/inventory-practices.md-list.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/inventory-prompts.md-list.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/inventory-sfia-fast-track.md-list.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-3-documentation-routing-audit.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4.1-documentation-status-promotion-report.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-07-sfia-3-opening-report.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-08-sfia-3-exploration-closure.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-08-sfia-3-runtime-loop-validation.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-cursor-integration-flow.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-cursor-interactive-validation.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-e2e-v040-flow.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l2-handoff-experiment.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-mvp-l1-experiment.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-documentation-links-correction-report.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-documentation-realignment-report.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-pr-readiness-report.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/documentation-audit.md: lc superseded→superseded app document-lifecycle
- method/sfia-fast-track/documentation/documentation-structure-target.md: lc superseded→superseded app document-lifecycle
- method/sfia-fast-track/documentation/notion-publication-plan.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/notion-target-content-map.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-engine-design.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md: lc validated→validated app document-lifecycle
- method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md: lc candidate→candidate app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-all.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-depth3.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-docs-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-exports-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-interv360-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-markdown-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-method-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-prompts-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-tools-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-all-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-directory-map.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-folder-normalization-audit.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-folder-volume.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-markdown-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/post-cleanup-all-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/post-cleanup-markdown-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-all-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth2.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth4.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-docs-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-markdown-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-method-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-methods-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-projects-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-scripts-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-sfia-notion-sync-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-all.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-depth3.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/docs-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/exports-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/interv360-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/markdown-files-all.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/method-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/methods-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/post-round-2-markdown-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/prompts-files.txt: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-audit.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-plan.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-report.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-global-audit.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md: lc archived→archived app document-lifecycle
- method/sfia-fast-track/templates/audit-template.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/templates/cycle-template.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/templates/mvp-delivery-pattern-template.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/templates/post-merge-template.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/templates/pr-body-template.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/templates/rex-template.md: lc draft→draft app document-lifecycle
- method/sfia-fast-track/ui/README.md: lc validated→candidate app document-lifecycle
- method/sfia-fast-track/ui/figma-design-first-ui-method.md: lc validated→validated app document-lifecycle
- projects/README.md: lc validated→candidate app document-lifecycle
- projects/chantiers360-v2/00-framing/business-rules.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/00-framing/detailed-framing.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/00-framing/project-framing.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/00-framing/scope-boundaries.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/00-framing/use-cases.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/01-functional-architecture/functional-architecture.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/01-functional-architecture/functional-decisions.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/01-functional-architecture/functional-domains.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/01-functional-architecture/navigation-model.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/01-functional-architecture/state-model.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/02-ux-ui/screen-map.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/02-ux-ui/user-flows.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/02-ux-ui/ux-decisions.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/02-ux-ui/wireframes-functional.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/03-backlog/acceptance-criteria.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/03-backlog/backlog-decisions.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/03-backlog/backlog-traceability.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/03-backlog/delivery-increments.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/03-backlog/epics.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/03-backlog/user-stories.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/04-design/captures/01-dashboard-cockpit-premium.png: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/04-design/captures/02-fiche-chantier-taches.png: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/04-design/captures/03-fiche-chantier-reserves.png: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/04-design/captures/04-creation-chantier.png: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/04-design/design-decisions.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/04-design/design-to-backlog-alignment.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/04-design/figma-brief.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/04-design/figma-review-checklist.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/04-design/screen-design-spec.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/05-technical-architecture/application-structure.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/05-technical-architecture/data-model-light.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/05-technical-architecture/frontend-architecture.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/05-technical-architecture/stack-decision.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/05-technical-architecture/stack-options.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/05-technical-architecture/technical-decisions.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/05-technical-architecture/validation-and-delivery-readiness.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/06-figma-fidelity-spike/figma-reference.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/06-figma-fidelity-spike/visual-comparison-report.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-implementation-report.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-validation-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-02/inc-02-closure-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-validation-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-03/inc-03-closure-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-decisions.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-implementation-report.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-validation-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-04/inc-04-closure-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-implementation-report.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-validation-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-05/inc-05-closure-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/07-delivery-inc-05/pr-readiness-inc-05.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-01/local-e2e-runbook.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-01/qa-execution-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-report.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-01/qa-readiness.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-01/qa-strategy.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md: lc candidate→candidate app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-02/qa-g4-post-merge-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-report.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-02/qa-readiness.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-02/qa-reserves.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-02/qa-strategy.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-03/qa-g4-post-merge-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-report.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-03/qa-readiness.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-03/qa-reserves.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-04/qa-g4-post-merge-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-report.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-04/qa-readiness.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-04/qa-reserves.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-04/qa-strategy.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-05/qa-g4-post-merge-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-report.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-05/qa-readiness.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-05/qa-strategy.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md: lc draft→draft app document-lifecycle
- projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/09-capitalization/README.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/09-capitalization/chantiers360-v2-final-pilot-rex-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/09-capitalization/inc-01-capitalization-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/09-capitalization/mvp-capitalization-report.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/09-capitalization/v0-vs-sfia-v2-methodological-comparison.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/README.md: lc validated→validated app document-lifecycle
- projects/chantiers360-v2/app/.env.example: lc draft→not-applicable app not-applicable
- projects/chantiers360-v2/app/.env.test.example: lc draft→not-applicable app not-applicable
- projects/chantiers360-v2/app/.eslintrc.json: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/.gitignore: lc draft→not-applicable app not-applicable
- projects/chantiers360-v2/app/app/chantiers/[id]/page.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/app/chantiers/nouveau/page.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/app/globals.css: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/app/layout.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/app/page.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/app/prochaines-actions/page.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/AddCompteRenduForm.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/AddReserveForm.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/AddTaskForm.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/ChantierFiche.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/ChantierOperationalTabs.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/ComptesRendusSection.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/CreateChantierForm.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/MilestonesSection.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/ReserveStatusSelector.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/ReservesSection.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/StatusSelector.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/TaskStatusSelector.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/chantier/TasksSection.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/dashboard/ChantierCard.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/dashboard/ChantiersGrid.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/dashboard/DashboardHero.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/dashboard/DashboardPage.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/dashboard/RightPanels.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/dashboard/Sidebar.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/layout/AppShell.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/components/prochaines-actions/ProchainesActionsList.tsx: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/data/mockChantiers.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/docker-compose.test.yml: lc draft→not-applicable app not-applicable
- projects/chantiers360-v2/app/drizzle.config.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/drizzle/0000_initial.sql: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/drizzle/0001_tasks_reserves.sql: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/drizzle/0002_simple_milestones.sql: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/drizzle/0003_comptes_rendus.sql: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/drizzle/meta/_journal.json: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/e2e/helpers/db.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/e2e/inc-01.spec.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/e2e/inc-02.spec.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/e2e/inc-03.spec.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/e2e/inc-04.spec.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/e2e/inc-05.spec.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/e2e/r-qa-04-dashboard-panels.spec.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/chantiers/actions.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/chantiers/mappers.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/chantiers/queries.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/chantiers/types.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/comptes-rendus/actions.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/comptes-rendus/format.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/comptes-rendus/queries.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/dashboard/right-panels.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/db/index.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/db/schema.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/planning/actions.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/planning/format.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/planning/queries.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/planning/types.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/prochaines-actions/format.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/prochaines-actions/queries.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/prochaines-actions/types.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/reserves/actions.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/reserves/queries.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/reserves/types.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/taches/actions.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/taches/queries.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/lib/taches/types.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/next.config.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/package-lock.json: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/package.json: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/playwright.config.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/postcss.config.mjs: lc draft→not-applicable app not-applicable
- projects/chantiers360-v2/app/scripts/seed-prochaines-actions-demo.mjs: lc draft→not-applicable app not-applicable
- projects/chantiers360-v2/app/tailwind.config.ts: lc validated→not-applicable app not-applicable
- projects/chantiers360-v2/app/tsconfig.json: lc validated→not-applicable app not-applicable
- projects/interv360/00-intake/README.md: lc validated→candidate app document-lifecycle
- projects/interv360/00-intake/interv360-sfia-test-strategy.md: lc validated→validated app document-lifecycle
- projects/interv360/00-intake/project-intake.md: lc validated→validated app document-lifecycle
- projects/interv360/01-cadrage/README.md: lc validated→candidate app document-lifecycle
- projects/interv360/01-cadrage/adr-candidates.md: lc candidate→candidate app document-lifecycle
- projects/interv360/01-cadrage/business-framing.md: lc draft→draft app document-lifecycle
- projects/interv360/01-cadrage/cadrage-phase-gate.md: lc draft→draft app document-lifecycle
- projects/interv360/01-cadrage/dashboard-kpi-ux-review.md: lc draft→draft app document-lifecycle
- projects/interv360/01-cadrage/framing-review.md: lc draft→draft app document-lifecycle
- projects/interv360/01-cadrage/integration-error-arbitration-review.md: lc draft→draft app document-lifecycle
- projects/interv360/01-cadrage/mvp-arbitration-validation.md: lc validated→validated app document-lifecycle
- projects/interv360/01-cadrage/mvp-arbitrations.md: lc draft→draft app document-lifecycle
- projects/interv360/01-cadrage/notion-sync-payload.json: lc candidate→not-applicable app not-applicable
- projects/interv360/01-cadrage/role-methods-framing.md: lc draft→draft app document-lifecycle
- projects/interv360/01-cadrage/role-methods-review.md: lc draft→draft app document-lifecycle
- projects/interv360/01-cadrage/secure-email-intake-review.md: lc draft→draft app document-lifecycle
- projects/interv360/01-cadrage/ux-ui-brief-validation.md: lc candidate→candidate app document-lifecycle
- projects/interv360/01-cadrage/ux-ui-brief.md: lc validated→validated app document-lifecycle
- projects/interv360/02-architecture/README.md: lc validated→candidate app document-lifecycle
- projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md: lc validated→validated app document-lifecycle
- projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md: lc validated→validated app document-lifecycle
- projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md: lc validated→validated app document-lifecycle
- projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md: lc validated→validated app document-lifecycle
- projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md: lc validated→validated app document-lifecycle
- projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md: lc validated→validated app document-lifecycle
- projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md: lc validated→validated app document-lifecycle
- projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md: lc validated→validated app document-lifecycle
- projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md: lc validated→validated app document-lifecycle
- projects/interv360/02-architecture/architecture-p1-summary.md: lc draft→draft app document-lifecycle
- projects/interv360/02-architecture/architecture-p2-design-impact-summary.md: lc validated→validated app document-lifecycle
- projects/interv360/02-architecture/closure-without-signature-summary.md: lc draft→draft app document-lifecycle
- projects/interv360/02-architecture/closure-without-signature.md: lc draft→draft app document-lifecycle
- projects/interv360/02-architecture/figma-first-draft-screens/00-cover-context.png: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/figma-first-draft-screens/05-dashboard-sav.png: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/figma-first-draft-screens/06-liste-demandes.png: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/figma-first-draft-screens/08-planning-semaine.png: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/figma-first-draft-screens/09-fiche-intervention-mobile.png: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/figma-first-draft-screens/10-compte-rendu-mobile.png: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/figma-first-draft-screens/11-suivi-erreurs-integration.png: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/figma-first-draft-screens/12-vue-dirigeant.png: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/figma-first-draft-screens/13-validation-checklist.png: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/figma-first-draft-screens/99-archive.png: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/geo-ai-arbitration-summary.md: lc draft→draft app document-lifecycle
- projects/interv360/02-architecture/geo-ai-arbitration.md: lc draft→draft app document-lifecycle
- projects/interv360/02-architecture/mvp-clarifications-summary.md: lc draft→draft app document-lifecycle
- projects/interv360/02-architecture/mvp-clarifications.md: lc draft→draft app document-lifecycle
- projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-project-update.json: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.json: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-figma-v1-closure-payload.json: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-figma-v1-cmp-project-update.json: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-prompt-library-final-lot-cmp-payload.json: lc candidate→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json: lc candidate→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload.json: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-qa-prompt-library-cmp-payload.json: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-qa-prompt-library-payload.json: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-qa-tester-cmp-project-update.json: lc candidate→not-applicable app not-applicable
- projects/interv360/02-architecture/notion-sync-qa-tester-governance-payload.json: lc validated→not-applicable app not-applicable
- projects/interv360/02-architecture/rules-rg-prioritization-summary.md: lc draft→draft app document-lifecycle
- projects/interv360/02-architecture/rules-rg-prioritization.md: lc draft→draft app document-lifecycle
- projects/interv360/02-architecture/status-mapping-summary.md: lc draft→draft app document-lifecycle
- projects/interv360/02-architecture/status-mapping.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/README.md: lc validated→candidate app document-lifecycle
- projects/interv360/03-design/design-v2-cycle-opening.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/figma-first-screen-reprise-instructions.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/figma-first-screen-review.md: lc validated→validated app document-lifecycle
- projects/interv360/03-design/figma-fresh-start-instructions.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/figma-premium-redesign-brief.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/figma-reprise-path.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/penpot-application-frame-template.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/penpot-first-screen-cycle-summary.md: lc validated→validated app document-lifecycle
- projects/interv360/03-design/penpot-first-screen-mcp-instructions.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/penpot-first-screen-review.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/penpot-first-screen-v11-instructions.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/penpot-first-screen-v2-visual-instructions.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/penpot-project-reference.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/penpot-screen-prioritization.md: lc draft→draft app document-lifecycle
- projects/interv360/03-design/penpot-visual-quality-benchmark.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/api-demo-hardening.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/api-product-hardening.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/api-product-validation.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/audit-trail.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/auth-user-switcher.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/backend-minimal-prototype.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/backend-persistence.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/backend-users-session.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/batch-01-demo-credibility.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/batch-02-demo-control-scenario.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/batch-03-demo-readiness-package.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/batch-04-demo-presentation-package.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/connected-ux-productization.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/delivery-detailing-plan.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/delivery-detailing-summary.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/delivery-preparation-plan.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/delivery-readiness-summary.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/delivery-slicing-strategy.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/demo-feedback-review.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/demo-mvp-closure.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/demo-polish.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/demo-presentation-feedback.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/demo-presentation-review.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/end-to-end-demo-hardening.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/frontend-api-connection-framing.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/frontend-api-connection.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/functional-lots.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/implementation-go-no-go.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/implementation-planning-plan.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/implementation-planning-summary.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/macro-backlog.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/mvp-scope.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/premium-design-system.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/prioritization.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/product-demo-consolidation.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/product-industrialization.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/product-ux-finalization.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/realization-criteria.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/realization-preparation-plan.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/realization-preparation-summary.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/realization-start-plan.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/realization-start-summary.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/request-model-finalization.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/request-model-productization.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/role-simulation.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/technical-arbitration.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/technical-design-plan.md: lc draft→draft app document-lifecycle
- projects/interv360/04-delivery/technical-design-summary.md: lc validated→validated app document-lifecycle
- projects/interv360/04-delivery/workflow-light-extension.md: lc candidate→candidate app document-lifecycle
- projects/interv360/04-delivery/workflow-requalification.md: lc validated→validated app document-lifecycle
- projects/interv360/05-release/mvp-release-readiness.md: lc validated→validated app document-lifecycle
- projects/interv360/06-audit-rex/README.md: lc validated→candidate app document-lifecycle
- projects/interv360/06-audit-rex/current-application-audit.md: lc superseded→superseded app document-lifecycle
- projects/interv360/07-documentation/README.md: lc validated→candidate app document-lifecycle
- projects/interv360/08-presentation/interv360-demo-one-page-summary.md: lc draft→draft app document-lifecycle
- projects/interv360/08-presentation/interv360-demo-presentation-package.md: lc candidate→candidate app document-lifecycle
- projects/interv360/08-presentation/interv360-demo-script.md: lc draft→draft app document-lifecycle
- projects/interv360/08-presentation/interv360-e2e-demo-runbook.md: lc validated→validated app document-lifecycle
- projects/interv360/09-roadmap/interv360-auth-and-user-framing.md: lc validated→validated app document-lifecycle
- projects/interv360/09-roadmap/interv360-auth-foundation-framing.md: lc archived→archived app document-lifecycle
- projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md: lc candidate→candidate app document-lifecycle
- projects/interv360/09-roadmap/interv360-backend-data-model-decision.md: lc validated→validated app document-lifecycle
- projects/interv360/09-roadmap/interv360-backend-persistence-decision.md: lc candidate→candidate app document-lifecycle
- projects/interv360/09-roadmap/interv360-backend-target-framing.md: lc candidate→candidate app document-lifecycle
- projects/interv360/09-roadmap/interv360-backend-technical-stack-decision.md: lc candidate→candidate app document-lifecycle
- projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md: lc validated→validated app document-lifecycle
- projects/interv360/09-roadmap/interv360-next-product-axis.md: lc validated→validated app document-lifecycle
- projects/interv360/09-roadmap/interv360-product-industrialization-framing.md: lc validated→validated app document-lifecycle
- projects/interv360/09-roadmap/interv360-product-roadmap-after-role-simulation.md: lc candidate→candidate app document-lifecycle
- projects/interv360/09-roadmap/interv360-product-roadmap-next.md: lc candidate→candidate app document-lifecycle
- projects/interv360/09-roadmap/interv360-role-simulation-review.md: lc validated→validated app document-lifecycle
- projects/interv360/09-roadmap/interv360-workflow-extension-framing.md: lc validated→validated app document-lifecycle
- projects/interv360/README.md: lc validated→validated app document-lifecycle
- projects/interv360/app/.env.example: lc draft→not-applicable app not-applicable
- projects/interv360/app/.gitignore: lc draft→not-applicable app not-applicable
- projects/interv360/app/README.md: lc validated→validated app document-lifecycle
- projects/interv360/app/index.html: lc validated→not-applicable app not-applicable
- projects/interv360/app/package-lock.json: lc validated→not-applicable app not-applicable
- projects/interv360/app/package.json: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/app/App.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/app/App.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/README.md: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/apiErrorParsing.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/apiErrorParsing.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/apiRequestsRepository.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/apiRequestsRepository.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/interv360LocalStorage.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/localRequestsRepository.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/localStorageKeys.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/requestsRepository.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/requestsRepository.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/requestsRepository.types.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/requestsRepository.workflow.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/requestsRepositoryFactory.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/requestsRepositoryFactory.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/usersRepository.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/data/usersRepository.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/domain/README.md: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/domain/demoUserSession.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/domain/demoUserSession.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/domain/demoUsers.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/domain/demoUsers.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/domain/requestStatus.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/domain/requestStatus.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/domain/simulatedRoles.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/domain/simulatedRoles.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/main.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/seed/README.md: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/seed/demoRequests.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/tests/App.apiMode.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/tests/App.demoScreens.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/tests/App.premiumInteractions.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/tests/App.simulatedRole.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/tests/App.smoke.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/tests/README.md: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/tests/navigationHelpers.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/tests/setup.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/README.md: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/audit/AuditTrailView.css: lc candidate→not-applicable app not-applicable
- projects/interv360/app/src/ui/audit/AuditTrailView.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/audit/auditTrailPresentation.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/dashboard/DashboardCommandCenter.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/dashboard/commandCenterPresentation.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/dashboard/requestDashboardStats.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/DemoOverview.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/DemoOverview.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/DemoOverview.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/DemoReadinessPanel.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/DemoReadinessPanel.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/DemoReadinessPanel.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/DemoScenarioGuide.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/DemoScenarioGuide.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/DemoScenarioGuide.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/demoReadinessContent.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/demoScenarioSteps.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/demo/demoScreens.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/intervention/InterventionReadonly.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/intervention/InterventionReadonly.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/intervention/InterventionReadonly.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/planning/PlanningReadonly.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/planning/PlanningReadonly.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/planning/PlanningReadonly.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/PremiumAuditTrail.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/PremiumBadges.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/PremiumDashboard.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/PremiumMvpDemoPanel.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/PremiumRequestDetail.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/PremiumRequestsPage.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/PremiumShell.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/PremiumSidebar.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/PremiumTopbar.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/PremiumWorkflowPipeline.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/cn.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/index.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/premium.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/premium/premiumPresentationData.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/qualification/QualificationReadonly.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/qualification/QualificationReadonly.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/qualification/QualificationReadonly.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/report/ReportReadonly.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/report/ReportReadonly.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/report/ReportReadonly.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/DemoResetControl.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/DemoResetControl.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/DemoResetControl.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestBadges.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestBadges.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestDetail.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestDetail.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestDetail.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestOperationalPanel.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestOperationalPanel.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestWorkflowPipeline.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestWorkflowPipeline.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestsList.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestsList.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/RequestsList.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/requestIndicators.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/requestListFilters.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/requestListFilters.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/requestOperationalMetrics.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/requests/requestPipelinePresentation.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/roles/DemoUserControl.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/roles/SimulatedRoleControl.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/roles/SimulatedRoleControl.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/workflow/WorkflowActionControl.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/workflow/WorkflowActionControl.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/workflow/WorkflowActionControl.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/workflow/WorkflowJournalReadonly.css: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/workflow/WorkflowJournalReadonly.test.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/ui/workflow/WorkflowJournalReadonly.tsx: lc validated→not-applicable app not-applicable
- projects/interv360/app/src/vite-env.d.ts: lc validated→not-applicable app not-applicable
- projects/interv360/app/tsconfig.app.json: lc validated→not-applicable app not-applicable
- projects/interv360/app/tsconfig.json: lc validated→not-applicable app not-applicable
- projects/interv360/app/tsconfig.node.json: lc validated→not-applicable app not-applicable
- projects/interv360/app/vite.config.ts: lc validated→not-applicable app not-applicable
- projects/interv360/archive/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/adr-early/04-adr/ADR-001-status-mapping.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/adr-early/04-adr/ADR-002-simulated-crm-sync.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/adr-early/04-adr/ADR-003-integration-error-management.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/adr-early/04-adr/ADR-004-local-closure-vs-external-sync.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/adr-early/04-adr/adr-cycle-closure.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/adr-early/04-adr/adr-structuring-scope.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/adr-early/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/architecture-historical/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/clarification/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/clarification/clarification-cycle-closure-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/clarification/clarification-cycle-closure.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/clarification/clarification-workshop-minutes-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/clarification/clarification-workshop-minutes-template-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/clarification/clarification-workshop-minutes-template.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/clarification/clarification-workshop-minutes.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/clarification/clarification-workshop-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/clarification/clarification-workshop-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/cmp/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/cmp/cmp-project-schema-extension-for-governance-content.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-architecture-security.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-final-prompt-lot.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-qa-library.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-uxui.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/cmp/merge-closure-prompt-library-sync.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/cmp/prompt-catalog-enrichment-after-ux-ui-v1-standard.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/cmp/prompt-catalog-qa-tester-validation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/cmp/prompt-catalog-ux-ui-v1-validation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/figma-design-instructions.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/figma-first-draft-review.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/figma-production-prompt.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/figma-review-session-minutes-template.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/figma-review-session-minutes.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/figma-review-session-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/figma-v1-closure-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/sfia-figma-v1-standard-candidate-review.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/sfia-figma-v1-standard-candidate.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/sfia-figma-v1-standard-promotion-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/ux-ui-design-research-and-benchmark.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/figma-v1/ux-ui-figma-opening-note.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-acceptance-criteria.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-action-transition-decision.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-api-strategy.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-app-foundation-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-application-architecture.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-controlled-workflow-skeleton-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-controlled-workflow-validation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-data-model.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-data-scope.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-demo-data.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-demo-reset-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-demo-script.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-detailed-backlog.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-effort-estimation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-final-demo-package.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-front-back-data-decisions.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-front-back-start-decision.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-global-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-implementation-estimate.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-implementation-plan.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-implementation-preparation-plan.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-implementation-preparation-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-intervention-readonly-skeleton-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-list-skeleton-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-local-persistence-decision.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-merge-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-phase-2-delivery-decision.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-phase-2-rex.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-planning-readonly-skeleton-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-pr-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-project-structure-decision.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-push-and-pr.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-qa-scenarios.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-qa-strategy.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-qualification-readonly-skeleton-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-readiness-checklist.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-readonly-demo-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-realization-backlog.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-realization-slicing.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-realization-start-checklist.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-refusal-scenarios.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-report-readonly-skeleton-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-request-detail-skeleton-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-stack-options.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-start-checklist.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-status-rules.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-technical-framing.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-technical-qa-planning.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-technical-scope.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-01/inc-01-user-stories.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-02/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-02/inc-02-merge-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-02/inc-02-pr-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-02/inc-02-push-and-pr.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-02/inc-02-ux-demo-improvement.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-03/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-03/inc-03-merge-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-03/inc-03-multi-requests-local-demo.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-03/inc-03-pr-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-03/inc-03-push-and-pr.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-04/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/inc-04/inc-04-list-filtering-local-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-publication-tooling-check.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-architecture-p1-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-architecture-p2-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-blocked.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-publication-log.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-review.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-existing-prompt-library-inventory.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-figma-v1-closure-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-figma-v1-cmp-publication-log.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-figma-v1-cmp-publication-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-prompt-library-closure-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-cmp-payload-review.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-publication-log.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-cmp-payload-review.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-publication-log.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload-review.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-publication-log.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-qa-prompt-library-cmp-payload-review.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-qa-prompt-library-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-qa-prompt-library-publication-log.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-qa-tester-cmp-publication-log.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-qa-tester-governance-review.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-qa-tester-governance-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/notion-sync-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/notion-sync/pull-request-qa-tester-governance-notion-sync.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/03-process/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/03-process/bpmn/.gitkeep: lc archived→not-applicable app not-applicable
- projects/interv360/archive/pre-delivery-phases/03-process/bpmn/interv360-integration-errors.bpmn: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/03-process/bpmn/interv360-sav-exceptions.bpmn: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/03-process/bpmn/interv360-sav-mvp.bpmn: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/03-process/exports/.gitkeep: lc archived→not-applicable app not-applicable
- projects/interv360/archive/pre-delivery-phases/03-process/exports/interv360-integration-errors.svg: lc archived→not-applicable app not-applicable
- projects/interv360/archive/pre-delivery-phases/03-process/exports/interv360-sav-exceptions.svg: lc archived→not-applicable app not-applicable
- projects/interv360/archive/pre-delivery-phases/03-process/exports/interv360-sav-mvp.svg: lc archived→not-applicable app not-applicable
- projects/interv360/archive/pre-delivery-phases/03-process/interv360-integration-errors-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/03-process/interv360-sav-exceptions-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/03-process/interv360-sav-mvp-preparation.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/03-process/process-analysis.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/03-process/process-cycle-closure.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/03-process/process-scope.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/05-functional-architecture/business-objects.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/05-functional-architecture/dashboard-and-alerts.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-cycle-closure.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-scope.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-domains.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/05-functional-architecture/integration-functional-view.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/05-functional-architecture/status-and-transitions.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/06-ux-ui/dashboard-ux-view.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/06-ux-ui/screen-functional-specs.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/06-ux-ui/screen-inventory.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/06-ux-ui/user-journeys.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-cycle-closure.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-scope.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/pre-delivery-phases/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/role-enrichment/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/role-enrichment/qa-tester-role-candidate-framing.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/role-enrichment/qa-tester-role-candidate-review.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/role-enrichment/qa-tester-role-research-and-benchmark.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/role-enrichment/qa-transverse-analysis-summary.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/role-enrichment/qa-transverse-analysis.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p1.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p2.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/role-enrichment/role-methods-enrichment-after-figma-v1.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/stubs/04-delivery-stub-readme.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/stubs/05-tests/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/stubs/06-documentation/README.md: lc archived→archived app document-lifecycle
- projects/interv360/archive/stubs/README.md: lc archived→archived app document-lifecycle
- projects/interv360/backend/.env.example: lc draft→not-applicable app not-applicable
- projects/interv360/backend/.gitignore: lc draft→not-applicable app not-applicable
- projects/interv360/backend/README.md: lc validated→candidate app document-lifecycle
- projects/interv360/backend/package-lock.json: lc validated→not-applicable app not-applicable
- projects/interv360/backend/package.json: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/api/apiErrors.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/api/routes.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/app.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/config/cors.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/domain/transitions.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/domain/types.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/domain/user.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/index.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/persistence/sqliteDatabase.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/persistence/sqliteSchema.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/persistence/sqliteSeed.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/repositories/usersRepository.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/seed/demoSeed.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/seed/usersSeed.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/src/store/demoStore.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/test/api.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/test/auditTrailPersistence.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/test/cors.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/test/persistence.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/test/requestModelPersistence.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/test/transitions.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/test/usersRepository.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/test/usersSeed.test.ts: lc validated→not-applicable app not-applicable
- projects/interv360/backend/tsconfig.json: lc validated→not-applicable app not-applicable
- projects/interv360/backend/vitest.config.ts: lc validated→not-applicable app not-applicable
- projects/interv360/project.json: lc validated→not-applicable app not-applicable
- prompts/README.md: lc validated→candidate app document-lifecycle
- prompts/arbitrages/.gitkeep: lc candidate→not-applicable app not-applicable
- prompts/architecture/.gitkeep: lc candidate→not-applicable app not-applicable
- prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md: lc draft→draft app document-lifecycle
- prompts/architecture/functional-architecture-prompt-family.md: lc draft→draft app document-lifecycle
- prompts/bpmn/bpmn-prompt-family.md: lc draft→draft app document-lifecycle
- prompts/cadrage/.gitkeep: lc candidate→not-applicable app not-applicable
- prompts/governance/.gitkeep: lc candidate→not-applicable app not-applicable
- prompts/governance/notion/.gitkeep: lc candidate→not-applicable app not-applicable
- prompts/governance/sfia-3-morris-gate.md: lc archived→archived app document-lifecycle
- prompts/prompt-catalog.md: lc candidate→candidate app document-lifecycle
- prompts/qa/.gitkeep: lc candidate→not-applicable app not-applicable
- prompts/qa/delivery-qa-test-prompt-family.md: lc draft→draft app document-lifecycle
- prompts/qa/qa-tester-prompt-family.md: lc candidate→candidate app document-lifecycle
- prompts/roles/.gitkeep: lc candidate→not-applicable app not-applicable
- prompts/security/.gitkeep: lc candidate→not-applicable app not-applicable
- prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md: lc draft→draft app document-lifecycle
- prompts/templates/01-create-foundation-document.md: lc candidate→candidate app document-lifecycle
- prompts/templates/02-update-document-v1-1.md: lc candidate→candidate app document-lifecycle
- prompts/templates/03-create-operational-checklist.md: lc candidate→candidate app document-lifecycle
- prompts/templates/04-validate-cursor-result.md: lc candidate→candidate app document-lifecycle
- prompts/templates/05-validate-pr-readiness.md: lc candidate→candidate app document-lifecycle
- prompts/templates/06-prepare-pr-summary.md: lc candidate→candidate app document-lifecycle
- prompts/templates/07-write-post-merge-status.md: lc candidate→candidate app document-lifecycle
- prompts/templates/08-capitalize-method-asset.md: lc candidate→candidate app document-lifecycle
- prompts/templates/09-prepare-notion-mapping.md: lc candidate→candidate app document-lifecycle
- prompts/templates/10-perform-safe-repository-cleanup.md: lc candidate→candidate app document-lifecycle
- prompts/templates/README.md: lc validated→validated app document-lifecycle
- prompts/templates/sfia-cycle-execution-template.md: lc candidate→candidate app document-lifecycle
- prompts/templates/sfia-prompt-templates-context-pack.md: lc candidate→candidate app document-lifecycle
- prompts/tooling/mcp/sfia-3-cycle-router.md: lc archived→archived app document-lifecycle
- prompts/tooling/mcp/sfia-3-report-analyzer.md: lc archived→archived app document-lifecycle
- prompts/tooling/mcp/sfia-3-task-builder.md: lc archived→archived app document-lifecycle
- prompts/tooling/penpot/penpot-design-agent-prompt-family.md: lc draft→draft app document-lifecycle
- prompts/ux-ui/.gitkeep: lc candidate→not-applicable app not-applicable
- prompts/ux-ui/figma-fidelity-gate-prompt-family.md: lc draft→draft app document-lifecycle
- prompts/ux-ui/ux-ui-reprise-prompt-family.md: lc draft→draft app document-lifecycle
- tools/cmp-001/.env.example: lc candidate→not-applicable app not-applicable
- tools/cmp-001/.gitignore: lc candidate→not-applicable app not-applicable
- tools/cmp-001/CHANGELOG.md: lc candidate→candidate app document-lifecycle
- tools/cmp-001/README.md: lc validated→candidate app document-lifecycle
- tools/cmp-001/ROADMAP.md: lc candidate→candidate app document-lifecycle
- tools/cmp-001/WORKSPACE.md: lc candidate→candidate app document-lifecycle
- tools/cmp-001/config/sfia-v1-1-workspace.config.json: lc candidate→candidate app technical-artifact-lifecycle
- tools/cmp-001/docs/components-database-evolution.md: lc candidate→candidate app document-lifecycle
- tools/cmp-001/docs/consolidation-report.md: lc candidate→candidate app document-lifecycle
- tools/cmp-001/docs/status-matrix.md: lc candidate→candidate app document-lifecycle
- tools/cmp-001/examples/adr.example.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/component-cmp001.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/component.example.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/experiment.example.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/project.example.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/real-objects/adr-cmp001-notion-sync.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/real-objects/knowledge-interv360-project-intake.json: lc candidate→candidate app technical-artifact-lifecycle
- tools/cmp-001/examples/real-objects/knowledge-sfia-engineering-principles.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/real-objects/project-interv360.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/real-objects/prompt-notion-object-creation.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/real-objects/rex-cmp001-notion-sync.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/real-objects/standard-sfia-object-lifecycle.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/real-objects/template-experiment.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/examples/reference-page.example.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/package-lock.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/package.json: lc candidate→not-applicable app not-applicable
- tools/cmp-001/scripts/archive-test-objects.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/scripts/notion-provision.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/cli.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/config.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/notionClient.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/provisioning/configLoader.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/provisioning/dryRunRenderer.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/provisioning/guardrails.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/provisioning/inspector.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/provisioning/planner.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/schemas/adr.schema.json: lc draft→draft app technical-artifact-lifecycle
- tools/cmp-001/src/schemas/component.schema.json: lc draft→draft app technical-artifact-lifecycle
- tools/cmp-001/src/schemas/experiment.schema.json: lc draft→draft app technical-artifact-lifecycle
- tools/cmp-001/src/schemas/knowledge.schema.json: lc draft→not-applicable app not-applicable
- tools/cmp-001/src/schemas/kpi.schema.json: lc draft→not-applicable app not-applicable
- tools/cmp-001/src/schemas/project.schema.json: lc draft→not-applicable app not-applicable
- tools/cmp-001/src/schemas/prompt.schema.json: lc draft→not-applicable app not-applicable
- tools/cmp-001/src/schemas/reference-page.schema.json: lc draft→not-applicable app not-applicable
- tools/cmp-001/src/schemas/rex.schema.json: lc draft→not-applicable app not-applicable
- tools/cmp-001/src/schemas/standard.schema.json: lc draft→draft app technical-artifact-lifecycle
- tools/cmp-001/src/schemas/template.schema.json: lc draft→draft app technical-artifact-lifecycle
- tools/cmp-001/src/services/createADR.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/createComponent.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/createExperiment.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/createKPI.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/createKnowledgeArticle.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/createObject.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/createProject.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/createPrompt.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/createREX.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/createReferencePage.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/createStandard.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/createTemplate.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/discover.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/export.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/updateKnowledgeArticle.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/updateObject.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/services/updateProject.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/src/validate.js: lc validated→not-applicable app not-applicable
- tools/cmp-001/tests/run-all-tests.js: lc validated→validated app technical-artifact-lifecycle

---

## Verdict

```
LIFECYCLE APPLICABILITY MODEL ADDED
BASE INVENTORY REMAINS 1045
CSV FIELD COUNT = 36
TECHNICAL ARTIFACTS REVIEWED
NOT-APPLICABLE LIFECYCLES IDENTIFIED
184 VALIDATED QUALIFICATIONS AUDITED
VALIDATED STATES SUPPORTED BY STRONG EVIDENCE
CANDIDATE MARKERS REVIEWED
ADR-CAND-009 REVIEWED
RESIDUAL LIFECYCLE UNKNOWNS = 0
USAGE VALUES UNCHANGED
AUTHORITY VALUES UNCHANGED
HEAD TRACEABILITY COMPLETE
NO EXISTING REPOSITORY FILE MODIFIED
NO PHYSICAL MIGRATION EXECUTED
PR #165 UPDATED
PR NOT MERGED
REVIEW HANDOFF COMPLETE — REMOTE VERIFIED
READY FOR CHATGPT LIFECYCLE CORRECTIVE REVIEW
SFIA v2.4 REMAINS BASELINE
SFIA v2.6 REMAINS CANDIDATE
```

Morris décide.
