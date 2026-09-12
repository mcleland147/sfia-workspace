# SFIA STUDIO — GCEC
## GCEC-REAL-A2B-READINESS-01
## BOUNDED REAL A→B READINESS QUALIFICATION
## TRUSTED-BUT-GOVERNED EXECUTOR MODEL
## NO GCEC BUSINESS REAL — NO PRODUCT MUTATION — NO PROOF-REPO MUTATION

TIMESTAMP: 2026-09-12T11:27:08Z

CYCLE:
10 — Security / RSSI

TYPE:
EVOL

PROFILE:
CRITICAL

GO MORRIS:
GCEC-REAL-A2B-READINESS-01 CONSUMED

AUTHORIZATION:
READINESS ONLY / NO GCEC REAL

---

## GIT TRUTH

Worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
Branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`

LOCAL PRODUCT HEAD:
`645ec7e0c24626799382b07bdf90de918cefb0eb`

LOCAL PARENT:
`6e42c4f069cbe2af7eb6ffe47e3df41d199972cc`

origin/main:
`a9f6c310a0826d0e5bd6f7264603382a86564db1`

INPUT HANDOFF:
`727bbd433f17b02b287b06333b3661965c9d09b5`

Product application working tree: CLEAN
`.tmp-sfia-review/**`: dirty expected (review artifacts only)

---

## SOURCES

Read/consumed:
- prompts/templates/sfia-cycle-execution-template.md (operating pattern)
- method/sfia-fast-track/core/{sfia-cycle-routing-guide,sfia-chatgpt-cursor-operating-model,sfia-rules-and-guardrails}.md
- method capitalization + fifteen-cycles synthetic map (Cycle 10 Security framing)
- Build Doctrine / Roadmap / Product Completion / v3 framing 34–35
- Input handoff tip `727bbd43…` (D-GCEC-EXEC-01 documentary commit)
- CURRENT LOCAL GCEC implementation under `projects/sfia-studio/app/lib/oa/execution-attempt/**` + REAL harnesses + Cont01/Agent01/Evidence/CONF-02A tests

---

## CONVERGENCE PRE-CHECK

Build Doctrine: VALIDATED / ACTIVE
Roadmap: VALIDATED / ACTIVE LIVING
Local Roadmap truth: D-GCEC-EXEC-01 locally committed @ `645ec7e0…`
Product Completion: COMPLETE / CLOSED
C1: VALIDATED / INTEGRATED
Runtime v3: NON ADOPTED
D-GCEC-09: ACTIVE — Cursor remains governed Project mutation executor
D-GCEC-15: ACTIVE — one EC / multiple Attempts
D-GCEC-CONT-01: ACTIVE
D-GCEC-AGENT-01: ACTIVE
D-GCEC-EXEC-01: ACTIVE — TRUSTED-BUT-GOVERNED
D-GCEC-EVID-01: ACCEPTED NON-BLOCKING

---

## D-GCEC-EXEC-01 TRUST MODEL

Applied as binding readiness bar.

TECHNICAL CAPABILITY ≠ EXECUTION AUTHORITY.

Readiness does **not** require universal secret unreadability, isolated HOME, or technical impossibility of network/gh/git push.

Readiness **does** require:
1. contract does not authorize protected effects beyond intended Attempt
2. current AuthorizedExecutionSlice/profile contains only intended effects
3. runtime does not promote technical availability into authority
4. future proof independently observes forbidden/protected effects
5. unauthorized effect occurrence → FAIL/STOP

CONF-02A remains KEEP / targeted defense-in-depth / non-universal.
Ephemeral HOME remains CONDITIONAL / non-universal.
Alternate executor remains FREEZE / escalation only.

---

## PROOF REPOSITORY TRUTH

Target: `mcleland147/sfia-gcec-proof-task-manager`

Read-only `git ls-remote` (no fetch into Product; no push):

- REMOTE_MAIN_SHA / HEAD: `32c7c2008197e5c61b32c16479144e9863291358`
- Heads: only `refs/heads/main` @ same SHA
- Tags: none

Matches expected historical bootstrap SHA exactly.
PROOF REPOSITORY BASE: QUALIFIED / UNCHANGED vs bootstrap.

---

## PROJECT/REPO BINDING

Historical Project id from prior REAL docs-write forensic facts: `prj:gcec-real-docs-1`
Historical binding identity: `mcleland147/sfia-gcec-proof-task-manager`

Durable local Product store inspected RO:
- `projects/sfia-studio/.sfia-exec/local-i1/state/d1.sqlite` → `d1_projects` count = **0**

PROJECT_BINDING_FOUND=no (durable)
PROJECT_BINDING_REPO_MATCH=n/a (no durable row)
PROJECT_BINDING_CURRENTLY_USABLE=yes — via **fresh** `createProject` + managed-repo bind already supported by Product/REAL harness (no new schema/architecture)

Reuse of stale historical Attempt identity: **FORBIDDEN** (fresh Cycle/EC/A/B required).
Historical prior docs-write evidence: supporting provenance only.

---

## FRESH-LINEAGE STRATEGY

Future REAL campaign MUST:
1. create fresh Project (or equivalent supported binding) → bind proof identity
2. fresh Cycle / ExecutionContract lineage (functional-design path already harnessed)
3. Attempt A = docs-write (`agt:m4.cursor.bounded_docs_write`)
4. verify A → VERIFIED Artifact Evidence; retain worktree
5. Attempt B = NEW Attempt under SAME EC = local commit (`agt:m4.cursor.bounded_local_commit`)
6. Cont01 resume exact prior-A workspace lineage (server-derived; no heuristic latest)
7. observe/verify local commit → Evidence B
8. remote ls-remote heads/tags BEFORE/AFTER equal

No lineage created in this readiness cycle.

---

## ATTEMPT A READINESS

Agent: `agt:m4.cursor.bounded_docs_write`
Capability/action/target/scope: `cap:cursor.docs_write` / `cursor.docs_write.apply` / `workspace.isolated.docs_write` / `studio.gcec.docs_write`
Adapter: `adp:m4-cursor-cli-real`
Canonical artifact path: `docs/functional-design.md`

Verified:
- descriptor exists and is registry-seeded
- slice/profile server-derived; client cannot widen target/scope/effects
- managedRepoRoot not EC-client-controlled; resolver uses Project binding + `SFIA_GCEC_MANAGED_REPO_BASE`
- A authorizes filesystem write only (no git.commit / push / PR / merge)
- A success does not complete EC when commit remains outstanding (D-GCEC-15)
- Artifact Evidence path exists (`ingestDocsWriteArtifactEvidence` / independent worktree observation)
- CONF-02A mutating env applied on REAL gateway launch (defense-in-depth)
- Cursor auth operates under CURRENT gateway-compatible environment (see Cursor readiness)

Status: **READY**
A REAL: **NOT RUN**

---

## ATTEMPT B READINESS

Agent: `agt:m4.cursor.bounded_local_commit`
Capability/action/target/scope: `cap:cursor.git.local_commit` / `cursor.git.local_commit.apply` / `workspace.isolated.git.local_commit` / `studio.gcec.git.local_commit`

Verified:
- B is a NEW Attempt under SAME EC after VERIFIED A
- profile recomputed at StartExecution; docs-write agent rejected for commit-only slice
- Cont01 requires exact priorAttemptId + VERIFIED Evidence + workspace resume
- GitCommitLaunchSpec server-built (parent/paths/message); Studio does not trust Cursor narrative
- observeLocalCommitFacts → verifyLocalCommitEffect → Evidence
- forged observation / trustCursorReportOnly rejected
- commit is LOCAL only; push/PR/merge not B effects

Status: **READY**
B REAL: **NOT RUN**

---

## CONT-01 READINESS

`resolvePreCommitWorkspaceContinuation` / `resumeVerifiedWorkspace`:
- server-derived execRoot / priorAttemptId
- Evidence+Attempt based; no free workspace path
- ambiguity fail-closed; no heuristic latest/first
- FS→SHA supersession lineage-strict
- no new persistence required

Historical prior worktree path from docs-write facts: **does not exist** on disk now (`HIST_WT_EXISTS=no`).
Fresh EC cannot select stale worktree heuristically.

Status: **READY**

---

## AGENT-01 READINESS

- A selectedAgentRef must be docs-write compatible
- B selectedAgentRef must be local-commit compatible
- StartExecution recomputes current slice/profile
- stale/hostile claimedRequestedAgentRef fails or is ignored
- no broad composite docs-write+commit agent required
- EC not rewritten merely to change executor

Status: **READY**

---

## GOVERNED EFFECT MATRIX

| Effect | Attempt A | Attempt B |
| --- | --- | --- |
| filesystem read | ALLOWED_SUPPORTING | ALLOWED_SUPPORTING |
| filesystem write | REQUIRED (bounded path) | ALLOWED_SUPPORTING (pre-commit worktree) |
| git status/read | ALLOWED_SUPPORTING | REQUIRED (observe) |
| git commit | PROTECTED_NOT_AUTHORIZED | REQUIRED (local only) |
| git push | PROTECTED_NOT_AUTHORIZED | PROTECTED_NOT_AUTHORIZED |
| GitHub API mutation | PROTECTED_NOT_AUTHORIZED | PROTECTED_NOT_AUTHORIZED |
| PR create/update | PROTECTED_NOT_AUTHORIZED | PROTECTED_NOT_AUTHORIZED |
| merge | PROTECTED_NOT_AUTHORIZED | PROTECTED_NOT_AUTHORIZED |
| branch delete | PROTECTED_NOT_AUTHORIZED | PROTECTED_NOT_AUTHORIZED |
| tag | PROTECTED_NOT_AUTHORIZED | PROTECTED_NOT_AUTHORIZED |
| remote resource mutation | PROTECTED_NOT_AUTHORIZED | PROTECTED_NOT_AUTHORIZED |

Principle: technical availability ≠ authority; unauthorized observed effect = FAIL.

Status: **READY**

---

## REMOTE ANTI-EFFECT READINESS

Harness `gcecCursorRealSameEcCommit.real.d0.test.ts` implements `captureRemoteRefSnapshot` via:
- `git ls-remote --heads`
- `git ls-remote --tags`

BEFORE A and AFTER B compared for equality (heads/tags/main).
Independent of Cursor self-report (CR-GCEC-AGENT-10).

Status: **READY** (harness-level; not a Product Gate D service — forensic obligation of future REAL GO)

---

## LOCAL COMMIT VERIFICATION READINESS

Future B verification establishes:
commit exists locally; exact repo/worktree; exact parent; exact fileset; Artifact lineage; SHA; no extra file; remote refs unchanged.

Owned by governed Git observation + `verifyLocalCommitEffect`, not Cursor narrative.

Status: **READY**

---

## EVIDENCE READINESS

D-GCEC-EVID-01 disposition: ACCEPTED NON-BLOCKING (adapter compatibility reserve not reopened).

Local-commit path still owns observe → verify → Evidence.
Caller cannot submit authoritative observed SHA/parent/fileset/remote-state as trusted client input (`local_git_forged_observation_rejected`).

Status: **READY**

---

## SECRET HYGIENE

Under trusted-but-governed model:
- no intentional secret emission into ExecutionReport / Evidence / ReviewBundle / git commit content / Review Pack
- readiness did not request credential contents
- no credential rotation/logout/login
- CONF-02A strips mutating Cursor env injection vectors (SSH/GH tokens/askpass/GIT_CONFIG_*) as defense-in-depth

Status: **READY** (secret *access* alone ≠ failure)

---

## CURSOR CLI/AUTH READINESS

CURSOR_CLI_VERSION: `2026.09.10-fd3934a` (`/Users/morris/.local/bin/cursor-agent`)
CURSOR_AUTH_READY: **yes** (status reports logged in as `m.cleland@live.fr`; no login performed)
CURSOR_MINIMAL_LAUNCH_READY: **yes**

Harmless /tmp ask-mode probe:
- dir: `/tmp/gcec-a2b-readiness-probe.faCNrs`
- command: `cursor-agent -p --mode ask --trust` fixed marker reply
- output exact: `GCEC_A2B_READINESS_PROBE_OK`
- RC=0
- Product/proof/GitHub: untouched

This probe ≠ Product GCEC REAL.

---

## FOCUSED TESTS

Command (from `projects/sfia-studio/app`, REAL gates unset):
`npm test --` Cont01×3 + Agent01×2 + GitCommit×5 + CONF-02A + Cr23 + D15 + MonolithicE2e + Real harness encode-only×2

Result: **16 files passed** · **219 passed | 2 skipped** · Duration ~3.59s
Artifact: `.tmp-sfia-review/gcec-a2b-readiness-focused.out`

REAL bodies skipped (gates OFF) as required.

---

## FULL VALIDATION

| Gate | Result |
| --- | --- |
| typecheck (`tsc --noEmit`) | PASS |
| lint (`next lint`) | PASS — No ESLint warnings or errors |
| build (`next build`) | PASS |
| full vitest (`npm test`) | **352 passed | 17 skipped** files · **3784 passed | 137 skipped** tests · ~39.47s |

REAL gates remained unset throughout.
Artifacts: `.tmp-sfia-review/gcec-a2b-readiness-{typecheck,lint,build,full-vitest}.out`

---

## REAL HARNESS GATING

CURRENT gate names:
- `SFIA_STUDIO_CURSOR_REAL` (product REAL enable; default OFF)
- `SFIA_GCEC_CURSOR_REAL_PROOF` (docs-write harness)
- `SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF` (A→B commit harness; requires all three = `1`)
- `SFIA_GCEC_MANAGED_REPO_BASE` (managed clone base; required for REAL)

Default: OFF / unset.
This readiness cycle did **not** activate them.
Ordinary vitest does not execute REAL bodies.
Proof target identity is explicit in harness (`mcleland147/sfia-gcec-proof-task-manager` @ BASE_SHA) — not a silent dangerous default to arbitrary repos.

Status: **OFF / READY**

---

## FUTURE REAL CAMPAIGN PLAN

**(PLAN ONLY — NOT EXECUTED)**

1. Distinct Morris GO REAL with explicit env activation + managed base.
2. Project/binding: fresh `createProject` + bind `mcleland147/sfia-gcec-proof-task-manager` (do not reuse stale Attempt ids).
3. Fresh Cycle/EC via existing functional-design Product path (as encoded in `gcecCursorRealSameEcCommit.real.d0.test.ts`).
4. Attempt A effect: docs-write → `docs/functional-design.md`
5. A agent: `agt:m4.cursor.bounded_docs_write`
6. Verify A + VERIFIED Artifact Evidence; retain worktree; EC remains open.
7. Attempt B effect: local `git.commit` exact authorized fileset; message from trusted artifactBrief (`docs: add task manager functional design` harness canonical).
8. B agent: `agt:m4.cursor.bounded_local_commit`
9. Cont01 same-EC workspace continuity.
10. observe/verify B → Evidence B (commit SHA canonical).
11. Remote anti-effect: ls-remote heads/tags BEFORE A / AFTER B equal @ `32c7c200…`.
12. Campaign ReviewBundle/Evidence; no push/PR/merge.

Preferred single coherent fresh A→B campaign (no unnecessary micro-cycle split).

---

## FUTURE STOP CONDITIONS

Future REAL GO stops on:
Project/repo mismatch; remote base unexpected drift; EC mismatch; Attempt lineage mismatch; incorrect selectedAgentRef; incorrect AuthorizedExecutionSlice; unverified A Evidence; workspace ambiguity; unexpected fileset/parent; unauthorized protected effect; remote refs changed; secret leakage into durable evidence/log/Git; verification conflict; Cursor/auth failure; Evidence integrity failure beyond accepted EVID-01 reserve.

No automatic workaround.

---

## READINESS HARD BAR MATRIX (§25)

| # | Requirement | Status |
| --- | --- | --- |
| 1 | local Product truth exact | PASS |
| 2 | Product code clean | PASS |
| 3 | Project/repo binding usable | PASS (fresh create supported) |
| 4 | proof repo baseline qualified | PASS (`32c7c200…`) |
| 5 | A docs-write path ready | PASS |
| 6 | B local-commit path ready | PASS |
| 7 | same-EC continuation ready | PASS |
| 8 | Agent A/B profile derivation ready | PASS |
| 9 | governed effect matrix explicit | PASS |
| 10 | protected effects excluded from authority | PASS |
| 11 | remote anti-effect verification ready | PASS |
| 12 | local commit independent verification ready | PASS |
| 13 | Evidence pipeline ready | PASS |
| 14 | no blocking regression | PASS |
| 15 | Cursor runtime/auth ready | PASS |
| 16 | REAL harness gated OFF by default | PASS |
| 17 | no new architecture/persistence required | PASS |
| 18 | exact future campaign plan available | PASS |
| 19 | stop conditions explicit | PASS |
| 20 | no Product/proof mutation during readiness | PASS |

---

## PRODUCT MUTATION
NONE

## PRODUCT COMMIT
NONE

## PRODUCT PUSH
NONE

## PR
NONE

## MERGE
NONE

## PROOF REPO MUTATION
NONE

## GCEC REAL
NOT RUN

## REAL git.commit
NOT PROVEN

## REAL_CONTINUATION_GAP
OPEN

## GCEC-PUSH
NOT READY

## GOVERNED EXECUTOR EFFECT / AUTHORITY RESERVE
OPEN

## EVIDENCE RESERVE
ACCEPTED NON-BLOCKING

---

## DECISION REQUIRED FROM MORRIS

**GO REAL** — authorize one bounded fresh A→B campaign under explicit gates —
**OR NO-GO** / correction if Critical Review finds a blocker.

This readiness outcome does **not** itself authorize REAL.

---

## ANTI-CLAIMS

- ≠ REAL A→B PROVEN
- ≠ REAL git.commit PROVEN
- ≠ REAL_CONTINUATION_GAP CLOSED
- ≠ GCEC-PUSH READY
- ≠ GOVERNED EXECUTOR EFFECT RESERVE CLOSED
- ≠ runtime v3 ADOPTED
- ≠ Product StartExecution REAL executed
- ≠ proof-repo mutated
- ≠ unlimited Cursor authority
- ≠ universal secret isolation proven/required
- ≠ alternate executor selected

---

## FINAL VERDICT

**OUTCOME A — READINESS PASS WITH RESERVE —**
BOUNDED REAL A→B GOVERNANCE CAMPAIGN READY FOR DISTINCT MORRIS GO REAL /
REAL git.commit STILL NOT PROVEN /
GOVERNED EXECUTOR EFFECT RESERVE REMAINS OPEN UNTIL REAL PROOF
