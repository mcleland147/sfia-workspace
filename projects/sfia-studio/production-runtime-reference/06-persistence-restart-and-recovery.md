# 06 — Persistence, Restart & Recovery

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

## Store topology

| Store | Path resolution | Contents |
|---|---|---|
| Product OA SQLite | `SFIA_STUDIO_PRODUCT_DB_PATH` or default | Truth C tables (`oa_*`) |
| Nora Session SQLite | `SFIA_STUDIO_NORA_SESSION_DB_PATH` or cwd-relative default | Memory B transcript/journal/session items |
| F2 Proposal store | process memory (`proposalStore.ts`) | Proposal DTOs |
| MW5 challenge store | `mw5ChallengeSessionStore.ts` | challenge session (process-scoped) |
| Ops1 / D1 sqlite | separate (`lib/ops1`, `lib/d1`) | historical/ops surfaces — not Product Truth C |
| Launch safety journal | under exec/m4 | attempt safety |

### Product tables (from `lib/oa/project/infrastructure/sqlite/db.ts`)

`schema_meta`, `oa_projects`, `oa_lps`, `oa_lps_current`, `oa_idempotency`, `oa_audit_events`, `oa_cycle_instances`, `oa_human_decisions`, `oa_execution_contracts`, `oa_execution_attempts`, `oa_execution_attempt_active`, `oa_execution_attempt_result_budget`, `oa_evidence`, `oa_evidence_idempotency`, `oa_review_bundles`, `oa_review_bundle_idempotency`, `oa_project_trajectories`, `oa_project_trajectory_current`, `oa_confirmations`, `oa_epistemic_items`, `oa_ec_inspection_attestations`, `oa_authority_verification_receipts`, `oa_claim_evaluations`, `oa_claim_evaluation_idempotency`

### Nora session tables

`session_items`, `logical_product_turns`, `logical_product_turn_retry_bindings`, `pilot_transcript_turns`, `cycle_journal_entries`, `cycle_journal_mutation_ledger`

## Restart checkpoint matrix

| Checkpoint | Survives (product DB) | Rehydrated | Process-local lost? | Fail-closed expectation |
|---|---|---|---|---|
| Fresh project | Project/LPS | UI load | n/a | ok |
| Active cycle | Cycle + LPS pointer | lifecycle projection | proposals may be empty | ok |
| Recommendation | usually ephemeral | may recompute | yes | Recommendation ≠ HD |
| Proposal pending | epistemic markers maybe | subject reconstruct or requalify | **Proposal map lost** | no silent invent |
| HD recorded | `oa_human_decisions` | decision list | proposal may be gone | HD remains authority record |
| EC prepared | `oa_execution_contracts` | EC projection | | |
| Inspected | attestations | | | |
| Confirmed/authorized | confirmations + receipts | | | |
| Attempt accepted/terminal | attempts | | | |
| Evidence/RB | evidence/RB | | | |
| ContractResult | claim evaluations | | | |
| Post-Evidence | Truth C + session if path stable | Nora continuity | session orphan if path drifts | |
| Finalization | finalize HD + assessment | | | |

## Reconstruction rules

- Truth C objects: reload from SQLite repositories.
- Transcript/journal: reload from Nora session DB **at resolved path**.
- Proposal: not durable; Pilot may need new Proposal turn.
- Never invent HumanDecision on restart.

## Additional stores (harvest)

| Store | Role | Notes |
|---|---|---|
| M4 launch safety SQLite | Gate D grants / launch frontier | `sqliteLaunchSafetyJournal.ts` — separate from Truth C |
| OPS1 sqlite | Historical ops1 sessions/journals | Isolated; not Product Truth C |
| D1 sqlite | D1 projects/assignments | Isolated parallel surface |
| ExecutionRun memory store | Parallel BC | Not Product SQLite |
| MaturityAssessment memory | Out of minimal M5 product path | Memory-primary |

