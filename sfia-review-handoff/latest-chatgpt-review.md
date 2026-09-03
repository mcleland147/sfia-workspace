# ChatGPT Review Pack — QA-MW4-PR-CI-02
# MW2 CORR04 D0-10 CI DIVERGENCE DIAGNOSIS

## 1. Timestamp / Cycle identity

- timestamp_utc: `2026-09-03T09:57:50Z`
- cycle: `QA-MW4-PR-CI-02`
- SFIA Cycle: **9**
- Typology: **RUN**
- Profile: **CRITICAL**
- Capability: Nora Cognitive Completion
- Milestone: MW4 — Grounding durability + Narrative/Evidence coherence (pre-merge; **NOT CLOSED**)
- Fake/Real: FA=NO; TA=NO; REAL OpenAI calls = **ZERO**
- Authority: Morris GO for diagnostic-only scope; correction NOT authorized

## 2. Sources actually read

Mandatory / convergence / product / Nora / v3 (headers + applicable doctrine checked this cycle):

1. `prompts/templates/sfia-cycle-execution-template.md` (v2.6)
2. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
3. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
4. `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
5. `projects/sfia-studio/nora-cognitive-completion/05-nora-source-locked-cognitive-backlog.md`
6. `projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md`
7. `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`
8. `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`

Diagnostic sources (code / CI / local evidence):

- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/sessionPaths.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts`
- `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/paths.ts`
- `projects/sfia-studio/app/vitest.config.ts`
- `projects/sfia-studio/app/package.json` (`"test": "vitest run"`)
- GitHub Actions Unit-tests step (workflow excerpt under `.tmp-sfia-review/qa-mw4-pr-ci-02/ci-unit-test-step.yml`)
- CI run/job logs under `.tmp-sfia-review/qa-mw4-pr-ci-02/`

## 3. Studio convergence qualification

- Git truth > narration; Evidence > assertion.
- This cycle introduces **no** new v3 capability; diagnostic gate only.
- OpenAI-native-first remains active; Memory B ≠ Truth C / Evidence.
- A test failure is an Observation until causal qualification — now upgraded by causal evidence to **TEST/HARNESS NON-DETERMINISM**.
- MW4 remains NOT CLOSED; MW5 NOT AUTHORIZED; Runtime v3 NON ADOPTED; production model routing NOT SELECTED.

## 4. Local Git Truth (Gate G0)

| Field | Value |
|---|---|
| repository | `/Users/morris/Projects/sfia-workspace-nora-mw4-grounding` |
| branch | `delivery/sfia-studio-nora-mw4-grounding-durability` |
| HEAD | `01956bdc808d459a5def4a7018ab7a1b16530f42` |
| origin/main | `deb34943dd85472644c221243cd7c0fd5369614e` |
| candidate immutability | **PASS** — matches expected PR HEAD |
| tracked product/test/CI edits this cycle | **NONE** |
| dirty / untracked | `.tmp-sfia-review/**` diagnostic artifacts; `projects/sfia-studio/app/node_modules` symlink only |

Handoff baseline observed at diagnosis start (after fetch):

| Field | Prompt expected | Remote observed |
|---|---|---|
| `sfia/review-handoff` tip | `721e77bd08a7738e5feebbc321b296178eceb980` | `721e77bd6e422e4e79eeae382e6aebb387fa058f` |
| canonical blob | `33ec81f7d57fbbb340670b8aa2a740ad69027c76` | `33ec81f743c48c67a0cfd4e9d16ae6c17cd60449` |

Note: tip/blob **prefix** matches prior CORR cycle narration; full SHAs differ from the prompt text. Publication serializes onto the **observed remote tip** (no force push). Project candidate HEAD/main match prompt expectations → diagnosis proceeds.

## 5. PR / base / HEAD truth

- Repository: `mcleland147/sfia-workspace`
- PR: **#461** (open, Required Gate red, DO NOT MERGE)
- Head branch: `delivery/sfia-studio-nora-mw4-grounding-durability`
- HEAD SHA: `01956bdc808d459a5def4a7018ab7a1b16530f42`
- Base: `main` @ `deb34943dd85472644c221243cd7c0fd5369614e`
- Accepted Build correction (R-MW4-PR-CI-01): leaf import in `postEvidenceNoraAnalysis.ts` → `postEvidenceNarrativePolicy` (Build SUCCESS)

## 6. CI Truth (Gate G1)

| Field | Value |
|---|---|
| workflow run | `33736962747` |
| Unit-tests job | `100589737528` |
| Build | **SUCCESS** |
| Unit tests | **FAIL** (Required Gate) |
| failing file | `__tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts` |
| failing case | `D0-10 — client boundary: no CWP / Truth C leak` |
| assertion | `expect(result.ok).toBe(true)` @ line **474** |
| CI command | `npm test` → `vitest run` (default `fileParallelism=true`, pool=`forks`) |
| CI Node | `24` (setup-node) |
| suite context | `Test Files 1 failed | 271 passed | 14 skipped (286)` — only D0-10 reported failed |

### Raw CI failure (ANSI-stripped excerpt)

```
× CORR-MW2-REAL-04 — Truth-C + intent/CWP stability > D0-10 — client boundary: no CWP / Truth C leak 171ms
  → expected false to be true // Object.is equality

FAIL  __tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts
  > CORR-MW2-REAL-04 — Truth-C + intent/CWP stability
  > D0-10 — client boundary: no CWP / Truth C leak
AssertionError: expected false to be true // Object.is equality
```

CI did **not** print the `result` envelope (assertion only checks `.ok`). Local parallel reproduction captured the envelope (below).

## 7. Exact test / product dependency (Gate G2)

### Test path

`projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts`

D0-10 (tracked):

```ts
it("D0-10 — client boundary: no CWP / Truth C leak", async () => {
  const projectId = await createProject({ ... });
  const provider = new FakeConversationProvider({ ... });
  const result = await orchestrateAssistantSend({
    projectId,
    content: "Statut ?",
    provider,
  });
  expect(result.ok).toBe(true); // line 474
  expect(result).not.toHaveProperty("cognitiveWorkload");
  // ... additional client-boundary negations
});
```

`createProject` uses unique temp `productDbPath` via `getRuntimeApplicationService({ productDbPath })`.
D0-10 does **NOT** pass `sessionDbPath`.

Hooks: `beforeEach`/`afterEach` reset runtime singleton + restore env; Fake provider only; LIVE OpenAI = 0.

### Production path exercised

1. `orchestrateAssistantSend` → `loadProjectRuntimeForAssistant` → F1 informative path
2. `orchestrateProjectAssistantTurn` / `runNoraCognitiveTurn` with optional `sessionDbPath`
3. On read-coverage persistence (`orchestrateTurn.ts`):

```ts
const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
const session = new ProductSqliteSession({ projectId, dbPath, sessionKey: "f1-default" });
```

4. `resolveNoraSessionSqlitePath` default (when override/env absent):

`projects/sfia-studio/.sfia-exec/product/nora-session.sqlite`

5. `ProductSqliteSession` opens `new DatabaseSync(this.dbPath)` with **no** busy-timeout / retry.

## 8. CI / local environment comparison (Gate G3)

| Dimension | Local (this worktree) | CI Unit-tests |
|---|---|---|
| Node | v24.16.0 | Node 24 |
| package manager | npm (local node_modules symlink to mw3-closure tree) | `npm ci` from lockfile |
| test command (CI) | — | `npm test` = `vitest run` |
| prior local CORR pass command | `npm test -- --no-file-parallelism --testTimeout=60000` | — |
| vitest | 3.2.7 | same range via lockfile |
| pool | default **forks** | default **forks** |
| fileParallelism | default **true** (CI); serial experiments used `--no-file-parallelism` | **true** |
| timezone/locale | not causal | not causal |
| shared session DB default | `.sfia-exec/product/nora-session.sqlite` present & mutated | same default path on runner cwd |
| secrets | none exposed | none exposed |

Material difference for the failure: **CI always runs with fileParallelism**; the prior green local CORR validation used **`--no-file-parallelism`**, which avoids cross-process contention on the shared session DB.

## 9. Initial hypotheses (pre-classification)

1. mutable singleton/cache state
2. fake provider leak
3. product/session state leak
4. env mutation
5. clocks/timezone
6. random/UUID ordering
7. filesystem/temp collisions
8. worker concurrency
9. async race / teardown
10. test order dependence
11. Node/pm version drift
12. CI-only config
13. prior file contamination
14. genuine product semantic defect

## 10. Bounded reproduction matrix (Gate G4)

Hard limits respected in spirit; all executions recorded. Diagnostic clones under `.tmp-sfia-review/qa-mw4-pr-ci-02/**` only.

### D1 — D0-10 isolation (max 10; used 3)

| Iter | Command | Result |
|---|---|---|
| 1–3 | `npx vitest run … mw2.corr04… -t 'D0-10'` | **PASS** ×3 |

### D2 — full mw2.corr04 file (used 2)

| Iter | Command | Result |
|---|---|---|
| 1–2 | `npx vitest run … mw2.corr04…` | **PASS** ×2 |

### D5 — focused parallel vs serial (7 files incl. mw2.corr04)

**Parallel (CI-like `fileParallelism`, default forks):**

| Iter | ec | Outcome |
|---|---|---|
| 1 | 1 | FAIL `D0-02` in mw2.corr04 (`result.ok` false) — not D0-10 |
| 2 | 0 | PASS 7/7 |
| 3 | 1 | FAIL mw3 C17 + C22 (`result.ok` false) |

**Serial (`--no-file-parallelism`):**

| Iter | ec | Outcome |
|---|---|---|
| 1–2 | 0 | **PASS** 7/7 ×2 |

### Capture clone under parallel (instrumented copy; not tracked)

| Iter | Outcome | Envelope |
|---|---|---|
| 1 | FAIL D0-02 | `{"ok":false,"status":"provider_error","code":"PROVIDER_ERROR","message":"database is locked","mode":"fixture","retryable":true}` |
| 2 | FAIL mw3 C17 | (no corr04 envelope) |
| 3–5 | PASS | — |

### Mid-flight singleton reset diagnostic (secondary mechanism)

Forced `resetRuntimeApplicationServiceForTests()` mid-flight → envelope:

`{"ok":false,"status":"project_not_found","code":"PROJECT_NOT_FOUND",...}`

Same **assertion class** (`result.ok===false`) but **different status** than the parallel flake. Latent harness hazard; **not** the CI-proven envelope.

### Causal treatment — per-worker session isolation only

Diagnostic `setupFiles` entry sets unique:

`SFIA_STUDIO_NORA_SESSION_DB_PATH=/tmp/sfia-vitest-session-${pid}-…/nora-session.sqlite`

Same 7-file parallel set, forks+fileParallelism:

| Iter | Result |
|---|---|
| 1–5 | **PASS 7/7**, `database is locked` count = **0**, no corr04 / D0-10 failures |

### Discrimination summary

| Condition | Flake / lock | D0-10 / corr04 ok:false |
|---|---|---|
| Isolation / single file | no | no |
| Serial multi-file | no | no |
| Parallel multi-file (shared default session DB) | **yes** | **yes** (which case varies) |
| Parallel + per-worker `SFIA_STUDIO_NORA_SESSION_DB_PATH` | **no** | **no** |

## 11. Causal analysis (Gate G5)

**Root mechanism (proven):**

1. F1 / cognitive turn persistence opens the **process-default** Nora Session SQLite file when `sessionDbPath` / env override are absent.
2. Default path is **shared across all Vitest fork workers**: `../.sfia-exec/product/nora-session.sqlite` relative to `projects/sfia-studio/app`.
3. CI `npm test` runs many files with `fileParallelism=true` → concurrent `DatabaseSync` writers on that single file.
4. `node:sqlite` throws `database is locked`.
5. `orchestrateAssistantSend` catches provider/turn exceptions and returns `{ ok:false, status:"provider_error", code:"PROVIDER_ERROR", message:"database is locked", ... }`.
6. D0-10 asserts only `result.ok === true` → CI red at line 474.
7. Which test loses the race is **non-deterministic** (CI hit D0-10; local parallel hit D0-02 / mw3 C17/C22) — same failure class.

**Why local CORR looked green:** validation used `--no-file-parallelism`, eliminating cross-worker session DB contention.

**Product semantic boundary:** D0-10’s intended contract (client DTO must not leak CWP / Truth C fields) holds whenever orchestration succeeds. Failure is an infrastructure lock, not a CWP-leak regression.

## 12. Final classification

### A — TEST/HARNESS NON-DETERMINISM PROVEN

**Verdict:** `PASS — ROOT CAUSE PROVEN: TEST/HARNESS NON-DETERMINISM — CORRECTION GATE REQUIRED`

Not B: Node/npm versions match; the “CI-only” appearance is explained by CI’s default parallel harness vs serial local CORR runs — the defect is shared session-DB isolation under parallelism, reproducible locally under the same mode.

Not C: no MW2 semantic contract violation demonstrated; product path returns a lock error, not an incorrect cognitive boundary payload.

Not D: causal bar met (mechanism + envelope + parallel/serial + isolation treatment).

## 13. Hypotheses rejected

| Hypothesis | Status |
|---|---|
| Genuine MW2/MW4 semantic regression (C) | **Rejected** — envelope is sqlite lock; isolation restores green without product edits |
| CI Node/version divergence as primary cause (B) | **Rejected** — same Node 24 family; local parallel reproduces |
| Fake provider script nondeterminism | **Rejected** — failure precedes successful semantic asserts; message is DB lock |
| Clock/timezone/random ID primary cause | **Rejected** |
| Mid-flight singleton reset as CI mechanism | **Rejected as CI cause** (different envelope); retained as **latent** harness risk |
| Env secret / API key presence | **Rejected** — tests delete `OPENAI_API_KEY`; Fake path used (`mode:"fixture"`) |

## 14. Remaining uncertainty

- Exact CI envelope was not printed by Vitest (assertion-only). Local parallel capture is the envelope proof; confidence high given identical assertion + parallel-only flake pattern.
- Other shared defaults (e.g. default `oa-product.sqlite`) may still flake other suites; this cycle proved the **session** path is sufficient to explain corr04 D0-10 class failures.
- Singleton options-on-first-create remains a separate latent risk under `isolate:false` / threads (not CI default).

## 15. Proof impact (Gate G6)

| Boundary | Posture |
|---|---|
| **MW2 accepted semantic proof** | **KEEP ACCEPTED** — no causal product semantic regression |
| **MW4 deterministic/product-bound proof** | **KEEP ACCEPTED** |
| **MW4 bounded REAL proof** | **KEEP ACCEPTED** (this cycle: REAL OpenAI = 0) |
| **MW0→MW4 Integrated REAL Cognitive Business Chain** | **KEEP ACCEPTED** |
| **R-MW4-PR-CI-01** | **CLOSED AT CLIENT/SERVER BUILD-BOUNDARY SCOPE** — Build SUCCESS; not reopened |
| **R-MW4-PR-CI-02** | **CLOSED AS ROOT CAUSE PROVEN (TEST/HARNESS)** — correction gate still required for CI green |
| **PR #461 MERGE** | **NOT AUTHORIZED** until authorized correction + green Required Gate |

Product states preserved:

- MW4 = NOT CLOSED
- MW5 = NOT AUTHORIZED
- COGNITIVE COMPLETION = NOT PROVEN
- RUNTIME V3 = NON ADOPTED
- PRODUCTION MODEL ROUTING = NOT SELECTED

## 16. Correction proposal — ANALYSIS ONLY (NOT APPLIED)

### Causal defect

Harness/tests allow concurrent Vitest workers to open the **same default** `nora-session.sqlite`, producing intermittent `database is locked` → false `result.ok` under CI parallelism.

### Likely files (classification)

| File | Class | Role |
|---|---|---|
| `projects/sfia-studio/app/__tests__/setup.ts` | **ADAPT** | Prefer: set per-worker unique `SFIA_STUDIO_NORA_SESSION_DB_PATH` (and optionally product DB) via `process.pid` / `VITEST_POOL_ID` |
| `projects/sfia-studio/app/vitest.config.ts` | **ADAPT** (alt) | Or force `--no-file-parallelism` / poolOptions for Unit gate — coarser, slower |
| `…/mw2.corr04.truthCIntentStability.d0.test.ts` | **ADAPT** (narrow) | Pass unique `sessionDbPath` into `orchestrateAssistantSend` — fixes this file only; incomplete vs suite-wide risk |
| Many other PA/F1 tests omitting `sessionDbPath` | **ADAPT** if file-local strategy chosen | Same pattern |
| `sessionPaths.ts` / `productSqliteSession.ts` | **KEEP** (prod defaults OK) | Optional later: busy_timeout — treats symptom; does not restore test isolation |
| GitHub workflow Unit-tests step | **ADAPT** (alt) | `npm test -- --no-file-parallelism` — config-only gate mitigation |

### Smallest viable change (recommended)

**ADAPT** `app/__tests__/setup.ts` (or a dedicated setup file referenced from `vitest.config.ts`) to assign a **per-process unique** `SFIA_STUDIO_NORA_SESSION_DB_PATH` under `os.tmpdir()` when `NODE_ENV=test` / Vitest. Optionally mirror for `SFIA_STUDIO_PRODUCT_DB_PATH` for tests that omit explicit product paths.

Why causal (not symptom): removes cross-worker writers on one file; matches the treatment that produced **5/5 parallel PASS**.

### Risks

- Tests that intentionally assert against the default path location must be updated.
- Over-broad product-DB env override can break fixtures (observed when both session+product were forced in an early diagnostic).
- Serializing the whole suite slows CI if `--no-file-parallelism` is chosen instead.

### Tests required after a future correction gate

- Focused: mw2.corr04 including D0-10 under **default parallel** `npm test` subset
- Broader: full Unit-tests job green on PR #461
- Confirm no REAL OpenAI; no architecture/persistence redesign

### Architecture / persistence / FA-TA

- Architecture/persistence: **NOT touched** by recommended harness fix
- FA: NO; TA: NO; REAL: ZERO

### Proposed next SFIA cycle / gate

`CORR-MW4-PR-CI-02` — authorized minimal harness/test-isolation correction only; then CI re-validation of Required Gate. **No** MW4 semantic rewrite; **no** merge until green.

## 17. Git / GitHub actions actually performed

- Local git status / rev-parse / fetch of `sfia/review-handoff` (read)
- `gh` read of PR #461 / run `33736962747` / job logs (read-only)
- Bounded local vitest diagnostic executions
- Wrote artifacts only under `.tmp-sfia-review/**`
- Review handoff publish via `scripts/sfia/publish-review-handoff.sh` (authorized exception)

### Unauthorized actions confirmed ABSENT

- project tracked product/test/workflow edits: **NO**
- project commit / push: **NO**
- PR #461 update: **NO**
- remote CI rerun: **NO**
- merge: **NO**
- branch delete / reset / stash discard: **NO**
- architecture/persistence change: **NO**
- REAL OpenAI: **ZERO**

## 18. Reserves

- **R-MW4-PR-CI-01** = CLOSED (Build boundary)
- **R-MW4-PR-CI-02** = ROOT CAUSE PROVEN — awaiting **CORR** authorization for harness isolation
- PR #461 remains blocked on Required Gate until correction lands

## 19. Next gate

Return to ChatGPT CRITICAL review → Morris GO for `CORR-MW4-PR-CI-02` (harness/session isolation only).

## 20. Final verdict

`PASS — ROOT CAUSE PROVEN: TEST/HARNESS NON-DETERMINISM — CORRECTION GATE REQUIRED`

`PR #461 MERGE = NOT AUTHORIZED`
`MW4 = NOT CLOSED`
`MW5 = NOT AUTHORIZED`
`COGNITIVE COMPLETION = NOT PROVEN`
`RUNTIME V3 = NON ADOPTED`
`PRODUCTION MODEL ROUTING = NOT SELECTED`

---

## Appendix A — Evidence artifact index

Under `.tmp-sfia-review/qa-mw4-pr-ci-02/`:

- `git-truth.txt`, `pr-461.json`, `ci-run.json`, `ci-job.json`, `ci-failed-log.txt`, `ci-d010-excerpt.txt`, `ci-unit-test-step.yml`, `env-compare.txt`
- `d1-iter*.log`, `d2-iter*.log`, `d5-parallel-iter*.log`, `d5-serial-iter*.log`
- `d5-capture-parallel-iter*.log` (includes `CORR04_FAIL_ENVELOPE … database is locked`)
- `d5-session-only-iter*.log` (treatment 5/5 PASS)
- `d010-diag*.log`, `race-singleton-d010.mjs`, diagnostic configs/setup clones

## Appendix B — Key production excerpts

### sessionPaths.ts default

```ts
// Default: projects/sfia-studio/.sfia-exec/product/nora-session.sqlite
const studioRoot = path.resolve(process.cwd(), "..");
const productDir = path.join(studioRoot, ".sfia-exec", "product");
const dbPath = path.join(productDir, "nora-session.sqlite");
```

### orchestrateF2 catch → provider_error

```ts
} catch (error) {
  const message = error instanceof Error ? error.message : "Erreur provider inattendue.";
  return {
    ok: false,
    status: "provider_error",
    code: "PROVIDER_ERROR",
    message: ...,
    mode: modeResolution.mode,
    retryable: true,
  };
}
```
