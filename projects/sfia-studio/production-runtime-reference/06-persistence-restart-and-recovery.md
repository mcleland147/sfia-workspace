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

## Nora Session vs RunState (PR #577 INTEGRATED ON MAIN)

**RCD-01 / PR #578 persistence note:** documentary reliability correction **does not** introduce new persistence. Coverage/redaction/envelope reconciliation are in-process tool + turn path behaviors. Session continues to store tool results as Agent items under existing `ProductSqliteSession` rules. RunState cross-restart remains **DEFER**. No new tables, migrations, or provider routing.

| Kind | Lifetime | Role |
|---|---|---|
| **A. ProductSqliteSession (Memory B)** | Durable while DB path is stable | Conversational history items between **Product turns**; passed to Runner on every segment including RunState resume |
| **B. OpenAI RunState** | In-process, **same Product turn** only | Native Agents resume after segment maxTurns; not a second transcript SoT |
| **C. Cross-restart RunState** | **NOT IMPLEMENTED / DEFER** | No serialized RunState across process crash/restart |
| **D. FPPC-RES-01** | Observed SDK Session prepare | Initial user utterance often **not** persisted as Session `role:user` AgentInputItem; tool/assistant trail + next-turn `ModelRequest.input` carry conserved context |

Do **not** treat Session items as an exhaustive Pilot transcript. Do **not** claim C1 long-horizon conversational memory as fully satisfied. No additional persistence engine is introduced.

## Restart checkpoint matrix

| Checkpoint | Survives (product DB) | Rehydrated | Process-local lost? | Fail-closed expectation |
|---|---|---|---|---|
| Fresh project | Project/LPS | UI load | n/a | ok |
| Active cycle | Cycle + LPS pointer | lifecycle projection | proposals may be empty | ok |
| Recommendation | usually ephemeral | may recompute | yes | Recommendation ≠ HD |
| Proposal pending | epistemic markers maybe | subject reconstruct or requalify | **Proposal map lost** | no silent invent |
| Pending Generic PREPARE offer (P6-HQA-F05-GD4-01 + M-HD carrier) | none | UI re-offer / re-present as needed | **offer map lost** (process-local) | no silent invent; no stale-offer reuse; offer loss ≠ universal PREPARE ban (see HD11) |
| Generic Mission HumanDecision (M-HD-01/02) | `oa_human_decisions` (+ DecisionBasis / genericMissionContext / presentationDigest) | decision list + verify path | process-local offer/presentation carrier lost | HD remains durable authority **record**; accepted+verified HD may resume PREPARE without restoring offer (HD11) |
| Generic Mission presentation (UI seal) | none as Presentation store | none / stale if client held digest without reconstitutable offer | **presentation carrier lost** | UI fail-closed stale; no PresentedMission store invented |
| HD recorded (general) | `oa_human_decisions` | decision list | proposal may be gone | HD remains authority record |

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

## Generic Mission / Generic PREPARE restart (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

Four situations must stay distinct (S2 / M-HD-01 HD11):

| Situation | Durability | Restart meaning |
|---|---|---|
| A. Pending Generic PREPARE offer | Process-local only | Lost at restart; **no** automatic reconstruction of the presentation carrier |
| B. UI continuity | Process-local carrier | Absent offer may prevent immediate reconstitution of the Pilot card / sealed presentation UI → honest `none` / `stale` per existing continuity contract; **no** durable PresentedMission store invented |
| C. Durable OA HumanDecision | Durable OA (`oa_human_decisions`) | Recoverable after restart from Product SQLite; identity + DecisionBasis retained; still subject to CURRENT applicability / digest / supersession verify |
| D. PREPARE resume | Uses durable HD + Product/OA gates | An **accepted**, mission-bound, applicable, verified HD may resume structural PREPARE **without** restoring the process-local offer when the Product path supplies `decisionId` + coherent mission analysis / project context and all gates pass (HD11). Absence of offer is **not** by itself a universal PREPARE refusal. Presence of HD alone is **not** a universal Authorization |

**Mandatory PREPARE-resume checks (unchanged Product/OA):** project; mission; identity; DecisionBasis; digest; status `accepted`; non-superseded; materiality/currentness; other Product/OA gates via `verifyGenericMissionHumanDecisionForPrepare` / `prepareGenericExecutionContractDraft`.

**Never invent on restart:** new HumanDecision; new presentation; new mission; new CycleInstance; implicit Authorization.

**Proof:** HD11 (`p6.mHd01.genericMissionHumanDecision.d0.test.ts`) — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (clear offer → new runtime same SQLite → load HD → PREPARE with `decisionId` + analysis). Does **not** prove automatic UI rehydration.

**Not claimed:** global RESTART SAFE; UI automatically rehydrated; unconditional PREPARE after restart; REAL/HQA restart proven. No invented recovery mechanism beyond candidate W2/OA paths.

## Overlay — AKG-M5 L2-D1 D5 CreateProject audit atomicity (Delivery 2026-10-24)

| Item | CURRENT AS-IMPLEMENTED ON MAIN — PR #612 MERGED / post-merge CI SUCCESS |
|---|---|
| Lifecycle | Local Delivery, CORR-01 and Draft PR = **HISTORICAL** ; [PR #612](https://github.com/mcleland147/sfia-workspace/pull/612) **MERGED** into `main` at `b792bc83e1fbe3ee2f630d2637c137ee246bf07a` ; [CI #40082088441](https://github.com/mcleland147/sfia-workspace/actions/runs/40082088441) **SUCCESS** |
| Contractual success event | `oa.project.created` result=`ok` |
| Atomicity | Append runs **inside** `SqliteProductStore.runInTransaction` with Project/LPS/idempotence (same `oa_*` DB / `oa_audit_events`) |
| Studio composition | `localProjectComposition` defaults to `SqliteProjectAuditJournal` (no Memory inject on create path) |
| Failure audit | Observational / best-effort — must not mask create failure |
| Idempotent reuse audit | Best-effort (Project already durable) |
| New table / port | **NONE** |
| Proof | `l2d1D5CreateAuditAtomicity.test.ts` Q5.1–Q5.7 — DETERMINISTIC AT TESTED SCOPE |
| Not claimed (at L2-D1 merge) | L2-D2 cutover · O-01 integrated Product→UI « comprendre » (then KNOWN GAP) · REAL · runtime v3 ADOPTED · D1 retire |

## Overlay — AKG-M5 L2-D2 OA / D1 persistence freeze (LOCAL DELIVERY CANDIDATE — 2026-10-24)

| Item | Candidate status |
|---|---|
| Product OA Truth C | KEEP — `oa-product.sqlite` / `SFIA_STUDIO_PRODUCT_DB_PATH` · Project + LPS |
| Nora Memory B | KEEP distinct — `nora-session.sqlite` / `SFIA_STUDIO_NORA_SESSION_DB_PATH` · **≠** Truth C |
| D1 historical | FREEZE gated when exclusive `"1"` · RETIRE LATER · **no** physical removal in L2-D2/CORR-02 |
| Freeze at open | `openD1Db` → assert **before** resolve / open / DDL |
| Freeze at mutation | **CORR-02:** `createProjectAtomic` / `selectMethodModeAtomic` / `BoundedAtomicAuditStore.append|clearForTests` assert before BEGIN/INSERT/UPDATE/DELETE |
| Dual-write Product↔D1 | **None** as target under exclusive |
| H4 local | No historical D1→OA migration in this Delivery |
| Backups / snapshot | **NOT PROVEN** — see debt `R-L2D2-SQLITE-SNAPSHOT` below. Do **not** treat a naive file copy of `*.sqlite` as a validated cutover backup |
| Restart | DET reopen / singleton reset / M1 process durability proven at tested scope · **Studio live restart / R-CUT** = **NOT PROVEN** |
| Residual boundary | Raw `DatabaseSync` outside D1 applicative APIs **not** guarded — **KNOWN GAP** (declared CORR-02) |
| Proof | freeze + injected + O-01 + D5 + M1 suites — **DETERMINISTIC AT TESTED SCOPE** (31 PASS / 7 files per CORR-02 handoff) |
| Anti-claims | Exclusive **not** active on main · cutover **not** proven · App Support definitive DBs **not** created · live backup **not** executed this cycle |

### Debt — `R-L2D2-SQLITE-SNAPSHOT` (operational, pre–G-ACTIVATION)

**Owner / gate:** Morris G-ACTIVATION preparation (distinct from G-GIT). **Exit:** documented + DET-proven coherent snapshot/restore of Truth C (+ Memory B if in scope) **before** exclusive arming on a designated local instance.

**To qualify and prove (not claimed now):**
1. Quiesce writers — no active Studio Product/Nora connections holding the target DB (or equivalent exclusive access).
2. Account for SQLite sidecar files when present (`*-wal` / `*-shm`) — a lone `.sqlite` copy while WAL is hot is **not** a coherent backup.
3. Prefer an online-safe mechanism when quiesce is incomplete (e.g. SQLite backup API / VACUUM INTO / checked checkpoint) over blind filesystem copy.
4. Preserve source OA files until restore verification succeeds.
5. Verify recovery by opening the snapshot on a disposable path and reading Project + LPS (Truth C) without mutating the live source.
6. Record procedure + proof artifacts under the activation Decision Pack — **no live backup in this Cycle 13**.

## Additional stores (harvest)

| Store | Role | Notes |
|---|---|---|
| M4 launch safety SQLite | Gate D grants / launch frontier | `sqliteLaunchSafetyJournal.ts` — separate from Truth C |
| OPS1 sqlite | Historical ops1 sessions/journals | Isolated; not Product Truth C |
| D1 sqlite | D1 projects/assignments | Isolated parallel surface |
| ExecutionRun memory store | Parallel BC | Not Product SQLite |
| MaturityAssessment memory | Out of minimal M5 product path | Memory-primary |
