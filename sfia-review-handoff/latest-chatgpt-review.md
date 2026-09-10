# ChatGPT Review Pack — FULL

- Cycle ID: SFIA-STUDIO-GREENFIELD-GENERIC-ACTIVE-CYCLE-COGNITIVE-WORK-FOUNDATION-SAME-LOT-COMPLETION-01
- Timestamp (UTC): 2026-09-10T13:10:24Z
- Milestone: Greenfield Product Proof — Active Cycle Cognitive Work Foundation
- Cycle SFIA: 8 — Delivery / implémentation
- Typologie: EVOL
- Profile: CRITICAL
- D-GF-ACW-01: ADOPTED BY MORRIS — UNCHANGED
- GO Morris consumed: GO MORRIS — ACW SAME-LOT COMPLETION — CONTEXT SEAL + PRODUCTION IDEMPOTENCE + RECENT CONTINUITY + CATALOG-WIDE PROOF
- Morris same-lot / no-micro-cycle direction: YES — CR-ACW-01..04 treated as one capability lot; STOP on structural gap without splitting
- Anchor / candidate under review: 85d7a7982d08f5b0aa706c36cd9d1ca9a86c2456
- Parent: 2b595718eafec1a902650619040b21f75e86031e
- Product files changed this cycle: ZERO
- Product commit: NONE (STOP before incomplete corrective)
- Model calls REAL: ZERO
- Nora LIVE: ZERO
- Env delta: ZERO

## Local Git Truth

### Before (and throughout — no Product mutation)
- Worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- Branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: 85d7a7982d08f5b0aa706c36cd9d1ca9a86c2456 — MATCH
- Parent: 2b595718eafec1a902650619040b21f75e86031e — MATCH
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1 — MATCH
- origin/sfia/review-handoff: ec900ce92860240d6508af7511446b2837594e87 — MATCH
- Handoff blob: 241d637bafa39772a6571f4eed46ba06eac27be6 — MATCH
- Dirty: .tmp-sfia-review/** only — MATCH
- No stash / reset / clean / rebase / merge / amend

## Sources read
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/.../02-fifteen-cycles-synthetic-map.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/sfia-v3-framing/30, 32, 33, 34, 35
- projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
- sfia-review-handoff/latest-chatgpt-review.md (prior Delivery pack)
- Candidate local 85d7a798 Product ACW files inspected read-only

## Convergence Pre-check
- Build Doctrine / Roadmap: VALIDATED ACTIVE
- Product Completion C1: CLOSED — not reopened
- Caps: V3-F01/F02/F04/F05/F06/F08/F09 in scope; F11/F12 out
- Entry: ACW DETERMINISTIC candidate 85d7a798; Critical Review NOT ACCEPTED
- Exit this cycle: NOT COMPLETE — blocked by CR-ACW-02 structural gap

## CKC Cycle 8
- detailed CKC absent; fallback synthetic map + method-candidate; executionAuthority none
- External CKC guides Cursor execution only — not Studio runtime doctrine

## R22
- KEEP / ADAPT (unchanged posture)
- No second LLM / classifier / engine introduced (none coded)

## Fake / Real
- Applicable: YES
- This cycle: discovery + STOP only — ZERO REAL, ZERO Fake model invocation required for verdict
- Expected success claim (ACW deterministic completion) NOT reached

## STOP condition triggered

```
STOP — ACTIVE CYCLE WORK IDEMPOTENCY STRUCTURAL GAP
```

Triggered after CR-ACW-02 discovery concluded that **no existing** durable/reconstructible logical Product turn identity satisfies production idempotence without a new structural mechanism.

Per GO: this STOP **primes** finishing the lot at all costs. Incomplete corrective (implementing CR-ACW-01/03/04 while leaving CR-ACW-02 open, or pretending random/`providerResponseId` closes production idempotence) is **forbidden**.

Therefore:
- CR-ACW-01 context seal — **NOT IMPLEMENTED** (deferred with lot; not abandoned as unnecessary)
- CR-ACW-02 production idempotence — **STRUCTURAL GAP CONFIRMED**
- CR-ACW-03 recent continuity — **NOT IMPLEMENTED** (deferred)
- CR-ACW-04 catalog-wide proof — **NOT IMPLEMENTED** (deferred)
- No Product commit
- No micro-cycle auto-split

## Discovery before code — path traced

```
orchestrateAssistantSend (f2/orchestrateF2.ts)
→ composeStudioCognitiveContext (Result; activeCycle projection + CKC)
→ orchestrateProjectAssistantTurn
→ runNoraCognitiveTurn (correlationId = `f1:${projectId}`)
→ structuredOutput
→ normalizeNoraProductTurnStructuredOutput
→ materializeActiveCycleWork
```

Production turnCorrelationId mint (candidate 85d7a798):

```typescript
// orchestrateTurn.ts ~L595-597
const turnCorrelationId =
  input.turnCorrelationId?.trim() ||
  `f1-acw:${project.projectId}:${randomBytes(8).toString("hex")}`;
```

BAR-WORK-25 only proves idempotence when the **same explicit** `turnCorrelationId` is injected — not the production default.

Fallback still present (CR-ACW-01 gap retained on candidate):

```typescript
// orchestrateTurn.ts ~L500-503
const activeCycleId =
  input.studioCognitiveContext?.activeCycle?.cycleInstanceId ??
  project.activeCycleInstanceId ??
  null;
```

## CR-ACW-02 — logical-turn identity inventory

| Candidate | Server | Durable turn id | Before model | After model | HTTP retry stable | Restart | Provider lost | Unique 2× same text | Used as ACW idem |
|---|---|---|---|---|---|---|---|---|---|
| ProductSqliteSession `sess:{projectId}:f1-default` | YES | NO (session, not turn) | key YES | tip △ | NO | session YES / tip △ | NO tip | NO | NO |
| session_items `(project,key,seq)` | YES | tip only | NO | △ | NO (new seq) | △ | NO | △ | NO |
| Agents tip `msg_*` / `rs_*` in item_json | YES (live) | △ live only | NO | △ | NO | △ | NO | △ | NO |
| canonicalConversationSession `f1-default` | YES | NO | key YES | △ | NO | △ | NO | NO | NO |
| `runNoraCognitiveTurn` correlationId `f1:{projectId}` | YES | NO (project-scoped) | YES | YES | false-stable | false-stable | YES | **NO** | telemetry only |
| `usage.providerResponseId` | △ provider | NOT Product SoT | NO | △ | NO (new call ⇒ new id) | △ if stored | **NO** | △ | FinOps tests ≠ ACW |
| production `f1-acw:…:random` | YES | only after write | NO | YES | **NO** | NO if incomplete | N/A | YES | conditional BAR only |
| client UI `nextId("assistant")` | NO | NO | — | — | — | — | — | — | **NOT sent** |
| Project/EC/attempt `idempotencyKey` / `oa_idempotency` | YES | other commands | n/a | n/a | n/a | n/a | n/a | n/a | **not Nora turn** |
| LR `semanticKey` + `producedAt` id | YES | content supersession | n/a | n/a | n/a | n/a | n/a | n/a | **not turn idem** |
| Memory EventSink | YES | process-local | YES | YES | NO | NO | NO | NO | NO |

### Rejected almost-ADAPTs (do not close gap)

1. **Bind `turnCorrelationId` to `providerResponseId`**
   - Fails: Fake process counters; null paths; provider-lost; HTTP retry that re-invokes model gets a new id; not reconstructible as Product SoT without new persistence of that id as turn accept key.

2. **Bind to Session tip `msg_*` / seq after Runner**
   - Fails: Memory B unavailable path; Fake often lacks item `id`; compaction rewrites; retry that re-runs model creates new tip ⇒ duplicate ACW unless a separate accept-boundary id exists.

3. **Hash(projectId + user text)**
   - Fails GO: two legitimate identical messages must be distinct turns.

4. **Keep random + claim production idempotence**
   - Explicitly forbidden.

5. **Client UUID**
   - Forbidden (client-supplied authority).

6. **New idempotency table decided by Cursor without Morris**
   - Forbidden — requires structural decision.

### Sufficiency verdict

**No existing identity** is simultaneously:
- server-owned
- durable/reconstructible as a **logical Product turn**
- stable for same accepted-turn replay (response-loss / HTTP rematerialize / restart)
- unique for two legitimate identical-text turns

Therefore: **STOP — ACTIVE CYCLE WORK IDEMPOTENCY STRUCTURAL GAP**.

## Morris Decision Pack

### Decision ID proposed
`D-GF-ACW-02` — Active Cycle Work logical Product turn identity for production idempotence

### Problem
ACW materialization item ids are derived from `turnCorrelationId`. Production mints a fresh random per send. Lost-response / retry of the same logical accepted Product turn therefore cannot be proven idempotent without a durable logical-turn identity. Test-only injection of `turnCorrelationId` is insufficient for production claim.

### Current runtime contract (85d7a798)
- Pre-model: `correlationId = f1:{projectId}` (not turn-unique)
- Post-model ACW: `turnCorrelationId = f1-acw:{projectId}:{randomBytes(8)}` unless test override
- Item id: `epi:acw:hash(project|cycle|turnCorrelationId|index|type|statementDigest)`
- Idempotent reuse only when the same `turnCorrelationId` is supplied again

### Observed gap
No existing Session / Agents / provider / Project idempotency primitive supplies a **logical Product turn** key with the required properties.

### Why now
Critical Review CR-ACW-02 blocks SAME-LOT completion. Without it, CR-ACW-01/03/04 completion would still leave production idempotence unproven — an incomplete lot.

### Why active Cadrage / ACW exposes it
First durable automatic Epistemic writes from Nora in an active cycle make lost-response duplicates materially harmful (orphan Observations / LPS ref growth) without HD/EC gates.

### Current reusable assets
- ProductSqliteSession / session_items (Memory B continuity — not Truth C)
- Agents tip item ids (live, incomplete Fake)
- providerResponseId (provider-scoped, not Product SoT)
- Project `oa_idempotency` pattern for **other** commands
- ACW id derivation + material parity already present once a stable turn id exists
- Provenance.correlationId field on EpistemicItem

### Structural question
What server-owned durable identity represents **one logical accepted Product Assistant turn** for ACW materialization idempotence, without inventing a parallel cognitive engine?

### Options

**Option A — Extend existing Product Session identity**
Mint a server-owned logical turn id at Product accept boundary (before or at materialization), persist it in Session DB (extend session_items or adjacent Session-only structure), reuse for rematerialize. Memory B remains non-Truth-C; ACW Truth C still Epistemic+LPS.

**Option B — Reuse another existing durable Product turn primitive**
Only viable if Morris identifies a primitive discovery missed — current inventory found none sufficient. Not recommended as “force-fit providerResponseId”.

**Option C — Minimal durable idempotency extension on Product Truth path**
Server mints logical turn id; persist binding (turn id ↔ project/cycle/seal/material fingerprint) via minimal Product persistence (could be Epistemic provenance-only encoding **if** that can reconstruct retries before write — generally insufficient alone) or a minimal idempotency record patterned on `oa_idempotency` **scoped to ACW turn**. Requires explicit schema/persistence decision.

**Option D — Reject automatic ACW durable write until turn identity exists**
Keep cognitive context/CKC; require later lot for durable ACW writes. Shrinks claim — contradicts D-GF-ACW-01 already-shipped candidate surface unless Morris re-scopes.

### Recommended option
**Option A (primary) or Option C (if Session must not carry idempotency for Truth C writes).**

Recommendation for Morris wording:
- Prefer **Option A**: server-minted logical Product turn id at the Project Assistant accept/materialize boundary, stored in the **existing Session SQLite** (or minimal Session-adjacent durable row), **not** client-authored, **not** providerResponseId alone, **not** user-text hash.
- If doctrine forbids Session as carrier for Truth-C write idempotency keys: **Option C** minimal Product idempotency record (patterned on existing `oa_idempotency`), scoped to ACW materialization, still **no new ACW aggregate**.

### Why simpler alternatives fail
- Random: no replay
- providerResponseId: lost/retry/Fake/`null`
- Session tip alone: Memory B off / Fake / compaction / re-run
- Text hash: collapses legitimate repeats
- Client UUID: client authority
- New CycleWork aggregate: forbidden scope / unnecessary if turn id alone closes idempotence

### Exact minimal delta (pending Morris)
1. Define `ActiveCycleWorkLogicalTurnId` mint semantics (server, unique per logical turn).
2. Persist it durably under chosen Option A or C.
3. Production default `turnCorrelationId` := that id (tests may still override).
4. Rematerialize / response-loss retry reconstructs same id → existing ACW item parity path.
5. Distinct legitimate turns with identical user text → distinct ids.
6. Same id + changed material → IDEM_CONFLICT (already).
7. Interact with future CR-ACW-01 seal: stale seal + same turn id → STALE fail-closed (not silent idempotent success).

### Impacts (pending decision)
| Area | Impact |
|---|---|
| Domain aggregate | NONE required |
| DecisionBasis | NONE |
| LPS schema | NONE required for A; maybe none for C |
| Epistemic | provenance.correlationId carries turn id (already) |
| Trajectory / EC / Confirmation | NONE |
| Nora/OpenAI | NONE (no second call) |
| Persistence | Session SQLite ADAPT (A) **or** minimal Product idempotency row (C) |
| DDL/migration | Possible for C; A may be CREATE TABLE IF NOT EXISTS in Session DB (already pattern) |
| Legacy F3 | NONE |
| First Cadrage | Same generic path |
| Backward compatibility | Prior random turns remain unique historical ids; no rewrite |
| Debt/exit | Document Session≠Truth C; turn id is materialization key only |

### Fake/Real implications
- Deterministic Fake must still support distinct turn ids without OpenAI.
- REAL later proof must exercise retry/idempotence with real Session durability.

### Morris gates
- No Product ACW SAME-LOT completion commit until D-GF-ACW-02 decided.
- No CR-ACW-01/03/04-only Product commit as a “micro-completion”.

### Anti-claims for this STOP pack
- Does NOT claim production idempotence closed
- Does NOT claim SAME-LOT completion ready
- Does NOT claim ACW LIVE proven
- Does NOT introduce a table or architecture by Cursor fiat

### Decision wording ready for Morris
“ADOPT D-GF-ACW-02: introduce a server-owned durable logical Product turn identity for ACW materialization idempotence (Option A Session-adjacent mint **or** Option C minimal Product idempotency record). Reject providerResponseId-alone, user-text hash, client UUID, and random production keys. Then resume SAME-LOT completion of CR-ACW-01/03/04 under D-GF-ACW-01 without splitting into micro-cycles unless a further structural gap appears.”

## CR-ACW-01 / 03 / 04 status (deferred, not closed)

### CR-ACW-01 — Context seal
- Root cause retained on candidate: materialize revalidates mainly projectId/cycleId/status/LPS pointer/version; fallback to `project.activeCycleInstanceId` still present
- Required seal fields (not implemented this cycle): projectId, cycleInstanceId, cycleTypeId, profile, status=active, trajectoryId/version/step, ckcResolutionRef
- Status: **OPEN — deferred by CR-ACW-02 STOP**

### CR-ACW-03 — Recent continuity
- Root cause retained: `listByProject` ASC + `slice(0, 12)` keeps oldest
- Status: **OPEN — deferred by CR-ACW-02 STOP**

### CR-ACW-04 — Catalog-wide genericity
- Selectability source (observed): `isTargetCycleCurrentlySelectable` / `listCycleTypes()` ≡ `lifecycleStatus === "active"`
- Current selectable count observation: **15** (not an invariant)
- Current test on candidate only checks `resolved + unresolved == catalog.length && resolved > 0` — insufficient
- Status: **OPEN — deferred by CR-ACW-02 STOP** (full path not executed this cycle)

## Product files modified
NONE.

## FULL usable modified content
N/A — Product delta = ZERO. No modified-content section required for Product files.

## Validation
- Product mutation: ZERO
- Tests: not re-run as delivery completion (no code change); prior candidate BAR-WORK remain as-is on 85d7a798
- typecheck/lint/build: not required for ZERO Product delta STOP cycle
- git diff --check Product: clean

## ZERO REAL
- Model calls: ZERO
- Nora LIVE: ZERO
- EC/HD/Attempt/Confirmation: ZERO
- Product push: NONE

## Reserve dispositions
- RESERVE-ACW-NORA-ACTIVE-CONTEXT-01 = OPEN PENDING SAME-LOT COMPLETION REVIEW (unchanged; not candidate-closed this cycle)
- RESERVE-ACW-DURABLE-CYCLE-WORK-01 = OPEN PENDING SAME-LOT COMPLETION REVIEW (unchanged)
- RESERVE-ACW-IDEMPOTENCY-TURN-ID-01 = **NEW OPEN / BLOCKING** — maps to D-GF-ACW-02
- RESERVE-ACW-LIVE-01 = OPEN
- RESERVE-ACW-EXECUTION-APPLICABILITY-01 = OPEN / OUT OF SCOPE
- RESERVE-ACW-EC-BUILD-AUTHORITY-01 = OPEN / OUT OF SCOPE
- RESERVE-START-CONCURRENCY-REALISM-01 = OPEN
- RESERVE-HD-CONCURRENCY-REALISM-01 = OPEN
- RESERVE-QA-MOCK-01 = OPEN / NON-BLOCKING
- RESERVE-START-UI-READ-NOISE-01 = OPEN / NON-BLOCKING

### CR disposition this cycle
- CR-ACW-01 = OPEN (deferred)
- CR-ACW-02 = **STRUCTURAL GAP — Morris Decision Pack D-GF-ACW-02**
- CR-ACW-03 = OPEN (deferred)
- CR-ACW-04 = OPEN (deferred)

## Next capability
Await Morris decision on **D-GF-ACW-02**.
Then resume **same-lot** completion of CR-ACW-01 + CR-ACW-02 + CR-ACW-03 + CR-ACW-04 under D-GF-ACW-01 — still no micro-cycle split unless a new structural gap appears.
Bounded REAL remains after Critical Review PASS of the completed lot.

## Anti-claims
- NOT: SAME-LOT DETERMINISTIC COMPLETION READY
- NOT: production idempotence proven
- NOT: context seal / newest-N / catalog-wide proof closed this cycle
- NOT: Active Cycle Work LIVE PROVEN / Cadrage COMPLETE / EC proven / PR READY / R2 CLOSED

## Final Product git status
- HEAD: 85d7a7982d08f5b0aa706c36cd9d1ca9a86c2456 (unchanged)
- Parent: 2b595718eafec1a902650619040b21f75e86031e
- Product dirty: ZERO
- Dirty: .tmp-sfia-review/** only

## Final verdict

GREENFIELD GENERIC ACTIVE-CYCLE COGNITIVE WORK FOUNDATION — SAME-LOT COMPLETION STOPPED — ACTIVE CYCLE WORK IDEMPOTENCY STRUCTURAL GAP (D-GF-ACW-02 REQUIRED)
