# PJ-REPROOF-04 — PROJECT GIT INTEGRATION + PR READINESS
## PRODUCT-JOURNEY-EXECUTION-CONTRACT-SEMANTIC-BRIDGE-01
## FULL Review Pack (integration correction — same macro)

timestamp: 2026-09-20T21:56:00Z
macro: PRODUCT-JOURNEY-EXECUTION-CONTRACT-SEMANTIC-BRIDGE-01
finding: PJ-REPROOF-04 — HumanDecision → ExecutionContract → Cursor → ExecutionReport
parent: PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01 — PAUSED
cycle: 8 — DELIVERY / IMPLEMENTATION
profile: CRITICAL
mode: SAME MACRO — PROJECT GIT INTEGRATION + PR READINESS — NO MICRO-CYCLE
Morris GO: CONSUMED
MERGE: NOT AUTHORIZED
NEW Product REAL: ZERO · NEW Cursor REAL: ZERO
Product Journey: PAUSED
runtime v3: NON ADOPTED
Global L5: NOT ADOPTED

CI note (run 35539804692 on ff233782):
- Unit/typecheck/lint path reached Trailing whitespace check only as failure
- Cause: markdown hard-break trailing spaces in this Review Pack
- Bounded fix: strip trailing whitespace; no product code change

---

## 1. Local Git Truth (pre-correction)

```
worktree: /tmp/sfia-pj-ec-bridge-01
branch: fix/sfia-studio-execution-contract-semantic-bridge
origin/main: 163a05e542d4c8d65e710cf27fb2f7eec9414844
BASELINE: MATCH (no advance)
prior integration HEAD: 3856b7b140985bed770fbf6d35a75d6cc4eca118
PR: https://github.com/mcleland147/sfia-workspace/pull/510
```

---

## 2. CI failure classification (run 35539162913)

Required Gate: FAILURE (48 unit tests)

DIRECTLY ATTRIBUTABLE to PJ-REPROOF-04 `contract_legacy → generalist` + gateway fail-closed:

| Failure class | Root cause | Bounded fix |
|---|---|---|
| `executionWindowDeadline` / `lifecycleFoundation` / `qaAdversarial` / `systemGovernedStop` / `m5Restart` | `defaultAgents` still used CONTRACT_* quartet; profile criteria now generalist → Select fail | Fixture `agentDescriptor` defaults → generalist technical quartet |
| `gcecCrossEcPrCreateIntegration` | Standalone PR-create EC fell through to generalist | Seal standalone GCEC specialized contracts (criteria-only; Start re-resolves prior) |
| `cursorTrustMarkerNameMax` / `m4RealOffCorrectionR1` | RO README probe removed; gateway STOP without `cursorMissionPrompt` | Restore sealed M4 RO README probe; keep generalist fail-closed without prompt |
| `registryAndAdapters` | Criteria/scopes still CONTRACT_* | Align registry fixture criteria to generalist quartet |

NON-ATTRIBUTABLE / STRUCTURAL: none for this batch.
Architecture / doctrine / Product Journey: unchanged.

---

## 3. Corrective diff (this commit)

### `resolveAttemptExecutionProfile.ts`
- After sealed RO + F3, seal standalone specialized GCEC by action/capability:
  - `pr_create` / `remote_push` / `local_commit` / `pr_merge` / `docs_write`
- Criteria-only seal so Select can succeed; Start remains fail-closed on missing prior / cross-EC binding
- `contract_legacy` still binds ONE Product generalist technical quartet

### `studioCursorRealLaunchGateway.ts`
- Restore historical M4 RO README probe when `action === RO` or selected agent is RO
- Keep `cursorMissionPrompt` path for generalist
- Keep fail-closed STOP when neither RO nor mission prompt

### Test fixtures
- `helpers.ts` + `m5RestartProcessWorker.ts`: agent defaults → generalist quartet
- `registryAndAdapters.test.ts`: findCandidates criteria → generalist quartet

Excluded (local-only, not staged):
- `.tmp-sfia-review/runtime-captures/`

---

## 4. Final validation (integration tree)

Critical batch (111):
- `pjReproof04.executionContractSemanticBridge.d0.test.ts`
- `gcecAgent01AttemptProfile.d0.test.ts`
- `m4RealOffCorrectionR2.test.ts`
- `trajectorySurface.ui.test.tsx`
- `postExecutionTrajectorySurface.ui.test.tsx`
- `w3aGovernedExecute.test.ts`

**Aggregate: 111 PASS**

Previously failing CI suites (re-run local):
- executionWindowDeadline, gcecCrossEcPrCreateIntegration, cursorTrustMarkerNameMax,
  lifecycleFoundation, qaAdversarial, systemGovernedStop, m5RestartProcessProof,
  m4RealOffBoundary, m4RealOffCorrectionR1, registryAndAdapters, gcecAgent01
- **118 PASS**

`npm run typecheck` → PASS
`npm run lint` → PASS

Playwright foreign `:3020` reserve: accepted (non-blocking).
NEW REAL = ZERO. No Product REAL. No Cursor REAL.

---

## 5. Integration commits

1. `b8002fdd` — fix(sfia-studio): simplify execution contract cursor bridge
2. `3856b7b1` — fix(sfia-studio): seal F3 fixture matching for contract_legacy isolation
3. (this) — fix(sfia-studio): seal standalone GCEC + restore RO probe for CI

PR: #510 vs `main` @ `163a05e5`

---

## 6. Anti-claims

- Product Journey remains PAUSED
- runtime v3 remains NON ADOPTED
- no global L5
- no new REAL proof
- merge NOT authorized by this GO
- no doctrine/baseline modification
- no micro-cycle; same-macro bounded CI correction only

---

## 7. Verdict (pre-CI re-observe)

PASS — LOCAL VALIDATION GREEN AFTER BOUNDED CI CORRECTION — AWAITING REQUIRED GATE

Expected after CI green:

**PASS — PJ-REPROOF-04 PROJECT GIT INTEGRATED ON PR — CI GREEN — REQUIRED GATE PASS — READY FOR MORRIS MERGE DECISION**
