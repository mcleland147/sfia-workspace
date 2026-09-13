# ChatGPT Review Pack — GCEC CURSOR FULL-CAPABILITY EXECUTOR PARITY

**Mode:** FULL
**Timestamp (UTC):** 2026-09-13T15:18:10Z
**Cycle:** 8 / EVOL / CRITICAL
**GO:** GCEC-CURSOR-FULL-CAPABILITY-PARITY-01
**Verdict:** PASS — CURSOR FULL-CAPABILITY EXECUTOR PARITY RO-PROVEN / LOCAL ANCHOR CREATED — D PR EFFECT STILL NOT PROVEN

---

## A. VERDICT

**PASS — CURSOR FULL-CAPABILITY EXECUTOR PARITY RO-PROVEN / LOCAL ANCHOR CREATED — D PR EFFECT STILL NOT PROVEN.**

Morris decision applied: Cursor is a general technical executor; SFIA governs authority via ExecutionContract ∩ AgentCapability ∩ Confirmation ∩ guardrails ∩ Evidence — not via SFIA-owned network firewall.

- CLI mode qualified: `agent --print --workspace --trust --sandbox disabled --force` (`--yolo` = alias for `--force`; not used).
- ONE direct parity probe PASS → **FCP-A** (native `gh` auth works; no token injection).
- Product aligned: removed `api.github.com`-only / `CURSOR_FORCED_*` injection; argv `--sandbox disabled --force` for governed launches; RO keeps `--mode ask`; ephemeral secret bridge retired; exact-secret redaction retained.
- Deterministic CAP/AUTH + A/B/C/D regressions + A→D harness 22/1 skip PASS; typecheck/lint/build/full Vitest PASS.
- ONE Product-shaped RO probe PASS (D remote_github composition, RO instruction, native auth).
- ONE local Product commit; ZERO Product remote / proof mutating effects.

---

## B. QUALIFICATION

| Field | Value |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| Cycle | 8 — Delivery / implementation |
| Typology | EVOL |
| Profile | CRITICAL |
| Milestone | GCEC-CURSOR-FULL-CAPABILITY-PARITY-01 |
| Product main | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| Dirty parent / prior ANCHOR | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| Worktree | `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf` |
| Branch | `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` |
| Incoming handoff | `f0b69c1fab8c9eb7f47b522109b9b6f78d65adb9` |
| Proof | `mcleland147/sfia-gcec-proof-task-manager` |
| Feature | `gcec/lifecycle/gcec-ad-finaldec-f2-fe6b` @ `3a879572722af2b72909243ba0b506f307d87156` |

---

## C. LOCAL GIT TRUTH

| Field | Value |
|---|---|
| pwd / toplevel | `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf` |
| branch | `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` |
| HEAD before commit | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| origin/main | `c481610caa3527edabeca8c860ab27c18a6a738e` |
| HEAD after commit | `9878043eca14896c3a6f6cb8f9dc4a84b6a26d55` |
| commit parent | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| staged unexpected | NONE |

---

## D. ENTRY DIRTY CANDIDATE

Preserved dirty candidate from prior bounded-network STOP (secret bridge + `CURSOR_FORCED_*` egress) was reworked in-place — not discarded/stashed.

Entry modified Product paths under `execution-attempt/` plus untracked bridge/redaction candidates and `.tmp-sfia-review/**` diagnostics (preserved, never staged).

---

## E. MORRIS FULL-CAPABILITY DECISION

Consumed: Cursor must retain general technical capability (Shell / filesystem / network / installed tools / GitHub when credentials exist). SFIA must not be a domain firewall / network sandbox / Internet permission catalog. SUPERSEDED as target: `api.github.com-only`, `CURSOR_FORCED_SHELL_EGRESS*` Product injection, domain allowlist-by-effect. Does NOT mean global L5 / autonomous merge / removal of HumanDecision/Confirmation / runtime v3 ADOPTED.

---

## F. CANONICAL MATURITY

| Surface | Maturity |
|---|---|
| A docs-write | REAL PROVEN AT TESTED SCOPE |
| B local commit | REAL PROVEN AT TESTED SCOPE |
| C remote push | REAL PROVEN AT TESTED SCOPE |
| A→C | REAL PROVEN AT TESTED SCOPE |
| C HTTPS bridge | REAL-BACKED AT TESTED SCOPE |
| D executor full-capability (RO) | **RO-PROVEN AT TESTED SCOPE** (this lot) |
| D PR-create effect | **NOT PROVEN** |
| E / merge | NOT PROVEN |
| runtime v3 | NON ADOPTED |

---

## G. TECHNICAL RESTRICTION INVENTORY

| Mechanic | Class | Disposition |
|---|---|---|
| EC / AgentCapability / Confirmation gates | A AUTHORITY | KEEP |
| `--mode ask` for RO | A AUTHORITY / RO intent | KEEP |
| exact-secret redaction (`redactExactSecrets` / runner) | B SECRET SAFETY | KEEP |
| remote_git `GIT_CONFIG_*` HTTPS helper (`gh auth git-credential`) | C ADDITIVE CAPABILITY | KEEP (C path) |
| mutating env strip of host auth for local A/B | A/C confinement | KEEP |
| `--sandbox enabled` on governed launches | D SFIA RESTRICTION | **REMOVED** → `disabled` |
| missing `--force` under allowlist | D RESTRICTION | **REMOVED** → `--force` |
| `applyRemoteGithubPrCreateBoundedShellEgress` / `CURSOR_FORCED_*` inject | D FIREWALL | **REMOVED** |
| HostGhAuthTokenCredentialProvider / credential port wiring | C (FCP-B only) | **RETIRED (FCP-A)** |
| ambient `CURSOR_FORCED_*` strip | neutralize ambient firewall | KEEP strip-only |

---

## H. CURSOR CLI FULL-CAPABILITY MODE QUALIFICATION

| Item | Result |
|---|---|
| Cursor | 3.20.17 |
| `--sandbox` | choices `enabled` / `disabled` (overrides config) |
| `--force` / `-f` | Force allow commands unless explicitly denied |
| `--yolo` | Alias for `--force` — **not used** |
| Preferred argv | `agent --print --workspace <path> --trust --sandbox disabled --force` |
| cli-config / Cursor.app modified | **NO** |
| Verdict | **QUALIFIED** |

---

## I. DIRECT CURSOR PARITY PROBE

| Field | Value |
|---|---|
| Count | ONE (no retry) |
| Argv | `agent --print --workspace <empty temp> --trust --sandbox disabled --force` |
| GH_TOKEN injection | NONE |
| Artifact | `.tmp-sfia-review/fcp-direct-parity.out` |
| Shell | PASS (`SHELL_OK=yes`, node v24.16.0) |
| Outside fixture read | PASS (`OUTSIDE_WORKSPACE_READ=yes`) |
| example.com DNS/HTTPS | PASS (200) |
| api.github.com DNS/HTTPS | PASS (403 — HTTPS reachable) |
| git / gh | PASS |
| Native gh auth | PASS (`NATIVE_GH_AUTH=yes`) |
| Exit | 0 |

---

## J. FCP-A / FCP-B CLASSIFICATION

**FCP-A** — network OK and native `gh` auth works without Product token injection.

---

## K. SECRET BRIDGE DISPOSITION

**RETIRED** for PR-create path (FCP-A).

Removed wiring: `HostGhAuthTokenCredentialProvider`, `remoteGithubCredentialPort`, gateway `remoteGithubCredentialProvider`, Fake provider.

Kept: `redactExactSecrets` + `NodeCursorProcessRunner.redactExactValues` for accidental capture defense.

---

## L. SUPERSEDED NETWORK CONFINEMENT REMOVAL

Removed Product injection of:

- `applyRemoteGithubPrCreateBoundedShellEgress`
- `REMOTE_GITHUB_PR_CREATE_SHELL_EGRESS_*` constants
- `CURSOR_FORCED_SHELL_EGRESS*` Product inject on D path

Retained strip of ambient `CURSOR_FORCED_*` so inherited deny/allowlist cannot confine children.

Deleted api.github.com-only NET assertions; replaced with CAP/AUTH suite.

---

## M. PRODUCT LAUNCH ALIGNMENT

`StudioCursorRealLaunchGateway` governed argv (A/B/C/D/E mutating + RO):

- always `--sandbox disabled` + `--force`
- RO additionally `--mode ask`
- capability no longer depends on effect class for sandbox/force
- no `CURSOR_FORCED_*` inject; no ephemeral GH_TOKEN bridge

---

## N. AUTHORITY INVARIANTS

AUTH-01..10 preserved: invalid D agent/effects/spec still reject before spawn; full capability does not authorize protected effects; Cursor remains `gh pr create` executor; no Studio GitHub mutation API; no auto merge/delete; runtime v3 not promoted.

---

## O. CAPABILITY INVARIANTS

CAP-01..12 covered by Product argv + strip-only egress policy + direct/Product RO probes + no cli-config mutation.

---

## P. DETERMINISTIC VALIDATION

| Check | Result |
|---|---|
| `gcecCursorFullCapabilityParity.d0.test.ts` | PASS (13) |
| `gcecMutatingCursorConfinementEnv.d0.test.ts` | PASS (13) |
| `gcecGitCommitGatewayProfile.d0.test.ts` | PASS (19) |
| `gcecGitLifecyclePushPrMerge.d0.test.ts` | PASS (53) |
| A→D `gcecCursorRealSameEcCommit.real.d0.test.ts` | PASS 22 / SKIP 1 |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| full Vitest | PASS 3893 / SKIP 137 (356 files; 17 skipped files) |

---

## Q. PRODUCT-SHAPED REAL READ-ONLY PROBE

| Field | Value |
|---|---|
| Count | ONE (no retry) |
| Composition | `buildMutatingCursorConfinementEnv(..., remote_github)` + `NodeCursorProcessRunner` + Product argv |
| Instruction | READ-ONLY (no PR/push/write) |
| Artifact | `.tmp-sfia-review/fcp-product-ro-probe.out` |
| realProcessInvoked | true |
| argv | sandbox disabled + force |
| CURSOR_FORCED inject | absent |
| Shell / outside read / both networks | PASS |
| Native GitHub RO | PASS (`full_name` + feature SHA exact) |
| GH_TOKEN in child | no |
| Exit | 0 |

---

## R. SECRET SAFETY

No GH_TOKEN injection this lot. No raw credential printed in probe captures. Redaction helper retained. `process.env` not globally mutated by gateway.

---

## S. PROOF REMOTE TRUTH

Pre/post Product probe (host `gh api`, read-only):

| Check | Value |
|---|---|
| proof main | `32c7c2008197e5c61b32c16479144e9863291358` |
| feature SHA | `3a879572722af2b72909243ba0b506f307d87156` |
| open PR for feature | NONE (`[]`) |
| Unchanged | YES |

---

## T. FULL VALIDATION

Focused suites + typecheck + lint + build + full Vitest — all PASS before commit.

---

## U. CUMULATIVE PRODUCT DIFF

Parent `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` → tip `9878043eca14896c3a6f6cb8f9dc4a84b6a26d55`:

- gateway argv full-capability alignment
- remove bounded Shell egress inject
- retire ephemeral credential bridge wiring
- retain redaction helper
- CAP/AUTH deterministic tests; update sandbox assertions in GC/M4/namemax tests

---

## V. STAGED FILES

Only Product paths under `projects/sfia-studio/app/lib/oa/execution-attempt/**` and related `__tests__/oa/execution-attempt/**`. Never staged: `.tmp-sfia-review/**`, `node_modules`, diagnostics probes.

---

## W. LOCAL PRODUCT COMMIT

| Field | Value |
|---|---|
| Subject | `fix(sfia-studio): align Cursor executor capability parity` |
| SHA | `9878043eca14896c3a6f6cb8f9dc4a84b6a26d55` |
| Parent | `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` |
| Push | **NOT DONE** (local only) |

---

## X. D_FULL_CAPABILITY_LOCAL_ANCHOR

`9878043eca14896c3a6f6cb8f9dc4a84b6a26d55`

---

## Y. PRODUCT REMOTE EFFECTS

**NONE** (no `git push` of Product branch; no Product PR).

---

## Z. PROOF MUTATING EFFECTS

**NONE** (no PR create/merge; main/feature unchanged).

---

## AA. ROADMAP

Unchanged this lot. Next candidate gate only after Morris authorization: ONE REAL D-only PR-create EC against existing C-proven feature — STOP BEFORE MERGE.

---

## AB. REVIEW HANDOFF

| Field | Value |
|---|---|
| Incoming tip (HANDOFF_IN) | `f0b69c1fab8c9eb7f47b522109b9b6f78d65adb9` |
| Source | `.tmp-sfia-review/chatgpt-review.md` |
| Destination | `sfia-review-handoff/latest-chatgpt-review.md` |
| Branch | `sfia/review-handoff` |
| Publish | ONCE via `scripts/sfia/publish-review-handoff.sh` |

(Post-publish tip/parent/blob/parity filled by publish verification.)

---

## AC. MATURITY / ANTI-CLAIMS

**Claims:** Cursor governed launch full-capability mode RO-proven at tested scope; local Product anchor created; authority gates preserved; C remote_git path not regressed.

**Anti-claims:** Does NOT prove D `github.pr.create` REAL effect; does NOT prove E/merge; does NOT adopt runtime v3; does NOT authorize autonomous protected effects; does NOT claim unbounded L5.

---

## AD. NEXT GATE

Candidate (do NOT execute under this GO):

**GO MORRIS — ONE REAL D-ONLY PR-CREATE EXECUTION CONTRACT AGAINST EXISTING C-PROVEN FEATURE — STOP BEFORE MERGE**

- repository: `mcleland147/sfia-gcec-proof-task-manager`
- base main: `32c7c2008197e5c61b32c16479144e9863291358`
- head: `gcec/lifecycle/gcec-ad-finaldec-f2-fe6b` @ `3a879572722af2b72909243ba0b506f307d87156`
- effect: `github.pr.create` ONLY
- merge: NOT AUTHORIZED

---

Constants: ANCHOR=`9878043eca14896c3a6f6cb8f9dc4a84b6a26d55` PARENT=`ff267fdf3e6591b5ed83c4478b95f6181ad98fa2` MAIN=`c481610caa3527edabeca8c860ab27c18a6a738e` HANDOFF_IN=`f0b69c1fab8c9eb7f47b522109b9b6f78d65adb9` NEW=`/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf` FCP=A
