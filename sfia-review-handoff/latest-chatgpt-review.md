# ChatGPT Review Pack — P6 CHAT-FIRST FIRST FRAMING E2E INVESTIGATION

**Level:** FULL — CRITICAL
**Cycle type:** 9 — QA / validation
**Typologie:** INC / EVOL — investigation Product
**Profile:** CRITICAL
**Timestamp (UTC):** 2026-10-09T18:16:22Z
**GO:** CRITICAL END-TO-END INVESTIGATION — AUTHORIZED / **CONSUMED**
**GO DELIVERY / REAL / Git Integration:** NOT AUTHORIZED
**Verdict:** ROOT CAUSE CONFIRMED — E2E CORRECTION PROPOSAL READY
**Sub-qualification:** EXPECTED GOVERNANCE STOP at F01 when no prepared cycle; CHAT-FIRST INTEGRATION GAP upstream (Rec → decided trajectory → prepare → START) not wired in chat
**Statut:** READY FOR CHATGPT CRITICAL E2E REVIEW (not READY FOR CODE CHANGE)
**P6:** NOT PASS · **Runtime v3:** NON ADOPTED · **REC01 CLOSED:** NOT CLAIMED · **F01 PASS:** NOT CLAIMED

---

## 0. Git Truth

| Field | Value |
|-------|--------|
| Repository | mcleland147/sfia-workspace |
| Campaign branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
| Campaign HEAD | `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| origin/main | `60247eb21074c5e7be76e09bcb66d850926ded1e` (PR #573 merge) |
| Post-merge handoff ref | `3400640198b1523c4085a89229baef399bb590e1` |
| Product mutations this cycle | **NONE** |
| Local preserved | C14 doc M, prompt/test local copies, tmp, p6-campaign untracked, :3020, Cursor REAL ON, corrective worktree |

---

## 1. Sources / Convergence

- Process / OM / Build Doctrine / Roadmap / C1 / P6 contract / v3 framing — consulted as authority context (read-only).
- C14 local `p6-qa-integration-state-and-reserves.md` — read; F01 listed as DETERMINISTIC PROVEN for prepared START only; REAL greenfield START not proven.
- Capacity: Pilote → Nora → Rec → HD if required → decided PT → prepare CycleInstance → START.
- Gap: operational continuity on first Framing chat-first not demonstrated.

---

## 2. Human QA facts (observed; no new REAL this cycle)

Project: « Gestion de projets pour petites entreprises » (exploratory services / task planning / progress tracking).

| Step | Observation |
|------|-------------|
| New Project | PASS |
| Nora context | retains |
| Pilote asks next step for Framing | Nora recommends Cadrage; points to Studio action |
| « ok go démarrer le cycle de cadrage » | Nora: recommended but no active cycle; cannot start for Pilote; use Studio start action |
| UI | no active cycle; no recorded trajectory shown |
| Prior `LR_QUALIFICATION_SIGNALS_INCOMPLETE` | not shown in latest capture |
| Durable Recommendation count | **NOT independently re-proven** this cycle → do **not** claim REC01 RESOLVED |

---

## 3. P1 / P2 / P3 contract compliance (as designed)

| Principle | Assessment |
|-----------|------------|
| P1 CHAT-FIRST OPERATION | **GAP** — presentation chat works; operational chain Rec→decide→prepare→START not chat-complete |
| P2 Nora UNDERSTAND/REASON/RECOMMEND | Observed; Nora correctly refuses START authority |
| P2 Studio RESOLVE/VALIDATE/MATERIALIZE/ENFORCE | Partial: LR materialize + F01 enforce exist; chat does not materialize trajectory/prepare |
| P2 Pilote ARBITRATE | HD path exists via `approveCandidateTrajectory` (server action), not auto from « ok go » |
| P2-D-01 disposition ≠ HD | Respected — confirmation ≠ HD |
| P2-D-03 confirmation ≠ HD | Respected in F01 messages / composeF2 narrative |
| P3 inline decision when needed | **GAP** — prepare/approve/start CTAs live on Lifecycle/Trajectory surfaces, not projected inline after Framing Rec |

---

## 4. Effective call graph (code)

```
ProjectAssistantPanel
  → projectAssistantSendAction (actions.ts)
    → sendProjectAssistantTurn (sendProjectAssistantTurn.ts)
      → [if executionContractId] MW6 governed path
      → else orchestrateAssistantSend (f2/orchestrateF2.ts)

orchestrateAssistantSend:
  loadProject → analyzeIntent
  → resolveTransitionReadiness (transitionReadiness.ts)
      formalizationReady iff parseOk
        AND intentClass ∈ {actionable, execution_request}
        AND candidateCycleTypeId
        AND signals (six bools on analysis)

  if !formalizationReady:
      composeStudioCognitiveContext
      → orchestrateProjectAssistantTurn / F1 (orchestrateTurn.ts)
          → runNoraCognitiveTurn (structured Product turn)
          → materializeLifecycleRecommendationFromStructuredOutput
          → (LR validate/persist OR LR_QUALIFICATION_SIGNALS_INCOMPLETE)
      NO call to prepareCandidate / approve / startPrepared
      NO resolveChatFirstCycleStartGate

  if formalizationReady (F2 path):
      QualifyCycleWithCkc / MW5 …
      → resolveChatFirstStartRouting (resolveChatFirstCycleStartGate.ts)
          accept_start → attempt_start
          refuse/defer/ambiguous → suppress_mint (no createCycle)
          else not_start_path → may mint createCycle (legacy formalization)
      if attempt_start:
          → resolveChatFirstCycleStartGate
              classifyChatFirstStartSituation:
                unique_prepared + COMPLETE_TRAJECTORY_BOUND
                  → startPreparedTrajectoryCycle
                no_prepared → NO_PREPARED_CYCLE block message
                (never invents HD / Cycle from prose)

Parallel Product seams (NOT on chat send path):
  projectAssistantPrepareCandidateTrajectoryAction
    → prepareCandidateTrajectoryFromCurrentRecommendation
  approveCandidateTrajectory (HD + decided trajectory)
  prepareCycleFromValidatedTrajectory
  startPreparedTrajectoryCycleAction / F01 startPrepared
UI hosts:
  LifecycleSurface → PrepareCandidateTrajectory
  TrajectorySurface → startPreparedTrajectoryCycleAction
```

### Key code anchors

`transitionReadiness.ts` L58–83 — missing governed intent/cycle/signals → F1.

`orchestrateF2.ts` L1514–1572 — F1 branch; L2084–2117 — F01 only after F2 MW5 + start routing.

`resolveChatFirstCycleStartGate.ts` L213–215 — `NO_PREPARED_CYCLE` message: confirmation alone does not activate; prepare via Trajectoire first.

`preCycleCandidateTrajectoryActions.ts` L28–54 — prepare bridge; comment: « No Cycle / START / EC / Confirmation. HD only via approve path. »

`composeF2PilotFacingNarrative.ts` L659–680 — accept_start without active cycle: acknowledges intent, states confirmation ≠ activation (F2 narrative path).

Nora « Utilise l'action de démarrage… » — **no fixed string in repo** → model prose on F1/advisory path, consistent with prompt forbidding Nora START authority.

---

## 5. Hypotheses H1–H8

| ID | Claim | Status | Evidence |
|----|-------|--------|----------|
| **H1** | Explicit START intent routed to F1 advisory | **SUPPORTED** (likely for « ok go » without F2 formalization fields) | `resolveTransitionReadiness` requires actionable/execution_request + cycleTypeId + signals; plain START prose often fails → F1 |
| **H2** | transitionReadiness blocks Lifecycle START | **SUPPORTED** as gate design | F01 only reachable after formalizationReady; not a bug by itself |
| **H3** | Durable Recommendation absent / unused | **UNPROVEN** this cycle | UI no longer shows LR_QUALIFICATION; 0 Rec not re-audited; REC01 not closed |
| **H4** | Rec present but no chat path to decided trajectory | **SUPPORTED / structural FACT** | prepare/approve are separate server actions; not invoked from `orchestrateAssistantSend` |
| **H5** | No decided/prepared trajectory → F01 NO_PREPARED | **FACT** (code) / **SUPPORTED** for observed UX | `classifyChatFirstStartSituation` → `no_prepared`; UI shows no trajectory |
| **H6** | Work decisions chat-capable; Lifecycle not same contract | **SUPPORTED** | Work disposition path earlier in orchestrateF2; Lifecycle prepare/approve on surfaces |
| **H7** | Nora under-informed → invents Studio CTA | **SUPPORTED** | Prompt forbids START; F1 lacks prepare/start affordance projection; fixed CTA string absent |
| **H8** | Multiple coexist | **FACT** | H1/H2 + H4/H5 + H6/H7 explain end-to-end block even if Rec OK |

**Not:** F01 independently defective for prepared START (deterministic coverage exists).
**Not:** « ok go » should auto-create HD (forbidden by P2-D-03).

---

## 6. HumanDecision materiality (greenfield Framing)

Structural truths needed before START:

1. CURRENT durable LifecycleRecommendation NEXT_CYCLE (+ six signals) — greenfield bootstrap eligible.
2. Candidate / decided ProjectTrajectory from that Rec (`prepareCandidate…` then `approveCandidateTrajectory` → HD).
3. CycleInstance prepared, trajectory-bound COMPLETE.
4. Pilote START authority via `startPreparedTrajectoryCycle` (chat F01 or Trajectory UI).

HD subject: trajectory option / candidate acceptance — **not** mere conversational « go ».
Mechanism exists: `approveCandidateTrajectory` + presentation digest.
Chat-first gap: no inline decision/prepare affordance after Nora Rec in the observed journey.

---

## 7. UX classification

Nora « use Studio start action » while no matching chat CTA:

| | |
|--|--|
| A Product mechanism missing | Partial — START without prepare correctly blocked |
| B Present but not chat-wired | **PRIMARY** — prepare/approve/start exist off-chat |
| C CTA not projected | **YES** — Lifecycle/Trajectory surfaces, not conversation |
| D Incomplete conversational context | Contributes (F1) |
| E Necessary restriction poorly explained | Partially — refuse START is correct; « Studio action » underspecifies prepare→decide→start |

Wording-only fix: **insufficient**.

---

## 8. Options (NO CODE this cycle)

### Option 1 — Minimale (recommended)

**Restore chat-first continuity using existing OA seams** after CURRENT NEXT_CYCLE Rec:

1. Detect Pilote intent: accept_recommendation / accept_start / decide trajectory (existing stance interpreter).
2. If Rec CURRENT + greenfield/no decided PT: chat-inline (or deterministic server steps) to invoke **existing** `prepareCandidateTrajectoryFromCurrentRecommendation` → present approval → `approveCandidateTrajectory` (real HD) → `prepareCycleFromValidatedTrajectory` → then F01 `resolveChatFirstCycleStartGate` / `startPreparedTrajectoryCycle`.
3. Refuse/ambiguous paths keep current suppress messages.
4. Never invent HD from bare « ok go » without explicit decision subject + digest gate.
5. Project honest next affordance in conversation (not fake Studio button).

**Files likely:** `orchestrateF2.ts` and/or F1 post-materialize handoff, `composeF2PilotFacingNarrative` / conversation projection, possibly thin wrappers around `preCycleCandidateTrajectoryActions.ts` / `approveCandidateTrajectory.ts` — **reuse**, no parallel engine.

**Tests:** extend Fake E2E: Rec(+signals) → prepare → approve → prepareCycle → chat START; refuse; NO_PREPARED; no double start.
**Risks:** authority / double prepare; must keep fail-closed.
**Gates:** GO Delivery → Fake → Human QA REAL.
**Why not prompt-only:** prompt cannot create PT/HD/CycleInstance.

### Option 2 — Alternative

Stronger F1→F2 handoff: when CURRENT Rec + accept_start, force governed path that only runs prepare/approve/start bridges (no QualifyCycleWithCkc createCycle mint). Same seams; narrower routing change.

### Option 3 — Surface-only UX

Improve Lifecycle/Trajectory discoverability + Nora copy pointing to exact surface. **Does not** satisfy P1 chat-first operation alone; acceptable interim only with Morris acknowledgment.

---

## 9. Tests / gaps

| Area | Coverage |
|------|----------|
| LR + six signals / greenfield bootstrap | dgfStart01, greenfieldLifecycleBootstrap, REC01 prompt test |
| F01 START with prepared cycle / NO_PREPARED / suppress mint | `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts` |
| prepare → approve → start (OA/API) | candidateTrajectory*, gcec* e2e d0 — **not** chat send orchestration |
| Chat send Rec→prepare→approve→START | **GAP** |
| REAL greenfield Framing | **GAP** (this Human QA) |

This cycle: static analysis only. No REAL, no DB mutation, no :3020 action.

---

## 10. Fake / Real

| | |
|--|--|
| Entry | Human QA REAL functional failure |
| This cycle | STATIC investigation |
| Proves | Structural chat-first gap + F01 correct fail-closed without prepare |
| Does not prove | REC01 permanently fixed; REAL START after Delivery |

---

## 11. Debt / exit

- No parallel methodology cockpit.
- Exit: first Framing cycle active via governed chat-first path after Delivery + REAL retest.
- Residual: independent Rec persistence audit on campaign project (read-only DB) — EVIDENCE NOT TAKEN this cycle (mutation/isolation risk).

---

## 12. Décisions Morris

1. ChatGPT Critical E2E review of this handoff.
2. Accept Option 1 (or 2/3) → **GO DELIVERY** scoped.
3. Separate GO for REAL retest after Delivery.
4. Optional read-only Rec persistence audit GO.

---

## 13. Files touched this cycle

| File | Role |
|------|------|
| `.tmp-sfia-review/chatgpt-review.md` | This pack |
| `sfia-review-handoff/latest-chatgpt-review.md` | Handoff L3 |

Product: none.

---

## 14. Verdict

**ROOT CAUSE CONFIRMED — E2E CORRECTION PROPOSAL READY**

Primary cause: after Framing recommendation, chat-first send path does not materialize the existing prepare → HD/decide trajectory → prepareCycle chain; F01 correctly refuses START without prepared trajectory-bound cycle; F1 advisory Nora then narrates a Studio CTA that is not projected inline. REC persistence remains an open residual (not re-proven). Prompt-only or F01-only fixes are insufficient.

Instruction ChatGPT: Verify call graph, H1–H8 matrix, Option 1 reuse of existing seams, and absence of Product mutation. Do not authorize Delivery or close findings without Morris GO.
