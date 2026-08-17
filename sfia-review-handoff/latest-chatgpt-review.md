# SFIA Review Pack — FULL

## 1. Timestamp + timezone

- Timestamp: 2026-08-17 09:15:24 CEST
- Timezone: Europe/Paris

## 2. Cycle identity

- Repo: `mcleland147/sfia-workspace`
- Cycle: 8 — Delivery / implémentation — Pre-M6 REAL Product Wiring Amend
- Typologie: INC — amend borné de wiring produit
- Profil: Critical
- CKC: aucun CKC détaillé Cycle 8 Delivery dans les pilotes Git consultés; routing/méthode v2.6 used as operational guidance. CKC was not invented and is not an execution authorization.

## 3. GO Morris consumed and limits

GO consumed:

`GO — CYCLE 8 DELIVERY AMEND / PRE-M6 REAL PRODUCT WIRING / GAP-1 → GAP-5 / ZERO LIVE EXECUTION`

Authorized and used:

- local inspection
- bounded local mutations necessary for GAP-1…5
- deterministic tests
- local typecheck / lint / build / vitest
- FULL review pack
- L3 bounded Review Handoff publish

Not authorized and not done:

- live OpenAI call / token consumption as a cycle objective
- Cursor CLI REAL / NodeCursorProcessRunner live / Cursor agent spawn
- effective REAL environment activation
- project commit / project push / PR / merge / branch deletion
- doctrine / Roadmap / baseline mutation
- DB migration / new architecture / M6 / UAT
- runtime v3 ADOPTED claim

## 4. Git Truth PRE

```
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin_main=0d33478566627a9bf507d5a06323962d349308ee
origin_handoff=6663248ec51fcad3a4a689a7084609a71aea4a4c
staged_count=0
candidate=DIRTY (Pre-M6 Option A already present; expected)
```

No reset / clean / stash / rebase / merge / destructive checkout / staging of project files.

## 5. Git Truth POST (before handoff publish)

```
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin_main=0d33478566627a9bf507d5a06323962d349308ee
origin_handoff=6663248ec51fcad3a4a689a7084609a71aea4a4c
staged_count=0
pre-existing dirty candidate preserved
```

HEAD remains `origin/main`. Project files were not staged. The Pre-M6 Option A dirty candidate remains. Cycle 8 added/modified only the GAP-1…5 wiring files listed below plus `.tmp-sfia-review/**` artifacts.

After L3 publish, `origin/sfia/review-handoff` is expected to move; that is the only remote mutation authorized.

## 6. Remote refs at cycle start

- `origin/main` = `0d33478566627a9bf507d5a06323962d349308ee` (matches expected)
- `origin/sfia/review-handoff` = `6663248ec51fcad3a4a689a7084609a71aea4a4c` (matches expected)
- Canonical handoff path: `sfia-review-handoff/latest-chatgpt-review.md`
- Local branch: `delivery/sfia-studio-pre-m6-ui-option-a`

No `STOP — GIT TRUTH CHANGED`.

## 7. Sources read

Governance / convergence:

- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

Doctrine v3:

- `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
- `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`
- `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md`
- `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`
- `projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md`

Process:

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `prompts/templates/sfia-cycle-execution-template.md`

Review Handoff (factual GAP-1…5 specification):

- `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` at `6663248ec51fcad3a4a689a7084609a71aea4a4c`

Roadmap historical statuses were not mutated. Git current + Morris GO + last qualified handoff prime for this local candidate.

## 8. Convergence qualification

- Capabilities served: V3-F05, V3-F02, V3-F11, V3-F12, V3-F14, V3-F15
- Milestone: PRE-M6 — COMPLETE REAL PRODUCT WIRING BEFORE FINAL DETERMINISTIC QA
- This cycle implements WIRING only. It does not prove REAL. It does not replace Final Cycle 9.

Mandatory maturity formulation (still true):

`M1→M5 FUNCTIONAL BACKBONE VALIDATED UNDER DETERMINISTIC QA, WITH SELECTIVE REAL BOUNDARY PROOFS; FULL REAL PRODUCT LOOP NOT YET PROVEN.`

## 9. Asset classification applied

KEEP:

- Product / Project SQLite, LPS, HumanDecision, DecisionBasis, ExecutionContract, Confirmation, ExecutionAttempt, Evidence, ReviewBundle, History / Recovery
- OpenAIConversationProvider via `resolveConversationProvider()`
- fixture QA / deterministic harness
- already-accepted clean-slate presentation (untouched)

HARVEST / ADAPT:

- StudioCursorRealLaunchGateway / NodeCursorProcessRunner / M4 bounded read-only agent / Gate D / RealExecutionLaunchPort — reused via existing ports; not duplicated; live classes not instantiated in product composition this cycle

COMPLETE:

- sibling M3 bounded read-only profile
- confirm/execute fixture vs REAL routing
- Product SQLite optional `realBoundary`
- post-Evidence Nora analysis
- Evidence provenance DTO from Attempt

FREEZE / RETIRE LATER:

- legacy presentation (untouched)

Forbidden and not done: new engine, new store, second persistence, parallel runtime, concurrent orchestrator, new decision system, new contract model, new agent framework.

## 10. Exact files touched BY THIS CYCLE

Created:

- `projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts`

Modified versus the pre-cycle snapshot (not versus HEAD):

- `projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedFixtureSafeContract.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/index.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/types.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

Inspected and left byte-identical:

- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/constants.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/fixtureSafeM3ResolutionProfile.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts`

Cycle artifacts (not product wiring):

- `.tmp-sfia-review/chatgpt-review.md`
- `.tmp-sfia-review/pre-m6-real-wiring-amend/git-truth-pre.txt`
- `.tmp-sfia-review/pre-m6-real-wiring-amend/git-truth-post.txt`
- `.tmp-sfia-review/pre-m6-real-wiring-amend/cycle-specific.diff`
- `.tmp-sfia-review/pre-m6-real-wiring-amend/pre-cycle/inventory.json`
- `.tmp-sfia-review/pre-m6-real-wiring-amend/pre-cycle/files/** (pre-cycle snapshots of inspected production/test files)`

No CSS. No layout. No New Project UI. No Figma. No doctrine/Roadmap. No migrations. No package.json. No M4 infra core files (`studioCursorRealLaunchGateway.ts`, `nodeCursorProcessRunner.ts`, `m4BoundedReadOnlyCursorAgent.ts`, `openaiProvider.ts`).

## 11. Pre-existing dirty candidate files NOT touched by this cycle

Tracked dirty files present before this cycle and not modified by the Cycle 8 delta:

- `projects/sfia-studio/app/__tests__/increment-a.test.tsx`
- `projects/sfia-studio/app/__tests__/increment-b.test.tsx`
- `projects/sfia-studio/app/__tests__/navigation.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`
- `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`
- `projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx`
- `projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx`
- `projects/sfia-studio/app/app/globals.css`
- `projects/sfia-studio/app/app/studio/projects/[id]/page.tsx`
- `projects/sfia-studio/app/app/studio/projects/new/page.tsx`
- `projects/sfia-studio/app/components/shell/StudioShell.tsx`
- `projects/sfia-studio/app/components/shell/UtilityRail.tsx`
- `projects/sfia-studio/app/components/shell/utility-rail.module.css`
- `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`
- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts`
- `projects/sfia-studio/app/features/project-assistant/project-assistant.module.css`
- `projects/sfia-studio/app/features/project-assistant/types.ts`
- `projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx`
- `projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx`
- `projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx`
- `projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css`
- `projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css`
- `projects/sfia-studio/app/lib/navigation.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts`
- `projects/sfia-studio/app/lib/oa/project/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/project/index.ts`
- `projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts`
- `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts`
- `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts`
- `projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts`
- `projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts`
- `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts`
- `projects/sfia-studio/app/styles/shell.module.css`
- `projects/sfia-studio/app/styles/tokens.css`

Untracked Pre-M6 files present before this cycle and not created/edited by Cycle 8:

- `projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-test-01.e2eQaControl.test.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/fixtureSafeM3ResolutionProfile.ts`
- `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl.ts`
- plus the remainder of the Pre-M6 Option A dirty candidate outside project-assistant/f3 wiring (CSS, shell, New Project UI, vertical-slice UI, doctrine/roadmap untouched)

The working tree also contains a large `.tmp-sfia-review/**` diagnostic corpus predating this cycle. It was not used as product code.

## 12. GAP-1 — M3 bounded read-only profile

Current (pre-cycle): successor M3 product path used only `fixtureSafeM3ResolutionProfile()`.

Implementation:

- Added sibling profile `boundedReadOnlyM3ResolutionProfile()` harvested from `createM4BoundedReadOnlyCursorAgentDescriptor`.
- Exact values: capability `cap:cursor.read_only`; action `cursor.read_only.inspect`; target `workspace.isolated.read`; executionMode `cursor_cli_real`; trustLevel `bounded`; scope `studio.m4.real_off` (historical name preserved; not “corrected”).
- Server-side selector `selectProductM3ResolutionProfile()`: fixture default unless `isStudioCursorRealEnabled()` or server/test-only `preferBoundedReadOnlyProfile`.
- Client `mode` / `adapterRef` / `agentId` / `command` / `real` remain ignored.
- Fixture profile retained as OFF default.

Proof: T1 + T2 in `preM6.realProductWiringAmend.test.ts`.

Status: **CLOSED**

Reserve: scope remains `studio.m4.real_off`. Semantic rename is out of scope.

## 13. GAP-2 — confirm/execute governed REAL branch

Current (pre-cycle): `confirmAndExecuteResolvedM3` refused any non-fixture adapter and forced `externalEffects=false`.

Implementation:

- Durable successor identity selects fixture vs bounded-read-only via `authorizedM3ResolutionKind`.
- Fixture → existing `executeConfirmedFixtureSafeContract`.
- Bounded RO → new `executeConfirmedBoundedReadOnlyContract`: Confirmation → Select M4 agent → Grant Gate D → StartExecution. No silent REAL→fixture fallback.
- Fail-closed: missing `realBoundary` → `REAL_BOUNDARY_REQUIRED`; missing `grantRealExecutionGate` → `GATE_D_REQUIRED`; capability/action/target/scope mismatch rejected; client adapter/command ignored.
- No Attempt before Confirmation. No direct spawn from project-assistant.
- REAL successor carries `inputs.baseHeadSha` because existing StartExecution requires a 40-hex pin. Tests inject a fixed SHA. This cycle does not live-pin an isolated workspace HEAD.

Proof: T3, T4, T5, T6, T11.

Status: **CLOSED**

Reserve: production live HEAD pin for a future governed REAL run remains a later GO concern, not a silent fixture fallback.

## 14. GAP-3 — Product SQLite / OA composition optional realBoundary

Current (pre-cycle): `wireOaStack` did not inject `realBoundary`; SQLite execution-attempt factory did not accept it; registry contained only the fixture agent.

Implementation:

- `createSqliteExecutionAttemptServices` accepts optional `realBoundary` (same shape as in-memory factory) and wires StartExecution launchPort/journal + GrantRealExecutionGate. Default undefined/OFF.
- `RuntimeApplicationServiceOptions.realBoundary?` passed through `wireOaStack`.
- M4 bounded-read-only descriptor registered only when a boundary is injected or `SFIA_STUDIO_CURSOR_REAL=1`.
- This cycle does **not** instantiate live `StudioCursorRealLaunchGateway` / `NodeCursorProcessRunner` in product composition. Tests inject `TestOnlyRealExecutionLaunchPort` + `MemoryLaunchSafetyJournal`.
- OFF composition continues without Cursor REAL; instantiating the product with REAL OFF does not launch a process or consume Gate D.

Proof: T1 (no M4, no boundary) + T5 (fake port once, zero real runner).

Status: **CLOSED**

Reserve: a later GO must inject the existing live gateway/runner if and when a governed REAL product loop is authorized. Wiring is additive and optional.

## 15. GAP-4 — Evidence / ReviewBundle → Nora/OpenAI → Recommendation

Current (pre-cycle): `ingestEvidenceAndRecommend` called domain RecommendNextGate and did not call `resolveConversationProvider()`.

Implementation:

- After durable Evidence + ReviewBundle, `postEvidenceNoraAnalysis` calls `resolveConversationProvider().complete()` only. OpenAI is never instantiated in the feature.
- Bounded factual context: project, contract/attempt, status, Evidence, ReviewBundle, technical result ref, reserves/errors. No secrets. No raw internal reasoning. No client command.
- Result is a non-authoritative Recommendation. No HumanDecision. No GO. No new ExecutionContract.
- LPS append uses existing `context` field with sentinels `[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]` / `[[SFIA_POST_EVIDENCE_NORA_UNAVAILABLE]]`. Rehydrate reads those notes. No new store. No migration.
- Provider failure keeps Evidence/RB; `analysisStatus=unavailable`; no silent fake product fallback.

Proof: T7, T8, T12. Tests use FakeConversationProvider / test override. ZERO network OpenAI.

Status: **CLOSED**

## 16. GAP-5 — Evidence provenance / DTO

Current (pre-cycle): product payload forced FIXTURE labels/ids even if a REAL Attempt existed.

Implementation:

- `deriveAttemptProvenance` reads Attempt + selected agent. It never reads `SFIA_STUDIO_CURSOR_REAL`.
- Fixture: `ev:f3-fixture:…` / `rb:f3-fixture:…`, mode `FIXTURE`, `realProcessInvoked=false`.
- REAL agent (`cursor_cli_real` + `adp:m4-cursor-cli-real`): `ev:m4-bounded-ro:…`, mode `CURSOR_CLI_REAL`.
- `F3AttemptDto` now exposes `adapterRef`, `executionMode`, `realProcessInvoked`; `externalEffects` / `realExecution` are booleans derived from the Attempt, not from an env flag.

Proof: T6/T9 + T10 (env flag forced `"0"` while Attempt metadata is REAL).

Status: **CLOSED**

## 17. Tests added / modified

Added:

- `projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts`

Coverage:

- T1 DEFAULT OFF
- T2 REAL PROFILE STATIC WIRING
- T3 GATE D REQUIRED
- T4 REAL BOUNDARY REQUIRED
- T5 TEST REAL LAUNCH ADAPTER
- T6 FIXTURE REGRESSION + T9 PROVENANCE FIXTURE
- T7 POST-EVIDENCE NORA
- T8 PROVIDER FAILURE
- T10 PROVENANCE REAL SIMULATED
- T11 HOSTILE CLIENT
- T12 PERSISTENCE / REHYDRATE

Related regressions re-run and passing under `NODE_ENV=test`:

- `qa-pre-m6-01.finalHardening.test.ts`
- `qa-pre-m6-01.postGoDurableM3Path.test.ts`
- `gux15.resolveM3ExecutionContract.test.ts`
- `f3.fixtureVerticalSlice.test.ts`
- `m5C1C2DisclosureAndRehydrateAction.test.ts`

No Playwright REAL campaign. No Final Cycle 9.

## 18. Commands executed + results

Parent shell had `NODE_ENV=development` and `OPENAI_API_KEY` set. Cycle commands forced:

`NODE_ENV=test SFIA_STUDIO_CURSOR_REAL= OPS1_CURSOR_REAL= OPS1_CONVERSATION_PROVIDER=fake OPENAI_API_KEY=`

| Command | Result |
| --- | --- |
| Targeted T1–T12 (`preM6.realProductWiringAmend.test.ts`) | PASS — 11 tests |
| Related regressions listed above | PASS — 56 tests across 6 files |
| `npx vitest run` (full deterministic suite) | PASS — 190 files passed, 13 skipped; 1796 tests passed, 131 skipped (Postgres integration skipped: no `DATABASE_URL`) |
| `npx tsc --noEmit` / `npm run typecheck` | PASS |
| `npm run lint` | PASS — no ESLint warnings or errors |
| `npm run build` | PASS — Next.js 15.5.20 compiled |

First targeted run accidentally used the inherited `NODE_ENV=development` path and wrote C8 test projects into the local canonical Product SQLite. Subsequent runs used `NODE_ENV=test` and/or explicit temp `productDbPath`. See reserve.

Playwright / Final Cycle 9: not launched.

## 19. ZERO REAL proof (this cycle only)

Negative proof for **this cycle's behavior**, not global OpenAI account billing:

- OpenAI live calls by this cycle: **0** (provider resolved through existing fake/test override; `OPENAI_API_KEY` emptied for test/lint/build commands; `OPS1_CONVERSATION_PROVIDER=fake`)
- OpenAI tokens consumed by this cycle: **0** (no live complete() against OpenAI)
- StudioCursorRealLaunchGateway live: **0** (not constructed in product composition; tests use `TestOnlyRealExecutionLaunchPort`)
- NodeCursorProcessRunner live: **0** (T5 asserts zero real runner)
- Cursor CLI: **0**
- Real Cursor process: **0**
- Project commit: **0**
- Project push: **0**
- PR: **0**
- Merge: **0**

Canonical Product DB:

- Intended: 0 mutation
- Observed: **accidental local writes** of 11 C8 test projects (`prj:c8-t1-1` … `prj:c8-t12-1`, T9 absent because T6/T9 share one project) into `projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` during the first unisolated targeted-test run while `NODE_ENV=development`
- No cleanup DELETE was performed (would be a second canonical mutation)
- Later tests used temp DBs only
- This is **not** a Cursor REAL or OpenAI live execution

## 20. Reserves

1. M4 scope historically named `studio.m4.real_off` — preserved, not renamed.
2. Accidental local canonical Product SQLite pollution by C8 fixture test projects (see §19). Local-only. Not a REAL proof. Cleanup requires a distinct Morris decision.
3. REAL successor `inputs.baseHeadSha` is required by existing StartExecution. Tests inject a fixed 40-hex SHA. A future governed REAL loop still needs an explicit isolated HEAD pin under a distinct GO.
4. Live `StudioCursorRealLaunchGateway` / `NodeCursorProcessRunner` are reusable existing classes and are **not** auto-constructed by default product composition in this cycle (ZERO REAL). A later GO must inject them if a First REAL loop is authorized.
5. Postgres FinOps integration tests remain skipped without `DATABASE_URL` (pre-existing; not in GAP-1…5).

No STOP opened. No structural divergence requiring Morris requalification for the five gaps.

## 21. Debt created + exit condition

Debt:

- Local canonical sqlite contains leftover C8 test projects
- REAL product composition still requires a future explicit injection of the live gateway under a distinct GO
- `baseHeadSha` production pin not in this cycle
- Post-Evidence Nora persistence uses LPS.context sentinels rather than a new schema (intentional; no migration)

Exit condition for this amend:

- GAP-1…5 CLOSED under deterministic tests
- ZERO live OpenAI / ZERO Cursor REAL process during the cycle
- Ready for **New Final Cycle 9 — Deterministic QA** after ChatGPT review of this pack

Not an exit into M6, UAT, or First REAL product loop.

## 22. Claims allowed / forbidden

Allowed:

- `CYCLE 8 DELIVERY AMEND IMPLEMENTED CANDIDATE`
- `GAP-1…GAP-5 CLOSED UNDER DETERMINISTIC TESTING`
- `ZERO REAL EXECUTED` for OpenAI live / Cursor REAL / project git mutations, with the sqlite pollution reserve above
- `READY FOR NEW FINAL CYCLE 9 DETERMINISTIC QA` after ChatGPT review

Forbidden (not claimed):

- FULL REAL PRODUCT LOOP PROVEN
- REAL PRODUCT VALIDATED
- READY FOR REAL
- READY FOR UAT
- PRE-M6 COMPLETE
- G-UX-11 CLOSED
- M6 AUTHORIZED
- runtime v3 ADOPTED
- OpenAI live proven
- Cursor REAL proven

Governance statuses that remain true:

- Runtime v3 = NON ADOPTED
- Pre-M6 = NON COMPLETE
- G-UX-11 = OPEN
- M6 = NON AUTHORIZED
- UAT = NOT READY
- FULL REAL PRODUCT LOOP = NOT PROVEN

## 23. Verdict

PASS WITH RESERVES —

CYCLE 8 DELIVERY AMEND IMPLEMENTED CANDIDATE

GAP-1…GAP-5 CLOSED UNDER DETERMINISTIC TESTING

RESERVES: historical M4 scope name `studio.m4.real_off`; accidental local canonical Product SQLite C8 test rows; live gateway not auto-instantiated; REAL HEAD pin deferred to a later GO.

ZERO REAL EXECUTED (OpenAI live = 0, Cursor REAL process = 0, project commit/push/PR/merge = 0)

NEW FINAL CYCLE 9 DETERMINISTIC QA IS AUTHORIZABLE AFTER CHATGPT REVIEW OF THIS PACK.

This cycle does not execute Cycle 9. This cycle does not authorize First REAL.

## 24. Next capability — DO NOT EXECUTE

NEXT = NEW FINAL CYCLE 9 — DETERMINISTIC QA

Only after ChatGPT review PASS of this handoff.

After a future Final Cycle 9 PASS, a **distinct** Morris GO is still required before any First REAL PRODUCT LOOP bounded read-only.

## 25. Instruction for ChatGPT

Read `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`.

Verify the complete pack and the cycle-specific PRE-CYCLE → POST-CYCLE diff below.

Do not validate from the terminal summary alone.

Do not treat this wiring as REAL proof.

---

# CYCLE-SPECIFIC DELTA — PRE-CYCLE → POST-CYCLE

This delta is independent of `git diff HEAD`. The working tree was already DIRTY. Baseline = `.tmp-sfia-review/pre-m6-real-wiring-amend/pre-cycle/files`. New files are included in full.

Trailing whitespace inside the embedded patch (if any in sources) is stripped in this pack to satisfy `git diff --check` on the handoff file. Authoritative source files in the working tree are unchanged by that stripping.

```diff
# Cycle 8 Delivery Amend — PRE-CYCLE → POST-CYCLE
--- a/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts	2026-08-15 07:49:02
+++ b/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts	2026-08-17 08:53:33
@@ -19,6 +19,8 @@
     ProjectServices,
     "appendLivingProjectStateVersion" | "getCurrentLivingProjectState"
   >;
+  /** Optional factual Nora analysis note — existing LPS.context field, no schema change. */
+  analysisNote?: string;
 }): Promise<AppendEvidenceOutcomeToLpsResult> {
   const current =
     await input.projectServices.getCurrentLivingProjectState.execute({
@@ -39,13 +41,18 @@
   const reviewBundleIds = [
     ...new Set([...(lps.reviewBundleIds ?? []), input.reviewBundleId]),
   ];
+  const analysisNote = input.analysisNote?.trim();
+  const nextContext =
+    analysisNote && analysisNote.length > 0
+      ? [lps.context, analysisNote].filter(Boolean).join("\n\n")
+      : lps.context;

   const appended =
     await input.projectServices.appendLivingProjectStateVersion.execute({
       projectId: input.projectId,
       expectedVersion: lps.version,
       objective: lps.objective,
-      context: lps.context,
+      context: nextContext,
       scope: lps.scope,
       // Automatic factual write-back — system actor, not Morris demo authority.
       createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
--- a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts	2026-08-16 21:11:26
+++ b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts	2026-08-17 08:56:49
@@ -23,7 +23,9 @@
 import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
 import { F3_ADAPTER_ID } from "./constants";
+import { executeConfirmedBoundedReadOnlyContract } from "./executeConfirmedBoundedReadOnlyContract";
 import { executeConfirmedFixtureSafeContract } from "./executeConfirmedFixtureSafeContract";
+import { authorizedM3ResolutionKind } from "./selectProductM3ResolutionProfile";
 import type { F3ExecutePayload } from "./types";
 import { validateResolvedM3ExecutionBoundary } from "./validateResolvedM3ExecutionBoundary";

@@ -63,21 +65,6 @@
   void input.command;
   void input.real;

-  if (input.deps.fixtureAdapter.adapterId !== F3_ADAPTER_ID) {
-    return {
-      ok: false,
-      code: "ADAPTER_IDENTITY_MISMATCH",
-      message: "Adapter F3 identity mismatch — REAL/NoOp interdit.",
-    };
-  }
-  if (input.deps.fixtureAdapter.externalEffects !== false) {
-    return {
-      ok: false,
-      code: "EXTERNAL_EFFECTS_FORBIDDEN",
-      message: "externalEffects doit rester false (FIXTURE only).",
-    };
-  }
-
   const boundary = await validateResolvedM3ExecutionBoundary({
     projectId: input.projectId,
     decisionId: input.decisionId,
@@ -132,6 +119,66 @@
   }

   const attemptId = `xat:m3:${contract.executionContractId.replace(/^xct:/, "")}`;
+  const kind = authorizedM3ResolutionKind(contract);
+
+  if (kind === "bounded_read_only") {
+    return executeConfirmedBoundedReadOnlyContract({
+      projectId: input.projectId,
+      decisionId: input.decisionId,
+      proposal: null,
+      contract,
+      expectedContractVersion: input.expectedContractVersion,
+      actor: LOCAL_MORRIS_M3_ACTOR,
+      authorityEvidenceId: auth.evidenceId,
+      identities: {
+        confirmationId: `cfm:m3:${contract.executionContractId}:v${contract.version}`,
+        confirmationIdempotencyKey: `idem:m3-cfm:${contract.executionContractId}:v${contract.version}`,
+        confirmationLevel: "N3",
+        attemptId,
+        attemptIdempotencyKey: `idem:m3-att:${contract.executionContractId}`,
+        grantId: `gd:m3:${contract.executionContractId.replace(/^xct:/, "")}`,
+      },
+      extraDisclosures: [
+        "M3 resolved successor — Confirmation was process-local (non durable)",
+        "NO Proposal authority",
+        "REAL branch is server-routed from durable contract; client fields ignored",
+      ],
+      deps: {
+        decisionServices: input.deps.decisionServices,
+        executionContractServices: input.deps.executionContractServices,
+        executionAttemptServices: input.deps.executionAttemptServices,
+        evidenceReviewServices: input.deps.evidenceReviewServices,
+        projectServices: input.deps.projectServices,
+        productDurablePath: input.deps.productDurablePath,
+        nowIso: input.deps.nowIso,
+      },
+    });
+  }
+
+  if (kind !== "fixture") {
+    return {
+      ok: false,
+      code: "M3_SUCCESSOR_GOVERNANCE_MISMATCH",
+      message:
+        "Successor n'est ni fixture-safe ni bounded read-only — refus fail-closed.",
+    };
+  }
+
+  if (input.deps.fixtureAdapter.adapterId !== F3_ADAPTER_ID) {
+    return {
+      ok: false,
+      code: "ADAPTER_IDENTITY_MISMATCH",
+      message: "Adapter F3 identity mismatch — REAL/NoOp interdit.",
+    };
+  }
+  if (input.deps.fixtureAdapter.externalEffects !== false) {
+    return {
+      ok: false,
+      code: "EXTERNAL_EFFECTS_FORBIDDEN",
+      message: "externalEffects doit rester false (FIXTURE only).",
+    };
+  }
+
   return executeConfirmedFixtureSafeContract({
     projectId: input.projectId,
     decisionId: input.decisionId,
--- a/projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts	2026-08-16 21:33:04
+++ b/projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts	2026-08-17 08:58:11
@@ -95,6 +95,9 @@
       status: input.attempt.status,
       selectedAgentRef: input.attempt.selectedAgentRef,
       adapterId: F3_ADAPTER_ID,
+      adapterRef: F3_ADAPTER_ID,
+      executionMode: "adapter_sync_fixture",
+      realProcessInvoked: false,
       externalEffects: false,
       resultRef: input.attempt.resultRef ?? null,
       launchCount: input.launchCount,
--- a/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedFixtureSafeContract.ts	2026-08-16 20:13:49
+++ b/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedFixtureSafeContract.ts	2026-08-17 08:55:30
@@ -28,9 +28,9 @@
   F3_AGENT_ID,
   F3_CONFIRM_ACTION_REF,
   F3_LABELS,
-  F3_MODE,
   resolveF3EphemeralNotice,
 } from "./constants";
+import { deriveAttemptProvenance } from "./deriveAttemptProvenance";
 import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
 import type { F3ExecutePayload } from "./types";

@@ -78,6 +78,8 @@
     selectedAgentRef: string;
     resultRef?: string;
     selectionStrategy?: string;
+    launchedAt?: string;
+    irreversibleEffectsPossible?: boolean;
   };
   launchCount: number;
   reusedExistingAttempt: boolean;
@@ -88,13 +90,24 @@
   | { ok: true; payload: F3ExecutePayload }
   | { ok: false; code: string; message: string }
 > {
+  const agent = input.deps.executionAttemptServices.registry.getAgent(
+    input.attempt.selectedAgentRef,
+  );
+  const provenance = deriveAttemptProvenance({
+    attempt: input.attempt,
+    agent,
+  });
+
   const ingested = await ingestEvidenceAndRecommend({
     projectId: input.projectId,
     attemptId: input.attempt.attemptId,
     executionContractId: input.contract.executionContractId,
+    provenance,
     deps: {
       evidenceReviewServices: input.deps.evidenceReviewServices,
       projectServices: input.deps.projectServices,
+      executionAttemptServices: input.deps.executionAttemptServices,
+      executionContractServices: input.deps.executionContractServices,
     },
   });
   if (!ingested.ok) {
@@ -110,7 +123,7 @@
     ok: true,
     payload: {
       turnKind: "f3_execute",
-      mode: F3_MODE,
+      mode: provenance.mode,
       proposal: input.proposal,
       decisionId: input.decisionId,
       contract: {
@@ -121,27 +134,30 @@
         target: input.contract.target,
         scope: input.contract.scope,
         requiredAuthority: input.contract.requiredAuthority,
-        mode: F3_MODE,
+        mode: provenance.mode,
         constraints: [...input.contract.constraints],
       },
       attempt: {
         attemptId: input.attempt.attemptId,
         status: input.attempt.status,
         selectedAgentRef: input.attempt.selectedAgentRef,
-        adapterId: F3_ADAPTER_ID,
-        externalEffects: false,
+        adapterId: provenance.adapterRef,
+        adapterRef: provenance.adapterRef,
+        executionMode: provenance.executionMode,
+        realProcessInvoked: provenance.realProcessInvoked,
+        externalEffects: provenance.externalEffects,
         resultRef: input.attempt.resultRef ?? null,
         launchCount: input.launchCount,
         selectionStrategy:
           input.attempt.selectionStrategy ?? "capabilities_deterministic",
-        mode: F3_MODE,
+        mode: provenance.mode,
       },
       evidence: ingested.evidence,
       reviewBundle: ingested.reviewBundle,
       recommendation: ingested.recommendation,
       reusedExistingAttempt: input.reusedExistingAttempt,
       executionPerformed: true,
-      realExecution: false,
+      realExecution: provenance.realExecution,
       gitWritePerformed: false,
       labels: {
         fixtureNoReal: F3_LABELS.fixtureNoReal,
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts	2026-08-16 20:14:25
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts	2026-08-17 08:58:11
@@ -36,6 +36,16 @@
   fixtureSafeM3ResolutionProfile,
   FIXTURE_SAFE_M3_SUPERSESSION_REASON,
 } from "./fixtureSafeM3ResolutionProfile";
+export {
+  boundedReadOnlyM3ResolutionProfile,
+  BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
+} from "./boundedReadOnlyM3ResolutionProfile";
+export {
+  selectProductM3ResolutionProfile,
+  authorizedM3ResolutionKind,
+} from "./selectProductM3ResolutionProfile";
+export { deriveAttemptProvenance, F3_REAL_MODE } from "./deriveAttemptProvenance";
+export { executeConfirmedBoundedReadOnlyContract } from "./executeConfirmedBoundedReadOnlyContract";
 export { prepareAndResolveM3ProductPath } from "./prepareAndResolveM3ProductPath";
 export type {
   F3M3ResolvedPayload,
--- a/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts	2026-08-15 07:19:21
+++ b/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts	2026-08-17 08:54:19
@@ -1,18 +1,29 @@
 /**
- * IngestExecutionAttemptEvidence → CreateReviewBundle → RecommendNextGate.
+ * IngestExecutionAttemptEvidence → CreateReviewBundle → RecommendNextGate
+ * → bounded Nora/provider post-Evidence analysis (GAP-4).
  * Recommendation-only; HARD refs passed through; no auto-launch.
  * M5-B W1: when projectServices present, append factual LPS evidence/RB ids.
  */

+import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
+import type { ExecutionAttemptServices } from "@/lib/oa/execution-attempt";
 import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
 import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
 import { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";
 import {
+  deriveAttemptProvenance,
+  type DerivedAttemptProvenance,
+} from "./deriveAttemptProvenance";
+import {
   F3_LABELS,
   F3_MODE,
   F3_OPEN_HARD_RESERVATION_REFS,
 } from "./constants";
+import {
+  analyzePostEvidenceWithProvider,
+  formatPostEvidenceAnalysisForLps,
+} from "./postEvidenceNoraAnalysis";
 import type {
   F3EvidenceDto,
   F3RecommendationDto,
@@ -26,6 +37,14 @@
     ProjectServices,
     "appendLivingProjectStateVersion" | "getCurrentLivingProjectState"
   >;
+  executionAttemptServices?: Pick<
+    ExecutionAttemptServices,
+    "getExecutionAttempt" | "registry"
+  >;
+  executionContractServices?: Pick<
+    ExecutionContractServices,
+    "getExecutionContract"
+  >;
 };

 export type IngestRecommendResult =
@@ -35,16 +54,65 @@
       reviewBundle: F3ReviewBundleDto;
       recommendation: F3RecommendationDto;
       lpsVersion?: number;
+      provenance: DerivedAttemptProvenance;
     }
   | { ok: false; code: string; message: string };

+async function resolveProvenance(input: {
+  attemptId: string;
+  deps: IngestRecommendDeps;
+  provenance?: DerivedAttemptProvenance;
+}): Promise<DerivedAttemptProvenance> {
+  if (input.provenance) return input.provenance;
+  const attemptServices = input.deps.executionAttemptServices;
+  if (!attemptServices) {
+    const segment = input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
+    return {
+      mode: F3_MODE,
+      adapterRef: "adp:f3-test-fixture",
+      executionMode: "adapter_sync_fixture",
+      realProcessInvoked: false,
+      realExecution: false,
+      externalEffects: false,
+      evidenceId: `ev:f3-fixture:${segment}`,
+      reviewBundleId: `rb:f3-fixture:${segment}`,
+    };
+  }
+  const loaded = await attemptServices.getExecutionAttempt.execute({
+    attemptId: input.attemptId,
+  });
+  if (!loaded.ok) {
+    const segment = input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
+    return {
+      mode: F3_MODE,
+      adapterRef: "adp:f3-test-fixture",
+      executionMode: "adapter_sync_fixture",
+      realProcessInvoked: false,
+      realExecution: false,
+      externalEffects: false,
+      evidenceId: `ev:f3-fixture:${segment}`,
+      reviewBundleId: `rb:f3-fixture:${segment}`,
+    };
+  }
+  const agent = attemptServices.registry.getAgent(
+    loaded.attempt.selectedAgentRef,
+  );
+  return deriveAttemptProvenance({ attempt: loaded.attempt, agent });
+}
+
 export async function ingestEvidenceAndRecommend(input: {
   projectId: string;
   attemptId: string;
   executionContractId: string;
   deps: IngestRecommendDeps;
+  provenance?: DerivedAttemptProvenance;
 }): Promise<IngestRecommendResult> {
-  const evidenceId = `ev:f3-fixture:${input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`;
+  const provenance = await resolveProvenance({
+    attemptId: input.attemptId,
+    deps: input.deps,
+    provenance: input.provenance,
+  });
+  const evidenceId = provenance.evidenceId;
   const ingested =
     await input.deps.evidenceReviewServices.ingestExecutionAttemptEvidence.execute(
       {
@@ -69,7 +137,7 @@
     };
   }

-  const reviewBundleId = `rb:f3-fixture:${input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`;
+  const reviewBundleId = provenance.reviewBundleId;
   const bundle =
     await input.deps.evidenceReviewServices.createReviewBundle.execute({
       reviewBundleId,
@@ -94,24 +162,6 @@
     };
   }

-  let lpsVersion: number | undefined;
-  if (input.deps.projectServices) {
-    const linked = await appendEvidenceOutcomeToLps({
-      projectId: input.projectId,
-      evidenceId: ingested.evidence.evidenceId,
-      reviewBundleId: bundle.reviewBundle.reviewBundleId,
-      projectServices: input.deps.projectServices,
-    });
-    if (!linked.ok) {
-      return {
-        ok: false,
-        code: linked.code,
-        message: linked.message,
-      };
-    }
-    lpsVersion = linked.lpsVersion;
-  }
-
   const recommended =
     await input.deps.evidenceReviewServices.recommendNextGate.execute({
       projectId: input.projectId,
@@ -142,15 +192,77 @@
     };
   }

+  let contractStatus = "unknown";
+  let contractAction = "unknown";
+  let attemptStatus = "unknown";
+  let selectedAgentRef = "unknown";
+  if (input.deps.executionContractServices) {
+    const loaded =
+      await input.deps.executionContractServices.getExecutionContract.execute({
+        executionContractId: input.executionContractId,
+      });
+    if (loaded.ok) {
+      contractStatus = loaded.contract.status;
+      contractAction = loaded.contract.action;
+    }
+  }
+  if (input.deps.executionAttemptServices) {
+    const loaded =
+      await input.deps.executionAttemptServices.getExecutionAttempt.execute({
+        attemptId: input.attemptId,
+      });
+    if (loaded.ok) {
+      attemptStatus = loaded.attempt.status;
+      selectedAgentRef = loaded.attempt.selectedAgentRef;
+    }
+  }
+
+  const analysis = await analyzePostEvidenceWithProvider({
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    executionContractStatus: contractStatus,
+    executionContractAction: contractAction,
+    attemptId: input.attemptId,
+    attemptStatus,
+    selectedAgentRef,
+    adapterRef: provenance.adapterRef,
+    executionMode: provenance.executionMode,
+    realProcessInvoked: provenance.realProcessInvoked,
+    evidenceId: ingested.evidence.evidenceId,
+    reviewBundleId: bundle.reviewBundle.reviewBundleId,
+    technicalResultRef: ingested.evidence.technicalResultRef ?? null,
+    reservations: [
+      ...F3_OPEN_HARD_RESERVATION_REFS,
+      "HARD remain OPEN — BLOCKS REAL",
+    ],
+  });
+
+  const analysisNote = formatPostEvidenceAnalysisForLps(
+    analysis.ok
+      ? { analysisText: analysis.text }
+      : { unavailableReason: analysis.message },
+  );
+
+  let lpsVersion: number | undefined;
+  if (input.deps.projectServices) {
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId: input.projectId,
+      evidenceId: ingested.evidence.evidenceId,
+      reviewBundleId: bundle.reviewBundle.reviewBundleId,
+      projectServices: input.deps.projectServices,
+      analysisNote,
+    });
+    if (!linked.ok) {
+      return {
+        ok: false,
+        code: linked.code,
+        message: linked.message,
+      };
+    }
+    lpsVersion = linked.lpsVersion;
+  }
+
   const coordination = recommended.coordination;
-  /**
-   * T-A6 RecommendNextGate only materializes openHardReservationRefs as
-   * hard_reservation_open blockers when a MaturityAssessment is bound.
-   * Creating maturity requires claim/freeze chain beyond this fixture slice
-   * without foundation changes — so HARD visibility is guaranteed on the
-   * product DTO (openHardReservationRefs + hardBlockers) even when
-   * coordination.blockers omit them.
-   */
   const openHard = [...F3_OPEN_HARD_RESERVATION_REFS];
   const hardBlockers = [
     ...coordination.blockers
@@ -167,14 +279,14 @@
       sourceKind: ingested.evidence.sourceKind,
       technicalResultRef: ingested.evidence.technicalResultRef ?? null,
       verified: false,
-      mode: F3_MODE,
+      mode: provenance.mode,
     },
     reviewBundle: {
       reviewBundleId: bundle.reviewBundle.reviewBundleId,
       status: bundle.reviewBundle.status,
       version: bundle.reviewBundle.version,
       evidenceRefs: [...bundle.reviewBundle.evidenceRefs],
-      mode: F3_MODE,
+      mode: provenance.mode,
     },
     recommendation: {
       kind: "recommendation",
@@ -188,8 +300,15 @@
       nextGateCode: coordination.nextGate?.gateCode ?? null,
       nextActionCode: coordination.nextAction?.actionCode ?? null,
       recommendationLabel: F3_LABELS.recommendationNotDecision,
-      mode: F3_MODE,
+      mode: provenance.mode,
+      analysisStatus: analysis.ok ? "available" : "unavailable",
+      analysisText: analysis.ok ? analysis.text : null,
+      analysisProviderId: analysis.ok
+        ? analysis.providerId
+        : analysis.providerId,
+      analysisUnavailableReason: analysis.ok ? null : analysis.message,
     },
     lpsVersion,
+    provenance,
   };
 }
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts	2026-08-16 19:54:56
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts	2026-08-17 09:03:52
@@ -19,16 +19,26 @@
   type ResolveM3Deps,
   type ResolveM3Success,
 } from "./resolveM3ExecutionContract";
-import {
-  FIXTURE_SAFE_M3_SUPERSESSION_REASON,
-  fixtureSafeM3ResolutionProfile,
-} from "./fixtureSafeM3ResolutionProfile";
+import { selectProductM3ResolutionProfile } from "./selectProductM3ResolutionProfile";

-export type PrepareAndResolveM3Deps = PrepareM3Deps & ResolveM3Deps;
+export type PrepareAndResolveM3Deps = PrepareM3Deps &
+  ResolveM3Deps & {
+    /**
+     * Server/test only. Never accepted from the client.
+     * Selects the bounded read-only M3 profile without requiring the live REAL flag.
+     */
+    preferBoundedReadOnlyProfile?: boolean;
+    /**
+     * Server/test only contract-bound workspace pin for the REAL successor.
+     * Never accepted from the client. Required by existing StartExecution
+     * extractContractBaseHeadSha before any launchPort call.
+     */
+    boundedReadOnlyBaseHeadSha?: string;
+  };

 export type F3M3ResolvedPayload = {
   turnKind: "f3_m3_resolved";
-  mode: "M3_RESOLVED_FIXTURE";
+  mode: "M3_RESOLVED_FIXTURE" | "M3_RESOLVED_BOUNDED_READ_ONLY";
   decisionId: string;
   projectId: string;
   prepare: F3M3PreparePayload;
@@ -73,24 +83,43 @@
     return prepared;
   }

+  const selected = selectProductM3ResolutionProfile({
+    preferBoundedReadOnlyProfile: input.deps.preferBoundedReadOnlyProfile === true,
+  });
+  const boundedSha = input.deps.boundedReadOnlyBaseHeadSha?.trim() ?? "";
+  const resolution =
+    selected.kind === "bounded_read_only" &&
+    /^[0-9a-f]{40}$/i.test(boundedSha)
+      ? {
+          ...selected.profile,
+          inputs: {
+            ...(selected.profile.inputs ?? {}),
+            baseHeadSha: boundedSha.toLowerCase(),
+          },
+        }
+      : selected.profile;
+
   const resolved = await resolveM3ExecutionContract({
     projectId: input.projectId,
     decisionId: input.decisionId,
     originalExecutionContractId: prepared.payload.contract.executionContractId,
     expectedOriginalVersion: prepared.payload.contract.version,
-    resolution: fixtureSafeM3ResolutionProfile(),
-    supersessionReason: FIXTURE_SAFE_M3_SUPERSESSION_REASON,
+    resolution,
+    supersessionReason: selected.supersessionReason,
     deps: input.deps,
   });
   if (!resolved.ok) {
     return resolved;
   }

+  const fixtureSelected = selected.kind === "fixture";
   return {
     ok: true,
     payload: {
       turnKind: "f3_m3_resolved",
-      mode: "M3_RESOLVED_FIXTURE",
+      mode: fixtureSelected
+        ? "M3_RESOLVED_FIXTURE"
+        : "M3_RESOLVED_BOUNDED_READ_ONLY",
       decisionId: input.decisionId,
       projectId: input.projectId,
       prepare: prepared.payload,
@@ -103,10 +132,13 @@
       realExecution: false,
       disclosures: [
         "M3 durable PREPARE from HumanDecision + DecisionBasis",
-        "G-UX-15 resolveM3ExecutionContract — fixture-safe ZERO REAL profile",
+        fixtureSelected
+          ? "G-UX-15 resolveM3ExecutionContract — fixture-safe ZERO REAL profile"
+          : "G-UX-15 resolveM3ExecutionContract — bounded read-only M4 profile (server-selected; ZERO LIVE in this cycle)",
         "NO Proposal authority",
         "Confirmation required before StartExecution",
-        "NO CURSOR REAL",
+        fixtureSelected ? "NO CURSOR REAL" : "CURSOR REAL NOT EXECUTED AT PREPARE",
+        "Profile is server-side; client adapter/command/real fields are ignored",
         ...resolved.disclosures,
       ],
     },
--- a/projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts	2026-08-15 07:49:26
+++ b/projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts	2026-08-17 08:54:48
@@ -11,9 +11,11 @@
   F3_MODE,
   F3_OPEN_HARD_RESERVATION_REFS,
 } from "./constants";
+import { extractPostEvidenceAnalysisFromLpsContext } from "./postEvidenceNoraAnalysis";
 import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "./systemFactualWriter";
 import type {
   F3EvidenceDto,
+  F3Mode,
   F3RecommendationDto,
   F3ReviewBundleDto,
 } from "./types";
@@ -59,7 +61,14 @@
   const lps = current.livingProjectState;
   const evidenceIds = [...(lps.evidenceIds ?? [])];
   const reviewBundleIds = [...(lps.reviewBundleIds ?? [])];
+  const postEvidence = extractPostEvidenceAnalysisFromLpsContext(lps.context);

+  function modeFromEvidenceId(evidenceId: string): F3Mode {
+    return evidenceId.startsWith("ev:m4-bounded-ro:")
+      ? "CURSOR_CLI_REAL"
+      : F3_MODE;
+  }
+
   if (evidenceIds.length === 0 && reviewBundleIds.length === 0) {
     return {
       ok: false,
@@ -108,7 +117,7 @@
       sourceKind: evidence.sourceKind,
       technicalResultRef: evidence.technicalResultRef ?? null,
       verified: false,
-      mode: F3_MODE,
+      mode: modeFromEvidenceId(evidence.evidenceId),
     });
   }

@@ -147,7 +156,9 @@
       status: bundle.status,
       version: bundle.version,
       evidenceRefs: [...bundle.evidenceRefs],
-      mode: F3_MODE,
+      mode: bundle.reviewBundleId.startsWith("rb:m4-bounded-ro:")
+        ? "CURSOR_CLI_REAL"
+        : F3_MODE,
     });
   }

@@ -236,7 +247,15 @@
       nextGateCode: coordination.nextGate?.gateCode ?? null,
       nextActionCode: coordination.nextAction?.actionCode ?? null,
       recommendationLabel: F3_LABELS.recommendationNotDecision,
-      mode: F3_MODE,
+      mode: evidenceDtos[0]?.mode ?? F3_MODE,
+      analysisStatus: postEvidence.analysisText
+        ? "available"
+        : postEvidence.analysisUnavailableReason
+          ? "unavailable"
+          : "not_attempted",
+      analysisText: postEvidence.analysisText,
+      analysisProviderId: null,
+      analysisUnavailableReason: postEvidence.analysisUnavailableReason,
     },
   };
 }
--- a/projects/sfia-studio/app/features/project-assistant/f3/types.ts	2026-08-16 19:55:03
+++ b/projects/sfia-studio/app/features/project-assistant/f3/types.ts	2026-08-17 08:52:47
@@ -6,7 +6,7 @@
 import type { ProposalDto } from "../f2/types";
 import type { F3_MODE } from "./constants";

-export type F3Mode = typeof F3_MODE;
+export type F3Mode = typeof F3_MODE | "CURSOR_CLI_REAL";

 export type F3ContractDto = {
   executionContractId: string;
@@ -25,7 +25,10 @@
   status: string;
   selectedAgentRef: string;
   adapterId: string;
-  externalEffects: false;
+  adapterRef: string;
+  executionMode: string;
+  realProcessInvoked: boolean;
+  externalEffects: boolean;
   resultRef: string | null;
   launchCount: number;
   selectionStrategy: string;
@@ -62,6 +65,10 @@
   nextActionCode: string | null;
   recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS";
   mode: F3Mode;
+  analysisStatus?: "available" | "unavailable" | "not_attempted";
+  analysisText?: string | null;
+  analysisProviderId?: string | null;
+  analysisUnavailableReason?: string | null;
 };

 export type F3Labels = {
@@ -101,7 +108,7 @@
   recommendation: F3RecommendationDto;
   reusedExistingAttempt: boolean;
   executionPerformed: true;
-  realExecution: false;
+  realExecution: boolean;
   gitWritePerformed: false;
   labels: F3Labels;
   processLocalNotice: string;
--- a/projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts	2026-08-16 20:14:41
+++ b/projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts	2026-08-17 08:53:17
@@ -23,7 +23,7 @@
   canonicalM3PrepareIdempotencyKey,
   canonicalM3ResolutionIdempotencyKey,
 } from "./resolveM3ExecutionContract";
-import { fixtureSafeM3ResolutionProfile } from "./fixtureSafeM3ResolutionProfile";
+import { authorizedM3ResolutionKind } from "./selectProductM3ResolutionProfile";

 export type ValidateResolvedM3BoundaryDeps = {
   decisionServices: DecisionServices;
@@ -45,13 +45,6 @@
   message: string;
 };

-function sortedEqual(a: readonly string[], b: readonly string[]): boolean {
-  if (a.length !== b.length) return false;
-  const left = [...a].sort();
-  const right = [...b].sort();
-  return left.every((v, i) => v === right[i]);
-}
-
 function decisionRefsExact(
   refs: readonly string[] | undefined,
   decisionId: string,
@@ -244,24 +237,12 @@
     };
   }

-  const profile = fixtureSafeM3ResolutionProfile();
-  if (
-    successor.action !== profile.action ||
-    successor.target !== profile.target ||
-    successor.scope !== (profile.scope ?? successor.scope) ||
-    successor.reversibility !== profile.reversibility ||
-    !sortedEqual(
-      successor.requiredCapabilities,
-      profile.requiredCapabilities,
-    ) ||
-    !sortedEqual(successor.constraints, profile.constraints ?? []) ||
-    !sortedEqual(successor.stopConditions, profile.stopConditions ?? [])
-  ) {
+  if (authorizedM3ResolutionKind(successor) === null) {
     return {
       ok: false,
       code: "M3_SUCCESSOR_GOVERNANCE_MISMATCH",
       message:
-        "Successor durable fields do not match the authorized fixture-safe resolution profile.",
+        "Successor durable fields do not match an authorized M3 resolution profile (fixture-safe or bounded read-only).",
     };
   }

--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts	2026-08-15 07:17:45
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts	2026-08-17 08:57:24
@@ -14,6 +14,7 @@
 import { CheckAttemptAuthorization } from "../../application/checkAttemptAuthorization";
 import { ExecutionContractStatusWriter } from "../../application/executionContractStatusWriter";
 import { GetExecutionAttempt } from "../../application/getExecutionAttempt";
+import { GrantRealExecutionGate } from "../../application/grantRealExecutionGate";
 import { ListExecutionAttempts } from "../../application/listExecutionAttempts";
 import { RecordExecutionFailure } from "../../application/recordExecutionFailure";
 import { RecordExecutionResult } from "../../application/recordExecutionResult";
@@ -33,6 +34,8 @@
 import type { ExecutionAttemptAuditPort } from "../../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../../ports/executionAttemptRepository";
 import type { ExecutionAttemptTechnicalStorePort } from "../../ports/executionAttemptTechnicalStorePort";
+import type { RealExecutionLaunchPort } from "../../ports/realExecutionLaunchPort";
+import type { RealLaunchSafetyJournalPort } from "../../ports/realLaunchSafetyJournalPort";
 import { SqliteExecutionAttemptRepository } from "./sqliteExecutionAttemptRepository";
 import { SqliteExecutionAttemptTechnicalStore } from "./sqliteExecutionAttemptTechnicalStore";

@@ -58,6 +61,14 @@
   audit?: ExecutionAttemptAuditPort;
   policy?: Partial<AttemptPolicy>;
   authorityResolver?: AuthorityResolverPort;
+  /**
+   * Optional M4 REAL boundary (journal + specialized launch port).
+   * Default undefined / OFF. Does NOT enable SFIA_STUDIO_CURSOR_REAL.
+   */
+  realBoundary?: {
+    readonly launchPort: RealExecutionLaunchPort;
+    readonly safetyJournal: RealLaunchSafetyJournalPort;
+  };
 };

 export type SqliteExecutionAttemptServices = {
@@ -79,11 +90,19 @@
   getExecutionAttempt: GetExecutionAttempt;
   listExecutionAttempts: ListExecutionAttempts;
   checkAttemptAuthorization: CheckAttemptAuthorization;
+  grantRealExecutionGate?: GrantRealExecutionGate;
+  grantGateD?: GrantRealExecutionGate;
+  realBoundary?: {
+    readonly launchPort: RealExecutionLaunchPort;
+    readonly safetyJournal: RealLaunchSafetyJournalPort;
+  };
+  launchSafetyJournal?: RealLaunchSafetyJournalPort;
+  realLaunch?: RealExecutionLaunchPort;
 };

 /**
  * Durable ExecutionAttempt services on Product SQLite (M5-A).
- * Does NOT wire realBoundary / Gate D / REAL launch (M4 REAL-OFF unchanged).
+ * realBoundary is optional and OFF by default (GAP-3). No live Cursor spawn.
  */
 export function createSqliteExecutionAttemptServices(
   options: CreateSqliteExecutionAttemptServicesOptions,
@@ -128,6 +147,18 @@
     store,
   );

+  const realBoundary = options.realBoundary;
+  const grantRealExecutionGate = realBoundary
+    ? new GrantRealExecutionGate(
+        attempts,
+        contracts,
+        registry,
+        authority,
+        realBoundary.safetyJournal,
+        clock,
+      )
+    : undefined;
+
   return {
     store,
     attempts,
@@ -150,6 +181,8 @@
       clock,
       audit,
       store,
+      realBoundary?.launchPort,
+      realBoundary?.safetyJournal,
     ),
     cancelExecutionAttempt: new CancelExecutionAttempt(
       attempts,
@@ -210,6 +243,11 @@
       clock,
       audit,
     ),
+    grantRealExecutionGate,
+    grantGateD: grantRealExecutionGate,
+    realBoundary,
+    launchSafetyJournal: realBoundary?.safetyJournal,
+    realLaunch: realBoundary?.launchPort,
   };
 }

--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts	2026-08-16 18:31:43
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts	2026-08-17 08:57:46
@@ -34,7 +34,10 @@
 import {
   createInMemoryExecutionAttemptServices,
   createSqliteExecutionAttemptServices,
+  createM4BoundedReadOnlyCursorAgentDescriptor,
+  isStudioCursorRealEnabled,
   type ExecutionAttemptServices,
+  type RealBoundaryWiring,
   type TestExecutionAdapter,
 } from "@/lib/oa/execution-attempt";
 import {
@@ -89,6 +92,13 @@
    * Production path builds via createLocalVerticalSliceServices.
    */
   readonly facade?: LocalProjectFacade;
+  /**
+   * Optional M4 REAL boundary. Default undefined / OFF.
+   * Tests inject a fake RealExecutionLaunchPort. Production may inject
+   * StudioCursorRealLaunchGateway later under an explicit GO — this cycle
+   * does not instantiate the live gateway.
+   */
+  readonly realBoundary?: RealBoundaryWiring;
 }

 export type RuntimeOaStack = {
@@ -131,6 +141,7 @@
 function wireOaStack(
   projectServices: ProjectServices,
   clock: ClockPort,
+  options?: { realBoundary?: RealBoundaryWiring },
 ): RuntimeOaStack {
   // M2/M3: same Product SQLite store for Project/LPS + Cycle + Decision + Contract.
   const productSqlite =
@@ -182,31 +193,41 @@
       });

   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
-  // M4 REAL-OFF default: do NOT wire realBoundary / SFIA_STUDIO_CURSOR_REAL here.
-  // Opt-in REAL composition is explicit (journal + RealExecutionLaunchPort); no Fake defaults.
-  // M5-A: when Product SQLite is present, Attempt + Evidence/RB are durable;
-  // Claim/Maturity remain Memory; technical journal / Gate D unchanged.
+  // GAP-3: realBoundary is optional and OFF by default. M4 descriptor is
+  // registered only on the governed path (injected boundary or REAL flag).
+  // This composition does not instantiate StudioCursorRealLaunchGateway.
   const fixtureAdapter = createF3TestExecutionAdapter();
   const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
+  const realBoundary = options?.realBoundary;
+  const registerM4 =
+    realBoundary !== undefined || isStudioCursorRealEnabled();
+  const agents = registerM4
+    ? [
+        fixtureAgent,
+        createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
+      ]
+    : [fixtureAgent];
   const executionAttemptServices = productSqlite
     ? createSqliteExecutionAttemptServices({
         decisionServices,
         executionContractServices,
         productStore: productSqlite,
-        agents: [fixtureAgent],
+        agents,
         adapter: fixtureAdapter,
         clock,
         authorityResolver,
         policy: { defaultMaxRetriesBudget: 0 },
+        realBoundary,
       })
     : createInMemoryExecutionAttemptServices({
         decisionServices,
         executionContractServices,
-        agents: [fixtureAgent],
+        agents,
         adapter: fixtureAdapter,
         clock,
         authorityResolver,
         policy: { defaultMaxRetriesBudget: 0 },
+        realBoundary,
       });

   const evidenceReviewServices = productSqlite
@@ -346,7 +367,9 @@
     productDbPath: options.productDbPath,
   });

-  const oa = wireOaStack(services.projectServices, services.clock);
+  const oa = wireOaStack(services.projectServices, services.clock, {
+    realBoundary: options.realBoundary,
+  });
   return new RuntimeApplicationService(
     services.facade,
     services.architecture,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts b/projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts
@@ -0,0 +1,49 @@
+/**
+ * Sibling M3 resolution profile for the future governed REAL bounded
+ * read-only path (GAP-1).
+ *
+ * Values are harvested from the existing M4 descriptor
+ * `createM4BoundedReadOnlyCursorAgentDescriptor` — not invented here.
+ *
+ * RESERVE: scope is historically named `studio.m4.real_off`. This cycle
+ * does not "correct" that name. The existing descriptor is source of truth.
+ *
+ * NOT a new engine. NOT client-injectable. NOT authorized live REAL in this cycle.
+ */
+
+import {
+  M4_BOUNDED_RO_ACTION,
+  M4_BOUNDED_RO_CAPABILITY,
+  M4_BOUNDED_RO_SCOPE,
+  M4_BOUNDED_RO_TARGET,
+} from "@/lib/oa/execution-attempt";
+import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";
+
+export function boundedReadOnlyM3ResolutionProfile(): M3ResolvedExecutionFields {
+  return {
+    action: M4_BOUNDED_RO_ACTION,
+    target: M4_BOUNDED_RO_TARGET,
+    requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
+    reversibility: "reversible",
+    scope: M4_BOUNDED_RO_SCOPE,
+    constraints: [
+      "BOUNDED READ-ONLY",
+      "CURSOR CLI REAL PROFILE",
+      "GATE D REQUIRED",
+      "NO GIT WRITE",
+      "NO GITHUB WRITE",
+      "NO CLIENT COMMAND",
+      "NO WILDCARD",
+    ],
+    stopConditions: [
+      "AUTHORITY_DENIED",
+      "CONTEXT_STALE",
+      "DECISION_NOT_CURRENT",
+      "GATE_D_REQUIRED",
+      "REAL_BOUNDARY_DISABLED",
+    ],
+  };
+}
+
+export const BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON =
+  "PRE-M6 Option A — resolve durable M3 PREPARE via existing G-UX-15 supersession (bounded read-only Cursor REAL profile; ZERO LIVE in this cycle)" as const;
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts b/projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
@@ -0,0 +1,101 @@
+/**
+ * Server-side M3 profile selection (GAP-1 / GAP-2).
+ * Never reads client adapter/command/real fields.
+ */
+
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import { isStudioCursorRealEnabled } from "@/lib/oa/execution-attempt";
+import {
+  BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
+  boundedReadOnlyM3ResolutionProfile,
+} from "./boundedReadOnlyM3ResolutionProfile";
+import {
+  FIXTURE_SAFE_M3_SUPERSESSION_REASON,
+  fixtureSafeM3ResolutionProfile,
+} from "./fixtureSafeM3ResolutionProfile";
+import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";
+
+export type ProductM3ResolutionKind = "fixture" | "bounded_read_only";
+
+export type SelectedProductM3Resolution = {
+  kind: ProductM3ResolutionKind;
+  profile: M3ResolvedExecutionFields;
+  supersessionReason: string;
+};
+
+function sortedEqual(a: readonly string[], b: readonly string[]): boolean {
+  if (a.length !== b.length) return false;
+  const left = [...a].sort();
+  const right = [...b].sort();
+  return left.every((v, i) => v === right[i]);
+}
+
+export function profileMatchesContract(
+  contract: Pick<
+    ExecutionContract,
+    | "action"
+    | "target"
+    | "scope"
+    | "reversibility"
+    | "requiredCapabilities"
+    | "constraints"
+    | "stopConditions"
+  >,
+  profile: M3ResolvedExecutionFields,
+): boolean {
+  return (
+    contract.action === profile.action &&
+    contract.target === profile.target &&
+    contract.scope === (profile.scope ?? contract.scope) &&
+    contract.reversibility === profile.reversibility &&
+    sortedEqual(contract.requiredCapabilities, profile.requiredCapabilities) &&
+    sortedEqual(contract.constraints, profile.constraints ?? []) &&
+    sortedEqual(contract.stopConditions, profile.stopConditions ?? [])
+  );
+}
+
+export function authorizedM3ResolutionKind(
+  contract: Pick<
+    ExecutionContract,
+    | "action"
+    | "target"
+    | "scope"
+    | "reversibility"
+    | "requiredCapabilities"
+    | "constraints"
+    | "stopConditions"
+  >,
+): ProductM3ResolutionKind | null {
+  if (profileMatchesContract(contract, fixtureSafeM3ResolutionProfile())) {
+    return "fixture";
+  }
+  if (profileMatchesContract(contract, boundedReadOnlyM3ResolutionProfile())) {
+    return "bounded_read_only";
+  }
+  return null;
+}
+
+/**
+ * @param preferBoundedReadOnlyProfile Server/test only. Never from the client.
+ * @param env Optional env snapshot for isStudioCursorRealEnabled.
+ */
+export function selectProductM3ResolutionProfile(input?: {
+  preferBoundedReadOnlyProfile?: boolean;
+  env?: NodeJS.ProcessEnv;
+}): SelectedProductM3Resolution {
+  const useBounded =
+    input?.preferBoundedReadOnlyProfile === true ||
+    isStudioCursorRealEnabled(input?.env ?? process.env);
+  if (useBounded) {
+    return {
+      kind: "bounded_read_only",
+      profile: boundedReadOnlyM3ResolutionProfile(),
+      supersessionReason: BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
+    };
+  }
+  return {
+    kind: "fixture",
+    profile: fixtureSafeM3ResolutionProfile(),
+    supersessionReason: FIXTURE_SAFE_M3_SUPERSESSION_REASON,
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts b/projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts
@@ -0,0 +1,86 @@
+/**
+ * GAP-5 — provenance derived from the Attempt / selected agent, never from
+ * SFIA_STUDIO_CURSOR_REAL or any other environment flag.
+ */
+
+import {
+  M4_REAL_GATEWAY_ADAPTER_ID,
+  type AgentDescriptor,
+} from "@/lib/oa/execution-attempt";
+import { F3_ADAPTER_ID, F3_MODE } from "./constants";
+import type { F3Mode } from "./types";
+
+export const F3_REAL_MODE = "CURSOR_CLI_REAL" as const;
+
+export type DerivedAttemptProvenance = {
+  mode: F3Mode;
+  adapterRef: string;
+  executionMode: string;
+  realProcessInvoked: boolean;
+  realExecution: boolean;
+  externalEffects: boolean;
+  evidenceId: string;
+  reviewBundleId: string;
+};
+
+function safeAttemptSegment(attemptId: string): string {
+  return attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
+}
+
+export function isBoundedReadOnlyRealAgent(
+  agent: Pick<AgentDescriptor, "adapterRef" | "executionMode"> | null,
+): boolean {
+  return (
+    agent !== null &&
+    agent.executionMode === "cursor_cli_real" &&
+    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID
+  );
+}
+
+export function deriveAttemptProvenance(input: {
+  attempt: {
+    attemptId: string;
+    selectedAgentRef: string;
+    status: string;
+    resultRef?: string;
+    launchedAt?: string;
+    irreversibleEffectsPossible?: boolean;
+  };
+  agent: Pick<
+    AgentDescriptor,
+    "adapterRef" | "executionMode" | "agentId"
+  > | null;
+}): DerivedAttemptProvenance {
+  const segment = safeAttemptSegment(input.attempt.attemptId);
+  const realAgent = isBoundedReadOnlyRealAgent(input.agent);
+  const realProcessInvoked =
+    realAgent &&
+    (input.attempt.irreversibleEffectsPossible === true ||
+      input.attempt.status === "running" ||
+      input.attempt.status === "succeeded" ||
+      Boolean(input.attempt.launchedAt));
+
+  if (realAgent) {
+    return {
+      mode: F3_REAL_MODE,
+      adapterRef: input.agent!.adapterRef,
+      executionMode: input.agent!.executionMode,
+      realProcessInvoked,
+      realExecution: realProcessInvoked,
+      externalEffects: true,
+      evidenceId: `ev:m4-bounded-ro:${segment}`,
+      reviewBundleId: `rb:m4-bounded-ro:${segment}`,
+    };
+  }
+
+  return {
+    mode: F3_MODE,
+    adapterRef: input.agent?.adapterRef ?? F3_ADAPTER_ID,
+    executionMode: input.agent?.executionMode ?? "adapter_sync_fixture",
+    realProcessInvoked: false,
+    realExecution: false,
+    externalEffects: false,
+    evidenceId: `ev:f3-fixture:${segment}`,
+    reviewBundleId: `rb:f3-fixture:${segment}`,
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts b/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts
@@ -0,0 +1,455 @@
+/**
+ * Confirm → Select M4 bounded RO → Grant Gate D → StartExecution REAL port.
+ * No fixture fallback. No client adapter/command. No NodeCursorProcessRunner here.
+ */
+
+import type {
+  DecisionServices,
+  OaActorReference,
+} from "@/lib/oa/decision";
+import type {
+  ExecutionContract,
+  ExecutionContractServices,
+} from "@/lib/oa/execution-contract";
+import {
+  M4_BOUNDED_RO_CURSOR_AGENT_ID,
+  type ExecutionAttemptServices,
+} from "@/lib/oa/execution-attempt";
+import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type { ProjectServices } from "@/lib/oa/project";
+import type { ProposalDto } from "../f2/types";
+import {
+  F3_CONFIRM_ACTION_REF,
+  F3_LABELS,
+  resolveF3EphemeralNotice,
+} from "./constants";
+import { deriveAttemptProvenance } from "./deriveAttemptProvenance";
+import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
+import type { F3ExecutePayload } from "./types";
+
+export type BoundedReadOnlyPipelineDeps = {
+  decisionServices: DecisionServices;
+  executionContractServices: ExecutionContractServices;
+  executionAttemptServices: ExecutionAttemptServices;
+  evidenceReviewServices: EvidenceReviewServices;
+  projectServices?: ProjectServices;
+  productDurablePath?: boolean;
+  nowIso: () => string;
+};
+
+export type BoundedReadOnlyPipelineIdentities = {
+  confirmationId: string;
+  confirmationIdempotencyKey: string;
+  confirmationLevel: "N2" | "N3";
+  attemptId: string;
+  attemptIdempotencyKey: string;
+  grantId: string;
+};
+
+function launchCallCountOf(port: unknown): number {
+  if (port && typeof port === "object" && "launchCallCount" in port) {
+    const n = (port as { launchCallCount: unknown }).launchCallCount;
+    return typeof n === "number" ? n : 0;
+  }
+  return 0;
+}
+
+function pendingEvidence(mode: F3ExecutePayload["mode"]): F3ExecutePayload["evidence"] {
+  return {
+    evidenceId: "ev:pending-real",
+    status: "pending",
+    sourceKind: "execution_attempt",
+    technicalResultRef: null,
+    verified: false,
+    mode,
+  };
+}
+
+function pendingReviewBundle(
+  mode: F3ExecutePayload["mode"],
+): F3ExecutePayload["reviewBundle"] {
+  return {
+    reviewBundleId: "rb:pending-real",
+    status: "pending",
+    version: 0,
+    evidenceRefs: [],
+    mode,
+  };
+}
+
+function pendingRecommendation(
+  mode: F3ExecutePayload["mode"],
+): F3ExecutePayload["recommendation"] {
+  return {
+    kind: "recommendation",
+    status: "pending",
+    executionAuthority: false,
+    gateConsumed: false,
+    decisionCreated: false,
+    attemptAutoLaunchNextCycle: false,
+    openHardReservationRefs: [],
+    hardBlockers: [],
+    nextGateCode: null,
+    nextActionCode: null,
+    recommendationLabel: F3_LABELS.recommendationNotDecision,
+    mode,
+    analysisStatus: "not_attempted",
+    analysisText: null,
+    analysisProviderId: null,
+    analysisUnavailableReason: null,
+  };
+}
+
+function buildPayload(input: {
+  proposal: ProposalDto | null;
+  decisionId: string;
+  contract: ExecutionContract;
+  attempt: {
+    attemptId: string;
+    status: string;
+    selectedAgentRef: string;
+    resultRef?: string;
+    selectionStrategy?: string;
+    launchedAt?: string;
+    irreversibleEffectsPossible?: boolean;
+  };
+  launchCount: number;
+  reusedExistingAttempt: boolean;
+  extraDisclosures: readonly string[];
+  productDurablePath: boolean;
+  provenance: ReturnType<typeof deriveAttemptProvenance>;
+  ingested?: Extract<
+    Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
+    { ok: true }
+  >;
+}): F3ExecutePayload {
+  const persistenceNotice = resolveF3EphemeralNotice(input.productDurablePath);
+  return {
+    turnKind: "f3_execute",
+    mode: input.provenance.mode,
+    proposal: input.proposal,
+    decisionId: input.decisionId,
+    contract: {
+      executionContractId: input.contract.executionContractId,
+      version: input.contract.version,
+      status: input.contract.status,
+      action: input.contract.action,
+      target: input.contract.target,
+      scope: input.contract.scope,
+      requiredAuthority: input.contract.requiredAuthority,
+      mode: input.provenance.mode,
+      constraints: [...input.contract.constraints],
+    },
+    attempt: {
+      attemptId: input.attempt.attemptId,
+      status: input.attempt.status,
+      selectedAgentRef: input.attempt.selectedAgentRef,
+      adapterId: input.provenance.adapterRef,
+      adapterRef: input.provenance.adapterRef,
+      executionMode: input.provenance.executionMode,
+      realProcessInvoked: input.provenance.realProcessInvoked,
+      externalEffects: input.provenance.externalEffects,
+      resultRef: input.attempt.resultRef ?? null,
+      launchCount: input.launchCount,
+      selectionStrategy:
+        input.attempt.selectionStrategy ?? "capabilities_deterministic",
+      mode: input.provenance.mode,
+    },
+    evidence: input.ingested?.evidence ?? pendingEvidence(input.provenance.mode),
+    reviewBundle:
+      input.ingested?.reviewBundle ??
+      pendingReviewBundle(input.provenance.mode),
+    recommendation:
+      input.ingested?.recommendation ??
+      pendingRecommendation(input.provenance.mode),
+    reusedExistingAttempt: input.reusedExistingAttempt,
+    executionPerformed: true,
+    realExecution: input.provenance.realExecution,
+    gitWritePerformed: false,
+    labels: {
+      fixtureNoReal: F3_LABELS.fixtureNoReal,
+      noGitWrite: F3_LABELS.noGitWrite,
+      recommendationNotDecision: F3_LABELS.recommendationNotDecision,
+      cursorRealBlocked: F3_LABELS.cursorRealBlocked,
+      hardOpen: F3_LABELS.hardOpen,
+    },
+    processLocalNotice: persistenceNotice,
+    disclosures: [
+      F3_LABELS.noGitWrite,
+      F3_LABELS.recommendationNotDecision,
+      F3_LABELS.noReadyClaim,
+      F3_LABELS.noTa6Complete,
+      "BOUNDED READ-ONLY REAL BRANCH — provenance from Attempt, not env flag",
+      ...input.extraDisclosures,
+      persistenceNotice,
+    ],
+  };
+}
+
+export async function executeConfirmedBoundedReadOnlyContract(input: {
+  projectId: string;
+  decisionId: string;
+  proposal: ProposalDto | null;
+  contract: ExecutionContract;
+  expectedContractVersion: number;
+  actor: OaActorReference;
+  authorityEvidenceId: string;
+  identities: BoundedReadOnlyPipelineIdentities;
+  extraDisclosures?: readonly string[];
+  deps: BoundedReadOnlyPipelineDeps;
+}): Promise<
+  | { ok: true; payload: F3ExecutePayload }
+  | { ok: false; code: string; message: string }
+> {
+  const attempts = input.deps.executionAttemptServices;
+  const realBoundary = attempts.realBoundary;
+  if (!realBoundary) {
+    return {
+      ok: false,
+      code: "REAL_BOUNDARY_REQUIRED",
+      message:
+        "Contrat bounded read-only REAL refusé — realBoundary absent (fail-closed, pas de fallback fixture).",
+    };
+  }
+  if (!attempts.grantRealExecutionGate) {
+    return {
+      ok: false,
+      code: "GATE_D_REQUIRED",
+      message:
+        "Contrat bounded read-only REAL refusé — Gate D non disponible (fail-closed, pas de fallback fixture).",
+    };
+  }
+
+  let contract = input.contract;
+  const extraDisclosures = input.extraDisclosures ?? [];
+  const productDurable =
+    input.deps.productDurablePath ?? input.deps.projectServices !== undefined;
+
+  const listed = await attempts.listExecutionAttempts.execute({
+    executionContractId: contract.executionContractId,
+  });
+  if (listed.ok) {
+    const reusable = listed.attempts.find(
+      (a) => a.status === "succeeded" || a.status === "running",
+    );
+    if (reusable) {
+      const agent = attempts.registry.getAgent(reusable.selectedAgentRef);
+      const provenance = deriveAttemptProvenance({
+        attempt: reusable,
+        agent,
+      });
+      let ingested:
+        | Extract<
+            Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
+            { ok: true }
+          >
+        | undefined;
+      if (reusable.status === "succeeded" && reusable.resultRef) {
+        const result = await ingestEvidenceAndRecommend({
+          projectId: input.projectId,
+          attemptId: reusable.attemptId,
+          executionContractId: contract.executionContractId,
+          provenance,
+          deps: {
+            evidenceReviewServices: input.deps.evidenceReviewServices,
+            projectServices: input.deps.projectServices,
+            executionAttemptServices: attempts,
+            executionContractServices: input.deps.executionContractServices,
+          },
+        });
+        if (!result.ok) return result;
+        ingested = result;
+      }
+      return {
+        ok: true,
+        payload: buildPayload({
+          proposal: input.proposal,
+          decisionId: input.decisionId,
+          contract,
+          attempt: reusable,
+          launchCount: launchCallCountOf(realBoundary.launchPort),
+          reusedExistingAttempt: true,
+          extraDisclosures,
+          productDurablePath: productDurable,
+          provenance,
+          ingested,
+        }),
+      };
+    }
+  }
+
+  if (contract.version !== input.expectedContractVersion) {
+    return {
+      ok: false,
+      code: "CONTRACT_VERSION_MISMATCH",
+      message: `Version contrat attendue ${input.expectedContractVersion}, actuelle ${contract.version}.`,
+    };
+  }
+
+  if (
+    contract.status === "confirmation_required" ||
+    contract.status === "validated"
+  ) {
+    const requested = await input.deps.decisionServices.requestConfirmation.execute({
+      confirmationId: input.identities.confirmationId,
+      level: input.identities.confirmationLevel,
+      actionRef: F3_CONFIRM_ACTION_REF,
+      requestedBy: input.actor,
+      requestedTo: input.actor,
+      scope: contract.scope,
+      idempotencyKey: input.identities.confirmationIdempotencyKey,
+      decisionRef: input.decisionId,
+    });
+    if (!requested.ok) {
+      return {
+        ok: false,
+        code: requested.error.detailCode,
+        message: requested.error.message,
+      };
+    }
+
+    const granted = await input.deps.decisionServices.grantConfirmation.execute({
+      confirmationId: input.identities.confirmationId,
+      actor: input.actor,
+      authorityEvidenceId: input.authorityEvidenceId,
+    });
+    if (!granted.ok) {
+      return {
+        ok: false,
+        code: granted.error.detailCode,
+        message: granted.error.message,
+      };
+    }
+
+    const confirmed =
+      await input.deps.executionContractServices.confirmExecutionContract.execute(
+        {
+          executionContractId: contract.executionContractId,
+          confirmationId: input.identities.confirmationId,
+          actor: input.actor,
+          authorityEvidenceId: input.authorityEvidenceId,
+          expectedVersion: contract.version,
+        },
+      );
+    if (!confirmed.ok) {
+      return {
+        ok: false,
+        code: confirmed.error.detailCode,
+        message: confirmed.error.message,
+      };
+    }
+    contract = confirmed.contract;
+  } else if (
+    contract.status !== "confirmed" &&
+    contract.status !== "executing" &&
+    contract.status !== "completed"
+  ) {
+    return {
+      ok: false,
+      code: "CONTRACT_NOT_CONFIRMABLE",
+      message: `Contrat non confirmable (statut ${contract.status}).`,
+    };
+  }
+
+  const selected = await attempts.selectExecutionAgent.execute({
+    attemptId: input.identities.attemptId,
+    executionContractId: contract.executionContractId,
+    idempotencyKey: input.identities.attemptIdempotencyKey,
+    actor: input.actor,
+    authorityEvidenceId: input.authorityEvidenceId,
+    expectedContractVersion: contract.version,
+    selectionProfile: "standard",
+    selectionStrategy: "capabilities_deterministic",
+    requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
+    systemInitiated: true,
+  });
+  if (!selected.ok) {
+    return {
+      ok: false,
+      code: selected.error.detailCode,
+      message: selected.error.message,
+    };
+  }
+
+  const nowMs = Date.parse(input.deps.nowIso());
+  const expiresAt = new Date(
+    (Number.isFinite(nowMs) ? nowMs : Date.now()) + 60 * 60 * 1000,
+  ).toISOString();
+
+  const gate = await attempts.grantRealExecutionGate.execute({
+    grantId: input.identities.grantId,
+    attemptId: input.identities.attemptId,
+    actor: input.actor,
+    expiresAt,
+    authorityEvidenceId: input.authorityEvidenceId,
+  });
+  if (!gate.ok) {
+    return {
+      ok: false,
+      code: gate.error.detailCode,
+      message: gate.error.message,
+    };
+  }
+
+  const started = await attempts.startExecution.execute({
+    attemptId: input.identities.attemptId,
+    actor: input.actor,
+    authorityEvidenceId: input.authorityEvidenceId,
+  });
+  if (!started.ok) {
+    return {
+      ok: false,
+      code: started.error.detailCode,
+      message: started.error.message,
+    };
+  }
+
+  const attempt = started.attempt;
+  const agent = attempts.registry.getAgent(attempt.selectedAgentRef);
+  const provenance = deriveAttemptProvenance({ attempt, agent });
+
+  const refreshed =
+    await input.deps.executionContractServices.getExecutionContract.execute({
+      executionContractId: contract.executionContractId,
+    });
+  if (refreshed.ok) contract = refreshed.contract;
+
+  let ingested:
+    | Extract<
+        Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
+        { ok: true }
+      >
+    | undefined;
+  if (attempt.status === "succeeded" && attempt.resultRef) {
+    const result = await ingestEvidenceAndRecommend({
+      projectId: input.projectId,
+      attemptId: attempt.attemptId,
+      executionContractId: contract.executionContractId,
+      provenance,
+      deps: {
+        evidenceReviewServices: input.deps.evidenceReviewServices,
+        projectServices: input.deps.projectServices,
+        executionAttemptServices: attempts,
+        executionContractServices: input.deps.executionContractServices,
+      },
+    });
+    if (!result.ok) return result;
+    ingested = result;
+  }
+
+  return {
+    ok: true,
+    payload: buildPayload({
+      proposal: input.proposal,
+      decisionId: input.decisionId,
+      contract,
+      attempt,
+      launchCount: launchCallCountOf(realBoundary.launchPort),
+      reusedExistingAttempt: false,
+      extraDisclosures,
+      productDurablePath: productDurable,
+      provenance,
+      ingested,
+    }),
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
@@ -0,0 +1,154 @@
+/**
+ * GAP-4 — bounded post-Evidence Nora/provider analysis.
+ * Uses resolveConversationProvider() only. Never instantiates OpenAI here.
+ * Result is a Recommendation, never a HumanDecision / GO / new contract.
+ */
+
+import { resolveConversationProvider } from "@/lib/platform/ai";
+
+export const POST_EVIDENCE_NORA_SENTINEL =
+  "[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]" as const;
+export const POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL =
+  "[[SFIA_POST_EVIDENCE_NORA_UNAVAILABLE]]" as const;
+
+export type PostEvidenceAnalysisFacts = {
+  projectId: string;
+  executionContractId: string;
+  executionContractStatus: string;
+  executionContractAction: string;
+  attemptId: string;
+  attemptStatus: string;
+  selectedAgentRef: string;
+  adapterRef: string;
+  executionMode: string;
+  realProcessInvoked: boolean;
+  evidenceId: string;
+  reviewBundleId: string;
+  technicalResultRef: string | null;
+  reservations: readonly string[];
+};
+
+export type PostEvidenceAnalysisResult =
+  | {
+      ok: true;
+      text: string;
+      providerId: string;
+    }
+  | {
+      ok: false;
+      code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE";
+      message: string;
+      providerId: string | null;
+    };
+
+const ANALYSIS_SYSTEM = `Tu es Nora, analyste post-exécution SFIA Studio.
+Tu produis UNIQUEMENT une recommandation non autoritaire à partir des faits durables fournis.
+Interdit:
+- créer une HumanDecision;
+- transformer la recommandation en GO Morris;
+- lancer un ExecutionContract / Attempt;
+- demander des secrets;
+- inventer une preuve REAL.
+Réponds en français, court, factuel.`;
+
+function boundedFactsJson(facts: PostEvidenceAnalysisFacts): string {
+  return JSON.stringify({
+    projectId: facts.projectId,
+    executionContractId: facts.executionContractId,
+    executionContractStatus: facts.executionContractStatus,
+    executionContractAction: facts.executionContractAction,
+    attemptId: facts.attemptId,
+    attemptStatus: facts.attemptStatus,
+    selectedAgentRef: facts.selectedAgentRef,
+    adapterRef: facts.adapterRef,
+    executionMode: facts.executionMode,
+    realProcessInvoked: facts.realProcessInvoked,
+    evidenceId: facts.evidenceId,
+    reviewBundleId: facts.reviewBundleId,
+    technicalResultRef: facts.technicalResultRef,
+    reservations: [...facts.reservations],
+  });
+}
+
+export async function analyzePostEvidenceWithProvider(
+  facts: PostEvidenceAnalysisFacts,
+): Promise<PostEvidenceAnalysisResult> {
+  let providerId: string | null = null;
+  try {
+    const provider = resolveConversationProvider();
+    providerId = provider.providerId;
+    const completion = await provider.complete([
+      { role: "system", content: ANALYSIS_SYSTEM },
+      {
+        role: "user",
+        content: `Faits durables post-Evidence (bornés):\n${boundedFactsJson(facts)}`,
+      },
+    ]);
+    const text = completion.text.trim();
+    if (!text) {
+      return {
+        ok: false,
+        code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE",
+        message: "Provider post-Evidence a renvoyé un texte vide.",
+        providerId,
+      };
+    }
+    return { ok: true, text: text.slice(0, 4000), providerId };
+  } catch (err) {
+    const message =
+      err instanceof Error ? err.message : "provider_post_evidence_failed";
+    return {
+      ok: false,
+      code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE",
+      message,
+      providerId,
+    };
+  }
+}
+
+export function formatPostEvidenceAnalysisForLps(input: {
+  analysisText?: string | null;
+  unavailableReason?: string | null;
+}): string | undefined {
+  if (input.analysisText && input.analysisText.trim()) {
+    return `${POST_EVIDENCE_NORA_SENTINEL}\n${input.analysisText.trim()}`;
+  }
+  if (input.unavailableReason) {
+    return `${POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL}\n${input.unavailableReason}`;
+  }
+  return undefined;
+}
+
+export function extractPostEvidenceAnalysisFromLpsContext(
+  context: string | undefined,
+): {
+  analysisText: string | null;
+  analysisUnavailableReason: string | null;
+} {
+  if (!context) {
+    return { analysisText: null, analysisUnavailableReason: null };
+  }
+  const unavailableIdx = context.lastIndexOf(
+    POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL,
+  );
+  const availableIdx = context.lastIndexOf(POST_EVIDENCE_NORA_SENTINEL);
+  if (availableIdx >= 0 && availableIdx > unavailableIdx) {
+    const text = context
+      .slice(availableIdx + POST_EVIDENCE_NORA_SENTINEL.length)
+      .trim();
+    return {
+      analysisText: text.length > 0 ? text : null,
+      analysisUnavailableReason: null,
+    };
+  }
+  if (unavailableIdx >= 0) {
+    const text = context
+      .slice(unavailableIdx + POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL.length)
+      .trim();
+    return {
+      analysisText: null,
+      analysisUnavailableReason: text.length > 0 ? text : "unavailable",
+    };
+  }
+  return { analysisText: null, analysisUnavailableReason: null };
+}
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
@@ -0,0 +1,708 @@
+/**
+ * Cycle 8 Delivery Amend — Pre-M6 REAL product wiring (GAP-1…5).
+ * Deterministic only. ZERO OpenAI live. ZERO Cursor REAL process.
+ * @vitest-environment node
+ */
+import path from "node:path";
+import os from "node:os";
+import { mkdtempSync } from "node:fs";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  confirmAndExecuteResolvedM3,
+  deriveAttemptProvenance,
+  fixtureSafeM3ResolutionProfile,
+  prepareAndResolveM3ProductPath,
+  rehydrateEvidenceOutcomeFromLps,
+  F3_ADAPTER_ID,
+  F3_MODE,
+} from "@/features/project-assistant/f3";
+import {
+  F3_ACTION,
+  F3_CAPABILITY,
+  F3_SCOPE,
+  F3_TARGET,
+} from "@/features/project-assistant/f3/constants";
+import {
+  createProposalId,
+  F2_PROCESS_LOCAL_NOTICE,
+  resetF2ProposalStoreForTests,
+  saveProposal,
+} from "@/features/project-assistant/f2/proposalStore";
+import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
+import {
+  assertStudioCursorRealOffForTests,
+  isStudioCursorRealEnabled,
+  M4_BOUNDED_RO_ACTION,
+  M4_BOUNDED_RO_CAPABILITY,
+  M4_BOUNDED_RO_CURSOR_AGENT_ID,
+  M4_BOUNDED_RO_SCOPE,
+  M4_BOUNDED_RO_TARGET,
+  M4_REAL_GATEWAY_ADAPTER_ID,
+  MemoryLaunchSafetyJournal,
+  NodeCursorProcessRunner,
+  StudioCursorRealLaunchGateway,
+} from "@/lib/oa/execution-attempt";
+import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+  type RuntimeApplicationService,
+} from "@/lib/vertical-slice-runtime";
+import {
+  FakeConversationProvider,
+  setConversationProviderForTests,
+  type ProviderChatMessage,
+  type ProviderCompletionResult,
+} from "@/lib/platform/ai";
+import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
+
+const APP_ROOT = path.resolve(__dirname, "../..");
+const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS_ROOT = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+class FixedIdSource implements LocalProjectIdSource {
+  private project = 0;
+  private lps = 0;
+  private correlation = 0;
+  constructor(private readonly prefix: string) {}
+  nextProjectId(): string {
+    this.project += 1;
+    return `prj:c8-${this.prefix}-${this.project}`;
+  }
+  nextLpsVersionId(): string {
+    this.lps += 1;
+    return `lps:c8-${this.prefix}-${this.lps}`;
+  }
+  nextCorrelationId(): string {
+    this.correlation += 1;
+    return `cor:c8-${this.prefix}-${this.correlation}`;
+  }
+}
+
+const TEST_BOUNDED_BASE_HEAD_SHA =
+  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
+
+class CountingFakeProvider extends FakeConversationProvider {
+  readonly completeCalls: ProviderChatMessage[][] = [];
+  override async complete(
+    messages: ProviderChatMessage[],
+  ): Promise<ProviderCompletionResult> {
+    this.completeCalls.push(messages.map((m) => ({ ...m })));
+    return super.complete(messages);
+  }
+}
+
+function createRuntime(
+  prefix: string,
+  realBoundary?: {
+    launchPort: TestOnlyRealExecutionLaunchPort;
+    safetyJournal: MemoryLaunchSafetyJournal;
+  },
+): RuntimeApplicationService {
+  resetRuntimeApplicationServiceForTests();
+  const dir = mkdtempSync(path.join(os.tmpdir(), `sfia-c8-${prefix}-`));
+  return getRuntimeApplicationService({
+    registryRoot: REGISTRY_ROOT,
+    schemasRoot: SCHEMAS_ROOT,
+    nowIso: "2026-08-16T18:00:00.000Z",
+    idSource: new FixedIdSource(prefix),
+    auditMode: "noop",
+    realBoundary,
+    productDbPath: path.join(dir, "oa-product.sqlite"),
+  });
+}
+
+async function seedGo(runtime: RuntimeApplicationService, label: string) {
+  const created = await runtime.createProject({
+    name: `C8 ${label}`,
+    objective: "Cycle 8 wiring amend",
+    context: "ZERO REAL",
+    criticality: "STANDARD",
+    constraints: ["FIXTURE ONLY"],
+    shortReference: "C8WIR",
+    idempotencyKey: `c8-${label}-${Date.now()}-${Math.random()}`,
+  });
+  if (!created.ok) {
+    throw new Error(`create failed: ${JSON.stringify(created)}`);
+  }
+  const projectId = created.project.projectId;
+  const overview = await runtime.getProject(projectId);
+  expect(overview.ok).toBe(true);
+  if (!overview.ok) throw new Error("overview failed");
+
+  const proposalSnapshot = {
+    projectId,
+    lpsId: overview.livingState.id,
+    lpsVersion: overview.livingState.version,
+    doctrineDigest: overview.doctrine.digest,
+  };
+  const proposal = saveProposal({
+    proposalId: createProposalId(),
+    status: "DECISION_REQUIRED",
+    rephrasedRequest: "Préparer wiring",
+    objective: "Cycle 8 amend",
+    cycleTypeId: "cyc:delivery",
+    recommendedProfile: "Standard",
+    rationale: "C8",
+    scope: "wiring",
+    outOfScope: ["LIVE REAL", "git write"],
+    activatedBlocks: ["prepare"],
+    expectedOutcome: "wired gaps",
+    sources: [],
+    risks: [],
+    reservations: [],
+    stopConditions: ["AUCUNE EXÉCUTION RÉELLE LIVE"],
+    morrisGateRequired: true,
+    nextPossibleStep: "F3 PREPARE",
+    contextSnapshot: proposalSnapshot,
+    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+    executionForbidden: true,
+    noExecutingStatus: true,
+    agentBinding: "NOT_AVAILABLE",
+  });
+  const go = await recordF2Decision({
+    proposalId: proposal.proposalId,
+    projectId,
+    decisionKind: "GO",
+    currentContext: proposalSnapshot,
+    decisionServices: runtime.oa!.decisionServices,
+    authorityResolver: runtime.oa!.authorityResolver,
+    nowIso: () => runtime.oa!.clock.nowIso(),
+    forceM3Authority: true,
+  });
+  expect(go.ok).toBe(true);
+  if (!go.ok) throw new Error("GO failed");
+  const after = await runtime.getProject(projectId);
+  expect(after.ok).toBe(true);
+  if (!after.ok) throw new Error("overview after failed");
+  return {
+    projectId,
+    decisionId: go.decision.decisionId,
+    currentContext: {
+      projectId,
+      lpsId: after.livingState.id,
+      lpsVersion: after.livingState.version,
+      doctrineDigest: after.doctrine.digest,
+    },
+  };
+}
+
+function prepareDeps(
+  runtime: RuntimeApplicationService,
+  extra?: {
+    preferBoundedReadOnlyProfile?: boolean;
+    boundedReadOnlyBaseHeadSha?: string;
+  },
+) {
+  return {
+    decisionServices: runtime.oa!.decisionServices,
+    authorityResolver: runtime.oa!.authorityResolver,
+    executionContractServices: runtime.oa!.executionContractServices,
+    nowIso: () => runtime.oa!.clock.nowIso(),
+    forceM3Authority: true,
+    preferBoundedReadOnlyProfile: extra?.preferBoundedReadOnlyProfile,
+    boundedReadOnlyBaseHeadSha: extra?.boundedReadOnlyBaseHeadSha,
+  };
+}
+
+function confirmDeps(runtime: RuntimeApplicationService) {
+  return {
+    decisionServices: runtime.oa!.decisionServices,
+    authorityResolver: runtime.oa!.authorityResolver,
+    executionContractServices: runtime.oa!.executionContractServices,
+    executionAttemptServices: runtime.oa!.executionAttemptServices,
+    evidenceReviewServices: runtime.oa!.evidenceReviewServices,
+    fixtureAdapter: runtime.oa!.fixtureAdapter,
+    nowIso: () => runtime.oa!.clock.nowIso(),
+    projectServices: runtime.oa!.projectServices,
+    productDurablePath: runtime.oa!.productDurablePath,
+    forceM3Authority: true,
+  };
+}
+
+describe("Cycle 8 — Pre-M6 REAL product wiring amend", () => {
+  beforeEach(() => {
+    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    delete process.env.SFIA_STUDIO_CURSOR_REAL;
+    delete process.env.OPS1_CURSOR_REAL;
+    delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
+    assertStudioCursorRealOffForTests();
+    resetF2ProposalStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+    setConversationProviderForTests(null);
+  });
+
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+    assertStudioCursorRealOffForTests();
+    expect(isStudioCursorRealEnabled()).toBe(false);
+  });
+
+  it("T1 — DEFAULT OFF: fixture profile, no realBoundary, no M4, no process", async () => {
+    const runtime = createRuntime("t1");
+    expect(isStudioCursorRealEnabled()).toBe(false);
+    expect(runtime.oa!.executionAttemptServices.realBoundary).toBeUndefined();
+    expect(
+      runtime.oa!.executionAttemptServices.grantRealExecutionGate,
+    ).toBeUndefined();
+    const agents = runtime.oa!.executionAttemptServices.registry.listAgents();
+    expect(
+      agents.map((a) => a.agentId),
+    ).toEqual(["agt:f3-fixture"]);
+    expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);
+
+    const seeded = await seedGo(runtime, "t1");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      mode: "REAL",
+      adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
+      command: "cursor agent --force",
+      real: true,
+      deps: prepareDeps(runtime),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    expect(prepared.payload.mode).toBe("M3_RESOLVED_FIXTURE");
+    expect(prepared.payload.successor.action).toBe(F3_ACTION);
+    expect(prepared.payload.successor.target).toBe(F3_TARGET);
+    expect(prepared.payload.successor.scope).toBe(F3_SCOPE);
+    expect(prepared.payload.successor.requiredCapabilities).toEqual([
+      F3_CAPABILITY,
+    ]);
+    expect(prepared.payload.attemptCreated).toBe(false);
+    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
+  });
+
+  it("T2 — REAL PROFILE STATIC WIRING is server-side and matches M4 descriptor", async () => {
+    const launchPort = new TestOnlyRealExecutionLaunchPort();
+    const runtime = createRuntime("t2", {
+      launchPort,
+      safetyJournal: new MemoryLaunchSafetyJournal(),
+    });
+    const seeded = await seedGo(runtime, "t2");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      adapterRef: "adp:hostile-client",
+      agentId: "agt:hostile",
+      command: "rm -rf /",
+      real: false,
+      deps: prepareDeps(runtime, {
+        preferBoundedReadOnlyProfile: true,
+        boundedReadOnlyBaseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
+      }),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_READ_ONLY");
+    expect(prepared.payload.successor.action).toBe(M4_BOUNDED_RO_ACTION);
+    expect(prepared.payload.successor.target).toBe(M4_BOUNDED_RO_TARGET);
+    expect(prepared.payload.successor.scope).toBe(M4_BOUNDED_RO_SCOPE);
+    expect(prepared.payload.successor.requiredCapabilities).toEqual([
+      M4_BOUNDED_RO_CAPABILITY,
+    ]);
+    const m4 = runtime.oa!.executionAttemptServices.registry.getAgent(
+      M4_BOUNDED_RO_CURSOR_AGENT_ID,
+    );
+    expect(m4).toBeTruthy();
+    expect(m4?.adapterRef).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
+    expect(m4?.executionMode).toBe("cursor_cli_real");
+    expect(m4?.trustLevel).toBe("bounded");
+    expect(m4?.allowedActions).toEqual([M4_BOUNDED_RO_ACTION]);
+    expect(m4?.allowedTargets).toEqual([M4_BOUNDED_RO_TARGET]);
+    expect(m4?.allowedScopes).toEqual([M4_BOUNDED_RO_SCOPE]);
+    expect(launchPort.launchCallCount).toBe(0);
+    expect(prepared.payload.realExecution).toBe(false);
+    expect(prepared.payload.attemptCreated).toBe(false);
+  });
+
+  it("T3 — GATE D REQUIRED: REAL contract without grant use-case does not call launchPort", async () => {
+    const launchPort = new TestOnlyRealExecutionLaunchPort();
+    const runtime = createRuntime("t3", {
+      launchPort,
+      safetyJournal: new MemoryLaunchSafetyJournal(),
+    });
+    runtime.oa!.executionAttemptServices.grantRealExecutionGate = undefined;
+    runtime.oa!.executionAttemptServices.grantGateD = undefined;
+    const seeded = await seedGo(runtime, "t3");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      deps: prepareDeps(runtime, {
+        preferBoundedReadOnlyProfile: true,
+        boundedReadOnlyBaseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
+      }),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    const executed = await confirmAndExecuteResolvedM3({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      executionContractId: prepared.payload.successor.executionContractId,
+      expectedContractVersion: prepared.payload.successor.version,
+      adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
+      deps: confirmDeps(runtime),
+    });
+    expect(executed.ok).toBe(false);
+    if (executed.ok) return;
+    expect(executed.code).toBe("GATE_D_REQUIRED");
+    expect(launchPort.launchCallCount).toBe(0);
+    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
+  });
+
+  it("T4 — REAL BOUNDARY REQUIRED: no silent fixture fallback", async () => {
+    const runtime = createRuntime("t4");
+    expect(runtime.oa!.executionAttemptServices.realBoundary).toBeUndefined();
+    const seeded = await seedGo(runtime, "t4");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      deps: prepareDeps(runtime, {
+        preferBoundedReadOnlyProfile: true,
+        boundedReadOnlyBaseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
+      }),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    expect(prepared.payload.successor.action).toBe(M4_BOUNDED_RO_ACTION);
+    const executed = await confirmAndExecuteResolvedM3({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      executionContractId: prepared.payload.successor.executionContractId,
+      expectedContractVersion: prepared.payload.successor.version,
+      deps: confirmDeps(runtime),
+    });
+    expect(executed.ok).toBe(false);
+    if (executed.ok) return;
+    expect(executed.code).toBe("REAL_BOUNDARY_REQUIRED");
+    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
+  });
+
+  it("T5 — TEST REAL LAUNCH ADAPTER: fake port once, zero NodeCursorProcessRunner", async () => {
+    const launchPort = new TestOnlyRealExecutionLaunchPort();
+    expect(launchPort.constructor.name).toBe("TestOnlyRealExecutionLaunchPort");
+    expect(launchPort).not.toBeInstanceOf(StudioCursorRealLaunchGateway);
+    expect(launchPort).not.toBeInstanceOf(NodeCursorProcessRunner);
+    const runtime = createRuntime("t5", {
+      launchPort,
+      safetyJournal: new MemoryLaunchSafetyJournal(),
+    });
+    const seeded = await seedGo(runtime, "t5");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      deps: prepareDeps(runtime, {
+        preferBoundedReadOnlyProfile: true,
+        boundedReadOnlyBaseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
+      }),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    const executed = await confirmAndExecuteResolvedM3({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      executionContractId: prepared.payload.successor.executionContractId,
+      expectedContractVersion: prepared.payload.successor.version,
+      command: "should-be-ignored",
+      real: true,
+      deps: confirmDeps(runtime),
+    });
+    expect(executed.ok).toBe(true);
+    if (!executed.ok) return;
+    expect(launchPort.launchCallCount).toBe(1);
+    expect(launchPort.simulatedAckCount).toBe(1);
+    expect(executed.payload.attempt.selectedAgentRef).toBe(
+      M4_BOUNDED_RO_CURSOR_AGENT_ID,
+    );
+    expect(executed.payload.attempt.adapterRef).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
+    expect(executed.payload.attempt.executionMode).toBe("cursor_cli_real");
+    expect(executed.payload.attempt.status).toBe("running");
+    expect(executed.payload.attempt.realProcessInvoked).toBe(true);
+    expect(executed.payload.realExecution).toBe(true);
+    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
+    expect(isStudioCursorRealEnabled()).toBe(false);
+  });
+
+  it("T6 / T9 — FIXTURE REGRESSION + honest fixture provenance", async () => {
+    const provider = new CountingFakeProvider({
+      scripted: ["[TEST/FAKE · NON LIVE] Reco post-evidence fixture"],
+    });
+    setConversationProviderForTests(provider);
+    const runtime = createRuntime("t6");
+    const seeded = await seedGo(runtime, "t6");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      deps: prepareDeps(runtime),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    const profile = fixtureSafeM3ResolutionProfile();
+    expect(prepared.payload.successor.action).toBe(profile.action);
+    const executed = await confirmAndExecuteResolvedM3({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      executionContractId: prepared.payload.successor.executionContractId,
+      expectedContractVersion: prepared.payload.successor.version,
+      deps: confirmDeps(runtime),
+    });
+    expect(executed.ok).toBe(true);
+    if (!executed.ok) return;
+    expect(executed.payload.mode).toBe(F3_MODE);
+    expect(executed.payload.attempt.adapterRef).toBe(F3_ADAPTER_ID);
+    expect(executed.payload.attempt.realProcessInvoked).toBe(false);
+    expect(executed.payload.realExecution).toBe(false);
+    expect(executed.payload.evidence.evidenceId.startsWith("ev:f3-fixture:")).toBe(
+      true,
+    );
+    expect(
+      executed.payload.reviewBundle.reviewBundleId.startsWith("rb:f3-fixture:"),
+    ).toBe(true);
+    expect(executed.payload.recommendation.kind).toBe("recommendation");
+    expect(executed.payload.recommendation.decisionCreated).toBe(false);
+    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBeGreaterThan(0);
+  });
+
+  it("T7 — POST-EVIDENCE NORA via FakeConversationProvider after Evidence", async () => {
+    const provider = new CountingFakeProvider({
+      scripted: [
+        "[TEST/FAKE · NON LIVE] Recommandation post-Evidence — pas une décision",
+      ],
+    });
+    setConversationProviderForTests(provider);
+    const runtime = createRuntime("t7");
+    const seeded = await seedGo(runtime, "t7");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      deps: prepareDeps(runtime),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    const executed = await confirmAndExecuteResolvedM3({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      executionContractId: prepared.payload.successor.executionContractId,
+      expectedContractVersion: prepared.payload.successor.version,
+      deps: confirmDeps(runtime),
+    });
+    expect(executed.ok).toBe(true);
+    if (!executed.ok) return;
+    expect(provider.completeCalls.length).toBeGreaterThanOrEqual(1);
+    const haystack = provider.completeCalls
+      .flat()
+      .map((m) => m.content)
+      .join("\n");
+    expect(haystack).toContain(seeded.projectId);
+    expect(haystack).toContain(executed.payload.evidence.evidenceId);
+    expect(haystack).toContain(executed.payload.reviewBundle.reviewBundleId);
+    expect(executed.payload.recommendation.kind).toBe("recommendation");
+    expect(executed.payload.recommendation.executionAuthority).toBe(false);
+    expect(executed.payload.recommendation.decisionCreated).toBe(false);
+    expect(executed.payload.recommendation.analysisStatus).toBe("available");
+    expect(executed.payload.recommendation.analysisText).toMatch(/Recommandation/i);
+    const durable = await runtime.oa!.decisionServices.getHumanDecision.execute({
+      decisionId: seeded.decisionId,
+    });
+    expect(durable.ok).toBe(true);
+  });
+
+  it("T8 — PROVIDER FAILURE keeps Evidence/RB and does not invent a decision", async () => {
+    const provider = new FakeConversationProvider({ failOnCall: 1 });
+    setConversationProviderForTests(provider);
+    const runtime = createRuntime("t8");
+    const seeded = await seedGo(runtime, "t8");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      deps: prepareDeps(runtime),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    const executed = await confirmAndExecuteResolvedM3({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      executionContractId: prepared.payload.successor.executionContractId,
+      expectedContractVersion: prepared.payload.successor.version,
+      deps: confirmDeps(runtime),
+    });
+    expect(executed.ok).toBe(true);
+    if (!executed.ok) return;
+    expect(executed.payload.evidence.evidenceId.startsWith("ev:f3-fixture:")).toBe(
+      true,
+    );
+    expect(executed.payload.reviewBundle.reviewBundleId.length).toBeGreaterThan(3);
+    expect(executed.payload.recommendation.analysisStatus).toBe("unavailable");
+    expect(executed.payload.recommendation.decisionCreated).toBe(false);
+    expect(executed.payload.recommendation.executionAuthority).toBe(false);
+    const loaded = await runtime.oa!.evidenceReviewServices.evidenceReader.findById(
+      executed.payload.evidence.evidenceId,
+    );
+    expect(loaded).toBeTruthy();
+  });
+
+  it("T10 — PROVENANCE REAL SIMULATED derives from Attempt, not env flag", async () => {
+    const launchPort = new TestOnlyRealExecutionLaunchPort();
+    const runtime = createRuntime("t10", {
+      launchPort,
+      safetyJournal: new MemoryLaunchSafetyJournal(),
+    });
+    const previousFlag = process.env.SFIA_STUDIO_CURSOR_REAL;
+    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
+    const seeded = await seedGo(runtime, "t10");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      deps: prepareDeps(runtime, {
+        preferBoundedReadOnlyProfile: true,
+        boundedReadOnlyBaseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
+      }),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    const executed = await confirmAndExecuteResolvedM3({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      executionContractId: prepared.payload.successor.executionContractId,
+      expectedContractVersion: prepared.payload.successor.version,
+      deps: confirmDeps(runtime),
+    });
+    expect(executed.ok).toBe(true);
+    if (!executed.ok) return;
+    const recorded =
+      await runtime.oa!.executionAttemptServices.recordExecutionResult.execute({
+        attemptId: executed.payload.attempt.attemptId,
+        adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
+        resultRef: `res:m4-sim:${executed.payload.attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`,
+        technicalExitCode: 0,
+      });
+    expect(recorded.ok).toBe(true);
+    if (!recorded.ok) return;
+    const agent = runtime.oa!.executionAttemptServices.registry.getAgent(
+      recorded.attempt.selectedAgentRef,
+    );
+    const provenance = deriveAttemptProvenance({
+      attempt: recorded.attempt,
+      agent,
+    });
+    expect(process.env.SFIA_STUDIO_CURSOR_REAL).toBe("0");
+    expect(provenance.mode).toBe("CURSOR_CLI_REAL");
+    expect(provenance.adapterRef).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
+    expect(provenance.executionMode).toBe("cursor_cli_real");
+    expect(provenance.realProcessInvoked).toBe(true);
+    expect(provenance.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(true);
+    if (previousFlag === undefined) {
+      delete process.env.SFIA_STUDIO_CURSOR_REAL;
+    } else {
+      process.env.SFIA_STUDIO_CURSOR_REAL = previousFlag;
+    }
+  });
+
+  it("T11 — HOSTILE CLIENT cannot select adapter, command, workspace, or skip Confirmation", async () => {
+    const runtime = createRuntime("t11");
+    const seeded = await seedGo(runtime, "t11");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
+      agentId: M4_BOUNDED_RO_CURSOR_AGENT_ID,
+      command: "cursor --workspace /etc",
+      real: true,
+      deps: prepareDeps(runtime),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    expect(prepared.payload.successor.action).toBe(F3_ACTION);
+    const listedBefore =
+      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
+        executionContractId: prepared.payload.successor.executionContractId,
+      });
+    expect(listedBefore.ok).toBe(true);
+    if (listedBefore.ok) expect(listedBefore.attempts).toHaveLength(0);
+
+    const executed = await confirmAndExecuteResolvedM3({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      executionContractId: prepared.payload.successor.executionContractId,
+      expectedContractVersion: prepared.payload.successor.version,
+      adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
+      command: "hostile",
+      real: true,
+      deps: confirmDeps(runtime),
+    });
+    expect(executed.ok).toBe(true);
+    if (!executed.ok) return;
+    expect(executed.payload.attempt.adapterRef).toBe(F3_ADAPTER_ID);
+    expect(executed.payload.realExecution).toBe(false);
+    expect(executed.payload.recommendation.decisionCreated).toBe(false);
+  });
+
+  it("T12 — PERSISTENCE / REHYDRATE Evidence, RB, recommendation, LPS without migration", async () => {
+    const provider = new CountingFakeProvider({
+      scripted: ["[TEST/FAKE · NON LIVE] Analyse durable post-Evidence"],
+    });
+    setConversationProviderForTests(provider);
+    const runtime = createRuntime("t12");
+    const seeded = await seedGo(runtime, "t12");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      deps: prepareDeps(runtime),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    const executed = await confirmAndExecuteResolvedM3({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      executionContractId: prepared.payload.successor.executionContractId,
+      expectedContractVersion: prepared.payload.successor.version,
+      deps: confirmDeps(runtime),
+    });
+    expect(executed.ok).toBe(true);
+    if (!executed.ok) return;
+    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
+      projectId: seeded.projectId,
+      deps: {
+        projectServices: runtime.oa!.projectServices,
+        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
+      },
+    });
+    expect(rehydrated.ok).toBe(true);
+    if (!rehydrated.ok) return;
+    expect(rehydrated.evidence.map((e) => e.evidenceId)).toContain(
+      executed.payload.evidence.evidenceId,
+    );
+    expect(rehydrated.reviewBundles.map((b) => b.reviewBundleId)).toContain(
+      executed.payload.reviewBundle.reviewBundleId,
+    );
+    expect(rehydrated.recommendation.kind).toBe("recommendation");
+    expect(rehydrated.recommendation.decisionCreated).toBe(false);
+    expect(rehydrated.recommendation.analysisText).toMatch(/Analyse durable/i);
+    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
+      { projectId: seeded.projectId },
+    );
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    expect(lps.livingProjectState.evidenceIds).toContain(
+      executed.payload.evidence.evidenceId,
+    );
+  });
+});

```
