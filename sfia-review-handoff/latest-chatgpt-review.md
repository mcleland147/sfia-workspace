# ChatGPT Review Pack — FULL
## R-T-A3-2 Architecture Study — Cycle 6 Architecture technique — Critical

| Field | Value |
| --- | --- |
| **Role** | Architecture study — Durable Cross-Store Atomicity (R-T-A3-2) |
| **Pack level** | FULL |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-12 13:24:44 CEST (+0200) |
| **Timestamp UTC** | 2026-08-12 11:24:44 UTC |
| **Timestamp CEST ISO** | `2026-08-12T13:24:44+0200` |
| **Timestamp UTC ISO** | `2026-08-12T11:24:44Z` |
| **GO Morris consumed** | Cycle 6 Architecture technique R-T-A3-2 Durable Cross-Store Atomicity |
| **R-T-A3-1** | **ACCEPTED / CLOSED BY MORRIS** (+ SYNC DEBT: repo may still say HARD ACCEPTANCE CANDIDATE — do not treat as revocation; product code not modified) |
| **Cycle** | **6 — Architecture technique** |
| **Profil** | Critical |
| **Critical** | OUI — EXPLICITE |
| **Blocs** | Sécurité/RSSI; Observabilité/RUN readiness; DevOps architecture/opérabilité only |
| **Review Pack** | FULL |
| **Outbound remote identity** | Placeholder — filled after publish / verified externally after content freeze |

---

## Local Git Truth (DEL)

| Field | Value |
| --- | --- |
| Worktree | `…/worktrees/f3-real-prerequisites-delivery` |
| Branch | `delivery/sfia-studio-f3-real-prerequisites` |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` (same) |
| Staged | **EMPTY** |
| Remote delivery branch | **ABSENT** |
| Dirty worktree | **expected** (prior F3 wiring) — **non-STOP** |
| Project commit/push/PR/merge/force | **0 / 0 / 0 / 0 / 0** |

---

## Template / inbound handoff

| Field | Value |
| --- | --- |
| Template | `prompts/templates/sfia-cycle-execution-template.md` blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| Inbound handoff tip | `f5adced6ac2ad0b305ddca90167bec9b8de835ce` |
| Inbound handoff blob | `f11f965300a426120b7cd0fdc83489c227d9e0f6` |

---

## Candidate integrity

| Field | Value |
| --- | --- |
| Candidate SHA BEFORE | `c7a979dbee3cd57b169f742502cbc1a131778bb0e2758622abe972444ba4670a` |
| Candidate SHA AFTER | `c7a979dbee3cd57b169f742502cbc1a131778bb0e2758622abe972444ba4670a` |
| MATCH | **yes** |
| Method | SHA-256 of newline-joined `path sha256` body lines from `.tmp-sfia-review/f3-prod-adapter-wiring/candidate-manifest.txt` (comments stripped); same as current-state-map |
| Product mutation count | **0** |
| Project Git write count | **0** |
| Product candidate | **BYTE-IDENTICAL** |

---

## Gate / readiness honesty

| Field | Value |
| --- | --- |
| R-T-A3-2 | **OPEN HARD** |
| Gate D | **NOT READY / NOT CONSUMED** |
| Cursor REAL | **0** |
| Product persistence | **NOT_SELECTED** |
| Recommendation | **OPTION A** (**NOT DECIDED** — Morris gate) |

---

## Sources consulted

From `current-state-map.md` (Source files read):

1. `lib/oa/critical-ack/ports/authorityAttemptJournalPort.ts`
2. `lib/oa/critical-ack/infrastructure/memoryAuthorityAttemptJournal.ts`
3. `lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts`
4. `lib/oa/critical-ack/createProductionAcknowledgeCritical.ts`
5. `lib/oa/critical-ack/application/acknowledgeCritical.ts`
6. `lib/oa/critical-ack/domain/types.ts` (via rg excerpts)
7. `lib/oa/critical-ack/domain/invariants.ts` (via rg)
8. `lib/oa/critical-ack/application/reconcileLaunchedAttemptOnRestart.ts` (via rg)
9. `lib/oa/critical-ack/index.ts` (via rg)
10. `lib/d1/db.ts`
11. `lib/d1/paths.ts`
12. `lib/d1/boundedAtomicAudit.ts`
13. `lib/vertical-slice-runtime/service.ts`
14. `lib/platform/t-a7/hardBlockerFoundation.ts`
15. `lib/platform/t-a7/projectCycleAtomicCoordinator.ts`
16. `lib/oa/execution-contract/application/confirmExecutionContract.ts`
17. `lib/oa/execution-contract/infrastructure/memoryExecutionContractStore.ts`
18. `lib/oa/execution-contract/infrastructure/memoryExecutionContractRepository.ts` (via rg)
19. `lib/oa/execution-contract/index.ts` (via rg)
20. `lib/oa/execution-attempt/application/startExecution.ts`
21. `lib/oa/execution-attempt/infrastructure/memoryExecutionAttemptStore.ts`
22. `lib/oa/execution-attempt/infrastructure/memoryExecutionAttemptRepository.ts` (via rg)
23. `lib/oa/execution-attempt/index.ts` (via rg)
24. `lib/oa/decision/infrastructure/memoryAuthorityResolver.ts`
25. `lib/oa/decision/infrastructure/memoryDecisionStore.ts` (via rg)
26. `.tmp-sfia-review/f3-prod-adapter-wiring/candidate-manifest.txt`
27. `.tmp-sfia-review/f3-prod-adapter-wiring/FREEZE_SHA.txt`
28. `.tmp-sfia-review/f3-prod-adapter-wiring/PHASE-QA-CANDIDATE-FROZEN.md`
29. `.tmp-sfia-review/candidate-sha-before.txt` / `candidate-sha-after.txt`

Plus architecture artifacts under `.tmp-sfia-review/r-t-a3-2-architecture/`.

---

## Brief executive summary

Architecture study for **R-T-A3-2 Durable Cross-Store Atomicity** is complete. Current cross-store state, write sequences/gaps, hard invariants (**INV-01+**), and full failure/crash matrix (**FC-01..FC-20**) are INLINE below. Options A–D compared; **RECOMMENDATION — OPTION A** prepared but **NOT DECIDED**. R-T-A3-1 remains ACCEPTED/CLOSED BY MORRIS (repo sync debt deferred). Product persistence NOT_SELECTED; Gate D NOT READY/NOT CONSUMED; Cursor REAL 0. No product mutations; candidate SHA unchanged.

---

## Condensed options comparison

| Option | Summary | Primary stance |
| --- | --- | --- |
| **A** | Bounded Sqlite Authority/Attempt journal frontier; wire Sqlite in composition; durable launch markers; Memory WS + fail-closed restart | **RECOMMENDED** (not decided) |
| **B** | Sqlite journal + explicit outbox/reconcile coordinator | Alternate if A delivery hits pairing wall |
| **C** | Saga / append-only execution ledger | Recommend reject for now (overweight) |
| **D** | Product persistence platform | **SEPARATE MORRIS ARCHITECTURE GATE**; do not select now |

Failure/crash matrix is **FULL** (**FC-01..FC-20**) — see INLINE `failure-crash-matrix.md`.

---

## Recommendation (status)

**RECOMMENDATION — OPTION A** — **NOT DECIDED** (Morris decision gate required).

---

## Morris gate — exact proposed GO wording

```
GO ADOPT R-T-A3-2 ARCHITECTURE OPTION A —
BOUNDED SQLITE AUTHORITY/ATTEMPT DURABILITY FRONTIER —
WIRE SQLITE JOURNAL IN PRODUCTION COMPOSITION —
DURABLE LAUNCH MARKERS BEFORE AGENT —
RESTART FAIL-CLOSED / NO AUTO-RETRY —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
IMPLEMENTATION IN SEPARATE DELIVERY CYCLE
```

---

## Exact verdict

```
R-T-A3-2 ARCHITECTURE STUDY COMPLETE —
CURRENT CROSS-STORE STATE MAPPED —
DURABILITY AND TRANSACTION BOUNDARIES IDENTIFIED —
FAILURE / CRASH MATRIX COMPLETE —
HARD INVARIANTS DEFINED —
ARCHITECTURE OPTIONS COMPARED —
RECOMMENDATION PREPARED —
R-T-A3-1 ACCEPTED / CLOSED BY MORRIS —
R-T-A3-1 REPO SYNC DEFERRED IF STILL REQUIRED —
R-T-A3-2 REMAINS OPEN HARD —
DECISION REQUIRED — MORRIS — R-T-A3-2 ARCHITECTURE OPTION —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
GATE D NOT READY / NOT CONSUMED —
NO CURSOR REAL —
PRODUCT CANDIDATE BYTE-IDENTICAL —
NO PROJECT GIT WRITE —
HANDOFF UPDATED
```

---

## FINAL REMOTE IDENTITY

Will be filled after publish (FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE — tip/blob recorded in sidecar + Cursor report; pack content frozen at first publish).

---

## INLINE ARTIFACT — current-state-map.md

```markdown
# R-T-A3-2 Architecture Study — PRE-CHECK + CURRENT STATE MAP

**Generated:** 2026-08-12
**Scope:** read-only mapping (no product mutations under `projects/sfia-studio/app/`)
**DEL:** `.../worktrees/f3-real-prerequisites-delivery`
**Freeze manifest:** `.tmp-sfia-review/f3-prod-adapter-wiring/candidate-manifest.txt`

---

## A) Git pre-check

| Check | Expected | Actual | Result |
|---|---|---|---|
| BRANCH | `delivery/sfia-studio-f3-real-prerequisites` | same | OK |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` | same | OK |
| ORIGIN_MAIN | `4b1a058050ae81d56cb6d96b88e8a57380799a86` | same | OK |
| HEAD == ORIGIN_MAIN | yes | yes | OK |
| REMOTE_DELIVERY | ABSENT | `git ls-remote` empty | OK |
| HANDOFF tip | `f5adced6ac2ad0b305ddca90167bec9b8de835ce` | same | OK |
| STAGED | empty | empty | OK |
| Candidate BEFORE | `c7a979dbee3cd57b169f742502cbc1a131778bb0e2758622abe972444ba4670a` | recomputed from freeze manifest path+sha lines | **MATCH=yes** |

**Recompute method:** SHA-256 of newline-joined `path sha256` body lines from latest wire-cycle freeze manifest
(`.tmp-sfia-review/f3-prod-adapter-wiring/candidate-manifest.txt`). Matches `FREEZE_SHA.txt` / `NEW_CANDIDATE_SHA` / `.tmp-sfia-review/candidate-sha-after.txt`.

**Note (non-STOP):** working tree has *unstaged* dirty files under `projects/sfia-studio/app/` (prior F3 wiring). Staging area is empty. This study did not mutate product sources.

### Verdict: **PRECHECK OK** — proceed with architecture study

```
BEFORE=c7a979dbee3cd57b169f742502cbc1a131778bb0e2758622abe972444ba4670a
MATCH=yes
```

---

## B) Condensed store inventory

| Store / surface | Impl in production wire (`wireOaStack`) | Durability | DB file | Same DB as D1 audit? | Transactions | Cross-store atomic with others? |
|---|---|---|---|---|---|---|
| AuthorityAttemptJournal | **MemoryAuthorityAttemptJournal** | **MEMORY** (Sqlite impl exists, tests/harness only) | Sqlite → `d1.sqlite` via `openD1Db()` | **YES** (when Sqlite used) | Sqlite: per-append `BEGIN IMMEDIATE`; Memory: in-process lock | **NO** spanning txn with contracts/attempts |
| ExecutionContract repo | MemoryExecutionContractRepository + Store | **MEMORY** | none | n/a | In-memory snapshot begin/commit/rollback only | **NO** (notes R-T-A3-2 residual vs Decision) |
| ExecutionAttempt repo | MemoryExecutionAttemptRepository + Store | **MEMORY** | none | n/a | In-memory snapshot txn helper | **NO** (notes vs Contract/Confirmation) |
| Decision / Confirmation | MemoryDecisionStore + MemoryConfirmationRepository | **MEMORY** | none | n/a | In-memory snapshot txn | **NO** |
| AuthorityResolver | MemoryAuthorityResolver | **MEMORY** | none | n/a | none | n/a |
| Cycle / Project (OA) | MemoryCycleStore / MemoryProjectStore | **MEMORY** | none | n/a | Project store has in-memory txn helper | **NO** |
| BoundedAtomicAudit (D1) | BoundedAtomicAuditStore → `d1_atomic_audit` | **LOCAL SQLITE** (pilot harness; product NOT_SELECTED) | `resolveD1SqlitePath()` → default `../.sfia-exec/local-i1/state/d1.sqlite` (or `D1_SQLITE_PATH` / `OPS1_EXEC_ROOT/state/d1.sqlite`) | **self** | per-append `BEGIN IMMEDIATE` | **NO** with OA business stores |
| D1 projects/audit/idempotency | D1ProjectRepository etc. | **LOCAL SQLITE** same file | same `d1.sqlite` | yes | repository uses `BEGIN IMMEDIATE` | separate from OA memory stores |
| Project↔Cycle coordinator | `runProjectCycleAtomicOperation` | **MEMORY UoW** + optional audit port | audit optional → same D1 file | audit only | simulated phases; audit appends independent | **`crossStoreDurable: false`**, **`productionRollbackProven: false`** |

**Bottom line for R-T-A3-2:** no shared SQLite transaction spans journal + contracts + attempts. Runtime composition journals in **MEMORY**; contracts/attempts/decisions/authority are **MEMORY**. Only D1 tables (atomic audit + optional sqlite journal in tests) share one local sqlite file, each with **separate** per-write transactions.

---

## 1. AuthorityAttemptJournalPort + Memory + Sqlite

**Paths**
- Port: `lib/oa/critical-ack/ports/authorityAttemptJournalPort.ts`
- Memory: `lib/oa/critical-ack/infrastructure/memoryAuthorityAttemptJournal.ts`
- Sqlite: `lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts`
- Schema: `lib/d1/db.ts` table `oa_authority_attempt_journal`
- Path resolver: `lib/d1/paths.ts`

**Port claim:** DUR-1 minimal journal via “bounded local D1/node:sqlite (proof harness)”; does **not** SELECT product persistence; `crossStoreDurable` remains false.

**Sqlite DB path:** `openD1Db()` → `resolveD1SqlitePath()`:
1. `D1_SQLITE_PATH` if set
2. else `$OPS1_EXEC_ROOT/state/d1.sqlite`
3. else `<studioRoot>/.sfia-exec/local-i1/state/d1.sqlite` (studioRoot = `cwd/..`)

**Same connection as D1 audit?** **YES** — both default-construct with `openD1Db()` singleton (`DatabaseSync`). Same file + same process singleton.

**Transactions?**
- Sqlite: **YES**, per `append` — `BEGIN IMMEDIATE` / `COMMIT` / `ROLLBACK` around single INSERT.
- Memory: simulated lock (not a DB txn); UNIQUE/idempotency conflict checks in-process.
- Unique partial index: `idx_oa_aaj_critical_ack_fp` on fingerprint where `kind='CRITICAL_ACK_GRANTED'`.

---

## 2. ExecutionContract repository

**MEMORY only** in tree.
- Port: `lib/oa/execution-contract/ports/executionContractRepository.ts`
- Impl: `infrastructure/memoryExecutionContractRepository.ts`
- Store: `infrastructure/memoryExecutionContractStore.ts` (Maps + in-memory begin/commit/rollback)
- Factory: `createInMemoryExecutionContractServices` in `execution-contract/index.ts`

**No SqliteExecutionContractRepository.** Persisted only in process memory. Store header explicitly documents R-T-A3-2 residual: Confirmation lives in Decision store; Confirm then persists contract — **not** one atomic cross-store txn.

---

## 3. ExecutionAttempt repository

**MEMORY only.**
- `infrastructure/memoryExecutionAttemptRepository.ts`
- `infrastructure/memoryExecutionAttemptStore.ts` (Maps + in-memory txn; lost on restart including `result_pending`)
- Factory: `createInMemoryExecutionAttemptServices`

**No sqlite attempt repository.** Cross-store note: Contract (T-A4) + Confirmation (T-A3) writes are sequential with fail-closed compensation — **not** one atomic transaction.

---

## 4. createProductionAcknowledgeCritical + vertical-slice-runtime wiring

**Paths**
- `lib/oa/critical-ack/createProductionAcknowledgeCritical.ts`
- `lib/vertical-slice-runtime/service.ts` → `wireOaStack`

**Findings**
- `createProductionAcknowledgeCritical` **requires** caller-supplied `journal: AuthorityAttemptJournalPort` — “Memory or Sqlite; no product persistence auto-select”.
- Identity production default: `AuthJsGitHubIdentityAdapter` (lazy `@/auth`).
- **`wireOaStack` uses `MemoryAuthorityAttemptJournal`** (line ~134).
- **Confirm / Start / AcknowledgeCritical share the same journal instance:**
  - `criticalAckJournal: authorityAttemptJournal` → Confirm
  - `authorityAttemptJournal` → StartExecution
  - `journal: authorityAttemptJournal` → production AcknowledgeCritical
- Contracts/attempts wired via `createInMemory*` factories (memory stores).

---

## 5. hardBlockerFoundation — R-T-A3-2 fields

**Path:** `lib/platform/t-a7/hardBlockerFoundation.ts`

| Field / claim | Value |
|---|---|
| Reserve `R_T_A3_2` | HARD — “Decision↔LPS/Epistemic and Project↔Cycle durable atomicity” |
| proofAvailable (foundation) | bounded-local-atomic-audit, project-cycle-coordinator-sim, idempotency-keys, authority-attempt-journal-local, reconcile-unknown-disposition-no-attempt-enum |
| proofMissing | **cross-store durable Project↔Cycle transaction**, authorized non-prod rollback drill, production concurrency proof |
| openDependencies | R1, PERSISTENCE_PRODUCT |
| reductionEvidence | includes “honest **crossStoreDurable=false**”, “project↔cycle coordinator with honest **productionRollbackProven=false**” |
| closureCriteriaUnmet | includes “R-T-A3-2 durable cross-store atomicity” |
| `persistenceProduct` | **NOT_SELECTED** |
| `openHard` / `deliveryReady` | true / false |

---

## 6. Project/cycle coordinator durability claims

**Path:** `lib/platform/t-a7/projectCycleAtomicCoordinator.ts`

- In-memory unit of work + optional injected `ProjectCycleAuditPort`.
- Result always: `crossStoreDurable: false`, `productionRollbackProven: false`.
- `persistence`: `BOUNDED_LOCAL_AUDIT_OPTIONAL` if auditStore set, else `NONE_IN_MEMORY_ONLY`.
- Idempotency cache is process-local `Map` (`completedKeys`).
- Audit appends (when present) are **independent** D1 writes — do not wrap Project+Cycle business mutations in one sqlite txn (business state is simulated in memory).

---

## 7. boundedAtomicAudit / D1 sqlite

**Paths:** `lib/d1/boundedAtomicAudit.ts`, `lib/d1/db.ts`, `lib/d1/paths.ts`

- Table: `d1_atomic_audit` in same SCHEMA_SQL as projects/audit/idempotency/**and** `oa_authority_attempt_journal`.
- Path: see §1.
- Transactions: **YES**, per `append` — `BEGIN IMMEDIATE` / COMMIT / ROLLBACK.
- Label: bounded local atomic audit; **NOT** product persistence SELECTED; Git remains method truth.

---

## 8. Decision services / AuthorityResolver

**MEMORY.**
- `createInMemoryDecisionServices` + `MemoryDecisionStore` / `MemoryConfirmationRepository`
- `MemoryAuthorityResolver` — evidence Map in process; wired in `wireOaStack` as sole authz boundary for ack/confirm/start.
- hardBlocker `R_T_A3_3`: “Authority registry (in-memory)” — proofMissing durable authority registry.

---

## 9. startExecution DUR-4 / UNKNOWN / REVIEW_REQUIRED

**Path:** `lib/oa/execution-attempt/application/startExecution.ts`

- Optional `authorityAttemptJournal?: AuthorityAttemptJournalPort`.
- If attempt already `running` and journal present:
  - `latestDispositionForAttempt` → if **`UNKNOWN` or `REVIEW_REQUIRED`** → fail `ATTEMPT_STATE_CONFLICT` with `reconcile_${disposition}_no_auto_resume` (**DUR-4 no auto-resume**).
  - else replay success without second adapter launch.
- Dispositions written by `reconcileLaunchedAttemptOnRestart.ts` (`RECONCILE_DISPOSITION`; UNKNOWN then also REVIEW_REQUIRED journaled). Attempt status enum unchanged.

---

## 10. confirmExecutionContract critical ack gate

**Path:** `lib/oa/execution-contract/application/confirmExecutionContract.ts`

- Optional `criticalAckJournal?: AuthorityAttemptJournalPort`.
- If linked cycle `profile === "Critical"` and `status === "proposed"`:
  - requires `hasCriticalAckGranted(contractFingerprint)` on journal
  - else fail `CRITICAL_NOT_ACKNOWLEDGED` / `critical_proposed_no_public_ack`.
- After successful confirm: best-effort append `CRITICAL_ACK_CONSUMED` (errors swallowed; confirm already succeeded).
- Residual R-T-A3-2 documented on consume-compensation failure path (confirmed row may remain with unconsumed confirmation).

---

## 11. Idempotency keys across ack / contract / attempt

| Surface | Key location | Behavior |
|---|---|---|
| Critical Ack | command `idempotencyKey` (≥8); journal field; also `crit-ack:${key}` when requesting confirmation | Replay same key+fingerprint+confirmationId → idempotent success; mismatch → ANTI_REPLAY; fingerprint unique for CRITICAL_ACK_GRANTED |
| ExecutionContract | contract `idempotencyKey` → Memory store `idempotencyIndex` | Build: reuse or `CONTRACT_IDEMPOTENCY_CONFLICT` via fingerprint |
| ExecutionAttempt | attempt `idempotencyKey` → Memory store index | Select: reuse or conflict; Retry requires **new** key |
| Decision/Confirmation | MemoryDecisionStore `idempotencyIndex` | Separate namespace from contract/attempt |
| Project↔Cycle coordinator | input `idempotencyKey` → process Map | Returns prior result with `conflict: true` |
| D1 commands | `d1_idempotency_keys` table | Separate D1 command idempotency |

**Not shared across stores:** keys are per-store Maps/tables; no single cross-store idempotency registry. Ack journal keys are independent of contract/attempt Maps (though ack may prefix confirmation request key).

---

## 12. Shared SQLite instance / spanning transaction?

| Question | Answer |
|---|---|
| Shared sqlite instance for journal + D1 audit? | **YES** (same `openD1Db()` singleton / `d1.sqlite`) when Sqlite journal used |
| Does production `wireOaStack` use that sqlite journal? | **NO** — uses **MemoryAuthorityAttemptJournal** |
| Spanning transaction journal + contracts + attempts? | **NO** — contracts/attempts are memory; journal appends are isolated txns; confirm/start/ack coordinate via sequential port calls |
| Spanning Project↔Cycle durable txn? | **NO** — coordinator claims `crossStoreDurable: false` |

---

## Wiring sketch (runtime)

```
wireOaStack
  ├─ MemoryAuthorityResolver
  ├─ createInMemoryDecisionServices
  ├─ MemoryAuthorityAttemptJournal  ←── shared instance
  ├─ createInMemoryExecutionContractServices(criticalAckJournal)
  ├─ createInMemoryExecutionAttemptServices(authorityAttemptJournal)
  └─ createProductionAcknowledgeCritical(journal) → AuthJsGitHubIdentityAdapter
```

---

## Source files read

1. `lib/oa/critical-ack/ports/authorityAttemptJournalPort.ts`
2. `lib/oa/critical-ack/infrastructure/memoryAuthorityAttemptJournal.ts`
3. `lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts`
4. `lib/oa/critical-ack/createProductionAcknowledgeCritical.ts`
5. `lib/oa/critical-ack/application/acknowledgeCritical.ts`
6. `lib/oa/critical-ack/domain/types.ts` (via rg excerpts)
7. `lib/oa/critical-ack/domain/invariants.ts` (via rg)
8. `lib/oa/critical-ack/application/reconcileLaunchedAttemptOnRestart.ts` (via rg)
9. `lib/oa/critical-ack/index.ts` (via rg)
10. `lib/d1/db.ts`
11. `lib/d1/paths.ts`
12. `lib/d1/boundedAtomicAudit.ts`
13. `lib/vertical-slice-runtime/service.ts`
14. `lib/platform/t-a7/hardBlockerFoundation.ts`
15. `lib/platform/t-a7/projectCycleAtomicCoordinator.ts`
16. `lib/oa/execution-contract/application/confirmExecutionContract.ts`
17. `lib/oa/execution-contract/infrastructure/memoryExecutionContractStore.ts`
18. `lib/oa/execution-contract/infrastructure/memoryExecutionContractRepository.ts` (via rg)
19. `lib/oa/execution-contract/index.ts` (via rg)
20. `lib/oa/execution-attempt/application/startExecution.ts`
21. `lib/oa/execution-attempt/infrastructure/memoryExecutionAttemptStore.ts`
22. `lib/oa/execution-attempt/infrastructure/memoryExecutionAttemptRepository.ts` (via rg)
23. `lib/oa/execution-attempt/index.ts` (via rg)
24. `lib/oa/decision/infrastructure/memoryAuthorityResolver.ts`
25. `lib/oa/decision/infrastructure/memoryDecisionStore.ts` (via rg)
26. `.tmp-sfia-review/f3-prod-adapter-wiring/candidate-manifest.txt`
27. `.tmp-sfia-review/f3-prod-adapter-wiring/FREEZE_SHA.txt`
28. `.tmp-sfia-review/f3-prod-adapter-wiring/PHASE-QA-CANDIDATE-FROZEN.md`
29. `.tmp-sfia-review/candidate-sha-before.txt` / `candidate-sha-after.txt`

(Additional rg probes over decision/contract/attempt factories and D1 repository BEGIN usage for inventory completeness.)
```

## INLINE ARTIFACT — write-sequence-and-gaps.md

```markdown
# R-T-A3-2 Architecture Study — Write Sequence & Gaps

**Generated:** 2026-08-12
**Scope:** deep-read only — **no mutations** under `projects/sfia-studio/app/`
**DEL:** `.../worktrees/f3-real-prerequisites-delivery`
**APP:** `$DEL/projects/sfia-studio/app`

Companion: `current-state-map.md` (store inventory / pre-check).

---

## Condensed write sequence (numbered) + crash points

Cross-cutting fact: **no shared transaction** spans Decision confirmation store ↔ ExecutionContract store ↔ ExecutionAttempt store ↔ AuthorityAttemptJournal. Each step below is an independent write (or memory Map mutate).

### A. AcknowledgeCritical (`lib/oa/critical-ack/application/acknowledgeCritical.ts`)

Actual order is **confirmation grant first**, then journal (header comment lists journals but omits that grant precedes them).

1. **Decision `requestConfirmation`** (idempotency key `crit-ack:{ackIdempotencyKey}`).
   **↯ crash:** request may exist; no grant; no journal.
2. **Decision `grantConfirmation`** (confirmation → `granted`).
   **↯ crash:** confirmation **granted** with **no** `CRITICAL_ACK_GRANTED` / `CONFIRMATION_BOUND` (orphaned grant vs journal).
3. **Journal `CRITICAL_ACK_GRANTED`** (`journal.append`).
   **↯ crash:** grant + CRITICAL_ACK_GRANTED; **no** `CONFIRMATION_BOUND`.
4. **Journal `CONFIRMATION_BOUND`** (`journal.append`, payload `boundTo: "CRITICAL_ACK"`).
   **↯ crash:** ack path complete for this use-case (still Memory journal in production wire — lost on process restart).

Never calls StartExecution / never launches Cursor.

### B. ConfirmExecutionContract (`lib/oa/execution-contract/application/confirmExecutionContract.ts`)

Option B (R-T-A3-2 harden): persist confirmed **before** consume.

5. **Gate (read):** if cycle `profile === "Critical"` && `status === "proposed"`, require `criticalAckJournal.hasCriticalAckGranted(fingerprint)`; else fail `CRITICAL_NOT_ACKNOWLEDGED`.
   **↯ crash:** N/A (read-only); fail-closed if journal missing/false.
6. **Persist contract** `status: "confirmed"`, `confirmationRef`, `immutableAfterConfirm`, `version++` (optional in-memory `store.runInTransaction`).
   **↯ crash:** contract **confirmed** while confirmation still **granted** (not consumed).
7. **Decision `consumeConfirmation`** → confirmation `consumed`. On failure: **compensate** via `CancelExecutionContract` if injected.
   **↯ crash / residual:** if consume fails **and** compensate cancel fails → confirmed row may remain with **unconsumed** `confirmationRef` (commented residual R-T-A3-2 OPEN).
8. **Best-effort journal `CRITICAL_ACK_CONSUMED`** (catch swallowed; confirm already succeeded).
   **↯ crash:** confirm success without consume-marker (marker non-authoritative).

### C. StartExecution (`lib/oa/execution-attempt/application/startExecution.ts`)

Attempt is **already** `accepted` from Select (Start never create/launch-then-persist). **No production code path appends `ATTEMPT_CREATED` / `ATTEMPT_LAUNCHED` / `ATTEMPT_TERMINAL`** — those kinds exist in schema/types and are written only in tests (e.g. `durabilityMatrix.test.ts`).

9. **Adapter `launch(attemptId)`** (only adapter call).
   **↯ crash:** adapter may have launched with Attempt still `accepted` → DUR-4 reconcile path (`launchedWithoutTerminalResult` → disposition `UNKNOWN` + `REVIEW_REQUIRED`); **no auto-resume / no auto-retry**.
10. **Persist Attempt `running`** (`attempts.update`, optional attempt-store txn).
    **↯ crash:** Attempt `running`, contract still `confirmed`.
11. **Contract status → `executing`** (`contractStatusWriter.write`). On failure: compensate Attempt → `failed` (no second adapter call).
    **↯ crash:** Attempt `running` + contract `executing`; agent_selection confirmation not yet consumed.
12. **Consume agent_selection Confirmation** (when `human_confirmed_proposal`). On non-`ALREADY_CONSUMED` failure: return error **without** rolling back running/executing (**residual R-T-A3-2**).
    **↯ crash:** running + executing + unconsumed agent confirmation.

**DUR-4 gate on replay:** if Attempt already `running` and journal `latestDispositionForAttempt` is `UNKNOWN` or `REVIEW_REQUIRED` → fail `ATTEMPT_STATE_CONFLICT` / `reconcile_*_no_auto_resume` (no auto-resume). Otherwise idempotent replay returns running without second launch.

### D. Restart helpers (separate from happy-path Start)

13. **`InvalidateActiveAuthorityOnRestart`:** append `ACTIVE_AUTHORITY_INVALIDATED` (`policy: "NO_AUTO_RESUME"`, `requiresReconfirm: true`). Does not clear other stores.
14. **`ReconcileLaunchedAttemptOnRestart`:** append `RECONCILE_DISPOSITION` with `UNKNOWN` (if `launchedWithoutTerminalResult`) else `CLEAR`; if `UNKNOWN`, also append second record disposition `REVIEW_REQUIRED`. **Does not mutate Attempt status enum.** Payload asserts `noAutoResume` / `noAutoRetry`.

---

## 1) acknowledgeCritical.ts — write order

| # | Write | Store |
|---|---|---|
| 1 | `requestConfirmation` | Decision / Confirmation |
| 2 | `grantConfirmation` | Decision / Confirmation |
| 3 | `CRITICAL_ACK_GRANTED` | AuthorityAttemptJournal |
| 4 | `CONFIRMATION_BOUND` | AuthorityAttemptJournal |

**Not** journal-then-grant: grant is **before** both journal kinds.

---

## 2) confirmExecutionContract.ts — criticalAckJournal gate + CONSUMED

- **Gate:** Critical + proposed cycle → `criticalAckJournal?.hasCriticalAckGranted(fp)`; absent journal or false → `CRITICAL_NOT_ACKNOWLEDGED`.
- **CONSUMED write:** after successful consume, optional `criticalAckJournal.append({ kind: "CRITICAL_ACK_CONSUMED", processEpochId: "confirm-path", ... })` best-effort.
- Option B residual documented in file header and compensate branch.

---

## 3) startExecution.ts — create/launch / journal ATTEMPT_* / DUR-4 / no auto-retry

| Claim | Fact |
|---|---|
| Attempt create in Start | **No** — must already be `accepted` (Select created it). |
| Launch | Adapter `launch` only after preconditions; then persist `running`, then contract `executing`, then consume agent confirmation. |
| Journal `ATTEMPT_*` | **Not written by StartExecution** (or any non-test app path found). Schema allows `ATTEMPT_CREATED\|LAUNCHED\|TERMINAL`. |
| DUR-4 UNKNOWN/REVIEW_REQUIRED | Via optional `authorityAttemptJournal.latestDispositionForAttempt` when status already `running` — blocks auto-resume. |
| Auto-retry | None on reconcile dispositions; launch reject leaves contract `confirmed` (Retry possible); indeterminate launch fail fails contract. |

---

## 4) SqliteAuthorityAttemptJournal

- **File:** `lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts`
- **Label:** `PILOT-LOCAL PROOF HARNESS ONLY ≠ PRODUCT DURABLE`
- **DB:** `openD1Db()` → `resolveD1SqlitePath()`:
  1. `D1_SQLITE_PATH` if set
  2. else `$OPS1_EXEC_ROOT/state/d1.sqlite`
  3. else `<cwd/..>/.sfia-exec/local-i1/state/d1.sqlite`
- **Schema:** `lib/d1/db.ts` table `oa_authority_attempt_journal` (kinds incl. CRITICAL_ACK_*, CONFIRMATION_BOUND, ATTEMPT_*, ACTIVE_AUTHORITY_INVALIDATED, RECONCILE_DISPOSITION; dispositions CLEAR/UNKNOWN/REVIEW_REQUIRED; unique partial index on fingerprint for `CRITICAL_ACK_GRANTED`).
- **Txn:** **Yes — BEGIN IMMEDIATE / COMMIT (ROLLBACK on error) per single `append` INSERT.** Not multi-row / cross-store.

---

## 5) MemoryAuthorityAttemptJournal

- **File:** `lib/oa/critical-ack/infrastructure/memoryAuthorityAttemptJournal.ts`
- Comment: *“in-memory journal for unit tests… NOT durable.”*
- Process-local `records[]` + in-process lock; UNIQUE/idempotency checks in memory.
- **Production wire uses this** (see §9).

---

## 6) Memory execution contract / attempt stores — survive restart?

| Store | Survive process restart? |
|---|---|
| `MemoryExecutionContractStore` | **No** (in-memory Maps; “NOT DATABASE SELECTED”) |
| `MemoryExecutionAttemptStore` | **No** — header: *“everything here is lost on process restart, including `result_pending` Attempts”* |
| `MemoryAuthorityAttemptJournal` | **No** |
| Decision/Confirmation memory stores (wired) | **No** |

---

## 7) Project cycle coordinator — `crossStoreDurable=false` evidence

`lib/platform/t-a7/projectCycleAtomicCoordinator.ts`:

- Result type **hardcodes** `readonly crossStoreDurable: false` and `readonly productionRollbackProven: false`.
- Every success/rollback result sets both to `false` (lines ~230–231, ~296).
- Persistence field: `"BOUNDED_LOCAL_AUDIT_OPTIONAL" | "NONE_IN_MEMORY_ONLY"`; `iam: "NOT_SELECTED"`.
- File header: *“productionRollbackProven remains false; not a product API.”*
- UoW is in-memory simulation (+ optional audit port); not a durable Project↔Cycle txn.

---

## 8) hardBlockerFoundation — R-T-A3-2 `proofAvailable` / `proofMissing`

From `evaluateHardFoundation` reserve `R_T_A3_2` (when `foundationPresent`):

**proofAvailable:**
- `bounded-local-atomic-audit`
- `project-cycle-coordinator-sim`
- `idempotency-keys`
- `authority-attempt-journal-local`
- `reconcile-unknown-disposition-no-attempt-enum`

**proofMissing:**
- `cross-store durable Project↔Cycle transaction`
- `authorized non-prod rollback drill`
- `production concurrency proof`

**openDependencies:** `R1`, `PERSISTENCE_PRODUCT`
**closureCriteriaUnmet** includes: `R-T-A3-2 durable cross-store atomicity`
**reductionEvidence** includes honest flags (quoted in §Exact quotes).

---

## 9) `createProductionAcknowledgeCritical` + `wireOaStack` — Memory journal confirmed

`lib/vertical-slice-runtime/service.ts` → `wireOaStack`:

```ts
const authorityAttemptJournal = new MemoryAuthorityAttemptJournal();
// ...
criticalAckJournal: authorityAttemptJournal,  // ConfirmExecutionContract
authorityAttemptJournal,                     // StartExecution
createProductionAcknowledgeCritical({ ..., journal: authorityAttemptJournal, ... })
```

- Identity: Auth.js via `createProductionAcknowledgeCritical` (`AuthJsGitHubIdentityAdapter`).
- Journal: **MemoryAuthorityAttemptJournal** (caller-supplied; factory does not auto-select Sqlite).
- Comment on deps: *“caller supplies Memory or Sqlite; no product persistence auto-select”*.

---

## 10) Invalidate / Reconcile on restart

| Use-case | Behavior |
|---|---|
| `InvalidateActiveAuthorityOnRestart` | Appends `ACTIVE_AUTHORITY_INVALIDATED`; payload `NO_AUTO_RESUME`, `requiresReconfirm: true`. Morris must reconfirm. |
| `ReconcileLaunchedAttemptOnRestart` | Journals disposition only; Attempt status enum **unchanged**. `UNKNOWN` (+ follow-on `REVIEW_REQUIRED`) when `launchedWithoutTerminalResult`; else `CLEAR`. Explicit **no auto-resume / no auto-retry**. |

Neither is auto-invoked from `wireOaStack` / `createRuntimeApplicationService` in the read path — they are application classes exported for callers/tests.

---

## 11) Does any production composition use SqliteAuthorityAttemptJournal?

**No.** Non-test references:

- Class definition + `critical-ack/index.ts` export only.
- Instantiation `new SqliteAuthorityAttemptJournal()` only under `__tests__/oa/critical-ack/sqliteJournalConfirmGate.test.ts`.

Runtime / “production” composition (`wireOaStack`) uses **MemoryAuthorityAttemptJournal** exclusively.

---

## Exact quotes — `crossStoreDurable=false` / `productionRollbackProven=false`

### `crossStoreDurable` remains false

1. **Port** (`authorityAttemptJournalPort.ts`):
   *“Implemented via bounded local D1/node:sqlite (proof harness). Does NOT SELECT product persistence. crossStoreDurable remains false.”*

2. **Sqlite journal** (`sqliteAuthorityAttemptJournal.ts`):
   *“Label: PILOT-LOCAL PROOF HARNESS ONLY ≠ PRODUCT DURABLE. crossStoreDurable remains false; productionRollbackProven remains false. product persistence remains NOT_SELECTED.”*

3. **Hard foundation reductionEvidence** (`hardBlockerFoundation.ts`):
   *“honest crossStoreDurable=false”*

4. **Coordinator type/result** (`projectCycleAtomicCoordinator.ts`): field always `crossStoreDurable: false` (no separate prose sentence beyond in-memory UoW + optional audit / not product API).

5. **Contract store residual** (`memoryExecutionContractStore.ts`):
   *“ConfirmExecutionContract consumes via DecisionServices public API then persists the contract here — not a single atomic cross-store txn.”*

6. **Attempt store residual** (`memoryExecutionAttemptStore.ts`):
   *“Writes are sequential with documented fail-closed compensation — not one atomic transaction.”*

### `productionRollbackProven` remains false

1. **Coordinator header** (`projectCycleAtomicCoordinator.ts`):
   *“productionRollbackProven remains false; not a product API.”*

2. **Simulated atomic op** (`simulatedAtomicOperation.ts`):
   *“R1 simulated atomic operation (in-memory only). … No persistence, migration, or real delivery.”* — result type/`productionRollbackProven: false` always; `persistence: "NONE_IN_MEMORY_ONLY"`.

3. **Hard foundation reductionEvidence**:
   *“project↔cycle coordinator with honest productionRollbackProven=false”*

4. **Sqlite journal** (same as above): *“productionRollbackProven remains false”*

5. **proofMissing (R-T-A3-2):** includes *“authorized non-prod rollback drill”* — i.e. rollback not production-proven.

---

## Gap summary (R-T-A3-2)

| Gap | Evidence |
|---|---|
| No durable cross-store atomicity | Memory OA stores + sequential Option B / Start sequences; coordinator `crossStoreDurable: false` |
| Production journal not durable | `wireOaStack` → Memory journal; Sqlite harness unused in composition |
| `ATTEMPT_*` journal kinds unused in app paths | Schema/tests only |
| Ack grant before journal | Crash window: granted confirmation without journal |
| Confirm residual | consume + compensate both fail → confirmed + unconsumed ref |
| Start residual | running+executing without agent confirmation consume; post-launch crash → UNKNOWN/REVIEW_REQUIRED, no auto-retry |
| HARD remains open | `proofMissing` + `closureCriteriaUnmet` for R-T-A3-2 |

---

## Source index (absolute under APP)

- `lib/oa/critical-ack/application/acknowledgeCritical.ts`
- `lib/oa/execution-contract/application/confirmExecutionContract.ts`
- `lib/oa/execution-attempt/application/startExecution.ts`
- `lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts`
- `lib/oa/critical-ack/infrastructure/memoryAuthorityAttemptJournal.ts`
- `lib/oa/execution-contract/infrastructure/memoryExecutionContractStore.ts`
- `lib/oa/execution-attempt/infrastructure/memoryExecutionAttemptStore.ts`
- `lib/platform/t-a7/projectCycleAtomicCoordinator.ts`
- `lib/platform/t-a7/simulatedAtomicOperation.ts`
- `lib/platform/t-a7/hardBlockerFoundation.ts`
- `lib/oa/critical-ack/createProductionAcknowledgeCritical.ts`
- `lib/vertical-slice-runtime/service.ts` (`wireOaStack`)
- `lib/oa/critical-ack/application/invalidateActiveAuthorityOnRestart.ts`
- `lib/oa/critical-ack/application/reconcileLaunchedAttemptOnRestart.ts`
- `lib/d1/db.ts`, `lib/d1/paths.ts`
```

## INLINE ARTIFACT — invariants.md

```markdown
# R-T-A3-2 Architecture Study — HARD Invariants

**Generated:** 2026-08-12
**Scope:** architecture-only — refined from GO §D with repo facts from `current-state-map.md` / `write-sequence-and-gaps.md`
**Status:** REQUIRED for any future first Cursor REAL borné; **not** satisfied by production wire today

---

## Source of truth vs working set (cross-cutting)

| Surface | Production wire today | Durable? | Treat as launch/authority SoT? |
|---|---|---|---|
| `MemoryAuthorityAttemptJournal` | **wired in `wireOaStack`** | **NO** | **FORBIDDEN** (INV-11) |
| `SqliteAuthorityAttemptJournal` | exists; tests/harness only | local sqlite (`d1.sqlite`) | candidate SoT under OPTION A (not adopted) |
| Memory ExecutionContract / Attempt / Decision | wired | **NO** | working set only; lost on restart |
| BoundedAtomicAudit / D1 tables | local sqlite | local only; product NOT_SELECTED | audit/evidence — not attempt launch authority |

---

## INV-01 — Morris confirmation must not become silently ambiguous after crash

**GO:** Une confirmation Morris acceptée ne doit pas produire un état silencieusement ambigu après crash.

**Repo refinement:**
- Today AcknowledgeCritical **grants confirmation before** journaling `CRITICAL_ACK_GRANTED` / `CONFIRMATION_BOUND`.
- Crash between grant and journal → Decision may show `granted` while journal lacks ack (worse under Memory journal: both lost on restart, but grant/journal divergence exists in-process).
- Confirm path: confirmed contract may remain with unconsumed confirmation if consume + compensate both fail (documented residual).
- Confirm `CRITICAL_ACK_CONSUMED` is **best-effort** (errors swallowed) — must never be treated as authoritative ack truth.

**Required:** After any crash/restart, ack/confirmation disposition is either clearly durable-granted, clearly absent, or explicitly `UNKNOWN`/`REVIEW_REQUIRED` — never silent READY.

---

## INV-02 — No launch without durable authoritative Attempt marker

**GO:** Une exécution ne doit jamais être lancée sans marqueur durable autoritatif permettant d’identifier l’ExecutionAttempt exact.

**Repo refinement:**
- StartExecution calls adapter `launch(attemptId)` **before** persisting Attempt `running`.
- **No production path writes `ATTEMPT_CREATED` / `ATTEMPT_LAUNCHED` / `ATTEMPT_TERMINAL`** (schema/tests only — INV-12).
- Memory Attempt store does not survive restart.

**Required:** Durable journal (or equivalent) must record exact `attemptId` (and linked contract identity) **before** agent launch is authorized; post-OPTION-A: `ATTEMPT_CREATED` (pre-launch) then launch then `ATTEMPT_LAUNCHED`.

---

## INV-03 — Exact ExecutionContract identity in durable Attempt chain

**GO:** Le couple ExecutionContract / version / fingerprint exact doit être conservé dans la chaîne durable de l’Attempt.

**Repo refinement:**
- Contract fingerprint gates Critical Confirm via `hasCriticalAckGranted(contractFingerprint)`.
- Attempt links to contract in memory stores only today.
- Journal records carry fingerprint for ack kinds; Attempt kinds unused in app.

**Required:** Durable launch chain must retain contract id + version + fingerprint binding for the Attempt that is launched — no orphan launch without recoverable contract identity.

---

## INV-04 — Restart must never auto-resume invalidated process-local authority

**GO:** Un restart ne doit jamais reprendre automatiquement une autorité process-local devenue invalide.

**Repo refinement:**
- `InvalidateActiveAuthorityOnRestart` journals `ACTIVE_AUTHORITY_INVALIDATED` with `NO_AUTO_RESUME` / `requiresReconfirm: true`.
- Memory AuthorityResolver / Decision stores are empty after restart.
- Helpers are **not** auto-invoked from `wireOaStack` today — callers must run them.

**Required:** Post-restart: no silent reuse of prior in-process authority; Morris reconfirm required when authority was active.

---

## INV-05 — No auto-retry

**GO:** Aucun auto-retry.

**Repo refinement:**
- DUR-4: `UNKNOWN` / `REVIEW_REQUIRED` → `ATTEMPT_STATE_CONFLICT` / `reconcile_*_no_auto_resume`.
- Reconcile payloads assert `noAutoResume` / `noAutoRetry`.
- Retry doctrine: explicit Retry with **new** idempotency key creates new Attempt.

**Required:** No scheduler, restart hook, or Start replay may re-launch after indeterminate/unknown outcomes.

---

## INV-06 — Explicit retry creates a new Attempt

**GO:** Un retry demandé explicitement crée un nouvel Attempt selon la doctrine existante.

**Repo refinement:** Attempt store: Retry requires new idempotency key; Select/reuse rules otherwise.

**Required:** Preserve doctrine — never mutate a prior Attempt into a second launch under the same identity after UNKNOWN.

---

## INV-07 — Post-launch unknown result → UNKNOWN / REVIEW_REQUIRED; never invented SUCCESS

**GO:** Crash après lancement lorsque le résultat est inconnu : UNKNOWN / REVIEW_REQUIRED et jamais SUCCESS inventé.

**Repo refinement:**
- `ReconcileLaunchedAttemptOnRestart` with `launchedWithoutTerminalResult` → `UNKNOWN` then `REVIEW_REQUIRED`.
- Does **not** mutate Attempt status enum.
- Evidence/ReviewBundle persistence is outside this journal frontier today.

**Required:** Indeterminate agent outcomes map to UNKNOWN/REVIEW_REQUIRED only; never SUCCESS/validation invention (aligns D09).

---

## INV-08 — Idempotency / confirmationId must not allow double launch of the same critical act

**GO:** Une idempotency key ou confirmationId ne doit pas permettre deux lancements indépendants du même acte critique.

**Repo refinement:**
- Ack: same key+fingerprint+confirmationId → idempotent success; mismatch → ANTI_REPLAY; unique partial index on fingerprint for `CRITICAL_ACK_GRANTED` (Sqlite).
- Start: if already `running` and disposition CLEAR → replay without second launch; if UNKNOWN/REVIEW_REQUIRED → fail closed.
- Keys are **per-store** — not a shared cross-store registry.

**Required:** Durable launch marker + Start gate must make double adapter launch impossible for the same critical act.

---

## INV-09 — Authentication and authorization remain distinct

**GO:** L’authentification et l’autorisation restent distinctes.

**Repo refinement:**
- Identity: `AuthJsGitHubIdentityAdapter` via `createProductionAcknowledgeCritical`.
- Authz: `MemoryAuthorityResolver` as sole ack/confirm/start boundary in `wireOaStack`.
- R-T-A3-3 still OPEN for durable authority registry (out of this cycle’s close).

**Required:** Do not collapse Auth.js identity into authority grant; do not treat identity session as durable execution authority.

---

## INV-10 — Partial write / second-store failure must not yield READY when incoherent

**GO:** La perte d’un store ou l’échec d’une seconde écriture ne doit pas créer un état considéré READY alors qu’il est incohérent.

**Repo refinement:**
- No spanning txn across Decision ↔ Contract ↔ Attempt ↔ Journal.
- Confirm: Option B persist-before-consume; residual if compensate fails.
- Start: consume agent confirmation failure can leave running+executing with unconsumed confirmation.
- Coordinator: `crossStoreDurable: false`.

**Required:** Fail-closed / UNKNOWN / REVIEW_REQUIRED / explicit residual — never READY/SUCCESS for divergent pairs.

---

## INV-11 — Memory journal must never be treated as durable launch/authority SoT

**Added from repo fact:** Production `wireOaStack` uses `MemoryAuthorityAttemptJournal`. Comments state NOT durable. DUR-1 Sqlite exists but is unwired.

**Required:** Any claim of durable ack/launch authority requires Sqlite (or stronger) journal in the **actual** composition path — not Memory, not “impl exists in tree.”

---

## INV-12 — ATTEMPT_* journal kinds are not written by Start today; must be before agent if adopted

**Added:** Schema allows `ATTEMPT_CREATED|LAUNCHED|TERMINAL`; only tests write them. Start launches without durable attempt markers.

**Required (OPTION A):** Append `ATTEMPT_CREATED` (and binding) before adapter launch; `ATTEMPT_LAUNCHED` after successful launch acknowledgment; terminal kinds when result known. Until then, launch authority is **not** journal-complete.

---

## INV-13 — Confirm `CRITICAL_ACK_CONSUMED` is best-effort; not authoritative

**Added:** Confirm appends CONSUMED with swallowed errors after success.

**Required:** Gate and recovery must key off durable `CRITICAL_ACK_GRANTED` / confirmation state / contract status — never require CONSUMED for correctness. CONSUMED is observability/audit hygiene only.

---

## INV-14 — Product persistence remains NOT_SELECTED; local sqlite ≠ product platform

**Added:** Ports/Sqlite journal/coordinator/hardBlocker all label pilot-local / NOT_SELECTED / `crossStoreDurable=false`.

**Required:** Architecture options must not silently SELECT product persistence. OPTION D requires separate Morris gate.

---

## INV-15 — Project↔Cycle durable atomicity remains residual unless separately closed

**Added:** hardBlocker `proofMissing` includes cross-store durable Project↔Cycle txn and rollback drill. Coordinator hardcodes false flags.

**Required:** OPTION A must **not** claim full R-T-A3-2 Project↔Cycle closure. Broader label may stay OPEN HARD or defer to a sub-gate after pilot-bounded frontier.

---

## Mapping to D07 / D08 / D09

| Doctrine | Invariants |
|---|---|
| D07 restart fail-closed | INV-04, INV-07, INV-10, INV-11 |
| D08 no auto-retry | INV-05, INV-06 |
| D09 success ≠ validation | INV-07, INV-10 |

---

## Honesty vs production today

| Invariant | Satisfied in production wire today? |
|---|---|
| INV-01 | **Partial / NO** (grant-before-journal; Memory journal) |
| INV-02 | **NO** (launch before running; no ATTEMPT_* app writes; Memory) |
| INV-03 | **Partial** (in-memory only) |
| INV-04 | **Partial** (helpers exist; not wired auto; Memory authority) |
| INV-05 | **YES** in Start/reconcile logic **if** journal dispositions present — **weak** under Memory (lost on restart) |
| INV-06 | **YES** (doctrine in Attempt store) |
| INV-07 | **Partial** (reconcile exists; Memory journal; not auto-invoked) |
| INV-08 | **Partial** (in-process idempotence; no durable double-launch barrier across restart) |
| INV-09 | **YES** structurally |
| INV-10 | **NO** as READY-safety across stores |
| INV-11 | **VIOLATED** if Memory treated as durable (composition honesty gap) |
| INV-12 | **NO** (kinds unused in app) |
| INV-13 | **YES** as documentation of non-authority |
| INV-14 | **YES** (NOT_SELECTED held) |
| INV-15 | **YES** as residual honesty |
```

## INLINE ARTIFACT — failure-crash-matrix.md

```markdown
# R-T-A3-2 Architecture Study — Failure / Crash Matrix

**Generated:** 2026-08-12
**Scope:** GO §E (16 scenarios) + critical extras grounded in real write sequence
**Composition baseline:** production `wireOaStack` = Memory journal + Memory contract/attempt/decision
**Sqlite note:** where “after restart” differs if OPTION A Sqlite journal were wired, called out explicitly

Columns: id | before | ops | divergent state | after restart | allowed decision | forbidden | recovery | Morris needed? | QA proof needed

---

## GO §E — 16 required scenarios

### FC-01 — Crash before Critical Ack write

| Field | Content |
|---|---|
| **id** | FC-01 |
| **before** | Morris authenticated; Critical proposed contract; no grant; no journal ack |
| **ops** | Ack path not yet past request/grant; process dies before Decision grant and before journal |
| **divergent state** | None or orphaned confirmation **request** only (if crash after requestConfirmation) |
| **after restart** | Memory Decision/Journal empty. Sqlite (if any prior): unchanged. No CRITICAL_ACK_GRANTED |
| **allowed decision** | Fail-closed Confirm (`CRITICAL_NOT_ACKNOWLEDGED`); re-run Ack from clean state |
| **forbidden** | Treat as acknowledged; Confirm Critical; Start/launch |
| **recovery** | Re-issue AcknowledgeCritical (new or idempotent key per doctrine) |
| **Morris needed?** | Yes — must re-ack if intent still holds |
| **QA proof needed** | Kill before grant; assert Confirm blocked; no journal GRANTED |

### FC-02 — Crash during journal write

| Field | Content |
|---|---|
| **id** | FC-02 |
| **before** | Confirmation **granted**; journal append of CRITICAL_ACK_GRANTED in flight |
| **ops** | AcknowledgeCritical after grantConfirmation; crash mid-`journal.append` |
| **divergent state** | **Grant without GRANTED** (Memory or Sqlite incomplete txn → rollback of that INSERT; grant still in Decision memory) |
| **after restart** | Memory: both gone. Sqlite OPTION A: grant gone (memory Decision lost) but if grant were durable elsewhere would show orphan — today Decision is memory so restart clears both |
| **allowed decision** | UNKNOWN/ambiguous in-process until restart; after restart treat as **not acked** |
| **forbidden** | Silent Confirm; invent GRANTED |
| **recovery** | Re-ack; Sqlite UNIQUE fingerprint prevents double GRANTED if partial survived |
| **Morris needed?** | Yes if still intending Critical confirm |
| **QA proof needed** | Crash injection between grant and journal commit; Confirm gate false |

### FC-03 — Journal written but contract/state write not done

| Field | Content |
|---|---|
| **id** | FC-03 |
| **before** | CRITICAL_ACK_GRANTED (+ maybe CONFIRMATION_BOUND); contract still `proposed` |
| **ops** | Ack complete; Confirm not started or Confirm crashed before persist confirmed |
| **divergent state** | Durable ack (if Sqlite) without confirmed contract — **expected** pre-confirm |
| **after restart** | Memory: ack lost → Confirm blocked. Sqlite A: `hasCriticalAckGranted` true; contract memory lost → no confirmed row |
| **allowed decision** | Confirm when contract rehydrated/rebuilt; or hold REVIEW if contract identity missing |
| **forbidden** | Auto-Start; treat ack alone as executing |
| **recovery** | Rebuild/reload contract working set; Confirm using durable ack gate |
| **Morris needed?** | Maybe — if contract working set must be re-established under policy |
| **QA proof needed** | Ack then kill before Confirm persist; assert gate true only with durable journal + contract present |

### FC-04 — Contract/state written but Attempt not created

| Field | Content |
|---|---|
| **id** | FC-04 |
| **before** | Contract `confirmed`; Attempt not yet Select/created (`accepted`) |
| **ops** | Confirm succeeded; crash before Select creates Attempt |
| **divergent state** | Confirmed contract without Attempt (normal gap) |
| **after restart** | Memory: contract lost. No durable contract store today |
| **allowed decision** | Re-build contract path / re-confirm per policy; no launch |
| **forbidden** | Launch without Attempt identity |
| **recovery** | Recreate contract+attempt working set; durable ack may still gate Critical |
| **Morris needed?** | Often yes (reconfirm / re-drive) |
| **QA proof needed** | Confirm then kill before Select; no adapter launch |

### FC-05 — Attempt created but agent not launched

| Field | Content |
|---|---|
| **id** | FC-05 |
| **before** | Attempt `accepted`; contract `confirmed` |
| **ops** | Select done; Start not called or Start crashed **before** `adapter.launch` |
| **divergent state** | Attempt accepted, never launched (today no ATTEMPT_CREATED journal) |
| **after restart** | Memory Attempt gone. OPTION A target: ATTEMPT_CREATED durable without LAUNCHED |
| **allowed decision** | Start only if preconditions + durable markers allow; else REVIEW |
| **forbidden** | Assume launched; auto-resume |
| **recovery** | Explicit Start; if ATTEMPT_CREATED without LAUNCHED → operator/Morris decision, no auto-launch |
| **Morris needed?** | If UNKNOWN/REVIEW after restart with partial markers |
| **QA proof needed** | Crash before launch; assert no agent; ATTEMPT_CREATED-only (post-A) blocks auto |

### FC-06 — Agent launched but launch state not confirmed

| Field | Content |
|---|---|
| **id** | FC-06 |
| **before** | Attempt `accepted` |
| **ops** | `adapter.launch` returns success path incomplete; Attempt not yet `running`; no ATTEMPT_LAUNCHED |
| **divergent state** | **External agent may be running** while Attempt still `accepted` / memory lost |
| **after restart** | Memory empty; external agent possibly live → classic DUR-4 `launchedWithoutTerminalResult` |
| **allowed decision** | Reconcile → UNKNOWN + REVIEW_REQUIRED; block Start resume |
| **forbidden** | Auto-resume; SUCCESS; second launch of same act |
| **recovery** | `ReconcileLaunchedAttemptOnRestart`; Morris review; explicit new Attempt only via Retry doctrine |
| **Morris needed?** | **Yes** |
| **QA proof needed** | Launch then kill before persist running; restart; assert UNKNOWN/REVIEW; no second launch |

### FC-07 — Crash during launch

| Field | Content |
|---|---|
| **id** | FC-07 |
| **before** | Start preconditions met |
| **ops** | Crash inside / during `adapter.launch` (timeout, kill, indeterminate error) |
| **divergent state** | Indeterminate: agent may or may not have started |
| **after restart** | Same as FC-06 if launch side-effect possible |
| **allowed decision** | UNKNOWN / REVIEW_REQUIRED; fail-closed |
| **forbidden** | Assume not launched and retry same Attempt; invent terminal success |
| **recovery** | Reconcile dispositions; Morris; new Attempt on explicit Retry only |
| **Morris needed?** | **Yes** |
| **QA proof needed** | Inject launch hang/kill; assert no auto-retry; disposition journaled (durable under A) |

### FC-08 — Agent executed but Evidence result not persisted

| Field | Content |
|---|---|
| **id** | FC-08 |
| **before** | Attempt `running` / contract `executing`; agent finished externally |
| **ops** | Evidence/ReviewBundle write fails or crash before persist |
| **divergent state** | External completion without local Evidence; journal may lack ATTEMPT_TERMINAL |
| **after restart** | Memory Attempt lost; Evidence missing; must not invent SUCCESS |
| **allowed decision** | UNKNOWN / REVIEW_REQUIRED until Evidence bound; D09 success ≠ validation |
| **forbidden** | Mark SUCCESS from agent side-channel alone; auto-close |
| **recovery** | Manual/Morris Evidence reinjection path (F3 trajectory); reconcile |
| **Morris needed?** | **Yes** for acceptance of outcome |
| **QA proof needed** | Complete agent fixture without Evidence persist; assert non-SUCCESS; REVIEW |

### FC-09 — Full process restart

| Field | Content |
|---|---|
| **id** | FC-09 |
| **before** | Any in-flight ack/confirm/start state in Memory stores |
| **ops** | Process exit/restart |
| **divergent state** | All Memory OA stores + Memory journal cleared; external agents may still run; Sqlite D1 audit/journal (if used) survive |
| **after restart** | Working set empty; production wire has **no** durable journal → **no** dispositions |
| **allowed decision** | Fail-closed; require re-ack / re-drive; if Sqlite A present: read journal markers only |
| **forbidden** | Auto-resume authority; auto-retry Start; treat Memory as recovered |
| **recovery** | Invalidate authority; reconcile from durable journal + operator; OPTION A makes this possible |
| **Morris needed?** | **Yes** for Critical continuation |
| **QA proof needed** | Restart mid-flight; assert Memory loss; with A assert journal survives and gates hold |

### FC-10 — First store failure

| Field | Content |
|---|---|
| **id** | FC-10 |
| **before** | Multi-step path (e.g. Confirm: contract persist; or Ack: grant) |
| **ops** | First write throws (Decision grant fail / contract persist fail) |
| **divergent state** | No partial second write if fail-closed correctly |
| **after restart** | Consistent empty / prior durable only |
| **allowed decision** | Return error; no launch |
| **forbidden** | Continue to journal/launch after failed first write |
| **recovery** | Retry whole use-case with idempotency |
| **Morris needed?** | No unless operator chooses to retry Critical |
| **QA proof needed** | Stub first store fail; assert no journal GRANTED / no launch |

### FC-11 — First store OK / second store KO

| Field | Content |
|---|---|
| **id** | FC-11 |
| **before** | Sequential cross-store writes |
| **ops** | Examples: (a) grant OK, journal fail; (b) contract confirmed OK, consume fail; (c) Attempt running OK, contract executing fail (compensate Attempt→failed); (d) running+executing OK, agent confirmation consume fail (**residual**) |
| **divergent state** | Orphan grant; confirmed+unconsumed; compensated failed attempt; or residual running+executing+unconsumed |
| **after restart** | Memory clears residuals; durable journal (A) may show GRANTED without CONSUMED (OK per INV-13) |
| **allowed decision** | Compensate where coded; else REVIEW_REQUIRED / residual explicit; never READY |
| **forbidden** | READY/SUCCESS on divergent pair; silent ignore |
| **recovery** | Documented compensate paths; Morris for residuals that survive policy |
| **Morris needed?** | Yes for uncompensated residuals on Critical |
| **QA proof needed** | Fault-inject second write each pair; assert compensate or REVIEW; no READY |

### FC-12 — SQLite / storage timeout

| Field | Content |
|---|---|
| **id** | FC-12 |
| **before** | Sqlite journal or D1 audit append |
| **ops** | `BEGIN IMMEDIATE` / INSERT times out or locked |
| **divergent state** | Uncommitted INSERT rolled back; prior committed rows intact; Memory sibling state may have moved (grant-before-journal) |
| **after restart** | Last committed journal row is truth for durable frontier |
| **allowed decision** | Fail operation; no launch if marker missing |
| **forbidden** | Proceed as if append succeeded |
| **recovery** | Retry append under idempotency; UNIQUE fingerprint protects double GRANTED |
| **Morris needed?** | Only if Critical window expires / re-ack needed |
| **QA proof needed** | Lock DB / inject timeout on append; assert fail-closed Confirm/Start |

### FC-13 — External agent timeout or error

| Field | Content |
|---|---|
| **id** | FC-13 |
| **before** | Start launching |
| **ops** | Adapter timeout / error; may be determinate fail or indeterminate |
| **divergent state** | Determinate reject → contract may stay confirmed (Retry possible); indeterminate → UNKNOWN path |
| **after restart** | Per FC-06/07 if indeterminate |
| **allowed decision** | Fail closed; Retry = new Attempt; UNKNOWN if indeterminate |
| **forbidden** | Auto-retry same Attempt; SUCCESS |
| **recovery** | Explicit Retry doctrine; Morris if UNKNOWN |
| **Morris needed?** | If UNKNOWN/REVIEW |
| **QA proof needed** | Adapter timeout fixtures for both determinate and indeterminate |

### FC-14 — Retry requested after UNKNOWN

| Field | Content |
|---|---|
| **id** | FC-14 |
| **before** | Disposition UNKNOWN / REVIEW_REQUIRED for attemptId; Attempt may show `running` |
| **ops** | Caller invokes Start again or Retry |
| **divergent state** | Risk of second launch if gate bypassed |
| **after restart** | Durable disposition (A) must still block; Memory loses disposition today |
| **allowed decision** | Start on same Attempt → `ATTEMPT_STATE_CONFLICT` / no_auto_resume; Retry → **new** Attempt + new idempotency key |
| **forbidden** | Auto-retry; resume same Attempt launch |
| **recovery** | Explicit Retry path only after Morris/policy clearance |
| **Morris needed?** | **Yes** before Critical Retry |
| **QA proof needed** | Seed UNKNOWN; assert Start blocked; Retry creates new Attempt; no double adapter call |

### FC-15 — Double request / double-click / network duplicate

| Field | Content |
|---|---|
| **id** | FC-15 |
| **before** | In-flight Ack / Confirm / Start |
| **ops** | Duplicate HTTP/command with same idempotency key |
| **divergent state** | Should collapse to one logical act |
| **after restart** | Memory idempotency Maps lost; Sqlite UNIQUE on CRITICAL_ACK_GRANTED fingerprint remains (A) |
| **allowed decision** | Idempotent replay success; ANTI_REPLAY on mismatched payload; Start replay without second launch when running+CLEAR |
| **forbidden** | Two launches; two GRANTED for same fingerprint |
| **recovery** | Rely on keys + unique indexes + Start running gate |
| **Morris needed?** | No if idempotent; Yes if conflict requires human |
| **QA proof needed** | Parallel duplicate Ack/Start; assert single launch / single GRANTED |

### FC-16 — Corruption or missing expected identity

| Field | Content |
|---|---|
| **id** | FC-16 |
| **before** | Any Critical path needing fingerprint / confirmationId / attemptId / contract version |
| **ops** | Missing, mismatched, or corrupted id in command or store |
| **divergent state** | Broken linkage contract↔attempt↔ack |
| **after restart** | Fail-closed reads |
| **allowed decision** | Reject; REVIEW_REQUIRED; ANTI_REPLAY / conflict errors |
| **forbidden** | Best-effort guess; launch with partial identity |
| **recovery** | Morris re-drive with correct identities; quarantine corrupt rows |
| **Morris needed?** | **Yes** |
| **QA proof needed** | Mutate/omit ids; assert reject; no launch |

---

## Critical extras (repo-grounded)

### FC-17 — Grant before journal (in-process orphan grant)

| Field | Content |
|---|---|
| **id** | FC-17 |
| **before** | Ack mid-flight |
| **ops** | grantConfirmation committed; crash before CRITICAL_ACK_GRANTED |
| **divergent state** | Confirmation `granted` without journal ack (INV-01 window) |
| **after restart** | Memory clears; under A without durable Decision store, restart “heals” by loss — **not** a substitute for fixing order/atomicity |
| **allowed decision** | Confirm must use journal gate (fail); do not trust Decision grant alone for Critical |
| **forbidden** | Confirm on grant without `hasCriticalAckGranted` |
| **recovery** | OPTION A: transactional multi-row or reorder toward journal-authoritative; re-ack |
| **Morris needed?** | Yes to re-ack |
| **QA proof needed** | Explicit crash between grant and GRANTED; Confirm false |

### FC-18 — Confirm CONSUMED best-effort missing

| Field | Content |
|---|---|
| **id** | FC-18 |
| **before** | Contract confirmed; confirmation consumed in Decision |
| **ops** | `CRITICAL_ACK_CONSUMED` append fails (swallowed) |
| **divergent state** | Confirm success without CONSUMED marker |
| **after restart** | Must still treat confirm as succeeded if contract confirmed; CONSUMED absent OK (INV-13) |
| **allowed decision** | Proceed per contract status; optional repair append |
| **forbidden** | Rollback confirm because CONSUMED missing; block Start solely for missing CONSUMED |
| **recovery** | Observability alert; optional reconcile append |
| **Morris needed?** | No |
| **QA proof needed** | Fault CONSUMED append; Confirm still OK; Start not blocked by missing CONSUMED |

### FC-19 — Start residual: running+executing, agent confirmation unconsumed

| Field | Content |
|---|---|
| **id** | FC-19 |
| **before** | Launch + running + executing done |
| **ops** | consume agent_selection confirmation fails (not ALREADY_CONSUMED); error returned without rollback |
| **divergent state** | Documented R-T-A3-2 residual |
| **after restart** | Memory cleared; external agent may still run |
| **allowed decision** | Surface residual; REVIEW; no silent READY |
| **forbidden** | Hide residual; auto-consume; second launch |
| **recovery** | Operator/Morris; reconcile UNKNOWN if launch indeterminate across restart |
| **Morris needed?** | **Yes** on Critical |
| **QA proof needed** | Fault agent confirmation consume; assert residual flags; no second launch |

### FC-20 — Memory journal treated as durable (honesty anti-pattern)

| Field | Content |
|---|---|
| **id** | FC-20 |
| **before** | Production wire Memory journal |
| **ops** | Ops assume DUR-1 satisfied because Sqlite class exists |
| **divergent state** | False confidence; restart loses all dispositions |
| **after restart** | Empty journal; DUR-4 gates inert |
| **allowed decision** | Architecture MUST document Memory ≠ durable (INV-11) |
| **forbidden** | Claim production durability; open Gate D / Cursor REAL on Memory |
| **recovery** | OPTION A wire Sqlite in composition |
| **Morris needed?** | Architecture decision (this gate) |
| **QA proof needed** | Restart proof showing Memory loss vs Sqlite survival |

---

## Matrix summary

| Class | Count | Dominant recovery |
|---|---|---|
| Pre-ack / ack journal | FC-01,02,17 | Re-ack; journal gate |
| Confirm / contract | FC-03,04,18 | Re-drive; INV-13 |
| Attempt / launch | FC-05–07,13,19 | UNKNOWN/REVIEW; no auto-retry |
| Evidence | FC-08 | Morris / reinjection |
| Restart / stores | FC-09–12,20 | Fail-closed; durable journal (A) |
| Idempotence / identity | FC-14–16 | Block / new Attempt / reject |

**Cross-cutting forbidden outcomes:** invented SUCCESS; auto-resume; auto-retry; double launch; READY on divergent stores; treating Memory journal as durable SoT.
```

## INLINE ARTIFACT — options.md

```markdown
# R-T-A3-2 Architecture Study — Options (repo-grounded)

**Generated:** 2026-08-12
**Status:** COMPARISON ONLY — **none adopted** until Morris decision
**Product persistence:** remains **NOT_SELECTED** for A/B/C; D requires separate Morris architecture gate

---

## Shared baseline (all options)

- Production composition today: `MemoryAuthorityAttemptJournal` in `wireOaStack`.
- Sqlite impl + `oa_authority_attempt_journal` schema already on `d1.sqlite` via `openD1Db()`.
- Memory ExecutionContract / ExecutionAttempt / Decision remain process-local unless a future option explicitly persists them (out of A/B default).
- `crossStoreDurable` / `productionRollbackProven` stay false unless an option **proves** otherwise (A does **not** claim Project↔Cycle durable txn).
- Gate D / Cursor REAL out of scope for selection here.

---

## OPTION A — Bounded SQLite Authority/Attempt durability frontier (F3 pilot)

### Intent

Wire existing `SqliteAuthorityAttemptJournal` into production composition (replace Memory in `wireOaStack`). Use existing `oa_authority_attempt_journal` on same `d1.sqlite` as D1. Extend architecture to require **transactional multi-row append** for critical pairs (ack grant markers; `ATTEMPT_CREATED` before agent launch; `ATTEMPT_LAUNCHED`). Journal becomes **durable launch authority source of truth**. Memory ExecutionContract/Attempt remain working set BUT restart recovery driven by journal + UNKNOWN/REVIEW_REQUIRED (**no auto-resume**). Does **NOT** claim Project↔Cycle cross-store durable txn. Product persistence remains **NOT_SELECTED**. Would allow **FURTHER REDUCED pilot-bounded** R-T-A3-2 candidate **AFTER** Delivery+QA — full Project↔Cycle still residual OR separate gate.

### Components touched

- `wireOaStack` / `vertical-slice-runtime/service.ts` (journal construction)
- `SqliteAuthorityAttemptJournal` (+ possible multi-row append API)
- `acknowledgeCritical` / confirm / `startExecution` / reconcile / invalidate (call order + markers)
- Tests: durability matrix, crash injection, restart

### Stores

- **Authoritative durable:** `oa_authority_attempt_journal` (sqlite)
- **Working set (volatile):** Memory contract / attempt / decision / authority resolver
- **Adjacent:** D1 audit tables same file, separate per-write txns

### New infrastructure

- Minimal: composition swap Memory→Sqlite; transactional multi-append helper; Start writes ATTEMPT_* before/after launch; restart recovery entrypoints wired to read journal
- No product persistence platform; no saga engine

### Atomicity guaranteed

- Single-DB multi-row journal appends for defined critical pairs (within sqlite txn)
- Unique fingerprint for CRITICAL_ACK_GRANTED
- Launch forbidden without durable ATTEMPT_CREATED (target)

### Atomicity NOT guaranteed

- Project↔Cycle business stores
- Decision confirmation store ↔ journal (unless explicitly folded into same txn — Decision still Memory)
- Memory contract/attempt ↔ journal spanning (sequential + fail-closed)
- productionRollbackProven drill

### Crash / restart

- Journal survives process restart
- Memory working set lost → fail-closed; dispositions from journal drive UNKNOWN/REVIEW_REQUIRED
- No auto-resume / no auto-retry

### Rollback / compensation / reconcile

- Keep existing Confirm compensate-cancel and Start attempt→failed compensate
- ReconcileLaunchedAttemptOnRestart + InvalidateActiveAuthorityOnRestart become **operative** against durable journal
- Residuals that span Memory Decision still possible until grant/journal pairing improved

### Idempotence / retry

- Journal UNIQUE + existing command idempotency
- Explicit Retry → new Attempt; Start blocked on UNKNOWN/REVIEW_REQUIRED

### Migration

- Schema already present in `lib/d1/db.ts` — no new product migration package expected for table create
- May need careful openD1Db path in runtime (D1_SQLITE_PATH / OPS1_EXEC_ROOT)

### Complexity / debt / testability / observability / security

| Dimension | Assessment |
|---|---|
| Complexity | **Low–medium** — reuses existing class/schema |
| Debt | Project↔Cycle still open; Memory working set; grant-before-journal window unless tightened; AuthorityResolver still Memory (R-T-A3-3) |
| Testability | **High** — sqlite file crash/restart tests already patterned |
| Observability | Journal kinds + dispositions; CONSUMED still best-effort |
| Security | AuthN/AuthZ unchanged; durable ack fingerprint anti-replay stronger across restart |
| Confused-state risk | **Reduced** vs Memory for launch authority; residual Memory contract loss after restart requires honest UNKNOWN |

### Impact flags

| Flag | Impact |
|---|---|
| crossStoreDurable | Remains **false** for Project↔Cycle; pilot may document **bounded journal durable** without flipping coordinator flag |
| productionRollbackProven | Remains **false** |
| D07 / D08 / D09 | **Compatible** if Delivery proves restart fail-closed, no auto-retry, no invented SUCCESS |
| Gate D | Still NOT READY after study; A alone does not consume Gate D |
| Product persistence | **NOT_SELECTED** |

### Verdict on option

**PRIMARY RECOMMENDATION** (see `recommendation.md`) — sufficient for first Cursor REAL borné **if** Delivery+QA prove durable ack, durable pre-launch marker, restart UNKNOWN, no auto-retry, no double launch.

---

## OPTION B — Durable Sqlite journal + coordinator/outbox/reconcile

### Intent

Sqlite journal authoritative. Explicit **outbox/reconcile coordinator** for Confirm/Start/Attempt transitions. Memory stores stay volatile. Heavier than A but clearer recovery semantics if spanning txn too hard.

### Components touched

- All of A, plus new coordinator/outbox module(s)
- Explicit state machine for Confirm/Start transitions
- Workers/reconcile loops (still no auto-launch)

### Stores

- Durable journal (+ outbox table — likely same sqlite file)
- Memory working sets unchanged

### New infrastructure

- Outbox table + poller/reconcile API
- Transition commands with explicit recovery states
- More ops surface (monitoring stuck outbox)

### Atomicity guaranteed / not

- Guaranteed: journal+outbox append atomicity within sqlite
- Not: Memory business stores; Project↔Cycle product txn

### Crash / restart / rollback / compensate / reconcile

- Restart: drain/inspect outbox → UNKNOWN/REVIEW; **no auto-agent**
- Compensation encoded as outbox messages
- Clearer than A for multi-step Confirm/Start, at cost of infra

### Idempotence / retry / migration

- Outbox idempotent consumer keys
- Retry = new Attempt still
- Likely new table(s) in d1 schema (still pilot-local, not product SELECT)

### Complexity / debt / testability / observability / security / confused-state

| Dimension | Assessment |
|---|---|
| Complexity | **Medium–high** |
| Debt | Coordinator semantics; ops runbooks; risk of “almost saga” |
| Testability | Good but more cases |
| Observability | Strong (outbox depth, ages) |
| Security | Same AuthN/AuthZ; must prevent outbox auto-launch |
| Confused-state risk | Lower ambiguity if states explicit; higher misconfig risk |

### Impact flags

| Flag | Impact |
|---|---|
| crossStoreDurable | Still false for Project↔Cycle |
| productionRollbackProven | Still false unless drill added |
| D07/D08/D09 | Compatible if reconcile never auto-launches |
| Gate D | Not consumed |
| Product persistence | NOT_SELECTED |

### Verdict on option

**Viable fallback** if Delivery finds multi-row journal pairing insufficient for Confirm/Start residuals. Prefer A first.

---

## OPTION C — Saga / append-only execution ledger

### Intent

Event ledger + compensation across ack→confirm→attempt→launch→evidence.

### Components / stores / infra

- New append-only ledger store
- Saga orchestrator + compensations
- Likely duplicates/overlaps AuthorityAttemptJournal

### Atomicity

- Event append atomic; cross-store still eventual via compensation — not single ACID business txn

### Crash / restart / rollback / compensate / reconcile

- Full compensation story; heavy
- Restart replays saga — **must** still forbid auto-launch (easy to get wrong)

### Complexity / debt

- **Overweight** for first REAL mono-operator pilot
- High confused-state risk if saga auto-progresses

### Impact flags

- crossStoreDurable: still likely false unless redesigned as product platform
- productionRollbackProven: false without drills
- D07/D08/D09: only if saga hard-stops on UNKNOWN
- Gate D: not consumed
- Product persistence: pressure to SELECT platform — dangerous

### Verdict on option

**RECOMMEND REJECT FOR NOW** unless A/B fail empirically. Documented for completeness.

---

## OPTION D — Product persistence platform

### Intent

Durable repositories for Contract/Attempt/Decision/Authority (+ journal) as product-selected persistence.

### Marking

**SEPARATE MORRIS ARCHITECTURE GATE REQUIRED**
**Do NOT recommend selecting now**

### Why considered

Only if A/B insufficient to keep coherent Critical state across restart for the pilot (e.g. Memory working-set loss unacceptable even with journal markers).

### Impact

| Flag | Impact |
|---|---|
| Product persistence | Would become SELECTED — **out of default** |
| crossStoreDurable | Possibly addressable later — not automatic |
| productionRollbackProven | Still needs explicit drill |
| Gate D | Still separate |
| Complexity / debt | Highest; platform decision |

### Verdict on option

**NOT RECOMMENDED NOW.** Record as escape hatch requiring separate Morris architecture gate — never implicit.

---

## Comparison matrix

| Criterion | A | B | C | D |
|---|---|---|---|---|
| Components | wire + journal + Start markers | A + outbox coordinator | ledger + saga | full durable repos |
| Stores | sqlite journal + Memory WS | journal+outbox + Memory WS | ledger (+ Memory/durable) | product DB |
| New infra | minimal multi-append | outbox/reconcile | saga engine | persistence platform |
| Atomicity guaranteed | journal multi-row pairs | journal+outbox | event append | TBD per design |
| Atomicity not | Project↔Cycle; Memory WS | same | cross-store eventual | none claimed until designed |
| Crash | fail-closed via journal | fail-closed via outbox | compensate | TBD |
| Restart | journal dispositions | outbox drain | saga replay (risky) | rehydrate |
| Rollback | limited / existing | outbox compensate | saga compensate | TBD |
| Compensation | existing + markers | explicit | full | TBD |
| Reconcile | existing helpers durable | first-class | saga | TBD |
| Idempotence | journal UNIQUE + keys | + outbox keys | event ids | TBD |
| Retry | new Attempt only | same | same if correct | same |
| Migration | schema exists | likely new tables | new ledger | large |
| Complexity | low–med | med–high | high | very high |
| Debt | Project↔Cycle residual | ops+coordinator | overweight | platform |
| Testability | high | med–high | hard | hard |
| Observability | journal | journal+outbox | ledger | platform |
| Security | preserves AuthN/Z | must block auto-launch | saga footguns | broad |
| Confused-state risk | reduced vs today | lower if explicit | high if auto | TBD |
| crossStoreDurable impact | stays false (honest) | stays false | stays false unless platform | separate gate |
| productionRollbackProven | stays false | stays false | stays false | stays false without drill |
| D07/D08/D09 | fit | fit if no auto | only if constrained | TBD |
| Gate D impact | none now | none now | none now | none now |
| Product persistence | NOT_SELECTED | NOT_SELECTED | pressure risk | SELECTED iff Morris gate |

---

## Selection note

Cursor/architecture **recommends OPTION A**. Morris must decide. No implementation in this cycle.
```

## INLINE ARTIFACT — recommendation.md

```markdown
# R-T-A3-2 Architecture Study — Recommendation

**Generated:** 2026-08-12
**Status:** **RECOMMENDED — NOT DECIDED**
**Gate:** DECISION REQUIRED — MORRIS — R-T-A3-2 ARCHITECTURE OPTION

---

## RECOMMENDATION — OPTION A

**OPTION A — Bounded SQLite Authority/Attempt durability frontier (F3 pilot)**

Wire `SqliteAuthorityAttemptJournal` in production composition (replace Memory in `wireOaStack`); use existing `oa_authority_attempt_journal` on same `d1.sqlite`; require transactional multi-row append for critical pairs; durable launch markers before agent; restart fail-closed / no auto-retry; Memory contract/attempt remain working set with journal-driven recovery; product persistence remains NOT_SELECTED; Project↔Cycle durable txn remains residual OR separate gate.

---

## Why OPTION A

1. **Reuses existing** `SqliteAuthorityAttemptJournal` + schema already in `d1.sqlite` (DUR-1 harness already coded).
2. **Minimal new surface** vs OPTION B (outbox coordinator) and OPTION C (saga ledger).
3. **Fixes the critical honesty gap:** production wire currently uses **Memory** despite Sqlite journal existing — Memory must not be treated as durable SoT (INV-11).
4. **Sufficient for first Cursor REAL borné IF Delivery proves:**
   - durable ack (`CRITICAL_ACK_GRANTED` survives restart);
   - durable launch marker **before** agent (`ATTEMPT_CREATED`);
   - `ATTEMPT_LAUNCHED` after launch;
   - restart → UNKNOWN / REVIEW_REQUIRED where indeterminate;
   - **no** auto-retry;
   - **no** double launch.
5. **Does NOT silently select product persistence.**
6. **Does NOT close Project↔Cycle atomicity** — remains honest residual OR deferred sub-gate (keeps `crossStoreDurable=false` honest).
7. **Avoids saga overweight** (OPTION C) and premature platform SELECT (OPTION D).

---

## Why not B / C / D now

| Option | Why not primary |
|---|---|
| B | Clearer recovery if multi-row pairing fails — but heavier; adopt only if A Delivery hits a wall |
| C | Overweight for mono-operator pilot; saga auto-progress footguns vs D08 |
| D | SEPARATE MORRIS ARCHITECTURE GATE REQUIRED; only if A/B insufficient |

---

## What OPTION A does NOT solve

- Full **Project↔Cycle** durable transaction (hardBlocker R-T-A3-2 broader label / `proofMissing`)
- **productionRollbackProven** authorized non-prod rollback drill
- Durable **AuthorityResolver** registry (R-T-A3-3)
- Full Memory **contract/attempt rehydrate** — recovery via journal markers + fail-closed, not transparent session resume
- Evidence/ReviewBundle product durability (F3 reinjection path remains separate)
- Gate D readiness / Cursor REAL authorization

---

## Debt accepted under OPTION A

- Working-set volatility (contracts/attempts/decisions still Memory)
- Possible residual grant↔journal ordering unless Delivery tightens pairing into one sqlite txn or equivalent
- Confirm CONSUMED remains best-effort (INV-13)
- Broader R-T-A3-2 may stay OPEN HARD with a **pilot-bounded reduction** rather than full close
- Ops must set/understand `d1.sqlite` path in runtime

## Debt avoided

- Product persistence platform decision
- Saga/ledger rewrite
- Premature outbox subsystem
- False claim that Memory journal is durable

---

## Risks remaining open

- Restart with live external agent and empty Memory working set → Morris REVIEW mandatory
- Operators may misread pilot sqlite as product persistence — documentation must stay loud (NOT_SELECTED)
- Without ATTEMPT_* writes, A is incomplete — Delivery must implement markers, not only swap the class
- Double-launch across crash still requires QA proof, not design assertion alone

---

## Downstream path (not this cycle)

```
Morris GO ADOPT OPTION A
→ Delivery cycle (wire Sqlite + markers + recovery)
→ QA crash/restart proofs
→ present R-T-A3-2 HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED
→ Morris close decision (possibly FURTHER REDUCED / residual Project↔Cycle)
→ HARD readiness
→ Gate D
→ Cursor REAL borné
```

**This cycle stops at recommendation + decision gate.** No implementation. No Gate D. No Cursor REAL.

---

## Status line

```
RECOMMENDATION — OPTION A
STATUS — RECOMMENDED — NOT DECIDED
PRODUCT PERSISTENCE — NOT_SELECTED
R-T-A3-2 — REMAINS OPEN HARD
```
```

## INLINE ARTIFACT — delivery-qa-criteria.md

```markdown
# R-T-A3-2 — Future Delivery + QA Criteria

**Generated:** 2026-08-12
**Purpose:** Criteria for a **future** cycle to present:

```
R-T-A3-2 = HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED
```

**Never** auto-close to `R-T-A3-2 CLOSED`.
**Never** Cursor REAL before Gate D.
**Assumes** Morris first adopts an architecture option (recommended: A).

---

## A) Delivery acceptance criteria (implementation cycle)

### D-01 Composition honesty

- [ ] `wireOaStack` (or successor production composition) constructs **`SqliteAuthorityAttemptJournal`**, not Memory
- [ ] Same journal instance shared by AcknowledgeCritical, Confirm, Start, reconcile helpers
- [ ] Comments/labels still assert **PILOT-LOCAL ≠ PRODUCT DURABLE** and **product persistence NOT_SELECTED**
- [ ] No opportunistic R-T-A3-1 marker sync unless separately authorized

### D-02 Durable ack frontier

- [ ] `CRITICAL_ACK_GRANTED` (+ binding markers as designed) committed in sqlite **before** Critical Confirm can succeed
- [ ] Crash between grant and journal cannot yield Confirm success (gate uses durable `hasCriticalAckGranted`)
- [ ] Fingerprint UNIQUE / anti-replay preserved across process restart
- [ ] `CRITICAL_ACK_CONSUMED` remains best-effort and non-authoritative

### D-03 Durable launch markers before agent

- [ ] `ATTEMPT_CREATED` (with exact attemptId + contract id/version/fingerprint binding) appended **before** `adapter.launch`
- [ ] `ATTEMPT_LAUNCHED` appended only after launch acknowledgment per design
- [ ] Launch **forbidden** if durable pre-launch marker commit fails
- [ ] Exact ExecutionContract identity retained in durable Attempt chain (INV-03)

### D-04 Restart fail-closed (D07)

- [ ] Restart path invokes invalidate/reconcile against **durable** journal (or equivalent entrypoint)
- [ ] Process-local authority not auto-resumed
- [ ] Indeterminate launch → `UNKNOWN` then `REVIEW_REQUIRED` journaled durably
- [ ] No silent READY after partial writes

### D-05 No auto-retry (D08)

- [ ] Start on Attempt with UNKNOWN/REVIEW_REQUIRED → conflict / no_auto_resume
- [ ] No scheduler/outbox consumer calls `adapter.launch` automatically
- [ ] Explicit Retry creates **new** Attempt with **new** idempotency key

### D-06 Idempotence / no double launch

- [ ] Duplicate Ack/Start with same keys do not double-launch
- [ ] Running+CLEAR replays without second adapter call
- [ ] Parallel duplicate stress covered

### D-07 Atomicity / compensation honesty

- [ ] Document which pairs are same-sqlite-txn vs sequential compensate
- [ ] Confirm and Start residuals explicitly surfaced (never READY)
- [ ] **Do not** claim `crossStoreDurable=true` for Project↔Cycle unless separately proven
- [ ] `productionRollbackProven` remains false until authorized drill exists

### D-08 Observability / audit

- [ ] Journal rows inspectable for ack/attempt/reconcile kinds
- [ ] Audit/Evidence path documented relative to journal frontier
- [ ] D09: success ≠ validation — no invented SUCCESS from agent side-channel

### D-09 Re-freeze

- [ ] Candidate re-frozen; new Candidate SHA recorded
- [ ] Product mutation confined to authorized Delivery scope
- [ ] Review pack FULL for Delivery cycle

### D-10 Explicit non-goals

- [ ] No Gate D consumption
- [ ] No Cursor REAL
- [ ] No product persistence SELECT
- [ ] No claiming full Project↔Cycle close unless Morris scoped that

---

## B) QA proof criteria (evidence cycle)

### Q-01 Crash injection

- [ ] Kill between Decision grant and journal GRANTED → Confirm blocked
- [ ] Kill during sqlite append → no partial authoritative row (txn rollback)
- [ ] Kill after ATTEMPT_CREATED before launch → no agent / no auto-launch on restart
- [ ] Kill after launch before running/LAUNCHED → UNKNOWN/REVIEW on restart
- [ ] Kill after Confirm success before CONSUMED → Confirm remains valid (INV-13)

### Q-02 Real process restart

- [ ] Restart mid Critical flow with Sqlite journal file retained
- [ ] Memory working set empty; journal markers still gate behavior
- [ ] Restart with Memory journal control case proves loss (regression guard if Memory ever reintroduced)

### Q-03 Atomicity / compensation demos

- [ ] Second-store failure demos for Confirm and Start pairs
- [ ] Compensate paths demonstrated where coded
- [ ] Uncompensated residual → REVIEW, not READY

### Q-04 Idempotence

- [ ] Duplicate Ack same key+fingerprint
- [ ] Duplicate Start same attempt
- [ ] ANTI_REPLAY on mismatched payloads

### Q-05 No auto-retry / UNKNOWN

- [ ] Seed UNKNOWN/REVIEW_REQUIRED; assert Start blocked
- [ ] Assert no second `adapter.launch` in traces
- [ ] Explicit Retry → new Attempt only

### Q-06 Exact identities

- [ ] Proof logs show exact contract id/version/fingerprint and attemptId in durable markers
- [ ] Missing/corrupt id → reject (FC-16)

### Q-07 No double launch

- [ ] Concurrent Start/Ack stress under Critical profile
- [ ] Adapter mock/recording shows ≤1 launch per Attempt identity

### Q-08 Audit / Evidence

- [ ] Journal + relevant audit rows retained after crash
- [ ] Evidence-missing path does not invent SUCCESS

### Q-09 Automated + runtime

- [ ] Automated tests for durability matrix covering FC-01…FC-16 (+ FC-17…20 as applicable)
- [ ] At least one real runtime restart test on sqlite file (not mocks-only)

### Q-10 Limits known

- [ ] Written residual list: Project↔Cycle, productionRollbackProven, Memory WS, R-T-A3-3
- [ ] Explicit statement: HARD ACCEPTANCE CANDIDATE ≠ CLOSED
- [ ] Explicit: **no Cursor REAL before Gate D**

---

## C) Presentation form (future Morris close gate)

When Delivery+QA evidence is complete, present **only**:

```
R-T-A3-2 HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED
```

Optionally annotate scope:

```
PILOT-BOUNDED SQLITE AUTHORITY/ATTEMPT FRONTIER
PROJECT↔CYCLE DURABLE TXN REMAINS RESIDUAL / SEPARATE GATE
PRODUCT PERSISTENCE NOT_SELECTED
GATE D NOT READY / NOT CONSUMED
CURSOR REAL 0
```

Morris alone may:

- ACCEPT / CLOSE (full or further-reduced), or
- NO-GO / rework, or
- defer Project↔Cycle sub-gate.

**Cursor must never auto-close R-T-A3-2.**
```

## INLINE ARTIFACT — morris-decision-gate.md

```markdown
# R-T-A3-2 — Morris Decision Gate

**Generated:** 2026-08-12
**Cycle:** 6 — Architecture technique
**Gate type:** DECISION REQUIRED — MORRIS — R-T-A3-2 ARCHITECTURE OPTION

---

## Context for Morris

- **R-T-A3-1** = **ACCEPTED / CLOSED BY MORRIS** (human). Repo may still show `HARD ACCEPTANCE CANDIDATE` → **SYNC DEBT** only; product code **not** modified this cycle.
- **R-T-A3-2** = **OPEN HARD**
- Architecture study complete: current state mapped, invariants, failure/crash matrix, options A–D, recommendation **OPTION A**
- **Product persistence** = **NOT_SELECTED**
- **Gate D** = **NOT READY / NOT CONSUMED**
- **Cursor REAL** = **0 / BLOCKED**
- **No implementation** performed; candidate SHA byte-identical

Options summary:

| ID | One-liner |
|---|---|
| **A** | Bounded Sqlite Authority/Attempt journal frontier; wire Sqlite in composition; durable launch markers; Memory WS + fail-closed restart |
| **B** | Sqlite journal + explicit outbox/reconcile coordinator |
| **C** | Saga / append-only execution ledger (recommend reject for now) |
| **D** | Product persistence platform — **SEPARATE MORRIS ARCHITECTURE GATE REQUIRED**; do not select now |

Full comparison: `options.md`. Recommendation rationale: `recommendation.md`.

---

## DECISION REQUIRED — MORRIS — R-T-A3-2 ARCHITECTURE OPTION

Cursor/architecture recommendation: **OPTION A** (not adopted until Morris speaks).

### Proposed GO wording

```
GO ADOPT R-T-A3-2 ARCHITECTURE OPTION A —
BOUNDED SQLITE AUTHORITY/ATTEMPT DURABILITY FRONTIER —
WIRE SQLITE JOURNAL IN PRODUCTION COMPOSITION —
DURABLE LAUNCH MARKERS BEFORE AGENT —
RESTART FAIL-CLOSED / NO AUTO-RETRY —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
IMPLEMENTATION IN SEPARATE DELIVERY CYCLE
```

### Proposed NO-GO wording

```
NO-GO R-T-A3-2 ARCHITECTURE — REWORK REQUIRED —
DO NOT WIRE SQLITE JOURNAL YET —
DO NOT START DELIVERY IMPLEMENTATION —
R-T-A3-2 REMAINS OPEN HARD —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
GATE D NOT READY / NOT CONSUMED —
NO CURSOR REAL
```

### Alternate GO (if Morris prefers B)

```
GO ADOPT R-T-A3-2 ARCHITECTURE OPTION B —
DURABLE SQLITE JOURNAL + OUTBOX/RECONCILE COORDINATOR —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
IMPLEMENTATION IN SEPARATE DELIVERY CYCLE
```

---

## Explicit non-consumptions

Morris GO ADOPT (any option) **does not**:

- close R-T-A3-2 HARD;
- make Gate D READY or CONSUMED;
- authorize Cursor REAL;
- SELECT product persistence;
- flip `crossStoreDurable` / `productionRollbackProven` without Delivery+QA proof;
- authorize project git publish of the candidate.

---

## Required order after decision

```
Architecture R-T-A3-2 (this study) ✅
→ décision Morris (this gate) ⬅ YOU ARE HERE
→ Delivery
→ QA
→ HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED
→ décision Morris de fermeture R-T-A3-2
→ HARD readiness final
→ Gate D
→ Cursor REAL borné
```

---

## Cursor must not

- Consume this gate
- Implement OPTION A/B/C/D in this architecture cycle
- Sync R-T-A3-1 product markers opportunistically
- Declare R-T-A3-2 CLOSED / Gate D READY / Cursor REAL READY
```
