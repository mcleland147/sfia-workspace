# SFIA STUDIO — Review Pack — GCEC-REAL-A2B-02

TIMESTAMP: 2026-09-12T13:19:42Z

CYCLE: 8 — Delivery / implementation

TYPE: EVOL

PROFILE: CRITICAL

GO MORRIS: GCEC-REAL-A2B-02 GO REAL CONSUMED

AUTHORIZATION: ONE FRESH A→B REAL CAMPAIGN ONLY

INPUT HANDOFF: `1ee4119adad5f1ba9e67c0378b6dbaa7f098bf7e`

PRODUCT HEAD BEFORE: `be71eee0bbfae341d16cfab401f3c38f46564d4c`

PRODUCT PARENT: `645ec7e0c24626799382b07bdf90de918cefb0eb`

origin/main: `a9f6c310a0826d0e5bd6f7264603382a86564db1`

---

## SOURCES

CURRENT LOCAL method/convergence/completion/v3 framing + handoff @ 1ee4119a… + CONT-01/02 / AGENT-01 / StartExecution / observe/verify / REAL harness `gcecCursorRealSameEcCommit.real.d0.test.ts` (unique).

---

## CONVERGENCE PRE-CHECK

- Build Doctrine: VALIDATED / ACTIVE
- Roadmap: VALIDATED / ACTIVE LIVING
- Product Completion: COMPLETE / CLOSED
- C1: VALIDATED / INTEGRATED
- Runtime v3: NON ADOPTED
- D-GCEC-CONT-02 locally committed @ be71eee0…
- Decisions ACTIVE: D-GCEC-09…15, CONT-01, AGENT-01, EXEC-01; EVID-01 ACCEPTED NON-BLOCKING
- Capability: governed REAL docs-write → Evidence → same-EC → local commit → independent Git verify
- Gap targeted: REAL git.commit NOT PROVEN; REAL_CONTINUATION_GAP OPEN; effect reserve OPEN

---

## CONT-02 PRE-REAL INTEGRITY

Verified in Product HEAD be71eee0:

- `pathsEqualAllowingRealpath` present; used for registration + toplevel
- realpath failure → false / fail-closed
- `worktree_unregistered` retained
- `REAL_LAUNCH_FAILED` accepted as pre-launch stopReason prefix; arbitrary stopReason invalid
- CONT-02 tests present (canonical resume PASS; unregistered FAIL; shape; R2-13 failed + ATTEMPT_STATE_CONFLICT)

PRE-REAL DETERMINISTIC TESTS (gates OFF):

```
npx vitest run gcecCont01WorkspaceResume / attemptRepository / m4RealOffCorrectionR2
```

Result: **61 / 61 PASS**

---

## HISTORICAL REAL-01 FREEZE CHECK

Historical campaign NOT mutated / NOT reused as runtime state.

| Historical | Value |
| --- | --- |
| Project | `prj:gcec-commit-ab-1` |
| Cycle | `cyc:trj-c9806a26b5507b17a84cecaa` |
| EC | `xct:m3-res:dec:f2:8f482c8e-a2ca-415c-bc30-42854e4bb6a8` |
| A / B / Evidence A | prior REAL-01 identities |

Stuck historical B untouched.

---

## FRESH LINEAGE CHECK

Harness uses **isolated temporary Product store** (fresh `oa.sqlite` under mkdtemp). Historical SQLite not opened.

| ID | This campaign | vs REAL-01 |
| --- | --- | --- |
| Project | `prj:gcec-commit-ab-1` | STRING COINCIDES (FixedIdSource `ab`) — isolated store |
| Cycle | `cyc:trj-c9806a26b5507b17a84cecaa` | STRING COINCIDES (deterministic trajectory derivation) — isolated store |
| EC | `xct:m3-res:dec:f2:39ce6384-6c39-4290-9ef5-1b07ad781d2a` | **DISTINCT** |
| Attempt A | `xat:gcec-commit-a:xct:m3-res:dec:f2:39ce6384-…` | **DISTINCT** |
| Attempt B | `xat:gcec-commit-b:xct:m3-res:dec:f2:39ce6384-…` | **DISTINCT** |

Product DB path (isolated): `/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/gcec-real-commit-2RnLcT/oa.sqlite`

RESERVE: Project/Cycle ID strings coincide with REAL-01 FixedIdSource determinism; EC/Attempts/worktree/managed clone/commit are distinct; no resolution into historical store.

FRESH_PROJECT/CYCLE in store sense: YES. FRESH_EC / FRESH_A / FRESH_B: YES.

---

## REAL HARNESS EXACT PATH

`projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts` (unique)

## REAL GATES USED

Scoped to ONE harness process only:

- `SFIA_STUDIO_CURSOR_REAL=1`
- `SFIA_GCEC_CURSOR_REAL_PROOF=1`
- `SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF=1`
- `SFIA_GCEC_MANAGED_REPO_BASE=/tmp/sfia-gcec-real-a2b-02-a7c6d4c3`

Parent/global gates not left ON.

RETRY: **0** (single invocation; vitest 3/3 PASS including REAL campaign)

---

## MANAGED BASE / REPO

```
MANAGED_BASE=/tmp/sfia-gcec-real-a2b-02-a7c6d4c3
MANAGED_REPO=/tmp/sfia-gcec-real-a2b-02-a7c6d4c3/mcleland147__sfia-gcec-proof-task-manager
BASE_SHA=32c7c2008197e5c61b32c16479144e9863291358

```

BASE_SHA verified: `32c7c2008197e5c61b32c16479144e9863291358`
status porcelain: clean
docs/functional-design.md absent before A

---

## PROOF REMOTE BEFORE

```
PROOF_URL=https://github.com/mcleland147/sfia-gcec-proof-task-manager.git
=== HEADS ===
32c7c2008197e5c61b32c16479144e9863291358	refs/heads/main
=== TAGS ===

```

Exact: main @ 32c7c200…; no other heads; no tags.

---

## FRESH PROJECT / REPOSITORY BINDING

Project: `prj:gcec-commit-ab-1` (isolated store)
Binding: `mcleland147/sfia-gcec-proof-task-manager` · pathRoot `docs` · baseSha 32c7c200… · branch main

## FRESH CYCLE ID

`cyc:trj-c9806a26b5507b17a84cecaa` (isolated store; string coincides REAL-01 — see RESERVE)

## FRESH EXECUTION CONTRACT ID

`xct:m3-res:dec:f2:39ce6384-6c39-4290-9ef5-1b07ad781d2a` (**DISTINCT**)

---

## ATTEMPT A

| Field | Value |
| --- | --- |
| ID | `xat:gcec-commit-a:xct:m3-res:dec:f2:39ce6384-6c39-4290-9ef5-1b07ad781d2a` |
| Agent | `agt:m4.cursor.bounded_docs_write` |
| Process | `pid:15889` (ONE) |
| Status | succeeded |
| Worktree (Product-derived) | `/var/folders/…/wt-815382bed6dead4e39bf1aee` |
| Artifact | `docs/functional-design.md` |
| Bytes | 5497 |
| Digest | `sha256:1cfb485daa06f8cb52a525fd6df6d4c517a6b75dfced7b625f5b392a4bee4fe1` |
| Evidence A | `ev:docs-write:xat:gcec-commit-a:xct:m3-res:dec:f2:39ce6384-…` |
| Evidence A status | **verified** |
| A commit? | NO (HEAD remained base until B) |

EC after A: returned to **confirmed** (harness + audit: contractStatus confirmed after A success) while commit effect outstanding for B.

### A FULL ARTIFACT CONTENT

```markdown
# Task Manager — Functional Design

## Purpose

Define the functional behavior of a single-user task manager: task fields, allowed statuses, user flows, business rules, and acceptance criteria. This document is limited to product behavior that can be observed and tested.

## Out of scope

The following are explicitly excluded from this design:

- Authentication and authorization
- Multi-user collaboration
- Notifications
- System architecture
- Database design
- API contracts
- Framework or technology choices
- Pixel-level UX / visual design

## Task model

A task has the following fields:

| Field | Required | Description |
| --- | --- | --- |
| Identifier | Yes (system-assigned) | Unique identifier for the task |
| Title | Yes (mandatory) | Short human-readable name of the task |
| Description | No (optional) | Longer free-text details |
| Status | Yes | Current lifecycle state of the task |
| Due date | No (optional) | Date by which the task is expected to be completed |

## Statuses

A task status must be exactly one of the following values:

- `TODO` — work has not started
- `IN_PROGRESS` — work is underway
- `DONE` — work is complete

No other status values are allowed.

## Flows

### 1. Create task

1. The user provides a title (mandatory) and may provide a description and/or a due date.
2. The system assigns a unique identifier.
3. The system sets an initial status of `TODO` unless another allowed status is explicitly supplied by the create action (if supported).
4. On success, the new task is persisted and available in subsequent list/filter operations.
5. On failure (e.g. blank title or invalid status), the task is not created and the refusal is observable.

### 2. List tasks

1. The user requests the full set of tasks.
2. The system returns all existing tasks with their fields (identifier, title, description if present, status, due date if present).

### 3. Filter by status

1. The user requests tasks filtered by one of the defined statuses (`TODO`, `IN_PROGRESS`, or `DONE`).
2. The system returns only tasks whose status equals the requested value.
3. Requests with a status outside the defined set are refused.

### 4. Edit task

1. The user selects an existing task by identifier.
2. The user may update title, description, and/or due date (and status via the dedicated change-status flow or as part of edit if offered).
3. Blank title updates are refused; the previous title is retained.
4. On success, subsequent list/filter operations reflect the updated values.

### 5. Change status

1. The user selects an existing task by identifier and supplies a new status.
2. The new status must be one of `TODO`, `IN_PROGRESS`, or `DONE`.
3. On success, the task’s status is updated and visible in list and filter results.
4. On failure (unknown task or invalid status), the status is unchanged and the refusal is observable.

## Business rules

1. **Blank title refused** — A task cannot be created or updated with an empty or whitespace-only title.
2. **Status must be in the defined set** — Only `TODO`, `IN_PROGRESS`, and `DONE` are valid. Any other value is refused.
3. **Due date is optional** — A task may exist with no due date. Providing a due date is allowed but never required.
4. **Identifier uniqueness** — Each task has a distinct identifier assigned by the system; users do not invent identifiers on create.
5. **Optional description** — Description may be absent, set, or cleared; its absence does not block create or edit.

## Acceptance criteria

Criteria below are observable and testable against the flows above.

### Create task

- Given a non-blank title, creating a task yields a task with a unique identifier, the given title, optional description/due date as supplied, and a valid status.
- Given a blank or whitespace-only title, create is refused and no new task appears in the list.
- Given an invalid status on create (if status can be supplied), create is refused.

### List tasks

- After creating N valid tasks, listing returns all N tasks with their current field values.
- Listing an empty store returns an empty collection (not an error).

### Filter by status

- Filtering by `TODO` returns only tasks with status `TODO` (likewise for `IN_PROGRESS` and `DONE`).
- Filtering by a value outside `{TODO, IN_PROGRESS, DONE}` is refused.
- A task whose status changes appears under the new status filter and no longer under the old one.

### Edit task

- Updating title to a non-blank value is reflected in subsequent list results.
- Updating title to blank/whitespace is refused; the prior title remains.
- Updating or clearing optional description and due date is reflected without affecting unrelated fields.
- Editing a non-existent identifier is refused.

### Change status

- Changing status to `TODO`, `IN_PROGRESS`, or `DONE` updates the task and is visible in list and filter results.
- Changing status to any other value is refused; the previous status remains.
- Changing status on a non-existent identifier is refused.

## Summary

This functional design covers a task entity (identifier, mandatory title, optional description, status, optional due date), three statuses (`TODO`, `IN_PROGRESS`, `DONE`), and five flows (create, list, filter by status, edit, change status), with enforceable rules on title and status and testable acceptance criteria. Authentication, multi-user features, notifications, architecture, persistence technology, APIs, frameworks, and pixel UX are out of scope.

```

---

## CONT-02 REALPATH EQUALITY / REGISTRATION

B StartExecution succeeded (audit `started` → `running`) — CONT-02 registration check passed in production path.

Post-campaign managed `git worktree list --porcelain` still listed:

`/private/var/folders/…/wt-815382bed6dead4e39bf1aee` (prunable after harness cleanup)

Product-derived path used `/var/folders/…` (same inode via realpath).

CONT-02 REALPATH EQUALITY RESULT: **TRUE** (B would have failed with `worktree_unregistered` under pre-CONT-02 resolve-only compare, as proven in REAL-01).

Worktree filesystem cleaned by harness afterEach after reconciliationComplete; commit object retained in managed repo object DB.

---

## ATTEMPT B

| Field | Value |
| --- | --- |
| ID | `xat:gcec-commit-b:xct:m3-res:dec:f2:39ce6384-6c39-4290-9ef5-1b07ad781d2a` |
| Agent | `agt:m4.cursor.bounded_local_commit` |
| Process | `pid:16439` (ONE) |
| Status | succeeded |
| priorAttemptId | exact A (CONT-01) |

### LOCAL COMMIT (from managed object DB — direct observation)

```
commit acc4a8c22d5058b31f306aed1c18350d4c114dd0
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Sat Sep 12 15:17:31 2026 +0200
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Sat Sep 12 15:17:31 2026 +0200

    docs: add task manager functional design

    Co-authored-by: Cursor <cursoragent@cursor.com>

```

| Field | Value |
| --- | --- |
| LOCAL_COMMIT_SHA | `acc4a8c22d5058b31f306aed1c18350d4c114dd0` |
| LOCAL_COMMIT_PARENT | `32c7c2008197e5c61b32c16479144e9863291358` |
| LOCAL_COMMIT_MESSAGE subject | `docs: add task manager functional design` |
| LOCAL_COMMIT_FILESET | `docs/functional-design.md` only |
| LOCAL_COMMIT_NUMSTAT | `121	0	docs/functional-design.md` |
| Artifact digest in commit tree | matches Evidence A digest |

### LOCAL COMMIT FULL DIFF

```diff
commit acc4a8c22d5058b31f306aed1c18350d4c114dd0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sat Sep 12 15:17:31 2026 +0200

    docs: add task manager functional design

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/docs/functional-design.md b/docs/functional-design.md
new file mode 100644
index 0000000..c6c4e94
--- /dev/null
+++ b/docs/functional-design.md
@@ -0,0 +1,121 @@
+# Task Manager — Functional Design
+
+## Purpose
+
+Define the functional behavior of a single-user task manager: task fields, allowed statuses, user flows, business rules, and acceptance criteria. This document is limited to product behavior that can be observed and tested.
+
+## Out of scope
+
+The following are explicitly excluded from this design:
+
+- Authentication and authorization
+- Multi-user collaboration
+- Notifications
+- System architecture
+- Database design
+- API contracts
+- Framework or technology choices
+- Pixel-level UX / visual design
+
+## Task model
+
+A task has the following fields:
+
+| Field | Required | Description |
+| --- | --- | --- |
+| Identifier | Yes (system-assigned) | Unique identifier for the task |
+| Title | Yes (mandatory) | Short human-readable name of the task |
+| Description | No (optional) | Longer free-text details |
+| Status | Yes | Current lifecycle state of the task |
+| Due date | No (optional) | Date by which the task is expected to be completed |
+
+## Statuses
+
+A task status must be exactly one of the following values:
+
+- `TODO` — work has not started
+- `IN_PROGRESS` — work is underway
+- `DONE` — work is complete
+
+No other status values are allowed.
+
+## Flows
+
+### 1. Create task
+
+1. The user provides a title (mandatory) and may provide a description and/or a due date.
+2. The system assigns a unique identifier.
+3. The system sets an initial status of `TODO` unless another allowed status is explicitly supplied by the create action (if supported).
+4. On success, the new task is persisted and available in subsequent list/filter operations.
+5. On failure (e.g. blank title or invalid status), the task is not created and the refusal is observable.
+
+### 2. List tasks
+
+1. The user requests the full set of tasks.
+2. The system returns all existing tasks with their fields (identifier, title, description if present, status, due date if present).
+
+### 3. Filter by status
+
+1. The user requests tasks filtered by one of the defined statuses (`TODO`, `IN_PROGRESS`, or `DONE`).
+2. The system returns only tasks whose status equals the requested value.
+3. Requests with a status outside the defined set are refused.
+
+### 4. Edit task
+
+1. The user selects an existing task by identifier.
+2. The user may update title, description, and/or due date (and status via the dedicated change-status flow or as part of edit if offered).
+3. Blank title updates are refused; the previous title is retained.
+4. On success, subsequent list/filter operations reflect the updated values.
+
+### 5. Change status
+
+1. The user selects an existing task by identifier and supplies a new status.
+2. The new status must be one of `TODO`, `IN_PROGRESS`, or `DONE`.
+3. On success, the task’s status is updated and visible in list and filter results.
+4. On failure (unknown task or invalid status), the status is unchanged and the refusal is observable.
+
+## Business rules
+
+1. **Blank title refused** — A task cannot be created or updated with an empty or whitespace-only title.
+2. **Status must be in the defined set** — Only `TODO`, `IN_PROGRESS`, and `DONE` are valid. Any other value is refused.
+3. **Due date is optional** — A task may exist with no due date. Providing a due date is allowed but never required.
+4. **Identifier uniqueness** — Each task has a distinct identifier assigned by the system; users do not invent identifiers on create.
+5. **Optional description** — Description may be absent, set, or cleared; its absence does not block create or edit.
+
+## Acceptance criteria
+
+Criteria below are observable and testable against the flows above.
+
+### Create task
+
+- Given a non-blank title, creating a task yields a task with a unique identifier, the given title, optional description/due date as supplied, and a valid status.
+- Given a blank or whitespace-only title, create is refused and no new task appears in the list.
+- Given an invalid status on create (if status can be supplied), create is refused.
+
+### List tasks
+
+- After creating N valid tasks, listing returns all N tasks with their current field values.
+- Listing an empty store returns an empty collection (not an error).
+
+### Filter by status
+
+- Filtering by `TODO` returns only tasks with status `TODO` (likewise for `IN_PROGRESS` and `DONE`).
+- Filtering by a value outside `{TODO, IN_PROGRESS, DONE}` is refused.
+- A task whose status changes appears under the new status filter and no longer under the old one.
+
+### Edit task
+
+- Updating title to a non-blank value is reflected in subsequent list results.
+- Updating title to blank/whitespace is refused; the prior title remains.
+- Updating or clearing optional description and due date is reflected without affecting unrelated fields.
+- Editing a non-existent identifier is refused.
+
+### Change status
+
+- Changing status to `TODO`, `IN_PROGRESS`, or `DONE` updates the task and is visible in list and filter results.
+- Changing status to any other value is refused; the previous status remains.
+- Changing status on a non-existent identifier is refused.
+
+## Summary
+
+This functional design covers a task entity (identifier, mandatory title, optional description, status, optional due date), three statuses (`TODO`, `IN_PROGRESS`, `DONE`), and five flows (create, list, filter by status, edit, change status), with enforceable rules on title and status and testable acceptance criteria. Authentication, multi-user features, notifications, architecture, persistence technology, APIs, frameworks, and pixel UX are out of scope.

```

### EVIDENCE B

| Field | Value |
| --- | --- |
| ID | `ev:git-commit-verified:acc4a8c22d50` |
| Status | **verified** |
| observeLocalCommitFacts → verifyLocalCommitEffect | PASS (harness) |

EC FINAL STATUS: confirmed (after B success per harness; commit effect verified)

Managed clone HEAD (main worktree) remains `32c7c200…` — local commit only on detached worktree; **no push**.

---

## REAL PROCESS COUNTS

- Cursor A: 1 (`pid:15889`)
- Cursor B: 1 (`pid:16439`)
- RETRY: 0

---

## EFFECT MATRIX

### Attempt A
| Effect | Classification |
| --- | --- |
| filesystem read | AUTHORIZED + OBSERVED |
| filesystem write (`docs/functional-design.md`) | AUTHORIZED + OBSERVED |
| git status/read | AUTHORIZED + OBSERVED |
| git commit | PROTECTED + UNCHANGED |
| git push / GitHub API / PR / merge / tag / branch delete | PROTECTED + UNCHANGED |

### Attempt B
| Effect | Classification |
| --- | --- |
| filesystem read | AUTHORIZED + OBSERVED |
| git status/read | AUTHORIZED + OBSERVED |
| git commit (local, detached worktree) | AUTHORIZED + OBSERVED |
| git push / GitHub API / PR / merge / tag / branch delete / remote mutation | PROTECTED + UNCHANGED |

UNEXPECTED EFFECTS: none observed.

---

## PROOF REMOTE AFTER

```
=== HEADS AFTER ===
32c7c2008197e5c61b32c16479144e9863291358	refs/heads/main
=== TAGS AFTER ===

```

REMOTE BEFORE/AFTER EQUALITY: **YES** (main still 32c7c200…; no tags; no extra heads)

---

## PRODUCT HEAD AFTER

`be71eee0bbfae341d16cfab401f3c38f46564d4c` (unchanged)

PRODUCT SOURCE STATUS AFTER: clean under `projects/sfia-studio/` (only `.tmp-sfia-review/**` dirty)

PRODUCT COMMIT / PUSH / PR / MERGE: **NONE**

PROOF REPO PUSH / PR / MERGE / TAG: **NONE**

---

## SECRET HYGIENE

No credential patterns in artifact, commit object summary, or facts.json.
No env/printenv/keychain dumps performed.
Co-authored-by Cursor trailer present on commit (non-secret).

---

## CLAIMS (CANDIDATE — pending Critical Review + Morris)

REAL docs-write: **PROVEN AT TESTED SCOPE**

REAL local git.commit: **PROVEN AT TESTED SCOPE**

same-EC A→B continuation: **PROVEN AT TESTED SCOPE**

D-GCEC-CONT-02: **REAL-BACKED AT TESTED SCOPE**

remote anti-effect: **PROVEN FOR THIS CAMPAIGN**

REAL_CONTINUATION_GAP: **ELIGIBLE FOR CLOSURE AT TESTED SCOPE**

GOVERNED EXECUTOR EFFECT / AUTHORITY RESERVE: **ELIGIBLE FOR CLOSURE FOR A→B TESTED EFFECT SET**

RESERVE: Project/Cycle FixedIdSource string coincidence with REAL-01 (isolated store; EC/Attempts distinct).

GCEC-PUSH: **NOT READY**

RUNTIME v3: **NON ADOPTED**

EVIDENCE RESERVE (EVID-01): **ACCEPTED NON-BLOCKING**

---

## DECISION REQUIRED FROM MORRIS

ChatGPT Critical Review of this REAL pack → Morris:

1. Accept PASS WITH RESERVE (incl. ID-string coincidence reserve)?
2. Close REAL_CONTINUATION_GAP / effect reserve at tested scope?
3. Distinct later GO for any GCEC-PUSH (still NOT READY)

---

## ANTI-CLAIMS

Do NOT claim: GCEC-PUSH ready; runtime v3 adopted; generalized executor safety; Product push/PR/merge; historical REAL-01 B repaired; unlimited Cursor authority; remote main advanced.

---

## FINAL VERDICT

**PASS WITH RESERVE — GCEC-REAL-A2B-02 FRESH BOUNDED REAL A→B PROOF PASSED / REAL DOCS-WRITE VERIFIED / REAL LOCAL git.commit VERIFIED AT TESTED SCOPE / SAME-EC CONTINUATION VERIFIED AT TESTED SCOPE / D-GCEC-CONT-02 REAL-BACKED AT TESTED SCOPE / REMOTE REFS UNCHANGED / REAL_CONTINUATION_GAP ELIGIBLE FOR CRITICAL REVIEW CLOSURE / GOVERNED EXECUTOR EFFECT RESERVE ELIGIBLE FOR A→B-SCOPE CRITICAL REVIEW CLOSURE / GCEC-PUSH NOT READY / RUNTIME v3 NON ADOPTED.**
