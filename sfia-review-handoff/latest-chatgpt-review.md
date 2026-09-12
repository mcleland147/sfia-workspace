# SFIA STUDIO — GCEC
## D-GCEC-CONF-03 — EPHEMERAL HOME / KEYCHAIN HOST FEASIBILITY PROBE
## QUALIFY BEFORE IMPLEMENT — ZERO PRODUCT MUTATION

TIMESTAMP: 2026-09-12T08:38:09Z

GO MORRIS:
D-GCEC-CONF-03 HOST FEASIBILITY PROBE CONSUMED

DECISION:
D-GCEC-CONF-03 ADOPTED — QUALIFY BEFORE IMPLEMENT

CYCLE:
10 — Security / RSSI

TYPE:
EVOL

PROFILE:
CRITICAL

SECURITY POSTURE:
ADVERSARIAL

CKC:
candidate / synthetic-map fallback — authority NONE

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
`8a40f2b68fbd52e5b5b564d89ec822750a974650`

Product state:
`projects/sfia-studio` CLEAN throughout.

Campaign gates unset. No GCEC REAL harness. No Product edits.

---

## SOURCES

- Cycle / method / convergence / framing docs (required set)
- Input handoff @ `8a40f2b6…` (prior Outcome B — CONF-02A live re-preflight)
- Committed Product helper `buildMutatingCursorConfinementEnv` @ HEAD `6e42c4f0…`

---

## CONVERGENCE PRE-CHECK

Build Doctrine: VALIDATED / ACTIVE
Roadmap: VALIDATED / ACTIVE LIVING
Product Completion: COMPLETE / CLOSED
Runtime v3: NON ADOPTED

Decisions:
- D-GCEC-CONF-01 ADOPTED
- D-GCEC-CONF-02 ADOPTED
- D-GCEC-CONF-02A ADOPTED / LOCALLY COMMITTED
- D-GCEC-EVID-01 ACCEPTED NON-BLOCKING
- D-GCEC-CONF-03 ADOPTED / QUALIFY BEFORE IMPLEMENT

Trajectory:
CONF-02A → prior live FAIL (Outcome B) → **this host feasibility probe** → bounded implementation OR structural escalation → later live re-preflight → only then possible Morris REAL decision.

---

## PREVIOUS OUTCOME B

Prior live re-preflight (`8a40f2b6…`):
CONF-02A closed inherited tokens / SSH agent / askpass / Git config injection / normal credential.helper path.

Remaining channels then:
- macOS Keychain via `security` = yes
- authenticated `gh` API = yes
- repo push permission = true
- readable `~/.config/gh/hosts.yml` = yes
- network egress = yes

---

## QUESTION Q1: GH HOME CHANNEL

If HOME + XDG replaced by empty disposable root, does GitHub CLI authentication disappear?

**Answer: YES — channel closed under ephemeral HOME/XDG.**

Evidence (A-home / B-home / control-home parity):
- ISOLATED_HOME_GH_HOSTS_READABLE = no
- ISOLATED_HOME_GH_AUTH_VALID = no
- ISOLATED_HOME_GH_API_AUTH_OK = no
- ISOLATED_HOME_GH_PUSH_PERMISSION = unknown (API auth failed; no further usable write path)

No unexpected non-HOME gh credential channel observed (no GH_TOKEN/GITHUB_TOKEN; empty HOME → auth gone).

---

## QUESTION Q2: DIRECT KEYCHAIN CHANNEL

With the SAME isolated HOME/XDG, can `/usr/bin/security` still retrieve a GitHub credential?

**Answer: NO — for the mandated GitHub-scoped boolean probe under isolated HOME.**

Evidence:
- ISOLATED_HOME_KEYCHAIN_GITHUB_SECRET_RETRIEVABLE = no (security exit 44)
- CURRENT_HOME_KEYCHAIN_GITHUB_SECRET_RETRIEVABLE = yes (exit 0) — contrast proves the change is HOME/XDG isolation, not host Keychain emptiness

Interpretation (precise, not overstated):
Empty ephemeral HOME changes the default Keychain lookup context used by `security find-internet-password` (macOS default keychain lives under `$HOME/Library/Keychains`). Under this probe shape, the prior residual Keychain channel does **not** remain open.

Absolute binary still present: `/usr/bin/security` executable = yes → PATH-only removal would be meaningless for binary availability. This cycle did **not** probe alternate explicit keychain paths or Keychain mutation (forbidden).

---

## QUESTION Q3: CURSOR AUTH VIABILITY

Can cursor-agent execute with isolated HOME/XDG while preserving only already-explicit Cursor auth env?

**Answer: NO — Cursor auth fails. Separation NOT PROVEN / GAP.**

- CURSOR_A_AUTH_FUNCTIONAL = no (exit 1)
- CURSOR_B_AUTH_FUNCTIONAL = no (exit 1)
- CURSOR_*_STDERR_CLASSIFICATION = auth
- Scrubbed stderr class: Authentication required — run `agent login` or set `CURSOR_API_KEY`
- Did **not** copy Cursor config from real HOME
- Did **not** extract or inject any Cursor token
- `CURSOR_API_KEY` / `CURSOR_API_ENDPOINT` names: **absent** from process env
- Other CURSOR_* names present (agent/runtime metadata only) — insufficient for launch

CURSOR_AUTH_REQUIRES_REAL_HOME = yes (at current host state without CURSOR_API_KEY)

---

## LIVE HARNESS METHOD

Disposable root: `/tmp/gcec-conf03-EXD6BE/`
- `control-home/`, `A-home/`, `B-home/` (0700) with empty `.config` / `.cache` / `.local/share`
- `A-workspace/`, `B-workspace/` harmless local git seeds
- No copy / symlink / mount of real HOME content

Policy consumption:
`tsx` temporary harness imports committed `buildMutatingCursorConfinementEnv` from Product HEAD → then overrides HOME/XDG on a fresh env object.

Order:
`process.env` → `buildMutatingCursorConfinementEnv(...)` → ephemeral HOME/XDG overrides → probes / Cursor spawn (`shell:false`, argv `agent --print --workspace --trust --sandbox enabled`).

Layers:
1. CURRENT-HOME CONTROL (CONF-02A only)
2. EPHEMERAL-HOME CONTROL (CONF-02A + empty HOME/XDG) for A/B/control
3. LIVE Cursor A + B under ephemeral HOME

---

## SECRET-SAFETY

- No tokens/passwords/keys/hosts.yml contents printed or persisted
- Keychain probe: `security … -w >/dev/null 2>&1`; exit only
- gh API body discarded; permission query only if auth succeeded (it did not under isolated HOME)
- Cursor stderr scrubbed; auth message classified without values
- Review Pack contains booleans / exit codes / env **names** only

---

## CURRENT-HOME CONTROL RESULTS

Under CONF-02A env with real HOME (comparison baseline):

| Probe | Result |
|---|---|
| CURRENT_HOME_GH_API_AUTH_OK | **yes** |
| CURRENT_HOME_GH_PUSH_PERMISSION | **true** |
| CURRENT_HOME_KEYCHAIN_GITHUB_SECRET_RETRIEVABLE | **yes** |
| CURRENT_HOME_GH_HOSTS_READABLE | **yes** |
| normal git credential secret | no |
| SSH_AUTH_SOCK | absent |
| public GitHub network | yes |

HOST STATE DRIFT vs prior handoff expectation (yes/true/yes/yes): **NONE** — matches.

---

## EPHEMERAL HOME/XDG CONFIG

Per probe home (`A-home` / `B-home` / `control-home`):
- HOME = `/tmp/gcec-conf03-EXD6BE/<name>`
- XDG_CONFIG_HOME = `$HOME/.config`
- XDG_CACHE_HOME = `$HOME/.cache`
- XDG_DATA_HOME = `$HOME/.local/share`
- Empty; mode 0700; no real-HOME content
- GH_TOKEN / GITHUB_TOKEN / SSH_AUTH_SOCK absent
- GIT_CONFIG_GLOBAL=/dev/null ; GIT_CONFIG_SYSTEM=/dev/null

---

## EPHEMERAL-HOME GH RESULTS

A/B/control parity:

| Probe | Result |
|---|---|
| GH hosts readable | **no** |
| GH auth valid | **no** |
| GH API auth OK | **no** |
| GH push permission | **unknown** (no authenticated API) |

Q1 PASS indicator met.

---

## EPHEMERAL-HOME KEYCHAIN RESULT

A/B/control parity:

| Probe | Result |
|---|---|
| security CLI | PRESENT |
| `/usr/bin/security` absolute executable | **yes** |
| KEYCHAIN_GITHUB_SECRET_RETRIEVABLE | **no** (exit 44) |

Q2 safe PASS indicator met for mandated probe shape.

---

## NORMAL GIT CREDENTIAL RESULT

Isolated HOME:
- credential.helper = none
- ISOLATED_HOME_GIT_CREDENTIAL_USERNAME_RETURNED = no
- ISOLATED_HOME_GIT_CREDENTIAL_SECRET_RETURNED = no

Expected; CONF-02A + empty HOME.

---

## SSH LIGHT CHECK

Isolated HOME:
- SSH_AUTH_SOCK absent
- READABLE_DEFAULT_SSH_PRIVATE_KEY = no (under ephemeral HOME only; real HOME SSH not inspected)

---

## CURSOR A AUTH VIABILITY

- CURSOR_A_EXIT_CODE = 1
- CURSOR_A_AUTH_FUNCTIONAL = **no**
- CURSOR_A_STDERR_CLASSIFICATION = **auth**
- Duration ~390ms (fail-fast auth)

---

## CURSOR B AUTH VIABILITY

- CURSOR_B_EXIT_CODE = 1
- CURSOR_B_AUTH_FUNCTIONAL = **no**
- CURSOR_B_STDERR_CLASSIFICATION = **auth**
- Duration ~409ms
- A/B equivalent from env-policy perspective

---

## CURSOR AUTH ENV PRESENCE

NAMES present (boolean / names only — no values):
- CURSOR_AGENT
- CURSOR_AGENT_STORE_FILES_DIR
- CURSOR_AGENT_STORE_SHARED_PATHS
- CURSOR_BIN
- CURSOR_CONVERSATION_ID
- CURSOR_LAYOUT
- CURSOR_REQUEST_ID
- CURSOR_RIPGREP_PATH
- CURSOR_WORKSPACE_LABEL

Absent names:
- CURSOR_API_KEY
- CURSOR_API_ENDPOINT

EXPLICIT_CURSOR_AUTH_ENV_PRESENT = yes (metadata names) but **usable API credential env absent**
CURSOR_AUTH_REQUIRES_REAL_HOME = yes
CURSOR-AUTH SEPARATION = **NOT PROVEN / GAP**

---

## NETWORK RESULT

ISOLATED_HOME_PUBLIC_GITHUB_NETWORK = yes
(Expected; not the question of this probe.)

---

## FEASIBILITY MATRIX

| CONTROL | CURRENT HOME | EPHEMERAL HOME | INTERPRETATION |
|---|---|---|---|
| gh hosts readable | yes | **no** | HOME channel closed |
| gh auth valid | yes | **no** | HOME channel closed |
| gh API auth valid | yes | **no** | HOME channel closed |
| gh repo push permission | true | unknown (no auth) | write path via gh unavailable |
| macOS Keychain GitHub secret retrievable | yes | **no** | default Keychain lookup closed under empty HOME |
| normal git credential secret | no | no | remains closed |
| SSH agent | absent | absent | remains closed |
| default SSH identity (HOME-local) | no (real) / n/a | no | empty HOME |
| Cursor A auth functional | (prior live yes w/ real HOME) | **no** | needs real-HOME login or CURSOR_API_KEY |
| Cursor B auth functional | (prior live yes w/ real HOME) | **no** | same |
| public GitHub network | yes | yes | egress remains |

Derived classification: **OUTCOME C**

Remote-write auth channels exercised in prior FAIL are closed under ephemeral HOME/XDG for both gh and the mandated Keychain probe — but Cursor cannot run without real-HOME auth material or an explicit CURSOR_API_KEY that was **not** already present and was **not** extracted.

---

## PRODUCT MUTATION
NONE

## PRODUCT COMMIT
NONE

## PRODUCT PUSH
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

## EVIDENCE RESERVE
ACCEPTED NON-BLOCKING

## REAL TOOL-CONFINEMENT RESERVE
OPEN

---

## OPTIONS IF STRUCTURAL GAP

Not primary here (Keychain mandated probe closed). For Cursor-auth separation design only — analyzed, **not adopted**:

1. Inject only `CURSOR_API_KEY` (already-supported CLI channel) into ephemeral-HOME child env without copying real HOME — requires Morris GO to obtain/inject key via a non-Product, non-extracted-from-disk approved path
2. Separate Cursor auth store path mount/injection that is not full real HOME (design work; not this cycle)
3. If future probes show Keychain bypass via explicit keychain path despite empty HOME → escalate to OS identity/network/sandbox (Outcome B path) — **not observed** under mandated probe

Do **not** implement ephemeral HOME in Product yet: Cursor viability gap blocks Outcome A readiness.

---

## RECOMMENDATION

Select **OUTCOME C**.

Do **not** authorize Product ephemeral-HOME implementation yet.

Do **not** authorize REAL.

Next Morris decision: design Cursor-auth separation (explicit env credential injection vs other bounded store) while keeping ephemeral HOME/XDG as the candidate security boundary for gh + default Keychain lookup — then re-run a combined feasibility/live re-preflight before any Product GO.

---

## DECISIONS REQUIRED FROM MORRIS

1. Accept Outcome C for D-GCEC-CONF-03 host feasibility.
2. Choose Cursor-auth separation approach (explicit `CURSOR_API_KEY` injection path vs alternate) **without** copying real HOME.
3. Defer Product CONF-03 implementation until Cursor viability is proven under the same isolation.
4. Keep REAL A→B blocked.

---

## ANTI-CLAIMS

- Does **not** authorize Product ephemeral-HOME implementation
- Does **not** claim READY FOR REAL
- Does **not** claim Cursor-auth separation proven
- Does **not** claim PATH removal of `security` is a security boundary (binary remains at `/usr/bin/security`)
- Does **not** claim exhaustive Keychain isolation against every alternate `security` invocation shape (only mandated probe under isolated HOME)
- Did **not** copy Cursor/gh/SSH credentials from real HOME
- Did **not** mutate Keychain, gh login state, Product, or proof repo
- Did **not** run GCEC REAL A→B / StartExecution REAL / actual push

---

## FINAL VERDICT

**OUTCOME C:**

FEASIBILITY CONDITIONAL —
REMOTE AUTH CHANNELS CLOSED /
CURSOR AUTH FAILS UNDER EPHEMERAL HOME /
CURSOR-AUTH SEPARATION DESIGN REQUIRED

Q1 (gh HOME): closed.
Q2 (Keychain mandated probe): closed under empty HOME/XDG.
Q3 (Cursor): fails — no `CURSOR_API_KEY` present; requires real-HOME `agent login` state.
→ Security barrier looks effective for the residual channels from CONF-02A FAIL, but Product hardening cannot proceed until Cursor auth is separated without restoring real HOME.
