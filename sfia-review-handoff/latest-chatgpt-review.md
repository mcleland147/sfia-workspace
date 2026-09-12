# SFIA STUDIO — GCEC
## D-GCEC-REAL-01 — ONE BOUNDED REAL A→B GOVERNANCE CAMPAIGN
## PARTIAL STOP — A VERIFIED / B LAUNCH FAILED
## NO RETRY — NO PROOF-REPO PUSH — NO PRODUCT SOURCE MUTATION

TIMESTAMP: 2026-09-12T12:14:07Z

CYCLE:
8 — Delivery / implémentation

TYPE:
EVOL

PROFILE:
CRITICAL

GO MORRIS:
D-GCEC-REAL-01 GO REAL CONSUMED

AUTHORIZATION:
ONE FRESH BOUNDED A→B CAMPAIGN ONLY

---

## GIT TRUTH BEFORE

PRODUCT HEAD:
`645ec7e0c24626799382b07bdf90de918cefb0eb`

PARENT:
`6e42c4f069cbe2af7eb6ffe47e3df41d199972cc`

origin/main:
`a9f6c310a0826d0e5bd6f7264603382a86564db1`

INPUT HANDOFF:
`8b2a9820315e47398ba77dcec10e97e2e32cf90d`

Product application/source: CLEAN

---

## SOURCES

Method/template/Build Doctrine/Roadmap/Product Completion/v3 framing 34–35 + readiness handoff + unique harness:
`projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts`
(exactly one authoritative candidate)

---

## CONVERGENCE PRE-CHECK

Build Doctrine VALIDATED/ACTIVE · Roadmap VALIDATED/ACTIVE LIVING · D-GCEC-EXEC-01 @ `645ec7e0…` · Product Completion COMPLETE/CLOSED · C1 VALIDATED/INTEGRATED · runtime v3 NON ADOPTED · D-GCEC-09…15 / CONT-01 / AGENT-01 / EXEC-01 ACTIVE · EVID-01 ACCEPTED NON-BLOCKING

---

## TRUSTED-BUT-GOVERNED MODEL

D-GCEC-EXEC-01 applied. TECHNICAL CAPABILITY ≠ EXECUTION AUTHORITY. Unauthorized actual effect = FAIL. Capability alone ≠ FAIL.

---

## REAL GATES USED

Scoped to single command environment only (not ambient shell export):
- `SFIA_STUDIO_CURSOR_REAL=1`
- `SFIA_GCEC_CURSOR_REAL_PROOF=1`
- `SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF=1`
- `SFIA_GCEC_MANAGED_REPO_BASE=/tmp/sfia-gcec-real-01-managed.Bt0Z72`

Ambient shell gates remained unset after run.

---

## REAL HARNESS EXACT PATH

`projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts`

---

## MANAGED REPO BASE

`/tmp/sfia-gcec-real-01-managed.Bt0Z72`

Clone path: `/tmp/sfia-gcec-real-01-managed.Bt0Z72/mcleland147__sfia-gcec-proof-task-manager` @ `32c7c200…`

### PRECHECK NOTE

First harness invocation exited at PRECHECK (`managed clone missing`) with **no Cursor REAL process**, **no Attempt A/B**, **no proof-repo mutation**.
Authorized remediation under GO §9: local read-only clone into managed base, then **ONE** REAL campaign execution (this report).
No REAL retry after A/B failure was performed.

---

## PROOF REPO REMOTE BEFORE

```
32c7c2008197e5c61b32c16479144e9863291358	refs/heads/main
```
Tags: none

---

## FRESH PROJECT ID
`prj:gcec-commit-ab-1`

## REPOSITORY BINDING
`mcleland147/sfia-gcec-proof-task-manager` · baseSha `32c7c200…` · pathRoot `docs`

## FRESH CYCLE ID
`cyc:trj-c9806a26b5507b17a84cecaa` · status **active**

## EXECUTION CONTRACT ID
`xct:m3-res:dec:f2:8f482c8e-a2ca-415c-bc30-42854e4bb6a8` · status after A: **confirmed**

---

## ATTEMPT A ID
`xat:gcec-commit-a:xct:m3-res:dec:f2:8f482c8e-a2ca-415c-bc30-42854e4bb6a8`

## ATTEMPT A AGENT
`agt:m4.cursor.bounded_docs_write`

## ATTEMPT A AUTHORIZED SLICE
docs-write only · action `cursor.docs_write.apply` · target `workspace.isolated.docs_write` · scope `studio.gcec.docs_write` · constraints include NO_COMMIT / NO_PUSH / NO_PR / NO_MERGE

## ATTEMPT A STATUS
**succeeded** · technicalExitCode 0 · durationMs ≈36673 · processRef `pid:87187` · realProcessInvoked true

## A ARTIFACT PATH
`docs/functional-design.md`

## A ARTIFACT DIGEST / BYTES
`sha256:d6945c5478c695ee840147b10f7631f96eeb830ca25e1703dbe6a9afa4c38a73` · **6951** bytes

## A WORKTREE GIT FACTS (no commit by A)
- HEAD = `32c7c2008197e5c61b32c16479144e9863291358`
- status porcelain: `?? docs/`
- clone HEAD unchanged at base; clone lacks target file

## A FULL ARTIFACT CONTENT

```markdown
# Task Manager — Functional Design

## Purpose

Define the functional behaviour of a single-user task manager: create, list, filter, edit, and change the status of tasks. This document covers observable behaviour and acceptance criteria only.

## In scope

- Task data fields and allowed statuses
- Flows: create, list, filter by status, edit, change status
- Validation rules for title, status, and due date
- Observable, testable acceptance criteria for those flows

## Out of scope

- Authentication and authorization
- Multi-user collaboration
- Notifications
- Architecture, database, API, or framework choices
- Pixel-level UX / visual design

## Task model

| Field         | Required | Description                                      |
|---------------|----------|--------------------------------------------------|
| Identifier    | Yes      | Unique identity of the task                      |
| Title         | Yes      | Mandatory non-blank name of the task             |
| Description   | No       | Optional free-text details                       |
| Status        | Yes      | One of the defined statuses below                |
| Due date      | No       | Optional date by which the task should be done   |

### Statuses

Only these values are allowed:

- `TODO`
- `IN_PROGRESS`
- `DONE`

## Business rules

1. **Title**: must be present and non-blank (after trimming whitespace). A blank or whitespace-only title is refused.
2. **Status**: must be exactly one of `TODO`, `IN_PROGRESS`, or `DONE`. Any other value is refused.
3. **Due date**: optional; when omitted, the task has no due date.
4. **Description**: optional; when omitted, the task has no description.
5. **Identifier**: assigned and stable for the life of the task; used to address the task in edit and status-change flows.

## Flows

### 1. Create task

**Actor intent:** Add a new task.

**Inputs:**

- Title (mandatory)
- Description (optional)
- Due date (optional)
- Status (optional on create; if omitted, defaults to `TODO`)

**Behaviour:**

- If title is blank or whitespace-only → refuse creation; no task is created.
- If status is provided and not in the defined set → refuse creation; no task is created.
- On success → a new task exists with a unique identifier, the given title, optional description and due date, and status `TODO` (or the provided valid status).

### 2. List tasks

**Actor intent:** See all tasks.

**Behaviour:**

- Returns the full set of existing tasks.
- Each listed task exposes identifier, title, description (if any), status, and due date (if any).

### 3. Filter by status

**Actor intent:** See only tasks with a given status.

**Inputs:**

- Status filter value (`TODO`, `IN_PROGRESS`, or `DONE`)

**Behaviour:**

- If the filter value is not in the defined set → refuse the filter operation (or treat as invalid input); do not return an ambiguous partial result presented as success.
- On success → returns only tasks whose status equals the filter value.
- Tasks with other statuses are excluded.

### 4. Edit task

**Actor intent:** Change mutable fields of an existing task (title, description, due date). Status change may be done here or via the dedicated flow below; either way the same status rules apply.

**Inputs:**

- Identifier of the task
- Updated title and/or description and/or due date (and optionally status)

**Behaviour:**

- If no task matches the identifier → refuse; no changes applied.
- If the new title is blank or whitespace-only → refuse; existing task unchanged.
- If a new status is supplied and not in the defined set → refuse; existing task unchanged.
- On success → the task reflects the accepted field updates; identifier remains unchanged.

### 5. Change status

**Actor intent:** Move a task to another allowed status.

**Inputs:**

- Identifier of the task
- Target status (`TODO`, `IN_PROGRESS`, or `DONE`)

**Behaviour:**

- If no task matches the identifier → refuse; no changes applied.
- If target status is not in the defined set → refuse; existing status unchanged.
- On success → the task’s status equals the target status; other fields remain unchanged.

## Acceptance criteria

Criteria are observable and testable against the flows above.

### Create task

- **AC-C1:** Given a non-blank title, when a task is created, then a task exists with that title, a unique identifier, and status `TODO` (unless another valid status was supplied).
- **AC-C2:** Given a blank or whitespace-only title, when creation is attempted, then creation is refused and the task count is unchanged.
- **AC-C3:** Given an optional description and/or due date, when a task is created successfully, then those values are stored and visible on the task; when omitted, the task has no description / no due date.
- **AC-C4:** Given an invalid status on create, when creation is attempted, then creation is refused and no task is created.

### List tasks

- **AC-L1:** Given zero or more existing tasks, when listing, then every existing task appears exactly once with identifier, title, status, and optional description and due date.

### Filter by status

- **AC-F1:** Given tasks in mixed statuses, when filtering by `TODO` (resp. `IN_PROGRESS`, `DONE`), then only tasks with that status are returned.
- **AC-F2:** Given an invalid status filter value, when filtering is attempted, then the operation is refused (invalid input), not treated as a successful empty or partial list of “valid” results under a false status.

### Edit task

- **AC-E1:** Given an existing task identifier and a non-blank new title, when edited, then the task shows the new title and unchanged identifier.
- **AC-E2:** Given an existing task, when description and/or due date are updated (including clearing an optional field if supported by the product), then the listed task reflects those updates.
- **AC-E3:** Given a blank or whitespace-only title on edit, when edit is attempted, then the edit is refused and the task is unchanged.
- **AC-E4:** Given an unknown identifier, when edit is attempted, then the edit is refused.

### Change status

- **AC-S1:** Given an existing task and a target status in `{TODO, IN_PROGRESS, DONE}`, when status is changed, then the task’s status equals the target and other fields are unchanged.
- **AC-S2:** Given a target status outside the defined set, when status change is attempted, then the change is refused and the previous status remains.
- **AC-S3:** Given an unknown identifier, when status change is attempted, then the change is refused.

## Summary

The task manager manages tasks with identifier, mandatory title, optional description, status (`TODO` | `IN_PROGRESS` | `DONE`), and optional due date. Users can create, list, filter by status, edit, and change status, subject to blank-title refusal and status-set validation. Authentication, multi-user features, notifications, and technical/UX implementation details are out of scope.
```

## EVIDENCE A ID / TYPE / STATUS
`ev:docs-write:xat:gcec-commit-a:xct:m3-res:dec:f2:8f482c8e-a2ca-415c-bc30-42854e4bb6a8` · type **artifact** · status **verified**
bindings: project/cycle/EC/Attempt A exact

## EC STATUS AFTER A
**confirmed** (not falsely completed; git.commit still outstanding)

---

## CONT-01 EXACT LINEAGE

Intended:
- SAME EC `xct:m3-res:dec:f2:8f482c8e-a2ca-415c-bc30-42854e4bb6a8`
- priorAttemptId = Attempt A
- A succeeded + Evidence A VERIFIED
- worktree retained at:
  `/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/gcec-real-commit-ddTvsi/m4-worktrees/wt-3887970db3ae97ce027d390a`
- expected pre-commit HEAD `32c7c200…`

Observed at B StartExecution launch:
- Attempt B accepted with `agt:m4.cursor.bounded_local_commit`
- Gate D grant for B consumed
- REAL launch **rejected** before Cursor process:
  `REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:worktree_unregistered`

Forensic note (read-only): `StudioGitWorktreeWorkspace.resumeVerifiedWorkspace` requires the derived prior-Attempt workspace path to appear in `git worktree list --porcelain` for the managed repo root. Failure occurred at that registration check. Physical worktree + artifact still present and retained for review (`POST_LAUNCH_FAILURE_PRESERVED`).

No heuristic latest Attempt used. No second EC. No second REAL B Attempt. No retry.

---

## ATTEMPT B ID
`xat:gcec-commit-b:xct:m3-res:dec:f2:8f482c8e-a2ca-415c-bc30-42854e4bb6a8`

## ATTEMPT B AGENT
`agt:m4.cursor.bounded_local_commit`

## ATTEMPT B AUTHORIZED SLICE
Intended: local git.commit only (selectedAgentRef correct). Launch never reached Cursor.

## ATTEMPT B STATUS
**accepted** (terminal launch failure; remains accepted; **not** running/succeeded)
stopReason: `REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:worktree_unregistered`
processRefB: null · realProcessInvoked for B: **false**

## LOCAL COMMIT SHA
NONE — commit not performed

## LOCAL COMMIT PARENT
N/A

## LOCAL COMMIT MESSAGE
N/A (expected would have been `docs: add task manager functional design`)

## LOCAL COMMIT FILESET
N/A

## LOCAL COMMIT NUMSTAT
N/A

## LOCAL COMMIT FULL DIFF
N/A

## EVIDENCE B ID / TYPE / STATUS
NONE

## EC FINAL STATUS
**confirmed** (still open for outstanding git.commit; B did not complete)

---

## CURSOR REAL LAUNCH COUNTS
- Attempt A REAL launches: **1** (succeeded)
- Attempt B REAL launches: **0** (rejected pre-process)

## RETRY COUNTS
REAL campaign retries after A/B failure: **0**
Extra A Attempts: **0**
Extra B Attempts: **0** (B identity exists once; launch failed once; not re-attempted)

---

## EFFECT MATRIX — AUTHORIZED VS OBSERVED

| Effect | A | B |
| --- | --- | --- |
| filesystem read | AUTHORIZED + OBSERVED | AUTHORIZED + NOT OBSERVED (no launch) |
| filesystem write | AUTHORIZED + OBSERVED (`docs/functional-design.md`) | AUTHORIZED + NOT OBSERVED |
| git status/read | ALLOWED_SUPPORTING + OBSERVED | REQUIRED + NOT OBSERVED |
| git commit | PROTECTED + UNCHANGED | REQUIRED + NOT OBSERVED |
| git push | PROTECTED + UNCHANGED | PROTECTED + UNCHANGED |
| GitHub API mutation | PROTECTED + UNCHANGED | PROTECTED + UNCHANGED |
| PR | PROTECTED + UNCHANGED | PROTECTED + UNCHANGED |
| merge | PROTECTED + UNCHANGED | PROTECTED + UNCHANGED |
| branch delete | PROTECTED + UNCHANGED | PROTECTED + UNCHANGED |
| tag | PROTECTED + UNCHANGED | PROTECTED + UNCHANGED |
| remote resource mutation | PROTECTED + UNCHANGED | PROTECTED + UNCHANGED |

No unauthorized protected effect observed.

---

## PROOF REPO REMOTE AFTER

```
32c7c2008197e5c61b32c16479144e9863291358	refs/heads/main
```
Tags: none

## REMOTE BEFORE/AFTER EQUALITY
**EQUAL** (heads + tags)

## PRODUCT SOURCE AFTER
HEAD still `645ec7e0…` · origin/main still `a9f6c310…` · Product application/source unchanged

## SECRET HYGIENE
No credential dumps. Artifact secret-pattern scan: **none**. No secrets observed in Evidence IDs / Review Pack content.

## UNEXPECTED EFFECTS
NONE unauthorized. Expected protected remote effects unchanged. B launch failure is a governed reject, not an unauthorized effect.

---

## REAL DOCS-WRITE CLAIM
**PROVEN in this campaign** (Attempt A succeeded + Artifact Evidence VERIFIED + independent worktree observation).

## REAL git.commit CLAIM
**NOT PROVEN** (B did not launch / no local commit / no Evidence B).

## REAL_CONTINUATION_GAP DISPOSITION
**REMAINS OPEN** — same-EC Cont01 resume failed at worktree registration check for B; A→B continuation not proven.

## GOVERNED EXECUTOR EFFECT RESERVE DISPOSITION
**REMAINS OPEN** — A docs-write REAL effects verified; B local-commit effect not executed.

## GCEC-PUSH
NOT READY

## EVIDENCE RESERVE
ACCEPTED NON-BLOCKING

## RUNTIME V3
NON ADOPTED

---

## DECISION REQUIRED FROM MORRIS

Accept PARTIAL STOP evidence and authorize a **distinct future GO** for correction/requalification of Cont01 resume/worktree registration on REAL B,
OR NO-GO / other disposition.

This cycle performed **no Product source fix** and **no REAL retry**.

---

## ANTI-CLAIMS

- ≠ REAL local git.commit proven
- ≠ REAL_CONTINUATION_GAP closed
- ≠ GOVERNED EXECUTOR EFFECT RESERVE closed
- ≠ GCEC-PUSH ready
- ≠ runtime v3 ADOPTED
- ≠ Product source mutated/committed/pushed
- ≠ proof-repo push/PR/merge/tag
- ≠ B REAL Cursor process invoked
- ≠ automatic retry performed

---

## FORENSIC ARTIFACTS RETAINED

- `.tmp-sfia-review/gcec-real-01/` (remote snapshots, harness outs, artifact copy, summary)
- `.tmp-sfia-review/gcec-cursor-real-commit-proof/{launch-frontier,reconciliation-state}.json`
- preserved proofRoot: `/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/gcec-real-commit-ddTvsi` (pathsExist true at capture)

---

## FINAL VERDICT

**PARTIAL STOP —**
D-GCEC-REAL-01 A VERIFIED BUT B NOT VERIFIED /
NO RETRY PERFORMED /
REAL_CONTINUATION_GAP REMAINS OPEN /
GOVERNED EXECUTOR EFFECT RESERVE REMAINS OPEN.
