# ChatGPT Review Pack — PRE-MW2-MODEL-BASELINE-01

| Field | Value |
| --- | --- |
| **Timestamp (Europe/Paris)** | 2026-09-01 23:35:00 CEST |
| **Cycle** | 9 — QA / validation |
| **Typologie** | DOC / ANALYSIS |
| **Profil** | CRITICAL |
| **CKC** | candidate — `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` · experimental guidance only · no execution authority |

## GO Morris consommé

**GO MORRIS — PRE-MW2-MODEL-BASELINE-01 — DIMENSIONS A+B — READ-ONLY BASELINE CHARACTERIZATION — NO RUNTIME/ENV/MODEL CHANGE — NO LIVE PROVIDER CALL — NO REAL — FULL REVIEW PACK + L3 REVIEW HANDOFF — MW2 DELIVERY NOT AUTHORIZED**

## Local Git Truth

| Item | Value |
| --- | --- |
| **Analysis worktree** | `/Users/morris/Projects/sfia-workspace-nora-mw2-readiness-requalification` |
| **Worktree HEAD** | `ce719d7d59879c8c59485420d67e007bfeefca01` (pre-merge branch tip) |
| **origin/main anchor** | `b345f3b6c74d3eac0caca5bdd5525809dd80547a` (PR #455 merge) |
| **Runtime source** | `git show origin/main:` paths — **no diff** vs `ce719d7d` for `config.ts` · `runNoraAgentsTurn.ts` · `openaiProvider.ts` · `package.json` |
| **Project mutation** | **NONE** (read-only cycle) |
| **PR #455** | MERGED @ `b345f3b6` |

## Convergence pre-check

- Build Doctrine R22 ACTIVE ON MAIN — preserved
- Trajectory: MW2 Readiness VALIDATED · OD-02 Option B CONSUMED · PR #455 integrated · **PRE-MW2 this cycle** · Delivery not authorized
- Option C / NO TA / production routing NOT SELECTED — unchanged

## Provider capability snapshot (ChatGPT input 2026-09-01)

GPT-5.6 Sol/Terra/Luna + alias `gpt-5.6` · documented efforts: none/low/medium/high/xhigh/max · **dated input only**

## Current F1 seam (origin/main @ b345f3b6)

| Seam | Finding |
| --- | --- |
| `config.ts` | `requireLiveConversationSecrets()` → `apiKey` · `model` · optional `reasoningEffort` from `OPENAI_REASONING_EFFORT` |
| `runNoraAgentsTurn.ts` | `resolveModel()` → `secrets.model` only · `Agent({ model })` · **no `modelSettings`** · `reasoningEffort` **not read** in file |
| `openaiProvider.ts` | `reasoning.effort` on **its** Responses calls only · **≠** F1 Agents path |

**F1 seam unchanged** since doc08/doc09 qualification.

## Runtime / config reference identification

| Item | Value |
| --- | --- |
| **Reference app root** | `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app` |
| **Env mechanism** | Next.js `.env.local` (present) |
| **Ambiguity check** | 4 worktrees with `.env.local` — **all** report `OPENAI_MODEL=gpt-5-mini` · no conflicting slug |
| **Studio process on :3020** | none observed |
| **node_modules** | **not installed** in reference app root — SDK inspected via `@openai/agents-core@0.17.0` npm pack + `package.json` declarations |

### Non-secret env probe

**Command:** `node` parse `.env.local` keys only · cwd `projects/sfia-studio/app`

```json
{
  "OPENAI_MODEL": "gpt-5-mini",
  "OPENAI_REASONING_EFFORT": null,
  "OPENAI_API_KEY_PRESENT": true
}
```

**Secrets hygiene:** API key value **not** printed · **not** in this pack.

---

## Dimension A — EFFECTIVE F1 MODEL

| Check | Result |
| --- | --- |
| Configured slug | `gpt-5-mini` |
| Source | `.env.local` (consistent across checked worktrees) |
| `requireLiveConversationSecrets().model` | would return `gpt-5-mini` when env loaded |
| `resolveModel()` → `Agent.model` | same slug on live F1 path |
| GPT-5.6 family | **FAIL** — `gpt-5-mini` is **not** `gpt-5.6` · not `gpt-5.6-sol/terra/luna` · not documented GPT-5.6 alias |

### Dimension A verdict

**BLOCKED**

**PRE-MW2 MODEL ALIGNMENT REQUIRED — MORRIS DECISION BEFORE DELIVERY**

Do **not** change `OPENAI_MODEL` or code in this cycle.

---

## Dimension B — EFFECTIVE F1 REASONING CONFIGURATION

### Declared vs effective matrix

| Layer | OPENAI_REASONING_EFFORT | Consumed by config parser | Consumed by `runNoraAgentsTurn` F1 | Explicit Agent `modelSettings` | Runner override |
| --- | --- | --- | --- | --- | --- |
| **Declared env** | unset | parsed as `undefined` | **no** | — | — |
| **SFIA Agent construction** | — | — | — | **absent** in `runNoraAgentsTurn` | `createNoraAgentsRunner` — no `modelSettings` |
| **SDK @ 0.17.0** | — | — | — | implicit defaults applied | see below |

### Installed / declared package versions

| Package | Version source |
| --- | --- |
| `openai` | `6.48.0` (package-lock) · `^6.48.0` package.json |
| `@openai/agents` | `^0.17.0` package.json |
| `@openai/agents-core` | `0.17.0` (inspected via npm pack — matches declared range) |

### SDK default resolution (@openai/agents-core 0.17.0)

**Source:** `dist/defaultModel.mjs` · `dist/agent.mjs` · `dist/run.mjs` (#prepareModelCall)

**Probe (local, no network):**

```text
gpt-5-mini → getDefaultModelSettings → { text: { verbosity: 'low' } }  // no reasoning.effort
gpt-5.6 / gpt-5.6-luna / gpt-5.6-sol → { reasoning: { effort: 'none' }, text: { verbosity: 'low' } }
```

**F1 path for configured model `gpt-5-mini`:**

1. `runNoraAgentsTurn` creates `Agent` with `model='gpt-5-mini'` · no `modelSettings` arg.
2. Agent constructor: `_modelSettingsExplicitlyConfigured=false` · internal `modelSettings` from `getDefaultModelSettings('gpt-5-mini')` → **no `reasoning` key**.
3. Runner `#prepareModelCall`: `hasExplicitAgentModelSettings=false` → `implicitModelSettings=getDefaultModelSettings('gpt-5-mini')` → merged modelSettings **omit `reasoning.effort`**.
4. `reasoningEffortImplicit` flag in runner would be **false** (no implicit effort defined for gpt-5-mini pattern table).

### Effective reasoning verdict (for current configured model)

| Property | Value |
| --- | --- |
| **effective `reasoning.effort`** | **OMITTED** from resolved Agent/Runner `modelSettings` (not `none`/`low`/etc. — key absent) |
| **effective `reasoning.mode`** | **not set** in SDK defaults for this model |
| **effective `reasoning.context`** | **not set** in SDK defaults · SFIA explicit wiring **absent** · provider observable behavior **NON PROVEN** without REAL |
| **OPENAI_REASONING_EFFORT** | **≠** effective F1 effort (unset · not passed to Agent) |

### Dimension B verdict

**CHARACTERIZED for current config** — effort **omitted** at modelSettings resolution for `gpt-5-mini`.

**Reserve:** `reasoning.context` provider/runtime observable behavior **DEFER / NON PROVEN** without separate authorization.

**Note:** If model were aligned to GPT-5.6 family, static SDK defaults would apply `reasoning.effort: 'none'` (+ `text.verbosity: 'low'`) unless explicit `modelSettings` override — **hypothetical** · not current effective baseline.

---

## Fake / REAL qualification

| Item | Value |
| --- | --- |
| **Applicable** | YES — provider boundary subject |
| **REAL executed** | **NO** |
| **Proof ceiling this cycle** | CONFIG + installed SDK static resolution |
| **Historical MW0/MW1 REAL** | GPT-5.6 Luna + none — **≠** current F1 effective baseline |
| **Morris REAL GO** | **NOT CONSUMED** |

---

## Blockers / reserves

| ID | Class | Detail |
| --- | --- | --- |
| **BLK-PRE-MW2-A-GPT56** | **BLOCKING** | `OPENAI_MODEL=gpt-5-mini` ∉ GPT-5.6 family |
| **RES-PRE-MW2-B-CONTEXT** | **NON-BLOCKING** | `reasoning.context` observable behavior not proven without REAL |
| **GAP-MW2-F1-MODELSETTINGS-01** | **Delivery gap (known)** | SFIA does not pass explicit `modelSettings.reasoning` — remains for Delivery |

---

## Claims authorized

- PRE-MW2 characterization executed read-only
- Effective F1 model slug **determined**: `gpt-5-mini`
- F1 code path reaches Agent with that slug
- GPT-5.6 alignment **not** verified for reference runtime
- OPENAI_REASONING_EFFORT unset · not consumed on F1
- SDK 0.17.0 static defaults traced for `gpt-5-mini`: **no `reasoning.effort` in resolved settings**
- No live OpenAI call · no secrets published
- MW2 Delivery **not** authorized

## Claims forbidden

- PRE-MW2 SATISFIED
- GPT-5.6 baseline verified on reference runtime
- production model/reasoning selected
- OPENAI_REASONING_EFFORT = effective F1 reasoning
- REAL boundary proven for current baseline
- MW2 Delivery eligible
- GAP-MW2-F1-MODELSETTINGS-01 closed

---

## PRE-MW2 final verdict

### PRE-MW2-MODEL-BASELINE-01 — NOT SATISFIED

**Primary blocker:** **BLK-PRE-MW2-A-GPT56** — reference `OPENAI_MODEL=gpt-5-mini` is outside required GPT-5.6 family.

**DecisionRequest (report only):** Morris decision required on **model alignment to GPT-5.6** before MW2 Delivery eligibility.

Dimension B is **characterized** for the actual configured model (reasoning effort **omitted** at SDK resolution) but does **not** overcome Dimension A failure.

---

## Delivery eligibility

**MW2 Delivery — NOT ELIGIBLE**

PRE-MW2 prerequisite **not satisfied**. Distinct Morris GO — MW2 Delivery **not** for consideration until alignment blocker resolved and PRE-MW2 re-run or Morris accepts alternate baseline policy.

---

## Actions NOT executed

- Runtime/code/env mutation · model change · npm install · live API · REAL · D0/EVAL · Delivery · project commit/PR/merge

---

## Next gate

1. Morris decision — **GPT-5.6 model alignment** for reference runtime (or explicit alternate baseline policy)
2. Re-run PRE-MW2 after alignment (if Morris GO)
3. Only if PRE-MW2 SATISFIED → ChatGPT Critical Baseline Review → Morris distinct GO — MW2 Delivery
