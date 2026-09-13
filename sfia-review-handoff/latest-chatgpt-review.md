# SFIA Studio Review Pack — GCEC-D Sandbox Network/DNS Differential (SD)

**Timestamp:** 2026-09-13T15:42:35+02:00
**Mode:** FULL
**Milestone / Morris GO:** GCEC-D-SANDBOX-NETWORK-DIFFERENTIAL-01
**Cycle:** 9 / RUN / CRITICAL
**Incoming handoff tip:** `a68a0ad9560783b20d61bb83bfd8af9c636d8de6`
**Worktree NEW:** `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf`
**Open UI workspace:** untouched (except handoff WT for publish)

---

## A. VERDICT

**STOP — SANDBOX DISABLE DID NOT RESTORE CURSOR TOOL NETWORK (SD-3)**

- Parent/P0 exact childEnv ordinary Node control: **PASS** (`direct_api_status=200`, both matches=yes)
- Cursor diagnostic launches this lot: **ONE** (`--sandbox disabled` only; enabled probe **not** re-run)
- Inside Cursor observation: sections A–D reported **Shell rejected** — no structured `direct_api_*` lines and no exact `gh api` result lines obtained
- Therefore: sandbox-disabled did **not** demonstrate restored GitHub HTTPS RO capability under the DCH-3 diagnostic shape
- ENOTFOUND→PASS causality vs accepted DCH-3 baseline: **NOT CONFIRMED**
- Local Product commit: **NONE**
- ZERO MUTATING REAL (proof/product remotes): **maintained**
- D PR-create effect: **still NOT PROVEN**
- Product gateway sandbox policy: **unchanged** (do not adopt `--sandbox disabled`)

---

## B. QUALIFICATION

Controlled differential vs accepted DCH-3: identical composed `childEnv` (Product `HostGhAuthTokenCredentialProvider` + `buildMutatingCursorConfinementEnv(remote_github)` + gateway-style `GH_TOKEN` inject + fresh non-secret `SFIA_GCEC_DIAG_SENTINEL`), same Cursor bin/argv shape, **only intentional delta** `--sandbox enabled` → `--sandbox disabled`.

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

No origin/main or HEAD drift vs GO constants. Post-probe Product name-only set unchanged vs §6 entry.

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

Diagnostic helpers/outs under `.tmp-sfia-review/` only (intended). Accidental `projects/sfia-studio/app/.tmp-sfia-review/dch-cursor-help.out` **preserved** (do-not-clean).

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

---

## F. ACCEPTED DCH-3 BASELINE (NOT RE-RUN)

Sandbox **enabled** Cursor child (accepted):

- `GH_TOKEN` present
- sentinel OK / exact match
- direct Node HTTPS helper: `direct_api_status=error:ENOTFOUND`; both `direct_api_*_match=no`
- `gh api` also FAIL (Forbidden / token reported invalid) — not classified gh-only because direct HTTPS already failed

P0 ordinary Node + same childEnv class: PASS (200 + both matches).

---

## G. PROOF REMOTE PRECONDITIONS (RO)

| Check | Result |
| --- | --- |
| `PROOF` | `mcleland147/sfia-gcec-proof-task-manager` |
| `main` SHA (= H0) | `32c7c2008197e5c61b32c16479144e9863291358` |
| FEATURE tip SHA | `3a879572722af2b72909243ba0b506f307d87156` |
| Matching PR for FEATURE head | **NONE** |

Preconditions **HOLD**.

---

## H. PARENT SANITY CHECK

- run: **yes** (once, recommended)
- result: **PASS**
  - `GH_TOKEN_PRESENT=yes`
  - `DIAG_SENTINEL=diag-b5fad1793e698ec7`
  - `direct_api_status=200`
  - `direct_api_full_name_match=yes`
  - `direct_api_feature_sha_match=yes`
- artifact: `.tmp-sfia-review/dch-sd-p0-control.out`

---

## I. CURSOR DIFFERENTIAL LAUNCH

| Field | Value |
| --- | --- |
| count | **1** (hard max; no retry) |
| sandbox flag | **disabled** |
| only intended delta vs DCH-3 | `--sandbox enabled` → `--sandbox disabled` |
| bin | `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` |
| argv shape | `agent --print --workspace <diag-ws> --trust --sandbox disabled <instruction>` |
| realProcessInvoked | true |
| exitCode | 0 |
| timedOut | false |
| durationMs | 39486 |
| capture | `.tmp-sfia-review/dch-sandbox-disabled-diff.out` via `NodeCursorProcessRunner` + `redactExactValues=[token]` |

---

## J. GENERAL ENV PROPAGATION

| Field | Value |
| --- | --- |
| Fresh sentinel | `diag-b5fad1793e698ec7` (non-secret) |
| probeEnv `GH_TOKEN` | **present** (injected; value never printed) |
| probeEnv `SFIA_GCEC_DIAG_SENTINEL` | **present** |
| probeEnv `HOME` | present |
| Inside-Cursor B) observation | **unavailable** (Shell rejected) — cannot confirm in-child presence lines beyond runner-injected probeEnv |

No evidence of SD-4 (token absent / sentinel mutated at injection layer).

---

## K. DIRECT NODE HTTPS

Inside Cursor: helper **not executed** — agent reported `Shell rejected` for C).

Structured oracles:

- `direct_api_status`: **not observed**
- `direct_api_full_name_match`: **not observed**
- `direct_api_feature_sha_match`: **not observed**

Parent/P0 (outside Cursor, same childEnv class): **PASS** (200 / yes / yes).

---

## L. GH CLI

Inside Cursor: D) **Shell rejected** — no exact `gh api` full_name or feature SHA lines.

Cannot claim GH CLI PASS or FAIL under structured oracles.

---

## M. ENABLED VS DISABLED DIFFERENTIAL

| Dimension | DCH-3 enabled (accepted) | This lot disabled |
| --- | --- | --- |
| childEnv composition | gateway inject + sentinel | same class (fresh sentinel) |
| `GH_TOKEN` at runner | present | present |
| Shell/tool execution | ran (got ENOTFOUND) | **Shell rejected** (A–D) |
| direct HTTPS oracle | `error:ENOTFOUND` | **not obtained** |
| Restored 200+matches? | n/a (baseline fail) | **no** |

Causal claim “enabled ENOTFOUND / disabled restores network” is **not** established.

---

## N. SD CLASSIFICATION

**Primary: SD-3 — SANDBOX FLAG NOT SUFFICIENT**

Rationale:

- Parent preconditions held (not SD-5).
- Injection-layer env present (not SD-4).
- Sandbox-disabled probe did **not** produce direct HTTPS PASS + gh PASS (not SD-1).
- Did **not** produce HTTPS PASS with gh residual (not SD-2).
- Observed Cursor child could not run the diagnostic shell path at all (`Shell rejected`); therefore sandbox disable did **not** restore the measured Cursor-tool network/auth capability under GO oracles.
- Note vs SD-3 literal ENOTFOUND wording: this observation is **not** a repeat ENOTFOUND measurement; it is a **stronger insufficiency** — disable failed to yield a comparable HTTPS oracle / restore. Nearest primary class remains **SD-3** per GO (“do not invent other class without explaining why”); explanation recorded here.

Verdict label: **STOP — SANDBOX DISABLE DID NOT RESTORE CURSOR TOOL NETWORK**

---

## O. SECRET REDACTION

- Token value/prefix/length/hash/Authorization: **never printed**
- Capture path used `redactExactValues=[token]` on `NodeCursorProcessRunner`
- Artifacts under `.tmp-sfia-review/` sanitized observation only

---

## P. ZERO MUTATING REAL

Maintained. No `gh pr create` / merge / proof push / Product push / proof mutation / A→D REAL. Handoff publish is the only allowed remote mutation (L3 review handoff).

---

## Q. PRODUCT SOURCE DELTA

**NONE** this lot (Product dirty set name-only identical to entry §6; no new Product edits). Diagnostic-only files under `.tmp-sfia-review/`.

---

## R. PRODUCT COMMIT

**NONE**

---

## S. PRODUCT / PROOF REMOTE EFFECTS

**NONE**

---

## T. ROADMAP

1. Accept SD-3: `--sandbox disabled` is **not** a proven restore path under this diagnostic shape.
2. **Do not** change Product gateway to sandbox disabled; **do not** invent conditional sandbox policy in Product without a new Morris architecture GO.
3. Next gate = **architecture / Cursor-tool-boundary decision** (see W) — not automatic D REAL.
4. Optional follow-on diagnostic (new GO): why `agent --sandbox disabled` reported Shell rejected while enabled ran shell (CLI/policy interaction) — still RO; still max-controlled launches.

---

## U. REVIEW HANDOFF

Publish-in-cycle once via `scripts/sfia/publish-review-handoff.sh` from HW=`/Users/morris/Projects/sfia-workspace/sfia-review-handoff`; incoming tip `a68a0ad9560783b20d61bb83bfd8af9c636d8de6`; verify tip/parent/blob/parity after publish.

---

## V. MATURITY / ANTI-CLAIMS

Do **NOT** claim:

- sandbox disabled adopted / safe for Product
- D PR-create REAL proven
- remote_github production-ready
- runtime v3 adopted
- global Cursor network autonomy accepted
- ENOTFOUND causally proven as sandbox-enabled-only (this lot did not confirm restore under disabled)

Valid claim only: under otherwise equivalent diagnostic composition, sandbox-disabled **did not** restore structured RO GitHub HTTPS observation inside Cursor (Shell rejected); DCH-3 enabled baseline ENOTFOUND remains the last structured Cursor HTTPS failure measurement.

---

## W. NEXT GATE RECOMMENDATION

**Architecture / tool-boundary decision gate (not D REAL).**

Because SD-3:

- do **not** alter Product sandbox policy;
- do **not** auto-proceed to D mutating REAL;
- Morris decision required on Cursor agent network/sandbox/tool posture for `remote_github` (effect-scoped policy, bounded network-capable profile, or alternate executor path) **before** any Product gateway change;
- optional RO follow-on GO only if needed to explain Shell-rejected under `--sandbox disabled` vs enabled shell+ENOTFOUND.
