# ChatGPT Critical Review Pack — LIGHT
## AKG-M5 L3-S2 · CYCLE 4 UX/UI — PILOTE EXPERIENCE CADRAGE (Nora ↔ Contrat ↔ Preuves)

**UTC authored:** 2026-10-29T17:48:38Z
**Morris GO:** ANALYSE ET CADRAGE UNIQUEMENT — no build, no Product change
**Verdict:** UX CADRAGE COMPLETE — READY FOR FIGMA REVIEW

**Anti-claims:** No code/CSS/tests/config/data change · No LIVE/HQA write · No server restart · No BALISE execution · No TEST-15 fix · No Figma file creation · No PR/merge/project push · Runtime v3 NON ADOPTED · R24 NO SEMANTIC IMPACT (cadrage only) · EP-S2-08 PARTIAL · L3 GLOBAL OPEN

---

## 1. Git Truth
| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3s2-r24-postmerge-capitalization` |
| Branch | `docs/akg-m5-l3s2-r24-postmerge-capitalization` |
| HEAD | `cf940d84ea9e78602131fe97f75cad0c5abddac9` |
| origin/main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= expected `2cc63686…`) |
| Porcelain | `M .tmp-sfia-review/chatgpt-review.md` only — preserved |
| Prior handoff | `1e61d164…` (TEST-15 root cause) |

## 2. Convergence Pre-check
| Item | Qualification |
|---|---|
| v3 capability | Framing 30–37 / Option-A UX docs = **target doctrine, NON ADOPTED** for runtime |
| Milestone | **AKG-M5 L3-S2** — EP-S2-08 post-evidence continuity PARTIAL; critical path includes Pilote comprehension of Nora reply ↔ EC inspection ↔ HD/Confirm |
| Existing assets | Pre-M6 product UI cockpit (`ConversationSurface`, governed cards, `ExecutionSurface`, inspection panel, `--pm6-` tokens) · presentationLabels · PRR 03/06/07/09 · P3 Figma refs in Git |
| UX gaps | Nora body ≈ scrubbed plain text (markdown neutralized, not structured UI) · EC inspection still fact-list / technical-leaning · weak visual bridge conversation→contract→evidence |
| Dependencies | Product objects remain SoT (EC disclosure, HD, Confirmation) · no second renderer · TEST-15 lexical prepare bug remains open (out of scope) |
| Exit proof (cadrage) | This pack + handoff · Morris Figma Review GO before any construction |
| Next capability | Figma Review / visual contract confirmation on documented Pre-M6 file · then bounded UX delivery GO |
| Debt exit | Prefer ADAPT Pre-M6 surfaces + shared presentation adapters; do not invent parallel cockpit |

## 3. AS-IS inventory (KEEP / ADAPT / COMPLETE / CONSOLIDATE)

| Asset | Role | Reco |
|---|---|---|
| `ConversationSurface.tsx` + CSS | Primary Nora cockpit, transcripts, live activity, source chips | **KEEP** shell · **ADAPT** message body rendering |
| `presentationLabels.ts` (`formatNoraAssistantDisplayText`) | Scrub jargon; neutralize markdown markers; **no HTML** | **KEEP** safety · **ADAPT** toward typed presentation blocks |
| `useProductConversation.ts` | Send/cancel/history controller | **KEEP** |
| GovernedDecisionCard / GenericMission / Confirmation / FramingContinuity | Product-object CTAs (not free Nora CTAs) | **KEEP** · **CONSOLIDATE** visual rhythm |
| `ExecutionSurface.tsx` + CSS | Continuity, confirm, execute, inspection open | **KEEP** authority path · **ADAPT** business-first hierarchy |
| `pilotContractPresentation.ts` / `pilotExecutionPresentation.ts` | Business paraphrase + disclosure→rows | **KEEP** · **COMPLETE** “what/won’t/where/result/risk/proof/authorize” framing |
| `ContractInspectionExamPanel.tsx` | Required facts exam + Attest | **KEEP** fail-closed attestation · **ADAPT** copy & grouping |
| `product-tokens.css` (`--pm6-*`) | Warm paper / Nora vermilion; Geist | **KEEP** |
| Trajectory / Lifecycle / Journal / Syntheses / Recovery | Secondary orientation surfaces | **KEEP**; do not absorb into chat |
| v3 Figma Option-A frames | Design aspiration | **HARVEST** patterns only — **not** runtime SoT |

### Flow confirmed (code)
Nora text → transcript persistence → `formatNoraAssistantDisplayText` → ConversationSurface bubble → reload-safe string.
EC → disclosure → `buildInspectionFactRowsFromDisclosure` → exam panel → Attest ≠ Execute → Confirm/Exécuter via W2 actions.
**Data ≠ presentation ≠ authority** already separated; CTA governed by Product cards/actions only.

## 4. Nora conversation cadrage (TO-BE — not implemented)
**Adaptive presentation kinds:** short reply · single question · structured explanation · synthesis · comparison · recommendation · pilot decision prompt · evidence/reserves restitution.

**Primitives (reuse `--pm6-`):** title · paragraph · list · optional icon · section · card (only for Product-governed interaction) · compact table · step list · status chips.

**Rules:**
- Reliable enriched text (safe markdown→structure or typed blocks from Product/Nora presentation DTO — **no** `dangerouslySetInnerHTML` / no executable content).
- Bounded business components only for Product objects (Recommendation, HD, Confirmation, EC CTA).
- Content-adaptive layout; **fallback plain text** for historical messages.
- Deterministic after reload (derive from stored transcript + Product projections, not ephemeral model chrome).
- A11y + responsive (desktop 1440 / 1280 · mobile ~390).
- **No free-form Nora CTA** that authorizes or executes.

## 5. Execution contract cadrage (TO-BE — not implemented)
Pilote-first reading order:
1. What will be done
2. What will not
3. Where / on what
4. What may change
5. Expected result
6. Risks & limits
7. Expected evidence
8. What Confirm/Exécuter means

Technical details (IDs, fingerprint, raw action/target) behind progressive disclosure — **never hide** material effects/risks/requiredInspectedFacts/version/fingerprint/SHE controls. Simplified presentation must remain attestation-complete.

## 6. Figma / visual contract
| Source | fileKey (Git-documented) | Status this cycle |
|---|---|---|
| Pre-M6 / P3 Workspace (product path) | `m4g8j0gNbEzfIuH6S9AZJF` · nodes cited in code e.g. **46:2**, **46:98/107**, **190:44/306** | **DOCUMENTED IN GIT** |
| Legacy tokens extract | `lrjA1WEyRpL05vKR8k29LO` | Historical |
| v3 Option-A | `8xR5zSTfGtEVZSr6KK8Gww` | Target doctrine · **NON ADOPTED** |
| D1 intake | `IS70XDnBMvZuJYmaI5eZT2` | Separate track |

**FIGMA LIVE ACCESS NOT VERIFIED** this cycle (no MCP open / no frame fetch / no screenshot proof). Do not invent missing frames. Authoritative construction source = Pre-M6 file **after** Morris validates access + frames for A/B/C below.

### Proposed frames (specs for Review — create only under later GO)
| ID | Intent | Desktop | Mobile | States |
|---|---|---|---|---|
| **A** Nora structured dynamic reply | Adaptive sections/lists for synthesis & proposal | 1440×1024 content column | 390×844 | empty thread · streaming/loading · long content · error |
| **B** Recommendation / métier decision | Governed card + Nora preface · Product CTAs only | same | same | pending · decided · reserves |
| **C** Functional EC inspection | Business-first 8-point reading + details drawer + required facts exam | same | same | missing required · attest ready · post-attest |

Reuse existing `--pm6-` tokens; harvest Option-A patterns only if compatible without runtime v3 adoption.

## 7. AS-IS → TO-BE matrix (cadrage claim only)
| Concern | AS-IS | TO-BE (proposed) |
|---|---|---|
| Nora body | Scrubbed plain / soft-markdown strip | Adaptive structured blocks + plain fallback |
| Recommendation | Governed cards exist | Visual hierarchy + clearer “decide vs chat” |
| EC inspection | Fact list + technical identity visible early | Business-first narrative; tech secondary; facts complete |
| Evidence/reserves | Mixed in prose / chips | Dedicated restitution pattern linked to Product objects |
| Bridge A↔B↔C | Weak (chat says “prepared contract”; inspection elsewhere) | Explicit continuity affordance without second authority |

## 8. PRR / impacts (future — not applied)
Possible future documentary touch: PRR 03 presentation continuity · 09 First Framing UX residual · Roadmap UX lot — **only under separate DOC GO**. No semantic Product change required for visual ADAPT if presentation adapters stay non-authoritative.

## 9. Risks / anti-patterns
- Rendering model HTML/markdown unsafely
- Nora-invented authorize/execute buttons
- Hiding effects behind “simple” UX
- Parallel EC renderer bypassing disclosure
- Treating v3 Figma as adopted runtime
- Building before Figma live verification
- Bundling TEST-15 fix into UX delivery without GO

## 10. Browser validation scenarios (later delivery)
1. Short Nora reply · structured proposal · reload persistence
2. Recommendation card CTAs only from Product
3. EC inspect business-first · missing required blocks Attest
4. Confirm/Exécuter unchanged authority
5. Mobile long content · a11y focus/contrast
6. Empty / loading / error states

## 11. Minimal realization split (recommended, not authorized)
1. **Figma Review** (Morris) on Pre-M6 file + frames A/B/C
2. Presentation DTO / safe structured renderer for Nora (ADAPT ConversationSurface)
3. EC inspection hierarchy ADAPT (pilotContract/Execution + panel)
4. Visual regression + a11y checks · no authority change

## 12. Morris decision required
1. Confirm Pre-M6 Figma `m4g8j0gNbEzfIuH6S9AZJF` as construction source (or designate alternate).
2. Authorize Figma frame production/update for A/B/C if gaps.
3. Separate GO for UX construction; keep TEST-15 fix out of band unless explicitly combined.

## Unique verdict
**UX CADRAGE COMPLETE — READY FOR FIGMA REVIEW**
