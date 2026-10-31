# SFIA Review Pack FULL — AKG-M5 / L3-S2
## Chantier intégré A+B — Positive Product Admission Contract
## Architecture Investigation / Decision Pack

**Horodatage (UTC):** 2026-10-31T20:56:49Z
**Profil:** CRITICAL
**Cycle principal:** 6 — Architecture technique
**Bloc complémentaire:** Conception fonctionnelle du contrat d'admission (sans second cycle)
**Capacité:** V3-F05
**Milestone:** L3-S2 OPEN
**CKC:** `pilots/03-architecture-technique.md` — CANDIDATE (no execution authority)
**GO Morris:** Investigation et conception autorisées — **AUCUN GO d'implémentation structurante**
**Product code mutated this intervention:** **NO PRODUCT DIFF**

---

## 1. Horodatage

- Pack: `2026-10-31T20:56:49Z`
- Delivery WT: `/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01`
- Handoff WT: `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023`
- Prior A+B handoff tip/blob: `481a21bb9f5930c749e6ddc47c05f64520fe4d9f` / `19020663acdb27477c5c707fd2223f5efe0afabd`

---

## 2. Git Truth

| Item | Value |
|------|-------|
| Repo | `mcleland147/sfia-workspace` |
| Delivery branch | `feat/akg-m5-lumen-cog-prepare-corr-01` |
| HEAD | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| origin/main | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| Prior handoff tip | `481a21bb9f5930c749e6ddc47c05f64520fe4d9f` |
| Prior handoff blob | `19020663acdb27477c5c707fd2223f5efe0afabd` |
| Staged | **empty** |
| move_agent_to_root | **NOT USED** |
| Project push / PR / merge | **NONE** |
| Runtime :3020 | **UNTOUCHED** |

**Uncommitted A+B (preserved, not modified this cycle):**
- M: `noraAdaptivePresentation.ts`, `prepareGenericExecutionContractDraft.ts`, `orchestrateTurn.ts`, `ConversationSurface.tsx`, `buildProjectSystemPrompt.ts`, `productExecutionAgentsTools.ts`, `p6.gD4…d0.test.ts`
- ??: `corrA1b01.secured.d0.test.ts`, `lumenCogPrepareCorr01.d0.test.ts`
- M: `.tmp-sfia-review/chatgpt-review.md` (this Decision Pack only)

Git Truth: **COHERENT** with prior handoff (dirty A+B retained).

---

## 3. GO Morris exact

> Investigation et conception autorisées.
> Aucun GO d'implémentation structurante.
> Aucune modification Product.
> Préparer l'arbitrage Morris via Decision Pack FULL + handoff L3 borné.

---

## 4. Convergence Pre-check

| Source | Status |
|--------|--------|
| Template v2.6 | READ |
| Routing + operating model | READ (process) |
| CKC `03-architecture-technique.md` | CANDIDATE |
| Build Doctrine | READ — R3/R4/R6/R22/R23/R24; no parallel architecture |
| Roadmap | READ — L3 GLOBAL OPEN; G-REAL NOT GRANTED; v3 NON ADOPTED |
| C1 product-completion cadrage | READ — reuse M1–M5; Native EC KEEP |
| AKG-M5 `05-…requalification.md` | READ — PREPARE→INSPECT→Exécuter; reuse SHE |
| V3 30/32/33/34/35 | READ — phrase ≠ gate; PREPARE ≠ HD ≠ EXECUTE |
| PRR README + 03/06/07/08/09 | READ — F08 admission; SHE invariants; offer process-local |
| Prior A+B handoff FULL | READ — 219 PASS DET; residual lexical debt; R24 SYNC GATE OPEN |

**Git/code/preuves > PRR.** Handoff A+B citation fix is **local / not PRR-synced** → KNOWN GAP documentation lag.

---

## 5. Trajectoire V3-F05 / L3-S2

- **V3-F05:** conversation → exécution gouvernée (VALIDATED framing; runtime v3 NON ADOPTED).
- **L3-S2:** OPEN. A+B local corrections READY FOR MORRIS REVIEW (prior verdict) — not consumed as implementation of this Decision Pack.
- **Prochaine capacité (si GO):** Positive Product Admission — ADAPT existing F2/F1 gates; not a new OA/engine.
- **Exit proof (futur):** DET matrix S1–S20 + A+B non-regression; LIVE only under separate GO.

---

## 6. Inventaire du mécanisme CURRENT

### Dual entry → single backend

```
Pilote message
  ├─ F2 (orchestrateF2)
  │    analyzeIntent (model JSON + PilotDecisionCandidate NON-AUTH)
  │    → assessGenericPrepareConversationAdmission
  │    → resolveChatFirstGenericPrepareGo
  │         refuse / citation-meta → no_go
  │         explicit_lexical_prepare → mayPrepare
  │         accept + CURRENT offer (session/cycle) → prepare + offerFingerprint
  │    → [qualified + no GO] rememberGenericPrepareRecommendation (offer only)
  │    → [mayPrepare] solicitGenericExecutionPrepare(analysis)  ※ no pilotUtterance
  │
  └─ F1 Nora (orchestrateTurn)
       tool request_generic_execution_prepare
       → refuse/citation gate on content
       → queueGenericPrepareForTurnFinalization (NO EC)
       → after durable writes: solicitGenericExecutionPrepare(mission, pilotUtterance)
            → prepareGenericExecutionContractDraft
                 → buildExecutionContract (draft_inspectable; often validate)
                 → clearPendingGenericPrepareOffer
                 → HD/Attempt NOT created
       → Pilote Inspect → SHE Exécuter (authority / Attempt later)
```

**Single Product admission service:** `solicitGenericExecutionPrepare` → `prepareGenericExecutionContractDraft`.

---

## 7. Code et sources consultés

### Code (working tree = baseline + local A+B)
- `features/project-assistant/orchestrateTurn.ts`
- `features/project-assistant/f2/orchestrateF2.ts`
- `features/project-assistant/f2/intentAnalysis.ts`
- `features/project-assistant/f2/genericExecutionConversationCoordinator.ts`
- `features/project-assistant/f2/types.ts` (`PilotDecisionCandidate`)
- `features/project-assistant/w2/prepareGenericExecutionContractDraft.ts`
- `features/project-assistant/w2/pendingGenericPrepareOfferStore.ts`
- `features/project-assistant/w2/genericMissionDecisionContinuity.ts`
- `features/project-assistant/w2/singleHumanExecutePreparedContract.ts`
- `features/project-assistant/w2/actions.ts` (inspect / SHE)
- `lib/nora-cognitive-runtime/productExecutionAgentsTools.ts`

### Docs
- Build Doctrine, Roadmap, C1, M5 requalification, V3 30–35, PRR 03/06/07/08/09, CKC architecture candidate, prior handoff A+B.

---

## 8. Carte de l'autorité PREPARE (A–J)

| Q | Answer (CURRENT) | Epistemic |
|---|------------------|-----------|
| **A** Who interprets Pilote text? | Model (`analyzeIntent`) + **Product** lexical gates on raw text + optional `PilotDecisionCandidate` (non-auth) | DOCUMENTED + code |
| **B** Pilote vs model data? | Pilote: utterance text. Model: IntentAnalysis, tool mission fields, pilotDecisionCandidate. Product: materiality, capability, EC build | DOCUMENTED |
| **C** Who decides PREPARE? | Product via `mayPrepare` (F2) or finalize after tool queue (F1); cognition **solicits only** | DOCUMENTED |
| **D** Tool mutation point? | Queue: memory only. Mutation: `prepareGenericExecutionContractDraft` → `buildExecutionContract` after turn durable writes | DOCUMENTED |
| **E** Same gates F2 vs tool? | **Shared backend**; **asymmetric pre-gates**. Tool can PREPARE from mission without chat-first offer / explicit lexical GO if no refusal/meta | Code-traced; DET proves refuse/citation fail-closed, not full F1/F2 parity |
| **F** Offer bound? | `projectId` + `sessionKey` (sessdb path) + `cycleInstanceId` + `offerFingerprint` (mission hash). Not EC version | DOCUMENTED |
| **G** After restart? | Offer **lost** (process-local). Durable EC remains if created. Chat-first GO without offer → no_go | DOCUMENTED (KNOWN GAP continuity) |
| **H** Proof after prepare? | Durable EC `draft_inspectable` (+ often validated); constraints PREPARE_WITHOUT_SYSTEMATIC_HD / sheDeferredStructuralAuthority; offer cleared. No HD/Attempt | DOCUMENTED |
| **I** PREPARE without offer? | **Yes** — `explicit_lexical_prepare` and **Nora tool mission path** | DOCUMENTED |
| **J** PREPARE under SHE? | Inspectable; no authority consumed; Exécuter binds inspect + Confirm/Auth/HD as needed; UNKNOWN may prepare, blocks Execute | DOCUMENTED |

---

## 9. Points de mutation

| Step | Mutates? |
|------|----------|
| Intent analysis | No (DTO) |
| rememberGenericPrepareRecommendation | Process-local offer only |
| queueGenericPrepareForTurnFinalization | No EC |
| prepareGenericExecutionContractDraft / buildExecutionContract | **YES — EC** |
| validateExecutionContract | Status transition |
| clearPendingGenericPrepareOffer | Clears ephemeral offer |
| Inspect / SHE Exécuter | Separate later mutations (Confirm/Auth/HD/Attempt path) |

**PREPARE never creates ExecutionAttempt or Authorization.**

---

## 10. Matrice des preuves disponibles

| Evidence class | CURRENT artifact | Trust for Pilote wants PREPARE now? |
|----------------|------------------|-------------------------------------|
| Raw Pilote utterance | Turn `content` | Authentic channel; **meaning not automatic** |
| Lexical refuse / authorize / citation strip | Regex last-act | Fail-closed negatives strong; **positives incomplete** (KNOWN GAP) |
| CURRENT offer + accept (OK) | process-local offer + fingerprint | Strong when offer unique & live; weak after restart |
| pilotDecisionCandidate | Model emit | **NON-AUTHORITATIVE** |
| Nora tool call | Model solicit | **NOT consent** |
| Mission qualification / materiality | Product | Necessary ≠ sufficient for consent |
| Durable EC | OA | Proves prepare happened, not why admitted |
| HumanDecision | OA | Optional before PREPARE; Execute-time under SHE |

Prior A+B DET **219 PASS** = BEHAVIOR PROVEN for lexical refuse/citation + NAP A1 — **not** proof that positive admission is complete.

---

## 11. Cause de l'accumulation regex

TEST-15 / LUMEN iterated **negative** and edge linguistic cases (refusals, temporal last-act, citations, meta-analysis). Each incident added patterns.

**Effect:** good fail-closed patches; **no generic positive consent guarantee**.

**Doctrinal tension:** V3 « phrase conversationnelle ≠ gate » vs Product using phrases as GO for `explicit_lexical_prepare`. Compatible only if phrases are **heuristic admission evidence with known incompleteness**, and ambiguous cases fail closed or require offer-bound accept.

---

## 12. Exigences fonctionnelles / NFR

### Functional
1. No PREPARE mutation from Nora tool alone.
2. Positive Product admission before EC create.
3. Preserve SHE: PREPARE → INSPECT → Exécuter without mandatory HD-before-PREPARE.
4. Direct explicit Pilote prepare remains possible without redundant Confirm CTA.
5. Ambiguous / cited / refused / multi-offer → no_go or clarification.
6. Axis A: analytical answers without undue PREPARE; single Pilot-facing response.

### NFR
- Deterministic Product decision surface.
- Session/project isolation; no cross-bind.
- Restart honesty (no silent stale offer).
- Replay/currentness: fingerprint / LPS stamp already partial.
- Reversibility: ADAPT existing modules; no parallel admission OA.
- No second authority.

---

## 13. Options A / B / C / D

### OPTION A — Offre CURRENT + acte Pilote (accept only)
Nora recommends → offer remembered → Pilote accepts unique CURRENT offer → Product binds fingerprint → PREPARE.

- **Pros:** Strong target binding; less free-text ambiguity.
- **Cons:** Friction for spontaneous « Prépare le contrat… »; regresses chat-first direct lexical GO; tool path still needs a policy.
- **SHE:** Compatible (still no HD-before-PREPARE).
- **Reuse:** offer store, fingerprint, `resolveChatFirstGenericPrepareGo` kind `prepare`.

### OPTION B — Hybride chat-first (RECOMMENDED)
Positive admission = **one** of:
1. Accept bound to unique CURRENT offer (project/session/cycle/fingerprint); or
2. Explicit direct prepare speech-act on **authoritative** spans (interim heuristic + last-act + refuse/citation fail-closed); or
3. (Future optional) explicit UI/event « Préparer » that is **not** HD/Execute.

Nora tool **never** autonomous authorize. Ambiguous / inferred (« On pourrait… ») → clarification or create/refresh offer + ask accept — **not** EC.

- **Pros:** Preserves fluidité + SHE; reuses F2 chat-first; closes tool asymmetry; limits regex growth to fail-closed negatives + narrow positive class.
- **Cons:** Direct lexical positive remains incomplete FR coverage (KNOWN GAP); must not pretend regex = full consent proof.
- **SHE:** Compatible.
- **Reuse:** F2 GO kinds, offer, solicit backend, tool queue finalize; ADAPT tool path to require positive evidence class.

### OPTION C — Confirmation explicite avant tout PREPARE
Every prepare needs distinct confirm event.

- **Pros:** Clearest authority boundary.
- **Cons:** Systematic UX friction; conflicts with SHE intent of inspectable prepare without heavy pre-gates; risks second CTA culture before Inspect/Exécuter.
- **SHE:** Technically possible but **poor fit** with documented « no gratuitous second CTA » / prepare-without-systematic-HD.
- **Reuse:** Would overweight historical Chemin A disposition-before-PREPARE.

### OPTION D — Adaptation plus simple (sans nouvelle structure)
Unify F1 tool finalize under the **same** `resolveChatFirstGenericPrepareGo` / positive-evidence check as F2; stamp `offerFingerprint` or `admissionKind` + turn correlation on EC constraints; keep process-local offer; **do not** add NLP engine or durable admission OA yet.

- **Pros:** Minimal delta; doctrine R22; addresses the worst asymmetry (tool without Pilot prepare signal).
- **Cons:** Alone does not define the full contract language; still leaves lexical positive incompleteness.
- **Relation:** **D is the preferred first implementation slice of B**, not a rival architecture.

---

## 14. Avantages, limites, coûts, dette

| Option | UX cost | Security gain | Complexity | Debt |
|--------|---------|---------------|------------|------|
| A | High for direct asks | High when offer present | Low–med | Restarts still lose offer |
| **B** | Low–med | High if tool gated + offer path kept | Med | Lexical positive residual |
| C | Highest | Highest surface | Med | SHE/UX tension |
| D | Low | High on tool path | Lowest | Contract narrative incomplete alone |

---

## 15. Comparaison et recommandation

**Recommandation unique: OPTION B — Hybride chat-first**, with **OPTION D as first delivery slice** after Morris GO.

**Not adopted** in this cycle (no implementation).

**Rejected as primary:**
- **A alone** — unnecessary friction vs existing explicit lexical GO and SHE.
- **C** — contradicts SHE/UX target for ordinary PREPARE.
- **D alone** — insufficient as the sole named contract; keep as migration step under B.

---

## 16. Contrat conceptuel proposé (non implémenté)

### Layers (conceptual — no new Product type this cycle)

1. **INTENT CANDIDATE** — F2 IntentAnalysis / Nora tool mission. Non-authoritative.
2. **ADMISSION EVIDENCE** — Product-verified positive signal for (action=PREPARE, project, session, cycle?, subject/fingerprint?, turn):
   - `E-OFFER-ACCEPT`: unique CURRENT offer + Pilote accept (text or sealed UI continuity) + session/cycle match;
   - `E-EXPLICIT-PREPARE`: last authoritative speech-act authorize (after strip refuse/citation) — **heuristic class**, documented incompleteness;
   - `E-UI-PREPARE` (optional future): explicit Pilot control ≠ HD ≠ Execute.
3. **PRODUCT DECISION** — only `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft` admits or refuses.
4. **PREPARE RESULT** — EC inspectable or explicit refuse; never Execute.

### Rules
- Missing evidence → no mutation; clarify or remember offer.
- Refusal / citation-meta / multi-offer / session mismatch → NO_GO.
- Nora tool without E-* → NO_GO (closes CURRENT asymmetry).
- Evidence stale if: offer cleared/restarted, cycle mismatch, fingerprint drift, LPS currentness fail at finalize.
- Producer of evidence: Pilote channel or Pilote UI. Verifier: Product only.
- Do **not** treat model metadata as Pilote decision.
- Do **not** invent HD-before-PREPARE.

### Compromis si texte libre insuffisant
Prefer **offer + accept** over expanding regex. For direct commands, keep narrow `E-EXPLICIT-PREPARE` with fail-closed negatives; when uncertain → offer/clarify, not EC.

---

## 17. Matrice S1–S20 (comportement attendu sous Option B)

| # | Scenario | Admission | Evidence | Product result | Clarify? | UX | Invariant |
|---|----------|-----------|----------|----------------|----------|-----|-----------|
| S1 | Analytical ask | NO | none | answer only | no | fluid | ANSWER primacy / Axis A |
| S2 | Cited PREPARE | NO | citation strip/meta | no EC | maybe explain | safe | citation≠consent |
| S3 | Docs contain PREPARE | NO | meta frame | no EC | yes (meaning) | safe | same |
| S4 | Explicit refuse | NO | refuse last-act | no EC | no | clear | TEST-15 |
| S5 | Positive then refuse | NO | last refuse | no EC | no | clear | temporal |
| S6 | Old refuse then new positive | YES* | E-EXPLICIT or E-OFFER | EC possible | no | fluid | last-act / gates |
| S7 | On pourrait préparer… | NO | inferred only | offer/clarify | **yes** | soft ask | no inferred GO |
| S8 | Prépare le contrat pour LUMEN | YES* | E-EXPLICIT | EC if mission ready | if missing fields | direct | SHE prepare OK |
| S9 | OK + unique CURRENT offer | YES | E-OFFER-ACCEPT | EC from offer | no | chat-first | fingerprint bind |
| S10 | OK + multiple offers/subjects | NO | ambiguous | clarify | **yes** | Q19 | no silent pick |
| S11 | Obsolete offer | NO | stale | no EC / refresh | yes | honest | currentness |
| S12 | Wrong session | NO | session mismatch | no EC | yes | isolated | CR-P6-04 |
| S13 | Tool without Pilote prepare ask | NO | tool≠consent | no EC | Nora may propose | safe | **closes CURRENT gap** |
| S14 | Tool after refuse | NO | refuse | no EC | no | safe | already DET |
| S15 | Positive + insufficient scope | NO mutate | evidence ok but readiness fail | clarification | yes | guided | readiness |
| S16 | STRUCTURAL/UNKNOWN | YES* inspectable | E-* + materiality | EC draft; Execute blocked | no | SHE | INV-SHE-STRUCTURAL |
| S17 | After restart, offer lost | NO via accept | no offer | explicit lexical still possible; else clarify | yes | honest | process-local debt |
| S18 | Consent PREPARE ≠ EXECUTE | YES prepare only | E-* | no Attempt/Auth | no | Inspect→Exécuter | PREPARE≠EXECUTE |
| S19 | Facts requalified after prepare | Prepare stands; Execute rechecks | EC + inspect bind | may block Execute | if needed | safe | currentness at Execute |
| S20 | LUMEN analysis + forbid PREPARE | NO prepare; YES answer | refuse | cognitive A1/B only | no | A+B | single response |

\* subject to readiness / materiality / capability gates.

**No LIVE tests in this pack** — matrix is DESIGN TARGET, not BEHAVIOR PROVEN.

---

## 18. Impact sur Single Human Execute

| SHE invariant | Option B impact |
|---------------|-----------------|
| PREPARE no authority | Preserved |
| No systematic HD before PREPARE | Preserved |
| Inspect → Exécuter authority | Untouched |
| No Attempt at PREPARE | Preserved |
| No gratuitous Confirm-before-PREPARE | Preserved (unlike C) |
| Fingerprint bind at Execute | Preserved; optionally strengthen admission stamp at PREPARE |

**PREPARE remains distinct from HD / Confirmation / Authorization / Execute / Evidence.**

---

## 19. Impact sur l'axe A

- Admission must not short-circuit ANSWER / comparison.
- Analytical + cited PREPARE (S1/S2/S20) → rich cognitive response, zero EC.
- No second Pilot-facing response; no forged HumanDecision from presentation.
- Prior A+B complementary provenance rules **KEEP**; this pack does not reopen Axis A.

---

## 20. Chemin de migration minimal (post-GO only)

1. **Slice D under B:** require positive admission evidence before tool finalize (reuse `resolveChatFirstGenericPrepareGo` or shared helper); refuse tool-only.
2. Stamp `admissionKind` + `offerFingerprint?` + turn correlation on EC constraints (ADAPT, not new OA).
3. Keep lexical strip/refuse as **fail-closed**; freeze expansion of positive regex; prefer offer-accept for ambiguous.
4. Optional later: durable offer / PresentedSubject (separate GO) for S17.
5. DET S1–S20 + A+B non-regression; then Morris LIVE GO.

**Files likely ADAPT later (not touched now):**
- `prepareGenericExecutionContractDraft.ts`
- `orchestrateTurn.ts` (finalize/queue)
- `orchestrateF2.ts` (fingerprint assert)
- tests: `lumenCogPrepareCorr01`, `p6.gD4`, `p6.der16`

**KEEP:** pending offer store shape, SHE execute, inspect actions, single solicit backend.
**COMPLETE later:** restart-safe offer (optional).
**REJECT:** parallel NLP admission engine; HD-before-every-PREPARE; second authority.

---

## 21. Plan QA future A+B

- Unit: S2–S9, S13–S14, S20 lexical/admission.
- Product SQLite isolated: EC count / Attempt / HD / Auth assertions.
- NAP non-regression (Axis A).
- Tool vs F2 gate parity tests.
- Restart S17 (document expected no_go).
- LIVE LUMEN only under separate GO — not this cycle.

Prior 219 PASS remains baseline DET for current A+B lexical/NAP — **not** re-run as claim of this architecture pack.

---

## 22. R23 — composants / flux / invariants

| Class | Item | Disposition |
|-------|------|-------------|
| KEEP | `prepareGenericExecutionContractDraft` backend | single admission |
| KEEP | SHE Inspect→Exécuter | authority timing |
| KEEP | offer fingerprint + session key | bind subject |
| ADAPT | tool finalize admission | require E-* |
| ADAPT | F2 assert fingerprint at write | tighten |
| ADAPT | EC constraint stamp admissionKind | auditability |
| COMPLETE (optional later) | durable offer | restart |
| REJECT | parallel classifier / second PREPARE authority | doctrine R6 |

Invariants: solicit≠admit; PREPARE≠EXECUTE; tool≠consent; phrase≠certainty; single-response Axis A.

---

## 23. R24 — impacts documentaires (SYNC GATE OPEN)

| Volume | CURRENT | TARGET under B | Action |
|--------|---------|----------------|--------|
| PRR 03 | F08 dual entry; tool solicit | Document positive evidence classes; tool no autonomous GO | Sync after GO |
| PRR 06 | Offer process-local | Honest S17; optional durable later | Sync |
| PRR 07 | SHE + INV-OFFER-NE-AUTH | Add citation≠consent; tool≠consent; E-OFFER / E-EXPLICIT | Sync |
| PRR 08 | Proof map | Map S1–S20 + lumenCog suites | Sync |
| PRR 09 | REAL/LIVE gaps | Lexical incompleteness residual; admission debt | Sync |
| Roadmap | L3 OPEN | Note Decision Pack; no close | Gate |
| Digests | — | Not updated | Gate |

**R24 IMPACT QUALIFIED — SYNC GATE OPEN.** No PRR/Roadmap/doctrine files modified.

---

## 24. KEEP / ADAPT / COMPLETE

See §22. Summary: **reuse SHE + offer + single backend; ADAPT tool/F2 positive evidence; COMPLETE durability only under separate GO; REJECT parallel engines.**

---

## 25. Trajectoire, dette, exit proof

**Trajectoire:** Decision Pack → Morris arbitrate B(+D slice) → implementation GO in same chantier A+B → DET S1–S20 → optional LIVE.

**Dette:**
1. Lexical positive incompleteness (FR).
2. Process-local offer restart.
3. Tool/F2 asymmetry (CURRENT) until D slice.
4. PRR lag vs local A+B citation fix.
5. offerFingerprint not strictly re-asserted at EC write in F2.

**Exit proof (future implementation):**
- S13 tool-without-ask → no EC (BEHAVIOR PROVEN).
- S8/S9 still prepare without HD (SHE).
- S2/S4/S20 no EC + Axis A answer.
- No Attempt/Auth at PREPARE.
- tsc/lint/DET green.

---

## 26. Gates Morris et décisions attendues

| Decision | Options |
|----------|---------|
| Adopt Option B as TARGET contract? | YES / NO / AMEND |
| Authorize implementation slice D under B? | GO / NO-GO |
| Require durable offer before any further PREPARE UX work? | NOW / LATER / NEVER |
| Keep `E-EXPLICIT-PREPARE` lexical class? | KEEP narrow / REPLACE by offer-only (≈A) |
| PRR R24 sync after accept? | GO docs / defer |
| LIVE revalidation | NOT NOW |

**Not granted:** architecture adopted as runtime truth; implementation READY; Git Integration; L3-S2 CLOSED; v3 ADOPTED; G-REAL.

---

## 27. Git Review Index

| Artefact | Value |
|----------|-------|
| Pack local | `.tmp-sfia-review/chatgpt-review.md` |
| Canon | `sfia-review-handoff/latest-chatgpt-review.md` |
| Branch | `sfia/review-handoff` |
| Prior tip/blob | `481a21bb…` / `19020663…` |
| New tip/blob | *post-publish* |
| Delivery | `feat/akg-m5-lumen-cog-prepare-corr-01` @ `7dd49ecd` + dirty A+B preserved |
| Product diff this cycle | **NONE** |

---

## 28. Verdict

**POSITIVE PRODUCT ADMISSION — ARCHITECTURE QUALIFIED — MORRIS DECISION REQUIRED**

- CURRENT reconstructed (A–J).
- Options A/B/C/D compared.
- **Recommend B** (hybrid), first slice **D**.
- SHE invariants preserved; Axis A not reopened.
- Contrat conceptuel + S1–S20 + migration + R24 gate OPEN.
- **NO PRODUCT DIFF**; A+B local corrections untouched.
- Fake/Real: analysis only; OpenAI LIVE / Cursor REAL NOT EXERCISED; prior 219 PASS not reclaimed as new proof.

Anti-claims: Local ≠ main · Design ≠ Implemented · DET ≠ LIVE · PREPARE ≠ AUTHORIZE ≠ EXECUTE · Review Handoff ≠ project push · L3-S2 OPEN · G-REAL NOT GRANTED · runtime v3 NON ADOPTED.

STOP after handoff publication + remote verification.
