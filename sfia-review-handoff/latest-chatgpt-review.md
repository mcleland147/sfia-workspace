# Review Pack FULL — P6 Nora Cognitive Autonomy Remediation Scoping 01

at: 2026-10-12T03:51:59Z
level: FULL
profile: Critical
cycleType: 9 — QA / validation (continuation P6)
campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
pass: P6 NORA COGNITIVE AUTONOMY — REMEDIATION SCOPING 01
macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
mode: SCOPING ONLY — no Product fix, no new tests, no REAL

---

## 1. Local Git Truth Check

| Check | Result |
|---|---|
| workspace | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| remote | origin https://github.com/mcleland147/sfia-workspace.git |
| branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| origin/main | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| left-right | 0 0 |
| staged | none |
| dirty | `.tmp-sfia-review/chatgpt-review.md` (this pack) |
| untracked preserved | `p6.nora.maxTurns.documentary.d0.test.ts` (prior qualification) |
| Product lib/features | **unchanged** |
| prior handoff tip | `4c1acd7d` — **not superseded** |

STOP Git: not triggered.

---

## 2. Convergence Pre-check

- Build Doctrine / Roadmap / C1 / v3 framing 30·33·34 / CKC 09 / Nora trajectory 08 / P2·P4·P6: READ ONLY.
- Milestone: **P6 IN PROGRESS** · P6 GLOBAL PASS **NO** · Runtime v3 **NON ADOPTED**.
- Trajectoire: MIN-09 Human incident → maxTurns DETERMINISTIC QUALIFICATION (`4c1acd7d`) → **this scoping** → Morris decision → éventuel Delivery incrémental → P7 Fresh Project Replay sous conditions de sortie P6.
- SFIA v2.6 = processus externe seulement.

---

## 3. Synthèse preuves P6 maxTurns (réutilisées)

Re-exec local (cette passe): `p6.nora.maxTurns.documentary.d0.test.ts` → **8/8 PASS**.

| V | Résultat |
|---|---|
| V1 | default maxTurns=5; séquence 7 tours → incomplete + limitReached |
| V2 | maxTurns=12 test-only → complete en 7 tours (≠ reco prod) |
| V3 | clamp campagne / protections / MW6+Runner négatifs |
| V4 | A new request PROVEN; B Product RunState NOT WIRED; C autonome NOT IMPLEMENTED |
| V5 | A supported (Scripted); B indicated; C not found |

Niveau: DETERMINISTIC EVIDENCE REUSED. **Pas** REAL GDR quality.

---

## 4. Call graph défaut maxTurns → Product

```
Pilote send
  → orchestrateTurn (features/project-assistant/orchestrateTurn.ts)
       runNoraCognitiveTurn(...)
         → decideCognitiveStrategy / cognitiveRoutingPolicy (effort/model; NOT maxTurns)
         → runNoraCognitiveCore (noraCognitiveCompletion.ts)
              → runNoraAgentsTurn (runNoraAgentsTurn.ts)
                   requestedMaxTurns = input.maxTurns ?? CT_MAX_TOOL_ROUNDS+1  // =5
                   campaign? clampRunnerBudgetForCampaign
                   runner.run(..., { maxTurns, errorHandlers.maxTurns })
                   on ceiling: budget.limitReached=true
                     text = lastText || "Model-turn budget reached (maxTurns)."
                     includeInHistory: false
                   return { ..., limitReached, text, toolCalls, toolRounds, structuredOutput? }
         → finalizeTurn spreads turnBase (limitReached retained on NoraCognitiveTurnResult)
       orchestrateTurn status =
         cognitiveStop ? "cognitive_stop" : "ok"   // ← does NOT read limitReached
       return { ok:true, status, text, toolRounds, toolCalls, ... }
         // ProjectAssistantSendSuccess has NO limitReached field
  → ProjectAssistantPanel shows text + ephemeralNotice; treats success path
```

Constants (confirmed prior + code):
- `CT_MAX_TOOL_ROUNDS=4`, `CT_MAX_TOOL_CALLS_PER_ROUND=4` (`lib/platform/tools/types.ts`)
- default Agents maxTurns = 5 (`runNoraAgentsTurn.ts` ~404)

---

## 5. AXE P0 — Product status / false completion

### 5.1 Faits vérifiés (fichier / fonction / lignes)

| # | Fait | Preuve |
|---|---|---|
| 1 | `limitReached` produit dans Runner | `runNoraAgentsTurn.ts` ~612, ~841 |
| 2 | Message Product-visible possible | errorHandlers ~628–631 `"Model-turn budget reached (maxTurns)."` — matches Human MIN-09 |
| 3 | Champ présent sur `NoraCognitiveTurnResult` | `types.ts` L34 |
| 4 | Propagé via core/finalize | `turnBase` spread `runNoraCognitiveTurn.ts` ~912–940 / ~1092–1109 |
| 5 | **Perdu à la frontière Product DTO** | `ProjectAssistantSendSuccess` (`types.ts` ~196–215) — **pas de `limitReached`** |
| 6 | **status ignore limitReached** | `orchestrateTurn.ts` ~1417–1420: only `cognitiveStop` → else **`"ok"`** |
| 7 | Transport success | same return ~1428–1429 `ok: true` |
| 8 | Cognitive Stop gates LR | ~1092–1097 `!cognitiveStopActive` required for LR candidate |
| 9 | maxTurns string path fail-closed | `runNoraAgentsTurn.ts` ~666–668 + `buildFailClosedProductTurnJson` → LR/ACW/`journalDelta` **null** |
| 10 | Transcript still records assistant text | `orchestrateTurn.ts` ~1375–1378 appendPilotTranscriptTurn |
| 11 | ephemeralNotice ignores limitReached | `buildEphemeralNotice` ~102–123 — MemoryB/Stop/LR notices only |

### 5.2 Impact

- **False success at status layer: PROVEN (static + type contract).**
  A maxTurns stop can surface as `ok:true` / `status:"ok"` while analysis incomplete.
- Human still may *see* the budget string in `text` (as in MIN-09) — so this is **not** total silent success of content; it is **status/transport honesty** gap + missing structured incomplete signal for UI/automation.
- **Undue LR/ACW materialization on string maxTurns path: MITIGATED** by fail-closed JSON (LR/journal null).
- **Residual gap:** `limitReached` does not participate in cognitive-stop / materialization gates; any future non-string finalOutput under budget stop would need explicit fail-closed. **Not claimed as current REAL exploit** without further test.
- Durable effect still possible: transcript stores stop/partial text as normal assistant turn (A-style continuity, not resume).

### 5.3 Couverture de test

- Existing det. maxTurns tests prove Runner `limitReached` + message semantics.
- **Gap:** no orchestrateTurn test asserting `limitReached ⇒ status≠ok` / DTO field. Smallest next test (future Delivery/QA): orchestrateTurn Fake/Scripted maxTurns → expect non-ok or explicit incomplete status + no LR write.

### 5.4 Correctif minimal candidat (NON IMPLÉMENTÉ)

1. Propagate `limitReached` on Product success DTO (or map to new status e.g. `budget_limit` / `incomplete`).
2. Do not emit `status:"ok"` when `turn.limitReached===true`.
3. Optionally surface Pilote ephemeralNotice for budget stop.
4. Keep fail-closed materialization; optionally hard-gate LR/ACW/journal on `limitReached`.

### 5.5 Critères de preuve P0

- Det. orchestrateTurn: maxTurns ⇒ incomplete status + no HD/LR inventés.
- UI: Pilote cannot confuse stop with full GDR completion.
- No REAL required for P0 acceptance (Fake/Scripted sufficient).

---

## 6. AXE P1 — Adaptive Runner budget

### 6.1 Actifs existants

| Asset | Role today | Couples to maxTurns? |
|---|---|---|
| `cognitiveWorkloadPolicy.ts` | Strategy Class + reasoning effort envelope | **NO** |
| `cognitiveRoutingPolicy.ts` | Model × effort Quality Floor | **NO** |
| `turnBudget.ts` | per-turn tool slots (4) | separate from model maxTurns |
| `campaignBudget.ts` | hard caps / clamp requestedMaxTurns | YES (ceiling only) |
| `TurnWorkloadContext` | length/history/criticality signals | feeds CWP, not turn count |

### 6.2 Signaux disponibles vs manquants

Available: ambiguity/breadth/depth (CWP), context size proxies, campaign remaining, toolDivergence caps.
Missing for honest adaptive maxTurns: predicted tool-round demand, document-set size/version plan, explicit mission completeness criteria, USD remaining coupling to turn ceiling, Pilote-visible budget disclosure.

### 6.3 Options (candidates — not selected)

| Opt | Description | Pros | Cons |
|---|---|---|---|
| A Maintain ceiling=5 | FinOps safe, known | Fails GDR-class Scripted (V1); Human incident |
| B Server workload-adapted maxTurns | Can finish V2-class workloads; reuse CWP/routing signals | Needs honest signals; FinOps risk if naive; ≠ fixed 12 |
| C B + controlled continuation | Best resilience for long missions | Highest complexity; depends P2 |

**Do not recommend fixed production=12.** Any B must: Quality Floor first, campaign/USD clamp, measurable completion uplift, no bypass of hard caps.

### 6.4 Correctif minimal candidat P1 (NON IMPLÉMENTÉ)

Derive bounded `requestedMaxTurns` from existing strategy/workload **without** CW0–CW3 taxonomy; always clamp via campaignBudget; observability of applied vs requested; regression suite extending maxTurns documentary cases.

---

## 7. AXE P2 — Controlled cognitive continuation (R22)

### 7.1 OpenAI native (installed)

- `@openai/agents` **0.17.0**; `agents-core` exports **`RunState`**, `MaxTurnsExceededError`.
- `Runner.run(agent, input | RunState, { maxTurns, session, errorHandlers })`.
- `RunState.toString` / `fromString` / `fromStringWithContext` for serialize/resume.
- Schema versions document mid-turn resume precision limits (see runState.d.ts history).

### 7.2 Product compatibility

| Concern | Status |
|---|---|
| Existing Runner | Compatible at SDK layer |
| Product `runNoraAgentsTurn` | Accepts **string** `userContent` only — **no RunState input/output** |
| errorHandlers.maxTurns | Swallows error → text; `includeInHistory:false`; **does not return state** |
| Sessions ProductSqliteSession | Conversational continuity (A), not execution resume (B) |
| Tool adapters SFIA | Would need identical tool graph + workspace on resume |
| Campaign budget | Must re-clamp on resume; no bypass |
| AbortSignal / logicalTurnId | Must bind to same cognitive task identity |
| Duplicate tool effects | READ tools mostly idempotent; still need provenance |
| Governed Product effects | Must remain gated (HD/Confirm) — continuation ≠ authority |

### 7.3 Distinctions A/B/C (conserved)

| | Meaning | Product today |
|---|---|---|
| A | New request in existing session | AVAILABLE |
| B | Native resume of prior RunState | SDK yes / Product **NOT WIRED** |
| C | Autonomous full mission continuation | **NOT IMPLEMENTED** |

Do not build second Runner / parallel store / budget bypass.

### 7.4 Caveat

**Do not assume RunState auto-resumes after handled maxTurns.** Product handler currently prevents throwing `MaxTurnsExceededError` with attachable state to callers. Wiring B likely requires changing how maxTurns is handled (capture state before/without swallowing) — **Morris architecture decision**, not this pass.

---

## 8. Long-memory articulation

| Need for mission resume | Available today? |
|---|---|
| Initial user intention | Transcript / session (A) |
| Documents/versions read | ReadCoverage remember path (session); EventSink tool events partial |
| Coverage aggregate | `readCoverage.ts` + mw4 surface when facts supplied |
| Intermediate conclusions | Only if present in transcript text — not structured mission state |
| Remaining questions | NOT as durable mission object |
| Execution RunState | NOT persisted by Product |
| Budgets consumed | Campaign process-local lease (not cross-process mission binder) |
| Resume conditions | NOT formalized |

**Memory conversational ≠ mission execution state.** Prefer COMPLETE on existing session/ReadCoverage/Journal pointers before new stores. RunState serialize is the native execution-state candidate if B is chosen.

---

## 9. OpenAI Capability Fit Check (R22)

| Item | Qualification |
|---|---|
| Need | Multi-source autonomous continuous documentary analysis |
| OpenAI available | Agents Runner, maxTurns, errorHandlers, Session, RunState serialize/resume, tools |
| SFIA assets | KEEP Runner path, turnBudget, campaignBudget, CWP/routing, ReadCoverage, Session |
| Gaps | Product status honesty (P0); maxTurns not workload-coupled (P1); RunState not wired (P2); mission completeness semantics |
| Options | **COMBINE** OpenAI native + SFIA governance; **COMPLETE** thin Product seams; **DEFER** second engine / CW taxonomy / fixed-12 |
| Selection | **None adopted** — Morris GO required |

---

## 10. Matrice KEEP / ADAPT / COMPLETE / DEFER

| Asset | Class |
|---|---|
| Agents Runner Option C | KEEP |
| CT_MAX_* hard safety defaults | KEEP as floors/safety; ADAPT only via explicit policy |
| campaignBudget clamps | KEEP |
| CWP + routing (effort/model) | KEEP; ADAPT if feeding turn budget signals |
| turnBudget per-turn tools | KEEP |
| maxTurns errorHandlers graceful text | ADAPT (status + optional state capture) |
| Product DTO status | COMPLETE (incomplete/budget signal) |
| RunState resume wiring | COMPLETE or DEFER (Morris) |
| New agent engine / store | DEFER (forbidden parallel) |
| Fixed prod maxTurns=12 | DEFER |

---

## 11. Comparaison options remédiation

| Package | Complexity | Risk | Cost | User value | Deps |
|---|---|---|---|---|---|
| P0 only | Low | Low | Low | High honesty | none |
| P0+P1 | Medium | FinOps if mis-tuned | Medium | Completes more single-run GDR | signals |
| P0+P1+P2 | High | Resume correctness / dup tools | Higher | Long missions survive ceilings | SDK RunState + persistence policy |
| P2 without P0 | High | Still false-ok UX | — | Poor | — |

---

## 12. Séquencement minimal proposé (recommandation ≠ décision)

1. **Increment 0 — P0 status honesty** (must-first).
2. **Increment 1 — P1 adaptive requestedMaxTurns** with campaign/USD clamp + det. proofs (no fixed 12).
3. **Increment 2 — P2 native continuation** only if Product still needs post-ceiling mission resume after P1; R22 RunState; no second engine.
4. Re-open Human/REAL GDR (MIN-09) only after P0 (+ agreed P1/P2) with explicit REAL GO.

---

## 13. Exit Proof candidats

| Increment | Exit Proof |
|---|---|
| P0 | Det. orchestrateTurn: limitReached ⇒ non-ok/incomplete; DTO exposes signal; no LR invent; UI checklist |
| P1 | Same documentary Scripted needing >5 completes under policy-derived budget; campaign clamp still holds; FinOps observe |
| P2 | Det. resume from captured state continues tools without dup authority; abort/campaign safe; A≠B≠C documented |
| REAL GDR | Separate GO; not this scoping |

---

## 14. Dette / sortie

- MIN-09 REAL still open.
- Untracked maxTurns test not project-committed.
- P6 GLOBAL PASS still NO until mandatory MINs + agreed remediations dispositioned.
- P7 Fresh Project Replay remains next Roadmap capacity **subject to P6 exit conditions**.

---

## 15. Tests avant tout GO REAL

- P0 orchestrateTurn Fake/Scripted maxTurns status test (to create in Delivery/QA cycle — **not this pass**).
- Keep/extend `p6.nora.maxTurns.documentary.d0.test.ts`.
- Campaign clamp + no false completion under raised budget.
- If P2: serialize/resume det. with SFIA tools + budget.
- REAL GDR only after Morris GO.

---

## 16. Gates Morris / décisions ouvertes

1. Accept this scoping.
2. Authorize **P0 Delivery** (status honesty) — recommended first.
3. Choose P1 now / later / never (no fixed-12).
4. Choose P2 RunState COMPLETE vs DEFER.
5. Commit prior untracked maxTurns test to project? (yes/no).
6. REAL MIN-09 retest GO — deferred until P0 at minimum.

---

## 17. Prochaine capacité Roadmap

**P7 — Fresh Project Replay**, sous réserve conditions de sortie P6 (dont disposition MIN-03 Review accept + remédiation autonomie cognitive selon choix Morris).

---

## 18. Recommandation argumentée (≠ décision)

Prioriser **P0** immédiatement: le gap `status:"ok"` / absence DTO `limitReached` est **prouvé** et explique une confusion succès/arrêt même quand le texte budget est visible (MIN-09).

Ensuite **P1** pour les workloads documentaires multi-tours, en réutilisant CWP/routing **sans** taxonomie CW obligatoire et **sans** valeur magique 12, toujours sous `campaignBudget`.

**P2** seulement si les missions doivent survivre un plafond après P1 — via **ADAPT/COMPLETE** native RunState (R22), pas un second moteur.

Combined reading of prior V5: **A+B remain jointly relevant**; this scoping adds that **P0 is prerequisite honesty** before claiming either remediates Product UX.

---

## 19. Fake / Real Qualification

Applicable: YES.
Evidence: STATIC QUALIFIED + DETERMINISTIC EVIDENCE REUSED (8/8 re-exec).
REAL: not run.
Forbidden claims avoided.

---

## 20. Fichiers

Product: **none modified**.
Created: this pack; `p6-nora-remediation-scoping/scoping-summary.json`; ledger append.
Prior untracked test: **preserved**.

---

## 21. Verdict

**P6 NORA REMEDIATION SCOPING COMPLETE — READY FOR MORRIS DECISION**

P6 GLOBAL PASS NO · Runtime v3 NON ADOPTED · Remediation **not** implemented.

---

## 22. scoping-summary.json

```json
{
  "passId": "P6 NORA COGNITIVE AUTONOMY \u2014 REMEDIATION SCOPING 01",
  "at": "2026-10-12T03:51:59Z",
  "baseline": "f31bb8f610802c102edbe68889fb8ecf0339ec28",
  "priorHandoff": "4c1acd7d95e82ef3cb147225172040d1e9ac7c66",
  "priorHandoffSuperseded": false,
  "productMutation": false,
  "newTests": false,
  "realCalls": false,
  "untrackedTestPreserved": "projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts",
  "reexec": {
    "file": "p6.nora.maxTurns.documentary.d0.test.ts",
    "passed": 8,
    "failed": 0
  },
  "p0FalseSuccess": "PROVEN_AT_STATUS_LAYER \u2014 ok:true/status:ok ignores limitReached; limitReached absent from Product DTO",
  "p0UndueMaterialization": "MITIGATED_ON_STRING_MAXTURNS_PATH \u2014 fail-closed LR/ACW/journal null; NOT fully gated by limitReached elsewhere",
  "recommendationSequence": [
    "P0 status honesty",
    "P1 adaptive budget (signals)",
    "P2 native RunState continuation if needed"
  ],
  "verdict": "P6 NORA REMEDIATION SCOPING COMPLETE \u2014 READY FOR MORRIS DECISION"
}
```

---

## 23. Instruction ChatGPT

Lire handoff distant `sfia-review-handoff/latest-chatgpt-review.md`.
Vérifier Git, findings P0/P1/P2 avec refs code, options, recommandation, Exit Proof, décisions Morris, SHA/blob, absence mutation Product.
