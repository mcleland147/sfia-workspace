# SFIA Review Pack — FULL — Cycle 13 PR Readiness F2

| Champ | Valeur |
|-------|--------|
| **Rôle** | Cycle 13 — PR readiness F2 Qualification + Proposition + Gate SFIA Studio |
| **Synthesis-only** | **NO** |
| **Niveau** | FULL |
| **GO Morris exact** | `GO PR READINESS — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO — STANDARD` |
| **Cycle / opération** | PR Readiness F2 |
| **Profil SFIA** | Standard |
| **Typologie** | RUN |
| **Qualification** | Qualification + Proposition + Gate (F2) — Project Assistant SFIA Studio |
| **Template / méthode / CKC** | QualifyCycleWithCkc + catalogue cycle types; DecisionServices HumanDecision; ConversationProvider Structured Outputs |
| **Branch** | `delivery/sfia-studio-f2-qualification-proposal-gate` |
| **Base / origin/main** | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| **Commit SHA (HEAD)** | `fa25c940ad66033f6ad873f816d7a9c2868622d7` |
| **Parent (HEAD^)** | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| **merge-base(HEAD, origin/main)** | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| **Commits ahead of origin/main** | 1 |
| **Local worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery` |
| **Inbound handoff tip** | `5e835630f7ffe0a877afc2091d0692c788f5047c` |
| **Inbound handoff blob** | `3fe5810154fa883f057fe9441414750325a03790` |
| **Timestamp Europe/Paris (CEST)** | 2026-08-10 23:13:28 CEST (+0200) |
| **Timestamp UTC** | 2026-08-10 21:13:28 UTC |
| **Repository** | `mcleland147/sfia-workspace` |

---

## Verdict (exact)

```
F2 PR READINESS COMPLETE WITH RESERVES —
R-FinOps-PG · R-Process-Local · R-F2-SEMANTIC-CALIBRATION —
NO BLOCKING / MAJOR FINDING —
PR BODY READY —
NO PROJECT PUSH / PR / MERGE —
READY FOR CHATGPT REVIEW / MORRIS PUSH + CREATE PR DECISION
```

**Statut :** READY FOR PR WITH RESERVES

**Gate suivant (candidate — NOT consumed):**
```
GO PUSH + CREATE PR — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO
```

---

## 0. GO / inbound / truth

### GO Morris exact (consommé)
`GO PR READINESS — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO — STANDARD`

Autorise : revue read-only, QA fake, Review Pack FULL, publication Review Handoff L3 borné, draft PR body.
N’autorise PAS : modification contenu projet, commit projet, amend, rebase, push projet, `gh pr create`, merge, live OpenAI, npm install, package.json.

### Inbound handoff (verified)
| Field | Value |
|---|---|
| tip | `5e835630f7ffe0a877afc2091d0692c788f5047c` |
| blob | `3fe5810154fa883f057fe9441414750325a03790` |
| message | `docs(review-handoff): publish F2 commit gate` |
| Rôle | F2 Commit Gate — Qualification + Proposition + Gate SFIA Studio |
| GO exact | `GO COMMIT — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO` |
| Synthesis-only | **NO** |
| Files | **25** (17 M + 8 A) |
| Fixture | **9/9 PASS** (transported) |
| Live | **4/4 PASS** (transported) |
| Commit SHA | `fa25c940ad66033f6ad873f816d7a9c2868622d7` |
| Verdict entrant | `READY FOR CHATGPT REVIEW / MORRIS PR READINESS GATE` |

### Local Git Truth
```text
branch: delivery/sfia-studio-f2-qualification-proposal-gate
HEAD:   fa25c940ad66033f6ad873f816d7a9c2868622d7
HEAD^:  1847fc61f384e13b15651ed914286fe87ac7133c
origin/main: 1847fc61f384e13b15651ed914286fe87ac7133c
merge-base: 1847fc61f384e13b15651ed914286fe87ac7133c
ahead: 1
status: ?? .tmp-sfia-review/ only
staged: empty
log tip: feat(sfia-studio): add F2 qualification proposal gate
```
Base drift: **PASS** · Dirty tracked: **PASS** · Commit drift: **PASS**

---

## 1. Package exactness (25 files)

`git diff --name-status 1847fc61f384e13b15651ed914286fe87ac7133c..HEAD` → **exactly 25 files (17 M + 8 A)**. `git diff --check` exit 0.

### Modified (17)
- `projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts`
- `projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts`
- `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`
- `projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx`
- `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`
- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/index.ts`
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/features/project-assistant/project-assistant.module.css`
- `projects/sfia-studio/app/features/project-assistant/types.ts`
- `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
- `projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts`
- `projects/sfia-studio/app/lib/platform/ai/types.ts`
- `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

### Created (8)
- `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/gatePolicy.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/qualify.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/types.ts`

### Stat
```text
.../app/__tests__/ops1/openai-provider.test.ts     |  54 ++
 .../app/__tests__/platform/platform-ai.test.ts     |  16 +
 .../ProjectAssistantPanel.test.tsx                 |  22 +-
 .../project-assistant/f2.orchestrate.test.ts       | 546 +++++++++++++++++++++
 .../project-assistant/importBoundaries.test.ts     |  11 +-
 .../importBoundaries.test.ts                       |   1 +
 .../vertical-slice-ui/createProjectUi.test.tsx     |  38 +-
 .../project-assistant/ProjectAssistantPanel.tsx    | 285 ++++++++++-
 .../app/features/project-assistant/actions.ts      | 147 +++++-
 .../features/project-assistant/f2/gatePolicy.ts    |  77 +++
 .../project-assistant/f2/intentAnalysis.ts         | 280 +++++++++++
 .../features/project-assistant/f2/orchestrateF2.ts | 411 ++++++++++++++++
 .../features/project-assistant/f2/proposalStore.ts |  83 ++++
 .../app/features/project-assistant/f2/qualify.ts   |  60 +++
 .../project-assistant/f2/recordDecision.ts         | 258 ++++++++++
 .../app/features/project-assistant/f2/types.ts     | 127 +++++
 .../app/features/project-assistant/index.ts        |   1 +
 .../features/project-assistant/orchestrateTurn.ts  |   1 +
 .../project-assistant/project-assistant.module.css | 126 +++++
 .../app/features/project-assistant/types.ts        |  62 ++-
 .../app/lib/platform/ai/fakeProvider.ts            | 232 +++++++++
 .../app/lib/platform/ai/openaiProvider.ts          |  57 +++
 projects/sfia-studio/app/lib/platform/ai/types.ts  |   9 +
 .../vertical-slice-core/localProjectComposition.ts |   6 +
 .../app/lib/vertical-slice-runtime/service.ts      |  58 ++-
 25 files changed, 2929 insertions(+), 39 deletions(-)
```
Scope drift: **NONE** · Forbidden files: **NONE**

Proofs saved: `.tmp-sfia-review/f2-pr-readiness/{name-status,stat,truth}.txt`

---

## 2. File review matrix (all 25)

| PATH | ROLE | EXPECTED IN F2 | RISK | VERDICT |
|---|---|---|---|---|
| `projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts` (M) | TEST | YES — structured provider coverage (test-only path) | LOW | ACCEPT |
| `projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts` (M) | TEST | YES — fake completeStructured | LOW | ACCEPT |
| `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx` (M) | TEST | YES — UI regression F1/F2 | LOW | ACCEPT |
| `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts` (A) | TEST | YES — F2 AC orchestration | LOW | ACCEPT |
| `projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts` (M) | TEST | YES — F1+F2 boundary guard | LOW | ACCEPT |
| `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts` (M) | TEST | YES — allowlisted actions import | LOW | ACCEPT |
| `projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx` (M) | TEST | YES — OA stack wiring side-effect | LOW | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx` (M) | UI | YES — F2 cards + gate CTAs | MED | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/actions.ts` (M) | SERVER ACTION | YES — send + decide | MED | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/f2/gatePolicy.ts` (A) | CORE F2 | YES — Morris gate policy | MED | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts` (A) | CORE F2 | YES — Structured Outputs + validator | HIGH | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts` (A) | CORE F2 | YES — F1/F2 orchestration | HIGH | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts` (A) | CORE F2 | YES — process-local store | MED | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/f2/qualify.ts` (A) | CORE F2 | YES — CKC qualification | MED | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts` (A) | CORE F2 | YES — authority + decision | HIGH | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/f2/types.ts` (A) | CORE F2 | YES — DTOs | LOW | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/index.ts` (M) | EXPORT | YES — F2TurnPayload export | LOW | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts` (M) | F1 PATH | YES — model telemetry | LOW | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/project-assistant.module.css` (M) | UI CSS | YES — F2 layout styles | LOW | ACCEPT |
| `projects/sfia-studio/app/features/project-assistant/types.ts` (M) | DTO | YES — F2 payload types | LOW | ACCEPT |
| `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts` (M) | PLATFORM | YES — F2 fixture markers | MED | ACCEPT |
| `projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts` (M) | PLATFORM | YES — completeStructured live | HIGH | ACCEPT |
| `projects/sfia-studio/app/lib/platform/ai/types.ts` (M) | PLATFORM | YES — provider interface | LOW | ACCEPT |
| `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts` (M) | RUNTIME | YES — expose projectServices/clock | MED | ACCEPT |
| `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts` (M) | RUNTIME | YES — OA stack for F2 | MED | ACCEPT |

---

## 3. Granularity assessment

**ONE coherent F2 PR** — qualification + proposal + gate + platform Structured Outputs + OA runtime wiring + UI + tests form a single atomic product surface. Split would leave an incomplete assistant path. **PR-R22 PASS.**

---

## 4. Security review

| Check | Result |
|---|---|
| Secret values in commit (`OPENAI_API_KEY=…`, real `sk-…`, private keys) | **NONE** |
| Test stub `OpenAIConversationProvider("sk-test", …)` | **NON-BLOCKING** — fake constructor arg in unit test only |
| Env var **names** (`OPENAI_API_KEY`) | OK |
| Client-trusted authority | **Rejected** — ignored in `recordF2Decision` |
| Fail-closed live→fixture | **PASS** — unavailable when live config missing |
| Write / Cursor / ExecutionRun surfaces | **ABSENT** |

**Security verdict:** PASS (no blocking/major).

---

## 5. Authority review

| Control | Evidence | Result |
|---|---|---|
| Server-side evidence register | `MemoryAuthorityResolver.register` N3 scoped `f2-proposal:…` | PASS |
| Hostile client fields ignored | `void canActAsMorris/claimedAuthorityLevel` | PASS |
| Stale context | `contextMatches` → STALE, no silent GO | PASS |
| GO WITH RESERVES text required | `RESERVES_REQUIRED` | PASS |
| `isMorrisDecision: false` on qualification | `qualify.ts` | PASS |
| Decision no execution | `executionPerformed: false` | PASS |
| Local demo actor disclosed | `actor:local-morris-demo` + process-local notice | ACCEPT (design) |

**Authority verdict:** PASS — boundaries preserved.

---

## 6. Structured Outputs review

| Control | Evidence | Result |
|---|---|---|
| Generic provider API | `ConversationProvider.completeStructured?` | PASS |
| OpenAI Responses strict json_schema | `openaiProvider.completeStructured` `strict: true` | PASS |
| Domain schema | `F2_INTENT_JSON_SCHEMA` + `f2_intent_analysis` | PASS |
| Server validator fail-closed | `validateIntentAnalysisPayload` → ambiguous | PASS |
| No heuristic invent cycle/signals | missing signals / unknown cycle → ambiguous | PASS |
| Requires completeStructured | TechnicalError if missing | PASS |

**Structured Outputs verdict:** PASS.

---

## 7. Import boundaries

Production scan of changed non-test paths for `@/lib/ops1`, `@/features/ops1`, `execution-run`, `selectedAgentRef`, Cursor execution imports: **NO HITS**.

`__tests__/ops1/openai-provider.test.ts` is **test-only** coverage of platform `OpenAIConversationProvider` (path historical; no product OPS1 coupling).

`importBoundaries` tests PASS in targeted + broad suites.

**Import / OPS1 verdict:** PASS — PR-R14/PR-R15.

---

## 8. User Trust / provenance

| Signal | Result |
|---|---|
| Initial mode pill `MODE À CONFIRMER` until first response | PASS |
| Fixture vs live labels + model telemetry | PASS |
| `[TEST/FAKE · NON LIVE]` / `[LIVE]` in F2 text | PASS |
| Ephemeral / process-local notices | PASS |
| Labels RECOMMANDATION ≠ DÉCISION | PASS |
| AUCUNE EXÉCUTION always shown | PASS |

**User Trust verdict:** PASS.

---

## 9. Findings (severity)

| ID | Severity | Finding |
|---|---|---|
| — | — | **No BLOCKING / MAJOR findings.** |
| F-1 | RESERVE | **R-F2-SEMANTIC-CALIBRATION** — live L2 reporting → `cyc:framing`/Critical/gate (semantic, not mechanical defect). |
| F-2 | RESERVE | **R-Process-Local** — process-local proposal/decision durability (accepted). |
| F-3 | RESERVE | **R-FinOps-PG** — postgres suite excluded environmentally. |
| F-4 | MINOR | Historical test path `__tests__/ops1/openai-provider.test.ts` may confuse readers; content is platform-AI only (non-blocking). |

No silent fixes applied (review-only).

---

## 10. Tests / typecheck / lint / build (fake only)

Env: `OPS1_CONVERSATION_PROVIDER=fake`; `OPENAI_API_KEY` / `OPENAI_MODEL` unset. **No npm install. No live OpenAI.**

### Targeted
```text
npx vitest run __tests__/project-assistant __tests__/platform/platform-ai.test.ts \
  __tests__/ops1/openai-provider.test.ts __tests__/vertical-slice-runtime/importBoundaries.test.ts \
  __tests__/vertical-slice-ui/createProjectUi.test.tsx __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx \
  __tests__/shell.test.tsx
→ Test Files 10 passed / Tests 58 passed
```

### Broad (exclude FinOps postgres)
```text
npx vitest run --exclude '__tests__/oa/finops/postgres/**'
→ Test Files 157 passed / Tests 1605 passed
```

### Quality gates
| Command | Result |
|---|---|
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** (No ESLint warnings or errors) |
| `npm run build` | **PASS** (Next.js 15.5.20) |
| `git diff --check 1847fc61f384e13b15651ed914286fe87ac7133c..HEAD` | **PASS** |
| Post-QA `git status --short` | `?? .tmp-sfia-review/` only |

---

## 11. Live / fixture proofs — TRANSPORTED (NOT RERUN)

**LIVE PROOF TRANSPORTED — NOT RERUN IN PR READINESS**

| Proof | Result | Source |
|---|---|---|
| Fixture métier R1–R9 | **9/9 PASS** | `.tmp-sfia-review/f2-live-correction/fixture-rerun-results.json` + Commit Gate handoff |
| Live L1–L4 (`gpt-5.6-sol`) | **4/4 PASS** | `.tmp-sfia-review/f2-live-correction/live-results.json` |
| Live call count | **4** | same |
| L2 observed | `cyc:framing` / Critical / DÉCISION REQUISE | feeds **R-F2-SEMANTIC-CALIBRATION** |

---

## 12. PR criteria PR-R1..PR-R24

| ID | Criterion | Result |
|---|---|---|
| PR-R1 | HEAD exact `fa25c940…` | **PASS** |
| PR-R2 | parent/base exact `1847fc61…` | **PASS** |
| PR-R3 | single commit ahead | **PASS** |
| PR-R4 | package exact 25 files | **PASS** |
| PR-R5 | no forbidden files | **PASS** |
| PR-R6 | no secrets | **PASS** |
| PR-R7 | no staged/dirty tracked | **PASS** |
| PR-R8 | targeted tests PASS | **PASS** |
| PR-R9 | regression PASS excl. FinOps PG | **PASS** |
| PR-R10 | typecheck PASS | **PASS** |
| PR-R11 | lint PASS | **PASS** |
| PR-R12 | build PASS | **PASS** |
| PR-R13 | diff-check PASS | **PASS** |
| PR-R14 | import boundaries PASS | **PASS** |
| PR-R15 | no production OPS1 dep | **PASS** |
| PR-R16 | no F3 / ExecutionRun / Cursor | **PASS** |
| PR-R17 | Structured Outputs generic + strict validator | **PASS** |
| PR-R18 | authority server-side / scoped | **PASS** |
| PR-R19 | fixture 9/9 transported | **PASS** |
| PR-R20 | live 4/4 transported | **PASS** |
| PR-R21 | reserves classified, not hidden | **PASS** |
| PR-R22 | one coherent F2 delivery | **PASS** |
| PR-R23 | PR body complete | **PASS** |
| PR-R24 | no push/PR/merge | **PASS** |

Essential FAIL count: **0**

---

## 13. PR candidates (prepare only — NOT created)

**Title:** `feat(sfia-studio): add F2 qualification proposal gate`

### Body (prepared)

```markdown
## Summary
- Adds F2 qualification + structured proposal + human Morris gate on the Studio Project Assistant, while preserving the F1 informative conversation path.
- Natural actionable intents produce SFIA cycle qualification (CKC) and a structured proposal; structuring / Critical / impactful intents open an explicit Morris decision gate.
- Human decisions (GO / GO WITH RESERVES / NO-GO / AMEND) are captured server-side and **do not execute** anything (no Cursor, no Git/GitHub write, no ExecutionRun, no OPS1 destination).

## What changed
- New `features/project-assistant/f2/**` modules: intent analysis (Structured Outputs), qualify, gate policy, proposal store (process-local), orchestrate, recordDecision.
- Platform AI: optional `completeStructured` on ConversationProvider; OpenAI Responses `json_schema` strict; Fake provider F2 markers.
- Runtime: shared process-local OA stack (cycle/CKC/decision/authority) wired for F2 decisions.
- UI: ProjectAssistantPanel shows RECOMMANDATION / PROPOSITION / DÉCISION REQUISE / DÉCISION PRISE / AUCUNE EXÉCUTION + gate CTAs.
- Tests: F2 orchestration AC suite + provider/import/UI coverage (25-file package: 17 M + 8 A).

## Functional flow
1. User message → server `projectAssistantSendAction` → `orchestrateAssistantSend`.
2. Structured intent analysis (`completeStructured` + fail-closed server validation).
3. **informative** → existing F1 turn (tools/conversation preserved).
4. **ambiguous** / parse fail → clarification only (no proposal).
5. **actionable** / **execution_request** → CKC qualify → proposal; Critical without justification blocks; Morris gate when policy requires.
6. Gate decisions via `projectAssistantDecideAction` → OA HumanDecision; **executionPerformed: false** always.

## Live structured intent correction
- Live path uses GPT-5.6 Sol Responses Structured Outputs (`json_schema` strict).
- Domain validator remains fail-closed (unknown cycle / missing signals → ambiguous).
- No heuristic fallback that invents cycle/signals after provider failure.
- Live recette after correction: L1–L4 **4/4 PASS** (transported; not rerun in PR readiness).

## Human-decision safeguards
- Client authority claims (`canActAsMorris`, `claimedAuthorityLevel`) ignored.
- Authority evidence registered server-side, scoped to `f2-proposal:<id>`.
- Stale Project/LPS/doctrine context refuses silent GO.
- GO WITH RESERVES requires explicit reserves text.
- Decision never triggers Cursor / PR / merge / ExecutionRun.

## Validation (this PR readiness cycle — fake only)
- Targeted vitest: **58/58 PASS**
- Broad vitest (exclude FinOps postgres): **1605/1605 PASS**
- `npm run typecheck` / `lint` / `build`: **PASS**
- `git diff --check` base..HEAD: **PASS**
- Import boundaries: **PASS** (no production `@/lib/ops1`, `@/features/ops1`, execution-run, selectedAgentRef, Cursor)
- Secret scan (commit content values): **PASS** (test stub `sk-test` constructor arg only; no live secrets)

## Live proof
**LIVE PROOF TRANSPORTED — NOT RERUN IN PR READINESS**
- Fixture métier: **9/9 PASS** (from Delivery corrective / Commit Gate handoff)
- Live natural-language (`gpt-5.6-sol`): **4/4 PASS** (L1 informative, L2 actionable, L3 structuring/gate, L4 execution-bounded)
- Historical live call count: **4**

## Known limitations / reserves
- **R-FinOps-PG** — FinOps postgres suite ECONNREFUSED without local DB; environmental non-blocking; suite excluded from green gate.
- **R-Process-Local** — proposal/decision store process-local / non-durable (accepted design limitation).
- **R-F2-SEMANTIC-CALIBRATION** — live L2 “ajouter un module de reporting financier” classified `cyc:framing` / Critical / Morris gate; technical chain OK; watch Critical over-classification in future QA/corpus (open, non-blocking).

## Out of scope
- F3 / ExecutionRun / Cursor product execution
- Durable persistence / IAM
- OPS1 deletion / product OPS1 coupling
- FinOps / GreenOps / Studio UX cleanup beyond F2 labels/gate
- Remote branch push / CI claim / production readiness

## Risk / rollback
- Risk: process-local proposals vanish on restart (disclosed in UI).
- Risk: semantic over-gating (reserve) may increase Morris prompts for borderline intents.
- Rollback: revert single commit `fa25c940…` on `delivery/sfia-studio-f2-qualification-proposal-gate` (branch not yet pushed).

## Checklist
- [x] F1 informative path preserved
- [x] F2 actionable → qualification + proposal
- [x] Structuring → Morris gate
- [x] Decision does not execute
- [x] GPT-5.6 Sol Structured Outputs + strict server-side validation
- [x] No heuristic inventing cycle/signals
- [x] No production OPS1 dependency
- [x] Process-local persistence disclosed
- [x] Semantic calibration reserve documented
- [x] Fixture 9/9 + live 4/4 transported
- [x] PR readiness fake QA green
- [ ] Branch push (Morris gate — not this cycle)
- [ ] PR create (Morris gate — not this cycle)
```

Also saved: `.tmp-sfia-review/f2-pr-readiness/pr-body.md`

Branch **not pushed**. No PR URL/number/CI invented.

---

## 14. Réserves

| ID | Topic | Status |
|---|---|---|
| **R-FinOps-PG** | FinOps postgres ECONNREFUSED | NON-BLOCKING |
| **R-Process-Local** | Process-local proposal/decision store | ACCEPTED LIMITATION |
| **R-F2-SEMANTIC-CALIBRATION** | Live L2 framing/Critical over-classification watch | OPEN / NON-BLOCKING |

---

## 15. Mutation counters

| Mutation | Count |
|---|---:|
| project content modifications | **0** |
| new project commits | **0** |
| project pushes | **0** |
| PR | **0** |
| merge | **0** |
| live OpenAI calls | **0** |
| Cursor product execution | **0** |
| ExecutionRun | **0** |
| OPS1 product changes | **0** |
| FinOps changes | **0** |
| npm install | **0** |
| handoff push | **1** (this publish) |

---

## 16. Anti-claims

- No project content change / commit / push / PR / merge in this cycle
- No live OpenAI rerun; fixture 9/9 + live 4/4 are **transported**
- Does not claim FinOps postgres green
- Does not claim durable persistence / IAM / F3 / product-ready global
- Does not invent remote PR URL, CI, or mergeability
- Does not claim OPS1 deleted

---

## 17. Final git truth (pre-handoff publish)

```text
branch: delivery/sfia-studio-f2-qualification-proposal-gate
HEAD:   fa25c940ad66033f6ad873f816d7a9c2868622d7  (UNCHANGED)
origin/main: 1847fc61f384e13b15651ed914286fe87ac7133c
ahead: 1
tracked/staged: clean
untracked: ?? .tmp-sfia-review/
upstream delivery: NONE
project push / PR / merge: NOT performed
```

---

## 18. Gate suivant (candidate)

```
GO PUSH + CREATE PR — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO
```
**NOT consumed.** Morris decides after ChatGPT review.

---

**Reduction log:** NONE — all 8 created files included in full; all 17 modified files included as full unified diffs.

---

## Completeness — created files (FULL content from commit)

### CREATED FULL — `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`

```typescript
/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  evaluateMorrisGateRequired,
} from "@/features/project-assistant/f2/gatePolicy";
import {
  resetF2ProposalStoreForTests,
  getProposal,
  saveProposal,
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
} from "@/features/project-assistant/f2/proposalStore";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import { qualifyWithCkc } from "@/features/project-assistant/f2/qualify";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", async () => {
  const actual = await vi.importActual<
    typeof import("@/lib/vertical-slice-runtime/actions")
  >("@/lib/vertical-slice-runtime/actions");
  return {
    ...actual,
    getProjectRuntimeAction: getProjectRuntimeActionMock,
  };
});

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:f2-demo",
    name: "Projet F2",
    shortReference: "F2",
    objective: "Tester qualification et gate.",
    contextSummary: "Contexte process-local F2.",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:f2",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:f2-demo",
    version: 1 as const,
    createdAt: "2026-08-10T12:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "NOT_GUARANTEED" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    messages: [] as const,
  },
};

describe("F2 orchestration AC coverage", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("AC-F2-01 informative remains F1 without proposal", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Résume l'objectif __F2_INFORMATIVE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f1_informative");
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/TEST\/FAKE/);
  });

  it("AC-F2-02/04/05/06/08/09/10 actionable qualifies and proposes", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification).toBeTruthy();
    expect(result.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(result.f2?.qualification?.recommendationLabel).toMatch(/RECOMMANDATION/);
    expect(result.f2?.proposal).toBeTruthy();
    expect(result.f2?.proposal?.outOfScope.length).toBeGreaterThan(0);
    expect(result.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");
    expect(result.f2?.proposal?.agentBinding).toBe("NOT_AVAILABLE");
    expect(JSON.stringify(result.f2?.proposal)).not.toMatch(/executing|completed|failed/);
  });

  it("AC-F2-03 ambiguous asks clarification without proposal", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Fais le nécessaire __F2_AMBIGUOUS__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f2_clarification");
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/Clarification/i);
  });

  it("AC-F2-11 critical without justification blocks", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Change sécurité __F2_CRITICAL_NO_JUSTIFICATION__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/Critical/i);
    expect(result.f2?.qualification?.requiresJustificationForCritical).toBe(true);
  });

  it("AC-F2-12/25 execution request may propose but blocks execution + gate", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Lance Cursor et crée une PR __F2_EXECUTION__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.executionBlocked).toBe(true);
    expect(result.f2?.proposal?.morrisGateRequired).toBe(true);
    expect(result.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(result.text).toMatch(/AUCUNE EXÉCUTION/);
  });

  it("fail-closed on invalid JSON / unknown cycle / incomplete signals", () => {
    expect(validateIntentAnalysisPayload(null).intentClass).toBe("ambiguous");
    expect(validateIntentAnalysisPayload(null).parseOk).toBe(false);
    expect(validateIntentAnalysisPayload("not-json").parseOk).toBe(false);
    expect(
      validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:unknown",
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      }).parseOk,
    ).toBe(false);
    expect(
      validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:delivery",
        signals: { structuralChange: true },
      }).parseOk,
    ).toBe(false);
    expect(
      validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:delivery",
        signals: null,
      }).parseOk,
    ).toBe(false);
  });

  it("structured actionable / structuring payloads parse successfully", () => {
    const actionable = validateIntentAnalysisPayload({
      intentClass: "actionable",
      candidateCycleTypeId: "cyc:delivery",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      objective: "Préparer livraison",
      scope: "borné",
      rephrasedRequest: "Proposition delivery",
      outOfScope: ["exécution"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      activatedBlocks: ["qualification"],
      expectedOutcome: "proposition",
      criticalJustification: null,
      requestedOperation: null,
    });
    expect(actionable.parseOk).toBe(true);
    expect(actionable.intentClass).toBe("actionable");
    expect(actionable.candidateCycleTypeId).toBe("cyc:delivery");
    expect(actionable.signals?.lowRiskBounded).toBe(true);

    const structuring = validateIntentAnalysisPayload({
      intentClass: "actionable",
      candidateCycleTypeId: "cyc:functional-architecture",
      signals: {
        structuralChange: true,
        securityImpact: false,
        architectureImpact: true,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: false,
      },
      objective: "Architecture",
      scope: "structurant",
      rephrasedRequest: "Changement architecture",
      outOfScope: ["PR"],
      risks: ["impact"],
      reservations: [],
      stopConditions: [],
      activatedBlocks: ["gate"],
      expectedOutcome: "gate",
      criticalJustification: "justifié",
      requestedOperation: "architecture change",
    });
    expect(structuring.parseOk).toBe(true);
    expect(structuring.candidateCycleTypeId).toBe("cyc:functional-architecture");
  });

  it("AC-F2 structured path: markers + no openai import + no profile/decision/execution leakage", async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const f2Dir = path.join(process.cwd(), "features/project-assistant/f2");
    for (const file of fs.readdirSync(f2Dir)) {
      if (!file.endsWith(".ts")) continue;
      const src = fs.readFileSync(path.join(f2Dir, file), "utf8");
      expect(src).not.toMatch(/from\s+["']openai["']/);
      expect(src).not.toMatch(/require\(["']openai["']\)/);
    }

    const actionable = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(actionable.ok).toBe(true);
    if (!actionable.ok) return;
    expect(actionable.presentation).toBe("test_provider");
    expect(actionable.model).toBe("fake-test-model");
    expect(actionable.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(actionable.f2?.qualification?.recommendedProfile).toBeTruthy();
    // Profile comes from CKC qualify — never from raw model intent JSON fields.
    expect(actionable.f2?.qualification).not.toHaveProperty("profile");
    expect(actionable.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");
    expect(actionable.f2?.proposal?.agentBinding).toBe("NOT_AVAILABLE");
    expect(actionable.f2?.proposal?.executionForbidden).toBe(true);

    const structuring = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(structuring.ok).toBe(true);
    if (!structuring.ok) return;
    expect(structuring.f2?.proposal).toBeTruthy();
    expect(structuring.f2?.qualification?.isMorrisDecision).toBe(false);
  });

  it("completeStructured is used for F2 analysis and preserves complete() F1 compatibility", async () => {
    const { FakeConversationProvider } = await import(
      "@/lib/platform/ai/fakeProvider"
    );
    const provider = new FakeConversationProvider();
    const structuredSpy = vi.spyOn(provider, "completeStructured");
    const completeSpy = vi.spyOn(provider, "complete");
    setConversationProviderForTests(provider);

    const f2 = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Résume __F2_INFORMATIVE__",
    });
    expect(f2.ok).toBe(true);
    expect(structuredSpy).toHaveBeenCalled();
    const structuredArg = structuredSpy.mock.calls[0]?.[0];
    expect(structuredArg?.schemaName).toBe("f2_intent_analysis");
    expect(structuredArg?.jsonSchema).toMatchObject({
      type: "object",
      additionalProperties: false,
    });
    expect(f2.ok && f2.model).toBe("fake-test-model");

    // Legacy complete() path remains available for non-F2 / F1-style text.
    const plain = await provider.complete([{ role: "user", content: "ping" }]);
    expect(plain.text).toContain("TEST/FAKE");
    expect(completeSpy).toHaveBeenCalled();
  });

  it("AC-F2-22/23 qualify uses catalog + isMorrisDecision false", async () => {
    const q = await qualifyWithCkc({
      cycleTypeId: "cyc:capitalization",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      correlationId: "cor:test-cap",
    });
    expect(q.ok).toBe(true);
    if (!q.ok) return;
    expect(q.qualification.isMorrisDecision).toBe(false);
    expect(q.qualification.capitalizationViaCycleTypeId).toBe(true);
    expect(q.qualification.recommendedProfile).not.toMatch(/capitalization/i);
  });

  it("gate policy is deterministic server-side", () => {
    const baseIntent = {
      intentClass: "actionable" as const,
      candidateCycleTypeId: "cyc:delivery",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      objective: "x",
      scope: "y",
      rephrasedRequest: "z",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: null,
      criticalJustification: null,
      requestedOperation: null,
      parseOk: true,
    };
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Standard",
        signals: baseIntent.signals!,
        intent: baseIntent,
      }),
    ).toBe(false);
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Critical",
        signals: baseIntent.signals!,
        intent: baseIntent,
      }),
    ).toBe(true);
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Standard",
        signals: { ...baseIntent.signals!, architectureImpact: true },
        intent: { ...baseIntent, requestedOperation: "create pr" },
      }),
    ).toBe(true);
  });
});

describe("F2 decisions with shared OA stack", () => {
  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({ auditMode: "noop" });
    const created = await runtime.createProject({
      name: "Projet F2 Decision",
      objective: "Décisions Morris process-local",
      context: "Contexte F2 gate",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "F2D",
      idempotencyKey: `f2-dec-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    (globalThis as { __f2ProjectId?: string }).__f2ProjectId =
      created.project.projectId;
    getProjectRuntimeActionMock.mockImplementation(async (projectId: string) => {
      return runtime.getProject(projectId);
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  async function seedProposal(projectId: string) {
    const runtime = getRuntimeApplicationService();
    const overview = await runtime.getProject(projectId);
    if (!overview.ok) throw new Error("missing project");
    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Proposition structurant",
      objective: "Arch change",
      cycleTypeId: "cyc:functional-architecture",
      recommendedProfile: "Standard",
      rationale: "test",
      scope: "architecture",
      outOfScope: ["execution"],
      activatedBlocks: ["gate"],
      expectedOutcome: "decision",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      morrisGateRequired: true,
      nextPossibleStep: "Décision Morris",
      contextSnapshot: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    });
    return { proposal, runtime, overview };
  }

  it("AC-F2-13/14/15/16 GO / NO-GO / AMEND / no execution", async () => {
    const projectId = (globalThis as { __f2ProjectId?: string }).__f2ProjectId!;
    const { proposal, runtime } = await seedProposal(projectId);
    expect(runtime.oa).toBeTruthy();

    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      canActAsMorris: true, // hostile client claim ignored; server registers evidence
      claimedAuthorityLevel: "N3",
      currentContext: proposal.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;
    expect(go.decision.executionPerformed).toBe(false);
    expect(go.decision.readyForNextGatedStep).toBe(true);
    expect(go.proposal.status).toBe("APPROVED");

    const { proposal: p2 } = await seedProposal(projectId);
    const noGo = await recordF2Decision({
      proposalId: p2.proposalId,
      projectId,
      decisionKind: "NO_GO",
      currentContext: p2.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(noGo.ok).toBe(true);
    if (!noGo.ok) return;
    expect(noGo.proposal.status).toBe("REFUSED");
    expect(noGo.decision.executionPerformed).toBe(false);

    const { proposal: p3 } = await seedProposal(projectId);
    const amend = await recordF2Decision({
      proposalId: p3.proposalId,
      projectId,
      decisionKind: "AMEND",
      currentContext: p3.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(amend.ok).toBe(true);
    if (!amend.ok) return;
    expect(amend.proposal.status).toBe("AMENDMENT_REQUIRED");
  });

  it("AC-F2-19 stale mismatch refuses GO", async () => {
    const projectId = (globalThis as { __f2ProjectId?: string }).__f2ProjectId!;
    const { proposal, runtime } = await seedProposal(projectId);
    const stale = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: {
        ...proposal.contextSnapshot,
        doctrineDigest: "digest:changed",
      },
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(stale.ok).toBe(false);
    if (stale.ok) return;
    expect(stale.code).toBe("STALE");
    expect(getProposal(proposal.proposalId)?.status).toBe("STALE");
  });

  it("AC-F2-26 missing proposal after reset has no durable authority claim", () => {
    resetF2ProposalStoreForTests();
    expect(getProposal("prop:missing")).toBeNull();
  });
});
```

### CREATED FULL — `projects/sfia-studio/app/features/project-assistant/f2/gatePolicy.ts`

```typescript
/**
 * Deterministic server-side Morris gate policy for F2.
 * Model signals never grant authority.
 */

import type { F2QualificationSignals, IntentAnalysisDto } from "./types";

export type GatePolicyInput = {
  recommendedProfile: string;
  signals: F2QualificationSignals;
  intent: IntentAnalysisDto;
  requestedOperation?: string | null;
};

/**
 * Gate required for Critical / structural / security / irreversible /
 * doctrine / git write surface / PR / merge / branch delete / protected paths.
 */
export function evaluateMorrisGateRequired(input: GatePolicyInput): boolean {
  const { signals, recommendedProfile, intent } = input;
  if (recommendedProfile === "Critical") return true;
  if (signals.structuralChange) return true;
  if (signals.securityImpact) return true;
  if (signals.architectureImpact) return true;
  if (signals.irreversible) return true;
  if (!signals.lowRiskBounded && (signals.dataImpact || signals.structuralChange)) {
    return true;
  }

  const op = (
    input.requestedOperation ??
    intent.requestedOperation ??
    ""
  ).toLowerCase();
  const blob = [
    op,
    intent.objective ?? "",
    intent.scope ?? "",
    intent.rephrasedRequest ?? "",
    ...(intent.risks ?? []),
  ]
    .join(" ")
    .toLowerCase();

  const structuralOps = [
    "push",
    "pull request",
    " create pr",
    "merge",
    "suppression branche",
    "delete branch",
    "doctrine",
    "protected path",
    "chemin protégé",
    "cursor",
    "executionrun",
    "git write",
    "github write",
  ];
  if (structuralOps.some((token) => blob.includes(token.trim()))) {
    return true;
  }

  if (intent.intentClass === "execution_request") {
    // Execution requests may propose, but gate is required when impactful.
    if (
      signals.architectureImpact ||
      signals.securityImpact ||
      signals.structuralChange ||
      signals.irreversible
    ) {
      return true;
    }
  }

  return false;
}
```

### CREATED FULL — `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`

```typescript
/**
 * Structured intent analysis via existing ConversationProvider.
 * Provider output is untrusted until server-side validation (fail-closed).
 */

import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  TechnicalError,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import { ADOPTED_CYCLE_TYPE_IDS, isKnownCycleTypeId } from "@/lib/oa/cycle";
import type {
  F2QualificationSignals,
  IntentAnalysisDto,
  IntentClass,
} from "./types";

const INTENT_CLASSES: readonly IntentClass[] = [
  "informative",
  "actionable",
  "ambiguous",
  "execution_request",
] as const;

const SIGNAL_KEYS = [
  "structuralChange",
  "securityImpact",
  "architectureImpact",
  "dataImpact",
  "irreversible",
  "lowRiskBounded",
] as const;

const MAX_STRING = 2000;
const MAX_ARRAY = 12;

const NULLABLE_STRING = { type: ["string", "null"] } as const;
const STRING_ARRAY = {
  type: "array",
  items: { type: "string" },
} as const;

const SIGNALS_OBJECT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    structuralChange: { type: "boolean" },
    securityImpact: { type: "boolean" },
    architectureImpact: { type: "boolean" },
    dataImpact: { type: "boolean" },
    irreversible: { type: "boolean" },
    lowRiskBounded: { type: "boolean" },
  },
  required: [...SIGNAL_KEYS],
} as const;

/**
 * OpenAI strict json_schema for F2 intent analysis.
 * Null cycle/signals: anyOf [enum|object, { type: "null" }] (not omitted, not invented).
 */
export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
  type: "object",
  additionalProperties: false,
  properties: {
    intentClass: {
      type: "string",
      enum: [...INTENT_CLASSES],
    },
    candidateCycleTypeId: {
      anyOf: [
        {
          type: "string",
          enum: [...ADOPTED_CYCLE_TYPE_IDS],
        },
        { type: "null" },
      ],
    },
    signals: {
      anyOf: [SIGNALS_OBJECT_SCHEMA, { type: "null" }],
    },
    objective: NULLABLE_STRING,
    scope: NULLABLE_STRING,
    rephrasedRequest: NULLABLE_STRING,
    outOfScope: STRING_ARRAY,
    risks: STRING_ARRAY,
    reservations: STRING_ARRAY,
    stopConditions: STRING_ARRAY,
    activatedBlocks: STRING_ARRAY,
    expectedOutcome: NULLABLE_STRING,
    criticalJustification: NULLABLE_STRING,
    requestedOperation: NULLABLE_STRING,
  },
  required: [
    "intentClass",
    "candidateCycleTypeId",
    "signals",
    "objective",
    "scope",
    "rephrasedRequest",
    "outOfScope",
    "risks",
    "reservations",
    "stopConditions",
    "activatedBlocks",
    "expectedOutcome",
    "criticalJustification",
    "requestedOperation",
  ],
};

export const F2_INTENT_SCHEMA_NAME = "f2_intent_analysis";

function clip(value: unknown, max = MAX_STRING): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.length <= max ? trimmed : trimmed.slice(0, max);
}

function clipArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, MAX_ARRAY)
    .map((item) => (item.length <= 500 ? item : item.slice(0, 500)));
}

function ambiguousFallback(partial?: Partial<IntentAnalysisDto>): IntentAnalysisDto {
  return {
    intentClass: "ambiguous",
    candidateCycleTypeId: null,
    signals: null,
    objective: partial?.objective ?? null,
    scope: partial?.scope ?? null,
    rephrasedRequest: partial?.rephrasedRequest ?? null,
    outOfScope: partial?.outOfScope ?? [],
    risks: partial?.risks ?? [],
    reservations: partial?.reservations ?? [],
    stopConditions: partial?.stopConditions ?? [],
    activatedBlocks: partial?.activatedBlocks ?? [],
    expectedOutcome: partial?.expectedOutcome ?? null,
    criticalJustification: partial?.criticalJustification ?? null,
    requestedOperation: partial?.requestedOperation ?? null,
    parseOk: false,
  };
}

function parseSignals(raw: unknown): F2QualificationSignals | null {
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as Record<string, unknown>;
  const out: Partial<F2QualificationSignals> = {};
  for (const key of SIGNAL_KEYS) {
    if (typeof obj[key] !== "boolean") return null;
    out[key] = obj[key] as boolean;
  }
  return out as F2QualificationSignals;
}

function extractJsonObject(text: string): unknown | null {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced?.[1]?.trim() ?? text.trim();
  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    return JSON.parse(candidate.slice(start, end + 1));
  } catch {
    return null;
  }
}

export function validateIntentAnalysisPayload(raw: unknown): IntentAnalysisDto {
  if (!raw || typeof raw !== "object") return ambiguousFallback();
  const obj = raw as Record<string, unknown>;
  const intentClass = obj.intentClass;
  if (
    typeof intentClass !== "string" ||
    !INTENT_CLASSES.includes(intentClass as IntentClass)
  ) {
    return ambiguousFallback();
  }

  let candidateCycleTypeId: string | null = null;
  if (obj.candidateCycleTypeId != null) {
    const id = clip(obj.candidateCycleTypeId, 120);
    if (!id || !isKnownCycleTypeId(id)) {
      return ambiguousFallback({
        intentClass: intentClass as IntentClass,
        parseOk: false,
      } as Partial<IntentAnalysisDto>);
    }
    candidateCycleTypeId = id;
  }

  const signals = parseSignals(obj.signals);
  const needsSignals =
    intentClass === "actionable" || intentClass === "execution_request";
  if (needsSignals && !signals) {
    return ambiguousFallback();
  }

  return {
    intentClass: intentClass as IntentClass,
    candidateCycleTypeId,
    signals,
    objective: clip(obj.objective),
    scope: clip(obj.scope),
    rephrasedRequest: clip(obj.rephrasedRequest),
    outOfScope: clipArray(obj.outOfScope),
    risks: clipArray(obj.risks),
    reservations: clipArray(obj.reservations),
    stopConditions: clipArray(obj.stopConditions),
    activatedBlocks: clipArray(obj.activatedBlocks),
    expectedOutcome: clip(obj.expectedOutcome),
    criticalJustification: clip(obj.criticalJustification),
    requestedOperation: clip(obj.requestedOperation, 240),
    parseOk: true,
  };
}

const ANALYSIS_SYSTEM = `Tu analyses l'intention utilisateur pour SFIA Studio F2.
Réponds UNIQUEMENT avec un objet JSON conforme au schéma (pas de markdown, pas de prose).
Champs obligatoires:
intentClass (informative|actionable|ambiguous|execution_request),
candidateCycleTypeId (id catalogue cyc:… OU null),
signals ({structuralChange,securityImpact,architectureImpact,dataImpact,irreversible,lowRiskBounded} tous booléens OU null),
objective, scope, rephrasedRequest, outOfScope[], risks[], reservations[], stopConditions[], activatedBlocks[],
expectedOutcome, criticalJustification, requestedOperation (strings ou null pour les scalaires).
Règles strictes:
- actionable et execution_request: candidateCycleTypeId DOIT être un id catalogue connu ET signals DOIT contenir exactement les 6 booléens (aucun défaut inventé).
- informative et ambiguous: candidateCycleTypeId et signals PEUVENT être null.
- Ne décide jamais un GO Morris; ne propose jamais d'exécution; n'invente jamais un cycle (ex. delivery) par défaut.`;

export async function analyzeIntent(input: {
  userContent: string;
  projectSummary: string;
}): Promise<{
  analysis: IntentAnalysisDto;
  presentation: "test_provider" | "openai_live";
  model: string | null;
  rawText: string;
}> {
  const provider = resolveConversationProvider();
  const presentation =
    isFakeConversationProviderForced() || provider.providerId === "fake-test"
      ? "test_provider"
      : "openai_live";

  const messages: ProviderChatMessage[] = [
    { role: "system", content: ANALYSIS_SYSTEM },
    {
      role: "user",
      content: `Contexte projet:\\n${input.projectSummary}\\n\\nDemande:\\n${input.userContent}`,
    },
  ];

  if (typeof provider.completeStructured !== "function") {
    throw new TechnicalError(
      "PROVIDER",
      "Structured Outputs requis pour l’analyse d’intention F2 (completeStructured manquant).",
    );
  }

  const completion = await provider.completeStructured({
    messages,
    schemaName: F2_INTENT_SCHEMA_NAME,
    jsonSchema: F2_INTENT_JSON_SCHEMA,
  });
  const parsed = extractJsonObject(completion.text);
  const analysis = validateIntentAnalysisPayload(parsed);
  return {
    analysis,
    presentation,
    model: completion.usage?.model ?? null,
    rawText: completion.text,
  };
}
```

### CREATED FULL — `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```typescript
/**
 * F2 pipeline: intent → qualify → proposal / clarification.
 * Stops before any execution.
 */

import { randomUUID } from "node:crypto";
import {
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
} from "@/lib/platform/ai";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "../types";
import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
import { analyzeIntent } from "./intentAnalysis";
import { evaluateMorrisGateRequired } from "./gatePolicy";
import { qualifyWithCkc } from "./qualify";
import {
  F2_PROCESS_LOCAL_NOTICE,
  createProposalId,
  saveProposal,
} from "./proposalStore";
import type {
  F2ContextSnapshot,
  IntentAnalysisDto,
  ProposalDto,
  QualificationDto,
} from "./types";

const EPHEMERAL_NOTICE =
  "Conversation et propositions éphémères (process-local) — un rechargement ou redémarrage peut tout effacer. Aucune persistence produit. AUCUNE EXÉCUTION.";

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
  };
}

function snapshotFrom(project: ProjectAssistantContextDto): F2ContextSnapshot {
  return {
    projectId: project.projectId,
    lpsId: project.lpsId,
    lpsVersion: project.lpsVersion,
    doctrineDigest: project.doctrineDigest,
  };
}

function resolveMode(): {
  mode: "fixture" | "live" | "unavailable";
  canProceed: boolean;
  message?: string;
} {
  if (isFakeConversationProviderForced()) {
    return { mode: "fixture", canProceed: true };
  }
  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    return {
      mode: "unavailable",
      canProceed: false,
      message: `Assistant indisponible — configuration manquante (${availability.missing.join(", ")}). Aucun basculement silencieux vers le mode démonstration.`,
    };
  }
  return { mode: "live", canProceed: true };
}

function buildProposal(input: {
  intent: IntentAnalysisDto;
  qualification: QualificationDto;
  project: ProjectAssistantContextDto;
  morrisGateRequired: boolean;
  executionRequest: boolean;
  status: ProposalDto["status"];
}): ProposalDto {
  return {
    proposalId: createProposalId(),
    status: input.status,
    rephrasedRequest:
      input.intent.rephrasedRequest ??
      input.intent.objective ??
      "Demande reformulée indisponible",
    objective: input.intent.objective ?? input.qualification.rationale,
    cycleTypeId: input.qualification.cycleTypeId,
    recommendedProfile: input.qualification.recommendedProfile,
    rationale: input.qualification.rationale,
    scope: input.intent.scope ?? `Périmètre borné — ${input.qualification.cycleTypeId}`,
    outOfScope:
      input.intent.outOfScope.length > 0
        ? input.intent.outOfScope
        : [
            "Exécution Cursor",
            "Écriture Git/GitHub",
            "Exécution agent (hors F2)",
            "Navigation OPS1 comme destination",
          ],
    activatedBlocks:
      input.intent.activatedBlocks.length > 0
        ? input.intent.activatedBlocks
        : ["qualification", "proposition", "gate"],
    expectedOutcome:
      input.intent.expectedOutcome ??
      "Décision humaine capturée — aucune exécution F2",
    sources: [
      `catalogue:${input.qualification.catalogVersion}`,
      `ckc:${input.qualification.detailedStatus}`,
      `project:${input.project.projectId}`,
      `lps:${input.project.lpsId}@${input.project.lpsVersion}`,
    ],
    risks: input.intent.risks,
    reservations: input.intent.reservations,
    stopConditions:
      input.intent.stopConditions.length > 0
        ? input.intent.stopConditions
        : ["AUCUNE EXÉCUTION", "STOP avant F3"],
    morrisGateRequired: input.morrisGateRequired,
    nextPossibleStep: input.morrisGateRequired
      ? "Décision Morris explicite requise"
      : "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
    contextSnapshot: snapshotFrom(input.project),
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    criticalJustification: input.intent.criticalJustification,
  };
}

function f2Success(base: {
  text: string;
  mode: "fixture" | "live";
  presentation: "test_provider" | "openai_live";
  model: string | null;
  project: ProjectAssistantContextDto;
  intentClass: IntentAnalysisDto["intentClass"];
  qualification?: QualificationDto;
  proposal?: ProposalDto;
  executionBlocked?: boolean;
}): ProjectAssistantSendResult {
  const turnKind =
    base.qualification && base.proposal
      ? "f2_proposal"
      : base.intentClass === "ambiguous"
        ? "f2_clarification"
        : "f2_blocked";
  return {
    ok: true,
    status: "ok",
    text: base.text,
    mode: base.mode,
    presentation: base.presentation,
    model: base.model,
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
    project: base.project,
    ephemeralNotice: EPHEMERAL_NOTICE,
    f2: {
      turnKind,
      intentClass: base.intentClass,
      qualification: base.qualification ?? null,
      proposal: base.proposal ?? null,
      decision: null,
      labels: {
        recommendation: base.qualification ? "RECOMMANDATION" : null,
        proposition: base.proposal ? "PROPOSITION" : null,
        decisionRequired: base.proposal?.morrisGateRequired
          ? "DÉCISION REQUISE"
          : null,
        decisionTaken: null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: base.executionBlocked === true,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    },
  };
}

/**
 * Unified send orchestration: preserves F1 for informative intents.
 */
export async function orchestrateAssistantSend(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  const project = toContextDto(projectResult);
  const modeResolution = resolveMode();
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
  try {
    analysisResult = await analyzeIntent({
      userContent: content,
      projectSummary: [
        `name=${project.name}`,
        `objective=${project.objective}`,
        `criticality=${project.criticality}`,
        `lps=${project.lpsId}@${project.lpsVersion}`,
      ].join(" | "),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }

  const { analysis, presentation, model } = analysisResult;

  // A — informative → existing F1 path
  if (analysis.intentClass === "informative" && analysis.parseOk) {
    const f1 = await orchestrateProjectAssistantTurn(input);
    if (!f1.ok) return f1;
    return {
      ...f1,
      model: f1.model ?? model,
      f2: {
        turnKind: "f1_informative",
        intentClass: "informative",
        qualification: null,
        proposal: null,
        decision: null,
        labels: {
          recommendation: null,
          proposition: null,
          decisionRequired: null,
          decisionTaken: null,
          noExecution: "AUCUNE EXÉCUTION",
        },
        executionBlocked: false,
        processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      },
    };
  }

  // C — ambiguous / fail-closed
  if (analysis.intentClass === "ambiguous" || !analysis.parseOk) {
    return f2Success({
      text:
        "[Clarification requise] Votre demande est ambiguë ou incomplète. Précisez l'objectif, le périmètre et l'action souhaitée. Aucune proposition F2 n'a été créée. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: "ambiguous",
    });
  }

  // B / D — actionable or execution_request
  if (!analysis.candidateCycleTypeId || !analysis.signals) {
    return f2Success({
      text:
        "[Clarification requise] Qualification impossible — cycle ou signaux incomplets. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  const qualified = await qualifyWithCkc({
    cycleTypeId: analysis.candidateCycleTypeId,
    signals: analysis.signals,
    objective: analysis.objective ?? undefined,
    scope: analysis.scope ?? undefined,
    correlationId: `f2-qual:${randomUUID()}`,
  });

  if (!qualified.ok) {
    return f2Success({
      text: `[Qualification échouée] ${qualified.message} AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  const { qualification } = qualified;

  if (
    qualification.requiresJustificationForCritical &&
    !(analysis.criticalJustification && analysis.criticalJustification.trim())
  ) {
    return f2Success({
      text:
        "[Critical] Justification structurante obligatoire avant proposition validable. Critical n'est jamais implicite. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification,
      executionBlocked: analysis.intentClass === "execution_request",
    });
  }

  const morrisGateRequired = evaluateMorrisGateRequired({
    recommendedProfile: qualification.recommendedProfile,
    signals: analysis.signals,
    intent: analysis,
  });

  const status = morrisGateRequired ? "DECISION_REQUIRED" : "READY_NO_GATE";
  const proposal = saveProposal(
    buildProposal({
      intent: analysis,
      qualification,
      project,
      morrisGateRequired,
      executionRequest: analysis.intentClass === "execution_request",
      status,
    }),
  );

  const executionBlocked = analysis.intentClass === "execution_request";
  const textParts = [
    presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
    "Qualification SFIA et proposition structurée générées.",
    `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
    `Profil recommandé: ${qualification.recommendedProfile}.`,
    qualification.recommendationLabel,
    morrisGateRequired
      ? "DÉCISION REQUISE — gate Morris ouvert."
      : "NO MORRIS GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
    executionBlocked
      ? "Demande d'exécution détectée — AUCUNE EXÉCUTION (Cursor/PR/merge indisponibles)."
      : "AUCUNE EXÉCUTION.",
  ];

  return f2Success({
    text: textParts.join(" "),
    mode: modeResolution.mode as "fixture" | "live",
    presentation,
    model,
    project,
    intentClass: analysis.intentClass,
    qualification,
    proposal,
    executionBlocked,
  });
}
```

### CREATED FULL — `projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts`

```typescript
/**
 * Process-local F2 proposal store (no durable persistence).
 */

import { randomUUID } from "node:crypto";
import type { ProposalDto, F2ContextSnapshot, F2ProposalStatus } from "./types";

const STORE_KEY = "__SFIA_F2_PROPOSAL_STORE__" as const;

type StoreSlot = {
  byId: Map<string, ProposalDto>;
};

function getSlot(): StoreSlot {
  const g = globalThis as typeof globalThis & { [STORE_KEY]?: StoreSlot };
  if (!g[STORE_KEY]) {
    g[STORE_KEY] = { byId: new Map() };
  }
  return g[STORE_KEY];
}

export const F2_PROCESS_LOCAL_NOTICE =
  "Proposition process-local — non persistée. Un redémarrage efface propositions et décisions. Aucune autorisation durable.";

export function createProposalId(): string {
  return `prop:f2:${randomUUID()}`;
}

export function saveProposal(proposal: ProposalDto): ProposalDto {
  const frozen = Object.freeze({
    ...proposal,
    outOfScope: Object.freeze([...proposal.outOfScope]) as string[],
    activatedBlocks: Object.freeze([...proposal.activatedBlocks]) as string[],
    sources: Object.freeze([...proposal.sources]) as string[],
    risks: Object.freeze([...proposal.risks]) as string[],
    reservations: Object.freeze([...proposal.reservations]) as string[],
    stopConditions: Object.freeze([...proposal.stopConditions]) as string[],
    contextSnapshot: Object.freeze({ ...proposal.contextSnapshot }),
  }) as ProposalDto;
  getSlot().byId.set(frozen.proposalId, frozen);
  return frozen;
}

export function getProposal(proposalId: string): ProposalDto | null {
  return getSlot().byId.get(proposalId) ?? null;
}

export function updateProposalStatus(
  proposalId: string,
  status: F2ProposalStatus,
  patch: Partial<ProposalDto> = {},
): ProposalDto | null {
  const existing = getProposal(proposalId);
  if (!existing) return null;
  return saveProposal({ ...existing, ...patch, status, proposalId });
}

export function markProposalStale(proposalId: string): ProposalDto | null {
  return updateProposalStatus(proposalId, "STALE");
}

export function contextMatches(
  snapshot: F2ContextSnapshot,
  current: F2ContextSnapshot,
): boolean {
  return (
    snapshot.projectId === current.projectId &&
    snapshot.lpsId === current.lpsId &&
    snapshot.lpsVersion === current.lpsVersion &&
    snapshot.doctrineDigest === current.doctrineDigest
  );
}

/** Test-only reset. */
export function resetF2ProposalStoreForTests(): void {
  const allowed =
    process.env.NODE_ENV === "test" ||
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET === "1";
  if (!allowed) {
    throw new Error("resetF2ProposalStoreForTests only allowed in tests.");
  }
  getSlot().byId.clear();
}
```

### CREATED FULL — `projects/sfia-studio/app/features/project-assistant/f2/qualify.ts`

```typescript
/**
 * Native SFIA qualification via QualifyCycleWithCkc (recommendation only).
 */

import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  createCkcQualificationServices,
  type CkcQualificationSuccessResult,
} from "@/lib/oa/cycle";
import type { F2QualificationSignals, QualificationDto } from "./types";

export async function qualifyWithCkc(input: {
  cycleTypeId: string;
  signals: F2QualificationSignals;
  objective?: string;
  scope?: string;
  correlationId: string;
}): Promise<
  | { ok: true; qualification: QualificationDto; raw: CkcQualificationSuccessResult }
  | { ok: false; code: string; message: string }
> {
  const services = createCkcQualificationServices();
  const result = await services.qualifyCycleWithCkc.execute({
    cycleTypeId: input.cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: input.correlationId,
    signals: input.signals,
    objective: input.objective,
    scope: input.scope,
  });

  if (result.state !== "success") {
    return {
      ok: false,
      code: result.code,
      message: result.message,
    };
  }

  const qualification: QualificationDto = {
    cycleTypeId: result.cycleTypeId,
    cycleLabel: result.label,
    recommendedProfile: result.recommendedProfile,
    rationale: result.rationale,
    criticalSignalsPresent: result.criticalSignalsPresent,
    requiresJustificationForCritical: result.requiresJustificationForCritical,
    capitalizationViaCycleTypeId: result.capitalizationViaCycleTypeId,
    isMorrisDecision: false,
    catalogVersion: result.catalogVersion,
    catalogHash: result.catalogHash,
    detailedStatus: result.detailedStatus,
    disclosures: [...result.disclosures],
    signals: input.signals,
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
  };

  return { ok: true, qualification, raw: result };
}
```

### CREATED FULL — `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`

```typescript
/**
 * Record Morris-gate HumanDecision via OA DecisionServices.
 * Authority evidence is registered server-side only.
 */

import { randomUUID } from "node:crypto";
import type { DecisionServices, MemoryAuthorityResolver } from "@/lib/oa/decision";
import type {
  DecisionDto,
  F2ContextSnapshot,
  F2DecisionKind,
  ProposalDto,
} from "./types";
import {
  contextMatches,
  getProposal,
  markProposalStale,
  updateProposalStatus,
} from "./proposalStore";

export const LOCAL_MORRIS_ACTOR = Object.freeze({
  actorId: "actor:local-morris-demo",
  role: "decision_maker" as const,
  displayName: "Local Morris demo",
  authorityLevel: "none" as const,
});

export const LOCAL_MORRIS_EVIDENCE_SOURCE =
  "LOCAL_PROCESS_MORRIS_DEMO_AUTHORITY" as const;

export function proposalScope(proposal: ProposalDto): string {
  return `f2-proposal:${proposal.proposalId}`;
}

function mapStatus(kind: F2DecisionKind): {
  proposalStatus:
    | "APPROVED"
    | "APPROVED_WITH_RESERVES"
    | "REFUSED"
    | "AMENDMENT_REQUIRED";
  selectedOptionId: string;
  humanStatus: "accepted" | "refused" | "amended";
} {
  switch (kind) {
    case "GO":
      return {
        proposalStatus: "APPROVED",
        selectedOptionId: "opt:go",
        humanStatus: "accepted",
      };
    case "GO_WITH_RESERVES":
      return {
        proposalStatus: "APPROVED_WITH_RESERVES",
        selectedOptionId: "opt:go-reserves",
        humanStatus: "accepted",
      };
    case "NO_GO":
      return {
        proposalStatus: "REFUSED",
        selectedOptionId: "opt:no-go",
        humanStatus: "refused",
      };
    case "AMEND":
      return {
        proposalStatus: "AMENDMENT_REQUIRED",
        selectedOptionId: "opt:amend",
        humanStatus: "amended",
      };
  }
}

export async function recordF2Decision(input: {
  proposalId: string;
  projectId: string;
  decisionKind: F2DecisionKind;
  reservesText?: string | null;
  /** Hostile client fields — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  currentContext: F2ContextSnapshot;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
}): Promise<
  | {
      ok: true;
      decision: DecisionDto;
      proposal: ProposalDto;
    }
  | {
      ok: false;
      code: string;
      message: string;
      proposal?: ProposalDto | null;
    }
> {
  // Never trust client authority claims.
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const proposal = getProposal(input.proposalId);
  if (!proposal) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_FOUND",
      message:
        "Proposition introuvable (process-local). Aucune autorisation durable après redémarrage.",
    };
  }

  if (proposal.contextSnapshot.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La proposition n'appartient pas à ce projet.",
      proposal,
    };
  }

  if (!contextMatches(proposal.contextSnapshot, input.currentContext)) {
    const stale = markProposalStale(proposal.proposalId);
    return {
      ok: false,
      code: "STALE",
      message:
        "Contexte Project/LPS modifié — proposition STALE. Aucun GO silencieux.",
      proposal: stale,
    };
  }

  if (
    proposal.status === "STALE" ||
    proposal.status === "REFUSED" ||
    proposal.status === "AMENDMENT_REQUIRED" ||
    proposal.status === "APPROVED" ||
    proposal.status === "APPROVED_WITH_RESERVES"
  ) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_DECIDABLE",
      message: `Proposition non décidable (statut ${proposal.status}).`,
      proposal,
    };
  }

  if (!proposal.morrisGateRequired) {
    return {
      ok: false,
      code: "GATE_NOT_REQUIRED",
      message: "Aucun gate Morris requis pour cette proposition.",
      proposal,
    };
  }

  if (
    input.decisionKind === "GO_WITH_RESERVES" &&
    !(input.reservesText && input.reservesText.trim())
  ) {
    return {
      ok: false,
      code: "RESERVES_REQUIRED",
      message: "GO WITH RESERVES exige un texte de réserves explicite.",
      proposal,
    };
  }

  const scope = proposalScope(proposal);
  const evidenceId = `evd:f2-morris:${proposal.proposalId}:${randomUUID()}`;
  const issuedAt = input.nowIso();

  try {
    input.authorityResolver.register({
      evidenceId,
      actorId: LOCAL_MORRIS_ACTOR.actorId,
      level: "N3",
      scope,
      issuedAt,
      source: LOCAL_MORRIS_EVIDENCE_SOURCE,
      canActAsMorris: true,
    });
  } catch (error) {
    return {
      ok: false,
      code: "AUTHORITY_REGISTER_FAILED",
      message:
        error instanceof Error
          ? error.message
          : "Échec enregistrement evidence Morris locale.",
      proposal,
    };
  }

  const mapped = mapStatus(input.decisionKind);
  const decisionId = `dec:f2:${randomUUID()}`;
  const options = [
    { optionId: "opt:go", label: "GO" },
    { optionId: "opt:go-reserves", label: "GO WITH RESERVES" },
    { optionId: "opt:no-go", label: "NO-GO" },
    { optionId: "opt:amend", label: "AMEND" },
  ];

  const reservations =
    input.decisionKind === "GO_WITH_RESERVES"
      ? [
          {
            reservationId: `rsv:${randomUUID()}`,
            statement: input.reservesText!.trim(),
            blocking: false,
          },
        ]
      : undefined;

  const result = await input.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    subject: `F2 gate for ${proposal.proposalId}`,
    options,
    selectedOptionId: mapped.selectedOptionId,
    actor: LOCAL_MORRIS_ACTOR,
    authority: "morris",
    status: mapped.humanStatus,
    reversible: true,
    scope,
    reservations,
    rationale: `F2 ${input.decisionKind} on ${proposal.proposalId}`,
    authorityEvidenceId: evidenceId,
    correlationId: `f2-dec:${proposal.proposalId}`,
  });

  if (!result.ok) {
    return {
      ok: false,
      code: result.error.detailCode,
      message: result.error.message,
      proposal,
    };
  }

  const updated = updateProposalStatus(proposal.proposalId, mapped.proposalStatus);
  const decision: DecisionDto = {
    decisionId,
    proposalId: proposal.proposalId,
    kind: input.decisionKind,
    statusLabel: "DÉCISION PRISE",
    humanDecisionStatus: mapped.humanStatus,
    scope,
    reservesText:
      input.decisionKind === "GO_WITH_RESERVES"
        ? input.reservesText!.trim()
        : null,
    capturedAt: issuedAt,
    readyForNextGatedStep:
      input.decisionKind === "GO" || input.decisionKind === "GO_WITH_RESERVES",
    executionPerformed: false,
  };

  return { ok: true, decision, proposal: updated! };
}
```

### CREATED FULL — `projects/sfia-studio/app/features/project-assistant/f2/types.ts`

```typescript
/**
 * F2 Qualification + Proposal + Gate — process-local DTOs.
 * Recommendation ≠ Decision ≠ Execution.
 */

export type IntentClass =
  | "informative"
  | "actionable"
  | "ambiguous"
  | "execution_request";

export type F2ProposalStatus =
  | "PROPOSED"
  | "DECISION_REQUIRED"
  | "APPROVED"
  | "APPROVED_WITH_RESERVES"
  | "REFUSED"
  | "AMENDMENT_REQUIRED"
  | "STALE"
  | "NEEDS_CLARIFICATION"
  | "BLOCKED_CRITICAL_JUSTIFICATION"
  | "READY_NO_GATE";

export type F2DecisionKind = "GO" | "GO_WITH_RESERVES" | "NO_GO" | "AMEND";

export type F2QualificationSignals = {
  structuralChange: boolean;
  securityImpact: boolean;
  architectureImpact: boolean;
  dataImpact: boolean;
  irreversible: boolean;
  lowRiskBounded: boolean;
};

export type F2ContextSnapshot = {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
};

export type QualificationDto = {
  cycleTypeId: string;
  cycleLabel: string;
  recommendedProfile: string;
  rationale: string;
  criticalSignalsPresent: boolean;
  requiresJustificationForCritical: boolean;
  capitalizationViaCycleTypeId: boolean;
  isMorrisDecision: false;
  catalogVersion: string;
  catalogHash: string;
  detailedStatus: string;
  disclosures: string[];
  signals: F2QualificationSignals;
  recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS";
};

export type ProposalDto = {
  proposalId: string;
  status: F2ProposalStatus;
  rephrasedRequest: string;
  objective: string;
  cycleTypeId: string;
  recommendedProfile: string;
  rationale: string;
  scope: string;
  outOfScope: string[];
  activatedBlocks: string[];
  expectedOutcome: string;
  sources: string[];
  risks: string[];
  reservations: string[];
  stopConditions: string[];
  morrisGateRequired: boolean;
  nextPossibleStep: string;
  contextSnapshot: F2ContextSnapshot;
  processLocalNotice: string;
  executionForbidden: true;
  noExecutingStatus: true;
  /** Explicit F2 denial — never an agent binding. */
  agentBinding: "NOT_AVAILABLE";
  criticalJustification?: string | null;
};

export type DecisionDto = {
  decisionId: string;
  proposalId: string;
  kind: F2DecisionKind;
  statusLabel: "DÉCISION PRISE";
  humanDecisionStatus: string;
  scope: string;
  reservesText: string | null;
  capturedAt: string;
  readyForNextGatedStep: boolean;
  executionPerformed: false;
};

export type IntentAnalysisDto = {
  intentClass: IntentClass;
  candidateCycleTypeId: string | null;
  signals: F2QualificationSignals | null;
  objective: string | null;
  scope: string | null;
  rephrasedRequest: string | null;
  outOfScope: string[];
  risks: string[];
  reservations: string[];
  stopConditions: string[];
  activatedBlocks: string[];
  expectedOutcome: string | null;
  criticalJustification: string | null;
  requestedOperation: string | null;
  parseOk: boolean;
};

export type F2TurnKind =
  | "f1_informative"
  | "f2_clarification"
  | "f2_proposal"
  | "f2_blocked";

export type ProviderTrustDto = {
  presentation: "test_provider" | "openai_live" | "unconfirmed";
  model: string | null;
  mode: "fixture" | "live" | "unavailable" | "unconfirmed";
};
```

---

## Completeness — modified files (FULL useful diffs base..HEAD)

### MODIFIED DIFF — `projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts b/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
index e48ed69..4786a8a 100644
--- a/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
+++ b/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
@@ -59,4 +59,58 @@ describe("OpenAIConversationProvider mapping", () => {
       provider.complete([{ role: "user", content: "x" }]),
     ).rejects.toBeInstanceOf(TechnicalError);
   });
+
+  it("completeStructured passes Responses text.format json_schema strict", async () => {
+    createMock.mockResolvedValue({
+      id: "resp_structured",
+      model: "gpt-test",
+      output_text: '{"intentClass":"informative"}',
+      usage: { input_tokens: 2, output_tokens: 3, total_tokens: 5 },
+    });
+    const { OpenAIConversationProvider } = await import(
+      "@/lib/platform/ai/openaiProvider"
+    );
+    const provider = new OpenAIConversationProvider("sk-test", "gpt-test");
+    const schema = {
+      type: "object",
+      additionalProperties: false,
+      properties: { intentClass: { type: "string" } },
+      required: ["intentClass"],
+    };
+    const result = await provider.completeStructured({
+      messages: [
+        { role: "system", content: "sys" },
+        { role: "user", content: "ask" },
+      ],
+      schemaName: "f2_intent_analysis",
+      jsonSchema: schema,
+    });
+    expect(result.text).toContain("informative");
+    expect(result.usage).toEqual({
+      inputTokens: 2,
+      outputTokens: 3,
+      totalTokens: 5,
+      model: "gpt-test",
+      providerResponseId: "resp_structured",
+    });
+    expect(createMock).toHaveBeenCalledWith(
+      expect.objectContaining({
+        model: "gpt-test",
+        text: {
+          format: {
+            type: "json_schema",
+            name: "f2_intent_analysis",
+            schema,
+            strict: true,
+          },
+        },
+      }),
+    );
+    const payload = createMock.mock.calls[0][0];
+    expect(payload.input).toEqual([
+      { role: "system", content: "sys" },
+      { role: "user", content: "ask" },
+    ]);
+    expect(payload.tools).toBeUndefined();
+  });
 });
```

### MODIFIED DIFF — `projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts b/projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts
index f3e02f4..07e01dd 100644
--- a/projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts
+++ b/projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts
@@ -16,6 +16,22 @@ describe("platform AI + security foundations", () => {
     expect(result.usage.model).toBe("fake-test-model");
   });

+  it("completeStructured reuses F2 markers and reports model telemetry", async () => {
+    const provider = new FakeConversationProvider();
+    const result = await provider.completeStructured!({
+      messages: [
+        { role: "system", content: "SFIA Studio F2" },
+        { role: "user", content: "go __F2_ACTIONABLE__" },
+      ],
+      schemaName: "f2_intent_analysis",
+      jsonSchema: { type: "object" },
+    });
+    expect(result.text).toContain("TEST/FAKE");
+    expect(result.text).toContain('"intentClass":"actionable"');
+    expect(result.usage.model).toBe("fake-test-model");
+    expect(result.usage.providerResponseId).toMatch(/^fake-resp-/);
+  });
+
   it("messagesToInputItems preserves order", () => {
     const items = messagesToInputItems([
       { role: "system", content: "s" },
```

### MODIFIED DIFF — `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index 208f821..bfdfcb5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -12,13 +12,17 @@ import { StudioShell } from "@/components/shell/StudioShell";
 import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";
 import { ProjectWorkspaceView } from "@/features/vertical-slice-ui/ProjectWorkspaceView";

-const { projectAssistantSendActionMock } = vi.hoisted(() => ({
-  projectAssistantSendActionMock: vi.fn(),
-}));
+const { projectAssistantSendActionMock, projectAssistantDecideActionMock } =
+  vi.hoisted(() => ({
+    projectAssistantSendActionMock: vi.fn(),
+    projectAssistantDecideActionMock: vi.fn(),
+  }));

 vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantSendAction: (...args: unknown[]) =>
     projectAssistantSendActionMock(...args),
+  projectAssistantDecideAction: (...args: unknown[]) =>
+    projectAssistantDecideActionMock(...args),
 }));

 vi.mock("next/link", () => ({
@@ -90,6 +94,7 @@ const SUCCESS_RESULT = {
 describe("F1 ProjectAssistantPanel UI", () => {
   beforeEach(() => {
     projectAssistantSendActionMock.mockReset();
+    projectAssistantDecideActionMock.mockReset();
   });

   afterEach(() => {
@@ -307,6 +312,17 @@ describe("F1 ProjectAssistantPanel UI", () => {
     expect(screen.getByTestId("project-assistant-retry")).toBeVisible();
   });

+
+  it("shows MODE À CONFIRMER before first provider response", () => {
+    render(<ProjectAssistantPanel projectId="prj:f1-ui" />);
+    expect(screen.getByTestId("project-assistant-mode-pill")).toHaveTextContent(
+      /MODE À CONFIRMER/,
+    );
+    expect(screen.getByTestId("project-assistant-mode-pill")).not.toHaveTextContent(
+      /Fixture/,
+    );
+  });
+
   it("blocks empty send", () => {
     render(<ProjectAssistantPanel projectId="prj:f1-ui" />);
     expect(screen.getByTestId("project-assistant-send")).toBeDisabled();
```

### MODIFIED DIFF — `projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
index 00ab7d5..c4ef041 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
@@ -17,8 +17,8 @@ function listTsFiles(dir: string): string[] {
   return out;
 }

-describe("F1 project-assistant import boundaries", () => {
-  it("does not import lib/ops1 or features/ops1", () => {
+describe("project-assistant import boundaries (F1+F2)", () => {
+  it("does not import ops1, execution-run, or cursor execution paths", () => {
     const files = listTsFiles(FEATURE_DIR);
     expect(files.length).toBeGreaterThan(0);
     for (const file of files) {
@@ -26,6 +26,13 @@ describe("F1 project-assistant import boundaries", () => {
       expect(source).not.toMatch(/@\/lib\/ops1/);
       expect(source).not.toMatch(/@\/features\/ops1/);
       expect(source).not.toMatch(/from ["'].*ops1/);
+      expect(source).not.toMatch(/@\/lib\/oa\/execution-run/);
+      expect(source).not.toMatch(/from ["'][^"']*execution-run/);
+      expect(source).not.toMatch(/from ["']@\/lib\/.*cursor/i);
+      expect(source).not.toMatch(
+        /(?:import|export)[\s\S]{0,80}\b(?:StartExecution|ExecutionRun)\b/,
+      );
+      expect(source).not.toMatch(/selectedAgentRef\s*:\s*["'`]/);
     }
   });
 });
```

### MODIFIED DIFF — `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index a26360c..e80c527 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -74,6 +74,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
     );

     const allowed = new Set([
+      "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
       "features/vertical-slice-ui/CreateProjectForm.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceClient.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceView.tsx:@/lib/vertical-slice-runtime/actions",
```

### MODIFIED DIFF — `projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
index 506a0fb..492a659 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
@@ -197,7 +197,9 @@ describe("V2-A2 Create Project UI", () => {
     expect(screen.getByText("Le contexte est obligatoire.")).toBeVisible();
   });

-  it("validates name, short reference, and per-line constraint lengths", async () => {
+  it(
+    "validates name, short reference, and per-line constraint lengths",
+    async () => {
     const user = userEvent.setup();
     render(<CreateProjectForm />);

@@ -225,9 +227,13 @@ describe("V2-A2 Create Project UI", () => {
         /chaque contrainte doit contenir au maximum 500/i,
       ),
     ).toBeVisible();
-  });
+  },
+    15_000,
+  );

-  it("calls only the runtime action with the exact DTO and parsed constraints", async () => {
+  it(
+    "calls only the runtime action with the exact DTO and parsed constraints",
+    async () => {
     createProjectRuntimeActionMock.mockResolvedValue(SUCCESS_RESULT);
     const user = userEvent.setup();
     render(<CreateProjectForm />);
@@ -242,18 +248,22 @@ describe("V2-A2 Create Project UI", () => {

     await user.click(screen.getByTestId("create-project-submit"));

-    await waitFor(() =>
-      expect(createProjectRuntimeActionMock).toHaveBeenCalledWith({
-        name: "Projet V2-A2",
-        objective: "Créer une interface réelle.",
-        context: "Contexte local borné.",
-        criticality: "HIGH",
-        constraints: ["Sans IAM", "Sans persistance produit"],
-        shortReference: "V2-A2",
-        idempotencyKey: key,
-      }),
+    await waitFor(
+      () =>
+        expect(createProjectRuntimeActionMock).toHaveBeenCalledWith({
+          name: "Projet V2-A2",
+          objective: "Créer une interface réelle.",
+          context: "Contexte local borné.",
+          criticality: "HIGH",
+          constraints: ["Sans IAM", "Sans persistance produit"],
+          shortReference: "V2-A2",
+          idempotencyKey: key,
+        }),
+      { timeout: 10_000 },
     );
-  });
+  },
+    15_000,
+  );

   it("keeps the idempotency key stable across a retry", async () => {
     createProjectRuntimeActionMock
```

### MODIFIED DIFF — `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 684ced0..67cd57e 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -2,11 +2,16 @@

 import { useEffect, useId, useRef, useState, useTransition } from "react";
 import { StatusPill } from "@/components/ui/StatusPill";
-import { projectAssistantSendAction } from "./actions";
+import {
+  projectAssistantDecideAction,
+  projectAssistantSendAction,
+} from "./actions";
 import type {
   AssistantHistoryMessage,
   AssistantToolEventDto,
+  F2TurnPayload,
 } from "./types";
+import type { F2DecisionKind, ProposalDto } from "./f2/types";
 import styles from "./project-assistant.module.css";

 type UiMessage = {
@@ -44,6 +49,23 @@ function statusLabel(status: AssistantToolEventDto["status"]): string {
   }
 }

+function modeFromResult(result: {
+  presentation?: string;
+  mode?: string;
+  model?: string | null;
+}): string {
+  if (result.presentation === "test_provider" || result.mode === "fixture") {
+    const model = result.model ? ` · ${result.model}` : "";
+    return `Mode démonstration / Fixture${model}`;
+  }
+  if (result.presentation === "openai_live" || result.mode === "live") {
+    const model = result.model ? ` · ${result.model}` : "";
+    return `Mode live${model}`;
+  }
+  if (result.mode === "unavailable") return "Assistant indisponible";
+  return "MODE À CONFIRMER";
+}
+
 export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const inputId = useId();
   const liveRegionId = useId();
@@ -52,10 +74,13 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const [toolEvents, setToolEvents] = useState<AssistantToolEventDto[]>([]);
   const [uiState, setUiState] = useState<UiState>("INITIAL");
   const [error, setError] = useState<string | null>(null);
-  const [modeLabel, setModeLabel] = useState("Mode démonstration / Fixture");
+  const [modeLabel, setModeLabel] = useState("MODE À CONFIRMER");
   const [ephemeralNotice, setEphemeralNotice] = useState(
     "Conversation éphémère — aucune persistence produit.",
   );
+  const [f2, setF2] = useState<F2TurnPayload | null>(null);
+  const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
+  const [reservesText, setReservesText] = useState("");
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);

@@ -70,7 +95,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       top: el.scrollHeight,
       behavior: "smooth",
     });
-  }, [messages, toolEvents, error]);
+  }, [messages, toolEvents, error, activeProposal, f2]);

   const busy =
     isPending ||
@@ -79,6 +104,9 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     uiState === "SOURCE_LOOKUP";
   const blocked = uiState === "BLOCKED";
   const canSend = !busy && !blocked && draft.trim().length > 0;
+  const gateOpen =
+    activeProposal?.morrisGateRequired === true &&
+    activeProposal.status === "DECISION_REQUIRED";

   function historyForRequest(): AssistantHistoryMessage[] {
     return messages
@@ -120,11 +148,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         return;
       }

-      if (result.mode === "fixture") {
-        setModeLabel("Mode démonstration / Fixture");
-      } else if (result.mode === "live") {
-        setModeLabel("Mode live (provider configuré)");
-      }
+      setModeLabel(modeFromResult(result));
       setEphemeralNotice(result.ephemeralNotice);
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
       if (result.toolEvents.length > 0) {
@@ -138,6 +162,46 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           content: result.text,
         },
       ]);
+      if (result.f2) {
+        setF2(result.f2);
+        setActiveProposal(result.f2.proposal);
+      } else {
+        setF2(null);
+        setActiveProposal(null);
+      }
+      setUiState("ANSWERED");
+    });
+  }
+
+  function decide(kind: F2DecisionKind) {
+    if (!activeProposal || busy || blocked) return;
+    startTransition(async () => {
+      setUiState("ASSISTANT_WORKING");
+      setError(null);
+      const result = await projectAssistantDecideAction({
+        projectId,
+        proposalId: activeProposal.proposalId,
+        decisionKind: kind,
+        reservesText: kind === "GO_WITH_RESERVES" ? reservesText : null,
+      });
+      if (!result.ok) {
+        setUiState("ERROR_RECOVERABLE");
+        setError(result.message);
+        if (result.proposal) setActiveProposal(result.proposal);
+        return;
+      }
+      setModeLabel(modeFromResult(result));
+      setEphemeralNotice(result.ephemeralNotice);
+      setF2(result.f2);
+      setActiveProposal(result.f2.proposal);
+      setMessages((prev) => [
+        ...prev,
+        {
+          id: nextId("assistant"),
+          role: "assistant",
+          content: result.text,
+        },
+      ]);
       setUiState("ANSWERED");
     });
   }
@@ -151,13 +215,15 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       <div className={styles.metaRow} data-testid="project-assistant-mode-pill">
         <StatusPill tone="blueFlush">{modeLabel}</StatusPill>
         <StatusPill tone="muted">Lecture seule</StatusPill>
+        <StatusPill tone="muted">AUCUNE EXÉCUTION</StatusPill>
       </div>
       <p className={styles.ephemeral} data-testid="project-assistant-ephemeral">
         {ephemeralNotice}
       </p>
       <p className={styles.scope} data-testid="project-assistant-scope">
-        Périmètre F1 : analyse · conversation · lecture Git/GitHub. Pas
-        d&apos;exécution Cursor, pas d&apos;écriture, pas de qualification F2.
+        Périmètre F1+F2 : analyse · conversation · lecture · qualification ·
+        proposition · gate humain. Pas d&apos;exécution Cursor, pas d&apos;écriture,
+        pas de destination OPS1.
       </p>

       <div
@@ -196,6 +262,197 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         )}
       </div>

+      {f2 ? (
+        <div
+          className={styles.f2Labels}
+          data-testid="project-assistant-f2-labels"
+          aria-live="polite"
+        >
+          {f2.labels.recommendation ? (
+            <StatusPill tone="blueFlush">{f2.labels.recommendation}</StatusPill>
+          ) : null}
+          {f2.labels.proposition ? (
+            <StatusPill tone="blueFlush">{f2.labels.proposition}</StatusPill>
+          ) : null}
+          {f2.labels.decisionRequired ? (
+            <StatusPill tone="orange">{f2.labels.decisionRequired}</StatusPill>
+          ) : null}
+          {f2.labels.decisionTaken ? (
+            <StatusPill tone="green">{f2.labels.decisionTaken}</StatusPill>
+          ) : null}
+          <StatusPill tone="muted">{f2.labels.noExecution}</StatusPill>
+        </div>
+      ) : null}
+
+      {f2?.qualification ? (
+        <section
+          className={styles.qualificationCard}
+          data-testid="project-assistant-qualification"
+          aria-labelledby="f2-qualification-title"
+        >
+          <h3 id="f2-qualification-title" className={styles.cardTitle}>
+            RECOMMANDATION
+          </h3>
+          <p className={styles.cardMeta}>
+            {f2.qualification.recommendationLabel}
+          </p>
+          <dl className={styles.cardDl}>
+            <div>
+              <dt>Cycle SFIA</dt>
+              <dd data-testid="f2-cycle">
+                {f2.qualification.cycleTypeId} — {f2.qualification.cycleLabel}
+              </dd>
+            </div>
+            <div>
+              <dt>Profil recommandé</dt>
+              <dd data-testid="f2-profile">{f2.qualification.recommendedProfile}</dd>
+            </div>
+            <div>
+              <dt>Rationale</dt>
+              <dd data-testid="f2-rationale">{f2.qualification.rationale}</dd>
+            </div>
+            <div>
+              <dt>Provenance</dt>
+              <dd data-testid="f2-qualification-provenance">
+                catalogue {f2.qualification.catalogVersion} ·{" "}
+                {f2.qualification.detailedStatus}
+                {f2.qualification.capitalizationViaCycleTypeId
+                  ? " · capitalisation via cycleType"
+                  : ""}
+              </dd>
+            </div>
+          </dl>
+        </section>
+      ) : null}
+
+      {activeProposal ? (
+        <section
+          className={styles.proposalCard}
+          data-testid="project-assistant-proposal"
+          aria-labelledby="f2-proposal-title"
+        >
+          <h3 id="f2-proposal-title" className={styles.cardTitle}>
+            PROPOSITION
+          </h3>
+          <p className={styles.cardMeta} data-testid="f2-proposal-id">
+            {activeProposal.proposalId} · statut {activeProposal.status}
+          </p>
+          <dl className={styles.cardDl}>
+            <div>
+              <dt>Demande reformulée</dt>
+              <dd>{activeProposal.rephrasedRequest}</dd>
+            </div>
+            <div>
+              <dt>Objectif</dt>
+              <dd>{activeProposal.objective}</dd>
+            </div>
+            <div>
+              <dt>Périmètre</dt>
+              <dd data-testid="f2-proposal-scope">{activeProposal.scope}</dd>
+            </div>
+            <div>
+              <dt>Hors périmètre</dt>
+              <dd data-testid="f2-proposal-out-of-scope">
+                {activeProposal.outOfScope.join(" · ")}
+              </dd>
+            </div>
+            <div>
+              <dt>Gate Morris</dt>
+              <dd data-testid="f2-gate-required">
+                {activeProposal.morrisGateRequired
+                  ? "DÉCISION REQUISE"
+                  : "NO MORRIS GATE REQUIRED"}
+              </dd>
+            </div>
+            <div>
+              <dt>Prochaine étape</dt>
+              <dd>{activeProposal.nextPossibleStep}</dd>
+            </div>
+            <div>
+              <dt>Contexte</dt>
+              <dd>
+                {activeProposal.contextSnapshot.projectId} /{" "}
+                {activeProposal.contextSnapshot.lpsId}@
+                {activeProposal.contextSnapshot.lpsVersion}
+              </dd>
+            </div>
+          </dl>
+          <p
+            className={styles.processLocal}
+            data-testid="f2-process-local-notice"
+          >
+            {activeProposal.processLocalNotice}
+          </p>
+          <p className={styles.noExecutionBanner} data-testid="f2-no-execution">
+            AUCUNE EXÉCUTION
+          </p>
+        </section>
+      ) : null}
+
+      {gateOpen ? (
+        <section
+          className={styles.gateCard}
+          data-testid="project-assistant-gate"
+          aria-labelledby="f2-gate-title"
+        >
+          <h3 id="f2-gate-title" className={styles.cardTitle}>
+            DÉCISION REQUISE
+          </h3>
+          <p className={styles.cardMeta}>
+            Décision humaine explicite liée à {activeProposal?.proposalId}
+          </p>
+          <label className={styles.reservesLabel} htmlFor={`${inputId}-reserves`}>
+            Réserves (obligatoires pour GO WITH RESERVES)
+          </label>
+          <textarea
+            id={`${inputId}-reserves`}
+            className={styles.reservesInput}
+            data-testid="f2-reserves-input"
+            rows={2}
+            value={reservesText}
+            disabled={busy}
+            onChange={(event) => setReservesText(event.target.value)}
+          />
+          <div className={styles.gateActions} role="group" aria-label="Décisions Morris">
+            {(
+              [
+                ["GO", "GO"],
+                ["GO_WITH_RESERVES", "GO WITH RESERVES"],
+                ["NO_GO", "NO-GO"],
+                ["AMEND", "AMEND"],
+              ] as const
+            ).map(([kind, label]) => (
+              <button
+                key={kind}
+                type="button"
+                className={styles.gateButton}
+                data-testid={`f2-decide-${kind}`}
+                disabled={busy}
+                onClick={() => decide(kind)}
+              >
+                {label}
+              </button>
+            ))}
+          </div>
+        </section>
+      ) : null}
+
+      {f2?.decision ? (
+        <section
+          className={styles.decisionCard}
+          data-testid="project-assistant-decision"
+          aria-live="polite"
+        >
+          <h3 className={styles.cardTitle}>DÉCISION PRISE</h3>
+          <p data-testid="f2-decision-kind">{f2.decision.kind}</p>
+          <p data-testid="f2-decision-scope">Scope: {f2.decision.scope}</p>
+          {f2.decision.readyForNextGatedStep ? (
+            <p data-testid="f2-ready-next">READY FOR NEXT GATED STEP</p>
+          ) : null}
+          <p className={styles.noExecutionBanner}>AUCUNE EXÉCUTION</p>
+        </section>
+      ) : null}
+
       <section
         className={styles.sources}
         aria-labelledby="project-assistant-sources-title"
@@ -342,7 +599,6 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         </div>
       </form>

-      {/* Explicit absence of Cursor / write controls */}
       <div
         className={styles.srOnly}
         data-testid="project-assistant-no-cursor"
@@ -357,6 +613,13 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       >
         Aucune écriture Git ou GitHub
       </div>
+      <div
+        className={styles.srOnly}
+        data-testid="project-assistant-no-ops1-destination"
+        aria-hidden="true"
+      >
+        OPS1 n&apos;est pas la destination F2
+      </div>
     </div>
   );
 }
```

### MODIFIED DIFF — `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 6249302..bae1275 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -1,13 +1,20 @@
 "use server";

-import { orchestrateProjectAssistantTurn } from "./orchestrateTurn";
+import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
+import { orchestrateAssistantSend } from "./f2/orchestrateF2";
+import { recordF2Decision } from "./f2/recordDecision";
+import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
+import type { F2DecisionKind } from "./f2/types";
 import type {
   AssistantHistoryMessage,
+  ProjectAssistantContextDto,
+  ProjectAssistantDecideResult,
   ProjectAssistantSendResult,
 } from "./types";

 /**
- * Thin server action — Project Workspace F1 Assistant.
+ * Thin server action — Project Workspace Assistant (F1 + F2).
  * No OPS1 session. No Cursor. No Git write. No durable persistence.
  */
 export async function projectAssistantSendAction(input: {
@@ -15,5 +22,139 @@ export async function projectAssistantSendAction(input: {
   content: string;
   history?: AssistantHistoryMessage[];
 }): Promise<ProjectAssistantSendResult> {
-  return orchestrateProjectAssistantTurn(input);
+  return orchestrateAssistantSend(input);
+}
+
+function toContextDto(
+  result: Extract<
+    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
+    { ok: true }
+  >,
+): ProjectAssistantContextDto {
+  return {
+    projectId: result.project.projectId,
+    name: result.project.name,
+    shortReference: result.project.shortReference ?? null,
+    objective: result.project.objective,
+    contextSummary: result.project.contextSummary,
+    criticality: result.project.criticality,
+    constraints: [...result.project.constraints],
+    lpsId: result.livingState.id,
+    lpsVersion: result.livingState.version,
+    lpsCreatedAt: result.livingState.createdAt,
+    doctrineId: result.doctrine.id,
+    doctrineVersion: result.doctrine.version,
+    doctrineDigest: result.doctrine.digest,
+    doctrineStatus: result.doctrine.status,
+    runtimeMode: result.disclosures.runtimeMode,
+    persistence: result.disclosures.persistence,
+    readiness: result.readiness.status,
+  };
+}
+
+/**
+ * Morris gate decision — client may only send proposalId, decisionKind,
+ * optional reserves, projectId. Authority is registered server-side.
+ */
+export async function projectAssistantDecideAction(input: {
+  projectId: string;
+  proposalId: string;
+  decisionKind: F2DecisionKind;
+  reservesText?: string | null;
+  /** Hostile — ignored if present. */
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<ProjectAssistantDecideResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "decision_error",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA process-local indisponibles pour la décision F2.",
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const project = toContextDto(projectResult);
+
+  const recorded = await recordF2Decision({
+    proposalId: input.proposalId,
+    projectId: input.projectId,
+    decisionKind: input.decisionKind,
+    reservesText: input.reservesText,
+    canActAsMorris: input.canActAsMorris,
+    claimedAuthorityLevel: input.claimedAuthorityLevel,
+    currentContext: {
+      projectId: project.projectId,
+      lpsId: project.lpsId,
+      lpsVersion: project.lpsVersion,
+      doctrineDigest: project.doctrineDigest,
+    },
+    decisionServices: runtime.oa.decisionServices,
+    authorityResolver: runtime.oa.authorityResolver,
+    nowIso: () => runtime.oa!.clock.nowIso(),
+  });
+
+  if (!recorded.ok) {
+    return {
+      ok: false,
+      status: recorded.code === "STALE" ? "stale" : "decision_error",
+      code: recorded.code,
+      message: recorded.message,
+      mode: "fixture",
+      retryable: recorded.code === "STALE",
+      proposal: recorded.proposal ?? null,
+    };
+  }
+
+  const { decision, proposal } = recorded;
+  const textParts = [
+    "DÉCISION PRISE",
+    `${decision.kind} capturée pour ${proposal.proposalId}.`,
+    `Scope: ${decision.scope}.`,
+    decision.readyForNextGatedStep
+      ? "READY FOR NEXT GATED STEP"
+      : "Proposition non approuvée.",
+    "AUCUNE EXÉCUTION",
+    F2_PROCESS_LOCAL_NOTICE,
+  ];
+
+  return {
+    ok: true,
+    status: "ok",
+    mode: "fixture",
+    presentation: "unconfirmed",
+    text: textParts.join(" — "),
+    project,
+    ephemeralNotice: F2_PROCESS_LOCAL_NOTICE,
+    f2: {
+      turnKind: "f2_decision",
+      intentClass: "actionable",
+      qualification: null,
+      proposal,
+      decision,
+      labels: {
+        recommendation: null,
+        proposition: "PROPOSITION",
+        decisionRequired: null,
+        decisionTaken: "DÉCISION PRISE",
+        noExecution: "AUCUNE EXÉCUTION",
+      },
+      executionBlocked: true,
+      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+    },
+  };
 }
```

### MODIFIED DIFF — `projects/sfia-studio/app/features/project-assistant/index.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/index.ts b/projects/sfia-studio/app/features/project-assistant/index.ts
index 0ff6c03..e61d157 100644
--- a/projects/sfia-studio/app/features/project-assistant/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/index.ts
@@ -3,4 +3,5 @@ export type {
   ProjectAssistantSendResult,
   AssistantHistoryMessage,
   AssistantToolEventDto,
+  F2TurnPayload,
 } from "./types";
```

### MODIFIED DIFF — `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 513d325..5c935ee 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -152,6 +152,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       text: loop.text,
       mode: modeResolution.mode,
       presentation,
+      model: loop.usage?.model ?? null,
       toolRounds: loop.toolRounds,
       toolCalls: loop.toolCalls,
       sources,
```

### MODIFIED DIFF — `projects/sfia-studio/app/features/project-assistant/project-assistant.module.css`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css b/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
index a543f25..4ebc7b9 100644
--- a/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
+++ b/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
@@ -210,3 +210,129 @@
   white-space: nowrap;
   border: 0;
 }
+
+.f2Labels {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+
+.qualificationCard,
+.proposalCard,
+.gateCard,
+.decisionCard {
+  display: grid;
+  gap: 8px;
+  padding: 10px 12px;
+  border: 1px solid var(--sfia-border-soft);
+  border-radius: 10px;
+  background: #f7fafc;
+}
+
+.proposalCard {
+  border-color: #1d4e89;
+  background: #f3f7fb;
+}
+
+.gateCard {
+  border-color: #b45309;
+  background: #fffbeb;
+}
+
+.decisionCard {
+  border-color: #127c4c;
+  background: #f1faf5;
+}
+
+.cardTitle {
+  margin: 0;
+  font-size: 12px;
+  font-weight: 700;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--sfia-ink);
+}
+
+.cardMeta {
+  margin: 0;
+  font-size: 12px;
+  color: var(--sfia-muted);
+}
+
+.cardDl {
+  margin: 0;
+  display: grid;
+  gap: 6px;
+}
+
+.cardDl div {
+  display: grid;
+  gap: 2px;
+}
+
+.cardDl dt {
+  font-size: 11px;
+  font-weight: 650;
+  color: var(--sfia-muted);
+  text-transform: uppercase;
+  letter-spacing: 0.03em;
+}
+
+.cardDl dd {
+  margin: 0;
+  font-size: 13px;
+  color: var(--sfia-ink);
+  line-height: 1.4;
+}
+
+.processLocal,
+.noExecutionBanner {
+  margin: 0;
+  font-size: 12px;
+  font-weight: 650;
+}
+
+.noExecutionBanner {
+  color: #7a1f16;
+}
+
+.reservesLabel {
+  font-size: 12px;
+  color: var(--sfia-ink);
+}
+
+.reservesInput {
+  width: 100%;
+  border: 1px solid var(--sfia-border-soft);
+  border-radius: 8px;
+  padding: 8px 10px;
+  font: inherit;
+  box-sizing: border-box;
+}
+
+.gateActions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+
+.gateButton {
+  border: 1px solid #1d4e89;
+  background: #fff;
+  color: #1d4e89;
+  border-radius: 8px;
+  padding: 8px 12px;
+  font-size: 12px;
+  font-weight: 650;
+  cursor: pointer;
+}
+
+.gateButton:focus-visible {
+  outline: 2px solid #1d4e89;
+  outline-offset: 2px;
+}
+
+.gateButton:disabled {
+  opacity: 0.5;
+  cursor: not-allowed;
+}
```

### MODIFIED DIFF — `projects/sfia-studio/app/features/project-assistant/types.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index d2bc1ef..0c67e1a 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -1,15 +1,25 @@
 /**
- * F1 Project Assistant — ephemeral DTOs (no durable persistence).
+ * Project Assistant DTOs — F1 conversation + F2 qualification/proposal/gate.
+ * Ephemeral / process-local only (no durable persistence).
  */

-export type AssistantUiMode = "fixture" | "live" | "unavailable";
+import type {
+  DecisionDto,
+  IntentClass,
+  ProposalDto,
+  QualificationDto,
+} from "./f2/types";
+
+export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed";

 export type AssistantTurnStatus =
   | "ok"
   | "provider_unavailable"
   | "provider_error"
   | "project_not_found"
-  | "validation_error";
+  | "validation_error"
+  | "stale"
+  | "decision_error";

 export type AssistantHistoryMessage = {
   role: "user" | "assistant";
@@ -51,18 +61,45 @@ export type ProjectAssistantContextDto = {
   readiness: string;
 };

+export type F2TurnLabels = {
+  recommendation: "RECOMMANDATION" | null;
+  proposition: "PROPOSITION" | null;
+  decisionRequired: "DÉCISION REQUISE" | null;
+  decisionTaken: "DÉCISION PRISE" | null;
+  noExecution: "AUCUNE EXÉCUTION";
+};
+
+export type F2TurnPayload = {
+  turnKind:
+    | "f1_informative"
+    | "f2_clarification"
+    | "f2_proposal"
+    | "f2_blocked"
+    | "f2_decision";
+  intentClass: IntentClass;
+  qualification: QualificationDto | null;
+  proposal: ProposalDto | null;
+  decision: DecisionDto | null;
+  labels: F2TurnLabels;
+  executionBlocked: boolean;
+  processLocalNotice: string;
+};
+
 export type ProjectAssistantSendSuccess = {
   ok: true;
   status: "ok";
   text: string;
-  mode: AssistantUiMode;
+  mode: Exclude<AssistantUiMode, "unconfirmed">;
   presentation: "test_provider" | "openai_live";
+  /** Observed provider model when available (from usage.model). */
+  model?: string | null;
   toolRounds: number;
   toolCalls: number;
   sources: AssistantSourceDto[];
   toolEvents: AssistantToolEventDto[];
   project: ProjectAssistantContextDto;
   ephemeralNotice: string;
+  f2?: F2TurnPayload;
 };

 export type ProjectAssistantSendFailure = {
@@ -72,8 +109,25 @@ export type ProjectAssistantSendFailure = {
   message: string;
   mode: AssistantUiMode;
   retryable: boolean;
+  proposal?: ProposalDto | null;
+  f2?: F2TurnPayload;
 };

 export type ProjectAssistantSendResult =
   | ProjectAssistantSendSuccess
   | ProjectAssistantSendFailure;
+
+export type ProjectAssistantDecideSuccess = {
+  ok: true;
+  status: "ok";
+  mode: Exclude<AssistantUiMode, "unconfirmed">;
+  presentation: "test_provider" | "openai_live" | "unconfirmed";
+  text: string;
+  project: ProjectAssistantContextDto;
+  ephemeralNotice: string;
+  f2: F2TurnPayload;
+};
+
+export type ProjectAssistantDecideResult =
+  | ProjectAssistantDecideSuccess
+  | ProjectAssistantSendFailure;
```

### MODIFIED DIFF — `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index e4357ae..1031f79 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -34,6 +34,17 @@ export class FakeConversationProvider implements ConversationProvider {
     this.toolScript = options?.toolScript;
   }

+  async completeStructured(input: {
+    messages: ProviderChatMessage[];
+    schemaName: string;
+    jsonSchema: Record<string, unknown>;
+  }): Promise<ProviderCompletionResult> {
+    void input.schemaName;
+    void input.jsonSchema;
+    // Reuse F2 marker / analysis scripted JSON from complete().
+    return this.complete(input.messages);
+  }
+
   async complete(
     messages: ProviderChatMessage[],
   ): Promise<ProviderCompletionResult> {
@@ -47,6 +58,227 @@ export class FakeConversationProvider implements ConversationProvider {
     if (lastUser?.content.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
       throw new Error("FAKE_PROVIDER_ERROR");
     }
+
+    // F2 deterministic structured intent JSON (TEST/FAKE only)
+    if (lastUser?.content.includes("__F2_INFORMATIVE__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "informative",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: "Résumer le projet",
+          scope: null,
+          rephrasedRequest: "Résumer l'objectif du projet",
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_ACTIONABLE__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:delivery",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          objective: "Préparer la prochaine étape fonctionnelle",
+          scope: "Proposition bornée sans exécution",
+          rephrasedRequest: "Préparer une proposition de livraison bornée",
+          outOfScope: ["Cursor", "Git write", "PR"],
+          risks: ["Confusion reco/décision"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition"],
+          expectedOutcome: "Proposition structurée prête pour revue",
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_STRUCTURING__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:functional-architecture",
+          signals: {
+            structuralChange: true,
+            securityImpact: false,
+            architectureImpact: true,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: false,
+          },
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Changement d'architecture structurant",
+          rephrasedRequest: "Préparer une proposition d'architecture",
+          outOfScope: ["Exécution", "PR", "merge"],
+          risks: ["Impact architecture"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Gate Morris requis",
+          criticalJustification: "Besoin métier structurant documenté",
+          requestedOperation: "architecture change",
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_AMBIGUOUS__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "ambiguous",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: null,
+          scope: null,
+          rephrasedRequest: "Fais le nécessaire",
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_EXECUTION__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "execution_request",
+          candidateCycleTypeId: "cyc:delivery",
+          signals: {
+            structuralChange: true,
+            securityImpact: false,
+            architectureImpact: true,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: false,
+          },
+          objective: "Lancer Cursor et créer une PR",
+          scope: "Exécution produit demandée — refusée en F2",
+          rephrasedRequest: "Demande d'exécution Cursor / PR",
+          outOfScope: ["Exécution réelle"],
+          risks: ["Exécution hors périmètre F2"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Proposition sans exécution",
+          criticalJustification: "Demande d'exécution explicite à borner sans lancer d'agent",
+          requestedOperation: "cursor create pr",
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_CRITICAL_NO_JUSTIFICATION__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:security",
+          signals: {
+            structuralChange: true,
+            securityImpact: true,
+            architectureImpact: true,
+            dataImpact: true,
+            irreversible: true,
+            lowRiskBounded: false,
+          },
+          objective: "Changer l'architecture sécurité",
+          scope: "Impact structurant sécurité",
+          rephrasedRequest: "Modifier architecture sécurité",
+          outOfScope: ["Exécution"],
+          risks: ["Impact critique"],
+          reservations: [],
+          stopConditions: ["Justification Critical obligatoire"],
+          activatedBlocks: ["qualification"],
+          expectedOutcome: null,
+          criticalJustification: null,
+          requestedOperation: "architecture security change",
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    // Default unmarked analysis prompts (system asks for JSON): informative fail-open for F1
+    if (messages.some((m) => m.role === "system" && m.content.includes("SFIA Studio F2"))) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "informative",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: null,
+          scope: null,
+          rephrasedRequest: (lastUser?.content ?? "").slice(0, 200),
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+
     const historyLen = messages.length;
     const text =
       this.scripted?.[this.callCount - 1] ??
```

### MODIFIED DIFF — `projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts b/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
index 41ca260..0facb9c 100644
--- a/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
@@ -44,6 +44,63 @@ export class OpenAIConversationProvider implements ConversationProvider {
     return { text: round.text, usage: round.usage };
   }

+  async completeStructured(input: {
+    messages: ProviderChatMessage[];
+    schemaName: string;
+    jsonSchema: Record<string, unknown>;
+  }): Promise<ProviderCompletionResult> {
+    try {
+      const response = await this.client.responses.create({
+        model: this.model,
+        input: input.messages.map((m) => ({
+          role: m.role,
+          content: m.content,
+        })) as OpenAI.Responses.ResponseInput,
+        text: {
+          format: {
+            type: "json_schema",
+            name: input.schemaName,
+            schema: input.jsonSchema,
+            strict: true,
+          },
+        },
+      });
+
+      const usage = response.usage;
+      const inputTokens = usage?.input_tokens ?? null;
+      const outputTokens = usage?.output_tokens ?? null;
+      const totalTokens =
+        usage?.total_tokens ??
+        (inputTokens != null && outputTokens != null
+          ? inputTokens + outputTokens
+          : null);
+      const text = (response.output_text ?? "").trim();
+      if (!text) {
+        throw new TechnicalError(
+          "PROVIDER",
+          "Réponse fournisseur vide. Aucun tour assistant live n’a été créé.",
+        );
+      }
+      return {
+        text,
+        usage: {
+          inputTokens,
+          outputTokens,
+          totalTokens,
+          model: response.model ?? this.model,
+          providerResponseId: response.id ?? null,
+        },
+      };
+    } catch (error) {
+      if (error instanceof TechnicalError) throw error;
+      throw new TechnicalError(
+        "PROVIDER",
+        "Échec de l’appel fournisseur GPT. Réessayez manuellement.",
+        error,
+      );
+    }
+  }
+
   async completeRound(input: {
     items: ProviderInputItem[];
     tools: ToolDefinition[];
```

### MODIFIED DIFF — `projects/sfia-studio/app/lib/platform/ai/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/types.ts b/projects/sfia-studio/app/lib/platform/ai/types.ts
index 1d15c86..6a8811d 100644
--- a/projects/sfia-studio/app/lib/platform/ai/types.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/types.ts
@@ -62,6 +62,15 @@ export interface ConversationProvider {
     items: ProviderInputItem[];
     tools: ToolDefinition[];
   }): Promise<ProviderRoundResult>;
+  /**
+   * Optional schema-native structured completion (Responses API json_schema).
+   * Domain callers must still validate parsed payloads fail-closed.
+   */
+  completeStructured?(input: {
+    messages: ProviderChatMessage[];
+    schemaName: string;
+    jsonSchema: Record<string, unknown>;
+  }): Promise<ProviderCompletionResult>;
 }

 export function messagesToInputItems(
```

### MODIFIED DIFF — `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
index 4fbc127..328e3bc 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
@@ -7,6 +7,7 @@ import {
   ResolveDoctrinePackage,
   Sha256DigestVerificationAdapter,
   SystemClock,
+  type ClockPort,
   type DoctrinePackagePin,
 } from "@/lib/oa/doctrine";
 import {
@@ -69,6 +70,9 @@ export interface LocalProjectFacade {
 export interface LocalVerticalSliceServices {
   readonly facade: LocalProjectFacade;
   readonly architecture: LocalVerticalSliceArchitecture;
+  /** Shared OA ProjectServices instance used by the LocalProjectFacade. */
+  readonly projectServices: ProjectServices;
+  readonly clock: ClockPort;
 }

 class RandomLocalProjectIdSource implements LocalProjectIdSource {
@@ -494,5 +498,7 @@ export function createLocalVerticalSliceServices(
       () => clock.nowIso(),
     ),
     architecture: LOCAL_VERTICAL_SLICE_ARCHITECTURE,
+    projectServices,
+    clock,
   });
 }
```

### MODIFIED DIFF — `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 5cb5cc5..422315a 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -11,7 +11,19 @@ import {
   type LocalVerticalSliceServices,
 } from "@/lib/vertical-slice-core";
 import type { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
-import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
+import type { DoctrinePackagePin, ClockPort } from "@/lib/oa/doctrine";
+import {
+  createCkcQualificationServices,
+  createInMemoryCycleServices,
+  type CkcQualificationServices,
+  type CycleServices,
+} from "@/lib/oa/cycle";
+import {
+  MemoryAuthorityResolver,
+  createInMemoryDecisionServices,
+  type DecisionServices,
+} from "@/lib/oa/decision";
+import type { ProjectServices } from "@/lib/oa/project";
 import {
   toCreateLocalProjectCommand,
   toCreateProjectRuntimeFailure,
@@ -47,6 +59,15 @@ export interface RuntimeApplicationServiceOptions {
   readonly facade?: LocalProjectFacade;
 }

+export type RuntimeOaStack = {
+  readonly projectServices: ProjectServices;
+  readonly clock: ClockPort;
+  readonly cycleServices: CycleServices;
+  readonly ckcQualification: CkcQualificationServices;
+  readonly decisionServices: DecisionServices;
+  readonly authorityResolver: MemoryAuthorityResolver;
+};
+
 function resolveAudit(
   mode: RuntimeAuditMode,
   sqliteAuditStore: BoundedAtomicAuditStore | undefined,
@@ -65,20 +86,47 @@ function resolveAudit(
   return new NoOpLocalProjectCreationAudit();
 }

+function wireOaStack(
+  projectServices: ProjectServices,
+  clock: ClockPort,
+): RuntimeOaStack {
+  const cycleServices = createInMemoryCycleServices({ projectServices, clock });
+  const ckcQualification = createCkcQualificationServices({ clock });
+  const authorityResolver = new MemoryAuthorityResolver();
+  const decisionServices = createInMemoryDecisionServices({
+    projectServices,
+    cycleServices,
+    clock,
+    authorityResolver,
+  });
+  return Object.freeze({
+    projectServices,
+    clock,
+    cycleServices,
+    ckcQualification,
+    decisionServices,
+    authorityResolver,
+  });
+}
+
 /**
  * Application runtime service over V1 LocalProjectFacade.
  * Does not duplicate T-A0/T-A1 rules; maps serializable DTOs only.
+ * Exposes shared OA stack for F2 (same ProjectServices instance).
  */
 export class RuntimeApplicationService {
   private readonly facade: LocalProjectFacade;
   readonly architecture: LocalVerticalSliceServices["architecture"];
+  readonly oa: RuntimeOaStack | null;

   constructor(
     facade: LocalProjectFacade,
     architecture: LocalVerticalSliceServices["architecture"],
+    oa: RuntimeOaStack | null = null,
   ) {
     this.facade = facade;
     this.architecture = architecture;
+    this.oa = oa;
   }

   /** Use case: Create Project via V1 facade. */
@@ -115,6 +163,7 @@ export function createRuntimeApplicationService(
     return new RuntimeApplicationService(
       options.facade,
       LOCAL_VERTICAL_SLICE_ARCHITECTURE,
+      null,
     );
   }

@@ -128,5 +177,10 @@ export function createRuntimeApplicationService(
     audit: resolveAudit(options.auditMode ?? "noop", options.sqliteAuditStore),
   });

-  return new RuntimeApplicationService(services.facade, services.architecture);
+  const oa = wireOaStack(services.projectServices, services.clock);
+  return new RuntimeApplicationService(
+    services.facade,
+    services.architecture,
+    oa,
+  );
 }
```
