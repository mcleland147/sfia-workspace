# SFIA Studio Review Pack — GCEC-D-ONLY-PR-CREATE-REAL-01

**Mode:** FULL
**Timestamp (UTC):** 2026-09-13T15:31:11Z
**Milestone:** GCEC-D-ONLY-PR-CREATE-REAL-01
**Cycle:** 9 — QA / validation
**Typology:** RUN
**Profil:** CRITICAL
**Verdict class:** DREAL-AUTHORITY-FAIL / path unavailable
**StartExecution mutating launch:** NONE (budget not consumed)

---

## Exact Morris GO

GO MORRIS — ONE REAL D-ONLY PR-CREATE EXECUTION CONTRACT AGAINST EXISTING C-PROVEN FEATURE — FULL-CAPABILITY CURSOR ANCHOR 9878043E — STOP BEFORE MERGE

Incoming Review Handoff tip expected: `98259c550f666b4b36eb31874d5b0a13e0cd5e58`

Constants used:

| Name | Value |
|---|---|
| NEW / worktree | `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf` |
| Branch | `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` |
| ANCHOR (Product HEAD) | `9878043eca14896c3a6f6cb8f9dc4a84b6a26d55` |
| PARENT | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| origin/main (Product) | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| PROOF | `mcleland147/sfia-gcec-proof-task-manager` |
| H0 / main | `32c7c2008197e5c61b32c16479144e9863291358` |
| FEATURE | `gcec/lifecycle/gcec-ad-finaldec-f2-fe6b` |
| FEATURE_SHA | `3a879572722af2b72909243ba0b506f307d87156` |
| PR_TITLE (planned, not created) | `GCEC proof: D-only governed PR create` |

---

## Canonical maturity before campaign

| Claim | State |
|---|---|
| A docs-write | HISTORICAL REAL PROVEN AT TESTED SCOPE |
| B local git.commit | HISTORICAL REAL PROVEN AT TESTED SCOPE |
| C remote push | HISTORICAL REAL PROVEN AT TESTED SCOPE |
| A→C | HISTORICAL REAL PROVEN AT TESTED SCOPE |
| C HTTPS capability | REAL-BACKED AT TESTED SCOPE |
| Current full-capability Cursor boundary | READ-ONLY REAL-BACKED AT TESTED SCOPE |
| Current A/B/C on anchor 9878043e | DETERMINISTIC NON-REGRESSION PROVEN |
| D github.pr.create | NOT PROVEN |
| E merge | NOT PROVEN |
| runtime v3 | NON ADOPTED |

---

## Phase-scoped / D-only architecture statement

Morris authorized a **NEW dedicated D-only ExecutionContract** whose effect set is exactly `github.pr.create`, against the already C-proven feature branch, without replaying A/B/C and without using the monolithic A→D REAL harness.

Product runtime at ANCHOR implements bounded PR-create (`buildGitPrCreateLaunchSpec`, `M4_BOUNDED_PR_CREATE_*`, `isBoundedGitPrCreateOnlySlice`) but **StartExecution for a pr.create-only authorized slice hard-requires same-EC verified remote-push lineage** via `resolveVerifiedRemotePushPriorAttempt` (succeeded Attempt with `M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID` + VERIFIED `git:remote_push` Evidence bound to that EC).

There is **no public Product path** to bind historical C-proven remote head truth into a fresh D-only EC without either:

1. re-running C (push) on that same EC (forbidden by D-only / no A→D replay), or
2. fabricating Attempt/Evidence / mutating internal stores (forbidden by GO §10), or
3. editing Product source to add a D-only prior-binding API (forbidden — no Product source edits).

Features under `projects/sfia-studio/app/features/project-assistant/f3/` expose bounded docs-write and read-only paths only — **no** `completeBoundedPrCreate` / D-only public campaign API.

Therefore: **STOP — DREAL-AUTHORITY-FAIL / path unavailable**. No StartExecution. No PR created by this campaign. Outer agent did not run `gh pr create`.

---

## §6 Local Product Git Truth

| Check | Result |
|---|---|
| Branch | `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` |
| HEAD | `9878043eca14896c3a6f6cb8f9dc4a84b6a26d55` = ANCHOR |
| HEAD^ | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` = PARENT |
| origin/main | `c481610caa3527edabeca8c860ab27c18a6a738e` = MAIN |
| Tracked Product source delta under `projects/` vs ANCHOR | NONE |
| Worktree noise | `.tmp-sfia-review/**` review/campaign artifacts + local `node_modules` (not Product source) |

**§6:** PASS (no FULL-CAPABILITY PRODUCT ANCHOR DRIFT).

---

## §7 Full-capability implementation at ANCHOR

Inspected `studioCursorRealLaunchGateway.ts` + `mutatingCursorConfinementEnv.ts` on ANCHOR:

| Requirement | Evidence |
|---|---|
| argv `--sandbox disabled` + `--force` | Gateway builds mutating PR-create argv with `--sandbox` / `disabled` / `--force` (full-capability native mode) |
| No CURSOR_FORCED egress inject | FCP-A comment + confinement: Product MUST NOT inject `CURSOR_FORCED_*`; keys stripped / not set for spawn |
| No ephemeral GH bridge | FCP-A: no ephemeral `GH_TOKEN` bridge; confinement does not propagate `GH_TOKEN` |
| Authority gates present | StartExecution → authorized slice / Confirmation / `buildGitPrCreateLaunchSpec` / RepositoryRead preflight |

**§7:** PASS (implementation consistent with accepted full-capability review). Capability alone does not create a D-only EC path.

---

## §8 Proof remote RO precheck (host gh READ-ONLY)

| Check | Observed |
|---|---|
| `refs/heads/main` | `32c7c2008197e5c61b32c16479144e9863291358` = H0 |
| `refs/heads/gcec/lifecycle/gcec-ad-finaldec-f2-fe6b` | `3a879572722af2b72909243ba0b506f307d87156` = FEATURE_SHA |
| feature ≠ main | true |
| Matching PRs head→base (all states) | **NONE** (`[]`) |

**§8:** PASS — existing PR count before launch = **0**. Preconditions exact. No launch followed.

---

## §9 PR payload (planned — NOT executed)

- repository: `mcleland147/sfia-gcec-proof-task-manager`
- base: `main`
- head: `gcec/lifecycle/gcec-ad-finaldec-f2-fe6b`
- title: `GCEC proof: D-only governed PR create`
- body must contain:

```
SFIA GCEC REAL proof campaign.
Effect under test: github.pr.create only.
Base: main @ 32c7c2008197e5c61b32c16479144e9863291358
Head: gcec/lifecycle/gcec-ad-finaldec-f2-fe6b @ 3a879572722af2b72909243ba0b506f307d87156
Merge is NOT authorized by this campaign.
```

**Status:** NOT created (no Product launch; host did not create PR).

---

## D-only ExecutionContract

| Field | Value |
|---|---|
| Fresh D-only EC created | **NO** |
| id / version / fingerprint / bindings | **N/A — not constructed** |
| Exact effect set | intended `github.pr.create` only — not instantiated |
| Reason | Public StartExecution path cannot authorize/launch D without same-EC verified push prior; constructing EC without launch would not prove D and cannot pass authority oracle for StartExecution |

**Discovery notes (public APIs searched):**

- `buildGitPrCreateLaunchSpec` / `isBoundedGitPrCreateOnlySlice` — `lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts`
- `M4_BOUNDED_PR_CREATE_*` / `createM4BoundedPrCreateCursorAgentDescriptor` — `m4BoundedPrCreateCursorAgent.ts`
- StartExecution PR branch — `startExecution.ts` (~1435+) calls `resolveVerifiedRemotePushPriorAttempt` → fail closed `git_pr_create_without_verified_remote_push` when no same-EC push prior
- Deterministic lifecycle tests — `gcecGitLifecyclePushPrMerge.d0.test.ts` (ZERO REAL); confirms profile needs verified push lineage
- Only REAL PR-capable harness — `gcecCursorRealSameEcCommit.real.d0.test.ts` (monolithic A→D with flags including `SFIA_GCEC_CURSOR_REAL_PR_PROOF`) — **explicitly forbidden** for this GO
- f3 product features — no D-only PR create campaign entrypoint

---

## HumanDecision / Confirmation

| Field | Value |
|---|---|
| Created | **NO** |
| ids/types | N/A |
| Authority result | **NOT ESTABLISHED** — STOP before StartExecution per GO (DREAL-AUTHORITY-FAIL) |

Intended authority oracle (not reached):

- `github.pr.create` AUTHORIZED
- `github.pr.merge` / `git.push` / `git.commit` / `docs-write` NOT AUTHORIZED

---

## REAL campaign budget

| Budget | Value |
|---|---|
| Max mutating Product Cursor launches | 1 |
| Launches consumed | **0** |
| Max PR creations | 1 |
| PRs created by this campaign | **0** |
| Retry | NONE |

---

## StartExecution

| Field | Value |
|---|---|
| Launched | **NO** |
| attempt id | N/A |
| realProcessInvoked | N/A |
| Cursor argv | N/A |
| Cursor exit | N/A |
| Second launch | NO |

---

## Remote reconciliation (host RO post)

Reconfirmed after stop (no launch):

| Field | Value |
|---|---|
| Matching OPEN PR head→base | **NONE** |
| main SHA | still H0 |
| feature SHA | still FEATURE_SHA |
| PR number / URL | **none** |
| merged | N/A |

Case B (no PR) consistent with **NO-EFFECT** on remote; classification remains authority/path fail (pre-launch stop), not post-launch NO-EFFECT.

---

## Evidence / ReviewBundle

| Field | Value |
|---|---|
| Evidence ids | none for this campaign |
| VERIFIED PR-create Evidence | none |
| ReviewBundle | none from Product execution |

---

## EC after / semantic immutability

N/A — no EC instantiated through protected execution.

---

## Product Git post-state

| Check | Result |
|---|---|
| HEAD | still `9878043eca14896c3a6f6cb8f9dc4a84b6a26d55` |
| Product source delta under `projects/` | NONE |
| A/B/C replay | NONE |
| E / merge | NOT STARTED / NOT AUTHORIZED |
| STOP BEFORE MERGE | honored (no PR to merge) |

---

## Exact gap (DREAL-AUTHORITY-FAIL / path unavailable)

1. **Hard Product gate:** `StartExecution` for `isBoundedGitPrCreateOnlySlice(authorizedEffects)` requires `resolveVerifiedRemotePushPriorAttempt` on the **same** `executionContractId` (push agent Attempt succeeded + VERIFIED `git:remote_push` Evidence with repo/refName/commitSha).
2. **D-only EC contradiction under current APIs:** a NEW EC with only `github.pr.create` executable has **no** same-EC push Attempt/Evidence → StartExecution fails closed (`git_pr_create_without_verified_remote_push` / profile `without_verified_push_lineage`).
3. **Historical C cannot be rebound:** Evidence lineage is EC-scoped (`evidenceMatchesContractLineage` + attempt on same EC); public APIs do not accept “external C-proven SHA” as prior without Product change.
4. **Forbidden alternatives under this GO:** A→D REAL harness replay; Studio-owned outer `gh pr create`; Product source edits; faking stores.
5. **No f3 public D-only campaign path** analogous to docs-write RO helpers.

**Required next Product capability (out of scope here):** a governed D-only prior-binding (e.g. public observational verify of remote head into EC lineage, or phase-scoped EC that accepts historical C Evidence without re-mutation) — then re-run this GO.

---

## Classification

**DREAL-AUTHORITY-FAIL / path unavailable**

Not DREAL-PASS. Not EFFECT-ONLY. Not UNEXPECTED-EFFECT. Launch budget unused.

---

## Maturity after

Unchanged from before:

- D `github.pr.create` remains **NOT PROVEN**
- E merge remains **NOT PROVEN**
- A/B/C historical claims unchanged (not re-proven this campaign)

---

## Anti-claims

- Does **not** claim D REAL proven.
- Does **not** claim PR created.
- Does **not** claim StartExecution / Cursor mutating launch occurred.
- Does **not** claim authority for merge/push/commit/docs-write.
- Does **not** claim Product source was modified to unblock D.
- Does **not** use outer `gh pr create`.

---

## Next gate

After Morris decision: either (1) authorize Product work to add a true D-only public prior-binding path at a new delivery commit, then re-issue D-only REAL GO; or (2) explicitly re-authorize a different campaign shape (not this GO).

---

## Review handoff

Incoming tip: `98259c550f666b4b36eb31874d5b0a13e0cd5e58`
Publish once from this pack via `scripts/sfia/publish-review-handoff.sh` (recorded in FINAL REPORT Z after publish).
