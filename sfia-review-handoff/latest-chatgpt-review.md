# ChatGPT Review Pack — FULL
## PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 — R11 Cursor CLI authentication root cause and zero-REAL preflight

**Timestamp (UTC):** 2026-09-18T02:05:54Z
**Pack kind:** FULL (forensic qualification; no Product code modification)
**Pack revision:** R11 — Cursor CLI authentication root cause and zero-REAL preflight
**Automation:** L3 handoff only; **NO** project commit/push/PR/merge; **ZERO REAL**; **NO Execute**; **NO Attempt**; **NO HD**; **NO agent login automation**; **NO generative Cursor probe**

---

## 1. Git Truth

| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| Branch | `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| origin/main | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| Baseline | YES |
| Cycle | 9 QA / EVOL / CRITICAL |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
 M projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/package-lock.json
?? .tmp-sfia-review/checkpoint-e-prepare-fix.diff
?? .tmp-sfia-review/checkpoint-e-r4-evidence-coherence.diff
?? .tmp-sfia-review/checkpoint-e-resume-full.diff
?? .tmp-sfia-review/checkpoint-f-r10-cta-precedence.diff
?? .tmp-sfia-review/checkpoint-f-r6-observability.diff
?? .tmp-sfia-review/checkpoint-f-r7-recovery-options.diff
?? .tmp-sfia-review/checkpoint-f-r8-recovery-successor.diff
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceRematerialize.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointE.prepareResume.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/docsWriteEvidenceContradictionView.ts
?? projects/sfia-studio/app/features/project-assistant/f3/processFailureDiagnostic.ts
?? projects/sfia-studio/app/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements.ts
?? projects/sfia-studio/app/features/project-assistant/f3/resolveDurableBoundaryProofMode.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareReadyProposalPursueContinuation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/recoveryReplaceableCurrentContract.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
```

### Preservation

- R1–R10 Product dirty files preserved (no R11 Product code change)
- `package-lock.json` dirty préexistant hors scope
- No reset / checkout destructif / clean
- Campaign DB read-only for this lot

---

## 2. Qualification SFIA

| Field | Value |
|---|---|
| Cycle | 9 — QA / Validation |
| Typologie | EVOL |
| Profil | CRITICAL |
| Justification | Frontière externe Cursor REAL + environnement d'auth + wiring child process |
| Milestone | Product Journey E2E REAL Reconciliation |
| Capacité v3 | ExecutionContract → authority → Cursor REAL authenticated executor → Attempt → Evidence |

KEEP: R6 diagnostics, R6 REAL provenance, R7 recovery options, R8 successor docs_write, R10 restart CTA, EC/Gate D/authority, exact docs_write target.

DIAGNOSE: Cursor CLI auth state, Studio child env, executable resolution, HOME/config.

ADAPT: none (CASE B wiring defect NOT proven).

---

## 3. Second Attempt freeze (durable)

| Field | Value |
|---|---|
| Attempt | `xat:w3a:88dadf7fa682cc93` |
| ExecutionContract | `xct:m3-res:dec:w2-trj:7e6ca68a-a31b-448c-9ae8-648de8772988` |
| Attempt status | `failed` |
| EC status | `failed` |
| Adapter | `adp:m4-cursor-cli-real` (campaign episode) |
| Agent ref | `agt:m4.cursor.bounded_docs_write` |
| boundaryProofMode | `cursor_real` |
| realProcessInvoked | `true` |
| processRef | `pid:58811` |
| exitCode / technicalExitCode | `1` |
| stopReason | `REAL_PROCESS_NONZERO_EXIT` |
| durationMs | `1302` |
| Worktree | `wt-daf7b0b2455475b6b7090b69` |
| Evidence | `ev:w3b:daf7b0b2455475b6` (`available`) |
| ReviewBundle | `rb:w3b:daf7b0b2455475b6` (`ready_for_review`) |
| productOutcome / business effect | non prouvé |
| authoritativeBusinessEvidence | `false` |
| Target | `projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md` — **ABSENT** |

### Exact stderr (redacted; durable processDiagnostic)

```
cursor-retrieval: tracing to '/var/folders/.../cursor_retrieval....58811.log'
Error: Authentication required. Please run 'cursor agent login' first, or set CURSOR_API_KEY environment variable.
```

- `stdoutExcerpt` empty
- `stderrTruncated` / `stdoutTruncated` = false
- `redacted` = true
- retrieval log file exists but size 0 (no extra content)

### Attempt count

| Attempt | stopReason | processDiagnostic |
|---|---|---|
| `xat:w3a:1f49d8e25e20837a` | REAL_PROCESS_NONZERO_EXIT | absent (pre-R6) |
| `xat:w3a:88dadf7fa682cc93` | REAL_PROCESS_NONZERO_EXIT | Authentication required |

**Attempts = 2 FAIL. REAL budget remaining = 0. No third Attempt.**

---

## 4. Installed executable stack

| Item | Fact |
|---|---|
| Studio resolution order | `SFIA_CURSOR_BIN` → `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` → `$HOME/.local/bin/cursor-agent` |
| `SFIA_CURSOR_BIN` | ABSENT (shell + Studio process) |
| App-bundled cursor | PRESENT · version `3.20.21` · arm64 · commit `f09fca384ceca23f7bf21f9c23655b162641d740` |
| Standalone `~/.local/bin/cursor-agent` | PRESENT · symlink → `.../versions/2026.09.15-d2fe57e/cursor-agent` |
| `command -v agent` / `command -v cursor` (shell PATH) | ABSENT |
| Studio PATH contains app bin | False (resolved by absolute candidate, not PATH) |
| Help-proven non-generative auth cmds | `cursor agent status` · `cursor agent whoami` · `agent --list-models` |
| Forbidden probes | NOT run: `agent login`, `-p`, `--print`, prompts, ACP sessions |

Exact Studio launch uses app-bundled `cursor` first (X_OK). Argv shape for docs_write (code): `agent --print --mode ... --workspace <wt> --trust --sandbox disabled --force <instruction>` under mutating local confinement env.

---

## 5. Auth status (non-generative)

### `cursor agent status` / `whoami` (app binary)

```
✓ Login successful!
Logged in (unable to fetch user details)
```

Same result for:
- interactive diagnostic shell
- simulated mutating confinement env (HOME preserved)
- exact Studio process env reconstructed via sysctl (incl. `CURSOR_AGENT=1`, `__CURSOR_SANDBOX_ENV_RESTORE` PRESENT)
- worktree cwd `wt-daf7b0b2455475b6b7090b69`
- standalone `cursor-agent status`

### API-capable non-generative probe: `--list-models`

| Context | Result |
|---|---|
| App `cursor agent --list-models` | `Error: Authentication required. Run 'cursor agent login', pass --api-key/--auth-token, or set CURSOR_API_KEY/CURSOR_AUTH_TOKEN.` |
| Standalone `cursor-agent --list-models` | same Authentication required |
| Studio-env + mutating confinement | same Authentication required (exit 1) |

**Critical discrepancy:** local login *marker* reports success; API auth required for model listing — same failure class as Attempt 2 stderr.

### Local auth storage (metadata only; no credential dump)

| Path | Fact |
|---|---|
| `~/.cursor/` | EXISTS · owner morris · mode normal |
| `cli-config.json` → `authInfo` | PRESENT keys: `authId`, `displayName`, `email`, `userId` (values not copied into Durable Product objects) |
| Account display (non-secret) | Morris Cleland (local cached identity) |
| `CURSOR_API_KEY` | ABSENT (shell + Studio) |
| `CURSOR_AUTH_TOKEN` | ABSENT (shell + Studio) |
| `CURSOR_CONFIG_DIR` | ABSENT |
| `XDG_CONFIG_HOME` | ABSENT |
| Empty `HOME` probe | `Not logged in` (proves HOME-scoped local state) |

---

## 6. Environment comparison

| Key | Diagnostic shell | Studio next-server (pid listening :3020) | Child env builder (docs_write local) |
|---|---|---|---|
| HOME | `/Users/morris` | `/Users/morris` | preserved from baseEnv (not stripped) |
| USER | morris | morris | preserved |
| CURSOR_CONFIG_DIR | ABSENT | ABSENT | preserved if present |
| CURSOR_API_KEY | ABSENT | ABSENT | preserved if present (tests prove; not stripped) |
| CURSOR_AUTH_TOKEN | ABSENT | ABSENT | not in strip list |
| CURSOR_AGENT | (varies) | `1` (Studio launched under Cursor Agent sandbox wrapper) | inherited unless absent |
| PATH | PRESENT | PRESENT | preserved; strip list is Git/GH/SSH/egress only |

### Spawn wiring facts (code)

- `buildMutatingCursorConfinementEnv` copies `baseEnv` minus Git/SSH/GH/egress keys; sets `SFIA_STUDIO_CURSOR_REAL=1`, Git non-interactive null-global.
- Does **not** strip `HOME` / `CURSOR_API_KEY` / `CURSOR_AUTH_TOKEN` / `CURSOR_CONFIG_DIR`.
- `NodeCursorProcessRunner` passes `env: input.env` to `spawn(shell:false)` — no second filter.
- Studio server `HOME` matches shell; confinement simulation still AUTH for `status` and still FAIL for `--list-models`.

**CASE B Studio env/config mismatch: NOT PROVEN.**

---

## 7. Classification decision tree

| Case | Result |
|---|---|
| A — CLI not authenticated for API ops | **PROVEN** (via `--list-models` + Attempt 2 stderr). Note: `agent status` alone is misleadingly green with “unable to fetch user details”. |
| B — Studio child missing auth context | **NOT PROVEN** (parity HOME/config; same API auth failure outside Studio) |
| C — wrong executable / distribution | **NOT PROVEN** as root cause (both app cursor and standalone fail `--list-models` identically) |
| D — auth preflight unavailable non-invasively | N/A — status + list-models available |
| F — other | Partial local auth marker without usable API auth (explains status vs REAL gap) |

**No Product code fix entered (Phase 7 skipped).**
**No manufactured tests (Phase 8 skipped).**
**Phase 9 (post-login verify) NOT run — Morris has not completed interactive login in this lot.**

---

## 8. Code fix

NONE.

ROOT CAUSE PROVEN: Cursor Agent CLI API authentication missing/broken on this machine despite local login marker / cached `authInfo`.

MINIMAL FIX: N/A (not a Studio wiring defect). User must re-authenticate via official interactive browser flow.

---

## 9. Secret-redaction proof

- Review Pack reports CURSOR_API_KEY / CURSOR_AUTH_TOKEN as PRESENT/ABSENT only
- No token values, cookies, Authorization headers, or credential file contents included
- Durable `processDiagnostic.redacted = true`
- No secrets written to Product DB by this lot
- No `.env` mutation; no credential copy

---

## 10. Target / ZERO REAL proof

| Check | Result |
|---|---|
| Target path | ABSENT (unchanged) |
| Execute / governedExecute / startExecution | NOT called |
| New Attempt / HD / EC | NOT created |
| `agent login` | NOT run |
| Generative Cursor (`-p` / `--print` / prompt) | NOT run |
| Campaign SQLite | read-only forensic only |
| Project commit/push/PR | NOT done |

---

## 11. Required Morris / user action

1. In a normal interactive shell (not as a disguised REAL), authenticate with the installed CLI:
   - `/Applications/Cursor.app/Contents/Resources/app/bin/cursor agent login`
   - or `~/.local/bin/cursor-agent login`
2. After login, verify **non-generatively**:
   - `cursor agent status` → expect authenticated **and** usable user details if available
   - `cursor agent --list-models` → must succeed (this is the API-auth proof `status` alone did not provide)
3. Optionally confirm Studio process still has `HOME=/Users/morris` and no conflicting `CURSOR_CONFIG_DIR` (restart Studio outside a broken sandbox only if parity regresses — not indicated now).
4. Do **not** launch a third REAL until a **new distinct Morris GO** after successful API-auth preflight + Product recovery path.

Do **not** set or commit API keys into the repo. If only API-key automation auth is desired, that is a separate **SECURITY / STRUCTURAL** decision (not taken here).

---

## 12. Claims

### Allowed

- Second REAL process reached Cursor CLI (`realProcessInvoked=true`, pid:58811)
- Failure reason Authentication required (durable stderr)
- Auth status factually measured (`status` green-but-incomplete; `--list-models` Authentication required)
- Environment mismatch for HOME/config between shell and Studio **not** factually present
- ZERO REAL diagnostic lot
- Attempts 1 and 2 remain FAIL; budget 0

### Forbidden

- Cursor auth fixed
- Studio REAL boundary ready
- REAL retry authorized
- REAL PASS / artifact created
- Product Journey E2E usable / READY
- runtime v3 ADOPTED

---

## 13. Gate suivant

auth root cause (this lot) → Morris interactive `cursor agent login` → non-generative `--list-models` PASS → Morris review of this pack → **nouveau GO distinct** → recovery Product normal (R7/R8/R10 path) → ONE future REAL only under that GO.

---

## 14. Verdict unique

**CURSOR CLI AUTH ROOT CAUSE PROVEN — USER LOGIN REQUIRED**
