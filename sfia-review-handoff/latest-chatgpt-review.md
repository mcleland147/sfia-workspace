# ChatGPT Review Pack — FULL
# NORA COGNITIVE COMPLETION C4 — GIT INTEGRATION / PR READINESS

**Timestamp (Europe/Paris):** 2026-08-29 12:07:37 CEST
**Cycle:** C4 Git Integration · Type **13 — PR readiness** · DOC · CRITICAL
**GO Morris content validation:** CONSUMED — `GO MORRIS — VALIDATE NORA COGNITIVE COMPLETION C4 CONTENT — COGNITIVE RUNTIME GAP & IMPLEMENTATION READINESS — PASS — NO GIT INTEGRATION — NO NEXT CAPABILITY AUTHORIZATION`
**GO Morris Git integration:** CONSUMED — `GO MORRIS — NORA COGNITIVE COMPLETION C4 — GIT INTEGRATION — COMMIT + PUSH + DRAFT PR + CI + REVIEW HANDOFF — NO MERGE — NO ROADMAP SYNC — NO NEXT CAPABILITY AUTHORIZATION`
**Prior handoff (ChatGPT-reviewed C4):** `838ab32c6e6bb10ceb9d35f8c22d03df7b67d390`
**Merge:** **NO** · Draft→Ready **NO** · Roadmap sync **NO** · Next capability **NOT AUTHORIZED**
**Verdict:** NORA COGNITIVE COMPLETION C4 — CONTENT VALIDATED BY MORRIS — GIT INTEGRATION COMMITTED + PUSHED — DRAFT PR OPEN — PR READY FOR CHATGPT REVIEW — NO MERGE — ROADMAP NORA LIFECYCLE TRUTH-SYNC STILL REQUIRED — NO NEXT CAPABILITY AUTHORIZED
**Synthesis only:** FORBIDDEN

---

## 1. Local Git Truth

| Phase | HEAD | origin/main | status |
| --- | --- | --- | --- |
| Before commit | `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` | `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` | C4 untracked + .tmp |
| After | `93c69d10bb2a0cbf49dabf184f17a57249f496f4` | `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` (unchanged) | ahead 1 · .tmp untracked |

| Field | Value |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-nora-cognitive-runtime-gap-readiness` |
| Branch | `docs/sfia-studio-nora-cognitive-runtime-gap-readiness` |
| Remote branch SHA | `93c69d10bb2a0cbf49dabf184f17a57249f496f4` · local=remote **YES** |
| status now | `?? .tmp-sfia-review/` |

Content drift check vs handoff `838ab32c6e6bb10ceb9d35f8c22d03df7b67d390`: semantic body identical; EOL trailing-space normalization applied to match CI whitespace gate / handoff pack rstrip (not semantic).

---

## 2. Commit

| Field | Value |
| --- | --- |
| SHA | `93c69d10bb2a0cbf49dabf184f17a57249f496f4` |
| Tree | `37a50ce3ba67e1c2abfff348f67aa67ae9327b23` |
| Parent | `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` |
| Message | `docs(sfia-studio): integrate validated Nora C4 runtime readiness` |
| Files | **1** — `04-nora-cognitive-runtime-gap-implementation-readiness.md` (+570) |

---

## 3. Draft PR

| Field | Value |
| --- | --- |
| Number | **#436** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/436 |
| State | OPEN · **isDraft=true** |
| Base | main @ `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` |
| Head | docs/sfia-studio-nora-cognitive-runtime-gap-readiness @ `93c69d10bb2a0cbf49dabf184f17a57249f496f4` |
| files / commits | **1** / **1** |
| mergeable | MERGEABLE |
| Ready / Merge | **NOT PERFORMED** |

---

## 4. CI

| Field | Value |
| --- | --- |
| Run | `33246841754` **SUCCESS** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/33246841754 |
| Detect SFIA Studio changes | PASS |
| Build and validate | PASS |
| SFIA Studio Required Gate | **PASS** |

---

## 5. Lifecycle status in C4

CONTENT VALIDATED BY MORRIS · GIT INTEGRATION IN PROGRESS (commit/push/Draft PR) · ≠ INTEGRATED ON MAIN · ≠ MERGED · ≠ POST-MERGE VERIFIED · ≠ NEXT CAPABILITY AUTHORIZED

Technical verdict preserved: NO STRUCTURAL ARCHITECTURE BLOCKER · SOURCE-LOCKED COGNITIVE BACKLOG recommended only.

---

## 6. Non-regression / locks

| Item | Status |
| --- | --- |
| Roadmap | **UNMODIFIED** · NCC-R08 OPEN / REQUIRED |
| C1/C2/C3 | **UNMODIFIED** |
| app/tests | **UNMODIFIED** |
| OD-02…08 | OPEN |
| REAL-B | NOT AUTHORIZED |
| runtime v3 | NON ADOPTED |
| FA_REQUIRED | NO |
| Mandatory TA | NOT currently demonstrated |

---

## 7. Remaining Morris gates

1. ChatGPT PR review
2. Morris merge GO
3. Post-merge verification
4. Roadmap Nora lifecycle truth-sync REQUIRED before/with next-capability authorization
5. Future next-capability Morris decision
6. OD-02…08 remain OPEN

---

## 8. Commit diff

```diff
diff --git a/projects/sfia-studio/nora-cognitive-completion/04-nora-cognitive-runtime-gap-implementation-readiness.md b/projects/sfia-studio/nora-cognitive-completion/04-nora-cognitive-runtime-gap-implementation-readiness.md
new file mode 100644
index 00000000..05e0b3df
--- /dev/null
+++ b/projects/sfia-studio/nora-cognitive-completion/04-nora-cognitive-runtime-gap-implementation-readiness.md
@@ -0,0 +1,570 @@
+# Nora Cognitive Completion — Cognitive Runtime Gap & Implementation Readiness
+
+| Field | Value |
+| --- | --- |
+| **Document** | `04-nora-cognitive-runtime-gap-implementation-readiness.md` |
+| **Programme** | Nora Cognitive Completion |
+| **Milestone** | COGNITIVE RUNTIME GAP & IMPLEMENTATION READINESS |
+| **Cycle type** | **8 — Delivery / implémentation** · nature exacte = **QUALIFICATION / READINESS ONLY** |
+| **Typology** | DOC / ANALYSIS |
+| **Profile** | **CRITICAL** |
+| **Revision** | **C4-VALIDATED** — Cognitive Runtime Gap & Implementation Readiness |
+| **Statut** | **CONTENT VALIDATED BY MORRIS — GIT INTEGRATION IN PROGRESS** · ≠ INTEGRATED ON MAIN · ≠ POST-MERGE VERIFIED · ≠ MERGED |
+| **Timestamp (Europe/Paris)** | 2026-08-29 12:00:56 CEST |
+| **Worktree** | `/Users/morris/Projects/sfia-workspace-nora-cognitive-runtime-gap-readiness` |
+| **Branche** | `docs/sfia-studio-nora-cognitive-runtime-gap-readiness` |
+| **HEAD** | `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` |
+| **origin/main** | `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` |
+| **Tree** | `e4172c956cc3bfc8cc466bfb641dc296180a31ad` |
+| **Generation anchor** | `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` — **MATCHES** current origin/main |
+| **GO Morris qualification** | **CONSUMED** — qualification/readiness analysis |
+| **GO Morris correction** | **CONSUMED** — `GO CORRECTION C4 AVANT VALIDATION` |
+| **Décision Morris validation contenu** | **CONSUMED** — `GO MORRIS — VALIDATE NORA COGNITIVE COMPLETION C4 CONTENT — COGNITIVE RUNTIME GAP & IMPLEMENTATION READINESS — PASS — NO GIT INTEGRATION — NO NEXT CAPABILITY AUTHORIZATION` |
+| **GO Morris Git integration** | **CONSUMED** — `GO MORRIS — NORA COGNITIVE COMPLETION C4 — GIT INTEGRATION — COMMIT + PUSH + DRAFT PR + CI + REVIEW HANDOFF — NO MERGE — NO ROADMAP SYNC — NO NEXT CAPABILITY AUTHORIZATION` |
+| **Runtime HumanDecision actor** | **Pilote** |
+| **NO MORRIS RUNTIME PERSONA** | retained |
+| **runtime v3** | **NON ADOPTED** |
+| **Delivery** | **NOT AUTHORIZED** |
+| **Architecture** | **NOT SELECTED** |
+| **NEXT CAPABILITY** | **NOT AUTHORIZED** · SOURCE-LOCKED COGNITIVE BACKLOG = recommendation only |
+
+> **Anti-claims :** C4 **CONTENT VALIDATED BY MORRIS** · **≠ GIT INTEGRATED ON MAIN** · **≠ MERGED** · **≠ POST-MERGE VERIFIED** · ≠ Nora Cognitive Completion proven · ≠ NCC-BAR final PASS · ≠ C3-PE-BAR final PASS · ≠ Product Completion reopen · ≠ FA automatically required · ≠ TA automatically required · ≠ Backlog validated · ≠ Delivery authorized · ≠ Agents SDK / Sessions / Hosted Web Search adopted · ≠ new persistence adopted · ≠ REAL-B · ≠ REAL proof · ≠ READY FOR REAL · ≠ runtime v3 ADOPTED · ≠ FinOps/T7 unfreeze · ≠ NEXT CAPABILITY AUTHORIZED · ≠ Roadmap mutated.
+
+---
+
+## 1. Purpose / non-goals
+
+### Purpose
+
+Determine, from **repository truth** and available proofs, how far the current Nora / project-assistant runtime covers validated **C1 + C2 + C3** contracts; which gaps remain; root causes; which gaps truly require Functional or Technical Architecture; and **one** recommended next capability for Morris decision.
+
+### Non-goals
+
+- Implement gaps
+- Select/adopt architecture or technology
+- Produce final Cognitive Completion proof
+- Validate a detailed backlog
+- Execute REAL / REAL-B / live OpenAI
+- Mutate Roadmap / C1–C3 / Product Completion / runtime code
+- Transform technology options into decisions
+
+---
+
+## 2. Source authority model
+
+| Layer | Authority | Role in this cycle |
+| --- | --- | --- |
+| Git / origin/main | Repository SoT | Evidence baseline |
+| Morris | Construction / gates / promotions | Consumed GO for analysis only |
+| ChatGPT | Qualification / challenge / recommendation review | Downstream of this pack |
+| Cursor | Controlled local analysis | This document |
+| Pilote | Runtime HumanDecision actor | Unchanged |
+| Nora C1/C2/C3 | Normative cognitive contracts | READ ONLY |
+| Product Completion | Closed product spine + adaptive pattern | Pattern / reuse · DO NOT REOPEN |
+| Build Doctrine | How to build | Qualification rules |
+| Roadmap | Where convergence is | Read; Nora lifecycle lag = **OPEN debt** · **REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** (≠ this cycle) |
+| v3 framing 30–37 | Product target doctrine | Guidance · runtime v3 NON ADOPTED |
+| SFIA v2.6 | External ChatGPT↔Cursor process | PROCESS ONLY · ≠ Nora runtime doctrine |
+| CKC Type 8 synthetic map | Experimental guidance | Authority = **NONE** |
+
+---
+
+## 3. Convergence qualification
+
+| Field | Value |
+| --- | --- |
+| **Capacité(s) v3 servie(s)** | V3-F01 · F02 · F04 · F05 · F06 · F08 · F09 · F14 · F15 (cognitive loop, LPS, epistemology, HD, evidence, maturity) |
+| **Milestone** | Nora Cognitive Runtime Gap & Implementation Readiness |
+| **État courant** | PC COMPLETE/CLOSED · C6 CLOSED · Nora C1+C2+C3 CONTENT VALIDATED · INTEGRATED ON MAIN · POST-MERGE VERIFIED · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · published convergence next = **REAL-B candidate** |
+| **Actifs** | KEEP Product F1–F3/W2–W3 spine · ADAPT intent/tools/grounding/qualify · COMPLETE Memory B need / CWP / eval harness / cognitive STOP · REPLACE **not demonstrated** |
+| **Gaps** | Memory B/compaction · CWP/strategy · eval harness · contradiction STOP · External Source Intelligence · CIS observability · Roadmap Nora lag |
+| **Dépendances** | OD-02…08 OPEN · RA-06/07 OPEN NON_BLOCKING · REAL-B separate track |
+| **Lien Roadmap** | Nora complementary · does **not** replace REAL-B · Roadmap still lists Nora next as C2 requalification (**STALE** vs C2/C3 on main) · **Roadmap Nora lifecycle truth-sync = REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** · ≠ Roadmap edited in this cycle · global next remains REAL-B candidate |
+| **Chemin critique** | Measure (eval) + Memory B continuity + strategy-under-envelope + contradiction/STOP honesty on existing F1/F2/OA spine |
+| **Exit proof (this cycle)** | Repo-first matrices · gap/blocker registers · one next-capability recommendation · Review Pack FULL · Review Handoff |
+| **Dette / exit** | See §19–§20 |
+| **Gates Morris** | Validate C4 content · decide next capability · **Roadmap Nora lifecycle truth-sync REQUIRED before or with next-capability authorization** · OD decisions remain separate · ≠ Roadmap GO in this cycle |
+| **Capacité suivante candidate** | **SOURCE-LOCKED COGNITIVE BACKLOG** (primary) — RECOMMENDATION ONLY |
+
+**Trajectory link:** Demonstrable — Nora C1–C3 closed cleanly on main; Product Completion adaptive pattern (architecture only on proven blockers) applies; this cycle qualifies implementation readiness without selecting architecture.
+
+---
+
+## 4. Product Completion precedent / trajectory alignment
+
+Observed PC pattern: C1 → C2 → PE → FA (when blockers) → TA delta (when structural tech) → backlog → W1–W4 readiness/delivery → targeted TA addendum when blocker discovered → Pre-QA → Integrated QA → Morris close.
+
+**Rule applied here:** architecture **only** when responsibility/boundary/tech structural blocker is demonstrated — **not** because “FA is next.”
+
+Finding: Product Completion already delivered the OA spine Nora reuses (Project/LPS/Trajectory/HD/Evidence/EC). Nora C3 FA blocker register = **0**. Therefore default path = **source-locked cognitive backlog** on KEEP/ADAPT assets. **TA gate order:** ADAPT-first → if backlog/evals demonstrate a structural technical primitive is necessary → **Targeted TA Delta** (options/trade-offs) → **Morris decision** → Delivery only under a distinct GO. Morris does **not** normally select a technology first then trigger TA.
+
+---
+
+## 5. Nora C1/C2/C3 normative corpus (summary)
+
+| Artifact | Status on main | Role |
+| --- | --- | --- |
+| C1 | VALIDATED · INTEGRATED · POST-MERGE (PR #430) | NR-01…26 · CE-01…08 · NCC-BAR-01…14 |
+| C2 | VALIDATED · INTEGRATED · POST-MERGE (PR #432/#433) | B0…B9 · Memory A/B/C · CWP · OD-02…08 OPEN |
+| C3 | VALIDATED · INTEGRATED · POST-MERGE (PR #434) + truth-sync PR #435 | CIS · PE contracts · C3-PE-BAR **defined ≠ proven** |
+
+Hard invariants retained: Pilote HD · Recommendation ≠ HD · B ≠ C · CKC ≠ authority · NO MORRIS RUNTIME PERSONA · Agents SDK/Sessions/Hosted Web Search **NOT ADOPTED**.
+
+---
+
+## 6. Current runtime inventory (repo-first)
+
+### 6.1 Anchor verification
+
+| # | Anchor | Verdict | Evidence |
+| --- | --- | --- | --- |
+| 1 | OpenAI Responses adapter | **CONFIRMER** | `app/lib/platform/ai/openaiProvider.ts` · `OpenAIConversationProvider` · `responses.create` |
+| 2 | Provider abstraction | **CONFIRMER** | `ConversationProvider` · `resolveConversationProvider` · Fake provider |
+| 3 | reasoning.effort configurable | **CONFIRMER** | `OPENAI_REASONING_EFFORT` via `config.ts` · static env · ≠ CWP |
+| 4 | F1 bounded history | **CONFIRMER** | `orchestrateTurn.ts` · `MAX_HISTORY_MESSAGES = 20` |
+| 5 | F1/F2 conversation process-local | **CONFIRMER** | `F2_PROCESS_LOCAL_NOTICE` · proposal Map · ephemeral chat |
+| 6 | Bounded generic tool loop | **CONFIRMER** | `runToolCallingLoop` · `CT_MAX_TOOL_ROUNDS=4` |
+| 7 | Grounding ledger | **CONFIRMER** (per-turn) | `GroundingLedger` in `toolLoop.ts` · not durable OA |
+| 8 | Git/GitHub read-only tools | **CONFIRMER** | Control Tower tool defs + adapters |
+| 9 | Structured intent analysis | **CONFIRMER** | `f2/intentAnalysis.ts` · `analyzeIntent` |
+| 10 | CKC → Nora seam | **CONFIRMER** (deterministic) | `f2/ckcCognitiveContext.ts` · disclosure NOT_REAL |
+| 11 | Project/LPS/Cycle persistence | **CONFIRMER** | OA Product SQLite path |
+| 12 | Proposal ≠ Trajectory/HD | **CONFIRMER** | `proposalStore` vs W2 `decideTrajectory` guards |
+
+### 6.2 Canonical cognitive path
+
+**Canonical:** `/studio` → Project workspace → `ProjectAssistantPanel` / F1 `orchestrateTurn` → F2 `orchestrateF2` (intent→qualify→proposal) → OA durables (LPS/HD/Trajectory/Evidence) → W2/W3 Option/Rec/HD/post-evidence.
+
+**Parallel legacy:** `app/lib/ops1/**` conversation stack — **not** the F1 product path; must not become a second Nora engine (B9).
+
+---
+
+## 7. Asset classification
+
+| Asset | Class | Rationale |
+| --- | --- | --- |
+| OpenAIConversationProvider / Responses | **KEEP** | Works; abstraction present |
+| AI config / reasoning.effort | **ADAPT** | Keep knob; evolve under CWP/OD-02 |
+| project-assistant F1 | **KEEP** | Canonical chat orchestration |
+| F2 intent / qualify / proposal | **ADAPT** | Extend challenge/CWP/CIS honesty |
+| CKC cognitive seam | **ADAPT** | Deterministic seam; LIVE later |
+| Project system prompt | **ADAPT** | Policy evolution |
+| tool loop + router + grounding | **KEEP** (+ **ADAPT** durability) | Healthy bound; extend provenance |
+| EventSink observability | **ADAPT** | Technical ≠ cognitive harness |
+| Conversation/history state | **COMPLETE** need as Memory B | Process-local insufficient for CE-03/04 |
+| Proposal state | **KEEP** | Distinct from Truth C |
+| Project/LPS/Cycle/Trajectory/HD/Evidence | **KEEP** | Project Truth C spine |
+| EpistemicItem types | **ADAPT** | Wire contradiction disposition |
+| `/studio` PE surfaces | **KEEP** | C3 PE delta sufficient for now |
+| OPS1 conversation | **FREEZE** / **RETIRE_LATER** claims | Avoid parallel cognitive engine |
+| Agents SDK / Sessions / Hosted Web Search | **TBD option** | **NOT ADOPTED** · no REPLACE proof |
+| New vector store / orchestration engine | **TBD** | Default reject parallel unless REPLACE proven |
+
+\* Memory B **FA_REQUIRED = NO** if implemented as non-authoritative continuity respecting existing OA Truth C boundaries (already specified in C2). **TA_REQUIRED = NO currently** under ADAPT-first. **TA becomes REQUIRED** only if qualification/backlog proves existing persistence/runtime cannot honestly satisfy Memory B without debt or a second Truth C — then Targeted TA Delta → options → Morris decision. Sessions/local store/other = **options only**, never pre-selected.
+
+---
+
+## 8. NR-01…26 coverage
+
+| ID | Requirement | Source | Implementation | Evidence | Coverage | Gap | Root cause | Disposition | FA? | Delivery cand.? | Downstream |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| NR-01 | Intent + uncertainty | C1§6/C2 | F2 analyzeIntent + classes | f2.orchestrate / intentAnalysis | PARTIAL | No CIS Understanding state; live model intent quality NOT_MEASURABLE | POLICY_OR_PROMPT + MODEL_BEHAVIOR | ADAPT F2 intent + PE CIS disclosure | NO | YES | NCC-BAR-01 |
+| NR-02 | Challenge ≤3 not questionnaire | C1/C2/C3 | No dedicated challenge controller; PE contracts only | C3 PE boards / PE-BAR-02 | FAIL | Challenge behavior not runtime-enforced | POLICY_OR_PROMPT + PRODUCT_EXPERIENCE | COMPLETE challenge policy in F2 + eval | NO | YES | NCC-BAR-01/02 |
+| NR-03 | Qualify cycle/profile/CKC sourced | C1/C2 | F2 qualify + CKC seam | w1CkcSemanticSeam / f2.orchestrate | PARTIAL | Deterministic seam ≠ LIVE qualify quality | TOOLING + SOURCE_ACCESS | ADAPT qualify + CE-01 strategy | NO | YES | NCC-BAR-08 |
+| NR-04 | Evidence-first contradiction | C1/C2 | Epistemic Contradiction type; LPS contradictionIds; weak controller | oa/cycle types; no CIS controller | PARTIAL | Type present; evidence-backed STOP controller missing | FUNCTIONAL_BOUNDARY soft / POLICY | COMPLETE contradiction disposition path | NO | YES | NCC-BAR-06 |
+| NR-05 | Clarify only if structural | C1/C2 | Intent ambiguous class; no structural filter proof | f2 intent classes | PARTIAL | Ambiguous routing exists; structural vs cosmetic not proven | POLICY_OR_PROMPT | ADAPT clarification policy + eval | NO | YES | NCC-BAR-01 |
+| NR-06 | Critical challenge before Critical Rec | C1/C2 | Profile signals in qualify; no High-Assurance challenge gate | F2 qualify path | FAIL | No Critical challenge enforcement before Rec | POLICY_OR_PROMPT + MEMORY_CONTEXT | COMPLETE Critical challenge gate under OD-02 envelope | NO | YES | NCC-BAR-02/08 |
+| NR-07 | Epistemic status separation | C1/C2 | EpistemicItemType + W2 Option/Rec/HD separation | w2 decideTrajectory guards | PARTIAL | Domain separation strong; conversational PE levels PARTIAL | EVIDENCE_ONLY + PE | ADAPT disclosure labels across F1 chat | NO | YES | NCC-BAR-09 |
+| NR-08 | Propose LPS only | C1/PC | AppendLivingProjectStateVersion propose paths | OA project APIs / PC proofs | PASS | Propose-only authority retained at Product spine | — | KEEP | NO | NO | NCC-BAR-10 |
+| NR-09 | Propose Trajectory proposed≠decided | C1/C2 | ProposeTrajectoryVersion + HD promote | w2 propose/decide | PASS | W2 guards Recommendation≠promotion | — | KEEP | NO | NO | NCC-BAR-10 |
+| NR-10 | Produce Options | C1/C2 | deriveTrajectoryOptions W2/W3 | w2/w3c tests | PARTIAL | Trajectory options exist; conversational Options-ready CIS missing | PRODUCT_EXPERIENCE + POLICY | ADAPT Option surfacing in assistant UX | NO | YES | NCC-BAR-09 |
+| NR-11 | Recommendation + provenance; never auto-HD | C1/C2 | W2/W3 Rec + promotion refuse | w3cPostEvidenceLoop tests | PASS | Anti-authority Rec proven deterministically on W2/W3 | — | KEEP + ADAPT provenance richness | NO | YES | NCC-BAR-09/11 |
+| NR-12 | EC prep without authority | C1/PC | EC preparation boundaries Product path | PC W3 proofs | PASS | Product Completion spine | — | KEEP | NO | NO | NCC-BAR-11 |
+| NR-13 | STOP precise; no silent success | C1/C2 | W3B SUCCESS|STOP|FAIL terminals; cognitive STOP weak | w3bProductTerminal | PARTIAL | Execution STOP strong; cognitive contradiction STOP weak | POLICY_OR_PROMPT | COMPLETE cognitive STOP mapping | NO | YES | NCC-BAR-06/11 |
+| NR-14 | Post-Evidence analysis | C1/C2 | w3cPostEvidenceLoop | w3cPostEvidenceLoop.test | PASS | Deterministic post-evidence analysis path | — | KEEP | NO | NO | NCC-BAR-10 |
+| NR-15 | Propose replan after terminal | C1/C2 | W3c replan recommendation; replanInvoked false; decideTrajectory for structural | w3c tests | PARTIAL | Reco exists; auto-replan correctly forbidden; CIS replan UX PARTIAL | POLICY | ADAPT replan recommendation presentation | NO | YES | NCC-BAR-10 |
+| NR-16 | Recovery/FAIL honest | C1/C2 | W3 recovery recommendation; PE recovery e2e | w3b + e2e w4c | PARTIAL | Product recovery path; cognitive FAIL honesty LIVE NOT_MEASURABLE | EVIDENCE_ONLY | KEEP Product path; ADAPT cognitive narrative | NO | YES | NCC-BAR-10 |
+| NR-17 | Inter-session resume from C (+optional B) | C1/C2 CE-03 | Remount durables; conversation ephemeral; no Memory B | disclosures / proposalStore / orchestrateTurn | FAIL | Process-local chat; no Memory B; honest loss only | MEMORY_CONTEXT | COMPLETE Memory B need (mechanism TBD OD-03); KEEP remount-from-C | NO* | YES | NCC-BAR-07 |
+| NR-18 | Absorb method complexity | C1/C2 | CKC seam extracts guidance; UI not raw CKC | ckcCognitiveContext | PARTIAL | Deterministic absorption; LIVE method UX NOT_MEASURABLE | POLICY_OR_PROMPT | ADAPT | NO | YES | NCC-BAR-13 |
+| NR-19 | CKC Phase B semantic; CKC≠authority | C1/C2 | ckcCognitiveContext + disclosures IMPLEMENTED_DETERMINISTIC_NOT_REAL | w1CkcSemanticSeam | PARTIAL | Seam present; not REAL cognitive CKC use | SOURCE_ACCESS | ADAPT; REAL later | NO | YES | NCC-BAR-08 |
+| NR-20 | Materialization classes; never silent B→C | C1/C2 | HD for structural; no Memory B store to leak | OA decision/materialization | PARTIAL | C path strong; B→C rules untested without B | MEMORY_CONTEXT | COMPLETE with Memory B | NO | YES | NCC-BAR-07 |
+| NR-21 | No authority / no execution | C1/PC | Hard guards HD/promotion/EC | multiple PC/Nora tests | PASS | Authority bar retained | — | KEEP | NO | NO | NCC-BAR-11 |
+| NR-22 | Closed Evidence→Nora→LPS/Traj/Rec | C1/PC | W3-C loop | w3c tests | PASS | Product closed loop | — | KEEP | NO | NO | NCC-BAR-10 |
+| NR-23 | Assist qualification; no fake CKC authority | C1 | Disclosures + seam | w1Ckc | PARTIAL | Honesty disclosures present | POLICY | KEEP disclosures; ADAPT qualify assist | NO | YES | NCC-BAR-08 |
+| NR-24 | Catalog genericity; no specialized Nora engine | C1/C2 B9 | Single F2 mechanism; OPS1 parallel legacy exists | F2 vs ops1/** | PARTIAL | Product F2 generic; OPS1 is parallel legacy shell (not F1) | FUNCTIONAL_BOUNDARY soft | KEEP F1/F2; FREEZE/RETIRE_LATER OPS1 cognitive claims | NO | YES | NCC-BAR-13 |
+| NR-25 | Source fail → no extrapolation | C1/REAL-A | GroundingLedger + REAL-A hardening | realABlocker01 + toolLoop | PARTIAL | Per-turn grounding strong; cross-turn RA-07 gap OPEN | TOOLING + OBSERVABILITY | ADAPT grounding durability (RA-07) | NO | YES | NCC-BAR-05/12 |
+| NR-26 | Escalate only unresolved authority | C1/C2 | HD Pilote paths; escalation precision unevaluated | recordF2Decision / decideTrajectory | PARTIAL | Escalation exists; precision eval missing | OBSERVABILITY_EVAL | ADAPT + eval | NO | YES | NCC-BAR-01/11 |
+
+---
+
+## 9. CE-01…08 coverage
+
+| ID | Need | Implementation | Coverage | Gap | Root cause | Disposition | FA? | Delivery? |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| CE-01 | Domain-aware tool/source strategy | Git/GitHub tools + router; no External Source Intelligence beyond repos | PARTIAL | Vendor-neutral External Source Intelligence incomplete; Hosted Web Search NOT ADOPTED | TOOLING | ADAPT-first capability; if new source infrastructure primitive proven necessary → Targeted TA Delta before any tech selection; Hosted Web Search = OPTION only | NO | YES |
+| CE-02 | Evidence-backed contradiction disposition | Types + LPS ids; weak cognitive controller | PARTIAL | Controller/evals missing | POLICY + soft boundary | COMPLETE disposition path | NO | YES |
+| CE-03 | Memory B ≠ C + restart-safe | No Memory B; remount-from-C honesty | FAIL | Memory B absent | MEMORY_CONTEXT | COMPLETE need ADAPT-first (OD-03 OPEN); no second Truth C; TA only if ADAPT proven insufficient | NO* | YES |
+| CE-04 | Context/compaction + provenance | History slice 20; no compaction provenance | FAIL | Compaction absent | MEMORY_CONTEXT | COMPLETE compaction contract | NO | YES |
+| CE-05 | Cognitive Workload Profile under policy | OPENAI_REASONING_EFFORT static env | FAIL | ≠ demonstrated CWP/strategy classes | POLICY_OR_PROMPT | ADAPT strategy under envelope (OD-02 OPEN) | NO | YES |
+| CE-06 | Narrative ↔ evidence coherence | Product terminals + grounding; narrative parity partial | PARTIAL | CE-06 LIVE/narrative audits missing | OBSERVABILITY_EVAL | ADAPT + eval | NO | YES |
+| CE-07 | Cognitive observability + versioned eval harness | EventSink technical; no Nora eval harness | FAIL | Harness absent | OBSERVABILITY_EVAL | COMPLETE eval design then harness Delivery | NO | YES — enabler |
+| CE-08 | Long-context / multi-doc honest partiality | Tool reads + RA-06 reserve OPEN NON_BLOCKING | PARTIAL | Honest partiality incomplete | SOURCE_ACCESS | ADAPT ranged/partial disclosure | NO | YES |
+
+---
+
+## 10. NCC-BAR-01…14 baseline coverage
+
+| ID | Capacity | Baseline coverage | Notes |
+| --- | --- | --- | --- |
+| 01 | Intent + adaptive clarification | PARTIAL | F2 intent; challenge/clarify policy incomplete |
+| 02 | Cognitive Workload Profile under policy | FAIL | Static reasoning.effort; OD-02 OPEN |
+| 03 | Autonomous tool/source multi-tool | PARTIAL | Bounded tool loop + Git/GitHub; domain strategy limited |
+| 04 | Source discovery + ranged honesty | PARTIAL | Allowlisted READ; multi-doc RA-06 OPEN |
+| 05 | Grounding / zero fabricated claims | PARTIAL | Per-turn GroundingLedger; cross-turn RA-07 OPEN |
+| 06 | Evidence-backed contradiction | PARTIAL | Types exist; controller/evals missing |
+| 07 | Honest continuity A/B vs Truth C | FAIL | No Memory B; process-local chat |
+| 08 | Qualification quality stable | PARTIAL | F2 qualify + CKC seam deterministic ≠ LIVE |
+| 09 | Options/Rec quality + epistemic separation | PARTIAL | W2/W3 strong; conversational CIS weak |
+| 10 | Trajectory + Evidence + Recovery/Replan | PARTIAL | Product loop PASS-like; cognitive CIS PE unproven |
+| 11 | Absolute authority boundaries | PASS | Deterministic guards KEEP |
+| 12 | Narrative ↔ evidence coherence | PARTIAL | Needs CE-06/07 instrumentation |
+| 13 | Genericity across cycle types | PARTIAL | F2 single mechanism; OPS1 parallel legacy |
+| 14 | ChatGPT↔Cursor parity measured | NOT_MEASURABLE | No harness; B0 input only |
+
+**IMPORTANT:** PASS/PARTIAL here = baseline readiness coverage only · **≠** NCC-BAR final satisfied · **≠** Cognitive Completion proven.
+
+---
+
+## 11. C2 B0…B9 coverage
+
+| Block | Definition focus | Coverage | Notes |
+| --- | --- | --- | --- |
+| B0 | Behavioral Reference Model | NOT_MEASURABLE | No harvest/parity measurement harness |
+| B1 | Cognitive Interaction Model | PARTIAL | Flow exists in pieces; not unified CIS controller |
+| B2 | Cognitive Workload Profile | FAIL | Static effort; OD-02 OPEN |
+| B3 | Memory A/B/C + materialization | PARTIAL | C strong; A informal; B absent |
+| B4 | Tool/Source Intelligence | PARTIAL | Repo tools PASS-like; External Source Intelligence incomplete |
+| B5 | Context/Compaction | FAIL | Slice≠compaction with provenance |
+| B6 | Epistemology/Contradiction | PARTIAL | Ladder types; disposition weak |
+| B7 | Narrative↔Evidence | PARTIAL | Needs eval |
+| B8 | Eval / Completion Model | FAIL | No versioned cognitive harness |
+| B9 | Cognitive Genericity | PARTIAL | F2 generic; avoid OPS1 as second engine |
+
+---
+
+## 12. C3 interaction / C3-PE-BAR baseline coverage
+
+### 12.1 CIS
+
+| CIS | Baseline coverage | Runtime note |
+| --- | --- | --- |
+| Understanding | PARTIAL | F2 intent / UiState SENDING |
+| Clarification needed | PARTIAL | ambiguous class; not CIS-enforced |
+| Challenging premise | FAIL | No Critical challenge controller |
+| Resolving sources | PARTIAL | tool loop SOURCE_LOOKUP chrome |
+| Reading / verifying | PARTIAL | tool rounds |
+| Partial context | PARTIAL | disclosures; not systematic |
+| Qualification ready | PARTIAL | F2 qualify output |
+| Reasoning | PARTIAL | model turns |
+| Contradiction candidate | FAIL | No CIS materialization |
+| Contradiction evidence-backed | FAIL | No controller |
+| STOP | PARTIAL | W3B STOP ≠ cognitive STOP |
+| Options ready | PARTIAL | W2 options; chat CIS weak |
+| Recommendation ready | PARTIAL | W2/W3 Rec |
+| Awaiting Pilote HumanDecision | PASS | HD wait paths |
+| Post-decision reasoning | PARTIAL | after HD continue |
+| ExecutionContract preparation boundary | PASS | EC prep boundaries |
+| Execution progress | PASS | Product execution UX |
+| Evidence available | PASS | Evidence surfaces |
+| Evidence analysis | PASS | W3-C analysis |
+| Recovery recommendation | PARTIAL | W3 recovery |
+| Replan recommendation | PARTIAL | reco only; no auto |
+| Resume / context restored | PARTIAL | remount C; not B |
+| Resume / context incomplete | PARTIAL | honest loss banners |
+
+C3 states = design vocabulary · **≠** required runtime enum. Coverage asks whether behavior is represented/observable.
+
+### 12.2 C3-PE-BAR
+
+| Status | Value |
+| --- | --- |
+| Defined | YES (C3 §23) |
+| Proven | **NO** |
+| Baseline | **NOT_MEASURABLE** as final bar · design/Penpot semantic PASS is historical PE evidence only |
+| Downstream | Requires eval scenarios + PE UAT on `/studio` · ≠ this cycle |
+
+---
+
+## 13. Memory / context qualification
+
+| Tier | Runtime reality | Gap |
+| --- | --- | --- |
+| **A** turn scratch | Informal (tool items + GroundingLedger) | Name/contract incomplete · non-blocking if B/C clear |
+| **B** cognitive conversation memory | **ABSENT** · process-local messages/proposals only | CE-03/04 · NCC-BAR-07 · NR-17 |
+| **C** Project Truth | **PRESENT** (LPS/HD/Trajectory/Evidence/Git) | KEEP |
+| Compaction | History truncate 20 ≠ provenance-preserving compaction | CE-04 |
+| Restart | Remount from C + honest chat loss | Correct honesty · insufficient continuity |
+| Invalidation | Truth C updates exist; B invalidation N/A without B | — |
+
+**Central answer:** Missing piece for honest Memory B/compaction is a **non-Truth continuity layer** with invalidation + provenance — **without** creating a second Project Truth. Existing OA boundaries already define C. **ADAPT-first** on existing runtime/persistence. If ADAPT cannot close the gap honestly, **Targeted TA Delta** analyzes options (Sessions / local store / remount-only+ / other) — OD-03 remains OPEN · **no technology selected here**.
+
+---
+
+## 14. Cognitive orchestration qualification
+
+| Element | Class | Note |
+| --- | --- | --- |
+| Provider / Responses | KEEP | Confirmed |
+| Prompting / structured outputs | ADAPT | F2 schemas exist |
+| Cognitive strategy / CWP | COMPLETE need | Static effort ≠ strategy |
+| Tool loop ceilings 4×4 | KEEP (healthy constraint) unless eval proves insufficient | Not automatic gap |
+| Tool/source selection | ADAPT | Repo-centric today |
+| Multi-tool | KEEP/ADAPT | Loop supports multi-call/round |
+| Grounding | KEEP + ADAPT durability | RA-07 |
+| Partial reads / source failure | ADAPT | Honesty incomplete |
+| Contradiction | COMPLETE controller | Types exist |
+| External knowledge | ADAPT capability first; Hosted Web Search = option only · TA if new source primitive proven necessary | OD-05 DEFER · no tech selection |
+
+---
+
+## 15. Tool / source / grounding qualification
+
+- Allowlisted Git local + GitHub READ: **KEEP**
+- Deny-by-default router: **KEEP**
+- Per-turn grounding injection: **KEEP**
+- Cross-turn provenance ledger: **ADAPT** (RA-07 OPEN)
+- External Source Intelligence MUST (CE-01): **incomplete** · vendor-neutral capability · KEEP/ADAPT first · **≠** Hosted Web Search adoption · if new source infrastructure proven necessary → Targeted TA Delta before selection
+
+---
+
+## 16. Cognitive evaluability baseline
+
+| Measurable now (deterministic) | Not measurable without design/harness | Downstream bounded REAL |
+| --- | --- | --- |
+| Authority / HD / promotion guards | CWP strategy quality | Live model intent/challenge quality |
+| Tool loop bounds + grounding rules | CIS observability completeness | Narrative↔Evidence LIVE parity |
+| F2 intent schema fail-closed | NCC-BAR-14 ChatGPT parity | Multi-doc LIVE completeness |
+| CKC package load seam | Memory B semantic continuity | Critical challenge LIVE |
+| W2/W3 Option/Rec/STOP/FAIL product paths | Full NCC-BAR suite | REAL-B programme proofs |
+
+**Do not build harness in this cycle.** CE-07 = candidate enabler slice inside recommended backlog.
+
+---
+
+## 17. Fake / Real qualification
+
+| Capability area | Class |
+| --- | --- |
+| Provider abstraction / fake provider tests | DETERMINISTIC_PROVEN |
+| F2 intent/qualify/proposal fail-closed | DETERMINISTIC_PROVEN |
+| CKC seam load/attribution | DETERMINISTIC_PROVEN (≠ REAL) |
+| W2/W3 authority & post-evidence | DETERMINISTIC_PROVEN |
+| REAL-A source grounding integrity | REAL_BOUNDARY_PROVEN (prior programme) |
+| Memory B / CWP / CIS / NCC final | NOT_PROVEN |
+| End-to-end Cognitive Completion | NOT_PROVEN |
+| Live OpenAI cognitive behavior (this cycle) | NOT executed · NOT_MEASURABLE here |
+
+fake ≠ live · deterministic ≠ REAL · REAL-A ≠ Cognitive Completion · REAL-B candidate ≠ authorized · baseline coverage ≠ final NCC PASS.
+
+---
+
+## 18. Gap & reserve register
+
+| ID | Statement | Disposition | Proof |
+| --- | --- | --- | --- |
+| **NCC-R01** | Conversation F1/F2 process-local | **CONFIRMED** | `F2_PROCESS_LOCAL_NOTICE` · ephemeral history |
+| **NCC-R02** | Bounded history / compaction to qualify | **CONFIRMED** (split) | Slice=20 · compaction absent → CE-04 |
+| **NCC-R03** | reasoning.effort static ≠ CWP | **CONFIRMED** | `OPENAI_REASONING_EFFORT` env |
+| **NCC-R04** | Tool loop bound 4×4 | **REFORMULATED** | Default **KEEP healthy constraint** · gap only if eval proves insufficient |
+| **NCC-R05** | No versioned cognitive eval harness | **CONFIRMED** | EventSink ≠ harness |
+| **NCC-R06** | Agents SDK / Sessions / Hosted Web Search candidates only | **CONFIRMED** · OPEN | Not installed/adopted · REPLACE not demonstrated · if runner/toolLoop later proven structurally insufficient → Targeted TA Delta → options → Morris |
+| **NCC-R07** | C3-PE-BAR defined ≠ proven | **CONFIRMED** | C3 exit criteria |
+| **NCC-R08** | Roadmap Nora lag vs C2/C3 on main | **CONFIRMED** · **OPEN** · **REQUIRED LIFECYCLE TRUTH-SYNC BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** | Roadmap still “≠ C2 AUTHORIZED” while C2/C3 integrated · living lag OK during C4 · must not remain open when Morris authorizes Nora next capability · ≠ Roadmap edited now · ≠ replaces REAL-B |
+| **NCC-R09** | Contradiction type without cognitive STOP controller | **NEW (SPLIT from NR-04/13)** | Epistemic types present; controller missing |
+| **NCC-R10** | OPS1 parallel conversation stack risk | **NEW** | `app/lib/ops1/**` · FREEZE claims vs F1 |
+
+---
+
+## 19. Architecture blocker register
+
+| Gap | Cause class | FA_REQUIRED | TA_REQUIRED | Notes |
+| --- | --- | --- | --- | --- |
+| Memory B continuity | MEMORY_CONTEXT | **NO** | **NO** (currently) | Boundary already in C2 (B≠C). ADAPT-first. TA **becomes REQUIRED** only if ADAPT of existing persistence/runtime cannot satisfy Memory B without debt/second Truth C → Targeted TA Delta → options → Morris |
+| Compaction provenance | MEMORY_CONTEXT | **NO** | **NO** | Specifiable in backlog contracts |
+| CWP / strategy | POLICY_OR_PROMPT | **NO** | **NO** | OD-02 OPEN · policy/eval first |
+| Eval harness | OBSERVABILITY_EVAL | **NO** | **NO** | Design+Delivery enabler |
+| Contradiction STOP | POLICY + soft boundary | **NO** | **NO** | Types exist; COMPLETE wiring |
+| External sources | TOOLING | **NO** | **NO** (currently) | Vendor-neutral CE-01 · ADAPT-first · Hosted Web Search = OPTION · TA if new source infrastructure primitive proven necessary (OD-05) |
+| Agents SDK / runner | TECHNICAL_ARCHITECTURE candidate | **NO** | **NO** (currently) | REPLACE not demonstrated (OD-04) · TA if evals prove existing toolLoop/runner structurally insufficient → TA Delta → options (may include Agents SDK) → Morris |
+| CIS as enum | PRODUCT_EXPERIENCE | **NO** | **NO** | C3: design vocabulary ≠ must schema |
+| Authority/HD | — | **NO** | **NO** | Already PASS |
+| Parallel PE architecture | — | **NO** | **NO** | C3 KEEP EA |
+
+**No demonstrated Functional Architecture delta requirement.**
+**No mandatory Technical Architecture delta currently demonstrated** under ADAPT-first / KEEP-ADAPT default.
+
+**TA causality (normative for this document):** ADAPT-first → demonstrated need for a structural technical primitive → **Targeted TA Delta** (options / trade-offs / impact / migration / exit / anti-parallel) → **Morris decision** → revised backlog/readiness if needed → Delivery only under a **distinct** GO. Technology selection by Cursor is forbidden; Morris does not normally pick a primitive then “trigger TA.”
+
+---
+
+## 20. Path-critical / no-parallel-architecture review
+
+1. **Canonical Nora path:** `/studio` → F1/F2 project-assistant → OA Truth C → W2/W3.
+2. **Components already serving it:** Responses provider, tool loop+grounding, F2 intent/qualify, CKC seam, OA durables, W2/W3 Rec/HD, `/studio` PE.
+3. **Second path?** OPS1 legacy conversation — risk if treated as Nora runtime; classify FREEZE/RETIRE_LATER for cognitive claims.
+4. **New engine necessary?** **NO** by default — REPLACE not demonstrated.
+5. **Reuse Product Completion?** **YES** — LPS/HD/Trajectory/Evidence/EC spine.
+6. **Overlap REAL-B?** **YES thematically** (grounding, contradiction, Critical rigor, narrative parity).
+7. **Avoid double work:** Nora backlog implements/designs measurable cognitive behaviors on Studio path; REAL-B remains published LIVE proof programme — do not silently replace REAL-B; share fixtures/scenarios where possible; no duplicate “second cognitive programme.”
+8. **Critical path capabilities:** (i) eval harness design, (ii) Memory B/compaction contracts on ADAPT path, (iii) CWP-under-envelope, (iv) contradiction/STOP honesty, (v) grounding durability.
+9. **Non-blocking debts:** RA-06/07, Penpot hi-fi (D1), C3-PE-BAR full proof, OD-06 voice, OD-08 naming, FinOps/T7 freeze as construction state.
+10. **Temporary exits:** process-local chat → Memory B target; static effort → CWP target; EventSink-only → harness target; Roadmap Nora lag (NCC-R08) → **REQUIRED lifecycle truth-sync before or with next-capability authorization** (separate DOC cycle unless Morris groups).
+
+---
+
+## 21. REAL-B overlap / non-duplication
+
+| Track | Role | Status |
+| --- | --- | --- |
+| REAL-B | Published convergence next · LIVE cognitive reasoning qualification | QUALIFIED CANDIDATE · **NOT AUTHORIZED** · NOT STARTED |
+| Nora Cognitive Completion | Complementary DOC→readiness→(future) implementation quality vs C1–C3 | C1–C3 closed · this C4 readiness candidate |
+| Shared themes | Grounding, contradiction, Critical profile, narrative≠tool | Coordinate · do not merge authorities |
+| Rule | Nora ≠ substitute REAL-B · REAL-B ≠ auto-implement Nora CE | Separate Morris GOs |
+
+---
+
+## 22. Candidate downstream slices (groups only — ≠ backlog)
+
+1. **Eval design & versioned cognitive harness (CE-07)** — scenarios for NCC-BAR-01…14 / CIS observables
+2. **Memory B + compaction contracts (CE-03/04, NR-17)** — ADAPT-first · no Truth C fork
+3. **Cognitive Workload strategy under SFIA envelope (CE-05, OD-02)** — policy + telemetry
+4. **Contradiction evidence disposition + cognitive STOP (NR-04/13, NCC-06)**
+5. **Grounding durability / narrative coherence (NR-25, CE-06, RA-07)**
+6. **Critical challenge + clarification burden (NR-02/06)**
+7. **External Source Intelligence capability ADAPT** — search tech remains option
+8. **Documentary (governance):** Roadmap Nora lifecycle truth-sync (NCC-R08) — **REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** · separate DOC cycle unless Morris GO groups · ≠ this cycle · ≠ replaces REAL-B
+
+---
+
+## 23. Next-capability recommendation
+
+### Primary recommendation
+
+**A — SOURCE-LOCKED COGNITIVE BACKLOG**
+
+Justification:
+- No FA blocker demonstrated (C3 register 0; OA boundaries exist)
+- **No mandatory TA delta currently demonstrated** (ADAPT-first / REPLACE not demonstrated)
+- Gaps are predominantly COMPLETE/ADAPT on existing F1/F2/OA/`/studio` spine
+- Eval harness should be **first epic group** inside that backlog (enabler), not a reason to skip backlog qualification
+- PE sufficient for implementation contracts (C3 closed); no PE delta required to unblock
+- **Roadmap Nora lifecycle truth-sync = REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** (≠ backlog itself; ≠ this cycle)
+
+### Explicitly not selected as primary
+
+| Option | Why not primary |
+| --- | --- |
+| B Targeted TA | **Conditional branch only:** if ADAPT-first later proves insufficient and a structural technical primitive is demonstrated necessary → Targeted TA Delta (options/trade-offs) → Morris decision — **not** “Morris selects Sessions/Agents/store then TA” |
+| C Functional Architecture | No genuine ownership/boundary blocker beyond already-specified B≠C |
+| D Product Experience delta | C3 PE contracts exist; PE-BAR proof is eval/UAT downstream |
+| E Eval-only enabler cycle | Attractive but eval can be Slice-0 of backlog without blocking story locking from C1–C3 |
+
+### Decision class
+
+**RECOMMENDATION ONLY — MORRIS DECISION REQUIRED.**
+**NEXT CAPABILITY = NOT AUTHORIZED.**
+
+### Recommended conceptual trajectory (≠ automatic authorization)
+
+Nora C1 CLOSED → C2 CLOSED → C3 CLOSED → C4 QUALIFIED → C4 ChatGPT review corrections applied → **Morris C4 content validation CONSUMED (PASS)** → C4 Git integration (commit/push/Draft PR · ≠ merge) → ChatGPT PR review → Morris merge gate → post-merge → **Roadmap Nora lifecycle truth-sync REQUIRED before or with next-capability authorization** → Morris next-capability decision → if authorized: Source-Locked Cognitive Backlog (Slice-0 eval harness → Memory B/compaction → CWP → contradiction/STOP → grounding/narrative → Critical challenge → External Source Intelligence) → readiness per macro-wave → distinct Morris Delivery GO → Delivery + proof → Pre-QA Cognitive Conformance → Integrated Cognitive Completion QA → Morris final closure.
+
+Architecture remains conditional: FA only on demonstrated boundary blocker; TA only on demonstrated structural technical primitive need → TA Delta → Morris → Delivery separately.
+
+---
+
+## 24. Morris gates
+
+| Gate | Status |
+| --- | --- |
+| Validate C4 readiness content | **CONSUMED — PASS** · `GO MORRIS — VALIDATE NORA COGNITIVE COMPLETION C4 CONTENT — … — PASS — NO GIT INTEGRATION — NO NEXT CAPABILITY AUTHORIZATION` |
+| Git integration (commit + push + Draft PR + CI + handoff) | **CONSUMED** · **NO MERGE** · **NO ROADMAP SYNC** · **NO NEXT CAPABILITY AUTHORIZATION** |
+| Decide next capability (A recommended) | **REQUIRED** · **NOT AUTHORIZED** now |
+| Roadmap Nora lifecycle truth-sync | **REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** · separate DOC cycle unless Morris groups · ≠ this cycle · ≠ replaces REAL-B |
+| Consume OD-02…08 | **NOT** in this cycle · OPEN · OD ≠ technology pre-selection · if structural tech primitive needed, Targeted TA precedes selection |
+| Authorize Delivery | **NOT** |
+| Authorize REAL-B execution | **NOT** (separate) |
+| Adopt Agents SDK / Sessions / Hosted Web Search / new persistence | **NOT** · options only after TA when TA is required |
+| runtime v3 adoption | **NOT** |
+
+---
+
+## 25. Debt / exit trajectory
+
+| Debt | Target | Exit |
+| --- | --- | --- |
+| Process-local chat (R01) | Memory B continuity | CE-03/04 + NR-17 suites |
+| Static effort (R03) | CWP under envelope | OD-02 decision + evals |
+| No harness (R05) | Versioned cognitive harness | CE-07 Delivery epic |
+| PE-BAR unproven (R07) | `/studio` PE proof | Eval + UAT |
+| Roadmap lag (R08) | Nora lifecycle truth aligned to Git (C1–C3 closed · C4 qualified · next pending) | **REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** · dedicated DOC cycle unless Morris groups |
+| RA-06/07 | Completeness + cross-turn provenance | REAL/Nora shared remediation |
+| OPS1 parallel risk (R10) | Single canonical path | FREEZE claims / retire later |
+
+---
+
+## 26. Exit proof (this cycle)
+
+| Criterion | Status |
+| --- | --- |
+| Local Git Truth on exact origin/main | YES · `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` |
+| C1/C2/C3 read · unmodified | YES |
+| Runtime anchors confirmed/corrected | YES (§6) |
+| Coverage matrices NR/CE/NCC/B/CIS/PE-BAR | YES |
+| Gap + architecture blocker registers | YES |
+| One primary next-capability recommendation | YES · A |
+| No runtime/code/Roadmap mutation | YES |
+| No project Git integration | YES |
+| Review Pack FULL + Handoff | (cycle execution) |
+
+---
+
+## 27. Final verdict (cycle)
+
+**NORA COGNITIVE RUNTIME GAP & IMPLEMENTATION READINESS — QUALIFIED — NO STRUCTURAL ARCHITECTURE BLOCKER — SOURCE-LOCKED COGNITIVE BACKLOG RECOMMENDED — MORRIS DECISION REQUIRED**
+
+Underlying truth:
+- Nora C1+C2+C3 = CONTENT VALIDATED · INTEGRATED ON MAIN · POST-MERGE VERIFIED
+- **C4 CONTENT VALIDATED BY MORRIS** · Git integration in progress · ≠ INTEGRATED ON MAIN · ≠ MERGED · ≠ POST-MERGE VERIFIED
+- Runtime spine = KEEP/ADAPT capable
+- Cognitive Completion = **NOT PROVEN**
+- FA_REQUIRED = **NO** · **NO MANDATORY TA DELTA CURRENTLY DEMONSTRATED**
+- SOURCE-LOCKED COGNITIVE BACKLOG remains the recommended next capability
+- Next capability = **NOT AUTHORIZED** (recommendation only)
+- **Roadmap Nora lifecycle truth-sync = REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION**
+- TA branch remains conditional on demonstrated structural technical primitive need (ADAPT-first first)
+
+---
+
+## 28. Anti-claims
+
+- C4 **CONTENT VALIDATED BY MORRIS**
+- ≠ GIT INTEGRATED ON MAIN
+- ≠ MERGED
+- ≠ POST-MERGE VERIFIED
+- ≠ Nora Cognitive Completion
+- ≠ NCC-BAR final PASS
+- ≠ C3-PE-BAR final PASS
+- ≠ Product Completion reopen / C6 reopen
+- ≠ FA automatically required
+- ≠ TA automatically required
+- ≠ Backlog validated / Delivery authorized
+- ≠ Agents SDK / Sessions / Hosted Web Search / new persistence adopted
+- ≠ REAL-B authorized / REAL proof / READY FOR REAL
+- ≠ runtime v3 ADOPTED / FinOps/T7 unfreeze
+- ≠ NEXT CAPABILITY AUTHORIZED
+- ≠ Roadmap mutated in this cycle
+- ≠ MORRIS RUNTIME PERSONA
+
+---
+
+*Fin du C4-VALIDATED — CONTENT VALIDATED BY MORRIS — GIT INTEGRATION IN PROGRESS — ≠ INTEGRATED ON MAIN — ≠ MERGED — ≠ POST-MERGE VERIFIED — SOURCE-LOCKED COGNITIVE BACKLOG RECOMMENDED — NEXT CAPABILITY NOT AUTHORIZED — ROADMAP NORA LIFECYCLE TRUTH-SYNC REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION — NO MANDATORY TA CURRENTLY DEMONSTRATED — NO ARCHITECTURE SELECTED — NO DELIVERY — NO REAL — NO RUNTIME V3 ADOPTION — OD-02…08 OPEN — NO MORRIS RUNTIME PERSONA.*
```

---

## 9. FULL integrated C4 content

Lines: **570** · Bytes: **43116**

```markdown
# Nora Cognitive Completion — Cognitive Runtime Gap & Implementation Readiness

| Field | Value |
| --- | --- |
| **Document** | `04-nora-cognitive-runtime-gap-implementation-readiness.md` |
| **Programme** | Nora Cognitive Completion |
| **Milestone** | COGNITIVE RUNTIME GAP & IMPLEMENTATION READINESS |
| **Cycle type** | **8 — Delivery / implémentation** · nature exacte = **QUALIFICATION / READINESS ONLY** |
| **Typology** | DOC / ANALYSIS |
| **Profile** | **CRITICAL** |
| **Revision** | **C4-VALIDATED** — Cognitive Runtime Gap & Implementation Readiness |
| **Statut** | **CONTENT VALIDATED BY MORRIS — GIT INTEGRATION IN PROGRESS** · ≠ INTEGRATED ON MAIN · ≠ POST-MERGE VERIFIED · ≠ MERGED |
| **Timestamp (Europe/Paris)** | 2026-08-29 12:00:56 CEST |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-nora-cognitive-runtime-gap-readiness` |
| **Branche** | `docs/sfia-studio-nora-cognitive-runtime-gap-readiness` |
| **HEAD** | `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` |
| **origin/main** | `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` |
| **Tree** | `e4172c956cc3bfc8cc466bfb641dc296180a31ad` |
| **Generation anchor** | `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` — **MATCHES** current origin/main |
| **GO Morris qualification** | **CONSUMED** — qualification/readiness analysis |
| **GO Morris correction** | **CONSUMED** — `GO CORRECTION C4 AVANT VALIDATION` |
| **Décision Morris validation contenu** | **CONSUMED** — `GO MORRIS — VALIDATE NORA COGNITIVE COMPLETION C4 CONTENT — COGNITIVE RUNTIME GAP & IMPLEMENTATION READINESS — PASS — NO GIT INTEGRATION — NO NEXT CAPABILITY AUTHORIZATION` |
| **GO Morris Git integration** | **CONSUMED** — `GO MORRIS — NORA COGNITIVE COMPLETION C4 — GIT INTEGRATION — COMMIT + PUSH + DRAFT PR + CI + REVIEW HANDOFF — NO MERGE — NO ROADMAP SYNC — NO NEXT CAPABILITY AUTHORIZATION` |
| **Runtime HumanDecision actor** | **Pilote** |
| **NO MORRIS RUNTIME PERSONA** | retained |
| **runtime v3** | **NON ADOPTED** |
| **Delivery** | **NOT AUTHORIZED** |
| **Architecture** | **NOT SELECTED** |
| **NEXT CAPABILITY** | **NOT AUTHORIZED** · SOURCE-LOCKED COGNITIVE BACKLOG = recommendation only |

> **Anti-claims :** C4 **CONTENT VALIDATED BY MORRIS** · **≠ GIT INTEGRATED ON MAIN** · **≠ MERGED** · **≠ POST-MERGE VERIFIED** · ≠ Nora Cognitive Completion proven · ≠ NCC-BAR final PASS · ≠ C3-PE-BAR final PASS · ≠ Product Completion reopen · ≠ FA automatically required · ≠ TA automatically required · ≠ Backlog validated · ≠ Delivery authorized · ≠ Agents SDK / Sessions / Hosted Web Search adopted · ≠ new persistence adopted · ≠ REAL-B · ≠ REAL proof · ≠ READY FOR REAL · ≠ runtime v3 ADOPTED · ≠ FinOps/T7 unfreeze · ≠ NEXT CAPABILITY AUTHORIZED · ≠ Roadmap mutated.

---

## 1. Purpose / non-goals

### Purpose

Determine, from **repository truth** and available proofs, how far the current Nora / project-assistant runtime covers validated **C1 + C2 + C3** contracts; which gaps remain; root causes; which gaps truly require Functional or Technical Architecture; and **one** recommended next capability for Morris decision.

### Non-goals

- Implement gaps
- Select/adopt architecture or technology
- Produce final Cognitive Completion proof
- Validate a detailed backlog
- Execute REAL / REAL-B / live OpenAI
- Mutate Roadmap / C1–C3 / Product Completion / runtime code
- Transform technology options into decisions

---

## 2. Source authority model

| Layer | Authority | Role in this cycle |
| --- | --- | --- |
| Git / origin/main | Repository SoT | Evidence baseline |
| Morris | Construction / gates / promotions | Consumed GO for analysis only |
| ChatGPT | Qualification / challenge / recommendation review | Downstream of this pack |
| Cursor | Controlled local analysis | This document |
| Pilote | Runtime HumanDecision actor | Unchanged |
| Nora C1/C2/C3 | Normative cognitive contracts | READ ONLY |
| Product Completion | Closed product spine + adaptive pattern | Pattern / reuse · DO NOT REOPEN |
| Build Doctrine | How to build | Qualification rules |
| Roadmap | Where convergence is | Read; Nora lifecycle lag = **OPEN debt** · **REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** (≠ this cycle) |
| v3 framing 30–37 | Product target doctrine | Guidance · runtime v3 NON ADOPTED |
| SFIA v2.6 | External ChatGPT↔Cursor process | PROCESS ONLY · ≠ Nora runtime doctrine |
| CKC Type 8 synthetic map | Experimental guidance | Authority = **NONE** |

---

## 3. Convergence qualification

| Field | Value |
| --- | --- |
| **Capacité(s) v3 servie(s)** | V3-F01 · F02 · F04 · F05 · F06 · F08 · F09 · F14 · F15 (cognitive loop, LPS, epistemology, HD, evidence, maturity) |
| **Milestone** | Nora Cognitive Runtime Gap & Implementation Readiness |
| **État courant** | PC COMPLETE/CLOSED · C6 CLOSED · Nora C1+C2+C3 CONTENT VALIDATED · INTEGRATED ON MAIN · POST-MERGE VERIFIED · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · published convergence next = **REAL-B candidate** |
| **Actifs** | KEEP Product F1–F3/W2–W3 spine · ADAPT intent/tools/grounding/qualify · COMPLETE Memory B need / CWP / eval harness / cognitive STOP · REPLACE **not demonstrated** |
| **Gaps** | Memory B/compaction · CWP/strategy · eval harness · contradiction STOP · External Source Intelligence · CIS observability · Roadmap Nora lag |
| **Dépendances** | OD-02…08 OPEN · RA-06/07 OPEN NON_BLOCKING · REAL-B separate track |
| **Lien Roadmap** | Nora complementary · does **not** replace REAL-B · Roadmap still lists Nora next as C2 requalification (**STALE** vs C2/C3 on main) · **Roadmap Nora lifecycle truth-sync = REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** · ≠ Roadmap edited in this cycle · global next remains REAL-B candidate |
| **Chemin critique** | Measure (eval) + Memory B continuity + strategy-under-envelope + contradiction/STOP honesty on existing F1/F2/OA spine |
| **Exit proof (this cycle)** | Repo-first matrices · gap/blocker registers · one next-capability recommendation · Review Pack FULL · Review Handoff |
| **Dette / exit** | See §19–§20 |
| **Gates Morris** | Validate C4 content · decide next capability · **Roadmap Nora lifecycle truth-sync REQUIRED before or with next-capability authorization** · OD decisions remain separate · ≠ Roadmap GO in this cycle |
| **Capacité suivante candidate** | **SOURCE-LOCKED COGNITIVE BACKLOG** (primary) — RECOMMENDATION ONLY |

**Trajectory link:** Demonstrable — Nora C1–C3 closed cleanly on main; Product Completion adaptive pattern (architecture only on proven blockers) applies; this cycle qualifies implementation readiness without selecting architecture.

---

## 4. Product Completion precedent / trajectory alignment

Observed PC pattern: C1 → C2 → PE → FA (when blockers) → TA delta (when structural tech) → backlog → W1–W4 readiness/delivery → targeted TA addendum when blocker discovered → Pre-QA → Integrated QA → Morris close.

**Rule applied here:** architecture **only** when responsibility/boundary/tech structural blocker is demonstrated — **not** because “FA is next.”

Finding: Product Completion already delivered the OA spine Nora reuses (Project/LPS/Trajectory/HD/Evidence/EC). Nora C3 FA blocker register = **0**. Therefore default path = **source-locked cognitive backlog** on KEEP/ADAPT assets. **TA gate order:** ADAPT-first → if backlog/evals demonstrate a structural technical primitive is necessary → **Targeted TA Delta** (options/trade-offs) → **Morris decision** → Delivery only under a distinct GO. Morris does **not** normally select a technology first then trigger TA.

---

## 5. Nora C1/C2/C3 normative corpus (summary)

| Artifact | Status on main | Role |
| --- | --- | --- |
| C1 | VALIDATED · INTEGRATED · POST-MERGE (PR #430) | NR-01…26 · CE-01…08 · NCC-BAR-01…14 |
| C2 | VALIDATED · INTEGRATED · POST-MERGE (PR #432/#433) | B0…B9 · Memory A/B/C · CWP · OD-02…08 OPEN |
| C3 | VALIDATED · INTEGRATED · POST-MERGE (PR #434) + truth-sync PR #435 | CIS · PE contracts · C3-PE-BAR **defined ≠ proven** |

Hard invariants retained: Pilote HD · Recommendation ≠ HD · B ≠ C · CKC ≠ authority · NO MORRIS RUNTIME PERSONA · Agents SDK/Sessions/Hosted Web Search **NOT ADOPTED**.

---

## 6. Current runtime inventory (repo-first)

### 6.1 Anchor verification

| # | Anchor | Verdict | Evidence |
| --- | --- | --- | --- |
| 1 | OpenAI Responses adapter | **CONFIRMER** | `app/lib/platform/ai/openaiProvider.ts` · `OpenAIConversationProvider` · `responses.create` |
| 2 | Provider abstraction | **CONFIRMER** | `ConversationProvider` · `resolveConversationProvider` · Fake provider |
| 3 | reasoning.effort configurable | **CONFIRMER** | `OPENAI_REASONING_EFFORT` via `config.ts` · static env · ≠ CWP |
| 4 | F1 bounded history | **CONFIRMER** | `orchestrateTurn.ts` · `MAX_HISTORY_MESSAGES = 20` |
| 5 | F1/F2 conversation process-local | **CONFIRMER** | `F2_PROCESS_LOCAL_NOTICE` · proposal Map · ephemeral chat |
| 6 | Bounded generic tool loop | **CONFIRMER** | `runToolCallingLoop` · `CT_MAX_TOOL_ROUNDS=4` |
| 7 | Grounding ledger | **CONFIRMER** (per-turn) | `GroundingLedger` in `toolLoop.ts` · not durable OA |
| 8 | Git/GitHub read-only tools | **CONFIRMER** | Control Tower tool defs + adapters |
| 9 | Structured intent analysis | **CONFIRMER** | `f2/intentAnalysis.ts` · `analyzeIntent` |
| 10 | CKC → Nora seam | **CONFIRMER** (deterministic) | `f2/ckcCognitiveContext.ts` · disclosure NOT_REAL |
| 11 | Project/LPS/Cycle persistence | **CONFIRMER** | OA Product SQLite path |
| 12 | Proposal ≠ Trajectory/HD | **CONFIRMER** | `proposalStore` vs W2 `decideTrajectory` guards |

### 6.2 Canonical cognitive path

**Canonical:** `/studio` → Project workspace → `ProjectAssistantPanel` / F1 `orchestrateTurn` → F2 `orchestrateF2` (intent→qualify→proposal) → OA durables (LPS/HD/Trajectory/Evidence) → W2/W3 Option/Rec/HD/post-evidence.

**Parallel legacy:** `app/lib/ops1/**` conversation stack — **not** the F1 product path; must not become a second Nora engine (B9).

---

## 7. Asset classification

| Asset | Class | Rationale |
| --- | --- | --- |
| OpenAIConversationProvider / Responses | **KEEP** | Works; abstraction present |
| AI config / reasoning.effort | **ADAPT** | Keep knob; evolve under CWP/OD-02 |
| project-assistant F1 | **KEEP** | Canonical chat orchestration |
| F2 intent / qualify / proposal | **ADAPT** | Extend challenge/CWP/CIS honesty |
| CKC cognitive seam | **ADAPT** | Deterministic seam; LIVE later |
| Project system prompt | **ADAPT** | Policy evolution |
| tool loop + router + grounding | **KEEP** (+ **ADAPT** durability) | Healthy bound; extend provenance |
| EventSink observability | **ADAPT** | Technical ≠ cognitive harness |
| Conversation/history state | **COMPLETE** need as Memory B | Process-local insufficient for CE-03/04 |
| Proposal state | **KEEP** | Distinct from Truth C |
| Project/LPS/Cycle/Trajectory/HD/Evidence | **KEEP** | Project Truth C spine |
| EpistemicItem types | **ADAPT** | Wire contradiction disposition |
| `/studio` PE surfaces | **KEEP** | C3 PE delta sufficient for now |
| OPS1 conversation | **FREEZE** / **RETIRE_LATER** claims | Avoid parallel cognitive engine |
| Agents SDK / Sessions / Hosted Web Search | **TBD option** | **NOT ADOPTED** · no REPLACE proof |
| New vector store / orchestration engine | **TBD** | Default reject parallel unless REPLACE proven |

\* Memory B **FA_REQUIRED = NO** if implemented as non-authoritative continuity respecting existing OA Truth C boundaries (already specified in C2). **TA_REQUIRED = NO currently** under ADAPT-first. **TA becomes REQUIRED** only if qualification/backlog proves existing persistence/runtime cannot honestly satisfy Memory B without debt or a second Truth C — then Targeted TA Delta → options → Morris decision. Sessions/local store/other = **options only**, never pre-selected.

---

## 8. NR-01…26 coverage

| ID | Requirement | Source | Implementation | Evidence | Coverage | Gap | Root cause | Disposition | FA? | Delivery cand.? | Downstream |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR-01 | Intent + uncertainty | C1§6/C2 | F2 analyzeIntent + classes | f2.orchestrate / intentAnalysis | PARTIAL | No CIS Understanding state; live model intent quality NOT_MEASURABLE | POLICY_OR_PROMPT + MODEL_BEHAVIOR | ADAPT F2 intent + PE CIS disclosure | NO | YES | NCC-BAR-01 |
| NR-02 | Challenge ≤3 not questionnaire | C1/C2/C3 | No dedicated challenge controller; PE contracts only | C3 PE boards / PE-BAR-02 | FAIL | Challenge behavior not runtime-enforced | POLICY_OR_PROMPT + PRODUCT_EXPERIENCE | COMPLETE challenge policy in F2 + eval | NO | YES | NCC-BAR-01/02 |
| NR-03 | Qualify cycle/profile/CKC sourced | C1/C2 | F2 qualify + CKC seam | w1CkcSemanticSeam / f2.orchestrate | PARTIAL | Deterministic seam ≠ LIVE qualify quality | TOOLING + SOURCE_ACCESS | ADAPT qualify + CE-01 strategy | NO | YES | NCC-BAR-08 |
| NR-04 | Evidence-first contradiction | C1/C2 | Epistemic Contradiction type; LPS contradictionIds; weak controller | oa/cycle types; no CIS controller | PARTIAL | Type present; evidence-backed STOP controller missing | FUNCTIONAL_BOUNDARY soft / POLICY | COMPLETE contradiction disposition path | NO | YES | NCC-BAR-06 |
| NR-05 | Clarify only if structural | C1/C2 | Intent ambiguous class; no structural filter proof | f2 intent classes | PARTIAL | Ambiguous routing exists; structural vs cosmetic not proven | POLICY_OR_PROMPT | ADAPT clarification policy + eval | NO | YES | NCC-BAR-01 |
| NR-06 | Critical challenge before Critical Rec | C1/C2 | Profile signals in qualify; no High-Assurance challenge gate | F2 qualify path | FAIL | No Critical challenge enforcement before Rec | POLICY_OR_PROMPT + MEMORY_CONTEXT | COMPLETE Critical challenge gate under OD-02 envelope | NO | YES | NCC-BAR-02/08 |
| NR-07 | Epistemic status separation | C1/C2 | EpistemicItemType + W2 Option/Rec/HD separation | w2 decideTrajectory guards | PARTIAL | Domain separation strong; conversational PE levels PARTIAL | EVIDENCE_ONLY + PE | ADAPT disclosure labels across F1 chat | NO | YES | NCC-BAR-09 |
| NR-08 | Propose LPS only | C1/PC | AppendLivingProjectStateVersion propose paths | OA project APIs / PC proofs | PASS | Propose-only authority retained at Product spine | — | KEEP | NO | NO | NCC-BAR-10 |
| NR-09 | Propose Trajectory proposed≠decided | C1/C2 | ProposeTrajectoryVersion + HD promote | w2 propose/decide | PASS | W2 guards Recommendation≠promotion | — | KEEP | NO | NO | NCC-BAR-10 |
| NR-10 | Produce Options | C1/C2 | deriveTrajectoryOptions W2/W3 | w2/w3c tests | PARTIAL | Trajectory options exist; conversational Options-ready CIS missing | PRODUCT_EXPERIENCE + POLICY | ADAPT Option surfacing in assistant UX | NO | YES | NCC-BAR-09 |
| NR-11 | Recommendation + provenance; never auto-HD | C1/C2 | W2/W3 Rec + promotion refuse | w3cPostEvidenceLoop tests | PASS | Anti-authority Rec proven deterministically on W2/W3 | — | KEEP + ADAPT provenance richness | NO | YES | NCC-BAR-09/11 |
| NR-12 | EC prep without authority | C1/PC | EC preparation boundaries Product path | PC W3 proofs | PASS | Product Completion spine | — | KEEP | NO | NO | NCC-BAR-11 |
| NR-13 | STOP precise; no silent success | C1/C2 | W3B SUCCESS|STOP|FAIL terminals; cognitive STOP weak | w3bProductTerminal | PARTIAL | Execution STOP strong; cognitive contradiction STOP weak | POLICY_OR_PROMPT | COMPLETE cognitive STOP mapping | NO | YES | NCC-BAR-06/11 |
| NR-14 | Post-Evidence analysis | C1/C2 | w3cPostEvidenceLoop | w3cPostEvidenceLoop.test | PASS | Deterministic post-evidence analysis path | — | KEEP | NO | NO | NCC-BAR-10 |
| NR-15 | Propose replan after terminal | C1/C2 | W3c replan recommendation; replanInvoked false; decideTrajectory for structural | w3c tests | PARTIAL | Reco exists; auto-replan correctly forbidden; CIS replan UX PARTIAL | POLICY | ADAPT replan recommendation presentation | NO | YES | NCC-BAR-10 |
| NR-16 | Recovery/FAIL honest | C1/C2 | W3 recovery recommendation; PE recovery e2e | w3b + e2e w4c | PARTIAL | Product recovery path; cognitive FAIL honesty LIVE NOT_MEASURABLE | EVIDENCE_ONLY | KEEP Product path; ADAPT cognitive narrative | NO | YES | NCC-BAR-10 |
| NR-17 | Inter-session resume from C (+optional B) | C1/C2 CE-03 | Remount durables; conversation ephemeral; no Memory B | disclosures / proposalStore / orchestrateTurn | FAIL | Process-local chat; no Memory B; honest loss only | MEMORY_CONTEXT | COMPLETE Memory B need (mechanism TBD OD-03); KEEP remount-from-C | NO* | YES | NCC-BAR-07 |
| NR-18 | Absorb method complexity | C1/C2 | CKC seam extracts guidance; UI not raw CKC | ckcCognitiveContext | PARTIAL | Deterministic absorption; LIVE method UX NOT_MEASURABLE | POLICY_OR_PROMPT | ADAPT | NO | YES | NCC-BAR-13 |
| NR-19 | CKC Phase B semantic; CKC≠authority | C1/C2 | ckcCognitiveContext + disclosures IMPLEMENTED_DETERMINISTIC_NOT_REAL | w1CkcSemanticSeam | PARTIAL | Seam present; not REAL cognitive CKC use | SOURCE_ACCESS | ADAPT; REAL later | NO | YES | NCC-BAR-08 |
| NR-20 | Materialization classes; never silent B→C | C1/C2 | HD for structural; no Memory B store to leak | OA decision/materialization | PARTIAL | C path strong; B→C rules untested without B | MEMORY_CONTEXT | COMPLETE with Memory B | NO | YES | NCC-BAR-07 |
| NR-21 | No authority / no execution | C1/PC | Hard guards HD/promotion/EC | multiple PC/Nora tests | PASS | Authority bar retained | — | KEEP | NO | NO | NCC-BAR-11 |
| NR-22 | Closed Evidence→Nora→LPS/Traj/Rec | C1/PC | W3-C loop | w3c tests | PASS | Product closed loop | — | KEEP | NO | NO | NCC-BAR-10 |
| NR-23 | Assist qualification; no fake CKC authority | C1 | Disclosures + seam | w1Ckc | PARTIAL | Honesty disclosures present | POLICY | KEEP disclosures; ADAPT qualify assist | NO | YES | NCC-BAR-08 |
| NR-24 | Catalog genericity; no specialized Nora engine | C1/C2 B9 | Single F2 mechanism; OPS1 parallel legacy exists | F2 vs ops1/** | PARTIAL | Product F2 generic; OPS1 is parallel legacy shell (not F1) | FUNCTIONAL_BOUNDARY soft | KEEP F1/F2; FREEZE/RETIRE_LATER OPS1 cognitive claims | NO | YES | NCC-BAR-13 |
| NR-25 | Source fail → no extrapolation | C1/REAL-A | GroundingLedger + REAL-A hardening | realABlocker01 + toolLoop | PARTIAL | Per-turn grounding strong; cross-turn RA-07 gap OPEN | TOOLING + OBSERVABILITY | ADAPT grounding durability (RA-07) | NO | YES | NCC-BAR-05/12 |
| NR-26 | Escalate only unresolved authority | C1/C2 | HD Pilote paths; escalation precision unevaluated | recordF2Decision / decideTrajectory | PARTIAL | Escalation exists; precision eval missing | OBSERVABILITY_EVAL | ADAPT + eval | NO | YES | NCC-BAR-01/11 |

---

## 9. CE-01…08 coverage

| ID | Need | Implementation | Coverage | Gap | Root cause | Disposition | FA? | Delivery? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CE-01 | Domain-aware tool/source strategy | Git/GitHub tools + router; no External Source Intelligence beyond repos | PARTIAL | Vendor-neutral External Source Intelligence incomplete; Hosted Web Search NOT ADOPTED | TOOLING | ADAPT-first capability; if new source infrastructure primitive proven necessary → Targeted TA Delta before any tech selection; Hosted Web Search = OPTION only | NO | YES |
| CE-02 | Evidence-backed contradiction disposition | Types + LPS ids; weak cognitive controller | PARTIAL | Controller/evals missing | POLICY + soft boundary | COMPLETE disposition path | NO | YES |
| CE-03 | Memory B ≠ C + restart-safe | No Memory B; remount-from-C honesty | FAIL | Memory B absent | MEMORY_CONTEXT | COMPLETE need ADAPT-first (OD-03 OPEN); no second Truth C; TA only if ADAPT proven insufficient | NO* | YES |
| CE-04 | Context/compaction + provenance | History slice 20; no compaction provenance | FAIL | Compaction absent | MEMORY_CONTEXT | COMPLETE compaction contract | NO | YES |
| CE-05 | Cognitive Workload Profile under policy | OPENAI_REASONING_EFFORT static env | FAIL | ≠ demonstrated CWP/strategy classes | POLICY_OR_PROMPT | ADAPT strategy under envelope (OD-02 OPEN) | NO | YES |
| CE-06 | Narrative ↔ evidence coherence | Product terminals + grounding; narrative parity partial | PARTIAL | CE-06 LIVE/narrative audits missing | OBSERVABILITY_EVAL | ADAPT + eval | NO | YES |
| CE-07 | Cognitive observability + versioned eval harness | EventSink technical; no Nora eval harness | FAIL | Harness absent | OBSERVABILITY_EVAL | COMPLETE eval design then harness Delivery | NO | YES — enabler |
| CE-08 | Long-context / multi-doc honest partiality | Tool reads + RA-06 reserve OPEN NON_BLOCKING | PARTIAL | Honest partiality incomplete | SOURCE_ACCESS | ADAPT ranged/partial disclosure | NO | YES |

---

## 10. NCC-BAR-01…14 baseline coverage

| ID | Capacity | Baseline coverage | Notes |
| --- | --- | --- | --- |
| 01 | Intent + adaptive clarification | PARTIAL | F2 intent; challenge/clarify policy incomplete |
| 02 | Cognitive Workload Profile under policy | FAIL | Static reasoning.effort; OD-02 OPEN |
| 03 | Autonomous tool/source multi-tool | PARTIAL | Bounded tool loop + Git/GitHub; domain strategy limited |
| 04 | Source discovery + ranged honesty | PARTIAL | Allowlisted READ; multi-doc RA-06 OPEN |
| 05 | Grounding / zero fabricated claims | PARTIAL | Per-turn GroundingLedger; cross-turn RA-07 OPEN |
| 06 | Evidence-backed contradiction | PARTIAL | Types exist; controller/evals missing |
| 07 | Honest continuity A/B vs Truth C | FAIL | No Memory B; process-local chat |
| 08 | Qualification quality stable | PARTIAL | F2 qualify + CKC seam deterministic ≠ LIVE |
| 09 | Options/Rec quality + epistemic separation | PARTIAL | W2/W3 strong; conversational CIS weak |
| 10 | Trajectory + Evidence + Recovery/Replan | PARTIAL | Product loop PASS-like; cognitive CIS PE unproven |
| 11 | Absolute authority boundaries | PASS | Deterministic guards KEEP |
| 12 | Narrative ↔ evidence coherence | PARTIAL | Needs CE-06/07 instrumentation |
| 13 | Genericity across cycle types | PARTIAL | F2 single mechanism; OPS1 parallel legacy |
| 14 | ChatGPT↔Cursor parity measured | NOT_MEASURABLE | No harness; B0 input only |

**IMPORTANT:** PASS/PARTIAL here = baseline readiness coverage only · **≠** NCC-BAR final satisfied · **≠** Cognitive Completion proven.

---

## 11. C2 B0…B9 coverage

| Block | Definition focus | Coverage | Notes |
| --- | --- | --- | --- |
| B0 | Behavioral Reference Model | NOT_MEASURABLE | No harvest/parity measurement harness |
| B1 | Cognitive Interaction Model | PARTIAL | Flow exists in pieces; not unified CIS controller |
| B2 | Cognitive Workload Profile | FAIL | Static effort; OD-02 OPEN |
| B3 | Memory A/B/C + materialization | PARTIAL | C strong; A informal; B absent |
| B4 | Tool/Source Intelligence | PARTIAL | Repo tools PASS-like; External Source Intelligence incomplete |
| B5 | Context/Compaction | FAIL | Slice≠compaction with provenance |
| B6 | Epistemology/Contradiction | PARTIAL | Ladder types; disposition weak |
| B7 | Narrative↔Evidence | PARTIAL | Needs eval |
| B8 | Eval / Completion Model | FAIL | No versioned cognitive harness |
| B9 | Cognitive Genericity | PARTIAL | F2 generic; avoid OPS1 as second engine |

---

## 12. C3 interaction / C3-PE-BAR baseline coverage

### 12.1 CIS

| CIS | Baseline coverage | Runtime note |
| --- | --- | --- |
| Understanding | PARTIAL | F2 intent / UiState SENDING |
| Clarification needed | PARTIAL | ambiguous class; not CIS-enforced |
| Challenging premise | FAIL | No Critical challenge controller |
| Resolving sources | PARTIAL | tool loop SOURCE_LOOKUP chrome |
| Reading / verifying | PARTIAL | tool rounds |
| Partial context | PARTIAL | disclosures; not systematic |
| Qualification ready | PARTIAL | F2 qualify output |
| Reasoning | PARTIAL | model turns |
| Contradiction candidate | FAIL | No CIS materialization |
| Contradiction evidence-backed | FAIL | No controller |
| STOP | PARTIAL | W3B STOP ≠ cognitive STOP |
| Options ready | PARTIAL | W2 options; chat CIS weak |
| Recommendation ready | PARTIAL | W2/W3 Rec |
| Awaiting Pilote HumanDecision | PASS | HD wait paths |
| Post-decision reasoning | PARTIAL | after HD continue |
| ExecutionContract preparation boundary | PASS | EC prep boundaries |
| Execution progress | PASS | Product execution UX |
| Evidence available | PASS | Evidence surfaces |
| Evidence analysis | PASS | W3-C analysis |
| Recovery recommendation | PARTIAL | W3 recovery |
| Replan recommendation | PARTIAL | reco only; no auto |
| Resume / context restored | PARTIAL | remount C; not B |
| Resume / context incomplete | PARTIAL | honest loss banners |

C3 states = design vocabulary · **≠** required runtime enum. Coverage asks whether behavior is represented/observable.

### 12.2 C3-PE-BAR

| Status | Value |
| --- | --- |
| Defined | YES (C3 §23) |
| Proven | **NO** |
| Baseline | **NOT_MEASURABLE** as final bar · design/Penpot semantic PASS is historical PE evidence only |
| Downstream | Requires eval scenarios + PE UAT on `/studio` · ≠ this cycle |

---

## 13. Memory / context qualification

| Tier | Runtime reality | Gap |
| --- | --- | --- |
| **A** turn scratch | Informal (tool items + GroundingLedger) | Name/contract incomplete · non-blocking if B/C clear |
| **B** cognitive conversation memory | **ABSENT** · process-local messages/proposals only | CE-03/04 · NCC-BAR-07 · NR-17 |
| **C** Project Truth | **PRESENT** (LPS/HD/Trajectory/Evidence/Git) | KEEP |
| Compaction | History truncate 20 ≠ provenance-preserving compaction | CE-04 |
| Restart | Remount from C + honest chat loss | Correct honesty · insufficient continuity |
| Invalidation | Truth C updates exist; B invalidation N/A without B | — |

**Central answer:** Missing piece for honest Memory B/compaction is a **non-Truth continuity layer** with invalidation + provenance — **without** creating a second Project Truth. Existing OA boundaries already define C. **ADAPT-first** on existing runtime/persistence. If ADAPT cannot close the gap honestly, **Targeted TA Delta** analyzes options (Sessions / local store / remount-only+ / other) — OD-03 remains OPEN · **no technology selected here**.

---

## 14. Cognitive orchestration qualification

| Element | Class | Note |
| --- | --- | --- |
| Provider / Responses | KEEP | Confirmed |
| Prompting / structured outputs | ADAPT | F2 schemas exist |
| Cognitive strategy / CWP | COMPLETE need | Static effort ≠ strategy |
| Tool loop ceilings 4×4 | KEEP (healthy constraint) unless eval proves insufficient | Not automatic gap |
| Tool/source selection | ADAPT | Repo-centric today |
| Multi-tool | KEEP/ADAPT | Loop supports multi-call/round |
| Grounding | KEEP + ADAPT durability | RA-07 |
| Partial reads / source failure | ADAPT | Honesty incomplete |
| Contradiction | COMPLETE controller | Types exist |
| External knowledge | ADAPT capability first; Hosted Web Search = option only · TA if new source primitive proven necessary | OD-05 DEFER · no tech selection |

---

## 15. Tool / source / grounding qualification

- Allowlisted Git local + GitHub READ: **KEEP**
- Deny-by-default router: **KEEP**
- Per-turn grounding injection: **KEEP**
- Cross-turn provenance ledger: **ADAPT** (RA-07 OPEN)
- External Source Intelligence MUST (CE-01): **incomplete** · vendor-neutral capability · KEEP/ADAPT first · **≠** Hosted Web Search adoption · if new source infrastructure proven necessary → Targeted TA Delta before selection

---

## 16. Cognitive evaluability baseline

| Measurable now (deterministic) | Not measurable without design/harness | Downstream bounded REAL |
| --- | --- | --- |
| Authority / HD / promotion guards | CWP strategy quality | Live model intent/challenge quality |
| Tool loop bounds + grounding rules | CIS observability completeness | Narrative↔Evidence LIVE parity |
| F2 intent schema fail-closed | NCC-BAR-14 ChatGPT parity | Multi-doc LIVE completeness |
| CKC package load seam | Memory B semantic continuity | Critical challenge LIVE |
| W2/W3 Option/Rec/STOP/FAIL product paths | Full NCC-BAR suite | REAL-B programme proofs |

**Do not build harness in this cycle.** CE-07 = candidate enabler slice inside recommended backlog.

---

## 17. Fake / Real qualification

| Capability area | Class |
| --- | --- |
| Provider abstraction / fake provider tests | DETERMINISTIC_PROVEN |
| F2 intent/qualify/proposal fail-closed | DETERMINISTIC_PROVEN |
| CKC seam load/attribution | DETERMINISTIC_PROVEN (≠ REAL) |
| W2/W3 authority & post-evidence | DETERMINISTIC_PROVEN |
| REAL-A source grounding integrity | REAL_BOUNDARY_PROVEN (prior programme) |
| Memory B / CWP / CIS / NCC final | NOT_PROVEN |
| End-to-end Cognitive Completion | NOT_PROVEN |
| Live OpenAI cognitive behavior (this cycle) | NOT executed · NOT_MEASURABLE here |

fake ≠ live · deterministic ≠ REAL · REAL-A ≠ Cognitive Completion · REAL-B candidate ≠ authorized · baseline coverage ≠ final NCC PASS.

---

## 18. Gap & reserve register

| ID | Statement | Disposition | Proof |
| --- | --- | --- | --- |
| **NCC-R01** | Conversation F1/F2 process-local | **CONFIRMED** | `F2_PROCESS_LOCAL_NOTICE` · ephemeral history |
| **NCC-R02** | Bounded history / compaction to qualify | **CONFIRMED** (split) | Slice=20 · compaction absent → CE-04 |
| **NCC-R03** | reasoning.effort static ≠ CWP | **CONFIRMED** | `OPENAI_REASONING_EFFORT` env |
| **NCC-R04** | Tool loop bound 4×4 | **REFORMULATED** | Default **KEEP healthy constraint** · gap only if eval proves insufficient |
| **NCC-R05** | No versioned cognitive eval harness | **CONFIRMED** | EventSink ≠ harness |
| **NCC-R06** | Agents SDK / Sessions / Hosted Web Search candidates only | **CONFIRMED** · OPEN | Not installed/adopted · REPLACE not demonstrated · if runner/toolLoop later proven structurally insufficient → Targeted TA Delta → options → Morris |
| **NCC-R07** | C3-PE-BAR defined ≠ proven | **CONFIRMED** | C3 exit criteria |
| **NCC-R08** | Roadmap Nora lag vs C2/C3 on main | **CONFIRMED** · **OPEN** · **REQUIRED LIFECYCLE TRUTH-SYNC BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** | Roadmap still “≠ C2 AUTHORIZED” while C2/C3 integrated · living lag OK during C4 · must not remain open when Morris authorizes Nora next capability · ≠ Roadmap edited now · ≠ replaces REAL-B |
| **NCC-R09** | Contradiction type without cognitive STOP controller | **NEW (SPLIT from NR-04/13)** | Epistemic types present; controller missing |
| **NCC-R10** | OPS1 parallel conversation stack risk | **NEW** | `app/lib/ops1/**` · FREEZE claims vs F1 |

---

## 19. Architecture blocker register

| Gap | Cause class | FA_REQUIRED | TA_REQUIRED | Notes |
| --- | --- | --- | --- | --- |
| Memory B continuity | MEMORY_CONTEXT | **NO** | **NO** (currently) | Boundary already in C2 (B≠C). ADAPT-first. TA **becomes REQUIRED** only if ADAPT of existing persistence/runtime cannot satisfy Memory B without debt/second Truth C → Targeted TA Delta → options → Morris |
| Compaction provenance | MEMORY_CONTEXT | **NO** | **NO** | Specifiable in backlog contracts |
| CWP / strategy | POLICY_OR_PROMPT | **NO** | **NO** | OD-02 OPEN · policy/eval first |
| Eval harness | OBSERVABILITY_EVAL | **NO** | **NO** | Design+Delivery enabler |
| Contradiction STOP | POLICY + soft boundary | **NO** | **NO** | Types exist; COMPLETE wiring |
| External sources | TOOLING | **NO** | **NO** (currently) | Vendor-neutral CE-01 · ADAPT-first · Hosted Web Search = OPTION · TA if new source infrastructure primitive proven necessary (OD-05) |
| Agents SDK / runner | TECHNICAL_ARCHITECTURE candidate | **NO** | **NO** (currently) | REPLACE not demonstrated (OD-04) · TA if evals prove existing toolLoop/runner structurally insufficient → TA Delta → options (may include Agents SDK) → Morris |
| CIS as enum | PRODUCT_EXPERIENCE | **NO** | **NO** | C3: design vocabulary ≠ must schema |
| Authority/HD | — | **NO** | **NO** | Already PASS |
| Parallel PE architecture | — | **NO** | **NO** | C3 KEEP EA |

**No demonstrated Functional Architecture delta requirement.**
**No mandatory Technical Architecture delta currently demonstrated** under ADAPT-first / KEEP-ADAPT default.

**TA causality (normative for this document):** ADAPT-first → demonstrated need for a structural technical primitive → **Targeted TA Delta** (options / trade-offs / impact / migration / exit / anti-parallel) → **Morris decision** → revised backlog/readiness if needed → Delivery only under a **distinct** GO. Technology selection by Cursor is forbidden; Morris does not normally pick a primitive then “trigger TA.”

---

## 20. Path-critical / no-parallel-architecture review

1. **Canonical Nora path:** `/studio` → F1/F2 project-assistant → OA Truth C → W2/W3.
2. **Components already serving it:** Responses provider, tool loop+grounding, F2 intent/qualify, CKC seam, OA durables, W2/W3 Rec/HD, `/studio` PE.
3. **Second path?** OPS1 legacy conversation — risk if treated as Nora runtime; classify FREEZE/RETIRE_LATER for cognitive claims.
4. **New engine necessary?** **NO** by default — REPLACE not demonstrated.
5. **Reuse Product Completion?** **YES** — LPS/HD/Trajectory/Evidence/EC spine.
6. **Overlap REAL-B?** **YES thematically** (grounding, contradiction, Critical rigor, narrative parity).
7. **Avoid double work:** Nora backlog implements/designs measurable cognitive behaviors on Studio path; REAL-B remains published LIVE proof programme — do not silently replace REAL-B; share fixtures/scenarios where possible; no duplicate “second cognitive programme.”
8. **Critical path capabilities:** (i) eval harness design, (ii) Memory B/compaction contracts on ADAPT path, (iii) CWP-under-envelope, (iv) contradiction/STOP honesty, (v) grounding durability.
9. **Non-blocking debts:** RA-06/07, Penpot hi-fi (D1), C3-PE-BAR full proof, OD-06 voice, OD-08 naming, FinOps/T7 freeze as construction state.
10. **Temporary exits:** process-local chat → Memory B target; static effort → CWP target; EventSink-only → harness target; Roadmap Nora lag (NCC-R08) → **REQUIRED lifecycle truth-sync before or with next-capability authorization** (separate DOC cycle unless Morris groups).

---

## 21. REAL-B overlap / non-duplication

| Track | Role | Status |
| --- | --- | --- |
| REAL-B | Published convergence next · LIVE cognitive reasoning qualification | QUALIFIED CANDIDATE · **NOT AUTHORIZED** · NOT STARTED |
| Nora Cognitive Completion | Complementary DOC→readiness→(future) implementation quality vs C1–C3 | C1–C3 closed · this C4 readiness candidate |
| Shared themes | Grounding, contradiction, Critical profile, narrative≠tool | Coordinate · do not merge authorities |
| Rule | Nora ≠ substitute REAL-B · REAL-B ≠ auto-implement Nora CE | Separate Morris GOs |

---

## 22. Candidate downstream slices (groups only — ≠ backlog)

1. **Eval design & versioned cognitive harness (CE-07)** — scenarios for NCC-BAR-01…14 / CIS observables
2. **Memory B + compaction contracts (CE-03/04, NR-17)** — ADAPT-first · no Truth C fork
3. **Cognitive Workload strategy under SFIA envelope (CE-05, OD-02)** — policy + telemetry
4. **Contradiction evidence disposition + cognitive STOP (NR-04/13, NCC-06)**
5. **Grounding durability / narrative coherence (NR-25, CE-06, RA-07)**
6. **Critical challenge + clarification burden (NR-02/06)**
7. **External Source Intelligence capability ADAPT** — search tech remains option
8. **Documentary (governance):** Roadmap Nora lifecycle truth-sync (NCC-R08) — **REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** · separate DOC cycle unless Morris GO groups · ≠ this cycle · ≠ replaces REAL-B

---

## 23. Next-capability recommendation

### Primary recommendation

**A — SOURCE-LOCKED COGNITIVE BACKLOG**

Justification:
- No FA blocker demonstrated (C3 register 0; OA boundaries exist)
- **No mandatory TA delta currently demonstrated** (ADAPT-first / REPLACE not demonstrated)
- Gaps are predominantly COMPLETE/ADAPT on existing F1/F2/OA/`/studio` spine
- Eval harness should be **first epic group** inside that backlog (enabler), not a reason to skip backlog qualification
- PE sufficient for implementation contracts (C3 closed); no PE delta required to unblock
- **Roadmap Nora lifecycle truth-sync = REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** (≠ backlog itself; ≠ this cycle)

### Explicitly not selected as primary

| Option | Why not primary |
| --- | --- |
| B Targeted TA | **Conditional branch only:** if ADAPT-first later proves insufficient and a structural technical primitive is demonstrated necessary → Targeted TA Delta (options/trade-offs) → Morris decision — **not** “Morris selects Sessions/Agents/store then TA” |
| C Functional Architecture | No genuine ownership/boundary blocker beyond already-specified B≠C |
| D Product Experience delta | C3 PE contracts exist; PE-BAR proof is eval/UAT downstream |
| E Eval-only enabler cycle | Attractive but eval can be Slice-0 of backlog without blocking story locking from C1–C3 |

### Decision class

**RECOMMENDATION ONLY — MORRIS DECISION REQUIRED.**
**NEXT CAPABILITY = NOT AUTHORIZED.**

### Recommended conceptual trajectory (≠ automatic authorization)

Nora C1 CLOSED → C2 CLOSED → C3 CLOSED → C4 QUALIFIED → C4 ChatGPT review corrections applied → **Morris C4 content validation CONSUMED (PASS)** → C4 Git integration (commit/push/Draft PR · ≠ merge) → ChatGPT PR review → Morris merge gate → post-merge → **Roadmap Nora lifecycle truth-sync REQUIRED before or with next-capability authorization** → Morris next-capability decision → if authorized: Source-Locked Cognitive Backlog (Slice-0 eval harness → Memory B/compaction → CWP → contradiction/STOP → grounding/narrative → Critical challenge → External Source Intelligence) → readiness per macro-wave → distinct Morris Delivery GO → Delivery + proof → Pre-QA Cognitive Conformance → Integrated Cognitive Completion QA → Morris final closure.

Architecture remains conditional: FA only on demonstrated boundary blocker; TA only on demonstrated structural technical primitive need → TA Delta → Morris → Delivery separately.

---

## 24. Morris gates

| Gate | Status |
| --- | --- |
| Validate C4 readiness content | **CONSUMED — PASS** · `GO MORRIS — VALIDATE NORA COGNITIVE COMPLETION C4 CONTENT — … — PASS — NO GIT INTEGRATION — NO NEXT CAPABILITY AUTHORIZATION` |
| Git integration (commit + push + Draft PR + CI + handoff) | **CONSUMED** · **NO MERGE** · **NO ROADMAP SYNC** · **NO NEXT CAPABILITY AUTHORIZATION** |
| Decide next capability (A recommended) | **REQUIRED** · **NOT AUTHORIZED** now |
| Roadmap Nora lifecycle truth-sync | **REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** · separate DOC cycle unless Morris groups · ≠ this cycle · ≠ replaces REAL-B |
| Consume OD-02…08 | **NOT** in this cycle · OPEN · OD ≠ technology pre-selection · if structural tech primitive needed, Targeted TA precedes selection |
| Authorize Delivery | **NOT** |
| Authorize REAL-B execution | **NOT** (separate) |
| Adopt Agents SDK / Sessions / Hosted Web Search / new persistence | **NOT** · options only after TA when TA is required |
| runtime v3 adoption | **NOT** |

---

## 25. Debt / exit trajectory

| Debt | Target | Exit |
| --- | --- | --- |
| Process-local chat (R01) | Memory B continuity | CE-03/04 + NR-17 suites |
| Static effort (R03) | CWP under envelope | OD-02 decision + evals |
| No harness (R05) | Versioned cognitive harness | CE-07 Delivery epic |
| PE-BAR unproven (R07) | `/studio` PE proof | Eval + UAT |
| Roadmap lag (R08) | Nora lifecycle truth aligned to Git (C1–C3 closed · C4 qualified · next pending) | **REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION** · dedicated DOC cycle unless Morris groups |
| RA-06/07 | Completeness + cross-turn provenance | REAL/Nora shared remediation |
| OPS1 parallel risk (R10) | Single canonical path | FREEZE claims / retire later |

---

## 26. Exit proof (this cycle)

| Criterion | Status |
| --- | --- |
| Local Git Truth on exact origin/main | YES · `5c08e741ae45c402f46c5e3f9021eb09fcada3b2` |
| C1/C2/C3 read · unmodified | YES |
| Runtime anchors confirmed/corrected | YES (§6) |
| Coverage matrices NR/CE/NCC/B/CIS/PE-BAR | YES |
| Gap + architecture blocker registers | YES |
| One primary next-capability recommendation | YES · A |
| No runtime/code/Roadmap mutation | YES |
| No project Git integration | YES |
| Review Pack FULL + Handoff | (cycle execution) |

---

## 27. Final verdict (cycle)

**NORA COGNITIVE RUNTIME GAP & IMPLEMENTATION READINESS — QUALIFIED — NO STRUCTURAL ARCHITECTURE BLOCKER — SOURCE-LOCKED COGNITIVE BACKLOG RECOMMENDED — MORRIS DECISION REQUIRED**

Underlying truth:
- Nora C1+C2+C3 = CONTENT VALIDATED · INTEGRATED ON MAIN · POST-MERGE VERIFIED
- **C4 CONTENT VALIDATED BY MORRIS** · Git integration in progress · ≠ INTEGRATED ON MAIN · ≠ MERGED · ≠ POST-MERGE VERIFIED
- Runtime spine = KEEP/ADAPT capable
- Cognitive Completion = **NOT PROVEN**
- FA_REQUIRED = **NO** · **NO MANDATORY TA DELTA CURRENTLY DEMONSTRATED**
- SOURCE-LOCKED COGNITIVE BACKLOG remains the recommended next capability
- Next capability = **NOT AUTHORIZED** (recommendation only)
- **Roadmap Nora lifecycle truth-sync = REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION**
- TA branch remains conditional on demonstrated structural technical primitive need (ADAPT-first first)

---

## 28. Anti-claims

- C4 **CONTENT VALIDATED BY MORRIS**
- ≠ GIT INTEGRATED ON MAIN
- ≠ MERGED
- ≠ POST-MERGE VERIFIED
- ≠ Nora Cognitive Completion
- ≠ NCC-BAR final PASS
- ≠ C3-PE-BAR final PASS
- ≠ Product Completion reopen / C6 reopen
- ≠ FA automatically required
- ≠ TA automatically required
- ≠ Backlog validated / Delivery authorized
- ≠ Agents SDK / Sessions / Hosted Web Search / new persistence adopted
- ≠ REAL-B authorized / REAL proof / READY FOR REAL
- ≠ runtime v3 ADOPTED / FinOps/T7 unfreeze
- ≠ NEXT CAPABILITY AUTHORIZED
- ≠ Roadmap mutated in this cycle
- ≠ MORRIS RUNTIME PERSONA

---

*Fin du C4-VALIDATED — CONTENT VALIDATED BY MORRIS — GIT INTEGRATION IN PROGRESS — ≠ INTEGRATED ON MAIN — ≠ MERGED — ≠ POST-MERGE VERIFIED — SOURCE-LOCKED COGNITIVE BACKLOG RECOMMENDED — NEXT CAPABILITY NOT AUTHORIZED — ROADMAP NORA LIFECYCLE TRUTH-SYNC REQUIRED BEFORE OR WITH NEXT-CAPABILITY AUTHORIZATION — NO MANDATORY TA CURRENTLY DEMONSTRATED — NO ARCHITECTURE SELECTED — NO DELIVERY — NO REAL — NO RUNTIME V3 ADOPTION — OD-02…08 OPEN — NO MORRIS RUNTIME PERSONA.*

```

---

## 10. Verdict

**NORA COGNITIVE COMPLETION C4 — CONTENT VALIDATED BY MORRIS — GIT INTEGRATION COMMITTED + PUSHED — DRAFT PR OPEN — PR READY FOR CHATGPT REVIEW — NO MERGE — ROADMAP NORA LIFECYCLE TRUTH-SYNC STILL REQUIRED — NO NEXT CAPABILITY AUTHORIZED**

**STOP FOR CHATGPT PR REVIEW.**
