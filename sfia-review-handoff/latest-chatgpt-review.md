# ChatGPT Critical Design Review — CORR-PROOF-01 D1 Adoption / Delivery Gate

## 1. UTC timestamp

2026-09-06T13:00:56Z

## 2. Parent Product Proof state

**OPEN / BLOCKED AT CORR-PROOF-01**

The Product Proof remains the same iterative REAL validation campaign. Dogfood #1 FAIL did not close the Proof. The Proof resumes after CORR-PROOF-01 is corrected, integrated and revalidated on the same natural user path.

## 3. Morris decision consumed

**MORRIS DECISION — CORR-PROOF-01 OPTION D1 SHARED-SESSION HYBRID ADOPTED — PRODUCTSQLITESESSION REMAINS THE SINGLE DURABLE CONVERSATIONAL SoT — NATURAL MULTI-TURN SEMANTICS PRECEDE BLOCKING SFIA POLICY — F2/MW5 ADAPTED AS CONTEXTUAL FORMALIZATION/GOVERNANCE — EXACTLY ONE CANONICAL ASSISTANT TURN PER PILOTE TURN — NO SECOND RUNNER / MEMORY / CONVERSATION SoT — CORRECTIVE DELIVERY AUTHORIZED — T1–T9 + SAME PRODUCT PROOF REAL RETEST REQUIRED.**

Morris also explicitly requested publication of this Review Handoff.

## 4. Inputs reviewed

- `origin/main` = `586480af178df5dd2f7177cae8f6b1ac18fe4acc`
- Prior Review Handoff tip = `c666f91ea75aa894ae70478990cd29c180d8ce89`
- Prior handoff blob = `27d5115d89904e2fce74f8339dc9df1b987208e1`
- Dogfood #1 evidence: natural two-turn contract-tracking conversation blocked by repeated generic `[MW5 CLARIFY]`
- R22 OpenAI Capability Fit / Functional Design pack
- Current `@openai/agents` / `openai` package truth
- Current ProductSqliteSession / Memory B / F2 / MW5 / Nora cognitive path

## 5. Critical Design Review verdict

**PASS**

The root-cause qualification is sufficient to authorize a bounded corrective Delivery.

Accepted interpretation:

- the blocker is primarily at the orchestration boundary;
- no evidence justifies reopening model selection or Stage B;
- ProductSqliteSession already provides the durable conversational Session contract;
- no second generic memory/session/conversation engine is justified;
- MW5 and Structured Outputs remain useful, but must move to the appropriate contextual/formalization boundary rather than gate ordinary natural dialogue mechanically.

## 6. Adopted architecture — Option D1 Shared-Session Hybrid

Target principle:

```text
Pilote
  → natural Nora conversational cognition
  → shared semantic context backed by ProductSqliteSession / Memory B
  → contextual qualification / MW5 only when materially needed
  → structured formalization when needed
  → HumanDecision / ExecutionContract / Confirmation / authority boundaries
```

### Hard invariants

1. `ProductSqliteSession` remains the **single durable conversational SoT**.
2. One Pilote turn produces **exactly one canonical assistant turn**.
3. No invisible assistant draft may be durably persisted before the final user-visible response.
4. Natural multi-turn semantics must be available before a blocking SFIA policy response is emitted.
5. F2 consumes shared contextual semantics; it must not remain a separate front-door conversational product.
6. MW5 keeps its hard anti-synthesis / fail-closed governance value, but is adapted to contextual governance rather than canned ordinary-dialogue gating.
7. Structured Outputs remain for formalization/qualification where appropriate; they do not define the user's conversational grammar.
8. Conversation/session state **does not become Truth C** by memory alone.
9. Recommendation ≠ HumanDecision; Nora cannot synthesize GO / Confirmation / Morris decision / Pilote act.
10. Execution authority remains determined only by governed SFIA contracts and valid human authorization.
11. No second Runner, second generic memory engine, second durable conversation SoT, duplicate compaction path or duplicate provider abstraction.
12. Existing Memory B / compaction contracts remain protected unless a separately evidenced decision changes them.

## 7. Asset disposition

### KEEP

- Agents SDK Runner
- ProductSqliteSession
- Memory B / MemoryBSessionView / compaction
- Truth C / LPS separation
- HumanDecision pipeline
- ExecutionContract / Confirmation / authority pipeline
- current provider family / model-selection state

### ADAPT / COMPLETE

- F2 entry/orchestration role — ADAPT
- `analyzeIntent` role/context boundary — ADAPT
- MW5 placement — ADAPT
- CLARIFY episode continuity / contextual resolution — COMPLETE
- Structured Outputs boundary — ADAPT, not remove

### NOT BUILT / DEFERRED

- second Runner
- second conversation engine
- OpenAIConversationsSession as primary durable SoT
- `conversationId` / `previousResponseId` as parallel primary history chain
- stronger-model workaround
- Stage B
- package upgrade unless later proven necessary

## 8. Delivery scope authorized

A bounded corrective Delivery may now implement D1 on the current Studio product path.

Delivery must prefer coherent end-to-end closure over scattered micro-patches and must not introduce temporary dual conversational authorities without an explicit exit.

Implementation may modify only the code/tests directly required to:

- make natural multi-turn semantic context available before blocking F2/MW5 disposition;
- ensure exactly one canonical assistant response is persisted/displayed per Pilote turn;
- make contextual clarification resolvable from normal user language;
- preserve existing authority, Truth C, Memory B and Evidence invariants;
- add deterministic regression coverage T1–T9.

Any structural scope expansion, package upgrade, new persistence architecture or parallel session mechanism requires a distinct Morris gate.

## 9. Deterministic acceptance contract

T1 — exact two-turn Dogfood reproduction: second turn progresses; no identical generic CLARIFY absent a new material reason.

T2 — progressive five-turn project description: semantic continuity without formal restatement.

T3 — pronoun/reference continuation: contextual resolution or honest material clarification.

T4 — genuine structure-changing ambiguity: useful contextual clarification remains possible.

T5 — trivial acknowledgement after clarification: contextual behavior; no arbitrary state mutation.

T6 — authority boundary: external/write intent triggers strict governance; no HD/GO/Confirmation synthesis.

T7 — informative conversation: normal analysis/recommendation does not manufacture unnecessary CycleInstance/formal state.

T8 — Memory B / compaction regression remains green.

T9 — MW5 anti-synthesis / challenge / fail-closed governance regression remains green.

## 10. REAL Product Proof revalidation contract

After deterministic Delivery proof + integration on `main`, Morris resumes the **same Product Proof** on the **Suivi de contrat** scenario with ordinary language and no magic prompt.

Required REAL boundary:

- natural Turn 1;
- natural B2B/MC Consulting Turn 2;
- former blocker crossed;
- conversation continues naturally.

If that boundary passes, `CORR-PROOF-01` is revalidated at the tested boundary and the Product Proof continues immediately.

If a new UX/functional/product anomaly appears, it becomes the next Product Proof issue; the Proof remains open until Morris accepts end-to-end Exit Proof.

## 11. Governance / anti-claims

- Stage A = **COMPLETE / CLOSED — Outcome C accepted**
- Stage B = **NOT JUSTIFIED / NOT AUTHORIZED**
- Production model routing = **NOT SELECTED**
- Runtime v3 = **NON ADOPTED**
- Cognitive Completion = **NOT PROVEN**
- Production-ready = **NOT CLAIMED**
- Accounting reserve `R-GMR-AGGREGATE-COUNTER-SEMANTICS-01` = **RETAINED / UNCHANGED**
- Delivery authorization ≠ merge authorization
- Delivery authorization ≠ runtime-v3 adoption
- Recommendation no longer applies to D1 architecture: the architecture decision above is explicitly **ADOPTED BY MORRIS** for CORR-PROOF-01 scope.

## 12. Git / mutation status at decision time

Current product `main` remains:

`586480af178df5dd2f7177cae8f6b1ac18fe4acc`

This decision/publishing action does **not** mutate product `main`.

Only the canonical Review Handoff branch is updated by this publication.

## 13. Next execution gate

**CORR-PROOF-01 CORRECTIVE DELIVERY — AUTHORIZED**

Next operational sequence:

```text
Cursor bounded Delivery
→ deterministic T1–T9
→ ChatGPT Critical Delivery Review
→ Morris product push / PR gate if candidate accepted
→ PR / CI / merge gate
→ post-merge verification
→ SAME Product Proof REAL retest
```

No automatic product push / PR / merge is authorized by this handoff.

## 14. Handoff provenance

Parent canonical handoff tip:

`c666f91ea75aa894ae70478990cd29c180d8ce89`

Publication requested explicitly by Morris after adopting D1 and authorizing corrective Delivery.

The branch tip created by this publication is verified separately after commit; this document intentionally does not self-embed its own resulting tip to avoid a self-referential republish loop.
