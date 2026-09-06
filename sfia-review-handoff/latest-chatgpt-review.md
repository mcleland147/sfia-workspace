# GLOBAL-MR-STAGE-A-CORR-04-MW6-MEMORY-B-SESSION-01 — FULL Review Pack

- **timestamp (UTC):** 2026-09-06T09:12:00Z
- **Cycle:** 8 — Delivery / implementation · **RUN / CORRECTIVE** · **CRITICAL**
- **Morris GO consumed:** CORR-04 MW6 × MEMORY B SESSION COMPATIBILITY — ZERO REAL + PUBLISH REVIEW HANDOFF

---

## 1. Git truth

| Item | Value |
|------|-------|
| Repository | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-global-mr-corr-04-mw6-memory-b` |
| Branch | `fix/sfia-studio-global-mr-corr-04-mw6-memory-b-session` |
| HEAD | `9ce5933c039f8341540b9247e4db7ee5ae4ab153` |
| origin/main | `9ce5933c039f8341540b9247e4db7ee5ae4ab153` (required — matched) |
| Initial status | clean at creation from exact main |
| Final status | modified (unstaged): `mw6GovernedNoraTurn.ts` + `c3.mw6-full-product-path.d0.test.ts`; untracked local `node_modules` symlink only |
| REAL continuation worktree | preserved separately at `…-global-mr-stage-a-real-cont-01` with `.tmp-sfia-real/**` Evidence intact |

---

## 2. Input Review Handoff

`70210fb3b7a8a2862bbf1667ef2afa65e4b42528` — verified before publication.

---

## 3. Convergence pre-check

| Dimension | Assessment |
|-----------|------------|
| Capability | Nora Cognitive Completion — governed F2/Memory B → MW6 continuity |
| Milestone | Stage A blocking corrective (CORR-04) |
| KEEP | ProductSqliteSession, Memory B compaction, MemoryBSessionView, runNoraCognitiveTurn, F1 Truth C wiring, MW6 composition, CORR-02 hosted observation |
| ADAPT | MW6 → `runNoraCognitiveTurn` invocation only (`truthCRevision`) |
| Gap closed | MW6 omitted Truth C revision → raw compaction marker reached Runner |
| Dependency | Existing MemoryBSessionView path (no parallel architecture) |
| Trajectory | Deterministic close → ChatGPT review → Morris may authorize Git integration → later distinct GO for 9 W-Sources REAL |
| Exit proof | Deterministic product-path regression GREEN |
| Debt/reserve | CORR-04 REAL revalidation of the 9 W-Sources cells **not** proven |
| Next gate | ChatGPT Critical Review |

---

## 4. CORR-04 Evidence origin

| Item | Value |
|------|-------|
| Stage A continuation campaign | `nora-global-mr-stage-a-cont-1788683505786` |
| W-Sources usable | 1/10 (luna\|none canary PASS · hosted 1/1/1) |
| Fail fingerprint | `ok=false` · `code=NORA_TURN_ERROR` · message contains Unsupported item `sfia_memory_b_compaction` |
| Why PRODUCT_PATH | Shared ProductSqliteSession accumulated F2 turns → compaction record persisted → MW6 passed raw Session to Runner. Not a model cognitive FAIL. |

---

## 5. Root-cause verification (seven points)

| # | Hypothesis | Verdict | Location |
|---|------------|---------|----------|
| 1 | ProductSqliteSession persists compaction in `session_items` | **CONFIRMED** | `productSqliteSession.ts` schema `session_items`; `applyCompactionIfNeeded` → `replaceItemsAtomically` |
| 2 | Record type = `sfia_memory_b_compaction` | **CONFIRMED** | `memoryBCompaction.ts` L69 / L484 |
| 3 | Compaction/replay filters internal record into supported replay | **CONFIRMED** | `resolveReplayItems` returns summary message + recent only; `MemoryBSessionView.getItems()` serves filtered `replayItems` |
| 4 | `runNoraCognitiveTurn` builds MemoryBSessionView only when `truthCRevision` provided | **CONFIRMED** | `runNoraCognitiveTurn.ts` L832–850 `if (probe.session && … && input.truthCRevision)` |
| 5 | F1/orchestrateTurn provides `truthCRevision` from project LPS | **CONFIRMED** | `orchestrateTurn.ts` L257–260 |
| 6 | MW6 had same project LPS fields but did **not** pass `truthCRevision` | **CONFIRMED** | Pre-patch `mw6GovernedNoraTurn.ts` call site lacked `truthCRevision` despite `project.lpsId` / `project.lpsVersion` |
| 7 | Therefore MW6 exposed raw ProductSqliteSession (incl. marker) to Runner | **CONFIRMED** | Causal chain + RED reproduction |

**ROOT CAUSE CONFIRMED — no STOP.**

---

## 6. RED reproduction

| Field | Value |
|-------|-------|
| Command | `unset OPENAI_API_KEY; OPS1_CONVERSATION_PROVIDER=fake npx vitest run __tests__/nora-eval/c3.mw6-full-product-path.d0.test.ts -t "CORR-04"` |
| Test | `CORR-04 — pre-compacted Memory B session is MW6-safe (Truth C → MemoryBSessionView)` |
| Setup | Production `applyCompactionIfNeeded` on same `projectId` + `sessionKey=f1-default` + `sessionDbPath` MW6 consumes |
| Exact failure (pre-patch) | `result.ok === false`; assertions `code === "NORA_TURN_ERROR"` and `message` matches `/sfia_memory_b_compaction/` **passed**; then failed on `expect(ok).toBe(true)` with message `CORR-04 expected GREEN after Truth C wiring` |
| REAL fingerprint reproduced? | **YES** — same `NORA_TURN_ERROR` + `sfia_memory_b_compaction` via Fake Agents Runner session load (deterministic) |

Tooling gap: **NONE** for primary product-path reproduction.

---

## 7. Product diff (FULL)

File: `projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts`

```diff
@@ -407,6 +407,13 @@ export async function runMw6GovernedNoraProductTurn(
       enableTools: true,
       workspaceRoot,
       sessionDbPath: input.sessionDbPath,
+      // CORR-04 — same Truth C revision wiring as F1/orchestrateTurn so
+      // runNoraCognitiveTurn builds MemoryBSessionView and does not expose
+      // internal sfia_memory_b_compaction markers to the Agents Runner.
+      truthCRevision: {
+        lpsId: project.lpsId,
+        lpsVersion: project.lpsVersion,
+      },
       turnWorkloadContext: {
```

No other production files modified.

---

## 8. Test diff (FULL useful)

File: `projects/sfia-studio/app/__tests__/nora-eval/c3.mw6-full-product-path.d0.test.ts`

Added imports for Memory B / session helpers + `currentF2Context`.

Added one regression `it("CORR-04 — …")` that:

1. Seeds accepted HD + confirmed MW6 EC (existing C3 helpers).
2. Builds ProductSqliteSession on shared path/key.
3. Uses production `applyCompactionIfNeeded` to create governed compaction state.
4. Asserts raw `getItems()` contains `sfia_memory_b_compaction`.
5. Asserts `createMemoryBSessionView` filters the marker.
6. Invokes `runMw6GovernedNoraProductTurn` with same `sessionDbPath`.
7. Expects success, `liveHostedDispatchCalls===0`, non-`none` compaction state, stored compaction retained.

(+136 / −1 lines in that file.)

---

## 9. Why MemoryBSessionView (no parallel architecture)

F1 already proves the correct contract: pass current Truth C revision → `runNoraCognitiveTurn` → `createMemoryBSessionView` → Runner sees only supported replay items while compaction metadata remains in SQLite.

CORR-04 reuses that exact path from MW6. It does **not** strip markers in MW6, clear sessions, invent `mw6SessionView`, or change ProductSqliteSession.

---

## 10. GREEN evidence

| Check | Result |
|-------|--------|
| CORR-04 regression | **PASS** (3/3 in c3 file incl. prior C3 cases) |
| C3 MW6 full path | **PASS** |
| CORR-02B hosted observation | **8/8 PASS** |
| MW1 compaction unit + modeled | **26/26 PASS** |
| nora-eval | **240 passed** / 3 skipped |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** (0 warnings/errors) |
| `npm test` | **3033 passed** / 135 skipped |
| `npm run build` | **PASS** |
| `git diff --check` | **PASS** |

---

## 11. Fake / Real qualification

| Item | Status |
|------|--------|
| Fake | `FakeConversationProvider` / deterministic hosted boundary |
| Same orchestration | `runMw6GovernedNoraProductTurn` → `runNoraCognitiveTurn` → MemoryBSessionView → Agents Runner |
| ZERO REAL | `OPENAI_API_KEY` unset; `OPS1_CONVERSATION_PROVIDER=fake`; `liveHostedDispatchCalls=0`; no spend |
| Entry | REAL defect observed / deterministic correction **NOT** previously proven |
| Exit | **CORR-04 = CLOSED AT DETERMINISTIC PRODUCT-PATH SCOPE** |
| Explicitly NOT proven | CORR-04 REAL revalidation; 9 remaining W-Sources REAL cells |

---

## 12. Invariant verification

1. Memory B non-authoritative — retained
2. Truth C authoritative — MW6 now supplies current LPS revision
3. Compaction record remains internal storage — still in SQLite after MW6
4. Runner receives supported replay items only — via MemoryBSessionView
5. No fabricated HumanDecision
6. No authority widening
7. No new Session engine
8. No campaign-only bypass
9. Same project/session scope
10. No cross-project replay
11. Stale Truth C invalidation semantics untouched
12. Grounding preservation untouched
13. CORR-02 hosted factual path unchanged (regression green)
14. NoraCampaignBudget remains accounting SoT
15. ZERO REAL

---

## 13. Exact modified-file list

Production:

- `projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts`

Tests:

- `projects/sfia-studio/app/__tests__/nora-eval/c3.mw6-full-product-path.d0.test.ts`

---

## 14. Exact untracked relevant to review

- `projects/sfia-studio/app/node_modules` — local symlink for test runtime only (not product)

No `.tmp-sfia-real/**` Evidence in this worktree (REAL artifacts preserved in continuation worktree).

---

## 15. No product commit / push / PR

Working-tree candidate only. **No** `git commit`, **no** product push, **no** PR.

---

## 16. Reservations

1. Deterministic PROVEN ≠ REAL BOUNDARY PROVEN for the 9 W-Sources cells.
2. Stage A Outcome **C** retained.
3. Docs 08/10/11/Roadmap not truth-synced in this cycle.
4. Future campaign isolation of sessions may still be useful operationally — not a substitute for this product fix.

---

## 17. Anti-claims

Does **not** claim:

- Stage A complete
- Stage B authorized
- production routing / model selection
- Cognitive Completion PROVEN
- runtime v3 ADOPTED
- product integrated on main
- 9 W-Sources REAL re-run authorized or executed
- invoice / spend

---

## 18. Verdict

READY FOR CHATGPT CRITICAL REVIEW —
CORR-04 MW6 × MEMORY B SESSION COMPATIBILITY CLOSED AT DETERMINISTIC PRODUCT-PATH SCOPE —
ROOT CAUSE CONFIRMED —
MW6 NOW PASSES CURRENT PROJECT TRUTH C REVISION INTO EXISTING MEMORY B VIEW PATH —
PRE-COMPACTED / F2-ACCUMULATED PRODUCT SESSION REGRESSION GREEN —
NO INTERNAL sfia_memory_b_compaction MARKER EXPOSED TO RUNNER —
MEMORY B / TRUTH C AUTHORITY SEMANTICS RETAINED —
CORR-02 HOSTED OBSERVATION NON-REGRESSION PASS —
ZERO REAL —
ZERO PRODUCT COMMIT/PUSH/PR —
STAGE A OUTCOME C RETAINED —
STAGE A NOT COMPLETE —
STAGE B NOT AUTHORIZED —
REVIEW HANDOFF PUBLICATION FOLLOWS —
CHATGPT CRITICAL REVIEW REQUIRED.

---

## 19. Next gate

ChatGPT Critical Review.

If accepted: Morris may authorize Git integration of CORR-04.

Only after integration + merge + post-merge verification should a **distinct** Morris GO authorize the remaining Stage A REAL Evidence (9 W-Sources base cells).

**Do not authorize or execute those 9 REAL cells in CORR-04.**
