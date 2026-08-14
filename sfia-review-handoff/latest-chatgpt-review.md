# Review Pack FULL — M5 ENTRY QUALIFICATION — Evidence/ReviewBundle → Nora/LPS

| Champ | Valeur |
| --- | --- |
| Timestamp | 2026-08-14 23:15:22 CEST (+0200) |
| GO consumed | GO MORRIS — M5 ENTRY QUALIFICATION — EVIDENCE/REVIEWBUNDLE → NORA/LPS — NO REAL — NO DELIVERY |
| Repo | mcleland147/sfia-workspace |
| Cycle | 6 — Architecture technique |
| Profil / Typologie | Critical / EVOL |
| CKC | `pilots/03-architecture-technique.md` (candidate / cognitive guidance only / no execution authority) |
| Branch | `analysis/sfia-studio-m5-entry-qualification` |
| HEAD | `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` |
| origin/main | `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` |
| Incoming handoff observed | `1e22ba99fe32ae898582bf4505ea25ea2d30f844` |
| Project commit/push/PR/merge | NOT PERFORMED |
| Cursor REAL / Delivery / schema mutation | 0 |

## 1. Convergence Pre-check

| Item | État |
| --- | --- |
| Build Doctrine | READ — KEEP (R4/R6/R18 applied analytically) |
| Roadmap | READ — NOT MODIFIED · Git `5132f1bc…` primes SHA snapshots inside Roadmap |
| framing 30/32/33/35/37 | READ (34 only as Execution dependency context) |
| M4 | CLOSED / exit proof ACCEPTED BY MORRIS |
| M5 | PARTIAL / NOT AUTHORIZED — this cycle = ENTRY QUALIFICATION only |
| Next capability after M5 | **M6 — Boucle projet complète** (V3-F05 + F09 base) — NOT STARTED / NOT AUTHORIZED |
| runtime v3 | NON ADOPTED |
| Trajectory link | CONFIRMED: M4 CLOSED → M5 entry qualification → (future) M5 Delivery under separate Morris GO → M6 |
| Parallel architecture needed? | No — reuse existing ports/use cases + Product SQLite backbone (G0-B ADOPTED) |

## 2. Capability / Milestone

| Item | Value |
| --- | --- |
| Primary | V3-F14 Artifact Completeness |
| Linked | V3-F13, V3-F02, V3-F04, V3-F05, V3-F09, V3-F10, V3-F15 |
| Milestone | M5 — Retour de preuve + analyse Nora |
| Previous | M4 CLOSED |
| Next | M6 — Boucle projet complète |

## 3. Sources réellement lues

### Convergence / doctrine / process
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` (Git truth `5132f1bc…` overrides embedded older snapshot SHAs)
- `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md` (as applicable via chain)
- `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md` (LPS doctrine context)
- `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md` (provenance context)
- `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`
- `projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md` (as applicable)
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md`
- `prompts/templates/sfia-cycle-execution-template.md` / routing / operating model / guardrails (process only; not product doctrine)

### Product code (read-only)
- Evidence/ReviewBundle: `app/lib/oa/evidence-review/domain/types.ts`, `reviewBundleTypes.ts`, `coordinationTypes.ts`, `application/ingestExecutionAttemptEvidence.ts`, `registerEvidence.ts`, `createReviewBundle.ts`, `attachEvidenceToReviewBundle.ts`, `completeReview.ts`, `freezeReviewBundle.ts`, `recommendNextGate.ts`, `infrastructure/memoryEvidenceStore.ts`, `memoryEvidenceRepository.ts`, `memoryReviewBundleStore.ts`, `memoryReviewBundleRepository.ts`, ports, `index.ts`
- Attempt: `app/lib/oa/execution-attempt/domain/types.ts`, `memoryExecutionAttemptStore.ts`, `memoryExecutionAttemptRepository.ts`, `sqlite/sqliteLaunchSafetyJournal.ts`, `ports/launchSafetyJournalPort.ts`, `startExecution.ts` (provenance only), `index.ts`
- Project/LPS: `app/lib/oa/project/domain/types.ts`, `application/appendLivingProjectStateVersion.ts`, `sqlite/db.ts`, `sqliteLivingProjectStateRepository.ts`, `createSqliteProductProjectServices.ts`
- ExecutionContract: `app/lib/oa/execution-contract/domain/types.ts` (`decisionRefs`)
- Wiring/UI: `app/lib/vertical-slice-runtime/service.ts` (`wireOaStack`), `features/project-assistant/f3/ingestEvidenceAndRecommend.ts`, `ProjectAssistantPanel.tsx` (F3 cards via prior survey)

## 4. Git Truth

| Check | Result |
| --- | --- |
| origin/main | `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` = expected `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` |
| analysis branch HEAD | `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` |
| tracked/staged before | clean |
| untracked | `.tmp-sfia-review/**` only |
| SFIA_STUDIO_CURSOR_REAL | unset |
| OPS1_CURSOR_REAL | unset |
| status --short | ```?? .tmp-sfia-review/``` |

## 5. Carte architecture actuelle (repo-first)

```
HumanDecision (Product SQLite oa_human_decisions) — DURABLE
  → ExecutionContract (Product SQLite oa_execution_contracts; decisionRefs[]) — DURABLE
    → ExecutionAttempt (Memory Map) — PROCESS-LOCAL
      → resultRef / errorRef on Attempt
      → optional M4 technical journal (isolated SQLite) CREATED/LAUNCHED + Gate D — TEMPORARY WITH EXIT ≠ Product Store
        → Evidence (Memory; bindings + technicalResultRef) — PROCESS-LOCAL
          → ReviewBundle (Memory; evidenceRefs) — PROCESS-LOCAL
            → RecommendNextGate → CoordinationResult (computed; NOT aggregate; NOT persisted)
              → F3/Nora UI DTO cards (process-local display)
                → LivingProjectState (Product SQLite oa_lps) — DURABLE type has evidenceIds/reviewBundleIds
                  BUT AppendLivingProjectStateRequest does NOT currently accept evidenceIds/reviewBundleIds
                  AND no product path writes them from Evidence/ReviewBundle today
```

### Link-by-link matrix

| Maillon | Aggregate/object | Port | Adapter now | Persistence | Restart-safe | Provenance IDs | Tests | UI wiring | Classification | M5 gap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HumanDecision | HD | decision repos | SQLite product | Product SQLite | YES | decisionId | m3 durability tests | product | KEEP | none for M5 entry |
| ExecutionContract | EC | contract repos | SQLite product | Product SQLite | YES | executionContractId + decisionRefs | m3 tests | product | KEEP | none |
| ExecutionAttempt | Attempt | ExecutionAttemptRepositoryPort | MemoryExecutionAttemptRepository | process memory | NO | attemptId, executionContractId(+ver), resultRef | attempt repo/lifecycle/M4 tests | product via RuntimeOaStack memory | REPLACE (persistence) / KEEP domain+ports | durable Attempt |
| Launch journal | technical grants/frontier | LaunchSafetyJournalPort | SqliteLaunchSafetyJournal | isolated SQLite file | YES for frontier only | attempt_id, contract identity, grant | m4 crash/replay | REAL path only | KEEP / TEMPORARY WITH EXIT | exit condition later |
| Evidence | Evidence | EvidenceRepositoryPort | MemoryEvidenceRepository | process memory | NO | evidenceId, bindings (attempt/contract/decision/project…), technicalResultRef | evidence-review tests | F3 cards memory | REPLACE (persistence) / KEEP domain+ports+use cases | durable Evidence |
| ReviewBundle | ReviewBundle | ReviewBundleRepositoryPort | MemoryReviewBundleRepository | process memory | NO | reviewBundleId, evidenceRefs, optional executionContractId/projectId | reviewBundle tests | F3 cards memory | REPLACE (persistence) / KEEP domain+ports+use cases | durable ReviewBundle |
| RecommendNextGate | CoordinationResult | RO readers | in-memory readers over memory stores | none (computed) | N/A | sourceSnapshots / gateConsumed=false | recommendNextGate tests | F3 recommendation card | KEEP | wire after durable sources + LPS factual link |
| LPS | LivingProjectState | LivingProjectStateRepositoryPort | sqliteLivingProjectStateRepository | Product SQLite | YES | lpsVersionId, decisionIds, evidenceIds?, reviewBundleIds? | m1 restart proofs | product | KEEP + ADAPT append request/API for evidence/RB ids | write-back path missing |
| Nora/F3 compose | ingestEvidenceAndRecommend | uses EvidenceReviewServices | memory services | ephemeral chain | NO | attempt→evidence→RB→recommendation DTO | f3.fixtureVerticalSlice | ProjectAssistantPanel | HARVEST/ADAPT compose path — no new engine | durable compose + LPS append |

**Persistence proof (absence):** `app/lib/oa/project/infrastructure/sqlite/db.ts` has `oa_projects`, `oa_lps`, `oa_lps_current`, `oa_cycle_instances`, `oa_human_decisions`, `oa_execution_contracts` — **no** `oa_evidence` / Attempt product tables. Memory stores explicitly comment **NOT DATABASE SELECTED / non-durable**. Launch journal schema is separate (`m4_gate_d_grants`, `m4_launch_frontier`) and documents **NOT Product Store / NOT Attempt store**.

## 6. Asset classification

| Asset | Class | Justification | M5 role | Exit if temporary |
| --- | --- | --- | --- | --- |
| Evidence domain + invariants | KEEP | Stable V3-native aggregate | Core M5 object | — |
| EvidenceRepositoryPort / readers / audit | KEEP | Ports already abstract durability | Persist behind same ports | — |
| MemoryEvidenceRepository/Store | REPLACE | Explicit process-local; blocks restart-safe M5 | Temporary runtime until SQLite adapter | Retire from product path when SQLite Evidence adapter wired + restart proof |
| ReviewBundle domain + invariants | KEEP | Stable hybrid review aggregate | Core M5 object | — |
| ReviewBundle ports | KEEP | Same | Persist behind ports | — |
| MemoryReviewBundleRepository/Store | REPLACE | Process-local | Temporary until SQLite adapter | Same as Evidence |
| IngestExecutionAttemptEvidence | KEEP | Correct bridge Attempt→Evidence; never mutates Attempt; copies resultRef→technicalResultRef | Critical M5 bridge | — |
| RegisterEvidence / create/attach/freeze/complete ReviewBundle | KEEP | Lifecycle already modeled | Use as-is | — |
| RecommendNextGate | KEEP | Explicit recommendation-only; gateConsumed/decisionCreated forced false | Nora recommendation engine already exists | — |
| Claim/Maturity memory stores | FREEZE / later ADAPT | Present but not required for minimal M5 slice | Out of minimal M5 unless completeness path needs them | Do not inflate M5 |
| ExecutionAttempt domain + ports | KEEP | Lifecycle complete for M4 | Provenance source for ingest | — |
| MemoryExecutionAttemptRepository | REPLACE (for M5 coherence) or TEMPORARY WITH EXIT under Option A | Process-local Attempt breaks restart reconstruction / dangling evidence bindings | Depends on M5-A | Exit when SQLite Attempt product adapter exists |
| SQLite LaunchSafetyJournal | KEEP / TEMPORARY WITH EXIT | Protects Gate D single-use + CREATED/LAUNCHED anti-relaunch; ≠ Attempt payload | Keep during M5 Delivery unless M5-C decides otherwise | See §10 |
| LivingProjectState type | KEEP | Already has evidenceIds/reviewBundleIds | Target state surface | — |
| AppendLivingProjectStateVersion | ADAPT | Request currently lacks evidenceIds/reviewBundleIds; does not write them | Factual write-back needs request/API extension | — |
| Product SQLite backbone | KEEP / COMPLETE | G0-B ADOPTED; extend tables for M5 aggregates | Persistence target | — |
| F3 ingestEvidenceAndRecommend + UI cards | HARVEST / ADAPT | Real product compose path; fixture-ish IDs/reservations but real use cases | Compose without new orchestrator | Remove fixture-only HARD claims as maturity advances |
| createSqliteProductProjectServices | KEEP | Project/LPS only today | Not Evidence wiring | — |
| RuntimeOaStack memory Evidence/Attempt | ADAPT | Swap adapters post-decision | Composition root change in Delivery | — |

## 7. Gaps M5 (from repo + Roadmap)

| Gap | Status | Indispensable for M5 slice? |
| --- | --- | --- |
| Durable Evidence behind existing port | MISSING | YES |
| Durable ReviewBundle behind existing port | MISSING | YES |
| Durable ExecutionAttempt product aggregate | MISSING | YES for restart-coherent provenance (Option B); OPTION A accepts temporary debt |
| LPS factual link evidenceIds/reviewBundleIds | Type fields exist; append request + write path MISSING | YES |
| Nora post-exec analysis beyond UI cards | PARTIAL — RecommendNextGate exists; not durable/not LPS-linked | YES (compose + persist sources + surface) |
| Recommendation remains Recommendation | ALREADY enforced in code | KEEP invariant |
| Technical journal exit | OPEN TEMPORARY WITH EXIT | NOT required to close M5 entry; may defer |
| Claim/Maturity durable | Memory | Differable / not minimal M5 |
| CURSOR_REAL_TIMEOUT_POLICY | OPEN NON-BLOCKING | OUT of M5 critical path |
| Auth.js / Critical Ack / OPS1 disposition | future | OUT of M5 |
| runtime v3 ADOPTED | NON ADOPTED | OUT |

## 8. Provenance chain

| Step | ID / binding available today? | Hole |
| --- | --- | --- |
| HD → EC | YES — EC.decisionRefs[] durable | — |
| EC → Attempt | YES — Attempt.executionContractId(+version) memory | lost on restart |
| Attempt → result | YES — Attempt.resultRef memory | lost on restart; journal does not store resultRef |
| Attempt → Evidence | YES — bindings.executionAttemptId + executionContractId; technicalResultRef | Evidence memory → lost; after durable Evidence without durable Attempt, attemptId may dangle |
| Evidence → ReviewBundle | YES — evidenceRefs | memory |
| RB → RecommendNextGate | YES — refs passed into request; sourceSnapshots | result not persisted |
| Recommendation → LPS | NO product write | hole |
| Evidence/RB → LPS | LPS type has arrays; append API does not set them; no caller | hole |
| DecisionId on Evidence | optional binding; F3 ingest does not always set decisionId (sets projectId+contractId) | may need explicit bind from EC.decisionRefs in Delivery |

**Rule:** prefer referencing existing IDs; do not invent parallel proof objects if Evidence/ReviewBundle aggregates suffice.

## 9. Persistence matrix (current)

| Concern | Durable Product SQLite | Memory | Isolated technical SQLite | Computed only |
| --- | --- | --- | --- | --- |
| Project/LPS/Cycle/HD/EC | YES | — | — | — |
| ExecutionAttempt business | — | YES | — | — |
| Gate D / CREATED/LAUNCHED | — | — | YES (M4 journal) | — |
| Evidence | — | YES | — | — |
| ReviewBundle | — | YES | — | — |
| Claims/Maturity | — | YES | — | — |
| RecommendNextGate | — | — | — | YES |

## 10. Technical launch journal — exit analysis

| Question | Answer |
| --- | --- |
| What it protects | Gate D grant single-use; CREATED frontier uniqueness per contract safety identity; LAUNCHED marks; crash/replay anti-ambiguous relaunch |
| What Attempt memory does not persist | Same safety frontier semantics are not in Attempt aggregate store; Attempt holds resultRef/status/business fields journal lacks |
| Keep unchanged during M5? | **YES recommended** unless Morris chooses early retirement after durable Attempt proves equivalent safety |
| Does durable Attempt/Evidence replace it? | Durable Attempt can eventually absorb business recovery; **safety journal role is not automatically identical** — replacement requires explicit proof that relaunch/grant invariants remain fail-closed without dual authority |
| RETIRE LATER condition | (1) Product Attempt durability covers needed restart reconstruction AND (2) Gate D / launch anti-replay invariants relocated or proven redundant AND (3) dedicated Morris GO |
| Premature deletion risk | Silent relaunch / duplicate CREATED / lost grant consumption audit |
| Double-state risk | If both journal and Product Attempt become independently authoritative for launch permission → forbidden; journal must remain technical-only until exit |

**M5-C classification now:** KEEP TEMPORARY WITH EXIT — no structural decision required to start M5 Delivery design; trigger = after Attempt durability + safety equivalence proof.

## 11. M5 user slice (smallest coherent E2E)

**Entry:** an existing terminal ExecutionAttempt with `resultRef` (fixture adapter path acceptable for Delivery QA; REAL not required for M5 capability proof unless Morris later expands).

**Transformations:**
1. IngestExecutionAttemptEvidence (existing)
2. CreateReviewBundle (+ optional freeze if completeness requires — challenge during Delivery; F3 today creates draft with evidence attached)
3. RecommendNextGate (existing; recommendation-only)
4. Factual LPS append linking `evidenceIds` / `reviewBundleIds` (+ optional nextStep text as factual pointer, not decision)
5. UI shows Evidence / ReviewBundle / Recommendation from durable stores and LPS reflects links

**Persisted (target after Delivery):** Evidence, ReviewBundle, (recommended) Attempt, new LPS version.

**Computed only:** CoordinationResult / gate recommendation.

**LPS mutation:** factual linkage only — not HumanDecision, not gate consumption, not trajectory structural replan.

**Visible output:** Nora panel cards + project LPS version showing evidence/RB ids + recommendation visible as Recommendation.

**E2E proof:** restart process → Evidence/RB still loadable → LPS link intact → recommendation recomputable from durable sources → no gate consumed → no autonomous execution.

**Restart proof:** REQUIRED for M5 exit if durability is the selected boundary (Roadmap e2e + V3-F14).

**Exit criteria (proposed):** see §16.

## 12. OPTION A — Evidence + ReviewBundle durable; Attempt remains memory temporary

### Description
Implement SQLite adapters for Evidence + ReviewBundle in Product Store behind existing ports. Keep Memory Attempt. Keep launch journal TEMPORARY WITH EXIT. Extend LPS append for evidence/RB ids. Compose existing use cases.

### Future components / tables (indicative, not implemented)
- `oa_evidence` (+ idempotency index)
- `oa_review_bundles` (+ evidence ref relation or JSON refs matching current aggregate)
- SqliteEvidenceRepository / SqliteReviewBundleRepository
- wireOaStack adapter swap
- AppendLivingProjectStateRequest ADAPT for evidenceIds/reviewBundleIds
- thin application “recordEvidenceOutcomeToLps” or extend F3 compose

### Invariants / atomicity / restart / idempotence / provenance
- Keep Evidence/RB OCC + idempotency keys
- Prefer unit-of-work within Product Store for RB create+attach if needed; cross-aggregate Evidence↔RB still careful (ports today say no cross-aggregate transaction claim — Delivery must not invent silent distributed TX)
- Restart: Evidence/RB survive; Attempt lost → bindings.executionAttemptId may dangle; technicalResultRef + executionContractId still usable
- Provenance HD→EC durable; Attempt gap after restart

### Cost / complexity / debt
- Lower immediate scope than B
- Introduces explicit debt: Attempt product durability TEMPORARY WITH EXIT (owner: Studio OA; exit: M5 follow-on or early M6; proof: Attempt restart load + no dangling critical UX)
- Launch journal exit delayed further

### Risks
- Artificial frontier: durable proof objects pointing at ephemeral Attempt
- Dual mental model for operators after restart
- Temptation to treat journal as Attempt store (must forbid)

### Reversibility
Medium — adapters behind ports; memory can remain for tests

### M5 capability unlocked
Partial restart-safe Evidence/RB + LPS link + recommendation; Attempt history not restart-safe

### Proof of exit for Option A debt
Durable Attempt adapter + restart proof OR Morris accepts permanent ID-only Attempt refs with documented limitation (unlikely desirable)

### Pros / cons / reserves
- Pros: faster slice; matches Roadmap “durable evidence” literal gap
- Cons: R18 coherent gap partially deferred; provenance hole; journal exit harder
- Reserves: dangling attemptId; F3 Attempt card empty after restart

## 13. OPTION B — Attempt + Evidence + ReviewBundle durable together in Product SQLite

### Description
Close the coherent post-exec persistence frontier in one authorized Delivery program (may be sequenced PRs but one Morris-selected boundary): Product SQLite Attempt + Evidence + ReviewBundle; LPS factual write-back; compose existing use cases; keep launch journal TEMPORARY WITH EXIT until safety equivalence.

### Future components / tables (indicative)
- `oa_execution_attempts` (business aggregate; NOT m4 journal)
- `oa_evidence`, `oa_review_bundles`
- SQLite repos for all three behind existing ports
- Attempt reader for ingest remains port-based
- wireOaStack uses SQLite Attempt + EvidenceReview services
- LPS append ADAPT

### Invariants / atomicity / restart / idempotence / provenance
- Restart-safe chain EC→Attempt→Evidence→RB
- Prefer Product UoW patterns already used for Project/LPS/HD/EC
- Idempotency keys preserved
- Full ID provenance without dangling Attempt
- Journal remains technical-only (no dual product Attempt authority)

### Cost / complexity / debt
- Higher Delivery cost than A
- Aligns Build Doctrine R18
- Reduces new temporary debt; journal still TEMPORARY WITH EXIT (narrower)

### Risks
- Larger PR surface; migration/schema discipline
- Over-scoping Claim/Maturity if not fenced
- Future-prep inflation if Claims/Maturity pulled in

### Reversibility
Medium — still port-based; larger schema commitment

### M5 capability unlocked
Full restart-safe post-exec proof path matching Roadmap e2e spirit

### Pros / cons / reserves
- Pros: coherent; best provenance; clears path to journal exit later; avoids artificial Attempt hole
- Cons: more work; needs careful sequencing
- Reserves: journal still present; REAL not required for M5 proof; Claims/Maturity still memory OK

## 14. OPTION C — LPS-only summaries / links without durable Evidence/ReviewBundle aggregates

### Description
Append LPS text/summary and id lists without persisting Evidence/ReviewBundle aggregates.

### Verdict
**REJECT as M5 architecture option.**

### Why
- Contradicts V3-F14 Artifact Completeness and Roadmap gap “durable evidence”
- Loses ReviewBundle lifecycle (freeze/complete/evidence refs integrity)
- RecommendNextGate needs readable Evidence/RB versions — would force re-fixture or hide proof
- Creates parallel “proof in LPS narrative” architecture (Build Doctrine R6 anti-pattern)

Not retained beyond challenge record.

## 15. Comparative trade-offs

| Dimension | A | B | C |
| --- | --- | --- | --- |
| Restart-safe Evidence/RB | YES | YES | NO (ids without aggregates) |
| Restart-safe Attempt | NO | YES | NO |
| Provenance completeness | PARTIAL | STRONG | WEAK |
| R18 coherent gap | PARTIAL | YES | NO |
| Delivery cost | Lower | Higher | False-low then rewrite |
| New temporary debt | Attempt durability | Mostly journal only | Proof architecture debt |
| Parallel architecture risk | Low-medium | Low | High |
| Journal exit readiness | Later | Closer | Worse |
| Aligns V3-F14 | Partial+ | Yes | No |

## 16. Nora → LPS write-back options (structural arbitration)

### A. Factual state update (mechanizable)
Examples: evidence available; reviewBundle linked; technicalResultRef referenced; reserve still open as factual note.
- Can be L1/L2 automation after Evidence/RB persist
- Must use AppendLivingProjectStateVersion with OCC expectedVersion
- Must NOT set trajectory structural fields as “approved plan”
- ADAPT append request to accept evidenceIds/reviewBundleIds (carry-forward semantics like decisionIds)

### B. Recommendation
- Keep CoordinationResult / RecommendNextGate as Recommendation (`kind: "recommendation"`, `gateConsumed: false`, `decisionCreated: false`, `executionAuthority: false`)
- Surface in UI; optionally store a **reference** (e.g. correlationId / recommendation snapshot ref as epistemic or audit event) — **not** HumanDecision
- Do not auto-create HD

### C. Structural replan / decision
- Remains Morris / HumanDecision path (M3 machinery)
- M6 territory for full governed replan loop

### Write-back variants compared

| Variant | UX | Automation | Authority | Atomicity | Provenance | OCC | Restart | Implicit decision risk |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| W1: factual LPS append + separate Recommendation UI | Cards + LPS ids updated | L1–L2 | system factual / Morris for decisions | LPS append Tx; recommendation computed | strong if aggregates durable | yes | good | low |
| W2: LPS append only after human validate recommendation | Extra confirm step | L0–L1 | Morris/human always | same | strong | yes | good | lowest |
| W3: auto-apply recommendation as next trajectory/gate | “auto next” | L3+ forbidden here | usurps Morris | — | — | — | — | **HIGH — REJECT** |

**RECOMMENDATION (write-back):** **W1** for M5 — factual LPS linkage automated; Recommendation remains visible/recomputable; structural changes require separate HumanDecision/Morris. Offer W2 as stricter alternative if Morris wants human ack before LPS evidence link (usually unnecessary for factual ids).

## 17. Nora existing reuse

| Question | Fact |
| --- | --- |
| What exists? | Domain+app use cases; RecommendNextGate; F3 ingestEvidenceAndRecommend; UI F3 cards; RuntimeOaStack wiring |
| Fixture/test-only? | F3 uses fixture-like evidence/RB ids and HARD reservation strings; underlying commands are real OA services |
| Product-wired? | YES via vertical-slice-runtime memory services |
| HARVEST/ADAPT? | Compose path + UI; swap persistence adapters |
| New orchestrator needed? | **NO** — compose existing commands; forbid “M5 Engine” / parallel store |
| Enough ports? | YES — prove by adapter implementation in Delivery |

## 18. Coherent gap closure (R18)

| Gap | Classification |
| --- | --- |
| Evidence durability | Indispensable M5 |
| ReviewBundle durability | Indispensable M5 |
| Attempt durability | Coherent indispensable under Option B; deferrable debt under Option A |
| LPS evidence/RB linkage | Indispensable M5 |
| Nora recommendation linkage | Indispensable as Recommendation surface; not as Decision |
| Technical journal exit | Differable with exit; not blocking M5 entry |
| Claims/Maturity durability | Future-prep inflation if forced into minimal M5 |
| Timeout policy / IAM / OPS1 | Hors M5 |

## 19. Critical path — recommended future Delivery sequence (NOT executed)

1. **Morris GO M5-A (+ M5-B)** — select persistence boundary + write-back authority
2. **Foundation persistence** — schema + SQLite adapters behind ports (Attempt if B; Evidence; ReviewBundle) + unit/repo tests
3. **Composition root wire** — RuntimeOaStack uses durable adapters (REAL still default OFF)
4. **Bridge path** — ingestExecutionAttemptEvidence on durable Attempt reader
5. **ReviewBundle durable path** — create/attach/(optional freeze)
6. **RecommendNextGate** — unchanged semantics on durable readers
7. **LPS factual write-back** — ADAPT append + compose after evidence/RB
8. **UI** — F3/Nora cards read durable state; show recommendation as Recommendation
9. **QA M5** — restart proof + anti-claims (no gate consume, no auto HD, ZERO unauthorized REAL)
10. **Journal exit evaluation** — separate GO when ready (M5-C)

Each step unlocks: durable proof objects → restart-safe Nora view → LPS-linked state → M5 exit candidate.

Files/zones probable: `app/lib/oa/evidence-review/infrastructure/sqlite/**`, `app/lib/oa/execution-attempt/infrastructure/sqlite/**` (product Attempt, distinct from launch journal), `project/infrastructure/sqlite/db.ts`, `vertical-slice-runtime/service.ts`, `features/project-assistant/f3/**`, tests under `__tests__/oa/**`.

## 20. Proposed M5 exit proof (future)

### Obligatory
- Admissible execution result produces/retrieves Evidence via ingest path
- Evidence available after process restart (if durability selected — yes under A/B)
- ReviewBundle exploitable + visible in product UI after restart
- Provenance to ExecutionContract retained; Attempt retained under B (under A: documented attemptId dangling reserve)
- Nora/RecommendNextGate produces bounded CoordinationResult Recommendation
- LPS new version includes evidenceIds/reviewBundleIds factual links
- Recommendation ≠ HumanDecision; gateConsumed=false; executionAuthority=false; no autonomous StartExecution
- Restart/reload preserves expected durable state
- Git/runtime evidence reproducible (tests + documented procedure)

### Recommended not strictly obligatory for first M5 close
- Full ClaimEvaluation/Maturity path
- Launch journal retired
- REAL Cursor path for M5 proof
- M6 full conversation→… loop without copy-paste

## 21. DebtItems / exits

| ID | Debt | Exit |
| --- | --- | --- |
| DEBT-M5-ATTEMPT (only if Option A) | Attempt product memory | SQLite Attempt + restart proof |
| DEBT-M4-JOURNAL | Launch journal TEMPORARY WITH EXIT | Safety equivalence + Morris GO |
| DEBT-M5-APPEND-API | Append request lacks evidence/RB ids | ADAPT in Delivery |
| DEBT-CLAIM-MATURITY-MEM | Claims/Maturity memory | Later milestone if needed |
| CURSOR_REAL_TIMEOUT_POLICY | OPEN NON-BLOCKING | Future REAL class qualification — not M5 blocker |
| Confirmation/Auth.js | prior temporary | Future IAM — out of M5 |

## 22. Decision Pack Morris

### M5-A — Persistence boundary — DECISION REQUIRED
- **Subject:** Evidence/ReviewBundle only (A) vs Attempt+Evidence+ReviewBundle coherent close (B)?
- **Options:** A / B / (C rejected)
- **Recommendation (RECOMMENDATION ONLY):** **Option B**
- **Why:** R18 coherent gap; restart-safe provenance; avoids artificial dangling Attempt; closer to Roadmap e2e; still reuses ports (no parallel architecture); Option A acceptable only if Morris explicitly accepts Attempt restart hole + longer journal dependency
- **Trade-offs:** B costs more Delivery; A ships faster with structural debt
- **Debt:** B → journal remains; A → Attempt + journal
- **Reversibility:** port-based adapters; schema additive
- **Impact M5:** determines restart proof strength
- **Impact future:** B eases M6 loop and journal exit
- **Proof needed before ADOPT claim in Delivery:** schema+adapters+restart tests
- **GO Morris required:** YES before any M5 Delivery

### M5-B — Nora/LPS write-back authority — DECISION REQUIRED
- **Subject:** Which LPS mutations may be mechanized vs human-gated?
- **Options:** W1 factual auto + Recommendation separate / W2 human ack before LPS link / W3 auto-structural (reject)
- **Recommendation (RECOMMENDATION ONLY):** **W1**
- **Trade-offs:** W1 enables M5 without turning Recommendation into Decision; W2 safer politically but slower UX; W3 violates doctrine
- **Debt:** none structural if Recommendation invariants preserved
- **Reversibility:** high
- **Impact M5:** enables LPS updated exit criterion
- **Impact future:** keeps M6 replan governed
- **Proof:** append OCC tests; anti-claim tests gateConsumed/decisionCreated false
- **GO Morris required:** YES before implementing write-back

### M5-C — Technical launch journal exit — NOT REQUIRED TO DECIDE NOW
- **Classification:** KEEP TEMPORARY WITH EXIT
- **Trigger future:** durable Attempt safety equivalence + dedicated Morris GO
- **Recommendation:** do not retire during first M5 persistence Delivery

## 23. Explicit labels

- All architecture choices above are **RECOMMENDATION ONLY** until Morris GO.
- **DECISION REQUIRED:** M5-A, M5-B (M5-C deferred keep).
- **M5 DELIVERY NOT AUTHORIZED** by this cycle.
- **NO option ADOPTED.**

## 24. Réserves

- Roadmap metadata Snapshot may still mention older SHA in body; Git `5132f1bc…` is SoT for this cycle
- F3 still carries fixture-flavored ids/HARD strings — Delivery should not confuse with architecture need for new engine
- Append API gap means LPS type fields alone ≠ write-back capability
- Option A residual provenance hole if chosen
- Claim/Maturity not in minimal slice
- No REAL used or required for qualification

## 25. Anti-claims

- M5 DELIVERY NOT AUTHORIZED
- No persistence option ADOPTED without Morris
- Evidence/ReviewBundle/Attempt durable NOT implemented by this analysis
- Nora/LPS write-back NOT implemented by this analysis
- Recommendation ≠ HumanDecision
- NextGate/CoordinationResult ≠ gate consumed
- LPS factual update ≠ structural trajectory validated
- M5 qualification COMPLETE ≠ M5 CLOSED
- M5 CLOSED (future) ≠ M6 authorized
- M4 remains CLOSED
- CURSOR_REAL_TIMEOUT_POLICY not on M5 critical path
- runtime v3 NON ADOPTED
- Studio v3 target ≠ global SFIA baseline promotion
- This Cursor cycle executor ≠ Studio inner Cursor REAL
- ZERO REAL authorized by this GO

## 26. Git after (pre-handoff publish)

Tracked product modifications: **0**
Staged: **0**
Schema/migrations: **0**
Roadmap modifications: **0**
Untracked analysis artifacts under `.tmp-sfia-review/**` only

## 27. Verdict

**M5 ENTRY QUALIFICATION COMPLETE — ARCHITECTURE OPTIONS + RECOMMENDATION READY FOR MORRIS DECISION — NO REAL — NO DELIVERY — M5 DELIVERY NOT AUTHORIZED**

### Instruction ChatGPT
Lire `sfia-review-handoff/latest-chatgpt-review.md` sur `origin/sfia/review-handoff`. Vérifier: base `5132f1bc…`, cycle Critical architecture, carte persistence memory vs SQLite, options A/B (+C rejected), recommendation Option B + write-back W1, M5-A/M5-B DECISION REQUIRED, M5-C KEEP TEMPORARY, next capability M6, ZERO REAL, ZERO Delivery, anti-claims. Ne pas autoriser Delivery sans nouveau GO Morris sur M5-A/M5-B.
