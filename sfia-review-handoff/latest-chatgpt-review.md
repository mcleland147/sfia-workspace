# ChatGPT Review Pack — FULL

**Timestamp:** 2026-09-13T13:10:00+02:00
**Mode:** FULL
**Cycle:** 8 — Delivery / correction
**Typology:** RUN
**Profil:** CRITICAL
**Capacité v3:** Governed Project Execution
**Milestone:** GCEC-C-REMOTE-PUSH-AUTH-ENV-01

## Exact normalized Morris GO

GO MORRIS — GCEC C REMOTE-PUSH CURSOR GIT HTTPS AUTH ENVIRONMENT CORRECTION — LOCAL ONLY — ZERO REAL

## Entry Git Truth

| Item | Value |
|---|---|
| Entry Product main distant | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| Entry local cumulative anchor | `11a43d3da337da34052339bd9a1ced13cc6d42b7` |
| Anchor parent | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| Incoming Review Handoff | `e2a2546c04bb3249a8fcee1b1c80bd65103dc5df` |
| Correction branch | `delivery/sfia-studio-gcec-c-remote-push-auth-env` |
| Correction worktree | `/Users/morris/Projects/sfia-gcec-c-remote-push-auth-env-11a43d3d` |
| origin/main (unchanged) | `c481610caa3527edabeca8c860ab27c18a6a738e` |

Open UI workspace `/Users/morris/Projects/sfia-workspace` remained on
`delivery/sfia-studio-gcec-ad-semantic-immutability-alignment` @ `0b7463fa…`
CLEAN — no checkout/switch performed there. All Product edits owned by the
correction worktree only.

## Three REAL campaign truths (PRESERVED)

1. Historic REAL @ `132ddd54` — preserved / untouched.
2. Second REAL product WT:
   `/Users/morris/Projects/sfia-gcec-real-ad-product-c481610c-20260913101736-44229`
   — preserved / untouched.
3. Third REAL (A+B proven / C auth FAIL):
   - PRODUCT_WT = `/Users/morris/Projects/sfia-gcec-real-ad-product-11a43d3d-20260913120301-96119`
   - managed base = `/tmp/sfia-gcec-real-ad-anchor-11a43d3d-20260913120332-96542`
   - proofRoot = `.../gcec-real-ad-xSDZEC`
   - B_SHA = `bf083b707cc9b46cff04429d02f8326b79d634b8`
   - phase = `C_LAUNCHED_UNRECONCILED`
   - No cleanup / no remote repair / no retry.

B-binding correction WT preserved:
`/Users/morris/Projects/sfia-gcec-b-commit-target-binding-c481610c` @ `11a43d3d`.

## Host auth diagnosis (read-only; no secret values)

| Observation | Result |
|---|---|
| git path | `/usr/bin/git` |
| git version | `2.50.1 (Apple Git-155)` |
| gh path | `/opt/homebrew/bin/gh` |
| gh version | `2.96.0 (2026-07-02)` |
| `gh auth status` | Logged in to github.com as `mcleland147` via **keyring**; Git protocol **https**; scopes include `repo` |
| `gh auth status` with GH_TOKEN/GITHUB_TOKEN/GH_ENTERPRISE_TOKEN/GITHUB_ENTERPRISE_TOKEN unset | **PASS** — same keyring session |
| Classification | **GH STORED AUTH AVAILABLE** |
| `credential.helper` (global) | **(none)** |
| `credential.https://github.com.helper` (global) | **(none)** |
| GH_TOKEN | absent |
| GITHUB_TOKEN | absent |
| GH_ENTERPRISE_TOKEN | absent |
| GITHUB_ENTERPRISE_TOKEN | absent |

Distinction: host global Git credential.helper is not configured; stored `gh`
keyring auth remains usable without inherited token ENV. Product therefore
injects an explicit server-owned `!gh auth git-credential` bridge for
`remote_git` only — it does **not** depend on Morris's `~/.gitconfig` string
and does **not** restore arbitrary host Git config.

## Root cause confirmation

Before correction, all mutating profiles set:

- `GIT_TERMINAL_PROMPT=0`
- `GCM_INTERACTIVE=Never`
- `GIT_CONFIG_NOSYSTEM=1`
- `GIT_CONFIG_SYSTEM=/dev/null`
- `GIT_CONFIG_GLOBAL=/dev/null`

Inherited `GIT_CONFIG_*` always stripped. `remote_git` preserved SSH/askpass but
still stripped `GH_TOKEN`/`GITHUB_TOKEN`. Therefore no host credential.helper and
no token ENV were available to the Cursor child → observed REAL failure:

`fatal: could not read Username for 'https://github.com': terminal prompts disabled`

Root cause **CONFIRMED** (compatible with confinement + host diagnosis).

## Correction design

ONLY when `effectClass == "remote_git"`:

1. Continue strip of all inherited `GIT_CONFIG_*`.
2. Continue null global/system Git config.
3. Inject Product-owned overlay constants:

| Env | Value (non-secret constant) |
|---|---|
| `GIT_CONFIG_COUNT` | `1` |
| `GIT_CONFIG_KEY_0` | `credential.https://github.com.helper` |
| `GIT_CONFIG_VALUE_0` | `!gh auth git-credential` |

Validated locally with `git config --get` (no credential fill, no network).

`local` (A/B) and `remote_github` (D/E) unchanged — no helper injection there;
no `GH_TOKEN` propagation for `remote_git`.

## Security / authority boundary

CAPABILITY ≠ AUTHORITY.

- Capability: bounded GitHub HTTPS credential helper for `remote_git` child only.
- Authority unchanged: ExecutionContract ∩ agent capability ∩ repository ∩
  featureBranch ∩ Confirmation N3 ∩ gateway launch spec ∩ no-force/no-delete/no-tags
  ∩ Evidence verification.
- Credentials do not define destination or scope.
- No hard-coded token, no token logging, no token copy, no secret in repo.

## Files modified

1. `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts`
2. `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts` (re-export only)
3. `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts` (re-export only)
4. `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts`

Diffstat: 4 files, +123 / −11

## Deterministic tests

AUTH-1…AUTH-9 covered in focused confinement/gateway suite:

- local confinement unchanged (no helper)
- hostile inherited `GIT_CONFIG_*` neutralized
- `remote_git` Product helper present; no GH tokens
- local `git config --get` parser proof (no network)
- `remote_github` unchanged (no helper)
- baseEnv immutability
- noninteractive safety preserved
- secret anti-leak (sentinels only; constants non-secret)
- gateway routing: docs-write/local-commit=local; remote-push=`remote_git`+helper; pr-create=`remote_github`

Focused suite: **13 passed**

A→D harness ZERO REAL:
`npm test -- __tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts`
→ **22 passed / 1 skipped** (REAL campaign remains SKIPPED)

## Typecheck / lint / build / full Vitest

| Gate | Result |
|---|---|
| typecheck | PASS |
| lint | PASS (0 warnings/errors) |
| build | PASS |
| full Vitest | **355 files passed / 17 skipped**; **3880 tests passed / 137 skipped** |
| REAL flags during validation | OFF / unset |

## ZERO mutating REAL

- Five GCEC REAL campaign flags not set
- No Cursor REAL mutation
- No proof repo push/branch/PR
- No reuse of C pid / no retry of third campaign

## Proof repo effects

NONE

## Local Product anchor

| Field | Value |
|---|---|
| C_AUTH_LOCAL_ANCHOR | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| parent | `11a43d3da337da34052339bd9a1ced13cc6d42b7` |
| subject | `fix(sfia-studio): provide bounded GitHub HTTPS auth for remote push` |
| ancestry | `c481610c` → `11a43d3d` → `ff267fdf` |
| Product push/PR/merge | NONE |

## Product remote effects

NONE — no Product push, PR, or merge.

## Roadmap

UNCHANGED (intentional truth-lag preserved).

## Maturity / anti-claims

| Claim | Status |
|---|---|
| C remote-push auth-environment correction | **DETERMINISTICALLY PROVEN / LOCALLY COMMITTED CORRECTION ANCHOR** |
| A docs-write | REAL PROVEN AT TESTED SCOPE (prior) |
| B local git.commit | REAL PROVEN AT TESTED SCOPE (prior) |
| B-binding correction | REAL-BACKED AT TESTED SCOPE (prior) |
| C remote push | **STILL NOT REAL PROVEN** |
| D PR create | NOT STARTED |
| A→D | NOT PROVEN |
| runtime v3 | NON ADOPTED |

Do **not** claim "C push fixed in REAL" from this cycle.

## Review Handoff

- Mode: publish-in-cycle
- Incoming expected tip: `e2a2546c04bb3249a8fcee1b1c80bd65103dc5df`
- Source: `.tmp-sfia-review/chatgpt-review.md` (this file)
- Destination: `sfia-review-handoff/latest-chatgpt-review.md`
- Branch: `sfia/review-handoff`
- Publish ONCE via canonical publisher

## Next gate recommendation

ChatGPT Critical Review, then candidate distinct gate:

GO MORRIS — ONE FRESH GCEC REAL A→D CAMPAIGN FROM C-AUTH LOCAL ANCHOR — STOP BEFORE MERGE

No automatic REAL. No Product PR. No Roadmap sync.

## Verdict

**PASS — GCEC C REMOTE-PUSH BOUNDED GIT HTTPS AUTH ENVIRONMENT DETERMINISTICALLY PROVEN / LOCALLY ANCHORED**
