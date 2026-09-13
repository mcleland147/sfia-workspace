# ChatGPT Review Pack — GCEC REMOTE_GITHUB BOUNDED CURSOR SANDBOX NETWORK CAPABILITY

**Mode:** FULL
**Timestamp (UTC):** 2026-09-13T14:57:24Z
**Cycle:** 9 / RUN / CRITICAL
**GO:** GCEC REMOTE_GITHUB BOUNDED CURSOR SANDBOX NETWORK CAPABILITY — API.GITHUB.COM ONLY
**Verdict:** STOP — BOUNDED REMOTE_GITHUB RO CAPABILITY NOT PROVEN

---

## A. VERDICT

**STOP — BOUNDED REMOTE_GITHUB RO CAPABILITY NOT PROVEN.**

Deterministic pre-probe validation PASSed (focused vitest + typecheck + lint). Exactly ONE Product-shaped REAL read-only Cursor probe was launched with:

- `remote_github` confinement
- `applyRemoteGithubPrCreateBoundedShellEgress` → `CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS=api.github.com`
- ephemeral `GH_TOKEN` injection via `HostGhAuthTokenCredentialProvider`
- argv: `agent --print --workspace <temp> --trust --sandbox enabled`
- `NodeCursorProcessRunner` + exact-secret redaction

Probe observed:

| Oracle | Result |
|---|---|
| Cursor invoked once | YES (`realProcessInvoked=true`, `exitCode=0`, ~26s) |
| sandbox enabled | YES |
| egress capability exact `api.github.com` | YES (injected + child-reported) |
| `GH_TOKEN` presence | YES |
| `API_ROOT_DNS` | **FAIL** `error:ENOTFOUND` |
| `API_ROOT_HTTPS_STATUS` | **FAIL** `not_attempted` |
| `AUTH_REPO_STATUS/MATCH` | **FAIL** `0` / `no` |
| `AUTH_FEATURE_STATUS/SHA_MATCH` | **FAIL** `0` / `no` |
| `gh api` full_name + feature SHA lines | present in stdout (see M — not sufficient alone) |
| raw credential in capture | ABSENT |
| proof main/feature/PR truth | UNCHANGED |

Per GO §20: API-root DNS+HTTPS and authenticated direct Node oracles are required. They failed under `--sandbox enabled` despite the Product egress env hook. **No Product commit. No retry.**

---

## B. QUALIFICATION

| Field | Value |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| Cycle | 9 — QA / validation |
| Typology | RUN |
| Profile | CRITICAL |
| Milestone | GCEC REMOTE_GITHUB BOUNDED CURSOR SANDBOX NETWORK CAPABILITY |
| Product main | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| Cumulative parent / ANCHOR | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| Dirty WT | `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf` |
| Branch | `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` |
| Incoming handoff | `1efb68f7d38bcde5ea8af3622503bf8cba38bb85` (NPOL-3) |
| Proof | `mcleland147/sfia-gcec-proof-task-manager` |
| Feature | `gcec/lifecycle/gcec-ad-finaldec-f2-fe6b` @ `3a879572722af2b72909243ba0b506f307d87156` |

---

## C. LOCAL GIT TRUTH

| Field | Value |
|---|---|
| pwd / toplevel | `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf` |
| branch | `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` |
| HEAD (unchanged) | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| origin/main | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| Product commit this lot | **NONE** (RO probe FAIL gate) |
| `D_REMOTE_GITHUB_LOCAL_ANCHOR` | **NOT RECORDED** |

---

## D. DIRTY CANDIDATE ENTRY STATE

Preserved dirty Product candidate (secret bridge + bounded egress + tests) was **not** committed.

Modified vs `ff267fdf`:

- `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts`
- `.../infrastructure/cursorCliLaunchGateway.ts`
- `.../infrastructure/mutatingCursorConfinementEnv.ts` (bounded egress helper + strip ambient)
- `.../infrastructure/nodeCursorProcessRunner.ts` (`redactExactValues`)
- `.../infrastructure/studioCursorRealLaunchGateway.ts` (PR-create egress + credential bridge)
- `.../ports/realExecutionLaunchPort.ts`

Untracked Product (intended cumulative set, uncommitted):

- `.../hostGhAuthTokenCredentialProvider.ts`
- `.../redactExactSecrets.ts`
- `.../ports/remoteGithubCredentialPort.ts`
- `__tests__/oa/execution-attempt/gcecRemoteGithubEphemeralSecretBridge.d0.test.ts`
- `__tests__/oa/execution-attempt/support/fakeRemoteGithubCredentialProvider.ts`

This lot also fixed in-tree (still dirty):

- NET allowlist assertion: bare `github.com` token check (not substring of `api.github.com`)
- `prefer-const` on `childEnv` (lint)

Forensics / probes under `.tmp-sfia-review/` (not staged): helpers + `d-bounded-network-ro-probe.*`, prior NPOL/DCH/STB artifacts.

---

## E. CANONICAL MATURITY

| Surface | Maturity |
|---|---|
| A docs-write | REAL PROVEN AT TESTED SCOPE |
| B local commit | REAL PROVEN AT TESTED SCOPE |
| C remote push | REAL PROVEN AT TESTED SCOPE |
| A→C | REAL PROVEN AT TESTED SCOPE |
| C HTTPS bridge | REAL-BACKED AT TESTED SCOPE |
| D credential bridge (candidate) | DETERMINISTIC coverage present locally; RO REAL auth path **not** newly promoted this lot |
| D bounded Cursor network capability | **NOT PROVEN** (RO probe FAIL) |
| D PR-create effect | NOT PROVEN |
| E | NOT PROVEN |
| runtime v3 | NON ADOPTED |

---

## F. PROOF REMOTE PRECONDITIONS

Pre/post probe (host `gh api`, read-only):

| Check | Value |
|---|---|
| proof main | `32c7c2008197e5c61b32c16479144e9863291358` |
| feature SHA | `3a879572722af2b72909243ba0b506f307d87156` |
| open PR for feature | **NONE** (`[]`) |

---

## G. CURSOR EGRESS HOOK SEMANTICS

Consumed prior NPOL-3 discovery + installed Cursor **3.20.17** resources:

- Symbol `CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS` present in Cursor app resources (2 JS hits).
- Product injects exact value `api.github.com` with master `CURSOR_FORCED_SHELL_EGRESS=1` and network default `deny`.
- Ambient inherited egress keys stripped before inject (`stripInheritedCursorShellEgressEnv`).
- No `~/.cursor/cli-config.json` modification.
- No Cursor binary patch.

**Observed gap:** despite child env reporting `VALUE=api.github.com` under `--sandbox enabled`, Node `dns.lookup('api.github.com')` inside the Cursor Shell still returned `ENOTFOUND` (same class as DCH-3/NPOL-3 general block). Egress env presence ≠ proven Shell DNS/HTTPS allow for Node in this one probe.

---

## H. IMPLEMENTATION

Cumulative dirty candidate (uncommitted) implements:

1. Ephemeral credential port + `HostGhAuthTokenCredentialProvider`
2. Exact-secret redaction in `NodeCursorProcessRunner`
3. `applyRemoteGithubPrCreateBoundedShellEgress` — api.github.com ONLY
4. Gateway wiring: after authority gates, PR-create path only applies egress + optional credential acquire into spawn env
5. Deterministic SEC + NET tests

Composition matches GO preferred path; RO REAL network proof did not clear.

---

## I. AUTHORITY / PROFILE BINDING

- Egress + credential technical capability remain behind validated D `github.pr.create` profile path in gateway.
- A/B/C/RO: no Cursor egress env keys (NET-09..12).
- Invalid D authority: reject before spawn / credential (NET-13).
- Technical capability ≠ authority; no Studio-owned PR mutation API.

---

## J. NETWORK CONFINEMENT NET-01..18

Focused suite `gcecRemoteGithubEphemeralSecretBridge.d0.test.ts`: **17/17 PASS** after fixing substring false-negative (`api.github.com`.includes(`github.com`) → tokenized domain equality).

Covered in suite: exact egress inject, ambient strip, A/B/C/RO absence, invalid authority fail-closed, sandbox enabled argv. Broader NET-01..18 numbering in GO maps to these + confinement regressions; full-suite run **not** executed post-FAIL (commit gate closed).

---

## K. SECRET BRIDGE SEC INVARIANTS

Same focused file: SEC-01..18 paths exercised in the 17 tests — provider call rules, base env immutability, redaction, C helper regression, Cursor remains PR executor. **PASS** in pre-probe focused run.

---

## L. DETERMINISTIC VALIDATION

Pre-probe (flags unset):

| Check | Result |
|---|---|
| `gcecRemoteGithubEphemeralSecretBridge.d0.test.ts` | PASS (17) |
| `gcecMutatingCursorConfinementEnv.d0.test.ts` | PASS (13) |
| `gcecCursorRealSameEcCommit.real.d0.test.ts` | PASS 22 / SKIP 1 |
| typecheck | PASS |
| lint | PASS (after `prefer-const`) |

Full vitest + build: **NOT RUN** (RO FAIL → no commit path).

---

## M. SINGLE REAL READ-ONLY CURSOR PROBE

| Field | Value |
|---|---|
| count | **1** (no retry) |
| capture | `.tmp-sfia-review/d-bounded-network-ro-probe.out` |
| launcher | `.tmp-sfia-review/d-bounded-network-ro-probe.ts` |
| helpers | `d-bounded-network-unauth-helper.mjs`, `d-bounded-network-auth-helper.mjs` |
| sandbox | enabled |
| domain injected | api.github.com |
| transport (unauth Node) | **DNS ENOTFOUND** |
| direct auth API (Node) | **FAIL** status 0 |
| gh API lines in stdout | full_name + feature SHA strings present |
| unexpected domain intent | none observed in capture |
| durationMs | 26161 |

**Interpretation:** Product-shaped env+argv composition reached Cursor. Sandbox Shell Node HTTPS to `api.github.com` remained blocked at DNS. `gh api` oracle lines alone do not satisfy GO §20 (Node DNS/HTTPS + AUTH_* required). No second launch.

---

## N. SECRET REDACTION

- `redactExactValues` passed into `NodeCursorProcessRunner`
- Capture post-processed with `redactExactSecrets`
- Token-like `ghp_`/`gho_`/`github_pat_` count in out: **0**
- Never printed credential values in this report

---

## O. POST-PROBE REMOTE TRUTH

Unchanged vs F:

- main `32c7c2008197e5c61b32c16479144e9863291358`
- feature `3a879572722af2b72909243ba0b506f307d87156`
- matching open PR: NONE

No unauthorized remote effect detected.

---

## P. FULL VALIDATION

**SKIPPED** — RO probe FAIL closes commit gate (GO §22 only after RO PASS).

---

## Q. CUMULATIVE PRODUCT DIFF

Dirty vs parent `ff267fdf` (lib + tests; not committed). Stat (tracked mods only): ~190 insertions / 18 deletions across 6 modified lib/port files; plus untracked credential/redaction/test files listed in D.

---

## R. STAGED FILES

**NONE.** No staging performed. Commit gate not opened.

---

## S. LOCAL PRODUCT COMMIT

**NONE.**

Intended subject (not created): `fix(sfia-studio): enable bounded GitHub capability for Cursor`

---

## T. D_REMOTE_GITHUB_LOCAL_ANCHOR

**NOT SET** — requires successful local Product commit after RO PASS.

---

## U. PRODUCT REMOTE EFFECTS

ZERO. No Product push / PR / merge.

---

## V. PROOF MUTATING EFFECTS

ZERO. Proof refs unchanged; no PR created.

---

## W. ROADMAP

UNCHANGED. No Roadmap edit authorized/performed.

---

## X. REVIEW HANDOFF

Incoming tip: `1efb68f7d38bcde5ea8af3622503bf8cba38bb85`

This pack published once via `scripts/sfia/publish-review-handoff.sh` (L3 handoff branch only). Verify tip/parent/blob/parity in publisher output below (filled after publish).

| Field | Value |
|---|---|
| tip | _(post-publish)_ |
| parent | `1efb68f7d38bcde5ea8af3622503bf8cba38bb85` |
| blob | _(post-publish)_ |
| parity | _(post-publish)_ |

---

## Y. MATURITY / ANTI-CLAIMS

**Do NOT claim:**

- D PR-create REAL / proven
- D bounded network capability REAL-proven
- sandbox egress env hook alone restores Node DNS/HTTPS under Cursor sandbox
- Product commit anchor for this capability
- maturity promotion beyond section E

**Do claim:**

- Deterministic candidate + tests green locally
- Exactly one RO Cursor probe executed and captured
- Probe FAIL on required Node DNS/HTTPS/AUTH oracles under `api.github.com` egress inject
- Dirty candidate preserved
- ZERO mutating REAL

---

## Z. NEXT GATE

Return to Morris. Recommended next (not authorized here):

1. Diagnose why `CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS=api.github.com` does not clear Shell Node DNS (`ENOTFOUND`) under Cursor 3.20.17 `--sandbox enabled` while env presence is visible to the agent — hook semantics / apply timing / allowlist format / sandbox network stack.
2. Or authorize a distinct diagnostic GO (still ZERO mutating REAL) before any Product commit.
3. Do **not** retry the same RO probe without a new Morris GO.
4. Keep dirty D candidate intact until Morris decides commit vs redesign vs further diagnostics.

---

## Exact Morris GO (consumed)

GCEC REMOTE_GITHUB BOUNDED CURSOR SANDBOX NETWORK CAPABILITY — API.GITHUB.COM ONLY — KEEP SANDBOX ENABLED — LOCAL ONLY — ZERO MUTATING REAL.

Constants: ANCHOR=`ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` MAIN=`c481610caa3527edabeca8c860ab27c18a6a738e` HANDOFF_IN=`1efb68f7d38bcde5ea8af3622503bf8cba38bb85` NEW=`/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf`
