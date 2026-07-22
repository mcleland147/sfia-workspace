# 05 — Slice D1 enforcement policy catalog

Règles **bornées D1** (pas policies Cursor D2).

| ruleId | scope | trigger | condition | E | correction | role | audit |
|--------|-------|---------|-----------|---|------------|------|-------|
| D1-NO-PROJECT | global | chat/action | projectId absent mode v3 | E4 | create/select project | user | ENFORCEMENT_EVALUATED |
| D1-MODE-REQUIRED | project | activate/cycle | methodMode null | E3 | select mode | responsable | DECISION_REQUESTED |
| D1-CONTEXT-UNAVAILABLE | session | context load | Git/defs fail | E4 | retry/fallback mode | system | CONTEXT_* |
| D1-CONTEXT-STALE | session | any effect | digest≠HEAD | E4 | requalify | user | CONTEXT_STALE |
| D1-CYCLE-INCOMPAT | cycle | open | project state invalid | E3 | fix project state | responsable | RULE_MATCHED |
| D1-ROLE-UNAUTHORIZED | gate | decide | role not assigned | E4 | assign role | admin | ENFORCEMENT_EVALUATED |
| D1-HUMAN-DECISION-REQUIRED | cycle | transition | DecisionRequest OPEN | E3 | open gate UI | décideur | DECISION_REQUESTED |
| D1-INVALID-TRANSITION | state | transition | not in machine | E4 | choose valid | moteur | ENFORCEMENT_EVALUATED |
| D1-V3-CLAIM-INELIGIBLE | project | claim v3 | platform/project not eligible | E4 | claim v2.6/transition | décideur | RULE_MATCHED |
| D1-FREE-CHAT | session | message | no project bind mode v3 | E4 | bind project | user | ENFORCEMENT_EVALUATED |
| D1-DEF-MODIFY | defs | write def | no method GO | E4 | stop | — | ENFORCEMENT_EVALUATED |
| D1-DIGEST-MISMATCH | context | compile | doctrineVersion mismatch | E4 | reload context | moteur | CONTEXT_STALE |
| D1-CYCLE-NO-REVIEW | cycle | complete | ReviewBundle not SEALED | E3 | seal review | décideur | DECISION_REQUESTED |

Schéma : `schemas/policy/enforcement-rule.schema.json` · exemple : `examples/enforcement-rules.example.json`.
