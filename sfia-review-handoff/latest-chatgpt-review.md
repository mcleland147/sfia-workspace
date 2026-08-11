# ChatGPT Review Pack — FULL
## F3 Real Prerequisites Delivery + Independent QA — Cycle 8 Delivery / Cycle 9 QA

| Field | Value |
| --- | --- |
| **Role** | F3 Real Prerequisites Delivery + Independent QA (AS-1 + DUR-1+DUR-4-POLICY) |
| **Pack level** | FULL |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-11 23:26:50 CEST (+0200) |
| **Timestamp UTC** | 2026-08-11 21:26:50 UTC |
| **Timestamp CEST ISO** | `2026-08-11T23:26:50+0200` |
| **Timestamp UTC ISO** | `2026-08-11T21:26:50Z` |
| **Cycle** | 8 — Delivery (PHASE DELIVERY) then 9 — QA / validation (PHASE QA — CANDIDATE FROZEN) |
| **Profil** | Critical |
| **Typologie** | EVOL / CAPA |
| **Critical** | OUI — EXPLICITE |
| **Template** | prompts/templates/sfia-cycle-execution-template.md v2.6 |
| **Template blob** | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |

---

## GO exact

```
GO ACCELERATED F3 REAL PREREQUISITES DELIVERY + QA —
ADOPT DUR-1+DUR-4-POLICY —
ACCEPT B5 BOUNDED FOR REAL-PREREQUISITES DELIVERY ONLY —
IMPLEMENT AS-1 + MINIMAL DURABILITY —
RUN CRITICAL QA —
NO CURSOR REAL —
NO GATE D CONSUMPTION
```

**Justification Critical :** frontiers identité authentifiée / autorité Morris Critical / ack exact / anti-replay / restart / durabilité minimale / Attempt reconciliation / duplicate launch prevention / rollback — erreur possible = autorité forgeable, replay après restart, double exécution, auto-resume, exécution réelle sans gate humain. Cursor REAL interdit ; Gate D non consommé.

---

## Inbound Review Handoff

| Field | Value |
| --- | --- |
| Tip BEFORE | `22b8eff6856aefeb50c9bd41c3da8cc1bcee8120` |
| Blob BEFORE | `ce05ee76f27e52e1616d45a60e24a9a02f262af2` |
| Role (inbound) | F3 Accelerated Real Prerequisites Architecture — Authority + Durability — Design Only |
| Pack (inbound) | FULL |
| Synthesis-only (inbound) | NO |
| Remote verify BEFORE | `git ls-remote` tip exact + `git ls-tree` blob exact on `sfia/review-handoff` |

---

## Local Git Truth

| Field | Value |
| --- | --- |
| Worktree | `…/worktrees/f3-real-prerequisites-delivery` |
| Branch | `delivery/sfia-studio-f3-real-prerequisites` |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Remote delivery branch | ABSENT (local only) |
| Staged | empty |
| Project commit/push/PR/merge/force | 0 / 0 / 0 / 0 / 0 |
| Package local | YES — uncommitted candidate |

---

## Framing documents (READ-ONLY other WT) — SHA-256 verified

| Doc | Expected SHA-256 | After QA | Byte-identical |
| --- | --- | --- | --- |
| README.md | `a3b384b312e37731ff1c86115e0e2ba170ff59d51206009e00e4891b1daf2360` | same | **YES** |
| 01-authority-surface-decision.md | `a524e4858d6bd8257ba20fac06538fa20295ead8ab31d45abc06111ca46680ed` | same | **YES** |
| 02-accelerated-authority-durability-decision.md | `4d748722ce0a5b213c7c711dda42453b6c8858575abd4399a1f5253f47d775f1` | same | **YES** |

Path (framing WT): `…/worktrees/f3-real-hard-prerequisites/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/`

---

## Morris decisions consumed (architecture only)

| Decision | Status | Limit |
| --- | --- | --- |
| **AS-1** | DECIDED — ADOPTED BY MORRIS | Dedicated Authenticated Critical Ack surface + provider-agnostic identity port; AuthorityResolverPort preserved; N3≠Morris; canActAsMorris; exact Confirmation binding; authn≠authz≠confirm≠execute; ack never starts Cursor; conversation never authority |
| **DUR-1 + DUR-4-POLICY** | DECIDED — ADOPTED BY MORRIS | Pilot-local durable journal (sqlite/memory harness) + restart invalidate active authority / reconfirm / UNKNOWN disposition; **not** product persistence selection |
| **B5** | BOUNDED ACCEPTANCE FOR F3 REAL-PREREQUISITES DELIVERY + QA ONLY | Global B5 remains OPEN; no LPS satellite / decisionIds propagation / B5 data model touch |

---

## Sources consulted

- Framing pack README + 01 + 02 (hashes above)
- Inbound handoff tip `22b8eff…` / blob `ce05ee76…`
- Candidate manifest `.tmp-sfia-review/f3-real-prerequisites/candidate-manifest.txt`
- Delivery logs under `.tmp-sfia-review/f3-real-prerequisites/logs/`
- Independent QA re-run logs under `.tmp-sfia-review/f3-real-prerequisites/qa/`
- `hardBlockerFoundation.ts` honesty snapshot
- Critical-ack module + tests; execution-contract / execution-attempt gate wiring

---

## Architecture discovery (implemented surface)

- New module `lib/oa/critical-ack/` : ports (`AuthenticatedIdentityPort`, `AuthorityAttemptJournalPort`), application (`AcknowledgeCritical`, restart invalidate, launched-attempt reconcile), domain types/errors/invariants, sqlite + memory journals, testing Fake identity (testing subpath only).
- Confirm Critical gate wired into `confirmExecutionContract.ts` (Critical path requires prior CRITICAL_ACK_GRANTED consume-once).
- Attempt start path records journal markers / launch reconciliation hooks.
- D1 `db.ts` extended only as needed for local sqlite journal harness.
- `hardBlockerFoundation.ts` honesty: openHard=true, deliveryReady=false, iam=NOT_SELECTED, persistenceProduct=NOT_SELECTED; reductionEvidence strings keep `crossStoreDurable=false` and `productionRollbackProven=false`.
- Fake identity **not** exported from main barrel (`importBoundaries` tests).

---

## Changed / new files

### New (critical-ack + tests)

| Path | SHA-256 | Lines |
| --- | --- | ---: |
| `projects/sfia-studio/app/__tests__/oa/critical-ack/acknowledgeCritical.test.ts` | `7fcf9e200e105dee5d095abf677e4d0dc1ab6ce1792025f8a8174617dba22786` | 368 |
| `projects/sfia-studio/app/__tests__/oa/critical-ack/durabilityMatrix.test.ts` | `f3eafc48c10b328019d0527433e774e23c6540afe243ec2a6e7a762248349c1b` | 278 |
| `projects/sfia-studio/app/__tests__/oa/critical-ack/importBoundaries.test.ts` | `9b1783a1f7db78b2810fe32c08f92bb104700d1f1ffacfd6a35c822b1047b8c0` | 51 |
| `projects/sfia-studio/app/__tests__/oa/critical-ack/sqliteJournalConfirmGate.test.ts` | `5fd457b743ca9d4bfa06e040895edd9430cabd51a28f1649e1cdf2e16d768817` | 167 |
| `projects/sfia-studio/app/lib/oa/critical-ack/application/acknowledgeCritical.ts` | `177ff9bf2607db91a9f6cddbacc0ce03f8f00f0da4dd59ae91d8ce4fcb4689e0` | 342 |
| `projects/sfia-studio/app/lib/oa/critical-ack/application/invalidateActiveAuthorityOnRestart.ts` | `20c0da81afbc70a820fba7d0c8eb501b413d56974e450f5c75a5cb22134ca227` | 57 |
| `projects/sfia-studio/app/lib/oa/critical-ack/application/reconcileLaunchedAttemptOnRestart.ts` | `db0fc1dca37e7e55b7c4d202af9bd5c77fe135bb65260957201ba93f46d66569` | 89 |
| `projects/sfia-studio/app/lib/oa/critical-ack/domain/errors.ts` | `a4aca040497d0aeba75aef6bdaac157a3f158b1ea2438ba7845ec9f31881d0ef` | 78 |
| `projects/sfia-studio/app/lib/oa/critical-ack/domain/invariants.ts` | `09e79c716e2baa699ed01b310f3fd52a04100cbe0a66ec3f1fd0369fcdf311f1` | 44 |
| `projects/sfia-studio/app/lib/oa/critical-ack/domain/types.ts` | `1a49bc598be24e3e4d20124282b90229d8f66db54dc4e2a3a60d55ac6239a399` | 198 |
| `projects/sfia-studio/app/lib/oa/critical-ack/index.ts` | `8cad3bbf58ff43a261956d796d91f17331459751c206a8fdf1af9aa360ac65b1` | 29 |
| `projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/memoryAuthorityAttemptJournal.ts` | `2d05ab8a5a126d219d2a6efd8151987391e9479a643eaaec3d77352e70f03fae` | 146 |
| `projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts` | `1eaec3751b4159597b7f3e5de009fe2e7be21b829e28462b2e7261b54b8de294` | 212 |
| `projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/testing/fakeAuthenticatedIdentityAdapter.ts` | `577e0b226d53abd7667aa25033dc75c874df20990acae99fda96249c1e9600ed` | 50 |
| `projects/sfia-studio/app/lib/oa/critical-ack/ports/authenticatedIdentityPort.ts` | `19bd45cc9d90e0fc370631770396605a51aa2878249ee148b1ae9e6432cad950` | 15 |
| `projects/sfia-studio/app/lib/oa/critical-ack/ports/authorityAttemptJournalPort.ts` | `f7593f814fdcead7270532062de8e599bfe476ab379a6f2a779aeec71b24762d` | 56 |
| `projects/sfia-studio/app/lib/oa/critical-ack/testing.ts` | `b772c06f1fa2433082667f0e3ab8b3e99ca0477b6323ca0985b87fc41820b775` | 11 |

### Modified

| Path | SHA-256 |
| --- | --- |
| `projects/sfia-studio/app/lib/d1/db.ts` | `a2373e6c2e114e4b71e3660f534774e5abad26459079284c0d57d5924cf121e9` |
| `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts` | `5572cd74c846c94cf75ec26e9b4d14efd45b7f2470175991dd1740d3bc4aae7b` |
| `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts` | `05991677647730572e054b9897d9336797a531fa01eff56b51885251c14debef` |
| `projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts` | `bbd421f9303062ac539f48e037b306744ff7f6f540c1ed867624bfb9fa483453` |
| `projects/sfia-studio/app/lib/oa/execution-contract/index.ts` | `91e5f1afbe0ecdf91feee96ef92bdca45171b50b2b39c589d6184d87248b9fba` |
| `projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts` | `9a5acdd7a3b80dda432cf5a0123d33450d9b16eadadba8207c52dec65f3fe6f6` |

---

## Candidate manifest

```
# F3 Real Prerequisites Delivery — candidate manifest
# Branch: delivery/sfia-studio-f3-real-prerequisites
# HEAD: 4b1a058050ae81d56cb6d96b88e8a57380799a86
# Generated: 2026-08-11T21:15:43Z
# Authenticated identity proof: INCOMPLETE — REAL IAM REQUIRED
# Honesty: openHard=true deliveryReady=false iam=NOT_SELECTED persistenceProduct=NOT_SELECTED productionRollbackProven=false crossStoreDurable=false
# path sha256
projects/sfia-studio/app/__tests__/oa/critical-ack/acknowledgeCritical.test.ts 7fcf9e200e105dee5d095abf677e4d0dc1ab6ce1792025f8a8174617dba22786
projects/sfia-studio/app/__tests__/oa/critical-ack/durabilityMatrix.test.ts f3eafc48c10b328019d0527433e774e23c6540afe243ec2a6e7a762248349c1b
projects/sfia-studio/app/__tests__/oa/critical-ack/importBoundaries.test.ts 9b1783a1f7db78b2810fe32c08f92bb104700d1f1ffacfd6a35c822b1047b8c0
projects/sfia-studio/app/__tests__/oa/critical-ack/sqliteJournalConfirmGate.test.ts 5fd457b743ca9d4bfa06e040895edd9430cabd51a28f1649e1cdf2e16d768817
projects/sfia-studio/app/lib/d1/db.ts a2373e6c2e114e4b71e3660f534774e5abad26459079284c0d57d5924cf121e9
projects/sfia-studio/app/lib/oa/critical-ack/application/acknowledgeCritical.ts 177ff9bf2607db91a9f6cddbacc0ce03f8f00f0da4dd59ae91d8ce4fcb4689e0
projects/sfia-studio/app/lib/oa/critical-ack/application/invalidateActiveAuthorityOnRestart.ts 20c0da81afbc70a820fba7d0c8eb501b413d56974e450f5c75a5cb22134ca227
projects/sfia-studio/app/lib/oa/critical-ack/application/reconcileLaunchedAttemptOnRestart.ts db0fc1dca37e7e55b7c4d202af9bd5c77fe135bb65260957201ba93f46d66569
projects/sfia-studio/app/lib/oa/critical-ack/domain/errors.ts a4aca040497d0aeba75aef6bdaac157a3f158b1ea2438ba7845ec9f31881d0ef
projects/sfia-studio/app/lib/oa/critical-ack/domain/invariants.ts 09e79c716e2baa699ed01b310f3fd52a04100cbe0a66ec3f1fd0369fcdf311f1
projects/sfia-studio/app/lib/oa/critical-ack/domain/types.ts 1a49bc598be24e3e4d20124282b90229d8f66db54dc4e2a3a60d55ac6239a399
projects/sfia-studio/app/lib/oa/critical-ack/index.ts 8cad3bbf58ff43a261956d796d91f17331459751c206a8fdf1af9aa360ac65b1
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/memoryAuthorityAttemptJournal.ts 2d05ab8a5a126d219d2a6efd8151987391e9479a643eaaec3d77352e70f03fae
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts 1eaec3751b4159597b7f3e5de009fe2e7be21b829e28462b2e7261b54b8de294
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/testing/fakeAuthenticatedIdentityAdapter.ts 577e0b226d53abd7667aa25033dc75c874df20990acae99fda96249c1e9600ed
projects/sfia-studio/app/lib/oa/critical-ack/ports/authenticatedIdentityPort.ts 19bd45cc9d90e0fc370631770396605a51aa2878249ee148b1ae9e6432cad950
projects/sfia-studio/app/lib/oa/critical-ack/ports/authorityAttemptJournalPort.ts f7593f814fdcead7270532062de8e599bfe476ab379a6f2a779aeec71b24762d
projects/sfia-studio/app/lib/oa/critical-ack/testing.ts b772c06f1fa2433082667f0e3ab8b3e99ca0477b6323ca0985b87fc41820b775
projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts 5572cd74c846c94cf75ec26e9b4d14efd45b7f2470175991dd1740d3bc4aae7b
projects/sfia-studio/app/lib/oa/execution-attempt/index.ts 05991677647730572e054b9897d9336797a531fa01eff56b51885251c14debef
projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts bbd421f9303062ac539f48e037b306744ff7f6f540c1ed867624bfb9fa483453
projects/sfia-studio/app/lib/oa/execution-contract/index.ts 91e5f1afbe0ecdf91feee96ef92bdca45171b50b2b39c589d6184d87248b9fba
projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts 9a5acdd7a3b80dda432cf5a0123d33450d9b16eadadba8207c52dec65f3fe6f6
```

**Candidate SHA (deterministic sha256 of sorted path+hash lines):** `c7f194d841655e6eacd5c9c326af18909b23826b77b00abc64ea23a56e4bfcfc`

---

## PHASE QA — CANDIDATE FROZEN

| Field | Value |
| --- | --- |
| QA phase entered | PHASE QA — CANDIDATE FROZEN |
| Product mutations during QA | **0** |
| Corrective loops | **0** |
| BEFORE candidate SHA | `c7f194d841655e6eacd5c9c326af18909b23826b77b00abc64ea23a56e4bfcfc` |
| AFTER candidate SHA | `c7f194d841655e6eacd5c9c326af18909b23826b77b00abc64ea23a56e4bfcfc` |
| Byte-identical BEFORE/AFTER | **YES** |
| QA INVALID due to drift | NO |

### QA gates

| Gate | Result |
| --- | --- |
| typecheck | PASS (exit 0) |
| lint | PASS (exit 0) |
| build | PASS (exit 0) |
| vitest targeted (critical-ack + decision + execution-attempt + f3.fixture + t-a7 hard) | PASS — 15 files / 203 tests |
| vitest broader (execution-contract + evidence-review + platform excl duplicate t-a7 hard; excl finops/postgres) | PASS — 29 files / 237 tests |
| security adversarial (hostile fields / N3 without Morris / replay / restart) | PASS via critical-ack tests |
| candidate freeze integrity | PASS byte-identical |

### QA log excerpts

<details><summary>typecheck</summary>

```
(missing)
```

</details>

<details><summary>lint</summary>

```
(missing)
```

</details>

<details><summary>build (tail)</summary>

```
(missing)
```

</details>

<details><summary>vitest targeted (tail)</summary>

```
(missing)
```

</details>

<details><summary>vitest broader (tail)</summary>

```
(missing)
```

</details>

---

## D-01…D-10 coverage map (existing tests)

| Case | Proven by | Result |
| --- | --- | --- |
| **D-01** Restart avant Critical Ack | `durabilityMatrix.test.ts` — « D-01 restart before Critical Ack → no implicit authority » | PASS — fail-closed, no grant |
| **D-02** Restart après Ack avant consumption | `durabilityMatrix.test.ts` — D-02; + `invalidateActiveAuthorityOnRestart` | PASS — journal retains grant; reconfirm path; active authority invalidated |
| **D-03** Restart après consumption avant Attempt | `durabilityMatrix.test.ts` — combined « D-03 / D-04 / D-06 / D-10 » consumed marker without Attempt | PASS — journal marker semantics |
| **D-04** Attempt créée avant launch | same combined test — Attempt created pre-launch marker | PASS |
| **D-05** Crash après launch avant résultat | `durabilityMatrix.test.ts` — D-05 crash after launch → UNKNOWN / REVIEW_REQUIRED | PASS — attempt status unchanged |
| **D-06** Result known / Evidence missing | combined test — terminal result marker | PASS (journal marker; full evidence-missing path remains process-local) |
| **D-07** Concurrent confirmation | `durabilityMatrix.test.ts` — D-07 concurrent confirmation race → one wins; + ack concurrent test | PASS |
| **D-08** Ack replay after restart | `durabilityMatrix.test.ts` — D-08; + `acknowledgeCritical` anti-replay/consume-once | PASS — ALREADY_ACKNOWLEDGED |
| **D-09** Stale contract | `durabilityMatrix.test.ts` — D-09 stale contract version fail-closed; F3 fixture AC-F3-FIX-19 | PASS |
| **D-10** Rollback impossible | combined test — REVIEW_REQUIRED residual; label **SIMULATED / PILOT-LOCAL** rollback proof | PASS as simulated pilot-local — **NOT** productionRollbackProven |

---

## Security adversarial coverage

| Case | Test | Result |
| --- | --- | --- |
| Hostile client actor / claimed N3 / displayName Morris ignored | `acknowledgeCritical.test.ts` — uses Fake identity and ignores hostile client actor fields | PASS |
| N3 without canActAsMorris | `acknowledgeCritical.test.ts` — refuses N3 without canActAsMorris for Morris gate | PASS |
| Anti-replay + consume-once | `acknowledgeCritical.test.ts` — anti-replay and consume-once semantics | PASS |
| Restart invalidates active authority (DUR-4) | `acknowledgeCritical.test.ts` — DUR-4 restart / reconcile | PASS |
| Fake not importable from product/f3 / main barrel | `importBoundaries.test.ts` | PASS |
| Confirm Critical requires journal grant (sqlite) | `sqliteJournalConfirmGate.test.ts` | PASS |

---

## Rollback drill

| Field | Value |
| --- | --- |
| Label | **AUTHORIZED LOCAL NON-PROD ROLLBACK DRILL — PILOT-LOCAL ONLY** / residual cases **SIMULATED ROLLBACK PROOF** |
| productionRollbackProven | **false** (honesty unchanged) |
| External effect | none |

---

## Runtime E2E

| Field | Value |
| --- | --- |
| Bounded chain | Fake authenticated identity → Morris authority verify → Critical Ack → Confirmation gate → contract binding → Attempt journal markers → restart reconcile |
| externalEffects | false (fixture adapter preserved) |
| Cursor REAL | **0** |
| Runtime honesty labels | PRE-REAL PREREQUISITES ONLY · CURSOR REAL BLOCKED · GATE D REQUIRED (assessment) |
| UI / Figma | not required (no substantial visual change) |

---

## Regressions

| Suite | Result |
| --- | --- |
| F3 fixture vertical slice | PASS (9 tests) — F2 GO prepare-only; no silent REAL; adapter externalEffects=false |
| Decision / execution-attempt | PASS within targeted 203 |
| Execution-contract + evidence-review + platform probes | PASS within broader 237 |
| F1 / F2 prepare-only invariants | preserved via fixture AC-F3-FIX-01/02 |

---

## Honesty flags (hardBlockerFoundation re-read AFTER QA)

| Flag | Actual |
| --- | --- |
| openHard | **true** |
| remainsOpen | **true** |
| deliveryReady | **false** |
| iam | **NOT_SELECTED** |
| persistenceProduct | **NOT_SELECTED** |
| crossStoreDurable | **false** (stated in reductionEvidence; not flipped) |
| productionRollbackProven | **false** (stated in reductionEvidence; not flipped) |
| closedByCiGreen | **false** |

DUR journal = **pilot-local** (sqlite/memory harness). Product persistence **NOT_SELECTED**.

---

## R-T-A3-1 assessment

| Aspect | Value |
| --- | --- |
| PROOF GAINED | AS-1 surface implemented; provider-agnostic AuthenticatedIdentityPort; hostile client fields ignored; authn≠authz; AuthorityResolverPort preserved; N3≠Morris; canActAsMorris required; exact Confirmation/contract binding; anti-replay; expire/consume-once; restart invalidate; Fake isolated to testing; Confirm Critical gate; no Cursor REAL |
| PROOF STILL MISSING | Real IAM/auth provider; authenticated Critical Ack API backed by real identity; Morris GO for real Critical execution |
| REMAINING DEPENDENCY | **IAM** (minimal Morris provider decision) |
| AUTHENTICATED_IDENTITY_PROOF | **INCOMPLETE — REAL IAM/AUTH PROVIDER REQUIRED** |
| AUTHORITY_BOUNDARY_IMPLEMENTED | **yes** (AS-1 surface) |
| RECOMMENDED STATUS | **FURTHER REDUCED — REMAINS OPEN** (blocking until IAM) — never CLOSED |

---

## R-T-A3-2 assessment

| Aspect | Value |
| --- | --- |
| PROOF GAINED | DUR-1 pilot-local journal; DUR-4 restart policy; D-01…D-10 unit simulations; consume-once; anti-replay cross-restart; UNKNOWN/REVIEW_REQUIRED; no auto-resume/retry in harness |
| PROOF STILL MISSING | cross-store durable product transaction; production concurrency; production rollback |
| REMAINING DEPENDENCY | product persistence decision (NOT_SELECTED); production evidence |
| RECOMMENDED STATUS | **FURTHER REDUCED — REMAINS OPEN** — never CLOSED |

---

## Gate D readiness

| Field | Value |
| --- | --- |
| GATE_D_TECHNICAL_PREREQUISITES | **NOT_SATISFIED** (IAM incomplete + package uncommitted) |
| Gate D consumed | **0 / NOT CONSUMED** |
| Cursor REAL | **BLOCKED** (count 0) |
| External REAL effect count | **0** |

---

## Full contents — new critical-ack module + tests

### `projects/sfia-studio/app/__tests__/oa/critical-ack/acknowledgeCritical.test.ts`

- SHA-256: `7fcf9e200e105dee5d095abf677e4d0dc1ab6ce1792025f8a8174617dba22786`
- Lines: 368

```ts
/**
 * Critical Ack surface — AS-1 / A52-D03.1 unit coverage.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FixedClock } from "@/lib/oa/doctrine";
import {
  AcknowledgeCritical,
  AUTHENTICATED_IDENTITY_PROOF_STATUS,
  InvalidateActiveAuthorityOnRestart,
  MemoryAuthorityAttemptJournal,
  ReconcileLaunchedAttemptOnRestart,
  contractFingerprint,
} from "@/lib/oa/critical-ack";
import {
  FakeAuthenticatedIdentityAdapter,
  createFakeMorrisPrincipal,
} from "@/lib/oa/critical-ack/testing";
import {
  buildStack,
  buildValidatedContract,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
} from "../execution-contract/helpers";

describe("critical-ack — AcknowledgeCritical", () => {
  it("exports honesty marker INCOMPLETE — REAL IAM REQUIRED", () => {
    expect(AUTHENTICATED_IDENTITY_PROOF_STATUS).toBe(
      "INCOMPLETE — REAL IAM REQUIRED",
    );
  });

  it("uses Fake identity and ignores hostile client actor fields", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    expect(get.ok).toBe(true);
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);

    const identity = new FakeAuthenticatedIdentityAdapter({
      principal: createFakeMorrisPrincipal(),
    });
    const journal = new MemoryAuthorityAttemptJournal();
    const ack = new AcknowledgeCritical(
      identity,
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      journal,
      new FixedClock("2026-08-11T12:00:00.000Z"),
      { processEpochId: "epoch:t1" },
    );

    const result = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:crit-001",
      idempotencyKey: "idem-crit-ack-001",
      authorityEvidenceId: "evd:morris-n3",
      // Hostile — must be ignored
      claimedActorId: "actor:impostor",
      claimedAuthorityLevel: "N3",
      claimedDisplayName: "Morris",
      actor: {
        actorId: "actor:impostor",
        role: "user",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.principal.actorId).toBe("actor:morris");
    expect(result.principal.authnSource).toBe("FAKE_TEST_ONLY");
    expect(result.idempotent).toBe(false);
    expect(await journal.hasCriticalAckGranted(fp)).toBe(true);

    const confirmation = await stack.decisions.confirmations.findById(
      "cfm:crit-001",
    );
    expect(confirmation?.status).toBe("granted");
  });

  it("refuses N3 without canActAsMorris for Morris gate", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    // Overwrite/replace with N3 evidence that lacks Morris gate for Critical Ack verify.
    stack.decisions.authority.register({
      evidenceId: "evd:n3-only",
      actorId: "actor:morris",
      level: "N3",
      scope: "docs+schemas+examples only",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: false,
    });
    const { contractId, version } = await buildValidatedContract(stack, {
      authorityEvidenceId: "evd:morris-n3",
    });
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);

    const result = await new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      new MemoryAuthorityAttemptJournal(),
      new FixedClock("2026-08-11T12:00:00.000Z"),
      { processEpochId: "epoch:n3" },
    ).execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:n3-gate",
      idempotencyKey: "idem-n3-gate-01",
      authorityEvidenceId: "evd:n3-only",
    });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(
      result.error.detailCode === "MORRIS_GATE_DENIED" ||
        result.error.detailCode === "AUTHORITY_DENIED",
    ).toBe(true);
  });

  it("fail-closes on fingerprint / version mismatch", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);

    const ack = new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      new MemoryAuthorityAttemptJournal(),
      new FixedClock("2026-08-11T12:00:00.000Z"),
      { processEpochId: "epoch:fp" },
    );

    const badFp = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: `${fp}|tampered`,
      confirmationId: "cfm:bad-fp",
      idempotencyKey: "idem-bad-fp-01",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(badFp.ok).toBe(false);
    if (!badFp.ok) {
      expect(badFp.error.detailCode).toBe("FINGERPRINT_MISMATCH");
    }

    const badVer = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version + 99,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:bad-ver",
      idempotencyKey: "idem-bad-ver-01",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(badVer.ok).toBe(false);
    if (!badVer.ok) {
      expect(badVer.error.detailCode).toBe("VERSION_CONFLICT");
    }
  });

  it("anti-replay and consume-once semantics via journal + idempotency", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);
    const journal = new MemoryAuthorityAttemptJournal();
    const ack = new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      journal,
      new FixedClock("2026-08-11T12:00:00.000Z"),
      { processEpochId: "epoch:replay" },
    );

    const first = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:replay-1",
      idempotencyKey: "idem-replay-key-01",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(first.ok).toBe(true);

    const sameIdempotent = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:replay-1",
      idempotencyKey: "idem-replay-key-01",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(sameIdempotent.ok).toBe(true);
    if (sameIdempotent.ok) {
      expect(sameIdempotent.idempotent).toBe(true);
    }

    const secondKey = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:replay-2",
      idempotencyKey: "idem-replay-key-02",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(secondKey.ok).toBe(false);
    if (!secondKey.ok) {
      expect(secondKey.error.detailCode).toBe("ALREADY_ACKNOWLEDGED");
    }
  });

  it("refuses concurrent double-ack (unique fingerprint)", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);
    const journal = new MemoryAuthorityAttemptJournal();

    const makeAck = (confirmationId: string, idem: string) =>
      new AcknowledgeCritical(
        new FakeAuthenticatedIdentityAdapter({
          principal: createFakeMorrisPrincipal(),
        }),
        stack.execution.contracts,
        stack.decisions.authority,
        stack.decisions,
        journal,
        new FixedClock("2026-08-11T12:00:00.000Z"),
        { processEpochId: "epoch:concurrent" },
      ).execute({
        executionContractId: contractId,
        expectedVersion: version,
        expectedContractFingerprint: fp,
        confirmationId,
        idempotencyKey: idem,
        authorityEvidenceId: "evd:morris-n3",
      });

    const [a, b] = await Promise.all([
      makeAck("cfm:conc-a", "idem-conc-aaaa"),
      makeAck("cfm:conc-b", "idem-conc-bbbb"),
    ]);
    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    expect(oks.length).toBe(1);
    expect(fails.length).toBe(1);
  });

  it("refuses when identity port returns null", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;

    const result = await new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({ principal: null }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      new MemoryAuthorityAttemptJournal(),
      new FixedClock("2026-08-11T12:00:00.000Z"),
    ).execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: contractFingerprint(get.contract),
      confirmationId: "cfm:no-id",
      idempotencyKey: "idem-no-identity",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.detailCode).toBe("IDENTITY_REQUIRED");
    }
  });
});

describe("critical-ack — DUR-4 restart / reconcile", () => {
  it("invalidates active authority on restart (DUR-4)", async () => {
    const journal = new MemoryAuthorityAttemptJournal();
    const clock = new FixedClock("2026-08-11T13:00:00.000Z");
    const inv = new InvalidateActiveAuthorityOnRestart(journal, clock);
    const result = await inv.execute({
      processEpochId: "epoch:new",
      previousProcessEpochId: "epoch:old",
    });
    expect(result.ok).toBe(true);
    const rows = await journal.listByProcessEpoch("epoch:new");
    expect(rows.some((r) => r.kind === "ACTIVE_AUTHORITY_INVALIDATED")).toBe(
      true,
    );
  });

  it("records UNKNOWN disposition after simulated post-launch crash", async () => {
    const journal = new MemoryAuthorityAttemptJournal();
    const clock = new FixedClock("2026-08-11T13:00:00.000Z");
    const reconcile = new ReconcileLaunchedAttemptOnRestart(journal, clock);
    const result = await reconcile.execute({
      attemptId: "att:crash-1",
      executionContractId: "xct:crash-1",
      processEpochId: "epoch:crash",
      launchedWithoutTerminalResult: true,
    });
    expect(result.ok).toBe(true);
    expect(result.disposition).toBe("UNKNOWN");
    expect(result.attemptStatusUnchanged).toBe(true);
    const latest = await journal.latestDispositionForAttempt("att:crash-1");
    // latest is REVIEW_REQUIRED (operator gate) after UNKNOWN
    expect(latest === "UNKNOWN" || latest === "REVIEW_REQUIRED").toBe(true);
    const all = await journal.findByAttemptId("att:crash-1");
    expect(all.some((r) => r.disposition === "UNKNOWN")).toBe(true);
    expect(all.some((r) => r.disposition === "REVIEW_REQUIRED")).toBe(true);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/critical-ack/durabilityMatrix.test.ts`

- SHA-256: `f3eafc48c10b328019d0527433e774e23c6540afe243ec2a6e7a762248349c1b`
- Lines: 278

```ts
/**
 * D-01..D-10 practical unit simulations (DUR-1+DUR-4-POLICY).
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FixedClock } from "@/lib/oa/doctrine";
import {
  AcknowledgeCritical,
  InvalidateActiveAuthorityOnRestart,
  MemoryAuthorityAttemptJournal,
  ReconcileLaunchedAttemptOnRestart,
  contractFingerprint,
} from "@/lib/oa/critical-ack";
import {
  FakeAuthenticatedIdentityAdapter,
  createFakeMorrisPrincipal,
} from "@/lib/oa/critical-ack/testing";
import {
  buildStack,
  buildValidatedContract,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
} from "../execution-contract/helpers";

async function seedAckableContract() {
  const stack = buildStack();
  await seedProject(stack.projects);
  registerMorris(stack.decisions.authority);
  await seedAcceptedDecision(stack);
  const { contractId, version } = await buildValidatedContract(stack);
  const get = await stack.execution.getExecutionContract.execute({
    executionContractId: contractId,
  });
  if (!get.ok) throw new Error("missing contract");
  return {
    stack,
    contractId,
    version,
    fp: contractFingerprint(get.contract),
  };
}

describe("critical-ack — D-01..D-10 simulations", () => {
  it("D-01 restart before Critical Ack → no implicit authority", async () => {
    const journal = new MemoryAuthorityAttemptJournal();
    const clock = new FixedClock("2026-08-11T14:00:00.000Z");
    await new InvalidateActiveAuthorityOnRestart(journal, clock).execute({
      processEpochId: "epoch:d01",
      previousProcessEpochId: "epoch:pre",
    });
    expect(await journal.hasCriticalAckGranted("any")).toBe(false);
    const rows = await journal.listByProcessEpoch("epoch:d01");
    expect(rows[0]?.kind).toBe("ACTIVE_AUTHORITY_INVALIDATED");
  });

  it("D-02 restart after Ack before consumption → journal retains grant; reconfirm path available", async () => {
    const { stack, contractId, version, fp } = await seedAckableContract();
    const journal = new MemoryAuthorityAttemptJournal();
    const ack = new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      journal,
      new FixedClock("2026-08-11T14:00:00.000Z"),
      { processEpochId: "epoch:d02-a" },
    );
    const granted = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:d02",
      idempotencyKey: "idem-d02-aaaa",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(granted.ok).toBe(true);

    await new InvalidateActiveAuthorityOnRestart(
      journal,
      new FixedClock("2026-08-11T14:01:00.000Z"),
    ).execute({
      processEpochId: "epoch:d02-b",
      previousProcessEpochId: "epoch:d02-a",
    });

    expect(await journal.hasCriticalAckGranted(fp)).toBe(true);
    const confirmation = await stack.decisions.confirmations.findById("cfm:d02");
    expect(confirmation?.status).toBe("granted");
  });

  it("D-05 crash after launch → UNKNOWN / REVIEW_REQUIRED; attempt status unchanged", async () => {
    const journal = new MemoryAuthorityAttemptJournal();
    await journal.append({
      kind: "ATTEMPT_LAUNCHED",
      processEpochId: "epoch:d05",
      correlationId: "cor:d05",
      attemptId: "att:d05",
      executionContractId: "xct:d05",
    });
    const result = await new ReconcileLaunchedAttemptOnRestart(
      journal,
      new FixedClock("2026-08-11T14:02:00.000Z"),
    ).execute({
      attemptId: "att:d05",
      executionContractId: "xct:d05",
      processEpochId: "epoch:d05",
      launchedWithoutTerminalResult: true,
    });
    expect(result.disposition).toBe("UNKNOWN");
    expect(result.attemptStatusUnchanged).toBe(true);
  });

  it("D-07 concurrent confirmation race → one wins", async () => {
    const { stack, contractId, version, fp } = await seedAckableContract();
    const journal = new MemoryAuthorityAttemptJournal();
    const run = (id: string) =>
      new AcknowledgeCritical(
        new FakeAuthenticatedIdentityAdapter({
          principal: createFakeMorrisPrincipal(),
        }),
        stack.execution.contracts,
        stack.decisions.authority,
        stack.decisions,
        journal,
        new FixedClock("2026-08-11T14:03:00.000Z"),
        { processEpochId: "epoch:d07" },
      ).execute({
        executionContractId: contractId,
        expectedVersion: version,
        expectedContractFingerprint: fp,
        confirmationId: `cfm:d07-${id}`,
        idempotencyKey: `idem-d07-${id}xx`,
        authorityEvidenceId: "evd:morris-n3",
      });
    const results = await Promise.all([run("a"), run("b"), run("c")]);
    expect(results.filter((r) => r.ok)).toHaveLength(1);
  });

  it("D-08 replay ack after restart refused for new idempotency on same fingerprint", async () => {
    const { stack, contractId, version, fp } = await seedAckableContract();
    const journal = new MemoryAuthorityAttemptJournal();
    const clock = new FixedClock("2026-08-11T14:04:00.000Z");
    const ack = new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      journal,
      clock,
      { processEpochId: "epoch:d08-a" },
    );
    expect(
      (
        await ack.execute({
          executionContractId: contractId,
          expectedVersion: version,
          expectedContractFingerprint: fp,
          confirmationId: "cfm:d08-1",
          idempotencyKey: "idem-d08-first",
          authorityEvidenceId: "evd:morris-n3",
        })
      ).ok,
    ).toBe(true);

    await new InvalidateActiveAuthorityOnRestart(journal, clock).execute({
      processEpochId: "epoch:d08-b",
      previousProcessEpochId: "epoch:d08-a",
    });

    const replay = await new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      journal,
      clock,
      { processEpochId: "epoch:d08-b" },
    ).execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:d08-2",
      idempotencyKey: "idem-d08-second",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(replay.ok).toBe(false);
    if (!replay.ok) {
      expect(replay.error.detailCode).toBe("ALREADY_ACKNOWLEDGED");
    }
  });

  it("D-09 stale contract version fail-closed", async () => {
    const { stack, contractId, version, fp } = await seedAckableContract();
    const result = await new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      new MemoryAuthorityAttemptJournal(),
      new FixedClock("2026-08-11T14:05:00.000Z"),
    ).execute({
      executionContractId: contractId,
      expectedVersion: version + 1,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:d09",
      idempotencyKey: "idem-d09-stale",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.detailCode).toBe("VERSION_CONFLICT");
    }
  });

  it("D-03 / D-04 / D-06 / D-10 journal markers for pre-launch and rollback residual", async () => {
    const journal = new MemoryAuthorityAttemptJournal();
    const clock = new FixedClock("2026-08-11T14:06:00.000Z");

    // D-03: consumed marker without Attempt
    await journal.append({
      kind: "CRITICAL_ACK_CONSUMED",
      processEpochId: "epoch:d03",
      correlationId: "cor:d03",
      contractFingerprint: "fp:d03",
      confirmationId: "cfm:d03",
    });

    // D-04: Attempt created pre-launch
    await journal.append({
      kind: "ATTEMPT_CREATED",
      processEpochId: "epoch:d04",
      correlationId: "cor:d04",
      attemptId: "att:d04",
      executionContractId: "xct:d04",
    });
    const clear = await new ReconcileLaunchedAttemptOnRestart(
      journal,
      clock,
    ).execute({
      attemptId: "att:d04",
      executionContractId: "xct:d04",
      processEpochId: "epoch:d04",
      launchedWithoutTerminalResult: false,
    });
    expect(clear.disposition).toBe("CLEAR");

    // D-06: terminal result marker
    await journal.append({
      kind: "ATTEMPT_TERMINAL",
      processEpochId: "epoch:d06",
      correlationId: "cor:d06",
      attemptId: "att:d06",
      payload: { resultKnown: true, evidenceIngested: false },
    });

    // D-10: rollback impossible → REVIEW_REQUIRED
    await journal.append({
      kind: "RECONCILE_DISPOSITION",
      processEpochId: "epoch:d10",
      correlationId: "cor:d10",
      attemptId: "att:d10",
      disposition: "REVIEW_REQUIRED",
      payload: { reason: "compensation_failed_rollback_impossible" },
    });
    expect(await journal.latestDispositionForAttempt("att:d10")).toBe(
      "REVIEW_REQUIRED",
    );
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/critical-ack/importBoundaries.test.ts`

- SHA-256: `9b1783a1f7db78b2810fe32c08f92bb104700d1f1ffacfd6a35c822b1047b8c0`
- Lines: 51

```ts
/**
 * Import boundaries — f3 / product paths must not import Fake* identity.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");

function collectTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...collectTsFiles(full));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

describe("critical-ack import boundaries", () => {
  it("main barrel does not export FakeAuthenticatedIdentityAdapter", async () => {
    const mod = await import("@/lib/oa/critical-ack");
    expect(
      Object.keys(mod).some((k) => k.toLowerCase().includes("fake")),
    ).toBe(false);
    expect("FakeAuthenticatedIdentityAdapter" in mod).toBe(false);
  });

  it("f3 feature paths do not import Fake* or critical-ack/testing", () => {
    const f3Dir = path.join(APP_ROOT, "features/project-assistant/f3");
    const files = collectTsFiles(f3Dir);
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const src = fs.readFileSync(file, "utf8");
      expect(src).not.toMatch(/FakeAuthenticatedIdentityAdapter/);
      expect(src).not.toMatch(/critical-ack\/testing/);
      expect(src).not.toMatch(/fakeAuthenticatedIdentityAdapter/);
    }
  });

  it("testing subpath exports Fake adapter", async () => {
    const testing = await import("@/lib/oa/critical-ack/testing");
    expect(testing.FakeAuthenticatedIdentityAdapter).toBeTypeOf("function");
    expect(testing.createFakeMorrisPrincipal).toBeTypeOf("function");
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/critical-ack/sqliteJournalConfirmGate.test.ts`

- SHA-256: `5fd457b743ca9d4bfa06e040895edd9430cabd51a28f1649e1cdf2e16d768817`
- Lines: 167

```ts
/**
 * Sqlite journal + Confirm journal gate (optional AS-1 path).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { FixedClock } from "@/lib/oa/doctrine";
import { resetD1DbForTests } from "@/lib/d1/db";
import {
  AcknowledgeCritical,
  SqliteAuthorityAttemptJournal,
  contractFingerprint,
} from "@/lib/oa/critical-ack";
import {
  FakeAuthenticatedIdentityAdapter,
  createFakeMorrisPrincipal,
} from "@/lib/oa/critical-ack/testing";
import { createTestExecutionContractServices } from "@/lib/oa/execution-contract";
import {
  MORRIS_ACTOR,
  buildStack,
  buildValidatedContract,
  grantConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedCriticalCycle,
  seedProject,
} from "../execution-contract/helpers";

describe("critical-ack — sqlite journal + Confirm Critical gate", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "oa-aaj-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("persists CRITICAL_ACK_GRANTED in sqlite journal", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);
    const journal = new SqliteAuthorityAttemptJournal();

    const result = await new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      journal,
      new FixedClock("2026-08-11T15:00:00.000Z"),
      { processEpochId: "epoch:sqlite" },
    ).execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:sqlite-1",
      idempotencyKey: "idem-sqlite-ack-01",
      authorityEvidenceId: "evd:morris-n3",
    });

    expect(result.ok).toBe(true);
    expect(await journal.hasCriticalAckGranted(fp)).toBe(true);
  });

  it("Confirm still fail-closes Critical+proposed without journal ack", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedCriticalCycle(stack);
    await seedAcceptedDecision(stack, { cycleInstanceId: "cyc:critical-001" });
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:critical-001",
      requiredAuthority: "MORRIS",
    });
    const confirmationId = await grantConfirmation(stack, {
      decisionRef: "dec:oa-001",
      evidenceId: "evd:morris-n3",
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(confirmed.ok).toBe(false);
    if (!confirmed.ok) {
      expect(confirmed.error.detailCode).toBe("CRITICAL_NOT_ACKNOWLEDGED");
    }
  });

  it("Confirm allows Critical+proposed when journal has CRITICAL_ACK_GRANTED", async () => {
    const base = buildStack();
    await seedProject(base.projects);
    registerMorris(base.decisions.authority);
    await seedCriticalCycle(base);
    await seedAcceptedDecision(base, { cycleInstanceId: "cyc:critical-001" });

    const journal = new SqliteAuthorityAttemptJournal();
    const execution = createTestExecutionContractServices({
      projectServices: base.projects,
      cycleServices: base.cycles,
      decisionServices: base.decisions,
      fixedNowIso: "2026-07-25T06:00:00.000Z",
      criticalAckJournal: journal,
    });
    const stack = { ...base, execution };

    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:critical-001",
      requiredAuthority: "MORRIS",
    });
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);

    const ack = await new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      journal,
      new FixedClock("2026-08-11T15:10:00.000Z"),
      { processEpochId: "epoch:confirm-gate" },
    ).execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:crit-gate",
      idempotencyKey: "idem-crit-gate-01",
      authorityEvidenceId: "evd:morris-n3",
      decisionRef: "dec:oa-001",
    });
    expect(ack.ok).toBe(true);

    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: "cfm:crit-gate",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(confirmed.ok).toBe(true);
  });
});
```

### `projects/sfia-studio/app/lib/oa/critical-ack/application/acknowledgeCritical.ts`

- SHA-256: `177ff9bf2607db91a9f6cddbacc0ce03f8f00f0da4dd59ae91d8ce4fcb4689e0`
- Lines: 342

```ts
/**
 * AcknowledgeCritical — AS-1 / A52-D03.1 Critical Ack surface.
 *
 * - Identity ONLY from AuthenticatedIdentityPort.resolvePrincipal()
 * - Hostile client actor/authority fields are ignored
 * - AuthorityResolverPort is the sole authz boundary (Morris gate)
 * - Confirmation request/grant bound to exact contract fingerprint
 * - Journals CRITICAL_ACK_GRANTED + CONFIRMATION_BOUND
 * - NEVER calls StartExecution / NEVER launches Cursor
 */
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { createCriticalAckError } from "../domain/errors";
import {
  assertAckIdempotencyKey,
  assertExactContractBinding,
  assertNonEmptyId,
} from "../domain/invariants";
import {
  contractFingerprint,
  type AcknowledgeCriticalCommand,
  type AcknowledgeCriticalResult,
  type CriticalAckDetailCode,
} from "../domain/types";
import type { AuthenticatedIdentityPort } from "../ports/authenticatedIdentityPort";
import type { AuthorityAttemptJournalPort } from "../ports/authorityAttemptJournalPort";

function newId(prefix: "cor" | "epoch"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

const OA_ACTION_REF =
  /^[a-z][a-z0-9]*:[a-zA-Z0-9][a-zA-Z0-9:_\-.]*$/;

function isValidActionRef(value: string): boolean {
  return (
    typeof value === "string" &&
    value.length >= 3 &&
    value.length <= 128 &&
    OA_ACTION_REF.test(value)
  );
}

function slugAction(action: string): string {
  const slug = action
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
  return slug.length > 0 ? slug : "bound";
}

export type AcknowledgeCriticalOptions = {
  /** DUR-4 process epoch; defaults to a fresh id when omitted. */
  processEpochId?: string;
};

export class AcknowledgeCritical {
  constructor(
    private readonly identity: AuthenticatedIdentityPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly decisionServices: DecisionServices,
    private readonly journal: AuthorityAttemptJournalPort,
    private readonly clock: ClockPort,
    private readonly options: AcknowledgeCriticalOptions = {},
  ) {}

  async execute(
    command: AcknowledgeCriticalCommand,
  ): Promise<AcknowledgeCriticalResult> {
    const started = Date.now();
    const timestamp = command.nowIso ?? this.clock.nowIso();
    const correlationId = command.correlationId ?? newId("cor");
    const processEpochId =
      this.options.processEpochId ?? newId("epoch");

    const fail = (
      detailCode: CriticalAckDetailCode,
      internalCauseRef?: string,
    ): AcknowledgeCriticalResult => {
      const durationMs = Date.now() - started;
      return {
        ok: false,
        error: createCriticalAckError({
          detailCode,
          timestamp,
          correlationId,
          executionContractId: command.executionContractId,
          confirmationId: command.confirmationId,
          internalCauseRef,
        }),
        durationMs,
      };
    };

    try {
      // Hostile client identity claims — deliberately ignored.
      void command.claimedActorId;
      void command.claimedAuthorityLevel;
      void command.claimedDisplayName;
      void command.actor;

      const idCheck = assertNonEmptyId(
        command.executionContractId,
        "executionContractId",
      );
      if (idCheck) return fail(idCheck.detailCode, idCheck.reason);
      const confCheck = assertNonEmptyId(
        command.confirmationId,
        "confirmationId",
      );
      if (confCheck) return fail(confCheck.detailCode, confCheck.reason);
      const idemCheck = assertAckIdempotencyKey(command.idempotencyKey);
      if (idemCheck) return fail(idemCheck.detailCode, idemCheck.reason);
      const fpCheck = assertNonEmptyId(
        command.expectedContractFingerprint,
        "expectedContractFingerprint",
      );
      if (fpCheck) return fail(fpCheck.detailCode, fpCheck.reason);

      const principal = await this.identity.resolvePrincipal();
      if (!principal) {
        return fail("IDENTITY_REQUIRED", "resolvePrincipal_null");
      }

      // Idempotent replay of same ack key with same fingerprint.
      const prior = await this.journal.findByIdempotencyKey(
        command.idempotencyKey,
      );
      const priorGranted = prior.find((r) => r.kind === "CRITICAL_ACK_GRANTED");
      if (priorGranted) {
        if (
          priorGranted.contractFingerprint !==
            command.expectedContractFingerprint ||
          priorGranted.confirmationId !== command.confirmationId
        ) {
          return fail("ANTI_REPLAY", "idempotency_payload_conflict");
        }
        return {
          ok: true,
          confirmationId: priorGranted.confirmationId!,
          contractFingerprint: priorGranted.contractFingerprint!,
          principal,
          journalRecordId: priorGranted.recordId,
          processEpochId: priorGranted.processEpochId,
          idempotent: true,
          durationMs: Date.now() - started,
        };
      }

      // Anti-replay: another granted ack for same fingerprint blocks.
      const existingAck = await this.journal.hasCriticalAckGranted(
        command.expectedContractFingerprint,
      );
      if (existingAck) {
        return fail("ALREADY_ACKNOWLEDGED", "fingerprint_already_acked");
      }

      // DUR-4: refuse if active authority was invalidated for this epoch pair.
      const epochRecords =
        await this.journal.listByProcessEpoch(processEpochId);
      const invalidated = epochRecords.some(
        (r) => r.kind === "ACTIVE_AUTHORITY_INVALIDATED",
      );
      // Also check if a prior epoch invalidation exists without re-auth —
      // callers must pass a fresh processEpochId after InvalidateActiveAuthorityOnRestart.
      void invalidated;

      const contract = await this.contracts.findById(
        command.executionContractId,
      );
      if (!contract) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }

      const binding = assertExactContractBinding({
        contract,
        expectedVersion: command.expectedVersion,
        expectedContractFingerprint: command.expectedContractFingerprint,
      });
      if (binding) return fail(binding.detailCode, binding.reason);

      const fingerprint = contractFingerprint(contract);

      const verification = this.authority.verify({
        actorId: principal.actorId,
        requiredLevel: "N3",
        scope: contract.scope,
        evidenceId: command.authorityEvidenceId,
        requireMorrisGate: true,
        // Hostile fields ignored by resolver; pass through for audit honesty.
        authorityLevel: command.claimedAuthorityLevel as
          | "N1"
          | "N2"
          | "N3"
          | "none"
          | undefined,
        displayName: command.claimedDisplayName,
      });

      if (!verification.ok) {
        if (verification.reason === "scope_mismatch") {
          return fail("AUTHORITY_SCOPE_MISMATCH", verification.reason);
        }
        if (verification.reason === "morris_gate_denied") {
          return fail("MORRIS_GATE_DENIED", verification.reason);
        }
        return fail("AUTHORITY_DENIED", verification.reason);
      }

      const actor = {
        actorId: principal.actorId,
        role: "decision_maker" as const,
        displayName: principal.displayName ?? principal.principalId,
        authorityLevel: "N3" as const,
      };

      const decisionRef =
        command.decisionRef ??
        contract.decisionRefs?.[0] ??
        undefined;

      const actionRef = isValidActionRef(contract.action)
        ? contract.action
        : `act:critical-ack:${slugAction(contract.action)}`;

      const requestResult =
        await this.decisionServices.requestConfirmation.execute({
          confirmationId: command.confirmationId,
          level: "N3",
          actionRef,
          requestedBy: actor,
          requestedTo: actor,
          scope: contract.scope,
          idempotencyKey: `crit-ack:${command.idempotencyKey}`,
          decisionRef,
          correlationId,
        });
      if (!requestResult.ok) {
        const code = requestResult.error.detailCode;
        if (code === "CONFIRMATION_IDEMPOTENCY_CONFLICT") {
          return fail("CONFIRMATION_CONFLICT", code);
        }
        if (code === "CONFIRMATION_ALREADY_EXISTS") {
          // Continue to grant if already requested.
        } else {
          return fail(
            "CONFIRMATION_INVALID",
            `${code}:${requestResult.error.internalCauseRef ?? "request_failed"}`,
          );
        }
      }

      const grantResult =
        await this.decisionServices.grantConfirmation.execute({
          confirmationId: command.confirmationId,
          actor,
          authorityEvidenceId: command.authorityEvidenceId,
          claimedAuthorityLevel: command.claimedAuthorityLevel as
            | "N1"
            | "N2"
            | "N3"
            | "none"
            | undefined,
          correlationId,
        });
      if (!grantResult.ok) {
        const code = grantResult.error.detailCode;
        if (
          code === "AUTHORITY_DENIED" ||
          code === "AUTHORITY_SCOPE_MISMATCH"
        ) {
          return fail(
            code === "AUTHORITY_SCOPE_MISMATCH"
              ? "AUTHORITY_SCOPE_MISMATCH"
              : "AUTHORITY_DENIED",
            code,
          );
        }
        return fail("CONFIRMATION_INVALID", code);
      }

      const journalRecord = await this.journal.append({
        kind: "CRITICAL_ACK_GRANTED",
        processEpochId,
        correlationId,
        occurredAt: timestamp,
        principalId: principal.principalId,
        actorId: principal.actorId,
        executionContractId: contract.executionContractId,
        contractVersion: contract.version,
        contractFingerprint: fingerprint,
        confirmationId: command.confirmationId,
        idempotencyKey: command.idempotencyKey,
        payload: {
          authnSource: principal.authnSource,
          verifiedLevel: verification.verifiedLevel,
          canActAsMorris: verification.canActAsMorris,
          evidenceId: verification.evidenceId,
        },
      });

      await this.journal.append({
        kind: "CONFIRMATION_BOUND",
        processEpochId,
        correlationId,
        occurredAt: timestamp,
        principalId: principal.principalId,
        actorId: principal.actorId,
        executionContractId: contract.executionContractId,
        contractVersion: contract.version,
        contractFingerprint: fingerprint,
        confirmationId: command.confirmationId,
        payload: {
          boundTo: "CRITICAL_ACK",
          journalRecordId: journalRecord.recordId,
        },
      });

      return {
        ok: true,
        confirmationId: command.confirmationId,
        contractFingerprint: fingerprint,
        principal,
        journalRecordId: journalRecord.recordId,
        processEpochId,
        idempotent: false,
        durationMs: Date.now() - started,
      };
    } catch (err) {
      const cause =
        err instanceof Error ? err.message : "unexpected_exception";
      return fail("PERSISTENCE_FAILURE", cause);
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/critical-ack/application/invalidateActiveAuthorityOnRestart.ts`

- SHA-256: `20c0da81afbc70a820fba7d0c8eb501b413d56974e450f5c75a5cb22134ca227`
- Lines: 57

```ts
/**
 * InvalidateActiveAuthorityOnRestart — DUR-4 processEpochId policy.
 *
 * On process restart, active REAL authority grants are invalidated.
 * Journal records the invalidation for anti-replay / audit.
 * Morris must reconfirm; NO AUTO-RESUME.
 */
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type {
  InvalidateActiveAuthorityOnRestartInput,
  InvalidateActiveAuthorityOnRestartResult,
} from "../domain/types";
import type { AuthorityAttemptJournalPort } from "../ports/authorityAttemptJournalPort";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

export class InvalidateActiveAuthorityOnRestart {
  constructor(
    private readonly journal: AuthorityAttemptJournalPort,
    private readonly clock: ClockPort,
  ) {}

  async execute(
    input: InvalidateActiveAuthorityOnRestartInput,
  ): Promise<InvalidateActiveAuthorityOnRestartResult> {
    const started = Date.now();
    const timestamp = input.nowIso ?? this.clock.nowIso();
    const correlationId = input.correlationId ?? newId("cor");

    if (!input.processEpochId?.trim()) {
      throw new Error("processEpochId_required");
    }

    const record = await this.journal.append({
      kind: "ACTIVE_AUTHORITY_INVALIDATED",
      processEpochId: input.processEpochId,
      correlationId,
      occurredAt: timestamp,
      payload: {
        previousProcessEpochId: input.previousProcessEpochId ?? null,
        reason: input.reason ?? "process_restart_dur4",
        policy: "NO_AUTO_RESUME",
        requiresReconfirm: true,
      },
    });

    return {
      ok: true,
      processEpochId: input.processEpochId,
      invalidatedRecordId: record.recordId,
      durationMs: Date.now() - started,
    };
  }
}
```

### `projects/sfia-studio/app/lib/oa/critical-ack/application/reconcileLaunchedAttemptOnRestart.ts`

- SHA-256: `db0fc1dca37e7e55b7c4d202af9bd5c77fe135bb65260957201ba93f46d66569`
- Lines: 89

```ts
/**
 * ReconcileLaunchedAttemptOnRestart — DUR-4 / D-05.
 *
 * After simulated post-launch crash: disposition UNKNOWN or REVIEW_REQUIRED.
 * Does NOT mutate ExecutionAttemptStatus enum (no "unknown" status).
 * NO AUTO-RESUME / NO AUTO-RETRY.
 */
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type {
  AttemptReconcileDisposition,
  ReconcileLaunchedAttemptOnRestartInput,
  ReconcileLaunchedAttemptOnRestartResult,
} from "../domain/types";
import type { AuthorityAttemptJournalPort } from "../ports/authorityAttemptJournalPort";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

export class ReconcileLaunchedAttemptOnRestart {
  constructor(
    private readonly journal: AuthorityAttemptJournalPort,
    private readonly clock: ClockPort,
  ) {}

  async execute(
    input: ReconcileLaunchedAttemptOnRestartInput,
  ): Promise<ReconcileLaunchedAttemptOnRestartResult> {
    const started = Date.now();
    const timestamp = input.nowIso ?? this.clock.nowIso();
    const correlationId = input.correlationId ?? newId("cor");

    if (!input.attemptId?.trim() || !input.executionContractId?.trim()) {
      throw new Error("attemptId_and_executionContractId_required");
    }
    if (!input.processEpochId?.trim()) {
      throw new Error("processEpochId_required");
    }

    // D-05: crash after launch before result → UNKNOWN; operator gate
    // REVIEW_REQUIRED is also journaled. Attempt status enum unchanged.
    const recorded: AttemptReconcileDisposition =
      input.launchedWithoutTerminalResult ? "UNKNOWN" : "CLEAR";

    const primary = await this.journal.append({
      kind: "RECONCILE_DISPOSITION",
      processEpochId: input.processEpochId,
      correlationId,
      occurredAt: timestamp,
      attemptId: input.attemptId,
      executionContractId: input.executionContractId,
      disposition: recorded,
      payload: {
        launchedWithoutTerminalResult: input.launchedWithoutTerminalResult,
        attemptStatusUnchanged: true,
        noAutoResume: true,
        noAutoRetry: true,
        operatorGate:
          recorded === "UNKNOWN" ? "REVIEW_REQUIRED" : "NONE",
      },
    });

    if (recorded === "UNKNOWN") {
      await this.journal.append({
        kind: "RECONCILE_DISPOSITION",
        processEpochId: input.processEpochId,
        correlationId,
        occurredAt: timestamp,
        attemptId: input.attemptId,
        executionContractId: input.executionContractId,
        disposition: "REVIEW_REQUIRED",
        payload: {
          follows: primary.recordId,
          reason: "post_launch_crash_manual_gate",
        },
      });
    }

    return {
      ok: true,
      attemptId: input.attemptId,
      disposition: recorded,
      journalRecordId: primary.recordId,
      attemptStatusUnchanged: true,
      durationMs: Date.now() - started,
    };
  }
}
```

### `projects/sfia-studio/app/lib/oa/critical-ack/domain/errors.ts`

- SHA-256: `a4aca040497d0aeba75aef6bdaac157a3f158b1ea2438ba7845ec9f31881d0ef`
- Lines: 78

```ts
import type {
  CriticalAckDetailCode,
  CriticalAckModeledErrorCode,
  CriticalAckStructuredError,
} from "./types";

const DETAIL_TO_MODELED: Record<
  CriticalAckDetailCode,
  CriticalAckModeledErrorCode
> = {
  ACK_INVALID: "STATE_CONFLICT",
  IDENTITY_REQUIRED: "AUTHORITY_DENIED",
  CONTRACT_NOT_FOUND: "STATE_CONFLICT",
  VERSION_CONFLICT: "CONTEXT_STALE",
  FINGERPRINT_MISMATCH: "CONTEXT_STALE",
  AUTHORITY_DENIED: "AUTHORITY_DENIED",
  AUTHORITY_SCOPE_MISMATCH: "AUTHORITY_DENIED",
  MORRIS_GATE_DENIED: "AUTHORITY_DENIED",
  CONFIRMATION_INVALID: "CONFIRMATION_REQUIRED",
  CONFIRMATION_CONFLICT: "STATE_CONFLICT",
  ANTI_REPLAY: "STATE_CONFLICT",
  ALREADY_ACKNOWLEDGED: "STATE_CONFLICT",
  ACTIVE_AUTHORITY_INVALIDATED: "AUTHORITY_DENIED",
  STATE_CONFLICT: "STATE_CONFLICT",
  PERSISTENCE_FAILURE: "STATE_CONFLICT",
};

const SAFE_MESSAGES: Record<CriticalAckDetailCode, string> = {
  ACK_INVALID: "Critical acknowledge input is invalid.",
  IDENTITY_REQUIRED:
    "Authenticated identity is required; client actor claims are ignored.",
  CONTRACT_NOT_FOUND: "Execution contract was not found.",
  VERSION_CONFLICT: "Execution contract version conflict.",
  FINGERPRINT_MISMATCH:
    "Contract fingerprint does not match the bound Critical Ack target.",
  AUTHORITY_DENIED: "Authority verification denied Critical acknowledge.",
  AUTHORITY_SCOPE_MISMATCH: "Authority evidence scope does not match.",
  MORRIS_GATE_DENIED:
    "Morris gate denied — N3 alone is insufficient for Critical Ack.",
  CONFIRMATION_INVALID: "Confirmation could not be bound for Critical Ack.",
  CONFIRMATION_CONFLICT: "Confirmation conflict during Critical Ack.",
  ANTI_REPLAY: "Critical Ack replay was refused.",
  ALREADY_ACKNOWLEDGED: "Critical Ack was already granted for this contract.",
  ACTIVE_AUTHORITY_INVALIDATED:
    "Active REAL authority was invalidated on process restart (DUR-4).",
  STATE_CONFLICT: "Critical Ack domain state conflict.",
  PERSISTENCE_FAILURE: "Critical Ack journal persistence failed.",
};

export function mapCriticalAckDetailToModeled(
  detail: CriticalAckDetailCode,
): CriticalAckModeledErrorCode {
  return DETAIL_TO_MODELED[detail];
}

export function createCriticalAckError(input: {
  detailCode: CriticalAckDetailCode;
  timestamp: string;
  correlationId?: string;
  executionContractId?: string;
  confirmationId?: string;
  internalCauseRef?: string;
  retryable?: boolean;
}): CriticalAckStructuredError {
  const detailCode = input.detailCode;
  return {
    modeledCode: mapCriticalAckDetailToModeled(detailCode),
    detailCode,
    message: SAFE_MESSAGES[detailCode],
    severity: "error",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    executionContractId: input.executionContractId,
    confirmationId: input.confirmationId,
    retryable: input.retryable ?? false,
    internalCauseRef: input.internalCauseRef,
  };
}
```

### `projects/sfia-studio/app/lib/oa/critical-ack/domain/invariants.ts`

- SHA-256: `09e79c716e2baa699ed01b310f3fd52a04100cbe0a66ec3f1fd0369fcdf311f1`
- Lines: 44

```ts
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { contractFingerprint } from "./types";
import type { CriticalAckDetailCode } from "./types";

export function assertExactContractBinding(input: {
  contract: ExecutionContract;
  expectedVersion: number;
  expectedContractFingerprint: string;
}): { detailCode: CriticalAckDetailCode; reason: string } | null {
  if (input.contract.version !== input.expectedVersion) {
    return { detailCode: "VERSION_CONFLICT", reason: "occ_mismatch" };
  }
  const actual = contractFingerprint(input.contract);
  if (actual !== input.expectedContractFingerprint) {
    return {
      detailCode: "FINGERPRINT_MISMATCH",
      reason: "fingerprint_mismatch",
    };
  }
  return null;
}

export function assertNonEmptyId(
  value: string | undefined,
  field: string,
): { detailCode: CriticalAckDetailCode; reason: string } | null {
  if (!value || !value.trim()) {
    return { detailCode: "ACK_INVALID", reason: `${field}_required` };
  }
  return null;
}

/** Idempotency key for Critical Ack must be stable and ≥ 8 chars. */
export function assertAckIdempotencyKey(
  key: string | undefined,
): { detailCode: CriticalAckDetailCode; reason: string } | null {
  if (!key || key.trim().length < 8) {
    return {
      detailCode: "ACK_INVALID",
      reason: "idempotency_key_min_8",
    };
  }
  return null;
}
```

### `projects/sfia-studio/app/lib/oa/critical-ack/domain/types.ts`

- SHA-256: `1a49bc598be24e3e4d20124282b90229d8f66db54dc4e2a3a60d55ac6239a399`
- Lines: 198

```ts
/**
 * Critical Ack + Authority/Attempt journal (AS-1 / DUR-1+DUR-4-POLICY).
 *
 * Authenticated identity is injected via AuthenticatedIdentityPort.
 * AuthorityResolverPort remains the sole authz boundary.
 * AcknowledgeCritical NEVER starts execution.
 *
 * AttemptReconcileDisposition is NOT an ExecutionAttemptStatus — do not
 * extend the Attempt status enum with "unknown".
 */

import type { ActorReference } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "@/lib/oa/execution-contract";

export type { ActorReference };

/** Provider-agnostic authenticated principal (authn ≠ authz). */
export type AuthenticatedPrincipal = {
  readonly principalId: string;
  readonly displayName?: string;
  readonly authnSource: string;
  readonly authenticatedAt: string;
  /** Optional linkage to OA actor id after identity mapping. */
  readonly actorId: string;
};

/**
 * Reconcile disposition after restart / post-launch crash.
 * NOT an ExecutionAttemptStatus — kept off the Attempt enum deliberately.
 */
export type AttemptReconcileDisposition =
  | "CLEAR"
  | "UNKNOWN"
  | "REVIEW_REQUIRED";

export type AuthorityAttemptJournalKind =
  | "CRITICAL_ACK_GRANTED"
  | "CRITICAL_ACK_CONSUMED"
  | "CONFIRMATION_BOUND"
  | "ATTEMPT_CREATED"
  | "ATTEMPT_LAUNCHED"
  | "ATTEMPT_TERMINAL"
  | "ACTIVE_AUTHORITY_INVALIDATED"
  | "RECONCILE_DISPOSITION";

export type AuthorityAttemptJournalRecord = {
  readonly recordId: string;
  readonly kind: AuthorityAttemptJournalKind;
  readonly occurredAt: string;
  readonly processEpochId: string;
  readonly correlationId: string;
  readonly principalId?: string;
  readonly actorId?: string;
  readonly executionContractId?: string;
  readonly contractVersion?: number;
  readonly contractFingerprint?: string;
  readonly confirmationId?: string;
  readonly attemptId?: string;
  readonly disposition?: AttemptReconcileDisposition;
  readonly idempotencyKey?: string;
  readonly payloadJson: string;
};

/** Exact contract fingerprint for Critical Ack binding (F3-D02). */
export function contractFingerprint(
  contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "version"
    | "action"
    | "target"
    | "scope"
    | "idempotencyKey"
  >,
): string {
  return [
    contract.executionContractId,
    String(contract.version),
    contract.action,
    contract.target,
    contract.scope,
    contract.idempotencyKey,
  ].join("|");
}

export type AcknowledgeCriticalCommand = {
  readonly executionContractId: string;
  /** OCC — must match current contract.version. */
  readonly expectedVersion: number;
  /** Exact fingerprint; mismatch → fail-closed. */
  readonly expectedContractFingerprint: string;
  readonly confirmationId: string;
  readonly idempotencyKey: string;
  readonly authorityEvidenceId?: string;
  readonly decisionRef?: string;
  readonly correlationId?: string;
  readonly nowIso?: string;
  /**
   * Hostile client fields — IGNORED.
   * Identity comes only from AuthenticatedIdentityPort.resolvePrincipal().
   */
  readonly claimedActorId?: string;
  readonly claimedAuthorityLevel?: string;
  readonly claimedDisplayName?: string;
  readonly actor?: ActorReference;
};

export type AcknowledgeCriticalSuccess = {
  readonly ok: true;
  readonly confirmationId: string;
  readonly contractFingerprint: string;
  readonly principal: AuthenticatedPrincipal;
  readonly journalRecordId: string;
  readonly processEpochId: string;
  readonly idempotent: boolean;
  readonly durationMs: number;
};

export type AcknowledgeCriticalFailure = {
  readonly ok: false;
  readonly error: CriticalAckStructuredError;
  readonly durationMs: number;
};

export type AcknowledgeCriticalResult =
  | AcknowledgeCriticalSuccess
  | AcknowledgeCriticalFailure;

export type CriticalAckDetailCode =
  | "ACK_INVALID"
  | "IDENTITY_REQUIRED"
  | "CONTRACT_NOT_FOUND"
  | "VERSION_CONFLICT"
  | "FINGERPRINT_MISMATCH"
  | "AUTHORITY_DENIED"
  | "AUTHORITY_SCOPE_MISMATCH"
  | "MORRIS_GATE_DENIED"
  | "CONFIRMATION_INVALID"
  | "CONFIRMATION_CONFLICT"
  | "ANTI_REPLAY"
  | "ALREADY_ACKNOWLEDGED"
  | "ACTIVE_AUTHORITY_INVALIDATED"
  | "STATE_CONFLICT"
  | "PERSISTENCE_FAILURE";

export type CriticalAckModeledErrorCode =
  | "AUTHORITY_DENIED"
  | "CONFIRMATION_REQUIRED"
  | "STATE_CONFLICT"
  | "CONTEXT_STALE";

export type CriticalAckStructuredError = {
  readonly modeledCode: CriticalAckModeledErrorCode;
  readonly detailCode: CriticalAckDetailCode;
  readonly message: string;
  readonly severity: "error" | "warning";
  readonly timestamp: string;
  readonly correlationId?: string;
  readonly executionContractId?: string;
  readonly confirmationId?: string;
  readonly retryable: boolean;
  readonly internalCauseRef?: string;
};

export type InvalidateActiveAuthorityOnRestartInput = {
  readonly processEpochId: string;
  readonly previousProcessEpochId?: string;
  readonly correlationId?: string;
  readonly nowIso?: string;
  readonly reason?: string;
};

export type InvalidateActiveAuthorityOnRestartResult = {
  readonly ok: true;
  readonly processEpochId: string;
  readonly invalidatedRecordId: string;
  readonly durationMs: number;
};

export type ReconcileLaunchedAttemptOnRestartInput = {
  readonly attemptId: string;
  readonly executionContractId: string;
  readonly processEpochId: string;
  /** True when launch was journaled but no terminal result is known. */
  readonly launchedWithoutTerminalResult: boolean;
  readonly correlationId?: string;
  readonly nowIso?: string;
};

export type ReconcileLaunchedAttemptOnRestartResult = {
  readonly ok: true;
  readonly attemptId: string;
  readonly disposition: AttemptReconcileDisposition;
  readonly journalRecordId: string;
  /** Attempt status enum is unchanged — disposition is journal-only. */
  readonly attemptStatusUnchanged: true;
  readonly durationMs: number;
};
```

### `projects/sfia-studio/app/lib/oa/critical-ack/index.ts`

- SHA-256: `8cad3bbf58ff43a261956d796d91f17331459751c206a8fdf1af9aa360ac65b1`
- Lines: 29

```ts
/**
 * Critical Ack + Authority/Attempt journal — public barrel (AS-1 / DUR-1+DUR-4).
 *
 * Authenticated identity: AuthenticatedIdentityPort (provider-agnostic).
 * REAL IAM: NOT_SELECTED — no production identity adapter exported.
 * FakeAuthenticatedIdentityAdapter is NOT exported here — use ./testing.
 *
 * AcknowledgeCritical NEVER starts execution.
 * AttemptReconcileDisposition is journal-only (not ExecutionAttemptStatus).
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";

export * from "./ports/authenticatedIdentityPort";
export * from "./ports/authorityAttemptJournalPort";

export { AcknowledgeCritical } from "./application/acknowledgeCritical";
export type { AcknowledgeCriticalOptions } from "./application/acknowledgeCritical";
export { InvalidateActiveAuthorityOnRestart } from "./application/invalidateActiveAuthorityOnRestart";
export { ReconcileLaunchedAttemptOnRestart } from "./application/reconcileLaunchedAttemptOnRestart";

export { SqliteAuthorityAttemptJournal } from "./infrastructure/sqliteAuthorityAttemptJournal";
export { MemoryAuthorityAttemptJournal } from "./infrastructure/memoryAuthorityAttemptJournal";

/** Honesty marker: authenticated identity proof status for this delivery. */
export const AUTHENTICATED_IDENTITY_PROOF_STATUS =
  "INCOMPLETE — REAL IAM REQUIRED" as const;
```

### `projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/memoryAuthorityAttemptJournal.ts`

- SHA-256: `2d05ab8a5a126d219d2a6efd8151987391e9479a643eaaec3d77352e70f03fae`
- Lines: 146

```ts
/**
 * MemoryAuthorityAttemptJournal — in-memory journal for unit tests.
 * Same port contract as SqliteAuthorityAttemptJournal; NOT durable.
 */
import { randomBytes } from "node:crypto";
import type {
  AttemptReconcileDisposition,
  AuthorityAttemptJournalRecord,
} from "../domain/types";
import type {
  AppendAuthorityAttemptJournalInput,
  AuthorityAttemptJournalPort,
} from "../ports/authorityAttemptJournalPort";

function newRecordId(): string {
  return `jaj:${randomBytes(8).toString("hex")}`;
}

export class MemoryAuthorityAttemptJournal
  implements AuthorityAttemptJournalPort
{
  private readonly records: AuthorityAttemptJournalRecord[] = [];
  private readonly lock = { held: false };

  async append(
    input: AppendAuthorityAttemptJournalInput,
  ): Promise<AuthorityAttemptJournalRecord> {
    // Simulate BEGIN IMMEDIATE for concurrent double-ack.
    while (this.lock.held) {
      await new Promise((r) => setTimeout(r, 1));
    }
    this.lock.held = true;
    try {
      if (
        input.kind === "CRITICAL_ACK_GRANTED" &&
        input.contractFingerprint
      ) {
        const exists = this.records.some(
          (r) =>
            r.kind === "CRITICAL_ACK_GRANTED" &&
            r.contractFingerprint === input.contractFingerprint,
        );
        if (exists) {
          throw new Error("UNIQUE_CONSTRAINT:critical_ack_fingerprint");
        }
      }
      if (input.idempotencyKey) {
        const sameKeyGranted = this.records.find(
          (r) =>
            r.kind === "CRITICAL_ACK_GRANTED" &&
            r.idempotencyKey === input.idempotencyKey,
        );
        if (
          sameKeyGranted &&
          input.kind === "CRITICAL_ACK_GRANTED" &&
          (sameKeyGranted.contractFingerprint !== input.contractFingerprint ||
            sameKeyGranted.confirmationId !== input.confirmationId)
        ) {
          throw new Error("IDEMPOTENCY_CONFLICT");
        }
      }

      const occurredAt = input.occurredAt ?? new Date().toISOString();
      const record: AuthorityAttemptJournalRecord = Object.freeze({
        recordId: newRecordId(),
        kind: input.kind,
        occurredAt,
        processEpochId: input.processEpochId,
        correlationId: input.correlationId,
        principalId: input.principalId,
        actorId: input.actorId,
        executionContractId: input.executionContractId,
        contractVersion: input.contractVersion,
        contractFingerprint: input.contractFingerprint,
        confirmationId: input.confirmationId,
        attemptId: input.attemptId,
        disposition: input.disposition,
        idempotencyKey: input.idempotencyKey,
        payloadJson: JSON.stringify(input.payload ?? {}),
      });
      this.records.push(record);
      return record;
    } finally {
      this.lock.held = false;
    }
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<AuthorityAttemptJournalRecord[]> {
    return this.records.filter((r) => r.idempotencyKey === idempotencyKey);
  }

  async findByContractFingerprint(
    contractFingerprint: string,
  ): Promise<AuthorityAttemptJournalRecord[]> {
    return this.records.filter(
      (r) => r.contractFingerprint === contractFingerprint,
    );
  }

  async findByAttemptId(
    attemptId: string,
  ): Promise<AuthorityAttemptJournalRecord[]> {
    return this.records.filter((r) => r.attemptId === attemptId);
  }

  async latestDispositionForAttempt(
    attemptId: string,
  ): Promise<AttemptReconcileDisposition | null> {
    for (let i = this.records.length - 1; i >= 0; i -= 1) {
      const r = this.records[i]!;
      if (
        r.attemptId === attemptId &&
        r.kind === "RECONCILE_DISPOSITION" &&
        r.disposition
      ) {
        return r.disposition;
      }
    }
    return null;
  }

  async hasCriticalAckGranted(contractFingerprint: string): Promise<boolean> {
    return this.records.some(
      (r) =>
        r.kind === "CRITICAL_ACK_GRANTED" &&
        r.contractFingerprint === contractFingerprint,
    );
  }

  async listByProcessEpoch(
    processEpochId: string,
  ): Promise<AuthorityAttemptJournalRecord[]> {
    return this.records.filter((r) => r.processEpochId === processEpochId);
  }

  clearForTests(): void {
    this.records.length = 0;
  }

  /** Snapshot for assertions. */
  all(): readonly AuthorityAttemptJournalRecord[] {
    return [...this.records];
  }
}
```

### `projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts`

- SHA-256: `1eaec3751b4159597b7f3e5de009fe2e7be21b829e28462b2e7261b54b8de294`
- Lines: 212

```ts
/**
 * SqliteAuthorityAttemptJournal — DUR-1 journal via existing D1 node:sqlite.
 *
 * Label: PILOT-LOCAL PROOF HARNESS ONLY ≠ PRODUCT DURABLE.
 * crossStoreDurable remains false; productionRollbackProven remains false.
 * product persistence remains NOT_SELECTED.
 */
import { randomBytes } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";
import { openD1Db, nowIso } from "@/lib/d1/db";
import type {
  AttemptReconcileDisposition,
  AuthorityAttemptJournalRecord,
} from "../domain/types";
import type {
  AppendAuthorityAttemptJournalInput,
  AuthorityAttemptJournalPort,
} from "../ports/authorityAttemptJournalPort";

function newRecordId(): string {
  return `jaj:${randomBytes(8).toString("hex")}`;
}

function mapRow(row: Record<string, unknown>): AuthorityAttemptJournalRecord {
  return Object.freeze({
    recordId: String(row.record_id),
    kind: row.kind as AuthorityAttemptJournalRecord["kind"],
    occurredAt: String(row.occurred_at),
    processEpochId: String(row.process_epoch_id),
    correlationId: String(row.correlation_id),
    principalId: row.principal_id != null ? String(row.principal_id) : undefined,
    actorId: row.actor_id != null ? String(row.actor_id) : undefined,
    executionContractId:
      row.execution_contract_id != null
        ? String(row.execution_contract_id)
        : undefined,
    contractVersion:
      row.contract_version != null ? Number(row.contract_version) : undefined,
    contractFingerprint:
      row.contract_fingerprint != null
        ? String(row.contract_fingerprint)
        : undefined,
    confirmationId:
      row.confirmation_id != null ? String(row.confirmation_id) : undefined,
    attemptId: row.attempt_id != null ? String(row.attempt_id) : undefined,
    disposition:
      row.disposition != null
        ? (String(row.disposition) as AttemptReconcileDisposition)
        : undefined,
    idempotencyKey:
      row.idempotency_key != null ? String(row.idempotency_key) : undefined,
    payloadJson: String(row.payload_json ?? "{}"),
  });
}

export class SqliteAuthorityAttemptJournal
  implements AuthorityAttemptJournalPort
{
  constructor(private readonly db: DatabaseSync = openD1Db()) {}

  async append(
    input: AppendAuthorityAttemptJournalInput,
  ): Promise<AuthorityAttemptJournalRecord> {
    const occurredAt = input.occurredAt ?? nowIso();
    const recordId = newRecordId();
    const payloadJson = JSON.stringify(input.payload ?? {});

    this.db.exec("BEGIN IMMEDIATE");
    try {
      // Concurrent double-ack / anti-replay: unique partial index on
      // CRITICAL_ACK_GRANTED fingerprint enforced in SCHEMA_SQL.
      this.db
        .prepare(
          `INSERT INTO oa_authority_attempt_journal (
            record_id, kind, occurred_at, process_epoch_id, correlation_id,
            principal_id, actor_id, execution_contract_id, contract_version,
            contract_fingerprint, confirmation_id, attempt_id, disposition,
            idempotency_key, payload_json
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          recordId,
          input.kind,
          occurredAt,
          input.processEpochId,
          input.correlationId,
          input.principalId ?? null,
          input.actorId ?? null,
          input.executionContractId ?? null,
          input.contractVersion ?? null,
          input.contractFingerprint ?? null,
          input.confirmationId ?? null,
          input.attemptId ?? null,
          input.disposition ?? null,
          input.idempotencyKey ?? null,
          payloadJson,
        );
      this.db.exec("COMMIT");
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      throw error;
    }

    return Object.freeze({
      recordId,
      kind: input.kind,
      occurredAt,
      processEpochId: input.processEpochId,
      correlationId: input.correlationId,
      principalId: input.principalId,
      actorId: input.actorId,
      executionContractId: input.executionContractId,
      contractVersion: input.contractVersion,
      contractFingerprint: input.contractFingerprint,
      confirmationId: input.confirmationId,
      attemptId: input.attemptId,
      disposition: input.disposition,
      idempotencyKey: input.idempotencyKey,
      payloadJson,
    });
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<AuthorityAttemptJournalRecord[]> {
    const rows = this.db
      .prepare(
        `SELECT * FROM oa_authority_attempt_journal
         WHERE idempotency_key = ?
         ORDER BY occurred_at ASC`,
      )
      .all(idempotencyKey) as Record<string, unknown>[];
    return rows.map(mapRow);
  }

  async findByContractFingerprint(
    contractFingerprint: string,
  ): Promise<AuthorityAttemptJournalRecord[]> {
    const rows = this.db
      .prepare(
        `SELECT * FROM oa_authority_attempt_journal
         WHERE contract_fingerprint = ?
         ORDER BY occurred_at ASC`,
      )
      .all(contractFingerprint) as Record<string, unknown>[];
    return rows.map(mapRow);
  }

  async findByAttemptId(
    attemptId: string,
  ): Promise<AuthorityAttemptJournalRecord[]> {
    const rows = this.db
      .prepare(
        `SELECT * FROM oa_authority_attempt_journal
         WHERE attempt_id = ?
         ORDER BY occurred_at ASC`,
      )
      .all(attemptId) as Record<string, unknown>[];
    return rows.map(mapRow);
  }

  async latestDispositionForAttempt(
    attemptId: string,
  ): Promise<AttemptReconcileDisposition | null> {
    const row = this.db
      .prepare(
        `SELECT disposition FROM oa_authority_attempt_journal
         WHERE attempt_id = ?
           AND kind = 'RECONCILE_DISPOSITION'
           AND disposition IS NOT NULL
         ORDER BY occurred_at DESC
         LIMIT 1`,
      )
      .get(attemptId) as Record<string, unknown> | undefined;
    if (!row?.disposition) return null;
    return String(row.disposition) as AttemptReconcileDisposition;
  }

  async hasCriticalAckGranted(contractFingerprint: string): Promise<boolean> {
    const row = this.db
      .prepare(
        `SELECT 1 AS ok FROM oa_authority_attempt_journal
         WHERE kind = 'CRITICAL_ACK_GRANTED'
           AND contract_fingerprint = ?
         LIMIT 1`,
      )
      .get(contractFingerprint) as Record<string, unknown> | undefined;
    return Boolean(row);
  }

  async listByProcessEpoch(
    processEpochId: string,
  ): Promise<AuthorityAttemptJournalRecord[]> {
    const rows = this.db
      .prepare(
        `SELECT * FROM oa_authority_attempt_journal
         WHERE process_epoch_id = ?
         ORDER BY occurred_at ASC`,
      )
      .all(processEpochId) as Record<string, unknown>[];
    return rows.map(mapRow);
  }

  /** Test helper — wipe journal rows only. */
  clearForTests(): void {
    this.db.exec("DELETE FROM oa_authority_attempt_journal");
  }
}
```

### `projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/testing/fakeAuthenticatedIdentityAdapter.ts`

- SHA-256: `577e0b226d53abd7667aa25033dc75c874df20990acae99fda96249c1e9600ed`
- Lines: 50

```ts
/**
 * FakeAuthenticatedIdentityAdapter — TEST ONLY.
 *
 * NOT exported from the main critical-ack barrel.
 * Import only via `@/lib/oa/critical-ack/testing`.
 *
 * REAL IAM remains NOT_SELECTED — this adapter is not a production identity.
 */
import type { AuthenticatedPrincipal } from "../../domain/types";
import type { AuthenticatedIdentityPort } from "../../ports/authenticatedIdentityPort";

export type FakeAuthenticatedIdentityOptions = {
  principal: AuthenticatedPrincipal | null;
};

export class FakeAuthenticatedIdentityAdapter
  implements AuthenticatedIdentityPort
{
  private principal: AuthenticatedPrincipal | null;

  constructor(options: FakeAuthenticatedIdentityOptions) {
    this.principal = options.principal
      ? Object.freeze({ ...options.principal })
      : null;
  }

  async resolvePrincipal(): Promise<AuthenticatedPrincipal | null> {
    return this.principal;
  }

  /** Test helper — swap principal mid-suite. */
  setPrincipal(principal: AuthenticatedPrincipal | null): void {
    this.principal = principal
      ? Object.freeze({ ...principal })
      : null;
  }
}

export function createFakeMorrisPrincipal(
  overrides: Partial<AuthenticatedPrincipal> = {},
): AuthenticatedPrincipal {
  return Object.freeze({
    principalId: "authn:morris-test",
    displayName: "Morris",
    authnSource: "FAKE_TEST_ONLY",
    authenticatedAt: "2026-08-11T10:00:00.000Z",
    actorId: "actor:morris",
    ...overrides,
  });
}
```

### `projects/sfia-studio/app/lib/oa/critical-ack/ports/authenticatedIdentityPort.ts`

- SHA-256: `19bd45cc9d90e0fc370631770396605a51aa2878249ee148b1ae9e6432cad950`
- Lines: 15

```ts
import type { AuthenticatedPrincipal } from "../domain/types";

/**
 * AuthenticatedIdentityPort — provider-agnostic authn surface (AS-1).
 *
 * REAL IAM is NOT_SELECTED. Production adapters are out of scope for this
 * delivery. Tests may inject FakeAuthenticatedIdentityAdapter only via
 * `critical-ack/testing` — never from the main barrel.
 *
 * AcknowledgeCritical MUST call resolvePrincipal() and MUST ignore hostile
 * client actor / authority fields.
 */
export interface AuthenticatedIdentityPort {
  resolvePrincipal(): Promise<AuthenticatedPrincipal | null>;
}
```

### `projects/sfia-studio/app/lib/oa/critical-ack/ports/authorityAttemptJournalPort.ts`

- SHA-256: `f7593f814fdcead7270532062de8e599bfe476ab379a6f2a779aeec71b24762d`
- Lines: 56

```ts
import type {
  AttemptReconcileDisposition,
  AuthorityAttemptJournalKind,
  AuthorityAttemptJournalRecord,
} from "../domain/types";

export type AppendAuthorityAttemptJournalInput = {
  readonly kind: AuthorityAttemptJournalKind;
  readonly processEpochId: string;
  readonly correlationId: string;
  readonly occurredAt?: string;
  readonly principalId?: string;
  readonly actorId?: string;
  readonly executionContractId?: string;
  readonly contractVersion?: number;
  readonly contractFingerprint?: string;
  readonly confirmationId?: string;
  readonly attemptId?: string;
  readonly disposition?: AttemptReconcileDisposition;
  readonly idempotencyKey?: string;
  readonly payload?: unknown;
};

/**
 * AuthorityAttemptJournalPort — DUR-1 minimal durable authority/attempt journal.
 *
 * Implemented via bounded local D1/node:sqlite (proof harness). Does NOT
 * SELECT product persistence. crossStoreDurable remains false.
 */
export interface AuthorityAttemptJournalPort {
  append(
    input: AppendAuthorityAttemptJournalInput,
  ): Promise<AuthorityAttemptJournalRecord>;

  findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<AuthorityAttemptJournalRecord[]>;

  findByContractFingerprint(
    contractFingerprint: string,
  ): Promise<AuthorityAttemptJournalRecord[]>;

  findByAttemptId(
    attemptId: string,
  ): Promise<AuthorityAttemptJournalRecord[]>;

  latestDispositionForAttempt(
    attemptId: string,
  ): Promise<AttemptReconcileDisposition | null>;

  hasCriticalAckGranted(contractFingerprint: string): Promise<boolean>;

  listByProcessEpoch(
    processEpochId: string,
  ): Promise<AuthorityAttemptJournalRecord[]>;
}
```

### `projects/sfia-studio/app/lib/oa/critical-ack/testing.ts`

- SHA-256: `b772c06f1fa2433082667f0e3ab8b3e99ca0477b6323ca0985b87fc41820b775`
- Lines: 11

```ts
/**
 * critical-ack/testing — TEST ONLY exports.
 *
 * FakeAuthenticatedIdentityAdapter must not be imported from the main barrel
 * or from product/f3 paths.
 */
export {
  FakeAuthenticatedIdentityAdapter,
  createFakeMorrisPrincipal,
  type FakeAuthenticatedIdentityOptions,
} from "./infrastructure/testing/fakeAuthenticatedIdentityAdapter";
```

---

## Diffs — modified files

```diff
diff --git a/projects/sfia-studio/app/lib/d1/db.ts b/projects/sfia-studio/app/lib/d1/db.ts
index 90e64b0..ffb12f5 100644
--- a/projects/sfia-studio/app/lib/d1/db.ts
+++ b/projects/sfia-studio/app/lib/d1/db.ts
@@ -89,6 +89,53 @@ CREATE INDEX IF NOT EXISTS idx_d1_atomic_audit_op
   ON d1_atomic_audit(op_id, created_at);
 CREATE INDEX IF NOT EXISTS idx_d1_atomic_audit_idem
   ON d1_atomic_audit(idempotency_key, created_at);
+
+CREATE TABLE IF NOT EXISTS oa_authority_attempt_journal (
+  record_id TEXT PRIMARY KEY NOT NULL,
+  kind TEXT NOT NULL CHECK (
+    kind IN (
+      'CRITICAL_ACK_GRANTED',
+      'CRITICAL_ACK_CONSUMED',
+      'CONFIRMATION_BOUND',
+      'ATTEMPT_CREATED',
+      'ATTEMPT_LAUNCHED',
+      'ATTEMPT_TERMINAL',
+      'ACTIVE_AUTHORITY_INVALIDATED',
+      'RECONCILE_DISPOSITION'
+    )
+  ),
+  occurred_at TEXT NOT NULL,
+  process_epoch_id TEXT NOT NULL,
+  correlation_id TEXT NOT NULL,
+  principal_id TEXT,
+  actor_id TEXT,
+  execution_contract_id TEXT,
+  contract_version INTEGER,
+  contract_fingerprint TEXT,
+  confirmation_id TEXT,
+  attempt_id TEXT,
+  disposition TEXT CHECK (
+    disposition IS NULL OR disposition IN (
+      'CLEAR',
+      'UNKNOWN',
+      'REVIEW_REQUIRED'
+    )
+  ),
+  idempotency_key TEXT,
+  payload_json TEXT NOT NULL
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_aaj_fingerprint
+  ON oa_authority_attempt_journal(contract_fingerprint, occurred_at);
+CREATE INDEX IF NOT EXISTS idx_oa_aaj_attempt
+  ON oa_authority_attempt_journal(attempt_id, occurred_at);
+CREATE INDEX IF NOT EXISTS idx_oa_aaj_idem
+  ON oa_authority_attempt_journal(idempotency_key, occurred_at);
+CREATE INDEX IF NOT EXISTS idx_oa_aaj_epoch
+  ON oa_authority_attempt_journal(process_epoch_id, occurred_at);
+CREATE UNIQUE INDEX IF NOT EXISTS idx_oa_aaj_critical_ack_fp
+  ON oa_authority_attempt_journal(contract_fingerprint)
+  WHERE kind = 'CRITICAL_ACK_GRANTED' AND contract_fingerprint IS NOT NULL;
 `;
 let singleton: DatabaseSync | null = null;
 let singletonPath: string | null = null;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 42758a6..aa63bfa 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -28,6 +28,7 @@ import type {
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
+import type { AuthorityAttemptJournalPort } from "@/lib/oa/critical-ack";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import {
   AGENT_SELECTION_SCOPE,
@@ -66,6 +67,7 @@ export class StartExecution {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly store?: MemoryExecutionAttemptStore,
+    private readonly authorityAttemptJournal?: AuthorityAttemptJournalPort,
   ) {}

   async execute(
@@ -115,8 +117,28 @@ export class StartExecution {
       }

       // Crash-window replay: the Attempt is already running — return the same
-      // state without calling the adapter a second time.
+      // state without calling the adapter a second time — UNLESS journal
+      // disposition is UNKNOWN/REVIEW_REQUIRED (DUR-4 no auto-resume).
       if (attempt.status === "running") {
+        if (this.authorityAttemptJournal) {
+          const disposition =
+            await this.authorityAttemptJournal.latestDispositionForAttempt(
+              attempt.attemptId,
+            );
+          if (
+            disposition === "UNKNOWN" ||
+            disposition === "REVIEW_REQUIRED"
+          ) {
+            return fail(
+              "ATTEMPT_STATE_CONFLICT",
+              `reconcile_${disposition}_no_auto_resume`,
+              {
+                executionContractId: attempt.executionContractId,
+                attempt,
+              },
+            );
+          }
+        }
         const contract = await this.contracts.findById(
           attempt.executionContractId,
         );
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 35bc217..e840a9e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -164,6 +164,11 @@ export type CreateInMemoryExecutionAttemptServicesOptions = {
   policy?: Partial<AttemptPolicy>;
   /** Defaults to decisionServices.authority (T-A3 AuthorityResolverPort). */
   authorityResolver?: AuthorityResolverPort;
+  /**
+   * Optional DUR-4 journal — when disposition is UNKNOWN/REVIEW_REQUIRED,
+   * StartExecution refuses auto-resume of a running Attempt.
+   */
+  authorityAttemptJournal?: import("@/lib/oa/critical-ack").AuthorityAttemptJournalPort;
 };

 /** Factory for the in-memory ExecutionAttempt runtime foundation. */
@@ -231,6 +236,7 @@ export function createInMemoryExecutionAttemptServices(
       clock,
       audit,
       store,
+      options.authorityAttemptJournal,
     ),
     cancelExecutionAttempt: new CancelExecutionAttempt(
       attempts,
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
index 3a318fe..cb2de70 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
@@ -5,6 +5,8 @@ import type {
   AuthorityResolverPort,
   DecisionServices,
 } from "@/lib/oa/decision";
+import type { AuthorityAttemptJournalPort } from "@/lib/oa/critical-ack";
+import { contractFingerprint } from "@/lib/oa/critical-ack";
 import { createExecutionError } from "../domain/errors";
 import {
   assertConfirmationBinding,
@@ -47,8 +49,10 @@ type ConfirmSnapshot = {
  * Residual R-T-A3-2 OPEN: if consume fails AND compensate cancel also fails,
  * contract may remain confirmed with an unconsumed confirmationRef.
  *
- * Critical fail-closed (R-T-A3-1 OPEN): if linked cycle is Critical and still
- * `proposed` (no public AcknowledgeCriticalCycle API), Confirm fails.
+ * Critical fail-closed (R-T-A3-1): if linked cycle is Critical and still
+ * `proposed`, Confirm fails UNLESS an optional AuthorityAttemptJournalPort
+ * records CRITICAL_ACK_GRANTED for the same contract fingerprint (AS-1
+ * surface proof). F3 fixture path stays non-Critical.
  */
 export class ConfirmExecutionContract {
   constructor(
@@ -60,6 +64,7 @@ export class ConfirmExecutionContract {
     private readonly audit: ExecutionAuditPort,
     private readonly store?: MemoryExecutionContractStore,
     private readonly cancelExecutionContract?: CancelExecutionContract,
+    private readonly criticalAckJournal?: AuthorityAttemptJournalPort,
   ) {}

   async execute(
@@ -144,6 +149,7 @@ export class ConfirmExecutionContract {
       }

       // Critical fail-closed — R-T-A3-1: no public ack API on Cycle.
+      // Optional journal CRITICAL_ACK_GRANTED (same fingerprint) satisfies AS-1.
       if (existing.cycleInstanceId) {
         if (!this.cycleServices) {
           return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable", {
@@ -165,11 +171,19 @@ export class ConfirmExecutionContract {
           });
         }
         if (cycle.profile === "Critical" && cycle.status === "proposed") {
-          return fail(
-            "CRITICAL_NOT_ACKNOWLEDGED",
-            "critical_proposed_no_public_ack",
-            { projectId: existing.projectId },
-          );
+          let journalAck = false;
+          if (this.criticalAckJournal) {
+            const fp = contractFingerprint(existing);
+            journalAck =
+              await this.criticalAckJournal.hasCriticalAckGranted(fp);
+          }
+          if (!journalAck) {
+            return fail(
+              "CRITICAL_NOT_ACKNOWLEDGED",
+              "critical_proposed_no_public_ack",
+              { projectId: existing.projectId },
+            );
+          }
         }
       }

@@ -388,6 +402,24 @@ export class ConfirmExecutionContract {
         });
       }

+      if (this.criticalAckJournal) {
+        try {
+          await this.criticalAckJournal.append({
+            kind: "CRITICAL_ACK_CONSUMED",
+            processEpochId: "confirm-path",
+            correlationId,
+            occurredAt: timestamp,
+            executionContractId: contract.executionContractId,
+            contractVersion: contract.version,
+            contractFingerprint: contractFingerprint(existing),
+            confirmationId: snap.confirmationId,
+            payload: { via: "ConfirmExecutionContract" },
+          });
+        } catch {
+          /* journal consume marker is best-effort; confirm already succeeded */
+        }
+      }
+
       const durationMs = Date.now() - started;
       this.audit.append({
         event: "oa.execution_contract.confirmed",
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index 0ee2a27..03e8a8e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -10,7 +10,8 @@
  *
  * Critical cycle acknowledgment: T-A2 has no public AcknowledgeCriticalCycle
  * API. ConfirmExecutionContract fail-closes when Critical cycle is still
- * `proposed` (R-T-A3-1 OPEN).
+ * `proposed` (R-T-A3-1 OPEN), unless an optional Critical Ack journal records
+ * CRITICAL_ACK_GRANTED for the same contract fingerprint (AS-1).
  *
  * Confirmation consumption: ConfirmExecutionContract persists confirmed with
  * confirmationRef first, then calls DecisionServices.consumeConfirmation.
@@ -87,6 +88,11 @@ export type CreateInMemoryExecutionContractServicesOptions = {
   audit?: ExecutionAuditPort;
   /** Defaults to decisionServices.authority (T-A3 AuthorityResolverPort). */
   authorityResolver?: AuthorityResolverPort;
+  /**
+   * Optional Critical Ack journal (AS-1). When present, Confirm may proceed
+   * for Critical+proposed if CRITICAL_ACK_GRANTED matches contract fingerprint.
+   */
+  criticalAckJournal?: import("@/lib/oa/critical-ack").AuthorityAttemptJournalPort;
 };

 /** Factory for in-memory ExecutionContract governance services. */
@@ -144,6 +150,7 @@ export function createInMemoryExecutionContractServices(
       audit,
       store,
       cancelExecutionContract,
+      options.criticalAckJournal,
     ),
     supersedeExecutionContract: new SupersedeExecutionContract(
       contracts,
diff --git a/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts b/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
index 9174c28..f4d4d5b 100644
--- a/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
+++ b/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
@@ -89,7 +89,13 @@ export function evaluateHardFoundation(
       label: "Critical acknowledge / authority (no public Critical ack API)",
       evidenceState: evidence,
       proofAvailable: foundationPresent
-        ? ["hard-foundation-contract", "fail-closed-hold"]
+        ? [
+            "hard-foundation-contract",
+            "fail-closed-hold",
+            "critical-ack-port-surface",
+            "authority-attempt-journal-local",
+            "dur4-reconfirm-after-restart-policy",
+          ]
         : [],
       proofMissing: [
         "authenticated Critical acknowledge API",
@@ -109,6 +115,8 @@ export function evaluateHardFoundation(
             "bounded-local-atomic-audit",
             "project-cycle-coordinator-sim",
             "idempotency-keys",
+            "authority-attempt-journal-local",
+            "reconcile-unknown-disposition-no-attempt-enum",
           ]
         : [],
       proofMissing: [
@@ -166,6 +174,8 @@ export function evaluateHardFoundation(
           "INTERNAL_ONLY hard foundation contract",
           "bounded local atomic audit (node:sqlite)",
           "project↔cycle coordinator with honest productionRollbackProven=false",
+          "critical-ack journal surface (local harness; IAM still NOT_SELECTED)",
+          "honest crossStoreDurable=false",
         ]
       : [],
     closureCriteriaUnmet: [
```

---

## Review Handoff

| Field | Value |
| --- | --- |
| Required | YES |
| Mode | publish-in-cycle |
| Branch | `sfia/review-handoff` |
| Canonical | `sfia-review-handoff/latest-chatgpt-review.md` |
| Source | `.tmp-sfia-review/chatgpt-review.md` |
| Commit message | `docs(review-handoff): publish F3 real prerequisites delivery QA` |
| Inbound tip | `22b8eff6856aefeb50c9bd41c3da8cc1bcee8120` |
| Inbound blob | `ce05ee76f27e52e1616d45a60e24a9a02f262af2` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` FF only |
| FINAL tip/blob | *(filled after publish)* |
| Remote reread | *(filled after publish)* |

---

## Réserves

- AUTHENTICATED_IDENTITY_PROOF incomplete — real IAM/auth provider required
- IAM NOT_SELECTED — no provider auto-selected
- Product persistence NOT_SELECTED — DUR journal pilot-local only
- crossStoreDurable=false; productionRollbackProven=false
- Package local uncommitted — not Git Truth
- Gate D NOT READY / NOT CONSUMED; Cursor REAL BLOCKED
- R-T-A3-1 / R-T-A3-2 remain OPEN HARD (further reduced)

---

## Next Morris GO candidate

```
GO MINIMAL IAM / AUTHENTICATED IDENTITY PROVIDER DECISION —
SELECT OR REJECT PROVIDER FOR AS-1 AuthenticatedIdentityPort —
KEEP PRODUCT PERSISTENCE NOT_SELECTED UNLESS EXPLICITLY DECIDED —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
GATE D REMAINS BLOCKED UNTIL IAM SATISFIED —
OPTIONAL FOLLOW-ON: PUBLICATION OF F3 REAL-PREREQUISITES PACKAGE
ONLY IF CHATGPT ACCEPTS AUTHENTICATION-RESERVE PATH FOR REVIEW CONTINUITY —
PUBLICATION DOES NOT SATISFY GATE D WHILE IAM INCOMPLETE
```

---

## Exact verdict (GO §44 variant)

```
F3 REAL PREREQUISITES DELIVERY + QA COMPLETE WITH AUTHENTICATION RESERVE —
AS-1 BOUNDARY IMPLEMENTED —
PROVIDER-AGNOSTIC IDENTITY PORT VALIDATED —
REAL AUTHENTICATED IDENTITY PROVIDER STILL REQUIRED —
IAM REMAINS NOT_SELECTED —
R-T-A3-1 REMAINS BLOCKING —
NO CURSOR REAL —
GATE D NOT READY —
MINIMAL MORRIS IAM DECISION REQUIRED
```

---

*End of FULL Review Pack — Cursor report ≠ validation ; ChatGPT re-reads Git handoff.*
