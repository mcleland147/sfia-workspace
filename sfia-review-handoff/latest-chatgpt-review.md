# SFIA STUDIO — GCEC Review Pack

## TIMESTAMP

2026-09-11T20:22:32Z

## GO MORRIS

BOUNDED DETERMINISTIC REAL GIT.COMMIT EXECUTOR DELIVERY CONSUMED

Authorized: deterministic bounded Cursor `git.commit` execution profile on existing REAL gateway / ExecutionAttempt architecture; independent local-commit verification; Evidence binding; FS→verified-commit-SHA supersession; future REAL A→B harness (disabled); full regressions; FULL Review Pack + canonical handoff.

NOT authorized / NOT done: REAL StartExecution; actual Cursor business child; proof-repo commit; Product commit/push; PR/merge; new persistence/schema/migration; second execution engine; new FSM/status; doctrine/Roadmap; runtime v3.

Critical rule preserved: **DETERMINISTIC executor candidate ≠ REAL executor proven.**

---

## GIT TRUTH BEFORE

| Check | Value |
|-------|-------|
| worktree | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| HEAD | `3966bbf9b800b143711acf1d581b85a33e106e99` |
| parent | `92ad3fd41e065d0ebe76c59b4eedb622715a11e2` |
| origin/main | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| Product tracked | clean |
| `.tmp-sfia-review/**` | dirt allowed |
| Review Handoff tip (input) | `caaa5c822dbb092e5ea06b6cdeedc6da3053db7f` |

## GIT TRUTH AFTER

| Check | Value |
|-------|-------|
| HEAD | `3966bbf9b800b143711acf1d581b85a33e106e99` (**unchanged**) |
| parent | `92ad3fd41e065d0ebe76c59b4eedb622715a11e2` |
| Product commit | **NONE** |
| Product push | **NONE** |
| Product tracked dirt | uncommitted Delivery candidate under `projects/sfia-studio/**` |
| Proof repo | **UNCHANGED** (not mutated) |

---

## SOURCES

Read / binding references:

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- Build Doctrine / Roadmap / Product Completion (CLOSED) / v3 framing 34–35 (NON ADOPTED)
- Prior handoff `@ caaa5c82…` (CONT-01 locally committed)
- LOCAL Product at `3966bbf9` authoritative over `origin/main` for GCEC details

---

## CONVERGENCE PRE-CHECK

| Item | Status |
|------|--------|
| Build Doctrine | VALIDATED / ACTIVE |
| Product Completion | COMPLETE / CLOSED — not reopened |
| Runtime v3 | NON ADOPTED |
| Applicable rules | R2, R3, R6, R8, R12, R13, R15, R18, R19, R21 |
| Trajectory | docs-write REAL proven → CONT-01 deterministic → **NOW** bounded local-commit deterministic → Critical Review → candidate local commit → distinct Morris REAL A→B |

---

## CYCLE / TYPE / PROFILE

- **Cycle:** 8 — Delivery
- **Type:** EVOL
- **Profile:** CRITICAL

Why Critical: protected E3 `git.commit`; executes on prior mutable REAL workspace; incorrect bounding could widen to push/branch/remote; bridge toward future GCEC-PUSH.

Binding: D-GCEC-09…15; **D-GCEC-CONT-01 ADOPTED**.

Input Product commit: `3966bbf9b800b143711acf1d581b85a33e106e99`
Input Handoff: `caaa5c822dbb092e5ea06b6cdeedc6da3053db7f`
Expected proof level: **DETERMINISTIC PROVEN** (not REAL).

---

## D-GCEC-CONT-01

**ADOPTED** (prior Delivery). This lot closes the deferred **FS→verified-commit-SHA supersession** debt without Option E / new persistence.

---

## EXECUTOR SUFFICIENCY ANALYSIS

### PASS WITH RESERVE (REAL tooling)

Deterministic boundedness does **not** rely on prose alone. It combines:

1. `authorizedEffects` = `git.commit` only (fail-closed vs push/PR/FS mix on REAL gateway profile)
2. Cont01 `workspaceContinuation` for Attempt B resume
3. Server-derived `GitCommitLaunchSpec` (repositoryRef, expectedParentSha, exactPaths[], commitMessage, optional branchOrRef)
4. Valid `git.commit` Confirmation + Gate D (existing StartExecution path)
5. `--print` + `--workspace` + `--trust` + `--sandbox enabled`
6. Instruction forbids push/fetch-mutatif/pull/remote/branch/checkout/reset/restore/rebase/merge/amend/tag/clean/file-edit
7. Independent Studio READ-ONLY verification (`verifyLocalCommitFacts` / `verifyLocalCommitEffect`) before VERIFIED Evidence
8. Defense-in-depth env: `GIT_TERMINAL_PROMPT=0`, `GCM_INTERACTIVE=Never` (not the authority boundary)

**RESERVE:** Cursor CLI 3.19.19 has **no** explicit tool allow/deny flags. Agent mode (`--print` without `--mode ask`) exposes Shell **and** Write. Boundedness for REAL therefore still depends on instruction + structured slice/spec + independent Git verification — same class of reserve as docs-write REAL (Write allowed, Shell forbidden by instruction).

**Not claimed:** REAL CLI sandbox alone prevents Write during commit profile.

No second process engine / command-interception subsystem introduced.

---

## CURSOR CLI DISCOVERY

```
cursor --version → 3.19.19 / 6496ea8a… / arm64
```

Relevant `cursor agent --help` controls observed:

- `--print` (scripts; help notes access to tools including write and shell)
- `--workspace <path>`
- `--trust`
- `--sandbox enabled|disabled`
- `--mode plan|ask` (ask/plan documented read-only)
- **No** tool allow/deny flags
- `--force` / `--yolo` present — **not used**

Read-only tooling inspection only — **not** a REAL business invocation.

---

## CURRENT DOCS-WRITE PROFILE

Unchanged:

- Action `cursor.docs_write.apply`
- Agent mode (omit `--mode ask`)
- Write/StrReplace only; Shell forbidden in instruction
- No commit/push/PR/merge
- Same `StudioCursorRealLaunchGateway` + `NodeCursorProcessRunner`

---

## NEW GIT.COMMIT PROFILE

Structured profile switch via `request.gitCommitSpec` (and/or local-commit action) — **not** prose inference.

- Resume Cont01 workspace (GC-10: REAL gateway rejects commit profile without continuation)
- Agent mode + sandbox enabled
- Shell **only** for bound local Git sequence (status/diff/add/commit/rev-parse/show)
- Exact paths + exact message from server spec
- Explicit forbid list (push/PR/branch/reset/rebase/amend/file-edit/…)
- No free shell script from caller

---

## AUTHORIZED EFFECT MODEL

Attempt B (GCEC A→B):

- `authorizedEffects` exactly compatible with `git.commit`
- Must **not** include `filesystem.create|modify|delete`, `git.push`, `github.pr.*`
- Prior FS effects are VERIFIED history via `verifiedEffects` / Evidence — not re-authorized for B
- Mixed `git.commit` + `git.push` on REAL gateway commit profile → reject
- Progressive CR23 (no prior Attempt): Cont01 not required; StartExecution may derive `gitCommitSpec` from `docsWriteSpec.targetPath` + `baseHeadSha` for Fake progressive path without forcing false Cont01 obligation

---

## AGENT CAPABILITY

Sibling AgentDescriptor (no schema change):

| Field | Value |
|-------|-------|
| agentId | `agt:m4.cursor.bounded_local_commit` |
| capability | `cap:cursor.git.local_commit` |
| action | `cursor.git.local_commit.apply` |
| target | `workspace.isolated.git.local_commit` |
| scope | `studio.gcec.git.local_commit` |
| trust | `bounded` |
| executionMode | `cursor_cli_real` |
| adapter | **SAME** `adp:m4-cursor-cli-real` |

Registered beside RO + docs-write in `vertical-slice-runtime/service.ts`.
`isM4AuthorizedCursorRealAgent` OR-extends to include local-commit (RO/docs bodies unchanged).
Docs-write semantics **not** silently widened.

GCEC proof EC may still use docs-write action with commit-only authorized slice; gateway profile authority is `gitCommitSpec`.

---

## COMMIT SPEC

`GitCommitLaunchSpec` (ports + domain builder):

- `repositoryRef` — Project binding / docsWriteSpec / EC inputs (server)
- `expectedParentSha` — Cont01 `expectedHeadSha` or contract `baseHeadSha`
- `exactPaths[]` — Cont01 verified files, or progressive `docsWriteSpec.targetPath`
- `commitMessage` — `inputs.commitMessage` **or** `docs: ${artifactBrief}` (trusted EC sources only)
- `branchOrRef?` — workingBranch / binding

Hard rules enforced: no free cwd; no caller shell; no wildcards; empty paths fail closed; untrusted message fail closed.

---

## CONFIRMATION / GATE D

- Existing `deriveAuthorizedExecutionSlice` + `resolveGitEffectTarget` + Confirmation match
- No `git.commit` Confirmation → no authorized commit effect → fail closed
- Gate D required + consume before CREATED/LAUNCHED (unchanged)
- Proof: Cont01 A→B + new `gcecGitCommitSameEcAb` StartExecution path; negatives without Confirmation

---

## WORKSPACE CONTINUATION

- Attempt B: `resumeVerifiedWorkspace` via Cont01 descriptor (no free path)
- Gateway: continuation present → resume; else prepare (docs-write / RO / progressive)
- Commit REAL profile: continuation **required** (GC-10)
- Post-commit: supersession clears Cont01 requirement for future push slice

**PASS**

---

## FILES MODIFIED

1. `projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts` — local-commit agent id
2. `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts` — FS→SHA supersession
3. `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts` — `GitCommitLaunchSpec` on request
4. `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts` — build/pass `gitCommitSpec`
5. `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts` — commit profile
6. `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts` — authorize OR local-commit
7. `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts` — honor commit-only + spec
8. `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts` — exports
9. `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts` — register agent
10. `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts` — supersession case

## FILES CREATED

1. `…/infrastructure/m4BoundedLocalCommitCursorAgent.ts`
2. `…/domain/gitCommitLaunchSpec.ts`
3. `…/domain/verifyLocalCommitFacts.ts`
4. `…/application/verifyLocalCommitEffect.ts`
5. `…/__tests__/…/gcecGitCommitGatewayProfile.d0.test.ts` (GC-01…12)
6. `…/__tests__/…/gcecGitCommitVerification.d0.test.ts` (GV-01…10)
7. `…/__tests__/…/gcecGitCommitEvidence.d0.test.ts` (GE-01…07)
8. `…/__tests__/…/gcecGitCommitSameEcAb.d0.test.ts` (A→B + supersession + negatives)
9. `…/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts` (future REAL; skipped)

Reviewable copies / diff: `.tmp-sfia-review/gcec-gitcommit-reviewable/` (`product.diff` + new full files).

### Diff summary (Product)

```
10 files changed, 353 insertions(+), 26 deletions(-)
(+ 9 untracked Product files under projects/sfia-studio)
```

Full useful diff archived at `.tmp-sfia-review/gcec-gitcommit-reviewable/product.diff` (606 lines). New file full contents archived alongside.

---

## LOCAL COMMIT VERIFICATION

Pure `verifyLocalCommitFacts`:

- HEAD changed (H1 ≠ H0)
- parent(H1) == H0
- changed paths **exact** match `exactPaths`
- artifact digests unchanged
- worktree clean
- commit message match
- unexpected extra commits → fail

**PASS** (GV suite)

Studio never runs `git commit` / `git add` as business writer.

---

## GIT EVIDENCE

Existing Evidence schema / `verifyCommitClaim` (`git:local_commit`).

`verifyLocalCommitEffect`:

- Cursor report alone (`trustCursorReportOnly`) → **not** VERIFIED (GE-01)
- Independent facts + RepositoryRead → VERIFIED (GE-02)
- Exact bindings Project/Cycle/EC/Attempt (GE-03…06)
- Parent/path mismatch blocks (GE-07)

No new Evidence table/type system. No Artifact aggregate invention (D-GCEC-06/07).

---

## FS→VERIFIED-COMMIT-SHA SUPERSESSION

`isFsAnchorSupersededByVerifiedLocalCommit`:

- `verifiedEffects` includes `git.commit` **OR**
- VERIFIED `git:local_commit` Evidence bound to Project/Cycle/EC

→ Cont01 returns `{ required: false }` even if FS verified history + authorized push remain.

Future hypothetical push Attempt **must not** incorrectly require dirty Attempt-A workspace continuation.

**PASS** (resolver test + SameEcAb product-path assertion). Push executor **not** implemented.

---

## A→B DETERMINISTIC PROOF

`gcecGitCommitSameEcAb.d0.test.ts`:

- Attempt A succeeded + Artifact Evidence VERIFIED
- Attempt B same EC, new Attempt id, `git.commit` only, Confirmation + Gate D
- Cont01 unique continuation → `gitCommitSpec` server-built
- Independent verify → Git Evidence VERIFIED
- Supersession for future push
- A ≠ B; same EC; no nested Cycle; no new FSM; no second engine; no Studio Git writer; ZERO REAL

**PASS**

---

## NEGATIVE PROOFS

Gateway: free shell, missing continuation, mixed push, missing spec.
Verification: extra/missing path, digest, dirty, wrong message, HEAD unchanged, extra commits.
Evidence: wrong bindings, report-only, parent mismatch.
StartExecution: Confirmation missing → fail closed.
Cont01 / prior suite: ambiguous/none continuation, wrong HEAD/digest, etc.

---

## FUTURE REAL HARNESS

Path: `projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts`

Gates required (all three):

```
SFIA_STUDIO_CURSOR_REAL=1
SFIA_GCEC_CURSOR_REAL_PROOF=1
SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF=1
```

REAL scenario **skipped** in normal tests. Models future Morris campaign: A docs-write (retain worktree) → B local commit → verify; no push; fresh proof root; preserve on uncertain post-launch.

**NOT RUN** in this cycle.

---

## RECONCILIATION SAFETY

Pattern preserved from docs-write REAL harness:

- After LAUNCHED + processRef: no blind cleanup on uncertain observation
- No automatic rollback/reset/amend
- Commit crash window: preserve DB, journal, execRoot/worktree, before/after Git facts, processRef, Attempt/EC IDs, expected parent, observed HEAD

Future REAL harness documents retain-A-until-B lifecycle.

**PASS** (design + skipped harness contract)

---

## REAL

**ZERO**

Env unset throughout quality gates:

- `SFIA_STUDIO_CURSOR_REAL`
- `SFIA_GCEC_CURSOR_REAL_PROOF`
- `SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF`
- `SFIA_GCEC_MANAGED_REPO_BASE`

No actual Cursor agent process. No proof-repository commit.

---

## PRODUCT PERSISTENCE

**NONE** (no new table/column/migration)

## SCHEMA/MIGRATION

**NONE**

## STUDIO GIT BUSINESS WRITES

**NONE** — Cursor remains mutation executor; Studio READ-ONLY verify + Evidence.

## PROOF REPO

**UNCHANGED** — `mcleland147/sfia-gcec-proof-task-manager` @ `32c7c200…` not mutated.

---

## FOCUSED TESTS

```
gcecGitCommitGatewayProfile.d0.test.ts
gcecGitCommitVerification.d0.test.ts
gcecGitCommitEvidence.d0.test.ts
gcecGitCommitSameEcAb.d0.test.ts
gcecCont01ContinuationResolver.d0.test.ts
gcecCont01SameEcAbContinuation.d0.test.ts
gcecCursorRealSameEcCommit.real.d0.test.ts
→ 7 files, 43 passed | 1 skipped
```

Related regressions (Cont01, D15, Cr23, docs-write REAL skip, m4RealOff, git.commit):

```
16 files, 179 passed | 2 skipped
```

## FULL VITEST

```
Test Files  348 passed | 17 skipped (365)
Tests       3710 passed | 137 skipped (3847)
```

## TYPECHECK

**PASS** (`tsc --noEmit`)

## LINT

**PASS** (No ESLint warnings or errors)

## BUILD

**PASS** (Next build compiled successfully)

## DIFF CHECK

**PASS** (`git diff --check` clean)

---

## PRODUCT HEAD

`3966bbf9b800b143711acf1d581b85a33e106e99`

## PRODUCT COMMIT

**NONE**

## PRODUCT PUSH

**NONE**

## PR

**NONE**

## MERGE

**NONE**

---

## REVIEW HANDOFF

| Field | Value |
|-------|-------|
| tip | `ef9f309d4aa7a9137066e24bc5fa56c684fd7544` |
| parent | `caaa5c822dbb092e5ea06b6cdeedc6da3053db7f` |
| blob | `08c37abbdae9ef30498351df4ce3f23917579971` |
| blob equality | **PASS** (source == HEAD == origin/sfia/review-handoff) |
| branch | `sfia/review-handoff` |
| publisher script | `scripts/sfia/publish-review-handoff.sh` (reported CANONICAL REMOTE VERIFICATION FAILED — independently verified PASS) |

---

## GCEC-CURSOR-REAL

**CLOSED BY PRIOR DOCS-WRITE EVIDENCE** (boundary proven earlier; not re-opened)

## REAL_CONTINUATION_GAP

**OPEN** — deterministic commit executor **candidate** only; REAL same-EC A→B **not** proven

## REAL GIT.COMMIT

**NOT PROVEN**

## GCEC-PUSH

**NOT READY**

---

## DEBT / EXIT

| Debt | Status |
|------|--------|
| TEMP-GCEC-PRPM-01 | OPEN |
| TEMP-GCEC-F14-BIND-01 | OPEN |
| REAL_CONTINUATION_GAP | OPEN |
| FS→verified-commit-SHA supersession | **CLOSED deterministically** this lot |
| Cleanup lifecycle (REAL campaign) | deferred to REAL A→B |
| Executor sufficiency REAL reserve | OPEN — CLI lacks tool allow/deny; exit = future Morris REAL A→B + optional read-only preflight |

Next capability (after ChatGPT Critical Review + local candidate commit):

> distinct Morris GO for **ONE** bounded same-EC REAL A→B campaign (docs-write → local commit), still no push.

---

## ANTI-CLAIMS

Do **NOT** claim:

- REAL_CONTINUATION_GAP CLOSED
- REAL git.commit proven
- GCEC-PUSH READY / AUTHORIZED
- END-TO-END REAL
- runtime v3 ADOPTED
- Studio Git business writer
- Product commit/push performed
- Proof repository mutated

---

## VERDICT

**PASS WITH RESERVE —**
BOUNDED CURSOR GIT.COMMIT EXECUTOR + SAME-EC A→B
**DETERMINISTICALLY PROVEN /**
REAL TOOLING SUFFICIENCY RESERVE REMAINS /
**READY FOR CHATGPT CRITICAL REVIEW**

Reserve scope: Cursor CLI has no tool allow/deny; REAL commit profile still instruction-bounded for Shell-vs-Write separation. Deterministic architecture (structured slice + Cont01 resume + server `gitCommitSpec` + independent verification + Evidence + FS→SHA supersession) is sound without requiring REAL execution for this Delivery lot.
