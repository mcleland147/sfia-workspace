# SFIA STUDIO — P6-MIN-09 HUMAN QA REAL T1
## Review Pack FULL — EXECUTION EVIDENCE AUDIT (READ-ONLY)

**Horodatage:** 2026-10-13 15:28:30 CEST
**ScenarioId:** P6-MIN-09
**Test:** Human QA REAL T1 — Post-RCD-01 Retest
**Cycle:** 9 — QA / validation
**Profil:** CRITICAL
**Typologie:** QA / EVIDENCE AUDIT
**GO Morris:** 2026-10-13 — AUDIT READ-ONLY AUTORISÉ
**Verdict technique Cursor:** **P6-MIN-09 T1 — FUNCTIONAL RESPONSE OBSERVED / REAL EXECUTION NOT FULLY PROVEN**

---

## A. GO / Scope

Lecture seule uniquement. Aucun nouvel appel OpenAI. Aucun renvoi T1. Aucune mutation Product/SQLite/config. Write Git borné = Review Handoff L3 uniquement.

## B. Git Truth Check

| Item | Valeur |
|------|--------|
| Runtime WT | `/Users/morris/Projects/sfia-workspace-studio-runtime-main-bd3f440c` |
| HEAD | `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` |
| origin/main | `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` |
| Status | clean |
| RCD-01 files | PRESENT |
| runNora sha256_16 | `f4804915f8906eda` |
| :3020 | PID 63574 · CWD = runtime WT · started 2026-10-13 14:57:38 CEST |

Handoff env antérieur `edd8e232` = realignment only — **not** T1 proof.

## C. Convergence Pre-check

P0/P1/P2 + RCD-01 + PR #579 INTEGRATED. GDR REAL was NOT PROVEN pre-audit. P6 GLOBAL NOT PASSED. Runtime v3 NON ADOPTED.

## D. T1 Run Identity — PROVEN

| Champ | Valeur |
|-------|--------|
| projectId | `prj:e66fd58c-03f6-41df-90c8-4ae267926212` |
| title | Simplification des interactions avec l’IA |
| session_key | `f1-default` |
| logicalTurnId | **`ltu:ff0b592f20f22452a59161655d07a433`** |
| cycleInstanceId | `cyc:trj-255a8418ee8a735f23738c46` |
| status (logical_product_turns) | **accepted** |
| created_at (logical) | 2026-10-13T13:07:08.350Z |
| transcript user | `pt:af713d584fa2e28c` @ 2026-10-13T13:07:56.593Z |
| transcript assistant | `pt:72f6f510bfab6b3a` @ 2026-10-13T13:07:56.595Z |
| journal | `cje:3d46b816bdf4c44d` (active) linked to same pts |

Distinct from FAILED historique `ltu:fe4526f3e425b133a8187433f2b23d6f` (2026-10-12).

## E. Runtime provenance for this T1

| Evidence | Observation |
|----------|-------------|
| Server start | 14:57:38 CEST (LaunchAgent on main RCD-01 WT) |
| T1 timestamp | 15:07:56 CEST (~10 min after start) |
| Dev log | `POST /api/studio/projects/.../assistant/send 200 in 60555ms` after compile of send route |
| Checkout HEAD | `bd3f440c` + RCD-01 digest match |

**Correlation:** strong that this T1 was served by the post-realignment RCD-01 instance. Not a cryptographic runtime attestation, but temporally consistent (NOT the pre-RCD-01 campaign server).

## F. Requête exacte

```
Nora, j'ai un document dans notre dépôt Git qui pourrait nous être utile pour ce projet :
projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md
Tu peux le consulter et m'en faire une synthèse de ce que tu en retiens ?
```

## G. Réponse Nora (transcript durable — intégrale)

```
J’ai lu le document complet : **« SFIA Studio — Chat-First Product Simplification — Cycle 1 Cadrage »**. Voici ce que j’en retiens.

- **Le problème visé n’est pas un manque de fonctionnalités**, mais la complexité interne qui remonte dans l’expérience : trop de navigation, de désambiguïsation, de jargon ou d’étapes que le Pilote et Nora doivent compenser.
- **La cible est un pilotage réellement centré sur la conversation, pas exclusivement par le chat.** Le Journal, l’état du projet, les preuves ou l’inspection d’un effet peuvent rester des surfaces de soutien spécialisées.
- **Simplifier ne signifie pas affaiblir la gouvernance.** Le document veut réduire les interactions inutiles tout en préservant les décisions humaines nécessaires, la traçabilité et le traitement prudent des ambiguïtés. Nora interprète et conseille ; Studio conserve les contrôles déterministes et la matérialisation des effets.
- **C’est un cadrage, pas un plan d’implémentation.** Il privilégie la réutilisation de l’existant, écarte le greenfield et ne tranche ni la politique de décision, ni l’architecture technique, ni le routage des modèles. Les frictions évoquées sont en partie des hypothèses à vérifier, pas des constats tous démontrés.

Le document présente son C1 comme validé, mais précise aussi que son intégration Git était encore en cours et que P2 n’était pas autorisé. Ce sont les statuts rapportés par le document, **pas une vérification de l’état Git actuel**, ni des décisions automatiquement applicables à notre projet. Pour notre cadrage, son apport le plus concret est une méthode : partir d’un parcours réel, observer les manipulations et distinguer ce qui est inutile de ce qui protège réellement l’utilisateur ou le projet. Quel parcours actuel te semble le plus pénible à examiner en premier ?
```

## H. FAILED historique (référence)

logicalTurnId `ltu:fe4526f3…` assistant head:

```
Model-turn budget reached (maxTurns).

La suite n'a pas pu être déterminée de manière fiable à partir de cette sortie.
```

Contrast: budget maxTurns / no synthesis vs retest synthesis accepted.

## I. Git reads inventory (session_items)

Tool: `git_local_read_file` · path = P1 cadrage · **17** call/result pairs (UI capture said 16 — **trace count = 17**).

Document total reported by tool: **1664** lines (wc -l on Git blob = **1663**; off-by-one counting reserve).

| # | Requested | Returned (summary) | Flags |
|---|-----------|--------------------|-------|
| 1 | `[1400, 1664]` | incomplete / hasMore (no `returned Lx-y`; ~55 content lines ⇒ ~L1400-1454) | hasMore |
| 2 | `[1, 180]` | `[1, 123]` | documentHasMore, hasMore, partialLine, truncated |
| 3 | `[181, 360]` | `[181, 338]` | documentHasMore, hasMore, partialLine, truncated |
| 4 | `[361, 540]` | `[361, 527]` | documentHasMore, hasMore, partialLine, truncated |
| 5 | `[541, 720]` | `[541, 687]` | documentHasMore, hasMore, partialLine, truncated |
| 6 | `[124, 180]` | `[124, 180]` | documentHasMore, hasMore |
| 7 | `[339, 360]` | `[339, 360]` | documentHasMore, hasMore |
| 8 | `[528, 540]` | `[528, 540]` | documentHasMore, hasMore |
| 9 | `[688, 850]` | `[688, 850]` | documentHasMore, hasMore |
| 10 | `[851, 1010]` | `[851, 1004]` | documentHasMore, hasMore, partialLine, truncated |
| 11 | `[1011, 1170]` | `[1011, 1170]` | documentHasMore, hasMore |
| 12 | `[1171, 1330]` | `[1171, 1268]` | documentHasMore, hasMore, partialLine, truncated |
| 13 | `[1331, 1490]` | `[1331, 1470]` | documentHasMore, hasMore, partialLine, truncated |
| 14 | `[1005, 1010]` | `[1005, 1010]` | documentHasMore, hasMore |
| 15 | `[1269, 1330]` | `[1269, 1330]` | documentHasMore, hasMore |
| 16 | `[1471, 1664]` | `[1471, 1628]` | hasMore, partialLine, truncated |
| 17 | `[1629, 1664]` | `[1629, 1664]` | — |

### Coverage calculation (returned ranges union)

- Read #1 summary lacks `returned Lx-y` (only `hasMore`); coverage union relies on later gap-fills #13–#17 for the tail, not on treating req as returned.
- Unique lines in returned ranges: **1664 / 1664**
- Missing intervals: **none**
- Reads with `truncated`+`partialLine`: **8** (gap-fill follow-ups observed)
- Final read L1629–1664: complete (no truncated/partialLine)

**Distinctions:**
- REQUESTED ≠ always fully RETURNED (envelope truncation)
- UNION of returned complete ranges ⇒ full L1–1664
- Grounding `readCoverage` crumb still lists **partial** entries (including `#L1629-1664`) — **stale/under-specified vs union**
- Nora claim « document complet » aligns with union-of-returned-lines, **not** with every individual tool crumb nor grounding aggregate

## J. Provider / Model REAL

| Layer | Status |
|-------|--------|
| CONFIGURED | OPENAI_MODEL=`gpt-5.6-luna` · SFIA_STUDIO_CURSOR_REAL=1 |
| REQUESTED | assistant/send invoked (log) |
| OBSERVED | ~60.6s server duration; 17 tool calls; reasoning items; durable assistant synthesis |
| PROVIDER CONFIRMED | **NOT OBSERVED** — no response/request id, token usage ledger, or provider receipt bound to `ltu:ff0b592f…` |
| Fake markers | **NOT OBSERVED** (no ScriptedModel/FakeConversationProvider identity in turn artifacts) |

Occurrences of the string `openai` inside tool payloads are **document content**, not provider receipts.

**REAL BOUNDARY NOT FULLY PROVEN.**

## K. Budget / continuation

| Item | Status |
|------|--------|
| requestedMaxTurns / effectiveMaxTurns | **NOT OBSERVED** |
| stopReason / limitReached | **NOT OBSERVED** (no maxTurns failure text on retest) |
| Continuation RunState | **NOT OBSERVED** / not required to explain 17 tools (multi-tool single logical turn) |
| Contrast FAILED | FAILED explicit `Model-turn budget reached (maxTurns)` |

Inference only (non-proof): turn completed with accepted status + synthesis.

## L. Product status

| Item | Evidence |
|------|----------|
| logical_product_turns.status | `accepted` |
| Journal entry | created/active with source turn refs |
| oa.epistemic.updated | correlationId=ltu… result ok |
| HumanDecision created this turn | **none** (query empty) |
| Incomplete banner / cognitive_stop text | **NOT OBSERVED** in transcript |
| Backend orchestrateTurn enum beyond accepted | **NOT OBSERVED** |

UI absence of incompleteness banner = observation consistent with accepted, not independent proof of `status=ok` DTO.

## M. Semantic quality (vs source)

Source title and axes present in Git cadrage (chat-first ≠ chat-only; gouvernance préservée; non-greenfield; C1 statuses ≠ P2; frictions partly hypotheses). Nora’s synthesis matches these axes and explicitly separates document-reported statuses from current Git/project decisions.

| Axis | Verdict |
|------|---------|
| A–F object/problem/chat-first/governance/reuse/cadrage | PASS (content-aligned) |
| G historical statuses contextualized | PASS |
| H limits recognized | PASS |
| I no material invention observed in sampled axes | PASS (bounded review) |
| J useful for Pilot | PASS (ends with actionable next question) |
| Coverage claim wording | RESERVE — « complet » vs grounding partial crumbs |

## N. Fake/Real Qualification

Frontière Studio→Nora→Runner→provider: **CONFIGURED + BEHAVIORALLY PLAUSIBLE; PROVIDER RECEIPT ABSENT.**

Frontière Nora→git_local_read_file→Git: **PROVEN** (17 tool results with path/ranges/flags).

Level claimed: **FUNCTIONAL / DOCUMENTARY ACQUISITION PROVEN AT T1 SCOPE**.
Level **not** claimed: REAL BOUNDARY PROVEN · END-TO-END REAL PROVEN · GDR REAL PASS · P6 GLOBAL PASS · PRODUCT READY · runtime v3 ADOPTED.

## O. Verdict matrix

| # | Critère | Observation | Preuve | Limite | Verdict |
|---|---------|-------------|--------|--------|---------|
| 1 | Run identity | ltu:ff0b592f… | SQLite transcript+logical | — | **PASS** |
| 2 | Runtime RCD-01 | HEAD+digest+timing | Git+process+log | no signed runtime id | **PASS WITH RESERVES** |
| 3 | Provider REAL | config+latency | .env keys + 60s send | no provider receipt | **NOT PROVEN** |
| 4 | Git acquisition | 17 reads | session_items | UI said 16 | **PASS** |
| 5 | Doc coverage | union 1664/1664 | returned ranges | tool total vs wc -l 1663 | **PASS WITH RESERVES** |
| 6 | Truncation handling | 8 truncated then gap-fill | summaries | grounding still partial | **PASS WITH RESERVES** |
| 7 | Budget/continuation | completed; no maxTurns text | contrast FAILED | telemetry absent | **NOT OBSERVED** (no FAIL signal) |
| 8 | Product status | accepted + journal | SQLite | DTO enum NOT OBSERVED | **PASS WITH RESERVES** |
| 9 | Synthesis quality | substantive+faithful | transcript vs source | selective by design | **PASS** |
| 10 | Pilot experience | usable next question | transcript/journal | subjective | **PASS WITH RESERVES** |
| 11 | Authority | no HD invented | HD query empty | — | **PASS** |
| 12 | Reserves | listed | this pack | — | **OPEN** |

### Aggregate

**FUNCTIONAL RESPONSE OBSERVED / REAL EXECUTION NOT FULLY PROVEN**

Human QA judgment of Morris remains distinct and not auto-consumed here.

## P. Reserves

1. Provider receipt / model id / effort / tokens: NOT OBSERVED.
2. UI 16 vs trace 17 tool calls.
3. Document line total 1664 (tool) vs 1663 (`wc -l`).
4. Grounding readCoverage remains partial despite full union.
5. Nora « complet » is union-level; individual reads truncated.
6. maxTurns telemetry NOT OBSERVED.
7. P6 GLOBAL / Product READY / v3: NOT CLAIMED.

## Q. P6 consequences / next Morris gates

- Do **not** declare GDR REAL PASS solely from this audit.
- Options: accept functional progress with REAL receipt gap; require observability hardening; authorize T2 only under new GO.
- No automatic Product correction. No T2 auto-start.

## R. Project Git effects

**NONE** (except forthcoming handoff L3). SQLite opened `mode=ro` + `query_only`.

---
FIN REVIEW PACK FULL — P6-MIN-09 T1 EVIDENCE AUDIT
