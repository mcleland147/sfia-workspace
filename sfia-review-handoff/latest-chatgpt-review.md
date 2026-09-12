# SFIA STUDIO — GCEC
## D-GCEC-CONF-05 — STRUCTURAL EXECUTOR CONFINEMENT ARCHITECTURE QUALIFICATION
## CONTROL-PLANE AUTH ≠ MUTATING TOOL DOMAIN
## CYCLE 6 — ARCHITECTURE TECHNIQUE
## ZERO PRODUCT IMPLEMENTATION — ZERO GCEC REAL

TIMESTAMP: 2026-09-12T09:50:03Z

GO MORRIS:
D-GCEC-CONF-05 ARCHITECTURE QUALIFICATION CONSUMED

CYCLE:
6 — Architecture technique

TYPE:
EVOL

PROFILE:
CRITICAL

CKC:
`method/.../pilots/03-architecture-technique.md` — status **candidate** / cognitive guidance only — authority NONE

Architecture decision authority:
**MORRIS ONLY** (this pack recommends; does not adopt)

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
`918304c9d48b1438820e20996c61c703ec8cbd2f`

Product state:
`projects/sfia-studio` CLEAN throughout.

Campaign gates unset. No Product edits. No GCEC REAL.

---

## SOURCES

- Cycle / method / guardrails / v2.5 method candidate
- CKC pilot `03-architecture-technique.md` (candidate)
- Convergence doctrine / roadmap / product-completion cadrage
- Framing 34 / 35
- Input handoff CONF-04 @ `918304c9…`
- Implementation inspection:
  - `mutatingCursorConfinementEnv.ts`
  - `studioCursorRealLaunchGateway.ts`
  - `cursorCliLaunchGateway.ts`
  - `nodeCursorProcessRunner.ts`
  - A/B AgentDescriptors (`m4BoundedDocsWriteCursorAgent`, `m4BoundedLocalCommitCursorAgent`)
  - CONT-01 resolver (`resolvePreCommitWorkspaceContinuation.ts`)

---

## CKC: 03-architecture-technique candidate

Posture applied:
- ≥2 meaningful options compared
- NFR linkage explicit
- security first-class
- alternatives + reversibility explicit
- **no code implementation**
- recommendation ≠ decision

Maturity target: `suffisante_pour_decider` for Morris gate selection (not for Product delivery).

---

## CONVERGENCE PRE-CHECK

Build Doctrine: VALIDATED / ACTIVE
Roadmap: VALIDATED / ACTIVE LIVING
Product Completion: COMPLETE / CLOSED
C1: VALIDATED / INTEGRATED
Runtime v3: NON ADOPTED

Relevant decisions preserved as constraints:
D-GCEC-09 (Cursor = mutation executor) · D-GCEC-10 · D-GCEC-11 · D-GCEC-13 · D-GCEC-15 · CONT-01 · AGENT-01 · CONF-01/02/02A · CONF-03 Outcome C · CONF-04 Outcome C · EVID-01 NON-BLOCKING

Trajectory position:
deterministic GCEC → REAL docs-write → CONT-01 → local-commit deterministic → confinement quals → **THIS architecture decision pack** → implementation only after Morris selection → … → only then potential REAL A→B.

---

## PROVEN CONF-02A/03/04 FACTS

**CONF-02A:** inherited GH tokens / SSH agent / askpass / Git config injection stripped; system/global Git config neutralized; normal git credential path closed for child.

**CONF-03:** empty ephemeral HOME/XDG closes gh auth/API, mandated default Keychain GitHub lookup, normal Git credential; public network remains; Cursor stored login fails without real HOME / `CURSOR_API_KEY`.

**CONF-04:** generic launch env reaches A+B mutating Shell; `CURSOR_API_KEY` is supported auth input with precedence over stored login; no approved valid key available → exact API-key Shell visibility NOT PROVEN; generic propagation makes env injection high-risk; Cursor config surface same-user readable; **no supported isolated Cursor auth-store selector**.

Core problem restated:
Cursor control plane needs authentication.
Mutating tools must not obtain that authentication secret.
CONTROL-PLANE SECRET DOMAIN ≠ TOOL SECRET DOMAIN.

---

## CURRENT EXECUTION TOPOLOGY

Factual topology from Product + CLI evidence:

```
Studio server (Node, host user)
  → StudioCursorRealLaunchGateway / CursorCliLaunchGateway
      (authority ACL: enablement, profile, EC slice, AgentCapability, workspace prepare/CONT-01)
  → NodeCursorProcessRunner.spawn(shell:false)
      executable=cursor-agent
      cwd=managed worktree
      env=buildMutatingCursorConfinementEnv(…) for A/B
      argv=agent --print --workspace <wt> --trust --sandbox enabled [+ instruction]
  → cursor-agent process (SAME OS user as Studio)
      → Cursor INTERNAL tool/Shell invocation (OPAQUE / UNKNOWN internals)
          → filesystem / git in worktree (and host tools reachable by default)
```

| Domain | OS user | HOME/XDG | Launch env | Network | FS | Credentials | Parent/child |
|---|---|---|---|---|---|---|---|
| Studio gateway | host user | host | server env | host | Product + managed wt | none intended | parent |
| cursor-agent control plane | **same user** | inherited (today real HOME; ephemeral breaks login) | CONF-02A child env | needed for Cursor API | workspace + host-readable | Cursor login store and/or `CURSOR_API_KEY` | child of Studio |
| Cursor Shell/tools | **same user** (no CLI selector for other uid) | same as agent | **inherits launch env** (CONF-04) | public egress available | same-user readable host FS (sandbox not proven boundary) | can discover gh/Keychain under real HOME; under ephemeral HOME those closed but Cursor auth channel remains the problem | child of cursor-agent (UNKNOWN exact spawn) |

Where authority is enforced today:
- Gateway / EC / AgentCapability / Confirmation / runtime guardrails **before** spawn
- Instruction text + profile argv (prompt) — **defense-in-depth only**, not technical secret boundary
- CONF-02A env strip — Git/GitHub inherited channels, **not** Cursor auth isolation

Where secret isolation can realistically be inserted **without** Cursor cooperation:
- Only at **outer** spawn (env/argv/cwd/HOME of entire cursor-agent tree)
- **Cannot** currently insert a distinct tool-domain boundary inside Cursor (no tool runner hook / scrub / broker)

Cursor-internal process mechanics: **UNKNOWN** (not documented; not interceptable by Studio ProcessRunner).

---

## NFRs

| ID | Requirement | Architecture implication |
|---|---|---|
| NFR-01 AUTH ISOLATION | Cursor auth unavailable to mutating tools | Same-process-tree env/argv/file auth **fails** given CONF-04 + same-user readability |
| NFR-02 GIT/GITHUB ISOLATION | No host GitHub/Git credential reacquisition | Ephemeral HOME + CONF-02A can close many channels; insufficient alone for NFR-01 |
| NFR-03 AUTHORITY PRESERVATION | EC ∩ Capability ∩ Confirmation ∩ guardrails | Isolation may only reduce capability |
| NFR-04 CURSOR REMAINS EXECUTOR | D-GCEC-09 | Alternate executor = new Morris gate |
| NFR-05 NO SECOND PRODUCT ENGINE | No parallel FSM/scheduler/obligation | Low-level wrapper OK only if no new business semantics |
| NFR-06 ATTEMPT/CONT COMPAT | D-GCEC-15 / AGENT-01 / CONT-01 | Workspace ownership/permissions must remain attachable |
| NFR-07 FAIL CLOSED | Confinement fail → no launch | Required of any future design |
| NFR-08 PROVABILITY | Deterministic + live security proof | Required before REAL |
| NFR-09 REVERSIBILITY | Removable without business-state migration | Prefer |
| NFR-10 NO SECRET IN ARTIFACTS | Logs/Evidence/Reports/Git | Hard |
| NFR-11 CURRENT PLATFORM | macOS + current Cursor CLI | Design against `2026.09.10-fd3934a` facts |
| NFR-12 LOWEST COMPLEXITY | Bounded adaptation > platform build | Prefer — but cannot invent unsupported Cursor features |

NFR set is the **decision criteria** (PASS as criteria, not as claimed implementation PASS).

---

## THREAT MODEL

Assume mutating Shell is adversarial within OS permissions. Do **not** rely on prompt obedience.

| Threat | Current technical block? |
|---|---|
| Read inherited env | **NO** — CONF-04 sentinel yes |
| Read HOME files | **NO** under real HOME; ephemeral HOME closes many GitHub stores but breaks Cursor login |
| Read parent cmdline (`ps`) | **NO** for same-user — `ps eww` can expose env of own processes |
| Invoke `/usr/bin/security` | Closed under empty HOME default lookup (CONF-03); absolute binary still present |
| Invoke gh/git/ssh/curl | Tools present; auth depends on HOME/network |
| Traverse readable FS | **NO** — outside-workspace readable in prior probes; `--sandbox enabled` not proven FS authority |
| Public network | **YES available** — expected |
| Write in authorized scope | Intended for A/B effects |
| Discover credentials outside workspace | Residual under real HOME; reduced under ephemeral HOME |

Architecture must block NFR-01 threats with a **technical** mechanism, not instruction text.

---

## CURRENT CURSOR PLATFORM CAPABILITIES

Version: `2026.09.10-fd3934a` (`/Users/morris/.local/bin/cursor-agent`)

Fresh help qualification:

| Feature | Supported now? |
|---|---|
| tool process isolation (distinct uid/domain) | **NOT SUPPORTED** |
| tool environment filtering / secret scrub | **NOT SUPPORTED** (no flags) |
| credential broker / token socket / stdin / fd auth | **NOT SUPPORTED** |
| secret masking from tools | **NOT SUPPORTED** |
| custom Shell/tool runner hook | **NOT SUPPORTED** |
| per-tool sandbox distinct from agent | **UNKNOWN** / not exposed |
| child network policy | **NOT SUPPORTED** |
| process identity separation | **NOT SUPPORTED** |
| auth store path selector | **NOT SUPPORTED** (CONF-04) |
| MCP-only execution replacement for A/B mutating Shell | **NOT** a substitute for governed Shell/git.commit profile |
| tool allow/deny | only `--force`/`--yolo` / mode ask|plan — **not** secret isolation |
| `--sandbox enabled\|disabled` | present; prior live probes showed it is **not** the auth/FS authority boundary |

Host: `sandbox-exec` **present** (`/usr/bin/sandbox-exec`); system profiles exist. **Not configured/applied** in this cycle (forbidden).

---

## CURRENT ASSET CLASSIFICATION

| Asset | Class |
|---|---|
| StudioCursorRealLaunchGateway | **KEEP** (authority ACL) / future **ADAPT** only at spawn boundary if Morris selects a design |
| CursorCliLaunchGateway | **KEEP** |
| NodeCursorProcessRunner | **KEEP** (spawn shell:false) — cannot alone solve tool-domain split |
| buildMutatingCursorConfinementEnv | **KEEP** (Git/GitHub env hygiene) — insufficient for Cursor auth isolation |
| Agent descriptors A/B | **KEEP** |
| ExecutionContract / ExecutionAttempt / AgentCapability | **KEEP** / **FREEZE** semantics |
| CONT-01 workspace resolver | **KEEP** |
| Prompt-as-confine | **RETIRE LATER** as security authority (already non-authoritative) |
| Cursor CLI as mutating executor | **KEEP** under D-GCEC-09 until Morris reopens |

Smallest adaptation surface if a Cursor-preserving design existed: gateway spawn env/HOME + fail-closed checks.
**No such supported design currently meets NFR-01.**

---

## OPTION A — PROVIDER-NATIVE SECRET/TOOL ISOLATION

Intent: Cursor-supported scrub/broker/isolated tool runner.

Current qualification: **NOT SUPPORTED**

Disposition: **REJECT**

Why: CONF-04 + fresh CLI help — no store selector, no tool-env filter, no broker/socket/fd auth, no documented secret masking.

Revisit only if provider ships a supported mechanism with a proof plan.

---

## OPTION B — PROCESS / OS TOOL-DOMAIN ISOLATION

Intent: authenticated control plane; mutating commands in lower-privilege domain (empty HOME, no control-plane auth, restricted FS).

Can Studio redirect Cursor Shell into such a domain without a second engine?
- ProcessRunner controls **only** outer `cursor-agent` spawn.
- Shell spawn is **Cursor-owned** and opaque.
- No supported hook to replace/mediate Shell.
- Achieving tool-domain isolation would require either Cursor internals change, or a **parallel agent/executor** that performs mutations outside Cursor tools.

Disposition: **REJECT** under current platform (unsupported interception).

Note: a future Studio-owned “effect applicator” that executes already-authorized EC effects **without** Cursor Shell would be Option F (alternate executor), not Option B.

---

## OPTION C — OS SANDBOX / MACOS PROCESS POLICY

Intent: seatbelt/sandbox/uid restrictions around mutating domain.

Critical limitation:
Policy applied to **entire** `cursor-agent` tree cannot distinguish control-plane vs Shell children **without Cursor cooperation**.
- Deny Keychain/network for whole tree → risks breaking Cursor authentication/API.
- Allow Cursor network + inject `CURSOR_API_KEY` into tree → Shell still inherits secret (NFR-01 fail) even if GitHub egress denied.

`sandbox-exec` present on host = capability existence only; **not** a qualified product design.

Disposition: **CONDITIONAL** as possible **compound assist** for NFR-02/network after NFR-01 is solved another way; **REJECT** as sole Cursor-preserving NFR-01 solution.

---

## OPTION D — NETWORK-SEPARATED EXECUTION DOMAIN

Intent: control-plane reaches Cursor API; tools denied GitHub/arbitrary net.

Explicit: **NETWORK DENY ALONE ≠ SECRET ISOLATION.**

If `CURSOR_API_KEY` (or equivalent) remains tool-visible, tools can still exfiltrate/abuse the credential on any still-permitted path (including Cursor API endpoints).

Disposition: **CONDITIONAL** compound control only; **REJECT** alone.

---

## OPTION E — SEPARATE EXECUTION IDENTITY / ENVIRONMENT

Intent: separate OS identity / VM / container.

Cursor-preserving split (control-plane identity ≠ tool identity): **NOT SUPPORTED** by current CLI (tools not configurable to other uid).

Whole-agent container with ephemeral HOME + API key:
- can help NFR-02 (no host Keychain/gh mounts)
- **still fails NFR-01** if key is in agent env inherited by Shell (CONF-04 model)
- CONT-01 worktree ownership/permissions across host↔container bridge adds operability risk; durable identity persistence not required for analysis but would escalate if adopted poorly

Disposition: **REJECT** for NFR-01 under current Cursor topology; may re-enter only as host for a future design that already solves secret isolation.

No user/container/VM created this cycle.

---

## OPTION F — ALTERNATE EXECUTOR

Cursor ceases to be mutation executor for some/all effects.

Conflicts with **D-GCEC-09** unless Morris opens a new architecture decision.

Disposition: **ESCALATION ONLY / NOT SELECTABLE UNDER CURRENT AUTHORITY**

This pack does **not** design migration. It identifies that meeting NFR-01 may require this Morris gate if Cursor-preserving paths remain unsupported.

---

## SECRET CHANNEL ANALYSIS

| Channel | Shell can read? | `ps` infer? | Backing store readable? | Cred service query? | Exfil over net? | Technical block today? | Proof |
|---|---|---|---|---|---|---|---|
| env (`CURSOR_API_KEY`) | **yes** (generic env proven) | possible same-user | n/a | n/a | yes if egress | **NO** | CONF-04 Q1 |
| argv `--api-key` | via `ps` same-user | **yes** | n/a | n/a | yes | **NO** | host `ps` capability |
| readable auth file / `~/.cursor` | **yes** same-user | n/a | **yes** (CONF-04) | n/a | yes | **NO** | CONF-04 Q3 |
| Keychain | under real HOME yes; ephemeral default lookup no | n/a | Keychain DB under HOME | `security` | yes | ephemeral helps GitHub lookup; not Cursor API key | CONF-03 |
| fd / pipe / socket broker | n/a | n/a | n/a | n/a | n/a | **channel not offered by CLI** | help scan |
| provider-native scrub | n/a | n/a | n/a | n/a | n/a | **not supported** | help + CONF-04 |

**Conclusion:** every currently available Cursor auth channel that Studio can supply is in the **same secret domain** as mutating Shell under the current topology. NFR-01 cannot be met with supported Cursor-preserving mechanisms.

---

## NO-PARALLEL-ENGINE ANALYSIS

| Option | Parallel-engine risk |
|---|---|
| A | none (provider feature) — unsupported |
| B | high if Studio invents parallel mutation agent to bypass Cursor Shell |
| C/D/E | low if only OS policy around existing agent — but don't solve NFR-01 |
| F | **by definition** replaces mutation executor — new Morris architecture decision; must not fork EC/Attempt/FSM |

Low-level isolation wrapper that only enforces already-authorized effects without new business semantics would **not** automatically be a second engine — but building mutation outside Cursor **is** Option F, not a silent Option B.

---

## AUTHORITY MODEL

Required invariant preserved:

valid human authorization
∩ ExecutionContract scope
∩ AgentCapability
∩ Confirmation
∩ runtime guardrails
= effective authority

Isolation may **REDUCE** capability only.
If confinement cannot be established → **fail closed** before mutating launch (NFR-07).
No candidate may widen authority.

---

## CONT-01 IMPACT

Current CONT-01: Attempt B attaches to prior A workspace via resolver + workspace port; same host user; SHA continuity; no new persistence in this architecture cycle.

| Option | CONT-01 |
|---|---|
| A | compatible if provider-local |
| B/F (new executor) | must re-prove attach/ownership |
| C | likely OK if same uid |
| D | OK |
| E (cross-identity/container) | **risk** — ownership/permissions/cleanup; avoid new durable workspace identity persistence (CONF-01 escalation) |

This cycle: **NO new persistence designed**. If a future selection required durable workspace identity schema → STOP PERSISTENCE ESCALATION (would be a separate GO). Not triggered by recommendation (no implementation).

CONT-01 compatibility of recommendation path: **N/A pending Morris executor-gate** — current Cursor-preserving path does not yield a viable NFR-01 design.

---

## AGENT-01 IMPACT

A/B descriptors + capability allowlists remain authoritative.
Any future isolation must not widen caps.
Alternate executor (F) would require new AgentCapability/adapters under a distinct Morris decision — not under this GO.

AGENT-01 compatibility of Cursor-preserving rejects: **preserved** (no change).

---

## OPERABILITY

| Option | Startup | Dev setup | macOS | CI portability | Troubleshoot | Cleanup | Observability | Cursor upgrade sensitivity | Burden |
|---|---|---|---|---|---|---|---|---|---|
| A | LOW | LOW | LOW | LOW | LOW | LOW | MED | HIGH (provider) | LOW |
| B | MED–HIGH | MED | MED | UNKNOWN | HIGH | MED | MED | HIGH | HIGH |
| C | MED | HIGH | LOW (host) | HIGH risk | HIGH | MED | LOW–MED | MED | HIGH |
| D | MED | MED | MED | MED | MED | LOW | MED | MED | MED |
| E | HIGH | HIGH | MED | HIGH | HIGH | HIGH | MED | HIGH | HIGH |
| F | HIGH | HIGH | MED | MED | HIGH | MED | MED | MED | HIGH |

No fabricated benchmarks.

---

## REVERSIBILITY

| Option | Reversible? | Vendor/host specific? | Exit path |
|---|---|---|---|
| A | yes if optional | Cursor vendor | disable feature |
| B | depends | host+Cursor | remove mediator |
| C | yes if profiles external | **macOS-specific** | remove sandbox wrapper |
| D | yes | host/net | remove net policy |
| E | costly | host/virt | destroy env |
| F | costly | architecture | restore D-GCEC-09 Cursor executor |

Debt owner for any future selection: Studio execution-attempt infrastructure + Security/RSSI cycle lineage.

---

## DEBT / EXIT

No temporary architecture adopted.
Current debt: REAL Tool-Confinement Reserve remains OPEN; env-based Cursor auth is known high-risk; prompt confinement is non-authoritative.

Exit condition for Cursor-as-executor under NFR-01: provider-native isolation **or** Morris-authorized structural executor change (F) with full proof.

---

## SECURITY PROOF PLAN

For any **future** viable option (after Morris selection + implementation GO), live A+B proof must show:

1. Cursor auth functional
2. Cursor auth secret unavailable to tool (boolean probes; never print values)
3. gh auth unavailable
4. Keychain GitHub lookup unavailable
5. normal Git credential unavailable
6. SSH auth unavailable
7. outside-workspace access controlled per design
8. network behavior matches design
9. authorized local mutation still works
10. no Product remote mutation / unauthorized proof-repo mutation

**Current pack:** no viable Cursor-preserving candidate → no implementation proof scheduled; proof plan remains the exit bar for whatever Morris selects next.

---

## DECISION MATRIX

| OPTION | SUPPORTED | SECRET ISOLATION | CURSOR AUTH | TOOL ISOLATION | GIT/GH | CONT-01 | AGENT-01 | NEW PERSIST | PARALLEL RISK | REVERSIBLE | COMPLEXITY | PORTABILITY | PROOFABLE | MAIN RESERVE | DISPOSITION |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A provider-native | no | would | would | would | would | yes | yes | no | low | high | low | high | high if shipped | provider gap | **REJECT** |
| B tool-domain split | no | design intent | yes | unsupported | yes | risk | yes | no | high if fake agent | med | high | low | unknown | Cursor opacity | **REJECT** |
| C OS sandbox | partial host | **fails alone** | risk if whole-tree | no split | assist | yes | yes | no | low | med | high | low macOS | med | NFR-01 | **CONDITIONAL assist** |
| D network deny | partial | **fails alone** | ok | no | assist | yes | yes | no | low | high | med | med | med | NFR-01 | **CONDITIONAL assist** |
| E separate identity | no for tool split | fails if same env model | ok in env | unsupported split | assist | risk | yes | risk | med | low | high | low | med | NFR-01 | **REJECT** for NFR-01 |
| F alternate executor | escalation | possible by design | n/a Cursor | n/a | possible | must re-prove | must adapt | maybe | **yes by nature** | med | high | med | high if designed | D-GCEC-09 | **ESCALATION ONLY** |

---

## RECOMMENDATION

**No Cursor-preserving structural confinement option currently meets hard NFRs at qualified design level.**

Recommend Outcome C stop-state for Morris:

Do **not** implement ephemeral HOME + `CURSOR_API_KEY` env injection as security architecture.
Do **not** treat OS sandbox or network deny as sufficient alone.
Do **not** silently invent a parallel mutation agent under “Option B”.

Next required Morris gate is a **structural executor change decision** (reopen/amend D-GCEC-09 or accept a provider-wait / residual-risk posture explicitly — residual risk **not** recommended under CRITICAL Security posture).

---

## VIABLE FALLBACK

**NONE** that is both Cursor-preserving and NFR-01 compliant under current CLI facts.

Compound assists (C/D) remain available **only after** NFR-01 is solved.

Provider-native (A) is the only low-complexity Cursor-preserving hope — currently unsupported; watch-only.

---

## REJECTED OPTIONS

- A: unsupported
- B: unsupported tool mediation without second engine
- E: cannot split tool identity; whole-env still fails NFR-01
- Env-injected API key / argv API key / readable auth-store copy: fail NFR-01 (CONF-04)
- Prompt obedience as boundary: rejected by adversarial posture

---

## MORRIS DECISION PACK

### A. Problem
Mutating Cursor Shell shares the control-plane secret domain. Studio cannot insert a tool-only boundary with current Cursor CLI.

### B. Established evidence
CONF-02A/03/04 + topology + CLI help + same-user `ps`/readable `~/.cursor` + opaque Shell ownership.

### C. Hard constraints
NFR-01…12; D-GCEC-09; no second engine; no new persistence in this cycle; fail closed; provability.

### D. Options
A–F analyzed above.

### E. Rejected
A, B, E as NFR-01 Cursor-preserving solutions; C/D alone; env/argv/file auth injection.

### F. Trade-off matrix
See decision matrix.

### G. Recommended option
**None implementable under current authority that preserves Cursor and meets NFR-01.**
Recommend **STOP / structural executor gate**.

### H. Viable fallback
None Cursor-preserving; Option F escalation only if Morris authorizes.

### I. Reversibility / debt
Reserve remains OPEN; no architecture debt added this cycle (qualification only).

### J. Implementation impact if later adopted
Depends on Morris gate:
- If provider feature appears → adapt gateway spawn + live proof
- If Option F → new adapter under EC/Attempt; CONT-01/AGENT-01 re-proof; still no parallel FSM

### K. Security proof required after implementation
Section “SECURITY PROOF PLAN” A+B live bar.

### L. Gates required
1. Morris structural decision (this pack)
2. Distinct implementation GO
3. Deterministic review + local commit
4. Live security re-preflight
5. Distinct REAL A→B GO

### M. Explicit Morris decision requested
See below.

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

## GCEC REAL
ZERO

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

## DECISION REQUIRED FROM MORRIS

**D-GCEC-CONF-05 — STRUCTURAL EXECUTOR GATE CANDIDATE FOR MORRIS DECISION**

Recommended:
**STOP — CURRENT CURSOR MUTATING EXECUTOR CANNOT MEET SECRET-ISOLATION BAR WITHOUT STRUCTURAL EXECUTOR CHANGE**

Fallback:
**NONE** (Cursor-preserving NFR-01)

Why:
Studio can only confine the outer `cursor-agent` process; Cursor owns Shell spawn; launch env reaches tools (CONF-04); no provider-native scrub/broker/store selector exists; same-user auth channels remain tool-readable; OS network/sandbox cannot separate control-plane secrets from Shell without breaking or bypassing NFR-01.

Morris must choose among (examples, not adopted here):
1. Wait for / require provider-native tool secret isolation (Option A future)
2. Open a new decision to amend D-GCEC-09 (Option F alternate executor)
3. Explicitly accept residual Cursor-secret exposure under CRITICAL posture (**not recommended**)

This recommendation is **not** an architecture adoption and **not** an alternate-executor authorization.

---

## ANTI-CLAIMS

- Does **not** claim ARCHITECTURE ADOPTED
- Does **not** claim PRODUCT IMPLEMENTATION AUTHORIZED
- Does **not** claim CONFINEMENT PROVEN
- Does **not** claim READY FOR REAL
- Does **not** claim REMOTE WRITE IMPOSSIBLE
- Does **not** claim REAL git.commit PROVEN / REAL_CONTINUATION_GAP CLOSED / GCEC-PUSH READY
- Does **not** claim runtime v3 ADOPTED
- Does **not** authorize Option F
- Architecture recommendation ≠ decision

---

## FINAL VERDICT

**OUTCOME C:**

STOP —
CURRENT CURSOR MUTATING EXECUTOR CANNOT MEET SECRET-ISOLATION BAR
WITHOUT STRUCTURAL EXECUTOR CHANGE

This outcome does **not** itself authorize an alternate executor.
It opens the required Morris structural gate before any Product confinement implementation or REAL A→B decision.
