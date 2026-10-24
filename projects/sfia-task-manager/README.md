# SFIA Task Manager

**Project path:** `projects/sfia-task-manager/`

**Status:** M1 / TECHNICAL ARCHITECTURE CANDIDATE VALIDATED AS REFERENCE

**Operational process baseline:** SFIA v2.6

## Purpose

Transformer une intention de travail en travail qualifié, exécuté dans un cycle SFIA borné, vérifié par des preuves et clôturé par une décision humaine, avec historique et prochaine action explicites.

## Initial scope

M1 fonctionnel + UX d'une boucle de gestion de travail gouvernée par SFIA.

## Latest milestone

Cycle 5 — Technical Architecture — **VALIDATED BY MORRIS AS CANDIDATE REFERENCE**

## Prior milestones

Cycle 4 — UX/UI — **VALIDATED BY MORRIS AS DESIGN REFERENCE**

Cycle 3 — Functional Architecture — VALIDATED BY MORRIS — INTEGRATED ON MAIN via PR #371

## Functional specification

- `01-functional/2026-08-19-m1-functional-spec.md` — M1 functional specification (validated by Morris)

## Functional architecture

- `02-architecture/2026-08-20-m1-functional-architecture.md` — M1 functional architecture (validated by Morris)

## UX/UI / Design

- `03-design/2026-08-20-m1-ux-ui-contract.md` — M1 UX/UI contract (**validated by Morris as Cycle 4 design reference**)
- `03-design/2026-08-20-figma-design-brief.md` — Figma design brief (**validated by Morris as Cycle 4 design reference**)
- `03-design/2026-08-20-figma-review-checklist.md` — Morris Figma review checklist (**Cycle 4 design reference validated**)

## Technical architecture

- `04-technical-architecture/2026-08-22-m1-technical-architecture.md` — M1 technical architecture (**candidate reference validated by Morris — not adopted for implementation**)

## Design source (Cycle 4 reference)

Figma — SFIA Task Manager
URL: https://www.figma.com/design/2U8pJCYBMtGxaK0F0Ef1nO
fileKey: `2U8pJCYBMtGxaK0F0Ef1nO`
Status: **VALIDATED BY MORRIS AS CYCLE 4 DESIGN REFERENCE**

## Key validated decisions

- GO M1 functional contract — Morris
- GO UX contract — Morris
- modèle central Work Item + Cycle
- décision humaine obligatoire pour clôture
- one active Cycle maximum par Work Item en M1
- workflow M1 défini
- cinq surfaces métier M1
- Git/evidence manuels en M1
- Cycle 4 UX/UI design validated as reference — Morris
- Cycle 5 technical architecture candidate validated as reference — Morris
- TD-01→TD-12 remain **OPEN — IMPLEMENTATION DECISION REQUIRED**
- aucune architecture technique **adoptée** pour implémentation
- aucune persistence choisie
- aucun GO delivery
- aucun GO backlog execution

## Maturity

M1 NOT READY — AC demonstrated 0/16

## Technical decisions (OPEN)

TD-01 stack frontend · TD-02 stack backend · TD-03 runtime topology · TD-04 persistence · TD-05 evidence blob storage · TD-06 hosting · TD-07 authentication · TD-08 authorization · TD-09 API style · TD-10 observability · TD-11 CI/CD · TD-12 design tokens binding — **ALL OPEN**

## Next step

Project push and PR creation remain gated by explicit Morris authorization.

Any PR-readiness evidence used for that authorization must match the current project HEAD and the current origin/main considered at decision time.

**NO PROJECT PUSH AUTHORIZED**
**NO PR AUTHORIZED**
**NO BACKLOG EXECUTION AUTHORIZED**
**NO DELIVERY AUTHORIZED**
**NO IMPLEMENTATION AUTHORIZED**

Cycle 6 is **not** opened by Cycle 4/5 validation.

## Tracking note (R-DOC-02)

R-DOC-02: CLOSED — tracking correction completed in Cycle 4 and regularized in local Git.

Cycle 13 PR readiness has been executed; no PR-readiness GO remains pending for R-DOC-02.

This closure does not imply PR readiness, project push authorization, PR creation, merge, backlog, delivery, implementation, or M1 READY.

## SFIA references

- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`
- `method/sfia-fast-track/ui/figma-design-first-ui-method.md`

## Explicit separation

Ce projet n'est pas SFIA Studio v3 et ne doit pas être assimilé à SFIA Studio sans décision Morris dédiée.
