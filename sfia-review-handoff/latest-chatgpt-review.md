# SFIA Studio Review Pack — GCEC-D ephemeral secret bridge (STOP)

**Timestamp:** 2026-09-13T15:01:00+02:00
**Mode:** FULL
**Milestone:** GCEC-D-EPHEMERAL-SECRET-BRIDGE-01
**Incoming handoff:** `fd8160326796be0528c60cef18188cfa6a6a6d28`

## A. VERDICT

**STOP — RO REAL auth bridge probe FAILED**

Validation (lint / tsc / targeted vitest; prior full vitest) **PASS**. Local Product commit **NOT performed**. ZERO MUTATING REAL maintained. One RO probe already observed (FAIL) — **not re-probed** (max 1).

Probe observation: Cursor launched once under `remote_github` confinement with injected `GH_TOKEN` (presence-only). Host `gh auth token` acquire returned a value, but child `gh auth status` reported **token invalid**; `gh api` calls returned **Forbidden**. Asserts for `full_name` and `FEATURE_SHA` **failed**. Raw token **absent** from sanitized out (redaction OK).

---

## B. CANONICAL MATURITY CORRECTION (DO NOT REGRESS C)

| Slice | Status |
| --- | --- |
| A / B / C | **REAL PROVEN** (prior lots) |
| A→C | **REAL PROVEN** (prior lots) |
| D | Prior REAL attempt **launched** but **PR effect NOT PROVEN** |
| This lot | Secret-bridge **Product wiring + SEC tests** ready; **RO auth REAL probe NOT PROVEN** (invalid host token) |

Do **not** regress C. Capability ≠ authority ≠ proven PR effect.

---

## C. ARCHITECTURE

- Phase-scoped ExecutionContract authority remains the gate; gateway env policy is capability only.
- A→D harness = proof campaign only — **not used** for the RO probe; five REAL campaign flags **unset**.
- D ephemeral secret bridge: PR-create profile only; prefer existing server `GH_TOKEN`/`GITHUB_TOKEN`; else `HostGhAuthTokenCredentialProvider.acquire()` (`gh auth token` only); inject into fresh child env; `redactExactValues` on `NodeCursorProcessRunner`; drop local references after invoke (JS memory zeroization **not** guaranteed).

---

## D. VALIDATION (REAL flags unset)

| Check | Result |
| --- | --- |
| lint | PASS |
| tsc `--noEmit` | PASS |
| build | PASS (prior lot; `.next` present — not re-run) |
| vitest full | PASS prior lot — 356 files / 3894 tests |
| SEC `gcecRemoteGithubEphemeralSecretBridge.d0` | PASS **14** |
| Confinement `gcecMutatingCursorConfinementEnv.d0` | PASS **13** |
| A→D harness (non-REAL): `gcecGitLifecyclePushPrMerge.d0` + `gcecCursorRealSameEcAd.worktree.d0` | PASS **53+3 = 56** |

---

## E. RO BRIDGE PROBE (ONE launch — already done)

| Field | Value |
| --- | --- |
| Script | `.tmp-sfia-review/d-secret-bridge-ro-probe.ts` (untracked) |
| Out | `.tmp-sfia-review/d-secret-bridge-ro-probe.out` |
| Provider | `HostGhAuthTokenCredentialProvider.acquire()` |
| Confinement | `buildMutatingCursorConfinementEnv(..., remote_github)` |
| Runner | `NodeCursorProcessRunner` + `redactExactValues` |
| Cursor | agent `--print` `--sandbox enabled` `--trust` temp empty workspace |
| Campaign / A→D harness | **NOT used** |
| Result | **FAIL** — `full_name_present=false` `feature_sha_present=false` `raw_token_absent=true` |
| Auth symptom | GH_TOKEN present but **invalid**; API Forbidden |
| Re-probe this session | **NO** (max 1; out does not prove PASS) |
| Proof mutation | **NONE** |
| `gh pr create` / push | **NONE** |

---

## F. PRODUCT GIT (no commit)

| Field | Value |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf` |
| Branch | `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` |
| HEAD / ANCHOR | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| Subject @ HEAD | `fix(sfia-studio): provide bounded GitHub HTTPS auth for remote push` |
| `D_SECRET_LOCAL_ANCHOR` | **N/A — commit blocked by probe FAIL** |
| Expected commit subject (deferred) | `fix(sfia-studio): bridge bounded GitHub auth to Cursor` |
| Dirty Product sources | present (uncommitted secret-bridge lot) |
| `node_modules` | symlink → C-auth WT app `node_modules` |
| Open UI workspace | **untouched** |

---

## G. ZERO MUTATING / HANDOFF

| Action | Status |
| --- | --- |
| Product push / PR | NONE |
| Proof push / PR / mutation | NONE |
| Handoff publish | **THIS PACK** (STOP lot documentation) |
| Incoming handoff tip | `fd8160326796be0528c60cef18188cfa6a6a6d28` |

---

## H. NEXT

1. Repair host GitHub auth (`gh auth refresh` / valid token) — operator action outside Product.
2. Re-authorize **one** RO bridge probe only after auth is valid (replace prior FAIL out).
3. On PASS: local commit `fix(sfia-studio): bridge bounded GitHub auth to Cursor` on parent ANCHOR; then D-only PR-create EC gate lot.
4. Do not run A→D harness or mutating REAL until D secret bridge is RO-proven.

Never include secrets in packs/Evidence.
