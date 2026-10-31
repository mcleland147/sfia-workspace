# Review Pack FULL — NAP-SINGLE-RESPONSE-A-ARCH-01

**Cycle:** NAP-SINGLE-RESPONSE-A-ARCH-01
**Chantier:** AKG-M5 — Product Transformation
**Milestone:** L3-S2 — Nora/Pilote continuity
**Capacity:** V3-F05 (primary); V3-F02 / V3-F06 / V3-F14 (associated)
**SFIA external cycle:** 6 — Architecture technique
**Profile:** CRITICAL
**Typology:** EVOL / ARCHITECTURE QUALIFICATION
**Mode:** READ-ONLY — no Product implementation
**Generated (UTC):** 2026-10-31T03:55:00Z
**Authoring agent:** Cursor (Composer) — architecture qualification only

---

## 0. Instruction ChatGPT (mandatory before next review)

Before the next Critical Review, ChatGPT **must** re-read:

- Branch: `sfia/review-handoff`
- File: `sfia-review-handoff/latest-chatgpt-review.md`

Verify: remote SHA + blob; cycle/GO; Git Truth; options A1/A2/A3; canonical contract; emission/validation; information-loss risks; old-transcript handling; CR-03 compatibility; tests P01–P25; R22/R23/R24; trajectory; gaps; Morris gates; verdict.

- Incomplete handoff → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`
- Remote not updated → `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`

**No recommendation in this pack is a Morris decision.**

---

## 1. Git Truth

| Item | Observed |
|------|----------|
| Repo (candidate WT) | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01` |
| Remote | `https://github.com/mcleland147/sfia-workspace` (`origin`) |
| Branch | `feat/akg-m5-nap-test16-coverage-corr-01` |
| HEAD | `ca1c9869f905b394808c953649910d60fbfcb984` |
| `origin/main` | `ca1c9869f905b394808c953649910d60fbfcb984` (**match baseline ChatGPT**) |
| Staged | none (Product WIP unstaged) |
| Unstaged Product WIP (CR-03 candidate) | 6 files under `projects/sfia-studio/app/` + this review pack under `.tmp-sfia-review/` |
| Untracked Product | none beyond prior WIP set |
| Handoff WT | `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` |
| Handoff tip (pre-publish) | `1825caa3d6d8546b4ed03509df94369b9368b775` |
| Handoff file blob (pre-publish) | `a5d69ade4fa18a4d84212abade9a9025a8633cf9` = prior NAP-UX-SINGLE-RESPONSE-01 |
| Destructive git ops | **none** this cycle |

**CR-03 presence:** CONFIRMED locally as uncommitted WIP on the candidate branch (same HEAD as main). Diff vs HEAD includes formatter fidelity / canonical-first View / ConversationSurface / tests (~202 insertions net on core presentation files). **Not integrated to main.**

**Concurrent changes:** Multiple sibling worktrees exist (docs/feat AKG-M5). This cycle does not touch them. Product tree of this WT left unmodified except writing this review pack under `.tmp-sfia-review/` (non-Product).

**Git Truth:** COHERENT — proceed.

---

## 2. GO Morris consommé

**GO:** Requalification du chemin A, à partir du contrat UX Single Response et de la Critical Review ChatGPT (PARTIAL).

**Autorisé:** lecture code/docs; investigation; comparaison d'options; faisabilité; risques/réversibilité; contrats candidats; tests/exit proofs; Delivery borné recommandé; Review Pack FULL; Review Handoff L3.

**Non autorisé (respecté):** modification Product/schémas/instructions Nora; commit/push projet; PR/merge; écriture PRR/Roadmap; pivot d'archi non qualifié; test OpenAI LIVE; Cursor REAL; BALISE; SQLite write; TEST-17; suppression worktree; `move_agent_to_root`.

---

## 3. Sources lues

### Processus SFIA v2.6

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`

### Méthode / CKC / Convergence (guidance)

- Candidate method path (repo): `sfia-v2.5-project-cycles-method-candidate.md` (read as guidance only)
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` — **candidate 0.1.0**, cognitive guidance only, **no execution authority**
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/convergence/architectural-knowledge-governance/m5-product-transformation/05-m5-target-journey-and-trajectory-requalification.md`

### Doctrine v3

- `…/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- `…/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
- `…/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md`
- `…/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`

### PRR CURRENT (read, not written)

- `projects/sfia-studio/production-runtime-reference/README.md`
- Volumes **03 / 05 / 06 / 07 / 08 / 09** — applicable impact zones for future R24 (see §28)

### Prior cycle + ChatGPT

- Handoff tip `1825caa3` / blob `a5d69ade` — NAP-UX-SINGLE-RESPONSE-01
- Cursor prior verdict: `SINGLE-RESPONSE UX CONTRACT QUALIFIED — READY FOR CHATGPT REVIEW`
- ChatGPT Critical Review: **PARTIAL — SINGLE-RESPONSE TARGET NOT YET FULLY QUALIFIED**
  - Reserve 1: Fallback B safe but does **not** deliver adaptive UX on complex turns (UX-02–08 typically `coverage=false` when lead short / narrative long → tables/sections disappear under B-only Delivery).
  - Reserve 2: `lead === narrative` does **not** guarantee no duplication — blocks still render **in addition** to lead.

### Code primary (RO)

- `noraAdaptivePresentation.ts` — limits, parse/normalize, `contentFullyCoveredByPresentation` (body≡lead), `presentationPlainProjection`, CR-03 `resolveAdaptiveCanonicalDisplayText` / render decision
- `noraProductTurnOutputType.ts` — structured output `narrative` + `presentation`
- `runNoraAgentsTurn.ts` — Agents SDK structured emission
- `orchestrateTurn.ts` — composition, `appendStudioControlNotices`, Memory B serialize
- `presentationLabels.ts` — display text formatting
- `ConversationSurface.tsx` / `NoraAdaptivePresentationView.tsx` (+ CSS) — dual / canonical-first UI
- Tests Option C + CR-03 paths under `app/__tests__/`

**Authority order:** Code + observed proofs > PRR narrative. No parallel architecture repo created.

---

## 4. Convergence Pre-check

| Check | Status |
|-------|--------|
| AKG-M5 target journey L3-S2 continuity | IN SCOPE — conversation / qualification surface |
| OpenAI-native-first (R22) | RESPECTED — no second cognitive engine proposed |
| Architecture-informed (R23) | THIS CYCLE |
| Documentary impact (R24) | QUALIFIED for future Delivery — **NO PRODUCT SEMANTIC CHANGE this cycle** |
| No PRR parallel write | OK |
| No Truth C / HD / Evidence promotion of presentation | CONTRACT PRESERVED in proposal |
| CR-03 candidate not weakened on paper | KEEP/ADAPT/RETIRE LATER classified (§23) |
| Fake/Real | Applicable — architecture contract only (§16) |

---

## 5. R23 — Composants et flux (as-built)

```
[OpenAI Agents SDK + strict json_schema]
        │  narrative (string) + presentation (object|null)
        ▼
[runNoraAgentsTurn] structured product turn
        ▼
[orchestrateTurn] normalize presentation → serialize presentation_json
                 composePilotFacingAssistantText(narrative)
                 appendStudioControlNotices → durable assistant content
                 persist Memory B (content + presentation_json)
        ▼
[rehydrate] parse presentation_json + content
        ▼
[resolveAdaptiveAssistantRender / coverage]
   contentFullyCoveredByPresentation(body, presentation)
   = normalize(stripStudioNotices(body)) === normalize(lead)
   blocks EXCLUDED from coverage equality
        ▼
[NoraAdaptivePresentationView]
   if forceCanonicalFirst / uncovered:
     CANONICAL narrative block ("Réponse complète de Nora")
     + SECONDARY ProjectionChrome (lead + blocks + internal labels)
   else (covered):
     ProjectionChrome alone (still lead AND blocks)
```

### Per-element status

| # | Element | DOCUMENTED | COVERAGE VERIFIED | BEHAVIOR PROVEN | KNOWN GAP |
|---|---------|------------|-------------------|-----------------|-----------|
| 1 | Nora Product instructions | Y (prompts in runtime) | partial | LIVE emissions observed prior cycles | Exact prompt text drift vs main NOT re-diffed this cycle |
| 2 | Structured output schema | Y Option C | Y unit | Y LIVE Option C | Schema validity ≠ semantic completeness |
| 3 | Narrative generation | Y | Y | Y | Often longer than lead |
| 4 | Presentation generation | Y | Y | Y UX-00–08 | Lead often short summary |
| 5 | Server response composition | Y | Y | Y | Notices appended post-model |
| 6 | Normalization controls | Y clamp/limits | Y | Y | **Silent clamp** can truncate without FAIL |
| 7 | Typed Studio notices | Y CR-03 | Y tests | Y | — |
| 8 | Memory B serialization | Y | Y | Y prior | Dual fields content+presentation_json |
| 9 | Rehydration | Y | Y | Y | Old dual UI possible |
| 10 | Render decision | Y body≡lead | Y | Y TEST-16 root cause | Coverage too strict for adaptive Path A |
| 11 | View composition | Y CR-02/03 | Y | Y QA | Dual visible answer |
| 12 | Markdown/tables | Y block kinds | Y | Y | Tables lost under B-only |
| 13 | Fallback | Y plain / canonical-first | Y | Y | B ≠ adaptive target |
| 14 | Governance invariants | Y doctrine | partial | partial | No CTA from blocks — kept |

---

## 6. Cause racine de la double restitution

**Primary (UI contract):** When `contentFullyCoveredByPresentation` is false (typical LIVE: short `lead`, long `narrative`), CR-02/CR-03 render **canonical-first + secondary projection** → two Pilot-visible answers.

**Secondary (even when covered):** `ProjectionChrome` always renders `lead` **and** `blocks`. Equality `body === lead` does not suppress blocks. If blocks restate lead content → **intra-adaptive duplication**. ChatGPT reserve #2 confirmed in code (`NoraAdaptivePresentationView.tsx` ProjectionChrome).

**Coverage design choice (CORR-NAP-02):** Blocks intentionally excluded from coverage equality to avoid false “covered” via token overlap. Consequence: Path A almost never unlocks for complex structured answers → Path B dominates → adaptive tables/sections disappear if Delivery is renderer-only B.

---

## 7. Contrat UX validé par Morris (input)

> UNE INTERVENTION NORA = UNE SEULE RÉPONSE VISIBLE ET ADAPTATIVE.

- No historic primary block “Réponse complète de Nora” **in addition** to structured presentation.
- Internal composition/provenance labels must not clutter the visible answer.
- Reserves, evidence limits, refusals, human decisions, necessary notices must remain correctly represented.
- No CSS-hide of narrative under incomplete projection (fidelity > cosmetics).

Prior UX pack proposed A-if-covered / B-if-not. ChatGPT: **PARTIAL** — B-safe ≠ adaptive target; lead=narrative ≠ no duplication.

---

## 8. Analyse OPTION A1 — STRUCTURED-FIRST

**Idea:** Presentation is the **composition source of truth for the turn’s visible answer**. Studio derives a **deterministic canonical transcript text** from the validated structure. Single surface = structured view (no parallel full narrative). Fallback B if structure invalid/incomplete.

### Feasibility vs Option C schema

| Question | Finding |
|----------|---------|
| Can Option C represent a full answer incl. exceptions? | **MOSTLY** via block kinds: plain, section, list, comparison_table, established_facts, open_questions, recommendation, evidence_reserves, question, trace_note + epistemic roles. Refusals/STOP → plain/section + reserves. **NOT PROVEN** that every cognitive edge case fits without narrative overflow. |
| Completeness of blocks? | Schema validity ≠ completeness. Need **Studio structural completeness** (reject overflow, require non-empty substance for kind). |
| Limits truncate? | **YES RISK:** `maxBlocks=12`, `maxItems=20`, `maxStringChars=2000`, `maxLeadChars=4000`. Current parse **clamps silently** — fidelity hole for A1. A1 Delivery must **reject-over-limit** (fail → B), not silent clamp. |
| Non-representable types? | → B (canonical rich text only). |
| Server notices after model? | Append **after** derive-canonical; keep CR-03 authenticated notice strip/display rules. |
| Historical transcript? | Keep stored `content`; new render rules on rehydrate; old dual data → B or structured-only per new gate (no rewrite of Truth). |
| Derived text fidelity? | Deterministic `composeCanonicalFromPresentation` (ordered, kind-aware). Better than fuzzy coverage; still **lossy vs free prose** if model put unique claims only in narrative — mitigated by **instruction: narrative optional / derived authoritative when presentation complete**. |
| Schema change required? | **Prefer instruction + assembly + validation first** (no schema bump). Optional later: explicit completeness is Studio-side, not model boolean. |
| Memory B impact | **Structuring if durable `content` becomes derived-from-presentation** while presentation_json remains. Qualify as conversational source-of-assembly change — **not** Truth C. Needs Morris GO for Delivery. |

**A1 strengths:** Unlocks adaptive tables/sections as primary UX; solves ChatGPT reserve #1; with lead-suppression policy solves #2; OpenAI-native (same schema); one model call; CR-03 notice/fallback guards reusable.

**A1 risks:** Silent clamp today; model under-fills blocks; derived text may differ from prior narrative style; old transcripts need render compatibility; instruction change is cognitif GO.

---

## 9. Analyse OPTION A2 — CANONICAL-FIRST RICH RENDER

**Idea:** Narrative remains the durable complete answer. Studio renders it richly (MD headings/lists/tables) without a second projection. Optionally map MD → Option C components client-side.

| Question | Finding |
|----------|---------|
| Reuse Option C components? | Possible via MD→block mapper — **NOT PROVEN** robust for LIVE Nora prose. |
| Structure in text? | Needs conventions (headings, pipes for tables) — fragile vs free narrative. |
| Tables without duplication? | Single surface yes if projection discarded. |
| Fidelity? | **Best for free text** (narrative is source). |
| Extra MD engine? | Likely yes or extend formatter — new surface area. |
| Existing parser? | Partial (labels/formatter); no full MD table pipeline proven in Product UI. |
| Adaptive UX target? | **Weaker** — adaptation is post-hoc parse, not model-authored structure. Risk of “pretty plain text” not true Option C adaptivity. |
| Regression? | Partially retreats from Option C emission value. |

**A2 fit:** Strong **interim B enrichment** (make fallback readable with tables in markdown). **Insufficient as sole Path A** for Morris adaptive structured target.

---

## 10. Analyse OPTION A3 — EXPLICIT COVERAGE

**Idea:** Narrative + presentation with explicit segment references; Studio verifies coverage of referenced spans.

| Question | Finding |
|----------|---------|
| Exact refs? | Hard under generative drift; offsets fragile after notice append. |
| Granularity? | Sentence/paragraph — high token + error cost. |
| Order? | Must be constrained; complexity high. |
| Unreferenced text? | Fail-closed → B, or show orphan text → dual again. |
| Duplicate detection? | Partial at best — **NOT PROVEN** semantic. |
| Extra interpretation? | Structure may invent labels not in narrative. |
| Cost? | Higher tokens + validation complexity. |
| Non-loss proof? | Still not semantic completeness — only span bookkeeping. |

**A3 fit:** Over-engineered for current trajectory; delays Delivery; does not beat A1’s by-construction coverage when durable text is derived from structure.

---

## 11. Fallback B — CANONICAL FALLBACK (safety)

When presentation is null/invalid/**structurally incomplete**/limits overflow/non-representable:

- Show **one** rich canonical restitution (narrative or derived-safe text).
- **No** secondary projection.
- Optional A2-style MD rich render **inside B** later (enhancement, not Path A).

**B is safety, not the adaptive success criterion.** ChatGPT reserve stands: B-only Delivery fails UX-02–08 adaptive tables.

CR-03 KEEP: never empty destructive formatter; never drop narrative when falling back; never treat projection as covered when incomplete; Studio notice authenticity.

---

## 12. Matrice de comparaison

Legend: H=high / M=medium / L=low / NP=NOT PROVEN

| Criterion | A1 | A2 | A3 |
|-----------|----|----|-----|
| Informational fidelity | M→H if reject-overflow + derive | H (text source) | M NP |
| Completeness | M (limits) + B | H text / M structure | M NP |
| No duplicates | H (single surface + lead policy) | H | M |
| UX adaptive quality | **H** (native blocks) | M | H if works |
| Response types supported | H within catalogue + B | H prose | H cost |
| Option C DTO compat | **H** (reuse) | M (mapper) | M (schema+) |
| OpenAI emission change | M (instructions; schema optional) | L | H |
| Model call count | 1 | 1 | 1 |
| Cost/latency | ~same | ~same | higher tokens |
| Normalization | must tighten (reject clamp) | MD normalize | span normalize |
| Persistence | content←derive (structuring) | content unchanged | content+refs |
| Backward compat | render-rule + B for old | high | medium |
| Rehydration | presentation_json primary display | content primary | both+refs |
| Impl complexity | M | M–H | **H** |
| Reversibility | H (flag/gate) | H | L |
| Safety / authority | H with B + no CTA | H | M |
| Observability | need truncate flags | MD fail logs | ref miss logs |
| Debt | temporary dual-retire | MD engine debt | large |
| Tests needed | P01–P25 focused | P01/P18 heavy | all+span |
| Reuse existing | **highest** | partial | low |

---

## 13. Option recommandée

### **A1 — STRUCTURED-FIRST** (principal)

with **B** as mandatory fail-closed safety, and **A2 techniques only as optional enrichment of B** (not as Path A).

**A3:** defer / reject for this trajectory.

---

## 14. Justification

1. Morris UX target is **adaptive structured single answer** — A1 makes Option C the composition source; A2/B alone cannot satisfy ChatGPT’s adaptive reserve on UX-02–08.
2. Solves duplication: one surface; **lead not shown when blocks carry substance** (or lead retired from visible chrome).
3. Replaces false Path A gate `body≡lead` with **by-construction** alignment: durable text **derived from** validated presentation → no fuzzy token similarity.
4. R22: same OpenAI structured output path; no second engine.
5. CR-03 guards map cleanly onto B + notice rules.
6. A3 cost/complexity unjustified; A2 under-delivers Option C adaptivity as primary.

**Caveat (honest):** A1 does **not** magically prove semantic completeness of model content. It proves **no dual UI**, **no silent truncate-as-success**, and **deterministic assembly**. Semantic fidelity still depends on emission quality + fail-closed B.

---

## 15. Contrat d'émission proposé (candidate — not adopted)

### A. What Nora emits (OpenAI structured output)

Keep Option C shape:

```json
{
  "narrative": "<string — transitional; see modes below>",
  "presentation": {
    "version": 1,
    "eyebrow": null,
    "title": "<short title or null>",
    "lead": null,
    "blocks": [ /* complete answer as typed blocks */ ],
    "provenanceNote": null
  }
}
```

**Emission modes (Delivery design choice under GO):**

| Mode | narrative | presentation | Durable content |
|------|-----------|--------------|-----------------|
| **A1-primary (target)** | may be empty/`""` or echo | **complete** structured answer | `composeCanonicalFromPresentation(presentation)` + Studio notices |
| **A1-transitional** | full prose (compat) | complete structured | Prefer derive if `structuralComplete`; else narrative + B |
| **B-path** | full prose | null/incomplete | narrative + notices; display narrative only |

**Instruction deltas (cognitif GO, not this cycle):**

- Put the **full Pilot-facing answer** in `blocks` (and title if useful).
- Prefer `lead: null` when blocks present (avoid dual lead+blocks).
- Do not rely on provenance/internal renderer labels in emission.
- Use epistemic block kinds for facts vs hypotheses vs recommendations vs reserves.
- Refusals/STOP as explicit plain/section + evidence_reserves as needed.
- If answer cannot fit limits → leave presentation null / incomplete → B.

**No second model call.** Schema bump **not required** for first Delivery if validation+assembly+View change suffice.

---

## 16. Contrat canonique proposé (A–L)

| | Rule |
|---|------|
| **A. Nora emits** | Structured Option C; presentation preferred complete; narrative transitional |
| **B. Studio validates** | Parse strict; **reject** over-limit (no silent success clamp); structuralComplete gate; epistemic labels intact; no CTA fields |
| **C. Durable turn text** | If structuralComplete → `composeCanonicalFromPresentation(p)` then `appendStudioControlNotices`; else narrative path |
| **D. Visible presentation** | Single `ProjectionChrome` (cleaned labels); **no** “Réponse complète” sibling; **hide lead if `blocks.length > 0`** |
| **E. Memory B** | `content` = durable text; `presentation_json` = serialized DTO when present; presentation ≠ Truth C / HD / Evidence |
| **F. Rehydration** | Re-parse JSON; re-run structuralComplete; same render decision; notices via CR-03 strip rules |
| **G. Invalid presentation** | Treat as null → **B** only |
| **H. Incomplete** | structuralComplete=false (overflow, empty substance, ambiguous) → **B** only; never hide narrative via CSS |
| **I. Studio notice after cognitive** | Append to durable content after derive; authenticated display only; never forge notices into presentation_json |
| **J. Old transcripts** | If presentation missing/incomplete → B (content); if complete under new gate → structured-only; accept possible visual change vs historic dual UI (**compat render**, not DB rewrite) |
| **K. Short answer** | One `plain` block or short lead-only with `blocks=[]` allowed; single surface |
| **L. Over DTO limits** | Reject presentation → B with full narrative (must still be emitted or recoverable). **P13:** never abandon info because clamp “succeeded” |

**structuralComplete (deterministic candidate):**

1. `parseNoraAdaptivePresentation` succeeds.
2. No field required truncation: raw lengths ≤ limits (**fail if would clamp**).
3. Substance: `blocks.length ≥ 1` OR non-empty lead (short-form).
4. If `blocks.length === maxBlocks` OR any list/table at maxItems/maxRows → **incomplete** (possible truncation) unless Delivery proves otherwise — **fail-closed**.
5. Recommendation blocks keep disclaimer semantics in data model (visible shortened — §22).

---

## 17. Règles de validation

1. JSON schema / SDK structured output (existing).
2. Product normalize: **reject-over-limit** for A1 path (change vs today’s silent clamp — Delivery).
3. structuralComplete (§16).
4. Strip/authenticate Studio notices (CR-03 KEEP).
5. Never mark covered via fuzzy similarity / token overlap.
6. Never promote presentation to Evidence / HD / Truth C.
7. Contradiction model narrative vs presentation when both present in transitional mode → **do not certify**; prefer B or structured-only after derive policy — never merge into “certified conclusion” (**P12**).

---

## 18. Règles de persistance

- Memory B remains conversational (not Truth C).
- Persist both `content` and `presentation_json` when available.
- Under A1-primary, `content` is **derived** → qualify as **assembly SoT change** for the turn, Morris GO required for Delivery.
- Do not rewrite historical rows in place in first Delivery; apply new read/render rules.
- No HumanDecision invented from recommendation blocks.

---

## 19. Règles de rehydration

1. Load content + presentation_json.
2. Parse presentation; compute structuralComplete.
3. If complete → single structured view (lead policy).
4. Else → single canonical content view (B), CR-03 display text resolution.
5. Identical decision for live turn and reload (**P16**).

---

## 20. Compatibilité avec l'historique

| Artifact | Policy |
|----------|--------|
| Old dual UI turns | Rehydrate → B or A1 structured-only per new gate; **no** second projection |
| Old content-only | Unchanged B |
| Old presentation without structuralComplete | B |
| CR-03 WIP uncommitted | Must be **integrated or re-applied** before/with Delivery; this arch cycle does not merge it |

---

## 21. Hiérarchie UX (visible)

**One Nora bubble / one adaptive surface:**

1. Optional short title (natural).
2. Blocks in order (sections, lists, tables, facts, questions, reserves, recommendation-as-proposal).
3. Necessary authority/proof notices only (Studio-authenticated).
4. Natural epistemic distinctions retained in wording/structure — not renderer documentation.

**Not visible as product chrome:** “Projection structurée (Nora non certifiée)”, repeated “Liste (Nora)”, “Élément présenté comme établi (Nora)”, “Pas d'action gouvernée…”, “Evidence Product / HumanDecision” **unless** required for correct authority reading on that turn (prefer omit; keep in tests/internal).

---

## 22. Nettoyage des libellés internes

| Label class | Action |
|-------------|--------|
| Renderer/provenance boilerplate | **RETIRE from Pilot chrome** (ADAPT View) |
| Recommendation ≠ decision | KEEP meaning; shorten visible cue if needed |
| Epistemic fact vs hypothesis | KEEP via block kind / wording |
| Studio control notices | KEEP when authenticated |
| “Réponse complète de Nora” header | **RETIRE** when single-response mode on |
| Secondary projection warning | **RETIRE** with dual path (after proof) |

---

## 23. Garanties CR-03 — KEEP / ADAPT / RETIRE LATER / FREEZE

| Class | Items |
|-------|-------|
| **KEEP** | Fail-closed plain on bad presentation; no destructive empty formatter; authenticated Studio notices; strip forged notices; recommendation disclaimer semantics; no Product CTA from blocks; presentation ≠ Truth C/HD/Evidence; resolveAdaptiveCanonicalDisplayText for B path |
| **ADAPT** | Render decision: replace body≡lead gate with structuralComplete + derive; View: single surface; suppress lead when blocks present; normalize reject-overflow; retire dual composition |
| **RETIRE LATER** | `forceCanonicalFirst` dual branch; secondary projection chrome; “Réponse complète” label — **only after** P01–P25 green on Delivery |
| **FREEZE** | Truth C stores; HD pipeline; Evidence authority; OpenAI LIVE harness beyond gated Delivery; BALISE; unrelated L3-S2 proofs |

**Do not delete a CR-03 protection without demonstrable equivalent.** No structuring deletion in this cycle.

---

## 24. Tests P01–P25 (future matrix)

Synthetic fixtures only when versioned; reuse UX-00–08 observations as scenario seeds (not live calls this cycle).

| ID | Entry | Invariant | Expected | Proof method | Level | FAIL if |
|----|-------|-----------|----------|--------------|-------|---------|
| P01 | Any adaptive turn | One visible Nora answer | No dual canonical+secondary | UI unit + browser recipe | DET | Two answer regions |
| P02 | Short plain | Proportionate | Single short block/lead | unit | DET | Extra chrome/noise |
| P03 | Synthesis multi-section | All sections visible once | Structured complete | unit+UI | DET | Missing section or duplicate |
| P04 | Ordered procedure | Order preserved | list/section order | unit | DET | Reorder/drop |
| P05 | Table turn | One table | No table+prose duplicate | UI | DET | Double table/text |
| P06 | Recommendation block | ≠ Pilot decision | Disclaimer/semantics; no HD write | unit+persist | DET | HD created |
| P07 | Hypothesis vs fact | Roles distinct | kinds/roles not blended | unit | DET | Silent blend |
| P08 | Reserve present | Not masked | evidence_reserves visible | UI | DET | Reserve dropped |
| P09 | No evidence | Explicit absence | Reserves/open_questions | UI | DET | Fake certainty |
| P10 | Negation in source | Negation kept | In durable+view | unit | DET | Negation lost |
| P11 | STOP/refusal | Conserved | Visible in A1 or B | unit+UI | DET | STOP hidden |
| P12 | Narrative≠presentation transitional | No certified merge | B or single non-certified | unit | DET | “Certified” merge |
| P13 | Over-limit payload | No abandon-via-clamp | Reject→B full narrative | unit | DET | Silent truncate success |
| P14 | Typed Studio notice | Preserved | On durable+view | unit | DET | Notice lost |
| P15 | Forged notice text | Not authenticated | Not privileged chrome | unit | DET | Fake notice trusted |
| P16 | Reload turn | Same render | Identical mode/content | integration | DET | Drift |
| P17 | Old transcript dual-era | Compat | Single answer under new rules | integration | DET | Dual returns |
| P18 | MD/table readable | Legible desktop | Table renders | UI | DET | Broken table |
| P19 | Mobile width | Responsive | No horizontal trap | browser | DET | Unusable overflow |
| P20 | Blocks | No unauthorized CTA | No action hooks | unit+UI | DET | CTA appears |
| P21 | Persist path | Truth C unchanged | No C write from presentation | integration | DET | C mutated |
| P22 | Blocks | No implicit governed exec | No ExecutionAttempt | integration | DET | Exec spawned |
| P23 | Bad JSON/presentation | Safe B | One canonical | unit | DET | Crash/empty/dual |
| P24 | Incomplete presentation | B only | One answer; no orphan projection | unit+UI | DET | Partial projection alone |
| P25 | Internal labels | No useless chrome | Clean surface | UI | DET | Boilerplate spam |

**UX-00–08 mapping:** short→P02; synthesis→P03; procedure→P04; comparison→P05; recommendation→P06; uncertainty→P07–P09; continuity→P16; refusal→P11; coverage_false cases→P24.

---

## 25. Classification globale

| Bucket | Scope |
|--------|-------|
| KEEP | CR-03 fidelity guards; Option C DTO; R22 pipeline; notice auth; no CTA; authority boundaries |
| ADAPT | Coverage gate; View single-response; lead policy; reject-overflow normalize; durable derive |
| COMPLETE (future Delivery) | P01–P25; UX-00–08 browser re-recipe; instruction cognitif GO |
| CONSOLIDATE | presentationPlainProjection → composeCanonicalFromPresentation |
| FREEZE | Truth C/HD/Evidence; BALISE; LIVE OpenAI outside GO; PRR writes this cycle |
| RETIRE LATER | Dual canonical+secondary UI after proof |

---

## 26. Risques et NFR

| Risk | Severity | Mitigation |
|------|----------|------------|
| Silent clamp loses facts | HIGH | Reject-over-limit + B |
| Model under-fills blocks vs old narrative | HIGH | Instructions + transitional mode + B |
| Derived text style regression | MED | Compose ordered readable text; QA recipe |
| Old transcript visual change | MED | Documented compat; single-answer preferred |
| Instruction change without GO | HIGH | Separate cognitif GO |
| Treating A1 as semantic completeness proof | HIGH | Explicit NOT PROVEN; tests ≠ LIVE proof |
| Parallel Nora pipeline temptation | HIGH | Forbidden — reuse Option C path |
| Latency/cost | LOW | Same one-call structured output |
| Observability | MED | Log structuralComplete reason codes |

---

## 27. Dette et sortie

**Temporary debt:** CR-03 WIP uncommitted; dual UI still in tree until Delivery; body≡lead gate still on disk; silent clamp.

**Exit proof (architecture cycle):** This pack + remote handoff verified + option/contracts/tests/gates explicit.

**Exit proof (future Delivery):** P01–P25 DET green + browser UX-00–08 single-answer + no Truth C/HD/CTA regressions + CR-03 KEEP preserved.

**Next v3 capacity:** remains V3-F05 conversation surface; feeds V3-F06 continuity / V3-F14 proof display hygiene.

---

## 28. Impacts R24 (future — do not write PRR now)

**This cycle:** `NO PRODUCT SEMANTIC CHANGE`.

**Future Delivery semantic impact expected on:**

| Area | PRR volumes (candidate) |
|------|-------------------------|
| Emission / structured output | 05, 06 |
| Composition / notices | 06, 07 |
| Persistence / Memory B assembly | 07, 08 |
| Renderer / Conversation UI | 08, 09 |
| Validation / rehydration | 06, 07, 08 |
| Tests / proof oracles | 09 (+ validation checklists) |

Do not refresh digests artificially. No parallel architecture reference.

---

## 29. Fichiers Product envisagés (Delivery futur — not modified now)

| File | Likely change |
|------|----------------|
| `noraAdaptivePresentation.ts` | reject-overflow; structuralComplete; composeCanonicalFromPresentation; render resolve |
| `NoraAdaptivePresentationView.tsx` (+ CSS) | single surface; lead policy; retire dual chrome |
| `ConversationSurface.tsx` | pass new render mode; stop force dual |
| `orchestrateTurn.ts` | durable derive when complete; notice order |
| `presentationLabels.ts` | B rich text helpers if needed |
| `noraProductTurnOutputType.ts` | instruction-adjacent only unless schema GO |
| Nora Product instructions | cognitif GO |
| `__tests__/…noraAdaptivePresentation*` | P01–P25 |

CR-03 WIP on candidate WT is the natural base — **integrate under distinct Git GO**.

---

## 30. Prochain cycle Delivery minimal (candidate)

**D0 (this):** Architecture qualified — DONE when handoff remote verified.

**D1 — Product minimal (GO Morris):** Implement A1 assembly+View+reject-overflow+B single-answer on CR-03 base. Prefer **no schema bump**. Instruction change = **separate cognitif GO** if required for LIVE fill quality.

**D2 — Deterministic validation:** Unit/UI P01–P25 synthetic.

**D3 — Browser recipe isolée:** Reprise UX-00–08 on isolated QA runtime (not BALISE assume).

**D4 — R24 doc sync** after behavior lands.

**D5 — Git integration** under distinct GO (candidate branch / PR).

**D6 — Resume L3-S2 trajectory.**

**Critical path:** D0 → D1 (renderer+normalize+persist derive) → D2 → D3. Cognitif instruction GO may gate LIVE adaptive quality but View/normalize can land first for dual-UI kill if fixtures force complete presentations.

**Blocking deps:** Morris GO Delivery; CR-03 WIP disposition; no OpenAI LIVE in arch cycle.

**Reusable assets:** Option C DTO/View blocks; CR-03 notice/formatter; QA env pattern pre-int-ux-qa-01; UX scenario seeds.

---

## 31. Gates Morris

| Gate | Question |
|------|----------|
| G-ARCH | Accept A1+B as Path A architecture? |
| G-DELIVERY-D1 | Authorize Product implementation of assembly/View/normalize (no schema)? |
| G-COGNITIF | Authorize Nora instruction change for blocks-complete emission? |
| G-PERSIST | Authorize durable `content` derived-from-presentation when complete? |
| G-INTEGRATE | Authorize commit/PR of CR-03+D1 on project? |
| G-QA-BROWSER | Authorize isolated browser re-recipe UX-00–08? |
| G-R24 | Authorize PRR/doc sync after proofs? |
| G-REAL | **Not requested** — remains closed |

---

## 32. Verdict

# SINGLE-RESPONSE PATH A — ARCHITECTURE QUALIFIED FOR MORRIS DECISION

**Principal option:** **A1 STRUCTURED-FIRST** + **B fail-closed canonical fallback**.
**A2:** optional B enrichment only. **A3:** not selected.

**Qualified:** contracts A–L; emission candidate; validation/persist/rehydrate; CR-03 KEEP/ADAPT/RETIRE LATER; P01–P25; R22/R23/R24; Delivery D1 scope; Morris gates.

**Not claimed:** PRODUCT IMPLEMENTED; READY FOR PR; UX LIVE PASS; L3 COMPLETE; G-REAL GRANTED; runtime v3 ADOPTED; semantic completeness of model output PROVEN.

---

## Fake / Real Qualification

| | |
|--|--|
| Applicable | YES |
| Boundaries | OpenAI structured output / Product orchestration / Memory B / browser renderer |
| Input | Option C on main; CR-03 local WIP; prior LIVE structured emissions; QA UX-00–08; semantic completeness unproven |
| Output this cycle | **ARCHITECTURE CONTRACT QUALIFIED** |
| New behavior proven | **NONE** (read-only) |
| Fake ≠ Real | Affirmed |

---

## Runtime / Data Safety (passive)

| Item | Observation |
|------|-------------|
| Process | `next-server` PID **19966** (prior QA) |
| Port | **3020** |
| cwd | corr-01 app (prior) |
| Product SQLite open | `/Users/morris/Projects/.sfia-exec/pre-int-ux-qa-01/product-db/oa-product.sqlite` |
| Nora session env | `qa.process.env` last export → `…/pre-int-ux-qa-01/nora-session/nora-session.sqlite` (file also contains an earlier campaign path export — **last wins if sourced in order**) |
| Nora sqlite FD | Not observed open on PID at check time |
| Identity | **QA pre-int-ux-qa-01**, not assumed BALISE/live-e2e |
| Actions | none (no restart, no DB write, no Nora message, no OpenAI, no REAL) |
| Gap | Mild KNOWN GAP: nora DB FD not listed at snapshot — do not act on runtime |

---

## Synthetic contract examples (for independent review)

### Example S1 — Short (A1)

```json
{
  "narrative": "",
  "presentation": {
    "version": 1,
    "eyebrow": null,
    "title": null,
    "lead": null,
    "blocks": [{ "kind": "plain", "text": "Le jalon L3-S2 reste ouvert; aucune décision Pilote n'est enregistrée." }],
    "provenanceNote": null
  }
}
```

- structuralComplete: true
- durable: compose from block
- UI: one plain paragraph; no “Réponse complète”

### Example S2 — Comparison table (A1) — addresses ChatGPT UX-02–08 concern

```json
{
  "narrative": "",
  "presentation": {
    "version": 1,
    "title": "Comparaison des options de couverture",
    "lead": null,
    "blocks": [
      {
        "kind": "comparison_table",
        "columns": ["Critère", "A1", "B"],
        "rows": [
          ["Tables visibles", "oui", "non si fallback"],
          ["Doublon lead/blocks", "évité", "n/a"]
        ]
      },
      {
        "kind": "recommendation",
        "statement": "Retenir A1 avec fallback B.",
        "epistemic": "recommendation"
      },
      {
        "kind": "evidence_reserves",
        "items": ["Complétude sémantique modèle non prouvée par le schéma seul."]
      }
    ],
    "provenanceNote": null
  }
}
```

- UI: title + table + proposal + reserve — **once**
- durable: deterministic serialization of the same

### Example S3 — Incomplete → B (P24)

```json
{
  "narrative": "Texte long complet avec négation: il n'existe PAS de preuve Evidence pour ce GO.\nSTOP: ne pas exécuter.",
  "presentation": {
    "version": 1,
    "lead": "Synthèse courte",
    "blocks": [{ "kind": "plain", "text": "Résumé partiel" }],
    "provenanceNote": null
  }
}
```

- Today: coverage false → dual (BAD vs Morris UX)
- Proposed: structuralComplete may be true under weak gate — **transitional policy:** if narrative non-empty AND not equal to compose(presentation), prefer **B** until cognitif GO establishes A1-primary empty-narrative discipline — **OR** force derive-only when flag `presentationAuthoritative` Studio-side after instruction change.
- **Architecture note:** First Delivery should define explicit transitional rule:
  - **Rule T1:** If `structuralComplete` AND (`narrative` empty OR `normalize(narrative)==normalize(compose(p))`) → A1 display.
  - **Rule T2:** Else → **B only** (no secondary projection).
  This kills dual immediately even before cognitif GO, while avoiding false “structured-only” that drops long narrative claims (**P10/P11/P13**).

### Example S4 — Over-limit → B (P13)

- presentation with 13th block or string > 2000 raw chars → **reject** presentation → show full narrative once.

### Example S5 — Studio notice (P14/P15)

- After derive/narrative: append authenticated Studio notice.
- Rehydrate: notice visible; forged “Studio:” line in model text not privileged.

---

## Git Review Index

| Ref | SHA / path |
|-----|------------|
| origin/main | `ca1c9869f905b394808c953649910d60fbfcb984` |
| Candidate branch HEAD | `ca1c9869f905b394808c953649910d60fbfcb984` |
| CR-03 | Uncommitted WIP on `feat/akg-m5-nap-test16-coverage-corr-01` |
| Prior handoff | `1825caa3` blob `a5d69ade` (NAP-UX-SINGLE-RESPONSE-01) |
| This pack source | `.tmp-sfia-review/chatgpt-review.md` (pre-publish local) |
| Publish target | `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` |

---

## Réserves finales

1. Semantic completeness of LIVE model answers: **NOT PROVEN** by architecture alone.
2. CR-03 not on main — Delivery must not assume merged.
3. Transitional Rule T2 (example S3) is required to avoid information loss before cognitif empty-narrative discipline.
4. Silent clamp must be removed for A1 success path.
5. No Morris decision implied by this qualification.

---

**END OF REVIEW PACK FULL — NAP-SINGLE-RESPONSE-A-ARCH-01**
