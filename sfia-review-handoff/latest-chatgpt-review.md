# SFIA Studio Review Pack — GCEC-D Cursor Shell Tool-Boundary (STB)

**Timestamp:** 2026-09-13T15:52:00+02:00
**Mode:** FULL
**Milestone / Morris GO:** GCEC-D-CURSOR-SHELL-TOOL-BOUNDARY-01
**Cycle:** 9 / RUN / CRITICAL
**Incoming handoff tip:** `3d7eee1747de167630dc2e3daa99085d0c53f8e8`
**Worktree NEW:** `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf`
**Open UI workspace:** untouched (except handoff WT for publish)

---

## A. VERDICT

**PASS DIAGNOSTIC — STB-3 LOCAL POLICY OVERRIDE IDENTIFIED**

- Cause of SD-3 `Shell rejected` under `--sandbox disabled` closed by static READ-ONLY evidence (no new Cursor launch).
- Local Cursor CLI policy `~/.cursor/cli-config.json`: `approvalMode=allowlist`, `permissions.allow=["Shell(ls)"]`, `sandbox.mode=disabled`.
- Product REAL argv always uses `--sandbox enabled` (overrides config); DCH-3 Shell executed; SD-3 Shell rejected before OS command evidence.
- Not a GitHub/credential/network result; not a Product source defect for this lot.
- Local Product commit: **NONE**. ZERO MUTATING REAL. D PR-create: **still NOT PROVEN**.

---

## B. QUALIFICATION

| Field | Value |
| --- | --- |
| Repository | mcleland147/sfia-workspace |
| Cycle | 9 — QA / validation |
| Typologie | RUN |
| Profil | CRITICAL |
| Milestone | GCEC-D-CURSOR-SHELL-TOOL-BOUNDARY-01 |
| Capability | Governed Project Execution |
| Product main | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| Anchor | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| Dirty branch | `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` |
| Dirty WT | `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf` |

Question: why `--sandbox disabled` rejects Shell in Studio-shaped noninteractive launches while `--sandbox enabled` previously allowed Shell (DCH-3).

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

Tracked dirty (name-only): `.tmp-sfia-review/chatgpt-review.md` + execution-attempt gateway/runner/port/index files. Untracked: `.tmp-sfia-review/*` diagnostics, D-bridge Product candidate files, accidental `app/.tmp-sfia-review/`, `app/node_modules`.

No origin/main or HEAD drift vs GO constants.

---

## D. DIRTY CANDIDATE PRESERVATION

Dirty Product candidate **PRESERVED** (no stash/reset/clean/discard/checkout/stage/commit).

Preserved candidate surface (READ-ONLY this lot):

- `hostGhAuthTokenCredentialProvider.ts` (untracked)
- `remoteGithubCredentialPort.ts` (untracked)
- `redactExactSecrets.ts` (untracked)
- `studioCursorRealLaunchGateway.ts` (modified)
- `nodeCursorProcessRunner.ts` (modified)
- `realExecutionLaunchPort.ts` (modified)
- `cursorCliLaunchGateway.ts` / `index.ts` (modified)
- `gcecRemoteGithubEphemeralSecretBridge.d0.test.ts` (untracked)
- `fakeRemoteGithubCredentialProvider.ts` (untracked)

`.tmp-sfia-review/` + accidental `projects/sfia-studio/app/.tmp-sfia-review/` **preserved**.

---

## E. CANONICAL MATURITY (DO NOT REGRESS)

| Slice | Status |
| --- | --- |
| A docs-write | **REAL PROVEN AT TESTED SCOPE** |
| B local commit | **REAL PROVEN AT TESTED SCOPE** |
| C remote push | **REAL PROVEN AT TESTED SCOPE** |
| A→C | **REAL PROVEN AT TESTED SCOPE** |
| C HTTPS bridge | **REAL-BACKED AT TESTED SCOPE** |
| D | prior REAL Attempt launched; PR effect **NOT PROVEN** |
| D PR-create | **NOT PROVEN** |
| E / merge | **NOT PROVEN** |
| runtime v3 | **NON ADOPTED** |

Additional claim this lot: **STB-3** only. No maturity promotion.

---

## F. ACCEPTED DCH-3 / SD-3 FACTS (NOT RE-LITIGATED)

1. Host keyring + Product `HostGhAuthTokenCredentialProvider` acquire PASS; parent GH_TOKEN GitHub API PASS.
2. Same composed `remote_github` childEnv in ordinary Node: GitHub HTTPS HTTP 200.
3. Cursor `--sandbox enabled`: GH_TOKEN present, sentinel propagated, Shell executed, direct HTTPS → ENOTFOUND.
4. Cursor `--sandbox disabled`: agent launched, Shell rejected, no Node HTTPS / gh execution, no valid network differential.

This lot: **no credential, no GitHub, no network probes**.

---

## G. CURSOR CLI VERSION / HELP

| Item | Value |
| --- | --- |
| `command -v cursor` | absent on PATH |
| Resolved bin | `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` |
| Version | `3.20.17` (`0c32194e3fb5ffaced9fb36430b860ec301e1fc0`, arm64) |

Relevant `cursor agent --help` excerpts:

- `--print`: Print responses; **Has access to all tools, including write and shell.**
- `--force` / `--yolo`: Force allow commands unless explicitly denied.
- `--auto-review`: Smart Auto classifier for safe tool calls.
- `--sandbox <mode>`: Explicitly enable or disable sandbox (**overrides config**); choices `enabled` \| `disabled`.
- `--trust`: Trust workspace without prompting.
- `--workspace <path-or-name>`: Workspace directory.

No help text states that `--sandbox disabled` disables the Shell tool by design.

---

## H. CURRENT STUDIO CURSOR LAUNCH SHAPE

From dirty `studioCursorRealLaunchGateway.ts` (READ-ONLY):

**Mutating / docs-write profiles** (`usesAgentMode`):

```text
agent --print --workspace <workspacePath> --trust --sandbox enabled <instruction>
```

**RO profile**:

```text
agent --print --mode ask --workspace <workspacePath> --trust --sandbox enabled <instruction>
```

Product **always** passes `--sandbox enabled`. It does **not** pass `--force` / `--yolo` / `--auto-review`. Comment in source: "All keep --print + --workspace + --trust + --sandbox enabled."

Bin resolve order: `SFIA_CURSOR_BIN` → Cursor.app `bin/cursor` → `~/.local/bin/cursor-agent`.

---

## I. RUNNER INTERACTION MODEL

From dirty `nodeCursorProcessRunner.ts` (READ-ONLY):

- `spawn(executable, argv, { cwd, env, shell: false, stdio: ["ignore", "pipe", "pipe"] })`
- stdin: **ignore** (noninteractive; no TTY approval channel)
- env: forwarded from invoke input (`input.env`)
- stdout/stderr: capped pipes (64 KiB); no TTY
- invoke ACK on spawn confirmation (PID), completion via `awaitCompletion`

Studio-shaped launches cannot answer interactive Shell approval prompts.

---

## J. LOCAL CURSOR CONFIG / POLICY

READ-ONLY discovery (policy keys only; no credentials / private chats):

**`~/.cursor/cli-config.json`** (decisive):

| Key | Value |
| --- | --- |
| `approvalMode` | `allowlist` |
| `permissions.allow` | `["Shell(ls)"]` only |
| `permissions.deny` | `[]` |
| `sandbox.mode` | `disabled` |
| `sandbox.networkAccess` | `user_config_with_defaults` |
| `network.useHttp1ForAgent` | `false` |

**`~/Library/Application Support/Cursor/User/settings.json`**: no matching sandbox/approval/shell agent policy keys.

**Workspace `.cursor/`**: MCP templates only; no shell policy.

**Cursor logs**: no literal `Shell rejected` hits in Application Support logs (rejection surfaced in agent stdout only).

**This lot did not modify Cursor config.**

---

## K. SHELL REJECTED FORENSICS

### Artifact `.tmp-sfia-review/dch-sandbox-disabled-diff.out`

- `realProcessInvoked=true`, `exitCode=0`, `timedOut=false`, `durationMs≈39486`
- argv shape: `agent --print --workspace <diag-ws> --trust --sandbox disabled <instruction>`
- stdout for A/B/C/D each: exact line `Shell rejected` (four times)
- stderr: empty
- No structured rejection code beyond the literal phrase
- No OS command outputs (pwd/node/gh/helper) — rejection **before** observable OS process results

### Contrast DCH-3 (`.tmp-sfia-review/dch-cursor-diag.out`, `--sandbox enabled`)

- Same diagnostic A–D shape: Shell **executed** (pwd/node/gh versions; env presence; helper ENOTFOUND; gh Forbidden)

### Interpretation

- Agent **attempted** Shell tool use (uniform `Shell rejected` per section, not model prose refusal).
- Rejection is **tool/policy layer**, not model declining to call Shell (would be STB-4).
- With local `approvalMode=allowlist` and only `Shell(ls)` allowed, non-`ls` Shell calls are denied without interactive approval — especially under stdin-ignore `--print`.
- `--sandbox enabled` overrides config and previously permitted Shell; `--sandbox disabled` engages host allowlist path → SD-3 rejection.

---

## L. NEW MINIMAL CURSOR PROBE

| Field | Value |
| --- | --- |
| run | **no** |
| count | **0** |
| reason | Static/log + prior SD-3/DCH-3 artifacts already close cause as local allowlist policy (STB-3) |
| sandbox mode | n/a |
| commands | n/a |
| result | n/a — no `.tmp-sfia-review/stb-minimal-shell-disabled.out` |

---

## M. STB CLASSIFICATION

**Primary (exactly one): STB-3 — WORKSPACE TRUST / LOCAL POLICY OVERRIDE**

Evidence:

- Local `cli-config.json` allowlist admits only `Shell(ls)`.
- SD-3 under `--sandbox disabled` → all Shell rejected.
- DCH-3 under `--sandbox enabled` → Shell executed (CLI `--sandbox` overrides config).
- Product REAL path uses `--sandbox enabled` + noninteractive runner; diagnostic SD-3 intentionally disabled sandbox and hit host allowlist.

Meaning: diagnostic environment local policy differs from assumed unbounded Shell under sandbox-disabled; SD-3 is **not** a valid network differential.

Not STB-1 primary: denial is allowlist auto-reject, not a missing interactive prompt loop (though noninteractive stdin compounds it).

Not STB-2: help does not define sandbox-disabled as Shell-off by design; `--print` claims Shell access.

Not STB-4: rejection text is tool-layer `Shell rejected`, not model abstention.

Not STB-5: no minimal disabled probe needed; prior disabled probe already failed Shell.

Not STB-6: cause explained.

---

## N. SUPPORTING EVIDENCE

1. `~/.cursor/cli-config.json` — `approvalMode=allowlist`, `permissions.allow=["Shell(ls)"]`, `sandbox.mode=disabled`.
2. `.tmp-sfia-review/dch-sandbox-disabled-diff.out` — A–D `Shell rejected`.
3. `.tmp-sfia-review/dch-cursor-diag.out` — A–D Shell executed under `--sandbox enabled`.
4. Dirty `studioCursorRealLaunchGateway.ts` — Product argv always `--sandbox enabled`.
5. Dirty `nodeCursorProcessRunner.ts` — `shell:false`, stdin `ignore`.
6. Cursor agent help — `--sandbox` overrides config; `--force`/`--yolo`/`--auto-review` exist but unused by Product.

---

## O. SECRET / GITHUB / NETWORK

**NONE** this lot (no GH_TOKEN injection, no credential provider, no gh, no GitHub API, no network targets).

---

## P. ZERO MUTATING REAL

Maintained. No proof/product remote mutation. Handoff L3 publish only remote mutation allowed/used.

---

## Q. PRODUCT SOURCE DELTA

**NONE** this lot (Product tracked + untracked candidate bytes not edited). Only review artifact write under `.tmp-sfia-review/chatgpt-review.md`.

---

## R. PRODUCT COMMIT

**NONE**

---

## S. PRODUCT / PROOF REMOTE EFFECTS

**NONE**

---

## T. ROADMAP

**UNCHANGED**

---

## U. REVIEW HANDOFF

Incoming tip verified: `3d7eee1747de167630dc2e3daa99085d0c53f8e8`.

Publish once via `scripts/sfia/publish-review-handoff.sh` from this pack; verify tip / parent / blob / parity after publish (filled post-publish).

---

## V. MATURITY / ANTI-CLAIMS

- STB-3 identified ≠ D PR REAL.
- Does **not** authorize `--sandbox disabled` as Product default.
- Does **not** authorize Cursor config changes in this lot.
- Does **not** authorize unbounded Shell via `--force`/`--yolo` without a separate GO.
- Does **not** re-open GitHub ENOTFOUND as solved.
- Maturity table unchanged except STB-3 diagnostic claim.

---

## W. NEXT GATE RECOMMENDATION

Per GO §25 for **STB-3**:

> next diagnostic/correction = bounded policy/config issue, separate GO.

Recommended focus (OPTIONS only — no auto-authorize):

1. Decide whether Studio-owned REAL launches must remain on `--sandbox enabled` (current Product) and treat sandbox-disabled diagnostics as invalid under this host allowlist.
2. If host CLI allowlist must support governed Shell sequences for future diagnostics, do so only under an explicit Morris GO (bounded allowlist / approvalMode) — **do not** change config in this lot.
3. Do **not** route automatically to D REAL PR-create.

No PASS means D PR REAL.
