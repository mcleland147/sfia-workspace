# ChatGPT Critical Evidence Review — Stage A W-Sources post-CORR-04 REAL

## 1. UTC timestamp

2026-09-06T10:15:41Z (pack assembly). Campaign started ~2026-09-06T10:15:01Z.

## 2. Cycle

- Cycle 9 — QA / validation
- Typologie: EVOL
- Profil: CRITICAL
- Cycle ID: `NORA-GLOBAL-MR-STAGE-A-W-SOURCES-POST-CORR04-REAL-01`

## 3. Morris GO consumed exactly

`GO MORRIS — STAGE A REAL CONTINUATION — 9 W-SOURCES BASE CELLS ONLY — POST-CORR-04 — PUBLISH REVIEW HANDOFF`

Interpretation enforced: exactly 9 campaign base cells; Luna/none NOT rerun; zero other workloads; zero selective repeats; no Stage B/C.

## 4. Git truth

| Field | Value |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-global-mr-stage-a-real-wsources-02` |
| Branch | `run/sfia-studio-global-mr-stage-a-real-wsources-02` |
| HEAD | `586480af178df5dd2f7177cae8f6b1ac18fe4acc` |
| origin/main | `586480af178df5dd2f7177cae8f6b1ac18fe4acc` |
| Status before/after | tracked diff empty; only untracked `.tmp-sfia-real/**` + `node_modules` symlink |

## 5. Current merge-closure input

`ed74c648a7b482aaf5ecbc3fac00870bb28f2921` (CORR-04 merge-closure handoff tip at cycle start).

## 6. Prior Stage A REAL input

`70210fb3b7a8a2862bbf1667ef2afa65e4b42528` — prior continuation Evidence handoff.

Prior campaign artifacts: `nora-global-mr-stage-a-cont-1788683505786` (carry-in SoT).

## 7. Convergence qualification

| Dimension | Statement |
|---|---|
| Capability | Nora Global Model × Reasoning Stage A — W-Sources hosted REAL comparative completion |
| Milestone | Post-CORR-04 Memory B × MW6 session compatibility REAL revalidation + 9 missing W-Sources cells |
| Assets/dispositions | CORR-04 on main; historical 51 accepted base cells; Luna/none hosted anchor retained |
| Gap | 9 W-Sources PRODUCT_PATH failures still superseded; this cycle attempted controlled replacement |
| Dependencies | OpenAI entitlement; MW6 governed path; Memory B DEFAULT compaction; Review Handoff L3 |
| Trajectory | Evidence → ChatGPT Critical Review → Morris Stage A disposition |
| Exit proof | Valid hosted REAL parity on controlled pre-compacted sessions for the 9 cells (not achieved this cycle) |
| Debt/reserves | Session-state reserve on historical Luna/none; F2 scorer-depth reserve; baseline-recipe narrative confounder (this cycle) |
| Next gate | ChatGPT Critical Evidence Review → Morris |

## 8. Contract identity

| Field | Value |
|---|---|
| Document | `projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md` |
| Blob | `0bb67254a08d7c97f40dc5a5dff9537d44e10366` |
| Version | `global-mr-campaign-contract-v3-candidate` |
| Caps | 78 / 438 / 26 / 464 |
| FinOps | 15 / 18 / 20 USD |
| Envelope | primary 54 + Astra 6 = 60 base; immutable |

## 9. Current public provider snapshot (2026-09-06)

| Model | Efforts | Pricing (in/out USD/MTok) |
|---|---|---|
| gpt-5.6-luna | none/low/medium/high/xhigh/max | 0.20 / 1.20 |
| gpt-5.6-terra | none/low/medium/high/xhigh/max | 2 / 12 |
| gpt-5.6-sol | none/low/medium/high/xhigh/max | 4 / 20 |
| gpt-6-astra | low/medium/high/xhigh/max (**NO none**) | 10 / 50 |

Web Search fixed fee 0.01 USD/call + search-content tokens at model rates.

**Public capability ≠ account entitlement.**

## 10. Authenticated provider preflight

One minimal `responses.create` per exact model ID (Astra effort=medium; others primary effort=none).

| Model | Effort | Success | Response ID | Usage in/out/reason | Est. USD |
|---|---|---|---|---|---|
| gpt-5.6-luna | none | OK | `resp_09faba0b68761f17006a9d3d02476087d285f6a0d4d5299ef9` | 11/5/0 | 0.0000082 |
| gpt-5.6-terra | none | OK | `resp_0d85f8128d2b7549006a9d3d0368d887d2bd8e7590de0f118a` | 11/5/0 | 0.000082 |
| gpt-5.6-sol | none | OK | `resp_0a7ceb21cdbe08de006a9d3d04b5cc87d2a25923c9c9f7cf40` | 11/5/0 | 0.000144 |
| gpt-6-astra | medium | OK | `resp_0afecba5730f5a6a006a9d3d059f4c87d2a173e5c26716929c` | 11/5/0 | 0.000360 |

- primaryOk=true · astraOk=true
- estimatedUsdTotal=`0.0005942`
- SHA256 preflight: `2c914073ba833a4a3889ccd2371dfc221ab2ada5d283e84ea8d1a05e1c1c60f3`
- **No secrets printed.**

## 11. Historical carry-in

| Metric | Value | Source |
|---|---|---|
| USD | **3.56536235** | prior `campaign-summary.json` (verified ±1e-6) |
| model invocations | 65 | same |
| hosted operations | 1 | same |
| aggregate REAL calls | 65 | same |
| selective repeats | 5 | same |

Prior campaign: `nora-global-mr-stage-a-cont-1788683505786`.

NEW_CARRY_IN_USD (driver) = `3.56536235 + 0.0005942 = 3.56595655`.

## 12. Exact 9-cell selected manifest

Campaign: `nora-global-mr-stage-a-wsources-post-corr04-1788689701218`

1. gpt-5.6-luna \| medium \| W-Sources (CANARY)
2. gpt-5.6-luna \| high \| W-Sources
3. gpt-5.6-terra \| none \| W-Sources
4. gpt-5.6-terra \| medium \| W-Sources
5. gpt-5.6-terra \| high \| W-Sources
6. gpt-5.6-sol \| none \| W-Sources
7. gpt-5.6-sol \| medium \| W-Sources
8. gpt-5.6-sol \| high \| W-Sources
9. gpt-6-astra \| medium \| W-Sources

All: scenario `mw6.s02.read-search-partiality-failclosed` / `global-mr-catalog-v1` / runIndex=0 / mw6_governed / attachHostedWebSearch=true / isSelectiveRepeat=false.

selected-cells.json SHA256: `df08b9429e76a267633d6c0ea85b7a202ffca75c7b7a28ad0af555a0ad3b2330`

## 13. Explicit assertions

- Luna/none **NOT** rerun
- Zero other workloads
- Zero selective repeats materialized
- Launcher hard allowlist = 9 keys only

## 14. Session-control methodology

- Baseline recipe SHA-256: `2947caadadf8e32e5053e9d0721974c064aaa0df500a26575bb7a88214517d9e`
- Policy: **DEFAULT_COMPACTION_POLICY** (`itemThreshold: 8`, `keepRecentCount: 2`, `maxSummaryChars: 1200`)
- Per cell: independent ProductSqliteSession DB + independent product DB/runtime (option A)
- Seed: 10 deterministic local history items → `applyCompactionIfNeeded` → raw `sfia_memory_b_compaction` present; MemoryBSessionView excludes marker
- Truth C: `lpsId`/`lpsVersion` from seeded project (CORR-04 wiring on MW6 path)
- CLAIM continuity: `corroborate externally the current CEO of Acme Corp`

**Baseline narrative note (blocker contributor):** seed retained wording that external discovery “requires confirmed MW6 ExecutionContract.” Server-side EC was confirmed and `realAuthorized=true`, but the model narrated EC as unavailable and did not call hosted web_search.

## 15. CORR-04 REAL canary (Luna medium)

| Check | Result |
|---|---|
| Path traversed | YES — `runMw6GovernedNoraProductTurn` → Agents |
| `Unsupported sfia_memory_b_compaction` | **ABSENT** |
| memoryBCompactionState | `compacted_with_loss` |
| realAuthorized | **true** |
| authorityBound | **true** |
| realPreflightCode | OK |
| hosted canonical | **0** |
| hosted factual | **0** |
| hosted live | **0** |
| Hosted parity | 0=0=0 (parity trivial; **boundary not observed**) |
| Canary integrity (contract ≥1 hosted) | **FAIL** |

**Partial CORR-04 verdict:** Memory B marker compatibility on MW6 REAL path is **path-positive** (no Unsupported crash). Full “CORR-04 REAL REVALIDATION = PROVEN ON BOUNDED PRE-COMPACTED MW6 PATH” **with hosted boundary** is **NOT** claimed — canary integrity failed.

**STOP — POST-CORR04 W-SOURCES REAL CANARY FAILED** — remaining 8 cells **not** executed (per contract).

## 16. FULL cell table

| # | Model | Effort | passFail | failureClass | product-path | scorers | tokens | latency ms | USD Δ | hosted c/f/l | realAuth | authBound | baseline hash | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | gpt-5.6-luna | medium | NOT_PROVEN | MISSING_OBSERVABLE | OK (no NORA_TURN_ERROR) | 4 hard MW6 PASS (text-heuristic) | n/a (usage null; budget settled) | 3791 | ~0.00224 | 0/0/0 | true | true | `2947caad…` | Model refused search: claimed EC missing despite server auth; W_SOURCES_HOSTED_BOUNDARY_NOT_OBSERVED |
| 2–9 | — | — | NOT RUN | — | — | — | — | — | — | — | — | — | — | STOP after canary |

Raw summary excerpt (cell 1): model stated confirmed MW6 ExecutionContract “none is available in this session” and “No external source observations this turn.”

## 17. Raw Evidence artifact paths + SHA256

Directory:
`/Users/morris/Projects/sfia-workspace-global-mr-stage-a-real-wsources-02/projects/sfia-studio/app/.tmp-sfia-real/nora-global-mr-stage-a-wsources-post-corr04-1788689701218/`

| Artifact | SHA256 |
|---|---|
| selected-cells.json | `df08b9429e76a267633d6c0ea85b7a202ffca75c7b7a28ad0af555a0ad3b2330` |
| session-baseline-manifest.json | `4f4555e7571fdbc5651bb686cb01b3299607fd98d64f75aeaa7f135dac322cb0` |
| run-evidence.jsonl | `54fd215088551a2486422fa36f0b3b59ae26c948d065ef673b0c6f48e9fa031b` |
| campaign-summary.json | `47150a87ca6263e2ae1552c31c44d4dbe081fff044d47fb7fd51340ef76c7dab` |
| budget-ledger.json | `832a546cd4904ec151993c1d5d601bd7c7b1645bc0a668256ee44772bde79a57` |
| combined-stage-a-evidence.json | `53cc291fe04c3a125c608970f5ab6c2aea850cac48875e9b86c654905348d123` |
| stage-a-wsources-analysis.md | `642a0dd21c9150a139e6cc3fdd8af3283fb3c89ba84415f1fde950a4b1d8a8fd` |
| continuation-report.md | `92ef348ad93a6e70ed78cfff4966c2df336a91b7522c12a925049549165fb0e5` |
| provider-inference-preflight.json | `2c914073ba833a4a3889ccd2371dfc221ab2ada5d283e84ea8d1a05e1c1c60f3` |

Also: aborted first campaign id `…1788689678732` (EC confirm fail under Critical profile seed — zero REAL cells; Standard used thereafter).

## 18. New campaign counters

| Counter | Value |
|---|---|
| model invocations | 1 |
| hosted operations | 0 |
| aggregate REAL calls | 1 |
| selective repeats | 0 |
| cells completed | 1 |
| stopReason (driver) | NONE |
| stopLabel (launcher) | `POST_CORR04_W_SOURCES_REAL_CANARY_FAILED` |

## 19. Cumulative Stage A counters (provenance)

| Counter | Value |
|---|---|
| model | 66 / 438 |
| hosted | 1 / 26 |
| aggregate | 66 / 464 |
| repeats | 5 / 18 |

## 20. Budget

| Item | USD |
|---|---|
| Prior carry-in | 3.56536235 |
| Preflight | 0.0005942 |
| New campaign increment (observed cumulative − carry) | ~0.00224 |
| Final cumulative | **3.56819655** |
| Policy | 15 / 18 / 20 |
| Invoice | **NOT_OBSERVED** |
| Soft review | not triggered |

## 21–23. Model / effort / Astra analysis

**Not available** for post-CORR-04 controlled comparative set — only canary attempted; 0 hosted → not a valid W-Sources REAL comparative observation.

- Medium / high / none effects: **NOT EVIDENCED** this cycle
- Terra / Sol effort curves: **NOT RUN**
- Luna effort reserve vs historical none: **unchanged**
- Astra: **NOT RUN** (would have been last)

## 24. Governance hard invariants (canary)

| Invariant | Verdict |
|---|---|
| No synthesized HumanDecision | held (no synth) |
| Nora no decision authority | held in narrative |
| External source no SFIA authority | held (no sources observed) |
| Recommendation ≠ Decision | held |
| search ≠ read | not observationally exercised (0 search) |
| Partiality explicit | narrative partial / refuse |
| No silent SUCCESS when source proof insufficient | held (NOT_PROVEN / refuse) |
| Model/effort pin | luna/medium preserved |
| No silent model/effort fallback | held |
| Astra medium only / no Astra repeat | N/A (not reached) |
| No automatic selective repeat | held |
| No production routing / no Stage B auto-promotion | held |

## 25. Session-state experimental reserve

- Historical Luna/none: prior regime — **SESSION-STATE RESERVE**
- This cycle baseline recipe: **MEMORY-B NARRATIVE CONFOUNDER CANDIDATE** — seed text about EC requirement correlated with model refusing hosted search despite server `realAuthorized=true`
- Do not claim cognitive model inferiority from this canary

## 26. F2 comparative scorer-depth reserve

Carried forward from prior Critical Review — unchanged.

## 27. Combined Stage A base Evidence

| Bucket | Status |
|---|---|
| Historical accepted (Routine+Memory+F2×3) | 50 |
| Historical W-Sources Luna/none anchor | 1 |
| New controlled W-Sources valid hosted | **0 / 9** |
| Evidence record coverage | still incomplete for 60/60 cognitive replacement of failed W-Sources |
| Product/config/provider invalid this cycle | canary = hosted-boundary integrity fail (not PRODUCT_PATH crash) |

Prior 9 PRODUCT_PATH failures remain **SUPERSEDED_PRODUCT_PATH_EVIDENCE** (retained; not replaced).

## 28. Prior 9 failed W-Sources

Label: **SUPERSEDED_PRODUCT_PATH_EVIDENCE** — retained provenance; not cognitively conclusive; **not** replaced this cycle.

## 29. Prior 5 repeats

**CONTRACTUALLY TRIGGERED / ANALYTICALLY NON-DISCRIMINATING** — retained; not used for conclusions; none newly run.

## 30. Stage A Outcome CANDIDATE

**C — INSUFFICIENT_EVIDENCE**

Rationale: controlled post-CORR-04 9-cell W-Sources hosted REAL comparative Evidence not obtained; canary stopped on zero hosted REAL dispatch; Stage A remains incomplete pending Critical Review / Morris.

## 31. Stage B readiness recommendation

**STAGE B NOT JUSTIFIED** (insufficient controlled W-Sources Evidence; no Astra signal this cycle).

## 32. Stage B NOT AUTHORIZED

Explicit. No Stage B executed.

## 33. ZERO tracked product mutation proof

```
git status --short → ?? projects/sfia-studio/app/.tmp-sfia-real/ ; ?? projects/sfia-studio/app/node_modules
git diff --name-only → (empty)
git diff --cached --name-only → (empty)
```

Review pack published from **untracked** Evidence path (not the tracked `.tmp-sfia-review/chatgpt-review.md`).

## 34. Reservations

1. Canary hosted boundary not observed (0/0/0) despite authority OK.
2. Baseline recipe narrative may have induced false “EC unavailable” cognition.
3. Text-heuristic scorers PASS on refusal narrative ≠ hosted REAL comparative proof.
4. Historical Luna/none session-state reserve remains.
5. F2 scorer-depth reserve remains.
6. First aborted campaign (Critical profile EC confirm) consumed no REAL; discarded as setup.

## 35. Anti-claims

- Does **not** claim Stage A complete
- Does **not** claim all 9 cells executed
- Does **not** claim CORR-04 fully REAL-revalidated with hosted boundary
- Does **not** claim model/effort effects
- Does **not** authorize Stage B / production routing / Astra selection
- Does **not** mutate Option C / FinOps / caps
- Invoice **NOT_OBSERVED**

## 36. Verdict

**STOP — POST-CORR04 W-SOURCES REAL CANARY FAILED — READY FOR CHATGPT CRITICAL EVIDENCE REVIEW (PARTIAL)**

CORR-04 Memory B marker path did not crash on MW6 REAL; hosted W-Sources boundary was not observed on canary; campaign stopped per contract; Outcome CANDIDATE **C**; Stage B **NOT JUSTIFIED** / **NOT AUTHORIZED**; zero product mutation.

## 37. Next Morris gate

ChatGPT Critical Evidence Review → Morris decides:

- whether to authorize a **new** W-Sources REAL attempt with a **neutral** pre-compacted baseline recipe (no EC-absence implication), or
- other Stage A disposition.

No automatic corrective launched this cycle.
