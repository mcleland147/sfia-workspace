# 01 — Scope and canonical slice definition

## Gate

`GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A3`

## In scope

| Area | Deliverable |
|------|-------------|
| Domain | `HumanDecision`, `Confirmation`, `AuthorityEvidence`, dual enums |
| Use-cases | Record / Get / List · Request / Grant / Refuse / Consume / Cancel · Supersede · VerifyAuthority |
| Ports | DecisionRepo · ConfirmationRepo · AuthorityResolver · Audit |
| Infra | In-memory store (mutex + begin/commit/rollback + `structuredClone`) + `failNextSave` |
| Integration | Project exists · Cycle same-project check · LPS `decisionIds` carry · Epistemic `DecisionRef` via public API |
| Tests | `__tests__/oa/decision/**` (≥30) |
| Docs | This pack |

## Out of scope

- Modeled schema edits · `method/**` · `package.json` · UI · Execution · Evidence/ReviewBundle
- Push / PR / merge · Database selection · IAM production
- Auto-acknowledge Critical cycle (no public T-A2 ack API)
- Closing inherited B5 (`reservationIds` et al.) beyond `decisionIds`

## Canonical types (confirmed)

- **HumanDecision.authority**: `morris` \| `delegated` \| `system_non_structuring`
- **Confirmation.level**: `N1` \| `N2` \| `N3`
- **Actor.authorityLevel**: `N1` \| `N2` \| `N3` \| `none` — **never trusted from client**
- `schemaVersion`: `0.1.0-oa`

## Module path

`projects/sfia-studio/app/lib/oa/decision/**`

## Wiring

`createInMemoryDecisionServices` / `createTestDecisionServices` require `ProjectServices` and optional `CycleServices`.
