# SFIA Review Pack — Lot D1 Naming Execution (Full)

**Date/heure :** 2026-07-12 18:06 Europe/Paris
**Cycle :** Capitalisation documentaire / exécution D1
**Profil :** Critical
**Décision Morris :** GO explicite exécution D1
**Base Git :** main @ 4e4a17b513927b5f5b901c35ff65f91d6fe30c87
**Branche :** migration/sfia-v2.6-lot-d1-naming @ `930d5a243e372ddae4c856cfb199e0f4aa260906`
**PR :** #174 — https://github.com/mcleland147/sfia-workspace/pull/174
**CSV SHA :** 00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275 — unchanged

## Garde-fous

- Manifeste D1 : **50/50**
- Renames git mv : **50**
- Case two-step : **13**
- Active old D1 paths : **0**
- Temporaires : **0**
- D2/D3 : **untouched**
- CSV in diff : **no**
- Doctrine/canonical : **unchanged**

## Coverage

- created files full content: **yes**
- modified sections complete: **yes**
- useful diff included: **yes**
- synthesis only: **no**
- review pack verdict: **COMPLETE**

---

## Diff stat

```
.cursor/mcp-templates/README.md                    |   6 +-
 ...md => 2026-06-27-workspace-readiness-report.md} |   4 +-
 ...ngine.md => 2026-06-27-sfia-decision-engine.md} |  56 +++++-----
 docs/architecture/sfia-delivery-pipeline.md        |  18 ++--
 docs/foundation/sfia-engineering-principles.md     |  10 +-
 ....md => 2026-06-28-bpmn-method-cycle-closure.md} |   6 +-
 ...=> 2026-06-28-bpmn-method-integration-audit.md} |  16 +--
 ...ctional-architecture-cycle-closure-template.md} |  12 +--
 ...d => 2026-06-28-bpmn-cycle-closure-template.md} |   8 +-
 ... => 2026-06-28-ux-ui-cycle-closure-template.md} |  12 +--
 ...x.md => 2026-06-28-penpot-mcp-self-host-rex.md} |   6 +-
 docs/tooling/penpot/penpot-cursor-agent-rules.md   |  12 +--
 .../penpot/penpot-self-host-docker-guide.md        |   8 +-
 ...026-07-01-delivery-acceleration-level-3-rex.md} |   6 +-
 ...n-plan.md => 2026-06-29-capitalization-plan.md} |   8 +-
 ...ary.md => 2026-06-30-capitalization-summary.md} |  10 +-
 ....md => 2026-07-03-interv360-application-rex.md} |   0
 .../automation/sfia-automation-architecture.md     |  10 +-
 .../automation/sfia-prompt-generation-engine.md    |  10 +-
 .../automation/sfia-repository-execution-engine.md |  10 +-
 .../automation/sfia-validation-engine.md           |  12 +--
 .../checklists/sfia-validation-checklist.md        |  18 ++--
 .../core/sfia-consolidation-roadmap.md             |   8 +-
 .../core/sfia-cycle-routing-guide.md               |  64 +++++------
 .../core/sfia-global-capitalization-reference.md   |   2 +-
 ...07-02-interv360-mvp-delivery-capitalization.md} |  10 +-
 ...> 2026-07-03-interv360-final-capitalization.md} |   0
 .../sfia-foundation-documents-inventory.md         |  18 ++--
 .../sfia-foundation-v1.1-closure-status.md         |   8 +-
 .../sfia-v1.1-capitalization-inputs-inventory.md   |  38 +++----
 .../sfia-v1.1-foundation-impact-matrix.md          |  16 +--
 .../sfia-foundation-v1.1-evolution-matrix.md       |   6 +-
 .../archive/notion/notion-publication-plan.md      |  12 +--
 ...-03-sfia-documentation-capitalization-audit.md} |   6 +-
 ... 2026-07-03-sfia-foundation-documents-audit.md} |  14 +--
 .../sfia-v1.1-p2-cross-reference-audit.md          |  32 +++---
 .../sfia-foundation-v1.1-consolidation-plan.md     |  10 +-
 .../sfia-documentation-completeness-matrix.md      |  12 +--
 .../2026-07-11-sfia-v2.6-repository-cartography.md |  12 +--
 ...6-07-11-sfia-v2.6-repository-cleanup-framing.md |  20 ++--
 ...-11-sfia-v2.6-repository-migration-lots-plan.md |   7 +-
 ...2026-07-12-sfia-v2.6-lot-d1-naming-execution.md | 118 +++++++++++++++++++++
 ...2026-07-05-sfia-v2-pilot-selection-decision.md} |   8 +-
 ...ia-v2-incremental-delivery-closure-standard.md} |   6 +-
 ...rchitecture-decision-documentation-standard.md} |  10 +-
 .../sfia-v2-automation-and-delivery-vision.md      |  12 +--
 .../sfia-v2/sfia-v2-pilot-selection-scoring.md     |  14 +--
 .../sfia-v2/sfia-v2-project-bootstrap-standard.md  |  14 +--
 ...=> 2026-07-04-sfia-notion-live-export-audit.md} |  20 ++--
 ...-04-sfia-notion-provisioning-dry-run-report.md} |   4 +-
 ...fia-notion-publication-track-pause-decision.md} |   8 +-
 .../notion/sfia-notion-content-categorization.md   |  22 ++--
 ...fia-notion-target-model-and-integration-plan.md |  12 +--
 ...md => 2026-07-03-operational-cleanup-report.md} |   0
 ...7-03-sfa-workspace-final-architecture-audit.md} |   8 +-
 .../sfia-workspace-cleanup-round-2-audit.md        |   6 +-
 .../round-2/sfia-workspace-cleanup-round-2-plan.md |   6 +-
 ...it-template.md => 2026-07-03-audit-template.md} |   0
 ...{rex-template.md => 2026-07-03-rex-template.md} |   0
 projects/chantiers360-v2/README.md                 |  38 +++----
 ...026-06-28-closure-without-signature-summary.md} |  10 +-
 ....md => 2026-06-28-closure-without-signature.md} |  12 +--
 ...-001-api-contracts-simulated-implementation.md} |  12 +--
 ...-visible-integration-errors-manual-recovery.md} |  14 +--
 ...d => adr-003-secure-email-secondary-channel.md} |  14 +--
 ...d => adr-004-minimal-flow-rejection-logging.md} |  14 +--
 ...05-fictive-retention-photos-signatures-logs.md} |  16 +--
 ...-client-notifications-without-client-portal.md} |  16 +--
 ...dr-007-optional-structured-client-signature.md} |  16 +--
 ...-separated-sav-dashboard-and-executive-view.md} |  16 +--
 ...adr-cand-009-ai-light-post-mvp-confirmation.md} |  16 +--
 .../notion-sync-architecture-p1-payload.json       |  12 +--
 .../notion-sync-architecture-p2-payload.json       |  10 +-
 ...-technical-roadmap-sfia-components-payload.json |   2 +-
 ...ion-sync-existing-prompt-library-inventory.json |   4 +-
 .../notion-sync-figma-v1-closure-payload.json      |   2 +-
 ...ary-lot1-architecture-security-cmp-payload.json |   4 +-
 .../penpot-first-screen-mcp-instructions.md        |  24 ++---
 .../03-design/penpot-project-reference.md          |  18 ++--
 .../04-delivery/implementation-go-no-go.md         |   8 +-
 .../04-delivery/request-model-productization.md    |  10 +-
 projects/interv360/04-delivery/role-simulation.md  |  10 +-
 ...3-12-interv360-backend-api-contract-framing.md} |   8 +-
 ...07-01-interv360-backend-data-model-decision.md} |   8 +-
 ...7-01-interv360-backend-persistence-decision.md} |  10 +-
 ...2026-07-01-interv360-backend-target-framing.md} |   8 +-
 ...-interv360-backend-technical-stack-decision.md} |   8 +-
 ... 2026-07-02-interv360-auth-and-user-framing.md} |   8 +-
 ...026-07-02-interv360-auth-foundation-framing.md} |  14 +--
 .../ADR-004-local-closure-vs-external-sync.md      |  12 +--
 .../adr-early/04-adr/adr-structuring-scope.md      |  10 +-
 .../figma-v1/figma-review-session-minutes.md       |  14 +--
 .../notion-publication-tooling-check.md            |  10 +-
 .../notion-sync-architecture-p1-summary.md         |  26 ++---
 .../notion-sync-architecture-p2-summary.md         |  24 ++---
 ...otion-sync-existing-prompt-library-inventory.md |  18 ++--
 ...ot1-architecture-security-cmp-payload-review.md |  22 ++--
 ...brary-lot1-architecture-security-preparation.md |  24 ++---
 .../03-process/process-scope.md                    |  12 +--
 .../functional-architecture-scope.md               |  10 +-
 .../role-methods-enrichment-after-adr-p2.md        |  14 +--
 .../role-methods-enrichment-after-figma-v1.md      |  14 +--
 .../functional-architecture-prompt-family.md       |  38 +++----
 ...ompt-arch-001-revue-integrations-et-erreurs.md} |  18 ++--
 prompts/bpmn/bpmn-prompt-family.md                 |  20 ++--
 prompts/prompt-catalog.md                          |  14 +--
 ...> prompt-sec-001-revue-canal-email-securise.md} |  18 ++--
 prompts/templates/01-create-foundation-document.md |  10 +-
 ...s.md => 2026-07-04-05-validate-pr-readiness.md} |   6 +-
 .../sfia-prompt-templates-context-pack.md          |  70 ++++++------
 prompts/ux-ui/figma-fidelity-gate-prompt-family.md |  12 +--
 prompts/ux-ui/ux-ui-reprise-prompt-family.md       |  40 +++----
 tools/cmp-001/README.md                            |   8 +-
 .../cmp-001/config/sfia-v1-1-workspace.config.json |   4 +-
 ...eport.md => 2026-06-27-consolidation-report.md} |   4 +-
 .../cmp-001/docs/components-database-evolution.md  |   6 +-
 tools/cmp-001/examples/component-cmp001.json       |   2 +-
 tools/cmp-001/{ROADMAP.md => roadmap.md}           |   0
 tools/cmp-001/{WORKSPACE.md => workspace.md}       |   0
 119 files changed, 892 insertions(+), 771 deletions(-)
```

---

## Plan de migration — section modifiée

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index 7a61d34..6cecc88 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -179,8 +179,11 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 | **Prompts/templates** | **basename uniquement** dans D1 ; **aucune restructuration** contenu/famille ; évolution structurelle → **Lot H** |
 | **Collisions casse** | **16** qualifiées (ADR + PROMPT + cmp-001) |
 | **Refs actives** | **111** rename-and-fix-refs ; **38** rename simple |
-| **Statut exécution D1/D2/D3** | **not started** |
-| **Qualification merge** | **completed via PR #172** — D1 execution remains separately gated |
+| **Statut exécution D1** | **executed** on branch `migration/sfia-v2.6-lot-d1-naming` — **PR ouverte, non mergée** |
+| **Statut exécution D2/D3** | **not started** |
+| **D1 renames** | **50/50** `git mv` — refs directes corrigées |
+| **Rapport exécution D1** | `2026-07-12-sfia-v2.6-lot-d1-naming-execution.md` |
+| **Qualification merge** | **completed via PR #172** — D1 merge soumis à GO Morris séparé |
 
 ---
 

```

---

## Rapport d'exécution complet

# SFIA v2.6 — Lot D1 Naming Execution

**Horodatage :** 2026-07-12 18:04 Europe/Paris
**Cycle :** Capitalisation documentaire / normalisation nommage D1
**Profil :** Critical
**GO Morris :** explicite — exécution D1 depuis `main` @ `4e4a17b513927b5f5b901c35ff65f91d6fe30c87`
**Branche :** `migration/sfia-v2.6-lot-d1-naming`
**CSV SHA-256 :** `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` — **unchanged**

---

## 1. Manifeste D1 (50/50)

| # | ID | Ancien chemin | Nouveau chemin | Action |
|---|-----|---------------|----------------|--------|
| 1 | D-001 | `docs/architecture/sfia-decision-engine.md` | `docs/architecture/2026-06-27-sfia-decision-engine.md` | rename-and-fix-refs |
| 2 | D-002 | `docs/practices/process/bpmn-method-cycle-closure.md` | `docs/practices/process/2026-06-28-bpmn-method-cycle-closure.md` | rename |
| 3 | D-003 | `docs/practices/process/bpmn-method-integration-audit.md` | `docs/practices/process/2026-06-28-bpmn-method-integration-audit.md` | rename-and-fix-refs |
| 4 | D-004 | `docs/templates/architecture/functional-architecture-cycle-closure-template.md` | `docs/templates/architecture/2026-06-28-functional-architecture-cycle-closure-template.md` | rename |
| 5 | D-005 | `docs/templates/process/bpmn-cycle-closure-template.md` | `docs/templates/process/2026-06-28-bpmn-cycle-closure-template.md` | rename |
| 6 | D-006 | `docs/templates/ux-ui/ux-ui-cycle-closure-template.md` | `docs/templates/ux-ui/2026-06-28-ux-ui-cycle-closure-template.md` | rename |
| 7 | D-007 | `docs/tooling/penpot/penpot-mcp-self-host-rex.md` | `docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md` | rename-and-fix-refs |
| 8 | D-008 | `docs/workspace-readiness-report.md` | `docs/2026-06-27-workspace-readiness-report.md` | rename |
| 9 | D-009 | `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md` | `method/complementary/controlled-delivery/2026-07-01-delivery-acceleration-level-3-rex.md` | rename-and-fix-refs |
| 10 | D-010 | `method/sfia-fast-track/archive/interv360-realization/capitalization-plan.md` | `method/sfia-fast-track/archive/interv360-realization/2026-06-29-capitalization-plan.md` | rename-and-fix-refs |
| 11 | D-011 | `method/sfia-fast-track/archive/interv360-realization/capitalization-summary.md` | `method/sfia-fast-track/archive/interv360-realization/2026-06-30-capitalization-summary.md` | rename-and-fix-refs |
| 12 | D-012 | `method/sfia-fast-track/audit-rex/interv360-application-rex.md` | `method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md` | rename |
| 13 | D-013 | `method/sfia-fast-track/cycles/interv360-final-capitalization.md` | `method/sfia-fast-track/cycles/2026-07-03-interv360-final-capitalization.md` | rename |
| 14 | D-014 | `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md` | `method/sfia-fast-track/cycles/2026-07-02-interv360-mvp-delivery-capitalization.md` | rename |
| 15 | D-015 | `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md` | `method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md` | rename-and-fix-refs |
| 16 | D-016 | `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md` | `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md` | rename |
| 17 | D-017 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md` | `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-06-sfia-v2-incremental-delivery-closure-standard.md` | rename-and-fix-refs |
| 18 | D-018 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md` | `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-05-sfia-v2-pilot-selection-decision.md` | rename-and-fix-refs |
| 19 | D-019 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md` | `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md` | rename-and-fix-refs |
| 20 | D-020 | `method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md` | `method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-live-export-audit.md` | rename-and-fix-refs |
| 21 | D-021 | `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md` | `method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-provisioning-dry-run-report.md` | rename-and-fix-refs |
| 22 | D-022 | `method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md` | `method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-publication-track-pause-decision.md` | rename-and-fix-refs |
| 23 | D-023 | `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md` | `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/2026-07-03-sfa-workspace-final-architecture-audit.md` | rename |
| 24 | D-024 | `method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md` | `method/sfia-fast-track/documentation/workspace-audit/2026-07-03-operational-cleanup-report.md` | rename |
| 25 | D-025 | `method/sfia-fast-track/templates/audit-template.md` | `method/sfia-fast-track/templates/2026-07-03-audit-template.md` | rename |
| 26 | D-026 | `method/sfia-fast-track/templates/rex-template.md` | `method/sfia-fast-track/templates/2026-07-03-rex-template.md` | rename |
| 27 | D-144 | `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` | `prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md` | case-two-step |
| 28 | D-145 | `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` | `prompts/security/prompt-sec-001-revue-canal-email-securise.md` | case-two-step |
| 29 | D-146 | `prompts/templates/05-validate-pr-readiness.md` | `prompts/templates/2026-07-04-05-validate-pr-readiness.md` | rename-and-fix-refs |
| 30 | D-147 | `tools/cmp-001/ROADMAP.md` | `tools/cmp-001/roadmap.md` | rename-and-fix-refs |
| 31 | D-148 | `tools/cmp-001/WORKSPACE.md` | `tools/cmp-001/workspace.md` | case-two-step |
| 32 | D-149 | `tools/cmp-001/docs/consolidation-report.md` | `tools/cmp-001/docs/2026-06-27-consolidation-report.md` | rename |
| 33 | D-093 | `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md` | `projects/interv360/02-architecture/adr/adr-001-api-contracts-simulated-implementation.md` | case-two-step |
| 34 | D-094 | `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md` | `projects/interv360/02-architecture/adr/adr-002-visible-integration-errors-manual-recovery.md` | case-two-step |
| 35 | D-095 | `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md` | `projects/interv360/02-architecture/adr/adr-003-secure-email-secondary-channel.md` | case-two-step |
| 36 | D-096 | `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md` | `projects/interv360/02-architecture/adr/adr-004-minimal-flow-rejection-logging.md` | case-two-step |
| 37 | D-097 | `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md` | `projects/interv360/02-architecture/adr/adr-005-fictive-retention-photos-signatures-logs.md` | case-two-step |
| 38 | D-098 | `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md` | `projects/interv360/02-architecture/adr/adr-006-client-notifications-without-client-portal.md` | case-two-step |
| 39 | D-099 | `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md` | `projects/interv360/02-architecture/adr/adr-007-optional-structured-client-signature.md` | case-two-step |
| 40 | D-100 | `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md` | `projects/interv360/02-architecture/adr/adr-008-separated-sav-dashboard-and-executive-view.md` | case-two-step |
| 41 | D-101 | `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` | `projects/interv360/02-architecture/adr/adr-cand-009-ai-light-post-mvp-confirmation.md` | case-two-step |
| 42 | D-102 | `projects/interv360/02-architecture/closure-without-signature-summary.md` | `projects/interv360/02-architecture/2026-06-28-closure-without-signature-summary.md` | rename |
| 43 | D-103 | `projects/interv360/02-architecture/closure-without-signature.md` | `projects/interv360/02-architecture/2026-06-28-closure-without-signature.md` | rename-and-fix-refs |
| 44 | D-110 | `projects/interv360/09-roadmap/interv360-auth-and-user-framing.md` | `projects/interv360/09-roadmap/2026-07-02-interv360-auth-and-user-framing.md` | rename-and-fix-refs |
| 45 | D-111 | `projects/interv360/09-roadmap/interv360-auth-foundation-framing.md` | `projects/interv360/09-roadmap/2026-07-02-interv360-auth-foundation-framing.md` | rename-and-fix-refs |
| 46 | D-112 | `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md` | `projects/interv360/09-roadmap/2026-03-12-interv360-backend-api-contract-framing.md` | rename-and-fix-refs |
| 47 | D-113 | `projects/interv360/09-roadmap/interv360-backend-data-model-decision.md` | `projects/interv360/09-roadmap/2026-07-01-interv360-backend-data-model-decision.md` | rename-and-fix-refs |
| 48 | D-114 | `projects/interv360/09-roadmap/interv360-backend-persistence-decision.md` | `projects/interv360/09-roadmap/2026-07-01-interv360-backend-persistence-decision.md` | rename-and-fix-refs |
| 49 | D-115 | `projects/interv360/09-roadmap/interv360-backend-target-framing.md` | `projects/interv360/09-roadmap/2026-07-01-interv360-backend-target-framing.md` | rename-and-fix-refs |
| 50 | D-116 | `projects/interv360/09-roadmap/interv360-backend-technical-stack-decision.md` | `projects/interv360/09-roadmap/2026-07-01-interv360-backend-technical-stack-decision.md` | rename-and-fix-refs |

## 2. Renames sensibles à la casse (13)

Procédure : `git mv source .{basename}.sfia-d1-tmp` puis `git mv .{basename}.sfia-d1-tmp target`

- **D-144** : `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` → `prompts/architecture/.PROMPT-ARCH-001-revue-integrations-et-erreurs.md.sfia-d1-tmp` → `prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md`
- **D-145** : `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` → `prompts/security/.PROMPT-SEC-001-revue-canal-email-securise.md.sfia-d1-tmp` → `prompts/security/prompt-sec-001-revue-canal-email-securise.md`
- **D-147** : `tools/cmp-001/ROADMAP.md` → `tools/cmp-001/.ROADMAP.md.sfia-d1-tmp` → `tools/cmp-001/roadmap.md`
- **D-148** : `tools/cmp-001/WORKSPACE.md` → `tools/cmp-001/.WORKSPACE.md.sfia-d1-tmp` → `tools/cmp-001/workspace.md`
- **D-093** : `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md` → `projects/interv360/02-architecture/adr/.ADR-001-api-contracts-simulated-implementation.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-001-api-contracts-simulated-implementation.md`
- **D-094** : `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md` → `projects/interv360/02-architecture/adr/.ADR-002-visible-integration-errors-manual-recovery.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-002-visible-integration-errors-manual-recovery.md`
- **D-095** : `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md` → `projects/interv360/02-architecture/adr/.ADR-003-secure-email-secondary-channel.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-003-secure-email-secondary-channel.md`
- **D-096** : `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md` → `projects/interv360/02-architecture/adr/.ADR-004-minimal-flow-rejection-logging.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-004-minimal-flow-rejection-logging.md`
- **D-097** : `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md` → `projects/interv360/02-architecture/adr/.ADR-005-fictive-retention-photos-signatures-logs.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-005-fictive-retention-photos-signatures-logs.md`
- **D-098** : `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md` → `projects/interv360/02-architecture/adr/.ADR-006-client-notifications-without-client-portal.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-006-client-notifications-without-client-portal.md`
- **D-099** : `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md` → `projects/interv360/02-architecture/adr/.ADR-007-optional-structured-client-signature.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-007-optional-structured-client-signature.md`
- **D-100** : `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md` → `projects/interv360/02-architecture/adr/.ADR-008-separated-sav-dashboard-and-executive-view.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-008-separated-sav-dashboard-and-executive-view.md`
- **D-101** : `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` → `projects/interv360/02-architecture/adr/.ADR-CAND-009-ai-light-post-mvp-confirmation.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-cand-009-ai-light-post-mvp-confirmation.md`

## 3. Références

- Fichiers consommateurs modifiés : **70**
- Références actives anciens chemins complets D1 : **0**
- CSV frozen : **non modifié**
- Rapport qualification Lot D : **non modifié**
- Photographies audit read-only : **non modifiées**

## 4. Garde-fous

| Contrôle | Résultat |
|----------|----------|
| Renames `git mv` | **50/50** |
| Temporaires restants | **0** |
| Suppressions physiques | **0** |
| D2/D3 touchés | **0** |
| CSV in diff | **no** |
| Doctrine changed | **no** |
| Canonical changed | **no** |
| Prompts structure | **basename only** |

## 5. Verdict

```
LOT D1 MANIFEST VERIFIED 50/50
ALL D1 RENAMES EXECUTED WITH GIT MV
CASE-ONLY RENAMES EXECUTED IN TWO STEPS
TEMPORARY PATHS REMOVED
DIRECT REFERENCES UPDATED
ACTIVE OLD D1 PATHS ZERO
D2 D3 UNTOUCHED
CSV UNCHANGED
PR OPEN — NOT MERGED
```


---

## Diff complet

```diff
diff --git a/.cursor/mcp-templates/README.md b/.cursor/mcp-templates/README.md
index 435b505..8cd6725 100644
--- a/.cursor/mcp-templates/README.md
+++ b/.cursor/mcp-templates/README.md
@@ -1,6 +1,6 @@
 # Cursor MCP templates — Penpot
 
-**Dossier** : `.cursor/mcp-templates/`  
+**Dossier** : `.cursor/mcp-templates/`
 **Statut** : Exemples non secrets — configuration locale uniquement
 
 ---
@@ -68,7 +68,7 @@ Une fois la config MCP et le plugin connectés, exécuter dans Cursor :
 
 Succès attendu : liste des pages du fichier ouvert (ex. `Page 1`).
 
-Voir le REX détaillé : [`docs/tooling/penpot/penpot-mcp-self-host-rex.md`](../docs/tooling/penpot/penpot-mcp-self-host-rex.md).
+Voir le REX détaillé : [`docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md`](../docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md).
 
 ---
 
@@ -86,7 +86,7 @@ Voir le REX détaillé : [`docs/tooling/penpot/penpot-mcp-self-host-rex.md`](../
 
 - Architecture : [`docs/tooling/penpot/penpot-design-agent-architecture.md`](../docs/tooling/penpot/penpot-design-agent-architecture.md)
 - Guide Docker : [`docs/tooling/penpot/penpot-self-host-docker-guide.md`](../docs/tooling/penpot/penpot-self-host-docker-guide.md)
-- REX self-host MCP : [`docs/tooling/penpot/penpot-mcp-self-host-rex.md`](../docs/tooling/penpot/penpot-mcp-self-host-rex.md)
+- REX self-host MCP : [`docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md`](../docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md)
 - Règles agent : [`docs/tooling/penpot/penpot-cursor-agent-rules.md`](../docs/tooling/penpot/penpot-cursor-agent-rules.md)
 - Penpot MCP : documentation officielle Penpot
 
diff --git a/docs/workspace-readiness-report.md b/docs/2026-06-27-workspace-readiness-report.md
similarity index 96%
rename from docs/workspace-readiness-report.md
rename to docs/2026-06-27-workspace-readiness-report.md
index 20efd3d..26da5bc 100644
--- a/docs/workspace-readiness-report.md
+++ b/docs/2026-06-27-workspace-readiness-report.md
@@ -1,7 +1,7 @@
 # SFIA Workspace Readiness Report
 
-**Date** : 2026-06-27  
-**Workspace** : `/Users/morris/Projects/sfia-workspace`  
+**Date** : 2026-06-27
+**Workspace** : `/Users/morris/Projects/sfia-workspace`
 **Objectif** : Valider la readiness avant démarrage du projet Interv360
 
 ---
diff --git a/docs/architecture/sfia-decision-engine.md b/docs/architecture/2026-06-27-sfia-decision-engine.md
similarity index 98%
rename from docs/architecture/sfia-decision-engine.md
rename to docs/architecture/2026-06-27-sfia-decision-engine.md
index ca632b7..ec2a521 100644
--- a/docs/architecture/sfia-decision-engine.md
+++ b/docs/architecture/2026-06-27-sfia-decision-engine.md
@@ -9,12 +9,12 @@ scope: decision engine
 
 # SFIA Decision Engine v1.1
 
-**Version:** v1.1  
-**Status:** Foundation document  
-**Updated after:** SFIA foundation v1.1 consolidation  
+**Version:** v1.1
+**Status:** Foundation document
+**Updated after:** SFIA foundation v1.1 consolidation
 **Scope:** Decision engine
 
-<callout icon="🏛️">**Document fondateur — Référentiel d'architecture d'entreprise**  
+<callout icon="🏛️">**Document fondateur — Référentiel d'architecture d'entreprise**
 
 Ce document définit le moteur de décision officiel de la plateforme SFIA. Le contenu v1.0 (export Notion) est conservé ci-dessous. Les sections **v1.1 Update** en fin de document formalisent le modèle décisionnel opérationnel.</callout>
 
@@ -1514,38 +1514,38 @@ Responsable de l’analyse périodique du référentiel de règles, de la suppre
 
 ## Recommandations structurantes
 
-1. **Créer un référentiel dédié des règles de décision**  
-    
+1. **Créer un référentiel dédié des règles de décision**
+
     Chaque règle doit être versionnée, qualifiée, reliée à des preuves et gouvernée.
-    
-2. **Mettre en place un modèle de scoring standardisé**  
-    
+
+2. **Mettre en place un modèle de scoring standardisé**
+
     Les scores doivent être calculés selon des critères partagés et audités régulièrement.
-    
-3. **Formaliser les parcours SFIA types**  
-    
+
+3. **Formaliser les parcours SFIA types**
+
     Les parcours expérimentation, standardisation, industrialisation et amélioration continue doivent être explicites.
-    
-4. **Relier systématiquement décisions, composants, standards et preuves**  
-    
+
+4. **Relier systématiquement décisions, composants, standards et preuves**
+
     Toute décision structurante doit pouvoir être retracée jusqu’à son contexte et ses justifications.
-    
-5. **Définir un seuil minimal de preuve avant promotion**  
-    
+
+5. **Définir un seuil minimal de preuve avant promotion**
+
     Aucun composant, prompt, standard ou règle ne doit devenir officiel sans preuve suffisante.
-    
-6. **Industrialiser la capitalisation**  
-    
+
+6. **Industrialiser la capitalisation**
+
     Les REX, KPI, audits et expérimentations doivent alimenter le Learning Engine de manière régulière.
-    
-7. **Séparer clairement règles candidates et règles officielles**  
-    
+
+7. **Séparer clairement règles candidates et règles officielles**
+
     La plateforme doit distinguer les hypothèses, expérimentations, règles validées et règles promues.
-    
-8. **Mettre en place une revue périodique du moteur**  
-    
+
+8. **Mettre en place une revue périodique du moteur**
+
     Le Decision Engine doit être révisé selon un cycle défini, par exemple trimestriel.
-    
+
 
 # Roadmap d’évolution
 
diff --git a/docs/architecture/sfia-delivery-pipeline.md b/docs/architecture/sfia-delivery-pipeline.md
index 301ecd8..0637189 100644
--- a/docs/architecture/sfia-delivery-pipeline.md
+++ b/docs/architecture/sfia-delivery-pipeline.md
@@ -9,24 +9,24 @@ updated_after: SFIA Fast Track operational validation (Interv360)
 
 # SFIA Delivery Pipeline v1.1
 
-**Version:** v1.1  
-**Status:** Foundation document  
+**Version:** v1.1
+**Status:** Foundation document
 **Updated after:** SFIA Fast Track operational validation (Interv360)
 
 <aside>
 🏛️
 
-**Statut du document** : Référentiel fondateur — version 1.1 (contenu v1.0 conservé, enrichi post-Fast Track)  
+**Statut du document** : Référentiel fondateur — version 1.1 (contenu v1.0 conservé, enrichi post-Fast Track)
 
-**Domaine** : Software Factory IA / Delivery / Gouvernance / Capitalisation  
+**Domaine** : Software Factory IA / Delivery / Gouvernance / Capitalisation
 
-**Portée** : Plateforme SFIA, projets livrés via SFIA, assets méthodologiques, composants, prompts, templates, REX et amélioration continue  
+**Portée** : Plateforme SFIA, projets livrés via SFIA, assets méthodologiques, composants, prompts, templates, REX et amélioration continue
 
-**Audience** : Direction, architecture d’entreprise, product owners, tech leads, équipes delivery, gouvernance IT, responsables qualité, responsables plateforme  
+**Audience** : Direction, architecture d’entreprise, product owners, tech leads, équipes delivery, gouvernance IT, responsables qualité, responsables plateforme
 
-**Propriétaire** : Gouvernance SFIA  
+**Propriétaire** : Gouvernance SFIA
 
-**Cycle de revue recommandé** : mensuel en phase de structuration, trimestriel en régime nominal  
+**Cycle de revue recommandé** : mensuel en phase de structuration, trimestriel en régime nominal
 
 **Niveau de référence** : officiel
 
@@ -1992,7 +1992,7 @@ The pipeline follows the rule:
 | Single PR per cycle | `method/sfia-fast-track/templates/pr-body-template.md` |
 | Mandatory post-merge documentation | `method/sfia-fast-track/templates/post-merge-template.md` |
 | Audit before major cycle | Interv360 audit (`projects/interv360/06-audit-rex/`) |
-| REX after major milestone | `method/sfia-fast-track/audit-rex/interv360-application-rex.md` |
+| REX after major milestone | `method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md` |
 | Notion only after capitalization plan | `method/sfia-fast-track/checklists/notion-publication-checklist.md` |
 
 ## v1.1 Pipeline Clarification
diff --git a/docs/foundation/sfia-engineering-principles.md b/docs/foundation/sfia-engineering-principles.md
index 8072171..097fcca 100644
--- a/docs/foundation/sfia-engineering-principles.md
+++ b/docs/foundation/sfia-engineering-principles.md
@@ -9,9 +9,9 @@ scope: engineering principles
 
 # SFIA Engineering Principles v1.1
 
-**Version:** v1.1  
-**Status:** Foundation document  
-**Updated after:** SFIA foundation v1.1 consolidation  
+**Version:** v1.1
+**Status:** Foundation document
+**Updated after:** SFIA foundation v1.1 consolidation
 **Scope:** Engineering principles
 
 ## Préambule
@@ -42,7 +42,7 @@ In case of tension:
 2. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` defines operational constraints;
 3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` defines ChatGPT ↔ Cursor execution;
 4. `method/sfia-fast-track/core/sfia-knowledge-layer.md` defines documentation routing and knowledge publication;
-5. `docs/architecture/sfia-decision-engine.md` arbitrates exceptions, trade-offs and explicit decisions.
+5. `docs/architecture/2026-06-27-sfia-decision-engine.md` arbitrates exceptions, trade-offs and explicit decisions.
 
 # 1. Les besoins réels avant les idées
 
@@ -335,7 +335,7 @@ Evidence can include:
 - `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
 - `method/sfia-fast-track/core/sfia-knowledge-layer.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `docs/architecture/sfia-delivery-pipeline.md`
 - `docs/architecture/sfia-repository-blueprint.md`
 - `docs/architecture/sfia-platform-architecture.md`
diff --git a/docs/practices/process/bpmn-method-cycle-closure.md b/docs/practices/process/2026-06-28-bpmn-method-cycle-closure.md
similarity index 98%
rename from docs/practices/process/bpmn-method-cycle-closure.md
rename to docs/practices/process/2026-06-28-bpmn-method-cycle-closure.md
index 98cba37..7d110d8 100644
--- a/docs/practices/process/bpmn-method-cycle-closure.md
+++ b/docs/practices/process/2026-06-28-bpmn-method-cycle-closure.md
@@ -1,8 +1,8 @@
 # SFIA — Clôture du cycle méthode BPMN
 
-**Type** : Synthèse de clôture méthodologique  
-**Statut** : Draft — prêt pour PR unique  
-**Domaine** : Process Modeling / BPMN  
+**Type** : Synthèse de clôture méthodologique
+**Statut** : Draft — prêt pour PR unique
+**Domaine** : Process Modeling / BPMN
 **Branche** : `method/bpmn-integration-audit`
 
 ---
diff --git a/docs/practices/process/bpmn-method-integration-audit.md b/docs/practices/process/2026-06-28-bpmn-method-integration-audit.md
similarity index 96%
rename from docs/practices/process/bpmn-method-integration-audit.md
rename to docs/practices/process/2026-06-28-bpmn-method-integration-audit.md
index 0c4a1bc..621c6ed 100644
--- a/docs/practices/process/bpmn-method-integration-audit.md
+++ b/docs/practices/process/2026-06-28-bpmn-method-integration-audit.md
@@ -1,10 +1,10 @@
 # SFIA — Audit d'intégration BPMN dans la méthodologie
 
-**Type** : Audit méthodologique  
-**Statut** : Draft  
-**Phase** : Phase A — Audit BPMN  
-**Objectif** : Identifier les impacts de l'introduction de BPMN dans le processus SFIA  
-**Périmètre** : Méthode, standards, templates, prompts, gouvernance, projets  
+**Type** : Audit méthodologique
+**Statut** : Draft
+**Phase** : Phase A — Audit BPMN
+**Objectif** : Identifier les impacts de l'introduction de BPMN dans le processus SFIA
+**Périmètre** : Méthode, standards, templates, prompts, gouvernance, projets
 **Branche** : `method/bpmn-integration-audit`
 
 ---
@@ -111,9 +111,9 @@ Le projet Interv360 utilise actuellement `03-design/` pour la phase design (`pro
 | Checklist d'intégration BPMN | `docs/practices/process/bpmn-integration-checklist.md` | Prérequis avant cycle BPMN projet | B |
 | Template scope processus | `docs/templates/process/bpmn-process-scope-template.md` | Périmètre diagrammes, acteurs, hypothèses | C |
 | Template analyse processus | `docs/templates/process/bpmn-process-analysis-template.md` | Traçabilité RG, statuts, exceptions | C |
-| Template clôture cycle BPMN | `docs/templates/process/bpmn-cycle-closure-template.md` | Synthèse cycle, suites ADR / archi fonctionnelle | C |
+| Template clôture cycle BPMN | `docs/templates/process/2026-06-28-bpmn-cycle-closure-template.md` | Synthèse cycle, suites ADR / archi fonctionnelle | C |
 | Famille de prompts BPMN | `prompts/bpmn/bpmn-prompt-family.md` | Prompts réutilisables modélisation / revue | C |
-| Audit intégration (présent) | `docs/practices/process/bpmn-method-integration-audit.md` | Phase A — identification impacts | **A** |
+| Audit intégration (présent) | `docs/practices/process/2026-06-28-bpmn-method-integration-audit.md` | Phase A — identification impacts | **A** |
 
 ---
 
@@ -216,7 +216,7 @@ projects/interv360/03-process/
 | `02-architecture/mvp-clarifications.md` | Consolidation MVP |
 | `02-architecture/rules-rg-prioritization.md` | Règles RG prioritaires |
 | `02-architecture/status-mapping.md` | Statuts et transitions |
-| `02-architecture/closure-without-signature.md` | Clôture, signature optionnelle |
+| `02-architecture/2026-06-28-closure-without-signature.md` | Clôture, signature optionnelle |
 | `02-architecture/geo-ai-arbitration.md` | Hors périmètre diagrammes MVP |
 | `02-architecture/clarification-cycle-closure.md` | Clôture cycle clarification |
 | `01-cadrage/business-framing.md` | Parcours SAV §6, objets métier |
diff --git a/docs/templates/architecture/functional-architecture-cycle-closure-template.md b/docs/templates/architecture/2026-06-28-functional-architecture-cycle-closure-template.md
similarity index 96%
rename from docs/templates/architecture/functional-architecture-cycle-closure-template.md
rename to docs/templates/architecture/2026-06-28-functional-architecture-cycle-closure-template.md
index 41b07cf..274b80f 100644
--- a/docs/templates/architecture/functional-architecture-cycle-closure-template.md
+++ b/docs/templates/architecture/2026-06-28-functional-architecture-cycle-closure-template.md
@@ -1,11 +1,11 @@
 # [Nom du projet] — Clôture du cycle d'architecture fonctionnelle
 
-**Projet** : [Code ou nom du projet]  
-**Phase** : [Phase documentaire — ex. 05-functional-architecture]  
-**Type** : Clôture de cycle  
-**Statut** : Draft  
-**Branche** : [Nom de la branche Git]  
-**Méthode associée** : `docs/practices/architecture/functional-architecture-method.md`  
+**Projet** : [Code ou nom du projet]
+**Phase** : [Phase documentaire — ex. 05-functional-architecture]
+**Type** : Clôture de cycle
+**Statut** : Draft
+**Branche** : [Nom de la branche Git]
+**Méthode associée** : `docs/practices/architecture/functional-architecture-method.md`
 **Checklist associée** : `docs/practices/architecture/functional-architecture-checklist.md`
 
 ---
diff --git a/docs/templates/process/bpmn-cycle-closure-template.md b/docs/templates/process/2026-06-28-bpmn-cycle-closure-template.md
similarity index 94%
rename from docs/templates/process/bpmn-cycle-closure-template.md
rename to docs/templates/process/2026-06-28-bpmn-cycle-closure-template.md
index d0ff2bf..c2d17ed 100644
--- a/docs/templates/process/bpmn-cycle-closure-template.md
+++ b/docs/templates/process/2026-06-28-bpmn-cycle-closure-template.md
@@ -1,9 +1,9 @@
 # [PROJECT] — Clôture du cycle BPMN
 
-**Projet** : [PROJECT_ID]  
-**Phase** : 03-process  
-**Type** : Synthèse de clôture cycle BPMN  
-**Statut** : Draft  
+**Projet** : [PROJECT_ID]
+**Phase** : 03-process
+**Type** : Synthèse de clôture cycle BPMN
+**Statut** : Draft
 **Branche** : [BRANCH_NAME]
 
 ---
diff --git a/docs/templates/ux-ui/ux-ui-cycle-closure-template.md b/docs/templates/ux-ui/2026-06-28-ux-ui-cycle-closure-template.md
similarity index 96%
rename from docs/templates/ux-ui/ux-ui-cycle-closure-template.md
rename to docs/templates/ux-ui/2026-06-28-ux-ui-cycle-closure-template.md
index 2ec1dcb..49f1dc8 100644
--- a/docs/templates/ux-ui/ux-ui-cycle-closure-template.md
+++ b/docs/templates/ux-ui/2026-06-28-ux-ui-cycle-closure-template.md
@@ -1,11 +1,11 @@
 # [Nom du projet] — Clôture du cycle de reprise UX/UI
 
-**Projet** : [Code ou nom du projet]  
-**Phase** : [Phase documentaire — ex. 06-ux-ui]  
-**Type** : Clôture cycle UX/UI  
-**Statut** : Draft  
-**Branche** : [Nom de la branche Git]  
-**Méthode associée** : `docs/practices/ux-ui/ux-ui-reprise-method.md`  
+**Projet** : [Code ou nom du projet]
+**Phase** : [Phase documentaire — ex. 06-ux-ui]
+**Type** : Clôture cycle UX/UI
+**Statut** : Draft
+**Branche** : [Nom de la branche Git]
+**Méthode associée** : `docs/practices/ux-ui/ux-ui-reprise-method.md`
 **Checklist associée** : `docs/practices/ux-ui/ux-ui-reprise-checklist.md`
 
 > **Note :** Le cycle Interv360 `projects/interv360/06-ux-ui/ux-ui-cycle-closure.md` est une référence d'application possible de ce template.
diff --git a/docs/tooling/penpot/penpot-mcp-self-host-rex.md b/docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md
similarity index 97%
rename from docs/tooling/penpot/penpot-mcp-self-host-rex.md
rename to docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md
index 62745e2..c7bc5ea 100644
--- a/docs/tooling/penpot/penpot-mcp-self-host-rex.md
+++ b/docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md
@@ -1,8 +1,8 @@
 # Penpot MCP self-host — REX d'installation locale
 
-**Type** : Retour d'expérience outillage  
-**Domaine** : UX/UI — Design tooling  
-**Statut** : Draft  
+**Type** : Retour d'expérience outillage
+**Domaine** : UX/UI — Design tooling
+**Statut** : Draft
 **Branche** : `tooling/penpot-mcp-self-host-feedback`
 
 ---
diff --git a/docs/tooling/penpot/penpot-cursor-agent-rules.md b/docs/tooling/penpot/penpot-cursor-agent-rules.md
index caf35d3..cc130c9 100644
--- a/docs/tooling/penpot/penpot-cursor-agent-rules.md
+++ b/docs/tooling/penpot/penpot-cursor-agent-rules.md
@@ -1,9 +1,9 @@
 # Penpot Cursor Agent — Règles d'usage SFIA
 
-**Type** : Doctrine agent  
-**Domaine** : UX/UI — Design tooling  
-**Statut** : Draft  
-**Branche** : `tooling/penpot-design-agent`  
+**Type** : Doctrine agent
+**Domaine** : UX/UI — Design tooling
+**Statut** : Draft
+**Branche** : `tooling/penpot-design-agent`
 **Documents associés** : [`penpot-design-agent-architecture.md`](penpot-design-agent-architecture.md), [`penpot-sfia-method-integration.md`](penpot-sfia-method-integration.md)
 
 ---
@@ -114,7 +114,7 @@ Avant toute action sur un fichier Penpot :
 
 Si le test de lecture échoue (`No userToken found`, `No plugin instance connected for user token`), corriger la config ou le plugin — **ne pas** lancer de modifications.
 
-Voir : [`penpot-mcp-self-host-rex.md`](penpot-mcp-self-host-rex.md), [`.cursor/mcp-templates/README.md`](../../../.cursor/mcp-templates/README.md).
+Voir : [`2026-06-28-penpot-mcp-self-host-rex.md`](2026-06-28-penpot-mcp-self-host-rex.md), [`.cursor/mcp-templates/README.md`](../../../.cursor/mcp-templates/README.md).
 
 ---
 
@@ -130,7 +130,7 @@ Voir : [`penpot-mcp-self-host-rex.md`](penpot-mcp-self-host-rex.md), [`.cursor/m
 
 - Architecture : [`penpot-design-agent-architecture.md`](penpot-design-agent-architecture.md)
 - Intégration méthodes : [`penpot-sfia-method-integration.md`](penpot-sfia-method-integration.md)
-- REX MCP self-host : [`penpot-mcp-self-host-rex.md`](penpot-mcp-self-host-rex.md)
+- REX MCP self-host : [`2026-06-28-penpot-mcp-self-host-rex.md`](2026-06-28-penpot-mcp-self-host-rex.md)
 - Prompts : [`../../../prompts/tooling/penpot/penpot-design-agent-prompt-family.md`](../../../prompts/tooling/penpot/penpot-design-agent-prompt-family.md)
 - MCP template : [`.cursor/mcp-templates/`](../../../.cursor/mcp-templates/)
 
diff --git a/docs/tooling/penpot/penpot-self-host-docker-guide.md b/docs/tooling/penpot/penpot-self-host-docker-guide.md
index d932560..b64b3e4 100644
--- a/docs/tooling/penpot/penpot-self-host-docker-guide.md
+++ b/docs/tooling/penpot/penpot-self-host-docker-guide.md
@@ -1,8 +1,8 @@
 # Penpot self-host — Guide Docker SFIA
 
-**Type** : Guide outillage  
-**Domaine** : UX/UI — Design tooling  
-**Statut** : Draft  
+**Type** : Guide outillage
+**Domaine** : UX/UI — Design tooling
+**Statut** : Draft
 **Branche** : `tooling/penpot-design-agent`
 
 ---
@@ -140,7 +140,7 @@ Le MCP Penpot peut être activé **après** :
 - Choisir l'URL MCP selon le **mode d'installation** retenu (self-host vs standalone — voir §9.1).
 - **Aucune clé** ni token dans Git.
 
-Voir [`.cursor/mcp-templates/README.md`](../../../.cursor/mcp-templates/README.md) et le REX [`penpot-mcp-self-host-rex.md`](penpot-mcp-self-host-rex.md).
+Voir [`.cursor/mcp-templates/README.md`](../../../.cursor/mcp-templates/README.md) et le REX [`2026-06-28-penpot-mcp-self-host-rex.md`](2026-06-28-penpot-mcp-self-host-rex.md).
 
 ### 9.1 MCP Cursor — retour d'expérience self-host
 
diff --git a/method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md b/method/complementary/controlled-delivery/2026-07-01-delivery-acceleration-level-3-rex.md
similarity index 98%
rename from method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md
rename to method/complementary/controlled-delivery/2026-07-01-delivery-acceleration-level-3-rex.md
index ca678c6..d0b952f 100644
--- a/method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md
+++ b/method/complementary/controlled-delivery/2026-07-01-delivery-acceleration-level-3-rex.md
@@ -1,8 +1,8 @@
 # SFIA — Delivery Acceleration Level 3 REX
 
-**Méthode** : Controlled Delivery  
-**Cycle** : Delivery Acceleration Level 3 REX  
-**Statut** : Capitalisation compacte  
+**Méthode** : Controlled Delivery
+**Cycle** : Delivery Acceleration Level 3 REX
+**Statut** : Capitalisation compacte
 **Branche** : `method/delivery-acceleration-level-3-rex`
 
 ---
diff --git a/method/sfia-fast-track/archive/interv360-realization/capitalization-plan.md b/method/sfia-fast-track/archive/interv360-realization/2026-06-29-capitalization-plan.md
similarity index 97%
rename from method/sfia-fast-track/archive/interv360-realization/capitalization-plan.md
rename to method/sfia-fast-track/archive/interv360-realization/2026-06-29-capitalization-plan.md
index 087ae7a..e26f2ae 100644
--- a/method/sfia-fast-track/archive/interv360-realization/capitalization-plan.md
+++ b/method/sfia-fast-track/archive/interv360-realization/2026-06-29-capitalization-plan.md
@@ -1,9 +1,9 @@
 # SFIA — Interv360 realization capitalization plan
 
-**Type** : Plan de capitalisation méthode  
-**Référence projet** : Interv360 (PRJ-INTERV360)  
-**Objet** : Capitalisation des cycles de préparation réalisation  
-**Statut** : Draft  
+**Type** : Plan de capitalisation méthode
+**Référence projet** : Interv360 (PRJ-INTERV360)
+**Objet** : Capitalisation des cycles de préparation réalisation
+**Statut** : Draft
 **Branche** : `method/interv360-realization-capitalization`
 
 ---
diff --git a/method/sfia-fast-track/archive/interv360-realization/capitalization-summary.md b/method/sfia-fast-track/archive/interv360-realization/2026-06-30-capitalization-summary.md
similarity index 98%
rename from method/sfia-fast-track/archive/interv360-realization/capitalization-summary.md
rename to method/sfia-fast-track/archive/interv360-realization/2026-06-30-capitalization-summary.md
index 5700253..3a2231f 100644
--- a/method/sfia-fast-track/archive/interv360-realization/capitalization-summary.md
+++ b/method/sfia-fast-track/archive/interv360-realization/2026-06-30-capitalization-summary.md
@@ -1,10 +1,10 @@
 # SFIA — Interv360 realization capitalization summary
 
-**Type** : Synthèse de capitalisation méthode  
-**Origine de capitalisation** : Interv360  
-**Référence** : SFIA delivery / realization method  
-**Statut** : Ready for closure  
-**Branche** : `method/interv360-realization-capitalization`  
+**Type** : Synthèse de capitalisation méthode
+**Origine de capitalisation** : Interv360
+**Référence** : SFIA delivery / realization method
+**Statut** : Ready for closure
+**Branche** : `method/interv360-realization-capitalization`
 **Documents associés** : [`capitalization-plan.md`](capitalization-plan.md), [`realization-method.md`](realization-method.md), [`realization-deliverables-standard.md`](realization-deliverables-standard.md), [`realization-checklists.md`](realization-checklists.md), [`realization-templates.md`](realization-templates.md), [`realization-prompt-family.md`](realization-prompt-family.md), [`notion-integration-plan.md`](notion-integration-plan.md)
 
 ---
diff --git a/method/sfia-fast-track/audit-rex/interv360-application-rex.md b/method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md
similarity index 100%
rename from method/sfia-fast-track/audit-rex/interv360-application-rex.md
rename to method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md
diff --git a/method/sfia-fast-track/automation/sfia-automation-architecture.md b/method/sfia-fast-track/automation/sfia-automation-architecture.md
index 0843ccc..0335786 100644
--- a/method/sfia-fast-track/automation/sfia-automation-architecture.md
+++ b/method/sfia-fast-track/automation/sfia-automation-architecture.md
@@ -7,9 +7,9 @@ scope: automation architecture
 
 # SFIA Fast Track — Automation Architecture v1.1
 
-**Version:** v1.1  
-**Status:** Foundation document  
-**Updated after:** SFIA foundation v1.1 consolidation  
+**Version:** v1.1
+**Status:** Foundation document
+**Updated after:** SFIA foundation v1.1 consolidation
 **Scope:** Automation architecture
 
 ## v1.1 Consistency Rule
@@ -39,7 +39,7 @@ Automation must not bypass:
 
 Any automation exception must be explicit, justified, traceable and validated by a human according to:
 
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 
 ## 1. Objectif
 
@@ -53,7 +53,7 @@ L'objectif est de transformer SFIA Fast Track :
 
 Vision cible :
 
-> Un utilisateur exprime son besoin dans un formulaire.  
+> Un utilisateur exprime son besoin dans un formulaire.
 > SFIA qualifie, cadre, conçoit, génère, teste, documente et prépare la livraison d'une application adaptée.
 
 ## 2. Constat issu d'Interv360
diff --git a/method/sfia-fast-track/automation/sfia-prompt-generation-engine.md b/method/sfia-fast-track/automation/sfia-prompt-generation-engine.md
index a459ed4..a8111d5 100644
--- a/method/sfia-fast-track/automation/sfia-prompt-generation-engine.md
+++ b/method/sfia-fast-track/automation/sfia-prompt-generation-engine.md
@@ -8,9 +8,9 @@ scope: prompt generation engine
 
 # SFIA Prompt Generation Engine v1.1
 
-**Version:** v1.1  
-**Status:** Foundation document  
-**Updated after:** SFIA foundation v1.1 consolidation  
+**Version:** v1.1
+**Status:** Foundation document
+**Updated after:** SFIA foundation v1.1 consolidation
 **Scope:** Prompt generation engine
 
 ## 1. Objectif
@@ -89,7 +89,7 @@ Le Prompt Generation Engine s'appuie sur les documents suivants :
 | `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Structure du prompt et boucle ChatGPT ↔ Cursor |
 | `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Règles et garde-fous opérationnels |
 | `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Documentation Routing Matrix |
-| `docs/architecture/sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
+| `docs/architecture/2026-06-27-sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
 | `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Vision automation et moteur prompt generation |
 | `prompts/prompt-catalog.md` | Familles et prompts existants |
 | `method/sfia-fast-track/templates/` | Templates réutilisables |
@@ -521,7 +521,7 @@ Le Validation Engine contrôlera :
 ## 19. Related Documents
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
 - `method/sfia-fast-track/core/sfia-knowledge-layer.md`
diff --git a/method/sfia-fast-track/automation/sfia-repository-execution-engine.md b/method/sfia-fast-track/automation/sfia-repository-execution-engine.md
index b80b99a..7d2ba64 100644
--- a/method/sfia-fast-track/automation/sfia-repository-execution-engine.md
+++ b/method/sfia-fast-track/automation/sfia-repository-execution-engine.md
@@ -8,9 +8,9 @@ scope: repository execution engine
 
 # SFIA Repository Execution Engine v1.1
 
-**Version:** v1.1  
-**Status:** Foundation document  
-**Updated after:** SFIA foundation v1.1 consolidation  
+**Version:** v1.1
+**Status:** Foundation document
+**Updated after:** SFIA foundation v1.1 consolidation
 **Scope:** Repository execution engine
 
 ## 1. Objectif
@@ -96,7 +96,7 @@ Le Repository Execution Engine s'appuie sur les documents suivants :
 | `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Dossier cible et routage documentaire |
 | `docs/architecture/sfia-repository-blueprint.md` | Structure repository et source de vérité |
 | `docs/architecture/sfia-delivery-pipeline.md` | Cycle, PR, post-merge et delivery |
-| `docs/architecture/sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
+| `docs/architecture/2026-06-27-sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
 | `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Vision automation et moteur repository execution |
 | `method/sfia-fast-track/checklists/` | Checklists de validation et garde-fous |
 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md` | Handoff documentaire v2.4 — non implémenté comme agent |
@@ -612,7 +612,7 @@ Cursor **ne décide pas seul** d'une mise à jour documentaire L3 ni d'un élarg
 ## 24. Related Documents
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `docs/architecture/sfia-repository-blueprint.md`
 - `docs/architecture/sfia-delivery-pipeline.md`
 - `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
diff --git a/method/sfia-fast-track/automation/sfia-validation-engine.md b/method/sfia-fast-track/automation/sfia-validation-engine.md
index b5609a7..ccf8b8b 100644
--- a/method/sfia-fast-track/automation/sfia-validation-engine.md
+++ b/method/sfia-fast-track/automation/sfia-validation-engine.md
@@ -8,9 +8,9 @@ scope: validation engine
 
 # SFIA Validation Engine v1.1
 
-**Version:** v1.1  
-**Status:** Foundation document  
-**Updated after:** SFIA foundation v1.1 consolidation  
+**Version:** v1.1
+**Status:** Foundation document
+**Updated after:** SFIA foundation v1.1 consolidation
 **Scope:** Validation engine
 
 ## 1. Objectif
@@ -90,7 +90,7 @@ Le Validation Engine s'appuie sur les documents suivants :
 | Document | Rôle |
 |----------|------|
 | `docs/foundation/sfia-engineering-principles.md` | Norme supérieure d'exécution |
-| `docs/architecture/sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
+| `docs/architecture/2026-06-27-sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
 | `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | Structure du prompt attendu |
 | `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` | Exécution repository attendue |
 | `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Boucle ChatGPT ↔ Cursor |
@@ -602,7 +602,7 @@ Il contribue à :
 
 - `method/sfia-fast-track/automation/sfia-documentation-engine.md`
 - `method/sfia-fast-track/core/sfia-knowledge-layer.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 
 Relation logique :
 
@@ -628,7 +628,7 @@ Prompt Generation Engine
 ## 26. Related Documents
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `docs/architecture/sfia-repository-blueprint.md`
 - `docs/architecture/sfia-delivery-pipeline.md`
 - `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
diff --git a/method/sfia-fast-track/checklists/sfia-validation-checklist.md b/method/sfia-fast-track/checklists/sfia-validation-checklist.md
index ef01b6f..4e894c8 100644
--- a/method/sfia-fast-track/checklists/sfia-validation-checklist.md
+++ b/method/sfia-fast-track/checklists/sfia-validation-checklist.md
@@ -7,10 +7,10 @@ scope: validation checklist
 
 # SFIA Validation Checklist v1.2
 
-**Version:** v1.2  
-**Status:** Validated checklist — promotion micro-cycle Morris post-PR #140 ; alignement v2.4.1 complet  
-**Updated after:** SFIA v2.4.1 documentation status promotion — PR #140  
-**Scope:** Validation checklist  
+**Version:** v1.2
+**Status:** Validated checklist — promotion micro-cycle Morris post-PR #140 ; alignement v2.4.1 complet
+**Updated after:** SFIA v2.4.1 documentation status promotion — PR #140
+**Scope:** Validation checklist
 **Standard consolidation :** SFIA v2.4 — `sfia-v2.4-consolidation-operating-efficiency-standard.md`
 
 ## 1. Objectif
@@ -40,7 +40,7 @@ Elle aide à produire une décision structurée, traçable et exploitable.
 Cette checklist s'appuie sur :
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/automation/sfia-validation-engine.md`
 - `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
 - `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
@@ -52,7 +52,7 @@ Cette checklist s'appuie sur :
 - `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
-- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-06-sfia-v2-incremental-delivery-closure-standard.md`
 
 ## 3. Quand utiliser cette checklist ?
 
@@ -342,7 +342,7 @@ Utiliser pour un **delivery INC-n** avec standard QA v2.0 :
 - [ ] QA-G3 validé (Morris) **avant** PR readiness delivery ;
 - [ ] rapports `08-qa-test/inc-<nn>/` présents ;
 - [ ] réserves QA documentées (bloquante / majeure / mineure / environnementale) ;
-- [ ] référence `sfia-v2-delivery-qa-test-standard.md` et `sfia-v2-incremental-delivery-closure-standard.md`.
+- [ ] référence `sfia-v2-delivery-qa-test-standard.md` et `2026-07-06-sfia-v2-incremental-delivery-closure-standard.md`.
 
 ### 12.2 Supplément SFIA v2.0 — design coverage (pilote)
 
@@ -359,7 +359,7 @@ Utiliser pour un **écran sans frame Figma dédiée** ou un cycle méthode desig
 
 Utiliser pour un cycle **register / ADR / DAA / DAT** ou adoption du standard :
 
-- [ ] situation identifiée dans la matrice §4 — `sfia-v2-technical-architecture-decision-documentation-standard.md` ;
+- [ ] situation identifiée dans la matrice §4 — `2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md` ;
 - [ ] register technique à jour ou décision delivery tracée ;
 - [ ] ADR requis uniquement si décision structurante ou difficilement réversible ;
 - [ ] DAA light uniquement si extension / refactor / industrialisation ;
@@ -389,7 +389,7 @@ Utiliser pour tout cycle post-v2.4 avec profil et QA proportionnée :
 - [ ] recette MOA évaluée — obligatoire go-live ; non requise DOC/CAPA/RUN sans impact UX ;
 - [ ] gate Morris distingué des contrôles L1 read-only ;
 - [ ] PR readiness adaptée au profil — pas de surcharge gates non structurants ;
-- [ ] simplification QA-G4 + closure évaluée si INC mineur — **optionnelle**, GO Morris requis — `sfia-v2-incremental-delivery-closure-standard.md` §14.1 ;
+- [ ] simplification QA-G4 + closure évaluée si INC mineur — **optionnelle**, GO Morris requis — `2026-07-06-sfia-v2-incremental-delivery-closure-standard.md` §14.1 ;
 - [ ] v3.0 non lancé — immediate NO-GO.
 
 Décision possible :
diff --git a/method/sfia-fast-track/core/sfia-consolidation-roadmap.md b/method/sfia-fast-track/core/sfia-consolidation-roadmap.md
index 020b91f..b4bc93f 100644
--- a/method/sfia-fast-track/core/sfia-consolidation-roadmap.md
+++ b/method/sfia-fast-track/core/sfia-consolidation-roadmap.md
@@ -112,7 +112,7 @@ Produire un retour d'expérience honnête sur la trajectoire Interv360.
 
 Livrable attendu :
 
-`method/sfia-fast-track/audit-rex/interv360-application-rex.md`
+`method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md`
 
 ### Statut
 
@@ -120,7 +120,7 @@ REX réalisé et intégré à `main`.
 
 Livrable :
 
-`method/sfia-fast-track/audit-rex/interv360-application-rex.md`
+`method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md`
 
 Décision :
 
@@ -271,8 +271,8 @@ Livrables :
 - `method/sfia-fast-track/templates/cycle-template.md`
 - `method/sfia-fast-track/templates/pr-body-template.md`
 - `method/sfia-fast-track/templates/post-merge-template.md`
-- `method/sfia-fast-track/templates/audit-template.md`
-- `method/sfia-fast-track/templates/rex-template.md`
+- `method/sfia-fast-track/templates/2026-07-03-audit-template.md`
+- `method/sfia-fast-track/templates/2026-07-03-rex-template.md`
 - `method/sfia-fast-track/documentation/archive/checklists/validation-checklist.md`
 - `method/sfia-fast-track/checklists/guardrails-checklist.md`
 - `method/sfia-fast-track/documentation/archive/checklists/notion-publication-checklist.md`
diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index 4ee9235..6f7147c 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -7,9 +7,9 @@ scope: cycle routing and reference selection
 
 # Guide de routage des cycles SFIA
 
-**Version:** v1.3  
-**Status:** Validated — complément SFIA v2.5 candidate Cycle 1 (hypothèse candidate)  
-**Scope:** Routage des cycles, sélection des références, templates et validations  
+**Version:** v1.3
+**Status:** Validated — complément SFIA v2.5 candidate Cycle 1 (hypothèse candidate)
+**Scope:** Routage des cycles, sélection des références, templates et validations
 **Standard consolidation actif :** SFIA v2.4 — voir §4.3 ; complément v2.5 candidate §4.4
 
 ## 1. Objectif
@@ -55,9 +55,9 @@ SFIA ne doit pas supposer que ChatGPT ou Cursor se souviennent automatiquement d
 
 Chaque cycle doit déclarer explicitement les références qu'il utilise.
 
-> Pas de mémoire implicite.  
-> Pas de routage documentaire non déclaré.  
-> Pas d'exécution sans références obligatoires.  
+> Pas de mémoire implicite.
+> Pas de routage documentaire non déclaré.
+> Pas d'exécution sans références obligatoires.
 > Pas de clôture sans validation.
 
 La documentation SFIA est appliquée par le **routage des cycles**, pas uniquement par la mémoire du modèle.
@@ -161,8 +161,8 @@ Si le type de cycle n'est pas clair, lancer d'abord un **cycle de cadrage** (mé
 
 ### 4.3 Routage SFIA v2.4 — consolidation & operating efficiency
 
-> **Référence détaillée :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`  
-> **Baseline méthode :** SFIA v2.3.1 — **standard actif v2.4** depuis PR #139.  
+> **Référence détaillée :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
+> **Baseline méthode :** SFIA v2.3.1 — **standard actif v2.4** depuis PR #139.
 > **v3.0 :** immediate NO-GO — toute discussion v3.0 = décision Morris dédiée.
 
 SFIA v2.4 est le **standard de consolidation** pour les cycles futurs. Il couvre notamment :
@@ -255,9 +255,9 @@ Handoff ChatGPT ↔ Cursor ↔ Git : **cadre documentaire** v2.4 §10 — **non
 
 ### 4.4 Routage SFIA v2.5 candidate — profils transverses
 
-> **Référence :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` — Cycle 1  
-> **Statut :** hypothèse **candidate** — ne valide pas v2.5 ; preuve Cycle 4 ; Morris décide  
-> **Détail opérationnel :** `sfia-chatgpt-cursor-operating-model.md` §18.2  
+> **Référence :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` — Cycle 1
+> **Statut :** hypothèse **candidate** — ne valide pas v2.5 ; preuve Cycle 4 ; Morris décide
+> **Détail opérationnel :** `sfia-chatgpt-cursor-operating-model.md` §18.2
 > **Cartographie cycles projet (Cycle 2) :** le routage type de cycle projet × profil SFIA s'appuie, en v2.5 candidate, sur `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`.
 
 Ce complément v2.5 candidate clarifie la séparation entre type de cycle et profil SFIA ; il ne remplace pas la typologie v2.4 `INC / EVOL / RUN / CAPA / DOC` ni les standards v2.0–v2.4 applicables.
@@ -332,7 +332,7 @@ Intention Morris
 **Références obligatoires :**
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
 - `method/sfia-fast-track/core/sfia-knowledge-layer.md`
@@ -348,7 +348,7 @@ Intention Morris
 **Références obligatoires :**
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `docs/architecture/sfia-repository-blueprint.md`
 - `method/sfia-fast-track/core/sfia-knowledge-layer.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
@@ -365,7 +365,7 @@ Intention Morris
 **Références obligatoires :**
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
 - `method/sfia-fast-track/core/sfia-knowledge-layer.md`
 - `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
@@ -380,7 +380,7 @@ Intention Morris
 **Références obligatoires :**
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/core/sfia-knowledge-layer.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
 - `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
@@ -448,7 +448,7 @@ Sinon utiliser le template de création ou consolidation adapté.
 - diff ou informations de commit
 - `method/sfia-fast-track/automation/sfia-validation-engine.md`
 - `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 
 **Template :** `prompts/templates/04-validate-cursor-result.md`
 
@@ -459,12 +459,12 @@ Sinon utiliser le template de création ou consolidation adapté.
 **Références obligatoires :**
 
 - `docs/architecture/sfia-delivery-pipeline.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
-- `prompts/templates/05-validate-pr-readiness.md`
+- `prompts/templates/2026-07-04-05-validate-pr-readiness.md`
 - documents de clôture ou de validation de la branche
 
-**Template :** `prompts/templates/05-validate-pr-readiness.md`
+**Template :** `prompts/templates/2026-07-04-05-validate-pr-readiness.md`
 
 **Décision attendue :** READY FOR PR | READY FOR PR WITH RESERVES | NOT READY FOR PR
 
@@ -537,7 +537,7 @@ Sinon utiliser le template de création ou consolidation adapté.
 **Références obligatoires :**
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
 - documents audités
 - catalogues, index ou matrices concernés
@@ -566,7 +566,7 @@ Ils doivent toujours déclarer :
 **Références obligatoires :**
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/core/sfia-knowledge-layer.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
 - documents projet disponibles
@@ -580,7 +580,7 @@ Ils doivent toujours déclarer :
 **Références obligatoires :**
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
 - `method/sfia-fast-track/core/sfia-knowledge-layer.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
@@ -597,7 +597,7 @@ Ils doivent toujours déclarer :
 - `docs/foundation/sfia-engineering-principles.md`
 - `docs/architecture/sfia-domain-model.md`
 - `docs/architecture/sfia-meta-model.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/core/sfia-knowledge-layer.md`
 - documents projet disponibles
 
@@ -611,7 +611,7 @@ Ils doivent toujours déclarer :
 
 - `docs/foundation/sfia-engineering-principles.md`
 - `docs/architecture/sfia-repository-blueprint.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
 - documents techniques projet disponibles
 
@@ -637,7 +637,7 @@ Ils doivent toujours déclarer :
 **Références obligatoires :**
 
 - `docs/architecture/sfia-delivery-pipeline.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
 - documents projet disponibles
 
@@ -649,7 +649,7 @@ Ils doivent toujours déclarer :
 
 **Références obligatoires :**
 
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `docs/architecture/sfia-delivery-pipeline.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
 - documents projet disponibles
@@ -663,7 +663,7 @@ Ils doivent toujours déclarer :
 **Références obligatoires :**
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
 - documents projet audités
 
@@ -703,7 +703,7 @@ Ils doivent toujours déclarer :
 **Références obligatoires :**
 
 - `docs/architecture/sfia-delivery-pipeline.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
 - documents projet disponibles
 
@@ -731,7 +731,7 @@ Ils doivent toujours déclarer :
 
 **Références obligatoires :**
 
-- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-06-sfia-v2-incremental-delivery-closure-standard.md`
 - rapport QA-G4 post-merge — `qa-g4-post-merge-report.md`
 - `07-delivery-inc-<nn>/inc-<nn>-closure-report.md`
 
@@ -745,7 +745,7 @@ Ils doivent toujours déclarer :
 
 **Références obligatoires :**
 
-- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-06-sfia-v2-incremental-delivery-closure-standard.md`
 - `prompts/templates/08-capitalize-method-asset.md`
 - `projects/<project>/09-capitalization/inc-<nn>-capitalization-report.md`
 
@@ -779,7 +779,7 @@ Ils doivent toujours déclarer :
 
 **Références obligatoires :**
 
-- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md`
 - `projects/<project>/05-technical-architecture/` — overview, stack, decisions, data model
 - `projects/<project>/07-delivery-inc-<nn>/delivery-inc-<nn>-decisions.md`
 - `sfia-v2-delivery-qa-test-standard.md` — lien QA
@@ -937,7 +937,7 @@ Référence : `method/sfia-fast-track/automation/sfia-repository-execution-engin
 |---------|--------|
 | Type de cycle | PR readiness |
 | Famille | méthode / fondation |
-| Template | `05-validate-pr-readiness.md` |
+| Template | `2026-07-04-05-validate-pr-readiness.md` |
 | Références | Delivery Pipeline, Decision Engine, Validation Checklist, documents de clôture de la branche |
 | Décision attendue | READY FOR PR \| READY FOR PR WITH RESERVES \| NOT READY FOR PR |
 
diff --git a/method/sfia-fast-track/core/sfia-global-capitalization-reference.md b/method/sfia-fast-track/core/sfia-global-capitalization-reference.md
index 7b410f2..13dd25d 100644
--- a/method/sfia-fast-track/core/sfia-global-capitalization-reference.md
+++ b/method/sfia-fast-track/core/sfia-global-capitalization-reference.md
@@ -9,7 +9,7 @@ Il n'est pas la référence normative vivante pour l'exécution SFIA v1.1.
 Les références d'exécution v1.1 actuelles sont :
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `docs/architecture/sfia-repository-blueprint.md`
 - `docs/architecture/sfia-delivery-pipeline.md`
 - `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
diff --git a/method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md b/method/sfia-fast-track/cycles/2026-07-02-interv360-mvp-delivery-capitalization.md
similarity index 98%
rename from method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md
rename to method/sfia-fast-track/cycles/2026-07-02-interv360-mvp-delivery-capitalization.md
index c222d01..c72a57b 100644
--- a/method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md
+++ b/method/sfia-fast-track/cycles/2026-07-02-interv360-mvp-delivery-capitalization.md
@@ -1,10 +1,10 @@
 # SFIA Fast Track — MVP Delivery Capitalization
 
-**Projet source** : Interv360  
-**Version source** : `v0.1.0-mvp`  
-**Cycle source** : Interv360 MVP Final Roadmap + MVP Release Readiness  
-**Mode** : SFIA Fast Track — Capitalisation méthode  
-**Branche** : `method/interv360-mvp-delivery-capitalization`  
+**Projet source** : Interv360
+**Version source** : `v0.1.0-mvp`
+**Cycle source** : Interv360 MVP Final Roadmap + MVP Release Readiness
+**Mode** : SFIA Fast Track — Capitalisation méthode
+**Branche** : `method/interv360-mvp-delivery-capitalization`
 **Statut** : Cadrage opérationnel
 
 ---
diff --git a/method/sfia-fast-track/cycles/interv360-final-capitalization.md b/method/sfia-fast-track/cycles/2026-07-03-interv360-final-capitalization.md
similarity index 100%
rename from method/sfia-fast-track/cycles/interv360-final-capitalization.md
rename to method/sfia-fast-track/cycles/2026-07-03-interv360-final-capitalization.md
diff --git a/method/sfia-fast-track/documentation/archive/foundation-v1.1/sfia-foundation-documents-inventory.md b/method/sfia-fast-track/documentation/archive/foundation-v1.1/sfia-foundation-documents-inventory.md
index 7b11fde..022873a 100644
--- a/method/sfia-fast-track/documentation/archive/foundation-v1.1/sfia-foundation-documents-inventory.md
+++ b/method/sfia-fast-track/documentation/archive/foundation-v1.1/sfia-foundation-documents-inventory.md
@@ -1,7 +1,7 @@
 # SFIA Foundation Documents — Inventory
 
-**Date** : 2026-07-03  
-**Branche** : `capitalization/sfia-documentation-completeness`  
+**Date** : 2026-07-03
+**Branche** : `capitalization/sfia-documentation-completeness`
 **Mode** : identification uniquement — aucun document source modifié
 
 **Inventaires bruts** (archivés M0-DEC-008, 2026-07-12) : [`foundation-candidate-files.txt`](../capitalization-inventories/foundation-candidate-files.txt) (462 fichiers), [`foundation-priority-files.txt`](../capitalization-inventories/foundation-priority-files.txt) (102 fichiers).
@@ -40,7 +40,7 @@ Cette étape ne modifie pas les documents existants.
 | Document | Emplacement actuel | Domaine principal | Domaines secondaires | Statut | Commentaire |
 |----------|--------------------|------------------|----------------------|--------|-------------|
 | `sfia-platform-architecture.md` | `docs/architecture/` | Platform Architecture | Vision SFIA, Automation, Knowledge | **Actif** | ~2100 lignes ; se déclare « Document fondateur SFIA » ; export Notion |
-| `sfia-decision-engine.md` | `docs/architecture/` | Decision Engine | Automation, Validation | **Actif** | ~1600 lignes ; moteur décisionnel officiel v1.0 |
+| `2026-06-27-sfia-decision-engine.md` | `docs/architecture/` | Decision Engine | Automation, Validation | **Actif** | ~1600 lignes ; moteur décisionnel officiel v1.0 |
 | `sfia-delivery-pipeline.md` | `docs/architecture/` | Delivery Pipeline | Validation, Repository Execution | **Actif** | ~1900 lignes ; pipeline officiel avec quality gates |
 | `sfia-domain-model.md` | `docs/architecture/` | Domain Model | Metamodel | **Actif** | Objets métier v1 (Experiment, Project, etc.) |
 | `sfia-meta-model.md` | `docs/architecture/` | Metamodel | Domain Model, Role / Métier | **Actif** | ~1700 lignes ; modules Core/Studio/Runtime/Knowledge/Lab/Projects |
@@ -95,9 +95,9 @@ Cette étape ne modifie pas les documents existants.
 
 | Document | Emplacement actuel | Domaine principal | Domaines secondaires | Statut | Commentaire |
 |----------|--------------------|------------------|----------------------|--------|-------------|
-| `interv360-mvp-delivery-capitalization.md` | `method/sfia-fast-track/cycles/` | Reference Project | Delivery Pipeline | **Actif** | Pattern lots MVP |
-| `interv360-final-capitalization.md` | `method/sfia-fast-track/cycles/` | Reference Project | Vision SFIA | **Actif** | Clôture séquence pilote |
-| `interv360-application-rex.md` | `method/sfia-fast-track/audit-rex/` | Reference Project | Rules & Guardrails | **Actif** | REX structurant |
+| `2026-07-02-interv360-mvp-delivery-capitalization.md` | `method/sfia-fast-track/cycles/` | Reference Project | Delivery Pipeline | **Actif** | Pattern lots MVP |
+| `2026-07-03-interv360-final-capitalization.md` | `method/sfia-fast-track/cycles/` | Reference Project | Vision SFIA | **Actif** | Clôture séquence pilote |
+| `2026-07-03-interv360-application-rex.md` | `method/sfia-fast-track/audit-rex/` | Reference Project | Rules & Guardrails | **Actif** | REX structurant |
 | `projects/interv360/README.md` | `projects/interv360/` | Reference Project | Delivery Pipeline | **Actif** | Index phases 00–09 |
 | `projects/interv360/00-intake/` … `09-roadmap/` | `projects/interv360/` | Reference Project | Tous domaines opérationnels | **Actif** | ~299 docs ; capitalisation terrain |
 | `current-application-audit.md` | `projects/interv360/06-audit-rex/` | Reference Project | Validation Engine | **Actif** | Audit application |
@@ -117,7 +117,7 @@ Cette étape ne modifie pas les documents existants.
 | Document | Pourquoi il est fondateur |
 |----------|---------------------------|
 | `docs/architecture/sfia-platform-architecture.md` | Document fondateur explicite — vision plateforme, modules, principes |
-| `docs/architecture/sfia-decision-engine.md` | Moteur de décision officiel v1.0 — cerveau de la plateforme |
+| `docs/architecture/2026-06-27-sfia-decision-engine.md` | Moteur de décision officiel v1.0 — cerveau de la plateforme |
 | `docs/architecture/sfia-delivery-pipeline.md` | Pipeline delivery officiel — phases, gates, capitalisation |
 | `docs/architecture/sfia-domain-model.md` | Modèle de domaine officiel — objets métier avant toute implémentation |
 | `docs/architecture/sfia-meta-model.md` | Méta-modèle conceptuel — langage commun artefacts et cycles |
@@ -143,7 +143,7 @@ Cette étape ne modifie pas les documents existants.
 | Domaine | Document candidat | Action proposée |
 |---------|------------------|----------------|
 | Platform Architecture | `docs/architecture/sfia-platform-architecture.md` | **Promouvoir** — aligner avec état repo post-cleanup |
-| Decision Engine | `docs/architecture/sfia-decision-engine.md` | **Promouvoir** — relier à Fast Track opérationnel |
+| Decision Engine | `docs/architecture/2026-06-27-sfia-decision-engine.md` | **Promouvoir** — relier à Fast Track opérationnel |
 | Delivery Pipeline | `docs/architecture/sfia-delivery-pipeline.md` + `sfia-global-capitalization.md` | **Consolider** — fusion conceptuel / opérationnel |
 | Domain Model | `docs/architecture/sfia-domain-model.md` | **Promouvoir** — vérifier objets vs repo actuel |
 | Metamodel | `docs/architecture/sfia-meta-model.md` | **Promouvoir** — mapper artefacts repo (method/, docs/, prompts/) |
@@ -197,7 +197,7 @@ The foundation v1.1 consolidation created or updated the following operational a
 | Asset | Role |
 |-------|------|
 | `docs/foundation/sfia-engineering-principles.md` | Higher-order execution principles |
-| `docs/architecture/sfia-decision-engine.md` | Decision, reserves and GO / NO-GO logic |
+| `docs/architecture/2026-06-27-sfia-decision-engine.md` | Decision, reserves and GO / NO-GO logic |
 | `docs/architecture/sfia-repository-blueprint.md` | Repository structure and routing |
 | `docs/architecture/sfia-delivery-pipeline.md` | Delivery and post-merge workflow |
 | `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | ChatGPT ↔ Cursor execution loop |
diff --git a/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-closure/sfia-foundation-v1.1-closure-status.md b/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-closure/sfia-foundation-v1.1-closure-status.md
index 4f2c149..8e7ff8b 100644
--- a/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-closure/sfia-foundation-v1.1-closure-status.md
+++ b/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-closure/sfia-foundation-v1.1-closure-status.md
@@ -7,9 +7,9 @@ scope: foundation v1.1 closure
 
 # SFIA Foundation v1.1 Closure Status
 
-**Version:** v1.1  
-**Status:** Closed  
-**Branch:** `capitalization/sfia-foundation-v1.1`  
+**Version:** v1.1
+**Status:** Closed
+**Branch:** `capitalization/sfia-foundation-v1.1`
 **Scope:** Formal closure of SFIA foundation v1.1 consolidation
 
 ## 1. Objectif
@@ -64,7 +64,7 @@ The following scope is closed:
 | Asset | Role | Status |
 |-------|------|--------|
 | `docs/foundation/sfia-engineering-principles.md` | Higher-order execution principles | Closed v1.1 |
-| `docs/architecture/sfia-decision-engine.md` | Decision and reserve model | Closed v1.1 |
+| `docs/architecture/2026-06-27-sfia-decision-engine.md` | Decision and reserve model | Closed v1.1 |
 | `docs/architecture/sfia-repository-blueprint.md` | Repository structure and routing | Closed v1.1 |
 | `docs/architecture/sfia-delivery-pipeline.md` | Delivery and post-merge workflow | Closed v1.1 |
 | `docs/architecture/sfia-platform-architecture.md` | Platform architecture | Closed v1.1 |
diff --git a/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md b/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md
index 2ca02b2..cab6ccd 100644
--- a/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md
+++ b/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md
@@ -1,8 +1,8 @@
 # SFIA v1.1 — Capitalization Inputs Inventory
 
-**Date** : 2026-07-03  
-**Branche** : `capitalization/sfia-documentation-completeness`  
-**Mode** : inventaire uniquement — aucun document fondateur source modifié  
+**Date** : 2026-07-03
+**Branche** : `capitalization/sfia-documentation-completeness`
+**Mode** : inventaire uniquement — aucun document fondateur source modifié
 **Plans associés** : `../v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md`, `../v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md`
 
 ## 1. Objectif
@@ -45,9 +45,9 @@ Il sert de base de travail pour enrichir :
 |---------|----------|-------------------|
 | Core | `sfia-global-capitalization.md`, `sfia-rules-update.md`, `sfia-architecture-standards.md`, `sfia-consolidation-roadmap.md` | 10 règles FT, prompts Cursor §13, standards frontend/backend/data, chantiers consolidation |
 | Automation | `sfia-automation-architecture.md` | 10 moteurs conceptuels, 5 niveaux automatisation, garde-fous exécutables, boucle ChatGPT ↔ Cursor |
-| Cycles | `interv360-mvp-delivery-capitalization.md`, `interv360-final-capitalization.md` | Pattern lot produit, post-merge léger, releases `v0.1.0-mvp` / `v0.2.0-premium-ui` |
+| Cycles | `2026-07-02-interv360-mvp-delivery-capitalization.md`, `2026-07-03-interv360-final-capitalization.md` | Pattern lot produit, post-merge léger, releases `v0.1.0-mvp` / `v0.2.0-premium-ui` |
 | UI | `figma-design-first-ui-method.md` | Figma Design vs Make, prompt Cursor UI standard, séquence 8 étapes |
-| Audit / REX | `audit-rex/interv360-application-rex.md` | Enseignements réutilisables, anti-patterns Figma Make |
+| Audit / REX | `audit-rex/2026-07-03-interv360-application-rex.md` | Enseignements réutilisables, anti-patterns Figma Make |
 | Templates | 6 templates (`cycle`, `pr-body`, `post-merge`, `audit`, `rex`, `mvp-delivery-pattern`) | Structures réutilisables pour industrialiser cycles |
 | Checklists | `validation-checklist.md`, `guardrails-checklist.md`, `notion-publication-checklist.md` | Contrôles Git, code, docs, PR, post-merge |
 
@@ -56,17 +56,17 @@ Il sert de base de travail pour enrichir :
 | Source | Apports |
 |--------|---------|
 | `pr-81-post-merge-status.md` | Structure repo validée, merge `7c0e865`, réserves non bloquantes |
-| `final-architecture-review/sfa-workspace-final-architecture-audit.md` | Décision `GO AVEC RÉSERVES NON BLOQUANTES`, 494 fichiers md, séparation method/practices |
-| `round-2/*`, `operational-cleanup-report.md`, `interv360-folder-normalization-audit.md` | Historique cleanup, normalisation phases Interv360 |
+| `final-architecture-review/2026-07-03-sfa-workspace-final-architecture-audit.md` | Décision `GO AVEC RÉSERVES NON BLOQUANTES`, 494 fichiers md, séparation method/practices |
+| `round-2/*`, `2026-07-03-operational-cleanup-report.md`, `interv360-folder-normalization-audit.md` | Historique cleanup, normalisation phases Interv360 |
 | `sfia-workspace-migration-plan.md`, `sfia-workspace-global-audit.md` | Trajectoire migration, état pré/post cleanup |
 
 ### 2.4. Audits et capitalisation documentaire
 
 | Source | Apports |
 |--------|---------|
-| `sfia-documentation-capitalization-audit.md` | Décision `COMPLETE AVEC RÉSERVES`, maturité par domaine |
+| `2026-07-03-sfia-documentation-capitalization-audit.md` | Décision `COMPLETE AVEC RÉSERVES`, maturité par domaine |
 | `sfia-documentation-completeness-matrix.md` | Grille complétude par zone |
-| `sfia-foundation-documents-audit.md` | Décision `FONDATIONS PARTIELLES`, 10 sources fondateurs fortes |
+| `2026-07-03-sfia-foundation-documents-audit.md` | Décision `FONDATIONS PARTIELLES`, 10 sources fondateurs fortes |
 | `sfia-foundation-documents-inventory.md` | Inventaire 462 candidats, 102 prioritaires |
 | `documentation-audit.md` | Baseline historique pré-Round 3 — à référencer, pas fusionner |
 | `documentation-structure-target.md` | Cible structure documentaire |
@@ -131,8 +131,8 @@ Il sert de base de travail pour enrichir :
 |-----------|------------|-------------------|---------------------|
 | Vision SFIA | SFIA Fast Track validée ; cible application factory assistée IA ; deux couches conceptuelle (docs/architecture) + opérationnelle (method/) | `sfia-global-capitalization.md`, `sfia-automation-architecture.md` | `sfia-platform-architecture.md`, `sfia-global-capitalization.md` |
 | Architecture de plateforme | Modules Core/Studio/Runtime/Knowledge/Lab/Projects + couches repo Git post-PR #81 | `sfia-platform-architecture.md`, `pr-81-post-merge-status.md` | `sfia-platform-architecture.md` |
-| Decision Engine | GO/NO-GO, réserves non bloquantes, arbitrages MVP, ADR structurants | `current-application-audit.md`, ADR Interv360, `sfia-rules-update.md` | `sfia-decision-engine.md` |
-| Delivery Pipeline | Un cycle = un objectif ; lots produit ; PR unique ; post-merge ; releases jalons | `interv360-mvp-delivery-capitalization.md`, `sfia-rules-update.md` | `sfia-delivery-pipeline.md` |
+| Decision Engine | GO/NO-GO, réserves non bloquantes, arbitrages MVP, ADR structurants | `current-application-audit.md`, ADR Interv360, `sfia-rules-update.md` | `2026-06-27-sfia-decision-engine.md` |
+| Delivery Pipeline | Un cycle = un objectif ; lots produit ; PR unique ; post-merge ; releases jalons | `2026-07-02-interv360-mvp-delivery-capitalization.md`, `sfia-rules-update.md` | `sfia-delivery-pipeline.md` |
 | Domain Model | Cycle, Prompt, Template, Practice, Role Method, Reference Project, Knowledge Page, Audit, REX | `prompt-catalog.md`, `docs/practices/`, cycles Interv360 | `sfia-domain-model.md` |
 | Metamodel | Relations prompts ↔ templates ↔ practices ↔ méthode FT ↔ Notion ; statuts Draft/Official | `sfia-meta-model.md`, `docs/practices/roles/` | `sfia-meta-model.md` |
 | Repository Blueprint | `method/`, `docs/practices/`, `prompts/`, `projects/`, `exports/` ; archives ; pas de `methods/` racine | `pr-81-post-merge-status.md`, final architecture audit | `sfia-repository-blueprint.md` |
@@ -141,8 +141,8 @@ Il sert de base de travail pour enrichir :
 | Automation Engines | 10 moteurs conceptuels ; 3 prioritaires v1.1 (Prompt, Validation, Repository Execution) | `sfia-automation-architecture.md` §5 | Specs moteurs dédiées + `sfia-automation-architecture.md` v1.1 |
 | Knowledge / Notion | Notion = IDE métier éditorialisé ; repo = source vérité ; pas miroir brut | `notion-target-content-map.md`, `exports/notion/README.md` | **nouveau** `sfia-knowledge-layer.md` |
 | UX/UI | Figma Design-first ; Make = exploration ; prompt Cursor UI ; tokens/composants avant code | `figma-design-first-ui-method.md`, `premium-design-system.md` | `sfia-engineering-principles.md`, `sfia-delivery-pipeline.md` |
-| Architecture applicative | Séparation frontend/backend/data ; ADR ; double référentiel présentation/métier | `sfia-architecture-standards.md`, ADR-001 à ADR-008, audit Interv360 | `sfia-domain-model.md`, `sfia-decision-engine.md` |
-| Audit / REX | Audit pré-cycle majeur ; REX post-jalon ; décision `APPLICATION_SAINE_AVEC_RESERVES` | `current-application-audit.md`, `interv360-application-rex.md`, templates audit/rex | `sfia-delivery-pipeline.md`, `sfia-decision-engine.md` |
+| Architecture applicative | Séparation frontend/backend/data ; ADR ; double référentiel présentation/métier | `sfia-architecture-standards.md`, ADR-001 à ADR-008, audit Interv360 | `sfia-domain-model.md`, `2026-06-27-sfia-decision-engine.md` |
+| Audit / REX | Audit pré-cycle majeur ; REX post-jalon ; décision `APPLICATION_SAINE_AVEC_RESERVES` | `current-application-audit.md`, `2026-07-03-interv360-application-rex.md`, templates audit/rex | `sfia-delivery-pipeline.md`, `2026-06-27-sfia-decision-engine.md` |
 | Role / Métier Modeling | 6 Role Methods (1 Official QA) ; practices vs role methods vs prompts | `docs/practices/roles/`, `prompt-catalog.md` §4–7 | `sfia-domain-model.md`, `sfia-meta-model.md` |
 | Templates / Checklists | 6 templates FT + 11 templates plateforme + 3 checklists FT | `templates/`, `checklists/`, `docs/templates/` | Delivery Pipeline, Validation Engine, Rules & Guardrails |
 | Reference Project | Interv360 = preuve opérationnelle ; 299 docs projet ; tags v0.1.0 / v0.2.0 | `projects/interv360/`, cycles, audit-rex | Tous documents concernés (références ciblées) |
@@ -231,8 +231,8 @@ Il sert de base de travail pour enrichir :
 | Garde-fous explicites (autorisé/interdit/validations) | Règle 2, `guardrails-checklist.md` | Rules & Guardrails |
 | PR unique par cycle | Règle 3, templates `pr-body-template.md` | Delivery Pipeline, Repository Execution |
 | Post-merge obligatoire | Règle 4, `post-merge-template.md` | Delivery Pipeline |
-| Audit avant cycle majeur | Règle 5, `audit-template.md` | Decision Engine |
-| REX après jalon majeur | Règle 6, `rex-template.md` | Delivery Pipeline |
+| Audit avant cycle majeur | Règle 5, `2026-07-03-audit-template.md` | Decision Engine |
+| REX après jalon majeur | Règle 6, `2026-07-03-rex-template.md` | Delivery Pipeline |
 | Figma Design-first | Règle 7, `figma-design-first-ui-method.md` | Engineering Principles |
 | Notion jamais automatique | Règle 8, `notion-publication-checklist.md` | Knowledge Layer |
 | Backend/API cycle dédié | Règle 9, `sfia-architecture-standards.md` | Delivery Pipeline, Decision Engine |
@@ -398,7 +398,7 @@ Besoin → ChatGPT (cadrage + prompt) → Cursor (exécution) → Résultat
 | Document cible | Apports à intégrer | Sources |
 |----------------|-------------------|---------|
 | `docs/architecture/sfia-platform-architecture.md` | Cartographie repo post-PR #81 ; couches method/practices/prompts/projects/exports ; relation Git détaillé vs Notion éditorialisé ; module Projects ↔ Interv360 ; vision application factory | PR #81, final architecture audit, automation vision, global-capitalization §16 |
-| `docs/architecture/sfia-decision-engine.md` | GO/NO-GO Fast Track ; réserves non bloquantes ; arbitrages MVP ; ADR Interv360 ; audit pré-cycle ; décision consolidation vs Notion | Audit Interv360, ADR-001–008, rules-update Règles 5–6, pr-81 |
+| `docs/architecture/2026-06-27-sfia-decision-engine.md` | GO/NO-GO Fast Track ; réserves non bloquantes ; arbitrages MVP ; ADR Interv360 ; audit pré-cycle ; décision consolidation vs Notion | Audit Interv360, ADR-001–008, rules-update Règles 5–6, pr-81 |
 | `docs/architecture/sfia-delivery-pipeline.md` | Cycle FT réel ; conventions branches ; PR unique ; post-merge ; releases/tags ; séquence 00–09 ; pattern lots MVP ; capitalisations cycles ; Controlled Delivery note | cycles Interv360, rules-update, mvp-delivery-capitalization, templates |
 | `docs/architecture/sfia-domain-model.md` | Objets Cycle, Prompt, Template, Practice, Role Method, Reference Project, Knowledge Page, Audit Report, REX ; double référentiel données ; statuts maturité | prompt-catalog, practices/roles, audit Interv360, metamodel v1 |
 | `docs/architecture/sfia-meta-model.md` | Relations artefacts/prompts/templates/practices/Notion/audits ; statuts Draft/Official ; archives vs actif ; templates FT vs plateforme | practices/, templates/, notion-target-content-map, PR #81 |
@@ -541,7 +541,7 @@ Remaining P1 documents:
 
 The following foundation documents have been updated to v1.1:
 
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `docs/foundation/sfia-engineering-principles.md`
 
 The Engineering Principles are now positioned as the normative execution reference for SFIA.
@@ -872,8 +872,8 @@ The P2.2 cycle has updated the capitalization indexes, completeness matrix and h
 Updated references include:
 
 - `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
-- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
+- `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md`
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md`
 - `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`
 - `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md`
 
diff --git a/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md b/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md
index f937e0c..7e7b3fe 100644
--- a/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md
+++ b/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md
@@ -1,8 +1,8 @@
 # SFIA v1.1 — Foundation Impact Matrix
 
-**Date** : 2026-07-03  
-**Branche** : `capitalization/sfia-documentation-completeness`  
-**Inventaire associé** : `sfia-v1.1-capitalization-inputs-inventory.md`  
+**Date** : 2026-07-03
+**Branche** : `capitalization/sfia-documentation-completeness`
+**Inventaire associé** : `sfia-v1.1-capitalization-inputs-inventory.md`
 **Mode** : planification — aucun document fondateur source modifié
 
 ## 1. Objectif
@@ -16,7 +16,7 @@ Elle complète l'inventaire des apports par une évaluation d'impact, de risque
 | Document fondateur | Impacts v1.1 à intégrer | Niveau d'impact | Risque | Priorité |
 |--------------------|-------------------------|-----------------|--------|----------|
 | `sfia-platform-architecture.md` | Cartographie repo post-PR #81 ; couches `method/`, `docs/practices/`, `prompts/`, `projects/`, `exports/` ; distinction Git (détail) vs Notion (éditorial) ; module Projects ↔ Interv360 ; lien automation / application factory | **Fort** | Effacer vision Notion-native v1.0 sans section historique ; fichier ~2100 lignes | **P0** |
-| `sfia-decision-engine.md` | Décisions GO/NO-GO FT ; réserves non bloquantes (PR #81, audit Interv360) ; arbitrages MVP ; lien ADR-001–008 ; audit pré-cycle ; décision consolidation vs Notion | **Moyen** | Surcharge si import ADR complets — résumer patterns | **P1** |
+| `2026-06-27-sfia-decision-engine.md` | Décisions GO/NO-GO FT ; réserves non bloquantes (PR #81, audit Interv360) ; arbitrages MVP ; lien ADR-001–008 ; audit pré-cycle ; décision consolidation vs Notion | **Moyen** | Surcharge si import ADR complets — résumer patterns | **P1** |
 | `sfia-delivery-pipeline.md` | Cycle FT : un objectif, PR unique, post-merge, releases ; pattern lots MVP (6 lots) ; séquence Interv360 00–09 ; capitalisations cycles ; note Controlled Delivery complémentaire | **Fort** | Confusion pipeline théorique v1.0 vs opérationnel — clarifier deux niveaux | **P0** |
 | `sfia-domain-model.md` | Objets Cycle, Prompt, Template, Practice, Role Method, Reference Project, Knowledge Page, Audit, REX ; double référentiel présentation/métier ; statuts Draft/Official | **Fort** | Casser identifiants v1.0 — étendre, ne pas renommer | **P0** |
 | `sfia-meta-model.md` | Relations prompts ↔ templates ↔ practices ↔ FT ↔ Notion ; templates FT vs plateforme ; archives vs actif ; maturité Role Method | **Moyen** | Complexité relations — diagramme recommandé | **P1** |
@@ -75,7 +75,7 @@ Elle complète l'inventaire des apports par une évaluation d'impact, de risque
 | **1** | Mettre à jour Repository Blueprint v1.1 | `sfia-repository-blueprint.md` | Fondation structurelle — débloque tous les autres ; chemins obsolètes P0 |
 | **2** | Mettre à jour Platform Architecture + Delivery Pipeline v1.1 | 2 docs architecture | Vision + cycle opérationnel — cœur v1.1 |
 | **3** | Mettre à jour Domain Model + Metamodel v1.1 | 2 docs architecture | Objets et relations — prérequis Knowledge Layer et practices |
-| **4** | Mettre à jour Decision Engine v1.1 | `sfia-decision-engine.md` | Patterns décisionnels prouvés Interv360 |
+| **4** | Mettre à jour Decision Engine v1.1 | `2026-06-27-sfia-decision-engine.md` | Patterns décisionnels prouvés Interv360 |
 | **5** | Mettre à jour Engineering Principles v1.1 | `sfia-engineering-principles.md` | Garde-fous transverses avant rules unifiées |
 | **6** | Créer ChatGPT ↔ Cursor Operating Model | **nouveau P0** | Lacune centrale — débloque moteurs et automation |
 | **7** | Créer Rules & Guardrails unifié | **nouveau P1** | Consolide 3 sources sans fusion destructive |
@@ -204,7 +204,7 @@ Remaining P1 documents:
 
 The following foundation documents have been updated to v1.1:
 
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `docs/foundation/sfia-engineering-principles.md`
 
 The Engineering Principles are now positioned as the normative execution reference for SFIA.
@@ -535,8 +535,8 @@ The P2.2 cycle has updated the capitalization indexes, completeness matrix and h
 Updated references include:
 
 - `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
-- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
+- `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md`
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md`
 - `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`
 - `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md`
 
diff --git a/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md b/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md
index 48a5dd5..881650e 100644
--- a/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md
+++ b/method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md
@@ -1,7 +1,7 @@
 # SFIA Foundation v1.1 — Evolution Matrix
 
-**Date** : 2026-07-03  
-**Branche** : `capitalization/sfia-documentation-completeness`  
+**Date** : 2026-07-03
+**Branche** : `capitalization/sfia-documentation-completeness`
 **Mode** : planification uniquement — aucun document fondateur source modifié
 
 ## 1. Objectif
@@ -29,7 +29,7 @@ L'objectif est de conserver les documents fondateurs existants comme base, puis
 | Document | Statut actuel | À conserver | À enrichir en v1.1 | À ne pas intégrer | Commentaire |
 |----------|---------------|-------------|--------------------|-------------------|-------------|
 | `docs/architecture/sfia-platform-architecture.md` | v1.0 — ~2100 lignes, export Notion | Vision modulaire Core/Studio/Runtime/Knowledge/Lab/Projects ; principes fondateurs ; rôle Notion natif | Cartographie repo Git post-PR #81 ; couche `method/sfia-fast-track/` opérationnelle ; `docs/practices/` ; distinction Git détaillé vs Notion éditorialisé ; référence Interv360 | Implémentation moteurs (v2.0) ; sync Notion brute | Base conceptuelle intacte — ajouter couche exécution repo |
-| `docs/architecture/sfia-decision-engine.md` | v1.0 — moteur décisionnel officiel | Qualification demande, orchestration modules, capitalisation décisions | Décisions GO/NO-GO Fast Track ; réserves non bloquantes ; arbitrage PR/post-merge ; lien ADR Interv360 ; décision « consolidation vs Notion » | Logique métier applicative Interv360 | Enrichir avec patterns décisionnels prouvés |
+| `docs/architecture/2026-06-27-sfia-decision-engine.md` | v1.0 — moteur décisionnel officiel | Qualification demande, orchestration modules, capitalisation décisions | Décisions GO/NO-GO Fast Track ; réserves non bloquantes ; arbitrage PR/post-merge ; lien ADR Interv360 ; décision « consolidation vs Notion » | Logique métier applicative Interv360 | Enrichir avec patterns décisionnels prouvés |
 | `docs/architecture/sfia-delivery-pipeline.md` | v1.0 — pipeline officiel | Phases, quality gates, capitalisation projet → plateforme | Cycle Fast Track réel (1 cycle = 1 objectif) ; conventions branches ; PR unique ; post-merge ; releases/tags ; séquence Interv360 00–09 ; capitalisations cycles | Micro-incréments `inc-*` (archivés) ; détail fichiers delivery | Relier pipeline théorique à preuve opérationnelle |
 | `docs/architecture/sfia-domain-model.md` | v1.0 — objets métier v1 | Experiment, Project, Component, Standard, etc. | Objets **Cycle**, **Prompt**, **Template**, **Practice**, **Role Method**, **Reference Project**, **Knowledge Page**, **Audit Report**, **REX** ; mapping `docs/practices/roles/` | Objets code applicatif | Étendre sans casser identifiants v1 |
 | `docs/architecture/sfia-meta-model.md` | v1.0 — langage commun artefacts | Modules Core/Studio/Runtime/Knowledge/Laboratory/Projects ; cycles de vie ; maturité | Relations prompts ↔ templates ↔ practices ↔ méthode FT ↔ Notion cible ; statuts Draft/Official Role Method ; archives vs actif | Arborescence fichier par fichier | Modéliser relations post-cleanup |
diff --git a/method/sfia-fast-track/documentation/archive/notion/notion-publication-plan.md b/method/sfia-fast-track/documentation/archive/notion/notion-publication-plan.md
index b903c2f..aff22dd 100644
--- a/method/sfia-fast-track/documentation/archive/notion/notion-publication-plan.md
+++ b/method/sfia-fast-track/documentation/archive/notion/notion-publication-plan.md
@@ -75,9 +75,9 @@ SFIA Fast Track
 | `sfia-global-capitalization.md` | Méthode de livraison + Règles | Adapter — retirer § merge, simplifier tableaux |
 | `figma-design-first-ui-method.md` | UI & Figma Design-first | Publier — léger polish |
 | `sfia-automation-architecture.md` | Automatisation SFIA | Résumer — vision + niveaux + MVP plateforme |
-| `interv360-mvp-delivery-capitalization.md` | Cas Interv360 — MVP | Publier — focus pattern lots |
-| `interv360-application-rex.md` | Cas Interv360 — REX | Adapter — enseignements, pas détails techniques |
-| `interv360-final-capitalization.md` | Cas Interv360 — clôture | Fusionner avec REX en une page |
+| `2026-07-02-interv360-mvp-delivery-capitalization.md` | Cas Interv360 — MVP | Publier — focus pattern lots |
+| `2026-07-03-interv360-application-rex.md` | Cas Interv360 — REX | Adapter — enseignements, pas détails techniques |
+| `2026-07-03-interv360-final-capitalization.md` | Cas Interv360 — clôture | Fusionner avec REX en une page |
 | `premium-design-system.md` | Cas Interv360 — Premium UI | Résumer — objectif, garde-fous, critères |
 | `current-application-audit.md` | Cas Interv360 — état actuel | Résumer — décision + réserves |
 | `mvp-release-readiness.md` | Méthode — Releases | Extraire pattern release |
@@ -99,18 +99,18 @@ SFIA Fast Track
 | `method/interv360-realization/*` | Méthode obsolète |
 | `push-and-pr.md`, `pr-preparation.md` | Opérationnel Cursor/Git |
 | `02-architecture/cmp-prompt-schema-extension-*` | Technique outillage CMP |
-| `docs/workspace-readiness-report.md` | Rapport interne |
+| `docs/2026-06-27-workspace-readiness-report.md` | Rapport interne |
 
 ## 7. Documents à adapter avant publication
 
 | Document | Adaptation nécessaire |
 |----------|----------------------|
 | `sfia-global-capitalization.md` | Retirer références commits/PR ; ton contributeur |
-| `interv360-application-rex.md` | Moins Interv360-specific dans titres si page générique |
+| `2026-07-03-interv360-application-rex.md` | Moins Interv360-specific dans titres si page générique |
 | `current-application-audit.md` | Synthèse 1 page : décision + 5 réserves max |
 | `premium-design-system.md` | Retirer historique branches ; garder critères |
 | `sfia-automation-architecture.md` | 10 moteurs → schéma visuel ; texte allégé |
-| `interv360-final-capitalization.md` | Fusionner avec REX — éviter double lecture |
+| `2026-07-03-interv360-final-capitalization.md` | Fusionner avec REX — éviter double lecture |
 | ADR Interv360 | Sélection 3–5 ADR représentatifs, pas les 8 + candidat |
 
 ## 8. Ordre de publication recommandé
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md b/method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md
similarity index 99%
rename from method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md
rename to method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md
index cd7da85..9049542 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md
+++ b/method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md
@@ -1,8 +1,8 @@
 # SFIA/SFA Documentation Capitalization Audit
 
-**Date** : 2026-07-03  
-**Branche** : `capitalization/sfia-documentation-completeness`  
-**Point de départ** : `main` @ `3b521c6`  
+**Date** : 2026-07-03
+**Branche** : `capitalization/sfia-documentation-completeness`
+**Point de départ** : `main` @ `3b521c6`
 **Matrice associée** : `sfia-documentation-completeness-matrix.md`
 
 ## 1. Objectif
diff --git a/method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md b/method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md
similarity index 94%
rename from method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md
rename to method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md
index c41222f..851e432 100644
--- a/method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md
+++ b/method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md
@@ -1,7 +1,7 @@
 # SFIA Foundation Documents — Audit
 
-**Date** : 2026-07-03  
-**Branche** : `capitalization/sfia-documentation-completeness`  
+**Date** : 2026-07-03
+**Branche** : `capitalization/sfia-documentation-completeness`
 **Inventaire associé** : `sfia-foundation-documents-inventory.md`
 
 ## 1. Objectif
@@ -72,7 +72,7 @@ Les fondations sont **identifiées** et **localisables** — elles ne sont pas e
 
 | Statut | Documents sources | Commentaire |
 |--------|-------------------|-------------|
-| **OK** | `docs/architecture/sfia-decision-engine.md` | Document fondateur v1.0 substantiel (~1600 lignes). Non relié explicitement aux ADR Interv360 ni aux arbitrages MVP |
+| **OK** | `docs/architecture/2026-06-27-sfia-decision-engine.md` | Document fondateur v1.0 substantiel (~1600 lignes). Non relié explicitement aux ADR Interv360 ni aux arbitrages MVP |
 
 ### 5.4. Delivery Pipeline
 
@@ -102,7 +102,7 @@ Les fondations sont **identifiées** et **localisables** — elles ne sont pas e
 
 | Statut | Documents sources | Commentaire |
 |--------|-------------------|-------------|
-| **Partiel** | `method/sfia-fast-track/automation/sfia-automation-architecture.md` ; `docs/architecture/sfia-platform-architecture.md` (modules) ; `docs/architecture/sfia-decision-engine.md` (orchestration décisionnelle) | Vision forte dans automation doc ; pas d'implémentation moteur |
+| **Partiel** | `method/sfia-fast-track/automation/sfia-automation-architecture.md` ; `docs/architecture/sfia-platform-architecture.md` (modules) ; `docs/architecture/2026-06-27-sfia-decision-engine.md` (orchestration décisionnelle) | Vision forte dans automation doc ; pas d'implémentation moteur |
 
 ### 5.9. ChatGPT ↔ Cursor workflow
 
@@ -138,7 +138,7 @@ Les fondations sont **identifiées** et **localisables** — elles ne sont pas e
 
 | Statut | Documents sources | Commentaire |
 |--------|-------------------|-------------|
-| **OK** | `projects/interv360/` (00–09) ; `cycles/interv360-*` ; `audit-rex/interv360-application-rex.md` ; ADR actifs | Cas référence le plus capitalisé du workspace — à résumer pour Notion, pas publier brut |
+| **OK** | `projects/interv360/` (00–09) ; `cycles/interv360-*` ; `audit-rex/2026-07-03-interv360-application-rex.md` ; ADR actifs | Cas référence le plus capitalisé du workspace — à résumer pour Notion, pas publier brut |
 
 ## 6. Documents à mettre à jour ensuite
 
@@ -158,7 +158,7 @@ Les fondations sont **identifiées** et **localisables** — elles ne sont pas e
 | Document canonique cible | Objectif | Source(s) à consolider |
 |--------------------------|----------|------------------------|
 | `sfia-platform-architecture.md` | Architecture globale SFIA | **Existe** — `docs/architecture/` — aligner |
-| `sfia-decision-engine.md` | Moteur de décision | **Existe** — `docs/architecture/` — relier opérationnel |
+| `2026-06-27-sfia-decision-engine.md` | Moteur de décision | **Existe** — `docs/architecture/` — relier opérationnel |
 | `sfia-delivery-pipeline.md` | Pipeline de livraison | **Existe** — fusionner avec Fast Track cycles |
 | `sfia-domain-model.md` | Concepts métier | **Existe** — vérifier objets CMP |
 | `sfia-metamodel.md` | Modèle artefacts, cycles, rôles | **Existe** — mapper repo |
@@ -201,7 +201,7 @@ Priorité immédiate :
 ```text
 Couche conceptuelle (Notion exports — docs/architecture/)
 ├── sfia-platform-architecture.md
-├── sfia-decision-engine.md
+├── 2026-06-27-sfia-decision-engine.md
 ├── sfia-delivery-pipeline.md
 ├── sfia-domain-model.md
 ├── sfia-meta-model.md
diff --git a/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md b/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md
index 1ab8ccf..9455d99 100644
--- a/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md
+++ b/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md
@@ -7,9 +7,9 @@ scope: p2 cross-reference audit
 
 # SFIA v1.1 P2 Cross-Reference Audit
 
-**Version:** v1.1  
-**Status:** Candidate audit  
-**Scope:** P2 cross-reference and capitalization index alignment before foundation v1.1 closure  
+**Version:** v1.1
+**Status:** Candidate audit
+**Scope:** P2 cross-reference and capitalization index alignment before foundation v1.1 closure
 **Branch audited from:** `capitalization/sfia-foundation-v1.1` @ `683ed4f`
 
 ## 1. Objectif
@@ -39,9 +39,9 @@ Il produit une recommandation d'action claire pour les cycles P2.1 et P2.2.
 
 | Document | Chemin |
 |----------|--------|
-| Foundation Documents Audit | `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md` |
+| Foundation Documents Audit | `method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md` |
 | Foundation Documents Inventory | `method/sfia-fast-track/documentation/archive/foundation-v1.1/sfia-foundation-documents-inventory.md` |
-| Documentation Capitalization Audit | `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md` |
+| Documentation Capitalization Audit | `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md` |
 | v1.1 Capitalization Inputs Inventory | `method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md` |
 | v1.1 Foundation Impact Matrix | `method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` |
 | v1.1 Consolidation Plan | `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md` |
@@ -64,7 +64,7 @@ Les actifs suivants constituent le référentiel opérationnel v1.1 que les docu
 | Asset | Expected role |
 |-------|---------------|
 | `docs/foundation/sfia-engineering-principles.md` | Norme supérieure d'exécution |
-| `docs/architecture/sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
+| `docs/architecture/2026-06-27-sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
 | `docs/architecture/sfia-repository-blueprint.md` | Source de vérité repository |
 | `docs/architecture/sfia-delivery-pipeline.md` | PR, post-merge, delivery |
 | `docs/architecture/sfia-platform-architecture.md` | Architecture plateforme v1.1 |
@@ -89,8 +89,8 @@ Les actifs suivants constituent le référentiel opérationnel v1.1 que les docu
 | `sfia-rules-update.md` | Trace historique des règles post-Interv360 | Substantiel (~167 lignes) ; §8 annonce règles exécutables pour futurs prompts/moteurs | Aucune mention v1.1 ; pas de renvoi vers `sfia-rules-and-guardrails.md` comme référence opérationnelle actuelle ; pas de renvoi vers Validation Checklist | Ajouter note de statut : *historical consolidation trace* ; pointer `sfia-rules-and-guardrails.md` comme référence opérationnelle ; cross-réf légère vers checklists v1.1 | **P1** |
 | `docs/architecture/README.md` | Index des 6 documents fondateurs architecture | 17 lignes ; liste les 6 fichiers sans versions | Pas de mention v1.1 ; pas de renvois Fast Track (Operating Model, moteurs P1, Validation Checklist, Prompt Catalog, Prompt Templates, Knowledge Layer) ; pas de lien Engineering Principles | Ajouter section **SFIA v1.1 Architecture References** ou **Related Fast Track References** | **P1** |
 | `sfia-documentation-completeness-matrix.md` | Matrice globale complétude documentaire | Datée 2026-07-03 ; branche `capitalization/sfia-documentation-completeness` ; terminologie SFA/SFIA mixte | Ne couvre pas les actifs v1.1 (Operating Model, Rules & Guardrails, Knowledge Layer, 3 moteurs P1, Validation Checklist, Prompt Catalog, Prompt Templates) ; §12 indique consolidation non terminée ; automation = 1 doc ; checklists = 3 legacy ; prompts = catalogue seul sans templates | Mettre à jour après P2.1 ; ajouter lignes v1.1 ; corriger statuts ; ajouter référence à cet audit ; §12 clôture v1.1 | **P1** |
-| `sfia-foundation-documents-audit.md` | Audit pré-consolidation fondateurs | Décision **FONDATIONS PARTIELLES** ; lacunes P0 sur engines autonomes | Obsolète post-v1.1 — engines, Operating Model, Knowledge Layer existent | Ajouter section **Update — superseded by v1.1 consolidation** ou mettre à jour en P2.2 ; ne pas réécrire l'audit historique | **P1** |
-| `sfia-documentation-capitalization-audit.md` | Audit complétude globale pré-v1.1 | Décision **COMPLETE AVEC RÉSERVES** ; terminologie SFA | Ne reflète pas foundation v1.1 ; automation = 1 doc ; core = 4 docs | Mettre à jour synthèse post-v1.1 en P2.2 ; conserver analyse historique | **P1** |
+| `2026-07-03-sfia-foundation-documents-audit.md` | Audit pré-consolidation fondateurs | Décision **FONDATIONS PARTIELLES** ; lacunes P0 sur engines autonomes | Obsolète post-v1.1 — engines, Operating Model, Knowledge Layer existent | Ajouter section **Update — superseded by v1.1 consolidation** ou mettre à jour en P2.2 ; ne pas réécrire l'audit historique | **P1** |
+| `2026-07-03-sfia-documentation-capitalization-audit.md` | Audit complétude globale pré-v1.1 | Décision **COMPLETE AVEC RÉSERVES** ; terminologie SFA | Ne reflète pas foundation v1.1 ; automation = 1 doc ; core = 4 docs | Mettre à jour synthèse post-v1.1 en P2.2 ; conserver analyse historique | **P1** |
 | `sfia-foundation-documents-inventory.md` | Inventaire identification fondateurs | Mode identification uniquement ; docs architecture v1.0 | Ne liste pas les nouveaux docs v1.1 Fast Track ; README architecture sans v1.1 | Ajouter section **Update — v1.1 assets created** en P2.2 | **P2** |
 | `sfia-v1.1-capitalization-inputs-inventory.md` | Inventaire apports v1.1 | À jour jusqu'aux Prompt Templates | Complet pour la passe foundation ; follow-up P2 identifié | Ajouter référence à cet audit ; pas de réécriture | **P2** |
 | `sfia-v1.1-foundation-impact-matrix.md` | Matrice impact v1.1 | global-capitalization et rules-update classés **P2** | Confirmé — actions P2.1 ciblées | Référencer cet audit ; cocher après exécution P2 | **P2** |
@@ -131,8 +131,8 @@ Les actifs suivants constituent le référentiel opérationnel v1.1 que les docu
 
 ### Historical document positioning gaps
 
-- `sfia-foundation-documents-audit.md` : lacunes P0 (engines autonomes, Operating Model) **comblées** — audit historique à repositionner.
-- `sfia-documentation-capitalization-audit.md` : même constat — base SFA substantielle mais périmètre automation incomplet au regard v1.1.
+- `2026-07-03-sfia-foundation-documents-audit.md` : lacunes P0 (engines autonomes, Operating Model) **comblées** — audit historique à repositionner.
+- `2026-07-03-sfia-documentation-capitalization-audit.md` : même constat — base SFA substantielle mais périmètre automation incomplet au regard v1.1.
 - `sfia-foundation-documents-inventory.md` : snapshot identification v1.0 — pas de trace des créations v1.1.
 
 ## 6. Actions recommandées
@@ -142,7 +142,7 @@ Les actifs suivants constituent le référentiel opérationnel v1.1 que les docu
 | Cross-références core historiques | `sfia-global-capitalization-reference.md`, `sfia-rules-update.md` | Clarifier rôle historique ; pointer référentiel v1.1 | **P1** | `docs: add SFIA v1.1 cross-references` |
 | Index architecture v1.1 | `docs/architecture/README.md` | Relier référentiels architecture et couche Fast Track v1.1 | **P1** | (même commit P2.1) |
 | Mise à jour matrice complétude | `sfia-documentation-completeness-matrix.md` | Refléter actifs v1.1 ; corriger statuts ; terminologie SFIA | **P1** | `docs: update SFIA v1.1 capitalization indexes` |
-| Mise à jour audits capitalisation | `sfia-foundation-documents-audit.md`, `sfia-documentation-capitalization-audit.md` | Ajouter sections Update post-v1.1 ; repositionner décisions historiques | **P1** | (même commit P2.2) |
+| Mise à jour audits capitalisation | `2026-07-03-sfia-foundation-documents-audit.md`, `2026-07-03-sfia-documentation-capitalization-audit.md` | Ajouter sections Update post-v1.1 ; repositionner décisions historiques | **P1** | (même commit P2.2) |
 | Mise à jour inventaire fondateurs | `sfia-foundation-documents-inventory.md` | Tracer créations v1.1 | **P2** | (P2.2 ou inclus) |
 | Clarification checklists legacy | `checklists/README.md`, éventuellement headers legacy | Distinguer canonique v1.1 vs legacy | **P2** | Optionnel P2.2 |
 | Réconciliation familles prompts Interv360 | `prompts/prompt-catalog.md` Annexe A | Mapper familles pilote → 8 familles v1.1 | **P2** | Cycle séparé |
@@ -197,7 +197,7 @@ Les actifs suivants constituent le référentiel opérationnel v1.1 que les docu
 docs: add SFIA v1.1 cross-references
 ```
 
-**Validation :** utiliser `prompts/templates/04-validate-cursor-result.md` puis `05-validate-pr-readiness.md`.
+**Validation :** utiliser `prompts/templates/04-validate-cursor-result.md` puis `2026-07-04-05-validate-pr-readiness.md`.
 
 ### Cycle P2.2 — Capitalization Index and Completeness Matrix
 
@@ -206,8 +206,8 @@ docs: add SFIA v1.1 cross-references
 **Files :**
 
 - `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
-- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
+- `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md`
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md`
 - `method/sfia-fast-track/documentation/archive/foundation-v1.1/sfia-foundation-documents-inventory.md`
 - `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md` (critères §7)
 
@@ -286,8 +286,8 @@ The P2.2 cycle has updated the capitalization indexes, completeness matrix and h
 Updated references include:
 
 - `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
-- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
+- `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md`
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md`
 - `method/sfia-fast-track/documentation/archive/foundation-v1.1/sfia-foundation-documents-inventory.md`
 - `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md`
 
diff --git a/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md b/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md
index 4ea192a..26033b4 100644
--- a/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md
@@ -1,8 +1,8 @@
 # SFIA Foundation v1.1 — Consolidation Plan
 
-**Date** : 2026-07-03  
-**Branche** : `capitalization/sfia-documentation-completeness`  
-**Matrice associée** : `sfia-foundation-v1.1-evolution-matrix.md`  
+**Date** : 2026-07-03
+**Branche** : `capitalization/sfia-documentation-completeness`
+**Matrice associée** : `sfia-foundation-v1.1-evolution-matrix.md`
 **Mode** : planification uniquement — validation humaine requise avant exécution
 
 ## 1. Objectif
@@ -47,7 +47,7 @@ Les enrichir avec les apprentissages issus :
 | Document | Version cible | Mise à jour attendue |
 |----------|---------------|----------------------|
 | `sfia-platform-architecture.md` | **v1.1** | Ajouter cartographie repo post-cleanup ; couches `method/`, `docs/practices/`, `prompts/`, `projects/` ; relation Git ↔ Notion ; module Projects ↔ Interv360 |
-| `sfia-decision-engine.md` | **v1.1** | Ajouter décisions GO/NO-GO, réserves, arbitrage PR/post-merge, capitalisation vs delivery |
+| `2026-06-27-sfia-decision-engine.md` | **v1.1** | Ajouter décisions GO/NO-GO, réserves, arbitrage PR/post-merge, capitalisation vs delivery |
 | `sfia-delivery-pipeline.md` | **v1.1** | Ajouter cycle Fast Track (branches, PR, post-merge, releases) ; séquence projet 00–09 ; lien capitalisations cycles |
 | `sfia-domain-model.md` | **v1.1** | Ajouter Cycle, Prompt, Template, Practice, Role Method, Reference Project, Knowledge Page, Audit, REX |
 | `sfia-meta-model.md` | **v1.1** | Ajouter relations artefacts/prompts/templates/practices/Notion/audits ; statuts maturité Role Method |
@@ -281,7 +281,7 @@ Remaining P1 documents:
 
 The following foundation documents have been updated to v1.1:
 
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `docs/foundation/sfia-engineering-principles.md`
 
 The Engineering Principles are now positioned as the normative execution reference for SFIA.
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md b/method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md
index 67435e3..03b4a57 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md
@@ -1,8 +1,8 @@
 # SFIA Documentation Completeness Matrix
 
-**Date** : 2026-07-03  
-**Branche** : `capitalization/sfia-documentation-completeness`  
-**Référence** : `main` @ `3b521c6`  
+**Date** : 2026-07-03
+**Branche** : `capitalization/sfia-documentation-completeness`
+**Référence** : `main` @ `3b521c6`
 **Dernière mise à jour** : foundation v1.1 — P2.2 (branche `capitalization/sfia-foundation-v1.1`)
 
 ## Update — Foundation v1.1 Consolidation Status
@@ -79,7 +79,7 @@ L'objectif est de s'assurer que la méthode, les templates, les prompts, les pra
 | Automation | Architecture + moteurs P1 | `method/sfia-fast-track/automation/` | **OK** | Automation Architecture v1.1 + Prompt Generation, Repository Execution, Validation engines |
 | Cycle type | Déroulé de cycle SFIA | `method/sfia-fast-track/cycles/` + `templates/cycle-template.md` | **À compléter** | 2 capitalisations Interv360 ; pas de doc cycle générique autonome hors template |
 | UI / UX | Méthode UI / Figma Design-first | `method/sfia-fast-track/ui/figma-design-first-ui-method.md` | **OK** | Référence active |
-| Audit / REX | Méthode audit et REX | `method/sfia-fast-track/audit-rex/interv360-application-rex.md` | **À compléter** | REX Interv360 présent ; méthode audit/REX générique SFIA non formalisée |
+| Audit / REX | Méthode audit et REX | `method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md` | **À compléter** | REX Interv360 présent ; méthode audit/REX générique SFIA non formalisée |
 | Documentation | Plan documentaire et Notion | `method/sfia-fast-track/documentation/` | **À compléter** | Mapping Notion OK ; `documentation-audit.md` et `documentation-structure-target.md` pré-Round 3 |
 | Templates | Templates opérationnels Fast Track | `method/sfia-fast-track/templates/` (6 fichiers) | **OK** | Cycle, PR, post-merge, audit, REX, MVP pattern — pas de README dossier |
 | Checklists | Checklists de validation | `method/sfia-fast-track/checklists/` | **OK** | `sfia-validation-checklist.md` = checklist canonique v1.1 ; 3 checklists legacy conservées |
@@ -116,8 +116,8 @@ L'objectif est de s'assurer que la méthode, les templates, les prompts, les pra
 | Cycle | Template cycle | `method/sfia-fast-track/templates/cycle-template.md` | **OK** | |
 | PR | Template PR | `method/sfia-fast-track/templates/pr-body-template.md` | **OK** | |
 | Post-merge | Template post-merge | `method/sfia-fast-track/templates/post-merge-template.md` | **OK** | |
-| Audit | Template audit | `method/sfia-fast-track/templates/audit-template.md` | **OK** | |
-| REX | Template REX | `method/sfia-fast-track/templates/rex-template.md` | **OK** | |
+| Audit | Template audit | `method/sfia-fast-track/templates/2026-07-03-audit-template.md` | **OK** | |
+| REX | Template REX | `method/sfia-fast-track/templates/2026-07-03-rex-template.md` | **OK** | |
 | MVP delivery | Pattern lots MVP | `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md` | **OK** | |
 | Architecture plateforme | Templates archi fonctionnelle | `docs/templates/architecture/` (3 fichiers) | **OK** | |
 | BPMN plateforme | Templates process | `docs/templates/process/` (3 fichiers) | **OK** | |
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
index 0c1da55..edb02dd 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
@@ -361,7 +361,7 @@ Les **10** `technical-artifact-lifecycle` conservent un lifecycle réel (schemas
 
 ### ADR-CAND-009
 
-`projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md`
+`projects/interv360/02-architecture/adr/adr-cand-009-ai-light-post-mvp-confirmation.md`
 
 - **Résultat :** `validated` (conservé)
 - **Preuve :** `explicit-status` — « Statut : Confirmed — Post-MVP »
@@ -628,11 +628,11 @@ Pour chaque fichier cible : lecture contenu si nécessaire ; index des référen
 - **Méthode draft/candidate** avec refs entrantes → operational (`current-method-reference`)
 - **Rapports projet validated** (merge-summary, demo, rex) → non-operational (`closed-cycle-only`) sans consommateur actif
 - **`2026-07-11-sfia-v2.6-repository-read-only-audit.md`** → operational (`current-cycle-reference`) — artefact audit cartographie PR #165
-- **`tools/cmp-001/WORKSPACE.md`** → operational (`active-navigation-reference`) — cité par `docs/workspace-readiness-report.md`
+- **`tools/cmp-001/workspace.md`** → operational (`active-navigation-reference`) — cité par `docs/2026-06-27-workspace-readiness-report.md`
 
 ### Unknown résiduels
 
-**0** — les 2 cas initialement `unknown` après règles automatiques ont été requalifiés manuellement avec preuve (read-only audit, WORKSPACE.md).
+**0** — les 2 cas initialement `unknown` après règles automatiques ont été requalifiés manuellement avec preuve (read-only audit, workspace.md).
 
 ### Corrections secondaires
 
@@ -735,7 +735,7 @@ Index des références entrantes repository ; filtrage consommateurs actifs (exc
 13. `projects/interv360/04-delivery/api-product-validation.md`
 14. `projects/interv360/04-delivery/connected-ux-productization.md`
 15. `projects/interv360/04-delivery/product-demo-consolidation.md`
-16. `projects/interv360/09-roadmap/interv360-backend-persistence-decision.md`
+16. `projects/interv360/09-roadmap/2026-07-01-interv360-backend-persistence-decision.md`
 17. `projects/interv360/project.json`
 18. `tools/cmp-001/docs/status-matrix.md`
 
@@ -922,9 +922,9 @@ Liste exhaustive des 6 nouveaux unknown :
 
 ### Exemples preuves directes valides
 
-- `docs/tooling/penpot/penpot-mcp-self-host-rex.md` L50 → `.cursor/mcp-templates/penpot-mcp.example.json` (method-use, lien markdown)
+- `docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md` L50 → `.cursor/mcp-templates/penpot-mcp.example.json` (method-use, lien markdown)
 - `exports/notion/export-manifest.json` L7–L14 → payloads Notion JSON (manifest, processus export actif)
-- `prompts/prompt-catalog.md` L35 → `docs/architecture/sfia-decision-engine.md` (template-use, génération prompts SFIA)
+- `prompts/prompt-catalog.md` L35 → `docs/architecture/2026-06-27-sfia-decision-engine.md` (template-use, génération prompts SFIA)
 - `docs/tooling/penpot/penpot-cursor-agent-rules.md` L117 → `docker/penpot/README.md` (method-use)
 
 ### Exemples chaînes / preuves rejetées
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md
index 70b9647..aa1279c 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md
@@ -1,14 +1,14 @@
 # SFIA v2.6 — Repository Cleanup — Cadrage du chantier
 
-**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md`  
-**Date et heure :** 2026-07-11 04:41 Europe/Paris  
-**Statut :** **Candidate** — cadrage du chantier SFIA v2.6  
-**Cycle projet :** Cycle 1 — Cadrage  
-**Profil SFIA :** Standard  
-**Typologie v2.4 :** DOC  
-**Autorité de décision :** Morris (L0)  
-**Baseline opérationnelle :** SFIA v2.4 — Consolidation & Operating Efficiency  
-**Trajectoire précédente reprise :** SFIA v2.5 **candidate** — validée et capitalisée (Chantiers360 post-MVP, PR #154–#158)  
+**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md`
+**Date et heure :** 2026-07-11 04:41 Europe/Paris
+**Statut :** **Candidate** — cadrage du chantier SFIA v2.6
+**Cycle projet :** Cycle 1 — Cadrage
+**Profil SFIA :** Standard
+**Typologie v2.4 :** DOC
+**Autorité de décision :** Morris (L0)
+**Baseline opérationnelle :** SFIA v2.4 — Consolidation & Operating Efficiency
+**Trajectoire précédente reprise :** SFIA v2.5 **candidate** — validée et capitalisée (Chantiers360 post-MVP, PR #154–#158)
 **HEAD `main` de référence :** `fed2e2c` — merge PR #158 (clôture capitalisation v2.5)
 
 ---
@@ -49,7 +49,7 @@ Les travaux suivants existent déjà dans `main` et **ne doivent pas être dupli
 | `method/sfia-fast-track/documentation/documentation-structure-target.md` | Arborescence cible proposée | Input audit — pas remplacement immédiat |
 | `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md` | Plan migration physique | Input audit — révision requise |
 | `method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-plan.md` | Cleanup round 2 | Input audit — éviter doublon de plan |
-| `method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md` | Audit export Notion | Périmètre distinct — référence croisée |
+| `method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-live-export-audit.md` | Audit export Notion | Périmètre distinct — référence croisée |
 
 > **Ce cadrage ne réalise aucun audit, aucune cartographie exhaustive ni aucune classification effective de ces documents.**
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index 7a61d34..6cecc88 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -179,8 +179,11 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 | **Prompts/templates** | **basename uniquement** dans D1 ; **aucune restructuration** contenu/famille ; évolution structurelle → **Lot H** |
 | **Collisions casse** | **16** qualifiées (ADR + PROMPT + cmp-001) |
 | **Refs actives** | **111** rename-and-fix-refs ; **38** rename simple |
-| **Statut exécution D1/D2/D3** | **not started** |
-| **Qualification merge** | **completed via PR #172** — D1 execution remains separately gated |
+| **Statut exécution D1** | **executed** on branch `migration/sfia-v2.6-lot-d1-naming` — **PR ouverte, non mergée** |
+| **Statut exécution D2/D3** | **not started** |
+| **D1 renames** | **50/50** `git mv` — refs directes corrigées |
+| **Rapport exécution D1** | `2026-07-12-sfia-v2.6-lot-d1-naming-execution.md` |
+| **Qualification merge** | **completed via PR #172** — D1 merge soumis à GO Morris séparé |
 
 ---
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-d1-naming-execution.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-d1-naming-execution.md
new file mode 100644
index 0000000..5b0dd3c
--- /dev/null
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-d1-naming-execution.md
@@ -0,0 +1,118 @@
+# SFIA v2.6 — Lot D1 Naming Execution
+
+**Horodatage :** 2026-07-12 18:04 Europe/Paris
+**Cycle :** Capitalisation documentaire / normalisation nommage D1
+**Profil :** Critical
+**GO Morris :** explicite — exécution D1 depuis `main` @ `4e4a17b513927b5f5b901c35ff65f91d6fe30c87`
+**Branche :** `migration/sfia-v2.6-lot-d1-naming`
+**CSV SHA-256 :** `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` — **unchanged**
+
+---
+
+## 1. Manifeste D1 (50/50)
+
+| # | ID | Ancien chemin | Nouveau chemin | Action |
+|---|-----|---------------|----------------|--------|
+| 1 | D-001 | `docs/architecture/sfia-decision-engine.md` | `docs/architecture/2026-06-27-sfia-decision-engine.md` | rename-and-fix-refs |
+| 2 | D-002 | `docs/practices/process/bpmn-method-cycle-closure.md` | `docs/practices/process/2026-06-28-bpmn-method-cycle-closure.md` | rename |
+| 3 | D-003 | `docs/practices/process/bpmn-method-integration-audit.md` | `docs/practices/process/2026-06-28-bpmn-method-integration-audit.md` | rename-and-fix-refs |
+| 4 | D-004 | `docs/templates/architecture/functional-architecture-cycle-closure-template.md` | `docs/templates/architecture/2026-06-28-functional-architecture-cycle-closure-template.md` | rename |
+| 5 | D-005 | `docs/templates/process/bpmn-cycle-closure-template.md` | `docs/templates/process/2026-06-28-bpmn-cycle-closure-template.md` | rename |
+| 6 | D-006 | `docs/templates/ux-ui/ux-ui-cycle-closure-template.md` | `docs/templates/ux-ui/2026-06-28-ux-ui-cycle-closure-template.md` | rename |
+| 7 | D-007 | `docs/tooling/penpot/penpot-mcp-self-host-rex.md` | `docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md` | rename-and-fix-refs |
+| 8 | D-008 | `docs/workspace-readiness-report.md` | `docs/2026-06-27-workspace-readiness-report.md` | rename |
+| 9 | D-009 | `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md` | `method/complementary/controlled-delivery/2026-07-01-delivery-acceleration-level-3-rex.md` | rename-and-fix-refs |
+| 10 | D-010 | `method/sfia-fast-track/archive/interv360-realization/capitalization-plan.md` | `method/sfia-fast-track/archive/interv360-realization/2026-06-29-capitalization-plan.md` | rename-and-fix-refs |
+| 11 | D-011 | `method/sfia-fast-track/archive/interv360-realization/capitalization-summary.md` | `method/sfia-fast-track/archive/interv360-realization/2026-06-30-capitalization-summary.md` | rename-and-fix-refs |
+| 12 | D-012 | `method/sfia-fast-track/audit-rex/interv360-application-rex.md` | `method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md` | rename |
+| 13 | D-013 | `method/sfia-fast-track/cycles/interv360-final-capitalization.md` | `method/sfia-fast-track/cycles/2026-07-03-interv360-final-capitalization.md` | rename |
+| 14 | D-014 | `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md` | `method/sfia-fast-track/cycles/2026-07-02-interv360-mvp-delivery-capitalization.md` | rename |
+| 15 | D-015 | `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md` | `method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md` | rename-and-fix-refs |
+| 16 | D-016 | `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md` | `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md` | rename |
+| 17 | D-017 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md` | `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-06-sfia-v2-incremental-delivery-closure-standard.md` | rename-and-fix-refs |
+| 18 | D-018 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md` | `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-05-sfia-v2-pilot-selection-decision.md` | rename-and-fix-refs |
+| 19 | D-019 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md` | `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md` | rename-and-fix-refs |
+| 20 | D-020 | `method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md` | `method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-live-export-audit.md` | rename-and-fix-refs |
+| 21 | D-021 | `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md` | `method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-provisioning-dry-run-report.md` | rename-and-fix-refs |
+| 22 | D-022 | `method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md` | `method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-publication-track-pause-decision.md` | rename-and-fix-refs |
+| 23 | D-023 | `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md` | `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/2026-07-03-sfa-workspace-final-architecture-audit.md` | rename |
+| 24 | D-024 | `method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md` | `method/sfia-fast-track/documentation/workspace-audit/2026-07-03-operational-cleanup-report.md` | rename |
+| 25 | D-025 | `method/sfia-fast-track/templates/audit-template.md` | `method/sfia-fast-track/templates/2026-07-03-audit-template.md` | rename |
+| 26 | D-026 | `method/sfia-fast-track/templates/rex-template.md` | `method/sfia-fast-track/templates/2026-07-03-rex-template.md` | rename |
+| 27 | D-144 | `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` | `prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md` | case-two-step |
+| 28 | D-145 | `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` | `prompts/security/prompt-sec-001-revue-canal-email-securise.md` | case-two-step |
+| 29 | D-146 | `prompts/templates/05-validate-pr-readiness.md` | `prompts/templates/2026-07-04-05-validate-pr-readiness.md` | rename-and-fix-refs |
+| 30 | D-147 | `tools/cmp-001/ROADMAP.md` | `tools/cmp-001/roadmap.md` | rename-and-fix-refs |
+| 31 | D-148 | `tools/cmp-001/WORKSPACE.md` | `tools/cmp-001/workspace.md` | case-two-step |
+| 32 | D-149 | `tools/cmp-001/docs/consolidation-report.md` | `tools/cmp-001/docs/2026-06-27-consolidation-report.md` | rename |
+| 33 | D-093 | `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md` | `projects/interv360/02-architecture/adr/adr-001-api-contracts-simulated-implementation.md` | case-two-step |
+| 34 | D-094 | `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md` | `projects/interv360/02-architecture/adr/adr-002-visible-integration-errors-manual-recovery.md` | case-two-step |
+| 35 | D-095 | `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md` | `projects/interv360/02-architecture/adr/adr-003-secure-email-secondary-channel.md` | case-two-step |
+| 36 | D-096 | `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md` | `projects/interv360/02-architecture/adr/adr-004-minimal-flow-rejection-logging.md` | case-two-step |
+| 37 | D-097 | `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md` | `projects/interv360/02-architecture/adr/adr-005-fictive-retention-photos-signatures-logs.md` | case-two-step |
+| 38 | D-098 | `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md` | `projects/interv360/02-architecture/adr/adr-006-client-notifications-without-client-portal.md` | case-two-step |
+| 39 | D-099 | `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md` | `projects/interv360/02-architecture/adr/adr-007-optional-structured-client-signature.md` | case-two-step |
+| 40 | D-100 | `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md` | `projects/interv360/02-architecture/adr/adr-008-separated-sav-dashboard-and-executive-view.md` | case-two-step |
+| 41 | D-101 | `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` | `projects/interv360/02-architecture/adr/adr-cand-009-ai-light-post-mvp-confirmation.md` | case-two-step |
+| 42 | D-102 | `projects/interv360/02-architecture/closure-without-signature-summary.md` | `projects/interv360/02-architecture/2026-06-28-closure-without-signature-summary.md` | rename |
+| 43 | D-103 | `projects/interv360/02-architecture/closure-without-signature.md` | `projects/interv360/02-architecture/2026-06-28-closure-without-signature.md` | rename-and-fix-refs |
+| 44 | D-110 | `projects/interv360/09-roadmap/interv360-auth-and-user-framing.md` | `projects/interv360/09-roadmap/2026-07-02-interv360-auth-and-user-framing.md` | rename-and-fix-refs |
+| 45 | D-111 | `projects/interv360/09-roadmap/interv360-auth-foundation-framing.md` | `projects/interv360/09-roadmap/2026-07-02-interv360-auth-foundation-framing.md` | rename-and-fix-refs |
+| 46 | D-112 | `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md` | `projects/interv360/09-roadmap/2026-03-12-interv360-backend-api-contract-framing.md` | rename-and-fix-refs |
+| 47 | D-113 | `projects/interv360/09-roadmap/interv360-backend-data-model-decision.md` | `projects/interv360/09-roadmap/2026-07-01-interv360-backend-data-model-decision.md` | rename-and-fix-refs |
+| 48 | D-114 | `projects/interv360/09-roadmap/interv360-backend-persistence-decision.md` | `projects/interv360/09-roadmap/2026-07-01-interv360-backend-persistence-decision.md` | rename-and-fix-refs |
+| 49 | D-115 | `projects/interv360/09-roadmap/interv360-backend-target-framing.md` | `projects/interv360/09-roadmap/2026-07-01-interv360-backend-target-framing.md` | rename-and-fix-refs |
+| 50 | D-116 | `projects/interv360/09-roadmap/interv360-backend-technical-stack-decision.md` | `projects/interv360/09-roadmap/2026-07-01-interv360-backend-technical-stack-decision.md` | rename-and-fix-refs |
+
+## 2. Renames sensibles à la casse (13)
+
+Procédure : `git mv source .{basename}.sfia-d1-tmp` puis `git mv .{basename}.sfia-d1-tmp target`
+
+- **D-144** : `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` → `prompts/architecture/.PROMPT-ARCH-001-revue-integrations-et-erreurs.md.sfia-d1-tmp` → `prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md`
+- **D-145** : `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` → `prompts/security/.PROMPT-SEC-001-revue-canal-email-securise.md.sfia-d1-tmp` → `prompts/security/prompt-sec-001-revue-canal-email-securise.md`
+- **D-147** : `tools/cmp-001/ROADMAP.md` → `tools/cmp-001/.ROADMAP.md.sfia-d1-tmp` → `tools/cmp-001/roadmap.md`
+- **D-148** : `tools/cmp-001/WORKSPACE.md` → `tools/cmp-001/.WORKSPACE.md.sfia-d1-tmp` → `tools/cmp-001/workspace.md`
+- **D-093** : `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md` → `projects/interv360/02-architecture/adr/.ADR-001-api-contracts-simulated-implementation.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-001-api-contracts-simulated-implementation.md`
+- **D-094** : `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md` → `projects/interv360/02-architecture/adr/.ADR-002-visible-integration-errors-manual-recovery.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-002-visible-integration-errors-manual-recovery.md`
+- **D-095** : `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md` → `projects/interv360/02-architecture/adr/.ADR-003-secure-email-secondary-channel.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-003-secure-email-secondary-channel.md`
+- **D-096** : `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md` → `projects/interv360/02-architecture/adr/.ADR-004-minimal-flow-rejection-logging.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-004-minimal-flow-rejection-logging.md`
+- **D-097** : `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md` → `projects/interv360/02-architecture/adr/.ADR-005-fictive-retention-photos-signatures-logs.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-005-fictive-retention-photos-signatures-logs.md`
+- **D-098** : `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md` → `projects/interv360/02-architecture/adr/.ADR-006-client-notifications-without-client-portal.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-006-client-notifications-without-client-portal.md`
+- **D-099** : `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md` → `projects/interv360/02-architecture/adr/.ADR-007-optional-structured-client-signature.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-007-optional-structured-client-signature.md`
+- **D-100** : `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md` → `projects/interv360/02-architecture/adr/.ADR-008-separated-sav-dashboard-and-executive-view.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-008-separated-sav-dashboard-and-executive-view.md`
+- **D-101** : `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` → `projects/interv360/02-architecture/adr/.ADR-CAND-009-ai-light-post-mvp-confirmation.md.sfia-d1-tmp` → `projects/interv360/02-architecture/adr/adr-cand-009-ai-light-post-mvp-confirmation.md`
+
+## 3. Références
+
+- Fichiers consommateurs modifiés : **70**
+- Références actives anciens chemins complets D1 : **0**
+- CSV frozen : **non modifié**
+- Rapport qualification Lot D : **non modifié**
+- Photographies audit read-only : **non modifiées**
+
+## 4. Garde-fous
+
+| Contrôle | Résultat |
+|----------|----------|
+| Renames `git mv` | **50/50** |
+| Temporaires restants | **0** |
+| Suppressions physiques | **0** |
+| D2/D3 touchés | **0** |
+| CSV in diff | **no** |
+| Doctrine changed | **no** |
+| Canonical changed | **no** |
+| Prompts structure | **basename only** |
+
+## 5. Verdict
+
+```
+LOT D1 MANIFEST VERIFIED 50/50
+ALL D1 RENAMES EXECUTED WITH GIT MV
+CASE-ONLY RENAMES EXECUTED IN TWO STEPS
+TEMPORARY PATHS REMOVED
+DIRECT REFERENCES UPDATED
+ACTIVE OLD D1 PATHS ZERO
+D2 D3 UNTOUCHED
+CSV UNCHANGED
+PR OPEN — NOT MERGED
+```
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-05-sfia-v2-pilot-selection-decision.md
similarity index 99%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md
rename to method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-05-sfia-v2-pilot-selection-decision.md
index a93ee71..d359803 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-05-sfia-v2-pilot-selection-decision.md
@@ -12,10 +12,10 @@ references:
 
 # SFIA v2.0 — Pilot Selection Decision
 
-**Version :** v2.0 (candidate)  
-**Statut :** Candidate — validation Morris requise  
-**Branche :** `method/sfia-v2-pilot-selection-decision`  
-**Base :** `main` @ `daef5d7` (post PR #92)  
+**Version :** v2.0 (candidate)
+**Statut :** Candidate — validation Morris requise
+**Branche :** `method/sfia-v2-pilot-selection-decision`
+**Base :** `main` @ `daef5d7` (post PR #92)
 **Zone :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/`
 
 > **Ce document est un framework de décision.** Il ne crée aucun projet dans `projects/`, ne lance aucun bootstrap réel et ne sélectionne aucun pilote sans validation Morris.
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-06-sfia-v2-incremental-delivery-closure-standard.md
similarity index 98%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md
rename to method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-06-sfia-v2-incremental-delivery-closure-standard.md
index 67193c8..7a9e1ac 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-06-sfia-v2-incremental-delivery-closure-standard.md
@@ -1,8 +1,8 @@
 # SFIA v2.0 — Incremental Delivery Closure Standard
 
-**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md`  
-**Cycle :** Capitalisation méthode SFIA v2.0  
-**Version :** 1.0 — draft revue Morris  
+**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-06-sfia-v2-incremental-delivery-closure-standard.md`
+**Cycle :** Capitalisation méthode SFIA v2.0
+**Version :** 1.0 — draft revue Morris
 **Source pilote :** Chantiers360 v2 — INC-01 (PR #108, #109, #110)
 
 > **Standard méthode** — cycle documentaire uniquement. Ne modifie pas le code projet ni ne lance l'incrément suivant.
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md
similarity index 98%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md
rename to method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md
index 85c06df..a855f09 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md
@@ -1,8 +1,8 @@
 # SFIA v2.0 — Technical Architecture & Decision Documentation Standard
 
-**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md`  
-**Cycle :** Capitalisation méthode SFIA v2.0 — Technical Architecture & Decision Documentation  
-**Version :** 1.0 — draft revue Morris  
+**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md`
+**Cycle :** Capitalisation méthode SFIA v2.0 — Technical Architecture & Decision Documentation
+**Version :** 1.0 — draft revue Morris
 **Source pilote :** Chantiers360 v2 — `05-technical-architecture/`, delivery INC-01 à INC-05
 
 > **Standard méthode** — définit règles et modèles. **Ne produit pas** les ADR / DAA / DAT complets d'un projet dans le cycle d'adoption du standard.
@@ -52,7 +52,7 @@ Définir les règles SFIA v2.0 de **documentation technique** :
 
 **Standards liés :**
 
-- `sfia-v2-incremental-delivery-closure-standard.md` — chaîne INC-n
+- `2026-07-06-sfia-v2-incremental-delivery-closure-standard.md` — chaîne INC-n
 - `sfia-v2-delivery-qa-test-standard.md` — QA-G3/G4
 - `sfia-v2-design-coverage-standard.md` — frontend / extrapolation UI
 - `sfia-v2-automation-levels.md` — L0–L5
@@ -447,7 +447,7 @@ Chaque item = **cycle séparé** avec gate Morris.
 
 **Références :**
 
-- `sfia-v2-incremental-delivery-closure-standard.md`
+- `2026-07-06-sfia-v2-incremental-delivery-closure-standard.md`
 - `sfia-v2-delivery-qa-test-standard.md`
 - `sfia-v2-design-coverage-standard.md`
 - `sfia-v2-design-figma-cycle-standard.md`
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md
index 3211724..1a7a301 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md
@@ -9,10 +9,10 @@ baseline: SFIA foundation v1.1 (closed)
 
 # SFIA v2.0 — Automation and Delivery Vision
 
-**Version :** v2.0 (candidate)  
-**Statut :** Candidate — validation Morris requise  
-**Branche :** `method/sfia-v2-automation-vision`  
-**Base :** `main` @ `34615da` (post PR #89)  
+**Version :** v2.0 (candidate)
+**Statut :** Candidate — validation Morris requise
+**Branche :** `method/sfia-v2-automation-vision`
+**Base :** `main` @ `34615da` (post PR #89)
 **Zone :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/`
 
 ## 1. Purpose
@@ -206,7 +206,7 @@ SFIA peut permettre à Morris de piloter une capacité de production proche d'un
 | Pas de méthode parallèle | v2.0 capitalise et étend, ne duplique pas |
 | Progression document par document | Pas de création massive de fichiers v2.0 |
 
-**Notion :** reste dormant — voir `sfia-notion-publication-track-pause-decision.md`. Aucune dépendance v2.0.
+**Notion :** reste dormant — voir `2026-07-04-sfia-notion-publication-track-pause-decision.md`. Aucune dépendance v2.0.
 
 ## 11. Validated implementation order
 
@@ -274,5 +274,5 @@ Sujets **explicitement différés** — hors scope v2.0 phase initiale :
 - `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
 - `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
 - `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md`
-- `method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md`
+- `method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-publication-track-pause-decision.md`
 - `prompts/templates/sfia-prompt-templates-context-pack.md`
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md
index 281aed4..06929e0 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md
@@ -5,7 +5,7 @@ cycle_type: SFIA v2.0 capitalization / pilot selection scoring
 scope: Comparative scoring of three SFIA v2.0 pilot candidates — decision aid only
 baseline: SFIA foundation v1.1 (closed)
 references:
-  - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md
+  - method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-05-sfia-v2-pilot-selection-decision.md
   - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md
   - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md
   - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md
@@ -13,10 +13,10 @@ references:
 
 # SFIA v2.0 — Pilot Selection Scoring
 
-**Version :** v2.0 (candidate)  
-**Statut :** Candidate — décision Morris requise  
-**Branche :** `method/sfia-v2-pilot-selection-scoring`  
-**Base :** `main` @ `22ddc78` (post PR #93)  
+**Version :** v2.0 (candidate)
+**Statut :** Candidate — décision Morris requise
+**Branche :** `method/sfia-v2-pilot-selection-scoring`
+**Base :** `main` @ `22ddc78` (post PR #93)
 **Zone :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/`
 
 > **Ce document est un cycle de scoring et d'aide à la décision.** Il ne sélectionne aucun pilote définitivement, ne crée aucun projet sous `projects/` et ne lance aucun bootstrap réel.
@@ -64,7 +64,7 @@ Ce document **compare les trois candidats pilotes présélectionnés par Morris*
 
 ## 4. Scoring method
 
-**Référence :** `sfia-v2-pilot-selection-decision.md` §11–§12.
+**Référence :** `2026-07-05-sfia-v2-pilot-selection-decision.md` §11–§12.
 
 | Paramètre | Valeur |
 |-----------|--------|
@@ -371,7 +371,7 @@ Ce document **compare les trois candidats pilotes présélectionnés par Morris*
 
 **Références :**
 
-- `sfia-v2-pilot-selection-decision.md`
+- `2026-07-05-sfia-v2-pilot-selection-decision.md`
 - `sfia-v2-project-bootstrap-standard.md`
 - `sfia-v2-automation-levels.md`
 - `sfia-v2-automation-and-delivery-vision.md`
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md
index e38671c..23a0b8d 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md
@@ -11,10 +11,10 @@ references:
 
 # SFIA v2.0 — Project Bootstrap Standard
 
-**Version :** v2.0 (candidate)  
-**Statut :** Candidate — validation Morris requise  
-**Branche :** `method/sfia-v2-project-bootstrap-standard`  
-**Base :** `main` @ `4dcb070` (post PR #91)  
+**Version :** v2.0 (candidate)
+**Statut :** Candidate — validation Morris requise
+**Branche :** `method/sfia-v2-project-bootstrap-standard`
+**Base :** `main` @ `4dcb070` (post PR #91)
 **Zone :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/`
 
 > **Ce document est un standard méthode.** Il ne crée aucun projet réel dans `projects/`. Le bootstrap concret sera exécuté dans un cycle ultérieur, après choix du projet pilote.
@@ -340,7 +340,7 @@ Le bootstrap **ne remplace pas** le cadrage approfondi — il **initie** le proj
 
 **Document proposé :**
 
-`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md`
+`method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-05-sfia-v2-pilot-selection-decision.md`
 
 **But :**
 
@@ -356,7 +356,7 @@ Le bootstrap **ne remplace pas** le cadrage approfondi — il **initie** le proj
 1. Vision automation + delivery — ✅ PR #90
 2. Automation levels L0–L5 — ✅ PR #91
 3. **Project bootstrap standard — ce document**
-4. Choix projet pilote — `sfia-v2-pilot-selection-decision.md`
+4. Choix projet pilote — `2026-07-05-sfia-v2-pilot-selection-decision.md`
 5. Bootstrap minimal du projet — exécution réelle sous `projects/`
 6. Cycles projet semi-automatisés
 7. Validation / PR readiness
@@ -389,4 +389,4 @@ Le bootstrap **ne remplace pas** le cadrage approfondi — il **initie** le proj
 - `sfia-cycle-routing-guide.md`
 - `sfia-rules-and-guardrails.md`
 - `sfia-validation-checklist.md`
-- `sfia-notion-publication-track-pause-decision.md`
+- `2026-07-04-sfia-notion-publication-track-pause-decision.md`
diff --git a/method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md b/method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-live-export-audit.md
similarity index 97%
rename from method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md
rename to method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-live-export-audit.md
index d3a84e4..4ac1887 100644
--- a/method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md
+++ b/method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-live-export-audit.md
@@ -7,10 +7,10 @@ scope: Notion legacy export audit before Lot 0B
 
 # SFIA Notion Live Export Audit
 
-**Version :** v1.1  
-**Statut :** Candidate  
-**Cycle :** Lot 0A — Audit export Notion legacy  
-**Branche :** `notion/sfia-live-export-audit`  
+**Version :** v1.1
+**Statut :** Candidate
+**Cycle :** Lot 0A — Audit export Notion legacy
+**Branche :** `notion/sfia-live-export-audit`
 **Base :** `main` @ `0ac751e` (post PR #86)
 
 ## 1. Objectif
@@ -234,7 +234,7 @@ SFIA Home
 | SFIA Prompt Library | Page | SFIA Home/SFIA Prompt Library | SFIA Prompt System | active | Haute | INTEGRER_DANS_BASE_CIBLE | Prompt System | prompts/ | 52 prompts — sélection ~15–20 | Volume legacy |
 | SFIA Projects | Page | SFIA Home/SFIA Projects | Interv360 | active | Haute | REPRENDRE_DANS_SFIA_V1_1 | Projets & Capitalisation | projects/interv360/ | Hub projet Interv360 | Synthèse depuis repo |
 | SFIA Roadmap | Page | SFIA Home/SFIA Roadmap | SFIA Architecture | active | Moyenne | RESUMER_ET_LIER | Projets & Capitalisation | docs/roadmaps/ | Roadmap board | Lien repo |
-| SFIA Governance | Page | SFIA Home/SFIA Governance | SFIA Architecture | active | Moyenne | INTEGRER_DANS_BASE_CIBLE | Fondations & Architecture | docs/architecture/sfia-decision-engine.md | ADR + KPI | ADR-002 historique CMP |
+| SFIA Governance | Page | SFIA Home/SFIA Governance | SFIA Architecture | active | Moyenne | INTEGRER_DANS_BASE_CIBLE | Fondations & Architecture | docs/architecture/2026-06-27-sfia-decision-engine.md | ADR + KPI | ADR-002 historique CMP |
 | SFIA Runtime | Page | SFIA Home/SFIA Runtime | Legacy / SFA | legacy | Faible | ARCHIVER_LEGACY | Archives / Références repo | — | Runbooks — hors scope v1.1 | — |
 | SFIA Knowledge | Page | SFIA Home/SFIA Knowledge | SFIA Notion | mixed | Moyenne | EDITORIALISER_AVANT_REPRISE | Démarrer avec SFIA | sfia-knowledge-layer.md | FAQ, glossary, articles | Subtree temp à archiver |
 
@@ -248,7 +248,7 @@ SFIA Home
 | Components | Base CSV | SFIA Components/Components*.csv | CMP | active | Faible | ARCHIVER_LEGACY | Archives / Références repo | tools/cmp-001/ | CMP registry | Repo-only |
 | Experiments | Base CSV | SFIA Laboratory/Experiments*.csv | Legacy / SFA | legacy | Faible | ARCHIVER_LEGACY | Archives / Références repo | — | Ontologie lab | — |
 | Knowledge Articles | Base CSV | SFIA Knowledge/Knowledge Articles*.csv | Interv360 | mixed | Moyenne | EDITORIALISER_AVANT_REPRISE | Projets & Capitalisation | projects/interv360/ | Articles Interv360 + KNO-001 | KNO-001 = snapshot ancien |
-| REX | Base CSV | SFIA Knowledge/REX*.csv | REX | active | Moyenne | INTEGRER_DANS_BASE_CIBLE | Projets & Capitalisation — Assets | audit-rex/interv360-application-rex.md | REX-001 CMP — pas REX repo | Reprendre REX repo |
+| REX | Base CSV | SFIA Knowledge/REX*.csv | REX | active | Moyenne | INTEGRER_DANS_BASE_CIBLE | Projets & Capitalisation — Assets | audit-rex/2026-07-03-interv360-application-rex.md | REX-001 CMP — pas REX repo | Reprendre REX repo |
 | ADR | Base CSV | SFIA Governance/ADR*.csv | ADR | active | Moyenne | INTEGRER_DANS_BASE_CIBLE | Projets & Capitalisation — ADR | 02-architecture/adr/ | ADR-002 CMP + Interv360 ADR repo | Deux familles ADR |
 | Projects | Base CSV | SFIA Projects/Projects*.csv | Interv360 | active | Haute | INTEGRER_DANS_BASE_CIBLE | Projets & Capitalisation — Projets | projects/interv360/ | PRJ-INTERV360 | — |
 | KPI | Base CSV | SFIA Governance/KPI*.csv | Legacy / SFA | obsolete | Faible | IGNORER | — | — | Vide sauf test | — |
@@ -257,7 +257,7 @@ SFIA Home
 
 | Nom exporté | Type | Domaine | Catégorie | Destination | Lien repo | Réserve |
 |-------------|------|---------|-----------|-------------|-----------|---------|
-| SFIA Decision Engine v1.0 | Page | SFIA Architecture | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | sfia-decision-engine.md | Repo v1.1 — version différente |
+| SFIA Decision Engine v1.0 | Page | SFIA Architecture | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | 2026-06-27-sfia-decision-engine.md | Repo v1.1 — version différente |
 | SFIA Delivery Pipeline v1.0 | Page | SFIA Architecture | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | sfia-delivery-pipeline.md | Idem |
 | SFIA Platform Architecture v1.0 | Page | SFIA Architecture | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | sfia-platform-architecture.md | Idem |
 | SFIA Repository Blueprint v1.0 | Page | SFIA Architecture | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | sfia-repository-blueprint.md | Idem |
@@ -322,7 +322,7 @@ Reprise = **réédition depuis repo v1.1**, pas copie export.
 | SFIA Home hub | Structure legacy vs 7 sections | Modèle cible §4 |
 | SFIA Knowledge hub | Mélange FAQ + temp | sfia-knowledge-layer.md |
 | PROMPT-UXUI-* (15) | Contexte jalon UX V1 Interv360 | Éditorialiser ou archiver |
-| Governance Model | Non aligné repo | sfia-decision-engine.md |
+| Governance Model | Non aligné repo | 2026-06-27-sfia-decision-engine.md |
 
 **~28 éléments.**
 
@@ -336,7 +336,7 @@ Reprise = **réédition depuis repo v1.1**, pas copie export.
 | Projets | Projects CSV | 1 (Interv360) | Enrichir depuis repo |
 | Checklists | Standards partiel | 2–3 | Depuis checklists repo |
 | Practices & Templates | Templates/Standards legacy partiel | Sélectif | Repo practices |
-| Assets capitalisation | REX-001 | 1 | Préférer interv360-application-rex.md repo |
+| Assets capitalisation | REX-001 | 1 | Préférer 2026-07-03-interv360-application-rex.md repo |
 
 **~35 entrées** — création manuelle éditorialisée, **pas import CSV brut**.
 
@@ -377,7 +377,7 @@ Reprise = **réédition depuis repo v1.1**, pas copie export.
 | 7 | KNO-001 snapshot vs Engineering Principles repo | Repo v1.1 fait foi — réédition |
 | 8 | Import CSV vs création manuelle bases | **Création manuelle** — no raw import |
 | 9 | Getting Started / FAQ / Glossary legacy | Rééditer depuis modèle cible Accueil |
-| 10 | REX-001 CMP vs interv360-application-rex.md | Repo REX fait foi |
+| 10 | REX-001 CMP vs 2026-07-03-interv360-application-rex.md | Repo REX fait foi |
 | 11 | Governance Model page | Arbitrer — probablement archive |
 | 12 | STD-001 Object Lifecycle | Vérifier alignement repo standards |
 | 13 | Timing suppression legacy | Uniquement après validation explicite post-Lot 6 |
diff --git a/method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md b/method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-provisioning-dry-run-report.md
similarity index 98%
rename from method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md
rename to method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-provisioning-dry-run-report.md
index f6f10fa..6183047 100644
--- a/method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md
+++ b/method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-provisioning-dry-run-report.md
@@ -9,8 +9,8 @@ scope: Dry-run validation of SFIA v1.1 workspace provisioning plan
 
 > **Status update (2026-07-04) :** Active Notion provisioning is paused. This dry-run report is retained as a dormant capability reference. Do not execute apply without a new explicit decision — see `sfia-notion-publication-track-pause-decision.md`.
 
-**Date :** 2026-07-04  
-**Branche :** `notion/provisioning-engine-design`  
+**Date :** 2026-07-04
+**Branche :** `notion/provisioning-engine-design`
 **Configuration :** `tools/cmp-001/config/sfia-v1-1-workspace.config.json`
 
 ## 1. Commandes exécutées
diff --git a/method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md b/method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-publication-track-pause-decision.md
similarity index 98%
rename from method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md
rename to method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-publication-track-pause-decision.md
index 0061426..0e3ce13 100644
--- a/method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md
+++ b/method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-publication-track-pause-decision.md
@@ -7,10 +7,10 @@ scope: Pause active Notion integration and keep Notion as optional publication c
 
 # SFIA Notion Publication Track Pause Decision
 
-**Version :** v1.1  
-**Statut :** Validated  
-**Cycle :** Décision d'architecture — arrêt trajectoire Notion active  
-**Branche :** `notion/pause-notion-publication-track`  
+**Version :** v1.1
+**Statut :** Validated
+**Cycle :** Décision d'architecture — arrêt trajectoire Notion active
+**Branche :** `notion/pause-notion-publication-track`
 **Base :** `main` @ `3497266` (post PR #87)
 
 ## 1. Décision
diff --git a/method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md b/method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md
index 96a27d2..809661d 100644
--- a/method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md
+++ b/method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md
@@ -7,10 +7,10 @@ scope: SFIA and project content audit for Notion categorization
 
 # SFIA Notion Content Categorization
 
-**Version :** v1.1  
-**Statut :** Candidate  
-**Cycle :** Préparation Notion — Cycle 1 (audit + inventaire + catégorisation)  
-**Branche :** `notion/sfia-content-audit-categorization`  
+**Version :** v1.1
+**Statut :** Candidate
+**Cycle :** Préparation Notion — Cycle 1 (audit + inventaire + catégorisation)
+**Branche :** `notion/sfia-content-audit-categorization`
 **Base :** `main` @ `388e892` (post PR #84)
 
 ## 1. Objectif
@@ -122,7 +122,7 @@ Références appliquées :
 |-------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
 | `docs/foundation/sfia-engineering-principles.md` | SFIA Engineering Principles | SFIA Foundation | Fondation | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Contributeur SFIA | Créer page Notion dédiée | Norme supérieure — référence transversale | Versionner les mises à jour |
 | `docs/foundation/README.md` | Foundation README | SFIA Foundation | README / Index | validated | Faible | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Faible | Contributeur SFIA | Résumer et lier au repo | Index local | — |
-| `docs/architecture/sfia-decision-engine.md` | SFIA Decision Engine | SFIA Architecture | Architecture | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Contributeur SFIA | Créer page Notion dédiée | Décisions GO/NO-GO, réserves | — |
+| `docs/architecture/2026-06-27-sfia-decision-engine.md` | SFIA Decision Engine | SFIA Architecture | Architecture | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Contributeur SFIA | Créer page Notion dédiée | Décisions GO/NO-GO, réserves | — |
 | `docs/architecture/sfia-delivery-pipeline.md` | SFIA Delivery Pipeline | SFIA Architecture | Architecture | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Contributeur SFIA | Éditorialiser | Pipeline PR/merge — simplifier pour lecteur métier | — |
 | `docs/architecture/sfia-repository-blueprint.md` | SFIA Repository Blueprint | SFIA Architecture | Architecture | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Contributeur SFIA | Éditorialiser | Structure repo — utile mais technique | — |
 | `docs/architecture/sfia-platform-architecture.md` | SFIA Platform Architecture | SFIA Architecture | Architecture | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Contributeur SFIA | Éditorialiser | Vision plateforme v1.1 | — |
@@ -133,7 +133,7 @@ Références appliquées :
 | `docs/knowledge/README.md` | Knowledge README | SFIA Foundation | README / Index | candidate | Faible | A_REVOIR_PLUS_TARD | Faible | Repo-only | Arbitrer plus tard | Placeholder | Contenu à définir |
 | `docs/rex/README.md` | REX README | SFIA Capitalization | README / Index | candidate | Faible | A_REVOIR_PLUS_TARD | Faible | Repo-only | Arbitrer plus tard | Placeholder | — |
 | `docs/roadmaps/cmp-technical-roadmap.md` | CMP Technical Roadmap | SFIA Architecture | Roadmap | historical | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Morris / mainteneur | Résumer et lier au repo | Roadmap outillage — lien CMP | Ne pas republier payload associé |
-| `docs/workspace-readiness-report.md` | Workspace Readiness Report | Historique / Audit | Audit | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Rapport ponctuel pré-consolidation | — |
+| `docs/2026-06-27-workspace-readiness-report.md` | Workspace Readiness Report | Historique / Audit | Audit | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Rapport ponctuel pré-consolidation | — |
 | `docs/README.md` | Docs README | SFIA Foundation | README / Index | validated | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Contributeur SFIA | Résumer et lier au repo | Point d'entrée docs | — |
 
 ### 5.2 SFIA Operating Model
@@ -183,7 +183,7 @@ Références appliquées :
 | `prompts/templates/02-update-document-v1-1.md` | Template 02 — Update v1.1 | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | Template consolidation | — |
 | `prompts/templates/03-create-operational-checklist.md` | Template 03 — Checklist | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
 | `prompts/templates/04-validate-cursor-result.md` | Template 04 — Validate Cursor | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
-| `prompts/templates/05-validate-pr-readiness.md` | Template 05 — PR Readiness | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
+| `prompts/templates/2026-07-04-05-validate-pr-readiness.md` | Template 05 — PR Readiness | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
 | `prompts/templates/06-prepare-pr-summary.md` | Template 06 — PR Summary | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
 | `prompts/templates/07-write-post-merge-status.md` | Template 07 — Post-merge | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
 | `prompts/templates/08-capitalize-method-asset.md` | Template 08 — Capitalize | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
@@ -204,7 +204,7 @@ Références appliquées :
 | Chemin repo | Titre / nom | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves |
 |-------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
 | `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` | Documentation Completeness Matrix | SFIA Capitalization | Audit | validated | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Morris / mainteneur | Résumer et lier au repo | Matrice complétude — utile pilotage | Sections historiques |
-| `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md` | Capitalization Audit | SFIA Capitalization | Audit | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Audit interne | — |
+| `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md` | Capitalization Audit | SFIA Capitalization | Audit | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Audit interne | — |
 | `method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-closure/sfia-foundation-v1.1-closure-status.md` | Foundation v1.1 Closure | SFIA Capitalization | Closure | validated | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Morris / mainteneur | Résumer et lier au repo | Trace clôture fondation | — |
 | `method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-closure/sfia-foundation-v1.1-post-merge-status.md` | Foundation v1.1 Post-merge | SFIA Capitalization | Closure | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Trace merge — détail Git | — |
 | `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md` | P2 Cross-reference Audit | SFIA Capitalization | Audit | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Audit technique cross-réfs | — |
@@ -216,7 +216,7 @@ Références appliquées :
 | `method/sfia-fast-track/documentation/documentation-audit.md` | Documentation Audit | SFIA Capitalization | Audit | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Pré-Round 3 | — |
 | `method/sfia-fast-track/documentation/documentation-structure-target.md` | Documentation Structure Target | SFIA Capitalization | Guide opérationnel | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Cible pré-consolidation | — |
 | `method/sfia-fast-track/templates/*.md` | Fast Track Templates (6) | SFIA Operating Model | Template | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Utilisateur méthode | Créer entrée base Notion | Cycle, PR, post-merge, audit, REX, MVP | — |
-| `method/sfia-fast-track/audit-rex/interv360-application-rex.md` | Interv360 Application REX | SFIA Capitalization | REX | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Lecteur projet | Éditorialiser | REX capitalisé — preuve méthode | Fusionner avec synthèse projet |
+| `method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md` | Interv360 Application REX | SFIA Capitalization | REX | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Lecteur projet | Éditorialiser | REX capitalisé — preuve méthode | Fusionner avec synthèse projet |
 | `method/sfia-fast-track/documentation/archive/interv360-realization/` | Archive realization (9) | Historique / Audit | Archive | archive | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Méthode historique Interv360 | — |
 
 ### 5.7 Notion / CMP / Publication
@@ -283,7 +283,7 @@ Documents recommandés en **page Notion autonome** (priorité haute) :
 | # | Document source | Public cible | Action cycle 2 |
 |---|---------------|--------------|----------------|
 | 1 | `docs/foundation/sfia-engineering-principles.md` | Contributeur SFIA | Éditorialiser légèrement |
-| 2 | `docs/architecture/sfia-decision-engine.md` | Contributeur SFIA | Publier |
+| 2 | `docs/architecture/2026-06-27-sfia-decision-engine.md` | Contributeur SFIA | Publier |
 | 3 | `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Utilisateur méthode | Éditorialiser |
 | 4 | `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Utilisateur méthode | Valider statut puis publier |
 | 5 | `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Contributeur SFIA | Éditorialiser |
@@ -296,7 +296,7 @@ Documents recommandés en **page Notion autonome** (priorité haute) :
 | 12 | `projects/interv360/README.md` + synthèse | Lecteur projet | Page hub Interv360 |
 | 13 | `projects/interv360/06-audit-rex/current-application-audit.md` | Lecteur projet | Synthèse audit |
 | 14 | `projects/interv360/08-presentation/interv360-demo-one-page-summary.md` | Lecteur externe | Showcase |
-| 15 | `method/sfia-fast-track/audit-rex/interv360-application-rex.md` | Lecteur projet | REX éditorialisé |
+| 15 | `method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md` | Lecteur projet | REX éditorialisé |
 | 16 | `docs/architecture/sfia-delivery-pipeline.md` | Contributeur SFIA | Éditorialiser |
 | 17 | `docs/architecture/sfia-platform-architecture.md` | Contributeur SFIA | Éditorialiser |
 | 18 | `method/sfia-fast-track/documentation/archive/notion/notion-target-content-map.md` | Morris / mainteneur | Actualiser SFIA — input cycle 2 |
diff --git a/method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md b/method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md
index 372d39a..0406882 100644
--- a/method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md
+++ b/method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md
@@ -7,10 +7,10 @@ scope: Notion target model, databases, mapping and integration plan
 
 # SFIA Notion Target Model and Integration Plan
 
-**Version :** v1.1  
-**Statut :** Candidate  
-**Cycle :** Préparation Notion — Cycle 2 (modèle cible + plan d'intégration)  
-**Branche :** `notion/sfia-target-model-integration-plan`  
+**Version :** v1.1
+**Statut :** Candidate
+**Cycle :** Préparation Notion — Cycle 2 (modèle cible + plan d'intégration)
+**Branche :** `notion/sfia-target-model-integration-plan`
 **Base :** `main` @ `72c87c0` (post PR #85)
 
 ## 1. Objectif
@@ -135,7 +135,7 @@ Page d'entrée unique. Répond à :
 | Page Notion | Source repo | Traitement |
 |-------------|-------------|------------|
 | Engineering Principles | `docs/foundation/sfia-engineering-principles.md` | PAGE — légère éditorialisation |
-| Decision Engine | `docs/architecture/sfia-decision-engine.md` | PAGE |
+| Decision Engine | `docs/architecture/2026-06-27-sfia-decision-engine.md` | PAGE |
 | Delivery Pipeline | `docs/architecture/sfia-delivery-pipeline.md` | EDITORIALISER — simplifier Git |
 | Platform Architecture | `docs/architecture/sfia-platform-architecture.md` | EDITORIALISER |
 | Repository Blueprint | `docs/architecture/sfia-repository-blueprint.md` | EDITORIALISER — schéma visuel |
@@ -192,7 +192,7 @@ Page d'entrée unique. Répond à :
 | Pages synthèse | 4–6 max : cadrage, architecture, audit, REX, demo, release |
 | Base ADR | 8 ADR actifs + 1 candidate |
 | Base Roadmap / décisions | `09-roadmap/` |
-| REX capitalisé | `interv360-application-rex.md` — éditorialisé |
+| REX capitalisé | `2026-07-03-interv360-application-rex.md` — éditorialisé |
 | Futurs projets | Entrées base Projets |
 
 ### 4.8 Archives / Références repo
diff --git a/method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md b/method/sfia-fast-track/documentation/workspace-audit/2026-07-03-operational-cleanup-report.md
similarity index 100%
rename from method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md
rename to method/sfia-fast-track/documentation/workspace-audit/2026-07-03-operational-cleanup-report.md
diff --git a/method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md b/method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/2026-07-03-sfa-workspace-final-architecture-audit.md
similarity index 98%
rename from method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md
rename to method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/2026-07-03-sfa-workspace-final-architecture-audit.md
index 9751fc1..b83b0e7 100644
--- a/method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md
+++ b/method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/2026-07-03-sfa-workspace-final-architecture-audit.md
@@ -1,8 +1,8 @@
 # SFA Workspace — Final Architecture Audit
 
-**Date** : 2026-07-03  
-**Branche** : `consolidation/sfia-method-improvements`  
-**Commit de référence** : `2cec1d8` — `docs: clarify sfia method and practice structure`  
+**Date** : 2026-07-03
+**Branche** : `consolidation/sfia-method-improvements`
+**Commit de référence** : `2cec1d8` — `docs: clarify sfia method and practice structure`
 **Mode** : Final SFA Workspace Architecture Audit (lecture seule — aucun déplacement)
 
 ---
@@ -193,7 +193,7 @@ Les réserves identifiées sont **mineures** : README manquants sur quelques pha
 | Élément | Diagnostic |
 |---------|------------|
 | `docs/practices/methods-structure-check.md` §2 | Arborescence cible affiche encore `docs/methods/` — document de contrôle daté 2026-06-28, partiellement mis à jour |
-| `docs/practices/process/bpmn-method-integration-audit.md` | Recommandations mentionnent `methods/process/` — à actualiser vers `docs/practices/process/` |
+| `docs/practices/process/2026-06-28-bpmn-method-integration-audit.md` | Recommandations mentionnent `methods/process/` — à actualiser vers `docs/practices/process/` |
 | `method/sfia-fast-track/documentation/documentation-audit.md` | Références `methods/controlled-delivery/`, `docs/methods/` — audit pré-Round 3 |
 | `method/sfia-fast-track/documentation/documentation-structure-target.md` | Idem — cible historique |
 | `exports/notion/README.md` | Ne cite pas `docs/practices/` dans la liste des sources actives |
diff --git a/method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-audit.md b/method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-audit.md
index e42c5cc..c22d0bf 100644
--- a/method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-audit.md
+++ b/method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-audit.md
@@ -82,7 +82,7 @@ Après archivage Notion/Figma v1, **31 fichiers Markdown** subsistent à la raci
 | `adr/` (9 ADR) | Décisions architecture MVP | **Actif** | Conserver |
 | `status-mapping.md`, `status-mapping-summary.md` | Mapping statuts métier | **Actif** | Conserver |
 | `geo-ai-arbitration.md`, `rules-rg-prioritization.md` | Arbitrages métier structurants | **Actif** | Conserver |
-| `mvp-clarifications.md`, `closure-without-signature.md` | Clarifications MVP / règles clôture | **Actif** (référence cadrage) | Conserver ou `01-cadrage/` si relecture |
+| `mvp-clarifications.md`, `2026-06-28-closure-without-signature.md` | Clarifications MVP / règles clôture | **Actif** (référence cadrage) | Conserver ou `01-cadrage/` si relecture |
 | `notion-publication-tooling-check.md` | Diagnostic outillage Notion (2026-06-27), sans publication | **Log / historique** | `archive/notion-sync/` |
 | `merge-closure-prompt-library-sync.md` | Clôture PR #1 Prompt Library | **Log / historique** | `archive/cmp/` ou `archive/notion-sync/` |
 | `prompt-catalog-enrichment-after-ux-ui-v1-standard.md` | Log enrichissement catalogue | **Log** | `archive/cmp/` |
@@ -110,7 +110,7 @@ Après archivage Notion/Figma v1, **31 fichiers Markdown** subsistent à la raci
 | `docs/adr/` | README seul | Stub ADR plateforme | Conserver |
 | `docs/roadmaps/` | `cmp-technical-roadmap.md` | Roadmap outillage CMP — **actif** | Conserver ; lier à `tools/cmp-001/` via README |
 | `docs/tooling/penpot/` | 5 docs actifs | Méthode/outillage design Penpot | Conserver |
-| `docs/workspace-readiness-report.md` | Rapport readiness **2026-06-27** pré-Interv360 | **Historique** | `docs/archive/` |
+| `docs/2026-06-27-workspace-readiness-report.md` | Rapport readiness **2026-06-27** pré-Interv360 | **Historique** | `docs/archive/` |
 | `docs/methods/` | 44 fichiers méthodes rôles/process/arch/ux | **Actif plateforme** | Conserver ; ne pas fusionner avec `method/` |
 | `docs/templates/` | 12 templates BPMN/arch/ux | **Actif plateforme** | Conserver ; distinguer des templates Fast Track |
 
@@ -199,7 +199,7 @@ sfia-workspace/
 - [ ] Conserver `methods/` comme **méthodes complémentaires** (Controlled Delivery)
 - [ ] Conserver `docs/methods/` comme **méthodes plateforme SFIA** — ne pas déplacer vers `methods/`
 - [ ] Créer `docs/SFIA-CONTENT-MAP.md` ou enrichir README racine expliquant les 4 couches
-- [ ] Archiver `docs/workspace-readiness-report.md` et mettre à jour `docs/methods/methods-structure-check.md`
+- [ ] Archiver `docs/2026-06-27-workspace-readiness-report.md` et mettre à jour `docs/methods/methods-structure-check.md`
 - [ ] Corriger `README.md` racine (supprimer références `templates/` et `standards/` racine inexistants)
 
 ### Interv360
diff --git a/method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-plan.md b/method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-plan.md
index 0fcecc7..fa4937c 100644
--- a/method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-plan.md
+++ b/method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-plan.md
@@ -52,7 +52,7 @@ Référence audit : `sfia-workspace-cleanup-round-2-audit.md`
 
 | Sujet | Décision proposée |
 |-------|-------------------|
-| `docs/workspace-readiness-report.md` | Archiver → `docs/archive/workspace-readiness-report.md` |
+| `docs/2026-06-27-workspace-readiness-report.md` | Archiver → `docs/archive/2026-06-27-workspace-readiness-report.md` |
 | `docs/methods/methods-structure-check.md` | Mettre à jour ou archiver (cible obsolète) |
 | `docs/foundation/` + `docs/architecture/` | Conserver ; option future `docs/platform/` |
 | `docs/knowledge/`, `docs/rex/`, `docs/adr/` | Conserver stubs ; enrichir README |
@@ -110,7 +110,7 @@ Référence audit : `sfia-workspace-cleanup-round-2-audit.md`
 
 | Actuel | Cible | Action |
 |--------|-------|--------|
-| `docs/workspace-readiness-report.md` | `docs/archive/workspace-readiness-report.md` | Archiver |
+| `docs/2026-06-27-workspace-readiness-report.md` | `docs/archive/2026-06-27-workspace-readiness-report.md` | Archiver |
 | `docs/methods/methods-structure-check.md` | Mettre à jour | Corriger cible arborescence |
 | `docs/README.md` | idem | Lien vers content map + Fast Track |
 
@@ -137,7 +137,7 @@ Corriger grep résiduel :
 
 - Inventaires `round-2/post-cleanup-*` après exécution ;
 - Rapport `operational-cleanup-round-2-report.md` ;
-- Mise à jour `operational-cleanup-report.md`.
+- Mise à jour `2026-07-03-operational-cleanup-report.md`.
 
 ## 5. Zones interdites
 
diff --git a/method/sfia-fast-track/templates/audit-template.md b/method/sfia-fast-track/templates/2026-07-03-audit-template.md
similarity index 100%
rename from method/sfia-fast-track/templates/audit-template.md
rename to method/sfia-fast-track/templates/2026-07-03-audit-template.md
diff --git a/method/sfia-fast-track/templates/rex-template.md b/method/sfia-fast-track/templates/2026-07-03-rex-template.md
similarity index 100%
rename from method/sfia-fast-track/templates/rex-template.md
rename to method/sfia-fast-track/templates/2026-07-03-rex-template.md
diff --git a/projects/chantiers360-v2/README.md b/projects/chantiers360-v2/README.md
index 0ebd42b..0c0ad99 100644
--- a/projects/chantiers360-v2/README.md
+++ b/projects/chantiers360-v2/README.md
@@ -1,23 +1,23 @@
 # Chantiers360 v2
 
-**Projet :** Chantiers360 v2 — premier pilote SFIA v2.0  
-**Chemin :** `projects/chantiers360-v2/`  
-**Statut :** **MVP CAPITALIZED WITH RESERVES** — INC-01 à INC-05 clôturés — décisions post-MVP séparées  
-**Bootstrap :** mergé via PR #95 (`c3ca02d`)  
-**Cadrage détaillé :** mergé via PR #96 (`e90e824`)  
-**Architecture fonctionnelle :** mergée via PR #97 (`4a5b2fa`)  
-**UX/UI :** mergée via PR #98 (`1d9feb9`)  
-**Backlog MVP :** mergé via PR #99 (`93d6810`)  
-**Méthode Design Figma :** standard mergé via PR #100 (`7ee45bb`)  
-**Design Figma P1 :** mergé via PR #101 (`7e37b58`)  
-**Architecture technique légère :** mergée via PR #102 (`57308aa`) — arbitrages Morris documentés  
-**Cycle courant :** Comparaison V0 vs SFIA v2 bouclée (PR #136) — décision suivante séparée — SFIA v2.3.1 baseline opérationnelle — v2.4 / v3.0 non lancés  
-**QA INC-05 :** `08-qa-test/inc-05/` — clôture `inc-05-closure-report.md`  
-**QA INC-03 :** `08-qa-test/inc-03/` — clôture `inc-03-closure-report.md`  
-**QA INC-02 :** `08-qa-test/inc-02/` — clôture `inc-02-closure-report.md`  
-**Capitalisation INC-01 :** `09-capitalization/inc-01-capitalization-report.md`  
-**Capitalisation MVP :** `09-capitalization/mvp-capitalization-report.md`  
-**Comparaison V0 vs SFIA v2 :** ✅ mergée PR #136 — `09-capitalization/v0-vs-sfia-v2-methodological-comparison.md` — verdict : V2 NEEDS LIGHT CONSOLIDATION  
+**Projet :** Chantiers360 v2 — premier pilote SFIA v2.0
+**Chemin :** `projects/chantiers360-v2/`
+**Statut :** **MVP CAPITALIZED WITH RESERVES** — INC-01 à INC-05 clôturés — décisions post-MVP séparées
+**Bootstrap :** mergé via PR #95 (`c3ca02d`)
+**Cadrage détaillé :** mergé via PR #96 (`e90e824`)
+**Architecture fonctionnelle :** mergée via PR #97 (`4a5b2fa`)
+**UX/UI :** mergée via PR #98 (`1d9feb9`)
+**Backlog MVP :** mergé via PR #99 (`93d6810`)
+**Méthode Design Figma :** standard mergé via PR #100 (`7ee45bb`)
+**Design Figma P1 :** mergé via PR #101 (`7e37b58`)
+**Architecture technique légère :** mergée via PR #102 (`57308aa`) — arbitrages Morris documentés
+**Cycle courant :** Comparaison V0 vs SFIA v2 bouclée (PR #136) — décision suivante séparée — SFIA v2.3.1 baseline opérationnelle — v2.4 / v3.0 non lancés
+**QA INC-05 :** `08-qa-test/inc-05/` — clôture `inc-05-closure-report.md`
+**QA INC-03 :** `08-qa-test/inc-03/` — clôture `inc-03-closure-report.md`
+**QA INC-02 :** `08-qa-test/inc-02/` — clôture `inc-02-closure-report.md`
+**Capitalisation INC-01 :** `09-capitalization/inc-01-capitalization-report.md`
+**Capitalisation MVP :** `09-capitalization/mvp-capitalization-report.md`
+**Comparaison V0 vs SFIA v2 :** ✅ mergée PR #136 — `09-capitalization/v0-vs-sfia-v2-methodological-comparison.md` — verdict : V2 NEEDS LIGHT CONSOLIDATION
 **Méthode :** SFIA v1.1 (baseline) + SFIA v2.0 (delivery progressif)
 
 ## 1. Purpose
@@ -240,5 +240,5 @@ Ils relèvent d'un domaine métier plus large que le suivi opérationnel chantie
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md`
-- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md`
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md`
diff --git a/projects/interv360/02-architecture/closure-without-signature-summary.md b/projects/interv360/02-architecture/2026-06-28-closure-without-signature-summary.md
similarity index 87%
rename from projects/interv360/02-architecture/closure-without-signature-summary.md
rename to projects/interv360/02-architecture/2026-06-28-closure-without-signature-summary.md
index c23acae..48a765e 100644
--- a/projects/interv360/02-architecture/closure-without-signature-summary.md
+++ b/projects/interv360/02-architecture/2026-06-28-closure-without-signature-summary.md
@@ -1,10 +1,10 @@
 # Interv360 — Synthèse clôture sans signature
 
-**Projet** : PRJ-INTERV360  
-**Document source** : `closure-without-signature.md`  
-**Type** : Synthèse gouvernance  
-**Branche** : `analysis/interv360-clarification-cycle`  
-**Règles liées** : RG-R02, RG-R05  
+**Projet** : PRJ-INTERV360
+**Document source** : `closure-without-signature.md`
+**Type** : Synthèse gouvernance
+**Branche** : `analysis/interv360-clarification-cycle`
+**Règles liées** : RG-R02, RG-R05
 **Statut lié** : STAT-06 — Clôturée
 
 ---
diff --git a/projects/interv360/02-architecture/closure-without-signature.md b/projects/interv360/02-architecture/2026-06-28-closure-without-signature.md
similarity index 98%
rename from projects/interv360/02-architecture/closure-without-signature.md
rename to projects/interv360/02-architecture/2026-06-28-closure-without-signature.md
index 11eca44..ab4709c 100644
--- a/projects/interv360/02-architecture/closure-without-signature.md
+++ b/projects/interv360/02-architecture/2026-06-28-closure-without-signature.md
@@ -1,11 +1,11 @@
 # Interv360 — Clôture sans signature client
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Type** : Règle fonctionnelle MVP — clôture intervention  
-**Statut** : Draft — clarification issue du cycle de clarification  
-**Règles liées** : RG-R02, RG-R05  
-**Statut lié** : STAT-06 — Clôturée  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Type** : Règle fonctionnelle MVP — clôture intervention
+**Statut** : Draft — clarification issue du cycle de clarification
+**Règles liées** : RG-R02, RG-R05
+**Statut lié** : STAT-06 — Clôturée
 **Source principale** : `rules-rg-prioritization.md`
 
 ---
diff --git a/projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md b/projects/interv360/02-architecture/adr/adr-001-api-contracts-simulated-implementation.md
similarity index 98%
rename from projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md
rename to projects/interv360/02-architecture/adr/adr-001-api-contracts-simulated-implementation.md
index a96732d..7369e8f 100644
--- a/projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md
+++ b/projects/interv360/02-architecture/adr/adr-001-api-contracts-simulated-implementation.md
@@ -1,11 +1,11 @@
 # ADR-001 — Contrats API documentés avec implémentation simulée
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Statut** : Accepted  
-**Source candidate** : ADR-CAND-001  
-**Rôles principaux** : Architecte, Product Owner  
-**Rôles contributeurs** : QA / Testeur, Chef de projet, RSSI  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Statut** : Accepted
+**Source candidate** : ADR-CAND-001
+**Rôles principaux** : Architecte, Product Owner
+**Rôles contributeurs** : QA / Testeur, Chef de projet, RSSI
 **Type** : Architecture Decision Record
 
 ---
diff --git a/projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md b/projects/interv360/02-architecture/adr/adr-002-visible-integration-errors-manual-recovery.md
similarity index 98%
rename from projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md
rename to projects/interv360/02-architecture/adr/adr-002-visible-integration-errors-manual-recovery.md
index 581cd17..5ee51c6 100644
--- a/projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md
+++ b/projects/interv360/02-architecture/adr/adr-002-visible-integration-errors-manual-recovery.md
@@ -1,12 +1,12 @@
 # ADR-002 — Gestion visible des erreurs d'intégration avec reprise manuelle
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Statut** : Accepted  
-**Source candidate** : ADR-CAND-002  
-**ADR liée** : ADR-001  
-**Rôles principaux** : Architecte, QA / Testeur  
-**Rôles contributeurs** : Product Owner, UX/UI Designer, Chef de projet, RSSI  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Statut** : Accepted
+**Source candidate** : ADR-CAND-002
+**ADR liée** : ADR-001
+**Rôles principaux** : Architecte, QA / Testeur
+**Rôles contributeurs** : Product Owner, UX/UI Designer, Chef de projet, RSSI
 **Type** : Architecture Decision Record
 
 ---
diff --git a/projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md b/projects/interv360/02-architecture/adr/adr-003-secure-email-secondary-channel.md
similarity index 98%
rename from projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md
rename to projects/interv360/02-architecture/adr/adr-003-secure-email-secondary-channel.md
index f08a120..c8564cf 100644
--- a/projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md
+++ b/projects/interv360/02-architecture/adr/adr-003-secure-email-secondary-channel.md
@@ -1,12 +1,12 @@
 # ADR-003 — Canal email sécurisé non principal
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Statut** : Accepted  
-**Source candidate** : ADR-CAND-003  
-**ADR liées** : ADR-001, ADR-002  
-**Rôles principaux** : RSSI, Architecte  
-**Rôles contributeurs** : Product Owner, Business Analyst, QA / Testeur, Chef de projet  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Statut** : Accepted
+**Source candidate** : ADR-CAND-003
+**ADR liées** : ADR-001, ADR-002
+**Rôles principaux** : RSSI, Architecte
+**Rôles contributeurs** : Product Owner, Business Analyst, QA / Testeur, Chef de projet
 **Type** : Architecture Decision Record
 
 ---
diff --git a/projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md b/projects/interv360/02-architecture/adr/adr-004-minimal-flow-rejection-logging.md
similarity index 98%
rename from projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md
rename to projects/interv360/02-architecture/adr/adr-004-minimal-flow-rejection-logging.md
index d0db2c1..d6ad3a4 100644
--- a/projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md
+++ b/projects/interv360/02-architecture/adr/adr-004-minimal-flow-rejection-logging.md
@@ -1,12 +1,12 @@
 # ADR-004 — Journalisation minimale des flux et rejets
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Statut** : Accepted  
-**Source candidate** : ADR-CAND-004  
-**ADR liées** : ADR-001, ADR-002, ADR-003  
-**Rôles principaux** : Architecte, RSSI  
-**Rôles contributeurs** : QA / Testeur, Product Owner, UX/UI Designer, Chef de projet  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Statut** : Accepted
+**Source candidate** : ADR-CAND-004
+**ADR liées** : ADR-001, ADR-002, ADR-003
+**Rôles principaux** : Architecte, RSSI
+**Rôles contributeurs** : QA / Testeur, Product Owner, UX/UI Designer, Chef de projet
 **Type** : Architecture Decision Record
 
 ---
diff --git a/projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md b/projects/interv360/02-architecture/adr/adr-005-fictive-retention-photos-signatures-logs.md
similarity index 98%
rename from projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md
rename to projects/interv360/02-architecture/adr/adr-005-fictive-retention-photos-signatures-logs.md
index 9bd65d0..7af8a87 100644
--- a/projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md
+++ b/projects/interv360/02-architecture/adr/adr-005-fictive-retention-photos-signatures-logs.md
@@ -1,13 +1,13 @@
 # ADR-005 — Conservation fictive photos, signatures et logs
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Bloc** : ADR P2 — impacts design / MVP  
-**Statut** : Accepted  
-**Source candidate** : ADR-CAND-005  
-**ADR liées** : ADR-002, ADR-003, ADR-004  
-**Rôles principaux** : RSSI, Product Owner, UX/UI Designer  
-**Rôles contributeurs** : Architecte, QA / Testeur, Chef de projet  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Bloc** : ADR P2 — impacts design / MVP
+**Statut** : Accepted
+**Source candidate** : ADR-CAND-005
+**ADR liées** : ADR-002, ADR-003, ADR-004
+**Rôles principaux** : RSSI, Product Owner, UX/UI Designer
+**Rôles contributeurs** : Architecte, QA / Testeur, Chef de projet
 **Type** : Architecture Decision Record
 
 ---
diff --git a/projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md b/projects/interv360/02-architecture/adr/adr-006-client-notifications-without-client-portal.md
similarity index 98%
rename from projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md
rename to projects/interv360/02-architecture/adr/adr-006-client-notifications-without-client-portal.md
index b8590ab..6fbbe7c 100644
--- a/projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md
+++ b/projects/interv360/02-architecture/adr/adr-006-client-notifications-without-client-portal.md
@@ -1,13 +1,13 @@
 # ADR-006 — Notifications client sans portail client
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Bloc** : ADR P2 — impacts design / MVP  
-**Statut** : Accepted  
-**Source candidate** : ADR-CAND-006  
-**ADR liées** : ADR-001, ADR-002, ADR-004, ADR-005  
-**Rôles principaux** : Product Owner, UX/UI Designer, Architecte  
-**Rôles contributeurs** : RSSI, QA / Testeur, Chef de projet  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Bloc** : ADR P2 — impacts design / MVP
+**Statut** : Accepted
+**Source candidate** : ADR-CAND-006
+**ADR liées** : ADR-001, ADR-002, ADR-004, ADR-005
+**Rôles principaux** : Product Owner, UX/UI Designer, Architecte
+**Rôles contributeurs** : RSSI, QA / Testeur, Chef de projet
 **Type** : Architecture Decision Record
 
 ---
diff --git a/projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md b/projects/interv360/02-architecture/adr/adr-007-optional-structured-client-signature.md
similarity index 98%
rename from projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md
rename to projects/interv360/02-architecture/adr/adr-007-optional-structured-client-signature.md
index 4ca400e..9af4360 100644
--- a/projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md
+++ b/projects/interv360/02-architecture/adr/adr-007-optional-structured-client-signature.md
@@ -1,13 +1,13 @@
 # ADR-007 — Signature client optionnelle structurée
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Bloc** : ADR P2 — impacts design / MVP  
-**Statut** : Accepted  
-**Source candidate** : ADR-CAND-007  
-**ADR liées** : ADR-005, ADR-006, ADR-004  
-**Rôles principaux** : Product Owner, UX/UI Designer, RSSI  
-**Rôles contributeurs** : Architecte, QA / Testeur, Chef de projet  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Bloc** : ADR P2 — impacts design / MVP
+**Statut** : Accepted
+**Source candidate** : ADR-CAND-007
+**ADR liées** : ADR-005, ADR-006, ADR-004
+**Rôles principaux** : Product Owner, UX/UI Designer, RSSI
+**Rôles contributeurs** : Architecte, QA / Testeur, Chef de projet
 **Type** : Architecture Decision Record
 
 ---
diff --git a/projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md b/projects/interv360/02-architecture/adr/adr-008-separated-sav-dashboard-and-executive-view.md
similarity index 98%
rename from projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md
rename to projects/interv360/02-architecture/adr/adr-008-separated-sav-dashboard-and-executive-view.md
index e53d6b3..4de993a 100644
--- a/projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md
+++ b/projects/interv360/02-architecture/adr/adr-008-separated-sav-dashboard-and-executive-view.md
@@ -1,13 +1,13 @@
 # ADR-008 — Dashboard SAV et vue dirigeant séparés
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Bloc** : ADR P2 — impacts design / MVP  
-**Statut** : Accepted  
-**Source candidate** : ADR-CAND-008  
-**ADR liées** : ADR-002, ADR-004, ADR-005, ADR-006, ADR-007  
-**Rôles principaux** : Product Owner, UX/UI Designer  
-**Rôles contributeurs** : Architecte, QA / Testeur, Chef de projet  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Bloc** : ADR P2 — impacts design / MVP
+**Statut** : Accepted
+**Source candidate** : ADR-CAND-008
+**ADR liées** : ADR-002, ADR-004, ADR-005, ADR-006, ADR-007
+**Rôles principaux** : Product Owner, UX/UI Designer
+**Rôles contributeurs** : Architecte, QA / Testeur, Chef de projet
 **Type** : Architecture Decision Record
 
 ---
diff --git a/projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md b/projects/interv360/02-architecture/adr/adr-cand-009-ai-light-post-mvp-confirmation.md
similarity index 97%
rename from projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md
rename to projects/interv360/02-architecture/adr/adr-cand-009-ai-light-post-mvp-confirmation.md
index 09e3206..9f1824b 100644
--- a/projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md
+++ b/projects/interv360/02-architecture/adr/adr-cand-009-ai-light-post-mvp-confirmation.md
@@ -1,13 +1,13 @@
 # ADR-CAND-009 — Confirmation report IA légère post-MVP
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Bloc** : ADR P2 — impacts design / MVP  
-**Statut** : Confirmed — Post-MVP  
-**Source candidate** : ADR-CAND-009  
-**Décision** : pas d'ADR MVP formelle à ce stade  
-**Rôles principaux** : Product Owner, UX/UI Designer, Architecte  
-**Rôles contributeurs** : Chef de projet, QA / Testeur  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Bloc** : ADR P2 — impacts design / MVP
+**Statut** : Confirmed — Post-MVP
+**Source candidate** : ADR-CAND-009
+**Décision** : pas d'ADR MVP formelle à ce stade
+**Rôles principaux** : Product Owner, UX/UI Designer, Architecte
+**Rôles contributeurs** : Chef de projet, QA / Testeur
 **Type** : Confirmation de décision hors MVP
 
 ---
diff --git a/projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json b/projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json
index aef74d8..996e8f9 100644
--- a/projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json
+++ b/projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json
@@ -19,25 +19,25 @@
       "id": "ADR-001",
       "title": "Contrats API documentés avec implémentation simulée",
       "status": "Accepted",
-      "source": "projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md"
+      "source": "projects/interv360/02-architecture/adr/adr-001-api-contracts-simulated-implementation.md"
     },
     {
       "id": "ADR-002",
       "title": "Gestion visible des erreurs avec reprise manuelle",
       "status": "Accepted",
-      "source": "projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md"
+      "source": "projects/interv360/02-architecture/adr/adr-002-visible-integration-errors-manual-recovery.md"
     },
     {
       "id": "ADR-003",
       "title": "Canal email sécurisé non principal",
       "status": "Accepted",
-      "source": "projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md"
+      "source": "projects/interv360/02-architecture/adr/adr-003-secure-email-secondary-channel.md"
     },
     {
       "id": "ADR-004",
       "title": "Journalisation minimale des flux et rejets",
       "status": "Accepted",
-      "source": "projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md"
+      "source": "projects/interv360/02-architecture/adr/adr-004-minimal-flow-rejection-logging.md"
     }
   ],
   "role_methods": {
@@ -56,13 +56,13 @@
       "id": "PROMPT-ARCH-001",
       "title": "Revue intégrations et erreurs",
       "status": "Draft",
-      "source": "prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md"
+      "source": "prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md"
     },
     {
       "id": "PROMPT-SEC-001",
       "title": "Revue canal email sécurisé",
       "status": "Draft",
-      "source": "prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md"
+      "source": "prompts/security/prompt-sec-001-revue-canal-email-securise.md"
     }
   ],
   "out_of_scope": [
diff --git a/projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json b/projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json
index e8e9249..68e8910 100644
--- a/projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json
+++ b/projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json
@@ -19,31 +19,31 @@
       "id": "ADR-005",
       "title": "Conservation fictive photos, signatures et logs",
       "status": "Accepted",
-      "source": "projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md"
+      "source": "projects/interv360/02-architecture/adr/adr-005-fictive-retention-photos-signatures-logs.md"
     },
     {
       "id": "ADR-006",
       "title": "Notifications client sans portail client",
       "status": "Accepted",
-      "source": "projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md"
+      "source": "projects/interv360/02-architecture/adr/adr-006-client-notifications-without-client-portal.md"
     },
     {
       "id": "ADR-007",
       "title": "Signature client optionnelle structurée",
       "status": "Accepted",
-      "source": "projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md"
+      "source": "projects/interv360/02-architecture/adr/adr-007-optional-structured-client-signature.md"
     },
     {
       "id": "ADR-008",
       "title": "Dashboard SAV et vue dirigeant séparés",
       "status": "Accepted",
-      "source": "projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md"
+      "source": "projects/interv360/02-architecture/adr/adr-008-separated-sav-dashboard-and-executive-view.md"
     },
     {
       "id": "ADR-CAND-009",
       "title": "IA légère reportée post-MVP",
       "status": "Confirmed - Post-MVP",
-      "source": "projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md"
+      "source": "projects/interv360/02-architecture/adr/adr-cand-009-ai-light-post-mvp-confirmation.md"
     }
   ],
   "summaries": [
diff --git a/projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json b/projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json
index b71ac2c..ee778e6 100644
--- a/projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json
+++ b/projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json
@@ -21,7 +21,7 @@
       "status": "Active",
       "type": "Connector",
       "criticality": "High",
-      "currentVersion": "ID: SFIA-COMP-CMP-001 | CMP-001 | Version: v1.1.2 | Statut: Active | Catégorie: SFIA Components | Domaine: Knowledge Platform\n\nRésumé:\nComposant d'outillage SFIA assurant la synchronisation contrôlée entre Git et Notion. Roadmap post Prompt Library 39/39 : update prompt, batch, export fiable, contrôle doublons et procédure standard.\n\n## Contexte\n\n- Synchronisation initiale SFIA Prompt Library terminée : 39/39 prompts publiés dans Notion.\n- PR #1 mergée dans main ; clôture documentée.\n- Git reste la source détaillée ; Notion porte la synthèse et la gouvernance des composants.\n\n## Rôle du composant\n\n- Connecteur officiel CMP-001 entre Git (sfia-workspace / sfia-notion-sync) et Notion.\n- Création contrôlée d'objets SFIA (prompt, component, project, etc.).\n- Validation JSON par schémas CMP.\n- Export bases Notion (exports/notion/).\n\n## État actuel\n\n- create prompt opérationnel — 39 prompts publiés (Lots 0 à final).\n- update project et update knowledge supportés pour certains types.\n- update prompt et batch non supportés.\n- Export prompts.json obsolète pendant les publications initiales.\n- Contrôle doublons manuel via grep export.\n\n## Roadmap technique (post Prompt Library)\n\n| ID | Sujet | Priorité | Statut |\n|----|-------|----------|--------|\n| CMP-ROADMAP-001 | Ajouter update prompt | Haute | À cadrer |\n| CMP-ROADMAP-002 | Ajouter un mode batch | Haute | À cadrer |\n| CMP-ROADMAP-003 | Formaliser prompts Draft sous prompts/<famille>/ | Moyenne | À planifier |\n| CMP-ROADMAP-004 | Passage Draft → Tested | Moyenne | À cadrer |\n| CMP-ROADMAP-005 | Fiabiliser export Notion | Haute | À cadrer |\n| CMP-ROADMAP-006 | Contrôle doublons renforcé | Haute | À cadrer |\n| CMP-ROADMAP-007 | Procédure standard publication Prompt Library | Moyenne | À documenter |\n| CMP-ROADMAP-008 | Clôture semi-automatique des lots | Basse | À étudier |\n\n## Priorités immédiates\n\n1. update prompt (CMP-ROADMAP-001)\n2. batch (CMP-ROADMAP-002)\n3. export Notion fiable (CMP-ROADMAP-005)\n4. contrôle doublons (CMP-ROADMAP-006)\n\n## Garde-fous\n\n- Pas de publication Notion automatique.\n- Pas de secret affiché.\n- Pas de delivery, backlog, user stories ou code applicatif via cette roadmap.\n- Git reste source détaillée.\n\n## Sources Git\n\n- docs/roadmaps/cmp-technical-roadmap.md\n- projects/interv360/02-architecture/notion-sync-prompt-library-closure-summary.md\n- projects/interv360/02-architecture/merge-closure-prompt-library-sync.md\n- tools/cmp-001/README.md\n- tools/cmp-001/ROADMAP.md\n\n## Prochaine étape\n\nRevue manuelle du payload SFIA Components, arbitrage doublon CMP-001 existant, puis synchronisation Notion dédiée."
+      "currentVersion": "ID: SFIA-COMP-CMP-001 | CMP-001 | Version: v1.1.2 | Statut: Active | Catégorie: SFIA Components | Domaine: Knowledge Platform\n\nRésumé:\nComposant d'outillage SFIA assurant la synchronisation contrôlée entre Git et Notion. Roadmap post Prompt Library 39/39 : update prompt, batch, export fiable, contrôle doublons et procédure standard.\n\n## Contexte\n\n- Synchronisation initiale SFIA Prompt Library terminée : 39/39 prompts publiés dans Notion.\n- PR #1 mergée dans main ; clôture documentée.\n- Git reste la source détaillée ; Notion porte la synthèse et la gouvernance des composants.\n\n## Rôle du composant\n\n- Connecteur officiel CMP-001 entre Git (sfia-workspace / sfia-notion-sync) et Notion.\n- Création contrôlée d'objets SFIA (prompt, component, project, etc.).\n- Validation JSON par schémas CMP.\n- Export bases Notion (exports/notion/).\n\n## État actuel\n\n- create prompt opérationnel — 39 prompts publiés (Lots 0 à final).\n- update project et update knowledge supportés pour certains types.\n- update prompt et batch non supportés.\n- Export prompts.json obsolète pendant les publications initiales.\n- Contrôle doublons manuel via grep export.\n\n## Roadmap technique (post Prompt Library)\n\n| ID | Sujet | Priorité | Statut |\n|----|-------|----------|--------|\n| CMP-ROADMAP-001 | Ajouter update prompt | Haute | À cadrer |\n| CMP-ROADMAP-002 | Ajouter un mode batch | Haute | À cadrer |\n| CMP-ROADMAP-003 | Formaliser prompts Draft sous prompts/<famille>/ | Moyenne | À planifier |\n| CMP-ROADMAP-004 | Passage Draft → Tested | Moyenne | À cadrer |\n| CMP-ROADMAP-005 | Fiabiliser export Notion | Haute | À cadrer |\n| CMP-ROADMAP-006 | Contrôle doublons renforcé | Haute | À cadrer |\n| CMP-ROADMAP-007 | Procédure standard publication Prompt Library | Moyenne | À documenter |\n| CMP-ROADMAP-008 | Clôture semi-automatique des lots | Basse | À étudier |\n\n## Priorités immédiates\n\n1. update prompt (CMP-ROADMAP-001)\n2. batch (CMP-ROADMAP-002)\n3. export Notion fiable (CMP-ROADMAP-005)\n4. contrôle doublons (CMP-ROADMAP-006)\n\n## Garde-fous\n\n- Pas de publication Notion automatique.\n- Pas de secret affiché.\n- Pas de delivery, backlog, user stories ou code applicatif via cette roadmap.\n- Git reste source détaillée.\n\n## Sources Git\n\n- docs/roadmaps/cmp-technical-roadmap.md\n- projects/interv360/02-architecture/notion-sync-prompt-library-closure-summary.md\n- projects/interv360/02-architecture/merge-closure-prompt-library-sync.md\n- tools/cmp-001/README.md\n- tools/cmp-001/roadmap.md\n\n## Prochaine étape\n\nRevue manuelle du payload SFIA Components, arbitrage doublon CMP-001 existant, puis synchronisation Notion dédiée."
     },
     {
       "title": "CMP-ROADMAP-001 — Ajouter update prompt",
diff --git a/projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.json b/projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.json
index 4e92127..90a19d4 100644
--- a/projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.json
+++ b/projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.json
@@ -130,7 +130,7 @@
       "id": "PROMPT-ARCH-001",
       "name": "Revue intégrations et erreurs",
       "family": "Architecture",
-      "source_file": "prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md",
+      "source_file": "prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md",
       "method_path": "docs/methods/roles/architect-method.md",
       "catalog_status": "Draft",
       "desired_category": "Architecture",
@@ -142,7 +142,7 @@
       "id": "PROMPT-SEC-001",
       "name": "Revue canal email sécurisé",
       "family": "Sécurité / RSSI",
-      "source_file": "prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md",
+      "source_file": "prompts/security/prompt-sec-001-revue-canal-email-securise.md",
       "method_path": "docs/methods/roles/rssi-method.md",
       "catalog_status": "Draft",
       "desired_category": "Sécurité",
diff --git a/projects/interv360/02-architecture/notion-sync-figma-v1-closure-payload.json b/projects/interv360/02-architecture/notion-sync-figma-v1-closure-payload.json
index 0647217..598d27f 100644
--- a/projects/interv360/02-architecture/notion-sync-figma-v1-closure-payload.json
+++ b/projects/interv360/02-architecture/notion-sync-figma-v1-closure-payload.json
@@ -113,7 +113,7 @@
     "ux-ui-design-research-and-benchmark.md",
     "architecture-p1-summary.md",
     "architecture-p2-design-impact-summary.md",
-    "ADR-CAND-009-ai-light-post-mvp-confirmation.md"
+    "adr-cand-009-ai-light-post-mvp-confirmation.md"
   ],
   "constraints": {
     "no_delivery_opening": true,
diff --git a/projects/interv360/02-architecture/notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json b/projects/interv360/02-architecture/notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json
index 29acfad..d33cefe 100644
--- a/projects/interv360/02-architecture/notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json
+++ b/projects/interv360/02-architecture/notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json
@@ -27,7 +27,7 @@
       "category": "Architecture",
       "tags": ["Architecture", "Interv360", "SFIA"],
       "summary": "Revue structurée des intégrations et erreurs d'un projet SFIA — prompt Architecture Draft validé pour capitalisation.",
-      "content": "## Objectif\nRéaliser une revue structurée des intégrations et erreurs d'un projet SFIA : identifier intégrations externes ou simulées, cadrer contrats, erreurs attendues, Error Matrix, journalisation minimale, ADR candidates et capitalisation SFIA.\n\n## Entrées\n- Contexte projet (nom, objectif, type pilote/MVP/produit)\n- Phase projet et périmètre MVP\n- Liste des intégrations connues (CRM, email, calendrier, notifications, etc.)\n- Arbitrages MVP, règles métier, exigences SSI (recommandé)\n- Parcours utilisateur, écrans concernés, risques connus (recommandé)\n- ADR candidates existantes, méthodes rôle applicables (`docs/methods/roles/`)\n\n## Sortie attendue\n- Cartographie des intégrations (réelle / simulée / mock / hors MVP)\n- Matrice des contrats à documenter\n- Error Matrix (domaine, erreur, gravité, visibilité, action, journalisation)\n- Journalisation minimale recommandée (sans données sensibles)\n- ADR candidates ou ADR formelles proposées\n- Impacts projet et impacts SFIA (templates, standards, méthodes rôle)\n- Document structuré — pas d'architecture technique complète si phase non autorisée\n\n## Garde-fous\n- Ne pas produire de code\n- Ne pas produire de backlog ni user stories\n- Ne pas produire d'architecture technique complète si la phase ne l'autorise pas\n- Ne pas connecter par défaut des systèmes externes réels\n- Ne pas masquer les erreurs significatives dans des logs uniquement\n- Ne pas exposer de données sensibles dans les messages visibles\n- Distinguer contrat documenté et implémentation ; message métier et log technique\n- Ne pas remplacer une analyse RSSI dédiée ni une analyse QA détaillée (plans de test exhaustifs)\n\n## Statut de validation\nDraft — formalisé sous `prompts/architecture/` ; passage Tested/Validated après usage hors pilote.\n\n## Sources Git\n- prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md\n- prompts/prompt-catalog.md\n- docs/methods/roles/architect-method.md\n- projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.md"
+      "content": "## Objectif\nRéaliser une revue structurée des intégrations et erreurs d'un projet SFIA : identifier intégrations externes ou simulées, cadrer contrats, erreurs attendues, Error Matrix, journalisation minimale, ADR candidates et capitalisation SFIA.\n\n## Entrées\n- Contexte projet (nom, objectif, type pilote/MVP/produit)\n- Phase projet et périmètre MVP\n- Liste des intégrations connues (CRM, email, calendrier, notifications, etc.)\n- Arbitrages MVP, règles métier, exigences SSI (recommandé)\n- Parcours utilisateur, écrans concernés, risques connus (recommandé)\n- ADR candidates existantes, méthodes rôle applicables (`docs/methods/roles/`)\n\n## Sortie attendue\n- Cartographie des intégrations (réelle / simulée / mock / hors MVP)\n- Matrice des contrats à documenter\n- Error Matrix (domaine, erreur, gravité, visibilité, action, journalisation)\n- Journalisation minimale recommandée (sans données sensibles)\n- ADR candidates ou ADR formelles proposées\n- Impacts projet et impacts SFIA (templates, standards, méthodes rôle)\n- Document structuré — pas d'architecture technique complète si phase non autorisée\n\n## Garde-fous\n- Ne pas produire de code\n- Ne pas produire de backlog ni user stories\n- Ne pas produire d'architecture technique complète si la phase ne l'autorise pas\n- Ne pas connecter par défaut des systèmes externes réels\n- Ne pas masquer les erreurs significatives dans des logs uniquement\n- Ne pas exposer de données sensibles dans les messages visibles\n- Distinguer contrat documenté et implémentation ; message métier et log technique\n- Ne pas remplacer une analyse RSSI dédiée ni une analyse QA détaillée (plans de test exhaustifs)\n\n## Statut de validation\nDraft — formalisé sous `prompts/architecture/` ; passage Tested/Validated après usage hors pilote.\n\n## Sources Git\n- prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md\n- prompts/prompt-catalog.md\n- docs/methods/roles/architect-method.md\n- projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.md"
     },
     {
       "title": "PROMPT-SEC-001 — Revue canal email sécurisé",
@@ -37,7 +37,7 @@
       "category": "Security",
       "tags": ["Security", "Sécurité", "RSSI", "Interv360", "SFIA"],
       "summary": "Revue structurée d'un canal email sécurisé ou intake externe — prompt Sécurité / RSSI Draft, complémentaire de PROMPT-ARCH-001.",
-      "content": "## Objectif\nRéaliser une revue structurée d'un canal email sécurisé (ou intake externe équivalent) : qualifier le canal (principal/secondaire/secours), identifier risques SSI, règles de rejet, visibilité anomalies, journalisation minimale sans données sensibles, ADR candidates et capitalisation SFIA.\n\n## Entrées\n- Contexte projet et phase\n- Périmètre MVP\n- Rôle du canal email (principal, secondaire, secours, hors MVP)\n- Canal principal identifié et canaux secondaires (recommandé)\n- Règles métier intake, exigences SSI, types de données, pièces jointes (recommandé)\n- Règles de qualification et de rejet (recommandé)\n- ADR candidates ou existantes, méthodes rôle applicables\n\n## Sortie attendue\n- Qualification du canal (simulé / réel ; positionnement vs canal principal)\n- Risques SSI (spoofing, PJ, doublon, rejet silencieux, sur-exposition)\n- Règles minimales SSI et contrat fonctionnel cible (niveau fonctionnel)\n- Statuts de traitement email et matrice des rejets\n- Visibilité anomalies / rejets et journalisation minimale\n- Données à exclure des logs et de l'UI (corps email, PJ, données client intégrales)\n- ADR candidates, impacts projet et SFIA\n- Document structuré — pas d'architecture technique complète si phase non autorisée\n\n## Garde-fous\n- Ne pas faire du canal email le canal principal sans arbitrage explicite\n- Ne pas connecter de messagerie réelle si phase ou MVP ne l'autorise pas\n- Ne pas traiter un canal simulé comme sans risque SSI\n- Ne pas stocker corps email complet ni pièces jointes dans les logs\n- Ne pas exposer de données sensibles dans les messages visibles\n- Ne pas produire backlog, user stories, code ni architecture technique complète si phase non autorisée\n- Distinguer rejet métier, rejet SSI et erreur technique\n- Complémentaire avec PROMPT-ARCH-001 (revue globale intégrations/erreurs)\n\n## Statut de validation\nDraft — formalisé sous `prompts/security/` ; passage Tested/Validated après usage hors pilote.\n\n## Sources Git\n- prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md\n- prompts/prompt-catalog.md\n- docs/methods/roles/rssi-method.md\n- docs/methods/roles/architect-method.md\n- projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.md"
+      "content": "## Objectif\nRéaliser une revue structurée d'un canal email sécurisé (ou intake externe équivalent) : qualifier le canal (principal/secondaire/secours), identifier risques SSI, règles de rejet, visibilité anomalies, journalisation minimale sans données sensibles, ADR candidates et capitalisation SFIA.\n\n## Entrées\n- Contexte projet et phase\n- Périmètre MVP\n- Rôle du canal email (principal, secondaire, secours, hors MVP)\n- Canal principal identifié et canaux secondaires (recommandé)\n- Règles métier intake, exigences SSI, types de données, pièces jointes (recommandé)\n- Règles de qualification et de rejet (recommandé)\n- ADR candidates ou existantes, méthodes rôle applicables\n\n## Sortie attendue\n- Qualification du canal (simulé / réel ; positionnement vs canal principal)\n- Risques SSI (spoofing, PJ, doublon, rejet silencieux, sur-exposition)\n- Règles minimales SSI et contrat fonctionnel cible (niveau fonctionnel)\n- Statuts de traitement email et matrice des rejets\n- Visibilité anomalies / rejets et journalisation minimale\n- Données à exclure des logs et de l'UI (corps email, PJ, données client intégrales)\n- ADR candidates, impacts projet et SFIA\n- Document structuré — pas d'architecture technique complète si phase non autorisée\n\n## Garde-fous\n- Ne pas faire du canal email le canal principal sans arbitrage explicite\n- Ne pas connecter de messagerie réelle si phase ou MVP ne l'autorise pas\n- Ne pas traiter un canal simulé comme sans risque SSI\n- Ne pas stocker corps email complet ni pièces jointes dans les logs\n- Ne pas exposer de données sensibles dans les messages visibles\n- Ne pas produire backlog, user stories, code ni architecture technique complète si phase non autorisée\n- Distinguer rejet métier, rejet SSI et erreur technique\n- Complémentaire avec PROMPT-ARCH-001 (revue globale intégrations/erreurs)\n\n## Statut de validation\nDraft — formalisé sous `prompts/security/` ; passage Tested/Validated après usage hors pilote.\n\n## Sources Git\n- prompts/security/prompt-sec-001-revue-canal-email-securise.md\n- prompts/prompt-catalog.md\n- docs/methods/roles/rssi-method.md\n- docs/methods/roles/architect-method.md\n- projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.md"
     }
   ]
 }
diff --git a/projects/interv360/03-design/penpot-first-screen-mcp-instructions.md b/projects/interv360/03-design/penpot-first-screen-mcp-instructions.md
index 23f9d75..cf2639b 100644
--- a/projects/interv360/03-design/penpot-first-screen-mcp-instructions.md
+++ b/projects/interv360/03-design/penpot-first-screen-mcp-instructions.md
@@ -1,16 +1,16 @@
 # Interv360 — Instructions MCP Penpot — Premier écran pilote
 
-**Type** : Instructions MCP design  
-**Projet** : Interv360 (PRJ-INTERV360)  
-**Phase** : 03-design  
-**Outil cible** : Penpot self-host  
-**Écran pilote** : Liste demandes (E2)  
-**Frame cible** : `Liste demandes — V1 pilote`  
-**Page Penpot cible** : `03 — Screens`  
-**Statut** : Draft  
-**Branche** : `design/interv360-penpot-first-screen-instructions`  
-**Source documentaire** : Git / sfia-workspace  
-**Source visuelle cible** : Penpot  
+**Type** : Instructions MCP design
+**Projet** : Interv360 (PRJ-INTERV360)
+**Phase** : 03-design
+**Outil cible** : Penpot self-host
+**Écran pilote** : Liste demandes (E2)
+**Frame cible** : `Liste demandes — V1 pilote`
+**Page Penpot cible** : `03 — Screens`
+**Statut** : Draft
+**Branche** : `design/interv360-penpot-first-screen-instructions`
+**Source documentaire** : Git / sfia-workspace
+**Source visuelle cible** : Penpot
 **Documents associés** : [`penpot-project-reference.md`](penpot-project-reference.md), [`penpot-screen-prioritization.md`](penpot-screen-prioritization.md)
 
 ---
@@ -83,7 +83,7 @@ Checklist **obligatoire** avant la session de création :
 
 **Sécurité :** l'endpoint MCP self-host local contient un `userToken` dans la configuration Cursor. Ce token **ne doit jamais** être copié dans Git, dans ce document, ni dans un prompt versionné.
 
-Voir : [`docs/tooling/penpot/penpot-mcp-self-host-rex.md`](../../../docs/tooling/penpot/penpot-mcp-self-host-rex.md).
+Voir : [`docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md`](../../../docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md).
 
 ---
 
diff --git a/projects/interv360/03-design/penpot-project-reference.md b/projects/interv360/03-design/penpot-project-reference.md
index ef8d2ee..61abd59 100644
--- a/projects/interv360/03-design/penpot-project-reference.md
+++ b/projects/interv360/03-design/penpot-project-reference.md
@@ -1,12 +1,12 @@
 # Interv360 — Référence projet Penpot Design V2
 
-**Type** : Référence outillage design  
-**Projet** : Interv360 (PRJ-INTERV360)  
-**Phase** : 03-design  
-**Outil cible** : Penpot self-host  
-**Statut** : Draft  
-**Branche** : `design/interv360-penpot-reference`  
-**Source documentaire** : Git / sfia-workspace  
+**Type** : Référence outillage design
+**Projet** : Interv360 (PRJ-INTERV360)
+**Phase** : 03-design
+**Outil cible** : Penpot self-host
+**Statut** : Draft
+**Branche** : `design/interv360-penpot-reference`
+**Source documentaire** : Git / sfia-workspace
 **Source visuelle** : Penpot
 
 ---
@@ -48,7 +48,7 @@ Il **ne contient pas de maquette** ni d'écran produit. Il cadre le lien entre :
 - Ne **jamais** committer de `userToken`, clé MCP, mot de passe ou URL MCP complète avec token réel.
 - Le renommage du fichier Penpot (`Interv360 — Design V2`) reste **manuel** si nécessaire — `file.name` est en lecture seule côté API MCP.
 
-Voir aussi : [`docs/tooling/penpot/penpot-mcp-self-host-rex.md`](../../../docs/tooling/penpot/penpot-mcp-self-host-rex.md).
+Voir aussi : [`docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md`](../../../docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md).
 
 ---
 
@@ -86,7 +86,7 @@ Sources **obligatoires** avant toute production visuelle Interv360 :
 | Revue KPI dashboard | `projects/interv360/01-cadrage/dashboard-kpi-ux-review.md` |
 | Clôture Figma V1 | `projects/interv360/02-architecture/figma-v1-closure-summary.md` |
 
-**Référence visuelle V1 (lecture seule, non modifiable dans ce cycle) :**  
+**Référence visuelle V1 (lecture seule, non modifiable dans ce cycle) :**
 `projects/interv360/02-architecture/figma-first-draft-screens/`
 
 ---
diff --git a/projects/interv360/04-delivery/implementation-go-no-go.md b/projects/interv360/04-delivery/implementation-go-no-go.md
index 19fd27e..fab7936 100644
--- a/projects/interv360/04-delivery/implementation-go-no-go.md
+++ b/projects/interv360/04-delivery/implementation-go-no-go.md
@@ -1,8 +1,8 @@
 # Interv360 — Implementation go/no-go
 
-**Projet** : Interv360  
-**Cycle** : Préparation passage en réalisation  
-**Statut** : Go conditionnel — INC-01  
+**Projet** : Interv360
+**Cycle** : Préparation passage en réalisation
+**Statut** : Go conditionnel — INC-01
 **Branche** : `delivery/interv360-implementation-go-no-go`
 
 ---
@@ -171,7 +171,7 @@ Décision : voir §16 — **Go conditionnel sur INC-01** (formalisé).
 
 ## 11. Synthèse de maturité
 
-**Sources principales :** `01-cadrage/business-framing.md`, `01-cadrage/mvp-arbitration-validation.md`, `../archive/pre-delivery-phases/05-functional-architecture/functional-architecture-summary.md`, `../archive/pre-delivery-phases/06-ux-ui/user-journeys.md`, `04-delivery/mvp-scope.md`, `04-delivery/delivery-readiness-summary.md`, `../archive/inc-01/inc-01-readiness-checklist.md`, `04-delivery/technical-design-summary.md`, `04-delivery/realization-start-summary.md`, `03-design/figma-first-screen-review.md`, `../../method/sfia-fast-track/archive/interv360-realization/capitalization-summary.md`.
+**Sources principales :** `01-cadrage/business-framing.md`, `01-cadrage/mvp-arbitration-validation.md`, `../archive/pre-delivery-phases/05-functional-architecture/functional-architecture-summary.md`, `../archive/pre-delivery-phases/06-ux-ui/user-journeys.md`, `04-delivery/mvp-scope.md`, `04-delivery/delivery-readiness-summary.md`, `../archive/inc-01/inc-01-readiness-checklist.md`, `04-delivery/technical-design-summary.md`, `04-delivery/realization-start-summary.md`, `03-design/figma-first-screen-review.md`, `../../method/sfia-fast-track/archive/interv360-realization/2026-06-30-capitalization-summary.md`.
 
 | Axe | Niveau | Commentaire |
 |-----|--------|-------------|
diff --git a/projects/interv360/04-delivery/request-model-productization.md b/projects/interv360/04-delivery/request-model-productization.md
index 123c5b8..d543795 100644
--- a/projects/interv360/04-delivery/request-model-productization.md
+++ b/projects/interv360/04-delivery/request-model-productization.md
@@ -1,9 +1,9 @@
 # Interv360 — Request Model Productization
 
-**Projet** : Interv360  
-**Cycle** : Request Model Productization  
-**Mode** : SFIA Batch Delivery produit contrôlé  
-**Statut** : Batch produit — INC-PROD-05 réalisé  
+**Projet** : Interv360
+**Cycle** : Request Model Productization
+**Mode** : SFIA Batch Delivery produit contrôlé
+**Statut** : Batch produit — INC-PROD-05 réalisé
 **Branche** : `delivery/interv360-request-model-productization`
 
 ---
@@ -329,7 +329,7 @@ No authentication, users, roles, CRM integration, real data, new workflow status
 | `projects/interv360/backend/test/persistence.test.ts` | INC-PROD-02 |
 | `projects/interv360/backend/README.md` | INC-PROD-04 |
 | `projects/interv360/08-presentation/interv360-e2e-demo-runbook.md` | INC-PROD-04 |
-| `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md` | INC-PROD-04 |
+| `projects/interv360/09-roadmap/2026-03-12-interv360-backend-api-contract-framing.md` | INC-PROD-04 |
 
 ### Vérifications pré-PR
 
diff --git a/projects/interv360/04-delivery/role-simulation.md b/projects/interv360/04-delivery/role-simulation.md
index dde9ba8..e23383d 100644
--- a/projects/interv360/04-delivery/role-simulation.md
+++ b/projects/interv360/04-delivery/role-simulation.md
@@ -1,9 +1,9 @@
 # Interv360 — Role Simulation
 
-**Projet** : Interv360  
-**Cycle** : Role Simulation  
-**Mode** : SFIA Batch Delivery produit contrôlé  
-**Statut** : Batch produit — INC-PROD-05 réalisé  
+**Projet** : Interv360
+**Cycle** : Role Simulation
+**Mode** : SFIA Batch Delivery produit contrôlé
+**Statut** : Batch produit — INC-PROD-05 réalisé
 **Branche** : `delivery/interv360-role-simulation`
 
 ---
@@ -27,7 +27,7 @@ L’objectif est de rendre démontrables :
 
 Le cadrage auth/users/rôles a été réalisé dans :
 
-[`projects/interv360/09-roadmap/interv360-auth-and-user-framing.md`](../09-roadmap/interv360-auth-and-user-framing.md)
+[`projects/interv360/09-roadmap/2026-07-02-interv360-auth-and-user-framing.md`](../09-roadmap/2026-07-02-interv360-auth-and-user-framing.md)
 
 Décision retenue :
 
diff --git a/projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md b/projects/interv360/09-roadmap/2026-03-12-interv360-backend-api-contract-framing.md
similarity index 99%
rename from projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md
rename to projects/interv360/09-roadmap/2026-03-12-interv360-backend-api-contract-framing.md
index d85f2eb..d4e2a5d 100644
--- a/projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md
+++ b/projects/interv360/09-roadmap/2026-03-12-interv360-backend-api-contract-framing.md
@@ -1,9 +1,9 @@
 # Interv360 — Backend API Contract Framing
 
-**Projet** : Interv360  
-**Cycle** : Backend API Contract Framing  
-**Mode** : SFIA Fast Delivery documentaire  
-**Statut** : Cadrage contrat API  
+**Projet** : Interv360
+**Cycle** : Backend API Contract Framing
+**Mode** : SFIA Fast Delivery documentaire
+**Statut** : Cadrage contrat API
 **Branche** : `architecture/interv360-backend-api-contract-framing`
 
 ---
diff --git a/projects/interv360/09-roadmap/interv360-backend-data-model-decision.md b/projects/interv360/09-roadmap/2026-07-01-interv360-backend-data-model-decision.md
similarity index 98%
rename from projects/interv360/09-roadmap/interv360-backend-data-model-decision.md
rename to projects/interv360/09-roadmap/2026-07-01-interv360-backend-data-model-decision.md
index 863ff0f..7a1770b 100644
--- a/projects/interv360/09-roadmap/interv360-backend-data-model-decision.md
+++ b/projects/interv360/09-roadmap/2026-07-01-interv360-backend-data-model-decision.md
@@ -1,9 +1,9 @@
 # Interv360 — Backend Data Model Decision
 
-**Projet** : Interv360  
-**Cycle** : Backend Data Model Decision  
-**Mode** : SFIA Fast Delivery documentaire  
-**Statut** : Décision architecture data  
+**Projet** : Interv360
+**Cycle** : Backend Data Model Decision
+**Mode** : SFIA Fast Delivery documentaire
+**Statut** : Décision architecture data
 **Branche** : `architecture/interv360-backend-data-model-decision`
 
 ---
diff --git a/projects/interv360/09-roadmap/interv360-backend-persistence-decision.md b/projects/interv360/09-roadmap/2026-07-01-interv360-backend-persistence-decision.md
similarity index 98%
rename from projects/interv360/09-roadmap/interv360-backend-persistence-decision.md
rename to projects/interv360/09-roadmap/2026-07-01-interv360-backend-persistence-decision.md
index 302f857..0e25fa1 100644
--- a/projects/interv360/09-roadmap/interv360-backend-persistence-decision.md
+++ b/projects/interv360/09-roadmap/2026-07-01-interv360-backend-persistence-decision.md
@@ -1,10 +1,10 @@
 # Interv360 — Backend Persistence Decision
 
-**Projet** : Interv360  
-**Cycle** : Backend Persistence Decision  
-**Mode** : SFIA Fast Delivery architecture  
-**Statut** : Décision persistance backend  
-**Branche** : `architecture/interv360-backend-persistence-decision`  
+**Projet** : Interv360
+**Cycle** : Backend Persistence Decision
+**Mode** : SFIA Fast Delivery architecture
+**Statut** : Décision persistance backend
+**Branche** : `architecture/interv360-backend-persistence-decision`
 **Base** : `main` @ `f8dd576`
 
 Documents de référence : [`interv360-product-industrialization-framing.md`](./interv360-product-industrialization-framing.md), [`backend-minimal-prototype.md`](../04-delivery/backend-minimal-prototype.md), [`interv360-backend-target-framing.md`](./interv360-backend-target-framing.md), [`interv360-backend-data-model-decision.md`](./interv360-backend-data-model-decision.md), [`interv360-backend-technical-stack-decision.md`](./interv360-backend-technical-stack-decision.md), [`interv360-backend-api-contract-framing.md`](./interv360-backend-api-contract-framing.md)
diff --git a/projects/interv360/09-roadmap/interv360-backend-target-framing.md b/projects/interv360/09-roadmap/2026-07-01-interv360-backend-target-framing.md
similarity index 98%
rename from projects/interv360/09-roadmap/interv360-backend-target-framing.md
rename to projects/interv360/09-roadmap/2026-07-01-interv360-backend-target-framing.md
index b020adb..ecd0d8f 100644
--- a/projects/interv360/09-roadmap/interv360-backend-target-framing.md
+++ b/projects/interv360/09-roadmap/2026-07-01-interv360-backend-target-framing.md
@@ -1,9 +1,9 @@
 # Interv360 — Backend Target Framing
 
-**Projet** : Interv360  
-**Cycle** : Backend Target Framing  
-**Mode** : SFIA Fast Delivery documentaire  
-**Statut** : Cadrage architecture  
+**Projet** : Interv360
+**Cycle** : Backend Target Framing
+**Mode** : SFIA Fast Delivery documentaire
+**Statut** : Cadrage architecture
 **Branche** : `architecture/interv360-backend-target-framing`
 
 ---
diff --git a/projects/interv360/09-roadmap/interv360-backend-technical-stack-decision.md b/projects/interv360/09-roadmap/2026-07-01-interv360-backend-technical-stack-decision.md
similarity index 98%
rename from projects/interv360/09-roadmap/interv360-backend-technical-stack-decision.md
rename to projects/interv360/09-roadmap/2026-07-01-interv360-backend-technical-stack-decision.md
index 25ebc17..7b55256 100644
--- a/projects/interv360/09-roadmap/interv360-backend-technical-stack-decision.md
+++ b/projects/interv360/09-roadmap/2026-07-01-interv360-backend-technical-stack-decision.md
@@ -1,9 +1,9 @@
 # Interv360 — Backend Technical Stack Decision
 
-**Projet** : Interv360  
-**Cycle** : Backend Technical Stack Decision  
-**Mode** : SFIA Fast Delivery documentaire  
-**Statut** : Décision architecture technique  
+**Projet** : Interv360
+**Cycle** : Backend Technical Stack Decision
+**Mode** : SFIA Fast Delivery documentaire
+**Statut** : Décision architecture technique
 **Branche** : `architecture/interv360-backend-technical-stack-decision`
 
 ---
diff --git a/projects/interv360/09-roadmap/interv360-auth-and-user-framing.md b/projects/interv360/09-roadmap/2026-07-02-interv360-auth-and-user-framing.md
similarity index 98%
rename from projects/interv360/09-roadmap/interv360-auth-and-user-framing.md
rename to projects/interv360/09-roadmap/2026-07-02-interv360-auth-and-user-framing.md
index 92c12c3..86a1514 100644
--- a/projects/interv360/09-roadmap/interv360-auth-and-user-framing.md
+++ b/projects/interv360/09-roadmap/2026-07-02-interv360-auth-and-user-framing.md
@@ -1,9 +1,9 @@
 # Interv360 — Auth and User Framing
 
-**Projet** : Interv360  
-**Cycle** : Role Simulation  
-**Mode** : SFIA Batch Delivery produit contrôlé  
-**Statut** : Batch produit — INC-PROD-01 réalisé  
+**Projet** : Interv360
+**Cycle** : Role Simulation
+**Mode** : SFIA Batch Delivery produit contrôlé
+**Statut** : Batch produit — INC-PROD-01 réalisé
 **Branche** : `delivery/interv360-role-simulation`
 
 ---
diff --git a/projects/interv360/09-roadmap/interv360-auth-foundation-framing.md b/projects/interv360/09-roadmap/2026-07-02-interv360-auth-foundation-framing.md
similarity index 97%
rename from projects/interv360/09-roadmap/interv360-auth-foundation-framing.md
rename to projects/interv360/09-roadmap/2026-07-02-interv360-auth-foundation-framing.md
index c266df2..faeaf23 100644
--- a/projects/interv360/09-roadmap/interv360-auth-foundation-framing.md
+++ b/projects/interv360/09-roadmap/2026-07-02-interv360-auth-foundation-framing.md
@@ -1,9 +1,9 @@
 # Interv360 — Auth Foundation Framing
 
-**Projet** : Interv360  
-**Cycle** : Auth Foundation Framing  
-**Mode** : SFIA Fast Track — cadrage architecture produit  
-**Statut** : Cadrage intégré au batch Auth User Switcher  
+**Projet** : Interv360
+**Cycle** : Auth Foundation Framing
+**Mode** : SFIA Fast Track — cadrage architecture produit
+**Statut** : Cadrage intégré au batch Auth User Switcher
 **Branche** : `delivery/interv360-auth-user-switcher`
 
 ---
@@ -430,8 +430,8 @@ Incréments possibles :
 
 ## 16. Intégration au batch Auth User Switcher
 
-Ce cadrage n'est pas mergé via une PR documentaire dédiée.  
-Il est intégré directement au batch :  
+Ce cadrage n'est pas mergé via une PR documentaire dédiée.
+Il est intégré directement au batch :
 `delivery/interv360-auth-user-switcher`
 
 Objectif :
@@ -442,6 +442,6 @@ Objectif :
 - rattacher les utilisateurs fictifs aux rôles existants ;
 - conserver backend / API / SQLite inchangés.
 
-Le premier delivery recommandé devient :  
+Le premier delivery recommandé devient :
 `projects/interv360/04-delivery/auth-user-switcher.md`
 
diff --git a/projects/interv360/archive/adr-early/04-adr/ADR-004-local-closure-vs-external-sync.md b/projects/interv360/archive/adr-early/04-adr/ADR-004-local-closure-vs-external-sync.md
index 35a590a..a78ce7f 100644
--- a/projects/interv360/archive/adr-early/04-adr/ADR-004-local-closure-vs-external-sync.md
+++ b/projects/interv360/archive/adr-early/04-adr/ADR-004-local-closure-vs-external-sync.md
@@ -1,10 +1,10 @@
 # ADR-004 — Clôture locale vs synchronisation externe Interv360
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 04-adr  
-**Statut** : Accepted  
-**Date** : 2026-06-28  
-**Décision** : Dissocier la clôture locale de la synchronisation externe  
+**Projet** : PRJ-INTERV360
+**Phase** : 04-adr
+**Statut** : Accepted
+**Date** : 2026-06-28
+**Décision** : Dissocier la clôture locale de la synchronisation externe
 **Branche** : `adr/interv360-structurantes`
 
 ---
@@ -201,7 +201,7 @@ Elle alimente directement :
 | `projects/interv360/04-adr/ADR-001-status-mapping.md` | STAT-06 / STAT-08 et séparation statuts / indicateurs |
 | `projects/interv360/04-adr/ADR-002-simulated-crm-sync.md` | Interv360 source de vérité locale, CRM simulé cible |
 | `projects/interv360/04-adr/ADR-003-integration-error-management.md` | STAT-08 et gestion des erreurs d'intégration |
-| `projects/interv360/02-architecture/closure-without-signature.md` | Conditions de clôture, signature optionnelle |
+| `projects/interv360/02-architecture/2026-06-28-closure-without-signature.md` | Conditions de clôture, signature optionnelle |
 | `projects/interv360/03-process/process-analysis.md` | Analyse BPMN clôture / intégration |
 | `projects/interv360/03-process/process-cycle-closure.md` | Synthèse BPMN |
 | `projects/interv360/04-adr/adr-structuring-scope.md` | Cadrage ADR |
diff --git a/projects/interv360/archive/adr-early/04-adr/adr-structuring-scope.md b/projects/interv360/archive/adr-early/04-adr/adr-structuring-scope.md
index 4802bba..b853a56 100644
--- a/projects/interv360/archive/adr-early/04-adr/adr-structuring-scope.md
+++ b/projects/interv360/archive/adr-early/04-adr/adr-structuring-scope.md
@@ -1,9 +1,9 @@
 # Interv360 — Cadrage des ADR structurantes
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 04-adr  
-**Type** : Cadrage ADR  
-**Statut** : Draft  
+**Projet** : PRJ-INTERV360
+**Phase** : 04-adr
+**Type** : Cadrage ADR
+**Statut** : Draft
 **Branche** : `adr/interv360-structurantes`
 
 ---
@@ -34,7 +34,7 @@ Ce document **ne crée pas** encore les ADR formelles.
 | `projects/interv360/01-cadrage/business-framing.md` | Contexte métier |
 | `projects/interv360/02-architecture/rules-rg-prioritization.md` | Règles RG priorisées |
 | `projects/interv360/02-architecture/status-mapping.md` | Statuts MVP |
-| `projects/interv360/02-architecture/closure-without-signature.md` | Règles de clôture |
+| `projects/interv360/02-architecture/2026-06-28-closure-without-signature.md` | Règles de clôture |
 | `projects/interv360/02-architecture/clarification-cycle-closure.md` | Synthèse du cycle clarification |
 | `projects/interv360/03-process/process-analysis.md` | Analyse BPMN |
 | `projects/interv360/03-process/process-cycle-closure.md` | Clôture BPMN |
diff --git a/projects/interv360/archive/figma-v1/figma-review-session-minutes.md b/projects/interv360/archive/figma-v1/figma-review-session-minutes.md
index 1c15677..2a687ae 100644
--- a/projects/interv360/archive/figma-v1/figma-review-session-minutes.md
+++ b/projects/interv360/archive/figma-v1/figma-review-session-minutes.md
@@ -1,11 +1,11 @@
 # Interv360 — Compte rendu revue simulée Figma V1
 
-**Projet** : PRJ-INTERV360  
-**Phase source** : 02-architecture  
-**Jalon** : Revue Figma V1  
-**Statut** : Reviewed — Simulated  
-**Type** : Compte rendu de revue transverse simulée  
-**Source** : `figma-review-session-preparation.md` + `figma-review-session-minutes-template.md` + `role-methods-enrichment-after-figma-v1.md` + méthodes rôle SFIA  
+**Projet** : PRJ-INTERV360
+**Phase source** : 02-architecture
+**Jalon** : Revue Figma V1
+**Statut** : Reviewed — Simulated
+**Type** : Compte rendu de revue transverse simulée
+**Source** : `figma-review-session-preparation.md` + `figma-review-session-minutes-template.md` + `role-methods-enrichment-after-figma-v1.md` + méthodes rôle SFIA
 **Objet** : documenter la validation simulée Figma V1 par les rôles SFIA enrichis
 
 ---
@@ -53,7 +53,7 @@ La revue s'appuie explicitement sur **`role-methods-enrichment-after-figma-v1.md
 | `figma-design-instructions.md` | Garde-fous design ; direction visuelle |
 | `architecture-p1-summary.md` | ADR P1 ; intégrations simulées |
 | `architecture-p2-design-impact-summary.md` | ADR P2 design-impact |
-| `adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` | IA hors MVP |
+| `adr/adr-cand-009-ai-light-post-mvp-confirmation.md` | IA hors MVP |
 
 **Captures analysées**
 
diff --git a/projects/interv360/archive/notion-sync/notion-publication-tooling-check.md b/projects/interv360/archive/notion-sync/notion-publication-tooling-check.md
index ac4ca20..f77f02f 100644
--- a/projects/interv360/archive/notion-sync/notion-publication-tooling-check.md
+++ b/projects/interv360/archive/notion-sync/notion-publication-tooling-check.md
@@ -1,8 +1,8 @@
 # Interv360 — Vérification outillage publication Notion
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Date diagnostic** : 2026-06-27  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Date diagnostic** : 2026-06-27
 **Objet** : vérifier si une publication Notion peut être réalisée depuis Cursor à partir des outils existants du repo — **sans publication effectuée**
 
 **Payload concerné (non modifié)** :
@@ -37,7 +37,7 @@ Motifs : `notion`, `sync`, `governance`, `CMP-001`, `publish_to_notion`, `NOTION
 |---------------------|--------|
 | `tools/cmp-001/` | Connecteur officiel **CMP-001 — SFIA Notion Sync** (CLI Node.js, `@notionhq/client`) |
 | `tools/cmp-001/README.md` | Documentation installation, configuration, commandes |
-| `tools/cmp-001/WORKSPACE.md` | Point d'entrée workspace (`npm install`, `.env`) |
+| `tools/cmp-001/workspace.md` | Point d'entrée workspace (`npm install`, `.env`) |
 | `tools/cmp-001/.env.example` | Modèle variables `NOTION_TOKEN`, `NOTION_DATABASE_*` |
 | `tools/cmp-001/src/cli.js` | CLI : `create`, `update`, `discover`, `export`, `types` |
 | `tools/cmp-001/src/notionClient.js` | Client API Notion |
@@ -66,7 +66,7 @@ Motifs : `notion`, `sync`, `governance`, `CMP-001`, `publish_to_notion`, `NOTION
 | Élément | Trouvé | Commentaire |
 |---------|--------|-------------|
 | **Script Notion** | Oui | `tools/cmp-001/src/cli.js` — commandes `create`, `update`, `discover`, `export` |
-| **Documentation Notion** | Oui | `tools/cmp-001/README.md`, `WORKSPACE.md`, `CHANGELOG.md` ; `README.md` workspace |
+| **Documentation Notion** | Oui | `tools/cmp-001/README.md`, `workspace.md`, `CHANGELOG.md` ; `README.md` workspace |
 | **CMP-001** | Oui | Connecteur officiel v1.1.2 ; `update project` ajouté en 1.1.2 |
 | **Payload governance** | Oui (préparé) | Payloads `notion-sync-*-payload.json` — dont Figma V1 closure |
 | **Variable NOTION_TOKEN** | Oui (documentée) | `.env.example` ; requis par `config.js` — **présence locale non vérifiée** (`.env` non lu) |
diff --git a/projects/interv360/archive/notion-sync/notion-sync-architecture-p1-summary.md b/projects/interv360/archive/notion-sync/notion-sync-architecture-p1-summary.md
index bd31bfd..bf692c5 100644
--- a/projects/interv360/archive/notion-sync/notion-sync-architecture-p1-summary.md
+++ b/projects/interv360/archive/notion-sync/notion-sync-architecture-p1-summary.md
@@ -1,12 +1,12 @@
 # Interv360 — Préparation sync Notion Architecture P1
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Jalon** : Architecture P1  
-**Statut jalon** : Done  
-**Type** : préparation synchronisation Notion  
-**Source détaillée** : Git  
-**Mode Notion** : gouvernance uniquement  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Jalon** : Architecture P1
+**Statut jalon** : Done
+**Type** : préparation synchronisation Notion
+**Source détaillée** : Git
+**Mode Notion** : gouvernance uniquement
 **Publication Notion** : Non réalisée dans cette tâche
 
 ---
@@ -53,13 +53,13 @@ La **suite est à arbitrer** : voie **UX/UI/Figma** ou voie **ADR P2**. Delivery
 
 | Décision | Statut | Source Git |
 |----------|--------|------------|
-| **ADR-001** — Contrats API simulés | Accepted | `adr/ADR-001-api-contracts-simulated-implementation.md` |
-| **ADR-002** — Erreurs visibles + reprise manuelle | Accepted | `adr/ADR-002-visible-integration-errors-manual-recovery.md` |
-| **ADR-003** — Email sécurisé secondaire | Accepted | `adr/ADR-003-secure-email-secondary-channel.md` |
-| **ADR-004** — Journalisation minimale | Accepted | `adr/ADR-004-minimal-flow-rejection-logging.md` |
+| **ADR-001** — Contrats API simulés | Accepted | `adr/adr-001-api-contracts-simulated-implementation.md` |
+| **ADR-002** — Erreurs visibles + reprise manuelle | Accepted | `adr/adr-002-visible-integration-errors-manual-recovery.md` |
+| **ADR-003** — Email sécurisé secondaire | Accepted | `adr/adr-003-secure-email-secondary-channel.md` |
+| **ADR-004** — Journalisation minimale | Accepted | `adr/adr-004-minimal-flow-rejection-logging.md` |
 | **Méthodes rôle enrichies** | Done | `role-methods-enrichment-after-adr-p1.md` + `docs/methods/roles/` |
-| **PROMPT-ARCH-001** | Draft | `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` |
-| **PROMPT-SEC-001** | Draft | `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` |
+| **PROMPT-ARCH-001** | Draft | `prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md` |
+| **PROMPT-SEC-001** | Draft | `prompts/security/prompt-sec-001-revue-canal-email-securise.md` |
 | **Architecture P1 Summary** | Done | `architecture-p1-summary.md` |
 
 *Chemins relatifs à `projects/interv360/02-architecture/` sauf prompts et méthodes rôle.*
diff --git a/projects/interv360/archive/notion-sync/notion-sync-architecture-p2-summary.md b/projects/interv360/archive/notion-sync/notion-sync-architecture-p2-summary.md
index 96dc4cc..afca8cf 100644
--- a/projects/interv360/archive/notion-sync/notion-sync-architecture-p2-summary.md
+++ b/projects/interv360/archive/notion-sync/notion-sync-architecture-p2-summary.md
@@ -1,12 +1,12 @@
 # Interv360 — Préparation sync Notion ADR P2 design-impact
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Jalon** : ADR P2 design-impact  
-**Statut jalon** : Done  
-**Type** : préparation synchronisation Notion  
-**Source détaillée** : Git  
-**Mode Notion** : gouvernance uniquement  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Jalon** : ADR P2 design-impact
+**Statut jalon** : Done
+**Type** : préparation synchronisation Notion
+**Source détaillée** : Git
+**Mode Notion** : gouvernance uniquement
 **Publication Notion** : Non réalisée dans cette tâche
 
 ---
@@ -55,11 +55,11 @@ Les **méthodes rôle** (Product Owner, UX/UI Designer, RSSI, Architecte, Chef d
 
 | Décision | Statut | Source Git |
 |----------|--------|------------|
-| **ADR-005** — Conservation fictive photos, signatures et logs | Accepted | `adr/ADR-005-fictive-retention-photos-signatures-logs.md` |
-| **ADR-006** — Notifications client sans portail client | Accepted | `adr/ADR-006-client-notifications-without-client-portal.md` |
-| **ADR-007** — Signature client optionnelle structurée | Accepted | `adr/ADR-007-optional-structured-client-signature.md` |
-| **ADR-008** — Dashboard SAV et vue dirigeant séparés | Accepted | `adr/ADR-008-separated-sav-dashboard-and-executive-view.md` |
-| **ADR-CAND-009** — IA légère reportée post-MVP | Confirmed — Post-MVP | `adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` |
+| **ADR-005** — Conservation fictive photos, signatures et logs | Accepted | `adr/adr-005-fictive-retention-photos-signatures-logs.md` |
+| **ADR-006** — Notifications client sans portail client | Accepted | `adr/adr-006-client-notifications-without-client-portal.md` |
+| **ADR-007** — Signature client optionnelle structurée | Accepted | `adr/adr-007-optional-structured-client-signature.md` |
+| **ADR-008** — Dashboard SAV et vue dirigeant séparés | Accepted | `adr/adr-008-separated-sav-dashboard-and-executive-view.md` |
+| **ADR-CAND-009** — IA légère reportée post-MVP | Confirmed — Post-MVP | `adr/adr-cand-009-ai-light-post-mvp-confirmation.md` |
 | **Synthèse ADR P2 design-impact** | Done | `architecture-p2-design-impact-summary.md` |
 | **Enrichissement méthodes rôle post-P2** | Done | `role-methods-enrichment-after-adr-p2.md` |
 
diff --git a/projects/interv360/archive/notion-sync/notion-sync-existing-prompt-library-inventory.md b/projects/interv360/archive/notion-sync/notion-sync-existing-prompt-library-inventory.md
index 0b6b2c6..e6c62f6 100644
--- a/projects/interv360/archive/notion-sync/notion-sync-existing-prompt-library-inventory.md
+++ b/projects/interv360/archive/notion-sync/notion-sync-existing-prompt-library-inventory.md
@@ -1,12 +1,12 @@
 # Interv360 — Inventaire prompts SFIA existants pour Prompt Library
 
-**Projet** : PRJ-INTERV360  
-**Cible Notion** : SFIA Prompt Library  
-**Type** : Inventaire avant publication  
-**Statut** : Prepared — Not published  
-**Publication Notion** : non exécutée  
-**API Notion** : non appelée  
-**CMP-001 create prompt** : non exécuté  
+**Projet** : PRJ-INTERV360
+**Cible Notion** : SFIA Prompt Library
+**Type** : Inventaire avant publication
+**Statut** : Prepared — Not published
+**Publication Notion** : non exécutée
+**API Notion** : non appelée
+**CMP-001 create prompt** : non exécuté
 **Objet** : inventorier les prompts SFIA existants dans Git avant publication Notion
 
 ---
@@ -63,8 +63,8 @@ Ce document **prépare la publication** des autres prompts SFIA déjà créés d
 
 | ID | Nom | Famille | Fichier source | Catégorie souhaitée | Statut proposé | Action recommandée |
 |----|-----|---------|----------------|---------------------|----------------|-------------------|
-| PROMPT-ARCH-001 | Revue intégrations et erreurs | Architecture | `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` | Architecture | Draft | **À publier** — 1er lot prioritaire après revue payload |
-| PROMPT-SEC-001 | Revue canal email sécurisé | Sécurité / RSSI | `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` | Sécurité | Draft | **À publier** — 1er lot prioritaire après revue payload |
+| PROMPT-ARCH-001 | Revue intégrations et erreurs | Architecture | `prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md` | Architecture | Draft | **À publier** — 1er lot prioritaire après revue payload |
+| PROMPT-SEC-001 | Revue canal email sécurisé | Sécurité / RSSI | `prompts/security/prompt-sec-001-revue-canal-email-securise.md` | Sécurité | Draft | **À publier** — 1er lot prioritaire après revue payload |
 
 ### 4.2 UX/UI V1 Governance — catalogue §13
 
diff --git a/projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-cmp-payload-review.md b/projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-cmp-payload-review.md
index 74cc04e..80f6404 100644
--- a/projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-cmp-payload-review.md
+++ b/projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-cmp-payload-review.md
@@ -1,14 +1,14 @@
 # Interv360 — Revue finale payload CMP Prompt Library Lot 1 — Architecture & Sécurité
 
-**Projet** : PRJ-INTERV360  
-**Cible Notion** : SFIA Prompt Library  
-**Lot** : 1 — Architecture & Sécurité  
-**Type** : Revue manuelle finale avant publication  
-**Statut** : Reviewed — Ready for Prompt Library publication  
-**Objet revu** : `notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json`  
-**Décision** : Payload CMP Lot 1 validé — publication des 2 prompts autorisée ensuite  
-**Publication Notion** : non exécutée  
-**API Notion** : non appelée  
+**Projet** : PRJ-INTERV360
+**Cible Notion** : SFIA Prompt Library
+**Lot** : 1 — Architecture & Sécurité
+**Type** : Revue manuelle finale avant publication
+**Statut** : Reviewed — Ready for Prompt Library publication
+**Objet revu** : `notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json`
+**Décision** : Payload CMP Lot 1 validé — publication des 2 prompts autorisée ensuite
+**Publication Notion** : non exécutée
+**API Notion** : non appelée
 **CMP-001 create prompt** : non exécuté
 
 ---
@@ -32,8 +32,8 @@ Cette note **valide manuellement** le payload CMP **Lot 1** avant publication da
 | `cmp-prompt-schema-extension-for-architecture-security.md` | Décision technique — catégories Architecture et Security |
 | `notion-sync-prompt-library-lot1-architecture-security-preparation.md` | Préparation Lot 1 — sources et vigilance |
 | `notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json` | **Objet principal** — 2 items CMP enrichis |
-| `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` | Source détaillée Architecture — Draft formalisé |
-| `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` | Source détaillée Sécurité / RSSI — Draft formalisé |
+| `prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md` | Source détaillée Architecture — Draft formalisé |
+| `prompts/security/prompt-sec-001-revue-canal-email-securise.md` | Source détaillée Sécurité / RSSI — Draft formalisé |
 | `prompts/prompt-catalog.md` | Catalogue §4 et §8 — référencement et statut Draft |
 | `notion-sync-existing-prompt-library-inventory.md` | Inventaire global — Lot 1 recommandé hors QA |
 
diff --git a/projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-preparation.md b/projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-preparation.md
index b09a163..8930656 100644
--- a/projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-preparation.md
+++ b/projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-preparation.md
@@ -1,13 +1,13 @@
 # Interv360 — Préparation Prompt Library Lot 1 — Architecture & Sécurité
 
-**Projet** : PRJ-INTERV360  
-**Cible Notion** : SFIA Prompt Library  
-**Lot** : 1 — Architecture & Sécurité  
-**Type** : Préparation sync Prompt Library  
-**Statut** : Prepared — Not published  
-**Publication Notion** : non exécutée  
-**API Notion** : non appelée  
-**CMP-001 create prompt** : non exécuté  
+**Projet** : PRJ-INTERV360
+**Cible Notion** : SFIA Prompt Library
+**Lot** : 1 — Architecture & Sécurité
+**Type** : Préparation sync Prompt Library
+**Statut** : Prepared — Not published
+**Publication Notion** : non exécutée
+**API Notion** : non appelée
+**CMP-001 create prompt** : non exécuté
 **Objet** : préparer la publication de PROMPT-ARCH-001 et PROMPT-SEC-001 dans la Prompt Library
 
 ---
@@ -25,8 +25,8 @@ Cette note **prépare le Lot 1** (Architecture & Sécurité) pour publication da
 
 | Source | Rôle |
 |--------|------|
-| `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` | Prompt Architecture — fichier Draft formalisé |
-| `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` | Prompt Sécurité / RSSI — fichier Draft formalisé |
+| `prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md` | Prompt Architecture — fichier Draft formalisé |
+| `prompts/security/prompt-sec-001-revue-canal-email-securise.md` | Prompt Sécurité / RSSI — fichier Draft formalisé |
 | `prompts/prompt-catalog.md` | Référencement §4 et §8 — statut Draft |
 | `notion-sync-existing-prompt-library-inventory.md` | Inventaire — Lot 1 recommandé |
 | `tools/cmp-001/src/schemas/prompt.schema.json` | Schéma CMP — catégories étendues |
@@ -40,8 +40,8 @@ Cette note **prépare le Lot 1** (Architecture & Sécurité) pour publication da
 
 | ID | Nom | Catégorie CMP | Statut | Source | Action |
 |----|-----|---------------|--------|--------|--------|
-| PROMPT-ARCH-001 | Revue intégrations et erreurs | **Architecture** | Draft | `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` | Publier après revue payload |
-| PROMPT-SEC-001 | Revue canal email sécurisé | **Security** | Draft | `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` | Publier après revue payload |
+| PROMPT-ARCH-001 | Revue intégrations et erreurs | **Architecture** | Draft | `prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md` | Publier après revue payload |
+| PROMPT-SEC-001 | Revue canal email sécurisé | **Security** | Draft | `prompts/security/prompt-sec-001-revue-canal-email-securise.md` | Publier après revue payload |
 
 **Doublons** : aucun PROMPT-ARCH-001 ni PROMPT-SEC-001 dans `exports/notion/prompts.json` au moment de la préparation.
 
diff --git a/projects/interv360/archive/pre-delivery-phases/03-process/process-scope.md b/projects/interv360/archive/pre-delivery-phases/03-process/process-scope.md
index e73b5fa..b456e2c 100644
--- a/projects/interv360/archive/pre-delivery-phases/03-process/process-scope.md
+++ b/projects/interv360/archive/pre-delivery-phases/03-process/process-scope.md
@@ -1,10 +1,10 @@
 # Interv360 — Cadrage de la phase processus BPMN
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 03-process  
-**Type** : Cadrage BPMN  
-**Statut** : Draft  
-**Méthode associée** : `docs/methods/process/bpmn-process-modeling-method.md`  
+**Projet** : PRJ-INTERV360
+**Phase** : 03-process
+**Type** : Cadrage BPMN
+**Statut** : Draft
+**Méthode associée** : `docs/methods/process/bpmn-process-modeling-method.md`
 **Standard associé** : `docs/methods/process/bpmn-deliverables-standard.md`
 
 ---
@@ -44,7 +44,7 @@ Le BPMN **ne doit pas** produire :
 | `projects/interv360/02-architecture/mvp-clarifications.md` | Clarifications MVP consolidées |
 | `projects/interv360/02-architecture/rules-rg-prioritization.md` | Règles RG prioritaires |
 | `projects/interv360/02-architecture/status-mapping.md` | Statuts MVP et transitions |
-| `projects/interv360/02-architecture/closure-without-signature.md` | Clôture sans signature |
+| `projects/interv360/02-architecture/2026-06-28-closure-without-signature.md` | Clôture sans signature |
 | `projects/interv360/02-architecture/geo-ai-arbitration.md` | Hors périmètre MVP géoloc / IA |
 | `projects/interv360/02-architecture/clarification-cycle-closure.md` | Synthèse de clôture clarification |
 
diff --git a/projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-scope.md b/projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-scope.md
index 8e6d7d9..6e8f618 100644
--- a/projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-scope.md
+++ b/projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-scope.md
@@ -1,9 +1,9 @@
 # Interv360 — Cadrage architecture fonctionnelle détaillée
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 05-functional-architecture  
-**Type** : Cadrage architecture fonctionnelle  
-**Statut** : Draft  
+**Projet** : PRJ-INTERV360
+**Phase** : 05-functional-architecture
+**Type** : Cadrage architecture fonctionnelle
+**Statut** : Draft
 **Branche** : `arch/interv360-functional-detail`
 
 ---
@@ -34,7 +34,7 @@ Ce document **ne produit pas** de backlog, de user stories, de tests, de code ou
 | `projects/interv360/02-architecture/clarification-cycle-closure.md` | Synthèse clarification |
 | `projects/interv360/02-architecture/rules-rg-prioritization.md` | Règles RG priorisées |
 | `projects/interv360/02-architecture/status-mapping.md` | Statuts MVP |
-| `projects/interv360/02-architecture/closure-without-signature.md` | Règles de clôture |
+| `projects/interv360/02-architecture/2026-06-28-closure-without-signature.md` | Règles de clôture |
 | `projects/interv360/03-process/process-analysis.md` | Analyse BPMN |
 | `projects/interv360/03-process/process-cycle-closure.md` | Synthèse BPMN |
 | `projects/interv360/04-adr/ADR-001-status-mapping.md` | Mapping durable des statuts |
diff --git a/projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p2.md b/projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p2.md
index 877f0a7..5e21b03 100644
--- a/projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p2.md
+++ b/projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p2.md
@@ -1,11 +1,11 @@
 # Interv360 — Enrichissement méthodes rôle après ADR P2 design-impact
 
-**Projet** : PRJ-INTERV360  
-**Phase** : 02-architecture  
-**Jalon** : ADR P2 design-impact  
-**Statut** : Done  
-**Type** : Synthèse de capitalisation méthodes rôle  
-**Source** : ADR-005 à ADR-008 + confirmation ADR-CAND-009 + synthèse P2  
+**Projet** : PRJ-INTERV360
+**Phase** : 02-architecture
+**Jalon** : ADR P2 design-impact
+**Statut** : Done
+**Type** : Synthèse de capitalisation méthodes rôle
+**Source** : ADR-005 à ADR-008 + confirmation ADR-CAND-009 + synthèse P2
 **Objet** : capitalisation des apprentissages P2 dans les méthodes rôle SFIA
 
 ---
@@ -29,7 +29,7 @@ Les apprentissages sont intégrés de manière **générique et réutilisable**
 | `ADR-006` — Notifications client sans portail client | Notifications simulées ; exclusions portail |
 | `ADR-007` — Signature client optionnelle structurée | Signature non bloquante ; pas e-signature |
 | `ADR-008` — Dashboard SAV et vue dirigeant séparés | Séparation dashboards ; KPI déterministes |
-| `ADR-CAND-009-ai-light-post-mvp-confirmation.md` | IA hors MVP ; anti-surpromesse |
+| `adr-cand-009-ai-light-post-mvp-confirmation.md` | IA hors MVP ; anti-surpromesse |
 | `architecture-p1-summary.md` | Continuité séquence P1 → P2 |
 | Méthodes rôle existantes (§14 P1) | Structure d'enrichissement réutilisée |
 
diff --git a/projects/interv360/archive/role-enrichment/role-methods-enrichment-after-figma-v1.md b/projects/interv360/archive/role-enrichment/role-methods-enrichment-after-figma-v1.md
index 0b90ab4..08fead7 100644
--- a/projects/interv360/archive/role-enrichment/role-methods-enrichment-after-figma-v1.md
+++ b/projects/interv360/archive/role-enrichment/role-methods-enrichment-after-figma-v1.md
@@ -1,11 +1,11 @@
 # Interv360 — Enrichissement méthodes rôle après Figma V1
 
-**Projet** : PRJ-INTERV360  
-**Phase source** : 02-architecture  
-**Jalon** : Figma V1  
-**Statut** : Completed  
-**Type** : Capitalisation méthodes rôle  
-**Source** : Figma V1 + revue Figma + préparation revue + template CR  
+**Projet** : PRJ-INTERV360
+**Phase source** : 02-architecture
+**Jalon** : Figma V1
+**Statut** : Completed
+**Type** : Capitalisation méthodes rôle
+**Source** : Figma V1 + revue Figma + préparation revue + template CR
 **Objet** : capitaliser les apprentissages Figma V1 dans les méthodes rôle SFIA
 
 ---
@@ -45,7 +45,7 @@ Ces enrichissements sont réalisés **avant** la production du **compte rendu de
 | `ux-ui-design-research-and-benchmark.md` | Recherche design |
 | `architecture-p1-summary.md` | ADR P1 ; intégrations simulées ; anomalies |
 | `architecture-p2-design-impact-summary.md` | ADR P2 design-impact ; exclusions Figma |
-| `adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` | IA hors MVP |
+| `adr/adr-cand-009-ai-light-post-mvp-confirmation.md` | IA hors MVP |
 | `figma-first-draft-screens/` | 11 captures versionnées |
 | Méthodes rôle existantes (§14 P1/P2) | Structure d'enrichissement réutilisée |
 
diff --git a/prompts/architecture/functional-architecture-prompt-family.md b/prompts/architecture/functional-architecture-prompt-family.md
index 44206ea..3ead372 100644
--- a/prompts/architecture/functional-architecture-prompt-family.md
+++ b/prompts/architecture/functional-architecture-prompt-family.md
@@ -1,13 +1,13 @@
 # Famille de prompts — Architecture fonctionnelle détaillée
 
-**Type** : Prompts Cursor / IA  
-**Domaine** : Architecture fonctionnelle  
-**Statut** : Draft  
-**Usage** : Réutilisable  
-**Méthode associée** : [`docs/practices/architecture/functional-architecture-method.md`](../../docs/practices/architecture/functional-architecture-method.md)  
-**Standard associé** : [`docs/practices/architecture/functional-architecture-deliverables-standard.md`](../../docs/practices/architecture/functional-architecture-deliverables-standard.md)  
-**Checklist associée** : [`docs/practices/architecture/functional-architecture-checklist.md`](../../docs/practices/architecture/functional-architecture-checklist.md)  
-**Templates associés** : `docs/templates/architecture/`  
+**Type** : Prompts Cursor / IA
+**Domaine** : Architecture fonctionnelle
+**Statut** : Draft
+**Usage** : Réutilisable
+**Méthode associée** : [`docs/practices/architecture/functional-architecture-method.md`](../../docs/practices/architecture/functional-architecture-method.md)
+**Standard associé** : [`docs/practices/architecture/functional-architecture-deliverables-standard.md`](../../docs/practices/architecture/functional-architecture-deliverables-standard.md)
+**Checklist associée** : [`docs/practices/architecture/functional-architecture-checklist.md`](../../docs/practices/architecture/functional-architecture-checklist.md)
+**Templates associés** : `docs/templates/architecture/`
 **Dossier** : `prompts/architecture/`
 
 ---
@@ -81,7 +81,7 @@ Remplacer ces variables **avant** exécution dans Cursor :
 
 ## 4. Prompt 1 — Ouvrir le cycle d'architecture fonctionnelle
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-architecture-scope.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-architecture-scope.md`
 **Commit recommandé :** `docs: open [PROJECT_NAME] functional architecture cycle`
 
 ```
@@ -144,7 +144,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 5. Prompt 2 — Définir les domaines fonctionnels
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-domains.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-domains.md`
 **Commit recommandé :** `docs: define [PROJECT_NAME] functional domains`
 
 ```
@@ -187,7 +187,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 6. Prompt 3 — Définir les objets métier
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/business-objects.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/business-objects.md`
 **Commit recommandé :** `docs: define [PROJECT_NAME] business objects`
 
 ```
@@ -230,7 +230,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 7. Prompt 4 — Définir les statuts et transitions
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/status-and-transitions.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/status-and-transitions.md`
 **Commit recommandé :** `docs: define [PROJECT_NAME] statuses and transitions`
 
 ```
@@ -274,7 +274,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 8. Prompt 5 — Décrire la vue fonctionnelle des intégrations
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/integration-functional-view.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/integration-functional-view.md`
 **Commit recommandé :** `docs: define [PROJECT_NAME] functional integration view`
 
 ```
@@ -318,7 +318,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 9. Prompt 6 — Décrire dashboard, alertes et pilotage
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/dashboard-and-alerts.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/dashboard-and-alerts.md`
 **Commit recommandé :** `docs: define [PROJECT_NAME] dashboard and alerts`
 
 ```
@@ -362,7 +362,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 10. Prompt 7 — Consolider la synthèse d'architecture fonctionnelle
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-architecture-summary.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-architecture-summary.md`
 **Commit recommandé :** `docs: summarize [PROJECT_NAME] functional architecture`
 
 ```
@@ -407,7 +407,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 11. Prompt 8 — Clôturer le cycle d'architecture fonctionnelle
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-architecture-cycle-closure.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-architecture-cycle-closure.md`
 **Commit recommandé :** `docs: close [PROJECT_NAME] functional architecture cycle`
 
 ```
@@ -429,7 +429,7 @@ cd [WORKSPACE_PATH] && git status && git log --oneline -10
 
 2. Relire tous les livrables
 Tous les fichiers de [PROJECT_PHASE_PATH]/
-docs/templates/architecture/functional-architecture-cycle-closure-template.md
+docs/templates/architecture/2026-06-28-functional-architecture-cycle-closure-template.md
 docs/practices/architecture/functional-architecture-checklist.md
 
 3. Créer le fichier
@@ -450,7 +450,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 12. Prompt 9 — Contrôle qualité du cycle
 
-**Objectif :** contrôler un cycle existant **sans modifier** les fichiers sauf demande explicite.  
+**Objectif :** contrôler un cycle existant **sans modifier** les fichiers sauf demande explicite.
 **Commit par défaut :** aucun.
 
 ```
@@ -494,7 +494,7 @@ docs/practices/architecture/functional-architecture-deliverables-standard.md
 
 ## 13. Prompt 10 — Préparer la PR du cycle
 
-**Objectif :** préparer une PR vers `[BASE_BRANCH]` **sans merge automatique**.  
+**Objectif :** préparer une PR vers `[BASE_BRANCH]` **sans merge automatique**.
 **Titre PR recommandé :** `Add [PROJECT_NAME] functional architecture`
 
 ```
diff --git a/prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md b/prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md
similarity index 97%
rename from prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md
rename to prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md
index 92e1383..90d0003 100644
--- a/prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md
+++ b/prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md
@@ -1,14 +1,14 @@
 # PROMPT-ARCH-001 — Revue intégrations et erreurs
 
-**ID** : PROMPT-ARCH-001  
-**Nom** : Revue intégrations et erreurs  
-**Famille** : Architecture  
-**Dossier** : `prompts/architecture/`  
-**Statut** : Draft  
-**Source pilote** : PRJ-INTERV360  
-**Phase SFIA** : Architecture  
-**Rôles mobilisés** : Architecte, QA / Testeur, RSSI, UX/UI Designer, Product Owner, Chef de projet  
-**Livrables sources** : ADR-001, ADR-002, ADR-003, ADR-004  
+**ID** : PROMPT-ARCH-001
+**Nom** : Revue intégrations et erreurs
+**Famille** : Architecture
+**Dossier** : `prompts/architecture/`
+**Statut** : Draft
+**Source pilote** : PRJ-INTERV360
+**Phase SFIA** : Architecture
+**Rôles mobilisés** : Architecte, QA / Testeur, RSSI, UX/UI Designer, Product Owner, Chef de projet
+**Livrables sources** : ADR-001, ADR-002, ADR-003, ADR-004
 **Type** : Prompt SFIA réutilisable
 
 ---
diff --git a/prompts/bpmn/bpmn-prompt-family.md b/prompts/bpmn/bpmn-prompt-family.md
index 48305b4..3af0225 100644
--- a/prompts/bpmn/bpmn-prompt-family.md
+++ b/prompts/bpmn/bpmn-prompt-family.md
@@ -1,13 +1,13 @@
 # SFIA — Famille de prompts BPMN
 
-**Type** : Prompt Family  
-**Statut** : Draft  
-**Domaine** : Process Modeling / BPMN  
-**Méthode associée** : [`docs/practices/process/bpmn-process-modeling-method.md`](../../docs/practices/process/bpmn-process-modeling-method.md)  
-**Standard associé** : [`docs/practices/process/bpmn-deliverables-standard.md`](../../docs/practices/process/bpmn-deliverables-standard.md)  
-**Checklist associée** : [`docs/practices/process/bpmn-integration-checklist.md`](../../docs/practices/process/bpmn-integration-checklist.md)  
-**Templates associés** : `docs/templates/process/`  
-**Dossier** : `prompts/bpmn/`  
+**Type** : Prompt Family
+**Statut** : Draft
+**Domaine** : Process Modeling / BPMN
+**Méthode associée** : [`docs/practices/process/bpmn-process-modeling-method.md`](../../docs/practices/process/bpmn-process-modeling-method.md)
+**Standard associé** : [`docs/practices/process/bpmn-deliverables-standard.md`](../../docs/practices/process/bpmn-deliverables-standard.md)
+**Checklist associée** : [`docs/practices/process/bpmn-integration-checklist.md`](../../docs/practices/process/bpmn-integration-checklist.md)
+**Templates associés** : `docs/templates/process/`
+**Dossier** : `prompts/bpmn/`
 **Catalogue** : `prompts/prompt-catalog.md` §15
 
 ---
@@ -257,7 +257,7 @@ Garde-fous :
 | Élément | Contenu |
 |---------|---------|
 | **Objectif** | Produire la synthèse de clôture et préparer la PR unique |
-| **Entrées** | Tous les livrables 03-process ; template `bpmn-cycle-closure-template.md` |
+| **Entrées** | Tous les livrables 03-process ; template `2026-06-28-bpmn-cycle-closure-template.md` |
 | **Sortie attendue** | `process-cycle-closure.md` ; tableau PR ; recommandations post-merge |
 | **Garde-fous** | Ne pas merger automatiquement ; ne pas créer la PR sans demande explicite |
 
@@ -268,7 +268,7 @@ Objectif : clôturer le cycle BPMN du projet {project_name} ({project_id}).
 
 Contexte :
 - Branche : {branch}
-- Template : docs/templates/process/bpmn-cycle-closure-template.md
+- Template : docs/templates/process/2026-06-28-bpmn-cycle-closure-template.md
 - Livrables : bpmn/, exports/, process-scope.md, process-analysis.md
 
 Tâches :
diff --git a/prompts/prompt-catalog.md b/prompts/prompt-catalog.md
index cc3b5aa..3333b1a 100644
--- a/prompts/prompt-catalog.md
+++ b/prompts/prompt-catalog.md
@@ -7,9 +7,9 @@ scope: prompt catalog
 
 # SFIA Prompt Catalog v1.1
 
-**Version:** v1.1  
-**Status:** Candidate catalog  
-**Updated after:** SFIA prompt generation engine specification  
+**Version:** v1.1
+**Status:** Candidate catalog
+**Updated after:** SFIA prompt generation engine specification
 **Scope:** Prompt catalog
 
 ## 1. Objectif
@@ -32,7 +32,7 @@ Il traduit la doctrine du Prompt Generation Engine en familles de prompts et pro
 ## 2. Documents de référence
 
 - `docs/foundation/sfia-engineering-principles.md`
-- `docs/architecture/sfia-decision-engine.md`
+- `docs/architecture/2026-06-27-sfia-decision-engine.md`
 - `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
 - `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
 - `method/sfia-fast-track/automation/sfia-validation-engine.md`
@@ -1199,7 +1199,7 @@ The priority full prompt templates are maintained in:
 | `prompts/templates/02-update-document-v1-1.md` | Update Document to v1.1 | Candidate |
 | `prompts/templates/03-create-operational-checklist.md` | Create Operational Checklist | Candidate |
 | `prompts/templates/04-validate-cursor-result.md` | Validate Cursor Result | Candidate |
-| `prompts/templates/05-validate-pr-readiness.md` | Validate PR Readiness | Candidate |
+| `prompts/templates/2026-07-04-05-validate-pr-readiness.md` | Validate PR Readiness | Candidate |
 | `prompts/templates/06-prepare-pr-summary.md` | Prepare PR Summary | Candidate |
 | `prompts/templates/07-write-post-merge-status.md` | Write Post-Merge Status | Candidate |
 | `prompts/templates/08-capitalize-method-asset.md` | Capitalize Method Asset | Candidate |
@@ -1264,7 +1264,7 @@ Full operational prompt templates are maintained separately in `prompts/template
 | **Distinct de** | `PROMPT-QA-001` à `010` — famille amont `qa-tester-prompt-family.md` |
 | **Standard** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` |
 | **Usage** | QA-G0…G4 ; stratégie/scénarios ; tests ; rapports ; réserves ; QA readiness (QA-G3) ; post-merge (QA-G4) ; PR readiness delivery |
-| **Closure / capitalisation** | `sfia-v2-incremental-delivery-closure-standard.md` |
+| **Closure / capitalisation** | `2026-07-06-sfia-v2-incremental-delivery-closure-standard.md` |
 
 ## 15. Supplément SFIA v2.0 — Design coverage (pilote)
 
@@ -1291,7 +1291,7 @@ Full operational prompt templates are maintained separately in `prompts/template
 | Élément | Valeur |
 |---------|--------|
 | **Famille** | Technical architecture & decision documentation |
-| **Standard** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md` |
+| **Standard** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md` |
 | **Templates** | §18 — ADR light, DAA light, DAT light |
 | **Routing** | `sfia-cycle-routing-guide.md` — §6.16 |
 | **Checklist** | `sfia-validation-checklist.md` — §12.3 |
diff --git a/prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md b/prompts/security/prompt-sec-001-revue-canal-email-securise.md
similarity index 97%
rename from prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md
rename to prompts/security/prompt-sec-001-revue-canal-email-securise.md
index 1d5f6f0..56eb760 100644
--- a/prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md
+++ b/prompts/security/prompt-sec-001-revue-canal-email-securise.md
@@ -1,14 +1,14 @@
 # PROMPT-SEC-001 — Revue canal email sécurisé
 
-**ID** : PROMPT-SEC-001  
-**Nom** : Revue canal email sécurisé  
-**Famille** : Sécurité / RSSI  
-**Dossier** : `prompts/security/`  
-**Statut** : Draft  
-**Source pilote** : PRJ-INTERV360  
-**Phase SFIA** : Cadrage / Architecture  
-**Rôles mobilisés** : RSSI, Architecte, Product Owner, Business Analyst, QA / Testeur, UX/UI Designer, Chef de projet  
-**Livrables sources** : `secure-email-intake-review.md`, ADR-003, ADR-004  
+**ID** : PROMPT-SEC-001
+**Nom** : Revue canal email sécurisé
+**Famille** : Sécurité / RSSI
+**Dossier** : `prompts/security/`
+**Statut** : Draft
+**Source pilote** : PRJ-INTERV360
+**Phase SFIA** : Cadrage / Architecture
+**Rôles mobilisés** : RSSI, Architecte, Product Owner, Business Analyst, QA / Testeur, UX/UI Designer, Chef de projet
+**Livrables sources** : `secure-email-intake-review.md`, ADR-003, ADR-004
 **Type** : Prompt SFIA réutilisable
 
 ---
diff --git a/prompts/templates/01-create-foundation-document.md b/prompts/templates/01-create-foundation-document.md
index 2e1960e..33b58aa 100644
--- a/prompts/templates/01-create-foundation-document.md
+++ b/prompts/templates/01-create-foundation-document.md
@@ -9,9 +9,9 @@ scope: create foundation document
 
 # Create Foundation Document
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** Documentation creation prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** Documentation creation prompts
 **Scope:** Create a new SFIA foundation document
 
 ## 1. Purpose
@@ -73,7 +73,7 @@ Phase / contexte SFIA :
 
 Sources de référence :
 - docs/foundation/sfia-engineering-principles.md
-- docs/architecture/sfia-decision-engine.md
+- docs/architecture/2026-06-27-sfia-decision-engine.md
 - <REFERENCE_SOURCES>
 
 Dossier cible :
@@ -98,7 +98,7 @@ Hors périmètre :
 
 Fichiers à lire :
 - docs/foundation/sfia-engineering-principles.md
-- docs/architecture/sfia-decision-engine.md
+- docs/architecture/2026-06-27-sfia-decision-engine.md
 - <REFERENCE_SOURCES>
 
 Fichiers à modifier :
diff --git a/prompts/templates/05-validate-pr-readiness.md b/prompts/templates/2026-07-04-05-validate-pr-readiness.md
similarity index 97%
rename from prompts/templates/05-validate-pr-readiness.md
rename to prompts/templates/2026-07-04-05-validate-pr-readiness.md
index db82b64..bd93622 100644
--- a/prompts/templates/05-validate-pr-readiness.md
+++ b/prompts/templates/2026-07-04-05-validate-pr-readiness.md
@@ -9,9 +9,9 @@ scope: validate pr readiness
 
 # Validate PR Readiness
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** Validation prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** Validation prompts
 **Scope:** Assess whether a branch is ready for PR
 
 ## 1. Purpose
diff --git a/prompts/templates/sfia-prompt-templates-context-pack.md b/prompts/templates/sfia-prompt-templates-context-pack.md
index 1da6f42..4589a0f 100644
--- a/prompts/templates/sfia-prompt-templates-context-pack.md
+++ b/prompts/templates/sfia-prompt-templates-context-pack.md
@@ -7,7 +7,7 @@ source_files:
   - prompts/templates/02-update-document-v1-1.md
   - prompts/templates/03-create-operational-checklist.md
   - prompts/templates/04-validate-cursor-result.md
-  - prompts/templates/05-validate-pr-readiness.md
+  - prompts/templates/2026-07-04-05-validate-pr-readiness.md
   - prompts/templates/06-prepare-pr-summary.md
   - prompts/templates/07-write-post-merge-status.md
   - prompts/templates/08-capitalize-method-asset.md
@@ -33,7 +33,7 @@ Canonical files remain:
 - `prompts/templates/02-update-document-v1-1.md`
 - `prompts/templates/03-create-operational-checklist.md`
 - `prompts/templates/04-validate-cursor-result.md`
-- `prompts/templates/05-validate-pr-readiness.md`
+- `prompts/templates/2026-07-04-05-validate-pr-readiness.md`
 - `prompts/templates/06-prepare-pr-summary.md`
 - `prompts/templates/07-write-post-merge-status.md`
 - `prompts/templates/08-capitalize-method-asset.md`
@@ -62,9 +62,9 @@ scope: create foundation document
 
 # Create Foundation Document
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** Documentation creation prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** Documentation creation prompts
 **Scope:** Create a new SFIA foundation document
 
 ## 1. Purpose
@@ -126,7 +126,7 @@ Phase / contexte SFIA :
 
 Sources de référence :
 - docs/foundation/sfia-engineering-principles.md
-- docs/architecture/sfia-decision-engine.md
+- docs/architecture/2026-06-27-sfia-decision-engine.md
 - <REFERENCE_SOURCES>
 
 Dossier cible :
@@ -151,7 +151,7 @@ Hors périmètre :
 
 Fichiers à lire :
 - docs/foundation/sfia-engineering-principles.md
-- docs/architecture/sfia-decision-engine.md
+- docs/architecture/2026-06-27-sfia-decision-engine.md
 - <REFERENCE_SOURCES>
 
 Fichiers à modifier :
@@ -256,9 +256,9 @@ scope: update document to v1.1
 
 # Update Document to v1.1
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** Documentation consolidation prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** Documentation consolidation prompts
 **Scope:** Update an existing document to v1.1
 
 ## 1. Purpose
@@ -430,9 +430,9 @@ scope: create operational checklist
 
 # Create Operational Checklist
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** Documentation creation prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** Documentation creation prompts
 **Scope:** Create an operational checklist from a specification
 
 ## 1. Purpose
@@ -590,9 +590,9 @@ scope: validate cursor result
 
 # Validate Cursor Result
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** Validation prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** Validation prompts
 **Scope:** Validate a Cursor execution result
 
 ## 1. Purpose
@@ -736,7 +736,7 @@ This template is analysis-only unless explicitly extended to fix issues.
 
 # Template 05 — Validate PR Readiness
 
-Source: `prompts/templates/05-validate-pr-readiness.md`
+Source: `prompts/templates/2026-07-04-05-validate-pr-readiness.md`
 
 ---
 status: candidate
@@ -749,9 +749,9 @@ scope: validate pr readiness
 
 # Validate PR Readiness
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** Validation prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** Validation prompts
 **Scope:** Assess whether a branch is ready for PR
 
 ## 1. Purpose
@@ -903,9 +903,9 @@ scope: prepare pr summary
 
 # Prepare PR Summary
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** PR and post-merge prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** PR and post-merge prompts
 **Scope:** Prepare a structured PR summary
 
 ## 1. Purpose
@@ -1060,9 +1060,9 @@ scope: write post-merge status
 
 # Write Post-Merge Status
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** PR and post-merge prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** PR and post-merge prompts
 **Scope:** Document post-merge closure
 
 ## 1. Purpose
@@ -1213,9 +1213,9 @@ scope: capitalize method asset
 
 # Capitalize Method Asset
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** Capitalization prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** Capitalization prompts
 **Scope:** Promote a validated asset into method capitalization
 
 ## 1. Purpose
@@ -1369,9 +1369,9 @@ scope: prepare notion mapping
 
 # Prepare Notion Mapping
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** Notion preparation prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** Notion preparation prompts
 **Scope:** Prepare Notion mapping without publication
 
 ## 1. Purpose
@@ -1532,9 +1532,9 @@ scope: perform safe repository cleanup
 
 # Perform Safe Repository Cleanup
 
-**Version:** v1.1  
-**Status:** Candidate template  
-**Family:** Repository execution prompts  
+**Version:** v1.1
+**Status:** Candidate template
+**Family:** Repository execution prompts
 **Scope:** Perform safe repository cleanup
 
 ## 1. Purpose
diff --git a/prompts/ux-ui/figma-fidelity-gate-prompt-family.md b/prompts/ux-ui/figma-fidelity-gate-prompt-family.md
index 2b96c6c..c001de7 100644
--- a/prompts/ux-ui/figma-fidelity-gate-prompt-family.md
+++ b/prompts/ux-ui/figma-fidelity-gate-prompt-family.md
@@ -1,10 +1,10 @@
 # Famille de prompts — Figma Fidelity Gate / Spike
 
-**Type :** Prompts Cursor / IA  
-**Domaine :** UX/UI — fidélité Figma design-to-code  
-**Statut :** Draft — capitalisé depuis Chantiers360 v2 (PR #104, #105)  
-**Usage :** Réutilisable  
-**Standard associé :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`  
+**Type :** Prompts Cursor / IA
+**Domaine :** UX/UI — fidélité Figma design-to-code
+**Statut :** Draft — capitalisé depuis Chantiers360 v2 (PR #104, #105)
+**Usage :** Réutilisable
+**Standard associé :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`
 **Dossier :** `prompts/ux-ui/`
 
 > **Référence d'application :** Chantiers360 v2 — `projects/chantiers360-v2/06-figma-fidelity-spike/`, PR #104 (spike), PR #105 (alignement post-spike).
@@ -110,7 +110,7 @@ Ces prompts **ne doivent pas** :
 | FFG-005 | Execute Documentation Change |
 | Capitalisation | Capitalize Method Asset |
 
-Templates : `prompts/templates/05-validate-pr-readiness.md`, `07-write-post-merge-status.md`, `08-capitalize-method-asset.md`.
+Templates : `prompts/templates/2026-07-04-05-validate-pr-readiness.md`, `07-write-post-merge-status.md`, `08-capitalize-method-asset.md`.
 
 **Templates FFG dédiés longs :** cycle ultérieur — cette famille documente les intentions opérationnelles.
 
diff --git a/prompts/ux-ui/ux-ui-reprise-prompt-family.md b/prompts/ux-ui/ux-ui-reprise-prompt-family.md
index d7e8022..55a09f6 100644
--- a/prompts/ux-ui/ux-ui-reprise-prompt-family.md
+++ b/prompts/ux-ui/ux-ui-reprise-prompt-family.md
@@ -1,13 +1,13 @@
 # Famille de prompts — Reprise UX/UI documentaire
 
-**Type** : Prompts Cursor / IA  
-**Domaine** : UX/UI — reprise documentaire  
-**Statut** : Draft  
-**Usage** : Réutilisable  
-**Méthode associée** : [`docs/practices/ux-ui/ux-ui-reprise-method.md`](../../docs/practices/ux-ui/ux-ui-reprise-method.md)  
-**Standard associé** : [`docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md`](../../docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md)  
-**Checklist associée** : [`docs/practices/ux-ui/ux-ui-reprise-checklist.md`](../../docs/practices/ux-ui/ux-ui-reprise-checklist.md)  
-**Templates associés** : `docs/templates/ux-ui/`  
+**Type** : Prompts Cursor / IA
+**Domaine** : UX/UI — reprise documentaire
+**Statut** : Draft
+**Usage** : Réutilisable
+**Méthode associée** : [`docs/practices/ux-ui/ux-ui-reprise-method.md`](../../docs/practices/ux-ui/ux-ui-reprise-method.md)
+**Standard associé** : [`docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md`](../../docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md)
+**Checklist associée** : [`docs/practices/ux-ui/ux-ui-reprise-checklist.md`](../../docs/practices/ux-ui/ux-ui-reprise-checklist.md)
+**Templates associés** : `docs/templates/ux-ui/`
 **Dossier** : `prompts/ux-ui/`
 
 > **Référence d'application :** le cycle Interv360 `projects/interv360/06-ux-ui/` illustre l'application de cette famille de prompts.
@@ -85,7 +85,7 @@ Remplacer ces variables **avant** exécution dans Cursor :
 
 ## 4. Prompt 1 — Ouvrir le cycle reprise UX/UI
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-reprise-scope.md` (après analyse si séparée)  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-reprise-scope.md` (après analyse si séparée)
 **Commit recommandé :** `docs: open [PROJECT_NAME] UX UI reprise cycle`
 
 ```
@@ -150,7 +150,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 5. Prompt 2 — Produire état des lieux
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-reprise-analysis.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-reprise-analysis.md`
 **Commit recommandé :** `docs: analyze [PROJECT_NAME] UX UI reprise`
 
 ```
@@ -193,7 +193,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 6. Prompt 3 — Produire cadrage
 
-**Objectif :** créer ou compléter `[PROJECT_PHASE_PATH]/ux-ui-reprise-scope.md`  
+**Objectif :** créer ou compléter `[PROJECT_PHASE_PATH]/ux-ui-reprise-scope.md`
 **Commit recommandé :** `docs: scope [PROJECT_NAME] UX UI reprise`
 
 ```
@@ -236,7 +236,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 7. Prompt 4 — Produire parcours utilisateurs
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/user-journeys.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/user-journeys.md`
 **Commit recommandé :** `docs: define [PROJECT_NAME] UX UI user journeys`
 
 ```
@@ -276,7 +276,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 8. Prompt 5 — Produire inventaire écrans
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/screen-inventory.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/screen-inventory.md`
 **Commit recommandé :** `docs: inventory [PROJECT_NAME] UX UI screens`
 
 ```
@@ -317,7 +317,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 9. Prompt 6 — Produire specs écran
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/screen-functional-specs.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/screen-functional-specs.md`
 **Commit recommandé :** `docs: specify [PROJECT_NAME] UX UI screens`
 
 ```
@@ -358,7 +358,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 10. Prompt 7 — Produire dashboard views
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/dashboard-ux-view.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/dashboard-ux-view.md`
 **Commit recommandé :** `docs: define [PROJECT_NAME] UX UI dashboard views`
 
 ```
@@ -398,7 +398,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 11. Prompt 8 — Produire synthèse
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-summary.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-summary.md`
 **Commit recommandé :** `docs: summarize [PROJECT_NAME] UX UI reprise`
 
 ```
@@ -437,7 +437,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 12. Prompt 9 — Produire clôture
 
-**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-cycle-closure.md`  
+**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-cycle-closure.md`
 **Commit recommandé :** `docs: close [PROJECT_NAME] UX UI reprise cycle`
 
 ```
@@ -459,7 +459,7 @@ cd [WORKSPACE_PATH] && git status && git log --oneline -10
 
 2. Relire tous les livrables
 Tous les fichiers de [PROJECT_PHASE_PATH]/
-docs/templates/ux-ui/ux-ui-cycle-closure-template.md
+docs/templates/ux-ui/2026-06-28-ux-ui-cycle-closure-template.md
 docs/practices/ux-ui/ux-ui-reprise-checklist.md
 
 3. Créer le fichier
@@ -477,7 +477,7 @@ git push [REMOTE_NAME] [BRANCH_NAME]
 
 ## 13. Prompt 10 — Contrôle qualité global
 
-**Objectif :** contrôler un cycle existant **sans modifier** les fichiers sauf demande explicite.  
+**Objectif :** contrôler un cycle existant **sans modifier** les fichiers sauf demande explicite.
 **Commit par défaut :** aucun.
 
 ```
@@ -521,7 +521,7 @@ docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md
 
 ## 14. Prompt 11 — Préparation PR
 
-**Objectif :** préparer une PR vers `[BASE_BRANCH]` **sans merge automatique**.  
+**Objectif :** préparer une PR vers `[BASE_BRANCH]` **sans merge automatique**.
 **Titre PR recommandé :** `Add [PROJECT_NAME] UX UI reprise documentation`
 
 ```
diff --git a/tools/cmp-001/README.md b/tools/cmp-001/README.md
index 52d37a7..827409b 100644
--- a/tools/cmp-001/README.md
+++ b/tools/cmp-001/README.md
@@ -1,8 +1,8 @@
 # SFIA Notion Sync
 
-**Composant** : CMP-001 — SFIA Notion Sync  
-**Version** : v1.1.0  
-**Status** : Stable  
+**Composant** : CMP-001 — SFIA Notion Sync
+**Version** : v1.1.0
+**Status** : Stable
 **Production Ready** : Yes
 
 Connecteur local pour alimenter Notion avec les objets structurés du Domain Model SFIA, et les exporter en JSON pour audit (ChatGPT, Cursor).
@@ -235,7 +235,7 @@ Chaque schéma définit :
 ## Documentation projet
 
 - [CHANGELOG.md](CHANGELOG.md) — historique des versions
-- [ROADMAP.md](ROADMAP.md) — orientations futures (v1.1, v2)
+- [roadmap.md](roadmap.md) — orientations futures (v1.1, v2)
 
 ## Licence
 
diff --git a/tools/cmp-001/config/sfia-v1-1-workspace.config.json b/tools/cmp-001/config/sfia-v1-1-workspace.config.json
index 5d9dc09..3bc058f 100644
--- a/tools/cmp-001/config/sfia-v1-1-workspace.config.json
+++ b/tools/cmp-001/config/sfia-v1-1-workspace.config.json
@@ -145,7 +145,7 @@
           "status": "planned",
           "repoLinks": [
             {
-              "path": "docs/architecture/sfia-decision-engine.md"
+              "path": "docs/architecture/2026-06-27-sfia-decision-engine.md"
             }
           ]
         },
@@ -355,7 +355,7 @@
           "status": "planned",
           "repoLinks": [
             {
-              "path": "method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md"
+              "path": "method/sfia-fast-track/documentation/notion/2026-07-04-sfia-notion-live-export-audit.md"
             }
           ]
         }
diff --git a/tools/cmp-001/docs/consolidation-report.md b/tools/cmp-001/docs/2026-06-27-consolidation-report.md
similarity index 98%
rename from tools/cmp-001/docs/consolidation-report.md
rename to tools/cmp-001/docs/2026-06-27-consolidation-report.md
index 940c13a..09c7d97 100644
--- a/tools/cmp-001/docs/consolidation-report.md
+++ b/tools/cmp-001/docs/2026-06-27-consolidation-report.md
@@ -1,7 +1,7 @@
 # Rapport de consolidation SFIA — Notion
 
-**Date** : 2026-06-27  
-**Composant** : CMP-001 — SFIA Notion Sync  
+**Date** : 2026-06-27
+**Composant** : CMP-001 — SFIA Notion Sync
 **Action** : Consolidation du référentiel post-audit global
 
 ---
diff --git a/tools/cmp-001/docs/components-database-evolution.md b/tools/cmp-001/docs/components-database-evolution.md
index f83d060..8192345 100644
--- a/tools/cmp-001/docs/components-database-evolution.md
+++ b/tools/cmp-001/docs/components-database-evolution.md
@@ -1,7 +1,7 @@
 # Évolution proposée — Base Components
 
-**Composant** : CMP-001 — SFIA Notion Sync  
-**Date** : 2026-06-27  
+**Composant** : CMP-001 — SFIA Notion Sync
+**Date** : 2026-06-27
 **Statut** : Proposition — **non implémentée dans Notion**
 
 ## Contexte
@@ -34,7 +34,7 @@ La fiche **CMP-001** concentre aujourd'hui de nombreuses métadonnées dans le c
 | **Repository** | url | Existant | Conserver — lien vers le code source |
 | **Documentation** | url | Existant | Conserver — README principal |
 | **Changelog** | url | Non | Lien vers CHANGELOG.md ou page dédiée |
-| **Roadmap** | url | Non | Lien vers ROADMAP.md ou page dédiée |
+| **Roadmap** | url | Non | Lien vers roadmap.md ou page dédiée |
 
 ## Schéma cible proposé
 
diff --git a/tools/cmp-001/examples/component-cmp001.json b/tools/cmp-001/examples/component-cmp001.json
index 9b8d4a9..ff5893d 100644
--- a/tools/cmp-001/examples/component-cmp001.json
+++ b/tools/cmp-001/examples/component-cmp001.json
@@ -3,7 +3,7 @@
   "status": "Active",
   "type": "Connector",
   "criticality": "High",
-  "currentVersion": "ID: CMP-001 | Nom: SFIA Notion Sync | Version: v1.0.0 | Statut: Stable | Catégorie: Core Component | Domaine: Knowledge Platform | Production Ready: Oui | Tests: 10/10 validés\n\nDescription:\nConnecteur officiel permettant de créer et mettre à jour les objets SFIA dans Notion via l'API Notion.\n\nObjectif:\nStandardiser les échanges entre la plateforme SFIA et Notion.\n\nFonctionnalités:\n- Découverte automatique des bases\n- Génération automatique du fichier .env\n- Création des objets du Domain Model\n- Validation JSON\n- Tests automatisés\n\nDocumentation: README.md | Changelog: CHANGELOG.md | Roadmap: ROADMAP.md",
+  "currentVersion": "ID: CMP-001 | Nom: SFIA Notion Sync | Version: v1.0.0 | Statut: Stable | Catégorie: Core Component | Domaine: Knowledge Platform | Production Ready: Oui | Tests: 10/10 validés\n\nDescription:\nConnecteur officiel permettant de créer et mettre à jour les objets SFIA dans Notion via l'API Notion.\n\nObjectif:\nStandardiser les échanges entre la plateforme SFIA et Notion.\n\nFonctionnalités:\n- Découverte automatique des bases\n- Génération automatique du fichier .env\n- Création des objets du Domain Model\n- Validation JSON\n- Tests automatisés\n\nDocumentation: README.md | Changelog: CHANGELOG.md | Roadmap: roadmap.md",
   "repository": "https://github.com/sfia-platform/sfia-notion-sync",
   "documentation": "https://github.com/sfia-platform/sfia-notion-sync/blob/main/README.md"
 }
diff --git a/tools/cmp-001/ROADMAP.md b/tools/cmp-001/roadmap.md
similarity index 100%
rename from tools/cmp-001/ROADMAP.md
rename to tools/cmp-001/roadmap.md
diff --git a/tools/cmp-001/WORKSPACE.md b/tools/cmp-001/workspace.md
similarity index 100%
rename from tools/cmp-001/WORKSPACE.md
rename to tools/cmp-001/workspace.md

```
