# 03 — Slice D1 state and transition model

États **simplifiés** vs cadrage 04 (challenge : moins d’états redondants pour D1).

## Project
`DRAFT → ACTIVE → PAUSED ↔ ACTIVE → CLOSED → ARCHIVED`

| Transition | Preconditions | Role | E | Events |
|------------|---------------|------|---|--------|
| DRAFT→ACTIVE | mode sélectionné | Responsable | E3 | PROJECT_ACTIVATED |
| *→PAUSED | décision ou système | Responsable | E1 | — |
| *→CLOSED | cycles terminés ou GO | Décideur | E3 | — |
| CLOSED→ARCHIVED | rétention | Admin | E3 | — |

## CycleInstance
`PROPOSED → QUALIFYING → READY → ACTIVE → DECISION_REQUIRED → VALIDATING → COMPLETED`

Aussi : `→ PAUSED | BLOCKED | CANCELLED` depuis états non terminaux.

| Transition | Preconditions | E |
|------------|---------------|---|
| PROPOSED→QUALIFYING | Project DRAFT/ACTIVE | E0 |
| QUALIFYING→READY | Context READY | E3 si stale |
| READY→ACTIVE | session ready | E0 |
| ACTIVE→DECISION_REQUIRED | DecisionRequest OPEN | E0 |
| DECISION_REQUIRED→VALIDATING | HumanDecision recorded | E3 |
| VALIDATING→COMPLETED | ReviewBundle SEALED + transition GO | E3 |

## GuidedSession
`CREATED → CONTEXT_LOADING → READY → IN_PROGRESS → AWAITING_HUMAN → COMPLETED | BLOCKED | ABANDONED`

## GateInstance
`OPEN → APPROVED | REJECTED | EXPIRED | REVOKED` (irréversible sauf REVOKED correctif)

## DecisionRequest
`DRAFT → OPEN → DECIDED | CANCELLED | EXPIRED`

## ReviewBundle
`DRAFT → SEALED → EXPORTED? → ARCHIVED` (SEALED immuable)
