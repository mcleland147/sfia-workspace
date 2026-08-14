# Review Pack FULL — FIRST M4 CURSOR REAL READ-ONLY PROOF

| Field | Value |
| --- | --- |
| **Timestamp** | 2026-08-14 11:07:27 CEST (+0200) |
| **Timezone** | Europe/Paris |
| **Level** | FULL |
| **GO consumed** | GO MORRIS — FIRST M4 CURSOR REAL READ-ONLY PROOF |
| **Cycle** | 9 — QA / validation |
| **Profil** | Critical |
| **Typologie v2.4** | RUN |
| **CKC** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` candidate 0.1.0 — experimental cognitive guidance — no execution authority |
| **Repository** | mcleland147/sfia-workspace |
| **Local branch** | `docs/sfia-studio-m4-post-merge-roadmap` |
| **Local HEAD** | `91fa0eb25fe29e833bd212a8f9097c2c039a3c97` |
| **origin/main / BASE_SHA** | `3575c8863d8a13b610dbfde96a33426a620b2c56` |
| **CI #175** | SUCCESS (run 31784204221) — Git proof supersedes historical handoff `bf522e84` PENDING note |
| **Previous handoff** | `bf522e845250d940f97511126b594ff2a0fdc424` |
| **Product tree vs main** | `git diff --exit-code HEAD origin/main -- projects/sfia-studio/app` PASS |
| **Tracked mutation** | NONE |
| **Harness** | `.tmp-sfia-review/m4-first-real/harness.ts` |
| **Harness SHA256** | `5764919c7859a9b4bc2bc14f898bf8a7dd52688c8d99b88174979a193d281332` |
| **Test helper imports** | NONE |

## 1. Local Git Truth

```text
BRANCH=docs/sfia-studio-m4-post-merge-roadmap
HEAD=91fa0eb25fe29e833bd212a8f9097c2c039a3c97
origin/main=3575c8863d8a13b610dbfde96a33426a620b2c56
staged=empty
tracked diff=none
untracked=.tmp-sfia-review/**
SFIA_STUDIO_CURSOR_REAL=<unset> before and after
OPS1_CURSOR_REAL=<unset> before and after
```

CI #175 SUCCESS on `3575c88…` (push / merge PR #345).

## 2. Preflight (REAL-OFF)

M4 targeted tests (parent REAL flags unset):

```text
Test Files  10 passed (10)
Tests  130 passed (130)
including m4RealOffCrashReplay / Boundary / SpawnAck / R1 / R2 / R3
```

Harness PRE-FLIGHT:

```json
{
  "mode": "PRE-FLIGHT",
  "go": "GO MORRIS \u2014 FIRST M4 CURSOR REAL READ-ONLY PROOF",
  "originMain": "3575c8863d8a13b610dbfde96a33426a620b2c56",
  "repoRoot": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off",
  "execRoot": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-first-real-preflight-da6e25dc-6398-4b63-9c32-4bd8d6f1be6f",
  "cursorBin": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
  "cursorExecutable": true,
  "REAL_PROCESS_COUNT": 0,
  "gateDCreated": false,
  "parentSFIA_STUDIO_CURSOR_REAL": "<unset>",
  "parentOPS1_CURSOR_REAL": "<unset>"
}
```

Cursor bin resolved: `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` X_OK.
No Gate D. REAL_PROCESS_COUNT=0. No `cursor --version` / no subprocess Cursor in preflight.

## 3. Point of no return (before StartExecution)

```json
{
  "GO": "GO MORRIS \u2014 FIRST M4 CURSOR REAL READ-ONLY PROOF",
  "BASE_SHA": "3575c8863d8a13b610dbfde96a33426a620b2c56",
  "Attempt": "xat:m4-first-real-001",
  "Contract": "xct:m4-first-real-001/v3/0198b8f3795af8a02f651d9ca0b37932294bc07d9fa2df56feab84af1ea8ea93",
  "Agent": "agt:m4.cursor.bounded_readonly",
  "GateD": "gtd:m4-first-real-001",
  "REAL_top_level_spawn_count": 0,
  "Fixture_launch_count": 0
}
```

Then StartExecution called **exactly once**. No retry wrapper. No second Gate D. No RetryExecutionAttempt.

## 4. Durable HumanDecision / ExecutionContract (Product SQLite)

Project id: `prj:bcd76607-2d3a-4d97-b792-536f04f47d5d`
LPS: `lps:8d8fc444-2cbc-48bc-acc9-f9a5fc67f8f2` version 1
Criticality of proof project: STANDARD (external SFIA cycle remains Critical)

```json
{
  "humanDecision": {
    "decisionId": "dec:m4-first-real-001",
    "status": "accepted",
    "authority": "morris",
    "scope": "studio.m4.real_off",
    "subject": "FIRST M4 CURSOR REAL READ-ONLY PROOF",
    "selectedOptionId": "opt:go",
    "reversible": true,
    "projectId": "prj:bcd76607-2d3a-4d97-b792-536f04f47d5d",
    "decisionBasis": {
      "sourceType": "proposal",
      "sourceRef": "prp:m4-first-real-go",
      "sourceDigest": "87b92d40cecfd0ce5021c3123a67d5d2b08e892d44669c69aaf8ddcd5d92a17c",
      "projectId": "prj:bcd76607-2d3a-4d97-b792-536f04f47d5d",
      "proposalContext": {
        "lpsId": "lps:8d8fc444-2cbc-48bc-acc9-f9a5fc67f8f2",
        "lpsVersion": 1,
        "doctrineDigest": "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622"
      },
      "executionBasis": {
        "objective": "Execute the first bounded read-only Cursor REAL proof from Studio M4 components on main.",
        "scope": "studio.m4.real_off",
        "requestedOperation": "cursor.read_only.inspect",
        "expectedOutcome": "One governed Cursor REAL spawn, read-only, Gate D consumed once.",
        "outOfScope": [
          "M5",
          "Evidence durable",
          "LPS write-back",
          "second REAL spawn",
          "Auth.js",
          "Critical Ack"
        ],
        "reservations": [
          "DecisionBasis schema has no target/capabilities fields; exact values live on ExecutionContract under GO authority."
        ],
        "stopConditions": [
          "GATE_D_REQUIRED",
          "CURSOR_UNAVAILABLE",
          "REAL_WORKSPACE_INVALID"
        ],
        "cycleTypeId": "cycle:9-qa-validation",
        "recommendedProfile": "Critical"
      }
    }
  },
  "executionContract": {
    "executionContractId": "xct:m4-first-real-001",
    "status": "failed",
    "version": 5,
    "action": "cursor.read_only.inspect",
    "target": "workspace.isolated.read",
    "scope": "studio.m4.real_off",
    "requiredCapabilities": [
      "cap:cursor.read_only"
    ],
    "requiredAuthority": "MORRIS",
    "decisionRefs": [
      "dec:m4-first-real-001"
    ],
    "inputs": {
      "baseHeadSha": "3575c8863d8a13b610dbfde96a33426a620b2c56"
    },
    "semanticFingerprint": "0198b8f3795af8a02f651d9ca0b37932294bc07d9fa2df56feab84af1ea8ea93",
    "confirmationRef": "cfm:m4-first-real-contract-001",
    "constraints": [
      "READ_ONLY",
      "NO_REPO_MUTATION",
      "NO_REMOTE_GIT_MUTATION",
      "NO_COMMIT",
      "NO_PUSH",
      "NO_PR",
      "NO_MERGE",
      "ONE_REAL_SPAWN_ONLY",
      "M4_FIRST_REAL_PROOF"
    ],
    "stopConditions": [
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "GATE_D_REQUIRED",
      "GATE_D_EXPIRED",
      "GATE_D_BINDING_MISMATCH",
      "LAUNCH_RECONCILIATION_REQUIRED",
      "REAL_WORKSPACE_INVALID",
      "CURSOR_UNAVAILABLE"
    ],
    "evidenceRequirements": [
      "evreq:m4-first-real-proof"
    ]
  },
  "project": {
    "project_id": "prj:bcd76607-2d3a-4d97-b792-536f04f47d5d",
    "status": "active",
    "current_lps_version_id": "lps:0bc58a3e69d3d861",
    "payload_json": "{\"schemaVersion\":\"0.1.0-oa\",\"projectId\":\"prj:bcd76607-2d3a-4d97-b792-536f04f47d5d\",\"title\":\"M4 First REAL Proof\",\"status\":\"active\",\"currentLpsVersionId\":\"lps:0bc58a3e69d3d861\",\"doctrinePackageRef\":{\"doctrinePackageId\":\"pkg:studio-v3-oa\",\"version\":\"1.0.0\",\"digest\":\"sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622\",\"resolvedAt\":\"2026-08-14T09:04:35.114Z\",\"resolver\":{\"actorId\":\"sys:project-create\",\"role\":\"system\"},\"status\":\"resolved\"},\"createdAt\":\"2026-08-14T09:04:35.113Z\",\"updatedAt\":\"2026-08-14T09:04:35.133Z\",\"createdBy\":{\"actorId\":\"actor:local-project-owner-demo\",\"role\":\"project_owner\",\"displayName\":\"Local project owner demo\",\"authorityLevel\":\"none\"},\"provenance\":{\"schemaVersion\":\"0.1.0-oa\",\"provenanceRecordId\":\"prv:014958c340e29958\",\"actor\":{\"actorId\":\"actor:local-project-owner-demo\",\"role\":\"project_owner\",\"displayName\":\"Local project owner demo\",\"authorityLevel\":\"none\"},\"source\":\"system\",\"timestamp\":\"2026-08-14T09:04:35.113Z\",\"correlationId\":\"cor:2b63e39f-ab68-4faa-8a93-3d5324fc95de\",\"projectId\":\"prj:bcd76607-2d3a-4d97-b792-536f04f47d5d\",\"doctrinePackageRef\":\"pkg:studio-v3-oa@1.0.0\"}}",
    "created_at": "2026-08-14T09:04:35.113Z",
    "updated_at": "2026-08-14T09:04:35.133Z"
  },
  "lps": {
    "lps_version_id": "lps:8d8fc444-2cbc-48bc-acc9-f9a5fc67f8f2",
    "project_id": "prj:bcd76607-2d3a-4d97-b792-536f04f47d5d",
    "version": 1,
    "status": "superseded",
    "payload_json": "{\"schemaVersion\":\"0.1.0-oa\",\"lpsVersionId\":\"lps:8d8fc444-2cbc-48bc-acc9-f9a5fc67f8f2\",\"projectId\":\"prj:bcd76607-2d3a-4d97-b792-536f04f47d5d\",\"version\":1,\"status\":\"superseded\",\"objective\":\"GO MORRIS \u2014 FIRST M4 CURSOR REAL READ-ONLY PROOF\",\"context\":\"Temporary STANDARD proof project for FIRST M4 CURSOR REAL READ-ONLY PROOF. Isolated Product SQLite.\",\"scope\":\"{\\\"schemaVersion\\\":\\\"sfia-visible-slice-project-ui.1\\\",\\\"perceivedCriticality\\\":\\\"STANDARD\\\",\\\"constraints\\\":[\\\"read-only\\\",\\\"one-real-spawn\\\",\\\"no-remote-git-mutation\\\"]}\",\"constraints\":[],\"stakeholders\":[],\"doctrinePackageRef\":{\"doctrinePackageId\":\"pkg:studio-v3-oa\",\"version\":\"1.0.0\",\"digest\":\"sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622\",\"resolvedAt\":\"2026-08-14T09:04:35.114Z\",\"resolver\":{\"actorId\":\"sys:project-create\",\"role\":\"system\"},\"status\":\"resolved\"},\"epistemicItemIds\":[],\"decisionIds\":[],\"createdAt\":\"2026-08-14T09:04:35.113Z\",\"createdBy\":{\"actorId\":\"actor:local-project-owner-demo\",\"role\":\"project_owner\",\"displayName\":\"Local project owner demo\",\"authorityLevel\":\"none\"},\"correlationId\":\"cor:2b63e39f-ab68-4faa-8a93-3d5324fc95de\",\"provenance\":{\"schemaVersion\":\"0.1.0-oa\",\"provenanceRecordId\":\"prv:014958c340e29958\",\"actor\":{\"actorId\":\"actor:local-project-owner-demo\",\"role\":\"project_owner\",\"displayName\":\"Local project owner demo\",\"authorityLevel\":\"none\"},\"source\":\"system\",\"timestamp\":\"2026-08-14T09:04:35.113Z\",\"correlationId\":\"cor:2b63e39f-ab68-4faa-8a93-3d5324fc95de\",\"projectId\":\"prj:bcd76607-2d3a-4d97-b792-536f04f47d5d\",\"doctrinePackageRef\":\"pkg:studio-v3-oa@1.0.0\"},\"uiOwnership\":false}",
    "created_at": "2026-08-14T09:04:35.113Z"
  }
}
```

DecisionBasis limitation (documented, not invented fields): schema has no target/capabilities; exact values carried by ExecutionContract under GO authority.

Final contract status `failed` / version 5 is the T-A5 failure recording after timeout — semantic fields remain the exact M4 bounded RO contract.

## 5. Agent / confirmations / Attempt

Agent: `agt:m4.cursor.bounded_readonly` · executionMode `cursor_cli_real` · adapter `adp:m4-cursor-cli-real`
capability `cap:cursor.read_only` · action `cursor.read_only.inspect` · target `workspace.isolated.read` · scope `studio.m4.real_off`
deny-by-default / no wildcard.

Contract Confirmation: `cfm:m4-first-real-contract-001` N3 granted then consumed by ConfirmExecutionContract (confirmationRef on contract).
Agent Selection Confirmation: `cfm:m4-first-real-agent-selection-001` N3 `act:agent_selection:xct:m4-first-real-001:v3:agt:m4.cursor.bounded_readonly`
Attempt `xat:m4-first-real-001` accepted → running (StartExecution 508ms) → failed (timeout recording).

Memory confirmations are process-local (product architecture). StartExecution audit shows confirmationRef consumed on start.

## 6. Gate D

```json
[
  {
    "grant_id": "gtd:m4-first-real-001",
    "execution_contract_id": "xct:m4-first-real-001",
    "execution_contract_version": 3,
    "semantic_fingerprint": "0198b8f3795af8a02f651d9ca0b37932294bc07d9fa2df56feab84af1ea8ea93",
    "attempt_id": "xat:m4-first-real-001",
    "selected_agent_ref": "agt:m4.cursor.bounded_readonly",
    "actor_id": "actor:local-morris-m3",
    "issued_at": "2026-08-14T09:04:35.146Z",
    "expires_at": "2026-08-14T09:09:35.146Z",
    "status": "consumed",
    "consumed_at": "2026-08-14T09:04:35.146Z",
    "correlation_id": "cor:b5f6fdad5c765eb6"
  }
]
```

status granted then consumed once. consumedAt present. Bindings: contract id/version/fingerprint, attempt, agent, actor `actor:local-morris-m3`.

## 7. CREATED / LAUNCHED (durable journal reopen after timeout)

```json
[
  {
    "record_id": "m4fr:5c15b226719b10d2",
    "kind": "CREATED",
    "occurred_at": "2026-08-14T09:04:35.146Z",
    "execution_contract_id": "xct:m4-first-real-001",
    "execution_contract_version": 3,
    "semantic_fingerprint": "0198b8f3795af8a02f651d9ca0b37932294bc07d9fa2df56feab84af1ea8ea93",
    "attempt_id": "xat:m4-first-real-001",
    "selected_agent_ref": "agt:m4.cursor.bounded_readonly",
    "actor_id": "actor:local-morris-m3",
    "grant_id": "gtd:m4-first-real-001",
    "correlation_id": "cor:80370c0c14de6178",
    "process_ref": null,
    "payload_json": "{}"
  },
  {
    "record_id": "m4fr:a36a3981da942eae",
    "kind": "LAUNCHED",
    "occurred_at": "2026-08-14T09:04:35.146Z",
    "execution_contract_id": "xct:m4-first-real-001",
    "execution_contract_version": 3,
    "semantic_fingerprint": "0198b8f3795af8a02f651d9ca0b37932294bc07d9fa2df56feab84af1ea8ea93",
    "attempt_id": "xat:m4-first-real-001",
    "selected_agent_ref": "agt:m4.cursor.bounded_readonly",
    "actor_id": "actor:local-morris-m3",
    "grant_id": "gtd:m4-first-real-001",
    "correlation_id": "cor:80370c0c14de6178",
    "process_ref": "pid:21247",
    "payload_json": "{\"gatewayId\":\"adp:m4-cursor-cli-real\"}"
  }
]
```

CREATED present (no processRef). LAUNCHED present (processRef `pid:21247`).
Same millisecond timestamps: StartExecution sequence is consume+CREATED then launch then LAUNCHED; CREATED lacks processRef, LAUNCHED has it.
Reopen of the same SQLite file after harness crash/timeout still contains both records → disposition cannot be CLEAR.
Reconcile disposition after reopen: REVIEW_REQUIRED (LAUNCHED present).

## 8. Process / spawn instrumentation

```json
{
  "count": 1,
  "executable": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
  "argv": [
    "agent",
    "--print",
    "--workspace",
    "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-first-real-4cc32ff8-75cf-46fb-a7f6-5c27929c97f7/wt-xat_m4-first-real-001-92b0375e12e247245da3d5ae",
    "--trust",
    "--sandbox",
    "enabled",
    "T\u00c2CHE UNIQUE \u2014 lecture seule born\u00e9e.\ntarget=workspace.isolated.read\naction=cursor.read_only.inspect\nscope=studio.m4.real_off\nfingerprint=0198b8f3795af8a02f651d9ca0b37932294bc07d9fa2df56feab84af1ea8ea93\nAucune mutation, aucun git remote/commit/push/PR/merge."
  ],
  "cwd": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-first-real-4cc32ff8-75cf-46fb-a7f6-5c27929c97f7/wt-xat_m4-first-real-001-92b0375e12e247245da3d5ae",
  "shell": false
}
```

cursorTopLevelSpawnCount = 1
shell = false
executable = production Cursor bin
argv = production gateway shape (`agent --print --workspace <isolated> --trust --sandbox enabled <fixed instruction>`)
No env dump. No secrets.

StartExecution ACK at 2026-08-14T09:04:35.146Z (Attempt running / contract executing, durationMs 508) **before** completion observation.

Completion:

```json
{
  "processRef": "pid:21247",
  "exitCode": 143,
  "timedOut": true,
  "stdout": "",
  "stderr": "",
  "durationMs": 60030,
  "realProcessInvoked": true,
  "worktreeRef": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-first-real-4cc32ff8-75cf-46fb-a7f6-5c27929c97f7/wt-xat_m4-first-real-001-92b0375e12e247245da3d5ae"
}
```

timedOut=true · exitCode=143 (SIGTERM from product 60s timeout) · stdout empty · stderr empty · durationMs=60030
realProcessInvoked=true

RecordExecutionFailure used with stopReason CURSOR_REAL_TIMEOUT. No second StartExecution.

## 9. Worktree

path: `/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-first-real-4cc32ff8-75cf-46fb-a7f6-5c27929c97f7/wt-xat_m4-first-real-001-92b0375e12e247245da3d5ae`
HEAD before/after timeout observation: `3575c8863d8a13b610dbfde96a33426a620b2c56`
porcelain: empty
outside repo root / under execRoot
Cleanup: `git worktree remove` succeeded after evidence capture. No branch deleted. No force.

## 10. Fixture canary

TestExecutionAdapter launch calls before and after: 0
No silent REAL→fixture fallback.

## 11. Remote Git

origin/main before and after: `3575c8863d8a13b610dbfde96a33426a620b2c56`
remote-refs-before.txt vs remote-refs-after.txt: UNCHANGED
open PR set: UNCHANGED (`[]`)
No attributable remote mutation.

## 12. Global REAL flags

Parent process.env SFIA_STUDIO_CURSOR_REAL: unset before and after
Parent process.env OPS1_CURSOR_REAL: unset before and after
Enablement only in gateway proofEnv copy.

## 13. Technical result

recorded: failure (RecordExecutionFailure)
resultRef: none (success path not taken)
Attempt final: failed
ExecutionContract final: failed
stopReason: CURSOR_REAL_TIMEOUT

## 14. Negative / replay

M4 suite 10 files / 130 tests PASS including crash-replay.
StartExecution calls: 1
Retry REAL calls: 0
Total governed Cursor REAL top-level spawns: 1
No second Attempt.

## 15. STOP

```json
{
  "stop": "STOP \u2014 CURSOR REAL PROCESS TIMED OUT",
  "extra": {
    "completion": {
      "processRef": "pid:21247",
      "exitCode": 143,
      "timedOut": true,
      "stdout": "",
      "stderr": "",
      "durationMs": 60030,
      "realProcessInvoked": true,
      "worktreeRef": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-first-real-4cc32ff8-75cf-46fb-a7f6-5c27929c97f7/wt-xat_m4-first-real-001-92b0375e12e247245da3d5ae"
    },
    "phase": "POST_GATE_D"
  },
  "at": "2026-08-14T09:05:35.684Z"
}
```

Phase: POST_GATE_D
No automatic retry.

## 16. M4 exit criteria matrix

| Criterion | Result |
| --- | --- |
| exact HumanDecision | PASS |
| exact ExecutionContract | PASS (fields exact; terminal status failed after timeout) |
| bounded agent | PASS |
| confirmation governance | PASS |
| Gate D consumed once | PASS |
| Cursor REAL invoked exactly once | PASS |
| CREATED/LAUNCHED | PASS |
| spawn ACK ≠ completion | PASS |
| fixture fallback absent | PASS |
| read-only worktree | PASS (HEAD pinned, clean) |
| remote mutation absent | PASS |
| durable frontier after reopen | PASS |
| negative/crash-replay tests | PASS |
| bounded technical success result | FAIL — process timed out at product 60s; stdout/stderr empty; exit 143 |

## 17. Verdict

M4 EXIT PROOF CANDIDATE: **FAIL**

FIRST M4 CURSOR REAL READ-ONLY PROOF FAILED —
STOP — CURSOR REAL PROCESS TIMED OUT —
POST GATE D —
GATE D STATUS consumed —
REAL SPAWN COUNT 1 —
NO AUTOMATIC RETRY —
M4 EXIT PROOF NOT SATISFIED —
M4 NOT CLOSED —
M5 NOT AUTHORIZED —
RUNTIME V3 NON ADOPTED —
MORRIS DECISION REQUIRED

Anti-claims:
- M4 CLOSED: NO
- M4 EXIT PROOF SATISFIED: NOT CLAIMED
- M5: NOT AUTHORIZED
- runtime v3: NON ADOPTED
- Project commit/push/PR/merge: NONE
- Branch deletion: NONE

## 18. Reservations

1. Product `defaultTimeoutMs` 60s is insufficient for this machine/Cursor `agent --print` first invocation; child produced no stdout before SIGTERM.
2. CREATED and LAUNCHED share the same ISO millisecond; ordering is evidenced by processRef presence on LAUNCHED only and StartExecution source sequence.
3. Agent-selection Confirmation store is process-local Memory (product). Not in Product SQLite dump.
4. Technical journal remains TEMPORARY WITH EXIT ≠ Product Store.
5. Timeout does not authorize a second REAL spawn or timeout-config product change in this cycle.

## 19. Next gate

ChatGPT review of this handoff → Morris decision: correctif/reproof (possibly timeout/product follow-up GO) or other. Not M5. Not M4 closed.
