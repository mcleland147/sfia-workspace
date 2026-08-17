# SFIA STUDIO — PRE-M6 REAL READINESS CHECK — CYCLE 9 QA / VALIDATION

Timestamp: 2026-08-17 08:32:53 +0200 (Europe/Paris)
Level: FULL
Cycle: 9 — QA / validation
Profile: Critical
Typology: N/A — readiness/validation, no product mutation
CKC: method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md (candidate, experimental cognitive guidance, no execution authority)
Publisher intent: ChatGPT readiness decision — Verdict A/B/C
ZERO REAL EXECUTED
ZERO PRODUCT MUTATION

## Maturity formulation (mandatory)

M1→M5 FUNCTIONAL BACKBONE VALIDATED UNDER DETERMINISTIC QA,
WITH SELECTIVE REAL BOUNDARY PROOFS;
FULL REAL PRODUCT LOOP NOT YET PROVEN.

Forbidden shorthand: "M1→M5 validated" · "REAL product validated".

## GO / anti-scope consumed

- CLEAN-SLATE CANONICAL PRESENTATION REBUILD (KEEP as-is this cycle)
- D-PRE-M6-UX-05 historical presentation contract
- REUSE FUNCTIONAL M1→M5 BACKBONE ONLY
- NO REAL execution (OpenAI live call, Cursor CLI, gateway spawn)
- NO gap fix / NO Cycle 8 amend / NO Final Cycle 9 campaign
- NO project commit/push/PR/merge
- Runtime v3 NON ADOPTED · Pre-M6 NON COMPLETE · M6 NON AUTHORIZED
- Previous Final Cycle 9 SUPERSEDED (historical)

Question answered:

Can the current canonical clean-slate product, without fake/harness, perform:

UI → OpenAIConversationProvider → qualification/recommendation → HumanDecision → DecisionBasis → ExecutionContract → Confirmation → CursorCliLaunchGateway read-only → NodeCursorProcessRunner → ExecutionAttempt → Evidence → ReviewBundle → Nora/OpenAI return → LPS/Recommendation/History durable?

Answer: **NO — not end-to-end.** Conversation OpenAI is config-gated and reachable. HumanDecision / DecisionBasis / ExecutionContract / Confirmation / fixture Attempt / Evidence / ReviewBundle / LPS / History are product-connected. Cursor REAL launch and post-execution Nora/OpenAI analysis are **not connected** on the canonical path.

---

## 1. Git Truth

| Item | Value |
|------|-------|
| Repo | mcleland147/sfia-workspace |
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off` |
| Branch | `delivery/sfia-studio-pre-m6-ui-option-a` |
| HEAD | `0d33478566627a9bf507d5a06323962d349308ee` |
| origin/main after fetch | `0d33478566627a9bf507d5a06323962d349308ee` |
| origin/sfia/review-handoff after fetch | `ff10cef4056b6071bfe8a03f9b3188895d420369` |
| HEAD == origin/main | YES |
| Prior ChatGPT expected HEAD/main | 0d33478566627a9bf507d5a06323962d349308ee |
| Prior ChatGPT expected handoff | ff10cef4056b6071bfe8a03f9b3188895d420369 |
| Prior handoff blob | 126b1e7e3831e4f1bec6e98589b8d6698db877dd |
| Divergence vs last handoff | NONE — candidate dirty working tree is the expected Pre-M6 Option A delivery candidate |
| staged | `(none)` |
| REAL flags this process | SFIA_STUDIO_CURSOR_REAL unset · OPS1_CURSOR_REAL unset |
| Secrets | OPENAI_API_KEY presence inspected as boolean only — value never printed |

Fetch performed: `git fetch origin main sfia/review-handoff` (no working-tree mutation).

### git status --short

```
 M projects/sfia-studio/app/__tests__/increment-a.test.tsx
 M projects/sfia-studio/app/__tests__/increment-b.test.tsx
 M projects/sfia-studio/app/__tests__/navigation.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/app/globals.css
 M projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
 M projects/sfia-studio/app/app/studio/projects/new/page.tsx
 M projects/sfia-studio/app/components/shell/StudioShell.tsx
 M projects/sfia-studio/app/components/shell/UtilityRail.tsx
 M projects/sfia-studio/app/components/shell/utility-rail.module.css
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/types.ts
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
 M projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
 M projects/sfia-studio/app/lib/navigation.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
 M projects/sfia-studio/app/lib/oa/project/domain/types.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
 M projects/sfia-studio/app/styles/shell.module.css
 M projects/sfia-studio/app/styles/tokens.css
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-test-01.e2eQaControl.test.ts
?? projects/sfia-studio/app/__tests__/studio-projects/
?? projects/sfia-studio/app/app/api/
?? projects/sfia-studio/app/app/studio/page.tsx
?? projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a.spec.ts
?? projects/sfia-studio/app/e2e/support/
?? projects/sfia-studio/app/features/pre-m6-product-ui/
?? projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
?? projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts
?? projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedFixtureSafeContract.ts
?? projects/sfia-studio/app/features/project-assistant/f3/fixtureSafeM3ResolutionProfile.ts
?? projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
?? projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts
?? projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
?? projects/sfia-studio/app/features/studio-projects/
?? projects/sfia-studio/app/lib/oa/project/application/listProjects.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl.ts

```

### git diff --stat (tracked)

```
 .../sfia-studio/app/__tests__/increment-a.test.tsx |   5 +-
 .../sfia-studio/app/__tests__/increment-b.test.tsx |   5 +-
 .../sfia-studio/app/__tests__/navigation.test.tsx  |  45 +-
 .../ProjectAssistantPanel.test.tsx                 |  12 +-
 .../importBoundaries.test.ts                       |  17 +-
 .../vertical-slice-ui/createProjectUi.test.tsx     |  25 +-
 .../vertical-slice-ui/projectWorkspaceUi.test.tsx  |  38 +-
 projects/sfia-studio/app/app/globals.css           |  37 ++
 .../app/app/studio/projects/[id]/page.tsx          |  48 +-
 .../app/app/studio/projects/new/page.tsx           |  45 +-
 .../app/components/shell/StudioShell.tsx           |  43 +-
 .../app/components/shell/UtilityRail.tsx           |  78 +--
 .../app/components/shell/utility-rail.module.css   |   4 +
 .../project-assistant/ProjectAssistantPanel.tsx    | 588 +++++++++++++++------
 .../app/features/project-assistant/actions.ts      | 225 ++++++++
 .../f3/confirmAndExecuteF3Fixture.ts               | 319 ++---------
 .../app/features/project-assistant/f3/index.ts     |  23 +
 .../app/features/project-assistant/f3/types.ts     |   6 +-
 .../project-assistant/project-assistant.module.css |  13 +-
 .../app/features/project-assistant/types.ts        |  24 +
 .../vertical-slice-ui/CreateProjectForm.tsx        |  39 +-
 .../vertical-slice-ui/ProjectWorkspaceView.tsx     |  90 +---
 .../vertical-slice-ui/RuntimeDisclosureBanner.tsx  |  79 +--
 .../vertical-slice-ui/create-project.module.css    |  51 ++
 .../vertical-slice-ui/project-workspace.module.css |  12 +
 projects/sfia-studio/app/lib/navigation.ts         |  78 ++-
 .../infrastructure/testExecutionAdapter.ts         |  17 +-
 .../sfia-studio/app/lib/oa/project/domain/types.ts |  12 +
 projects/sfia-studio/app/lib/oa/project/index.ts   |   4 +
 .../infrastructure/memoryProjectRepository.ts      |  12 +
 .../sqlite/createSqliteProductProjectServices.ts   |   4 +
 .../sqlite/sqliteProjectRepository.ts              |  14 +
 .../oa/project/ports/projectAuditJournalPort.ts    |  16 +
 .../lib/oa/project/ports/projectRepositoryPort.ts  |   5 +
 .../app/lib/platform/ai/fakeProvider.ts            |  39 ++
 .../app/lib/vertical-slice-runtime/actions.ts      |   5 +
 .../app/lib/vertical-slice-runtime/index.ts        |   5 +
 .../app/lib/vertical-slice-runtime/mapping.ts      |  52 ++
 .../app/lib/vertical-slice-runtime/service.ts      |  29 +
 .../app/lib/vertical-slice-runtime/types.ts        |  23 +
 projects/sfia-studio/app/styles/shell.module.css   |   6 +
 projects/sfia-studio/app/styles/tokens.css         |   8 +
 42 files changed, 1403 insertions(+), 797 deletions(-)

```

Candidate classification: DIRTY expected. No STOP — LOCAL CANDIDATE DIVERGENCE.

---

## 2. Convergence Pre-check

| Item | Status |
|------|--------|
| Build Doctrine | VALIDATED — ACTIVE ON MAIN |
| Runtime v3 | NON ADOPTED |
| REAL global | NON ADOPTED |
| Pre-M6 | NON COMPLETE |
| M6 | NON AUTHORIZED |
| G-UX-11 | OPEN (not closed this cycle) |
| KEEP functional backbone | Project / LPS / OA / Decision / Contract / Attempt / Evidence / RB / freshness / History / Recovery |
| KEEP presentation | pre-m6-product-ui — unread for mutation, read for call graph |
| Legacy presentation | FREEZE / RETIRE LATER — not reopened |
| QA fakes/harness | KEEP as QA-only — not REAL proofs |

Capabilities targeted: V3-F05, V3-F02, V3-F11, V3-F12, V3-F14, V3-F15.

Milestone: PRE-M6 — REAL READINESS CHECK BEFORE FINAL DETERMINISTIC QA.

---

## 3. Sources read

Gouvernance:
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md (role: construction SoT; not mutated)

Doctrine v3 (role, not re-quoted in full):
- 30, 32, 33, 34, 35, 37 framing (HumanDecision ≠ Recommendation; LPS durable; Evidence/provenance; agent reversibility)

Process:
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md (Cycle 9 QA)
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md
- prompts/templates/sfia-cycle-execution-template.md (structure)

Last handoff compared after fetch: origin/sfia/review-handoff @ ff10cef (clean-slate presentation rebuild). Local Git Truth supersedes nothing in HEAD/main; candidate remains dirty as expected. Cycle 9 superseded claim from that handoff is historical and is **not** used as UAT authorization.

---

## 4. Inspection A — Canonical conversation path

### Call graph (proven)

```
/studio/projects/[id]
  → ProjectWorkspacePage (features/pre-m6-product-ui/ProjectWorkspacePage.tsx)
  → ConversationSurface
  → useProductConversation.sendMessage
  → projectAssistantSendAction (features/project-assistant/actions.ts)   [server action]
  → orchestrateAssistantSend (f2/orchestrateF2.ts)
  → analyzeIntent (f2/intentAnalysis.ts)
  → resolveConversationProvider() (lib/platform/ai/provider.ts)
```

A1. **YES** — user send from clean-slate reaches `resolveConversationProvider()` via `analyzeIntent` (intentAnalysis.ts ~246) and, for informative F1 path, `orchestrateProjectAssistantTurn` (orchestrateTurn.ts ~131).

A2. `useProductConversation` calls product server actions (`projectAssistantSendAction`, `Decide`, `PrepareResolvedM3`, `ConfirmAndExecuteResolvedM3`, `Rehydrate`). Not a test helper.

A3. **NO** clean-slate-specific Fake force. Fake is only `OPS1_CONVERSATION_PROVIDER === "fake"` in `isFakeConversationProviderForced()` (config.ts:40-41).

A4/A5 occurrence classes:

| Symbol | Locations (representative) | Class |
|--------|----------------------------|-------|
| resolveConversationProvider | platform/ai/provider.ts; orchestrateTurn.ts; intentAnalysis.ts; ops1/conversation (historical) | PRODUCT CANONICAL (platform) + HISTORICAL OPS1 re-export |
| isFakeConversationProviderForced / OPS1_CONVERSATION_PROVIDER | config.ts; orchestrateF2; e2eOptionAQaScenarioControl; playwright.config; tests | CONFIG + TEST-ONLY + HARNESS gate |
| FakeConversationProvider | fakeProvider.ts; tests; ops1 re-export | QA / CONFIG-GATED |
| setConversationProviderForTests | provider.ts; tests only | TEST-ONLY |
| OpenAIConversationProvider | openaiProvider.ts | PRODUCT CANONICAL (server) |

A6. When `OPS1_CONVERSATION_PROVIDER != "fake"`:
- require `OPENAI_API_KEY` and `OPENAI_MODEL` (trim non-empty)
- missing → mode `unavailable`, fail-closed, **no silent fake fallback** (orchestrateF2 resolveMode; orchestrateTurn resolveMode)
- present → `new OpenAIConversationProvider(apiKey, model)`

A7. Secrets remain server-side (`lib/platform/ai/config.ts` `requireLiveConversationSecrets`). No `NEXT_PUBLIC_OPENAI_*`. Client UI does not import openaiProvider. Values never printed this cycle.

---

## 5. Inspection B — OpenAI live boundary (static)

OpenAIConversationProvider (openaiProvider.ts):
- API: OpenAI Responses (`client.responses.create`)
- Methods: `complete`, `completeStructured` (json_schema strict), `completeRound` (tool calls)
- Provenance returned: `usage.inputTokens`, `outputTokens`, `totalTokens`, `model`, `providerResponseId`
- F2 intent uses `completeStructured` → `usage.model` mapped to UI DTO; token fields exist on provider result but are **not persisted as durable Evidence**
- Fail-closed empty output / provider errors

Statuses:
- UI → action → resolver → OpenAIConversationProvider: **CONFIG-GATED** / **PROVEN CONNECTED**
- OpenAI usage → domain persistence: **PRESENT BUT NOT CONNECTED** (usage not stored as Evidence)
- OpenAI → qualification: **PROVEN CONNECTED** via analyzeIntent + qualifyWithCkc (server-side, provider untrusted until validation)

---

## 6. Inspection C — Qualification → HumanDecision

```
analyzeIntent (provider)
  → qualifyWithCkc (catalogue, not LLM authority)
  → ProposalDto process-local (proposalStore)
  → UI gate (ConversationSurface f2-decide-*)
  → projectAssistantDecideAction
  → recordF2Decision
  → DecisionServices (SQLite when Product store present)
```

Proofs:
- Recommendation labels ≠ HumanDecision (`f2.labels.recommendation` vs `decision`)
- User phrase is not implicit GO (gatePolicy + explicit decide kinds)
- HumanDecision durable via OA decision services
- DecisionBasis built in recordDecision.ts `buildDecisionBasis` (sourceType proposal, sourceDigest, executionBasis) and persisted with the decision
- Provider cannot silently create structuring Decision (client hostile fields voided; authority fail-closed unless `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1`)

---

## 7. Inspection D — ExecutionContract + Confirmation

D1. Object: durable OA `ExecutionContract` produced by `prepareM3FromDecision` then **superseded** by `resolveM3ExecutionContract` using **`fixtureSafeM3ResolutionProfile()`** (F3_ACTION=`fixture-docs-prepare`, F3_TARGET=`sfia-studio/f3-fixture-only`, F3_CAPABILITY=`cap:f3-fixture-docs`, F3_SCOPE=`f3-fixture:docs+metadata-only`).

D2. UI CTA `f3-confirm-execute-button` → `confirmAndExecuteResolvedM3Action`.

D3. Before Confirmation: `attemptCreated: false` on F3M3ResolvedPayload; `f3-prepare-no-attempt` UI stamp. Attempt created only inside `executeConfirmedFixtureSafeContract` after ConfirmExecutionContract.

D4. After Confirmation: `SelectExecutionAgent` + `StartExecution` against **injected `TestExecutionAdapter`** (`adp:f3-test-fixture`, `externalEffects: false`).

D5. **Fixture/harness product path**, not Cursor REAL.

D6. Bounded injection exists in **in-memory** factory via optional `realBoundary: { launchPort, safetyJournal }`. Product `wireOaStack` does **not** pass it. SQLite factory (`createSqliteExecutionAttemptServices`) **does not even accept** `realBoundary` (comment: "Does NOT wire realBoundary / Gate D / REAL launch").

D7. Config discovered in code (not invented):
- Product default: no REAL wire
- Confirm path hard-rejects non-F3 adapter / `externalEffects !== false`
- Studio REAL enablement flag (infra, unused by product confirm): `SFIA_STUDIO_CURSOR_REAL === "1"`
- Historical OPS1 (disconnected from canonical /studio): `OPS1_CURSOR_REAL`
- Cursor bin: `SFIA_CURSOR_BIN` then macOS app path then `~/.local/bin/cursor-agent`

---

## 8. Inspection E — TestExecutionAdapter vs Cursor REAL

| Step | Component | Canonical used? | Test-only | REAL-capable | Gate | Status |
|------|-----------|-----------------|-----------|--------------|------|--------|
| Adapter default product | TestExecutionAdapter / createF3TestExecutionAdapter | YES | identity is fixture | NO (externalEffects false) | hardcoded in wireOaStack | TEST-ONLY on product path |
| Confirm reject REAL | confirmAndExecuteResolvedM3 adapterId + externalEffects checks | YES | — | blocks REAL | code | PRESENT BUT NOT CONNECTED (explicit deny) |
| CursorCliLaunchGateway | alias of StudioCursorRealLaunchGateway | NO on /studio | used in M4 tests | YES | SFIA_STUDIO_CURSOR_REAL | PRESENT BUT NOT CONNECTED |
| StudioCursorRealLaunchGateway | RealExecutionLaunchPort | NO | tests | YES | enablement → bin → workspace → runner | PRESENT BUT NOT CONNECTED |
| NodeCursorProcessRunner | spawn shell:false | behind gateway only | spawnPrimitive injectable in tests | YES | timeout 60s default, 64KiB caps | PRESENT BUT NOT CONNECTED |
| M4 bounded RO agent | cap:cursor.read_only / cursor.read_only.inspect / workspace.isolated.read / executionMode cursor_cli_real / trustLevel bounded / scope studio.m4.real_off | NOT in product registry (only F3 fixture agent) | descriptor exists | YES | exact caps, no wildcards | PRESENT BUT NOT CONNECTED |
| GrantRealExecutionGate / Gate D | in-memory factory when realBoundary provided | NO on product SQLite stack | tests | YES | grant then consume | PRESENT BUT NOT CONNECTED |
| OPS1 Cursor adapter | lib/ops1/cursorExecutionAdapter.ts | NO (historical OPS1 UI) | — | YES | OPS1_CURSOR_REAL | HISTORICAL / DISCONNECTED |

E1. Gateway is reusable infrastructure, **not** raccorded to canonical confirm.

E2. Instantiable in tests; **not** from current ExecutionContract product flow (contract is fixture-docs, registry has no M4 agent, SQLite stack has no launchPort).

E3. Yes, gateway constructor requires ProcessRunner; production type is NodeCursorProcessRunner. Default product never constructs it.

E4/E5. `resolveCursorBinPath`: `SFIA_CURSOR_BIN` → `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` → `$HOME/.local/bin/cursor-agent`. Missing bin → reject, no silent substitute.

E6. Default OFF: `isStudioCursorRealEnabled` requires `SFIA_STUDIO_CURSOR_REAL==="1"`. Product confirm additionally forbids REAL adapter. DisabledRealProcessRunner exists for OFF tests.

E7. Exact caps in m4BoundedReadOnlyCursorAgent.ts: capability `cap:cursor.read_only`, action `cursor.read_only.inspect`, target `workspace.isolated.read`, executionMode `cursor_cli_real`, trustLevel `bounded`, scope **`studio.m4.real_off`**. Wildcard/`cap:unresolved` rejected by `isM4BoundedReadOnlyRealAgent`.

E8. Gateway argv is fixed (`agent --print --mode ask --workspace … --trust --sandbox enabled` + hardcoded read-only instruction). `shell: false`. No user-controlled shell. **No STOP — REAL SAFETY BOUNDARY NOT READY** on the *infra* ACL. The product path simply never reaches it.

---

## 9. Inspection F — Cursor result → Attempt (theoretical)

StartExecution.ts documents REAL path: Gate D consume + CREATED journal → realLaunchPort.launch → LAUNCHED journal → Attempt `running`. Fixture path never calls RealExecutionLaunchPort.

NodeCursorProcessRunner captures: processRef, exitCode, timedOut, stdout/stderr (capped), durationMs, realProcessInvoked, worktreeRef.

Product confirm instead records scripted TestExecutionAdapter ack and `resultRef: res:m3-fixture:…`. That Attempt is **synthesized fixture**, not process-derived.

Failed/timeout/cancelled **domain transitions exist** (RecordExecutionFailure, TriggerAttemptTimeout, Cancel). Current UI negative states for F7 are **harness-forced** via `/api/e2e/option-a-qa-scenario` (gated), not live process.

---

## 10. Inspection G — Attempt → Evidence → ReviewBundle

Canonical after fixture Start:
`executeConfirmedFixtureSafeContract` → `ingestEvidenceAndRecommend`
→ `ingestExecutionAttemptEvidence` (sourceKind=`execution_attempt`, technicalResultRef=attempt.resultRef)
→ `createReviewBundle`
→ `appendEvidenceOutcomeToLps` (durable ids on LPS)
→ `recommendNextGate` (domain coordination, **not LLM**)

G1. A Cursor REAL result **could** ingest via existing `ingestExecutionAttemptEvidence` **if** a REAL Attempt existed. Canonical confirm never creates that Attempt.

G2. Domain can distinguish sourceKind/technicalResultRef/adapter identity. Product DTO **forces** `mode: "FIXTURE"`, ids `ev:f3-fixture:…` / `rb:f3-fixture:…`. Today a REAL Evidence cannot appear on this path; if forced through ingest as-is, labels would still say FIXTURE — **provenance distinction is incomplete on the product DTO**.

G3. ReviewBundle construction from Evidence ids: yes (domain). G4. Durable on Product SQLite: yes (M5). G5. failed/timeout/cancelled are generic OA transitions; current browser proofs are harness scenarios.

---

## 11. Inspection H — Nora/OpenAI return after execution — BLOCKING

H1. No product action submits execution result to Nora/OpenAI. `ingestEvidenceAndRecommend` uses `RecommendNextGate` only.

H2. That path does **not** call `resolveConversationProvider()`.

H3. Evidence/ReviewBundle **content** (stdout/stderr/process) is not injected into conversation context.

H4. RecommendNextGate coordination is returned in the process-local F3 payload; LPS stores **ids**, not Nora analysis text.

H5. LPS updated with evidence/RB id links (durable).

H6. HistorySurface projects durable anchors (Project, LPS version, evidence/RB/reco labels) — not a conversation transcript.

H7. Reload reconstructs durable Evidence/RB via `projectAssistantRehydrateEvidenceOutcomeAction` / `rehydrateEvidenceOutcomeFromLps`. Conversation/Proposal/Confirmation remain process-local (honest).

**FULL WIRING COMPLETE is forbidden** because the path stops at Evidence/ReviewBundle + domain recommendation without Nora/provider analysis.

---

## 12. Inspection I — Future REAL config matrix (DO NOT ACTIVATE)

| Variable / config | Role | OpenAI? | Cursor? | Expected form | Default | Fail-closed? | Source | Client? | Risk |
|-------------------|------|---------|---------|---------------|---------|--------------|--------|---------|------|
| OPS1_CONVERSATION_PROVIDER | Force fake vs live | if not `fake` | no | string `fake` or unset/other | unset ⇒ live attempted | live missing secrets ⇒ unavailable, no fake fallback | platform/ai/config.ts | no | If `fake`, OpenAI never reached |
| OPENAI_API_KEY | Responses API | yes | no | non-empty secret | none | yes | config.ts | **no** | secret |
| OPENAI_MODEL | model id | yes | no | non-empty string | none | yes | config.ts | **no** | |
| SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY | local Morris gate for Decision/M3 | indirect | indirect | `1` | unset fail-closed | yes | oa/decision localSingleUserAuthority.ts | no | required for GO persist |
| SFIA_STUDIO_CURSOR_REAL | Studio REAL process enablement | no | yes | `1` | unset/off | gateway rejects | realLaunchSafety.ts | no | must stay off this cycle |
| SFIA_CURSOR_BIN | Cursor executable | no | yes | absolute executable path | probe list | reject if none executable | studioCursorRealLaunchGateway.ts | no | path must be bornable |
| OPS1_CURSOR_REAL | Historical OPS1 REAL | no | OPS1 only | `1` | unset | OPS1 refuses, no fixture fallback | ops1/cursorExecutionAdapter.ts | OPS1 UI mentions name | DISCONNECTED from /studio |
| SFIA_STUDIO_PRODUCT_DB_PATH | Product SQLite override | no | no | filesystem path under policy | `.sfia-exec/product/oa-product.sqlite` | alien paths rejected | oa/project sqlite/paths.ts | no | isolation |
| SFIA_STUDIO_E2E_QA_CONTROL | QA scenario API | no | no | `1` + other gates | off → 404 | yes | e2eOptionAQaScenarioControl.ts | window flag e2e-only | must stay off for REAL |
| NODE_ENV production | disables QA control | — | — | | | | e2e control | no | |

No other REAL-enabling product env discovered. Do not invent.

---

## 13. Inspection J — Hard-code / harness contamination

| Item | Canonical nominal? | Notes |
|------|--------------------|-------|
| FakeConversationProvider | only if OPS1_CONVERSATION_PROVIDER=fake | not hardcoded in pre-m6-product-ui |
| __F2_GATED_STANDARD__ | E2E/fake provider trigger | TEST-ONLY / fake provider |
| TestExecutionAdapter | **YES — default product executor** | blocker for Cursor REAL |
| fixtureSafeM3ResolutionProfile | **YES — only M3 resolve profile on product path** | ZERO REAL constraints baked in |
| F3_MODE FIXTURE labels | YES on execute DTO | |
| e2eOptionAQaScenarioControl | no-op unless gated env | not silent default |
| /api/e2e/option-a-qa-scenario | 404 unless gates | HARNESS |
| consumeArmedTerminalForConfirm | inside confirm; no-op if control off | OK if gates off |
| setConversationProviderForTests | tests | TEST-ONLY |

**Blocker:** fixture adapter + fixture-safe M3 profile are **mandatory on the nominal confirm/execute path**, not merely present as QA files.

---

## 14. No parallel architecture

Allowing a future bounded REAL does **not** require a new engine, store, persistence, duplicated Project/Contract/Evidence, or second runtime. M4 infra and OA Attempt/Evidence already exist. The SQLite Attempt factory needs an **additive optional realBoundary** already present on the in-memory factory. Not Verdict C.

---

## 15. Read-only safety (future, not activated)

Possible to keep, given existing infra:
- capability/action/target/scope explicit (M4 descriptor)
- deny-by-default + no wildcards
- spawn shell:false, fixed argv, `--mode ask`, sandbox enabled
- no repo mutation instruction in gateway prompt
- Confirmation / HumanDecision / ExecutionContract cannot be client-bypassed (hostile fields voided)
- secrets server-side
- timeout + stdout/stderr caps
- Gate D consume-once (when wired)

Caveats (not activated):
- gateway comment: "Shell under ask remains unresolved by help alone; future REAL must observe"
- product ExecutionContract currently **cannot** select this agent (wrong action/capability/scope)
- Evidence DTO would still stamp FIXTURE unless amended

---

## 16. 19-link wiring table

| # | Source | Destination | Source symbol | Dest symbol | Condition | Status | Proof | Reserve |
|---|--------|-------------|---------------|-------------|-----------|--------|-------|---------|
| 1 | canonical UI | useProductConversation | ConversationSurface.tsx | hooks/useProductConversation.ts | /studio/projects/[id] | PROVEN CONNECTED | import + sendMessage | — |
| 2 | hook | server action | useProductConversation | projectAssistantSendAction | user send | PROVEN CONNECTED | actions.ts | — |
| 3 | send action | resolveConversationProvider | orchestrateAssistantSend → analyzeIntent | platform/ai/provider.ts | always on send | PROVEN CONNECTED | intentAnalysis.ts:246 | — |
| 4 | resolver | OpenAIConversationProvider | resolveConversationProvider | openaiProvider.ts | OPS1_CONVERSATION_PROVIDER≠fake AND secrets present | CONFIG-GATED | provider.ts:18-24; config.ts | fake forces FakeConversationProvider |
| 5 | OpenAI result | qualification/recommendation | analyzeIntent + qualifyWithCkc | ProposalDto / QualificationDto | provider parseOk | PROVEN CONNECTED | orchestrateF2 | untrusted until server validate |
| 6 | recommendation | HumanDecision | UI f2-decide-* | projectAssistantDecideAction → recordF2Decision | gate open | PROVEN CONNECTED | recordDecision.ts | Reco ≠ Decision |
| 7 | HumanDecision | DecisionBasis | recordF2Decision buildDecisionBasis | DecisionServices persist | M3 authority env | CONFIG-GATED | localSingleUserAuthority.ts | fail-closed if env unset |
| 8 | DecisionBasis | ExecutionContract | prepareAndResolveM3ProductPath | prepareM3FromDecision + resolveM3 | post-GO | PROVEN CONNECTED | actions.ts:445; fixtureSafe profile | successor is FIXTURE identity |
| 9 | ExecutionContract | Confirmation | UI f3-confirm | confirmAndExecuteResolvedM3 | explicit CTA | PROVEN CONNECTED | confirmAndExecuteResolvedM3.ts | process-local confirmation |
| 10 | Confirmation | adapter selection | executeConfirmedFixtureSafeContract | Select + Start + fixtureAdapter | after confirm | TEST-ONLY | F3_ADAPTER_ID required | REAL rejected |
| 11 | adapter selection | CursorCliLaunchGateway | — | StudioCursorRealLaunchGateway | would need realBoundary + REAL contract/agent | PRESENT BUT NOT CONNECTED | wireOaStack comments; SQLite factory omits realBoundary | — |
| 12 | gateway | NodeCursorProcessRunner | gateway.launch | runner.invoke shell:false | gateway constructed | PRESENT BUT NOT CONNECTED | studioCursorRealLaunchGateway.ts:211 | product never constructs |
| 13 | process result | ExecutionAttempt | StartExecution REAL branch | Attempt running/failed | realLaunchPort present | PRESENT BUT NOT CONNECTED | startExecution.ts header comments | product uses fixture ack |
| 14 | ExecutionAttempt | Evidence | ingestEvidenceAndRecommend | ingestExecutionAttemptEvidence | after fixture start | PROVEN CONNECTED (fixture Attempt only) | ingestEvidenceAndRecommend.ts | ids ev:f3-fixture |
| 15 | Evidence | ReviewBundle | createReviewBundle | durable RB | same | PROVEN CONNECTED (fixture) | ingestEvidenceAndRecommend.ts:73 | rb:f3-fixture |
| 16 | ReviewBundle | Nora/provider | — | resolveConversationProvider | would need new/extended action | MISSING | no call after ingest | RecommendNextGate is not Nora |
| 17 | Nora result | LPS | n/a | appendEvidenceOutcomeToLps | ids only | PRESENT BUT NOT CONNECTED (no Nora text) | appendEvidenceOutcomeToLps.ts | LPS gets evidence/RB ids |
| 18 | Nora result | History | HistorySurface durable anchors | rehydrate | durable facts | PROVEN CONNECTED for fixture facts | HistorySurface.tsx | not transcript |
| 19 | reload | durable reconstruction | rehydrateEvidenceOutcomeAction | LPS refs → Evidence/RB | Product SQLite | PROVEN CONNECTED | rehydrateEvidenceOutcomeFromLps.ts | conversation/proposal/confirm NOT reconstructed |

---

## 17. Exact gaps (minimal) — no fix performed

### GAP-1 — Product M3 successor is fixture-safe ZERO REAL
- Files: `prepareAndResolveM3ProductPath.ts`, `fixtureSafeM3ResolutionProfile.ts`, `f3/constants.ts`
- Current: only `fixtureSafeM3ResolutionProfile()` (fixture-docs-prepare / cap:f3-fixture-docs / NO REAL constraints)
- Target for a later Cycle 8 amend: a **separate** bounded read-only resolution profile matching M4 agent (action `cursor.read_only.inspect`, capability `cap:cursor.read_only`, target `workspace.isolated.read`, scope matching descriptor) selectable only under explicit REAL GO — without replacing fixture path used by deterministic QA
- Why not structural: resolveM3ExecutionContract already accepts explicit resolution fields

### GAP-2 — Confirm/execute refuses REAL adapters
- Files: `confirmAndExecuteResolvedM3.ts` (adapterId / externalEffects checks), `executeConfirmedFixtureSafeContract.ts`
- Current: `ADAPTER_IDENTITY_MISMATCH` / `EXTERNAL_EFFECTS_FORBIDDEN` if not F3 TestExecutionAdapter
- Target: sibling or gated branch using Gate D + RealExecutionLaunchPort after Confirmation, still no client-injected command
- Why not structural: StartExecution already has REAL branch

### GAP-3 — Product composition does not wire M4 boundary
- Files: `lib/vertical-slice-runtime/service.ts` `wireOaStack`; `createSqliteExecutionAttemptServices.ts` (no realBoundary option); registry agents = `[fixtureAgent]` only
- Current: comment "do NOT wire realBoundary"; SQLite factory cannot receive launchPort
- Target: optional realBoundary + `createM4BoundedReadOnlyCursorAgentDescriptor` on product SQLite stack, default still OFF
- Why not structural: in-memory factory already supports realBoundary

### GAP-4 — No Nora/OpenAI return after Evidence
- Files: `ingestEvidenceAndRecommend.ts`
- Current: RecommendNextGate only; no `resolveConversationProvider()`
- Target: product action that includes durable Evidence/RB facts in a provider turn, persists Nora text as non-authoritative Recommendation, updates LPS/History without creating HumanDecision
- Why not structural: provider + LPS append + History rehydrate already exist

### GAP-5 — Product Evidence DTO always FIXTURE-labeled
- Files: ingestEvidenceAndRecommend.ts evidenceId/reviewBundleId prefixes; F3_MODE; execute payload `realExecution: false`
- Current: cannot distinguish REAL vs fake on the UI DTO even if a REAL Attempt existed
- Target: provenance fields from Attempt adapterRef / executionMode / realProcessInvoked
- Why not structural: domain Evidence already has sourceKind + technicalResultRef

Dependencies for a later amend: existing M4 infra, Product SQLite, Confirmation, Gate D tests as oracles. Tests needed: unit wiring of sqlite realBoundary OFF-by-default; negative REAL-without-flag; no OpenAI/Cursor live in that amend's own QA unless separately authorized.

Debt/exit: fixture QA path must remain; do not replace deterministic harness with live OpenAI.

---

## 18. Claims allowed / forbidden

Allowed:
- Static REAL readiness for **conversation OpenAI** is config-gated and wired
- M1→M5 functional backbone remains the QA-proven fixture path
- Cursor REAL **infrastructure** exists with read-only ACL
- Wiring to run a full REAL product loop from canonical UI is **incomplete**

Forbidden (this cycle executed zero REAL):
- FULL REAL PRODUCT LOOP PROVEN
- REAL PRODUCT VALIDATED
- PRE-M6 COMPLETE
- READY FOR UAT
- G-UX-11 CLOSED
- M6 AUTHORIZED
- runtime v3 ADOPTED
- Cursor write validated
- OpenAI live proven
- Cursor REAL proven by this cycle

---

## 19. Verdict

B — SMALL WIRING GAP
CYCLE 8 DELIVERY AMEND REQUIRED BEFORE FINAL CYCLE 9
NO FIX PERFORMED

Not A: Cursor gateway and Nora-after-Evidence are not product-connected; confirm path is fixture-mandatory.
Not C: no new engine/store/persistence/parallel architecture; M4 + OA backbone reusable; read-only caps exist.

FULL REAL PRODUCT LOOP STILL NOT PROVEN.
ZERO REAL EXECUTED.

---

## 20. Exact next step (do not execute)

ChatGPT reviews this handoff.

If Morris GO for Cycle 8 Delivery Amend: bounded wiring of GAP-1…GAP-5 only (still no live OpenAI/Cursor unless a later distinct REAL GO).

Then a **new** Final Cycle 9 deterministic QA on the amended candidate.

Only after that QA PASS + distinct Morris GO: FIRST REAL PRODUCT LOOP bounded read-only.

Do not start Final Cycle 9 on the current fixture-mandatory confirm path expecting Cursor REAL.

---

## 21. How REAL *could* be activated later (documentation only)

Conversation live (already wired, still not executed here):
1. Server-side only: omit `OPS1_CONVERSATION_PROVIDER=fake`
2. Set `OPENAI_API_KEY` and `OPENAI_MODEL` (non-empty)
3. Set `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1` for Decision/M3
4. Keep `SFIA_STUDIO_CURSOR_REAL` unset until Cursor GO
5. Keep QA control unset

Cursor read-only (requires GAP-1…GAP-3 amend first, then distinct GO):
1. Product stack wires realBoundary + M4 agent
2. Confirm path can select REAL under Gate D
3. `SFIA_STUDIO_CURSOR_REAL=1`
4. `SFIA_CURSOR_BIN` or known executable present
5. ExecutionContract action/capability/scope match M4 descriptor
6. Still no OPS1_CURSOR_REAL for /studio

Do **not** perform these steps in this cycle.

---

## 22. Review pack / handoff / safety counters

- Review pack FULL: this file (overwrite, not append)
- Product files modified by this cycle: **0**
- OpenAI calls: **0**
- Tokens consumed by this cycle: **0**
- Cursor CLI REAL: **0**
- Product DB mutation by this cycle: **0**
- Project commit/push/PR/merge: **0**
- staged: 0
- Runtime v3: NON ADOPTED
- Pre-M6: NON COMPLETE
- G-UX-11: OPEN

## 23. Instruction ChatGPT

Lire le Review Handoff distant canonique sur origin/sfia/review-handoff :
`sfia-review-handoff/latest-chatgpt-review.md`

Vérifier:
- HANDOFF_COMMIT_SHA
- HANDOFF_BLOB_SHA
- cycle = Cycle 9 QA / validation — REAL Readiness Check
- branche / HEAD / origin/main
- Git Truth locale
- verdict B
- wiring table
- configuration REAL (names/types only)
- réserves / gaps GAP-1…GAP-5
- claims interdits
- preuve ZERO REAL
- preuve ZERO PRODUCT MUTATION

Ne pas valider à partir du seul résumé terminal si le handoff distant est requis et non disponible.
