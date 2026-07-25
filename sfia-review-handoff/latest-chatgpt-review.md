# FULL Review Pack — T-A5 PR Readiness

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 21:12:47 CEST (+0200) |
| **Cycle** | PR readiness |
| **Profil** | Critical |
| **Gate** | `GO PREPARE T-A5 PR READINESS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Branche** | framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution |
| **HEAD initial** | `cdae32684d6d41bd46535fda552b0465399f1b3e` |
| **HEAD final** | `65e5b606c2cddf443b95a890855f5097cb2ec93f` |
| **Merge-base** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Ahead** | 23 |
| **Status** | tracked clean ; `?? .tmp-sfia-review/` |
| **Staged** | none |
| **Untracked** | `.tmp-sfia-review/` |
| **Worktrees** | tech + handoff sfia-review-handoff |
| **Template** | prompts/templates/sfia-cycle-execution-template.md |
| **Handoff source** | blob `59d4638783780dd735f353b7fc68684b6d6f26fb` CORRECTED AND VALIDATED |
| **CKC** | method/.../pilots/03-architecture-technique.md — candidate ; executionAuthority=false |

## Diff

- 94 files before readiness docs; docs+README updates this cycle
- +13197 / -94 (origin/main...cdae326 era) ; branch now ahead 23
- A=88 M=6 D=0 at QA freeze ; + readiness docs commits
- No package/lockfile ; no T-A3/T-A4 code ; no foreign files

## Commits (origin/main..HEAD)

```
f6cb8f3 docs(sfia-studio): frame T-A5 agent selection and execution
57de65f docs(sfia-studio): prepare T-A5 Morris arbitration
4254ff2 docs(sfia-studio): materialize T-A5 Morris decisions
bfe82c2 feat(modeled): define ExecutionAttempt 0.2.0-oa governance
de9cc5d test(modeled): validate T-A5 modeled governance
6c4f656 fix(modeled): correct T-A5 governance defect
b8b199b test(modeled): cover T-A5 validation correction
f320208 docs(sfia-studio): document T-A5 modeled validation
8c70547 docs(sfia-studio): frame T-A5 runtime architecture
42c4832 docs(sfia-studio): prepare T-A5 runtime arbitration
64a037d docs(sfia-studio): materialize T-A5 runtime decisions
6a5153a feat(sfia-studio): add T-A5 execution attempt foundation
99b020e test(sfia-studio): validate T-A5 runtime foundation
ddddb66 docs(sfia-studio): document T-A5 runtime foundation delivery
4f227b5 fix(sfia-studio): correct T-A5 runtime foundation defects
2df5226 test(sfia-studio): strengthen T-A5 runtime foundation validation
d477492 docs(sfia-studio): document T-A5 runtime foundation validation
cdae326 docs(sfia-studio): trim trailing whitespace in T-A5 QA validation
84c2c6c docs(sfia-studio): prepare T-A5 PR readiness
184f74d docs(sfia-studio): record T-A5 PR readiness HEAD final
6ddc1c1 docs(sfia-studio): align T-A5 PR readiness HEAD metadata
8a3c05b docs(sfia-studio): freeze T-A5 PR readiness tip metadata
65e5b60 docs(sfia-studio): clarify T-A5 PR readiness HEAD tip reference

```

## Squash recommendation

Conserver les commits (narration). Squash optionnel whitespace/docs noise — **non execute**.

## Final tests (re-run this cycle)

- T-A5: 88 PASS
- Combined T-A3+T-A4+T-A5: 199 PASS
- Modeled: 46 PASS
- tsc PASS ; lint PASS ; next build PASS ; diff-check PASS

## Security

No active child_process/spawn/fetch/axios/http/net/MCP/cursor-sdk/process.env/eval in execution-attempt.

## QA corrections present

- Writer persisted-running verify
- LaunchAck adapterId binding

## Reserves OPEN

B5, R1, R-T-A3-1, R-T-A3-2, R-T-A3-3, R-T-A3-4

## Title PR candidat

feat(sfia-studio): add v3-native T-A5 agent selection and execution foundation

## Corps PR candidat

## Summary

- Add modeled AgentDescriptor 0.1.0-oa and ExecutionAttempt 0.2.0-oa (BREAKING vs 0.1.0-oa) with catalogs, examples, and governance tests.
- Deliver the in-memory T-A5 runtime foundation (`app/lib/oa/execution-attempt/**`): Select/Start/Cancel/Record/Retry/Timeout with TestExecutionAdapter and NoOpExecutionAdapter only.
- Apply independent QA corrections: Contract executing requires a persisted Attempt `running`; LaunchAck `adapterId` must match the injected adapter.

## Scope

- Framing, arbitration, modeled, runtime memory foundation, QA validation, and PR readiness docs for T-A5.
- Reuses T-A3 Confirmation/Authority and T-A4 ExecutionContract public APIs; **no T-A3/T-A4 code changes** in this branch.

## Architecture

- Hexagonal memory-only module: domain / ports / application / infrastructure.
- Shared ExecutionContract repository writes post-start statuses via `ExecutionContractStatusWriter` (T-A4 use-cases still refuse T-A5 statuses).
- Absolute invariant: `ExecutionContract.executing` ⇒ matching Attempt already `running` in the Attempt repository.

## Modeled

- ExecutionAttempt `0.2.0-oa`, AgentDescriptor `0.1.0-oa`.
- Catalogs 07/09/10 updated; valid/invalid examples + narratives; 46 modeled tests PASS.

## Runtime

- Commands: SelectExecutionAgent, StartExecution, CancelExecutionAttempt, RecordExecutionResult/Failure, RetryExecutionAttempt, TriggerAttemptTimeout, Get/List, CheckAttemptAuthorization.
- Immutable injected agent registry; OCC + `activeByContractId` + rebuild/drift fail-closed.
- Factories: `createInMemoryExecutionAttemptServices` / `createTestExecutionAttemptServices` — Test|NoOp adapters only.

## Authority and safety

- Critical Confirmation scope exact `agent_selection` with binding `act:agent_selection:{contractId}:v{version}:{agent}`.
- Consume Confirmation only on successful Start; replay is idempotent.
- Morris emergency requires N3 ∧ `canActAsMorris`; displayName / client authorityLevel ignored.
- Auto-safety = deterministic timeout command only; stale = detect + refuse (no auto-cancel).

## RTA5 / D-T-A5

- D-T-A5-01…10 and RTA5-01…10 implemented and independently QA-validated (see delivery docs 02–09).

## QA corrections (Major, fixed)

1. `ExecutionContractStatusWriter` now verifies persisted Attempt `running` (does not trust caller claim).
2. `StartExecution` fails closed on LaunchAck `adapterId` mismatch.
- Mutation tests documented in `09-runtime-foundation-validation.md`.

## Tests

- T-A5 runtime: **88 PASS**
- Combined T-A3 + T-A4 + T-A5: **199 PASS**
- Modeled Attempt + Contract: **46 PASS**
- `tsc --noEmit` PASS · `next lint` PASS · `next build` PASS · `git diff --check` PASS

## Reservations (OPEN — not closed by this PR)

- B5, R1, R-T-A3-1, R-T-A3-2, R-T-A3-3, R-T-A3-4
- **R-T-A3-1 / R-T-A3-2 remain HARD blockers for any real execution**

## Explicit exclusions

- No real adapter (shell/network/MCP/Cursor), worker, queue, scheduler, SQL, UI, or execution endpoint.
- No package/lockfile changes.
- Memory foundation **does not authorize real execution**.
- Merge is **not** authorized by PR readiness alone — requires a separate Morris GO.

## Review focus

1. RTA5-09 order: accepted → fake launch → Attempt running → Contract executing (+ writer repo check).
2. Adapter factory closure (Test/NoOp only) and LaunchAck identity binding.
3. Confirmation `agent_selection` binding/TTL/consume vs contract Confirm.
4. OCC / activeByContractId / concurrent Start / compensation.
5. Anti-claims: no real execution surface; reserves remain OPEN.

## Anti-claims

- Not production ready · not merge-authorized by this cycle · not Option A complete · no real agent/adapter · no reserve closures.


## Anti-claims

Push projet NON ; PR NON ; merge NON ; execution reelle NON ; adapter reel NON.

## Verdict exact

SFIA STUDIO V3-NATIVE OPTION A T-A5 PR READY — PROJECT PUSH AND PR CREATION REQUIRE MORRIS GO

## Gate suivant (non consomme)

GO PUSH AND CREATE T-A5 PR — SFIA STUDIO V3-NATIVE — OPTION A

## Diff stat (origin/main...HEAD)

```
 .../oa/execution-attempt/attemptRepository.test.ts | 373 +++++++++++
 .../app/__tests__/oa/execution-attempt/helpers.ts  | 548 ++++++++++++++++
 .../execution-attempt/lifecycleFoundation.test.ts  | 615 ++++++++++++++++++
 .../qaAdversarialValidation.test.ts                | 365 +++++++++++
 .../execution-attempt/registryAndAdapters.test.ts  | 267 ++++++++
 .../execution-attempt/application/attemptPolicy.ts |  44 ++
 .../application/attemptSupport.ts                  |  96 +++
 .../application/cancelExecutionAttempt.ts          | 286 +++++++++
 .../application/checkAttemptAuthorization.ts       | 157 +++++
 .../application/executionContractStatusWriter.ts   | 170 +++++
 .../application/getExecutionAttempt.ts             |  47 ++
 .../application/listExecutionAttempts.ts           |  53 ++
 .../application/recordExecutionFailure.ts          | 186 ++++++
 .../application/recordExecutionResult.ts           | 371 +++++++++++
 .../application/retryExecutionAttempt.ts           | 213 +++++++
 .../application/selectExecutionAgent.ts            | 517 +++++++++++++++
 .../application/startExecution.ts                  | 691 +++++++++++++++++++++
 .../application/triggerAttemptTimeout.ts           | 202 ++++++
 .../app/lib/oa/execution-attempt/domain/errors.ts  | 229 +++++++
 .../lib/oa/execution-attempt/domain/invariants.ts  | 659 ++++++++++++++++++++
 .../app/lib/oa/execution-attempt/domain/types.ts   | 400 ++++++++++++
 .../app/lib/oa/execution-attempt/index.ts          | 321 ++++++++++
 .../infrastructure/memoryAgentRegistry.ts          |  60 ++
 .../memoryExecutionAttemptRepository.ts            | 223 +++++++
 .../infrastructure/memoryExecutionAttemptStore.ts  | 107 ++++
 .../infrastructure/noOpExecutionAdapter.ts         |  47 ++
 .../infrastructure/observability.ts                |  28 +
 .../infrastructure/testExecutionAdapter.ts         | 148 +++++
 .../oa/execution-attempt/ports/agentRegistry.ts    |  16 +
 .../oa/execution-attempt/ports/executionAdapter.ts |  81 +++
 .../ports/executionAttemptAudit.ts                 |  53 ++
 .../ports/executionAttemptRepository.ts            |  49 ++
 .../t-a5-agent-selection-execution/01-framing.md   | 555 +++++++++++++++++
 .../02-arbitration.md                              | 493 +++++++++++++++
 .../03-materialization.md                          | 188 ++++++
 .../04-modeled-validation.md                       | 222 +++++++
 .../05-runtime-framing.md                          | 452 ++++++++++++++
 .../06-runtime-arbitration.md                      | 451 ++++++++++++++
 .../07-runtime-arbitrations-materialization.md     | 230 +++++++
 .../08-runtime-foundation-delivery.md              | 197 ++++++
 .../09-runtime-foundation-validation.md            | 143 +++++
 .../10-pr-readiness.md                             | 389 ++++++++++++
 .../t-a5-agent-selection-execution/README.md       |  59 ++
 ...7-execution-contract-attempt-and-agent-model.md | 111 +++-
 ...9-command-event-error-and-transition-catalog.md | 203 ++++--
 ...ion-versioning-provenance-and-security-rules.md |   5 +-
 .../sfia-v3-modeled/v3-native-option-a/README.md   |  10 +-
 .../examples/agent-descriptor.valid.json           |  38 ++
 .../examples/execution-attempt-accepted.valid.json |  28 +
 ...on-attempt-adapter-foreign-attempt.narrative.md |   5 +
 .../execution-attempt-cancelled.valid.json         |  35 ++
 ...execution-attempt-critical-selection.valid.json |  33 +
 .../examples/execution-attempt-failed.valid.json   |  36 ++
 .../execution-attempt-launch-fail.valid.json       |  32 +
 ...empt-launch-then-persist.forbidden.narrative.md |   9 +
 ...n-attempt-morris-displayname-spoof.narrative.md |   9 +
 ...-attempt-n3-without-canActAsMorris.narrative.md |   7 +
 ...ion-attempt-noncritical-capabilities.valid.json |  28 +
 ...result-pending-no-direct-completed.narrative.md |   7 +
 .../execution-attempt-result-pending.valid.json    |  37 ++
 ...ion-attempt-retry-budget-exhausted.narrative.md |   7 +
 .../examples/execution-attempt-retry.valid.json    |  31 +
 .../examples/execution-attempt-running.valid.json  |  31 +
 ...xecution-attempt-selection-expired.narrative.md |   9 +
 .../execution-attempt-succeeded.valid.json         |  38 ++
 .../examples/execution-attempt-timeout.valid.json  |  38 +-
 .../execution-attempt-ttl-expired.narrative.md     |   5 +
 ...n-attempt-wrong-agent-confirmation.narrative.md |   7 +
 ...t-descriptor.additional-properties.invalid.json |  39 ++
 ...attempt.accepted-without-selection.invalid.json |  25 +
 ...tion-attempt.additional-properties.invalid.json |  29 +
 ...ecution-attempt.bad-schema-version.invalid.json |  28 +
 .../execution-attempt.blocked-status.invalid.json  |  28 +
 ...empt.cancelled-without-cancelledAt.invalid.json |  31 +
 ...t.capabilities-on-critical-profile.invalid.json |  28 +
 ...tempt.capabilities-without-profile.invalid.json |  27 +
 ...tion-attempt.critical-capabilities.invalid.json |  28 +
 ...tempt.failed-without-error-or-stop.invalid.json |  31 +
 ...on-attempt.failed-without-failedAt.invalid.json |  32 +
 ....human-confirm-running-without-cnf.invalid.json |  30 +
 .../execution-attempt.legacy-agentRef.invalid.json |  28 +
 ...xecution-attempt.legacy-contractId.invalid.json |  28 +
 ...execution-attempt.missing-required.invalid.json |   5 +
 .../execution-attempt.partial-status.invalid.json  |  25 +
 .../execution-attempt.planned-status.invalid.json  |  28 +
 ...-attempt.result-pending-without-ts.invalid.json |  30 +
 ...ttempt.retry-index-without-retryOf.invalid.json |  30 +
 ...attempt.running-without-launchedAt.invalid.json |  29 +
 .../execution-attempt.starting-status.invalid.json |  28 +
 ...n-attempt.succeeded-without-result.invalid.json |  31 +
 .../execution-attempt.ta6-claimId.invalid.json     |  29 +
 ...attempt.timeout-without-timedOutAt.invalid.json |  31 +
 .../schemas/execution/agent-descriptor.schema.json | 116 ++++
 .../execution/execution-attempt.schema.json        | 474 +++++++++++++-
 .../tests/execution-attempt-governance.test.mjs    | 614 ++++++++++++++++++
 95 files changed, 13588 insertions(+), 94 deletions(-)

```


## Contenu complet — 10-pr-readiness.md

# 10 — T-A5 PR Readiness

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 21:10:22 CEST (+0200) — Europe/Paris |
| **Cycle** | PR readiness (+ QA / archi / sécu / intégration / docs / RUN) |
| **Profil** | Critical |
| **Gate** | `GO PREPARE T-A5 PR READINESS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD initial** | `cdae32684d6d41bd46535fda552b0465399f1b3e` |
| **HEAD final** | branch tip after this readiness pack (authoritative: `git rev-parse HEAD` / handoff) |
| **Merge-base** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Ahead** | 23 commits (after readiness docs) |
| **Branche distante projet** | **ABSENTE** |
| **PR T-A5** | **ABSENTE** |
| **Handoff source** | blob `59d4638783780dd735f353b7fc68684b6d6f26fb` |
| **Statut** | **PR READY** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 PR READY — PROJECT PUSH AND PR CREATION REQUIRE MORRIS GO` |
| **Gate suivant** | `GO PUSH AND CREATE T-A5 PR — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. CKC

| Champ | Valeur |
|-------|--------|
| Cycle | PR readiness |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| executionAuthority | **false** |
| Autorité push/PR/merge | **aucune** |
| Limites | analyse + docs + handoff uniquement |

## 2. Diff summary

| Métrique | Valeur |
|----------|--------|
| Fichiers | **94** (A=88, M=6, D=0) |
| Lignes | **+13197 / −94** |
| Runtime | 27 |
| Tests runtime | 5 |
| Docs T-A5 | 10 (+ `10-pr-readiness.md` ce cycle) |
| Modeled | 52 |
| package/lockfiles | **0** |
| T-A3/T-A4 code | **0** |
| Fichiers étrangers | **0** |

## 3. Inventaire exhaustif

### 3.1 Runtime (`app/lib/oa/execution-attempt/**`) — 27 A

| Statut | Path | Rôle |
|--------|------|------|
| A | `app/lib/oa/execution-attempt/application/attemptPolicy.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/attemptSupport.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/checkAttemptAuthorization.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/getExecutionAttempt.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/listExecutionAttempts.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/recordExecutionFailure.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/recordExecutionResult.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/retryExecutionAttempt.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/selectExecutionAgent.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/startExecution.ts` | Application |
| A | `app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts` | Application |
| A | `app/lib/oa/execution-attempt/domain/errors.ts` | Domaine |
| A | `app/lib/oa/execution-attempt/domain/invariants.ts` | Domaine |
| A | `app/lib/oa/execution-attempt/domain/types.ts` | Domaine |
| A | `app/lib/oa/execution-attempt/index.ts` | Barrel + factories |
| A | `app/lib/oa/execution-attempt/infrastructure/memoryAgentRegistry.ts` | Infrastructure mémoire / adapter |
| A | `app/lib/oa/execution-attempt/infrastructure/memoryExecutionAttemptRepository.ts` | Infrastructure mémoire / adapter |
| A | `app/lib/oa/execution-attempt/infrastructure/memoryExecutionAttemptStore.ts` | Infrastructure mémoire / adapter |
| A | `app/lib/oa/execution-attempt/infrastructure/noOpExecutionAdapter.ts` | Infrastructure mémoire / adapter |
| A | `app/lib/oa/execution-attempt/infrastructure/observability.ts` | Infrastructure mémoire / adapter |
| A | `app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts` | Infrastructure mémoire / adapter |
| A | `app/lib/oa/execution-attempt/ports/agentRegistry.ts` | Port |
| A | `app/lib/oa/execution-attempt/ports/executionAdapter.ts` | Port |
| A | `app/lib/oa/execution-attempt/ports/executionAttemptAudit.ts` | Port |
| A | `app/lib/oa/execution-attempt/ports/executionAttemptRepository.ts` | Port |

### 3.2 Tests runtime — 5 A

| Statut | Path | Rôle |
|--------|------|------|
| A | `app/__tests__/oa/execution-attempt/attemptRepository.test.ts` | Tests repository/OCC |
| A | `app/__tests__/oa/execution-attempt/helpers.ts` | Fixtures stack |
| A | `app/__tests__/oa/execution-attempt/lifecycleFoundation.test.ts` | Tests lifecycle |
| A | `app/__tests__/oa/execution-attempt/qaAdversarialValidation.test.ts` | Tests QA adversariaux |
| A | `app/__tests__/oa/execution-attempt/registryAndAdapters.test.ts` | Tests registry/adapters |

### 3.3 Documentation T-A5 — 10 A

| Statut | Path | Rôle |
|--------|------|------|
| A | `sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/01-framing.md` | Framing |
| A | `sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/02-arbitration.md` | Arbitration D-T-A5 |
| A | `sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/03-materialization.md` | Materialization modeled |
| A | `sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/04-modeled-validation.md` | Modeled validation |
| A | `sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/05-runtime-framing.md` | Runtime framing |
| A | `sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/06-runtime-arbitration.md` | Runtime arbitration RTA5 |
| A | `sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/07-runtime-arbitrations-materialization.md` | RTA5 materialization |
| A | `sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/08-runtime-foundation-delivery.md` | Delivery |
| A | `sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/09-runtime-foundation-validation.md` | QA validation |
| A | `sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/README.md` | Hub T-A5 |

### 3.4 Modeled — 52 (A/M)

| Statut | Path | Rôle |
|--------|------|------|
| A | `sfia-v3-modeled/v3-native-option-a/examples/agent-descriptor.valid.json` | Exemple valide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-accepted.valid.json` | Exemple valide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-adapter-foreign-attempt.narrative.md` | Narrative adversarial modeled |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-cancelled.valid.json` | Exemple valide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-critical-selection.valid.json` | Exemple valide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-failed.valid.json` | Exemple valide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-launch-fail.valid.json` | Exemple valide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-launch-then-persist.forbidden.narrative.md` | Narrative adversarial modeled |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-morris-displayname-spoof.narrative.md` | Narrative adversarial modeled |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-n3-without-canActAsMorris.narrative.md` | Narrative adversarial modeled |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-noncritical-capabilities.valid.json` | Exemple valide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-result-pending-no-direct-completed.narrative.md` | Narrative adversarial modeled |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-result-pending.valid.json` | Exemple valide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-retry-budget-exhausted.narrative.md` | Narrative adversarial modeled |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-retry.valid.json` | Exemple valide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-running.valid.json` | Exemple valide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-selection-expired.narrative.md` | Narrative adversarial modeled |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-succeeded.valid.json` | Exemple valide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-ttl-expired.narrative.md` | Narrative adversarial modeled |
| A | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-wrong-agent-confirmation.narrative.md` | Narrative adversarial modeled |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/agent-descriptor.additional-properties.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.accepted-without-selection.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.additional-properties.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.bad-schema-version.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.blocked-status.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.cancelled-without-cancelledAt.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.capabilities-on-critical-profile.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.capabilities-without-profile.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.critical-capabilities.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.failed-without-error-or-stop.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.failed-without-failedAt.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.human-confirm-running-without-cnf.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.legacy-agentRef.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.legacy-contractId.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.missing-required.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.partial-status.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.planned-status.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.result-pending-without-ts.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.retry-index-without-retryOf.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.running-without-launchedAt.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.starting-status.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.succeeded-without-result.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.ta6-claimId.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.timeout-without-timedOutAt.invalid.json` | Exemple invalide |
| A | `sfia-v3-modeled/v3-native-option-a/schemas/execution/agent-descriptor.schema.json` | Schema modeled |
| A | `sfia-v3-modeled/v3-native-option-a/tests/execution-attempt-governance.test.mjs` | Tests modeled |
| M | `sfia-v3-modeled/v3-native-option-a/07-execution-contract-attempt-and-agent-model.md` | Catalogue / README modeled |
| M | `sfia-v3-modeled/v3-native-option-a/09-command-event-error-and-transition-catalog.md` | Catalogue / README modeled |
| M | `sfia-v3-modeled/v3-native-option-a/10-validation-versioning-provenance-and-security-rules.md` | Catalogue / README modeled |
| M | `sfia-v3-modeled/v3-native-option-a/README.md` | Catalogue / README modeled |
| M | `sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-timeout.valid.json` | Exemple valide |
| M | `sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-attempt.schema.json` | Schema modeled |

**Justification globale :** tout le diff est T-A5 (docs + modeled Attempt/AgentDescriptor + runtime mémoire + tests). Aucune anomalie hors périmètre.

## 4. Analyse des 18 commits

| SHA | Message | Périmètre | Cohérence |
|-----|---------|-----------|-----------|
| `f6cb8f3` | frame T-A5 | docs | OK |
| `57de65f` | prepare arbitration | docs | OK |
| `4254ff2` | materialize Morris D-T-A5 | docs | OK |
| `bfe82c2` | feat modeled Attempt 0.2.0-oa | modeled | OK |
| `de9cc5d` | test modeled governance | modeled tests | OK |
| `6c4f656` | fix modeled governance | modeled | OK (corrigé par suite) |
| `b8b199b` | cover modeled correction | modeled tests | OK |
| `f320208` | document modeled validation | docs | OK |
| `8c70547` | frame runtime | docs | OK |
| `42c4832` | prepare runtime arbitration | docs | OK |
| `64a037d` | materialize RTA5 | docs | OK |
| `6a5153a` | feat execution-attempt foundation | runtime | OK |
| `99b020e` | validate runtime foundation | tests | OK |
| `ddddb66` | document delivery | docs | OK |
| `4f227b5` | fix QA defects | runtime QA | OK (Major) |
| `2df5226` | strengthen QA validation | tests QA | OK |
| `d477492` | document QA validation | docs | OK |
| `cdae326` | trim trailing whitespace | docs noise | OK / bruit mineur |

### Recommandation squash

**Conserver les 18 commits** (narration chronologique framing → modeled → runtime → QA).

Squash optionnel candidat (non exécuté) : fusionner `cdae326` dans `d477492` (whitespace). **Aucun rebase/squash sans GO Morris.**

## 5. Matrice D-T-A5 / RTA5

| ID | Code | Tests | Docs | Statut |
|----|------|-------|------|--------|
| D01 Attempt séparée | module dédié | repo/lifecycle | 02–08 | PASS |
| D02 Critical confirm / non-Critical closed | Select strategies | lifecycle/QA | 02–08 | PASS |
| D03 Select≠Start + TTL | Select/Start | lifecycle | 02–08 | PASS |
| D04 lifecycle + result_pending | domain + Record | lifecycle | 02–08 | PASS |
| D05 persist-then-launch | Start | lifecycle/QA | 02–08 | PASS |
| D06 result_pending | RecordResult | lifecycle | 02–08 | PASS |
| D07 stop + cancel | Cancel | lifecycle | 02–08 | PASS |
| D08 authority matrix | attemptSupport/Cancel | lifecycle/QA | 02–08 | PASS |
| D09 timeout/retry | Timeout/Retry | lifecycle/QA | 02–08 | PASS |
| D10 T-A5 tech / T-A6 Evidence | anti-claims / no Claim | antiLegacy modeled | 02–08 | PASS |
| RTA5-01 Confirmation | invariants + Start | QA | 06–09 | PASS |
| RTA5-02 Repo OCC | Memory repo | attemptRepository | 06–09 | PASS |
| RTA5-03 Adapter Test/NoOp | factories + port | registry/QA | 06–09 | PASS AFTER QA |
| RTA5-04 Select accepted | Select | lifecycle | 06–09 | PASS |
| RTA5-05 active index | repo | attemptRepository/QA | 06–09 | PASS |
| RTA5-06 result_pending | Record | lifecycle | 06–09 | PASS |
| RTA5-07 Timeout | TriggerTimeout | lifecycle | 06–09 | PASS |
| RTA5-08 auto-safety | Timeout only | lifecycle/QA | 06–09 | PASS |
| RTA5-09 séquence | Start + Writer | lifecycle/QA | 06–09 | PASS AFTER QA |
| RTA5-10 factories | index.ts | registry/QA | 06–09 | PASS |

## 6. Corrections QA intégrées

1. **Writer** : `attempts.findById` → status `running` + même `executionContractId` (claim appelant non fiable).
2. **LaunchAck adapterId** : mismatch → fail-closed.
Mutations documentées dans 09 ; présentes dans HEAD.

## 7. Sécurité

Recherche APIs interdites dans runtime/tests : **aucune occurrence active** (seuls commentaires anti-claims mentionnent shell/MCP/Cursor).

Factories : `isInjectableExecutionAdapter` limite Test|NoOp. Registry immutable. Pas de `package.json`/lockfile.

## 8. Tests finaux (réexécutés ce cycle)

| Suite | Résultat |
|-------|----------|
| T-A5 alone | **88 PASS** |
| T-A3+T-A4+T-A5 | **199 PASS** |
| Modeled Attempt+Contract | **46 PASS** |
| `tsc --noEmit` | PASS |
| `next lint` | PASS |
| `next build` | PASS |
| `git diff --check` | PASS |

Aligné avec handoff QA (pas de régression).

## 9. Dette et réserves

| Dette | Gravité | Acceptable PR ? | Traitement futur |
|-------|---------|-----------------|------------------|
| LaunchRequest sans action/target/scope | Minor | Oui | Enrichir si adapter réel (T-A6+) |
| Retry post-Contract `failed` fermé | Minor | Oui | Arbitrage Morris si besoin métier |
| Compensation / result_pending non durables | Known | Oui | R-T-A3-2 HARD |
| Index à reconstruire | Known | Oui | Durabilité future |

| Reserve | Status |
|---------|--------|
| B5 | OPEN |
| R1 | OPEN |
| R-T-A3-1 | OPEN — HARD exec réelle |
| R-T-A3-2 | OPEN — HARD exec réelle |
| R-T-A3-3 | OPEN |
| R-T-A3-4 | OPEN |

**Aucune réserve fermée.**

## 10. Risques review / merge

| Risque | Prob. | Impact | Blocker ? | Mitigation |
|--------|-------|--------|-----------|------------|
| Diff large (+13k / 94 files) | Med | Review cost | Non | Inventaire + review focus |
| 18 commits | Low | Noise | Non | Conserver narration ; squash optionnel docs |
| Modeled+runtime même PR | Med | Scope | Non | Découpé en commits ; docs claires |
| QA corrections tardives | Low | Confiance | Non | Mutations + tests adversariaux |
| Dette retry | Low | Limite | Non | Documentée |
| Non-durabilité mémoire | High (known) | Exec réelle | Non pour fake-only | R-T-A3-2 OPEN |
| Interaction T-A3/T-A4 | Low | Intégration | Non | Aucune modif T-A3/T-A4 code ; 199 tests |

## 11. Titre PR candidat

```
feat(sfia-studio): add v3-native T-A5 agent selection and execution foundation
```

## 12. Corps PR candidat

## Summary

- Add modeled AgentDescriptor 0.1.0-oa and ExecutionAttempt 0.2.0-oa (BREAKING vs 0.1.0-oa) with catalogs, examples, and governance tests.
- Deliver the in-memory T-A5 runtime foundation (`app/lib/oa/execution-attempt/**`): Select/Start/Cancel/Record/Retry/Timeout with TestExecutionAdapter and NoOpExecutionAdapter only.
- Apply independent QA corrections: Contract executing requires a persisted Attempt `running`; LaunchAck `adapterId` must match the injected adapter.

## Scope

- Framing, arbitration, modeled, runtime memory foundation, QA validation, and PR readiness docs for T-A5.
- Reuses T-A3 Confirmation/Authority and T-A4 ExecutionContract public APIs; **no T-A3/T-A4 code changes** in this branch.

## Architecture

- Hexagonal memory-only module: domain / ports / application / infrastructure.
- Shared ExecutionContract repository writes post-start statuses via `ExecutionContractStatusWriter` (T-A4 use-cases still refuse T-A5 statuses).
- Absolute invariant: `ExecutionContract.executing` ⇒ matching Attempt already `running` in the Attempt repository.

## Modeled

- ExecutionAttempt `0.2.0-oa`, AgentDescriptor `0.1.0-oa`.
- Catalogs 07/09/10 updated; valid/invalid examples + narratives; 46 modeled tests PASS.

## Runtime

- Commands: SelectExecutionAgent, StartExecution, CancelExecutionAttempt, RecordExecutionResult/Failure, RetryExecutionAttempt, TriggerAttemptTimeout, Get/List, CheckAttemptAuthorization.
- Immutable injected agent registry; OCC + `activeByContractId` + rebuild/drift fail-closed.
- Factories: `createInMemoryExecutionAttemptServices` / `createTestExecutionAttemptServices` — Test|NoOp adapters only.

## Authority and safety

- Critical Confirmation scope exact `agent_selection` with binding `act:agent_selection:{contractId}:v{version}:{agent}`.
- Consume Confirmation only on successful Start; replay is idempotent.
- Morris emergency requires N3 ∧ `canActAsMorris`; displayName / client authorityLevel ignored.
- Auto-safety = deterministic timeout command only; stale = detect + refuse (no auto-cancel).

## RTA5 / D-T-A5

- D-T-A5-01…10 and RTA5-01…10 implemented and independently QA-validated (see delivery docs 02–09).

## QA corrections (Major, fixed)

1. `ExecutionContractStatusWriter` now verifies persisted Attempt `running` (does not trust caller claim).
2. `StartExecution` fails closed on LaunchAck `adapterId` mismatch.
- Mutation tests documented in `09-runtime-foundation-validation.md`.

## Tests

- T-A5 runtime: **88 PASS**
- Combined T-A3 + T-A4 + T-A5: **199 PASS**
- Modeled Attempt + Contract: **46 PASS**
- `tsc --noEmit` PASS · `next lint` PASS · `next build` PASS · `git diff --check` PASS

## Reservations (OPEN — not closed by this PR)

- B5, R1, R-T-A3-1, R-T-A3-2, R-T-A3-3, R-T-A3-4
- **R-T-A3-1 / R-T-A3-2 remain HARD blockers for any real execution**

## Explicit exclusions

- No real adapter (shell/network/MCP/Cursor), worker, queue, scheduler, SQL, UI, or execution endpoint.
- No package/lockfile changes.
- Memory foundation **does not authorize real execution**.
- Merge is **not** authorized by PR readiness alone — requires a separate Morris GO.

## Review focus

1. RTA5-09 order: accepted → fake launch → Attempt running → Contract executing (+ writer repo check).
2. Adapter factory closure (Test/NoOp only) and LaunchAck identity binding.
3. Confirmation `agent_selection` binding/TTL/consume vs contract Confirm.
4. OCC / activeByContractId / concurrent Start / compensation.
5. Anti-claims: no real execution surface; reserves remain OPEN.

## Anti-claims

- Not production ready · not merge-authorized by this cycle · not Option A complete · no real agent/adapter · no reserve closures.


## 13. Readiness dimensions

| Dimension | Statut |
|-----------|--------|
| scope ready | YES |
| code ready | YES |
| modeled ready | YES |
| tests ready | YES |
| documentation ready | YES |
| security ready | YES |
| reviewability ready | YES (diff large mais inventorié) |
| merge readiness | **NOT automatic** — requires Morris GO after PR review ; reserves OPEN |

## 14. Anti-claims

- Pas de push projet / PR / merge exécutés par ce cycle
- Pas d'exécution réelle / adapter réel
- Pas production ready / Option A complète
- Pas réserves fermées

## 15. Gate suivant

`GO PUSH AND CREATE T-A5 PR — SFIA STUDIO V3-NATIVE — OPTION A` — **NOT consumed**.
Autoriserait push + création PR avec titre/corps ci-dessus. **N'autorise pas le merge.**

## Contenu complet — README T-A5

# T-A5 — Agent Selection and Execution (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A5 — Agent adapter / Attempt / timeout |
| **Titre cycle** | Agent Selection and Execution |
| **Profil** | Critical |
| **Gates framing → QA** | **CONSUMED** |
| **Gate PR readiness** | `GO PREPARE T-A5 PR READINESS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` (T-A4 PR #265 merge) |
| **Runtime** | `app/lib/oa/execution-attempt/**` — mémoire / Test+NoOp only |
| **Modeled** | Attempt `0.2.0-oa` + AgentDescriptor `0.1.0-oa` |
| **Push / PR / merge projet** | **NONE** — require Morris GO |
| **Statut pack** | **PR READY** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 PR READY — PROJECT PUSH AND PR CREATION REQUIRE MORRIS GO` |
| **Gate suivant** | `GO PUSH AND CREATE T-A5 PR — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif

Fondation runtime mémoire T-A5 (Select/Start/Attempt/fake adapters) conforme D-T-A5 et RTA5, livrée, QA-corrigée, et **prête pour autorisation Morris de push + création PR**.

La fondation mémoire **ne constitue pas** une autorisation d’exécution réelle.
Push, PR et merge **nécessitent des gates Morris explicites**.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01](./01-framing.md) … [09-runtime-foundation-validation.md](./09-runtime-foundation-validation.md)
3. [10-pr-readiness.md](./10-pr-readiness.md) — **PR readiness**
4. Code : `projects/sfia-studio/app/lib/oa/execution-attempt/**`
5. Tests : `projects/sfia-studio/app/__tests__/oa/execution-attempt/**` (**88** tests)

## Gates consommés (historique)

- GO FRAME / ARBITRATE / MATERIALIZE T-A5 (modeled + runtime)
- GO VALIDATE T-A5 MODELED
- GO DELIVER T-A5 RUNTIME FOUNDATION
- GO VALIDATE T-A5 RUNTIME FOUNDATION
- **GO PREPARE T-A5 PR READINESS** (ce cycle)

## Réserves (héritées — OPEN)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD exécution réelle Critical) |
| R-T-A3-2 | **OPEN** (HARD exécution réelle) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |

## Anti-claims

- Pas exécution réelle / agent opérationnel réel / adapter réel
- Pas T-A5 production ready / merge authorized par ce cycle
- Pas réserves fermées / Option A complète
- Pas push / PR / merge branche projet (ce cycle)
- Pas shell / réseau / MCP / Cursor / SQL / UI / scheduler réel
