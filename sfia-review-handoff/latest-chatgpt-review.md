# Review Pack — PRE-MW2 npm ci Dependency Restoration + Installed SDK Baseline
# FULL / CRITICAL / CONTENT-COMPLETE

Status: **FULL** · **CRITICAL** · **CONTENT-COMPLETE**

## 1. Timestamp Europe/Paris
2026-09-02 05:38:41 CEST

## 2. Cycle / typology / profile / CKC
- Cycle 9 — QA / validation
- Typology: DOC / ANALYSIS + LOCAL DEPENDENCY RESTORATION
- Profile: CRITICAL
- CKC: candidate — `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` — experimental cognitive guidance only — no execution authority

## 3. Exact Morris GO consumed
GO MORRIS — RESTORE PRE-MW2 REFERENCE RUNTIME DEPENDENCIES FROM EXISTING LOCKFILE VIA npm ci — LOCAL node_modules ONLY — NO PACKAGE/LOCK CHANGE — NO CODE/GIT CHANGE — NO LIVE OPENAI — THEN RE-RUN PRE-MW2 B AND CONFIRM A

## 4. Previous PRE-MW2 state (input handoff)
- Input handoff commit: `71dec575d0a2e3876609144e15b9de1f32d33d8d`
- Canonical handoff blob: `3775d8ad714972c99b966ae9716de450b7ef0865`
- Prior verdict: PRE-MW2-MODEL-BASELINE-01 NOT SATISFIED — Dimension A PASS after env align — Dimension B NOT PROVEN (`@openai/agents` absent in node_modules)

## 5. Convergence state (record)
- Build Doctrine VALIDATED — R22 OpenAI-native-first ACTIVE
- MW2 Readiness VALIDATED BY MORRIS — OD-02 OPTION B CONSUMED — PR #455 integrated on main
- PRE-MW2 OPEN — this cycle
- MW2 Delivery NOT AUTHORIZED / NOT ELIGIBLE
- GAP-MW2-F1-MODELSETTINGS-01 OPEN — Delivery gap — not closed this cycle

## 6. Local Git Truth
| Field | Value |
|-------|-------|
| Repository | mcleland147/sfia-workspace |
| Worktree root | /Users/morris/Projects/sfia-workspace |
| Branch | `delivery/sfia-studio-product-completion-w3-b-terminal-evidence` |
| HEAD | `ba7aa2db408b7fd00faf9638da060ce0833b794b` |
| origin/main | `b345f3b6c74d3eac0caca5bdd5525809dd80547a` |
| origin/main unchanged | YES — matches expected SoT |
| git status --short (project) | clean |
| git diff --stat (project) | empty |
| git diff HEAD package.json / package-lock | empty (no uncommitted manifest edits) |

**Honest branch note:** Reference worktree is NOT on `main`. Committed `package.json` / `package-lock.json` on this branch **diverge from origin/main** (missing `@openai/agents`, missing `zod`). This is committed branch state, not unstaged local modification.

## 7. Reference runtime
- App root: `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app`
- Env file: `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app/.env.local`

## 8. Sanitized env confirmation
```json
{
  "OPENAI_MODEL": "gpt-5.6-luna",
  "OPENAI_REASONING_EFFORT": null,
  "OPENAI_API_KEY_PRESENT": true
}
```
Reference model alignment: **PRESERVED** — no env mutation this cycle.

## 9. Lockfile / manifest precheck (reference branch committed state)
| Check | Result |
|-------|--------|
| package.json exists | YES |
| package-lock.json exists | YES |
| lockfileVersion | 3 |
| package.json declares `openai` | YES (`^6.48.0`) |
| package.json declares `@openai/agents` | **NO** (branch committed state) |
| package-lock contains `@openai/agents` | **NO** |
| Uncommitted package/lock modification | NO |

**origin/main contrast (read-only Git SoT):**
- Declares `@openai/agents ^0.17.0`, `openai ^6.48.0`, `zod ^4.5.4`
- Lock resolves: `@openai/agents@0.17.0`, `@openai/agents-core@0.17.0`, `openai@6.48.0`

## 10. package.json / package-lock SHA256 BEFORE npm ci
| File | SHA256 |
|------|--------|
| package.json | `f52e62bbe74458ae0df0bdae77b031d937bda7abbe97156a3e51c3df8c8306eb` |
| package-lock.json | `5494ccd725b8e956c0328085c1a8b51c19e3003215e0dd2b3f9461f4af670f75` |

(origin/main lockfile SHA256 for contrast only: `3c0952bbff86124e4d66cb2d50289c7712f8d6cf5669ea2d7615cc570dc20e2b`)

## 11. node_modules state BEFORE npm ci
- `node_modules` present: YES
- `npm ls @openai/agents @openai/agents-core openai --depth=1`:
  - `openai@6.48.0`
  - `@openai/agents`: absent
  - `@openai/agents-core`: absent

## 12. Authorized npm ci command
```bash
cd /Users/morris/Projects/sfia-workspace/projects/sfia-studio/app
npm ci --no-audit --no-fund
```

## 13. npm ci exit result
- Exit code: **0** (success)
- Output summary: `added 456 packages in 5s`
- npm warnings: deprecated `whatwg-encoding`, `glob` (non-blocking)

## 14. package.json / package-lock SHA256 AFTER npm ci
| File | SHA256 |
|------|--------|
| package.json | `f52e62bbe74458ae0df0bdae77b031d937bda7abbe97156a3e51c3df8c8306eb` |
| package-lock.json | `5494ccd725b8e956c0328085c1a8b51c19e3003215e0dd2b3f9461f4af670f75` |

## 15. Manifest hash parity
**IDENTICAL** — pre vs post npm ci — no tracked manifest mutation by npm ci.

## 16. git status / diff AFTER npm ci
- `git status --short`: clean
- `git diff --stat`: empty
- `git diff package.json package-lock.json`: 0 lines

## 17. Actually installed package versions (reference node_modules AFTER npm ci)
Command: `npm ls @openai/agents @openai/agents-core openai --depth=2`

| Package | Declared (branch package.json) | Lockfile resolved (branch lock) | **Actually installed** |
|---------|-------------------------------|--------------------------------|------------------------|
| `@openai/agents` | not declared | not in lock | **ABSENT** |
| `@openai/agents-core` | not declared | not in lock | **ABSENT** |
| `openai` | `^6.48.0` | `6.48.0` | **6.48.0** |

**STOP trigger:** `@openai/agents` and `@openai/agents-core` remain unavailable after successful npm ci.

## 18. Installed SDK paths inspected
No `@openai/agents` / `@openai/agents-core` distribution present under `node_modules/` after npm ci. No installed SDK source paths available for default-settings inspection on reference runtime.

## 19. F1 seam confirmation (read-only — origin/main Git SoT `b345f3b6`)
Source truth: `git show origin/main:...` — unchanged vs prior PRE-MW2 characterization.

| File | Finding |
|------|---------|
| `lib/platform/ai/config.ts` | `requireLiveConversationSecrets()` → `model` from `OPENAI_MODEL`; optional `reasoningEffort` from `OPENAI_REASONING_EFFORT` (unset → undefined) |
| `lib/nora-cognitive-runtime/runNoraAgentsTurn.ts` | `resolveModel()` → `secrets.model`; `new Agent({ name, instructions, model, tools })` — **no `modelSettings`**; `reasoningEffort` **not consumed** in F1 path |
| `createNoraAgentsRunner()` | `new Runner({ tracingDisabled, callModelInputFilter })` — **no Runner `modelSettings` override** |
| `lib/platform/ai/openaiProvider.ts` | `reasoning.effort` via `reasoningParam()` on **its own** Responses seam only — ≠ F1 Agents direct seam proof |

**Local branch note:** `runNoraAgentsTurn.ts` is **not present** in reference worktree working tree at `ba7aa2db` (branch lacks F1 Agents runtime file locally). F1 seam proof remains origin/main read-only.

**F1 seam changed:** NO (vs origin/main SoT)

## 20. Dimension A — confirmation only
Path (origin/main SoT + reference env):
`.env.local` `OPENAI_MODEL=gpt-5.6-luna` → runtime env → `requireLiveConversationSecrets().model` → `resolveModel()` → `Agent.model`

**Verdict: DIMENSION A — PASS CONFIRMED**

Allowed claim: **REFERENCE F1 CONFIGURED MODEL = gpt-5.6-luna**

Forbidden claims not made: production model selected; production routing selected; provider-returned model observed; Luna permanently adopted.

## 21. Local SDK default-settings evidence (installed SDK)
**NOT AVAILABLE** — installed `@openai/agents` / `@openai/agents-core` absent after authorized npm ci.

## 22. Pure local probe
**NOT EXECUTED** — cannot import installed Agents SDK; no network fallback authorized.

## 23. Agent/Runner resolution trace (origin/main SoT — static)
1. Live turn without injected model/provider adapter → `resolveModel()` reads `requireLiveConversationSecrets().model` (`gpt-5.6-luna` with current env).
2. `new Agent({ model })` without explicit `modelSettings`.
3. `createNoraAgentsRunner()` without `modelSettings` override.
4. Effective modelSettings merge would be SDK-default resolution for `gpt-5.6-luna` — **NOT PROVEN from installed packages** on reference runtime.

## 24. Dimension B matrix
| Field | Value |
|-------|-------|
| OPENAI_REASONING_EFFORT declared | unset |
| config parser result | undefined |
| Consumed by F1 | NO |
| Explicit Agent `modelSettings.reasoning` | NO |
| Explicit Runner reasoning override | NO |
| Installed `@openai/agents` version | **ABSENT** |
| Installed `@openai/agents-core` version | **ABSENT** |
| Installed `openai` version | **6.48.0** |
| Installed SDK default for `gpt-5.6-luna` | **NOT DETERMINED** (SDK absent) |
| Resolved effective `reasoning.effort` | **NOT PROVEN** |
| Resolved `text.verbosity` | **NOT PROVEN** |
| `reasoning.mode` | NOT PROVEN |
| `reasoning.context` static setting | NOT PROVEN |
| provider-observed `reasoning.context` | NOT PROVEN (no REAL call) |

## 25. Effective reasoning effort
**NOT PROVEN** from actually installed SDK on reference runtime.

## 26. text verbosity
**NOT PROVEN** from actually installed SDK on reference runtime.

## 27. mode / context classification
**NOT PROVEN** — static SDK characterization blocked by absent Agents packages.

## 28. GAP-MW2-F1-MODELSETTINGS-01
**OPEN — DELIVERY GAP** — SFIA does not explicitly govern/apply `modelSettings.reasoning` on F1. Not closed regardless of any secondary expectation.

## 29. Fake / Real qualification
| Item | Value |
|------|-------|
| Applicable | YES — OpenAI provider boundary is eventual REAL boundary |
| REAL executed this cycle | NO |
| npm registry (npm ci) | dependency restoration only — ≠ OpenAI cognitive REAL |
| Proof ceiling this cycle | LOCAL CONFIG + installed SDK static baseline — **ceiling not reached for B** |
| Morris REAL GO | NOT CONSUMED |
| MW2 Delivery | NOT AUTHORIZED |

## 30. Secret hygiene
- `OPENAI_API_KEY` not printed
- `OPENAI_API_KEY_PRESENT=true` only
- No npm auth tokens reproduced

## 31. Blockers / reserves
| ID | Severity | Description |
|----|----------|-------------|
| BLK-PRE-MW2-B-INSTALLED-SDK | **BLOCKING** | After authorized `npm ci`, `@openai/agents` / `@openai/agents-core` still absent in reference `node_modules` |
| BLK-PRE-MW2-B-BRANCH-MANIFEST | **BLOCKING** | Reference worktree branch committed `package.json` / `package-lock.json` lack `@openai/agents` while origin/main includes `@openai/agents@0.17.0` — npm ci on branch lockfile cannot install Agents SDK |
| BLK-PRE-MW2-B-BRANCH-RUNTIME-SRC | **INFORMATIONAL** | Reference branch at `ba7aa2db` lacks local `runNoraAgentsTurn.ts`; F1 seam verified on origin/main only |

No non-blocking reserve applicable — Dimension B not established at all (not merely `reasoning.context` reserve).

## 32. PRE-MW2 final verdict
**PRE-MW2-MODEL-BASELINE-01 — NOT SATISFIED**

Reason: Dimension A PASS CONFIRMED + Dimension B NOT PROVEN (installed Agents SDK unavailable after authorized npm ci).

Generic stop verdict: **STOP — PRE-MW2-MODEL-BASELINE-01 NOT SATISFIED WITHIN AUTHORIZED DEPENDENCY-RESTORATION SCOPE**

## 33. Delivery eligibility
**MW2 DELIVERY — NOT AUTHORIZED / NOT ELIGIBLE**

No automatic Morris GO MW2 Delivery. **DECISION MORRIS REQUIRED** gate not surfaced (PRE-MW2 not satisfied).

## 34. Actions NOT executed
- npm install / update / audit fix / dedupe
- package.json / package-lock.json mutation
- project Git commit / push / PR / merge
- .env.local changes
- Live OpenAI / Nora turn / D0 / EVAL / REAL
- MW2 Delivery
- Production model selection / routing
- runtime v3 adoption
- GAP-MW2-F1-MODELSETTINGS-01 closure
- Other worktree alterations
- Fallback npm pack / external SDK characterization as primary B evidence

## 35. Next gate
1. Morris / ChatGPT: resolve reference runtime alignment — reference worktree must use **origin/main-aligned** `package.json` / `package-lock.json` (or equivalent authorized manifest) so `npm ci` installs `@openai/agents@0.17.0` + `@openai/agents-core@0.17.0` without unauthorized tracked mutation policy conflict.
2. Re-run PRE-MW2 Dimension B against **actually installed** SDK with pure local probe.
3. Only if PRE-MW2 SATISFIED: distinct Morris GO — MW2 Delivery consideration.

## 36. Morris instruction block for ChatGPT
1. Read canonical Review Handoff remote
2. Verify exact Morris GO (npm ci only dependency restoration)
3. Verify package/lock hashes unchanged
4. Verify no tracked project mutation
5. Verify gpt-5.6-luna still reaches F1 (origin/main seam + reference env)
6. Verify Agents SDK still absent after npm ci on branch lockfile
7. Verify no installed SDK default reasoning proof
8. Verify Agent/Runner path on origin/main
9. Verify no live OpenAI call
10. Verify GAP-MW2-F1-MODELSETTINGS-01 remains OPEN
11. Render PRE-MW2: **FAIL** (A pass, B not proven)
12. Do NOT generate MW2 Delivery prompt until Morris explicitly consumes gate after SATISFIED PRE-MW2
