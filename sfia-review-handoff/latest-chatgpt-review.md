# ChatGPT Critical Evidence Review — Morris-as-Pilote Product Dogfood #1 CLOSURE

## 1. UTC timestamp

2026-09-06T12:20:07Z

## 2. Cycle / typology / profile

- Cycle 9 — QA / validation
- Typologie: EVOL
- Profil: CRITICAL
- Dogfood ID: `morris-pilote-dogfood-01`
- Original cycle ID: `SFIA-STUDIO-MORRIS-AS-PILOTE-PRODUCT-DOGFOOD-01`
- Closure cycle ID: `SFIA-STUDIO-MORRIS-AS-PILOTE-PRODUCT-DOGFOOD-01-CLOSURE`

## 3. Original Dogfood #1 GO

Morris-as-Pilote Product Dogfood #1 — end-to-end Studio usage — **observation/evidence only** — **no automatic product fix**. Determine whether Morris, acting as a normal runtime Pilote, can use SFIA Studio naturally to conduct an end-to-end project flow without adapting language to an internal scripted state machine. Max ≤12 manual Pilote turns; Cursor must not impersonate Pilote.

## 4. Closure GO consumed

`SFIA CURSOR EXECUTION CONTRACT` — **CLOSE MORRIS-AS-PILOTE PRODUCT DOGFOOD #1 FROM OBSERVED BLOCKING CONVERSATIONAL GAP**

Authorizes: STOP Dogfood #1 → preserve evidence → classify blocker → FULL Review Pack → publish canonical Review Handoff → return for ChatGPT Product Dogfood Evidence Review.

Does **NOT** authorize: product correction; code/test/doc mutation; DB patch; alternate runtime; fixture; model/reasoning campaign; Stage B; architecture decision; next capability implementation; product commit/push/PR/merge.

## 5. Stage A closure input (carry-forward — NOT reopened)

- Stage A = **COMPLETE / CLOSED AT EVIDENCE SCOPE**
- Outcome = **C ACCEPTED**
- Stage B = **NOT JUSTIFIED / NOT AUTHORIZED**
- Accounting reserve `R-GMR-AGGREGATE-COUNTER-SEMANTICS-01` = **RETAINED / UNCHANGED**
- Interpretation: Stage A showed cognitive/provider paths can perform tested workloads; Dogfood #1 exposes a **different** class — product-level conversational orchestration and continuity.

## 6. Git truth

| Field | Value |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| Dogfood worktree | `/Users/morris/Projects/sfia-workspace-studio-dogfood-01` |
| Branch | `run/sfia-studio-product-dogfood-01` |
| HEAD | `586480af178df5dd2f7177cae8f6b1ac18fe4acc` |
| origin/main | `586480af178df5dd2f7177cae8f6b1ac18fe4acc` |
| Tracked mutation | **ZERO** (untracked only: `.tmp-sfia-dogfood/**`, `.sfia-exec/`, `node_modules` symlink) |
| Baseline check | PASS — no DOGFOOD CLOSURE BASELINE DRIFT |

## 7. Current Review Handoff input

Expected tip at closure start: `16be920059a66e62138032b8222631677d05ef03`
Verified locally: `origin/sfia/review-handoff` = `16be920059a66e62138032b8222631677d05ef03`
(Handoff worktree: `/Users/morris/Projects/sfia-workspace/sfia-review-handoff`)

## 8. Sources read

Evidence root:

- `projects/sfia-studio/app/.tmp-sfia-dogfood/morris-pilote-dogfood-01/session-manifest.json`
- `…/runtime-preflight.md`
- `…/pilot-observations.md`
- `…/product-state-observations.md`
- `…/continuity-observations.md`
- `…/dogfood-summary.md`

Technical (read-only on current main tip):

- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/mw5ChallengeSessionStore.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts`
- `scripts/sfia/publish-review-handoff.sh`
- `scripts/sfia/README.md`

## 9. Convergence qualification

Dogfood observation cycle only. Build Doctrine challenge confirmed: user end-to-end capability observation; no architecture parallel; no fixture product path; no automatic correction; next implementation undecided. Runtime v3 **NON ADOPTED**. Production-ready **NOT CLAIMED**.

## 10. Runtime preflight

- Port `3020`, `npm run dev`, Better Auth GitHub + allowlist PRESENT
- `OPENAI_API_KEY` PRESENT; product SQLite under worktree `.sfia-exec/product`
- `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1` at process launch
- Entry ENVIRONMENT_BLOCKER (OAuth `redirect_uri` localhost vs 127.0.0.1) resolved via **runtime env only** (no product mutation); login succeeded on `http://localhost:3020`
- Post-login default `/synthese` (legacy) — MAJOR_PRODUCT_GAP onboarding; product path reached via `/studio`

## 11. Project identity

- Title: **Suivi de contrat**
- Initial description: "J'aimerais créer une application pour suivre des contrats"
- Surface: `/studio/projects/...` with Nora / Pilote chat

## 12. Exact observed interaction

**PILOTE TURN 1:**
`tu peux m'aider à créer un projet de suivi de contrat ?`

**NORA RESPONSE 1:**
`[MW5 CLARIFY] [Clarification requise] Clarification structurante requise. 1. Précisez l'objectif, le périmètre ou l'acte demandé uniquement s'ils changent l'analyse, le scope, l'autorité, la recommandation, la preuve ou la trajectoire. Clarification structurante uniquement — pas de questionnaire. AUCUNE EXÉCUTION. Nora n'émet pas de HumanDecision, GO, Confirmation, décision Morris ou acte Pilote.`

**PILOTE TURN 2:**
`l'application doit permettre de suivre les contrats avec les clients B2B de l'entreprise MC Consulting IT`

**NORA RESPONSE 2:**
Same effective MW5 CLARIFY / same generic clarification.

Interaction count: **2 / 12** — stopped by closure GO.

## 13. SYSTEM_OBSERVATION vs PILOT_OBSERVATION

### PILOT_OBSERVATION (Morris)

- Studio feels too restrictive and mechanical.
- Expects free natural conversation, progressive multi-turn understanding, ordinary language, context accumulation; governance strict only at decision/authority/execution boundaries.
- Does **not** want to discover magic wording to pass a state machine.
- Return-to-ChatGPT/Cursor pressure: **BLOCKING**.

### SYSTEM_OBSERVATION (Cursor / runtime / Git)

- Login ENVIRONMENT_BLOCKER then success; onboarding lands on legacy `/synthese`; product path `/studio` reachable.
- Nora responds with deterministic MW5 CLARIFY template on both turns.
- Supported Git findings below; no product mutation.

## 14. Technical evidence from Git (SUPPORTED FINDINGS)

1. **`orchestrateF2.ts`** — path C: if `intentClass === "ambiguous" || !parseOk`, calls `evaluateF2Mw5` and returns `mw5.text` (no Cycle/LPS mutation). `analyzeIntent` invoked with `userContent`, Project/Truth C summary, and MW5 **challenge** context only.

2. **`intentAnalysis.ts`** — provider messages = system + single user blob (`Contexte projet` + challenge block + `Demande courante`). General conversational history is **not** passed as multi-turn provider messages.

3. **`criticalChallengeClarification.ts`** — MW5 dispositions CONTINUE / CHALLENGE / CLARIFY / ESCALATE; `structural_ambiguity` → `DEFAULT_STRUCTURAL_CLARIFICATIONS` ("Précisez l'objectif…"); `formatMw5AssistantText` emits `[MW5 CLARIFY]` template; `contextResolvesUncertainty` requires test marker `__MW5_CONTEXT_RESOLVED__`.

4. **`mw5ChallengeSessionStore.ts`** — process-local store for issued MW5 challenges. In `evaluateF2Mw5`, `rememberMw5IssuedChallenge` runs **only** when `disposition === "CHALLENGE"`. No equivalent remember for CLARIFY in that function.

## 15. Root-cause hypothesis (explicit uncertainty)

**OBSERVATION:** Morris supplied a natural business clarification and received the same generic clarification.

**SUPPORTED TECHNICAL FINDING:** current orchestration exposes deterministic MW5 CLARIFY policy and limited server-side episode context (challenge-oriented; not general multi-turn semantic history into intent analysis).

**HYPOTHESIS (not fact):** the model may be cognitively capable, but Studio orchestration constrains cognition early via strict intent/MW5 transitions and does not preserve enough conversational semantic state for a natural CLARIFY → user answer → continuation flow.

**NOT claimed as fact:** OpenAI model is bad; MW5 must be deleted; state machine is the sole root cause; the fix is to pass history / Responses conversation state / Agents SDK memory; any architecture selection.

## 16. Path-reach matrix

| Element | Status |
|---|---|
| Project create/resume | REACHED |
| Nora | REACHED |
| Natural intent conversation | REACHED BUT BLOCKED BY REPEATED CLARIFY |
| Clarification/challenge | REACHED |
| Useful clarification consumption | NOT PROVEN / BLOCKED |
| LPS | record: NOT PROVEN via Pilote product flow this session |
| ProjectTrajectory | NOT REACHED |
| Recommendation | NOT REACHED |
| HumanDecision | NOT REACHED |
| ExecutionContract | NOT REACHED |
| Confirmation / effective authority | NOT REACHED / N/A |
| Execution | NOT REACHED |
| Evidence (product user flow) | NOT REACHED |
| ReviewBundle | NOT REACHED |
| Restart | NOT REQUIRED FOR CLOSURE |
| Semantic resume | NOT PROVEN |
| Return-to-ChatGPT/Cursor pressure | **BLOCKING** |

## 17. Blocker classification

- Primary: **BLOCKING_PRODUCT_GAP**
- Category: **COGNITIVE_GAP** + **CONTINUITY_GAP**
- Product framing: **NATURAL CONVERSATIONAL CONTINUITY / SEMANTIC ORCHESTRATION**

Secondary (non-blocking for stop decision, still recorded): onboarding default `/synthese` = MAJOR_PRODUCT_GAP; OAuth host mismatch = ENVIRONMENT_BLOCKER (resolved at runtime env).

## 18. Why no further user turns were attempted

Morris closure GO: STOP after observed blocking gap; do not continue 12-turn allowance; observed behavior is the Evidence. Searching for phrasings would contaminate the dogfood objective (natural Pilote language).

## 19. Why no workaround was attempted

Hard rule: ZERO product modification; ZERO alternate path; ZERO magic wording coaching. Workarounds would falsify the usability question under test.

## 20. Return-to-ChatGPT/Cursor pressure

**BLOCKING** — Pilote already compelled to think about internal wording/state-machine requirements instead of normal project conversation.

## 21. Product Dogfood verdict

**FAIL**

## 22. Precise meaning and limits of FAIL

Means: Dogfood #1 tested user path = **BLOCKED AT NATURAL CONVERSATIONAL CONTINUITY**.

Does **not** mean: Studio architecture invalid; Nora cognition invalid; Stage A invalid; all paths broken; rewrite required; runtime v3 permanently rejected.

## 23. Stage A remains CLOSED

Stage A COMPLETE/CLOSED Outcome C ACCEPTED — **not reopened** by this dogfood finding.

## 24. Stage B remains NOT JUSTIFIED / NOT AUTHORIZED

Unchanged.

## 25. Product mutation proof

**ZERO** tracked mutation on dogfood branch/worktree at closure. No product commit / push / PR. Only untracked Evidence / local exec / `node_modules` symlink.

## 26. Accounting reserve

`R-GMR-AGGREGATE-COUNTER-SEMANTICS-01` **RETAINED / UNCHANGED**.

## 27. Proven strengths (directly supported)

- Project can be opened on Product Completion path (`/studio/...`).
- Nora runtime responds on the project assistant surface.
- Authority anti-synthesis disclosure remains intact in MW5 CLARIFY text (no synthesized HumanDecision / GO / Confirmation / Morris decision / Pilote act).

## 28. Top product gap

**NATURAL CONVERSATIONAL & SEMANTIC ORCHESTRATION**

Desired capability (recommendation framing): Pilote communicates freely and incrementally; Nora understands prior-turn context; accumulates semantic context; resolves prior clarification from natural answers; clarifies only when material; challenges when useful; reasons/qualifies in background; formal HD/EC/authority only at appropriate boundaries.

Candidate principle: **Conversation should be flexible. Decision / authority / execution should be strict.**

## 29. Candidate next capability (recommendation only)

**NORA NATURAL CONVERSATION & SEMANTIC ORCHESTRATION**

Likely v3 links for a future design cycle (not started here): V3-F05, V3-F02, V3-F06, V3-F04 while preserving V3-F11/F12 authority/execution governance.

## 30. R22 OpenAI-native-first requirement

Any subsequent design cycle **MUST** begin with an OpenAI Capability Fit Check covering multi-turn conversational state, Agents SDK Sessions, model context, compaction, Responses/Agents continuity, structured outputs only where appropriate, tool/authority boundaries. Objective: not build a second generic conversational engine unless OpenAI-native capabilities are insufficient. **Not performed in this closure cycle.**

## 31. Anti-claims

- Do not claim OpenAI model is bad.
- Do not claim MW5 architecture must be deleted.
- Do not claim state machine is the sole proven root cause.
- Do not claim the fix is "pass history" / Responses conversation / Agents SDK memory.
- Do not claim Stage A reopened or Stage B justified.
- Do not claim production-ready or runtime v3 adopted.
- Do not claim LPS/ProjectTrajectory/HD/EC reached without evidence.

## 32. Recommendation ≠ decision

Top gap, next capability, and conversational-flexibility principle are **recommendations derived from dogfood Evidence**. They are **NOT** Morris architecture decisions.

## 33. Next Morris gate

**ChatGPT Product Dogfood Evidence Review** → Morris product-learning disposition.

**DO NOT** automatically start the next design or delivery cycle.

## 34. Review Handoff publication proof

Published via canonical `scripts/sfia/publish-review-handoff.sh` only.

| Field | Value |
|---|---|
| Parent tip (pre-publish) | `16be920059a66e62138032b8222631677d05ef03` |
| Source | absolute path to this file under dogfood worktree `.tmp-sfia-review/chatgpt-review.md` |
| Canonical branch | `sfia/review-handoff` |
| Canonical target | `sfia-review-handoff/latest-chatgpt-review.md` |
| Suggested commit message | `docs(review-handoff): close Morris-as-Pilote dogfood 01` |
| NEW_REVIEW_HANDOFF_TIP | _(filled after publisher)_ |
| Canonical blob SHA | _(filled after publisher)_ |
| Publisher verdict | _(filled after publisher)_ |

---

## Expected verdict line

READY FOR CHATGPT PRODUCT DOGFOOD EVIDENCE REVIEW — MORRIS-AS-PILOTE DOGFOOD #1 CLOSED — FAIL AT TESTED NATURAL CONVERSATIONAL USER PATH — BLOCKING NATURAL CONVERSATIONAL CONTINUITY / SEMANTIC ORCHESTRATION GAP OBSERVED — NO WORKAROUND ATTEMPTED — ZERO PRODUCT MUTATION — STAGE A REMAINS CLOSED — STAGE B NOT JUSTIFIED / NOT AUTHORIZED — NEXT CAPABILITY RECOMMENDATION ONLY — REVIEW HANDOFF REMOTE VERIFIED.
