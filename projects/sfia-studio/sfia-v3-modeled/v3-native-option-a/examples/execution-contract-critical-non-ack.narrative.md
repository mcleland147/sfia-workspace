# Narrative invalid example — Critical cycle non-acknowledged cannot be confirmed

This file is **documentation only** (not a JSON Schema negative fixture).

## Scenario

- `cycleInstanceId` references a **Critical** cycle still in `proposed` / non-acknowledged state (R-T-A3-1 OPEN: no public Critical acknowledge API).
- Structural payload may otherwise look confirmable (authority, decisionRefs, granted confirmation).

## Rule (Morris T-A4-D08 / modeled rework)

T-A4 runtime **must fail-closed**: the contract **cannot** reach `status=confirmed`.

Allowed pre-confirm statuses while Critical remains unacknowledged: `draft` | `proposed` | `validated` | `confirmation_required`.

T-A4 must **not**:

- acknowledge the cycle;
- invent a Critical ack API;
- treat a T-A3 HumanDecision as cycle acknowledgement.

## Why not schema-invalid JSON

Draft-07 cannot see cycle aggregate state. Enforcement is a **runtime semantic invariant** for future T-A4 delivery after modeled rework validation.
