# SFIA STUDIO — GCEC
## D-GCEC-CONF-04 — CURSOR AUTH SEPARATION FEASIBILITY
## EPHEMERAL HOME + MUTATING SHELL SECRET-EXPOSURE QUALIFICATION
## ZERO PRODUCT MUTATION — ZERO GCEC REAL

TIMESTAMP: 2026-09-12T09:27:00Z

GO MORRIS:
D-GCEC-CONF-04 CURSOR AUTH SEPARATION FEASIBILITY CONSUMED

DECISION:
D-GCEC-CONF-04 ADOPTED — FEASIBILITY ONLY

CYCLE:
10 — Security / RSSI

TYPE:
EVOL

PROFILE:
CRITICAL

SECURITY POSTURE:
ADVERSARIAL (executor credential exposure / escape — not prompt obedience)

---

## GIT TRUTH

Worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`

Branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`

INPUT PRODUCT HEAD:
`6e42c4f069cbe2af7eb6ffe47e3df41d199972cc`

Parent:
`0bdae76b8b5c97559870f82c45fd602d0463d9da`

origin/main:
`a9f6c310a0826d0e5bd6f7264603382a86564db1`

INPUT HANDOFF:
`887ca5883661a8d1a5dce1cabd73666158fa6849`

Product state:
`projects/sfia-studio` CLEAN throughout.

Campaign gates unset. No Product edits. No GCEC REAL.

---

## SOURCES

- Required cycle / method / convergence / framing docs
- Input handoff @ `887ca588…` (CONF-03 Outcome C)
- Committed `buildMutatingCursorConfinementEnv` @ HEAD `6e42c4f0…`
- Live Cursor CLI help / status / technical probes under `/tmp/gcec-conf04-u7LWxh/`

---

## CONVERGENCE PRE-CHECK

Build Doctrine: VALIDATED / ACTIVE
Roadmap: VALIDATED / ACTIVE LIVING
Product Completion: COMPLETE / CLOSED
Runtime v3: NON ADOPTED

Binding decisions:
- D-GCEC-CONF-01 ADOPTED
- D-GCEC-CONF-02 ADOPTED
- D-GCEC-CONF-02A ADOPTED / LOCALLY COMMITTED
- D-GCEC-EVID-01 ACCEPTED NON-BLOCKING
- D-GCEC-CONF-03 ADOPTED / OUTCOME C ACCEPTED
- D-GCEC-CONF-04 ADOPTED / FEASIBILITY ONLY

Assets: Cursor CLI KEEP/QUALIFY · gateway KEEP · CONF-02A KEEP · ephemeral HOME QUALIFIED SECURITY MECHANISM / NOT PRODUCT-IMPLEMENTED · Cursor auth QUALIFY

No parallel architecture created.

---

## D-GCEC-CONF-03 OUTCOME C INPUT

Prior facts accepted (not re-proven in full):

- empty ephemeral HOME/XDG closes gh HOME auth + mandated default Keychain probe + normal Git credential
- public network remains
- Cursor fails without CURSOR_API_KEY / real-HOME login state

This cycle focuses on Cursor-auth separation vs mutating Shell secret exposure.

---

## CURRENT CURSOR CLI VERSION

Binary: `/Users/morris/.local/bin/cursor-agent`
Version: `2026.09.10-fd3934a`

---

## AUTH MECHANISMS DISCOVERED

From CLI help / status (read-only; no login/logout; no credential values):

Documented / supported:
1. `--api-key <key>` / env `CURSOR_API_KEY`
2. `--endpoint` / env `CURSOR_API_ENDPOINT`
3. `agent login` (stored authentication; browser; NO_OPEN_BROWSER noted)
4. `agent logout` (clear stored authentication)
5. `agent status|whoami` (auth status metadata)

Not discovered as supported CLI controls:
- auth-file / credentials-path / config-dir / profile / store selector for isolating login material
- documented tool-env filtering / secret scrubbing for Shell
- Keychain-specific Cursor CLI auth selector
- XDG auth-store override for Cursor credentials

Local Cursor-specific surfaces (names/metadata only; contents never read):
- `~/.cursor/` exists and is same-user readable (contains `agent-cli-state.json`, `cli-config.json`, …)
- `~/Library/Application Support/Cursor/` exists (IDE Chromium/session surfaces; not proven as CLI login store)
- `~/.local/share/cursor-agent/versions/…` install tree (lsof during startup)

AUTH_STORE_MECHANISM_FOUND: yes (documented stored authentication via login) — exact single credential file path NOT confidently identified without content inspection
AUTH_STORE_SELECTOR_SUPPORTED: **no**

---

## Q1 GENERIC ENV PROPAGATION

Synthetic NON-SECRET launch env:
`SFIA_CONF04_SECRET_SENTINEL` (value never printed; Shell wrote boolean file only)

Shape: CONF-02A + **real HOME** (required so Cursor reaches tools) + mutating argv
`agent --print --workspace <scratch> --trust --sandbox enabled`

Harness imports committed `buildMutatingCursorConfinementEnv`.

### A RESULT
GENERIC_LAUNCH_ENV_VISIBLE_TO_SHELL_A = **yes**
(file evidence `SENTINEL_VISIBLE=yes`; exit 0)

### B RESULT
GENERIC_LAUNCH_ENV_VISIBLE_TO_SHELL_B = **yes**
(file evidence `SENTINEL_VISIBLE=yes`; exit 0)

Interpretation:
Arbitrary launch-env variables are GENERICALLY exposed to Cursor-controlled Shell unless a variable-specific scrub is proven.
This does **not** by itself prove exact `CURSOR_API_KEY` visibility.

---

## Q2 DUMMY CURSOR_API_KEY PRECEDENCE

Dummy NON-SECRET invalid value set in launch env (real HOME + CONF-02A).

A: DUMMY_CURSOR_API_KEY_HAS_AUTH_PRECEDENCE = **yes**
- exit 1; auth failed before tools
- stderr class (scrubbed): invalid API key; key loaded from `CURSOR_API_KEY` environment variable

B: DUMMY_CURSOR_API_KEY_HAS_AUTH_PRECEDENCE = **yes** (parity)

CURSOR_API_KEY_ENV_VISIBLE during dummy probe: **not-proven** (tools not reached)

Semantics proven:
CLI treats `CURSOR_API_KEY` as authentication input with precedence over stored login when set.
No evidence of special removal before tool/Shell execution was obtainable in this probe (auth died first).

---

## VALID CURSOR_API_KEY PRESENT:
**no**

## VALID CURSOR_API_KEY PROBE:
**NOT_RUN_NO_APPROVED_KEY_AVAILABLE**

(No Morris-approved parent env key; did not source dotfiles; did not extract from login store; did not create/login.)

## CURSOR_API_KEY EXACT TOOL VISIBILITY:
**not-proven**

---

## Q3 AUTH STORE DISCOVERY

- Documented: login creates/clears "stored authentication"
- No supported CLI selector to point auth store at an isolated path
- lsof during short startup: install binaries under `~/.local/share/cursor-agent/versions/…` + temp session log — no confident single credential file
- Candidate Cursor config root `~/.cursor` and `~/.cursor/agent-cli-state.json` exist (names only)

AUTH STORE PATH CLASS:
`~/.cursor` (Cursor-specific config root) / exact credential file UNKNOWN

AUTH STORE SELECTOR:
**not supported**

---

## AUTH STORE TOOL READABILITY

Under real-HOME authenticated mutating Cursor Shell (test -r only; no content):

- `~/.cursor` directory: CURSOR_AUTH_STORE_READABLE_BY_TOOL = **yes**
- `~/.cursor/agent-cli-state.json`: AGENT_CLI_STATE_READABLE_BY_TOOL = **yes**

Implication:
Even if a future design copied Cursor config into ephemeral HOME, same-user Shell could still `test -r` / read that material unless an additional secret boundary exists.
Store-copy alone is **not** proven secret isolation.

AUTH_STORE_TOOL_READABILITY = **yes** (for discovered Cursor config surface; exact auth-secret file still not content-identified)

---

## ENV_TO_TOOL_MODEL

**INHERITED_OR_BROADLY_PROPAGATED**

Evidence: synthetic sentinel visible to Shell A+B.
No documented Cursor environment filtering for tool/Shell found in help.

---

## OPTION A CLASSIFICATION

**OPTION_A_NOT_PROVEN_NO_VALID_KEY**

Supporting (not elevating to proven-safe or proven-unsafe exact key visibility):
- `CURSOR_API_KEY` is a supported auth input with precedence (dummy probe)
- generic launch env reaches Shell
- therefore Option A is **presumptively high-risk** as a secret-isolation design, but exact `CURSOR_API_KEY` tool visibility remains NOT PROVEN without an approved valid-key probe

OPTION_A_PROVEN_SAFE: **no** (hard bar unmet)

---

## OPTION B CLASSIFICATION

**OPTION_B_NO_SUPPORTED_STORE_SELECTOR**

Supporting:
- stored auth exists conceptually (login/logout)
- Cursor config root is tool-readable under real HOME
- no provider-supported isolated auth-store path/selector discovered
- therefore dedicated-store Product design is not currently selectable from CLI contracts

---

## HARD BAR MATRIX

| Requirement | Result |
|---|---|
| EPHEMERAL HOME/XDG security boundary (CONF-03) | still supported (not contradicted) |
| CURSOR AUTH FUNCTIONAL under ephemeral HOME | NOT PROVEN this cycle (no approved key; prior CONF-03 fail without key) |
| CURSOR AUTH SECRET TOOL-READABLE = NO | NOT PROVEN / generic env suggests risk |
| GH AUTH = NO under ephemeral | prior CONF-03 (not re-opened) |
| KEYCHAIN mandated probe = NO | prior CONF-03 |
| NORMAL GIT CREDENTIAL SECRET = NO | prior CONF-03 |
| A/B PARITY | yes for Q1/Q2A |

Hard bar §25: **NOT MET** → Product hardening not eligible; REAL remains blocked.

---

## PRODUCT MUTATION
NONE

## PRODUCT COMMIT
NONE

## PRODUCT PUSH
NONE

## PR
NONE

## MERGE
NONE

## PROOF REPO
UNCHANGED

## GCEC REAL A→B
NOT RUN

## REAL git.commit
NOT PROVEN

## REAL_CONTINUATION_GAP
OPEN

## GCEC-PUSH
NOT READY

## REAL TOOL-CONFINEMENT RESERVE
OPEN

## EVIDENCE RESERVE
ACCEPTED NON-BLOCKING

---

## OPTIONS

Analyzed only — **not adopted**:

1. Provider-supported Cursor secret isolation — **not discovered** in current CLI
2. Bounded process/OS secret boundary (prevent Shell from reading parent-injected secrets / Keychain / auth store)
3. Separate execution identity/environment
4. Network-denied executor architecture
5. Valid-key probe under ephemeral HOME **only if** Morris supplies `CURSOR_API_KEY` via approved external channel — still likely fails Option A if env reaches Shell (Q1)

Do **not** implement Option A as current confinement design.

---

## RECOMMENDATION

Select **OUTCOME C**.

Do not authorize Product ephemeral-HOME + CURSOR_API_KEY env injection as a security boundary.

Next Morris decision should choose among structural / provider-supported secret boundaries (or an approved valid-key probe solely to close exact visibility uncertainty — expected to confirm tool visibility given Q1).

REAL remains blocked.

---

## DECISIONS REQUIRED FROM MORRIS

1. Accept Outcome C for D-GCEC-CONF-04.
2. Decide whether to supply an approved valid `CURSOR_API_KEY` for an optional exact-visibility re-probe (not required for Outcome C).
3. Choose next confinement direction among structural options (process/OS secret boundary, separate identity, network deny, alternate executor) — not env injection.
4. Keep Product CONF-03/04 implementation and REAL A→B blocked until a mechanism meets hard bar §25.

---

## ANTI-CLAIMS

- Does **not** claim READY FOR REAL
- Does **not** claim CURSOR_API_KEY SAFE
- Does **not** claim CURSOR AUTH ISOLATED
- Does **not** claim EPHEMERAL HOME PRODUCT READY
- Does **not** claim exact CURSOR_API_KEY tool visibility (only generic env propagation + dummy precedence)
- Does **not** claim Option A proven safe or proven unsafe at the exact-key level
- Does **not** claim auth-store file contents identified
- Did **not** extract/copy/login/logout/create Cursor credentials
- Did **not** mutate Product, proof repo, Keychain, or GitHub
- Did **not** run GCEC REAL

---

## FINAL VERDICT

**OUTCOME C:**

FEASIBILITY CONDITIONAL —
GENERIC LAUNCH ENV REACHES MUTATING SHELL /
CURSOR_API_KEY EXACT ISOLATION NOT PROVEN /
NO APPROVED SAFE AUTH PATH YET

Strongest blocker: launch-env secrets are generically Shell-visible; Option A lacks valid-key isolation proof and is presumptively unacceptable; Option B has no supported isolated store selector.
Ephemeral HOME security boundary from CONF-03 remains supported and is not contradicted.
