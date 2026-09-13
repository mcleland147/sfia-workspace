# ChatGPT Review Pack — FULL

**Timestamp:** 2026-09-13T14:00:25+02:00
**Mode:** FULL
**Cycle:** 8 — Delivery / diagnosis
**Typology:** RUN
**Profil:** CRITICAL
**Capacité v3:** Governed Project Execution
**Milestone:** GCEC-D-REMOTE-GITHUB-EXECUTOR-PARITY-01

## Exact normalized Morris GO

GO MORRIS — GCEC D REMOTE-GITHUB EXECUTOR ENV PARITY — LOCAL DIAGNOSIS / OPTIONAL MINIMAL CORRECTION — ZERO REAL

## Entry Git Truth

| Item | Value |
|---|---|
| Entry Product main distant | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| Entry cumulative ANCHOR (C-auth) | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| ANCHOR parent | `11a43d3da337da34052339bd9a1ced13cc6d42b7` |
| ANCHOR subject | `fix(sfia-studio): provide bounded GitHub HTTPS auth for remote push` |
| Incoming Review Handoff | `3aa15bb7e24e4d289318d2c63b471601882273b2` |
| Correction branch | `delivery/sfia-studio-gcec-d-remote-github-env-parity` |
| Correction worktree | `/Users/morris/Projects/sfia-gcec-d-remote-github-env-parity-ff267fdf` |
| origin/main (unchanged) | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| Correction HEAD (unchanged) | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |

Open UI workspace `/Users/morris/Projects/sfia-workspace` remained untouched (no stash/commit/discard/reset/checkout). All diagnosis owned by the new D correction worktree only. Prior REAL WTs and C-auth / B-binding correction WTs were not edited.

## Feature / proof context (read-only)

| Item | Value |
|---|---|
| PROOF | `mcleland147/sfia-gcec-proof-task-manager` |
| FEATURE | `gcec/lifecycle/gcec-ad-finaldec-f2-fe6b` |
| FEATURE_SHA | `3a879572722af2b72909243ba0b506f307d87156` |
| H0 | `32c7c2008197e5c61b32c16479144e9863291358` |
| Open PRs for FEATURE head | **none** (`[]`) |

## Classification

**D3 — Cursor remote_github probe FAIL while host gh PASS**

Verdict: **STOP STRUCTURAL — SECRET CAPABILITY BRIDGE REQUIRED**

No Product code change. No empty commit. No `D_AUTH_LOCAL_ANCHOR` (still at C-auth ANCHOR `ff267fdf`).

## Host gh baseline (token ENV unset)

| Observation | Result |
|---|---|
| GH_TOKEN / GITHUB_TOKEN / GH_ENTERPRISE_TOKEN / GITHUB_ENTERPRISE_TOKEN | **ABSENT** |
| `command -v gh` | `/opt/homebrew/bin/gh` |
| `gh --version` | `2.96.0 (2026-07-02)` |
| `gh auth status` | Logged in to github.com as `mcleland147` via **keyring**; protocol **https**; scopes include `repo` (Token value redacted) |
| `gh api … --jq .full_name` | `mcleland147/sfia-gcec-proof-task-manager` |
| feature ref SHA | `3a879572722af2b72909243ba0b506f307d87156` (= FEATURE_SHA) |
| Host classification | **PASS** (not D1) |

No `gh auth login` / refresh performed.

## Product remote_github confinement (read at ANCHOR)

Sources (NEW WT, read-only):

- `mutatingCursorConfinementEnv.ts`
- `studioCursorRealLaunchGateway.ts` (applies confinement for mutating profiles; PR-create → `remote_github`)
- `m4BoundedPrCreateCursorAgent.ts` (capability descriptor only; Studio-owned PR create **not** implemented in this GO)
- `nodeCursorProcessRunner.ts` (passes caller `env` to spawn; no further rewrite)

### Effect-class policy (presence / strip — no secret values)

| Concern | `local` (A/B) | `remote_git` (C) | `remote_github` (D/E) |
|---|---|---|---|
| HOME / PATH / XDG_* / GH_CONFIG_DIR | preserved if present in baseEnv | preserved | preserved |
| SSH_AUTH_SOCK / askpass / GIT_SSH* | **stripped** | **preserved** | **stripped** |
| GH_TOKEN / GITHUB_TOKEN / GH_*ENTERPRISE* | **stripped** | **stripped** | **preserved if present** |
| Inherited `GIT_CONFIG_*` injection | neutralized | neutralized | neutralized |
| `GIT_CONFIG_{NOSYSTEM,SYSTEM,GLOBAL}` | forced null/nosystem | forced + Product HTTPS helper overlay | forced null/nosystem (**no** helper) |
| remote_git `!gh auth git-credential` overlay | no | **yes** | **no** |

Gateway resolves Cursor bin via `resolveStudioCursorBinPath` / `resolveCursorBinPath`:
`SFIA_CURSOR_BIN` → `/Applications/Cursor.app/.../bin/cursor` → `$HOME/.local/bin/cursor-agent`.

Mutating PR-create argv shape: `agent --print --workspace <wt> --trust --sandbox enabled <instruction>` (agent mode; no `--mode ask`).

## Host vs Product child env (non-secret)

Built with `buildMutatingCursorConfinementEnv(process.env, { effectClass: "remote_github" })` after unsetting token keys.

| Key / check | Host | Child (`remote_github`) |
|---|---|---|
| HOME | present (same) | present — **same as host** |
| PATH | present; contains `/opt/homebrew/bin` | present — **same as host**; contains gh dir **yes** |
| XDG_CONFIG_HOME | absent | absent |
| XDG_DATA_HOME | absent | absent |
| GH_CONFIG_DIR | absent | absent |
| GH_TOKEN / GITHUB_TOKEN / enterprise tokens | absent | absent |
| SSH_AUTH_SOCK | present | **absent** (stripped; expected for remote_github) |
| GIT_CONFIG_GLOBAL / SYSTEM | absent | `/dev/null` |
| GIT_CONFIG_NOSYSTEM | — | `1` |
| SFIA_STUDIO_CURSOR_REAL | — | `1` |

Conclusion: HOME/PATH/XDG/GH config path / gh-on-PATH already aligned. Token keys absent on both sides (host uses keyring, not ENV).

## Cursor read-only probe (ONE)

| Field | Value |
|---|---|
| Count | **1** (baseline only; no post-correction probe — no Product fix) |
| Bin | `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` |
| Env | Product `remote_github` confinement from process.env |
| Argv | gateway-equivalent mutating shape (`--sandbox enabled`) |
| Capture | `.tmp-sfia-review/d-remote-github-ro-probe.out` (sanitized) |
| A→D harness used for probe? | **NO** |

Probe results (presence / status only):

| Check | Result |
|---|---|
| pwd | correction WT path |
| `command -v gh` | `/opt/homebrew/bin/gh` |
| `gh --version` | `2.96.0` |
| `gh auth status` | **FAIL** — account known but keyring token reported **invalid** inside Cursor child |
| `gh api` full_name | **Forbidden** |
| feature SHA | not obtained (auth failure) |
| HOME / XDG_CONFIG_HOME / GH_CONFIG_DIR / GH_TOKEN / GITHUB_TOKEN | present / absent / absent / absent / absent |
| PATH contains gh dir | **yes** |

## Root cause

Host `gh` succeeds with **keyring-stored** credentials and **no** `GH_TOKEN` in ENV.

Product `remote_github` policy only **preserves** existing `GH_*` / `GITHUB_*` token keys from the Studio process env; it does **not** reconstruct keyring auth for the Cursor child. Under Cursor `--sandbox enabled`, the same keyring session is not usable (`token in keyring is invalid` / API Forbidden) despite identical HOME/PATH and gh on PATH.

Therefore the gap is **not** missing HOME/XDG/PATH preservation (already correct). The only remaining Product-side technical bridge that would make `gh api` / PR create work in this executor shape is **extracting a token from host auth capability and injecting `GH_TOKEN` (or equivalent) into the child** — i.e. a **secret capability bridge**. Per GO hard rule: **do not implement**.

Secondary note: `remote_git` (C) already has a non-token Product overlay (`!gh auth git-credential`) for HTTPS **git** push; that pattern does not extend to Cursor-invoked `gh` GitHub API / PR create without either working keyring-in-sandbox or explicit token ENV.

## Correction disposition

| Action | Status |
|---|---|
| Product env code change | **NONE** |
| D-ENV-01..10 test updates | **NONE** |
| Local Product commit | **NONE** |
| `D_AUTH_LOCAL_ANCHOR` | **N/A** (HEAD remains C-auth ANCHOR) |
| Studio-owned PR create implementation | **NOT DONE** (forbidden by GO) |

## Architectural clarification (required)

1. **EC is phase-scoped.** ExecutionContract authority and confirmation bind the active phase effect; they do not by themselves prove cross-phase A→D orchestration success.
2. **A→D harness is proof infrastructure, not orchestration product.** The ZERO-REAL harness encodes construction / skip gates for a future REAL campaign; it is not Studio lifecycle orchestration and was **not** used for this D probe.
3. **Cross-contract D-only proof preferred next** (once a secret-capability / auth-bridge gate is decided): prefer a bounded D-only REAL/auth proof contract over re-running a full A→D campaign solely to diagnose GitHub executor auth — A/B already REAL-proven at tested scope; C still not REAL-proven; D still not started as REAL.

## Deterministic validation (ZERO REAL; no Product delta)

Five REAL campaign flags **unset**:
`SFIA_STUDIO_CURSOR_REAL`, `SFIA_GCEC_CURSOR_REAL_PROOF`, `SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF`, `SFIA_GCEC_CURSOR_REAL_PUSH_PROOF`, `SFIA_GCEC_CURSOR_REAL_PR_PROOF`.

| Gate | Result |
|---|---|
| Focused confinement `gcecMutatingCursorConfinementEnv.d0.test.ts` | **13 passed** |
| A→D harness `gcecCursorRealSameEcCommit.real.d0.test.ts` | **22 passed / 1 skipped** |
| typecheck | PASS |
| lint | PASS (0 warnings/errors) |
| build | PASS |
| full Vitest | **skipped** (no Product change) |

## ZERO mutating REAL

- No `gh pr create` / push / merge on proof or Product
- No proof mutation
- No Product push / PR / merge
- One Cursor RO probe only; no mutating Cursor REAL
- Prior REAL / correction WTs untouched

## Proof repo effects

NONE

## Files / diff / anchors

| Field | Value |
|---|---|
| Product files changed | **none** |
| Diff | empty (diagnosis artifacts only under `.tmp-sfia-review/` + local `node_modules` symlink — uncommitted) |
| HEAD | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| D_AUTH_LOCAL_ANCHOR | **none** |

## Maturity / anti-claims

| Claim | Status |
|---|---|
| Host gh auth for proof repo (keyring, no token ENV) | **PASS at tested scope** |
| Product `remote_github` HOME/PATH/token-key preservation policy | **as designed at ANCHOR** |
| Cursor executor `remote_github` gh API parity with host | **FAIL (D3)** — structural auth bridge required |
| D PR create REAL | **NOT PROVEN** |
| A→D REAL | **NOT PROVEN** |
| C remote push REAL | **STILL NOT REAL PROVEN** |
| A / B REAL | prior proven at tested scope |
| runtime v3 | NON ADOPTED |

Do **not** claim D executor auth parity or D PR create readiness from this cycle.

## Review Handoff

- Mode: publish-in-cycle
- Incoming expected tip: `3aa15bb7e24e4d289318d2c63b471601882273b2`
- Source: `.tmp-sfia-review/chatgpt-review.md` (this file)
- Destination: `sfia-review-handoff/latest-chatgpt-review.md`
- Branch: `sfia/review-handoff`
- Publish ONCE via canonical publisher

## Next gate recommendation

ChatGPT Critical Review, then candidate distinct Morris GO for a **secret-capability / auth-bridge design decision** (not silent `GH_TOKEN` injection in Product), preferably framed as:

GO MORRIS — GCEC D REMOTE-GITHUB SECRET CAPABILITY BRIDGE DESIGN — DOCUMENT / DECIDE — ZERO REAL

After an accepted bridge design + local Product correction, prefer a **D-only** bounded auth/API proof before any fresh full A→D REAL campaign.

No automatic REAL. No Product PR. No Studio-owned PR-create implementation in the diagnosis GO. No Roadmap sync.

## Verdict

**STOP STRUCTURAL — SECRET CAPABILITY BRIDGE REQUIRED (D3)**
