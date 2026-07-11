---
status: temporary-review-handoff
branch: sfia/review-handoff
source: .tmp-sfia-review/chatgpt-review.md
canonical: false
merge_to_main: forbidden
updated_for: PR 165 Pass Authority
cycle: Pass Authority
head_initial: 9011ccf6c0c11c8d8b6d99c589d313a4cb9b2ce3
commit_substantif: c419e4665916493a2ab2f5e42bb72f2aff3216d1
head_pr: c419e4665916493a2ab2f5e42bb72f2aff3216d1
csv_sha: ab75fe9b7da7db376fa4ca4bea73d0673949af6ca9c1d47b3d05363d5963f1ee
authority: canonical=3,reference=75,supporting=191,informational=774,unknown=2
usage: 469/545/31
lifecycle: frozen
migrations: not_started
pr_merged: false
---

# SFIA v2.6 — Review Pack (Full)

**Date/heure :** 2026-07-11 20:02 Europe/Paris
**Cycle :** Validation de cartographie — Pass Authority
**Profil :** Critical
**Branche :** audit/sfia-v2.6-repository-cartography
**HEAD initial :** `9011ccf6c0c11c8d8b6d99c589d313a4cb9b2ce3`
**Commit substantif :** `c419e4665916493a2ab2f5e42bb72f2aff3216d1`
**HEAD courant PR :** `c419e4665916493a2ab2f5e42bb72f2aff3216d1`
**Base :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
**synthesis only = no**

## Local Git Truth Check

- HEAD initial: `9011ccf6c0c11c8d8b6d99c589d313a4cb9b2ce3`
- PR #165: OPEN, non-mergée
- Usage frozen: 469/545/31

## Nomenclature Authority

| Valeur | Count final |
|--------|------------:|
| informational | 774 |
| supporting | 191 |
| reference | 75 |
| canonical | 3 |
| unknown | 2 |

## CSV SHA

- avant Pass Authority: `2000dc36a3410ec37a803d0baeb53846eda67b38cd1d45bfbc805bda8a0ab51a`
- après Pass Authority: `ab75fe9b7da7db376fa4ca4bea73d0673949af6ca9c1d47b3d05363d5963f1ee`

## Matrice préalable

```json
{
  "timestamp": "2026-07-11T20:01:36.550512+02:00",
  "A_count": 534,
  "existing_authority": {
    "reference": 74,
    "informational": 298,
    "unknown": 534,
    "supporting": 136,
    "canonical": 3
  },
  "A_by_family": {
    "F06": 31,
    "F04": 26,
    "F07": 12,
    "F01": 11,
    "F15": 39,
    "F03": 6,
    "F08": 390,
    "F14": 1,
    "F05": 18
  },
  "A_by_lifecycle": {
    "validated": 112,
    "draft": 130,
    "candidate": 92,
    "archived": 155,
    "superseded": 1,
    "not-applicable": 44
  },
  "A_by_trajectory": {
    "N/A": 428,
    "SFIA v1.1": 5,
    "SFIA v2.4": 101
  },
  "A_by_usage": {
    "operational": 190,
    "non-operational": 326,
    "unknown": 18
  },
  "A_canonical_candidate_yes": 0,
  "A_morris_gate": 1
}
```

## Distribution avant/après

| Authority | Avant | Après |
|-----------|------:|------:|
| unknown | 534 | 2 |
| informational | 298 | 774 |
| supporting | 136 | 191 |
| reference | 74 | 75 |
| canonical | 3 | 3 |

## Unknown résiduels

- `method/complementary/controlled-delivery/controlled-delivery-standard.md`
- `method/sfia-fast-track/documentation/documentation-structure-target.md`

## Cas Morris

- `method/complementary/controlled-delivery/controlled-delivery-standard.md` — AUTHORITY MORRIS GATE — Candidate v2.4 standard may require explicit baseline authority decision bef
- `method/sfia-fast-track/documentation/documentation-structure-target.md` — AUTHORITY MORRIS GATE — Confirm authority disposition for superseded documentation-structure-target 

## Résultat par fichier (A = 534)

### `docs/architecture/sfia-decision-engine.md`
- authority: **supporting**
- scope: architecture-reference
- proof: validated-architecture-foundation
- reference: `docs/architecture/sfia-decision-engine.md:validated+docs/architecture`
- confidence: medium

### `docs/architecture/sfia-delivery-pipeline.md`
- authority: **supporting**
- scope: architecture-reference
- proof: validated-architecture-foundation
- reference: `docs/architecture/sfia-delivery-pipeline.md:validated+docs/architecture`
- confidence: medium

### `docs/architecture/sfia-domain-model.md`
- authority: **supporting**
- scope: architecture-reference
- proof: validated-architecture-foundation
- reference: `docs/architecture/sfia-domain-model.md:validated+docs/architecture`
- confidence: medium

### `docs/architecture/sfia-meta-model.md`
- authority: **supporting**
- scope: architecture-reference
- proof: validated-architecture-foundation
- reference: `docs/architecture/sfia-meta-model.md:validated+docs/architecture`
- confidence: medium

### `docs/architecture/sfia-platform-architecture.md`
- authority: **supporting**
- scope: architecture-reference
- proof: validated-architecture-foundation
- reference: `docs/architecture/sfia-platform-architecture.md:validated+docs/architecture`
- confidence: medium

### `docs/architecture/sfia-repository-blueprint.md`
- authority: **supporting**
- scope: architecture-reference
- proof: validated-architecture-foundation
- reference: `docs/architecture/sfia-repository-blueprint.md:validated+docs/architecture`
- confidence: medium

### `docs/foundation/sfia-engineering-principles.md`
- authority: **supporting**
- scope: docs-validated
- proof: validated-doc-reference
- reference: `docs/foundation/sfia-engineering-principles.md`
- confidence: medium

### `docs/practices/architecture/functional-architecture-checklist.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/architecture/functional-architecture-checklist.md`
- confidence: high

### `docs/practices/architecture/functional-architecture-deliverables-standard.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/architecture/functional-architecture-deliverables-standard.md`
- confidence: high

### `docs/practices/architecture/functional-architecture-method.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/architecture/functional-architecture-method.md`
- confidence: high

### `docs/practices/methods-structure-check.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/methods-structure-check.md`
- confidence: high

### `docs/practices/process/bpmn-integration-checklist.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/process/bpmn-integration-checklist.md`
- confidence: high

### `docs/practices/process/bpmn-method-cycle-closure.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/process/bpmn-method-cycle-closure.md`
- confidence: high

### `docs/practices/roles/architect-method.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/roles/architect-method.md`
- confidence: high

### `docs/practices/roles/business-analyst-method.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/roles/business-analyst-method.md`
- confidence: high

### `docs/practices/roles/product-owner-method.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/roles/product-owner-method.md`
- confidence: high

### `docs/practices/roles/project-manager-method.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/roles/project-manager-method.md`
- confidence: high

### `docs/practices/roles/qa-tester-method.md`
- authority: **supporting**
- scope: practice-standard
- proof: validated-practice-method
- reference: `docs/practices/roles/qa-tester-method.md`
- confidence: medium

### `docs/practices/roles/rssi-method.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/roles/rssi-method.md`
- confidence: high

### `docs/practices/roles/ux-ui-designer-method.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/roles/ux-ui-designer-method.md`
- confidence: high

### `docs/practices/ux-ui/ux-ui-reprise-checklist.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/ux-ui/ux-ui-reprise-checklist.md`
- confidence: high

### `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md`
- confidence: high

### `docs/practices/ux-ui/ux-ui-reprise-method.md`
- authority: **informational**
- scope: practice-draft
- proof: draft-practice-no-normative-status
- reference: `docs/practices/ux-ui/ux-ui-reprise-method.md`
- confidence: high

### `docs/roadmaps/cmp-technical-roadmap.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/roadmaps/cmp-technical-roadmap.md`
- confidence: medium

### `docs/standards/ux-ui-v1-governance-standard.md`
- authority: **supporting**
- scope: docs-validated
- proof: validated-doc-reference
- reference: `docs/standards/ux-ui-v1-governance-standard.md`
- confidence: medium

### `docs/templates/architecture/functional-architecture-cycle-closure-template.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/templates/architecture/functional-architecture-cycle-closure-template.md`
- confidence: medium

### `docs/templates/architecture/functional-architecture-scope-template.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/templates/architecture/functional-architecture-scope-template.md`
- confidence: medium

### `docs/templates/architecture/functional-architecture-summary-template.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/templates/architecture/functional-architecture-summary-template.md`
- confidence: medium

### `docs/templates/process/bpmn-cycle-closure-template.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/templates/process/bpmn-cycle-closure-template.md`
- confidence: medium

### `docs/templates/process/bpmn-process-analysis-template.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/templates/process/bpmn-process-analysis-template.md`
- confidence: medium

### `docs/templates/process/bpmn-process-scope-template.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/templates/process/bpmn-process-scope-template.md`
- confidence: medium

### `docs/templates/ux-ui/ux-ui-cycle-closure-template.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/templates/ux-ui/ux-ui-cycle-closure-template.md`
- confidence: medium

### `docs/templates/ux-ui/ux-ui-reprise-scope-template.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/templates/ux-ui/ux-ui-reprise-scope-template.md`
- confidence: medium

### `docs/templates/ux-ui/ux-ui-reprise-summary-template.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/templates/ux-ui/ux-ui-reprise-summary-template.md`
- confidence: medium

### `docs/tooling/mcp/sfia-mcp-v2-architecture.md`
- authority: **informational**
- scope: historical-v3
- proof: v3-trajectory-out-of-scope
- reference: `docs/tooling/mcp/sfia-mcp-v2-architecture.md`
- confidence: high

### `docs/tooling/penpot/penpot-cursor-agent-rules.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/tooling/penpot/penpot-cursor-agent-rules.md`
- confidence: medium

### `docs/tooling/penpot/penpot-design-agent-architecture.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/tooling/penpot/penpot-design-agent-architecture.md`
- confidence: medium

### `docs/tooling/penpot/penpot-self-host-docker-guide.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/tooling/penpot/penpot-self-host-docker-guide.md`
- confidence: medium

### `docs/tooling/penpot/penpot-sfia-method-integration.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/tooling/penpot/penpot-sfia-method-integration.md`
- confidence: medium

### `docs/workspace-readiness-report.md`
- authority: **informational**
- scope: docs-general
- proof: informative-document
- reference: `docs/workspace-readiness-report.md`
- confidence: medium

### `method/complementary/controlled-delivery/controlled-delivery-checklist.md`
- authority: **informational**
- scope: general
- proof: no-explicit-normative-authority
- reference: `method/complementary/controlled-delivery/controlled-delivery-checklist.md`
- confidence: medium

### `method/complementary/controlled-delivery/controlled-delivery-index-integration.md`
- authority: **informational**
- scope: general
- proof: no-explicit-normative-authority
- reference: `method/complementary/controlled-delivery/controlled-delivery-index-integration.md`
- confidence: medium

### `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md`
- authority: **informational**
- scope: general
- proof: no-explicit-normative-authority
- reference: `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md`
- confidence: medium

### `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md`
- authority: **informational**
- scope: general
- proof: no-explicit-normative-authority
- reference: `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md`
- confidence: medium

### `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md`
- authority: **informational**
- scope: general
- proof: no-explicit-normative-authority
- reference: `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md`
- confidence: medium

### `method/complementary/controlled-delivery/controlled-delivery-publication-package.md`
- authority: **informational**
- scope: general
- proof: no-explicit-normative-authority
- reference: `method/complementary/controlled-delivery/controlled-delivery-publication-package.md`
- confidence: medium

### `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md`
- authority: **informational**
- scope: general
- proof: no-explicit-normative-authority
- reference: `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md`
- confidence: medium

### `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md`
- authority: **informational**
- scope: general
- proof: no-explicit-normative-authority
- reference: `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md`
- confidence: medium

### `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md`
- authority: **informational**
- scope: general
- proof: no-explicit-normative-authority
- reference: `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md`
- confidence: medium

### `method/complementary/controlled-delivery/controlled-delivery-standard.md`
- authority: **unknown**
- scope: sfia-v2.4-candidate
- proof: candidate-standard-no-baseline-authority
- reference: `method/complementary/controlled-delivery/controlled-delivery-standard.md`
- confidence: low

### `method/complementary/controlled-delivery/controlled-delivery-template.md`
- authority: **informational**
- scope: general
- proof: no-explicit-normative-authority
- reference: `method/complementary/controlled-delivery/controlled-delivery-template.md`
- confidence: medium

### `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md`
- authority: **informational**
- scope: general
- proof: no-explicit-normative-authority
- reference: `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md`
- confidence: medium

### `method/sfia-fast-track/archive/interv360-realization/notion-integration-plan.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `method/sfia-fast-track/archive/interv360-realization/notion-integration-plan.md:lifecycle_status=archived`
- confidence: high

### `method/sfia-fast-track/archive/interv360-realization/realization-checklists.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `method/sfia-fast-track/archive/interv360-realization/realization-checklists.md:lifecycle_status=archived`
- confidence: high

### `method/sfia-fast-track/archive/interv360-realization/realization-deliverables-standard.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `method/sfia-fast-track/archive/interv360-realization/realization-deliverables-standard.md:lifecycle_status=archived`
- confidence: high

### `method/sfia-fast-track/archive/interv360-realization/realization-method.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `method/sfia-fast-track/archive/interv360-realization/realization-method.md:lifecycle_status=archived`
- confidence: high

### `method/sfia-fast-track/archive/interv360-realization/realization-prompt-family.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `method/sfia-fast-track/archive/interv360-realization/realization-prompt-family.md:lifecycle_status=archived`
- confidence: high

### `method/sfia-fast-track/archive/interv360-realization/realization-templates.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `method/sfia-fast-track/archive/interv360-realization/realization-templates.md:lifecycle_status=archived`
- confidence: high

### `method/sfia-fast-track/automation/sfia-automation-architecture.md`
- authority: **supporting**
- scope: sfia-automation
- proof: validated-automation-engine
- reference: `method/sfia-fast-track/automation/sfia-automation-architecture.md:validated+automation`
- confidence: high

### `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- authority: **supporting**
- scope: sfia-automation
- proof: validated-automation-engine
- reference: `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md:validated+automation`
- confidence: high

### `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- authority: **supporting**
- scope: sfia-automation
- proof: validated-automation-engine
- reference: `method/sfia-fast-track/automation/sfia-repository-execution-engine.md:validated+automation`
- confidence: high

### `method/sfia-fast-track/automation/sfia-validation-engine.md`
- authority: **supporting**
- scope: sfia-automation
- proof: validated-automation-engine
- reference: `method/sfia-fast-track/automation/sfia-validation-engine.md:validated+automation`
- confidence: high

### `method/sfia-fast-track/checklists/guardrails-checklist.md`
- authority: **supporting**
- scope: sfia-checklist
- proof: secondary-checklist
- reference: `method/sfia-fast-track/checklists/README.md:L20-L22`
- confidence: medium

### `method/sfia-fast-track/checklists/notion-publication-checklist.md`
- authority: **supporting**
- scope: sfia-checklist
- proof: secondary-checklist
- reference: `method/sfia-fast-track/checklists/README.md:L20-L22`
- confidence: medium

### `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- authority: **supporting**
- scope: sfia-checklist
- proof: operational-validation-checklist
- reference: `method/sfia-fast-track/checklists/README.md:L16`
- confidence: high

### `method/sfia-fast-track/checklists/validation-checklist.md`
- authority: **supporting**
- scope: sfia-checklist
- proof: secondary-checklist
- reference: `method/sfia-fast-track/checklists/README.md:L20-L22`
- confidence: medium

### `method/sfia-fast-track/cycles/interv360-final-capitalization.md`
- authority: **informational**
- scope: capitalization-cycle
- proof: cycle-capitalization-report
- reference: `method/sfia-fast-track/cycles/interv360-final-capitalization.md`
- confidence: high

### `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md`
- authority: **informational**
- scope: capitalization-cycle
- proof: cycle-capitalization-report
- reference: `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md`
- confidence: high

### `method/sfia-fast-track/documentation/documentation-structure-target.md`
- authority: **unknown**
- scope: repository-method
- proof: superseded-delete-candidate-structural
- reference: `method/sfia-fast-track/documentation/documentation-structure-target.md:morris_gate_required`
- confidence: low

### `method/sfia-fast-track/documentation/notion-publication-plan.md`
- authority: **informational**
- scope: method-documentation
- proof: documentation-plan-or-report
- reference: `method/sfia-fast-track/documentation/notion-publication-plan.md`
- confidence: high

### `method/sfia-fast-track/documentation/notion-target-content-map.md`
- authority: **informational**
- scope: method-documentation
- proof: documentation-plan-or-report
- reference: `method/sfia-fast-track/documentation/notion-target-content-map.md`
- confidence: high

### `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md`
- authority: **informational**
- scope: method-documentation
- proof: documentation-plan-or-report
- reference: `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md`
- confidence: high

### `method/sfia-fast-track/templates/audit-template.md`
- authority: **informational**
- scope: sfia-template
- proof: draft-template-example
- reference: `method/sfia-fast-track/templates/audit-template.md:draft-template`
- confidence: high

### `method/sfia-fast-track/templates/cycle-template.md`
- authority: **informational**
- scope: sfia-template
- proof: draft-template-example
- reference: `method/sfia-fast-track/templates/cycle-template.md:draft-template`
- confidence: high

### `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md`
- authority: **informational**
- scope: sfia-template
- proof: draft-template-example
- reference: `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md:draft-template`
- confidence: high

### `method/sfia-fast-track/templates/post-merge-template.md`
- authority: **informational**
- scope: sfia-template
- proof: draft-template-example
- reference: `method/sfia-fast-track/templates/post-merge-template.md:draft-template`
- confidence: high

### `method/sfia-fast-track/templates/pr-body-template.md`
- authority: **informational**
- scope: sfia-template
- proof: draft-template-example
- reference: `method/sfia-fast-track/templates/pr-body-template.md:draft-template`
- confidence: high

### `method/sfia-fast-track/templates/rex-template.md`
- authority: **informational**
- scope: sfia-template
- proof: draft-template-example
- reference: `method/sfia-fast-track/templates/rex-template.md:draft-template`
- confidence: high

### `method/sfia-fast-track/ui/figma-design-first-ui-method.md`
- authority: **supporting**
- scope: ui-method
- proof: validated-ui-method
- reference: `method/sfia-fast-track/ui/figma-design-first-ui-method.md`
- confidence: medium

### `projects/chantiers360-v2/00-framing/business-rules.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/00-framing/business-rules.md`
- confidence: medium

### `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md`
- confidence: medium

### `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md`
- confidence: medium

### `projects/chantiers360-v2/00-framing/detailed-framing.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/00-framing/detailed-framing.md`
- confidence: medium

### `projects/chantiers360-v2/00-framing/project-framing.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/chantiers360-v2/00-framing/project-framing.md`
- confidence: medium

### `projects/chantiers360-v2/00-framing/scope-boundaries.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/00-framing/scope-boundaries.md`
- confidence: medium

### `projects/chantiers360-v2/00-framing/use-cases.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/00-framing/use-cases.md`
- confidence: medium

### `projects/chantiers360-v2/01-functional-architecture/functional-architecture.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/01-functional-architecture/functional-architecture.md`
- confidence: medium

### `projects/chantiers360-v2/01-functional-architecture/functional-decisions.md`
- authority: **supporting**
- scope: project-scoped
- proof: operational-project-candidate-reference
- reference: `projects/chantiers360-v2/01-functional-architecture/functional-decisions.md`
- confidence: medium

### `projects/chantiers360-v2/01-functional-architecture/functional-domains.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/01-functional-architecture/functional-domains.md`
- confidence: medium

### `projects/chantiers360-v2/01-functional-architecture/navigation-model.md`
- authority: **supporting**
- scope: project-scoped
- proof: operational-project-candidate-reference
- reference: `projects/chantiers360-v2/01-functional-architecture/navigation-model.md`
- confidence: medium

### `projects/chantiers360-v2/01-functional-architecture/state-model.md`
- authority: **supporting**
- scope: project-scoped
- proof: operational-project-candidate-reference
- reference: `projects/chantiers360-v2/01-functional-architecture/state-model.md`
- confidence: medium

### `projects/chantiers360-v2/02-ux-ui/screen-map.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/02-ux-ui/screen-map.md`
- confidence: medium

### `projects/chantiers360-v2/02-ux-ui/user-flows.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/02-ux-ui/user-flows.md`
- confidence: medium

### `projects/chantiers360-v2/02-ux-ui/ux-decisions.md`
- authority: **supporting**
- scope: project-scoped
- proof: operational-project-candidate-reference
- reference: `projects/chantiers360-v2/02-ux-ui/ux-decisions.md`
- confidence: medium

### `projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md`
- confidence: high

### `projects/chantiers360-v2/02-ux-ui/wireframes-functional.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/02-ux-ui/wireframes-functional.md`
- confidence: medium

### `projects/chantiers360-v2/03-backlog/acceptance-criteria.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/03-backlog/acceptance-criteria.md`
- confidence: medium

### `projects/chantiers360-v2/03-backlog/backlog-decisions.md`
- authority: **supporting**
- scope: project-scoped
- proof: operational-project-candidate-reference
- reference: `projects/chantiers360-v2/03-backlog/backlog-decisions.md`
- confidence: medium

### `projects/chantiers360-v2/03-backlog/backlog-traceability.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/03-backlog/backlog-traceability.md`
- confidence: medium

### `projects/chantiers360-v2/03-backlog/delivery-increments.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/03-backlog/delivery-increments.md`
- confidence: medium

### `projects/chantiers360-v2/03-backlog/epics.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/03-backlog/epics.md`
- confidence: medium

### `projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md`
- confidence: high

### `projects/chantiers360-v2/03-backlog/user-stories.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/03-backlog/user-stories.md`
- confidence: medium

### `projects/chantiers360-v2/04-design/design-decisions.md`
- authority: **supporting**
- scope: project-scoped
- proof: operational-project-candidate-reference
- reference: `projects/chantiers360-v2/04-design/design-decisions.md`
- confidence: medium

### `projects/chantiers360-v2/04-design/design-to-backlog-alignment.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/04-design/design-to-backlog-alignment.md`
- confidence: medium

### `projects/chantiers360-v2/04-design/figma-brief.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/chantiers360-v2/04-design/figma-brief.md`
- confidence: high

### `projects/chantiers360-v2/04-design/figma-review-checklist.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/chantiers360-v2/04-design/figma-review-checklist.md`
- confidence: high

### `projects/chantiers360-v2/04-design/screen-design-spec.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/04-design/screen-design-spec.md`
- confidence: medium

### `projects/chantiers360-v2/05-technical-architecture/application-structure.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/05-technical-architecture/application-structure.md`
- confidence: medium

### `projects/chantiers360-v2/05-technical-architecture/data-model-light.md`
- authority: **supporting**
- scope: project-scoped
- proof: operational-project-candidate-reference
- reference: `projects/chantiers360-v2/05-technical-architecture/data-model-light.md`
- confidence: medium

### `projects/chantiers360-v2/05-technical-architecture/frontend-architecture.md`
- authority: **supporting**
- scope: project-scoped
- proof: operational-project-candidate-reference
- reference: `projects/chantiers360-v2/05-technical-architecture/frontend-architecture.md`
- confidence: medium

### `projects/chantiers360-v2/05-technical-architecture/stack-decision.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/05-technical-architecture/stack-decision.md`
- confidence: medium

### `projects/chantiers360-v2/05-technical-architecture/stack-options.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/05-technical-architecture/stack-options.md`
- confidence: medium

### `projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md`
- confidence: high

### `projects/chantiers360-v2/05-technical-architecture/technical-decisions.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/chantiers360-v2/05-technical-architecture/technical-decisions.md`
- confidence: medium

### `projects/chantiers360-v2/05-technical-architecture/validation-and-delivery-readiness.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/05-technical-architecture/validation-and-delivery-readiness.md`
- confidence: high

### `projects/chantiers360-v2/06-figma-fidelity-spike/figma-reference.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/chantiers360-v2/06-figma-fidelity-spike/figma-reference.md`
- confidence: high

### `projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md`
- confidence: medium

### `projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md`
- confidence: high

### `projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md`
- confidence: high

### `projects/chantiers360-v2/06-figma-fidelity-spike/visual-comparison-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/06-figma-fidelity-spike/visual-comparison-report.md`
- confidence: high

### `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md`
- confidence: high

### `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md`
- confidence: high

### `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md`
- confidence: medium

### `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md`
- confidence: medium

### `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-implementation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-implementation-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md`
- confidence: medium

### `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-validation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-validation-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-02/inc-02-closure-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-02/inc-02-closure-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md`
- confidence: medium

### `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-validation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-validation-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-03/inc-03-closure-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-03/inc-03-closure-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-decisions.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-decisions.md`
- confidence: medium

### `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-implementation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-implementation-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-validation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-validation-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-04/inc-04-closure-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-04/inc-04-closure-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md`
- confidence: medium

### `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-implementation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-implementation-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-validation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-validation-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-05/inc-05-closure-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-05/inc-05-closure-report.md`
- confidence: high

### `projects/chantiers360-v2/07-delivery-inc-05/pr-readiness-inc-05.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/07-delivery-inc-05/pr-readiness-inc-05.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-01/local-e2e-runbook.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-01/local-e2e-runbook.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-01/qa-execution-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-01/qa-execution-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-01/qa-g4-post-merge-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-01/qa-readiness.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-01/qa-readiness.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-01/qa-strategy.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-01/qa-strategy.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-02/qa-g4-post-merge-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-02/qa-g4-post-merge-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-02/qa-readiness.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-02/qa-readiness.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-02/qa-reserves.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-02/qa-reserves.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-02/qa-strategy.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-02/qa-strategy.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-03/qa-g4-post-merge-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-03/qa-g4-post-merge-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-03/qa-readiness.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-03/qa-readiness.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-03/qa-reserves.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-03/qa-reserves.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-04/qa-g4-post-merge-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-04/qa-g4-post-merge-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-04/qa-readiness.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-04/qa-readiness.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-04/qa-reserves.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-04/qa-reserves.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-04/qa-strategy.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-04/qa-strategy.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-05/qa-g4-post-merge-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-05/qa-g4-post-merge-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-report.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-05/qa-readiness.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/inc-05/qa-readiness.md`
- confidence: high

### `projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-05/qa-strategy.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-05/qa-strategy.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md`
- confidence: medium

### `projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md`
- confidence: high

### `projects/chantiers360-v2/app/.env.example`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/chantiers360-v2/app/.env.example:lifecycle_status=not-applicable`
- confidence: high

### `projects/chantiers360-v2/app/.env.test.example`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/chantiers360-v2/app/.env.test.example:lifecycle_status=not-applicable`
- confidence: high

### `projects/chantiers360-v2/app/.gitignore`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/chantiers360-v2/app/.gitignore:lifecycle_status=not-applicable`
- confidence: high

### `projects/chantiers360-v2/app/docker-compose.test.yml`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/chantiers360-v2/app/docker-compose.test.yml:lifecycle_status=not-applicable`
- confidence: high

### `projects/chantiers360-v2/app/postcss.config.mjs`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/chantiers360-v2/app/postcss.config.mjs:lifecycle_status=not-applicable`
- confidence: high

### `projects/chantiers360-v2/app/scripts/seed-prochaines-actions-demo.mjs`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/chantiers360-v2/app/scripts/seed-prochaines-actions-demo.mjs:lifecycle_status=not-applicable`
- confidence: high

### `projects/interv360/00-intake/interv360-sfia-test-strategy.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/interv360/00-intake/interv360-sfia-test-strategy.md`
- confidence: medium

### `projects/interv360/00-intake/project-intake.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/00-intake/project-intake.md`
- confidence: medium

### `projects/interv360/01-cadrage/business-framing.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/01-cadrage/business-framing.md`
- confidence: medium

### `projects/interv360/01-cadrage/cadrage-phase-gate.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/01-cadrage/cadrage-phase-gate.md`
- confidence: medium

### `projects/interv360/01-cadrage/dashboard-kpi-ux-review.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/01-cadrage/dashboard-kpi-ux-review.md`
- confidence: medium

### `projects/interv360/01-cadrage/framing-review.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/01-cadrage/framing-review.md`
- confidence: medium

### `projects/interv360/01-cadrage/integration-error-arbitration-review.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/01-cadrage/integration-error-arbitration-review.md`
- confidence: medium

### `projects/interv360/01-cadrage/mvp-arbitration-validation.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/01-cadrage/mvp-arbitration-validation.md`
- confidence: high

### `projects/interv360/01-cadrage/mvp-arbitrations.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/01-cadrage/mvp-arbitrations.md`
- confidence: medium

### `projects/interv360/01-cadrage/role-methods-framing.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/01-cadrage/role-methods-framing.md`
- confidence: medium

### `projects/interv360/01-cadrage/role-methods-review.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/01-cadrage/role-methods-review.md`
- confidence: medium

### `projects/interv360/01-cadrage/secure-email-intake-review.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/01-cadrage/secure-email-intake-review.md`
- confidence: medium

### `projects/interv360/01-cadrage/ux-ui-brief-validation.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/01-cadrage/ux-ui-brief-validation.md`
- confidence: high

### `projects/interv360/01-cadrage/ux-ui-brief.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/interv360/01-cadrage/ux-ui-brief.md`
- confidence: medium

### `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md`
- confidence: medium

### `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md`
- confidence: medium

### `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md`
- confidence: medium

### `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md`
- confidence: medium

### `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md`
- confidence: medium

### `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md`
- confidence: medium

### `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md`
- confidence: medium

### `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md`
- confidence: medium

### `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md`
- confidence: medium

### `projects/interv360/02-architecture/architecture-p1-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/02-architecture/architecture-p1-summary.md`
- confidence: high

### `projects/interv360/02-architecture/architecture-p2-design-impact-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/02-architecture/architecture-p2-design-impact-summary.md`
- confidence: high

### `projects/interv360/02-architecture/closure-without-signature-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/02-architecture/closure-without-signature-summary.md`
- confidence: high

### `projects/interv360/02-architecture/closure-without-signature.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/02-architecture/closure-without-signature.md`
- confidence: high

### `projects/interv360/02-architecture/geo-ai-arbitration-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/02-architecture/geo-ai-arbitration-summary.md`
- confidence: high

### `projects/interv360/02-architecture/geo-ai-arbitration.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/geo-ai-arbitration.md`
- confidence: medium

### `projects/interv360/02-architecture/mvp-clarifications-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/02-architecture/mvp-clarifications-summary.md`
- confidence: high

### `projects/interv360/02-architecture/mvp-clarifications.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/mvp-clarifications.md`
- confidence: medium

### `projects/interv360/02-architecture/rules-rg-prioritization-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/02-architecture/rules-rg-prioritization-summary.md`
- confidence: high

### `projects/interv360/02-architecture/rules-rg-prioritization.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/rules-rg-prioritization.md`
- confidence: medium

### `projects/interv360/02-architecture/status-mapping-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/02-architecture/status-mapping-summary.md`
- confidence: high

### `projects/interv360/02-architecture/status-mapping.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/02-architecture/status-mapping.md`
- confidence: medium

### `projects/interv360/03-design/design-v2-cycle-opening.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/design-v2-cycle-opening.md`
- confidence: high

### `projects/interv360/03-design/figma-first-screen-reprise-instructions.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/figma-first-screen-reprise-instructions.md`
- confidence: high

### `projects/interv360/03-design/figma-first-screen-review.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/figma-first-screen-review.md`
- confidence: high

### `projects/interv360/03-design/figma-fresh-start-instructions.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/figma-fresh-start-instructions.md`
- confidence: high

### `projects/interv360/03-design/figma-premium-redesign-brief.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/figma-premium-redesign-brief.md`
- confidence: high

### `projects/interv360/03-design/figma-reprise-path.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/figma-reprise-path.md`
- confidence: high

### `projects/interv360/03-design/penpot-application-frame-template.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/penpot-application-frame-template.md`
- confidence: high

### `projects/interv360/03-design/penpot-first-screen-cycle-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/03-design/penpot-first-screen-cycle-summary.md`
- confidence: high

### `projects/interv360/03-design/penpot-first-screen-mcp-instructions.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/penpot-first-screen-mcp-instructions.md`
- confidence: high

### `projects/interv360/03-design/penpot-first-screen-review.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/penpot-first-screen-review.md`
- confidence: high

### `projects/interv360/03-design/penpot-first-screen-v11-instructions.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/penpot-first-screen-v11-instructions.md`
- confidence: high

### `projects/interv360/03-design/penpot-first-screen-v2-visual-instructions.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/penpot-first-screen-v2-visual-instructions.md`
- confidence: high

### `projects/interv360/03-design/penpot-project-reference.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/penpot-project-reference.md`
- confidence: high

### `projects/interv360/03-design/penpot-screen-prioritization.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/penpot-screen-prioritization.md`
- confidence: high

### `projects/interv360/03-design/penpot-visual-quality-benchmark.md`
- authority: **informational**
- scope: project-design
- proof: design-artifact
- reference: `projects/interv360/03-design/penpot-visual-quality-benchmark.md`
- confidence: high

### `projects/interv360/04-delivery/api-demo-hardening.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/api-demo-hardening.md`
- confidence: medium

### `projects/interv360/04-delivery/api-product-hardening.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/api-product-hardening.md`
- confidence: medium

### `projects/interv360/04-delivery/api-product-validation.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/04-delivery/api-product-validation.md`
- confidence: high

### `projects/interv360/04-delivery/audit-trail.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/04-delivery/audit-trail.md`
- confidence: high

### `projects/interv360/04-delivery/auth-user-switcher.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/auth-user-switcher.md`
- confidence: medium

### `projects/interv360/04-delivery/backend-minimal-prototype.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/backend-minimal-prototype.md`
- confidence: medium

### `projects/interv360/04-delivery/backend-persistence.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/backend-persistence.md`
- confidence: medium

### `projects/interv360/04-delivery/backend-users-session.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/backend-users-session.md`
- confidence: medium

### `projects/interv360/04-delivery/batch-01-demo-credibility.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/batch-01-demo-credibility.md`
- confidence: medium

### `projects/interv360/04-delivery/batch-02-demo-control-scenario.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/batch-02-demo-control-scenario.md`
- confidence: medium

### `projects/interv360/04-delivery/batch-03-demo-readiness-package.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/04-delivery/batch-03-demo-readiness-package.md`
- confidence: high

### `projects/interv360/04-delivery/batch-04-demo-presentation-package.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/batch-04-demo-presentation-package.md`
- confidence: medium

### `projects/interv360/04-delivery/connected-ux-productization.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/connected-ux-productization.md`
- confidence: medium

### `projects/interv360/04-delivery/delivery-detailing-plan.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/delivery-detailing-plan.md`
- confidence: medium

### `projects/interv360/04-delivery/delivery-detailing-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/04-delivery/delivery-detailing-summary.md`
- confidence: high

### `projects/interv360/04-delivery/delivery-preparation-plan.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/delivery-preparation-plan.md`
- confidence: medium

### `projects/interv360/04-delivery/delivery-readiness-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/04-delivery/delivery-readiness-summary.md`
- confidence: high

### `projects/interv360/04-delivery/delivery-slicing-strategy.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/delivery-slicing-strategy.md`
- confidence: medium

### `projects/interv360/04-delivery/demo-feedback-review.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/demo-feedback-review.md`
- confidence: medium

### `projects/interv360/04-delivery/demo-mvp-closure.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/04-delivery/demo-mvp-closure.md`
- confidence: high

### `projects/interv360/04-delivery/demo-polish.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/demo-polish.md`
- confidence: medium

### `projects/interv360/04-delivery/demo-presentation-feedback.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/demo-presentation-feedback.md`
- confidence: medium

### `projects/interv360/04-delivery/demo-presentation-review.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/demo-presentation-review.md`
- confidence: medium

### `projects/interv360/04-delivery/end-to-end-demo-hardening.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/end-to-end-demo-hardening.md`
- confidence: medium

### `projects/interv360/04-delivery/frontend-api-connection-framing.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/frontend-api-connection-framing.md`
- confidence: medium

### `projects/interv360/04-delivery/frontend-api-connection.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/frontend-api-connection.md`
- confidence: medium

### `projects/interv360/04-delivery/functional-lots.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/functional-lots.md`
- confidence: medium

### `projects/interv360/04-delivery/implementation-go-no-go.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/implementation-go-no-go.md`
- confidence: medium

### `projects/interv360/04-delivery/implementation-planning-plan.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/implementation-planning-plan.md`
- confidence: medium

### `projects/interv360/04-delivery/implementation-planning-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/04-delivery/implementation-planning-summary.md`
- confidence: high

### `projects/interv360/04-delivery/macro-backlog.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/macro-backlog.md`
- confidence: medium

### `projects/interv360/04-delivery/mvp-scope.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/mvp-scope.md`
- confidence: medium

### `projects/interv360/04-delivery/premium-design-system.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/premium-design-system.md`
- confidence: medium

### `projects/interv360/04-delivery/prioritization.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/prioritization.md`
- confidence: medium

### `projects/interv360/04-delivery/product-demo-consolidation.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/product-demo-consolidation.md`
- confidence: medium

### `projects/interv360/04-delivery/product-industrialization.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/product-industrialization.md`
- confidence: medium

### `projects/interv360/04-delivery/product-ux-finalization.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/product-ux-finalization.md`
- confidence: medium

### `projects/interv360/04-delivery/realization-criteria.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/realization-criteria.md`
- confidence: medium

### `projects/interv360/04-delivery/realization-preparation-plan.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/realization-preparation-plan.md`
- confidence: medium

### `projects/interv360/04-delivery/realization-preparation-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/04-delivery/realization-preparation-summary.md`
- confidence: high

### `projects/interv360/04-delivery/realization-start-plan.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/realization-start-plan.md`
- confidence: medium

### `projects/interv360/04-delivery/realization-start-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/04-delivery/realization-start-summary.md`
- confidence: high

### `projects/interv360/04-delivery/request-model-finalization.md`
- authority: **supporting**
- scope: project-scoped
- proof: operational-project-candidate-reference
- reference: `projects/interv360/04-delivery/request-model-finalization.md`
- confidence: medium

### `projects/interv360/04-delivery/request-model-productization.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/interv360/04-delivery/request-model-productization.md`
- confidence: medium

### `projects/interv360/04-delivery/role-simulation.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/role-simulation.md`
- confidence: medium

### `projects/interv360/04-delivery/technical-arbitration.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/technical-arbitration.md`
- confidence: medium

### `projects/interv360/04-delivery/technical-design-plan.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/technical-design-plan.md`
- confidence: medium

### `projects/interv360/04-delivery/technical-design-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/04-delivery/technical-design-summary.md`
- confidence: high

### `projects/interv360/04-delivery/workflow-light-extension.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/workflow-light-extension.md`
- confidence: medium

### `projects/interv360/04-delivery/workflow-requalification.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/04-delivery/workflow-requalification.md`
- confidence: medium

### `projects/interv360/05-release/mvp-release-readiness.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/05-release/mvp-release-readiness.md`
- confidence: high

### `projects/interv360/08-presentation/interv360-demo-one-page-summary.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/08-presentation/interv360-demo-one-page-summary.md`
- confidence: high

### `projects/interv360/08-presentation/interv360-demo-presentation-package.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/08-presentation/interv360-demo-presentation-package.md`
- confidence: medium

### `projects/interv360/08-presentation/interv360-demo-script.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/08-presentation/interv360-demo-script.md`
- confidence: medium

### `projects/interv360/08-presentation/interv360-e2e-demo-runbook.md`
- authority: **informational**
- scope: project-record
- proof: project-report-or-closure
- reference: `projects/interv360/08-presentation/interv360-e2e-demo-runbook.md`
- confidence: high

### `projects/interv360/09-roadmap/interv360-auth-and-user-framing.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/interv360/09-roadmap/interv360-auth-and-user-framing.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-auth-foundation-framing.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/09-roadmap/interv360-auth-foundation-framing.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md`
- authority: **supporting**
- scope: project-scoped
- proof: operational-project-candidate-reference
- reference: `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-backend-data-model-decision.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/interv360/09-roadmap/interv360-backend-data-model-decision.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-backend-persistence-decision.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/09-roadmap/interv360-backend-persistence-decision.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-backend-target-framing.md`
- authority: **supporting**
- scope: project-scoped
- proof: operational-project-candidate-reference
- reference: `projects/interv360/09-roadmap/interv360-backend-target-framing.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-backend-technical-stack-decision.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/09-roadmap/interv360-backend-technical-stack-decision.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-next-product-axis.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/09-roadmap/interv360-next-product-axis.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-product-industrialization-framing.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/interv360/09-roadmap/interv360-product-industrialization-framing.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-product-roadmap-after-role-simulation.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/09-roadmap/interv360-product-roadmap-after-role-simulation.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-product-roadmap-next.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/09-roadmap/interv360-product-roadmap-next.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-role-simulation-review.md`
- authority: **informational**
- scope: project-document
- proof: project-non-normative
- reference: `projects/interv360/09-roadmap/interv360-role-simulation-review.md`
- confidence: medium

### `projects/interv360/09-roadmap/interv360-workflow-extension-framing.md`
- authority: **supporting**
- scope: project-scoped
- proof: validated-project-reference
- reference: `projects/interv360/09-roadmap/interv360-workflow-extension-framing.md`
- confidence: medium

### `projects/interv360/app/.env.example`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/interv360/app/.env.example:lifecycle_status=not-applicable`
- confidence: high

### `projects/interv360/app/.gitignore`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/interv360/app/.gitignore:lifecycle_status=not-applicable`
- confidence: high

### `projects/interv360/archive/adr-early/04-adr/ADR-001-status-mapping.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/adr-early/04-adr/ADR-001-status-mapping.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/adr-early/04-adr/ADR-002-simulated-crm-sync.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/adr-early/04-adr/ADR-002-simulated-crm-sync.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/adr-early/04-adr/ADR-003-integration-error-management.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/adr-early/04-adr/ADR-003-integration-error-management.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/adr-early/04-adr/ADR-004-local-closure-vs-external-sync.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/adr-early/04-adr/ADR-004-local-closure-vs-external-sync.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/adr-early/04-adr/adr-cycle-closure.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/adr-early/04-adr/adr-cycle-closure.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/adr-early/04-adr/adr-structuring-scope.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/adr-early/04-adr/adr-structuring-scope.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/clarification/clarification-cycle-closure-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/clarification/clarification-cycle-closure-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/clarification/clarification-cycle-closure.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/clarification/clarification-cycle-closure.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/clarification/clarification-workshop-minutes-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/clarification/clarification-workshop-minutes-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/clarification/clarification-workshop-minutes-template-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/clarification/clarification-workshop-minutes-template-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/clarification/clarification-workshop-minutes-template.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/clarification/clarification-workshop-minutes-template.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/clarification/clarification-workshop-minutes.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/clarification/clarification-workshop-minutes.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/clarification/clarification-workshop-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/clarification/clarification-workshop-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/cmp/cmp-project-schema-extension-for-governance-content.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/cmp/cmp-project-schema-extension-for-governance-content.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-architecture-security.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-architecture-security.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-final-prompt-lot.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-final-prompt-lot.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-qa-library.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-qa-library.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-uxui.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/cmp/cmp-prompt-schema-extension-for-uxui.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/cmp/merge-closure-prompt-library-sync.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/cmp/merge-closure-prompt-library-sync.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/cmp/prompt-catalog-enrichment-after-ux-ui-v1-standard.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/cmp/prompt-catalog-enrichment-after-ux-ui-v1-standard.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/cmp/prompt-catalog-qa-tester-validation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/cmp/prompt-catalog-qa-tester-validation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/cmp/prompt-catalog-ux-ui-v1-validation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/cmp/prompt-catalog-ux-ui-v1-validation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/figma-v1/figma-design-instructions.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/figma-v1/figma-design-instructions.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/figma-v1/figma-first-draft-review.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/figma-v1/figma-first-draft-review.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/figma-v1/figma-production-prompt.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/figma-v1/figma-production-prompt.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/figma-v1/figma-review-session-minutes-template.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/figma-v1/figma-review-session-minutes-template.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/figma-v1/figma-review-session-minutes.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/figma-v1/figma-review-session-minutes.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/figma-v1/figma-review-session-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/figma-v1/figma-review-session-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/figma-v1/figma-v1-closure-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/figma-v1/figma-v1-closure-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/figma-v1/sfia-figma-v1-standard-promotion-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/figma-v1/sfia-figma-v1-standard-promotion-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/figma-v1/ux-ui-design-research-and-benchmark.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/figma-v1/ux-ui-design-research-and-benchmark.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/figma-v1/ux-ui-figma-opening-note.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/figma-v1/ux-ui-figma-opening-note.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-acceptance-criteria.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-acceptance-criteria.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-action-transition-decision.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-action-transition-decision.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-api-strategy.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-api-strategy.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-app-foundation-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-app-foundation-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-application-architecture.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-application-architecture.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-controlled-workflow-skeleton-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-controlled-workflow-skeleton-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-controlled-workflow-validation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-controlled-workflow-validation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-data-model.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-data-model.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-data-scope.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-data-scope.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-demo-data.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-demo-data.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-demo-reset-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-demo-reset-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-demo-script.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-demo-script.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-detailed-backlog.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-detailed-backlog.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-effort-estimation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-effort-estimation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-final-demo-package.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-final-demo-package.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-front-back-data-decisions.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-front-back-data-decisions.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-front-back-start-decision.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-front-back-start-decision.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-global-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-global-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-implementation-estimate.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-implementation-estimate.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-implementation-plan.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-implementation-plan.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-implementation-preparation-plan.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-implementation-preparation-plan.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-implementation-preparation-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-implementation-preparation-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-intervention-readonly-skeleton-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-intervention-readonly-skeleton-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-list-skeleton-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-list-skeleton-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-local-persistence-decision.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-local-persistence-decision.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-merge-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-merge-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-phase-2-delivery-decision.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-phase-2-delivery-decision.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-planning-readonly-skeleton-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-planning-readonly-skeleton-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-pr-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-pr-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-project-structure-decision.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-project-structure-decision.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-push-and-pr.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-push-and-pr.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-qa-scenarios.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-qa-scenarios.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-qa-strategy.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-qa-strategy.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-qualification-readonly-skeleton-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-qualification-readonly-skeleton-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-readiness-checklist.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-readiness-checklist.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-readonly-demo-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-readonly-demo-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-realization-backlog.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-realization-backlog.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-realization-slicing.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-realization-slicing.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-realization-start-checklist.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-realization-start-checklist.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-refusal-scenarios.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-refusal-scenarios.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-report-readonly-skeleton-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-report-readonly-skeleton-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-request-detail-skeleton-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-request-detail-skeleton-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-stack-options.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-stack-options.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-start-checklist.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-start-checklist.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-status-rules.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-status-rules.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-technical-framing.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-technical-framing.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-technical-qa-planning.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-technical-qa-planning.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-technical-scope.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-technical-scope.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-01/inc-01-user-stories.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-01/inc-01-user-stories.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-02/inc-02-merge-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-02/inc-02-merge-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-02/inc-02-pr-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-02/inc-02-pr-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-02/inc-02-push-and-pr.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-02/inc-02-push-and-pr.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-02/inc-02-ux-demo-improvement.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-02/inc-02-ux-demo-improvement.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-03/inc-03-merge-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-03/inc-03-merge-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-03/inc-03-multi-requests-local-demo.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-03/inc-03-multi-requests-local-demo.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-03/inc-03-pr-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-03/inc-03-pr-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-03/inc-03-push-and-pr.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-03/inc-03-push-and-pr.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/inc-04/inc-04-list-filtering-local-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/inc-04/inc-04-list-filtering-local-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-publication-tooling-check.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-publication-tooling-check.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-architecture-p1-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-architecture-p1-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-architecture-p2-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-architecture-p2-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-blocked.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-blocked.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-publication-log.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-publication-log.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-review.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-cmp-technical-roadmap-sfia-components-review.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-existing-prompt-library-inventory.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-existing-prompt-library-inventory.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-figma-v1-closure-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-figma-v1-closure-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-figma-v1-cmp-publication-log.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-figma-v1-cmp-publication-log.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-figma-v1-cmp-publication-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-figma-v1-cmp-publication-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-prompt-library-closure-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-prompt-library-closure-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-cmp-payload-review.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-cmp-payload-review.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-publication-log.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-prompt-library-final-lot-publication-log.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-cmp-payload-review.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-cmp-payload-review.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-publication-log.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot1-architecture-security-publication-log.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload-review.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload-review.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-publication-log.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-prompt-library-lot2-uxui-v1-governance-publication-log.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-qa-prompt-library-cmp-payload-review.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-qa-prompt-library-cmp-payload-review.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-qa-prompt-library-publication-log.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-qa-prompt-library-publication-log.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-qa-tester-cmp-publication-log.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-qa-tester-cmp-publication-log.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-qa-tester-governance-review.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-qa-tester-governance-review.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/notion-sync-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/notion-sync-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/notion-sync/pull-request-qa-tester-governance-notion-sync.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/notion-sync/pull-request-qa-tester-governance-notion-sync.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/03-process/bpmn/.gitkeep`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/interv360/archive/pre-delivery-phases/03-process/bpmn/.gitkeep:lifecycle_status=not-applicable`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/03-process/bpmn/interv360-integration-errors.bpmn`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/03-process/bpmn/interv360-integration-errors.bpmn:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/03-process/bpmn/interv360-sav-exceptions.bpmn`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/03-process/bpmn/interv360-sav-exceptions.bpmn:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/03-process/bpmn/interv360-sav-mvp.bpmn`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/03-process/bpmn/interv360-sav-mvp.bpmn:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/03-process/exports/.gitkeep`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/interv360/archive/pre-delivery-phases/03-process/exports/.gitkeep:lifecycle_status=not-applicable`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/03-process/interv360-integration-errors-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/03-process/interv360-integration-errors-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/03-process/interv360-sav-exceptions-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/03-process/interv360-sav-exceptions-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/03-process/interv360-sav-mvp-preparation.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/03-process/interv360-sav-mvp-preparation.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/03-process/process-analysis.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/03-process/process-analysis.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/03-process/process-scope.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/03-process/process-scope.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/business-objects.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/business-objects.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/dashboard-and-alerts.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/dashboard-and-alerts.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-cycle-closure.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-cycle-closure.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-scope.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-scope.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-architecture-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-domains.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/functional-domains.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/integration-functional-view.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/integration-functional-view.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/status-and-transitions.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/05-functional-architecture/status-and-transitions.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/06-ux-ui/dashboard-ux-view.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/06-ux-ui/dashboard-ux-view.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/06-ux-ui/screen-functional-specs.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/06-ux-ui/screen-functional-specs.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/06-ux-ui/screen-inventory.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/06-ux-ui/screen-inventory.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/06-ux-ui/user-journeys.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/06-ux-ui/user-journeys.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-cycle-closure.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-cycle-closure.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-analysis.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-scope.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-reprise-scope.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/pre-delivery-phases/06-ux-ui/ux-ui-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/role-enrichment/qa-tester-role-research-and-benchmark.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/role-enrichment/qa-tester-role-research-and-benchmark.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/role-enrichment/qa-transverse-analysis-summary.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/role-enrichment/qa-transverse-analysis-summary.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/role-enrichment/qa-transverse-analysis.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/role-enrichment/qa-transverse-analysis.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p1.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p1.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p2.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/role-enrichment/role-methods-enrichment-after-adr-p2.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/role-enrichment/role-methods-enrichment-after-figma-v1.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/role-enrichment/role-methods-enrichment-after-figma-v1.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/archive/stubs/04-delivery-stub-readme.md`
- authority: **informational**
- scope: historical-archive
- proof: archived-lifecycle
- reference: `projects/interv360/archive/stubs/04-delivery-stub-readme.md:lifecycle_status=archived`
- confidence: high

### `projects/interv360/backend/.env.example`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/interv360/backend/.env.example:lifecycle_status=not-applicable`
- confidence: high

### `projects/interv360/backend/.gitignore`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `projects/interv360/backend/.gitignore:lifecycle_status=not-applicable`
- confidence: high

### `prompts/arbitrages/.gitkeep`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `prompts/arbitrages/.gitkeep:lifecycle_status=not-applicable`
- confidence: high

### `prompts/architecture/.gitkeep`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `prompts/architecture/.gitkeep:lifecycle_status=not-applicable`
- confidence: high

### `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md`
- authority: **informational**
- scope: prompt-artifact
- proof: prompt-or-placeholder
- reference: `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md`
- confidence: medium

### `prompts/architecture/functional-architecture-prompt-family.md`
- authority: **informational**
- scope: prompt-family
- proof: draft-prompt-family
- reference: `prompts/architecture/functional-architecture-prompt-family.md`
- confidence: high

### `prompts/bpmn/bpmn-prompt-family.md`
- authority: **informational**
- scope: prompt-family
- proof: draft-prompt-family
- reference: `prompts/bpmn/bpmn-prompt-family.md`
- confidence: high

### `prompts/cadrage/.gitkeep`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `prompts/cadrage/.gitkeep:lifecycle_status=not-applicable`
- confidence: high

### `prompts/governance/.gitkeep`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `prompts/governance/.gitkeep:lifecycle_status=not-applicable`
- confidence: high

### `prompts/governance/notion/.gitkeep`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `prompts/governance/notion/.gitkeep:lifecycle_status=not-applicable`
- confidence: high

### `prompts/prompt-catalog.md`
- authority: **reference**
- scope: prompt-index
- proof: active-prompt-catalog
- reference: `prompts/prompt-catalog.md:operating-index`
- confidence: high

### `prompts/qa/.gitkeep`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `prompts/qa/.gitkeep:lifecycle_status=not-applicable`
- confidence: high

### `prompts/qa/delivery-qa-test-prompt-family.md`
- authority: **informational**
- scope: prompt-family
- proof: draft-prompt-family
- reference: `prompts/qa/delivery-qa-test-prompt-family.md`
- confidence: high

### `prompts/roles/.gitkeep`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `prompts/roles/.gitkeep:lifecycle_status=not-applicable`
- confidence: high

### `prompts/security/.gitkeep`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `prompts/security/.gitkeep:lifecycle_status=not-applicable`
- confidence: high

### `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md`
- authority: **informational**
- scope: prompt-artifact
- proof: prompt-or-placeholder
- reference: `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md`
- confidence: medium

### `prompts/templates/01-create-foundation-document.md`
- authority: **supporting**
- scope: prompt-template
- proof: operational-prompt-template
- reference: `prompts/templates/01-create-foundation-document.md`
- confidence: medium

### `prompts/templates/02-update-document-v1-1.md`
- authority: **supporting**
- scope: prompt-template
- proof: operational-prompt-template
- reference: `prompts/templates/02-update-document-v1-1.md`
- confidence: medium

### `prompts/templates/03-create-operational-checklist.md`
- authority: **supporting**
- scope: prompt-template
- proof: operational-prompt-template
- reference: `prompts/templates/03-create-operational-checklist.md`
- confidence: medium

### `prompts/templates/04-validate-cursor-result.md`
- authority: **supporting**
- scope: prompt-template
- proof: operational-prompt-template
- reference: `prompts/templates/04-validate-cursor-result.md`
- confidence: medium

### `prompts/templates/05-validate-pr-readiness.md`
- authority: **supporting**
- scope: prompt-template
- proof: operational-prompt-template
- reference: `prompts/templates/05-validate-pr-readiness.md`
- confidence: medium

### `prompts/templates/06-prepare-pr-summary.md`
- authority: **supporting**
- scope: prompt-template
- proof: operational-prompt-template
- reference: `prompts/templates/06-prepare-pr-summary.md`
- confidence: medium

### `prompts/templates/07-write-post-merge-status.md`
- authority: **supporting**
- scope: prompt-template
- proof: operational-prompt-template
- reference: `prompts/templates/07-write-post-merge-status.md`
- confidence: medium

### `prompts/templates/08-capitalize-method-asset.md`
- authority: **supporting**
- scope: prompt-template
- proof: operational-prompt-template
- reference: `prompts/templates/08-capitalize-method-asset.md`
- confidence: medium

### `prompts/templates/09-prepare-notion-mapping.md`
- authority: **supporting**
- scope: prompt-template
- proof: operational-prompt-template
- reference: `prompts/templates/09-prepare-notion-mapping.md`
- confidence: medium

### `prompts/templates/10-perform-safe-repository-cleanup.md`
- authority: **supporting**
- scope: prompt-template
- proof: operational-prompt-template
- reference: `prompts/templates/10-perform-safe-repository-cleanup.md`
- confidence: medium

### `prompts/templates/sfia-prompt-templates-context-pack.md`
- authority: **informational**
- scope: prompt-artifact
- proof: prompt-or-placeholder
- reference: `prompts/templates/sfia-prompt-templates-context-pack.md`
- confidence: medium

### `prompts/tooling/penpot/penpot-design-agent-prompt-family.md`
- authority: **informational**
- scope: prompt-family
- proof: draft-prompt-family
- reference: `prompts/tooling/penpot/penpot-design-agent-prompt-family.md`
- confidence: high

### `prompts/ux-ui/.gitkeep`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `prompts/ux-ui/.gitkeep:lifecycle_status=not-applicable`
- confidence: high

### `prompts/ux-ui/figma-fidelity-gate-prompt-family.md`
- authority: **informational**
- scope: prompt-family
- proof: draft-prompt-family
- reference: `prompts/ux-ui/figma-fidelity-gate-prompt-family.md`
- confidence: high

### `prompts/ux-ui/ux-ui-reprise-prompt-family.md`
- authority: **informational**
- scope: prompt-family
- proof: draft-prompt-family
- reference: `prompts/ux-ui/ux-ui-reprise-prompt-family.md`
- confidence: high

### `tools/cmp-001/.env.example`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/.env.example:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/.gitignore`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/.gitignore:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/CHANGELOG.md`
- authority: **informational**
- scope: tooling
- proof: tooling-artifact
- reference: `tools/cmp-001/CHANGELOG.md`
- confidence: medium

### `tools/cmp-001/ROADMAP.md`
- authority: **informational**
- scope: tooling
- proof: tooling-artifact
- reference: `tools/cmp-001/ROADMAP.md`
- confidence: medium

### `tools/cmp-001/WORKSPACE.md`
- authority: **informational**
- scope: tooling
- proof: tooling-artifact
- reference: `tools/cmp-001/WORKSPACE.md`
- confidence: medium

### `tools/cmp-001/config/sfia-v1-1-workspace.config.json`
- authority: **supporting**
- scope: tooling-config
- proof: cmp-config-reference
- reference: `tools/cmp-001/config/sfia-v1-1-workspace.config.json`
- confidence: medium

### `tools/cmp-001/docs/components-database-evolution.md`
- authority: **informational**
- scope: tooling
- proof: tooling-artifact
- reference: `tools/cmp-001/docs/components-database-evolution.md`
- confidence: medium

### `tools/cmp-001/docs/consolidation-report.md`
- authority: **informational**
- scope: tooling
- proof: tooling-artifact
- reference: `tools/cmp-001/docs/consolidation-report.md`
- confidence: medium

### `tools/cmp-001/docs/status-matrix.md`
- authority: **informational**
- scope: tooling
- proof: tooling-artifact
- reference: `tools/cmp-001/docs/status-matrix.md`
- confidence: medium

### `tools/cmp-001/examples/adr.example.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/adr.example.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/component-cmp001.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/component-cmp001.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/component.example.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/component.example.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/experiment.example.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/experiment.example.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/project.example.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/project.example.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/real-objects/adr-cmp001-notion-sync.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/real-objects/adr-cmp001-notion-sync.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/real-objects/knowledge-sfia-engineering-principles.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/real-objects/knowledge-sfia-engineering-principles.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/real-objects/project-interv360.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/real-objects/project-interv360.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/real-objects/prompt-notion-object-creation.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/real-objects/prompt-notion-object-creation.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/real-objects/rex-cmp001-notion-sync.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/real-objects/rex-cmp001-notion-sync.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/real-objects/standard-sfia-object-lifecycle.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/real-objects/standard-sfia-object-lifecycle.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/real-objects/template-experiment.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/real-objects/template-experiment.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/examples/reference-page.example.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/examples/reference-page.example.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/package-lock.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/package-lock.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/package.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/package.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/src/schemas/adr.schema.json`
- authority: **informational**
- scope: tooling
- proof: tooling-artifact
- reference: `tools/cmp-001/src/schemas/adr.schema.json`
- confidence: medium

### `tools/cmp-001/src/schemas/component.schema.json`
- authority: **informational**
- scope: tooling
- proof: tooling-artifact
- reference: `tools/cmp-001/src/schemas/component.schema.json`
- confidence: medium

### `tools/cmp-001/src/schemas/experiment.schema.json`
- authority: **informational**
- scope: tooling
- proof: tooling-artifact
- reference: `tools/cmp-001/src/schemas/experiment.schema.json`
- confidence: medium

### `tools/cmp-001/src/schemas/knowledge.schema.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/src/schemas/knowledge.schema.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/src/schemas/kpi.schema.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/src/schemas/kpi.schema.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/src/schemas/project.schema.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/src/schemas/project.schema.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/src/schemas/prompt.schema.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/src/schemas/prompt.schema.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/src/schemas/reference-page.schema.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/src/schemas/reference-page.schema.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/src/schemas/rex.schema.json`
- authority: **informational**
- scope: technical-artifact
- proof: technical-or-placeholder
- reference: `tools/cmp-001/src/schemas/rex.schema.json:lifecycle_status=not-applicable`
- confidence: high

### `tools/cmp-001/src/schemas/standard.schema.json`
- authority: **informational**
- scope: tooling
- proof: tooling-artifact
- reference: `tools/cmp-001/src/schemas/standard.schema.json`
- confidence: medium

### `tools/cmp-001/src/schemas/template.schema.json`
- authority: **informational**
- scope: tooling
- proof: tooling-artifact
- reference: `tools/cmp-001/src/schemas/template.schema.json`
- confidence: medium

## Section rapport §18 (complète)

## 18. Pass Authority — Results
**Horodatage :** 2026-07-11 20:02 Europe/Paris
**HEAD initial :** `9011ccf6c0c11c8d8b6d99c589d313a4cb9b2ce3`
**Commit substantif :** *(review pack / handoff)*
**HEAD courant PR :** *(review pack / handoff)*

### Définition de A

Lignes `authority = unknown` — **534** fichiers à qualifier.

### Volume A

**|A| = 534**

### Nomenclature Authority (contrat gelé)

| Valeur | Sémantique observée |
|--------|---------------------|
| `canonical` | Source normative explicite SFIA — 3 fichiers core validés (operating model, routing guide, rules-and-guardrails) — gate Morris pour toute promotion |
| `reference` | Index / navigation active (README, prompt-catalog) — ne définit pas seul une norme repository-wide |
| `supporting` | Référence structurante validée ou opérationnelle dans son périmètre (architecture, automation, checklists, standards projet) — sans statut baseline |
| `informational` | Preuve, historique, rapport, export, template draft, artefact technique — pas norme applicable par défaut |
| `unknown` | Autorité non tranchée — réserve Morris obligatoire |

**Aucune nouvelle valeur créée.**

### Matrice préalable

| Métrique | Valeur |
|----------|-------:|
| Authority existantes (hors A) | canonical **3**, reference **74**, supporting **136**, informational **298** |
| A par famille | F08 **390**, F15 **39**, F06 **31**, F04 **26** |
| A archived | **155** |
| A validated | **112** |
| A operational (usage) | **190** |
| A morris_gate | **1** |
| A canonical_candidate yes | **0** |

### Distribution avant / après

| Authority | Avant | Après | Δ |
|-----------|------:|------:|--:|
| unknown | **534** | **2** | −532 |
| informational | 298 | **774** | +476 |
| supporting | 136 | **191** | +55 |
| reference | 74 | **75** | +1 |
| canonical | 3 | **3** | 0 |

### Résultats sur A (532 classifiés + 2 unknown résiduels)

| Authority assignée | Count |
|--------------------|------:|
| informational | **476** |
| supporting | **55** |
| reference | **1** |
| unknown (résiduel) | **2** |

### Unknown résiduels (2) — cas Morris

1. `method/sfia-fast-track/documentation/documentation-structure-target.md` — superseded + delete-candidate + morris_gate
2. `method/complementary/controlled-delivery/controlled-delivery-standard.md` — candidate v2.4 standard sans baseline

### Catégories traitées

| Catégorie | Résultat dominant |
|-----------|-------------------|
| Canonical confirmés | **0** promotion — 3 canonical inchangés hors A |
| Canonical candidates | **0** promu (534 × `canonical_candidate=no`) |
| Standards / architecture validated | **supporting** (6 architecture + pratiques validées) |
| SFIA automation validated | **supporting** (4 engines) |
| Checklists SFIA | **supporting** |
| Templates draft | **informational** |
| README / prompt-catalog | **reference** (prompt-catalog) |
| Rapports / clôtures / REX projet | **informational** |
| Exports Notion | **informational** (hors A ou règle export) |
| Artefacts techniques | **informational** |
| SFIA v3 | **0** réactivation autorité |

### Preuves

Format : `authority-review;result=…;scope=…;proof=…;reference=…;status=…;trajectory=…;confidence=…`

Usage **non utilisé** comme preuve d'autorité seule.

### Dimensions inchangées

Usage **469 / 545 / 31** — Lifecycle — canonical_candidate — lots — dispositions — **0 migration**.

### Statut

**PASS AUTHORITY COMPLETED** — 2 unknown Morris justifiés — **AUTHORITY DIMENSION NOT FROZEN** (gates Morris ouverts).

---

## Plan §14 (complète)

## 14. Cartography contract status
| Élément | Statut |
|---------|--------|
| **Contract** | **Frozen** — CSV = seule source statistique |
| **Pass Lifecycle** | Completed and corrected |
| **Pass Usage** | **Completed** |
| **Usage Evidence Corrective Review** | **Completed** — C=414 |
| **Usage Evidence Graph Review** | **Completed** — G=374 |
| **Direct Usage Evidence Final Review** | **Completed** — D=197 |
| **Usage dimension** | **Frozen** — op **469** / non-op **545** / unknown **31** |
| **Pass Authority** | **Completed** — A=534 ; auth unknown **2** ; canonical **3** / reference **75** / supporting **191** / informational **774** |
| **Migrations** | **Not started** |
| **Champs CSV** | **36** |
| **lifecycle not-applicable** | 338 |
| **technical-artifact-lifecycle** | 10 |

---

## Preuves dimensions inchangées

- usage: 469/545/31 (unchanged)
- lifecycle_status: 0 changes
- canonical_candidate: 0 changes
- lots/dispositions: 0 changes

## CSV Large Artifact Protocol

- path: `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv`
- SHA-256: `ab75fe9b7da7db376fa4ca4bea73d0673949af6ca9c1d47b3d05363d5963f1ee`
- 1045 lignes × 36 champs

### En-tête

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
docs/architecture/sfia-decision-engine.md|sfia-decision-engine.md|md|56513|F06||validated|document-lifecycle|supporting|operational|tooling|||N/A|N/A|docs|docs|documentary|non-compliant|compliant|F|--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati|docs/architecture/README.md||no|no|rename|docs/architecture/sfia-decision-engine.md|YYYY-MM-DD-sfia-decision-engine.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: operational via `prompts/prompt-catalog.md` L35. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).|low|no|medium|lifecycle-corrective;strong-proof=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;all=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-decision-engine.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-decision-engine.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=operational;consumer=prompts/prompt-catalog.md;reference=L35;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-decision-engine.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium|Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-decision-engine.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.|lot-D
docs/architecture/sfia-delivery-pipeline.md|sfia-delivery-pipeline.md|md|57907|F06||validated|document-lifecycle|supporting|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:|docs/architecture/README.md||no|no|keep|docs/architecture/sfia-delivery-pipeline.md|sfia-delivery-pipeline.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).|low|no|medium|lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-delivery-pipeline.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-delivery-pipeline.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-delivery-pipeline.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium|Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-delivery-pipeline.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.|lot-E
docs/architecture/sfia-domain-model.md|sfia-domain-model.md|md|26327|F06||validated|document-lifecycle|supporting|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:|docs/architecture/README.md||no|no|keep|docs/architecture/sfia-domain-model.md|sfia-domain-model.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).|low|no|medium|lifecycle-corrective;proof=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-domain-model.md;confidence=high;checks=validated doc referenced by 16 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-domain-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-domain-model.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium|Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-domain-model.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.|lot-E
docs/architecture/sfia-meta-model.md|sfia-meta-model.md|md|45992|F06||validated|document-lifecycle|supporting|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:|docs/architecture/README.md||no|no|keep|docs/architecture/sfia-meta-model.md|sfia-meta-model.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).|low|no|medium|lifecycle-corrective;strong-proof=explicit-status+canonical-source;all=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-meta-model.md;confidence=high;checks=validated doc referenced by 15 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-meta-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-meta-model.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium|Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-meta-model.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.|lot-E
docs/architecture/sfia-platform-architecture.md|sfia-platform-architecture.md|md|63116|F06||validated|document-lifecycle|supporting|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:|docs/architecture/README.md||no|no|keep|docs/architecture/sfia-platform-architecture.md|sfia-platform-architecture.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).|low|no|medium|lifecycle-corrective;proof=explicit-status+merged-approved-cycle+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-platform-architecture.md;confidence=high;checks=validated doc referenced by 19 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-platform-architecture.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-platform-architecture.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium|Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-platform-architecture.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.|lot-E
docs/architecture/sfia-repository-blueprint.md|sfia-repository-blueprint.md|md|41225|F06||validated|document-lifecycle|supporting|non-operational|tooling|||N/A|N/A|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:|docs/architecture/README.md||no|no|keep|docs/architecture/sfia-repository-blueprint.md|sfia-repository-blueprint.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).|low|no|medium|lifecycle-corrective;proof=explicit-status+merged-approved-cycle+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-repository-blueprint.md;confidence=high;checks=validated doc referenced by 27 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-repository-blueprint.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-repository-blueprint.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium|Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-repository-blueprint.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.|lot-E
docs/foundation/README.md|README.md|md|208|F13||archived|document-lifecycle|reference|non-operational|tooling|||SFIA v1.1|historical|docs|docs|documentary|compliant|compliant|E|# Foundation Principes fondateurs, gouvernance et cadre de la plateforme SFIA. Source Notion : Knowledge Articles, Sta|||no|no|archive|docs/foundation/README.md|README.md|Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective archived. Usage Pass: operational per explicit-current-use. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.|low|no|medium|lifecycle-pass-L;trajectory-v1.1-historical;readme-index-role;git=586671c init: create SFIA workspace structure;usage-pass;result=operational;proof=explicit-current-use;source=docs/foundation/README.md;confidence=high;checks=archive disposition but 78 active consumer(s);usage-review;result=operational;proof=explicit-current-use;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium|Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. |lot-E
docs/foundation/sfia-engineering-principles.md|sfia-engineering-principles.md|md|10488|F06||validated|document-lifecycle|supporting|operational|tooling|||SFIA v1.1|historical|docs|docs|documentary|compliant|compliant|F|--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati|docs/architecture/README.md||no|no|keep|docs/foundation/sfia-engineering-principles.md|sfia-engineering-principles.md|Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: operational via `prompts/prompt-catalog.md` L34. Pass Authority: supporting (validated-doc-reference, scope=docs-validated).|low|no|medium|lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/foundation/sfia-engineering-principles.md;confidence=high;checks=validated doc referenced by 48 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/foundation/sfia-engineering-principles.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=operational;consumer=prompts/prompt-catalog.md;reference=L34;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high;authority-review;result=supporting;scope=docs-validated;proof=validated-doc-reference;reference=docs/foundation/sfia-engineering-principles.md;status=validated;trajectory=SFIA v1.1;confidence=medium|Pass Authority: supporting — validated-doc-reference. Scope: docs-validated. Ref: `docs/foundation/sfia-engineering-principles.md`. Lifecycle: validated. Not inferred from usage alone.|lot-E

### 20 dernières lignes

tools/cmp-001/src/schemas/template.schema.json|template.schema.json|json|642|F15||draft|technical-artifact-lifecycle|informational|operational|tooling|||SFIA v2.4|baseline|tools|tools|unknown|unknown|compliant|F|{ "$schema": "https://json-schema.org/draft/2020-12/schema", "title": "Template", "type": "object", "properties"|||no|no|investigate|tools/cmp-001/src/schemas/template.schema.json|template.schema.json|Regime unknown; family F15; D10 compliant (current=tools, target=tools); D12 unknown.; lifecycle-corrective draft. Usage Pass: operational per manifest-reference. Pass Authority: informational (tooling-artifact, scope=tooling).|low|no|medium|path+content-sample+regime=unknown+incoming=0;usage-pass;result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/template.schema.json;confidence=high;checks=schema consumed by CMP tooling;authority-review;result=informational;scope=tooling;proof=tooling-artifact;reference=tools/cmp-001/src/schemas/template.schema.json;status=draft;trajectory=SFIA v2.4;confidence=medium|Pass Authority: informational — tooling-artifact. Scope: tooling. Ref: `tools/cmp-001/src/schemas/template.schema.json`. Lifecycle: draft. Not inferred from usage alone.|lot-I
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

### Lignes A modifiées: 534

## Diff utile

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
index 3466609..90e99a6 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
@@ -11,61 +11,61 @@ docker/penpot/docker-compose.override.example.yml,docker-compose.override.exampl
 docs/README.md,README.md,md,1104,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Platform Documentation Ce dossier contient la documentation plateforme SFIA. Il est distinct de la méthode acti,,,no,no,keep,docs/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
 docs/adr/README.md,README.md,md,131,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# ADR Architecture Decision Records — décisions structurantes tracées. Source Notion : base ADR (`exports/notion/adr.j,,,no,no,keep,docs/adr/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/adr/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
 docs/architecture/README.md,README.md,md,1966,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,"# SFIA Architecture Documentation d'architecture SFIA : Domain Model, composants, flux et vues. Source Notion : Compon",,,no,no,keep,docs/architecture/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/architecture/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
-docs/architecture/sfia-decision-engine.md,sfia-decision-engine.md,md,56513,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,rename,docs/architecture/sfia-decision-engine.md,YYYY-MM-DD-sfia-decision-engine.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: operational via `prompts/prompt-catalog.md` L35.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;all=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-decision-engine.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-decision-engine.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=operational;consumer=prompts/prompt-catalog.md;reference=L35;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high,Direct Usage Review: operational — `prompts/prompt-catalog.md` L35 (template-use). Ref: `- `docs/architecture/sfia-decision-engine.md``. Active: operational-outside-graph-set. directly referenced by active consumer for current operational purpose.,lot-D
-docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,md,57907,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.",low,no,medium,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-delivery-pipeline.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-delivery-pipeline.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium,Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.,lot-E
-docs/architecture/sfia-domain-model.md,sfia-domain-model.md,md,26327,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-domain-model.md,sfia-domain-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.",low,no,medium,lifecycle-corrective;proof=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-domain-model.md;confidence=high;checks=validated doc referenced by 16 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-domain-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium,Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.,lot-E
-docs/architecture/sfia-meta-model.md,sfia-meta-model.md,md,45992,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-meta-model.md,sfia-meta-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.",low,no,medium,lifecycle-corrective;strong-proof=explicit-status+canonical-source;all=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-meta-model.md;confidence=high;checks=validated doc referenced by 15 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-meta-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium,Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.,lot-E
-docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,md,63116,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.",low,no,medium,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-platform-architecture.md;confidence=high;checks=validated doc referenced by 19 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-platform-architecture.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium,Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.,lot-E
-docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,md,41225,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer.",low,no,medium,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-repository-blueprint.md;confidence=high;checks=validated doc referenced by 27 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-repository-blueprint.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium,Direct Usage Review: non-operational (rules-and-guardrails-generic-consumer). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. No direct functional consumption demonstrated.,lot-E
+docs/architecture/sfia-decision-engine.md,sfia-decision-engine.md,md,56513,F06,,validated,document-lifecycle,supporting,operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,rename,docs/architecture/sfia-decision-engine.md,YYYY-MM-DD-sfia-decision-engine.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: operational via `prompts/prompt-catalog.md` L35. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).",low,no,medium,lifecycle-corrective;strong-proof=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;all=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-decision-engine.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-decision-engine.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=operational;consumer=prompts/prompt-catalog.md;reference=L35;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-decision-engine.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium,Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-decision-engine.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.,lot-D
+docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,md,57907,F06,,validated,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).",low,no,medium,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-delivery-pipeline.md;confidence=high;checks=validated doc referenced by 26 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-delivery-pipeline.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-delivery-pipeline.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium,Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-delivery-pipeline.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.,lot-E
+docs/architecture/sfia-domain-model.md,sfia-domain-model.md,md,26327,F06,,validated,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-domain-model.md,sfia-domain-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).",low,no,medium,lifecycle-corrective;proof=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-domain-model.md;confidence=high;checks=validated doc referenced by 16 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-domain-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-domain-model.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium,Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-domain-model.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.,lot-E
+docs/architecture/sfia-meta-model.md,sfia-meta-model.md,md,45992,F06,,validated,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-meta-model.md,sfia-meta-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).",low,no,medium,lifecycle-corrective;strong-proof=explicit-status+canonical-source;all=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-meta-model.md;confidence=high;checks=validated doc referenced by 15 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-meta-model.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-meta-model.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium,Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-meta-model.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.,lot-E
+docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,md,63116,F06,,validated,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).",low,no,medium,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-platform-architecture.md;confidence=high;checks=validated doc referenced by 19 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-platform-architecture.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-platform-architecture.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium,Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-platform-architecture.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.,lot-E
+docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,md,41225,F06,,validated,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: non-operational — rules-and-guardrails-generic-consumer. Pass Authority: supporting (validated-architecture-foundation, scope=architecture-reference).",low,no,medium,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-repository-blueprint.md;confidence=high;checks=validated doc referenced by 27 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/architecture/sfia-repository-blueprint.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=non-operational;proof=rules-and-guardrails-generic-consumer;checks=rules-and-guardrails-generic-consumer;confidence=medium;authority-review;result=supporting;scope=architecture-reference;proof=validated-architecture-foundation;reference=docs/architecture/sfia-repository-blueprint.md:validated+docs/architecture;status=validated;trajectory=N/A;confidence=medium,Pass Authority: supporting — validated-architecture-foundation. Scope: architecture-reference. Ref: `docs/architecture/sfia-repository-blueprint.md:validated+docs/architecture`. Lifecycle: validated. Not inferred from usage alone.,lot-E
 docs/foundation/README.md,README.md,md,208,F13,,archived,document-lifecycle,reference,non-operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,E,"# Foundation Principes fondateurs, gouvernance et cadre de la plateforme SFIA. Source Notion : Knowledge Articles, Sta",,,no,no,archive,docs/foundation/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective archived. Usage Pass: operational per explicit-current-use. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-pass-L;trajectory-v1.1-historical;readme-index-role;git=586671c init: create SFIA workspace structure;usage-pass;result=operational;proof=explicit-current-use;source=docs/foundation/README.md;confidence=high;checks=archive disposition but 78 active consumer(s);usage-review;result=operational;proof=explicit-current-use;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
-docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,md,10488,F06,,validated,document-lifecycle,unknown,operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,keep,docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: operational via `prompts/prompt-catalog.md` L34.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/foundation/sfia-engineering-principles.md;confidence=high;checks=validated doc referenced by 48 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/foundation/sfia-engineering-principles.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=operational;consumer=prompts/prompt-catalog.md;reference=L34;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high,Direct Usage Review: operational — `prompts/prompt-catalog.md` L34 (template-use). Ref: `- `docs/foundation/sfia-engineering-principles.md``. Active: operational-outside-graph-set. directly referenced by active consumer for current operational purpose.,lot-E
+docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,md,10488,F06,,validated,document-lifecycle,supporting,operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,keep,docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/architecture/README.md`. Usage Graph Review: operational via root `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Direct Usage Review: operational via `prompts/prompt-catalog.md` L34. Pass Authority: supporting (validated-doc-reference, scope=docs-validated).",low,no,medium,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/foundation/sfia-engineering-principles.md;confidence=high;checks=validated doc referenced by 48 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=docs/architecture/README.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=method/sfia-fast-track/core/sfia-rules-and-guardrails.md;chain=docs/architecture/README.md -> method/sfia-fast-track/core/sfia-rules-and-guardrails.md -> docs/foundation/sfia-engineering-principles.md;relation=navigation;consumer-status=canonical-method-root;confidence=high;usage-direct-review;result=operational;consumer=prompts/prompt-catalog.md;reference=L34;relation=template-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high;authority-review;result=supporting;scope=docs-validated;proof=validated-doc-reference;reference=docs/foundation/sfia-engineering-principles.md;status=validated;trajectory=SFIA v1.1;confidence=medium,Pass Authority: supporting — validated-doc-reference. Scope: docs-validated. Ref: `docs/foundation/sfia-engineering-principles.md`. Lifecycle: validated. Not inferred from usage alone.,lot-E
 docs/knowledge/README.md,README.md,md,183,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# Knowledge Articles de connaissance SFIA. Source Notion : base Knowledge Articles (`exports/notion/knowledge.json`).,,,no,no,keep,docs/knowledge/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/knowledge/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
 docs/practices/README.md,README.md,md,592,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,"# SFIA Platform — Practices Ce dossier contient les pratiques plateforme SFIA par rôle, discipline ou domaine. Il ne c",,,no,no,keep,docs/practices/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/practices/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
-docs/practices/architecture/functional-architecture-checklist.md,functional-architecture-checklist.md,md,4845,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Checklist — Architecture fonctionnelle détaillée **Type** : Checklist SFIA **Domaine** : Architecture fonctionnelle,prompts/architecture/functional-architecture-prompt-family.md,,no,no,keep,docs/practices/architecture/functional-architecture-checklist.md,functional-architecture-checklist.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/templates/architecture/functional-architecture-cycle-closure-template.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=1;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-checklist.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/templates/architecture/functional-architecture-cycle-closure-template.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=consumer-depends-on-audit;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/templates/architecture/functional-architecture-cycle-closure-template.md`, edge=document-reference. Checks: consumer-depends-on-audit. ",lot-E
-docs/practices/architecture/functional-architecture-deliverables-standard.md,functional-architecture-deliverables-standard.md,md,9546,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Standard des livrables — Architecture fonctionnelle détaillée **Type** : Standard documentaire SFIA **Domaine** : A,docs/practices/architecture/functional-architecture-checklist.md; prompts/architecture/functional-architecture-prompt-family.md,,no,no,keep,docs/practices/architecture/functional-architecture-deliverables-standard.md,functional-architecture-deliverables-standard.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/architecture/functional-architecture-checklist.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=2;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-deliverables-standard.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/architecture/functional-architecture-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/architecture/functional-architecture-checklist.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
-docs/practices/architecture/functional-architecture-method.md,functional-architecture-method.md,md,12902,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Méthode — Architecture fonctionnelle détaillée **Type** : Méthode SFIA **Domaine** : Architecture fonctionnelle *,docs/practices/architecture/functional-architecture-checklist.md; prompts/architecture/functional-architecture-prompt-family.md,,no,no,keep,docs/practices/architecture/functional-architecture-method.md,functional-architecture-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/architecture/functional-architecture-checklist.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=2;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/architecture/functional-architecture-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/architecture/functional-architecture-checklist.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
-docs/practices/methods-structure-check.md,methods-structure-check.md,md,7511,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Methods Structure Check **Statut** : Draft **Objet** : contrôle de cohérence post-réorganisation des méthode,,,no,no,keep,docs/practices/methods-structure-check.md,methods-structure-check.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-method-cycle-closure.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/methods-structure-check.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/process/bpmn-method-cycle-closure.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=consumer-depends-on-audit;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/process/bpmn-method-cycle-closure.md`, edge=document-reference. Checks: consumer-depends-on-audit. ",lot-E
+docs/practices/architecture/functional-architecture-checklist.md,functional-architecture-checklist.md,md,4845,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Checklist — Architecture fonctionnelle détaillée **Type** : Checklist SFIA **Domaine** : Architecture fonctionnelle,prompts/architecture/functional-architecture-prompt-family.md,,no,no,keep,docs/practices/architecture/functional-architecture-checklist.md,functional-architecture-checklist.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/templates/architecture/functional-architecture-cycle-closure-template.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=1;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-checklist.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/templates/architecture/functional-architecture-cycle-closure-template.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=consumer-depends-on-audit;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/architecture/functional-architecture-checklist.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/architecture/functional-architecture-checklist.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/architecture/functional-architecture-deliverables-standard.md,functional-architecture-deliverables-standard.md,md,9546,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Standard des livrables — Architecture fonctionnelle détaillée **Type** : Standard documentaire SFIA **Domaine** : A,docs/practices/architecture/functional-architecture-checklist.md; prompts/architecture/functional-architecture-prompt-family.md,,no,no,keep,docs/practices/architecture/functional-architecture-deliverables-standard.md,functional-architecture-deliverables-standard.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/architecture/functional-architecture-checklist.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=2;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-deliverables-standard.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/architecture/functional-architecture-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/architecture/functional-architecture-deliverables-standard.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/architecture/functional-architecture-deliverables-standard.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/architecture/functional-architecture-method.md,functional-architecture-method.md,md,12902,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Méthode — Architecture fonctionnelle détaillée **Type** : Méthode SFIA **Domaine** : Architecture fonctionnelle *,docs/practices/architecture/functional-architecture-checklist.md; prompts/architecture/functional-architecture-prompt-family.md,,no,no,keep,docs/practices/architecture/functional-architecture-method.md,functional-architecture-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/architecture/functional-architecture-checklist.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=2;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/architecture/functional-architecture-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/architecture/functional-architecture-method.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/architecture/functional-architecture-method.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/methods-structure-check.md,methods-structure-check.md,md,7511,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Methods Structure Check **Statut** : Draft **Objet** : contrôle de cohérence post-réorganisation des méthode,,,no,no,keep,docs/practices/methods-structure-check.md,methods-structure-check.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-method-cycle-closure.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/methods-structure-check.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/process/bpmn-method-cycle-closure.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=consumer-depends-on-audit;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/methods-structure-check.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/methods-structure-check.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
 docs/practices/process/bpmn-deliverables-standard.md,bpmn-deliverables-standard.md,md,5625,F06,,candidate,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Standard des livrables BPMN **Type** : Standard méthodologique **Statut** : Draft **Domaine** : Process Mo,docs/practices/process/bpmn-integration-checklist.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-method-integration-audit.md; docs/practices/process/bpmn-process-modeling-method.md; prompts/bpmn/bpmn-prompt-family.md,,no,no,keep,docs/practices/process/bpmn-deliverables-standard.md,bpmn-deliverables-standard.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective candidate. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-integration-checklist.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`. Direct Usage Review: non-operational — interv360-tests-readme-generic.",low,no,medium,path+content-sample+regime=documentary+incoming=5;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-integration-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=docs/practices/process/bpmn-integration-checklist.md -> projects/interv360/app/src/tests/README.md -> docs/practices/process/bpmn-deliverables-standard.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=non-operational;proof=interv360-tests-readme-generic;checks=interv360-tests-readme-generic;confidence=medium,Direct Usage Review: non-operational (interv360-tests-readme-generic). Consumer: `projects/interv360/app/src/tests/README.md`. No direct functional consumption demonstrated.,lot-E
-docs/practices/process/bpmn-integration-checklist.md,bpmn-integration-checklist.md,md,5221,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Checklist d'intégration BPMN **Type** : Checklist méthodologique **Statut** : Draft **Domaine** : Process,docs/practices/process/bpmn-deliverables-standard.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-method-integration-audit.md; docs/practices/process/bpmn-process-modeling-method.md; prompts/bpmn/bpmn-prompt-family.md,,no,no,keep,docs/practices/process/bpmn-integration-checklist.md,bpmn-integration-checklist.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-deliverables-standard.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`. Direct Usage Review: non-operational — interv360-domain-readme-generic.",low,no,medium,path+content-sample+regime=documentary+incoming=5;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-deliverables-standard.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-integration-checklist.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium,Direct Usage Review: non-operational (interv360-domain-readme-generic). Consumer: `projects/interv360/app/src/domain/README.md`. No direct functional consumption demonstrated.,lot-E
-docs/practices/process/bpmn-method-cycle-closure.md,bpmn-method-cycle-closure.md,md,8126,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,# SFIA — Clôture du cycle méthode BPMN **Type** : Synthèse de clôture méthodologique **Statut** : Draft — prêt pour P,,,no,no,rename,docs/practices/process/bpmn-method-cycle-closure.md,YYYY-MM-DD-bpmn-method-cycle-closure.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 non-compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`. Usage Graph Review: non-operational — audit-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/process/bpmn-method-cycle-closure.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=audit-only;checks=audit-only+consumer-depends-on-audit;confidence=medium,"Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge=audit-cartography-only. Checks: audit-only; consumer-depends-on-audit. ",lot-D
+docs/practices/process/bpmn-integration-checklist.md,bpmn-integration-checklist.md,md,5221,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Checklist d'intégration BPMN **Type** : Checklist méthodologique **Statut** : Draft **Domaine** : Process,docs/practices/process/bpmn-deliverables-standard.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-method-integration-audit.md; docs/practices/process/bpmn-process-modeling-method.md; prompts/bpmn/bpmn-prompt-family.md,,no,no,keep,docs/practices/process/bpmn-integration-checklist.md,bpmn-integration-checklist.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-deliverables-standard.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`. Direct Usage Review: non-operational — interv360-domain-readme-generic. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=5;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-deliverables-standard.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-integration-checklist.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/process/bpmn-integration-checklist.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/process/bpmn-integration-checklist.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/process/bpmn-method-cycle-closure.md,bpmn-method-cycle-closure.md,md,8126,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,# SFIA — Clôture du cycle méthode BPMN **Type** : Synthèse de clôture méthodologique **Statut** : Draft — prêt pour P,,,no,no,rename,docs/practices/process/bpmn-method-cycle-closure.md,YYYY-MM-DD-bpmn-method-cycle-closure.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 non-compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`. Usage Graph Review: non-operational — audit-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/process/bpmn-method-cycle-closure.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=audit-only;checks=audit-only+consumer-depends-on-audit;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/process/bpmn-method-cycle-closure.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/process/bpmn-method-cycle-closure.md`. Lifecycle: draft. Not inferred from usage alone.,lot-D
 docs/practices/process/bpmn-method-integration-audit.md,bpmn-method-integration-audit.md,md,16086,F09,,draft,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,B,# SFIA — Audit d'intégration BPMN dans la méthodologie **Type** : Audit méthodologique **Statut** : Draft **Phase**,docs/practices/process/bpmn-deliverables-standard.md; docs/practices/process/bpmn-integration-checklist.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-process-modeling-method.md,,no,no,rename,docs/practices/process/bpmn-method-integration-audit.md,YYYY-MM-DD-bpmn-method-integration-audit.md,"Regime documentary; family F09; D10 compliant (current=docs, target=docs); D12 non-compliant.; lifecycle-corrective draft. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-deliverables-standard.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`. Direct Usage Review: non-operational — interv360-domain-readme-generic.",medium,no,medium,path+content-sample+regime=documentary+incoming=4;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-deliverables-standard.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-method-integration-audit.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium,Direct Usage Review: non-operational (interv360-domain-readme-generic). Consumer: `projects/interv360/app/src/domain/README.md`. No direct functional consumption demonstrated.,lot-D
 docs/practices/process/bpmn-process-modeling-method.md,bpmn-process-modeling-method.md,md,8382,F06,,candidate,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Méthode de modélisation BPMN **Type** : Méthode **Statut** : Draft **Domaine** : Process Modeling / BPMN,docs/practices/process/bpmn-deliverables-standard.md; docs/practices/process/bpmn-integration-checklist.md; docs/practices/process/bpmn-method-cycle-closure.md; docs/practices/process/bpmn-method-integration-audit.md; prompts/bpmn/bpmn-prompt-family.md,,no,no,keep,docs/practices/process/bpmn-process-modeling-method.md,bpmn-process-modeling-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective candidate. Usage Evidence Review: operational confirmed via `docs/practices/process/bpmn-deliverables-standard.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`. Direct Usage Review: non-operational — interv360-domain-readme-generic.",low,no,medium,path+content-sample+regime=documentary+incoming=5;usage-review;result=operational;proof=external-reference;consumer=docs/practices/process/bpmn-deliverables-standard.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=docs/practices/process/bpmn-deliverables-standard.md -> projects/interv360/app/src/domain/README.md -> docs/practices/process/bpmn-process-modeling-method.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium,Direct Usage Review: non-operational (interv360-domain-readme-generic). Consumer: `projects/interv360/app/src/domain/README.md`. No direct functional consumption demonstrated.,lot-E
 docs/practices/roles/README.md,README.md,md,466,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Role Methods Ce dossier contient les **méthodes SFIA par rôle**. Chaque fichier décrit : - la mission du rôle,,,no,no,keep,docs/practices/roles/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/practices/roles/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
-docs/practices/roles/architect-method.md,architect-method.md,md,16398,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Architecte — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-methods-fra,,,no,no,keep,docs/practices/roles/architect-method.md,architect-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/architect-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/methods-structure-check.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
-docs/practices/roles/business-analyst-method.md,business-analyst-method.md,md,9880,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Business Analyst — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-metho,,,no,no,keep,docs/practices/roles/business-analyst-method.md,business-analyst-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/business-analyst-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/methods-structure-check.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
-docs/practices/roles/product-owner-method.md,product-owner-method.md,md,16703,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Product Owner — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-methods-,,,no,no,keep,docs/practices/roles/product-owner-method.md,product-owner-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/product-owner-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/methods-structure-check.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
-docs/practices/roles/project-manager-method.md,project-manager-method.md,md,15616,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Chef de projet — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-methods,,,no,no,keep,docs/practices/roles/project-manager-method.md,project-manager-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/project-manager-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/methods-structure-check.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
-docs/practices/roles/qa-tester-method.md,qa-tester-method.md,md,14391,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Méthode rôle — QA / Testeur **Rôle** : QA / Testeur **Statut** : Official role method **Source de création** : In,prompts/qa/qa-tester-prompt-family.md,,no,no,keep,docs/practices/roles/qa-tester-method.md,qa-tester-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`. Direct Usage Review: non-operational — interv360-domain-readme-generic.",low,no,medium,lifecycle-corrective;strong-proof=explicit-status;all=explicit-status;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/qa-tester-method.md;confidence=high;checks=validated doc referenced by 13 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md -> projects/interv360/app/src/domain/README.md -> docs/practices/roles/qa-tester-method.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium,Direct Usage Review: non-operational (interv360-domain-readme-generic). Consumer: `projects/interv360/app/src/domain/README.md`. No direct functional consumption demonstrated.,lot-E
-docs/practices/roles/rssi-method.md,rssi-method.md,md,16077,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# RSSI — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-methods-framing.m,,,no,no,keep,docs/practices/roles/rssi-method.md,rssi-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/rssi-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/methods-structure-check.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
-docs/practices/roles/ux-ui-designer-method.md,ux-ui-designer-method.md,md,16294,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# UX/UI Designer — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-methods,,,no,no,keep,docs/practices/roles/ux-ui-designer-method.md,ux-ui-designer-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/ux-ui-designer-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/methods-structure-check.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
-docs/practices/ux-ui/ux-ui-reprise-checklist.md,ux-ui-reprise-checklist.md,md,6567,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Checklist — Reprise UX/UI documentaire **Type** : Checklist SFIA **Domaine** : UX/UI — reprise documentaire **Sta,prompts/ux-ui/ux-ui-reprise-prompt-family.md,,no,no,keep,docs/practices/ux-ui/ux-ui-reprise-checklist.md,ux-ui-reprise-checklist.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/templates/ux-ui/ux-ui-cycle-closure-template.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=1;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/ux-ui/ux-ui-reprise-checklist.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/templates/ux-ui/ux-ui-cycle-closure-template.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=consumer-depends-on-audit;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/templates/ux-ui/ux-ui-cycle-closure-template.md`, edge=document-reference. Checks: consumer-depends-on-audit. ",lot-E
-docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md,ux-ui-reprise-deliverables-standard.md,md,10312,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Standard des livrables — Reprise UX/UI documentaire **Type** : Standard documentaire SFIA **Domaine** : UX/UI — rep,docs/practices/ux-ui/ux-ui-reprise-checklist.md; prompts/ux-ui/ux-ui-reprise-prompt-family.md,,no,no,keep,docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md,ux-ui-reprise-deliverables-standard.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/ux-ui/ux-ui-reprise-checklist.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=2;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/ux-ui/ux-ui-reprise-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/ux-ui/ux-ui-reprise-checklist.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
-docs/practices/ux-ui/ux-ui-reprise-method.md,ux-ui-reprise-method.md,md,10438,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Méthode — Reprise UX/UI documentaire **Type** : Méthode SFIA **Domaine** : UX/UI — reprise documentaire **Statut*,docs/practices/ux-ui/ux-ui-reprise-checklist.md; prompts/ux-ui/ux-ui-reprise-prompt-family.md,,no,no,keep,docs/practices/ux-ui/ux-ui-reprise-method.md,ux-ui-reprise-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/ux-ui/ux-ui-reprise-checklist.md`. Usage Graph Review: non-operational — citation-only.",low,no,medium,path+content-sample+regime=documentary+incoming=2;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/ux-ui/ux-ui-reprise-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/ux-ui/ux-ui-reprise-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (citation-only) — consumer `docs/practices/ux-ui/ux-ui-reprise-checklist.md`, edge=document-reference. Checks: inactive-consumer-non-operational. ",lot-E
+docs/practices/roles/architect-method.md,architect-method.md,md,16398,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Architecte — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-methods-fra,,,no,no,keep,docs/practices/roles/architect-method.md,architect-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/architect-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/roles/architect-method.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/roles/architect-method.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/roles/business-analyst-method.md,business-analyst-method.md,md,9880,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Business Analyst — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-metho,,,no,no,keep,docs/practices/roles/business-analyst-method.md,business-analyst-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/business-analyst-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/roles/business-analyst-method.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/roles/business-analyst-method.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/roles/product-owner-method.md,product-owner-method.md,md,16703,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Product Owner — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-methods-,,,no,no,keep,docs/practices/roles/product-owner-method.md,product-owner-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/product-owner-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/roles/product-owner-method.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/roles/product-owner-method.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/roles/project-manager-method.md,project-manager-method.md,md,15616,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Chef de projet — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-methods,,,no,no,keep,docs/practices/roles/project-manager-method.md,project-manager-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/project-manager-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/roles/project-manager-method.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/roles/project-manager-method.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/roles/qa-tester-method.md,qa-tester-method.md,md,14391,F06,,validated,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Méthode rôle — QA / Testeur **Rôle** : QA / Testeur **Statut** : Official role method **Source de création** : In,prompts/qa/qa-tester-prompt-family.md,,no,no,keep,docs/practices/roles/qa-tester-method.md,qa-tester-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`. Direct Usage Review: non-operational — interv360-domain-readme-generic. Pass Authority: supporting (validated-practice-method, scope=practice-standard).",low,no,medium,lifecycle-corrective;strong-proof=explicit-status;all=explicit-status;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/qa-tester-method.md;confidence=high;checks=validated doc referenced by 13 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md -> projects/interv360/app/src/domain/README.md -> docs/practices/roles/qa-tester-method.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=non-operational;proof=interv360-domain-readme-generic;checks=interv360-domain-readme-generic;confidence=medium;authority-review;result=supporting;scope=practice-standard;proof=validated-practice-method;reference=docs/practices/roles/qa-tester-method.md;status=validated;trajectory=N/A;confidence=medium,Pass Authority: supporting — validated-practice-method. Scope: practice-standard. Ref: `docs/practices/roles/qa-tester-method.md`. Lifecycle: validated. Not inferred from usage alone.,lot-E
+docs/practices/roles/rssi-method.md,rssi-method.md,md,16077,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# RSSI — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-methods-framing.m,,,no,no,keep,docs/practices/roles/rssi-method.md,rssi-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/rssi-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/roles/rssi-method.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/roles/rssi-method.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/roles/ux-ui-designer-method.md,ux-ui-designer-method.md,md,16294,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# UX/UI Designer — SFIA Role Method **Statut** : Draft **Source pilote** : PRJ-INTERV360 **Origine** : role-methods,,,no,no,keep,docs/practices/roles/ux-ui-designer-method.md,ux-ui-designer-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/methods-structure-check.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/roles/ux-ui-designer-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/methods-structure-check.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/roles/ux-ui-designer-method.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/roles/ux-ui-designer-method.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/ux-ui/ux-ui-reprise-checklist.md,ux-ui-reprise-checklist.md,md,6567,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Checklist — Reprise UX/UI documentaire **Type** : Checklist SFIA **Domaine** : UX/UI — reprise documentaire **Sta,prompts/ux-ui/ux-ui-reprise-prompt-family.md,,no,no,keep,docs/practices/ux-ui/ux-ui-reprise-checklist.md,ux-ui-reprise-checklist.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/templates/ux-ui/ux-ui-cycle-closure-template.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=1;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/ux-ui/ux-ui-reprise-checklist.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/templates/ux-ui/ux-ui-cycle-closure-template.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=consumer-depends-on-audit;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/ux-ui/ux-ui-reprise-checklist.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/ux-ui/ux-ui-reprise-checklist.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md,ux-ui-reprise-deliverables-standard.md,md,10312,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Standard des livrables — Reprise UX/UI documentaire **Type** : Standard documentaire SFIA **Domaine** : UX/UI — rep,docs/practices/ux-ui/ux-ui-reprise-checklist.md; prompts/ux-ui/ux-ui-reprise-prompt-family.md,,no,no,keep,docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md,ux-ui-reprise-deliverables-standard.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/ux-ui/ux-ui-reprise-checklist.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=2;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/ux-ui/ux-ui-reprise-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
+docs/practices/ux-ui/ux-ui-reprise-method.md,ux-ui-reprise-method.md,md,10438,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Méthode — Reprise UX/UI documentaire **Type** : Méthode SFIA **Domaine** : UX/UI — reprise documentaire **Statut*,docs/practices/ux-ui/ux-ui-reprise-checklist.md; prompts/ux-ui/ux-ui-reprise-prompt-family.md,,no,no,keep,docs/practices/ux-ui/ux-ui-reprise-method.md,ux-ui-reprise-method.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `docs/practices/ux-ui/ux-ui-reprise-checklist.md`. Usage Graph Review: non-operational — citation-only. Pass Authority: informational (draft-practice-no-normative-status, scope=practice-draft).",low,no,high,path+content-sample+regime=documentary+incoming=2;usage-pass;result=operational;proof=current-method-reference;source=docs/practices/ux-ui/ux-ui-reprise-method.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=docs/practices/ux-ui/ux-ui-reprise-checklist.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=citation-only;checks=inactive-consumer-non-operational;confidence=medium;authority-review;result=informational;scope=practice-draft;proof=draft-practice-no-normative-status;reference=docs/practices/ux-ui/ux-ui-reprise-method.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — draft-practice-no-normative-status. Scope: practice-draft. Ref: `docs/practices/ux-ui/ux-ui-reprise-method.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
 docs/rex/README.md,README.md,md,105,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# REX Retours d'expérience et leçons apprises. Source Notion : base REX (`exports/notion/rex.json`).,,,no,no,keep,docs/rex/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/rex/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
-docs/roadmaps/cmp-technical-roadmap.md,cmp-technical-roadmap.md,md,4003,F06,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Roadmap technique — CMP / SFIA outillage **Statut** : Draft **Objet** : évolutions techniques CMP-001 et outillage,,,no,no,keep,docs/roadmaps/cmp-technical-roadmap.md,cmp-technical-roadmap.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`. Usage Graph Review: non-operational — audit-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/roadmaps/cmp-technical-roadmap.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=audit-only;checks=audit-only;confidence=medium,"Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`, edge=audit-cartography-only. Checks: audit-only. ",lot-E
+docs/roadmaps/cmp-technical-roadmap.md,cmp-technical-roadmap.md,md,4003,F06,,draft,document-lifecycle,informational,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# Roadmap technique — CMP / SFIA outillage **Statut** : Draft **Objet** : évolutions techniques CMP-001 et outillage,,,no,no,keep,docs/roadmaps/cmp-technical-roadmap.md,cmp-technical-roadmap.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`. Usage Graph Review: non-operational — audit-only. Pass Authority: informational (informative-document, scope=docs-general).",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/roadmaps/cmp-technical-roadmap.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=audit-only;checks=audit-only;confidence=medium;authority-review;result=informational;scope=docs-general;proof=informative-document;reference=docs/roadmaps/cmp-technical-roadmap.md;status=draft;trajectory=N/A;confidence=medium,Pass Authority: informational — informative-document. Scope: docs-general. Ref: `docs/roadmaps/cmp-technical-roadmap.md`. Lifecycle: draft. Not inferred from usage alone.,lot-E
 docs/standards/README.md,README.md,md,246,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Platform — Standards Ce dossier contient les standards transverses de la plateforme SFIA. Ils sont distincts de,,,no,no,keep,docs/standards/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/standards/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
-docs/standards/ux-ui-v1-governance-standard.md,ux-ui-v1-governance-standard.md,md,17910,F06,,validated,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Standard gouvernance UX/UI V1 **Statut** : Official standard **Type** : Standard de gouvernance UX/UI **Ve,,,no,no,keep,docs/standards/ux-ui-v1-governance-standard.md,ux-ui-v1-governance-standard.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`. Usage Graph Review: non-operational — audit-only.",low,no,medium,lifecycle-corrective;strong-proof=explicit-status+closure-evidence;all=explicit-status+closure-evidence;usage-pass;result=operational;proof=current-method-reference;source=docs/standards/ux-ui-v1-governance-standard.md;confidence=high;checks=validated doc referenced by 7 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=audit-only;checks=audit-only+consumer-depends-on-audit;confidence=medium,"Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge=audit-cartography-only. Checks: audit-only; consumer-depends-on-audit. ",lot-E
+docs/standards/ux-ui-v1-governance-standard.md,ux-ui-v1-governance-standard.md,md,17910,F06,,validated,document-lifecycle,supporting,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,# SFIA — Standard gouvernance UX/UI V1 **Statut** : Official standard **Type** : Standard de gouvernance UX/UI **Ve,,,no,no,keep,docs/standards/ux-ui-v1-governance-standard.md,ux-ui-v1-governance-standard.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`. Usage Graph Review: non-operational — audit-only. Pass Authority: supporting (validated-doc-reference, scope=docs-validated).",low,no,medium,lifecycle-corrective;strong-proof=explicit-status+closure-evidence;all=explicit-status+closure-evidence;usage-pass;result=operational;proof=current-method-reference;source=docs/standards/ux-ui-v1-governance-standard.md;confidence=high;checks=validated doc referenced by 7 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=audit-only;checks=audit-only+consumer-depends-on-audit;confidence=medium;authority-review;result=supporting;scope=docs-validated;proof=validated-doc-reference;reference=docs/standards/ux-ui-v1-governance-standard.md;status=validated;trajectory=N/A;confidence=medium,Pass Authority: supporting — validated-doc-reference. Scope: docs-validated. Ref: `docs/standards/ux-ui-v1-governance-standard.md`. Lifecycle: validated. Not inferred from usage alone.,lot-E
 docs/templates/README.md,README.md,md,305,F13,,candidate,document-lifecycle,reference,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Platform — Templates Ce dossier contient les templates plateforme SFIA. Ils sont distincts des templates opérat,,,no,no,keep,docs/templates/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/templates/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-E
-docs/templates/architecture/functional-architecture-cycle-closure-template.md,functional-architecture-cycle-closure-template.md,md,5023,F04,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,D,# [Nom du projet] — Clôture du cycle d'architecture fonctionnelle **Projet** : [Code ou nom du projet] **Phase** : [P,,,no,no,rename,docs/templates/architecture/functional-architecture-cycle-closure-template.md,YYYY-MM-DD-functional-architecture-cycle-closure-template.md,"Regime documentary; family F04; D10 compliant (current=docs, target=docs); D12 non-compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`. Usage Graph Review: non-operational — audit-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/templates/architecture/functional-architecture-cycle-closure-template.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=audit-only;checks=audit-only+consumer-depends-on-audit;confidence=medium,"Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge=audit-cartography-only. Checks: audit-only; consumer-depends-on-audit. ",lot-D
-docs/templates/architecture/functional-architecture-scope-template.md,functional-architecture-scope-template.md,md,5061,F04,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,D,# [Nom du projet] — Cadrage du périmètre d'architecture fonctionnelle **Projet** : [Code ou nom du projet] **Phase**,,,no,no,keep,docs/templates/architecture/functional-architecture-scope-template.md,functional-architecture-scope-template.md,"Regime documentary; family F04; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`. Usage Graph Review: non-operational — audit-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/templates/architecture/functional-architecture-scope-template.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=audit-only;checks=audit-only+consumer-depends-on-audit;confidence=medium,"Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge=audit-cartography-only. Checks: audit-only; consumer-depends-on-audit. ",lot-H
-docs/templates/architecture/functional-architecture-summary-template.md,functional-architecture-summary-template.md,md,5600,F04,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,D,# [Nom du projet] — Synthèse d'architecture fonctionnelle détaillée **Projet** : [Code ou nom du projet] **Phase** :,,,no,no,keep,docs/templates/architecture/functional-architecture-summary-template.md,functional-architecture-summary-template.md,"Regime documentary; family F04; D10 compliant (current=docs, target=docs); D12 compliant.; lifecycle-corrective draft. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`. Usage Graph Review: non-operational — audit-only.",low,no,medium,path+content-sample+regime=documentary+incoming=0;usage-pass;result=operational;proof=current-method-reference;source=docs/templates/architecture/functional-architecture-summary-template.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=non-operational;proof=audit-only;checks=audit-only+consumer-depends-on-audit;confidence=medium,"Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge=audit-cartography-only. Checks: audit-only; consumer-depends-on-audit. ",lot-H
-docs/templates/process/bpmn-cycle-closure-template.md,bpmn-cycle-closure-template.md,md,2295,F04,,draft,document-lifecycle,unknown,non-operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compl
```

## Verdict

```
PASS AUTHORITY EXECUTED
TARGET AUTHORITY SET = 534
AUTHORITY VOCABULARY PRESERVED
CANONICAL CANDIDATES NOT PROMOTED
USAGE VALUES UNCHANGED
LIFECYCLE VALUES UNCHANGED
LOTS AND DISPOSITIONS UNCHANGED
PR NOT MERGED
READY FOR CHATGPT AUTHORITY REVIEW
```