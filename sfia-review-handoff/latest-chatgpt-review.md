# SFIA Studio Review Pack — GCEC-D Cursor child secret isolation (DCH-3)

**Timestamp:** 2026-09-13T15:26:23+02:00
**Mode:** FULL
**Milestone / Morris GO:** GCEC-D-CURSOR-CHILD-SECRET-ISOLATION-01
**Cycle:** 9 / RUN / CRITICAL
**Incoming handoff tip:** `3bb19cde53b0735f343108033c756b5f38ba41da`
**Worktree NEW:** `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf`
**Open UI workspace:** untouched (except handoff WT for publish)

---

## A. VERDICT

**STOP — DCH-3 CURSOR SANDBOX/TOOL BOUNDARY BREAKS SECRET-BACKED DIRECT API**

- P0 exact child-env ordinary Node control: **PASS**
- Cursor diagnostic launches: **ONE** (`--sandbox enabled`)
- Inside Cursor: `GH_TOKEN` **present**; sentinel **exact match**; direct Node HTTPS helper **FAIL** (`direct_api_status=error:ENOTFOUND`; both `direct_api_*_match=no`)
- `gh api` also FAIL under same Cursor child (Forbidden / token reported invalid) — **not** classified as gh-only because direct HTTPS already failed
- Local Product commit: **NONE**
- ZERO MUTATING REAL (proof/product remotes): **maintained**
- D PR-create effect: **still NOT PROVEN**

---

## B. QUALIFICATION

Controlled isolation between ordinary subprocess (P0) and Cursor agent tool environment using identical composed `childEnv` (Product `HostGhAuthTokenCredentialProvider` + `buildMutatingCursorConfinementEnv(remote_github)` + gateway-style `GH_TOKEN` inject + non-secret `SFIA_GCEC_DIAG_SENTINEL`).

Success oracles: structured helper `direct_api_*` lines and exact `gh api` result lines — **not** instruction-text greps.

---

## C. LOCAL GIT TRUTH

| Field | Value |
| --- | --- |
| pwd / toplevel | `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf` |
| Branch | `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` |
| HEAD (= ANCHOR) | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| `origin/main` (= MAIN) | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| Dirty present | **yes** (preserved) |
| `git diff --check` | clean |

No origin/main or HEAD drift vs GO constants.

---

## D. DIRTY CANDIDATE PRESERVATION

Dirty Product candidate **PRESERVED** (no stash/reset/clean/discard/checkout/commit).

Entry dirty Product sources (unchanged this lot):

- `hostGhAuthTokenCredentialProvider.ts` (untracked)
- `remoteGithubCredentialPort.ts` (untracked)
- `redactExactSecrets.ts` (untracked)
- `studioCursorRealLaunchGateway.ts` (modified)
- `nodeCursorProcessRunner.ts` (modified)
- `realExecutionLaunchPort.ts` (modified)
- `cursorCliLaunchGateway.ts` / `index.ts` (modified)
- `gcecRemoteGithubEphemeralSecretBridge.d0.test.ts` (untracked)
- `fakeRemoteGithubCredentialProvider.ts` (untracked)

Diagnostic helpers/outs under `.tmp-sfia-review/` only (intended). **Note:** §12 help capture accidentally also wrote untracked `projects/sfia-studio/app/.tmp-sfia-review/dch-cursor-help.out` due to cwd — **not** a Product source edit; left in place (do-not-clean). Canonical copy: `.tmp-sfia-review/dch-cursor-help.out`.

---

## E. CANONICAL MATURITY (DO NOT REGRESS)

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

## F. PROOF REMOTE PRECONDITIONS (RO)

| Check | Result |
| --- | --- |
| Repo | `mcleland147/sfia-gcec-proof-task-manager` |
| `main` SHA | `32c7c2008197e5c61b32c16479144e9863291358` (= H0) |
| Feature ref | `gcec/lifecycle/gcec-ad-finaldec-f2-fe6b` |
| Feature SHA | `3a879572722af2b72909243ba0b506f307d87156` (= FEATURE_SHA) |
| Matching open PR | **NONE** |

---

## G. PREVIOUS S2 FACT

Consumed: prior lot **S2** — exact Product `HostGhAuthTokenCredentialProvider` + parent `GH_TOKEN` API **PASS** (credential valid in parent; Cursor child previously failed). This lot does not re-spend that parent validation beyond composing the same Product acquire path for P0/Cursor childEnv.

---

## H. P0 EXACT CHILD-ENV CONTROL

| Field | Value |
| --- | --- |
| Helper | `.tmp-sfia-review/diag-direct-api.mjs` |
| Orchestrator | `.tmp-sfia-review/dch-p0-and-cursor-diag.ts` (tsx from APP) |
| Out | `.tmp-sfia-review/dch-p0-control.out` |
| Compose | strip inherited GH_TOKEN/GITHUB_TOKEN → `buildMutatingCursorConfinementEnv(..., remote_github)` → inject acquired `GH_TOKEN` → set `SFIA_GCEC_DIAG_SENTINEL` |
| Spawn | ordinary `node` subprocess with exact `childEnv` |

P0 output (sanitized):

```
GH_TOKEN_PRESENT=yes
DIAG_SENTINEL=diag-8fcc5c0c660867cd
direct_api_status=200
direct_api_full_name_match=yes
direct_api_feature_sha_match=yes
```

**P0 PASS** — failure is not before Cursor.

---

## I. CURSOR CLI / SANDBOX HELP OBSERVATIONS

- `command -v cursor`: absent on PATH
- Resolved bin: `/Applications/Cursor.app/Contents/Resources/app/bin/cursor`
- `cursor agent --help`: `--sandbox <mode>` choices `enabled` | `disabled` (overrides config); `--trust`; `--workspace`; `--print`
- Top-level help: `--disable-chromium-sandbox` (Electron); `agent` subcommand
- Env mentioned in help: `CURSOR_API_KEY` / `CURSOR_API_ENDPOINT` (agent auth to Cursor API) — **not** a GH secret bridge
- **OBSERVATION / OPTION only:** documented sandbox disable exists; **NOT adopted** this lot (sandbox remained `enabled`)

---

## J. CURSOR DIAGNOSTIC LAUNCH

| Field | Value |
| --- | --- |
| Count | **1** (maximum; no retry) |
| Executable | resolved Studio Cursor bin |
| Argv shape | `agent --print --workspace <empty temp diag ws> --trust --sandbox enabled <RO instruction>` |
| Sandbox | **enabled** |
| Env | exact P0 `childEnv` (secret in env only; never in prompt) |
| Capture | `NodeCursorProcessRunner` + `redactExactValues=[token]` |
| Out | `.tmp-sfia-review/dch-cursor-diag.out` |
| `exitCode` / `timedOut` / `realProcessInvoked` | `0` / `false` / `true` |
| Harness / PR-create instruction | **not used** |

---

## K. GENERAL ENV PROPAGATION

| Check | Result |
| --- | --- |
| Expected sentinel | `diag-8fcc5c0c660867cd` |
| Cursor reported sentinel | `diag-8fcc5c0c660867cd` (**exact match**) |
| `GH_TOKEN_PRESENT` (Cursor) | **yes** |
| Presence (Cursor B) | HOME/PATH/GH_TOKEN=present; GITHUB_TOKEN / enterprise / GH_CONFIG_DIR / XDG_CONFIG_HOME=absent |

Not DCH-2 (token present). Not DCH-6 (sentinel preserved).

---

## L. DIRECT NODE HTTPS RESULT (inside Cursor)

Helper run via `node <abs path diag-direct-api.mjs>` in Cursor command tool:

```
GH_TOKEN_PRESENT=yes
DIAG_SENTINEL=diag-8fcc5c0c660867cd
direct_api_status=error:ENOTFOUND
direct_api_full_name_match=no
direct_api_feature_sha_match=no
```

**FAIL** vs P0 `direct_api_status=200` + both matches=yes. Oracle is structured helper output (not instruction text).

---

## M. GH CLI RESULT (inside Cursor)

- `gh auth status --hostname github.com`: failed using token (`GH_TOKEN`); also keyring path failed under that child context
- `gh api` full_name / feature SHA: **Forbidden** (no exact successful result lines; FEATURE_SHA **absent** from oracle lines)

Secondary to L — does **not** justify DCH-4 while direct HTTPS fails.

---

## N. DCH CLASSIFICATION

**Primary: DCH-3**

P0 PASS + Cursor `GH_TOKEN` present + non-secret sentinel preserved + **direct Node HTTPS inside Cursor FAILS**.

Meaning: secret/network/Authorization capability changes across Cursor sandbox/tool boundary. Do **not** claim `gh`-specific defect.

---

## O. SECRET REDACTION

- Token never printed/logged/hashed/prefixed/Authorization-dumped
- `redactExactValues` applied to Cursor observation before write
- Post-scan of `dch-cursor-diag.out`: no raw token patterns detected
- Sentinel is non-secret diagnostic value (printed by design)

---

## P. ZERO MUTATING REAL

No `gh pr create` / merge / proof push / Product push. Handoff publish is the only allowed remote mutation (L3 review handoff).

---

## Q. PRODUCT SOURCE DELTA

**NONE** for Product source files this lot (mtime gate vs helpers: no Product source writes after helper creation). Dirty set preserved as at entry.

---

## R. PRODUCT COMMIT

**NONE**

---

## S. PRODUCT/PROOF REMOTE EFFECTS

**NONE**

---

## T. ROADMAP

**UNCHANGED**

---

## U. REVIEW HANDOFF

Publish-in-cycle once via `scripts/sfia/publish-review-handoff.sh` from HW=`/Users/morris/Projects/sfia-workspace/sfia-review-handoff`; incoming tip `3bb19cde...`; verify tip/parent/blob/parity after publish.

---

## V. MATURITY / ANTI-CLAIMS

- Does **not** prove D PR-create REAL
- Does **not** regress A/B/C / A→C / C HTTPS maturity
- Does **not** authorize sandbox-disabled comparison in this lot
- Does **not** claim AUTH REAL / remote-write success
- Prior S2 parent credential validity remains; Cursor child boundary still blocks secret-backed direct API under `--sandbox enabled`

---

## W. NEXT GATE RECOMMENDATION

Per GO routing for **DCH-3**: next candidate gate = **Cursor sandbox/secret propagation correction** or **explicitly authorized sandbox differential diagnosis** (only if separately GO-authorized). Do **not** auto-proceed to D-only PR-create REAL EC. Do **not** disable sandbox in this lot.

---

## Why DCH-3 is supported

1. P0 ordinary child with identical env: `direct_api_status=200` + both matches=yes
2. Cursor reports `GH_TOKEN_PRESENT=yes` and exact sentinel
3. Same helper inside Cursor: `error:ENOTFOUND` + both matches=no
4. Therefore failure is across Cursor sandbox/tool boundary, not pre-Cursor credential composition
