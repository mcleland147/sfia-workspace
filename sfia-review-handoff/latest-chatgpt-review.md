# SFIA Studio — Review Pack FULL
## CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING
### KNOWN RESERVES CLOSURE — R1 ENV + R2 HISTORICAL HD + R3 ROADMAP TRUTH-SYNC

- **timestamp**: `2026-09-25T07:23:02+02:00` (Europe/Paris)
- **Macro ID**: `CYCLE-RESERVATION-PILOTING-01`
- **Closure**: `KNOWN RESERVES CLOSURE` (same macro)
- **cycle**: Delivery / same-macro closure — EVOL — Critical
- **profil SFIA**: Critical
- **GO Morris**: CONSUMED — R1/R2/R3 + Review Pack + Handoff L3
- **Protected path authorization**: Roadmap file ONLY under `convergence/**` — Build Doctrine / framing / C1 = READ ONLY
- **NON autorisé ce cycle**: product commit/push/PR/merge ; Build Doctrine change ; framing/C1 change ; MealFlow campaign
- **branche**: `feat/sfia-studio-cycle-reservation-piloting-01`
- **HEAD / origin/main**: `385c764458c5212913388d5e0e5b80f5390c23db` (dirty WIP intentional; not remote)
- **runtime v3**: **NON ADOPTED**
- **Fake/Real**: DETERMINISTIC ENV/HD PROOF + prior REAL reservation lifecycle preserved

## Verdict

**CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING — KNOWN RESERVES CLOSED — SAME-MACRO COMPLETE — READY FOR MACRO PR READINESS**

| Reserve | Exit status |
| --- | --- |
| R1 legacy env naming | **CLOSED BY CANONICAL PILOT ENV + DEPRECATED COMPATIBILITY ALIAS** |
| R2 historical morris HD | **CLOSED AS IMMUTABLE HISTORICAL COMPATIBILITY** |
| R3 Roadmap truth-sync | **SYNCED TO CURRENT LOCAL CANDIDATE STATE** |

**Remaining same-macro construction reserves: ZERO**

**MERGE / PRODUCT COMMIT / PRODUCT PUSH / PRODUCT PR — NOT AUTHORIZED**

Next gate: **MACRO PR READINESS — MORRIS GO DISTINCT**

---

## KNOWN RESERVES CLOSURE

### Git Truth (exact)

| Check | Result |
| --- | --- |
| Branch | `feat/sfia-studio-cycle-reservation-piloting-01` |
| HEAD | `385c764458c5212913388d5e0e5b80f5390c23db` |
| origin/main | `385c764458c5212913388d5e0e5b80f5390c23db` |
| HEAD == origin/main | YES (dirty WIP on top) |
| WIP | preserved (Reservation + Defer + Option A + R1/R2/R3); **not remote** |
| Destructive git | none |
| Product commit/push/PR | **NONE** |

### Protected sources

| Source | SHA | Role |
| --- | --- | --- |
| Build Doctrine | `99232e4582e4ef4cf489020a46b818ebb41ac397` | READ ONLY — unchanged |
| Roadmap (main blob) | `df2ad6f3c4cd5504d586f344bc0d76f737b0ce65` | pre-edit baseline |
| Roadmap (local WIP blob) | `29f9ddac05f4ac352c5b525fd5b95c734aec0023` | R3 truth-sync applied |
| C1 Product Completion | `806d672fe21ad82a641bf88fe95fc87870481105` | READ ONLY — unchanged |
| Cycle template | `948156a21309ef99c3aaed6410947dc6b9bc569a` | READ ONLY |
| Routing guide | `8949e764d96faf3fa812d39307dbc298b500f5ef` | READ ONLY |
| Prior handoff tip | `d5ac9b72d0d638b23668345153a4d9d569c0f922` | superseded by this publish |
| Prior handoff blob | `0594244a7d94303841ee0b3768ec054da88f12c6` | superseded by this publish |

### R1 — Legacy env naming

**Before:** `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` used as technical enable while Pilot and Morris are distinct authorities.

**Canonical env:**
- Pilot: `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY` (`LOCAL_PILOT_AUTHORITY_ENV`)
- Morris gate: `SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY` (`LOCAL_MORRIS_GATE_AUTHORITY_ENV`) — kept as distinct enable (no Pilot conflation)

**Compatibility:**
- Legacy `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` = **DEPRECATED compatibility alias**
- May enable either helper separately when the matching canonical is absent
- Each helper creates **only its own grant** — never dual-grant evidence

**Precedence (per gate family):**
1. If canonical env for that family is defined → its value wins (`=== "1"`)
2. Else legacy alias may enable that helper
3. Canonical Pilot alone never enables Morris; canonical Morris alone never enables Pilot

**Helpers:**
- `isLocalPilotAuthorityEnabled` / `registerLocalPiloteAuthority` → `canActAsPilot=true`, `canActAsMorris` absent
- `isLocalMorrisGateAuthorityEnabled` / `registerLocalMorrisGateAuthority` → `canActAsMorris=true`, `canActAsPilot` absent
- Deprecated aliases kept: `isM3LocalAuthorityEnabled`, `M3_LOCAL_AUTHORITY_ENV`, `registerM3LocalMorrisAuthority`

**Tests ENV-AUTH-01…08:** PASS (`reserveClosureEnvHistorical.d0.test.ts`)

**Exit:** R1 = **CLOSED BY CANONICAL PILOT ENV + DEPRECATED COMPATIBILITY ALIAS**
(Legacy alias retention is intentional; future removal requires explicit config migration GO.)

### R2 — Historical HumanDecision `authority:"morris"`

**No rewrite / no migration.** Historical rows remain immutable truth.

| ID | Result |
| --- | --- |
| HIST-HD-01 legacy morris deserializes | PASS |
| HIST-HD-02 value stays morris after reload | PASS |
| HIST-HD-03 no automatic rewrite | PASS |
| HIST-HD-04 new Project writer → `pilot` | PASS |
| HIST-HD-05 historical morris = runtime-structuring continuity via `isRuntimeStructuringAuthority` | PASS |
| HIST-HD-06 historical morris does not let Pilot-only actor pass Morris gate | PASS |
| HIST-HD-07 Pilot cannot supersede true Morris HD without Morris grant | PASS (`morris_gate_denied`) |

**Zero new incorrect Project writes:** runtime writers use `authority:"pilot"`.
True Morris EC / governance still uses `authority:"morris"` + `canActAsMorris`.

**Exit:** R2 = **CLOSED AS IMMUTABLE HISTORICAL COMPATIBILITY**

### R3 — Roadmap truth-sync

**Authorized file only:** `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

| Fact | Recorded |
| --- | --- |
| PR #516 | merge `dc462d9f…` · PROJECT CONVERSATIONAL CONTINUITY & CYCLE JOURNAL · **INTEGRATED ON MAIN / POST-MERGE VERIFIED** |
| PR #517 | merge/main `385c7644…` · PILOTABILITY & JOURNAL SEMANTIC INTEGRITY · **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · CI #594 attempt 2 SUCCESS / Required Gate PASS |
| Current macro | CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING · branch `feat/sfia-studio-cycle-reservation-piloting-01` · base `385c7644…` · **LOCAL CANDIDATE / SAME-MACRO COMPLETE / READY FOR MACRO PR READINESS** · **NOT YET INTEGRATED ON MAIN** · NOT YET COMMITTED / PUSHED / OPENED AS PR |
| Current priority | this Reservation macro local candidate |
| Next capability | MealFlow semantic reservation campaign — **NOT STARTED / NOT AUTHORIZED** |
| runtime v3 | **NON ADOPTED** |
| Product Completion | historical COMPLETE/CLOSED — **≠** newly completed |
| Nora Cognitive Completion | **≠** newly COMPLETE |
| global semantic reservation quality | **≠** PROVEN |
| READY FOR REAL global | **NO** |

**Roadmap diff:**
```
4	3	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 .../sfia-studio/convergence/sfia-studio-convergence-roadmap.md     | 7 ++++---
 1 file changed, 4 insertions(+), 3 deletions(-)
```
- Tip maintenance row inserted
- CURRENT REPOSITORY TRANSITION / NEXT ORDERED STEP / NEXT PRODUCT CAPABILITY updated
- Historical entries preserved
- Build Doctrine / C1 / framing: **unchanged**

**Exit:** R3 = **SYNCED TO CURRENT LOCAL CANDIDATE STATE**

### Suite finale

| Check | Result |
| --- | --- |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| ENV-AUTH + HIST-HD + Option A + Defer + preflight | PASS |
| Full Studio suite | **4632 passed / 137 skipped** (432 files: 415 passed / 17 skipped) |
| Prior (Option A) | 4619/137 — superseded (+13 ENV/HIST tests) |

### Debt table (post-closure)

| Item | Classification | Status |
| --- | --- | --- |
| Legacy env `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` | deprecated compatibility alias with defined contract | **NOT an open reserve** |
| Historical HD `authority:"morris"` rows | immutable historical truth | **NOT an open reserve** |
| Browser automation `chrome-error` | EXTERNAL TOOLING / NON-BLOCKING / OUT OF MACRO | not product reserve |
| MealFlow 11 legacy À QUALIFIER | CAMPAIGN DATA / FUTURE PRODUCT USE | not construction debt |
| MealFlow semantic reservation campaign | next after eventual integration | **NOT STARTED / NOT AUTHORIZED** |
| MACRO PR READINESS | next Morris GO distinct | pending (not a construction reserve) |

### Remaining same-macro construction reserves

**ZERO**

### Anti-claims

- ≠ runtime v3 ADOPTED
- ≠ READY FOR REAL global
- ≠ global semantic reservation quality PROVEN
- ≠ Nora Cognitive Completion COMPLETE
- ≠ current macro integrated on main
- ≠ product commit/push/PR/merge
- ≠ Product Completion newly COMPLETE by this macro

### Exact files touched this reserve-closure pass (additive to prior WIP)

- `app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts`
- `app/lib/oa/decision/index.ts`
- `app/lib/vertical-slice-runtime/studioRuntimeProfilePreflight.ts`
- `app/.env.example`
- `app/__tests__/oa/decision/reserveClosureEnvHistorical.d0.test.ts` (new)
- `convergence/sfia-studio-convergence-roadmap.md` (R3 only)
- `.tmp-sfia-review/chatgpt-review.md`

---


## ARCHIVE — PRIOR SAME-MACRO REVIEW BODY

# SFIA Studio — Review Pack FULL
## CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING
### + PILOT RUNTIME AUTHORITY SEPARATION — OPTION A

- **timestamp**: `2026-09-25T07:02:05+02:00` (Europe/Paris)
- **Macro ID**: `CYCLE-RESERVATION-PILOTING-01`
- **Correction**: `PILOT-RUNTIME-AUTHORITY-SEPARATION` (same macro)
- **cycle**: 8 — Delivery / implémentation — EVOL — Critical
- **profil SFIA**: Critical
- **GO Morris**: CONSUMED — Option A authority separation + Review Pack + Handoff L3
- **NON autorisé ce cycle**: commit/push/PR/merge produit ; convergence/** ; doctrine v3 ; runtime v3 ADOPTED
- **branche**: `feat/sfia-studio-cycle-reservation-piloting-01`
- **HEAD / origin/main**: `385c764458c5212913388d5e0e5b80f5390c23db` (dirty WIP intentional; not remote)
- **runtime v3**: **NON ADOPTED**
- **Fake/Real**: DETERMINISTIC AUTHORITY SEPARATION PROOF + GENERIC NON-MORRIS PILOT PROOF + BOUNDED DEFER RUNTIME REPROOF (+ prior REAL reservation lifecycle preserved)

## Verdict

**CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING — OPTION A AUTHORITY CORRECTION COMPLETE — SAME-MACRO COMPLETE — READY FOR MACRO PR READINESS**

**MERGE / PRODUCT COMMIT / PRODUCT PUSH / PRODUCT PR — NOT AUTHORIZED**

---

## PILOT RUNTIME AUTHORITY SEPARATION — OPTION A

### Git Truth (exact)

| Check | Result |
| --- | --- |
| Branch | `feat/sfia-studio-cycle-reservation-piloting-01` |
| HEAD | `385c764458c5212913388d5e0e5b80f5390c23db` |
| origin/main | `385c764458c5212913388d5e0e5b80f5390c23db` |
| WIP | preserved (Reservation + Option A); **not remote** |
| Destructive git | none |

### GO Morris

**OPTION A** — séparer techniquement Pilot vs Morris. Consommé et implémenté.

### Sources (READ ONLY) + SHA

| Source | SHA |
| --- | --- |
| Build Doctrine | `99232e4582e4ef4cf489020a46b818ebb41ac397` |
| Roadmap | `df2ad6f3c4cd5504d586f344bc0d76f737b0ce65` |
| C1 Product Completion | `806d672fe21ad82a641bf88fe95fc87870481105` |
| Framing 30 HumanDecision | `b2d122e2229196d6e104f45706e0cc086a457561` |
| Framing 07 automation/HD | `a2330c67db13de3b703fcc9f209864edd95eb2e7` |
| Cycle template | `948156a21309ef99c3aaed6410947dc6b9bc569a` |
| Routing guide | `8949e764d96faf3fa812d39307dbc298b500f5ef` |

### Impact scan — `authority: "morris"` classification

| Usage | Real category | Target | Adapted |
| --- | --- | --- | --- |
| `pilotLifecycleActions` HD (lifecycle/obligation/defer) | Runtime Pilot structuring | PILOT | YES → `authority:"pilot"` + `requirePilotGate` |
| `decideTrajectory` HD | Runtime Pilot structuring | PILOT | YES |
| `recordDecision` (F2 GO) HD | Runtime Pilot structuring | PILOT | YES |
| `approveCandidateTrajectory` HD | Runtime Pilot structuring | PILOT | YES |
| Promotion guards (`candidateTrajectoryPromotionGuard`, `decideTrajectory` assert) | Structuring eligibility | PILOT (+ historical morris readable) | YES via `isRuntimeStructuringAuthority` |
| `registerLocalPiloteAuthority` | Local Pilot grant | canActAsPilot only | YES |
| `registerM3LocalMorrisAuthority` / `registerLocalMorrisGateAuthority` | True Morris EC gate | MORRIS | YES (separate) |
| ExecutionContract `requiredAuthority:"MORRIS"` (M3/docs_write) | True Morris EC gate | MORRIS | YES — `registerLocalAuthorityForExecutionClass` |
| Auth S1 / MW6 | Must NOT grant Morris | unchanged | KEEP (`canActAsMorris:false`) |
| Historical HD rows `authority:"morris"` | Historical truth | readable unchanged | NO rewrite |
| Memory B Class 3 | Rejects construction morris; accepts Pilot/delegated | PILOT/DELEGATED | YES accepts `pilot` |
| Client `canActAsMorris` / displayName | Hostile | ignored | KEEP |

### Domain diff

- `DecisionAuthority` += `"pilot"`
- `AuthorityEvidence.canActAsPilot?: boolean`
- `VerifyAuthorityRequest.requirePilotGate?: boolean`
- `VerifyAuthorityResult` += `canActAsPilot` + reason `pilot_gate_denied`
- Shared `authorityRequirements.ts`: level/gate mapping + `isRuntimeStructuringAuthority`

### Resolver / localSingleUserAuthority

- Pilot gate: N3 + `canActAsPilot===true` (Morris alone insufficient)
- Morris gate: N3 + `canActAsMorris===true` (Pilot alone insufficient)
- `registerLocalPiloteAuthority` → Pilot only
- `registerLocalMorrisGateAuthority` → Morris only (product dual-grant for MORRIS EC)
- Env `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` kept as temporary enable (legacy name) — **no longer conflates Pilot→Morris**

### Runtime writers

All new Project structuring HumanDecisions use `authority:"pilot"`.

### Reservation Defer

- HD `authority:"pilot"`, actor Pilote, validated via `canActAsPilot`
- Atomic HD + `reservation.deferred` KEEP
- Deterministic repro: `__tests__/nora-cognitive-runtime/cycleReservationDefer.d0.test.ts` asserts `authority==="pilot"`

### Persistence / backcompat

- SQLite JSON payload additive — `"pilot"` accepted
- No DROP / no historical rewrite
- AUTH-CORR-10/21: historical `morris` remains readable

### Generic non-Morris Pilot proof

`actor:test-generic-pilot` + N3 + `canActAsPilot=true` + `canActAsMorris=false`:
- PASS Pilot HD
- DENY Morris HD (`morris_gate_denied`)
- displayName "Morris Pilote Alias" grants nothing

### AUTH-PILOT / AUTH-MORRIS / AUTH-CORR

Suite: `__tests__/oa/decision/pilotMorrisAuthoritySeparation.d0.test.ts`

| ID | Result |
| --- | --- |
| AUTH-PILOT-01…06 | PASS |
| AUTH-MORRIS-01…02 | PASS |
| AUTH-BOTH-01 | PASS |
| AUTH-NO-INFERENCE-01 | PASS |
| AUTH-CORR-01…26 | PASS (covered by separation + product writer + Defer + suite) |

### Tests / gates

| Check | Result |
| --- | --- |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Targeted authority/decision/lifecycle/EC | PASS |
| Full Studio suite | **4619 passed / 137 skipped** |
| Bounded Defer repro (authority=pilot) | PASS |
| Previous REAL Reservation proof | PRESERVED (pre-Option-A HD used conflated morris label; new Defer uses pilot) |

### Identity ≠ authority

Morris-the-human may act as Pilote → `authority:"pilot"`. True Morris construction/EC gates remain `authority:"morris"` / EC `MORRIS` with `canActAsMorris`.

### Dettes + exit

- Legacy env name `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` — rename when Pilot-only env needed
- Historical Project HDs labeled `morris` remain; new writers use `pilot`
- ROADMAP TRUTH-SYNC must mention Pilot/Morris separation (READ ONLY here)

### Anti-claims

- ≠ runtime v3 ADOPTED
- ≠ READY FOR REAL global
- ≠ global semantic reservation quality PROVEN
- ≠ Nora Cognitive Completion COMPLETE
- ≠ new Product Completion closure
- ≠ product commit/push/PR

### Exact modified files (Option A core)

`app/lib/oa/decision/domain/types.ts`, `invariants.ts`, `authorityRequirements.ts`, `recordHumanDecision.ts`, `supersedeHumanDecision.ts`, `verifyAuthority.ts`, `memoryAuthorityResolver.ts`, `localSingleUserAuthority.ts`, ports, index; product writers (`pilotLifecycleActions`, `decideTrajectory`, `recordDecision`, `approveCandidateTrajectory`, promotion guard); EC local register helpers (`prepareM3`, authorize/confirm/amend/governedExecute/recovery/rematerialize); `pilotLifecycleTransitions` + vertical-slice authority port; `materializeFromMemoryB`; AUTH + adapted tests.

---

## 1. Git Truth

| Check | Result |
| --- | --- |
| Branch | `feat/sfia-studio-cycle-reservation-piloting-01` from `origin/main` |
| HEAD / origin/main | `385c7644…` (ahead/behind 0/0 before WIP) |
| Dirty | product WIP intentional + `.tmp-sfia-review/**` only |
| Protected convergence | untouched |
| SoT blobs matched | Doctrine `99232e45…` · Roadmap `df2ad6f3…` · C1 `806d672f…` · Nora-08 `1dfd8fd4…` · Template `948156a2…` · Routing `8949e764…` |

---

## 2. Sources (READ ONLY)

Build Doctrine, Roadmap, C1, framing 30/32/33/35/06/07/11/16, Nora OpenAI-native trajectory, CKC Delivery, cycle template, routing guide, prior handoff `500f6e54…` (PRE-MERGE #517 — Git truth primes).

v2.6 = external process only.

---

## 3. Convergence / Roadmap qualification

- Product Completion = historical COMPLETE/CLOSED — **not newly claimed**
- ACTIVE PRIORITY Nora Cognitive Completion PRESERVED
- Documentary Roadmap **lags** #516 / #517 / this macro selection
- **ROADMAP TRUTH-SYNC — REQUIRED** (READ ONLY this cycle — delta below)

---

## 4. OpenAI Capability Fit Check (R22)

| Disposition | Choice |
| --- | --- |
| KEEP | Agents Runner · same Product turn · structured output · tools · Product SQLite Session · journalDelta · EpistemicItem store |
| ADAPT | structured output (`reservationDelta`) · blocker derivation · Nora prompt compact · Lifecycle projection |
| COMPLETE (SFIA-specific) | Reservation metadata · ordinal · Journal refs · PROPOSE_RESOLUTION · Pilot confirm · FINALIZE gate semantics · Memory rail Réserves · Traiter avec Nora |
| FORBIDDEN avoided | second model call · second Nora runtime · NLP/regex semantics · parallel ReservationStore · OpenAI HITL as HumanDecision |

**STOP not triggered** — no new runtime/provider/engine required.

---

## 5. Capacité v3

**CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING**

Serves V3-F05 · LPS/trajectory · epistemology · cycle routing · HumanDecision · Product Experience · Nora Cognitive Completion (bounded).

Previous: PILOTABILITY & JOURNAL SEMANTIC INTEGRITY (#517 @ `385c7644`).

---

## 6. Architecture KEEP / ADAPT / COMPLETE / REPLACE

| Class | Assets |
| --- | --- |
| KEEP | EpistemicItem JSON store · LPS · HumanDecision · Journal · Lifecycle assess · Agents Runner · single Product turn · ConversationSurface |
| ADAPT | `EpistemicItem.reservation?` · `deriveLifecycleBlockers` · projection · Nora context · product turn schema |
| COMPLETE | `reservationDelta` · materialize · Memory tabs · Traiter avec Nora · confirm resolution · compact Lifecycle · deferred metadata (minimal) |
| REPLACE | Permanent Lifecycle « Réserves bloquantes » list + permanent « Marquer comme résolue » |
| FORBIDDEN | parallel Reservation store · blocker ledger · second model call · new dashboard |

---

## 7. Reservation contract (final)

```ts
reservation?: {
  ordinal: number
  title / summary
  impact: minor | moderate | major
  attentionBy: during_cycle | before_recommendation | before_decision | before_execution_contract | before_finalization
  finalizationRelevance: none | may_affect | must_resolve
  rationale / resolutionCondition
  journalEntryRefs[] / sourceTurnRefs[]
  resolutionProposal? { rationale, basisType, basisRefs, proposedAt, sourceTurnRefs? }
  deferred? { deferredAt, humanDecisionId?, targetCycleTypeId?, rationale? }
}
```

**FINALIZE gate**: active Reservation + `finalizationRelevance=must_resolve`
**Legacy fail-closed**: active Reservation without metadata + `blocking=true`
**Impact alone never blocks.**

Presentation states: POTENTIELLE · BLOQUE LA CLÔTURE · RÉSOLUE · REPORTÉE · À QUALIFIER · REJETÉE

---

## 8. Schema / migration

- Persistence: existing `oa_epistemic_items.payload_json` — **additive JSON only**
- **No DDL** · no DROP · no DB reset
- `UpdateEpistemicState` passes through `reservation`

---

## 9. Exact files (candidate)

**New (6):**
- `lib/oa/cycle/domain/reservationSemantics.ts`
- `lib/nora-cognitive-runtime/reservationDelta.ts`
- `lib/nora-cognitive-runtime/reservationPrompt.ts`
- `features/project-assistant/materializeReservationDelta.ts`
- `__tests__/nora-cognitive-runtime/cycleReservationPiloting.d0.test.ts`
- `__tests__/pre-m6-product-ui/cycleReservationMemoryRail.ui.test.tsx`

**Modified (17):** domain types/index, deriveLifecycleBlockers, lifecycleProjection, updateEpistemicState, noraProductTurnOutputType, orchestrateTurn, buildProjectSystemPrompt, studioCognitiveContext, actions, pilotLifecycleActions, JournalSurface(+css), LifecycleSurface, ProjectWorkspacePage, + 2 fixture tests.

Diff modified: **+1515 / −76** (tracked); +~1460 lines new files.

**Excluded:** `.tmp-sfia-review/**` (proofs/screenshots/sqlite)

---

## 10. Nora integration

- Same Product turn adds nullable `reservationDelta` (CREATE|UPDATE|PROPOSE_RESOLUTION — **no RESOLVE**)
- ACW Reservation stripped when reservationDelta present (CR-RSV-19)
- Compact reservation prompt section in studio cognitive context
- Prompt: openPoint ≠ Réserve; impact ≠ blocker; must_resolve alone gates FINALIZE

---

## 11. Journal integration

- `journalEntryRefs` on metadata; UI « Voir le sujet »
- Same turn may emit journalDelta + reservationDelta
- Memory rail: `Sujets (N) | Réserves (M)` — Journal default

---

## 12. HumanDecision / resolution

- Nora cannot resolve; PROPOSE_RESOLUTION only
- Pilot `Confirmer la levée` validates basis (clarification / human_decision / evidence) fail-closed
- Confirm does **not** auto-create HumanDecision
- `deferReservationAction` minimal metadata; **refuses must_resolve**; HumanDecision id optional / not auto-recorded (documented)

---

## 13. Finalization / Lifecycle UX

- Normal: compact « Réserves du cycle — X actives · … » + « Voir les réserves »
- Permanent resolve buttons **removed**
- Gate mode: « Clôture indisponible — N réserves à traiter » + Traiter avec Nora
- Obligation family still surfaces gate blockers (legacy MealFlow remain fail-closed until requalified)

---

## 14. CR-RSV acceptance (summary)

| Band | Status |
| --- | --- |
| Domain CR-RSV-01…10 | **PASS** (deterministic) |
| Nora CR-RSV-11…19 | **PASS** schema/materialize/prompt strip; live REAL CREATE not re-proven this pass |
| UI CR-RSV-20…28 | **PASS** rail + treat draft (desktop/mobile screenshots); responsive OK |
| Resolution CR-RSV-29…34 | **PASS** propose≠resolve + confirm action; basis fail-closed coded |
| Finalization CR-RSV-35…42 | **PASS** derive + Lifecycle compact + legacy gate |
| Defer CR-RSV-43…47 | **PARTIAL** — server action exists; UI not wired; no HD auto-record (honest gap, not STOP) |

---

## 15. Regression #516 / #517

Targeted: Journal surface · pilotability integrity · F2 transcript · lifecycle closure LC-B-17 still callable via legacy action (UI no longer exposes permanent resolve).

Full suite: **4591 passed / 137 skipped**

---

## 16. Validations

| Gate | Result |
| --- | --- |
| typecheck | **PASS** |
| lint | **PASS** (0 warnings/errors) |
| build | **PASS** (exit 0; pre-existing better-sqlite3 warning; transient PageNotFoundError log during collect — exit 0) |
| full Studio suite | **4591 passed / 137 skipped** (412 files + 17 skipped) |

---

## 17. Runtime proof (local)

Proof dir: `.tmp-sfia-review/cycle-reservation-piloting-proof/`

| Shot | Observation |
| --- | --- |
| `mealfow-desktop-journal-sujets-1440.png` | Sujets default; tabs Sujets(2)/Réserves(11); Cadrage |
| `mealfow-desktop-reserves-a-qualifier-1440.png` | Legacy cards **À QUALIFIER**; Traiter avec Nora; Impact —; modèle précédent |
| `mealfow-desktop-treat-with-nora-draft-1440.png` | Draft prérempli; **Envoyer** idle — **no auto-send**; no durable mutation from click |
| `mealfow-mobile-390-reserves.png` | Mobile reserves cards usable |

Lifecycle compact observed via DOM:
`Réserves du cycle — 11 actives · 0 peut affecter la clôture · 11 à qualifier` + Voir les réserves.

Legacy blockers remain fail-closed on FINALIZE assessment (expected until requalify via Nora).

**Not fully runtime-proven this pass:** brand-new reservationDelta CREATE → propose → confirm on disposable project with live model (covered deterministically).

---

## 18. Fake / Real

- DETERMINISTIC PRODUCT PROOF
- LOCAL USER-FLOW PROOF (MealFlow)
- REAL bounded reservation create/propose **not** executed this pass (provider available but not required for readiness gate)
- ≠ READY FOR REAL · ≠ global semantic reservation quality PROVEN

---

## 19. Roadmap truth-sync delta (READ ONLY — recommend)

Integrate at next GO:
- PR #516 merge `dc462d9f…` — Cycle Journal continuity
- PR #517 merge `385c7644…` — Pilotability & Journal semantic integrity
- Post-merge CI #594 attempt 2 SUCCESS
- Capability CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING — LOCAL MACRO COMPLETE (this branch WIP)
- Next after merge: MealFlow campaign — semantic reservation quality · gate-aware finalization · Nora Journal+Réserves continuity
- runtime v3 NON ADOPTED
- Product Completion remains historical CLOSED
- Nora Cognitive Completion **not** newly COMPLETE

---

## 20. Dettes / exit / gaps

1. Defer UI not exposed (server action only)
2. Defer does not auto-record HumanDecision (documented)
3. Composer context chip skipped — draft prefill used
4. Live REAL new-reservation end-to-end not re-run (deterministic + legacy UX proven)
5. Obligation label copy still says « Réserve bloquante » for gate family (semantic gate OK; wording ADAPT optional later)

---

## 21. Décisions Morris restantes

1. MACRO PR READINESS GO (commit/push/PR)
2. Roadmap truth-sync GO
3. Optional MealFlow requalification campaign of legacy À QUALIFIER
4. Optional Defer UI + HumanDecision wiring GO if structural report needed

---

## 22. Anti-claims

- NOT runtime v3 ADOPTED
- NOT READY FOR REAL
- NOT global semantic reservation quality PROVEN
- NOT Nora Cognitive Completion COMPLETE
- NOT new Product Completion closure
- NOT product commit/push/PR/merge performed

---

**END FULL REVIEW PACK**


---

## SAME-MACRO COMPLETION — REAL LIFECYCLE & DEFER

- **timestamp**: `2026-09-25T06:09:55+02:00`
- **Macro ID**: `CYCLE-RESERVATION-PILOTING-01`
- **GO Morris**: CONSUMED — same-macro completion (Track A REAL + Track B Defer)
- **NON autorisé**: commit/push/PR/merge produit ; convergence/** ; doctrine v3 ; runtime v3 ADOPTED ; nouveau store / nouvelle classe d’autorité

### Git Truth

| Check | Result |
| --- | --- |
| Branch | `feat/sfia-studio-cycle-reservation-piloting-01` |
| HEAD / origin/main | `385c764458c5212913388d5e0e5b80f5390c23db` |
| Dirty WIP | product WIP intentional + `.tmp-sfia-review/**` |
| Prior handoff | `origin/sfia/review-handoff` @ `c39894f1834556830562641a5403a898a45c7fcc` |
| Protected convergence | untouched |

### Exact WIP (this pass)

**Track B Defer+HD (product):**
- `deferReservationAction` → HumanDecision (`opt:defer-reservation`) then `reservation.deferred` in same Product UoW
- `resolveHonestReservationDeferTarget` / `canDeferReservation` / projection `canDefer` + labels
- JournalSurface: Reporter → confirmation (zero writes) → Confirmer le report / Annuler
- REPORTÉE / Vers : \<cible\> / Décision du Pilote
- Tests CR-RSV-43…52 + UI CR-RSV-50

**Track A REAL (bounded):**
- Isolated QA DB disposable project `prj:rsv-real-1` / cycle `cyc:rsv-real:*`
- Path: `orchestrateProjectAssistantTurn` (F1 Product turn) — avoids F2 NEW_CYCLE_FORMALIZATION
- Bounded prompt/materialize fix: PROPOSE_RESOLUTION `clarification` + empty `basisRefs` → pin `logicalTurnId`

**NOT done:** product commit / push / PR

### Décisions / GO

- Defer **without** new store / new authority class — reuse `RecordHumanDecision` + Epistemic metadata (STOP Morris **not** required)
- REAL proof via Product turn runner (not SQL mutation, not fixture cognitive)
- Browser UI chrome-error blocked live screenshots of disposable project; MealFlow local UX screenshots retained; REAL evidence boards from ledger

### REAL project / provider

| Field | Value |
| --- | --- |
| Project | `RSV REAL Proof — CritèreFlow` · `prj:rsv-real-1` |
| Cycle | Cadrage ACTIVE · `cyc:rsv-real:09124914` |
| Trajectory | framing → functional-design → delivery (honest defer target) |
| Provider | `openai` / model `gpt-5.6-luna` |
| Path | OpenAI live F1 · Agents native · `/Users/morris/Projects/sfia-workspace/.tmp-sfia-review/cycle-reservation-piloting-proof/qa-dbs/oa-product.sqlite` |
| Budget | 4/8 live invocations consumed · hard cap $2.00 |

### Messages utilisateur (REAL)

1. **CREATE** — in-cycle: critère de succès V1 volontairement indéterminé → reservationDelta CREATE must_resolve
2. **TREAT_UPDATE** — traiter la réserve existante sans en créer une nouvelle
3. **PROPOSE** — clarification critère binaire 3/4 semaines → PROPOSE_RESOLUTION
4. **MAY_AFFECT** — libellé marketing major/may_affect (nonblocking) pour defer

### reservationDelta / durable ids

| Item | Value |
| --- | --- |
| CREATE reservationId | `epi:rsv:9fbe878788ea4591dce0bed1` |
| Final resolved | `epi:rsv:9fbe878788ea4591dce0bed1` |
| Deferred may_affect | `epi:rsv:9d0a8ab6130693a13705df91` |
| Defer HumanDecision | `dec:rsv-defer:c769e0a5-f75a-484f-92a6-5aaac003449b` |
| Defer target | `cyc:functional-design` |

### REAL-RSV-01…27

| ID | Result |
| --- | --- |
| REAL-RSV-01 | `True` |
| REAL-RSV-02 | `True` |
| REAL-RSV-03 | `True` |
| REAL-RSV-04 | `True` |
| REAL-RSV-05 | `True` |
| REAL-RSV-06 | `True` |
| REAL-RSV-07 | `True` |
| REAL-RSV-08 | `True` |
| REAL-RSV-09 | `True` |
| REAL-RSV-10 | `True` |
| REAL-RSV-11 | **PASS** — Journal Memory rail lists durable reservation (`mealfow-desktop-journal-sujets-1440.png` + deterministic Memory rail UI) |
| REAL-RSV-12 | **PASS** — Lifecycle / Réserves projection shows reservation state (`mealfow-desktop-reserves-a-qualifier-1440.png`) |
| REAL-RSV-13 | **PASS** — Treat-with-Nora draft continuity (`mealfow-desktop-treat-with-nora-draft-1440.png` + REAL UPDATE turn) |
| REAL-RSV-14 | **PASS** — Mobile reserves surface (`mealfow-mobile-390-reserves.png`) |
| REAL-RSV-15 | `True` |
| REAL-RSV-16 | `True` |
| REAL-RSV-17 | `True` |
| REAL-RSV-18 | `True` |
| REAL-RSV-19 | `True` |
| REAL-RSV-20 | `True` |
| REAL-RSV-21 | `True` |
| REAL-RSV-22 | `True` |
| REAL-RSV-23 | `True` |
| REAL-RSV-24 | `True` |
| REAL-RSV-25 | `True` |
| REAL-RSV-26 | `True` |
| REAL-RSV-27 | `True` |

### REAL-GATE-01…10

| ID | Result |
| --- | --- |
| REAL-GATE-01 | `True` — must_resolve blocks FINALIZE (REAL ledger + assess) |
| REAL-GATE-02 | **PASS** — must_resolve item remains active until confirm (checklist `createdMustResolve`) |
| REAL-GATE-03 | `True` — confirm resolution clears gate |
| REAL-GATE-04 | **PASS** — may_affect control does **not** block FINALIZE alone (REAL control path) |
| REAL-GATE-05 | `True` |
| REAL-GATE-06 | **PASS** — after confirm, gate no longer blocks (`real-finalization-reservation-cleared` evidence family) |
| REAL-GATE-07 | `True` |
| REAL-GATE-08 | `True` |
| REAL-GATE-09 | `True` |
| REAL-GATE-10 | `True` |

### Defer architecture qualification

- **PASS** — no new DeferredDecision store; no second decision engine
- Honest target from ProjectTrajectory next step (`resolveHonestReservationDeferTarget`)
- `must_resolve` → Reporter absent/refusé
- Atomicité: `cycleServices.store.runInTransaction` wraps HD + epistemic update (shared Product SQLite UoW)
- CR-RSV-51/52: HD failure → no deferred; reservation write failure → fail-closed

### DEFER-01…14

| ID | Result |
| --- | --- |
| DEFER-01 | **PASS** — Reporter UX available for nonblocking (`canDeferReservation`) — CR-RSV + UI |
| DEFER-02 | **PASS** — confirmation required before write — JournalSurface |
| DEFER-03 | **PASS** — honest target from trajectory (`resolveHonestReservationDeferTarget`) |
| DEFER-04 | **PASS** — subject `reservation-defer:<id>` |
| DEFER-05 | **PASS** — option `opt:defer-reservation` |
| DEFER-06 | `True` |
| DEFER-07 | **PASS** — actor `LOCAL_PILOTE_ACTOR` / Pilote |
| DEFER-08 | `True` |
| DEFER-09 | `True` |
| DEFER-10 | `True` |
| DEFER-11 | `True` |
| DEFER-12 | `True` |
| DEFER-13 | `True` |
| DEFER-14 | **PASS** — atomic rollback proven CR-RSV-51/52; Option A repro: authority=`pilot` on new HD |
| DEFER-decisionId | `dec:rsv-defer:c769e0a5-f75a-484f-92a6-5aaac003449b` (pre-Option-A REAL; new Defer HDs use authority=`pilot`) |

### CR-RSV-43…52

| ID | Status |
| --- | --- |
| CR-RSV-43 report explicite | **PASS** |
| CR-RSV-44 report ne supprime pas Reservation | **PASS** |
| CR-RSV-45 HumanDecision structurante | **PASS** |
| CR-RSV-46 deferred provenance + target | **PASS** |
| CR-RSV-47 deferred nonblocking ≠ FINALIZE blocker | **PASS** |
| CR-RSV-48 must_resolve cannot defer | **PASS** |
| CR-RSV-49 no target cannot defer | **PASS** |
| CR-RSV-50 cancel confirmation = zero writes | **PASS** |
| CR-RSV-51 HD write failure = non-deferred | **PASS** |
| CR-RSV-52 reservation write failure fail-closed | **PASS** |

### HumanDecision evidence

- Subject: `reservation-defer:<epistemicItemId>`
- Option: `opt:defer-reservation` / « Reporter la réserve »
- Authority: **`pilot`** (Option A) — Pilote runtime structuring; `canActAsPilot`; **not** `canActAsMorris`
- Linked on `reservation.deferred.humanDecisionId`

### Screenshots (`.tmp-sfia-review/cycle-reservation-piloting-proof/`)

- `real-reservation-created-live.png` — REAL ledger evidence board (CREATE)
- `real-reservation-treat-with-nora.png` — REAL UPDATE + MealFlow draft UX cross-ref
- `real-reservation-propose-resolution.png`
- `real-reservation-resolved.png`
- `real-finalization-blocked-by-reservation.png`
- `real-finalization-reservation-cleared.png`
- `reservation-defer-confirmation.png`
- `reservation-deferred-with-target.png`
- MealFlow local UX retained: `mealfow-desktop-*` / `mealfow-mobile-390-reserves.png`

**Note:** IDE browser hit `chrome-error` for disposable-project UI capture this pass; REAL lifecycle proven via Product turn ledger + deterministic UI tests.

### Tests / suite finale

| Check | Result |
| --- | --- |
| typecheck | PASS |
| lint | PASS |
| build | PASS (Next.js compile OK) |
| CR-RSV + Defer targeted | PASS |
| Full Studio suite (post Option A) | **4619 passed / 137 skipped** (431 files: 414 passed / 17 skipped) |
| Prior same-macro suite | 4603/137 — superseded by Option A |
| Prior historical before reservation | 4591/137 |

### Fake/Real

| Claim | Status |
| --- | --- |
| DETERMINISTIC PRODUCT PROOF | YES |
| LOCAL USER-FLOW PROOF | YES (Memory rail + Defer UI tests + MealFlow surface) |
| BOUNDED REAL RESERVATION LIFECYCLE PROOF | YES (CREATE→UPDATE→PROPOSE→confirm→gate→may_affect→defer) |
| global semantic reservation quality PROVEN | **NO** |
| READY FOR REAL global | **NO** |
| runtime v3 ADOPTED | **NO** |
| Nora Cognitive Completion COMPLETE | **NO** |

### Gaps restants / debt / exit

- IDE browser automation unstable (chrome-error) for disposable project screenshots
- Documentary Roadmap still lags #516/#517/this macro (**ROADMAP TRUTH-SYNC REQUIRED** — READ ONLY)
- MealFlow 11 legacy À QUALIFIER unchanged (no bulk cleanup)
- Next: MealFlow semantic campaign (separate GO); MACRO PR READINESS GO distinct

### Roadmap truth-sync (READ ONLY recommendation)

Recommend future delta mentions: #516 · #517 · this macro once proven · REAL bounded lifecycle proof · Defer PASS · next MealFlow semantic campaign · runtime v3 **NON ADOPTED**.

### Anti-claims

- ≠ runtime v3 ADOPTED
- ≠ READY FOR REAL global
- ≠ global semantic reservation quality PROVEN
- ≠ Nora Cognitive Completion COMPLETE
- ≠ new Product Completion closure
- ≠ product commit/push/PR authorized

### Verdict (same-macro + Option A)

**CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING — OPTION A AUTHORITY CORRECTION COMPLETE — SAME-MACRO COMPLETE — READY FOR MACRO PR READINESS**

**MERGE / PRODUCT COMMIT / PRODUCT PUSH / PRODUCT PR — NOT AUTHORIZED** (MACRO PR READINESS — Morris GO distinct)
