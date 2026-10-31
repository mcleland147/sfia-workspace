# 06 — Persistence, Restart & Recovery

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

## Overlay — CORR-01 (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

**CORR-01 NO SEMANTIC IMPACT** on persistence / restart / recovery. Generic continuity wording is **DETERMINISTIC AT TESTED SCOPE** only (`postExecutionProductContinuity.generic.d0.test.ts`); restart continuity remains covered by existing suites. **≠** REAL. Pre-merge NOT MERGED claim = **HISTORICAL**.

## Overlay — CORR-02 (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

**CORR-02 NO SEMANTIC IMPACT** on persistence stores, restart, or recovery tables. Identity↔remote↔checkout checks are in-process seal and filesystem metadata reads (no new table, migration, or clone). Evidence FS→SHA supersession reads already-persisted Evidence and is **historical-only** for allowlisted sources `execution_attempt:docs_write` (+ dotted suffix). No new Product materialization Evidence source is persisted after the docs_write retirement. **≠** REAL. Pre-merge NOT MERGED claim = **HISTORICAL**.

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

## Overlay — Nora UX consolidated (GI-NAP-UX-CONSOLIDATED-01 — CANDIDATE — 2026-10-31)

> **CANDIDATE** · Memory B schema unchanged (`presentation_json` / `studio_control_json` / `content`).
> **Behaviour delta:** when A1-admissible, durable `content` may equal compose from presentation; UI rehydrate must yield the same A1/B decision. GFM tables in `content` are render-only on B (no rewrite of stored bytes).
> **Anti-claims:** ≠ server process restart proven · ≠ OpenAI LIVE emit global · ≠ transcript rewrite migration.

## Overlay — Nora Adaptive Presentation Option C (BASELINE ON MAIN — PR #628 MERGED — 2026-10-30)

> **Epistemic class:** **CURRENT PRODUCT ON MAIN** via [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` · merge **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · Delivery **`c6b5ae3a…`** · CI correction **`1c3a8d9e…`** · Pre/post-merge CI **SUCCESS** · **≠** GLOBAL RESTART SAFE · **≠** LIVE SESSION RECOVERY PROVEN · **≠** FULL C1 LONG-HORIZON MEMORY · **≠** OpenAI LIVE structured emit.
>
> **HISTORICAL AS OF authoring (pre-merge):** prior overlay « LOCAL CANDIDATE — PRE-INTEGRATION / UNCOMMITTED / PROJECT GIT INTEGRATION NOT AUTHORIZED » — true before merge; preserve; superseded for Product lifecycle by this block.
>
> **Evidence refs:** QA-NAP-03 handoff `b11ef7c95d89327c5a4ea164de21a30b40b334b1` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` · unit `noraAdaptivePresentation.d0.test.ts` (incl. CORR-NAP-01 P2 legacy migrate) · UI continuity suites · E2E `studio-nora-adaptive-qa-nap01.spec.ts` · post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551).

### Columns on `pilot_transcript_turns` (Memory B only)

| Column | Type | Role |
|---|---|---|
| `presentation_json` | TEXT NULL | Serialized validated Option C presentation DTO (UI projection); absent/null → plain `content` fallback |
| `studio_control_json` | TEXT NULL | Serialized Studio-owned typed notices (server authority); forged Nora prose `[Studio]` ≠ this column |

**Migration (ON MAIN via #628):** idempotent `ALTER TABLE pilot_transcript_turns ADD COLUMN …` in `productSqliteSession.ts` when columns missing. Historical rows without columns → NULL → plain narrative. **No** new table · **no** second SoT · **≠** Truth C / OA.

### Write / read / fallback

| Path | Behavior (ON MAIN) |
|---|---|
| Write | After Product turn normalize: persist validated `presentation` + Studio notices via `appendPilotTranscriptTurn` INSERT on the assistant transcript row; retry-safe `logicalTurnId` lookup returns an existing row instead of creating a duplicate (**no** transcript UPDATE on that path) |
| Read | Continuity / transcript load → `presentationJson` / `studioControlJson` → hook → ConversationSurface |
| Invalid / absent DTO | Fail-closed parse → ignore projection; render canonical `content` |
| Notices | Restored from `studio_control_json` when present; Studio titles/disclaimers remain Studio-owned |

### Continuity proof distinctions

| Checkpoint | Status | Limit |
|---|---|---|
| Browser `page.reload()` | **DETERMINISTIC VERIFIED** at reported Fake QA scope (QA-NAP-03) | Fake markers + Better Auth Playwright only |
| Local **server** process restart | **NOT PROVEN** (QA-NAP-10 open) | Do not claim Memory B path alone = process restart proof |
| OpenAI RunState cross-restart | Unchanged — **NOT IMPLEMENTED / DEFER** | Option C does not serialize RunState |
| F2 proposal process-local | Unchanged | — |
| Memory B vs Truth C | Columns **only** on Nora session transcript | presentation ≠ OA object · ≠ Evidence · ≠ HumanDecision |

**Paths:** `lib/nora-cognitive-runtime/productSqliteSession.ts` · `cycleJournalStore.ts` · continuity actions / `useProductConversation.ts`.

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

## Overlay — AKG-M5 L2-D2 OA / D1 persistence freeze (CURRENT ON MAIN — PR #614; 2026-10-24)

| Item | Status |
|---|---|
| Product OA Truth C | KEEP — `oa-product.sqlite` / `SFIA_STUDIO_PRODUCT_DB_PATH` · Project + LPS |
| Nora Memory B | KEEP distinct — `nora-session.sqlite` / `SFIA_STUDIO_NORA_SESSION_DB_PATH` · **≠** Truth C |
| D1 historical | FREEZE gated when exclusive trim=`"1"` · RETIRE LATER · **no** physical removal in L2-D2 |
| Freeze at open | `openD1Db` → assert **before** resolve / open / DDL — code CURRENT |
| Freeze at mutation | `createProjectAtomic` / `selectMethodModeAtomic` / `BoundedAtomicAuditStore.append|clearForTests` assert before BEGIN/INSERT/UPDATE/DELETE — code CURRENT |
| Dual-write Product↔D1 | **None** as target under exclusive |
| H4 local | No historical D1→OA migration |
| Backups / snapshot | **DET PROVEN AT SYNTHETIC SCOPE** (S1 + **CR-S1-01**) via operational `VACUUM INTO` only · `closed_copy` **REMOVED from operational contract** (`CLOSED_COPY_UNAVAILABLE` — WAL absence ≠ quiescence) · RO `PRAGMA integrity_check` without Product migration · debt `R-L2D2-SQLITE-SNAPSHOT` **PARTIAL** · LIVE/H4 **NOT PROVEN** |
| Restart | DET reopen / singleton reset / M1 + S4 DET R-CUT (exclusive stays ON; D1 oracle = disposable `readOnly` open) · **R-CUT LIVE** = **NOT PROVEN** |
| Residual boundary | `openD1Db` allowlist Proxy (`prepare`/`exec`/`close`) + non-exposable `setAuthorizer` + Statement `run`/`get`/`all` gated / `iterate` refuse-always (**CR-S2-01/02**) · unwrapped `new DatabaseSync` outside `openD1Db` = **KNOWN GAP** |
| Proof | freeze + injected + O-01 + D5 + M1 + S1–S4 DET (**CORR-01 / CR-S2-02 revalidated**) — **DETERMINISTIC AT TESTED SCOPE** |
| Anti-claims | Exclusive **not** ACTIVATED · cutover LIVE **not** proven · DET snapshot **≠** H4 real instance PASS · S4 RO diagnostic **≠** Q12 · **≠** exclusive OFF rollback |

### Debt — `R-L2D2-SQLITE-SNAPSHOT` (operational, pre–G-ACTIVATION)

**Owner / gate:** Morris G-ACTIVATION preparation (distinct from G-GIT). **DET exit (synthetic Fresh Start class / CR-S1-01):** PASS via `snapshotProductSqliteVacuumInto` + RO integrity + S1/S4 suites. **LIVE/instance exit:** still required before exclusive arming on a designated H4-qualified local instance.

**Proven at DET synthetic scope (CORR-01):**
1. Operational snapshot = `VACUUM INTO` on open Product `DatabaseSync` (sync path; Node also exposes async `backup()` — not adopted as contract here).
2. `closed_copy` **unavailable** — no false quiescence claim from missing WAL/SHM.
3. Integrity = `{ readOnly: true }` + `PRAGMA integrity_check` — **no** Product schema migration on verify.
4. Source preserved; restore on disposable path via Product services after RO verify; dest overwrite refused; corrupt/missing fail-closed.

**Still required for LIVE/H4 instance (not claimed):**
1. Quiesce writers on a designated Application Support–class instance.
2. Operator procedure + Decision Pack evidence on that instance.
3. No restore over a live user source without distinct GO.

## Additional stores (harvest)

| Store | Role | Notes |
|---|---|---|
| M4 launch safety SQLite | Gate D grants / launch frontier | `sqliteLaunchSafetyJournal.ts` — separate from Truth C |
| OPS1 sqlite | Historical ops1 sessions/journals | Isolated; not Product Truth C |
| D1 sqlite | D1 projects/assignments | Isolated parallel surface |
| ExecutionRun memory store | Parallel BC | Not Product SQLite |
| MaturityAssessment memory | Out of minimal M5 product path | Memory-primary |


## Overlay — AKG-M5 L3-S2 Option B / S8 Project-first (CURRENT ON MAIN — PR #623 MERGED — 2026-10-27)

> **Epistemic class:** **CURRENT ON MAIN** via [PR #623](https://github.com/mcleland147/sfia-workspace/pull/623) **MERGED** `2026-10-27T15:02:16Z` · merge **`6c8b661c50a5c1d9bd04793192b9294b63349bb1`** · parents **`6e957ecbf50b009b692cf1fcba2748ee1aa9c862`** + **`73f0166c6a71c301a7b2a9c2471beb30ad068221`** · [post-merge CI #40526990871](https://github.com/mcleland147/sfia-workspace/actions/runs/40526990871) **COMPLETED / SUCCESS** (Detect · Typecheck · Lint · Build · Vitest · Modeled Governance · Secret Pattern Scan · Trailing Whitespace · **SFIA Studio Required Gate PASS**) · event=`push` · branch=`main` · HEAD=merge. Integrated Product commits: `0577ca5c…` (feat) · `90bbf479…` (pre-merge R24 LOCAL docs+manifest) · `f7c9ba78…` (**CORR-CI-623-01** Tool-First first-prompt) · `73f0166c…` (**CORR-CI-623-02** multi-path unclaimed redaction). Pre-merge CI [run #40519630827](https://github.com/mcleland147/sfia-workspace/actions/runs/40519630827) SUCCESS on `73f0166c…`. Prior overlay wording **LOCAL CANDIDATE / dirty Product / PROJECT GIT INTEGRATION NOT AUTHORIZED / ≠ CURRENT ON MAIN** = **HISTORICAL AS TIP** (true at 2026-10-27 pre-merge authoring). Proof ceiling: **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE**. REAL / G-REAL / OA-exclusive activation / runtime v3 **NOT** claimed. **L3 GLOBAL OPEN**. EP-S2-05 **NOT PROVEN**. EP-S2-08 **PARTIAL**. ≠ Product PASS invented · ≠ L3 GLOBAL CLOSED.

### Persistence / recovery notes (CURRENT ON MAIN)

| Topic | CURRENT fact | Limit |
|---|---|---|
| GERM / Verification / generic_mat | Durable OA Evidence + refs under Attempt; Project-only may omit `cycleInstanceId` | No new SQLite table/migration in Option B |
| Frozen ReviewBundle | Snapshots `evidenceId/version/status/availability` immutable after freeze | Ownership checked **pre-admit** (not rewritten into snapshot bindings) |
| Late Evidence | Same Attempt idempotency key + divergent evidenceIds → **IDEMPOTENCY_CONFLICT** | **No** OA supersession/reopen under same key invented; recovery UX debt OPEN |
| Rehydration | W3-C / GERM surface from durable facts demonstrated DET (O2 / nominal) | Nora/Pilote UX E2E **NOT PROVEN** (EP-S2-08 PARTIAL) |
| Fictive cycle | Rehydrate must not create CycleInstance | BEHAVIOR PROVEN at tested scope |

**EP-S2-08-PROOF-01 persistence / remount (2026-10-28):** **HISTORICAL LOCAL CANDIDATE** at original authoring (**≠ CURRENT ON MAIN** then). **CURRENT ON MAIN** via [PR #626](https://github.com/mcleland147/sfia-workspace/pull/626) **MERGED** `2026-10-28T13:44:42Z` · merge **`3064047258e54cfc9a1f24e21d322ad6ae18217d`** · Product `e78db159…` · R24 `485ec3cb…` · [post-merge CI #40699255387](https://github.com/mcleland147/sfia-workspace/actions/runs/40699255387) **SUCCESS** · Required Gate **PASS** — at tested deterministic scope. Process remount = new OA on same durable SQLite + refs → Project/EC/Attempt + Evidence/RB/CE + W3-C recommendation/reserve rehydrate DET (`akgM5L3S2.epS208.proof01…` B2/B6 **PASS** after Option 1). Post-Evidence CKC orientation on remount remains eligibility-gated (R1 Option A): Attempt EC durable stamps (including preserved `repositoryMutationDeclared`) decide Delivery vs refuse — remount does not invent CycleInstance, invent `"write"`, or widen SHE authority. **Separation:** Process remount DET = **BEHAVIOR PROVEN AT TESTED SCOPE** · browser `/studio` remount E2E = **NOT PROVEN** · Nora/Pilote live UX = **NOT PROVEN** · EP-S2-08 still **PARTIAL** · ≠ recovery E2E overclaim.

**≠** invent recovery E2E beyond DET proofs.
