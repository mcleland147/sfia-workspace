# FULL ARCHITECTURE AUDIT — CHAT-FIRST-WORK-RECOMMENDATION-CONTINUITY-01

## 0. Meta
- timestamp: `2026-10-03T07:53:49Z`
- macro: `CHAT-FIRST-WORK-RECOMMENDATION-CONTINUITY-01`
- pass: 01 — Architecture / qualification
- cycle: 6 — Architecture technique
- profile: **CRITICAL**
- typology: EVOL
- CKC: `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` — candidate / experimental cognitive guidance / no execution authority
- runtime v3: **NON ADOPTED**
- Product Completion: C1 applicable
- implementation in this cycle: **NONE**
- unique verdict: **ARCHITECTURE AUDIT COMPLETE — MORRIS DECISION PACK READY**

## 1. Local Git Truth
- workspace: `/Users/morris/Projects/sfia-studio-chat-first-work-recommendation-continuity-01`
- branch: `audit/sfia-studio-chat-first-work-recommendation-continuity-01`
- HEAD: `193b79d6732cca8fe49455fc4df866add301e56f`
- origin/main: `193b79d6732cca8fe49455fc4df866add301e56f` (MATCH expected)
- project dirty: none intentional (only `.tmp-sfia-review/**` temp artefacts)
- project commit / push / PR: **NO**

## 2. Sources actually read
### Construction / convergence
1. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` (capability matrix context via roadmap cross-read)
2. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` — V3-F04/F05/F06/F09 states
3. `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` — Recommendation ≠ HD; PT MUST; Nora non-authority
### Doctrine v3
4. `sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md` (via C1 index + doctrine obligations)
5. `sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
6. `sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`
7. `sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md`
### Living runtime reference
8. `production-runtime-reference/03-end-to-end-flow-catalog.md` — chat-first Work spine = optset / resolveChatFirstPilotDecision
9. `production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md` — CHAT-FIRST overlay; Journal Work-only; Lifecycle right; no ACW→Journal junction documented
### Process / CKC
10–14. cycle execution template, routing guide, v2.5 cycles method candidate, CKC `03-architecture-technique.md`, rules/guardrails (routing/profile only)
### Code (read-only, main HEAD)
- `materializeActiveCycleWork.ts`
- `deriveWorkRecommendations.ts`
- `resolveCurrentNoraTrajectoryRecommendation.ts`
- `trajectoryRecommendationCurrentness.ts`
- `resolveTrajectoryDecisionSupportProjection.ts`
- `assessChatFirstWorkEligibility.ts`
- `resolveChatFirstPilotDecision.ts`
- `presentedOptionSet.ts` (`DecisionSubjectMode = "proposal" | "project_trajectory"` only)
- `JournalSurface.tsx`
- tests: `deriveWorkRecommendations.d0.test.ts`, `activeCycleCognitiveWork.d0.test.ts`, `habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts`, chat-first UI tests

## 3. Convergence pre-check
| Dimension | Qualification |
|---|---|
| Capacités v3 | **V3-F04** (épistémologie ACW) + **V3-F05** (chat→disposition) + **V3-F06** (ProjectTrajectory) ; **V3-F09** only if true replan |
| Milestone Roadmap | Post W2 CLOSED / chat-first Work INTEGRATED (#537) ; ACW INTEGRATED ; semantic continuity INTEGRATED — **junction ACW→Work Journal/disposition missing** |
| État actuel | PARTIAL RUNTIME — three Recommendation families exist; Work Journal only sees optset |
| KEEP | EpistemicItem store; PresentedOptionSet; decideTrajectory; Lifecycle right panel; Journal read-only; Structured Outputs ACW |
| ADAPT | `isWorkRecommendationItem` / projection; TDS gating after PT decided; ACW→subject binding; prompt/TDS so Nora does not treat every work advice as PT option |
| COMPLETE | End-to-end ACW Work Recommendation → Journal → chat disposition while PT already decided |
| RETIRE LATER | legacy_cta (unchanged by this audit) |
| Gaps | ACW Recommendation durable but excluded from Journal Work; PT path absorbs `opt:trajectory:*` ACW; no `work_recommendation` subject family; currentness cutoff ignores `candidate_trajectory` HD |
| Dependencies | Existing chat-first Work spine (#537); ACW materializer; Nora trajectory recommendation resolver; PT decided pointer |
| Lien trajectoire | Holds: F04/F05/F06 on critical path; F09 only for genuine replan — **NOT missing** |
| Exit proof | See §Decision Pack L |
| Dette + exit | Third Recommendation carrier without Work junction — exit by converging to one chat-first Work disposition spine |
| Gate Morris | **YES** — subject-family / Option A vs C |
| Capacité suivante | Delivery borné après décision Morris — NOT this cycle |
| Chemin critique | End-to-end chat-first Work continuity > micro-hardening |
| Anti-parallel | Must reuse Epistemic + PresentedOptionSet + decideTrajectory — no second decision engine |
| Recommendation ≠ HD | PRESERVED requirement |
| Nora ≠ authority | PRESERVED |
| Lifecycle ≠ Work | PRESERVED (right vs left) |
| PT ≠ generic WR | **currently VIOLATED in practice** via shared `opt:trajectory:*` on ACW |
| Left ≠ decision surface | PRESERVED (`JournalSurface` resume-only) |
| Right Lifecycle ≠ WR dump | PRESERVED |

## 4. HabitFlow Replay 02 — instance facts (READ-ONLY)
Store: `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/new-project-campaign-01/product/oa-product.sqlite` (mode=ro).
ZERO WRITE.

| Fact | Value |
|---|---|
| projectId | `prj:0ed5c4e1-3d23-45cd-b34b-530df1090197` |
| title | **HABITFLOW-REPLAY-02** |
| LPS | `lps:8f630953e327b684` version **7** |
| activeCycleInstanceId | `cyc:trj-1175b58af7202653868f9129` (`cyc:framing`, active, Light) |
| ProjectTrajectory | `trj:lr-bridge-4cfb9c6a7d0d` status **validated** |
| decidedByDecisionRef | `dec:gf-trj:195b4bd2-a6ee-4798-82b6-61f8ed8414d2` |
| HD subject | `project.trajectory.approval:trj:lr-bridge-4cfb9c6a7d0d:v1` |
| HD status/authority | accepted / pilot @ 2026-10-02T20:25:44.944Z |
| HD DecisionBasis.sourceType | **`candidate_trajectory`** (NOT `trajectory_option`) |
| HD selectedOptionId | `opt:approve-candidate-trajectory-as-is` |
| ACW Recommendations | 3 active, source=`active-cycle-work:nora` |
| Latest ACW Rec | `epi:acw:25f58441f418369293a9` @ 2026-10-03T07:14:04.166Z — work-like statement + **`opt:trajectory:bounded-direct`** |
| Explicit PT ACW Rec | `epi:acw:25a2cc81c1ec3e95de04` @ 06:15 — « Recommendation ProjectTrajectory : retenir la trajectoire bornée directe… » + same opt |
| optset Work Recommendations | **0** |
| PresentedOptionSet Work / DecisionRef for WR | **none** for this project |
| Lifecycle Rec | `epi:lr:18b009884197bfa3:…` (start Cadrage) — separate family |

**Instance vs static model:** CONSISTENT — no `STOP — INSTANCE EVIDENCE CONTRADICTS STATIC MODEL`.
Observed UI « Recommandations (0) » is explained by zero `optset:` Work Recommendations + ACW exclusion from `isWorkRecommendationItem`.

## 5. Hypotheses H1–H7
| H | Verdict | Evidence |
|---|---|---|
| H1 | **CONFIRMED** | `materializeActiveCycleWork` writes `source=active-cycle-work:nora`, relatedObjects = `[projectId, cycleId, trajectoryId?, stepId?, recommendedOptionRef?]`, status active, LPS link; writer = materializeActiveCycleWork UoW |
| H2 | **CONFIRMED** | `isWorkRecommendationItem` accepts only `source`/`relatedObjects` `optset:*` after excluding lifecycle — ACW+`opt:trajectory:*` **excluded** from Journal |
| H3 | **CONFIRMED** | `selectCurrentNoraTrajectoryRecommendationItems` filters `ACTIVE_CYCLE_WORK_SOURCE` + type Recommendation + active + cycle + non-null extracted opt (prefers `opt:trajectory:*`) |
| H4 | **CONFIRMED** | `DecisionSubjectMode` / eligibility / resolver families = **`proposal` \| `project_trajectory` only** — no `work_recommendation` / `active_cycle_work` |
| H5 | **CONFIRMED** | With `decidedByDecisionRef`, eligibility returns `no_eligible_subject`; resolver returns `TRAJECTORY_ALREADY_DECIDED` — matches Nora « trajectoire déjà validée / pas de nouvelle décision » |
| H6 | **CONFIRMED** | PRR 03 + code: Proposal → PresentedOptionSet → optset WR → pilotDecisionCandidate → resolveChatFirstPilotDecision → decideTrajectory → HD → disposition |
| H7 | **CONFIRMED (incomplete junction, not proven regression)** | Chronology: ACW `85d7a798` (2026-09-10) → semantic continuity PT binding `71c31a8e` (2026-09-26) → Journal Work `d12272e8` / merge #537 (2026-09-27). No historical oracle ACW Rec → Journal → chat disposition. Call « gap / incomplete convergence », not « regression ». |

## 6. Call graphs (exact)

### A. ÉMISSION
Pilot message → `projectAssistantSendAction` / Nora structured turn → `activeCycleWork[]` → schema/parser (`noraProductTurnOutputType`) → `validateActiveCycleRecommendationAgainstDecisionSupport` (if trajectory ref) → `materializeActiveCycleWork` → EpistemicItem `source=active-cycle-work:nora` + LPS `epistemicItemIds`.

### B. PROJECTION MÉMOIRE GAUCHE
Epistemic list → `projectCycleWorkRecommendations` → `isWorkRecommendationItem` (**optset only**) → `actions.ts` sets `cycleWorkRecommendations` → `JournalSurface` tab Recommandations (read-only; `onResumeRecommendationInChat` only).
**ACW Recommendations never enter this projection today.**

### C. DECISION SUPPORT (PT)
ACW Recommendation with opt → `resolveCurrentNoraTrajectoryRecommendation` → `resolveTrajectoryDecisionSupportProjection` (state PRESENT + optionRefs from `deriveTrajectoryOptions`) → `studioCognitiveContext` / prompt.
**Cutoff** via `trajectoryRecommendationCurrentness` only for HD `decisionBasis.sourceType===trajectory_option` + same cycle — **HabitFlow candidate_trajectory HD does NOT cut off**.

### D. DISPOSITION CHAT-FIRST
Pilot chat → intent/`pilotDecisionCandidate` → `assessChatFirstWorkEligibility` → subject `proposal` OR `project_trajectory` → `resolveChatFirstPilotDecision` → `decideTrajectory` / HD → Work Recommendation disposition (`disposeWorkRecommendationAfterDecision` / defer).
**If PT already decided and no Proposal subject: ZERO disposition path for ACW.**

### E. LIFECYCLE DROITE
Lifecycle Recommendation `source=lifecycle-recommendation:nora` + typed payload → lifecycle projection / `LifecycleSurface` CURRENT only — NOT Journal Work; NOT chat-first START/FINALIZE.

### Separation today
| Family | Source / carrier | Surface | Disposition |
|---|---|---|---|
| Work (nominal) | `optset:*` Recommendation | Journal left | chat-first → decideTrajectory |
| Lifecycle | `lifecycle-recommendation:nora` | Right panel | explicit Studio actions |
| ACW Nora | `active-cycle-work:nora` | Chat + TDS/PT path if `opt:trajectory:*` | **no Work chat-first; PT blocked if decided** |

## 7. Q1–Q7 answers
**Q1.** Observed « Trajectoire bornée directe » on Replay 02 is **architecturally treated as ProjectTrajectory Recommendation** (ACW + `opt:trajectory:bounded-direct` → TDS/PT resolver). Semantically the latest statement is **work/continuation advice** after PT already validated — Nora also emitted an explicit PT Recommendation earlier. Mixed: **wrong/overloaded type binding**, not absence of durable item.

**Q2.** YES — `opt:trajectory:*` is used both for PT replan/accept path and as ACW recommendedOptionRef for in-cycle advice. **Central semantic collision.**

**Q3.** TDS currently always derives PT options when cycle active + qualification OK — **too wide after PT decided without replan signal**. Legitimate for replan under material drift / F09; not as standing menu for every ACW turn.

**Q4.** Doctrine/runtime: structuring Pilot choices need HD; chat-first Work dispositions (accept/amend/refuse/defer) create HD on sealed subjects. Clarification/continuation without sealed subject should NOT invent HD. Do not invent new policy beyond: HD when governed sealed subject disposed.

**Q5.** Currentness cutoff keyed only to `trajectory_option` HD is **appropriate for PT Recommendations**, **not** for all Work Recommendations. HabitFlow `candidate_trajectory` HD leaves post-decision ACW PT-tagged Recs as CURRENT — mismatch.

**Q6.** Existing Journal projects **optset Work Recommendations belonging to cycle** (active/resolved via dispositionDecisionId). Target coherent with chat-first: project **governed Work Recommendations awaiting/after disposition** (sealed subject), not every ACW utterance and not Lifecycle. ACW-only without sealed subject should either be bound into Work spine or not claim Journal « Recommandations » count.

**Q7.** Disposition states today via EpistemicItem.status (`active`/`resolved`/…) + DecisionRef related to optset + HD — **no second store**. Future ACW Work must reuse this.

## 8. Root cause
**Primary (B): Product orchestration / semantic binding gap** — ACW Recommendation carrier was never joined to the chat-first Work spine (Journal classifier + subject eligibility + disposition).
**Amplifier (A partial): option-ref / prompt-context collision** — TDS keeps offering `opt:trajectory:*`; Nora binds work-like Recommendations to those refs; Studio routes them as PT Recommendations; PT-already-decided then blocks HD.

Not a missing OpenAI primitive. Structured Outputs KEEP.

## 9. Why deterministic proofs missed it
Proven separately:
- ACW materialization / option-ref contract
- Nora→TDS trajectory recommendation
- optset Work → Journal + chat-first HD
- Lifecycle right-only
Missing cross-oracle:
- ACW Rec → Journal
- ACW Rec → chat-first disposition
- ACW work-like Rec while PT already decided
- ACW non-trajectory Rec Journal/disposition
- candidate_trajectory HD vs trajectory_option currentness interaction

## 10. Test gap matrix
| # | Case | Status |
|---|---|---|
| 1 | Proposal WR → Journal | **COVERED** (`deriveWorkRecommendations.d0`, UI chat-first) |
| 2 | Proposal WR → chat-first HD | **COVERED** (habitFlow / productChatFirst tests) |
| 3 | Lifecycle Rec → right only | **COVERED** (deriveWorkRecommendations lifecycle projection) |
| 4 | ACW Rec → TDS | **COVERED** (semantic continuity / ACW tests) |
| 5 | ACW Rec → Journal | **MISSING** |
| 6 | ACW Rec → chat-first disposition | **MISSING** |
| 7 | ACW WR with PT already decided | **MISSING** (only PT block path proven) |
| 8 | ACW Rec non-trajectory | **PARTIAL** (materialize allows null ref; no Journal/disposition oracle) |

## 11. Git history (useful)
- `85d7a798` 2026-09-10 — feat: ground Nora in active cycle work (`ACTIVE_CYCLE_WORK_SOURCE`)
- `71c31a8e` 2026-09-26 — feat: preserve pilot nora semantic continuity (`resolveCurrentNoraTrajectoryRecommendation`)
- `d12272e8` / `#537` 2026-09-27 — feat: chat-first governed work decisions (`isWorkRecommendationItem` / Journal)
- `94b69178` / `#546` — ACW option-ref contract (Recommendation vs non-Rec) — does **not** join Work Journal

## 12. Asset classification
| Asset | Class | Why if ADAPT/COMPLETE |
|---|---|---|
| materializeActiveCycleWork | **KEEP** (+ minor ADAPT later for provenance/subject link) | Durable ACW writer correct |
| deriveWorkRecommendations / isWorkRecommendationItem | **ADAPT** | Must not silently ignore ACW Work once subject sealed; today optset-only |
| projectCycleWorkRecommendations | **ADAPT** | Same |
| resolveCurrentNoraTrajectoryRecommendation | **ADAPT** | Limit to genuine PT/replan Recommendations; not all ACW+opt:trajectory |
| resolveTrajectoryDecisionSupportProjection | **ADAPT** | Gate PT options when trajectory already decided without replan signal |
| trajectoryRecommendationCurrentness | **ADAPT** | Align cutoff with all PT-deciding HD kinds (`candidate_trajectory` / trajectory_option) OR scope only PT Recs |
| resolveChatFirstPilotDecision | **ADAPT** / possibly **COMPLETE** | Needs Work path for ACW-bound sealed subject without forcing false PT HD |
| assessChatFirstWorkEligibility | **ADAPT** | Same families constraint |
| PresentedOptionSet | **KEEP** (Option A) / **STOP Morris if Option C** | Modes today proposal\|project_trajectory only |
| proposeTrajectoryOptions | **KEEP** for PT; do not reuse blindly for generic Work |
| decideTrajectory | **KEEP** | Canonical HD writer |
| deferWorkRecommendation | **KEEP** | Work defer spine |
| JournalSurface | **KEEP** | Read-only + resume in chat |
| LifecycleSurface | **KEEP** | Right Lifecycle only |
| studioCognitiveContext / buildProjectSystemPrompt | **ADAPT** | Distinguish PT-replan vs in-cycle Work Recommendation context |
| Structured Outputs / ACW schema | **KEEP** | No new provider primitive |

## 13. Architecture options
### OPTION A — ADAPT PresentedOptionSet / Proposal Work spine (preferred direction)
Nora ACW Work → seal durable Work subject as PresentedOptionSet (`optset`) + Work Recommendation → Journal → existing chat-first disposition → decideTrajectory HD.
- Reuses: Epistemic, PresentedOptionSet, decideTrajectory, defer, Journal
- New concepts: none if Proposal/subject can be honest; **risk** of artificial Proposal
- Authority: Pilot-only HD preserved
- Persistence: no new store
- Complexity: medium
- Debt: must define when to seal (lazy on disposition vs at Recommendation emit)
- Reversibility: good
- Compatibility: best with #537 spine
- Risk: forcing Proposal where none exists

### OPTION B — ADAPT classifier + resolver for ACW direct
Treat `active-cycle-work:nora` as first-class Work Recommendation without optset.
- Risk: **second Work decision engine** unless options still server-sealed and HD subject durable
- Unclear sealed option source for arbitrary model text
- Higher authority/persistence ambiguity
- Not preferred without proving Option A impossible

### OPTION C — new `decisionSubjectMode` (e.g. `active_cycle_work`)
Only if Proposal and ProjectTrajectory cannot honestly carry the subject.
- **STOP — MORRIS DECISION REQUIRED** (structuring)
- Do not adopt in audit/Delivery without Morris GO

### OPTION D — repo-simpler hybrid found
Keep ACW EpistemicItem as memory carrier; **require** server seal of PresentedOptionSet for any chat-disposable Work Recommendation (lazy, disposition turn) — Journal projects the optset WR (or ACW linked once sealed); PT path remains for explicit replan Recommendations only; TDS suppressed/ narrowed when `decidedByDecisionRef` set without replan signal.
- This is Option A with explicit PT/TDS ADAPT — **recommended Cursor packaging**

## 14. OpenAI capability fit
- Cognitive need: emit non-authoritative Recommendation (+ optional recommendedOptionRef) in-cycle
- Capability used: Structured Outputs / Agents product turn (KEEP)
- Provider insufficiency demonstrated: **NO**
- Delta SFIA needed: **Product semantic binding + subject routing**, not new model primitive
- Entry hypothesis **B confirmed**; A only as amplifier via TDS/prompt offering PT options after decision

## 15. Recommendation Cursor (not a decision)
Adopt **Option D (= A + TDS/PT gating ADAPT)**:
1. Preserve ACW EpistemicItem as non-authoritative memory.
2. Do not treat every ACW+`opt:trajectory:*` as PT decision subject once PT is decided.
3. For chat-disposable Work Recommendations, seal into existing PresentedOptionSet/Work spine (optset) so Journal + chat-first disposition reuse #537.
4. Keep genuine PT replan on ProjectTrajectory path (F09).
5. Keep Lifecycle on the right; Journal left read-only.
6. No new store / writer / event bus.
7. If honest Work subject cannot be carried by `proposal` without fiction → escalate Option C to Morris (do not invent mode in Delivery).

## 16. Morris Decision Required — **YES**
Questions:
1. **Subject family:** May Delivery force ACW Work Recommendations through existing `proposal` PresentedOptionSet sealing (Option A/D), or must Studio add a new `decisionSubjectMode` for active-cycle Work (Option C)?
2. **TDS after PT decided:** Should trajectory decision-support options (`opt:trajectory:*`) remain offered to Nora after `decidedByDecisionRef` is set, or only under explicit replan / material-drift signal (F09)?
3. **Journal inclusion rule:** Project ACW Recommendations into Journal only after sealed Work subject exists, or also project unbound ACW Recommendations as read-only memory cards without disposition CTAs?

## 17. Delivery scope proposed (AFTER Morris — not this cycle)
### Likely touch
- `deriveWorkRecommendations.ts` (+ tests)
- `resolveTrajectoryDecisionSupportProjection.ts` / `resolveCurrentNoraTrajectoryRecommendation.ts` / `trajectoryRecommendationCurrentness.ts`
- `assessChatFirstWorkEligibility.ts` / `resolveChatFirstPilotDecision.ts`
- `studioCognitiveContext` / prompt builders (context discrimination only)
- `materializeActiveCycleWork.ts` only if provenance/link to sealed subject required
- targeted D0 oracles (ACW→Journal; ACW+PT-decided chat disposition; PT replan preserved)
### Explicitly do NOT touch
- Lifecycle START/FINALIZE chat-first
- Journal decision CTAs
- new SQLite tables/migrations
- Build Doctrine / Roadmap / C1 / framing edits in Delivery unless sync gate opened
- REAL OpenAI/Cursor campaigns
- runtime v3 adoption

## 18. Exit proof (future Delivery)
cycle actif → Nora ACW Work Recommendation → durable item → Journal left count/state correct → PT already decided → Pilot answers in chat → unique server-owned subject → disposition durable → Journal card updated → ZERO new PT HD if not replan → ZERO lifecycle action → ZERO execution;
plus distinct scenario: true PT replan Recommendation → ProjectTrajectory path kept.

## 19. Debt / exit
Debt: third Recommendation carrier without Work junction + PT option-ref overload.
Exit: single chat-first Work disposition spine for disposable Work; PT path only for replan; classifier/TDS aligned; tests listed above green.

## 20. Anti-claims
- NOT DETERMINISTIC PROVEN for the gap fix (audit only)
- NOT REAL BOUNDARY PROVEN / READY FOR REAL
- NOT runtime v3 ADOPTED
- NO Product code changed this cycle
- NO project commit/push/PR/merge
- NO HabitFlow replay / HD / EC / Attempt / Cursor REAL / OpenAI REAL

## 21. Project Git effects
all NO

## 22. UNIQUE VERDICT
**ARCHITECTURE AUDIT COMPLETE — MORRIS DECISION PACK READY**
