# ChatGPT Critical Review Pack — LIGHT
## AKG-M5 L3-S2 · CYCLE 6 ARCHITECTURE — Nora adaptive presentation path (A3/A4)

**UTC authored:** 2026-10-29T18:51:41Z
**Morris GO:** CONCEPTION A3/A4 VALIDÉE — construction NON autorisée
**Verdict:** ARCHITECTURE QUALIFIED — DELIVERY GO REQUIRED

**Anti-claims:** No Product/Figma/DB/config change · No new service built · No BALISE/Cursor REAL · No TEST-15 fix · No project push/PR/merge · Runtime v3 NON ADOPTED · R24 NO SEMANTIC IMPACT (diagnostic) · EP-S2-08 PARTIAL · L3 GLOBAL OPEN

---

## 1. Git Truth
| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3s2-r24-postmerge-capitalization` |
| Branch | `docs/akg-m5-l3s2-r24-postmerge-capitalization` |
| HEAD | `cf940d84ea9e78602131fe97f75cad0c5abddac9` |
| origin/main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= `2cc63686…`) |
| Porcelain | `M .tmp-sfia-review/chatgpt-review.md` preserved |
| Prior UX cadrage handoff | `9462c7e3…` |

## 2. Figma refs (validated UX — not Product runtime proof)
| Frame | nodeId | Name | Size |
|---|---|---|---|
| **A3** | `466:2` | Nora / adaptive presentation contract · CANDIDATE | 1440×1140 |
| **A4** | `466:71` | Nora / composed response and reload continuity · CANDIDATE | 1440×1140 |
| **A** | `446:3` | Nora / adaptive synthesis · workspace | 1440×1024 |
| **A2** | `447:2` | Adaptive response catalogue / guardrails | 1440×880 |
| File | `m4g8j0gNbEzfIuH6S9AZJF` | Pre-M6 | MCP session read **VERIFIED** |

**A3 contract (metadata):** 4-step pipeline Intent→Blocks→Validation Studio→Rendu déterministe ; routing matrix (short Q / synthesis / comparison / recommendation / decision / evidence) ; constraints: no invented Product CTA · no HTML/JS · facts≠hypotheses≠recommendations≠decisions · reload-stable · plain fallback.

**A4 contract:** composed blocks (established ✓ / open ? / recommendation ↗ + non-decision note) · **identical after reload** · fail-safe plain text if schema absent/invalid · no free CTA.

## 3. AS-IS cartography
| Component | Role today | Reco |
|---|---|---|
| `ConversationSurface.tsx` | Transcript bubbles; governed cards separate | **KEEP** shell · **ADAPT** message body → block renderer |
| `formatNoraAssistantDisplayText` | Scrub jargon; strip markdown markers; string-only | **KEEP** as plain fallback / safety scrub |
| `useProductConversation.ts` | Send/history; messages `{role,content}` | **KEEP** · **ADAPT** optional presentation payload on assistant messages |
| `orchestrateTurn` / Agents Nora | Free-text (+ tools); Memory B session | **KEEP** cognition · **ADAPT** attach validated presentation DTO |
| `OpenAIConversationProvider.completeStructured` | Already used (F2 IntentAnalysis strict json_schema) | **KEEP** · **REUSE** for presentation schema |
| Governed* cards | Product HD / Confirmation / Recommendation CTAs | **KEEP** — never replace with free Nora CTAs |
| `pilot_transcript_turns.content` | **string only** | **COMPLETE** durable presentation (see §5) — gap for A4 |
| `--pm6-*` tokens | Visual system | **KEEP** |

**No second Truth C / no second renderer authority.** Presentation is projection over Nora/Product outputs.

## 4. OpenAI Capability Fit (R22)
| Capability | Fit |
|---|---|
| Responses API `json_schema` strict (`completeStructured`) | **AVAILABLE** in Product provider; proven on F2 intent |
| Free-text Agents turn | Current Nora primary path |
| Structured Outputs for presentation blocks | **FEASIBLE** without new provider |

### Options
| Opt | Approach | Pros | Cons |
|---|---|---|---|
| **A** Deterministic format of existing text | No model change; low cost | Heuristics brittle; fails A3 matrix & A4 identical reload | |
| **B** Structured Nora-only (schema replaces prose) | Clean blocks | Risk losing conversational prose; Agents path change heavier | |
| **C** **Minimal A+B** | Prose (or compact lead) + **validated** presentation DTO via `completeStructured` (same turn or post-pass) · Studio validates · renderer · plain fallback | Matches A3/A4; reuses existing structured path; CTAs stay Product | +latency/cost if second call; needs durable DTO for reload |

**Recommendation (architecture, not decided Delivery):** **Option C** — structured presentation projection + deterministic Studio renderer + plain fallback. Prefer **single structured payload** carrying `plainText` + `blocks[]` when integrating with cognitive turn to limit extra calls; if Agents text remains SoT for conversation, a **bounded post-pass** `completeStructured` is acceptable with fail-closed to plain text.

## 5. Render / data contract (proposed — not implemented)
**Bounded block catalogue (align A2/A3/A4):**
`plain` · `question` · `section` · `list` · `comparison_table` · `established_facts` · `open_questions` · `recommendation` (non-decision) · `evidence_reserves` · `trace_note`

**Selection rules:** server-side from DTO kind + content; invalid/unknown block → drop or collapse to plain; never invent HD/Confirm/Execute CTA.

**Composition:** ordered `blocks[]` inside one assistant message; optional eyebrow/title.

**Epistemic labels:** facts / hypotheses / recommendations / decisions must be explicit block kinds or badges — no silent blend.

**Provenance:** optional `trace` string (sources consulted) — presentation only.

**Safety:** no HTML/JS; no markdown execution; reuse scrubber on plain; schema allowlist only.

**Reload:** A4 requires durable validated DTO. Today transcript stores **content string only** → Delivery must add **minimal** persistence of presentation JSON beside the turn (extend transcript row or adjacent Memory-B table) **without** making presentation Truth C. Absent/invalid → plain `content` only.

**A11y/responsive:** semantic headings/lists; reuse `--pm6-`; mobile stack blocks (catalogue A2).

**Reuse:** ConversationSurface bubble host · pm6 chips/cards visual language · Governed cards untouched · `completeStructured` + server Zod/validate mirror of IntentAnalysis pattern.

**Minimal deltas (Delivery, later GO):**
1. Presentation JSON Schema + server validator
2. Emit/attach DTO on assistant turn
3. Durable store for DTO with transcript
4. `NoraAdaptiveMessage` renderer in ConversationSurface
5. Tests: short Q · BALISE synthesis · malformed · reload · legacy plain

## 6. Validation scenarios & attainable proof
| Scenario | Proof level attainable at Delivery |
|---|---|
| Short Q without superfluous card | UI unit + browser |
| BALISE multi-block synthesis | UI + LIVE optional |
| Comparison table | UI |
| Recommendation without HD CTA | UI + invariant test |
| Malformed/incomplete schema → plain | unit fail-closed |
| Reload / process restart identical | integration on durable DTO |
| Legacy plain history | unit |
| Long + mobile | browser |
| No Product action from free render | invariant (no action wiring in renderer) |

**Not claimed by this cycle:** runtime behavior proven · Figma pixel fidelity · LIVE campaign.

## 7. R23 / R24 / PRR
- R23: code path + Figma MCP metadata primary evidence.
- R24: **NO SEMANTIC IMPACT** this cycle. Future Delivery may need PRR 03 (conversation presentation continuity) + 09 UX residual update under **separate DOC GO** — not semantic Product authority change if presentation remains non-authoritative.

## 8. Risks / debt / exit
| Risk | Mitigation |
|---|---|
| Second call latency/cost | Prefer single structured payload |
| DTO treated as Truth C | Explicit: presentation-only; OA unchanged |
| Nora invents CTAs | Schema forbids; renderer has no action hooks |
| Persistence creep | Minimal column/table; no parallel project graph |
| TEST-15 prepare false positive | **Out of band** — do not couple |
| v3 Figma bleed | Pre-M6 file only |

Exit: bounded Delivery lot closes adaptive Nora render; Figma fidelity gate separate.

## 9. Minimal Delivery plan (unauthorized until GO)
1. Schema + validator + unit tests
2. Wire emit path (post-pass or integrated structured)
3. Persist DTO with transcript
4. Renderer ADAPT ConversationSurface
5. Browser scenarios + reload proof
6. Optional DOC PRR sync

**Next capability:** UX Delivery — Nora adaptive presentation (Option C)
**Exit proof:** deterministic render + reload identity + fail-closed plain + no Product CTA from free content + tests green

## 10. Morris decisions required
1. **Delivery GO** for Option C (or reject/alternate).
2. Persistence choice: extend `pilot_transcript_turns` vs sibling presentation store.
3. Emit strategy: integrated structured vs post-pass.
4. Keep TEST-15 fix separate unless explicitly combined.

## Unique verdict
**ARCHITECTURE QUALIFIED — DELIVERY GO REQUIRED**
