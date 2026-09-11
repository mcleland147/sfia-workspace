# SFIA STUDIO — GCEC
REAL_CONTINUATION_GAP
ARCHITECTURE QUALIFICATION / DECISION PACK

## TIMESTAMP
2026-09-11T20:38:51+02:00

## GO MORRIS
REAL_CONTINUATION_GAP ARCHITECTURE QUALIFICATION consumed

## GIT TRUTH BEFORE
- worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- HEAD: `92ad3fd41e065d0ebe76c59b4eedb622715a11e2`
- parent: `290eca6544f93a898fc3920f99142dc6130ba05e`
- origin/main: `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- Product tracked: clean
- Review Handoff input: `667b499b26337cabbc533a16c952b73cca2b872e`

## GIT TRUTH AFTER
- HEAD unchanged: `92ad3fd41e065d0ebe76c59b4eedb622715a11e2`
- Product tracked changes: NONE
- Product commit: NONE
- Product push: NONE

## REAL
ZERO

## PRODUCT MUTATION
ZERO

## SOURCES
Cycle template, routing guide, ChatGPT–Cursor operating model, rules/guardrails,
v2.5 method candidate, CKC pilot `03-architecture-technique.md`, Build Doctrine,
roadmap, Product Completion cadrage, framing 34/35, prior REAL handoff `667b499b…`,
durable proof outputs under `.tmp-sfia-review/gcec-cursor-real-proof/`.

## CONVERGENCE PRE-CHECK
- Build Doctrine: VALIDATED / ACTIVE
- Product Completion: COMPLETE / CLOSED
- Runtime v3: NON ADOPTED
- GCEC-CURSOR-REAL: CLOSED BY PRIOR EVIDENCE
- REAL_CONTINUATION_GAP: OPEN → QUALIFIED (not closed)

## CYCLE QUALIFICATION
- Cycle: **6 — Architecture technique**
- Type: EVOL
- Profile: CRITICAL
- CKC: candidate / cognitive guidance only
- Behavior: ≥2 serious options; reversible vs expensive made explicit; **no implementation**

## CURRENT REAL PROOF STATE
Docs-write REAL Attempt succeeded; EC remained `confirmed`; artifact digest
`sha256:e9d5cc7711f67455a6621dd02a548d895e3de848bdb721c3fca31982b4be375d`;
remote unchanged; artifact lived in isolated per-Attempt worktree; managed clone
never received mutation.

## CODE PATHS INSPECTED
- `realExecutionWorkspacePort.ts`
- `studioGitWorktreeWorkspace.ts`
- `studioCursorRealLaunchGateway.ts`
- `startExecution.ts` (LAUNCHED journal payload)
- Attempt/EC domain types + SQLite schemas
- `realLaunchSafetyJournalPort.ts` / SQLite journal
- `composeStudioProductRealBoundary.ts`
- `completeBoundedDocsWriteLaunch.ts` / `completeBoundedReadOnlyLaunch.ts`
- D-GCEC-15 deterministic E2E / negatives
- Git ports (read-only verify)
- Probe: workspace path determinism (`.tmp-sfia-review/gcec-continuation-probe-paths.out`)

## ARCHITECTURE FACTS WITH FILE/FUNCTION REFERENCES
See decision pack § CURRENT ARCHITECTURE FACTS (F1–F12):

- F1–F3 YES (attemptId leaf; detach from baseHeadSha; distinct Attempt ⇒ distinct tree; exists ⇒ refuse)
- F4–F6 NO (no Attempt/EC workspace fields; LAUNCHED drops worktreeRef)
- F7 in-memory only
- F8 YES production `.sfia-exec/m4-worktrees` stable (harness may override disposable)
- F9 no cleanup owner
- F10 remain-by-omission only
- F11 YES read-only verify
- F12 NO FS resume via current prepare; PARTIAL effect-level via verifiedEffects

## ROOT CAUSE
Attempt-scoped create-only worktree + no durable Product workspace locator +
in-memory observation refs ⇒ Attempt B cannot resume Attempt A’s uncommitted FS state.

## OPTIONS
A EC-scoped lineage · B prior-Attempt resume · C reconstruct · D managed clone ·
E Product schema lineage · F journal registry

## FULL COMPARISON MATRIX
Embedded in decision pack.

## RECOMMENDATION
**OPTION B framed by OPTION A** — extend workspace port with attach/verify resume
of prior succeeded Attempt worktree under stable execRoot; prefer **no new Product
schema initially** (CONDITIONAL escalate to E).

**RECOMMENDATION — NOT ADOPTED.**

## STRUCTURAL DECISIONS STILL REQUIRED
`D-GCEC-CONT-01` Morris PENDING (see decision pack end).

## PERSISTENCE IMPACT
CONDITIONAL prefer NO schema/migration initially; journal must not become Product registry.

## DEBT / EXIT
REAL_CONTINUATION_GAP remains OPEN until Delivery + deterministic + REAL continuation evidence.

## DETERMINISTIC PROOF PLAN
Same-EC A→B resume; binding negatives; restart rediscovery; ambiguity fail-closed; GCEC regressions.

## REAL PROOF PLAN
Distinct future Morris GO: bounded REAL commit Attempt B under resumed workspace — not this GO.

## NEXT DELIVERY LOT
Single coherent Delivery: resume/attach foundation + deterministic A→B + crash negatives.

## DECISION PACK — FULL CONTENT

# GCEC — REAL_CONTINUATION_GAP
ARCHITECTURE DECISION PACK

## TITLE / STATUS
REAL_CONTINUATION_GAP — Workspace continuity under ONE ExecutionContract across successive ExecutionAttempts.

**STATUS:** QUALIFIED — RECOMMENDATION NOT ADOPTED — MORRIS DECISION PENDING (`D-GCEC-CONT-01`)

**TIMESTAMP:** 2026-09-11T20:38:23+02:00

**PRODUCT HEAD (frozen):** `92ad3fd41e065d0ebe76c59b4eedb622715a11e2`

**REAL:** ZERO · **PRODUCT MUTATION:** ZERO

---

## PROBLEM

A later ExecutionAttempt under the SAME ExecutionContract must execute an authorized next slice against **exactly** the verified repository filesystem state produced by a preceding successful Attempt (example: docs-write → later commit), without:

- Studio applying business mutations as a second Git/filesystem writer;
- a parallel execution engine / nested cycle / new waiting status;
- silent cross-Project/EC workspace reuse;
- autonomous protected Git effects.

Current REAL Product path creates a **fresh detached worktree per Attempt** and does **not** durably bind that worktree into Attempt/EC Product state. After Attempt A succeeds, Attempt B has **no governed resume API**.

---

## CURRENT VERIFIED STATE

From GCEC-CURSOR-REAL CLOSED BY EVIDENCE (handoff `667b499b…`):

| Fact | Value |
|------|-------|
| Attempt | `xat:gcec-real:xct:m3-res:dec:f2:55ff23ff-e24b-417d-8a87-53b1fdb6059f` |
| EC after | `confirmed` |
| Cycle | `active` |
| Artifact | `docs/functional-design.md` |
| Digest | `sha256:e9d5cc7711f67455a6621dd02a548d895e3de848bdb721c3fca31982b4be375d` |
| processRef | `pid:50290` |
| worktreeRef (ephemeral) | `/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-gcec-real-J6dmNr/m4-worktrees/wt-53edc7fbda620a9599fc4341` |
| Remote proof | unchanged @ `32c7c200…` |

Harness used disposable `execRoot` under OS temp; production composition defaults to studio-stable `.sfia-exec/m4-worktrees` (see F8). Gap is architectural regardless of harness cleanup.

---

## BINDING MORRIS DECISIONS

- **D-GCEC-09** Cursor executes Project FS/Git mutations; Studio/Nora are not second business writers.
- **D-GCEC-10** Studio owns rich read-only repository inspection.
- **D-GCEC-11** Cursor report = claim; independent observation = proof.
- **D-GCEC-12** Exit Git requirements are dynamic.
- **D-GCEC-13** Protected boundaries stop then resume after verification + new human authority.
- **D-GCEC-14** Repository context is not automatically Evidence.
- **D-GCEC-15** ONE EC → multiple successive Attempts; Attempt success ≠ EC completion; NEW Attempt identity under SAME EC; no second FSM; no waiting/paused; no nested Cycle; no autonomous merge.

Do not redesign these. Architecture must implement them.

---

## CURRENT ARCHITECTURE FACTS

Verified against LOCAL HEAD `92ad3fd4` (not origin/main).

### F1 — Physical worktree identity derives from attemptId
**YES.** `physicalWorktreeLeafForAttempt` = `wt-` + sha256(attemptId)[0:24]; `workspacePathForAttempt(execRoot, attemptId)`.

Refs: `studioGitWorktreeWorkspace.ts:52–66`

Probe: distinct attemptIds → distinct paths; same attemptId → stable path
(`.tmp-sfia-review/gcec-continuation-probe-paths.out`).

### F2 — prepareWorkspace creates detached worktree from baseHeadSha
**YES.** `git worktree add --detach <path> <baseHeadSha>` then HEAD must equal baseHeadSha.

Refs: `studioGitWorktreeWorkspace.ts:153–172`

### F3 — Distinct later Attempt ⇒ distinct workspace by default
**YES.** New AttemptId ⇒ new leaf. If path already exists → `REAL_WORKSPACE_INVALID:workspace_path_exists` (refuse, no attach).

Refs: `studioGitWorktreeWorkspace.ts:128–141`

### F4 — ExecutionAttempt durably stores workspace continuation ref
**NO.** Attempt type has `retryOfAttemptId` / result refs / window fields — **no** `worktreeRef` / `workspacePath`.

Refs: `execution-attempt/domain/types.ts:107–162`

SQLite `oa_execution_attempts`: identity + `payload_json` of Attempt shape — no workspace column.

### F5 — ExecutionContract stores continuation/workspace anchor
**NO.** EC carries opaque `inputs` (includes `baseHeadSha` for *fresh* prepare). No workspace lineage field.

### F6 — Safety journal LAUNCHED retains worktreeRef
**NO.** `appendLaunched` persists `processRef` + `payload: { gatewayId }` only. ACK’s `worktreeRef` is dropped at journal write.

Refs: `startExecution.ts:1162–1171`; journal marked **NOT Product Store / TEMPORARY WITH EXIT** (`realLaunchSafetyJournalPort.ts:1–4`).

### F7 — Observation worktreeRef durability
**IN-MEMORY ONLY.** Runner process Map / gateway fallback Map. Lost on process restart.

### F8 — Default production execRoot restart-stable
**YES** (product compose): `<studioRoot>/.sfia-exec/m4-worktrees` — not `os.tmpdir()`.

Refs: `composeStudioProductRealBoundary.ts:53–56, 86–89`

Harness REAL proof overrode with disposable temp `execRoot` — that override is proof-fixture behavior, not production default.

### F9 — REAL worktree cleanup owner
**NO product owner.** Port is prepare-only; no `worktree remove` in OA REAL path. Disk leftovers possible by omission.

### F10 — Succeeded Attempt worktree may legally remain
**NO explicit grant.** Remain-by-omission only; leftover blocks same-attemptId re-prepare.

### F11 — Git ports can verify existing worktree without mutating
**YES.** `LocalGitStatusDiffPort` / `verifyWorkspaceFileEffects` are read-only. `prepareWorkspace` always mutates (creates).

### F12 — Same-EC FS continuation without new persistence
**NO for filesystem resume via current prepare API.**
**PARTIAL for effect-level continuation:** `verifiedEffects` + Evidence + EC.inputs already support D-GCEC-15 multi-Attempt *logical* progression (deterministic E2E uses shared Fake worktreeRoot — not REAL worktree policy).

Port contract today: prepare only — no attach/resume.

Refs: `realExecutionWorkspacePort.ts`

---

## REAL_CONTINUATION_GAP ROOT CAUSE

1. Workspace identity is **Attempt-scoped create**, not **EC-scoped resume**.
2. Prepare is **create-or-fail-if-exists**, never **attach-and-verify**.
3. Durable Product Attempt/EC stores do **not** record workspace locator.
4. Launch journal does **not** persist `worktreeRef` (and must not become Product registry).
5. Observation `worktreeRef` dies with process.
6. Therefore Attempt B under same EC always gets a **fresh detached tree at baseHeadSha**, which **does not contain** Attempt A’s uncommitted FS mutations (artifact lives only in A’s worktree / retained review copy).

Effect-level D-GCEC-15 continuation exists; **workspace-level** continuation for pre-commit mutable state does not.

---

## CONTINUITY REQUIREMENTS

Attempt B must obtain a workspace that:

1. Belongs to same Project + repository binding identity.
2. Belongs to same ExecutionContract.
3. Continues from a **terminal-succeeded** prior Attempt A with FS slice verified.
4. Contains verified artifact state (path + digest) OR later a verified commit SHA.
5. Passes binding checks fail-closed on mismatch.
6. Remains Cursor-executed for next business mutations.
7. Survives Studio process restart when required by continuity window.
8. Does not violate single-active-Attempt invariant.

---

## MINIMUM DURABLE IDENTITY

To assert: “Attempt B continues exact verified state of Attempt A under EC X”:

| Layer | Identity | Must persist? |
|-------|----------|---------------|
| 1. Business/domain | `projectId`, repo `identity`, `executionContractId`, `priorAttemptId` (succeeded) | **YES** — already on Product Attempt/EC/Project |
| 2. Technical FS locator | `execRoot` policy + path derived from `priorAttemptId` OR explicit `workspacePath` | **CONDITIONAL** — derivable if execRoot stable + path formula fixed; explicit path only if derivation insufficient |
| 3. Git identity | Pre-commit: dirty tree + artifact path/digest vs baseHeadSha; Post-commit: **commit SHA** | Artifact Evidence **YES**; commit SHA when exists **YES** |
| 4. Evidence | VERIFIED Artifact Evidence bound to A (and later Git Evidences) | **YES** — already |
| 5. Authority | Gate D + Confirmations for B’s authorized slice | **YES** — already per Attempt |

**Minimum new durable *concept* (not necessarily new table):**
“continuable workspace = verified prior Attempt A’s worktree under EC X until superseded by verified Git commit SHA.”

---

## MINIMUM CONTINUITY WINDOW

**Hypothesis supported by doctrine + code:** durable **filesystem** workspace continuity is required primarily in the **pre-commit continuity window**:

```
Attempt A (FS write) → verify artifact Evidence
  → [FS workspace must remain continuable]
Attempt B (commit) → verify commit SHA
  → [Git SHA becomes durable anchor]
Attempt C+ (push/PR/merge…) may reconstruct fresh worktrees from commit SHA
  + verifiedEffects / Evidence lineage
```

After first verified local commit, reconstructing a detached worktree at that SHA is **Git-truth continuation**, not FS-orphan continuation.

**MINIMUM WINDOW:** succeeded mutable FS Attempt → until authorized commit Attempt verifies a commit SHA (or EC abandoned/failed/cleaned by explicit policy).

This is a **hypothesis for Morris**, not an adopted decision.

For the current proof EC (docs-write done; Git requirements outstanding), continuity needed for **A→B (commit)**; B→C+ likely SHA-anchored if B lands a commit.

---

## OPTIONS

### OPTION A — EC-SCOPED DURABLE WORKSPACE LINEAGE
Keep Git worktrees; introduce governed lineage scoped to EC so later Attempts resume the same verified worktree state (conceptual “current continuable workspace for EC”).

- Identity: EC + lineage pointer (priorAttemptId and/or path).
- Restart: requires stable execRoot + rediscovery/validation.
- Cleanup: on EC terminal / superseded by commit SHA / explicit abandon.
- Persistence: may start derivation-only; escalate if multi-workspace ambiguity.

### OPTION B — PRIOR-ATTEMPT WORKTREE CONTINUATION (operational)
Attempt B explicitly resumes Attempt A’s verified worktree with binding checks:
same Project, repo, EC, A succeeded, VERIFIED artifact Evidence, expected HEAD/dirty/digest.

- Recovery: `workspacePathForAttempt(stableExecRoot, priorAttemptId)` + `git worktree list` / path exists + verify.
- Requires **new port method** (attach/verify) — prepare must not recreate.
- Persistence: priorAttemptId already durable; path often derivable.

### OPTION C — RECONSTRUCT FRESH WORKTREE FROM VERIFIED ARTIFACTS
Fresh base worktree + Cursor (or Studio) re-applies prior outputs then next slice.

- **Challenge:** duplicate mutation; Studio apply would violate D-GCEC-09; Cursor re-write is new effect not exact-state continuation; provenance diluted.
- Exact-state guarantee **weak**.
- Treat as last resort / not true continuation.

### OPTION D — MANAGED CLONE AS SHARED MUTABLE STATE
Use managed clone itself as shared dirty tree across Attempts.

- **Challenge:** destroys isolation; concurrency/corruption; accidental Git mutation on clone; multi-Project scaling poor.
- Strongly reject for Product REAL path.

### OPTION E — PRODUCT-PERSISTED WORKSPACE LINEAGE
Explicit Product domain object/columns for workspace lineage.

- Correct if derivation fails crash/orphan/concurrency proofs.
- Requires Morris (schema/migration).
- Do not implement under this GO.

### OPTION F — SAFETY JOURNAL AS CONTINUATION REGISTRY
Store/recover worktreeRef from LAUNCHED payload / frontier.

- Journal is **TEMPORARY WITH EXIT / NOT Product Store**.
- Cheap ≠ correct.
- May optionally *mirror* technical locator for crash UX, **must not** become sole Product truth.
- Reject as primary registry.

---

## OPTION COMPARISON MATRIX

| Criterion | A | B | C | D | E | F |
|-----------|---|---|---|---|---|---|
| Doctrinal alignment | PASS | PASS | PARTIAL | FAIL | PASS | PARTIAL |
| D-GCEC-15 fidelity | PASS | PASS | PARTIAL | PARTIAL | PASS | PARTIAL |
| Cursor-only mutation | PASS | PASS | FAIL/PARTIAL | PASS | PASS | PASS |
| Same-EC clarity | PASS | PASS | PARTIAL | PARTIAL | PASS | PARTIAL |
| Restart safety | PARTIAL→PASS | PARTIAL→PASS | PARTIAL | PARTIAL | PASS | FAIL* |
| Crash reconciliation | PARTIAL | PARTIAL | PARTIAL | FAIL | PASS | FAIL* |
| Exact-state guarantee | PASS | PASS | FAIL | PARTIAL | PASS | PARTIAL |
| Provenance | PASS | PASS | FAIL | PARTIAL | PASS | PARTIAL |
| Git truth compatibility | PASS | PASS | PARTIAL | FAIL | PASS | PARTIAL |
| Concurrency | PARTIAL | PARTIAL | PARTIAL | FAIL | PASS | FAIL |
| Cleanup lifecycle | PARTIAL | PARTIAL | PASS | FAIL | PASS | FAIL |
| Product persistence impact | CONDITIONAL | CONDITIONAL | NO | NO | YES | NO** |
| Safety-journal impact | LOW | LOW | NONE | NONE | NONE | HIGH/BAD |
| Implementation complexity | MED | MED | HIGH semantic | LOW but unsafe | HIGH | LOW but debt |
| Reversibility | PASS | PASS | PARTIAL | FAIL | PARTIAL | FAIL |
| Debt introduced | LOW–MED | LOW–MED | HIGH | HIGH | MED | HIGH |
| Exit strategy | PASS | PASS | PARTIAL | FAIL | PASS | FAIL |
| Deterministic proofability | PASS | PASS | PARTIAL | PARTIAL | PASS | PARTIAL |
| Bounded REAL proofability | PASS | PASS | PARTIAL | FAIL | PASS | PARTIAL |
| Effect on future GCEC-PUSH | ENABLES | ENABLES | WEAK | BLOCKS | ENABLES | RISKY |
| Architecture-parallel risk | LOW | LOW | MED | HIGH | LOW | MED |

\* F restart/crash FAIL as *Product* truth because TEMPORARY WITH EXIT.
\*\* F claims no Product persistence while smuggling Product semantics into technical journal.

---

## RECOMMENDED OPTION

**RECOMMENDATION (NOT ADOPTED): OPTION B as primary mechanism, framed by OPTION A lineage semantics.**

Concrete candidate design (future Delivery — not this GO):

1. **Keep** `StudioGitWorktreeWorkspace` + Git worktrees + Cursor launch path.
2. **Extend** `RealExecutionWorkspacePort` with a resume/attach/verify operation (name TBD) that:
   - resolves path via `workspacePathForAttempt(execRoot, priorAttemptId)` under **stable** execRoot policy;
   - fail-closed if missing/orphan/wrong remote/HEAD/digest binding;
   - **does not** create a new detached tree from baseHeadSha when resuming FS state;
   - never copies artifact bytes as Studio writer.
3. **Select priorAttemptId** from Product Attempt history under same EC (latest succeeded FS slice with VERIFIED Evidence) — EC-scoped lineage without necessarily new table.
4. **Enforce** binding checks (Project, repo identity, EC, Evidence digest, single active Attempt).
5. **Stabilize** production rule: REAL composition must use restart-stable execRoot (already default); forbid silent tmpdir for Product live REAL when continuation required.
6. **Defer Product schema** unless deterministic crash/orphan/concurrency proofs show derivation insufficient → then escalate to OPTION E with Morris.

**Why this recommendation:**
- Implements D-GCEC-15 workspace-level need without second FSM.
- Preserves D-GCEC-09 (Cursor mutates; Studio verifies/prepares).
- Reuses existing path formula and Git worktree isolation.
- Minimizes persistence (CONDITIONAL).
- Enables bounded A→B commit REAL after Delivery + review.
- Aligns with minimum pre-commit continuity window.

---

## WHY THE OTHER OPTIONS ARE NOT RECOMMENDED

- **C:** Not exact continuation; risks Studio mutation or duplicate Cursor write; weak provenance.
- **D:** Isolation/concurrency/corruption; fights worktree model; high parallel-architecture smell.
- **E:** Valid escalation path, but premature as *first* move if A/B derivation works — avoid schema until proven necessary.
- **F:** Violates journal TEMPORARY WITH EXIT / NOT Product Store if used as registry of record.

---

## PERSISTENCE IMPACT

| Question | Answer |
|----------|--------|
| Structural Product persistence required now? | **CONDITIONAL — prefer NO** for first Delivery slice |
| New Product schema/table/column? | **CONDITIONAL — prefer NO**; escalate to E only after failed derivation proofs |
| Migration? | **NO** if no schema; **YES** if E adopted later |
| Safety journal as Product registry? | **NO** |
| May journal *mirror* worktreeRef technically? | Optional later; never sole authority |

---

## DOMAIN MODEL IMPACT

- No new Attempt/EC status.
- No nested Cycle.
- Optional future domain concept: “continuable workspace lineage” (logical) keyed by EC + priorAttemptId.
- `retryOfAttemptId` remains retry lineage — **not** sufficient alone as workspace handoff (different semantics).

---

## PORT / INTERFACE IMPACT (future)

Likely evolve:

- `RealExecutionWorkspacePort` — add resume/attach/verify; keep prepare for first mutable Attempt / post-commit reconstruct.
- `StartExecution` / gateway — choose prepare vs resume based on authorized slice + prior verified FS Attempt.
- Completion facts — already carry ephemeral `worktreeRef`; Product Attempt still should not require journal as registry.

Must not create a second launch port or second executor.

---

## RUNTIME COMPOSITION IMPACT

- Keep `composeStudioProductRealBoundary` defaults (stable `.sfia-exec`).
- Document that Product live REAL continuation **requires** stable execRoot (not disposable harness override).
- Harness REAL may still use disposable roots for isolated proof **of a single Attempt**, but continuation REAL proofs must use stable execRoot.

---

## GIT / WORKTREE IMPACT

- Continue `git worktree add --detach` for *initial* FS Attempts and for *post-commit* reconstruct-from-SHA.
- Resume path: validate existing worktree; no silent reset to baseHeadSha.
- After verified commit: new Attempts may detach at commit SHA (window closed).

---

## EVIDENCE / PROVENANCE IMPACT

- Artifact Evidence remains binding for FS continuity checks (digest/path/Attempt/EC/Project).
- Git Evidences (commit/push/PR/merge) remain independent verification claims.
- Evidence must not become execution-state DB; it gates eligibility to resume, not path invention.

---

## CRASH / RESTART / RECONCILIATION

Fail-closed rules (candidate):

1. If priorAttemptId known but path missing → STOP / non-resumable (reconcile / human).
2. If path exists but remote/HEAD/digest binding fails → STOP.
3. If two candidate worktrees claim continuity → STOP (ambiguity).
4. Ephemeral path existence alone ≠ authority.
5. Process restart: rediscover via priorAttemptId + stable execRoot; re-verify before launch.

---

## CONCURRENCY

- Single active Attempt per EC remains invariant.
- Do not attach same worktree to two concurrent Attempts.
- Managed clone must remain non-shared mutable execution state (reject D).

---

## CLEANUP / EXIT

Conceptual lifecycle (analysis only — **not** new Attempt/EC statuses):

| Phase | Owner | Entry | Exit | Cleanup |
|-------|-------|-------|------|---------|
| CREATE | Studio workspace port | prepare first FS Attempt | ACTIVE | n/a |
| ACTIVE | Cursor + Studio observe | launch | VERIFIED or fail | preserve on LAUNCHED failure |
| VERIFIED | Studio verification + Evidence | independent verify PASS | CONTINUABLE | preserve |
| CONTINUABLE | EC lineage | verified FS + outstanding next slice | CONSUMED by commit SHA / abandon | no delete |
| CONSUMED / SUPERSEDED | Git SHA or explicit abandon | verified commit or EC terminal | CLEANABLE | allowed |
| CLEANABLE | ops/studio policy | superseded + no outstanding pre-commit need | removed | `git worktree remove` + dir |

Cleanup triggers (candidate): EC completed/failed/cancelled; Cycle finalized; superseded by verified commit SHA; explicit cleanup command; orphan after failed binding.

**Never** delete the only uncommitted verified business state before next required effect satisfied or explicitly abandoned.

No cleanup implementation in this GO.

---

## TEMPORARY DEBT

| Debt | Notes | Exit |
|------|-------|------|
| REAL_CONTINUATION_GAP | Qualified here | Close by evidence after Delivery + deterministic + REAL continuation |
| Journal TEMPORARY WITH EXIT | Do not load Product workspace registry onto it | Keep technical; exit when Product path sufficient |
| Harness disposable execRoot vs production stable | Document; continuation REAL must use stable | Policy in Delivery |
| TEMP-GCEC-PRPM-01 / TEMP-GCEC-F14-BIND-01 | Unrelated open debts | Separate |

---

## DETERMINISTIC PROOF PLAN (future Delivery)

1. Same-EC Attempt A (fake/deterministic FS) writes artifact in worktree W.
2. Attempt B resumes W via new attach API — sees artifact; binding PASS.
3. Negatives: wrong EC / wrong project / missing path / digest mismatch / path exists prepare-create → fail-closed.
4. Restart composition: rediscover W from priorAttemptId + stable execRoot.
5. Ambiguous dual worktrees → fail-closed.
6. Preserve existing GCEC / D-GCEC-15 / Gate D / CR-GCEC-23..25 regressions.

---

## BOUNDED REAL PROOF PLAN (distinct Morris REAL GO later)

Only after deterministic PASS + architecture adoption:

1. Stable execRoot Product composition.
2. Attempt A REAL docs-write (or reuse governed retained state if authorized — prefer fresh controlled A under stable root).
3. Attempt B REAL commit under SAME EC with resume — **one** REAL commit invocation when authorized.
4. Independent verify commit SHA; Evidence; EC progress honest.
5. Remote still no push unless separate GCEC-PUSH GO.

Not authorized by this qualification GO.

---

## GCEC-PUSH READINESS CONDITIONS

GCEC-PUSH remains **NOT READY** until at least:

1. Architecture decision `D-GCEC-CONT-01` adopted by Morris.
2. Delivery implements continuation foundation.
3. Deterministic same-EC A→B + crash negatives PASS.
4. Bounded REAL continuation (commit) CLOSED BY EVIDENCE.
5. Remote/push still separately gated.

Docs-write REAL alone does **not** authorize push.

---

## FILES LIKELY TO CHANGE IN FUTURE DELIVERY

- `realExecutionWorkspacePort.ts`
- `studioGitWorktreeWorkspace.ts`
- `studioCursorRealLaunchGateway.ts` and/or `startExecution.ts` (resume selection)
- possibly `composeStudioProductRealBoundary.ts` (policy comments / invariants)
- `completeBoundedDocsWriteLaunch.ts` (consume resumed workspace facts)
- new deterministic tests under `__tests__/oa/...`
- **not** required first: SQLite Product schema

## FILES / AREAS THAT MUST NOT CHANGE (under continuation design)

- D-GCEC-15 semantics / no new waiting status
- Cursor-only business mutation ownership
- Gate D model
- Evidence pipeline as proof (not as workspace DB)
- Safety journal becoming Product Store
- Managed clone as shared dirty executor (Option D)
- Runtime v3 adoption sneaking in

---

## MORRIS DECISION REQUIRED

### D-GCEC-CONT-01 — WORKSPACE CONTINUATION ARCHITECTURE

**Option A:** EC-scoped durable workspace lineage (conceptual framing)

**Option B:** Prior-Attempt worktree continuation via attach/verify port (operational)

**Option C:** Reconstruct fresh worktree from verified artifacts (not true continuation)

**Option D:** Managed clone shared mutable state (reject)

**Option E:** Product-persisted workspace lineage schema (escalation)

**Option F:** Safety journal as continuation registry (reject as primary)

**Cursor recommendation:** **B framed by A**; escalate to **E** only if derivation proofs fail.

**Structural persistence required:** **CONDITIONAL (prefer NO initially)**

**New Product schema required:** **CONDITIONAL (prefer NO initially)**

**Migration required:** **NO** (initially) / **YES** if E later

**Architecture parallel:** **NO** (if B/A within existing ports)

**Temporary debt:** REAL_CONTINUATION_GAP until Delivery+REAL continuation evidence

**Exit:** Close gap by governed A→B proof; cleanup policy; no journal-as-Product

**Morris decision:** **PENDING**

---

## NEXT CAPABILITY

**Delivery lot (single coherent):** implement workspace resume/attach foundation + deterministic same-EC Attempt A→B + crash/restart negatives + retain GCEC regressions.

Then distinct Morris GO: bounded REAL continuation (commit) under same EC.

Then distinct protected gates: GCEC-PUSH / PR / MERGE as separately authorized.

---

## ANTI-CLAIMS

- This pack does **not** adopt architecture.
- Does **not** close REAL_CONTINUATION_GAP.
- Does **not** authorize Product code/schema changes.
- Does **not** authorize REAL StartExecution.
- Does **not** make GCEC-PUSH ready.
- Does **not** adopt runtime v3.
- Recommendation ≠ Morris decision.


## PRODUCT HEAD
`92ad3fd41e065d0ebe76c59b4eedb622715a11e2`

## PRODUCT TRACKED CHANGES
NONE

## PRODUCT COMMIT / PUSH
NONE / NONE

## PROOF-REPO MUTATION / PR / MERGE
NONE / NONE / NONE

## GCEC-CURSOR-REAL
CLOSED BY PRIOR EVIDENCE

## REAL_CONTINUATION_GAP
OPEN / QUALIFIED

## GCEC-PUSH
NOT READY

## ANTI-CLAIMS
- qualification ≠ adoption
- ≠ gap closed
- ≠ persistence adopted
- ≠ REAL / push / PR / merge authorized
- ≠ runtime v3 ADOPTED
- recommendation ≠ Morris decision

## VERDICT
**PASS — REAL_CONTINUATION_GAP ARCHITECTURE QUALIFIED / MORRIS STRUCTURAL DECISION REQUIRED**
