# SFIA Studio — FULL Review Pack
## PRODUCT-JOURNEY-EXECUTION-CONTRACT-SEMANTIC-BRIDGE-01 / PJ-REPROOF-04

**Timestamp (UTC):** 2026-09-20T19:11:38Z
**Mode:** PARENT PRODUCT JOURNEY PAUSED — NEW COHERENT CORRECTION MACRO — NO MICRO-CYCLE
**Cycle:** 8 — DELIVERY / IMPLEMENTATION
**Type:** EVOL · **Profile:** CRITICAL
**Correction macro:** PRODUCT-JOURNEY-EXECUTION-CONTRACT-SEMANTIC-BRIDGE-01
**Finding:** PJ-REPROOF-04 — HumanDecision → ExecutionContract semantic bridge / executor capability gap
**Parent campaign (paused):** PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01

---

## 1. Local Git Truth

| Check | Result |
|---|---|
| Worktree | `/tmp/sfia-pj-ec-bridge-01` |
| Branch | `fix/sfia-studio-execution-contract-semantic-bridge` |
| HEAD | `163a05e542d4c8d65e710cf27fb2f7eec9414844` (= `origin/main`) |
| Baseline expected | `163a05e542d4c8d65e710cf27fb2f7eec9414844` — **MATCH** |
| Remote branch pre-check | ABSENT (created local only) |
| Project commit / push / PR / merge | **0 / 0 / 0 / 0** |
| New REAL Cursor / Product execution | **ZERO** |

Parent/runtime worktrees (`/workspace`, `/tmp/sfia-studio-main-runtime`) were **not** mutated for this correction.

---

## 2. Sources read (repo-informed)

**Process:** `prompts/templates/sfia-cycle-execution-template.md`, routing guide, operating model, rules/guardrails, knowledge layer.
**Convergence:** Build Doctrine + Roadmap (read-only).
**Product Completion:** C1/C2 (read-only).
**v3 framing:** 30, 32, 34, 35, 37 (read-only).
**Mandatory implementation:** TrajectorySurface, w2/actions, prepareExecutionContractFromW2Decision, w3aActualExecutionWork, w3aProductExecutionSemantics, governedExecuteAuthorizedContract, EC domain/build/validate/inspect/disclosure, DecisionBasis types, Cursor agent registry + StudioCursorRealLaunchGateway, RecoveryContext, trajectoryOptions, related tests.

---

## 3. Convergence qualification

| Item | Qualification |
|---|---|
| Capabilities served | V3-F05, V3-F11, V3-F12, V3-F06 |
| Milestone | Product Journey current-main reproof — bounded correction |
| NORA COGNITIVE COMPLETION | PRESERVED |
| Runtime v3 | NON ADOPTED |
| Global L5 | NOT ADOPTED |
| CKC Detailed | ABSENT — fallback routing + template; authority NONE |

---

## 4. Architecture discovery (mandatory checkpoint)

### Current chain (pre-correction)

Two PREPARE seams after HumanDecision:

1. **Proposal sealed docs_write (Path A)** — `DecisionBasis.executionBasis` → `prepareAndResolveM3ProductPath` — Pilote does **not** pick operationKind. ✅ already bridged.
2. **Trajectory W3-A sandbox (Path B)** — Pilote `<select data-testid="w3a-operation-kind">` → `qualifiedOperationKind` → `buildActualExecutionWork` → EC. ❌ gap.
3. **Recovery docs_write (Path C)** — durable binding successor — ignores client opKind. ✅.

`deriveW3AExecutionEnvelope` previously **refused** `opt:trajectory:clarify-first` with `TRAJECTORY_NOT_EXECUTABLE`, blocking the Product Journey diagnostic prepare after HD.

### Root cause (exact)

Product-facing trajectory prepare required Pilote to select a low-level `qualifiedOperationKind` (`read|simulate|generate-temporary-artifact`). Trajectory option was governance provenance only, but UI forced technical HOW selection. Clarify-first was wrongly treated as "no EC prepare" instead of "prepare diagnostic mission EC".

### Architecture stop assessment

**NO structural stop.** Existing assets suffice:

- Durable SoT remains native ExecutionContract 0.2.0-oa
- ActualExecutionWork / QualifiedExecutionEffects remain non-durable application DTOs
- AgentCapability + MemoryAgentRegistry + StudioCursorRealLaunchGateway unchanged as systems
- No new aggregate, persistence model, Attempt SM, or parallel gateway

---

## 5. Asset classification (executed)

**KEEP:** HumanDecision, DecisionBasis (+executionBasis), ProjectTrajectory, native EC lifecycle, Attempt SM, AgentCapability, Cursor agent registry, Real gateway, Evidence/ReviewBundle, workspace routing.

**ADAPT:**
- W2 prepare: derive ActualExecutionWork from durable Product context
- Envelope: allow clarify-first when diagnostic work present; mission overlay
- TrajectorySurface: remove operation dropdown; prepare without opKind
- Fixture agent: add `product:read` / `cap:product-read` / `product:read-only` for diagnostic executor sufficiency
- trajectoryOptions impacts wording (diagnostic prepare possible)

**REMOVE FROM PILOTE PRIMARY FLOW:** `w3a-operation-kind` dropdown / "Opération d'exécution".

**DO NOT CREATE:** second EC, second Attempt SM, second trajectory, second authority, second gateway, parallel persistence.

---

## 6. Implementation

### Target behaviour implemented

```
HumanDecision (incl. clarify-first)
  → Studio derives ActualExecutionWork from RecoveryContext / diagnostic facts
  → Native ExecutionContract prepared (objective/scope/stops/Evidence meaningful)
  → Pilote inspects (existing disclosure)
  → Confirmation if required → authority → authorize → Cursor HOW inside contract
```

- Pilote does **not** select read/simulate/temp-artifact/write/commit/push/PR/merge.
- Trajectory option never becomes EC.action / EC.scope.
- Prepare creates **no** Attempt, invokes **no** Cursor, mutates **no** project.
- Hostile client `qualifiedOperationKind`:
  - high-risk → `PREPARATION_BLOCKED`
  - clarify diagnostic path → **ignored** (durable wins)
  - governed/bounded without durable mission → optional compat allowlist for tests only; Product UI sends none → `EFFECTS_UNRESOLVED` (honest)

### New helper

`deriveActualExecutionWorkFromProductContext.ts` — application-only, no persistence:

1. clarify-first + RecoveryContext → post-evidence diagnostic read mission
2. clarify-first without recovery → pre-engagement diagnostic read
3. sealed docs_write basis on W3-A path → `PREPARE_ROUTE_DOCS_WRITE` (Proposal/M3 owns)
4. governed/bounded + compat client kind → last-resort test path
5. else → `EFFECTS_UNRESOLVED`

Diagnostic mission semantics overlay EC expectedOutputs / stops / evidence / inputs.objective — **not** a hard-coded `clarify-first → read` global engine: read is the internal effect of the diagnostic mission facts.

### Executor capability

W3-A fixture extended with read support so capability selection can succeed for diagnostic ECs. Unsupported high-risk kinds still fail closed before EC. Docs_write / Cursor REAL gateway paths unchanged.

---

## 7. Modified / new files

### Modified
- `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`

### New
- `projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts` (336 lines)
- `projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts` (295 lines)

### Diff stat (tracked)
```
8 files changed, 138 insertions(+), 127 deletions(-)
(+ 2 untracked new files ≈ +631 lines)
```

---

## 8. Exploitable diffs / content (representative)

### TrajectorySurface — no Pilot op dropdown
- Removed `QualifiedOperationKind` state + `<select data-testid="w3a-operation-kind">`
- New block `data-testid="w3a-prepare-execution-from-decision"`
- `w2PrepareExecutionContractAction({ projectId, decisionId })` only

### prepareExecutionContractFromW2Decision
- Resolves `resolvePostEvidenceRecoveryContext`
- Calls `deriveActualExecutionWorkFromProductContext`
- Passes `mission` into `deriveW3AExecutionEnvelope`

### Envelope
- Clarify-first allowed when `actualWork` / `explicitEffects` present
- Mission overlay for objective / expectedOutputs / stops / evidence / inputs

### Fixture
```
W3A_FIXTURE_SUPPORTED_ACTIONS += "product:read"
W3A_FIXTURE_SUPPORTED_CAPABILITIES += "cap:product-read"
W3A_FIXTURE_ALLOWED_SCOPES += "product:read-only"
```

---

## 9. Tests and results

### Dedicated PJ-REPROOF-04
`pjReproof04.executionContractSemanticBridge.d0.test.ts` — **6/6 PASS**

### Direct suites
| Suite | Result |
|---|---|
| w3aGovernedExecute.test.ts | 24/24 PASS |
| trajectorySurface.ui.test.tsx | 46/46 PASS |
| recommendationDecisionIntegrity.pjReproof.d0.test.ts | 11/11 PASS |

### Regression (with `SFIA_STUDIO_CURSOR_REAL` unset — required by W3B test gate)
| Suite | Result |
|---|---|
| checkpointF.recoveryOptionsContext.d0.test.ts | PASS |
| checkpointF.recoveryDocsWriteSuccessor.d0.test.ts | PASS |
| corrProof10.decisionContextContinuity.d0.test.ts | PASS |
| postExecutionProductContinuity.d0.test.ts | PASS |
| productJourneyPostExecutionReplan.d0.test.ts | PASS |
| contractResultDocsWriteRequal.d0.test.ts | PASS |

### Typecheck / lint
- `npm run typecheck` (`tsc --noEmit`) — **PASS**
- `npm run lint` — **PASS** (0 warnings/errors)

### Not run (out of scope this cycle)
- Live Cursor REAL
- Playwright e2e (several still reference `w3a-operation-kind` — see reserves)

Artifacts: `/opt/cursor/artifacts/pj-reproof-04-*.log`

---

## 10. PJ-REPROOF-04 acceptance matrix A→F

| ID | Requirement | Status |
|---|---|---|
| A | clarify-first HD → functional EC without client opKind; bound to decision; diagnostic semantics; no Attempt | **PASS** |
| B | No Pilot op dropdown; prepare CTA; inspectable EC; auth flow retained | **PASS** (unit UI) |
| C | Hostile client cannot inject op/action/target/scope; durable wins or fail-closed | **PASS** |
| D | Trajectory option ≠ EC.action / EC.scope; Reco ≠ HD | **PASS** |
| E | Executor from EC caps; fixture read selectable; high-risk fail-closed | **PASS** |
| F | docs_write / recovery / D-PC-09 / Reco integrity regressions green | **PASS** (listed suites) |

---

## 11. Fake / Real qualification

| Item | Value |
|---|---|
| External Cursor boundary applicable | YES |
| Correction itself REAL execution | NO |
| Allowed | Deterministic unit/integration + fixture boundary |
| New REAL Product / Cursor | **ZERO** |
| Proof level at exit | **DETERMINISTIC PROVEN** for HD→EC prepare + executor routing semantics |
| Visually proven | **NOT claimed** |

---

## 12. Security / authority invariants (preserved)

- effective authority = human auth ∩ EC scope ∩ AgentCapability ∩ runtime guards
- No client path/authority/capability injection as durable truth
- No wildcard caps; no force push; no autonomous merge
- Confirmation not bypassed; inspection attestation retained
- Authority not inferred from cycle profile
- Reversibility not inferred from HumanDecision.reversible
- Trajectory option not execution scope
- Prepare ≠ Execute

---

## 13. Compatibility

- Proposal sealed docs_write PREPARE unchanged
- Recovery docs_write successor unchanged
- Historical three kinds remain as **internal/test compat** only (not Product UI)
- D-PC-09 / post-execution continuity suites green

---

## 14. Remaining gaps / reserves

1. **E2E Playwright** specs still call `w3a-operation-kind` — need follow-up update after project integration; not run this cycle.
2. **Governed/bounded without sealed GCEC / without recovery** — Product UI prepare now fails honestly (`EFFECTS_UNRESOLVED`) rather than asking Pilote for HOW. Full generic bounded execution for every trajectory still depends on durable executionBasis / Nora sealed intent / recovery facts — **not** a second engine.
3. **Cursor REAL diagnostic read** (M4 RO agent) not wired as default for clarify ECs — fixture path supports deterministic proof; REAL Path remains existing gateway for docs_write/git profiles.
4. Parent Product Journey **not resumed** (per GO).

---

## 15. Generic bounded execution support (honest scope)

At implemented scope:
- ✅ Clarify-first / post-Evidence diagnostic bridge
- ✅ Removal of Pilot technical op selection on Product UI
- ✅ Native EC SoT + inspection disclosure
- ✅ Fixture executor sufficiency for diagnostic read
- ⚠️ Not a claim that every future functional mission auto-composes multi-step Cursor HOW without additional durable facts / sealed basis

No parallel architecture introduced.

---

## 16. Counters

| Counter | Value |
|---|---|
| Project commit | 0 |
| Project push | 0 |
| PR | 0 |
| Merge | 0 |
| New REAL | 0 |

---

## 17. Recommendation for ChatGPT / Morris

**PASS — PJ-REPROOF-04 CORRECTION IMPLEMENTED AT DETERMINISTIC SCOPE — HUMANDECISION→EXECUTIONCONTRACT BRIDGE ALIGNED — READY FOR CHATGPT REVIEW**

Next (human-gated, not this cycle):
1. PROJECT GIT INTEGRATION GO (commit/push/PR) when Morris authorizes
2. Update Playwright e2e selectors
3. Resume Product Journey observation after merge

---

## 18. Review Handoff

Mode: `publish-in-cycle` via `scripts/sfia/publish-review-handoff.sh`
Branch: `sfia/review-handoff`
Canonical: `sfia-review-handoff/latest-chatgpt-review.md`
Source: `.tmp-sfia-review/chatgpt-review.md`
Remote commit: `1858538c68d8f6dde427f9a50c372e77da9f7b7e`
Remote blob: `9e0ed6a689c64f3beb417645c4faeab8f7e9611b`
Verdict: HANDOFF UPDATED — REMOTE VERIFIED
