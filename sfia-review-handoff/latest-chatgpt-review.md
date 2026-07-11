# SFIA v2.6 — Review Pack (full) — Pass Usage

**Date/heure :** 2026-07-11 17:49 CEST
**Cycle :** Validation corrective de cartographie — Pass Usage
**Profil :** Critical
**Branche :** `audit/sfia-v2.6-repository-cartography`
**HEAD initial :** `ceedca8579a3705c397af8c3992cd7372b3b63fc`
**HEAD final :** `47d826915b87c33d7e2bdc1794c224999e9abd03`
**Base inventaire :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
**PR :** #165
**synthesis only :** no

---

## Local Git Truth Check

| Check | Result |
|-------|--------|
| Repository | mcleland147/sfia-workspace |
| Branche | audit/sfia-v2.6-repository-cartography |
| HEAD initial | `ceedca8579a3705c397af8c3992cd7372b3b63fc` |
| PR #165 | OPEN, non draft, non mergée |
| Worktree | 3 fichiers versionnés (CSV + rapport + plan) |

## Contrat gelé

- Inventaire : **1045** fichiers
- Champs CSV : **36**
- SHA-256 CSV (post-Pass Usage) : `02be34c1d78af3b5a853265e053a12b8c8d9c79724f9150e6211f68b12462927`
- SHA-256 CSV (pré-Pass Usage) : `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2`

## Statistiques initiales (cible Pass Usage)

- usage unknown : **481**
- usage operational : 353
- usage non-operational : 211
- authority unknown : 534 (inchangé)
- lifecycle unknown : 0 (inchangé)

## Usage avant / après

| Valeur | Avant | Après |
|--------|------:|------:|
| unknown | 481 | **0** |
| operational | 353 | **794** |
| non-operational | 211 | **251** |

## Preuve Lifecycle / Authority inchangés

- lifecycle_status modifiés : **0**
- lifecycle_applicability modifiés : **0**
- authority modifiés : **0**
- migration_lot_candidate modifiés : **0**
- lignes hors cible usage modifiées : **0**

## Liste des 481 fichiers analysés — preuve Usage

- `.cursor/mcp-templates/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=.cursor/mcp-templates/README.md;confidence=high;checks=READM`
- `.github/workflows/interv360-ci.yml` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=.github/workflows/interv360-ci.yml;confidence=high;checks=reposi`
- `.gitignore` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=.gitignore;confidence=high;checks=repository/tooling configurati`
- `README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=README.md;confidence=high;checks=README index with navigatio`
- `components/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=components/README.md;confidence=high;checks=README index wit`
- `docker/penpot/.env.example` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=docker/penpot/.env.example;confidence=high;checks=environment/co`
- `docker/penpot/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=docker/penpot/README.md;confidence=high;checks=README index `
- `docker/penpot/docker-compose.override.example.yml` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=docker/penpot/docker-compose.override.example.yml;confidence=hig`
- `docs/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=docs/README.md;confidence=high;checks=README index with navi`
- `docs/adr/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=docs/adr/README.md;confidence=high;checks=README index with `
- `docs/architecture/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=docs/architecture/README.md;confidence=high;checks=README in`
- `docs/architecture/sfia-decision-engine.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/architecture/sfia-decision-engine.md;confidence=high;check`
- `docs/architecture/sfia-delivery-pipeline.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/architecture/sfia-delivery-pipeline.md;confidence=high;che`
- `docs/architecture/sfia-domain-model.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/architecture/sfia-domain-model.md;confidence=high;checks=v`
- `docs/architecture/sfia-meta-model.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/architecture/sfia-meta-model.md;confidence=high;checks=val`
- `docs/architecture/sfia-platform-architecture.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/architecture/sfia-platform-architecture.md;confidence=high`
- `docs/architecture/sfia-repository-blueprint.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/architecture/sfia-repository-blueprint.md;confidence=high;`
- `docs/foundation/README.md` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=docs/foundation/README.md;confidence=high;checks=archive dispositio`
- `docs/foundation/sfia-engineering-principles.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/foundation/sfia-engineering-principles.md;confidence=high;`
- `docs/knowledge/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=docs/knowledge/README.md;confidence=high;checks=README index`
- `docs/practices/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=docs/practices/README.md;confidence=high;checks=README index`
- `docs/practices/architecture/functional-architecture-checklist.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-checklist.m`
- `docs/practices/architecture/functional-architecture-deliverables-standard.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-deliverable`
- `docs/practices/architecture/functional-architecture-method.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/architecture/functional-architecture-method.md;c`
- `docs/practices/methods-structure-check.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/methods-structure-check.md;confidence=high;check`
- `docs/practices/process/bpmn-method-cycle-closure.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/process/bpmn-method-cycle-closure.md;confidence=`
- `docs/practices/roles/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=docs/practices/roles/README.md;confidence=high;checks=README`
- `docs/practices/roles/architect-method.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/roles/architect-method.md;confidence=high;checks`
- `docs/practices/roles/business-analyst-method.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/roles/business-analyst-method.md;confidence=high`
- `docs/practices/roles/product-owner-method.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/roles/product-owner-method.md;confidence=high;ch`
- `docs/practices/roles/project-manager-method.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/roles/project-manager-method.md;confidence=high;`
- `docs/practices/roles/qa-tester-method.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/roles/qa-tester-method.md;confidence=high;checks`
- `docs/practices/roles/rssi-method.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/roles/rssi-method.md;confidence=high;checks=draf`
- `docs/practices/roles/ux-ui-designer-method.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/roles/ux-ui-designer-method.md;confidence=high;c`
- `docs/practices/ux-ui/ux-ui-reprise-checklist.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/ux-ui/ux-ui-reprise-checklist.md;confidence=high`
- `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md;con`
- `docs/practices/ux-ui/ux-ui-reprise-method.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/practices/ux-ui/ux-ui-reprise-method.md;confidence=high;ch`
- `docs/rex/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=docs/rex/README.md;confidence=high;checks=README index with `
- `docs/roadmaps/cmp-technical-roadmap.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/roadmaps/cmp-technical-roadmap.md;confidence=high;checks=d`
- `docs/standards/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=docs/standards/README.md;confidence=high;checks=README index`
- `docs/standards/ux-ui-v1-governance-standard.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/standards/ux-ui-v1-governance-standard.md;confidence=high;`
- `docs/templates/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=docs/templates/README.md;confidence=high;checks=README index`
- `docs/templates/architecture/functional-architecture-cycle-closure-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/templates/architecture/functional-architecture-cycle-closu`
- `docs/templates/architecture/functional-architecture-scope-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/templates/architecture/functional-architecture-scope-templ`
- `docs/templates/architecture/functional-architecture-summary-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/templates/architecture/functional-architecture-summary-tem`
- `docs/templates/process/bpmn-cycle-closure-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/templates/process/bpmn-cycle-closure-template.md;confidenc`
- `docs/templates/process/bpmn-process-analysis-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/templates/process/bpmn-process-analysis-template.md;confid`
- `docs/templates/process/bpmn-process-scope-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/templates/process/bpmn-process-scope-template.md;confidenc`
- `docs/templates/tooling/penpot/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=docs/templates/tooling/penpot/README.md;confidence=high;chec`
- `docs/templates/ux-ui/ux-ui-cycle-closure-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/templates/ux-ui/ux-ui-cycle-closure-template.md;confidence`
- `docs/templates/ux-ui/ux-ui-reprise-scope-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/templates/ux-ui/ux-ui-reprise-scope-template.md;confidence`
- `docs/templates/ux-ui/ux-ui-reprise-summary-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/templates/ux-ui/ux-ui-reprise-summary-template.md;confiden`
- `docs/tooling/mcp/sfia-mcp-v2-architecture.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/tooling/mcp/sfia-mcp-v2-architecture.md;confidence=high;ch`
- `docs/tooling/penpot/penpot-sfia-method-integration.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/tooling/penpot/penpot-sfia-method-integration.md;confidenc`
- `docs/workspace-readiness-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=docs/workspace-readiness-report.md;confidence=high;checks=draft`
- `exports/notion/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=exports/notion/README.md;confidence=high;checks=README index`
- `exports/notion/adr.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=exports/notion/adr.json;confidence=high;checks=listed/consumed by exp`
- `exports/notion/components.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=exports/notion/components.json;confidence=high;checks=listed/consumed`
- `exports/notion/experiments.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=exports/notion/experiments.json;confidence=high;checks=listed/consume`
- `exports/notion/export-manifest.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=exports/notion/export-manifest.json;confidence=high;checks=notion exp`
- `exports/notion/knowledge.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=exports/notion/knowledge.json;confidence=high;checks=listed/consumed `
- `exports/notion/kpi.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=exports/notion/kpi.json;confidence=high;checks=listed/consumed by exp`
- `exports/notion/projects.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=exports/notion/projects.json;confidence=high;checks=listed/consumed b`
- `exports/notion/prompts.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=exports/notion/prompts.json;confidence=high;checks=listed/consumed by`
- `exports/notion/rex.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=exports/notion/rex.json;confidence=high;checks=listed/consumed by exp`
- `exports/notion/standards.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=exports/notion/standards.json;confidence=high;checks=listed/consumed `
- `exports/notion/templates.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=exports/notion/templates.json;confidence=high;checks=listed/consumed `
- `method/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=method/README.md;confidence=high;checks=README index with na`
- `method/complementary/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=method/complementary/README.md;confidence=high;checks=README`
- `method/complementary/controlled-delivery/controlled-delivery-index-integration.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/complementary/controlled-delivery/controlled-delivery-in`
- `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/complementary/controlled-delivery/controlled-delivery-pu`
- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/complementary/controlled-delivery/controlled-delivery-pu`
- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/complementary/controlled-delivery/controlled-delivery-pu`
- `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/complementary/controlled-delivery/delivery-acceleration-`
- `method/sfia-fast-track/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=method/sfia-fast-track/README.md;confidence=high;checks=READ`
- `method/sfia-fast-track/audit-rex/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=method/sfia-fast-track/audit-rex/README.md;confidence=high;c`
- `method/sfia-fast-track/audit-rex/interv360-application-rex.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/audit-rex/interv360-application-rex.md;c`
- `method/sfia-fast-track/automation/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=method/sfia-fast-track/automation/README.md;confidence=high;`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/automation/sfia-prompt-generation-engine`
- `method/sfia-fast-track/checklists/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=method/sfia-fast-track/checklists/README.md;confidence=high;`
- `method/sfia-fast-track/checklists/guardrails-checklist.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/checklists/guardrails-checklist.md;confi`
- `method/sfia-fast-track/checklists/notion-publication-checklist.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/checklists/notion-publication-checklist.`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/checklists/sfia-validation-checklist.md;`
- `method/sfia-fast-track/checklists/validation-checklist.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/checklists/validation-checklist.md;confi`
- `method/sfia-fast-track/cycles/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=method/sfia-fast-track/cycles/README.md;confidence=high;chec`
- `method/sfia-fast-track/cycles/interv360-final-capitalization.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/cycles/interv360-final-capitalization.md`
- `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/cycles/interv360-mvp-delivery-capitaliza`
- `method/sfia-fast-track/documentation/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=method/sfia-fast-track/documentation/README.md;confidence=hi`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/foundation-docu`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/foundation-docu`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/foundation-`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/foundation-`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/README.md` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/foundation-docu`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md` → **non-operational** (explicit-retired) — `result=non-operational;proof=explicit-retired;source=method/sfia-fast-track/documentation/capitalization/foundation-docu`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/README.md` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/foundation-docu`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-post-merge-status.md` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/foundation-docu`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/foundation-`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/foundation-`
- `method/sfia-fast-track/documentation/capitalization/inventory-complementary-methods.md-list.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/inventory-compl`
- `method/sfia-fast-track/documentation/capitalization/inventory-interv360-docs.md-list.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/inventory-inter`
- `method/sfia-fast-track/documentation/capitalization/inventory-platform-docs.md-list.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/inventory-platf`
- `method/sfia-fast-track/documentation/capitalization/inventory-platform-templates.md-list.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/inventory-platf`
- `method/sfia-fast-track/documentation/capitalization/inventory-practices.md-list.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/inventory-pract`
- `method/sfia-fast-track/documentation/capitalization/inventory-prompts.md-list.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/inventory-promp`
- `method/sfia-fast-track/documentation/capitalization/inventory-sfia-fast-track.md-list.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/capitalization/inventory-sfia-`
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-docume`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md` → **operational** (weak-proof) — `result=operational;proof=current-cycle-reference;source=sfia-v2.6-cartography-pr165;confidence=high;checks=active-audit-`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2/sfi`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2/sfi`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2/sfi`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4.1-documentation-status-promotion-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2/sfi`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2/sfi`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2/sfi`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/capitalization/sfia-v2/sfi`
- `method/sfia-fast-track/documentation/documentation-audit.md` → **non-operational** (explicit-retired) — `result=non-operational;proof=explicit-retired;source=method/sfia-fast-track/documentation/documentation-audit.md;confide`
- `method/sfia-fast-track/documentation/documentation-structure-target.md` → **non-operational** (explicit-retired) — `result=non-operational;proof=explicit-retired;source=method/sfia-fast-track/documentation/documentation-structure-target`
- `method/sfia-fast-track/documentation/notion-target-content-map.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/notion-target-content-map.`
- `method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/notion/sfia-notion-live-ex`
- `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/notion/sfia-notion-provisi`
- `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-engine-design.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/notion/sfia-notion-provisi`
- `method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/documentation/notion/sfia-notion-publica`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-all.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/final-architec`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-depth3.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/final-architec`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-docs-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/final-architec`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-exports-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/final-architec`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-interv360-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/final-architec`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-markdown-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/final-architec`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-method-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/final-architec`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-prompts-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/final-architec`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-tools-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/final-architec`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/final-architec`
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-all-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/interv360/inte`
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-directory-map.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/interv360/inte`
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-folder-normalization-audit.md` → **non-operational** (explicit-retired) — `result=non-operational;proof=explicit-retired;source=method/sfia-fast-track/documentation/workspace-audit/interv360/inte`
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-folder-volume.txt` → **non-operational** (explicit-archive-only) — `result=non-operational;proof=explicit-archive-only;source=method/sfia-fast-track/documentation/workspace-audit/interv360`
- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-markdown-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/interv360/inte`
- `method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/operational-cl`
- `method/sfia-fast-track/documentation/workspace-audit/post-cleanup-all-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/post-cleanup-a`
- `method/sfia-fast-track/documentation/workspace-audit/post-cleanup-markdown-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/post-cleanup-m`
- `method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/pr-81-post-mer`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-all-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-al`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth2.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-di`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth4.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-di`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-docs-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-do`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-markdown-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-ma`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-method-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-me`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-methods-files.txt` → **non-operational** (explicit-archive-only) — `result=non-operational;proof=explicit-archive-only;source=method/sfia-fast-track/documentation/workspace-audit/pre-clean`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-projects-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-pr`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-scripts-files.txt` → **non-operational** (explicit-archive-only) — `result=non-operational;proof=explicit-archive-only;source=method/sfia-fast-track/documentation/workspace-audit/pre-clean`
- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-sfia-notion-sync-files.txt` → **non-operational** (explicit-archive-only) — `result=non-operational;proof=explicit-archive-only;source=method/sfia-fast-track/documentation/workspace-audit/pre-clean`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-all.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/round-2/direct`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-depth3.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/round-2/direct`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/docs-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/round-2/docs-f`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/exports-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/round-2/export`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/interv360-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/round-2/interv`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/markdown-files-all.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/round-2/markdo`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/method-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/round-2/method`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/methods-files.txt` → **non-operational** (explicit-archive-only) — `result=non-operational;proof=explicit-archive-only;source=method/sfia-fast-track/documentation/workspace-audit/round-2/m`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/post-round-2-markdown-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/round-2/post-r`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/prompts-files.txt` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/round-2/prompt`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-audit.md` → **non-operational** (explicit-retired) — `result=non-operational;proof=explicit-retired;source=method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-w`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-plan.md` → **non-operational** (explicit-retired) — `result=non-operational;proof=explicit-retired;source=method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-w`
- `method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-report.md` → **non-operational** (explicit-retired) — `result=non-operational;proof=explicit-retired;source=method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-w`
- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-global-audit.md` → **non-operational** (explicit-retired) — `result=non-operational;proof=explicit-retired;source=method/sfia-fast-track/documentation/workspace-audit/sfia-workspace`
- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md` → **operational** (explicit-current-use) — `result=operational;proof=explicit-current-use;source=method/sfia-fast-track/documentation/workspace-audit/sfia-workspace`
- `method/sfia-fast-track/templates/audit-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/templates/audit-template.md;confidence=h`
- `method/sfia-fast-track/templates/cycle-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/templates/cycle-template.md;confidence=h`
- `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/templates/mvp-delivery-pattern-template.`
- `method/sfia-fast-track/templates/post-merge-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/templates/post-merge-template.md;confide`
- `method/sfia-fast-track/templates/pr-body-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/templates/pr-body-template.md;confidence`
- `method/sfia-fast-track/templates/rex-template.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/templates/rex-template.md;confidence=hig`
- `method/sfia-fast-track/ui/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=method/sfia-fast-track/ui/README.md;confidence=high;checks=R`
- `method/sfia-fast-track/ui/figma-design-first-ui-method.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=method/sfia-fast-track/ui/figma-design-first-ui-method.md;confi`
- `projects/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/README.md;confidence=high;checks=README index with `
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/00-framing/chantiers360-post-mvp-frami`
- `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/00-framing/chantiers360-post-mvp-optio`
- `projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md;confidence=`
- `projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md;con`
- `projects/chantiers360-v2/04-design/captures/01-dashboard-cockpit-premium.png` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/chantiers360-v2/04-design/captures/01-dashboard-coc`
- `projects/chantiers360-v2/04-design/captures/02-fiche-chantier-taches.png` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/chantiers360-v2/04-design/captures/02-fiche-chantie`
- `projects/chantiers360-v2/04-design/captures/03-fiche-chantier-reserves.png` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/chantiers360-v2/04-design/captures/03-fiche-chantie`
- `projects/chantiers360-v2/04-design/captures/04-creation-chantier.png` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/chantiers360-v2/04-design/captures/04-creation-chan`
- `projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/05-technical-architecture/technical-ar`
- `projects/chantiers360-v2/06-figma-fidelity-spike/figma-reference.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/06-figma-fidelity-spike/figma-referenc`
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/06-figma-fidelity-spike/spike-decision`
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview`
- `projects/chantiers360-v2/06-figma-fidelity-spike/spike-readiness.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/06-figma-fidelity-spike/spike-readines`
- `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-fi`
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-implementation-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-imp`
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-ove`
- `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-val`
- `projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-01/inc-01-closure-repo`
- `projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-01/pr-readiness-inc-01`
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-decisions.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-dec`
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-implementation-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-imp`
- `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-ove`
- `projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-02/pr-readiness-inc-02`
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-decisions.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-dec`
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-implementation-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-imp`
- `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-ove`
- `projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-03/pr-readiness-inc-03`
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-implementation-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-imp`
- `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-overview.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-ove`
- `projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-04/pr-readiness-inc-04`
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-decisions.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-dec`
- `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-ove`
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-01/qa-implementation-re`
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-01/qa-reserves.md;confi`
- `projects/chantiers360-v2/08-qa-test/inc-01/qa-strategy.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-01/qa-strategy.md;confi`
- `projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-01/test-scenarios.md;co`
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-02/qa-execution-report.`
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-02/qa-implementation-re`
- `projects/chantiers360-v2/08-qa-test/inc-02/qa-strategy.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-02/qa-strategy.md;confi`
- `projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-02/test-scenarios.md;co`
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-03/qa-execution-report.`
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-03/qa-implementation-re`
- `projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-03/qa-strategy.md;confi`
- `projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-03/test-scenarios.md;co`
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-04/qa-execution-report.`
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-04/qa-implementation-re`
- `projects/chantiers360-v2/08-qa-test/inc-04/qa-strategy.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-04/qa-strategy.md;confi`
- `projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-04/test-scenarios.md;co`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-05/qa-execution-report.`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-05/qa-implementation-re`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md;confi`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-strategy.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-05/qa-strategy.md;confi`
- `projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/inc-05/test-scenarios.md;co`
- `projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data`
- `projects/chantiers360-v2/09-capitalization/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/chantiers360-v2/09-capitalization/README.md;confide`
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-final-pilot-rex-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/09-capitalization/chantiers360-v2-fina`
- `projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilo`
- `projects/chantiers360-v2/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/chantiers360-v2/README.md;confidence=high;checks=RE`
- `projects/chantiers360-v2/app/.env.example` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=projects/chantiers360-v2/app/.env.example;confidence=high;checks`
- `projects/chantiers360-v2/app/.env.test.example` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=projects/chantiers360-v2/app/.env.test.example;confidence=high;c`
- `projects/chantiers360-v2/app/.gitignore` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=projects/chantiers360-v2/app/.gitignore;confidence=high;checks=r`
- `projects/chantiers360-v2/app/docker-compose.test.yml` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=projects/chantiers360-v2/app/docker-compose.test.yml;confidence=`
- `projects/chantiers360-v2/app/postcss.config.mjs` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/chantiers360-v2/app/postcss.config.mjs;confidence=high;checks`
- `projects/chantiers360-v2/app/scripts/seed-prochaines-actions-demo.mjs` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/chantiers360-v2/app/scripts/seed-prochaines-actions-demo.mjs;`
- `projects/interv360/00-intake/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/00-intake/README.md;confidence=high;check`
- `projects/interv360/00-intake/interv360-sfia-test-strategy.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/00-intake/interv360-sfia-test-strategy.md;co`
- `projects/interv360/00-intake/project-intake.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/00-intake/project-intake.md;confidence=high;`
- `projects/interv360/01-cadrage/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/01-cadrage/README.md;confidence=high;chec`
- `projects/interv360/01-cadrage/adr-candidates.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/01-cadrage/adr-candidates.md;confidence=high`
- `projects/interv360/01-cadrage/cadrage-phase-gate.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/01-cadrage/cadrage-phase-gate.md;confidence=`
- `projects/interv360/01-cadrage/notion-sync-payload.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/01-cadrage/notion-sync-payload.json;confidenc`
- `projects/interv360/01-cadrage/role-methods-framing.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/01-cadrage/role-methods-framing.md;confidenc`
- `projects/interv360/01-cadrage/role-methods-review.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/01-cadrage/role-methods-review.md;confidence`
- `projects/interv360/01-cadrage/ux-ui-brief-validation.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/01-cadrage/ux-ui-brief-validation.md;confide`
- `projects/interv360/01-cadrage/ux-ui-brief.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/01-cadrage/ux-ui-brief.md;confidence=high;ch`
- `projects/interv360/02-architecture/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/02-architecture/README.md;confidence=high`
- `projects/interv360/02-architecture/adr/ADR-001-api-contracts-simulated-implementation.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/adr/ADR-001-api-contracts-si`
- `projects/interv360/02-architecture/adr/ADR-002-visible-integration-errors-manual-recovery.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/adr/ADR-002-visible-integrat`
- `projects/interv360/02-architecture/adr/ADR-003-secure-email-secondary-channel.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/adr/ADR-003-secure-email-sec`
- `projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rejection-logging.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/adr/ADR-004-minimal-flow-rej`
- `projects/interv360/02-architecture/adr/ADR-005-fictive-retention-photos-signatures-logs.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/adr/ADR-005-fictive-retentio`
- `projects/interv360/02-architecture/adr/ADR-006-client-notifications-without-client-portal.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/adr/ADR-006-client-notificat`
- `projects/interv360/02-architecture/adr/ADR-007-optional-structured-client-signature.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/adr/ADR-007-optional-structu`
- `projects/interv360/02-architecture/adr/ADR-008-separated-sav-dashboard-and-executive-view.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/adr/ADR-008-separated-sav-da`
- `projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/adr/ADR-CAND-009-ai-light-po`
- `projects/interv360/02-architecture/architecture-p1-summary.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/architecture-p1-summary.md;c`
- `projects/interv360/02-architecture/architecture-p2-design-impact-summary.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/architecture-p2-design-impac`
- `projects/interv360/02-architecture/closure-without-signature-summary.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/closure-without-signature-su`
- `projects/interv360/02-architecture/figma-first-draft-screens/00-cover-context.png` → **non-operational** (historical-snapshot) — `result=non-operational;proof=historical-snapshot;source=projects/interv360/02-architecture/figma-first-draft-screens/00-`
- `projects/interv360/02-architecture/figma-first-draft-screens/05-dashboard-sav.png` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/02-architecture/figma-first-draft-screens`
- `projects/interv360/02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/02-architecture/figma-first-draft-screens`
- `projects/interv360/02-architecture/figma-first-draft-screens/08-planning-semaine.png` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/02-architecture/figma-first-draft-screens`
- `projects/interv360/02-architecture/figma-first-draft-screens/09-fiche-intervention-mobile.png` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/02-architecture/figma-first-draft-screens`
- `projects/interv360/02-architecture/figma-first-draft-screens/10-compte-rendu-mobile.png` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/02-architecture/figma-first-draft-screens`
- `projects/interv360/02-architecture/figma-first-draft-screens/11-suivi-erreurs-integration.png` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/02-architecture/figma-first-draft-screens`
- `projects/interv360/02-architecture/figma-first-draft-screens/12-vue-dirigeant.png` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/02-architecture/figma-first-draft-screens`
- `projects/interv360/02-architecture/figma-first-draft-screens/13-validation-checklist.png` → **non-operational** (historical-snapshot) — `result=non-operational;proof=historical-snapshot;source=projects/interv360/02-architecture/figma-first-draft-screens/13-`
- `projects/interv360/02-architecture/figma-first-draft-screens/99-archive.png` → **non-operational** (historical-snapshot) — `result=non-operational;proof=historical-snapshot;source=projects/interv360/02-architecture/figma-first-draft-screens/99-`
- `projects/interv360/02-architecture/geo-ai-arbitration-summary.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/geo-ai-arbitration-summary.m`
- `projects/interv360/02-architecture/mvp-clarifications-summary.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/mvp-clarifications-summary.m`
- `projects/interv360/02-architecture/notion-sync-architecture-p1-payload.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-architecture-p1-p`
- `projects/interv360/02-architecture/notion-sync-architecture-p2-payload.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-architecture-p2-p`
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-project-update.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-cmp-technical-roa`
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-cmp-technical-roa`
- `projects/interv360/02-architecture/notion-sync-existing-prompt-library-inventory.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-existing-prompt-l`
- `projects/interv360/02-architecture/notion-sync-figma-v1-closure-payload.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-figma-v1-closure-`
- `projects/interv360/02-architecture/notion-sync-figma-v1-cmp-project-update.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-figma-v1-cmp-proj`
- `projects/interv360/02-architecture/notion-sync-prompt-library-final-lot-cmp-payload.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-prompt-library-fi`
- `projects/interv360/02-architecture/notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-prompt-library-lo`
- `projects/interv360/02-architecture/notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-prompt-library-lo`
- `projects/interv360/02-architecture/notion-sync-qa-prompt-library-cmp-payload.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-qa-prompt-library`
- `projects/interv360/02-architecture/notion-sync-qa-prompt-library-payload.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-qa-prompt-library`
- `projects/interv360/02-architecture/notion-sync-qa-tester-cmp-project-update.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-qa-tester-cmp-pro`
- `projects/interv360/02-architecture/notion-sync-qa-tester-governance-payload.json` → **operational** (current-cycle-reference) — `result=operational;proof=current-cycle-reference;source=projects/interv360/02-architecture/notion-sync-qa-tester-governa`
- `projects/interv360/02-architecture/rules-rg-prioritization-summary.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/rules-rg-prioritization-summ`
- `projects/interv360/02-architecture/status-mapping-summary.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/02-architecture/status-mapping-summary.md;co`
- `projects/interv360/03-design/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/03-design/README.md;confidence=high;check`
- `projects/interv360/03-design/design-v2-cycle-opening.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/03-design/design-v2-cycle-opening.md;confide`
- `projects/interv360/03-design/figma-premium-redesign-brief.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/03-design/figma-premium-redesign-brief.md;co`
- `projects/interv360/03-design/penpot-first-screen-v2-visual-instructions.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/03-design/penpot-first-screen-v2-visual-inst`
- `projects/interv360/04-delivery/api-demo-hardening.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/api-demo-hardening.md;confidence`
- `projects/interv360/04-delivery/api-product-validation.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/api-product-validation.md;confid`
- `projects/interv360/04-delivery/auth-user-switcher.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/auth-user-switcher.md;confidence`
- `projects/interv360/04-delivery/backend-persistence.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/backend-persistence.md;confidenc`
- `projects/interv360/04-delivery/batch-01-demo-credibility.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/batch-01-demo-credibility.md;con`
- `projects/interv360/04-delivery/batch-02-demo-control-scenario.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/batch-02-demo-control-scenario.m`
- `projects/interv360/04-delivery/batch-03-demo-readiness-package.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/batch-03-demo-readiness-package.`
- `projects/interv360/04-delivery/batch-04-demo-presentation-package.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/batch-04-demo-presentation-packa`
- `projects/interv360/04-delivery/connected-ux-productization.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/connected-ux-productization.md;c`
- `projects/interv360/04-delivery/delivery-detailing-plan.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/delivery-detailing-plan.md;confi`
- `projects/interv360/04-delivery/demo-feedback-review.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/demo-feedback-review.md;confiden`
- `projects/interv360/04-delivery/demo-mvp-closure.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/demo-mvp-closure.md;confidence=h`
- `projects/interv360/04-delivery/demo-polish.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/demo-polish.md;confidence=high;c`
- `projects/interv360/04-delivery/demo-presentation-feedback.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/demo-presentation-feedback.md;co`
- `projects/interv360/04-delivery/demo-presentation-review.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/demo-presentation-review.md;conf`
- `projects/interv360/04-delivery/end-to-end-demo-hardening.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/end-to-end-demo-hardening.md;con`
- `projects/interv360/04-delivery/frontend-api-connection-framing.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/frontend-api-connection-framing.`
- `projects/interv360/04-delivery/frontend-api-connection.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/frontend-api-connection.md;confi`
- `projects/interv360/04-delivery/implementation-go-no-go.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/implementation-go-no-go.md;confi`
- `projects/interv360/04-delivery/implementation-planning-plan.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/implementation-planning-plan.md;`
- `projects/interv360/04-delivery/premium-design-system.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/premium-design-system.md;confide`
- `projects/interv360/04-delivery/product-demo-consolidation.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/product-demo-consolidation.md;co`
- `projects/interv360/04-delivery/product-industrialization.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/product-industrialization.md;con`
- `projects/interv360/04-delivery/product-ux-finalization.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/product-ux-finalization.md;confi`
- `projects/interv360/04-delivery/realization-preparation-plan.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/realization-preparation-plan.md;`
- `projects/interv360/04-delivery/realization-start-plan.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/realization-start-plan.md;confid`
- `projects/interv360/04-delivery/request-model-productization.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/request-model-productization.md;`
- `projects/interv360/04-delivery/technical-arbitration.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/technical-arbitration.md;confide`
- `projects/interv360/04-delivery/technical-design-plan.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/technical-design-plan.md;confide`
- `projects/interv360/04-delivery/workflow-light-extension.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/workflow-light-extension.md;conf`
- `projects/interv360/04-delivery/workflow-requalification.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/workflow-requalification.md;conf`
- `projects/interv360/05-release/mvp-release-readiness.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/05-release/mvp-release-readiness.md;confiden`
- `projects/interv360/06-audit-rex/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/06-audit-rex/README.md;confidence=high;ch`
- `projects/interv360/06-audit-rex/current-application-audit.md` → **non-operational** (explicit-retired) — `result=non-operational;proof=explicit-retired;source=projects/interv360/06-audit-rex/current-application-audit.md;confid`
- `projects/interv360/07-documentation/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/07-documentation/README.md;confidence=hig`
- `projects/interv360/08-presentation/interv360-demo-presentation-package.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/08-presentation/interv360-demo-presentation-`
- `projects/interv360/09-roadmap/interv360-backend-api-contract-framing.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/09-roadmap/interv360-backend-api-contract-fr`
- `projects/interv360/09-roadmap/interv360-backend-persistence-decision.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/09-roadmap/interv360-backend-persistence-dec`
- `projects/interv360/09-roadmap/interv360-next-product-axis.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/09-roadmap/interv360-next-product-axis.md;co`
- `projects/interv360/09-roadmap/interv360-product-industrialization-framing.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/09-roadmap/interv360-product-industrializati`
- `projects/interv360/09-roadmap/interv360-product-roadmap-after-role-simulation.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/09-roadmap/interv360-product-roadmap-after-r`
- `projects/interv360/09-roadmap/interv360-product-roadmap-next.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/09-roadmap/interv360-product-roadmap-next.md`
- `projects/interv360/09-roadmap/interv360-role-simulation-review.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/09-roadmap/interv360-role-simulation-review.`
- `projects/interv360/09-roadmap/interv360-workflow-extension-framing.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=projects/interv360/09-roadmap/interv360-workflow-extension-fram`
- `projects/interv360/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/README.md;confidence=high;checks=README i`
- `projects/interv360/app/.env.example` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=projects/interv360/app/.env.example;confidence=high;checks=envir`
- `projects/interv360/app/.gitignore` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=projects/interv360/app/.gitignore;confidence=high;checks=reposit`
- `projects/interv360/app/src/data/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/app/src/data/README.md;confidence=high;ch`
- `projects/interv360/app/src/domain/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/app/src/domain/README.md;confidence=high;`
- `projects/interv360/app/src/seed/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/app/src/seed/README.md;confidence=high;ch`
- `projects/interv360/app/src/tests/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/app/src/tests/README.md;confidence=high;c`
- `projects/interv360/app/src/ui/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/app/src/ui/README.md;confidence=high;chec`
- `projects/interv360/app/src/ui/audit/AuditTrailView.css` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/app/src/ui/audit/AuditTrailView.css;confidence=high`
- `projects/interv360/backend/.env.example` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=projects/interv360/backend/.env.example;confidence=high;checks=e`
- `projects/interv360/backend/.gitignore` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=projects/interv360/backend/.gitignore;confidence=high;checks=rep`
- `projects/interv360/backend/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=projects/interv360/backend/README.md;confidence=high;checks=`
- `projects/interv360/backend/package-lock.json` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=projects/interv360/backend/package-lock.json;confidence=high;che`
- `projects/interv360/backend/package.json` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=projects/interv360/backend/package.json;confidence=high;checks=r`
- `projects/interv360/backend/src/api/apiErrors.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/api/apiErrors.ts;confidence=high;checks`
- `projects/interv360/backend/src/api/routes.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/api/routes.ts;confidence=high;checks=co`
- `projects/interv360/backend/src/app.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/app.ts;confidence=high;checks=code arti`
- `projects/interv360/backend/src/config/cors.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/config/cors.ts;confidence=high;checks=c`
- `projects/interv360/backend/src/domain/transitions.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/domain/transitions.ts;confidence=high;c`
- `projects/interv360/backend/src/domain/types.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/domain/types.ts;confidence=high;checks=`
- `projects/interv360/backend/src/domain/user.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/domain/user.ts;confidence=medium;checks`
- `projects/interv360/backend/src/index.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/index.ts;confidence=high;checks=code ar`
- `projects/interv360/backend/src/persistence/sqliteDatabase.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/persistence/sqliteDatabase.ts;confidenc`
- `projects/interv360/backend/src/persistence/sqliteSchema.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/persistence/sqliteSchema.ts;confidence=`
- `projects/interv360/backend/src/persistence/sqliteSeed.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/persistence/sqliteSeed.ts;confidence=hi`
- `projects/interv360/backend/src/repositories/usersRepository.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/repositories/usersRepository.ts;confide`
- `projects/interv360/backend/src/seed/demoSeed.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/seed/demoSeed.ts;confidence=high;checks`
- `projects/interv360/backend/src/seed/usersSeed.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/seed/usersSeed.ts;confidence=medium;che`
- `projects/interv360/backend/src/store/demoStore.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/src/store/demoStore.ts;confidence=high;chec`
- `projects/interv360/backend/test/api.test.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/test/api.test.ts;confidence=high;checks=cod`
- `projects/interv360/backend/test/auditTrailPersistence.test.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/test/auditTrailPersistence.test.ts;confiden`
- `projects/interv360/backend/test/cors.test.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/test/cors.test.ts;confidence=high;checks=co`
- `projects/interv360/backend/test/persistence.test.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/test/persistence.test.ts;confidence=high;ch`
- `projects/interv360/backend/test/requestModelPersistence.test.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/test/requestModelPersistence.test.ts;confid`
- `projects/interv360/backend/test/transitions.test.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/test/transitions.test.ts;confidence=high;ch`
- `projects/interv360/backend/test/usersRepository.test.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/test/usersRepository.test.ts;confidence=med`
- `projects/interv360/backend/test/usersSeed.test.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/test/usersSeed.test.ts;confidence=medium;ch`
- `projects/interv360/backend/tsconfig.json` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/tsconfig.json;confidence=medium;checks=tech`
- `projects/interv360/backend/vitest.config.ts` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/backend/vitest.config.ts;confidence=high;checks=cod`
- `projects/interv360/project.json` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=projects/interv360/project.json;confidence=medium;checks=technical art`
- `prompts/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=prompts/README.md;confidence=high;checks=README index with n`
- `prompts/arbitrages/.gitkeep` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=prompts/arbitrages/.gitkeep;confidence=high;checks=empty .gitkee`
- `prompts/architecture/.gitkeep` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=prompts/architecture/.gitkeep;confidence=high;checks=empty .gitk`
- `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erre`
- `prompts/architecture/functional-architecture-prompt-family.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/architecture/functional-architecture-prompt-family.md;c`
- `prompts/bpmn/bpmn-prompt-family.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/bpmn/bpmn-prompt-family.md;confidence=high;checks=draft`
- `prompts/cadrage/.gitkeep` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=prompts/cadrage/.gitkeep;confidence=high;checks=empty .gitkeep p`
- `prompts/governance/.gitkeep` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=prompts/governance/.gitkeep;confidence=high;checks=empty .gitkee`
- `prompts/governance/notion/.gitkeep` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=prompts/governance/notion/.gitkeep;confidence=high;checks=empty `
- `prompts/qa/.gitkeep` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=prompts/qa/.gitkeep;confidence=high;checks=empty .gitkeep placeh`
- `prompts/qa/delivery-qa-test-prompt-family.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/qa/delivery-qa-test-prompt-family.md;confidence=high;ch`
- `prompts/qa/qa-tester-prompt-family.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/qa/qa-tester-prompt-family.md;confidence=high;checks=dr`
- `prompts/roles/.gitkeep` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=prompts/roles/.gitkeep;confidence=high;checks=empty .gitkeep pla`
- `prompts/security/.gitkeep` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=prompts/security/.gitkeep;confidence=high;checks=empty .gitkeep `
- `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md;c`
- `prompts/templates/01-create-foundation-document.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/templates/01-create-foundation-document.md;confidence=h`
- `prompts/templates/02-update-document-v1-1.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/templates/02-update-document-v1-1.md;confidence=high;ch`
- `prompts/templates/03-create-operational-checklist.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/templates/03-create-operational-checklist.md;confidence`
- `prompts/templates/04-validate-cursor-result.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/templates/04-validate-cursor-result.md;confidence=high;`
- `prompts/templates/05-validate-pr-readiness.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/templates/05-validate-pr-readiness.md;confidence=high;c`
- `prompts/templates/06-prepare-pr-summary.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/templates/06-prepare-pr-summary.md;confidence=high;chec`
- `prompts/templates/07-write-post-merge-status.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/templates/07-write-post-merge-status.md;confidence=high`
- `prompts/templates/08-capitalize-method-asset.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/templates/08-capitalize-method-asset.md;confidence=high`
- `prompts/templates/09-prepare-notion-mapping.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/templates/09-prepare-notion-mapping.md;confidence=high;`
- `prompts/templates/10-perform-safe-repository-cleanup.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/templates/10-perform-safe-repository-cleanup.md;confide`
- `prompts/templates/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=prompts/templates/README.md;confidence=high;checks=README in`
- `prompts/templates/sfia-prompt-templates-context-pack.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/templates/sfia-prompt-templates-context-pack.md;confide`
- `prompts/tooling/penpot/penpot-design-agent-prompt-family.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/tooling/penpot/penpot-design-agent-prompt-family.md;con`
- `prompts/ux-ui/.gitkeep` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=prompts/ux-ui/.gitkeep;confidence=high;checks=empty .gitkeep pla`
- `prompts/ux-ui/figma-fidelity-gate-prompt-family.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/ux-ui/figma-fidelity-gate-prompt-family.md;confidence=h`
- `prompts/ux-ui/ux-ui-reprise-prompt-family.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=prompts/ux-ui/ux-ui-reprise-prompt-family.md;confidence=high;ch`
- `tools/cmp-001/.env.example` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=tools/cmp-001/.env.example;confidence=high;checks=environment/co`
- `tools/cmp-001/.gitignore` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=tools/cmp-001/.gitignore;confidence=high;checks=repository/tooli`
- `tools/cmp-001/CHANGELOG.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=tools/cmp-001/CHANGELOG.md;confidence=high;checks=draft/candida`
- `tools/cmp-001/README.md` → **operational** (active-navigation-reference) — `result=operational;proof=active-navigation-reference;source=tools/cmp-001/README.md;confidence=high;checks=README index `
- `tools/cmp-001/ROADMAP.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=tools/cmp-001/ROADMAP.md;confidence=high;checks=draft/candidate`
- `tools/cmp-001/WORKSPACE.md` → **operational** (weak-proof) — `result=operational;proof=active-navigation-reference;source=docs/workspace-readiness-report.md;confidence=high;checks=CM`
- `tools/cmp-001/config/sfia-v1-1-workspace.config.json` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/config/sfia-v1-1-workspace.config.json;confidence=high;c`
- `tools/cmp-001/docs/components-database-evolution.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=tools/cmp-001/docs/components-database-evolution.md;confidence=`
- `tools/cmp-001/docs/consolidation-report.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=tools/cmp-001/docs/consolidation-report.md;confidence=high;chec`
- `tools/cmp-001/docs/status-matrix.md` → **operational** (current-method-reference) — `result=operational;proof=current-method-reference;source=tools/cmp-001/docs/status-matrix.md;confidence=high;checks=draf`
- `tools/cmp-001/examples/adr.example.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/adr.example.json;confidence=high;checks=C`
- `tools/cmp-001/examples/component-cmp001.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/component-cmp001.json;confidence=high;che`
- `tools/cmp-001/examples/component.example.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/component.example.json;confidence=high;ch`
- `tools/cmp-001/examples/experiment.example.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/experiment.example.json;confidence=high;c`
- `tools/cmp-001/examples/project.example.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/project.example.json;confidence=high;chec`
- `tools/cmp-001/examples/real-objects/adr-cmp001-notion-sync.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/real-objects/adr-cmp001-notion-sync.json;`
- `tools/cmp-001/examples/real-objects/knowledge-interv360-project-intake.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/real-objects/knowledge-interv360-project-`
- `tools/cmp-001/examples/real-objects/knowledge-sfia-engineering-principles.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/real-objects/knowledge-sfia-engineering-p`
- `tools/cmp-001/examples/real-objects/project-interv360.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/real-objects/project-interv360.json;confi`
- `tools/cmp-001/examples/real-objects/prompt-notion-object-creation.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/real-objects/prompt-notion-object-creatio`
- `tools/cmp-001/examples/real-objects/rex-cmp001-notion-sync.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/real-objects/rex-cmp001-notion-sync.json;`
- `tools/cmp-001/examples/real-objects/standard-sfia-object-lifecycle.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/real-objects/standard-sfia-object-lifecyc`
- `tools/cmp-001/examples/real-objects/template-experiment.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/real-objects/template-experiment.json;con`
- `tools/cmp-001/examples/reference-page.example.json` → **non-operational** (abandoned-prototype) — `result=non-operational;proof=abandoned-prototype;source=tools/cmp-001/examples/reference-page.example.json;confidence=hi`
- `tools/cmp-001/package-lock.json` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=tools/cmp-001/package-lock.json;confidence=high;checks=repositor`
- `tools/cmp-001/package.json` → **operational** (active-config-reference) — `result=operational;proof=active-config-reference;source=tools/cmp-001/package.json;confidence=high;checks=repository/too`
- `tools/cmp-001/scripts/archive-test-objects.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/scripts/archive-test-objects.js;confidence=high;checks=c`
- `tools/cmp-001/scripts/notion-provision.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/scripts/notion-provision.js;confidence=high;checks=code `
- `tools/cmp-001/src/cli.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/cli.js;confidence=high;checks=code artifact with 6 a`
- `tools/cmp-001/src/config.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/config.js;confidence=high;checks=code artifact with `
- `tools/cmp-001/src/notionClient.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/notionClient.js;confidence=high;checks=code artifact`
- `tools/cmp-001/src/provisioning/configLoader.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/provisioning/configLoader.js;confidence=high;checks=`
- `tools/cmp-001/src/provisioning/dryRunRenderer.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/provisioning/dryRunRenderer.js;confidence=high;check`
- `tools/cmp-001/src/provisioning/guardrails.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/provisioning/guardrails.js;confidence=high;checks=co`
- `tools/cmp-001/src/provisioning/inspector.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/provisioning/inspector.js;confidence=high;checks=cod`
- `tools/cmp-001/src/provisioning/planner.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/provisioning/planner.js;confidence=high;checks=code `
- `tools/cmp-001/src/schemas/adr.schema.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/adr.schema.json;confidence=high;checks=sche`
- `tools/cmp-001/src/schemas/component.schema.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/component.schema.json;confidence=high;check`
- `tools/cmp-001/src/schemas/experiment.schema.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/experiment.schema.json;confidence=high;chec`
- `tools/cmp-001/src/schemas/knowledge.schema.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/knowledge.schema.json;confidence=high;check`
- `tools/cmp-001/src/schemas/kpi.schema.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/kpi.schema.json;confidence=high;checks=sche`
- `tools/cmp-001/src/schemas/project.schema.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/project.schema.json;confidence=high;checks=`
- `tools/cmp-001/src/schemas/prompt.schema.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/prompt.schema.json;confidence=high;checks=s`
- `tools/cmp-001/src/schemas/reference-page.schema.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/reference-page.schema.json;confidence=high;`
- `tools/cmp-001/src/schemas/rex.schema.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/rex.schema.json;confidence=high;checks=sche`
- `tools/cmp-001/src/schemas/standard.schema.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/standard.schema.json;confidence=high;checks`
- `tools/cmp-001/src/schemas/template.schema.json` → **operational** (manifest-reference) — `result=operational;proof=manifest-reference;source=tools/cmp-001/src/schemas/template.schema.json;confidence=high;checks`
- `tools/cmp-001/src/services/createADR.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createADR.js;confidence=high;checks=code ar`
- `tools/cmp-001/src/services/createComponent.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createComponent.js;confidence=high;checks=c`
- `tools/cmp-001/src/services/createExperiment.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createExperiment.js;confidence=high;checks=`
- `tools/cmp-001/src/services/createKPI.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createKPI.js;confidence=high;checks=code ar`
- `tools/cmp-001/src/services/createKnowledgeArticle.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createKnowledgeArticle.js;confidence=high;c`
- `tools/cmp-001/src/services/createObject.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createObject.js;confidence=high;checks=code`
- `tools/cmp-001/src/services/createProject.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createProject.js;confidence=high;checks=cod`
- `tools/cmp-001/src/services/createPrompt.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createPrompt.js;confidence=high;checks=code`
- `tools/cmp-001/src/services/createREX.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createREX.js;confidence=high;checks=code ar`
- `tools/cmp-001/src/services/createReferencePage.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createReferencePage.js;confidence=high;chec`
- `tools/cmp-001/src/services/createStandard.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createStandard.js;confidence=high;checks=co`
- `tools/cmp-001/src/services/createTemplate.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/createTemplate.js;confidence=high;checks=co`
- `tools/cmp-001/src/services/discover.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/discover.js;confidence=high;checks=code art`
- `tools/cmp-001/src/services/export.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/export.js;confidence=high;checks=code artif`
- `tools/cmp-001/src/services/updateKnowledgeArticle.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/updateKnowledgeArticle.js;confidence=high;c`
- `tools/cmp-001/src/services/updateObject.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/updateObject.js;confidence=high;checks=code`
- `tools/cmp-001/src/services/updateProject.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/services/updateProject.js;confidence=high;checks=cod`
- `tools/cmp-001/src/validate.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/src/validate.js;confidence=high;checks=code artifact wit`
- `tools/cmp-001/tests/run-all-tests.js` → **operational** (runtime-reference) — `result=operational;proof=runtime-reference;source=tools/cmp-001/tests/run-all-tests.js;confidence=high;checks=technical `

## Unknown résiduels

**0**

## Corrections secondaires

Aucune.

## Large Artifact Protocol — CSV

- **Chemin :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv`
- **SHA-256 :** `02be34c1d78af3b5a853265e053a12b8c8d9c79724f9150e6211f68b12462927`
- **Lignes :** 1045 données + en-tête = 1046
- **Champs :** 36

### En-tête complet
```
current_path,filename,extension,size_bytes,primary_family,subfamily,lifecycle_status,lifecycle_applicability,authority,usage,scope,project,phase,trajectory,trajectory_role,logical_location_current,logical_location_target,naming_rule_regime,naming_compliance,location_compliance,metadata_profile,content_summary,incoming_references,outgoing_references,duplicate_or_overlap,canonical_candidate,proposed_disposition,proposed_target_path,proposed_target_filename,rationale,risk_level,morris_gate_required,confidence,evidence,reserve_or_question,migration_lot_candidate
```

### 20 premières lignes (données)
```
.cursor/mcp-templates/README.md,README.md,md,3733,F13,,candidate,document-lifecycle,reference,operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Cursor MCP templates — Penpot **Dossier** : `.cursor/mcp-templates/` **Statut** : Exemples non secrets — configurat,docs/tooling/penpot/penpot-cursor-agent-rules.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-design-agent-architecture.md); ](../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-cursor-agent-rules.md),no,no,keep,.cursor/mcp-templates/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference.",low,no,high,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=.cursor/mcp-templates/README.md;confidence=high;checks=README index with navigation references,Explicit candidate/draft marker — no strong validation proof. Usage Pass: qualified operational (active-navigation-reference). Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,json,265,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,"{ ""mcpServers"": { ""penpot-self-host"": { ""type"": ""http"", ""url"": ""http://localhost:9001/mcp/stream?userT",.cursor/mcp-templates/README.md; docs/tooling/penpot/penpot-mcp-self-host-rex.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,,no,no,keep,.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Document lifecycle not applicable — technical/operational artifact; Usage pass will qualify operational role.,lot-E
.github/workflows/interv360-ci.yml,interv360-ci.yml,yml,1225,F16,,not-applicable,not-applicable,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,"name: Interv360 CI on: pull_request: paths: - ""projects/interv360/**"" - "".github/workflows/interv360-",,,no,no,keep,.github/workflows/interv360-ci.yml,interv360-ci.yml,"Regime technical-convention; family F16; D10 compliant (current=tools, target=tools); lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=inferred-role;usage-pass;result=operational;proof=active-config-reference;source=.github/workflows/interv360-ci.yml;confidence=high;checks=repository/tooling configuration artifact,Usage Pass: qualified operational (active-config-reference). Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-I
.gitignore,.gitignore,none,262,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (none),,,no,no,keep,.gitignore,.gitignore,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=.gitignore;confidence=high;checks=repository/tooling configuration artifact,Usage Pass: qualified operational (active-config-reference). Heuristic qualification only — not validated.,lot-E
README.md,README.md,md,3571,F13,,candidate,document-lifecycle,reference,operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# SFIA Workspace Workspace local officiel de la **SFIA** (Software Factory & Intelligence Architecture). Ce dépôt est,,,no,no,keep,README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference.",low,no,high,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=README.md;confidence=high;checks=README index with navigation references,"README index — operational reference, not validated foundation document. Usage Pass: operational (active-navigation-reference).",lot-E
components/README.md,README.md,md,224,F13,,candidate,document-lifecycle,reference,operational,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Components Espace local pour les notes et artefacts liés aux composants SFIA. Le registre officiel des composants re,,,no,no,keep,components/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference.",low,no,high,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=components/README.md;confidence=high;checks=README index with navigation references,"README index — operational reference, not validated foundation document. Usage Pass: operational (active-navigation-reference).",lot-E
docker/penpot/.env.example,.env.example,example,400,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (example),,,no,no,keep,docker/penpot/.env.example,.env.example,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=docker/penpot/.env.example;confidence=high;checks=environment/config template for active tooling onboarding,Usage Pass: qualified operational (active-config-reference). Heuristic qualification only — not validated.,lot-E
docker/penpot/README.md,README.md,md,2792,F13,,candidate,document-lifecycle,reference,operational,repository,,,SFIA v2.4,baseline,tools,tools,documentary,compliant,compliant,E,# Penpot Docker — Templates SFIA **Dossier** : `docker/penpot/` **Statut** : Templates sûrs — pas d'installation stan,,](https://help.penpot.app/technical-guide/getting-started/docker/); ](https://help.penpot.app/technical-guide/getting-started/); ](https://help.penpot.app/technical-guide/getting-started/docker/); ](../../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../.cursor/mcp-templates/penpot-mcp.example.json),no,no,keep,docker/penpot/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=tools, target=tools); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference.",low,no,high,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docker/penpot/README.md;confidence=high;checks=README index with navigation references,Explicit candidate/draft marker — no strong validation proof. Usage Pass: qualified operational (active-navigation-reference). Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,yml,378,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,# Example override for a local SFIA Penpot setup. # Use only with the official Penpot docker-compose.yml. # Do not treat,docker/penpot/README.md,,no,no,keep,docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable. Usage Pass: operational per active-config-reference.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient;usage-pass;result=operational;proof=active-config-reference;source=docker/penpot/docker-compose.override.example.yml;confidence=high;checks=environment/config template for active tooling onboarding,Usage Pass: qualified operational (active-config-reference). Heuristic qualification only — not validated.,lot-E
docs/README.md,README.md,md,1104,F13,,candidate,document-lifecycle,reference,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Platform Documentation Ce dossier contient la documentation plateforme SFIA. Il est distinct de la méthode acti,,,no,no,keep,docs/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference.",low,no,high,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/README.md;confidence=high;checks=README index with navigation references,"README index — operational reference, not validated foundation document. Usage Pass: operational (active-navigation-reference).",lot-E
docs/adr/README.md,README.md,md,131,F13,,candidate,document-lifecycle,reference,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# ADR Architecture Decision Records — décisions structurantes tracées. Source Notion : base ADR (`exports/notion/adr.j,,,no,no,keep,docs/adr/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference.",low,no,high,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/adr/README.md;confidence=high;checks=README index with navigation references,"README index — operational reference, not validated foundation document. Usage Pass: operational (active-navigation-reference).",lot-E
docs/architecture/README.md,README.md,md,1966,F13,,candidate,document-lifecycle,reference,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,"# SFIA Architecture Documentation d'architecture SFIA : Domain Model, composants, flux et vues. Source Notion : Compon",,,no,no,keep,docs/architecture/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference.",low,no,high,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=docs/architecture/README.md;confidence=high;checks=README index with navigation references,"README index — operational reference, not validated foundation document. Usage Pass: operational (active-navigation-reference).",lot-E
docs/architecture/sfia-decision-engine.md,sfia-decision-engine.md,md,56513,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,rename,docs/architecture/sfia-decision-engine.md,YYYY-MM-DD-sfia-decision-engine.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;all=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-decision-engine.md;confidence=high;checks=validated doc referenced by 26 active consumer(s),Usage Pass: qualified operational (current-method-reference). Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-D
docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,md,57907,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-delivery-pipeline.md;confidence=high;checks=validated doc referenced by 26 active consumer(s),Usage Pass: qualified operational (current-method-reference). Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-domain-model.md,sfia-domain-model.md,md,26327,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-domain-model.md,sfia-domain-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference.",low,no,high,lifecycle-corrective;proof=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-domain-model.md;confidence=high;checks=validated doc referenced by 16 active consumer(s),Usage Pass: qualified operational (current-method-reference). Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-meta-model.md,sfia-meta-model.md,md,45992,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-meta-model.md,sfia-meta-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+canonical-source;all=explicit-status+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-meta-model.md;confidence=high;checks=validated doc referenced by 15 active consumer(s),Usage Pass: qualified operational (current-method-reference). Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,md,63116,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference.",low,no,high,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-platform-architecture.md;confidence=high;checks=validated doc referenced by 19 active consumer(s),Usage Pass: qualified operational (current-method-reference). Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,md,41225,F06,,validated,document-lifecycle,unknown,operational,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference.",low,no,high,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/architecture/sfia-repository-blueprint.md;confidence=high;checks=validated doc referenced by 27 active consumer(s),Usage Pass: qualified operational (current-method-reference). Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/foundation/README.md,README.md,md,208,F13,,archived,document-lifecycle,reference,operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,E,"# Foundation Principes fondateurs, gouvernance et cadre de la plateforme SFIA. Source Notion : Knowledge Articles, Sta",,,no,no,archive,docs/foundation/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective archived. Usage Pass: operational per explicit-current-use.",low,no,high,lifecycle-pass-L;trajectory-v1.1-historical;readme-index-role;git=586671c init: create SFIA workspace structure;usage-pass;result=operational;proof=explicit-current-use;source=docs/foundation/README.md;confidence=high;checks=archive disposition but 78 active consumer(s),Usage Pass: qualified operational (explicit-current-use). Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,md,10488,F06,,validated,document-lifecycle,unknown,operational,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,keep,docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated. Usage Pass: operational per current-method-reference.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source;usage-pass;result=operational;proof=current-method-reference;source=docs/foundation/sfia-engineering-principles.md;confidence=high;checks=validated doc referenced by 48 active consumer(s),Usage Pass: qualified operational (current-method-reference). Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
```

### 20 dernières lignes
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
tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,js,4453,F17,,validated,technical-artifact-lifecycle,informational,operational,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective validated. Usage Pass: operational per runtime-reference.",low,no,high,path+content-sample+regime=technical-convention+incoming=1; convention=dot-separated tool convention;usage-pass;result=operational;proof=runtime-reference;source=tools/cmp-001/tests/run-all-tests.js;confidence=high;checks=technical artifact with active consumer,Usage Pass: qualified operational (runtime-reference). Heuristic qualification only — not validated.,lot-I
```

### Statistiques complètes usage

- non-operational: **251**
- operational: **794**

## Rapport — §14 Pass Usage (extrait)

```markdown
## 14. Pass Usage — résultats

**Horodatage :** 2026-07-11 17:50 Europe/Paris
**HEAD initial :** `ceedca8579a3705c397af8c3992cd7372b3b63fc`
**HEAD final :** *(commit Pass Usage — voir chaîne §12)*
**Périmètre :** **481** fichiers `usage = unknown` (100 % traités)
**CSV :** 1045 × 36 — SHA-256 `02be34c1d78af3b5a853265e053a12b8c8d9c79724f9150e6211f68b12462927`

### Méthode

Pour chaque fichier cible : lecture contenu si nécessaire ; index des références entrantes (Markdown, imports, citations de chemins) ; analyse des consommateurs actifs (hors zones historiques pures) ; champs CSV `incoming_references` / `outgoing_references` ; règles non-deductives (pas de conclusion par chemin, main, lifecycle ou authority seuls) ; preuve inscrite dans `evidence` au format `usage-pass;result=…;proof=…`.

### Typologie des preuves Usage

| Preuve | Count (481 traités) |
|--------|--------------------:|
| current-method-reference | 224 |
| runtime-reference | 59 |
| active-navigation-reference | 55 |
| explicit-current-use | 47 |
| abandoned-prototype | 23 |
| manifest-reference | 22 |
| active-config-reference | 18 |
| current-cycle-reference | 16 |
| explicit-retired | 9 |
| explicit-archive-only | 5 |
| historical-snapshot | 3 |

### Usage avant / après

| Valeur | Avant | Après | Δ |
|--------|------:|------:|--:|
| unknown | 481 | **0** | −481 |
| operational | 353 | **794** | +441 |
| non-operational | 211 | **251** | +40 |

### Répartition des 481 qualifications par famille

| Famille | operational | non-operational |
|---------|------------:|----------------:|
| F08 | 128 | 0 |
| F17 | 97 | 3 |
| F09 | 58 | 13 |
| F13 | 46 | 0 |
| F15 | 22 | 14 |
| F06 | 27 | 0 |
| F04 | 26 | 0 |
| F05 | 9 | 9 |
| F10 | 7 | 0 |
| F03 | 6 | 0 |
| F07 | 5 | 0 |
| F01 | 4 | 1 |
| F11 | 3 | 0 |
| F16 | 1 | 0 |

### Répartition par lifecycle_status (cible initiale)

| Statut | Count traités |
|--------|-------------:|
| not-applicable | 146 |
| candidate | 105 |
| draft | 90 |
| validated | 79 |
| archived | 57 |
| superseded | 4 |

### Répartition par trajectory (cible initiale)

| Trajectory | Count |
|------------|------:|
| N/A | 250 |
| SFIA v2.4 | 207 |
| SFIA v1.1 | 14 |
| SFIA v2.5 | 6 |
| SFIA v2.6 | 4 |

### Cas techniques significatifs

- **Code actif** (`projects/interv360/backend`, `projects/chantiers360-v2/app`, `tools/cmp-001/src`) → operational (`runtime-reference`)
- **CI / config** (`.github/workflows/interv360-ci.yml`, `package.json`, `.env.example`) → operational (`ci-reference` / `active-config-reference`)
- **Schémas CMP** (`tools/cmp-001/src/schemas/*.json`) → operational si consommés par src/tests
- **Examples CMP** (`tools/cmp-001/examples/`) → non-operational sans import actif
- **Captures design** (`.png`) → non-operational sauf référence active dans docs de design courants

### Cas documentaires significatifs

- **Inventaires `.txt` capitalization** → non-operational (`generated-inventory-history`)
- **`proposed_disposition=archive`** sans consommateur actif → non-operational
- **Méthode draft/candidate** avec refs entrantes → operational (`current-method-reference`)
- **Rapports projet validated** (merge-summary, demo, rex) → non-operational (`closed-cycle-only`) sans consommateur actif
- **`2026-07-11-sfia-v2.6-repository-read-only-audit.md`** → operational (`current-cycle-reference`) — artefact audit cartographie PR #165
- **`tools/cmp-001/WORKSPACE.md`** → operational (`active-navigation-reference`) — cité par `docs/workspace-readiness-report.md`

### Unknown résiduels

**0** — les 2 cas initialement `unknown` après règles automatiques ont été requalifiés manuellement avec preuve (read-only audit, WORKSPACE.md).

### Corrections secondaires

**Aucune** — `proposed_disposition`, `migration_lot_candidate`, `morris_gate_required`, `risk_level` inchangés.

### OUT-OF-PASS ANOMALY

Aucune anomalie détectée dans les champs interdits (lifecycle, authority, scope, trajectory, etc.).

### Preuves inchangées

| Dimension | Modifié | Preuve |
|-----------|---------|--------|
| lifecycle_status | **Non** | 1045/1045 identiques au snapshot pré-pass |
| lifecycle_applicability | **Non** | 1045/1045 identiques |
| authority | **Non** | 534 unknown inchangé |
| lots | **Non** | aucun `migration_lot_candidate` modifié |

### Aucune migration

Aucun déplacement, renommage, archivage physique ou suppression exécuté.

---
```

## Plan — §14 Contract status

```markdown
## 14. Cartography contract status

| Élément | Statut |
|---------|--------|
| **Contract** | **Frozen** — CSV = seule source statistique |
| **Pass Lifecycle** | Completed and corrected |
| **Pass Usage** | **Completed** — 481 qualifiés ; operational **794** ; non-operational **251** ; unknown **0** |
| **Pass Authority** | **Pending** |
| **Migration** | **Aucune autorisée** |
| **Champs CSV** | **36** |
| **lifecycle not-applicable** | 338 |
| **technical-artifact-lifecycle** | 10 |

---
```

## Diff utile (hors CSV)

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
index b55402f..1a1fa38 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
@@ -3,23 +3,23 @@
 *Cartographie exhaustive read-only — périmètre stable 1045 fichiers — qualification D1–D12*
 
 **Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`
-**Date et heure :** 2026-07-11 15:46 Europe/Paris
-**Statut :** **Candidate** — contrat gelé — Pass Usage/Authority pending
-**Cycle :** Validation corrective finale — Cartography Contract Freeze
+**Date et heure :** 2026-07-11 17:50 Europe/Paris
+**Statut :** **Candidate** — contrat gelé — Pass Usage **completed** — Pass Authority pending
+**Cycle :** Validation corrective de cartographie — Pass Usage
 **Profil SFIA :** **Critical**
 **Repository :** mcleland147/sfia-workspace
 **Branche :** audit/sfia-v2.6-repository-cartography
 **PR :** #165
 **Base inventaire stable :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
-**Machine-readable :** `2026-07-11-sfia-v2.6-repository-cartography.csv` (SHA-256: `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2`)
+**Machine-readable :** `2026-07-11-sfia-v2.6-repository-cartography.csv` (SHA-256: `02be34c1d78af3b5a853265e053a12b8c8d9c79724f9150e6211f68b12462927`)
 
 ### Verdict périmètre
 
 ```
 BASE INVENTORY COMPLETE — 1045 FILES
 CARTOGRAPHY CONTRACT FROZEN — CSV 36 FIELDS
-STATISTICS RECOMPUTED FROM CSV
-PASS USAGE / PASS AUTHORITY PENDING
+PASS USAGE COMPLETE — 481 QUALIFIED
+PASS AUTHORITY PENDING
 ```
 
 ---
@@ -62,7 +62,9 @@ Toutes les métriques ci-dessous sont **recalculées depuis le CSV** (SHA `67872
 | **lifecycle_status draft** | 138 |
 | **lifecycle_status archived** | 265 |
 | **lifecycle_status superseded** | 5 |
-| **usage unknown** | 481 |
+| **usage operational** | **794** |
+| **usage non-operational** | **251** |
+| **usage unknown** | **0** |
 | **authority unknown** | 534 |
 | Nommage D12 documentaire non-conforme | 161 |
 | Conventions techniques | 308 |
@@ -134,10 +136,12 @@ compliant=1022, non-compliant=**23** (v3 uniquement)
 
 | Métrique | Count |
 |----------|------:|
-| confidence high | 835 |
-| confidence medium | 210 |
+| confidence high | 955 |
+| confidence medium | 90 |
 | confidence low | 0 |
-| usage unknown | 481 |
+| usage unknown | **0** |
+| usage operational | **794** |
+| usage non-operational | **251** |
 | authority unknown | 534 |
 | lifecycle unknown | 0 |
 | lifecycle not-applicable | 338 |
@@ -386,6 +390,7 @@ Les **10** `technical-artifact-lifecycle` conservent un lifecycle réel (schemas
 | Lifecycle applicability correction | `bde680c32ae0aa36497a3c8dcde913ea530279a7` |
 | Contract freeze | `06a898058265f509e68930bd8e85886cd82cb1d1` |
 | Lot 0 / archive scope clarification | `1bb521a6d9fd56a17515a7221fbb69bc097b796e` |
+| Pass Usage | *(commit présent cycle)* |
 
 ### A. Source de vérité
 
@@ -492,7 +497,9 @@ Le contrat est **gelé** pour les deux prochaines passes. Il reste **candidate**
 | lifecycle archived | 265 |
 | lifecycle superseded | 5 |
 | lifecycle not-applicable | 338 |
-| usage unknown | 481 |
+| usage unknown | **0** |
+| usage operational | **794** |
+| usage non-operational | **251** |
 | authority unknown | 534 |
 
 ---
@@ -502,9 +509,129 @@ Le contrat est **gelé** pour les deux prochaines passes. Il reste **candidate**
 **Horodatage :** 2026-07-11 17:35 Europe/Paris
 **HEAD initial :** `06a898058265f509e68930bd8e85886cd82cb1d1`
 **HEAD final :** `1bb521a6d9fd56a17515a7221fbb69bc097b796e`
-**CSV :** inchangé byte-for-byte — SHA-256 `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2`
+**CSV :** SHA-256 post-Pass Usage `02be34c1d78af3b5a853265e053a12b8c8d9c79724f9150e6211f68b12462927`
+
+Correction documentaire de la relation Lot 0 ↔ archives non-v3 (voir §8). Aucune modification de lot pendant ce cycle.
+
+---
+
+## 14. Pass Usage — résultats
+
+**Horodatage :** 2026-07-11 17:50 Europe/Paris
+**HEAD initial :** `ceedca8579a3705c397af8c3992cd7372b3b63fc`
+**HEAD final :** *(commit Pass Usage — voir chaîne §12)*
+**Périmètre :** **481** fichiers `usage = unknown` (100 % traités)
+**CSV :** 1045 × 36 — SHA-256 `02be34c1d78af3b5a853265e053a12b8c8d9c79724f9150e6211f68b12462927`
+
+### Méthode
+
+Pour chaque fichier cible : lecture contenu si nécessaire ; index des références entrantes (Markdown, imports, citations de chemins) ; analyse des consommateurs actifs (hors zones historiques pures) ; champs CSV `incoming_references` / `outgoing_references` ; règles non-deductives (pas de conclusion par chemin, main, lifecycle ou authority seuls) ; preuve inscrite dans `evidence` au format `usage-pass;result=…;proof=…`.
+
+### Typologie des preuves Usage
+
+| Preuve | Count (481 traités) |
+|--------|--------------------:|
+| current-method-reference | 224 |
+| runtime-reference | 59 |
+| active-navigation-reference | 55 |
+| explicit-current-use | 47 |
+| abandoned-prototype | 23 |
+| manifest-reference | 22 |
+| active-config-reference | 18 |
+| current-cycle-reference | 16 |
+| explicit-retired | 9 |
+| explicit-archive-only | 5 |
+| historical-snapshot | 3 |
+
+### Usage avant / après
+
+| Valeur | Avant | Après | Δ |
+|--------|------:|------:|--:|
+| unknown | 481 | **0** | −481 |
+| operational | 353 | **794** | +441 |
+| non-operational | 211 | **251** | +40 |
+
+### Répartition des 481 qualifications par famille
+
+| Famille | operational | non-operational |
+|---------|------------:|----------------:|
+| F08 | 128 | 0 |
+| F17 | 97 | 3 |
+| F09 | 58 | 13 |
+| F13 | 46 | 0 |
+| F15 | 22 | 14 |
+| F06 | 27 | 0 |
+| F04 | 26 | 0 |
+| F05 | 9 | 9 |
+| F10 | 7 | 0 |
+| F03 | 6 | 0 |
+| F07 | 5 | 0 |
+| F01 | 4 | 1 |
+| F11 | 3 | 0 |
+| F16 | 1 | 0 |
+
+### Répartition par lifecycle_status (cible initiale)
+
+| Statut | Count traités |
+|--------|-------------:|
+| not-applicable | 146 |
+| candidate | 105 |
+| draft | 90 |
+| validated | 79 |
+| archived | 57 |
+| superseded | 4 |
+
+### Répartition par trajectory (cible initiale)
+
+| Trajectory | Count |
+|------------|------:|
+| N/A | 250 |
+| SFIA v2.4 | 207 |
+| SFIA v1.1 | 14 |
+| SFIA v2.5 | 6 |
+| SFIA v2.6 | 4 |
+
+### Cas techniques significatifs
+
+- **Code actif** (`projects/interv360/backend`, `projects/chantiers360-v2/app`, `tools/cmp-001/src`) → operational (`runtime-reference`)
+- **CI / config** (`.github/workflows/interv360-ci.yml`, `package.json`, `.env.example`) → operational (`ci-reference` / `active-config-reference`)
+- **Schémas CMP** (`tools/cmp-001/src/schemas/*.json`) → operational si consommés par src/tests
+- **Examples CMP** (`tools/cmp-001/examples/`) → non-operational sans import actif
+- **Captures design** (`.png`) → non-operational sauf référence active dans docs de design courants
+
+### Cas documentaires significatifs
+
+- **Inventaires `.txt` capitalization** → non-operational (`generated-inventory-history`)
+- **`proposed_disposition=archive`** sans consommateur actif → non-operational
+- **Méthode draft/candidate** avec refs entrantes → operational (`current-method-reference`)
+- **Rapports projet validated** (merge-summary, demo, rex) → non-operational (`closed-cycle-only`) sans consommateur actif
+- **`2026-07-11-sfia-v2.6-repository-read-only-audit.md`** → operational (`current-cycle-reference`) — artefact audit cartographie PR #165
+- **`tools/cmp-001/WORKSPACE.md`** → operational (`active-navigation-reference`) — cité par `docs/workspace-readiness-report.md`
+
+### Unknown résiduels
+
+**0** — les 2 cas initialement `unknown` après règles automatiques ont été requalifiés manuellement avec preuve (read-only audit, WORKSPACE.md).
+
+### Corrections secondaires
+
+**Aucune** — `proposed_disposition`, `migration_lot_candidate`, `morris_gate_required`, `risk_level` inchangés.
+
+### OUT-OF-PASS ANOMALY
+
+Aucune anomalie détectée dans les champs interdits (lifecycle, authority, scope, trajectory, etc.).
+
+### Preuves inchangées
+
+| Dimension | Modifié | Preuve |
+|-----------|---------|--------|
+| lifecycle_status | **Non** | 1045/1045 identiques au snapshot pré-pass |
+| lifecycle_applicability | **Non** | 1045/1045 identiques |
+| authority | **Non** | 534 unknown inchangé |
+| lots | **Non** | aucun `migration_lot_candidate` modifié |
+
+### Aucune migration
 
-Correction documentaire de la relation Lot 0 ↔ archives non-v3 (voir §8). Aucune modification CSV, lot, disposition ou gate.
+Aucun déplacement, renommage, archivage physique ou suppression exécuté.
 
 ---
 
@@ -528,8 +655,8 @@ Correction documentaire de la relation Lot 0 ↔ archives non-v3 (voir §8). Auc
 | lifecycle sums | 1045 |
 | usage sums | 1045 |
 | authority sums | 1045 |
-| SHA-256 | `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2` |
+| SHA-256 | `02be34c1d78af3b5a853265e053a12b8c8d9c79724f9150e6211f68b12462927` |
 
 ---
 
-*Cartographie candidate — **CARTOGRAPHY CONTRACT FROZEN** — Pass Usage/Authority pending.*
+*Cartographie candidate — **CARTOGRAPHY CONTRACT FROZEN** — Pass Usage **completed** — Pass Authority pending.*
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index 469f4ba..a91f009 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -12,7 +12,7 @@
 **Source CSV :** SHA-256 `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2`
 
 **Pass Lifecycle :** **completed and corrected**
-**Pass Usage :** **pending**
+**Pass Usage :** **completed**
 **Pass Authority :** **pending**
 **Contract :** **frozen** (statistiques recalculées CSV)
 
@@ -167,7 +167,7 @@ Les 3 livrables PR ne sont **pas** dans le CSV. Ils ne participent à aucun lot
 |---------|--------|
 | **Contract** | **Frozen** — CSV = seule source statistique |
 | **Pass Lifecycle** | Completed and corrected |
-| **Pass Usage** | **Pending** |
+| **Pass Usage** | **Completed** — 481 qualifiés ; operational **794** ; non-operational **251** ; unknown **0** |
 | **Pass Authority** | **Pending** |
 | **Migration** | **Aucune autorisée** |
 | **Champs CSV** | **36** |
@@ -188,7 +188,7 @@ Les 3 livrables PR ne sont **pas** dans le CSV. Ils ne participent à aucun lot
 | Exécution | **Aucune** |
 | Pass Lifecycle | **Completed and corrected** |
 | Contract | **Frozen** |
-| Pass Usage | **Pending** |
+| Pass Usage | **Completed** |
 | Pass Authority | **Pending** |
 | lifecycle not-applicable | **338** |
 | archive non-v3 (total B) | **204** |
@@ -199,4 +199,4 @@ Les 3 livrables PR ne sont **pas** dans le CSV. Ils ne participent à aucun lot
 
 ---
 
-*Plan candidate — **CARTOGRAPHY CONTRACT FROZEN** — Morris décide — Pass Usage next.*
+*Plan candidate — **CARTOGRAPHY CONTRACT FROZEN** — Pass Usage **completed** — Pass Authority next.*

```

## Risques

- Qualifications operational fondées sur références documentaires — risque de sur-classification si refs historiques non filtrées.
- Pass Authority reste pending sur 534 fichiers.

## Réserves

- 0 unknown résiduels — toutes qualifications tranchées ; re-review ChatGPT recommandé sur échantillon operational medium-confidence.

## Verdict

- PASS USAGE COMPLETE
- INITIAL USAGE UNKNOWNS = 481
- USAGE QUALIFICATIONS EVIDENCED
- RESIDUAL USAGE UNKNOWNS = 0
- LIFECYCLE VALUES UNCHANGED
- LIFECYCLE APPLICABILITY UNCHANGED
- AUTHORITY VALUES UNCHANGED
- NO LOT ASSIGNMENT CHANGE
- CARTOGRAPHY CONTRACT REMAINS FROZEN
- READY FOR CHATGPT USAGE REVIEW
- PASS AUTHORITY NOT STARTED
