# Review Pack FULL — DIAGNOSE M4 FIRST REAL TIMEOUT — NO REAL AGENT REPROOF

## A. Métadonnées

| Champ | Valeur |
| --- | --- |
| Timestamp | 2026-08-14 11:34:49 CEST (+0200, Europe/Paris) |
| GO consumed | GO MORRIS — DIAGNOSE M4 FIRST REAL TIMEOUT — NO REAL AGENT REPROOF |
| Repository | mcleland147/sfia-workspace |
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off` |
| Local branch | `docs/sfia-studio-m4-post-merge-roadmap` |
| Local HEAD | `91fa0eb25fe29e833bd212a8f9097c2c039a3c97` |
| origin/main | `3575c8863d8a13b610dbfde96a33426a620b2c56` |
| Incoming handoff SHA | `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` (verified via `git ls-remote origin refs/heads/sfia/review-handoff` before use) |
| Incoming handoff file | `sfia-review-handoff/latest-chatgpt-review.md` |
| Incoming handoff message | `docs(review-handoff): publish m4 first real proof` |
| Cycle | 9 — QA / validation |
| Profil SFIA | Critical |
| Typologie v2.4 | RUN |
| CKC | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` candidate 0.1.0 — experimental cognitive guidance — no execution authority |
| Capacités v3 | V3-F05 + V3-F11 + V3-F12 (preuve/gouvernance V3-F14 + V3-F15) |
| Milestone | M4 |
| État entrant | governed launch proven / completion not proven |

## B. Git Truth avant / après

### Avant diagnostic

```
pwd = workspace listed in §A
toplevel = same
branch = docs/sfia-studio-m4-post-merge-roadmap
HEAD = 91fa0eb25fe29e833bd212a8f9097c2c039a3c97
origin/main = 3575c8863d8a13b610dbfde96a33426a620b2c56
status --short = ?? .tmp-sfia-review/
diff name-status = empty
cached name-status = empty
origin/main log -1 = 3575c88 Merge pull request #345 from mcleland147/docs/sfia-studio-m4-post-merge-roadmap
git diff --exit-code origin/main -- projects/sfia-studio/app = IDENTICAL
SFIA_STUDIO_CURSOR_REAL = <unset>
OPS1_CURSOR_REAL = <unset>
handoff remote = 2234931e682bfede4b8515fd1ede7c2e1e2d2d01
```

Local branch matches the last published FIRST REAL local truth. No checkout of main was performed.

### Après diagnostic (avant publication handoff)

```
tracked/staged = empty
untracked = .tmp-sfia-review/** only
APP_TREE_STILL_IDENTICAL vs origin/main
origin/main still 3575c8863d8a13b610dbfde96a33426a620b2c56
SFIA_STUDIO_CURSOR_REAL = <unset>
OPS1_CURSOR_REAL = <unset>
```

STOP conditions Git : none triggered.

## C. Convergence qualification

| Item | Qualification |
| --- | --- |
| Capacité | V3-F05 chaîne conversation→execution + V3-F11 AgentCapability + V3-F12 réversibilité / Gate D |
| Milestone | M4 |
| M1/M2/M3 | SATISFIED (unchanged) |
| M4 Architecture | CLOSED (unchanged) |
| M4 Delivery REAL-OFF | VALIDATED BY MORRIS / MERGED ON MAIN (unchanged) |
| FIRST REAL | PARTIAL — governed launch proven ; governed completion not proven |
| M4 exit proof | NOT SATISFIED |
| M5 | NOT AUTHORIZED |
| runtime v3 | NON ADOPTED |
| StartExecution | KEEP |
| HumanDecision / ExecutionContract path | KEEP |
| Gate D GD-1 | KEEP — REAL consumption already proven ; not reused this cycle |
| NodeCursorProcessRunner spawn/ACK | KEEP |
| worktree isolation | KEEP |
| CREATED/LAUNCHED journal | KEEP / TEMPORARY WITH EXIT |
| bounded RO AgentCapability | KEEP |
| defaultTimeoutMs 60000 | UNQUALIFIED as defect ; see §L — PLAUSIBLE CONTRIBUTING FACTOR |
| Cursor operational-readiness preflight | GAP TO QUALIFY — still true as product capability ; this cycle performed *diagnostic* metadata/status only, not a product preflight promotion |
| Gap ciblé | cause du timeout FIRST REAL |
| Next | ChatGPT/Morris trajectory decision. No implicit reproof. |
| Roadmap file | NOT MODIFIED. Historical Roadmap sentences “FIRST REAL NOT AUTHORIZED / Gate D NOT CONSUMED / Cursor REAL = 0” are superseded by Git/handoff `2234931e…` and this diagnostic. |

## D. FIRST REAL facts revalidés depuis handoff `2234931e…` + artefacts locaux

Source primaire Git : `origin/sfia/review-handoff` @ `2234931e682bfede4b8515fd1ede7c2e1e2d2d01`.
Source locale concordante : `.tmp-sfia-review/m4-first-real/{spawn-observation,completion,stop,journal-reopen-post-timeout,proof-before-start}.json`.

| Fait | Valeur | Niveau |
| --- | --- | --- |
| Launch timestamp | Gate D consumed `2026-08-14T09:04:35.146Z` ; stop `2026-08-14T09:05:35.684Z` | PROVEN (journal + stop.json) |
| Executable | `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` | PROVEN (spawn-observation.json) |
| argv | `agent --print --workspace <isolated-wt> --trust --sandbox enabled <fixed instruction>` | PROVEN |
| PID / processRef | `pid:21247` | PROVEN |
| ACK | StartExecution returned running in 508 ms | PROVEN (handoff) |
| CREATED | `m4fr:5c15b226719b10d2` no processRef | PROVEN |
| LAUNCHED | `m4fr:a36a3981da942eae` processRef `pid:21247` | PROVEN |
| Timeout | timedOut=true durationMs=60030 | PROVEN |
| stdout / stderr | empty / empty | PROVEN (Studio observation) |
| exit | 143 (SIGTERM from product runner) | PROVEN |
| Worktree | isolated under TMPDIR ; HEAD `3575c88…` before/after ; porcelain empty | PROVEN (prior cycle) |
| Parent REAL flags | unset before/after | PROVEN |
| Retry / second StartExecution | 0 | PROVEN |
| Frontier reopen | CREATED+LAUNCHED survive ; disposition REVIEW_REQUIRED | PROVEN |
| Fixture launches | 0 | PROVEN |

Handoff historical sentence that `defaultTimeoutMs=60s` is “insufficient” is **not** treated as demonstrated cause. Only observation retained: completion was not observed before the product 60s window.

## E. Code path M4 observé sur main (`projects/sfia-studio/app` byte-equal to origin/main)

Resolver `resolveCursorBinPath` order (`studioCursorRealLaunchGateway.ts`):

1. `env.SFIA_CURSOR_BIN` (unset in FIRST REAL and in this diagnostic)
2. `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` — first X_OK hit — **this was used**
3. `$HOME/.local/bin/cursor-agent`

Gateway default `timeoutMs = options.defaultTimeoutMs ?? 60_000`. FIRST REAL harness passed `defaultTimeoutMs: 60_000` (product default, not a local override of product code).

Fixed argv constructed by `StudioCursorRealLaunchGateway.launch`:

```
agent
--print
--workspace <workspacePath>
--trust
--sandbox
enabled
<fixed bounded instruction>
```

`NodeCursorProcessRunner`: `spawn(shell:false)`, `stdio: ["ignore","pipe","pipe"]`, invoke resolves on spawn PID (ACK), completion via `awaitCompletion`. Timeout timer sends SIGTERM. stdout/stderr capped 64 KiB.

Desktop wrapper `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` (script, 4798 bytes, SHA-256 `de63d7265e20da15329ee70250c8596851e39d08cfdc814d5f73c00b8c7962a1`): if `$1=agent`, routes to `~/.local/bin/cursor-agent` via `exec ~/.local/bin/cursor-agent "$@"` (does **not** shift `agent`). May install/update cursor-agent if missing/outdated. Status check: `cursor-agent --min-version=2025.10.01 status`. Install/update stdout is redirected to `/dev/null`.

No product code was modified.

## F. CLI Inventory (this machine, 2026-08-14 11:30–11:33 CEST)

macOS 26.6.2 (25G82) arm64 Apple M5.

Cursor Desktop plist: CFBundleShortVersionString `3.15.19` / identifier `com.todesktop.230313mzl4w4u92`.

`command -v cursor` / `command -v cursor-agent`: **absent from PATH** of this diagnostic shell (`~/.local/bin` is not on PATH). Studio used an absolute path; PATH absence is therefore not a FIRST REAL spawn blocker.

| Entrypoint | Path | Type | Version (this cycle) | SHA-256 / notes |
| --- | --- | --- | --- | --- |
| Desktop `cursor` | `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` | bash wrapper 4798 B, X_OK | `--version` → `3.15.19` / `de07bee81cefe43461ebf4f40c3d2d78d15052a0` / `arm64` in 241 ms | `de63d7265e20da15329ee70250c8596851e39d08cfdc814d5f73c00b8c7962a1` |
| `cursor-agent` | `~/.local/bin/cursor-agent` → `~/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursor-agent` | bash wrapper 1074 B | `--version` → `2026.08.11-e8db854` in 424 ms | symlink birth `2026-08-14T11:04:42+0200` |
| Installer shim `~/.local/bin/cursor` | 765 B sh | finds other `cursor` on PATH else routes `agent` | not used by Studio | created `2026-08-14T11:04` |
| Older runtime | `.../versions/2026.07.20-8cc9c0b` | birth 2026-07-22 | **used by PID 21247 session** (log paths) | still present |
| Older runtime | `.../versions/2026.07.17-3e2a980` | birth 2026-07-21 | unused in FIRST REAL log | still present |

Relation Desktop `cursor agent` ↔ `cursor-agent`: **PROVEN by wrapper source**. `cursor agent …` execs `cursor-agent agent …`. Nested command `cursor-agent help agent` documents `Usage: agent agent [options] [prompt...]`.

`SFIA_CURSOR_BIN`: unset.

## G. CLI Compatibility Matrix vs FIRST REAL argv

Primary evidence: local `--help` of the installed `cursor-agent` 2026.08.11-e8db854, plus FIRST REAL session log `cli.run.mode`.

| Élément argv Studio | Classification | Preuve |
| --- | --- | --- |
| subcommand `agent` | SUPPORTED BY INSTALLED CLI | Desktop help Subcommands `agent` ; cursor-agent Commands `agent [prompt...]` |
| `--print` | SUPPORTED BY INSTALLED CLI | help: “Print responses to console (for scripts or non-interactive use)” ; FIRST REAL log `print_flag:true` `headless:true` |
| `--workspace` | SUPPORTED BY INSTALLED CLI | help `--workspace <path-or-name>` ; session cwd = isolated worktree |
| `--trust` | SUPPORTED BY INSTALLED CLI | help `--trust` ; `.workspace-trusted` created `2026-08-14T11:04:37` |
| `--sandbox enabled` | SUPPORTED BY INSTALLED CLI | help choices `enabled`/`disabled` ; log `sandbox.configureSuccess` / `sandbox supported` |

Help also documents `--mode plan|ask` as read-only modes. Studio did **not** pass `--mode`. Help states `--print` “Has access to all tools, including write and shell.” That is a product-argv observation, not a demonstrated timeout root cause.

`--output-format` default `text` ; FIRST REAL log `output_text:true` `stream_partial_output:false`.

## H. Authentication readiness

`cursor-agent help status` (429 ms, exit 0): “View authentication status”. Non-executing metadata. Then `cursor-agent status` (653 ms, exit 0):

```
✓ Logged in as <REDACTED_EMAIL>
```

Classification **now (2026-08-14 11:32 CEST)**: **AUTH READY — PROVEN AT STATUS LEVEL**.

FIRST REAL-time auth (09:04:35Z): **PROVEN operational for the agent turn**, independently of today’s status command:

- session log `auth_ms:24`
- `agent_cli.turn.start` at `2026-08-14T09:04:40.261Z`
- `startup.first_token` `first_token_ms:7568` at `2026-08-14T09:04:44.313Z`
- `api_key_env:false` (no CURSOR_API_KEY in that process)
- `bring_your_own_key:false`

AUTH READY ≠ Agent completion proven.

No login/logout/API key mutation this cycle. No Keychain extraction. Email/userId/authId values are redacted and not copied.

## I. Environment / proxy / network (no secrets)

| Variable | Presence |
| --- | --- |
| SFIA_CURSOR_BIN | unset |
| SFIA_STUDIO_CURSOR_REAL | unset (parent) |
| OPS1_CURSOR_REAL | unset |
| CURSOR_API_KEY | unset |
| CURSOR_AUTH_TOKEN | unset |
| HTTP(S)_PROXY / NO_PROXY / ALL_PROXY | unset |
| CURSOR_CLI_BLOCK_CURSOR_AGENT | unset |

`scutil --proxy`: no HTTP/HTTPS proxy enabled (ExceptionsList `*.local`, `169.254/16` only ; FTPPassive 1).

Agent backend from FIRST REAL log (no credentials): `https://agentn.global.api5.cursor.sh` over HTTP/2 ; first_token success proves that path was reachable for the model turn.

Local user CLI config (values not copied except non-secret policy): `approvalMode=allowlist` ; `sandbox.mode=disabled` in config, **overridden** by argv `--sandbox enabled` per help. FIRST REAL log confirms sandbox helper supported.

## J. Logs / liveness findings (PID 21247 window)

Log directory discovered (not assumed): `$TMPDIR/cursor-agent-logs-501/`.

Canonical FIRST REAL session:

`session-2026-08-14T09-04-36-992Z-21247-1.log` (45172 bytes, last write `2026-08-14T11:05:35.546 CEST` = SIGTERM instant).

Related PIDs (not additional governed Studio spawns):

| PID | Start UTC | Role (interpretation) | Proof level |
| --- | --- | --- | --- |
| 21247 | 09:04:36.992Z | governed REAL child observed by Studio | PROVEN |
| 21274 | 09:04:36.217Z | short session on 2026.07.20 (likely wrapper `status`) | INFERRED |
| 21968 | 09:04:44.352Z | short session on **new** 2026.08.11 (update helper) | INFERRED |
| 21721 | 09:04:39.719Z → 09:09:39Z | leftover indexer/helper ; failed after worktree removed | PROVEN (Indexing failed: root does not exist) |

High-signal 21247 events (sanitized excerpts in `.tmp-sfia-review/m4-first-real-timeout-diagnosis/pid-21247-log-excerpts-sanitized.txt`):

| UTC | Event | Interpretation | Proof |
| --- | --- | --- | --- |
| 09:04:36.992 | session start ; runtime **2026.07.20-8cc9c0b** | child used pre-existing agent runtime, not the later 2026.08.11 tree | PROVEN |
| 09:04:37.761 | `cli.run.mode` headless + print_flag true, stream_partial_output false | `--print` parsed ; stdout expected at turn end, not streamed | PROVEN |
| 09:04:38.146 | sandbox supported | `--sandbox enabled` not a hard fail | PROVEN |
| 09:04:38.493+ | penpot MCP `ECONNREFUSED` localhost:9001 every ~3s until SIGTERM | background MCP noise ; turn continued anyway | PROVEN as noise, not as unique blocker |
| 09:04:39.473 | Figma MCP `needsAuth` / Unauthorized | MCP auth gap ; turn continued | PROVEN as non-fatal for first_token |
| 09:04:40.261 | `agent_cli.turn.start` conversation `e27c664c-567d-4372-b75d-4938adfcafde` | model turn started | PROVEN |
| 09:04:40.262 | startup.metrics total_ms **3516** ; auth_ms **24** ; mcp_init_ms **1290** | cold start ~3.5 s, not 60 s | PROVEN |
| 09:04:42.531 | `cli.updated` auto 2026.07.20-8cc9c0b → 2026.08.11-e8db854 success | auto-update concurrent with the turn | PROVEN event ; not proven as timeout cause |
| 09:04:44.313 | first_token_ms **7568** | model output existed internally ~8 s after process start | PROVEN |
| 09:04:46.176 | Shell auto-approved (allowlist / workspace_readwrite) | agent executed a shell tool ; not waiting on TTY | PROVEN |
| 09:05:32.780 | second Shell auto-approved | **still progressing 3 s before SIGTERM** | PROVEN |
| 09:05:35.546 | last log line (MCP retry) then file mtime = product SIGTERM | killed mid-turn | PROVEN |

Local agent transcript (tool names only; no model dump beyond the already-public bounded instruction):

| Field | Value |
| --- | --- |
| conversation_id | `e27c664c-567d-4372-b75d-4938adfcafde` |
| createdAtUtc | 2026-08-14T09:04:37.770Z |
| updatedAtUtc | 2026-08-14T09:05:33.017Z |
| durationMs (meta) | 55247 |
| lines | 8 (1 user + 7 assistant) |
| tools | Glob 7, Read 7, Grep 8, Shell 2 |
| final message text-only assistant | **false** — last recorded assistant still had tool_use |

User prompt in that transcript is exactly the gateway fixed instruction (`TÂCHE UNIQUE — lecture seule bornée.` + target/action/scope/fingerprint + no-mutation clause). The child agent interpreted it as a multi-step inspect of the isolated worktree (README, M4 sources, tests). It had **not** emitted a final completion message when SIGTERM arrived.

Empty Studio stdout/stderr is therefore **explained** by: `--print` text mode + `stream_partial_output:false` + turn still open at t≈60s. It is **not** evidence that the process was idle or unauthenticated.

This diagnostic cycle’s Cursor invocations: `--version`, `--help`, `help status`, `help agent`, `status` only. No `--print`, no prompt, no workspace REAL, no Gate D, no StartExecution.

## K. Hypothesis matrix H1–H5 and A–F mapping

### H1 CLI/auth/session non ready

**DISPROVEN as timeout cause.**

- Pour: none at FIRST REAL time.
- Contre: auth_ms=24 ; first_token 7.6s ; status now logged in ; print_flag true.
- Manque: nothing material for “not ready”.
- Conséquence M4: operational-readiness at status/token level is not the missing completion proof.

Maps to GO class **B** (auth) : not the blocker. Class **A** (identity) : Desktop→cursor-agent routing worked.

### H2 cold start / completion > 60 s

**PARTIALLY SUPPORTED.**

- Pour: turn still had tool_use at 09:05:32Z (t≈57s) ; transcript duration 55247 ms ; no final assistant text ; SIGTERM at 60030 ms ; print buffers until completion.
- Contre: cold start itself was 3516 ms ; first_token 7568 ms — the 60s was **not** consumed by startup alone.
- Manque: remaining time-to-completion if SIGTERM had not fired. Cannot prove a 90s/120s window would have succeeded. Agent was still expanding inspect (Grep/Read/Glob/Shell).
- Conséquence M4: 60s interrupted an **in-progress successful-looking headless turn**. That is not the same as “60s is proven insufficient for any completion”.

Maps to GO class **E**: duration of the *turn* exceeded the observed window. Cold start is not the 60s.

### H3 problème entrée CLI exacte utilisée par Studio

**DISPROVEN as “unsupported argv”.** **UNRESOLVED** only for whether a different argv (`--mode ask`, stream-json, shorter instruction) would finish inside 60s.

- Pour (of incompatibility): nested `help agent` documents only `-h` ; Studio keeps `agent` in argv after Desktop exec.
- Contre: FIRST REAL `print_flag:true` `headless:true` ; workspace cwd correct ; sandbox configured ; tools ran.
- Conséquence: do not treat argv as invalid. Product may still *choose* a tighter argv later under a new GO.

Maps to GO class **C**: flags are documented and were accepted.

### H4 blocage réseau / service / sandbox avant première sortie

**DISPROVEN for “before first output”.** **PARTIALLY SUPPORTED as background noise.**

- Pour: penpot ECONNREFUSED loop ; Figma 401/needsAuth ; mcp_init_ms=1290.
- Contre: first_token occurred ; sandbox supported ; `--trust` applied ; agent backend HTTP/2 succeeded ; no HTTP proxy.
- Manque: whether MCP retries delayed later tool rounds. Not proven.
- Conséquence: do not claim network/sandbox blocked first output.

Maps to GO class **D**: not a pre-output hard block.

### H5 autre cause révélée

**PARTIALLY SUPPORTED (two facts), neither uniquely causal.**

1. Auto-update `2026.07.20-8cc9c0b` → `2026.08.11-e8db854` at 09:04:42.531Z during the same PID 21247 ; `~/.local/bin/cursor-agent` symlink birth 11:04:42 CEST. Agent session continued on the already-loaded 2026.07.20 bundle.
2. Headless `--print` without `--mode ask/plan` allowed a multi-tool inspect (Glob/Read/Grep/Shell) of a full repo worktree ; `--print` help grants write/shell. Worktree remained clean (prior cycle), so Git mutation is not claimed. Completion observation requires the turn to finish.

Maps to GO class **F** remainder: instruction/tool-loop length vs window, plus concurrent auto-update.

## L. Timeout qualification (`defaultTimeoutMs=60000`)

**Statut: PLAUSIBLE CONTRIBUTING FACTOR.**

Not PROVEN DEFECT (product behaved as coded: SIGTERM at 60s).
Not PROVEN INADEQUATE FOR OBSERVED OPERATION (no independent proof the turn would have completed shortly after 60s).
Not NOT CAUSAL / DISPROVEN (the timer *did* kill an unfinished turn).
Not left as bare UNQUALIFIED without the new log evidence — the factor is now evidenced as the mechanism that prevented Studio from observing completion, while remaining unproven as “raise timeout ⇒ success”.

Independent evidence that the operation was still progressing at t≈57s exists (second Shell auto-approve + transcript updatedAt 09:05:33Z). That satisfies the GO bar for *progress beyond startup*, not the bar for *would have finished*.

## M. Non-mutation / no-reproof proof

| Contrôle | Count / result |
| --- | --- |
| Gate D created/consumed this cycle | 0 |
| Attempt REAL created this cycle | 0 |
| StartExecution | 0 |
| RetryExecutionAttempt | 0 |
| `agent --print` / `cursor-agent --print` | 0 |
| Agent/model task started by this cycle | 0 (metadata/status only ; FIRST REAL historical turn was not relaunched) |
| Workspace REAL created this cycle | 0 |
| Product tracked mutation | 0 |
| Project remote mutation | 0 (handoff L3 only, after this pack) |
| login/logout/auth mutation | 0 |
| timeout/code/config product change | 0 |
| Parent `SFIA_STUDIO_CURSOR_REAL` | still unset |
| Parent `OPS1_CURSOR_REAL` | still unset |

Allowed metadata invocations actually run: Desktop `cursor --version`, `cursor --help` ; `cursor-agent --version`, `--help`, `help status`, `help agent`, `status`. All completed in <1s with timeout watchdog 15s unused.

## N. Recommended trajectory (RECOMMENDATION ONLY — not a Morris decision)

**Trajectoire C — cause unique non démontrée ; diagnostic borné.**

Ne pas sélectionner A : CLI/auth/argv are operational at the level required to start a headless turn and receive tokens.

Ne pas sélectionner B : environment is ready enough to *launch and generate*, but it is **not** proven that the 60s window alone is the blocker in the sense that a longer window would have produced exit 0. The child was still expanding an inspect of a large worktree at t≈57s.

Plus petit prochain diagnostic possible (à autoriser par un **nouveau** GO, pas par celui-ci) :

1. Ne pas relancer `xat:m4-first-real-001` / `gtd:m4-first-real-001`.
2. Si Morris veut un reproof REAL : nouvelle identity, nouveau Gate D, un seul spawn.
3. Bornage possible à discuter (toujours GO distinct) : instruction plus courte et explicitement “print one line then exit” ; et/ou `--mode ask` ; et/ou `--output-format stream-json` / stream partial so Studio can observe tokens before turn end ; and/or a justified longer timeout **after** Morris weighs residual hang risk.
4. Product operational-readiness preflight (status/version, still no `--print`) remains a GAP, not delivered here.

Aucun reproof automatique. Aucun changement `defaultTimeoutMs` dans ce cycle.

## O. Reservations / unresolved facts

- Remaining duration of the FIRST REAL turn if not killed: UNKNOWN.
- Whether MCP penpot retries added material latency to later rounds: UNRESOLVED.
- Whether auto-update affected in-process memory of PID 21247: UNRESOLVED (event proven ; impact not proven).
- Nested `agent` help sparsity vs global flags: empirically flags worked (`print_flag:true`).
- `--print` write/shell access vs M4 read-only *intent*: agent ran Shell (`git status` / `ls` class per transcript descriptions) ; prior cycle found worktree clean. Not a timeout root-cause proof ; reservation for future REAL instruction/argv policy.
- Roadmap file still contains superseded FIRST REAL sentences ; not edited.
- `~/.local/bin` not on diagnostic PATH ; irrelevant to Studio absolute-path spawn.
- Helper PID 21721 continued ~5 min after SIGTERM then failed because exec worktree was removed — leftover, not a second governed spawn.

## P. Claims interdits (explicitly not made)

- M4 CLOSED
- M4 EXIT PROOF SATISFIED
- M5 AUTHORIZED
- runtime v3 ADOPTED
- 60s is the root cause without the reservations in §L
- CLI entrypoint wrong
- auth failure
- “M4 works” / “M4 is broken” globally
- FIRST REAL completion proven
- timeout raise authorized

## Q. Verdict

**M4 TIMEOUT DIAGNOSIS COMPLETE WITH RESERVES — ROOT CAUSE NOT PROVEN — NO REAL REPROOF PERFORMED — MORRIS DECISION REQUIRED**

Mechanism observed (not a unique root cause claim): the governed Cursor REAL child **did** start a headless `--print` agent turn, received a first token at 7.6s, executed multiple read/search/shell tools, and was **still in-progress** when the product runner sent SIGTERM at 60s. Studio therefore recorded empty stdout/stderr and exit 143. CLI identity, argv flags, and auth were not the observed blocker of *first model output*. Completion remains unproven.

Incoming state preserved:

- M4 PARTIAL REAL PROOF
- GOVERNED REAL LAUNCH PROVEN
- GOVERNED REAL COMPLETION NOT PROVEN
- M4 EXIT PROOF NOT SATISFIED
- M4 NOT CLOSED
- M5 NOT AUTHORIZED
- runtime v3 NON ADOPTED

Statut: **READY FOR CHATGPT DIAGNOSTIC REVIEW**

## R. Review Handoff publication

Filled after publisher success in-cycle.

- Publisher: `scripts/sfia/publish-review-handoff.sh`
- Commit message: `docs(review-handoff): publish m4 first real timeout diagnosis`
- Branch: `sfia/review-handoff`
- Canonical file: `sfia-review-handoff/latest-chatgpt-review.md`
- Previous tip expected: `2234931e682bfede4b8515fd1ede7c2e1e2d2d01`

Instruction ChatGPT:

Review Handoff publié. ChatGPT doit relire `sfia-review-handoff/latest-chatgpt-review.md` sur `origin/sfia/review-handoff`, vérifier cycle/branche/HEAD/base/verdict/preuves/réserves et utiliser la preuve Git la plus récente pour décider de la trajectoire M4. Aucun reproof REAL n'est autorisé par ce rapport.
