# ChatGPT Review Pack — PRE-MW2 Aligned Baseline Re-run

| Field | Value |
| --- | --- |
| **Timestamp (Europe/Paris)** | 2026-09-01 23:55:00 CEST |
| **Cycle** | 9 — QA / validation |
| **Typologie** | DOC / ANALYSIS + LOCAL NON-VERSIONED CONFIG ALIGNMENT |
| **Profil** | CRITICAL |
| **CKC** | candidate — `04-qa-validation.md` pilot · experimental guidance only |

## GO Morris consommé

**GO MORRIS — ALIGN PRE-MW2 REFERENCE RUNTIME OPENAI_MODEL TO gpt-5.6-luna — LOCAL ENV CONFIG ONLY — NO CODE/GIT CHANGE — NO LIVE CALL — THEN RE-RUN PRE-MW2 A+B**

## Git truth

| Item | Value |
| --- | --- |
| **Repository root** | `/Users/morris/Projects/sfia-workspace` |
| **Local branch** | `delivery/sfia-studio-product-completion-w3-b-terminal-evidence` |
| **Local HEAD** | `ba7aa2db408b7fd00faf9638da060ce0833b794b` |
| **origin/main** | `b345f3b6c74d3eac0caca5bdd5525809dd80547a` |
| **Code analysis anchor** | `origin/main` (F1 seams) |
| **Tracked project mutation** | **NONE** (`git status --short` clean after env align) |
| **Previous handoff** | `398e65ed56f8e73610e99c6a3b71308a0e616f85` |
| **Previous verdict** | NOT SATISFIED · BLK-PRE-MW2-A-GPT56 |

## Reference runtime

| Item | Value |
| --- | --- |
| **App root** | `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app` |
| **Env file** | `.env.local` (reference only — other worktrees **not** mutated) |

### Sanitized env BEFORE

```json
{
  "OPENAI_MODEL": "gpt-5-mini",
  "OPENAI_REASONING_EFFORT": null,
  "OPENAI_API_KEY_PRESENT": true
}
```

### Authorized mutation

**ONLY** `OPENAI_MODEL=gpt-5.6-luna` in reference `.env.local`

### Sanitized env AFTER

```json
{
  "OPENAI_MODEL": "gpt-5.6-luna",
  "OPENAI_REASONING_EFFORT": null,
  "OPENAI_API_KEY_PRESENT": true
}
```

### Change matrix

| Variable | Before | After | Changed? |
| --- | --- | --- | --- |
| OPENAI_MODEL | gpt-5-mini | gpt-5.6-luna | **YES** (authorized) |
| OPENAI_REASONING_EFFORT | unset | unset | NO |
| OPENAI_API_KEY_PRESENT | true | true | NO |

**Secrets hygiene:** API key value never printed.

---

## Current F1 seam (origin/main @ b345f3b6)

| File | Finding |
| --- | --- |
| `config.ts` | `requireLiveConversationSecrets()` → model + optional reasoningEffort |
| `runNoraAgentsTurn.ts` | `resolveModel()` → `secrets.model` · `Agent({ model })` · **no modelSettings** · reasoningEffort **not consumed** |
| `createNoraAgentsRunner` | no Runner `modelSettings` override |
| `openaiProvider.ts` | `reasoning.effort` on Responses seam only · ≠ F1 Agents proof |

**F1 seam unchanged** since prior PRE-MW2 / doc09.

---

## Dimension A — EFFECTIVE F1 MODEL (re-run)

| Check | Result |
| --- | --- |
| Reference runtime | unambiguous (single reference `.env.local` mutated) |
| Configured slug | `gpt-5.6-luna` |
| Env → secrets.model path | `OPENAI_MODEL` → `requireLiveConversationSecrets().model` |
| F1 reachability | `resolveModel()` → `Agent.model` |
| GPT-5.6 family | **PASS** — documented Luna tier |

### Dimension A verdict

**PASS**

**EFFECTIVE F1 CONFIGURED MODEL = gpt-5.6-luna** (reference baseline only · ≠ production selection · ≠ provider response observed)

---

## Installed dependency state (reference app root)

| Check | Result |
| --- | --- |
| `node_modules` | **present** (partial install) |
| `@openai/agents` | **NOT INSTALLED** |
| `@openai/agents-core` | **NOT INSTALLED** |
| `openai` | **6.48.0** installed |

**Command:** `npm ls @openai/agents @openai/agents-core openai` · cwd `projects/sfia-studio/app`

```text
sfia-studio@0.1.0
└── openai@6.48.0
```

**package.json on origin/main declares:** `@openai/agents ^0.17.0` · `openai ^6.48.0`

**npm install/ci/update:** **NOT PERFORMED** (forbidden)

---

## Dimension B — EFFECTIVE F1 REASONING (re-run)

### Installed SDK baseline

**NOT PROVEN** — `@openai/agents` / `@openai/agents-core` not resolvable from reference runtime `node_modules`.

Cannot inspect **local installed** `defaultModel.mjs` / Agent resolution without installed packages.

### Declared vs effective matrix (code + env only)

| Layer | Value |
| --- | --- |
| OPENAI_REASONING_EFFORT declared | unset |
| Consumed by config parser | yes → `undefined` |
| Consumed by F1 `runNoraAgentsTurn` | **NO** |
| Explicit Agent `modelSettings.reasoning` | **NO** |
| Explicit Runner reasoning override | **NO** |
| Installed SDK defaults for gpt-5.6-luna | **NOT PROVEN** (packages absent) |
| Effective resolved F1 effort | **NOT PROVEN** from installed runtime |

### Secondary corroboration (non-primary · prior cycle)

Published `@openai/agents-core@0.17.0` static analysis (npm pack, **not** installed reference) indicated for `gpt-5.6-luna`:

```json
{ "reasoning": { "effort": "none" }, "text": { "verbosity": "low" } }
```

**This does not satisfy** the "actually installed SDK" requirement for Dimension B PASS in this cycle.

### Dimension B verdict

**NOT PROVEN — INSTALLED RUNTIME BASELINE NOT AVAILABLE**

**STOP classification:** PRE-MW2 DIMENSION B — INSTALLED SDK BASELINE NOT PROVEN — DEPENDENCY INSTALLATION/REFERENCE RUNTIME DECISION REQUIRED

---

## GAP-MW2-F1-MODELSETTINGS-01

**REMAINS OPEN** — Delivery gap. SFIA does not explicitly pass `modelSettings.reasoning` on F1. PRE-MW2 characterization ≠ gap closure.

---

## Fake / REAL

| Item | Value |
| --- | --- |
| Applicable | YES |
| Live OpenAI | **NO** |
| REAL GO | NOT CONSUMED |
| Proof ceiling | LOCAL CONFIG (A) + **installed SDK static (B) — incomplete** |
| MW0/MW1 REAL Luna+none | provenance only |

---

## Blockers / reserves

| ID | Class | Detail |
| --- | --- | --- |
| **BLK-PRE-MW2-B-INSTALLED-SDK** | **BLOCKING** | `@openai/agents` / `@openai/agents-core` not installed at reference app root |
| BLK-PRE-MW2-A-GPT56 | **CLOSED** | model aligned to gpt-5.6-luna |
| RES-B-CONTEXT | deferred | reasoning.context provider behavior — cannot assess without installed SDK or REAL |

---

## PRE-MW2 final verdict

### PRE-MW2-MODEL-BASELINE-01 — NOT SATISFIED

**CASE C:** Dimension A **PASS** + Dimension B installed-runtime baseline **NOT PROVEN**

**Primary blocker:** BLK-PRE-MW2-B-INSTALLED-SDK — reference `node_modules` lacks `@openai/agents` / `@openai/agents-core` despite `package.json` declaration on `origin/main`.

---

## Delivery eligibility

**MW2 Delivery — NOT ELIGIBLE**

Morris distinct GO — MW2 Delivery **not** for consideration until PRE-MW2 satisfied.

---

## Actions NOT executed

- npm install/ci/update · code/git change · other worktrees `.env.local` · live OpenAI · REAL · Delivery · project commit/PR

---

## DecisionRequest (report only)

Morris decision required on **reference runtime dependency installation** (or alternate reference runtime with `@openai/agents@0.17.x` actually installed) before Dimension B can complete without violating read-only constraints.

---

## Next gate

1. Morris decision — install/reference runtime for Agents SDK locally **OR** authorize alternate PRE-MW2 B characterization path
2. Re-run PRE-MW2 Dimension B after installed SDK available
3. Only if PRE-MW2 SATISFIED → ChatGPT Critical Baseline Review → Morris GO — MW2 Delivery
