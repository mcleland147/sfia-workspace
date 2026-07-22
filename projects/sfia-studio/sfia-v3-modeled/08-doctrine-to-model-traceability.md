# 08 — Doctrine → model traceability (D1)

| Source | Schéma / modèle | SQL | Policy | State | GPT | Gate | Event | Preuve |
|--------|-----------------|-----|--------|-------|-----|------|-------|--------|
| D1 Studio-native | project, guided-session | projects, sessions | D1-FREE-CHAT | — | bound chat | — | SESSION_* | sessionId |
| D2 ReviewBundle | cycle-review-bundle | review_bundles | D1-CYCLE-NO-REVIEW | DRAFT/SEALED | — | seal | CYCLE_REVIEW_SEALED | digests |
| D3 MD/JSON/SQL | all schemas | doctrine_definitions_applied | D1-DIGEST-MISMATCH | — | context | — | CONTEXT_* | digests |
| D4 E0–E4 | enforcement-rule | — | catalog 05 | — | explain | E3 gates | ENFORCEMENT_* | ruleId |
| D5 SQL hybrid | 04 logical | all entities | — | — | — | — | audit_events | event_id |
| D6 maturity | project.methodMode | projects | D1-V3-CLAIM | — | claim text | — | RULE_MATCHED | mode |
| D7 no migration | — | — | — | — | — | — | — | — |
| D8 Option D | BCDI D1 | — | — | — | — | validation | — | pack |
| P1 projet-first | project | projects | D1-NO-PROJECT | DRAFT+ | — | create | PROJECT_CREATED | — |
| P3 human-governed | human-decision, gate | decisions, gates | D1-HUMAN-DECISION | DECISION_REQUIRED | DecisionRequest | GO | HUMAN_DECISION_* | decisionId |
| P6 git-truth | context-snapshot, git-reference | context_snapshots | D1-CONTEXT-* | READY/STALE | — | — | CONTEXT_* | headSha |
| P8 no-free-chat | guided-session | sessions | D1-FREE-CHAT | — | refuse unbound | — | ENFORCEMENT_* | — |
| P9 fail-closed | enforcement-rule | — | E4 rules | BLOCKED | explain | — | — | — |
| framing 23–29 | schemas/* | 04–07 | 05 | 03 | 02 | gates | 06 | examples |

Aucun schéma sans source. Aucune règle D1 structurante sans projection candidate.
