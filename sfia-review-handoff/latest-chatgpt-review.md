# ChatGPT Critical Review Pack — LIGHT
## AKG-M5 L3-S2 LIVE-E2E-01 · CYCLE 9 — TEST 15 UNREQUESTED EC PREPARE INVESTIGATION

**UTC authored:** 2026-10-29T17:20:48Z
**Morris GO:** INVESTIGATION ONLY — no fix, no replay, no execute
**Verdict:** INVESTIGATION COMPLETE — ROOT CAUSE QUALIFIED

**Anti-claims:** No code/test/doc change · No LIVE/HQA DB write · No server stop/restart · No UI button · No ExecutionAttempt · No Cursor REAL · No BALISE repo mutation · No project PR · R24 NO SEMANTIC IMPACT · EP-S2-08 PARTIAL · L3 GLOBAL OPEN · Runtime v3 NON ADOPTED

---

## 1. Git Truth
| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3s2-r24-postmerge-capitalization` |
| Branch | `docs/akg-m5-l3s2-r24-postmerge-capitalization` |
| HEAD | `cf940d84ea9e78602131fe97f75cad0c5abddac9` |
| origin/main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| Expected | main `2cc63686…` · HEAD `cf940d84…` — **MATCH** |
| Porcelain | `M .tmp-sfia-review/chatgpt-review.md` only (preserved) |
| Code ALIGN vs main | orchestrateTurn / orchestrateF2 / prepareGenericExecutionContractDraft |
| Prior handoff tip | `6b3ef8ce…` |

## 2. Sources (proportional)
Template/routing/validation + CKC QA candidate · Build Doctrine/Roadmap/C1 · PRR 02/03/04/06/07/08/09 · R23 code-first · R24 diagnostic only.

## 3. LIVE incident facts (RO)
| Item | Evidence |
|---|---|
| Project | `prj:d0c81c08-…` title **BALISE** · workspace `balise` |
| Cycle | `cyc:trj-13c49958…` · `cyc:framing` · active · Light |
| User turn | transcript seq **18** @ `2026-10-29T16:15:40.370Z` — asks structure/criteria proposal + **explicit** « Ne crée aucun fichier, ne prépare aucun contrat d'exécution et ne démarre aucune exécution. » |
| Assistant | seq **19** — « J'ai préparé le contrat d'exécution… » `xct:gen-prep:8be90773…` |
| EC | status **`confirmation_required`** · DB **version=2** (payload version=2; UI “v4” not found in DB) · action `studio.cursor.generalist.execute` · authority **N2** · STRUCTURAL deferred · `stopConditions` include the pilot prohibition text |
| Attempts | **0** |
| Confirmations rows | **0** |
| `request_generic_execution_prepare` in session_items | **0 hits** |

## 4. Causal chain (CONFIRMED)
1. Pilot message mixes a substantive framing request with a **prepare prohibition**.
2. `hasExplicitPrepareContractIntent()` (W2) matches span **`prépare aucun contrat`** — **no negation handling**.
3. `resolveChatFirstGenericPrepareGo` → **`explicit_lexical_prepare`**.
4. F2 treats that as prepare GO (`mayPrepare` / `skipF1ForChatFirstPrepare` / admission `chatFirstPrepareAccept=true`).
5. `solicitGenericExecutionPrepare` persists EC `confirmation_required` (PREPARE ≠ AUTHORIZE ≠ EXECUTE).
6. Narrative announces prepare; prohibition is copied into **`stopConditions`** (future-execute constraint), **not** used as prepare blocker.
7. No Attempt created — authority/confirmation gates held.

## 5. Matrix A–F
| Point | Component | Path:lines | In→Out | Proof | Status |
|---|---|---|---|---|---|
| A Lexical | `hasExplicitPrepareContractIntent` | `w2/prepareGenericExecutionContractDraft.ts:94–119` | LIVE text → **true**; match `prépare aucun contrat` | static + LIVE replay | **CONFIRMED** |
| B Intent class | `resolveChatFirstGenericPrepareGo` + admission | same:174–176; `genericExecutionConversationCoordinator.ts:53–63`; `orchestrateF2.ts:1998–2007,2282–2284` | explicit → prepare GO | code + static | **CONFIRMED** |
| C Tool-First | `request_generic_execution_prepare` | `productExecutionAgentsTools.ts:188+`; `orchestrateTurn.ts:561–585` | tool can queue prepare w/o negation gate | code; **no LIVE tool call** for this turn | **PLAUSIBLE residual / NOT PROVEN for this incident** |
| D Product admission | F2 `mayPrepare` → readiness → solicit | `orchestrateF2.ts:2282–2446` | admitted prepare | code + EC row | **CONFIRMED** |
| E Finalize/store | `solicitGenericExecutionPrepare` | W2 ~1477+; OA `oa_execution_contracts` | EC id `xct:gen-prep:8be90773…` | SQLite RO | **CONFIRMED** |
| F Execute blocked | status confirmation_required · attempts=0 · N2 | OA tables | no Attempt | SQLite RO | **CONFIRMED** |

## 6. Answers
1. **Path:** F2 chat-first **`explicit_lexical_prepare`** → Product `solicitGenericExecutionPrepare` (not Agents tool this turn).
2. **Why prohibition failed:** regex treats “prépare … contrat” as positive prepare intent; “ne/aucun” ignored.
3. **Scope:** **transverse** defect in shared lexical helper (any FR negation around prepare+contrat).
4. **Authorized/executed?** Prepared only · **`confirmation_required`** · **not authorized** · **not executed**.
5. **Avoid without rearchitecture:** procedural — avoid “prépare/contrat” even in negation; do **not** Confirm EC; or wait for negation-aware fix GO.
6. **Continue LIVE-E2E-01?** **Yes, with care** — do not Confirm this EC; prefer proposal-only wording without prepare/contrat tokens until fix.
7. **Minimal later fix (NOT authorized now):** negation-aware `hasExplicitPrepareContractIntent` + unit tests for the four phrases; optional Product refuse when explicit prepare-prohibition detected before solicit; Tool-First solicitPrepare should share the same refuse (residual).

## 7. Fake/Real Qualification
LIVE Product/Nora SQLite + current main-aligned code · Real incident · Real provider path historically · Investigation used RO DB + in-memory helper eval · No Fake substitution for the causal claim.

## 8. Recommendation
**ADAPT** (capability/fix under distinct Morris GO) — lexical negation gap is qualified; campaign may **KEEP** operating under procedural guardrails without Confirming the stray EC.

## 9. Morris decision required
- Accept residual risk + continue BALISE with wording discipline, **or**
- Authorize a **separate** minimal fix GO before further prepare-sensitive turns.

## Unique verdict
**INVESTIGATION COMPLETE — ROOT CAUSE QUALIFIED**
