# SFIA Studio Review Pack — GCEC-D credential source validation (STOP)

**Timestamp:** 2026-09-13T15:15:00+02:00
**Mode:** FULL
**Milestone:** GCEC-D-CREDENTIAL-SOURCE-VALIDATION-01
**Incoming handoff tip:** `cd3e4ed7f04574df1f32a3e19dfb73479653df7d`
**Worktree NEW:** `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf`
**Open UI workspace:** untouched (except handoff WT publish path)

---

## A. VERDICT

**STOP — CREDENTIAL VALID IN PARENT / INVALID IN CURSOR CHILD**

- Host keyring baseline (§10): **PASS**
- Exact Product `HostGhAuthTokenCredentialProvider` + parent `GH_TOKEN` API (§11): **PASS** → classification **S2**
- Authorized Cursor RO re-probe (§13): **FAIL** (one launch)
- Local Product commit: **NOT performed**
- ZERO MUTATING REAL maintained
- D PR-create effect: **still NOT PROVEN**

---

## B. LOCAL GIT TRUTH

| Field | Value |
| --- | --- |
| pwd / toplevel | `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf` |
| Branch | `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` |
| HEAD (= ANCHOR) | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| `origin/main` (= MAIN) | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| `git diff --check` | clean (exit 0) |
| Dirty Product candidate | **PRESERVED** (no stash/reset/clean/discard/checkout/commit) |

---

## C. DIRTY CANDIDATE PRESERVATION

Expected bridge files remain present (modified / untracked Product sources). No Product source edits in this lot. Probe/validate scripts and outs live only under `.tmp-sfia-review/` (not staged). `projects/sfia-studio/app/node_modules` symlink left untouched.

Dirty Product paths (presence):

- `hostGhAuthTokenCredentialProvider.ts` (untracked)
- `remoteGithubCredentialPort.ts` (untracked)
- `redactExactSecrets.ts` (untracked)
- `studioCursorRealLaunchGateway.ts` (modified)
- `nodeCursorProcessRunner.ts` (modified)
- `realExecutionLaunchPort.ts` (modified)
- `cursorCliLaunchGateway.ts` / `index.ts` (modified)
- `gcecRemoteGithubEphemeralSecretBridge.d0.test.ts` (untracked)
- `fakeRemoteGithubCredentialProvider.ts` (untracked)

---

## D. CANONICAL MATURITY (DO NOT REGRESS)

Preserve exactly:

| Slice | Status |
| --- | --- |
| A docs-write | **REAL PROVEN AT TESTED SCOPE** |
| B local commit | **REAL PROVEN AT TESTED SCOPE** |
| C remote push | **REAL PROVEN AT TESTED SCOPE** |
| A→C | **REAL PROVEN AT TESTED SCOPE** |
| C HTTPS bridge | **REAL-BACKED AT TESTED SCOPE** |
| D | prior REAL Attempt **LAUNCHED** but PR effect **NOT PROVEN** |
| D PR create | **NOT PROVEN** |
| E / merge | **NOT PROVEN** |
| runtime v3 | **NON ADOPTED** |

This lot **cannot** promote D PR-create REAL. Do **not** regress C.

---

## E. PROOF REMOTE PRECONDITIONS

| Check | Result |
| --- | --- |
| Repo `full_name` (keyring, tokens unset) | `mcleland147/sfia-gcec-proof-task-manager` |
| `main` SHA | `32c7c2008197e5c61b32c16479144e9863291358` (= H0) |
| `git ls-remote` main | matches H0 |
| Feature ref | `gcec/lifecycle/gcec-ad-finaldec-f2-fe6b` |
| Feature SHA | `3a879572722af2b72909243ba0b506f307d87156` (= FEATURE_SHA) |
| `git ls-remote` feature | matches FEATURE_SHA |
| Open PRs for that head | **NONE** (`[]`) |

No proof precondition drift.

---

## F. HOST KEYRING BASELINE

Same `env -u GH_TOKEN -u GITHUB_TOKEN -u GH_ENTERPRISE_TOKEN -u GITHUB_ENTERPRISE_TOKEN`:

| Check | Result |
| --- | --- |
| `gh auth status` | Logged in to github.com account `mcleland147` (**keyring**); Token line redacted |
| Token scopes (presence) | gist, read:org, repo, workflow |
| `gh api` full_name | PASS |
| `gh api` feature SHA | PASS (= FEATURE_SHA) |

**HOST GH KEYRING AUTH: VALID**

---

## G. EXACT PRODUCT CREDENTIAL SOURCE VALIDATION

| Field | Value |
| --- | --- |
| Script | `.tmp-sfia-review/parent-credential-source-validate.mjs` |
| Out | `.tmp-sfia-review/parent-credential-source-validate.out` |
| Loader | APP `tsx` importing dirty `HostGhAuthTokenCredentialProvider` |
| `acquire()` | once; token never printed/logged/hashed/prefixed |
| On success spawn | `gh` with `GH_TOKEN` set; `GITHUB_TOKEN` / enterprise keys deleted |
| Redaction | exact token scrubbed before write |
| `acquire_ok` | **yes** |
| `parent_api_full_name` | `mcleland147/sfia-gcec-proof-task-manager` |
| `parent_api_feature_sha` | `3a879572722af2b72909243ba0b506f307d87156` |
| `parent_api_ok` | **yes** |

---

## H. SOURCE CLASSIFICATION S1/S2/S3

**S2** — keyring PASS **and** parent `GH_TOKEN` via exact Product provider PASS.

Not S1 (provider did not fail). Not S3 (acquire succeeded).

S2 authorized **one** Cursor RO re-probe.

---

## I. CURSOR RO RE-PROBE

| Field | Value |
| --- | --- |
| Authorized | **yes** (S2) |
| Count this lot | **1** (max) |
| Script | `.tmp-sfia-review/d-secret-bridge-ro-reprobe.ts` |
| Out | `.tmp-sfia-review/d-secret-bridge-ro-reprobe.out` (**new** file; prior fail probe not reused as success) |
| Provider | dirty `HostGhAuthTokenCredentialProvider` |
| Confinement | `buildMutatingCursorConfinementEnv(..., effectClass: remote_github)` |
| Inject | `GH_TOKEN` after confinement; other token keys deleted |
| Runner | `NodeCursorProcessRunner` + `redactExactValues` |
| Cursor | `agent --print --trust --sandbox enabled` + temp empty workspace |
| Campaign / A→D REAL harness flags | **unset** |
| Result | **FAIL** |
| Asserts | `full_name_present=true` (string appears in instruction/Forbidden URL only) / `feature_sha_present=false` / `raw_token_absent=true` |
| Child symptom | `gh auth status`: GH_TOKEN **invalid**; keyring **invalid** in child; both `gh api` → **Forbidden** |
| `exitCode` | 0 (agent completed; auth/API failed) |
| Proof mutation / `gh pr create` / push | **NONE** |

Prior lot out `.tmp-sfia-review/d-secret-bridge-ro-probe.out` remains historical FAIL evidence — **not** treated as PASS.

---

## J. SECRET REDACTION

| Check | Result |
| --- | --- |
| Token values in stdout of this agent | **never printed** |
| Validate / re-probe outs | exact-token redaction applied; no `ghp_`/`gho_`/`ghu_`/`github_pat_` prefixes found in `.tmp-sfia-review` outs/pack |
| Review pack | **no secrets** |

---

## K. ZERO MUTATING REAL

| Action | Status |
| --- | --- |
| `gh pr create` / merge | NONE |
| Product push | NONE |
| Proof push / PR / mutation | NONE |
| Proof file edits via Cursor | NONE (RO instruction; empty temp workspace) |
| Product source edits this lot | NONE |

---

## L. PRODUCT DIFF

Uncommitted (parent still ANCHOR). Summary of dirty secret-bridge candidate (prior authorized lot bytes — not edited here):

- Port + `HostGhAuthTokenCredentialProvider` (`gh auth token` only; token ENV unset in provider child)
- `redactExactSecrets` + runner `redactExactValues`
- `studioCursorRealLaunchGateway`: PR-create-only acquire → inject `GH_TOKEN` into fresh child env after `remote_github` confinement
- Re-exports via `cursorCliLaunchGateway` / `index`
- D0 SEC tests + fake provider

`git diff --stat` (tracked only): review pack + gateway/runner/port/index wiring. Untracked Product bridge files listed in §C.

---

## M. VALIDATION

| Check | Result |
| --- | --- |
| Focused SEC / confinement / A→D harness (REAL unset) | **NOT RUN** — blocked by Cursor RO FAIL (GO §15–18 gate) |
| typecheck / lint / build / full vitest | **NOT RUN** — same gate |
| Prior lot validation (historical) | lint/tsc/SEC/confinement/harness previously PASS in earlier STOP pack — **not re-claimed** as this lot’s gate |

No local commit path opened.

---

## N. LOCAL PRODUCT ANCHOR

| Field | Value |
| --- | --- |
| Parent HEAD | still `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` (ANCHOR) |
| `D_SECRET_LOCAL_ANCHOR` | **N/A — commit blocked** |
| Expected subject if PASS | `fix(sfia-studio): bridge bounded GitHub auth to Cursor` |

---

## O. PRODUCT REMOTE EFFECTS

NONE (no Product push / PR).

---

## P. PROOF REMOTE EFFECTS

NONE. Proof main/feature unchanged; matching PR still NONE.

---

## Q. ROADMAP

1. Investigate **Cursor child** path where parent-valid `GH_TOKEN` (exact Product provider) becomes **invalid** under `--sandbox enabled` + `remote_github` confinement (agent shell / sandbox / env propagation) — **without** claiming host keyring invalid.
2. Do **not** treat host `gh auth refresh` as the primary fix for this STOP class (parent keyring + parent provider APIs already PASS).
3. After a plausible child-path fix (or authorized non-sandbox diagnostic lot if separately approved): re-authorize **one** RO re-probe only.
4. On S2 + Cursor PASS: local commit on ANCHOR, then D-only PR-create EC gate lot.
5. Do not run A→D harness or mutating REAL until D secret bridge is RO-proven in Cursor child.
6. Never promote D PR-create REAL from this STOP.

---

## R. REVIEW HANDOFF

| Field | Value |
| --- | --- |
| Pack | `.tmp-sfia-review/chatgpt-review.md` (this file) |
| Publish | `scripts/sfia/publish-review-handoff.sh` once |
| HW | `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` |
| Incoming tip before publish | `cd3e4ed7f04574df1f32a3e19dfb73479653df7d` |
| Verify | tip / parent / blob / parity after publish |

---

## S. MATURITY

Unchanged from canonical table in §D. This credential-source lot **narrowed** the failure class:

- Prior narrative “host token invalid” is **insufficient**.
- Proven now: host keyring + exact Product acquire + parent API **work**.
- Remaining gap: **Cursor child** auth under sandbox + injected `GH_TOKEN`.

Capability ≠ authority ≠ proven PR effect.

---

## T. ANTI-CLAIMS

- Does **not** prove D PR-create REAL.
- Does **not** prove AUTH REAL for Cursor child.
- Does **not** prove host keyring invalid (opposite: keyring PASS).
- Does **not** authorize Product commit/push/PR.
- Does **not** authorize proof mutation.
- Does **not** adopt runtime v3.
- Does **not** regress C HTTPS / A→C proven maturity.
- Prior RO probe FAIL out is **not** success evidence.

---

## U. NEXT GATE

**Diagnose Cursor-child GH_TOKEN invalidity** (sandbox / agent tool env / confinement interaction) while preserving dirty secret-bridge candidate and ANCHOR parent — then one authorized RO re-probe. Only after S2 + Cursor PASS: local commit `fix(sfia-studio): bridge bounded GitHub auth to Cursor` and proceed to D-only PR-create EC gate.

Never include secrets in packs/Evidence.
