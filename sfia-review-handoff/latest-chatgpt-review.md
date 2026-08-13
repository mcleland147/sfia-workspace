# ChatGPT Review Pack — FULL
# M4 REAL BOUNDARY ARCHITECTURE / DECISION PACK

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-13 23:15:37 +0200 (CEST) |
| **Niveau** | FULL |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | EVOL |
| **CKC** | `method/.../pilots/03-architecture-technique.md` — candidate / experimental / no execution authority |
| **GO Morris** | **GO M4 — CADRAGE / ARCHITECTURE REAL BOUNDARY** (**consommé**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Inspection worktree** | `docs/sfia-studio-m3-post-merge` @ `6bc39d4adfbc8ca4c2f86b45f6ea90fa4f8ab4e8` |
| **origin/main** | `607763d9a1349d6b48633d8763f75ae3c07c84fc` |
| **Handoff previous tip** | `763cc1b45327724f2afc18a16e8d2e841b250e19` |
| **Project mutation** | **NONE** |
| **Cursor REAL** | **NOT AUTHORIZED / NOT ENTERED** |
| **Gate D** | **NOT CONSUMED** |
| **Auth.js / Critical Ack** | **INSPECTED ONLY — NOT PROMOTED** |
| **Recommendation authority** | Cursor recommendation ≠ Morris decision |

### GO limits (respected)

Authorized: local analysis, T-A5/EC/F3/OPS1 read-only, architecture options, delivery trajectory/exit proof design, existing tests read-only, FULL pack, L3 handoff.

Forbidden (not entered): project code/roadmap/doctrine/method writes; Auth/Ack promotion; Gate D consumption; OPS1_CURSOR_REAL; Cursor REAL process; REAL Attempt; project commit/push/PR/merge; branch delete; M5; runtime v3 ADOPTED.

---

## 1. Local Git Truth

| Check | Result |
|-------|--------|
| `git fetch origin` | OK |
| current branch | `docs/sfia-studio-m3-post-merge` |
| HEAD | `6bc39d4adfbc8ca4c2f86b45f6ea90fa4f8ab4e8` |
| origin/main | `607763d9a1349d6b48633d8763f75ae3c07c84fc` (**matches expected**) |
| tracked dirty (this worktree) | empty |
| staged | empty |
| untracked | `.tmp-sfia-review*` only (allowed) |
| remote `delivery/sfia-studio-f3-real-prerequisites` | **ABSENT** |
| remote `sfia/review-handoff` | `763cc1b45327724f2afc18a16e8d2e841b250e19` (**matches expected**) |
| baseline stop | **NO** — main not advanced beyond expected |

Product code analyzed against this worktree (contains M3 ON MAIN lineage; HEAD is docs tip parent of merge #342). Studio OA/T-A5 sources match post-M3 main content.

---

## 2. Local candidate `delivery/sfia-studio-f3-real-prerequisites`

| Item | Value |
|------|-------|
| Accessibility | **ACCESSIBLE** in dedicated worktree |
| Worktree path | `.../worktrees/f3-real-prerequisites-delivery` |
| Branch | `delivery/sfia-studio-f3-real-prerequisites` |
| HEAD (committed tip) | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Tip meaning | Merge PR #333 F3 fixture vertical slice — **ancestor of main** (pre M1/M2/M3) |
| Commits ahead of origin/main | **0** — all Auth/Ack/journal work is **DIRTY/UNTRACKED**, not committed |
| Remote branch | ABSENT |
| Staged | empty |
| Dirty signature (sha256 status porcelain) | `97d82038a2b8d743ba7fb14c3b3b03bd87b46691cf85cc40400c607261ec3fbf` |
| Dirty diff sha256 | `d686a45cb228e0c43cd5c861d04524618fae839e6fd98d07ce1d93ed612a3915` (51197 bytes tracked diff) |
| Immutability during this cycle | **STATUS_UNCHANGED=yes · DIFF_UNCHANGED=yes** (before/after hashes equal) |
| Protection | no reset/checkout/stash/clean/commit performed |

### Product dirty inventory (excluding `.tmp`)

```
 M method/sfia-fast-track/core/sfia-cycle-routing-guide.md
 M method/sfia-fast-track/core/sfia-knowledge-layer.md
 M projects/sfia-studio/README.md
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
 M projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts
 M projects/sfia-studio/app/lib/d1/db.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
 M prompts/templates/sfia-cycle-execution-template.md
?? projects/sfia-studio/app/__tests__/oa/critical-ack/
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/durableLaunchMarkers.test.ts
?? projects/sfia-studio/app/app/api/
?? projects/sfia-studio/app/auth.ts
?? projects/sfia-studio/app/lib/oa/critical-ack/
?? projects/sfia-studio/app/types/

```

### Untracked Auth/Ack/journal files

```
projects/sfia-studio/app/app/api/auth/[...nextauth]/route.ts
projects/sfia-studio/app/auth.ts
projects/sfia-studio/app/lib/oa/critical-ack/application/acknowledgeCritical.ts
projects/sfia-studio/app/lib/oa/critical-ack/application/invalidateActiveAuthorityOnRestart.ts
projects/sfia-studio/app/lib/oa/critical-ack/application/reconcileLaunchedAttemptOnRestart.ts
projects/sfia-studio/app/lib/oa/critical-ack/createProductionAcknowledgeCritical.ts
projects/sfia-studio/app/lib/oa/critical-ack/domain/errors.ts
projects/sfia-studio/app/lib/oa/critical-ack/domain/invariants.ts
projects/sfia-studio/app/lib/oa/critical-ack/domain/types.ts
projects/sfia-studio/app/lib/oa/critical-ack/index.ts
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/authJsGitHubIdentityAdapter.ts
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/githubSubjectActorBinding.ts
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/memoryAuthorityAttemptJournal.ts
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/testing/fakeAuthenticatedIdentityAdapter.ts
projects/sfia-studio/app/lib/oa/critical-ack/ports/authenticatedIdentityPort.ts
projects/sfia-studio/app/lib/oa/critical-ack/ports/authorityAttemptJournalPort.ts
projects/sfia-studio/app/lib/oa/critical-ack/testing.ts

```

### Candidate qualification outcome

- Diff réel **lu** → journal / Critical Ack / Auth.js / StartExecution markers **qualifiables**.
- Bundle **ne peut pas** être recommandé comme “promotion prête” tel quel : base **pre-M3**, dirty non rebasé sur `607763d9`, mélange Auth.js + Ack + journal + method/prompt edits.
- Concept journal (`ATTEMPT_CREATED` / `ATTEMPT_LAUNCHED`) = **harvest candidate utile** pour crash/replay.
- Auth.js / Critical Ack = **COMPLETE candidate only after Morris Decision + extraction minimale**, not as global promotion.

---

## 3. Convergence pre-check (canonical)

| Item | State |
|------|-------|
| Build Doctrine | VALIDATED — ACTIVE ON MAIN |
| G0-A | ADOPTED — OA Native Backbone + HARVEST OPS1 Cursor |
| G0-B | ADOPTED — Product SQLite behind OA ports |
| M1–M2 | CLOSED |
| M3 | VALIDATED BY MORRIS — MERGED — EXIT PROOF SATISFIED |
| M4 | OPEN **architecture only** by current GO |
| Cursor REAL | DISABLED |
| Gate D | NOT CONSUMED |
| runtime v3 | NON ADOPTED |
| Next capability Roadmap | M4 — première action Cursor REAL faible risque / read-only via T-A5 + harvest ; no silent REAL→fixture |

### Classification challenged

| Asset | Starting claim | After inspection |
|-------|----------------|------------------|
| ExecutionContract M3 | KEEP | **KEEP** — durable ON MAIN; PREPARE-only projection |
| T-A5 domain/application | KEEP/ADAPT | **KEEP core lifecycle** ; **ADAPT** StartExecution crash frontier for REAL |
| ExecutionAdapterPort (`externalEffects: false`) | ADAPT | **KEEP as zero-effect port** ; **ADAPT via specialized REAL boundary** (see L6) — do not silently flip false→true |
| Test/NoOp adapters | KEEP tests | **KEEP** |
| OPS1 Cursor REAL primitive | HARVEST | **HARVEST capability** ≠ call OPS1 product runtime |
| OPS1 UI/runtime | FREEZE candidate | **FREEZE** for OA path |
| Auth.js/Critical Ack local | COMPLETE after GO | **CANDIDATE ACCESSIBLE** — promotion **NOT READY as-is** |
| SqliteAuthorityAttemptJournal | qualify | **TECHNICAL journal candidate TEMPORARY WITH EXIT** — ≠ Product persistence default |
| T-A6 Evidence | DEFER M5 | **DEFER** (unless minimal technical markers required for REAL proof) |

---

## 4. T-A5 current state (main)

### ExecutionAdapterPort

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAdapter.ts`

- Surface closed to `launch` / `cancel`.
- `externalEffects: false` **static marker** — forbids shell/network/MCP/Cursor/child_process in foundation.
- Launch claimed **idempotent per attemptId** (works for fake memoized adapters).
- Results recorded by application use-cases — adapter cannot mutate contract/authority.

### StartExecution order (normative RTA5-09 on main)

Path: `.../application/startExecution.ts`

1. Preconditions (authz, TTL, agent_selection Confirmation, registry, active index, OCC)
2. Attempt already `accepted` (Select persisted) — anti launch-then-persist for Attempt create
3. Contract stays `confirmed` while Attempt `accepted`
4. **Only** `adapter.launch(...)`
5. Launch reject/fail → Attempt `failed`, never `executing`
6. On ack → persist Attempt `running` **first** → contract `executing` → consume agent_selection Confirmation
7. Contract update failure after running → compensate Attempt fail-closed; **no second adapter call**

Replay today: if Attempt already `running`, return without second launch.

### AgentDescriptor / registry

Path: `domain/types.ts` + `ports/agentRegistry.ts`

Present: `agentId`, `adapterRef`, `supportedCapabilities`, `allowedActions`, `allowedTargets`, `allowedScopes`, `trustLevel`, `executionMode`, `healthStatus` (simulated), `version`, `enabled`, `provenance`.

Missing / weak for REAL:
- no `effectClass` / REAL capability bit
- `executionMode` has `adapter_sync_fixture` / `adapter_async` but **no explicit `cursor_cli_real`**
- registry immutable / deny-by-default — **KEEP** (do not invent live mutable registry for M4)
- health is snapshot — **KEEP** (no live probe required for first REAL)

### F3 / Gate D on main

- M3 PREPARE: `prepareM3FromDecision.ts` + `cursorPrepareOnlyProjection.ts`
- Projection fixed: `executionAllowed: false`, `cursorReal: false`, `gateD: "NOT_CONSUMED"`, `selectedAgentRef: null`
- Gate D is a **projection claim**, not a consumable durable grant object yet

---

## 5. Crash / replay window — BLOCKING analysis

### A. Windows on main (fake-safe, REAL-unsafe)

| Window | State if crash | Replay Start today | REAL risk |
|--------|----------------|--------------------|-----------|
| W0 before launch | Attempt `accepted` | relaunch OK | no external effect yet |
| **W1 after REAL process started, before Attempt `running`** | Attempt still `accepted` | **calls adapter.launch again** | **DOUBLE SPAWN** |
| W2 after `running`, before contract `executing` | Attempt `running` | no second launch | contract/attempt inconsistency; compensation path exists |
| W3 after executing, before Confirmation consume | running+executing | no second launch | residual cross-store consume failure (already residual R-T-A3-2) |
| W4 Confirmation consume fail | running+executing | no second launch | authority/audit residual |

Comment in main code after failed running-persist explicitly assumes fake adapter: “Nothing real ran… replayed Start reuses the memoized launch ack.” **This assumption collapses for REAL.**

### B. Consequences if REAL without durable frontier

- double spawn Cursor
- orphan processes
- Confirmation consumed too late/early relative to real effects
- Gate D ambiguous if consumed before durable launch marker
- action réelle sans journal fiable

### C. Idempotence claim today

Port claims launch idempotent per `attemptId`. Fake adapters memoize. **Not proven for Cursor child_process after process restart.**

### D. Realizability after restart

Without durable pre-launch / launched marker: **NOT realizable**. Main replay on `accepted` **re-invokes launch**.

### E. Need for PRE-LAUNCH / LAUNCHED durable trace

**YES — blocking for authorizing REAL.** Minimum kinds observed in candidate: `ATTEMPT_CREATED` (before launch) + `ATTEMPT_LAUNCHED` (after ack, before running persist) + restart disposition `UNKNOWN` / `REVIEW_REQUIRED` without auto-resume.

### F. Does local SqliteAuthorityAttemptJournal answer this?

**Partially YES (conceptually):**
- StartExecution dirty wiring appends CREATED before launch; LAUNCHED after ack; CREATED-without-LAUNCHED ⇒ fail-closed no relaunch; LAUNCHED ⇒ no relaunch.
- `ReconcileLaunchedAttemptOnRestart` treats launched-without-terminal as UNKNOWN + operator gate.
- Port comments: D1/node:sqlite proof harness; **does NOT select product persistence**; `crossStoreDurable` remains false.

Residual REAL windows even with this design:
- spawn starts inside adapter **before** ack returns → crash before LAUNCHED still yields CREATED-only ⇒ **no second launch** (good vs duplicate) but **orphan process / lost result** (operator UNKNOWN) — acceptable fail-closed for M4 if documented.
- Adapter must not ack before process start identity is known; preferably ack means “process invoked” with `realProcessInvoked` marker, not “completed”.

### G. Persistence disposition (no silent structural decision)

Options:
1. Integrate journal into OA Product Store (structural) — **Decision Required**
2. Keep isolated technical journal TEMPORARY WITH EXIT (D1/local sqlite) — candidate aligns with current dirty code
3. Replace with Attempt status machine enrichment (`launching`/`launched` durable states) in Attempt store — alternative, also Decision Required if Attempt store remains Memory
4. Do not use — **blocks REAL authorization**

**DECISION REQUIRED — M4 REAL JOURNAL PERSISTENCE**

Recommendation (≠ Morris decision): adopt a **TEMPORARY WITH EXIT technical launch journal** (port-shaped like candidate `AuthorityAttemptJournalPort`) for M4 crash/replay, **not** as Product Store promotion by default; exit = fold into Attempt/Evidence durable story by M5+ or explicit later GO. Attempt Memory alone is insufficient for REAL restart safety.

**NO DUPLICATE REAL EXECUTION AFTER CRASH** can be made fail-closed with CREATED/LAUNCHED discipline + no auto-resume; **cannot** be claimed on main as-is.

---

## 6. L6 — REAL adapter boundary options

### Option A — Controlled evolution of existing `ExecutionAdapterPort`

- Extend marker: `externalEffects: false | true` + `effectClass`
- RealCursorAdapter implements same port with `externalEffects: true`
- Test/NoOp remain `false`
- StartExecution unchanged structurally; composition chooses adapter

**Pros:** single call site; minimal new types.
**Cons:** type/port dilution; risk tests/composers accidentally inject REAL; historical “forbidden Cursor” docs become ambiguous; blast radius across all adapter consumers.

**Reversibility:** medium (can remove REAL adapter) but port contract change is sticky.
**Parallel runtime risk:** low if composition stays OA-only.

### Option B — Specialized REAL port / anti-corruption layer (recommended)

- Keep `ExecutionAdapterPort` **forever zero-effect** for fixture/foundation
- Introduce `RealExecutionLaunchPort` (or `CursorCliLaunchGateway`) harvested from OPS1 primitives
- `StartExecution` calls REAL gateway **only** when: Gate D granted + agent effectClass REAL + env enablement + journal present; else fixture port path
- ACL maps OA LaunchRequest ↔ CLI argv/worktree/timeout; never imports OPS1 session/DB/UI

**Pros:** preserves T-A5 fixture invariants; clear security boundary; harvest without OPS1 product coupling.
**Cons:** two launch surfaces; composition complexity; must prevent dual-call bugs.

**Reversibility:** high for REAL gateway removal.
**Parallel runtime risk:** controlled if gateway is OA-owned extract, not OPS1 runtime call.

### Option C (rejected as default) — Call OPS1 orchestrator from OA

Would create second runtime / second contract authority. **STOP condition if proposed as default.**

### L6 recommendation

**Recommend Option B** (specialized REAL launch ACL/port), with StartExecution remaining the sole authority sequencer (HD/EC/Attempt/Gate D/journal). Do **not** flip `externalEffects: false` globally.

**Decision Required:** yes — Morris must choose Option A vs B (or explicit hybrid) before Delivery.

---

## 7. L7 — Critical Ack / Confirmation

### On main today

- HumanDecision durable (M3)
- Confirmation model (agent_selection) process-local Memory
- Local single-user authority TEMPORARY WITH EXIT
- No Critical Ack module on main
- No Auth.js on main

### Local candidate adds

- `AcknowledgeCritical` (never starts execution)
- Auth.js GitHub identity adapter + NextAuth route + `auth.ts`
- Journal kinds including `CRITICAL_ACK_GRANTED` / `CONSUMED`
- Restart invalidation of active REAL authority
- Wiring into vertical-slice / hardBlockerFoundation / package deps

### Does M4 READ-ONLY require Critical Ack?

**Not necessarily.** For first low-risk read-only REAL:
- exact ExecutionContract + HumanDecision
- agent_selection Confirmation (existing) **or** explicit Gate D human grant
- may suffice without Auth.js product IAM

Critical Ack is more justified for **N2/N3** irreversible / elevated trust.

### Options

**L7-1 — Defer Critical Ack / Auth.js; Gate D + existing Confirmation for M4 RO**
Pros: smaller blast radius; avoids promoting dirty pre-M3 Auth stack.
Cons: leaves IAM temporary authority longer; weaker identity binding for REAL.

**L7-2 — Promote minimal Critical Ack without Auth.js (fake/local identity port)**
Pros: ack binding + journal semantics; Auth.js exit later.
Cons: still a new authority UX surface; risk of double authority with Confirmation.

**L7-3 — Promote Auth.js + Critical Ack together (candidate bundle)**
Pros: closer to product IAM exit.
Cons: large dirty pre-M3 rebase; mixes concerns; high blast radius; **not ready as-is**.

### L7 recommendation

**Recommend L7-1 for first M4 RO proof**, with **Decision Required** on whether N-level of first action forces L7-2.
Treat Auth.js promotion as **separate Morris Decision** (not silently bundled).
If Ack promoted later: bind to contract fingerprint; never auto-start; consume once; invalidate on restart for REAL epochs (candidate DUR-4 idea KEEP as design).

**Promotion candidate ready?** **NO** for Auth.js+Ack bundle. **PARTIAL** for Ack-without-Auth conceptual extract.

---

## 8. Gate D — exact position

### Target chain (challenged & recommended)

HumanDecision accepted/current
→ ExecutionContract exact+executable
→ agent selected + Confirmation if required
→ Critical Ack if required by N-level (optional for RO)
→ **Gate D grant** (explicit, durable, bound)
→ StartExecution REAL
→ journal CREATED
→ REAL adapter launch
→ journal LAUNCHED
→ Attempt running / contract executing

### Binding (recommended)

`executionContractId + version + semanticFingerprint + attemptId + selectedAgentRef + actor/principal + expiresAt`

### Check point

Immediately before REAL launch (after all authz/TTL/agent match); fail-closed on drift.

### Consume point

Atomically with journal `ATTEMPT_CREATED` (preferred) **or** immediately before launch in same durable transaction as CREATED — **never after** real process start; **never** inferred from Recommendation/PREPARE projection.

### Replay / expiration / drift

- expired / version drift / fingerprint mismatch → refuse
- already consumed → refuse second REAL launch
- restart with CREATED-without-LAUNCHED → **no auto Gate D reuse for relaunch**; operator REVIEW
- PREPARE projection must remain `gateD: NOT_CONSUMED` until a real grant exists; consuming Gate D ≠ flipping PREPARE-only casually

### Options

**GD-1** Gate D as durable journal grant record (fits candidate journal kinds)
**GD-2** Gate D as Confirmation subtype / dedicated Confirmation scope
**GD-3** Gate D as Roadmap-only human checklist (non-durable) — **reject for REAL**

### Gate D recommendation

**GD-1** (durable bound grant) coordinated with launch journal.
**Decision Required:** yes (object model + consume semantics).
**Not consumed in this cycle.**

---

## 9. OPS1 HARVEST MAP

Rule: **HARVEST CAPABILITY ≠ CALL OPS1 RUNTIME FROM OA**

| Source path/symbol | Target OA responsibility | Adaptation | Harvest? |
|--------------------|--------------------------|------------|----------|
| `ops1/cursorExecutionAdapter.ts` `resolveCursorBinPath` / `getRealCursorAvailability` | REAL availability probe (no launch) | rename/env OA-owned flag (≠ reuse OPS1 product flag blindly) | **COPY/EXTRACT** |
| `isRealCursorRequested` / `OPS1_CURSOR_REAL` | explicit REAL enablement | new OA flag e.g. Studio-owned; fail-closed default off | **ADAPT** (do not enable now) |
| `spawnRealCursor` argv + `--sandbox enabled` + timeout kill | REAL launch gateway | bind to OA contract allowlists; RO-first instructions | **COPY/EXTRACT + ADAPT** |
| `realProcessInvoked` marker | Attempt/audit proof non-fixture | map into Attempt technical fields / journal payload | **KEEP AS SOURCE → ADAPT** |
| no silent real→fixture swap | composition invariant | enforce in OA gateway | **KEEP AS SOURCE** |
| stdout/stderr size caps (200k) | observability bound | keep | **COPY** |
| argv redaction | audit safety | keep | **COPY** |
| `executionWorktree.ts` isolation under `.sfia-exec` | worktree isolation | OA-owned worktree service; avoid OPS1 branch naming coupling if possible | **COPY/EXTRACT + ADAPT** |
| allowlist evaluation / path policy | target containment | map from ExecutionContract constraints | **ADAPT** (OA contract is authority) |
| `executionCanonicalize` / timeoutSeconds | launch request canonicalization | adapt to OA LaunchRequest | **ADAPT** |
| OPS1 technical journal/markers (if any beyond adapter result) | compare to AuthorityAttemptJournal | prefer OA journal design | selective |

### Explicitly DO NOT HARVEST / DO NOT DEPEND

- OPS1 session/action product model
- OPS1 `executionContractService` as second ExecutionContract authority
- OPS1 DB as Product Store
- OPS1 Morris/UI gates as OA authority
- OPS1 UI (`features/ops1`, `/ops1` pages)
- OPS1 conversation/tool loop as Studio assistant replacement
- calling `executionOrchestrator` from OA StartExecution

---

## 10. First REAL proof design (NOT executed)

### Scenario (bounded)

1. Morris GO Delivery (future) + architecture decisions consumed
2. Existing M3 HumanDecision + ExecutionContract on Product SQLite (exact)
3. Select bounded Cursor agent (`trustLevel: bounded`, RO capabilities only)
4. agent_selection Confirmation as required by strategy
5. Gate D explicit grant (durable)
6. StartExecution REAL path with launch journal
7. Isolated worktree under `.sfia-exec`
8. Cursor CLI real spawn with sandbox; **read-only** task (e.g. read allowed file / emit stdout summary) — **no writes** preferred for first proof; if write unavoidable, single allowlisted scratch markdown under exec worktree only
9. Markers: `realProcessInvoked=true`, adapterMode=real, journal CREATED+LAUNCHED, Attempt running→terminal
10. Audit bindings to contract fingerprint + attemptId
11. Assert fixture adapter **not** invoked; `OPS1` UI path not used

### Forbidden in proof

Git remote/commit/push/PR/merge; protected paths; secrets; network beyond CLI needs; silent fixture fallback; child_process outside gateway; M5 Evidence/LPS writeback requirement

### Success criteria

- real CLI invoked once
- no duplicate launch after simulated crash/restart (CREATED/LAUNCHED fail-closed)
- contract/attempt consistent
- Gate D consumed once
- PREPARE-only historical path still intact for non-REAL

### Fail-closed criteria

missing Gate D; stale fingerprint; journal CREATED-without-LAUNCHED on resume; Cursor unavailable; allowlist miss; timeout; REAL flag off

**Cursor CLI probe this cycle (no launch):** app bin executable present at `/Applications/Cursor.app/.../bin/cursor`; not in PATH. Availability ≠ authorization.

---

## 11. M4 / M5 boundary

| M4 | M5 |
|----|----|
| bounded REAL execution | Evidence durable complete |
| Attempt real + minimal journal/markers | ReviewBundle |
| technical result proving REAL | Evidence→LPS reinjection |
| | Nora post-exec analysis / replan |

Do not aspirate M5 into M4 except safety-blocking minimums (already covered by launch journal markers).

---

## 12. NFR / security (M4-scoped)

Fail-closed defaults; no duplicate REAL; timeout+SIGTERM; cancel best-effort with `irreversibleEffectsPossible`; worktree path containment; sandbox flag; deny command injection via argv array spawn; env leakage control; stdout/stderr caps; secret non-logging; stale contract/agent/Gate D checks; OCC; minimal audit events; Attempt Memory ≠ restart-safe for REAL without journal Decision.

---

## 13. Proposed Delivery scope next (NOT authorized now)

Minimal coherent lot **after** Morris architecture decisions:

1. Decide L6 Option B (or A) + journal persistence Decision
2. Extract OA-owned REAL launch gateway from OPS1 primitives (no OPS1 runtime call)
3. Wire StartExecution journal frontier (CREATED/LAUNCHED) fail-closed
4. Gate D durable grant object + consume semantics
5. Bounded AgentDescriptor REAL profile (RO)
6. Composition flags default OFF
7. Adversarial tests: crash windows, no double spawn, no fixture fallback, stale Gate D
8. Optional: Ack-without-Auth only if Morris requires for chosen N-level
9. Explicitly exclude: Auth.js promotion unless separate GO; OPS1 UI; M5 Evidence; Attempt Product Store full unless Decision says so

### Files/categories likely touched (Delivery — do not modify now)

- `lib/oa/execution-attempt/**` (StartExecution, types, ports, new REAL gateway)
- `lib/oa/execution-contract/projection/**` (Gate D truthful projection evolution)
- `features/project-assistant/**` (UI gates — Ack/Gate D surfaces)
- new `lib/oa/**` journal module (extracted) **or** Attempt infra
- tests under `__tests__/oa/execution-attempt/**`
- **not** OPS1 UI; **not** method/; **not** runtime v3 adoption claims

### Tests needed at Delivery

- unit: journal CREATED/LAUNCHED matrices
- process restart: no relaunch on CREATED-only / LAUNCHED
- adapter: realProcessInvoked marker with fake REAL double (harness) — **without** enabling product REAL in CI by default
- adversarial: Gate D stale/consumed; allowlist; timeout
- existing T-A5 suite must remain green for fixture path

### Gates Morris required before/at Delivery

- Architecture Decision on L6 + journal persistence + Gate D model (+ Ack/Auth if in scope)
- Separate **GO M4 Delivery**
- Separate GO before enabling REAL flag / Gate D consumption in product
- Merge gate later — not this cycle

### M4 exit proof (design)

Studio path: HD+EC exact → bounded agent → required confirmations → Gate D → Attempt REAL → Cursor CLI once → markers non-fixture → audit → no out-of-contract mutation → crash/replay no duplicate → fixture path untouched.

---

## 14. Useful candidate StartExecution diff (crash frontier)

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 42758a6..2ab3e49 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -7,12 +7,18 @@
  *  2. The Attempt is ALREADY persisted `accepted` (Select did it). Start never
  *     launches before an `accepted` Attempt exists (anti launch-then-persist).
  *  3. The contract stays `confirmed` while the Attempt is `accepted`.
- *  4. Only the injected fake adapter `launch(attemptId)` is called; it is
+ *  4. When an AuthorityAttemptJournal is present (production): append
+ *     ATTEMPT_CREATED before adapter.launch; append ATTEMPT_LAUNCHED after
+ *     validated LaunchAck and before Attempt `running` persist. CREATED
+ *     failure → never launch. LAUNCHED failure after launch → fail-closed
+ *     without claiming success (CREATED without LAUNCHED ⇒ UNKNOWN on restart).
+ *     Journal absent (legacy unit tests) → skip ATTEMPT_* markers.
+ *  5. Only the injected fake adapter `launch(attemptId)` is called; it is
  *     idempotent.
- *  5. Launch reject/failure → Attempt `failed`, never `executing`.
- *  6. LaunchAck → Attempt `running` persisted FIRST, then contract
+ *  6. Launch reject/failure → Attempt `failed`, never `executing`.
+ *  7. LaunchAck → Attempt `running` persisted FIRST, then contract
  *     `executing`, then the agent_selection Confirmation is consumed.
- *  7. Contract update failure after `running` → fail-closed compensation of
+ *  8. Contract update failure after `running` → fail-closed compensation of
  *     the Attempt, audited, with no second adapter call and no business
  *     rollback.
  *
@@ -21,6 +27,7 @@
  *   `confirmed`, so an authorized Retry remains possible;
  * - launch FAIL (indeterminate adapter error) → contract `failed`.
  */
+import { randomBytes } from "node:crypto";
 import type { ClockPort } from "@/lib/oa/doctrine";
 import type { DecisionServices } from "@/lib/oa/decision";
 import type {
@@ -28,6 +35,10 @@ import type {
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
+import {
+  contractFingerprint,
+  type AuthorityAttemptJournalPort,
+} from "@/lib/oa/critical-ack";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import {
   AGENT_SELECTION_SCOPE,
@@ -53,6 +64,10 @@ import {
 import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";
 import { mapContractAuthorizationDetail } from "./selectExecutionAgent";

+function newProcessEpochId(): string {
+  return `epoch:${randomBytes(8).toString("hex")}`;
+}
+
 export class StartExecution {
   constructor(
     private readonly attempts: ExecutionAttemptRepositoryPort,
@@ -66,6 +81,7 @@ export class StartExecution {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly store?: MemoryExecutionAttemptStore,
+    private readonly authorityAttemptJournal?: AuthorityAttemptJournalPort,
   ) {}

   async execute(
@@ -115,8 +131,28 @@ export class StartExecution {
       }

       // Crash-window replay: the Attempt is already running — return the same
-      // state without calling the adapter a second time.
+      // state without calling the adapter a second time — UNLESS journal
+      // disposition is UNKNOWN/REVIEW_REQUIRED (DUR-4 no auto-resume).
       if (attempt.status === "running") {
+        if (this.authorityAttemptJournal) {
+          const disposition =
+            await this.authorityAttemptJournal.latestDispositionForAttempt(
+              attempt.attemptId,
+            );
+          if (
+            disposition === "UNKNOWN" ||
+            disposition === "REVIEW_REQUIRED"
+          ) {
+            return fail(
+              "ATTEMPT_STATE_CONFLICT",
+              `reconcile_${disposition}_no_auto_resume`,
+              {
+                executionContractId: attempt.executionContractId,
+                attempt,
+              },
+            );
+          }
+        }
         const contract = await this.contracts.findById(
           attempt.executionContractId,
         );
@@ -326,8 +362,79 @@ export class StartExecution {
         });
       }

-      // Step 4 — the ONLY adapter interaction.
+      // Step 4 — durable ATTEMPT_* frontier (when journal present) then the
+      // ONLY adapter interaction.
+      //
+      // Double-launch protection (OPTION A):
+      // - ATTEMPT_LAUNCHED already → no second launch (fail-closed here;
+      //   running replay is handled earlier).
+      // - ATTEMPT_CREATED without LAUNCHED → fail-closed no auto-resume
+      //   (crash window / REVIEW_REQUIRED; do not call adapter again).
+      // - else append CREATED then launch; on ack append LAUNCHED before
+      //   running persist. LAUNCHED write failure after launch → fail closed
+      //   without claiming success (CREATED without LAUNCHED ⇒ UNKNOWN).
       let launch;
+      const journal = this.authorityAttemptJournal;
+      let processEpochId = request.processEpochId;
+      let fingerprint: string | undefined;
+
+      if (journal) {
+        const prior = await journal.findByAttemptId(attempt.attemptId);
+        const hasLaunched = prior.some((r) => r.kind === "ATTEMPT_LAUNCHED");
+        const hasCreated = prior.some((r) => r.kind === "ATTEMPT_CREATED");
+        if (hasLaunched) {
+          return fail(
+            "ATTEMPT_STATE_CONFLICT",
+            "durable_attempt_already_launched_no_relaunch",
+            {
+              executionContractId: contract.executionContractId,
+              attempt,
+            },
+          );
+        }
+        if (hasCreated && !hasLaunched) {
+          return fail(
+            "ATTEMPT_STATE_CONFLICT",
+            "durable_attempt_created_unlaunched_no_auto_resume",
+            {
+              executionContractId: contract.executionContractId,
+              attempt,
+            },
+          );
+        }
+
+        fingerprint = contractFingerprint(contract);
+        if (!fingerprint) {
+          return fail(
+            "ATTEMPT_INVALID",
+            "durable_attempt_identity_incomplete",
+            { executionContractId: contract.executionContractId },
+          );
+        }
+        processEpochId = processEpochId ?? newProcessEpochId();
+
+        try {
+          await journal.append({
+            kind: "ATTEMPT_CREATED",
+            processEpochId,
+            correlationId,
+            occurredAt: timestamp,
+            attemptId: attempt.attemptId,
+            executionContractId: contract.executionContractId,
+            contractVersion: contract.version,
+            contractFingerprint: fingerprint,
+            actorId: request.actor.actorId,
+            payload: { selectedAgentRef: attempt.selectedAgentRef },
+          });
+        } catch {
+          return fail(
+            "EXECUTION_PERSISTENCE_FAILED",
+            "durable_attempt_created_failed",
+            { executionContractId: contract.executionContractId },
+          );
+        }
+      }
+
       try {
         launch = await this.adapter.launch({
           attemptId: attempt.attemptId,
@@ -383,6 +490,35 @@ export class StartExecution {
         });
       }

+      // Durable ATTEMPT_LAUNCHED after validated ack, BEFORE running persist.
+      if (journal && fingerprint && processEpochId) {
+        try {
+          await journal.append({
+            kind: "ATTEMPT_LAUNCHED",
+            processEpochId,
+            correlationId,
+            occurredAt: timestamp,
+            attemptId: attempt.attemptId,
+            executionContractId: contract.executionContractId,
+            contractVersion: contract.version,
+            contractFingerprint: fingerprint,
+            actorId: request.actor.actorId,
+            payload: { selectedAgentRef: attempt.selectedAgentRef },
+          });
+        } catch {
+          // Launch already happened; do not invent SUCCESS. Leave Attempt
+          // accepted with CREATED-without-LAUNCHED for UNKNOWN on restart.
+          return fail(
+            "EXECUTION_PERSISTENCE_FAILED",
+            "durable_attempt_launched_failed",
+            {
+              executionContractId: contract.executionContractId,
+              attempt,
+            },
+          );
+        }
+      }
+
       // Step 6a — Attempt running FIRST.
       const runningAttempt: ExecutionAttempt = {
         ...attempt,

```

---

## 15. Anti-claims

- M4 architecture opened ≠ M4 Delivery authorized
- Architecture recommendation ≠ Morris decision
- Auth.js inspected ≠ promoted
- Critical Ack inspected ≠ promoted
- Gate D designed ≠ consumed
- OPS1 harvested conceptually ≠ OPS1 runtime adopted
- Cursor CLI available ≠ Cursor REAL authorized
- ExecutionAttempt foundation exists ≠ REAL safe
- Technical journal candidate ≠ Product persistence decision
- M4 design complete ≠ M4 exit proof satisfied
- M4 ≠ M5 Evidence/LPS
- M4 ≠ runtime v3 ADOPTED
- Dirty candidate accessible ≠ promotion-ready on main

---

## 16. Réserves

### Blocking for REAL Delivery authorization

1. Main StartExecution crash window W1 (double spawn) unresolved without journal Decision + implementation
2. `ExecutionAdapterPort.externalEffects: false` forbids REAL without L6 Decision
3. Gate D not a durable consumable object yet
4. Attempt/Evidence still Memory — restart safety incomplete without journal Decision
5. Dirty Auth/Ack bundle **not** rebase-ready on post-M3 main

### Non-blocking for architecture qualification

- Confirmation process-local debt (known)
- OPS1 parallel UI freeze (known)
- Cursor bin path environment variance
- Exact first RO action text (tunable at Delivery)

---

## 17. Decision matrix (final)

### L6 REAL adapter boundary
- Options: A (evolve port) / B (specialized REAL ACL-port) / C (call OPS1 — reject)
- Recommendation: **B**
- Decision Required: **YES**

### Crash/replay journal
- Options: Product Store integrate / TEMPORARY technical journal / Attempt status enrichment / none
- Recommendation: **TEMPORARY WITH EXIT technical journal** (candidate-shaped CREATED/LAUNCHED) ; none blocks REAL
- Decision Required: **YES — M4 REAL JOURNAL PERSISTENCE**

### AgentCapability REAL
- Gaps: no REAL effectClass; no cursor_cli_real mode; allowlists need RO profile
- Adaptation: extend descriptor enum + static registry entry; keep immutable registry

### L7 Critical Ack
- Options: L7-1 defer / L7-2 Ack without Auth.js / L7-3 Auth.js+Ack bundle
- Recommendation: **L7-1 for first RO M4**; L7-3 **not ready**
- Promotion candidate: **NO** (bundle) / **PARTIAL** (Ack concept)
- Decision Required: **YES** (scope of Ack vs Gate D vs Auth.js)

### Gate D
- Binding: contractId+version+fingerprint+attemptId+agentRef+actor+expiry
- Check: pre-REAL launch
- Consume: with CREATED (preferred), never after process start
- Replay: no auto reuse; stale/expired fail-closed
- Decision Required: **YES**

### OPS1 harvest
- Exact primitives: bin resolve, explicit enablement, sandbox spawn, timeout, stdout/stderr caps, argv redaction, realProcessInvoked, no REAL→fixture, worktree isolation, allowlist mapping
- Dependencies rejected: OPS1 session/DB/UI/second contract/orchestrator authority

### First REAL proof
- Exact bounded RO scenario in isolated worktree with markers; not executed this cycle
- Exit criteria: single real invocation, no duplicate after crash, audit+journal, no fixture

### Delivery scope next
- Minimal lot after Morris decisions: REAL gateway + journal frontier + Gate D + RO agent + tests
- Debt: Auth.js exit still open; Confirmation Memory; Attempt Memory beyond launch journal; OPS1 freeze; M5 deferred
- Gates: Architecture Decision → GO M4 Delivery → REAL enablement GO → merge gate later
- **M4 Delivery NOT AUTHORIZED by this GO**

---

## 18. Coverage / completeness

| Required item | Status |
|---------------|--------|
| timestamp Europe/Paris | YES |
| Cycle 6 / Critical / EVOL | YES |
| GO limits | YES |
| Git Truth + remotes | YES |
| candidate state + inventory + useful diff | YES |
| KEEP/ADAPT/HARVEST classification | YES |
| T-A5 + port + crash/replay + idempotence | YES |
| L6/L7/Gate D options+reco | YES |
| OPS1 harvest map + rejects | YES |
| first REAL proof + M4/M5 + NFR | YES |
| delivery proposal + tests + gates + exit | YES |
| anti-claims + reserves + verdict | YES |
| project mutation | NONE |
| synthesis only | NO |
| Review Pack verdict | **COMPLETE** |

---

## 19. Verdict

**M4 ARCHITECTURE QUALIFICATION COMPLETE —**
L6/L7/GATE D DECISION PACK COMPLETE —
CRASH/REPLAY BOUNDARY QUALIFIED —
OPS1 HARVEST MAP COMPLETE —
FIRST REAL EXIT PROOF DESIGNED —
LOCAL F3 REAL PREREQUISITES CANDIDATE ACCESSIBLE (DIRTY PRE-M3; PROMOTION NOT READY AS-IS) —
NO PROJECT MUTATION —
CURSOR REAL NOT AUTHORIZED —
READY FOR CHATGPT REVIEW / MORRIS ARCHITECTURE DECISION GATE
