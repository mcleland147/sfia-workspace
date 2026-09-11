# SFIA STUDIO — GCEC-CURSOR-REAL
BOUNDED CURSOR REAL DOCS-WRITE PROOF — STOP

## TIMESTAMP
2026-09-11T17:43:37+02:00

## GO MORRIS
GCEC-CURSOR-REAL consumed.

Authorized: ONE bounded REAL Cursor docs-write via Studio StartExecution.
NOT authorized / NOT opened: GCEC-PUSH, GCEC-PR, GCEC-MERGE, GCEC-RUNTIME-V3.

## CYCLE
8 — Delivery / implémentation

## TYPE
EVOL

## PROFILE
CRITICAL

## GIT TRUTH BEFORE
- worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- HEAD: `290eca6544f93a898fc3920f99142dc6130ba05e`
- parent: `8d05732c0be7eced7a6acee71d1e1d990a1e8db0`
- origin/main: `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- prior handoff: `e183d5076d742c9d1e6105ae636061c8e60343f4`
- Product tracked: clean at GO start

## GIT TRUTH AFTER (this STOP)
- Product HEAD unchanged: `290eca6544f93a898fc3920f99142dc6130ba05e`
- LOCAL PRODUCT COMMIT: NONE (REAL proof did not PASS — commit not authorized)
- Uncommitted local adaptations present (see FILES) — not committed

## SOURCES
Required method/convergence/cadrage/v3 framing read; prior handoff e183d507; local candidate HEAD 290eca65 inspected.
Gateway already supported docs-write (omit `--mode ask`) at candidate HEAD.

## CONVERGENCE PRE-CHECK
- Build Doctrine VALIDATED/ACTIVE
- Product Completion COMPLETE/CLOSED
- Runtime v3 NON ADOPTED
- Deterministic GCEC PROVEN
- Repo create PROVEN

## FAKE / REAL QUALIFICATION
Target was CURSOR REAL DOCS-WRITE BOUNDARY PROVEN.
Result: NOT PROVEN — STOP before completion reconciliation.

## CURSOR CLI DISCOVERY
- binary resolved by Studio: `/Applications/Cursor.app/Contents/Resources/app/bin/cursor`
- IDE version: `3.19.19` (6496ea8a… arm64)
- Agent CLI about: `2026.08.11-e8db854`, logged in as `m.cleland@live.fr`
- From installed `cursor agent --help` (no invented flags):
  - `--mode` choices: `plan` | `ask` only — both read-only
  - default agent mode (omit `--mode`) + `--print`: has write tools (and shell)
  - `--sandbox enabled|disabled`
  - `--workspace`, `--trust`, `--print`
- Selected mutation envelope for docs-write (existing gateway): omit `--mode ask`; `--print --workspace --trust --sandbox enabled` + governed instruction
- Shell: instruction forbids Shell; sandbox enabled

## REAL GATEWAY BEFORE
Already docs-write capable at 290eca65 (sibling path over existing gateway).

## REAL GATEWAY AFTER (local uncommitted adaptations only)
1. `studioCursorRealLaunchGateway.ts` — docs-write instruction strengthened: no Shell; file-edit tools only; do not modify README.md
2. `completeBoundedReadOnlyLaunch.ts` / `completeBoundedDocsWriteLaunch.ts` — optional `awaitIfPending` (default false) so REAL harness can await terminal observation without breaking T-R3-PENDING/ASYNC
3. NEW harness (skipUnless dual env): `gcecCursorRealDocsWrite.real.d0.test.ts`

## PROOF REPOSITORY BEFORE
- identity: `mcleland147/sfia-gcec-proof-task-manager` PRIVATE
- main: `32c7c2008197e5c61b32c16479144e9863291358`
- contents: README.md only
- `docs/functional-design.md`: ABSENT
- branches: main only

## LOCAL MANAGED REPOSITORY
- managed base: `/tmp/sfia-gcec-managed-72092`
- clone: `.../mcleland147__sfia-gcec-proof-task-manager`
- HEAD: `32c7c2008197e5c61b32c16479144e9863291358`
- outside sfia-workspace: YES

## WHAT HAPPENED (REAL ATTEMPT)
1. Deterministic preflight PASS (focused GCEC + residual wiring after awaitIfPending fix).
2. REAL-gated harness started Product path with `SFIA_STUDIO_CURSOR_REAL=1` + `SFIA_GCEC_CURSOR_REAL_PROOF=1`.
3. Trajectory → EC → agent selection → Gate D → StartExecution reached `running` with adapter `adp:m4-cursor-cli-real` in ~67ms (spawn-ACK semantics).
4. Harness incorrectly asserted `started.attempt.realProcessInvoked === true` (field undefined on Attempt aggregate).
5. Vitest failed; `afterEach` deleted disposable Product DB / execRoot / worktree temps.
6. No durable processRef / observation / artifact retained.
7. No orphan Cursor agent process found after teardown.
8. Managed clone remains clean at bootstrap SHA; remote proof repo unchanged.

## REAL PROCESS INVOKED
LIKELY YES (spawn-ACK path via REAL gateway) — but NOT durably reconcilable after harness teardown.

Therefore §21 applies: no automatic second REAL attempt.

## ARTIFACT
NOT VERIFIED — no retained worktree; clone has no `docs/functional-design.md`.

## INDEPENDENT VERIFICATION
NOT COMPLETED

## EVIDENCE / REVIEWBUNDLE
NOT PRODUCED

## ATTEMPT / EC / CYCLE
Not retained (temp SQLite removed).

## REAL CONTINUATION
GAP (and first slice not proven) — fresh worktree from base SHA would drop uncommitted artifact; no persistent workspace identity (GCEC-PERSIST CLOSED).

## PROOF REPOSITORY AFTER
- remote main: `32c7c2008197e5c61b32c16479144e9863291358` (unchanged)
- remote artifact: ABSENT
- branches: main only
- REMOTE MUTATION: NONE
- PROOF-REPO COMMIT/PUSH: NONE

## PRODUCT MUTATION
Uncommitted local adaptations only (listed). No Product push. No Product commit.

## GCEC-PUSH / PR / MERGE
NOT CONSUMED / NONE / NONE

## CURSOR REAL (Studio/Nora OpenAI)
ZERO successful completed REAL business proof. One incomplete REAL launch attempt (spawn-ACK suspected).

## PERSISTENCE
NO NEW STRUCTURAL PERSISTENCE

## FILES CREATED/MODIFIED/DELETED IN PRODUCT TREE (uncommitted)
CREATED:
- `projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts`

MODIFIED:
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts`

DELETED: none

## TESTS / COUNTS
- Deterministic focused GCEC before REAL: PASS (112)
- Residual wiring after awaitIfPending opt-in: PASS (14)
- REAL proof run: FAIL (harness assertion / teardown) — see `.tmp-sfia-review/gcec-cursor-real-proof-run2.out`

## LOCAL PRODUCT COMMIT
NONE

## PRODUCT PUSH
NONE

## ANTI-CLAIMS
- spawn-ACK ≠ completed REAL docs-write proof
- incomplete REAL attempt ≠ Cursor REAL boundary proven
- local adaptations ≠ READY FOR GCEC-PUSH
- repository exists ≠ Project.repositoryBinding for a live campaign Product DB (disposable only)
- runtime v3 NON ADOPTED

## OPEN GATES
- GCEC-CURSOR-REAL: remains OPEN (not closed by evidence)
- GCEC-PUSH / GCEC-PR / GCEC-MERGE / GCEC-RUNTIME-V3: CLOSED

## DEBT
- TEMP-GCEC-PRPM-01
- TEMP-GCEC-F14-BIND-01
- NEW: harness asserted non-existent Attempt.realProcessInvoked field; must use journal LAUNCHED processRef (fixed locally, uncommitted)
- NEW: REAL_CONTINUATION_GAP for subsequent same-EC Attempt (fresh worktree)

## WHY STOP (not PASS / not silent retry)
§21 — once REAL process invocation is plausible/true, do not automatically retry when state cannot be reconciled.
Temps wiped; no retained observation/artifact; remote clean; second REAL StartExecution would be a new business process invocation.

## REQUIRED NEXT MORRIS DECISION
New GO to re-run ONE REAL StartExecution with the fixed harness (journal-based processRef proof + `awaitIfPending: true`), after optional commit of the bounded adaptations.

## VERDICT
**STOP — GCEC-CURSOR-REAL RECONCILIATION REQUIRED**
