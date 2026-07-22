# 06 — Slice D1 event and audit catalog

Append-only. Pas de PII dans payload (ids only).

| eventType | objectType | payload min | redaction |
|-----------|------------|-------------|-----------|
| PROJECT_CREATED | Project | title, workspaceId | — |
| PROJECT_MODE_SELECTED | Project | methodMode | — |
| PROJECT_ACTIVATED | Project | fromState | — |
| CYCLE_PROPOSED | CycleInstance | cycleType | — |
| CYCLE_QUALIFICATION_STARTED | CycleInstance | — | — |
| CYCLE_OPENED | CycleInstance | — | — |
| SESSION_CREATED | GuidedSession | cycleId | — |
| CONTEXT_LOADING_STARTED | ContextSnapshot | — | — |
| CONTEXT_READY | ContextSnapshot | headSha, digestsCount | digests truncated OK |
| CONTEXT_STALE | ContextSnapshot | expected/actual head | — |
| RULE_MATCHED | EnforcementRule | ruleId | — |
| ENFORCEMENT_EVALUATED | EnforcementRule | ruleId, level E0–E4 | — |
| RESERVE_CREATED | Reserve | reserveType | — |
| DECISION_REQUESTED | DecisionRequest | kind | — |
| HUMAN_DECISION_RECORDED | HumanDecision | verdict | motif redacted if sensitive |
| GATE_APPROVED / GATE_REJECTED | GateInstance | gateKind | — |
| TRANSITION_PROPOSED | TransitionProposal | from,to | — |
| CYCLE_REVIEW_SEALED | ReviewBundle | reviewBundleId | — |
| TRANSITION_APPROVED | TransitionProposal | — | — |
| CYCLE_COMPLETED | CycleInstance | — | — |
| NEXT_CYCLE_OPENED | CycleInstance | nextCycleId | — |

Champs communs AuditEvent : eventId, occurredAt, actor, correlationId, causationId, projectId, cycleId?, doctrineVersion, definitionDigests, objectType, objectId, payload.
