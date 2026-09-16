# AUTHENTICATED PRODUCT REPROOF 07
## BOUNDED CONTROLLED REAL DOCS_WRITE E2E — FULL Review Pack

**Timestamp (UTC):** 2026-09-16T18:29:39Z
**Review Pack:** FULL
**Campaign:** AUTHENTICATED PRODUCT REPROOF 07 — BOUNDED CONTROLLED REAL DOCS_WRITE E2E
**Cycle:** 9 — QA / validation
**Typology:** RUN
**Profile:** Critical

**Verdict:**
`AUTHENTICATED-PRODUCT-REPROOF-07 — INCOMPLETE — TOOLING OR WIRING GAP — OFFICIAL CURSOR REAL OPT-IN ACTIVATED (SFIA_STUDIO_CURSOR_REAL=1) AND M4 DOCS_WRITE AGENT REGISTERED — DURABLE PRODUCT JOURNEY EC SCOPE STILL DOES NOT MATCH M4 allowedScopes (prose "docs_write borné — cycle actif — aucune exécution automatique" ≠ "studio.gcec.docs_write") — NEW AUTHORITY RECEIPTS HONESTLY BLOCKED (avr:056aa615… / avr:6c7239bf…; grantsAuthority=false) — ADDITIONALLY PRODUCT UI EXECUTE SEAM REMAINS FIXTURE-ONLY (governedExecuteAuthorizedContract: realExecution:false; REAL/NoOp interdit) — EXECUTE NOT CLICKED — ZERO EXECUTIONATTEMPT — ZERO DOCS_WRITE FILE EFFECT — ZERO OPENAI LIVE — PRODUCT SOURCE UNCHANGED — NO REPAIR PERFORMED — NEXT CANDIDATE = DELIVERY CYCLE TO WIRE AUTHENTICATED PRODUCT JOURNEY TO GOVERNED REAL DOCS_WRITE UNDER DISTINCT MORRIS GO`

---

## 1. Objective
Prove one bounded governed REAL `cursor.docs_write.apply` end-to-end on the durable Reproof-06 lineage:

inspected EC → durable Confirmation → REAL executor available → authority re-eval → grant only for exact scope → Execute once → Attempt → real filesystem effect → Evidence → reload continuity.

**STOP condition consumed:** authority remained blocked after REAL enablement → STOP BEFORE EXECUTE (authorized by Morris GO).

## 2. Morris GO consumed
ONE BOUNDED CONTROLLED REAL DOCS_WRITE EXECUTION PROOF — FULL GOVERNED E2E CAMPAIGN.

Authorized: Local Git Truth, forensic, fresh auth runtime, Cursor REAL opt-in for contractual action only, Statuer, Execute exactly once if granted, Attempt/Evidence/FS verify, reload, Review Pack FULL, Review Handoff L3.

NOT authorized: OpenAI LIVE, Nora LIVE, other Cursor actions, other path/repo, second Execute/Attempt, git commit/push/PR/merge by Product EC, Product source fix, DB repair, new Proposal/HD/EC, maturity overclaims.

## 3. Git truth
| Fact | Value |
|---|---|
| Dogfood worktree | `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d` |
| Continuity worktree (sibling) | `/Users/morris/Projects/sfia-studio-ec-rehydration-continuity` |
| Repository | `mcleland147/sfia-workspace` (worktrees of same) |
| Initial campaign resolve | detached `a8a5dffaa84fe25f792074b93696a74722de8fdf` (== origin/main anchor) |
| Mid-campaign dogfood HEAD | `b871ad7c43dcccfffffb7ef28ce3abfd771fafaa` on `fix/sfia-studio-ec-rehydration-continuity` |
| Checkout timestamp | 2026-09-16 20:22:50 +0200 (reflog: moving from a8a5dff → fix branch) |
| origin/main | `a8a5dffaa84fe25f792074b93696a74722de8fdf` (unchanged) |
| Product tree b871ad7c vs a8a5dff | **empty diff** under `projects/sfia-studio` (merge parent equivalence) |
| Product tracked dirty | **NO** (only `.tmp-sfia-review` evidence) |
| Project commit/push/PR/merge | **ZERO** |

Reserve: dogfood left detached main at campaign start via checkout to pre-merge PR tip. Product file identity vs main for Studio paths remains equivalent; defect is not explained by that checkout.

## 4. Sources read / qualification
Process templates/routing/operating-model/guardrails · CKC `pilots/04-qa-validation.md` (candidate, cognitive only) · Build Doctrine / Roadmap VALIDATED · Product Completion **CLOSED** · Nora remains global priority · runtime v3 **NON ADOPTED**.

Doctrine/runtime consumed for diagnosis:
- `composeStudioProductRealBoundary.ts` — REAL opt-in via `SFIA_STUDIO_CURSOR_REAL=1`
- `service.ts` — registers M4 docs_write (+ other M4 agents) when REAL enabled
- `m4BoundedDocsWriteCursorAgent.ts` — `allowedScopes: ["studio.gcec.docs_write"]`
- `invariants.ts` `agentMatchViolation` — exact scope include match
- `prepareM3FromDecision.ts` — Product journey scope from executionBasis prose
- `boundedDocsWriteM3ResolutionProfile.ts` — GCEC sibling profile uses `M4_BOUNDED_DOCS_WRITE_SCOPE` (not the path that produced this durable EC)

Previous remote handoff tip consumed: `042415f62613b0477c822d4476b4c60daf90d02b` = **AUTHENTICATED PRODUCT REPROOF 06** PASS WITH RESERVES.

## 5. Fake / Real qualification
| Gate | Value |
|---|---|
| OPS1_CONVERSATION_PROVIDER | fake |
| OpenAI LIVE | OFF (0 calls) |
| SFIA_STUDIO_CURSOR_REAL | **1** (official opt-in) |
| OPS1_CURSOR_REAL | **1** |
| REAL boundary composed | yes (`StudioCursorRealLaunchGateway` path available) |
| Actual docs_write effect | **NONE** (stopped before Execute) |
| Claimed proof level | **NOT** REAL BOUNDARY PROVEN — fail-closed authority block under REAL-on |

## 6. Runtime facts
| Fact | Value |
|---|---|
| CWD | dogfood `…/projects/sfia-studio/app` |
| Command | `OPS1_CONVERSATION_PROVIDER=fake SFIA_STUDIO_CURSOR_REAL=1 OPS1_CURSOR_REAL=1 npm run dev --port 3020` |
| Listening PID | 60981 (`next-server`) |
| Auth | normal Better Auth session (existing Pilote session; no cookie forge / DB auth mutation) |
| Serving Product identity vs main | equivalent for `projects/sfia-studio` (see Git) |

## 7. DB forensic
| Fact | Value |
|---|---|
| DB path | `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` |
| Dogfood symlink | yes → workspace DB |
| schema_meta.schema_version | `m8-0.1.0` |
| Forensic backup | `/tmp/sfia-reproof07-forensic-20260916T182243Z/` |
| DB SHA-256 (pre) | `94022209facce2574279162d3d7e65d455441e3a453aadee4d197f4981dc9e98` |

## 8. Durable lineage (revalidated; not forced)
| Entity | ID / state |
|---|---|
| Project | `prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6` Gestion de tâches |
| LPS | `lps:3a8e02537e45d5b9` v17 → v17 |
| CycleInstance | `cyc:trj-0a9c5104b7b6a3debe95eb8d` active |
| RepositoryBinding | `mcleland147/sfia-workspace` · main · `projects/sfia-studio/.sandbox` |
| Proposal | `prop:f2:edba677a-123f-4f5e-baad-50533a65a3a0` |
| OptionSet | `optset:w2-b3be0236b91a` |
| HumanDecision | `dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411` accepted |
| ExecutionContract | `xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411` |
| EC lifecycle | v3 / `confirmed` (unchanged by REAL / Statuer) |
| semantic fingerprint | `088eead1c470a93ed9aef5511d692d5d9b61fecc982ab6788f41e20ad19357b2` (unchanged) |
| action | `cursor.docs_write.apply` |
| technical target | `workspace.isolated.docs_write` |
| repository | `mcleland147/sfia-workspace` |
| targetPath | `projects/sfia-studio/.sandbox/gestion-de-taches.md` |
| EC scope (durable) | `docs_write borné — cycle actif — aucune exécution automatique` |
| Inspection current | `insp:7d1627d37e575419` |
| Historical stale | `insp:05042f3b6040838e` |
| Confirmation | `cfm:w2:xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411:v2` consumed |
| Historical blocked AVR (Reproof 06) | `avr:558ab3bb21ea9187` (fixtures only; REAL off) |

Filesystem BEFORE: target **ABSENT**. AFTER campaign: still **ABSENT**.

## 9. REAL executor discovery (source-authoritative)
Official enablement: `SFIA_STUDIO_CURSOR_REAL=1` (`isStudioCursorRealEnabled` / `composeStudioProductRealBoundary`).

When enabled, runtime registers:
- `agt:m4.cursor.bounded_docs_write` (exact docs_write action/target/cap)
- also RO / local_commit / remote_push / PR create / PR merge descriptors

Launch remains gated by HumanDecision → Contract → Confirmation → authority → StartExecution. No Product source change required to flip the flag.

**Critical mismatch diagnosed:**
M4 docs_write `allowedScopes = ["studio.gcec.docs_write"]`
Product EC scope on this journey = prose from `prepareM3FromDecision` / executionBasis
`agentMatchViolation` requires exact `allowedScopes.includes(criteria.scope)`
⇒ `findCandidates` empty even though action/target/capability match.

Aggregated receipt reason surfaces as `capability_not_supported` / `executor_capability_insufficient` because evaluation walks all agents and last non-match classes as capability (masking the docs_write agent's `scope_not_allowed`).

Sibling profile `boundedDocsWriteM3ResolutionProfile()` already uses `M4_BOUNDED_DOCS_WRITE_SCOPE`, but **this durable authenticated Product EC was not produced by that profile**.

**Secondary wiring gap (Execute seam):** Product CTA path `governedExecuteAuthorizedContract` enforces fixture-only boundary (`fixtureAdapter.adapterId === F3_ADAPTER_ID`, `externalEffects === false`, responses stamp `realExecution: false`, message « REAL/NoOp interdit »). Even after a future scope/authority fix, this authenticated UI Execute path would not launch `StudioCursorRealLaunchGateway` without Delivery work. Campaign correctly never clicked Execute.

## 10. Phases executed
| Phase | Result |
|---|---|
| A Local Git + forensic | PASS (with mid-campaign checkout reserve) |
| B REAL path discovery | PASS — official env gate exists |
| C Fresh REAL runtime | PASS — server REAL-on, cognition fake |
| D Rehydration | PASS — same lineage; EC semantics unchanged by REAL |
| E Statuer | DONE — new AVRs created; outcome **blocked** |
| F Execute | **NOT PERFORMED** — STOP BEFORE EXECUTE |
| G Attempt/FS/Evidence | N/A — zero effect |
| H Reload continuity of effect | N/A |
| I Negatives / deltas | recorded |
| J Review Pack + handoff | this document + publish |

## 11. Exact Product CTA sequence
1. UI read / expand contract details (non-mutating)
2. **Statuer sur l'autorisation** ×2 in campaign window (see reserve)
   - `avr:056aa615c01c0350` @ 2026-09-16T18:26:41.358Z blocked
   - `avr:6c7239bf5db4d831` @ 2026-09-16T18:27:30.566Z blocked
3. **Execute clicks = 0**

Reserve: GO asked for Statuer exactly once; campaign recorded two blocked receipts (session continuity / duplicate click). Both agree; neither grants authority; no Execute.

## 12. New authority evaluation (latest)
| Field | Value |
|---|---|
| receiptId | `avr:6c7239bf5db4d831` |
| outcome | `blocked` |
| grantsAuthority | `false` |
| blockedReason | `executor_capability_insufficient` |
| blockedDetail | `capability_not_supported` |
| confirmationRefs | current Confirmation |
| inspectionAttestationRef | `insp:7d1627d37e575419` |
| evaluatedAgentRefs | includes `agt:m4.cursor.bounded_docs_write` + fixtures + other M4 agents |
| sufficient | `false` |
| historical `avr:558ab3bb…` | preserved; not mutated into granted |

UI after Statuer:
- **Exécution bloquée**
- « Aucun exécuteur autorisé ne couvre ce contrat. »
- CONFIRMATION REQUISE — OBTENUE
- EXÉCUTEUR INSUFFISANT — BLOQUÉ
- INSPECTÉ
- TRACE: `avr:6c7239bf5db4d831`
- **Exécuter CTA absent**

## 13. Entity BEFORE → AFTER (EC-scoped / campaign-relevant)
| Metric | Before (campaign start) | After (STOP) | Delta |
|---|---|---|---|
| EC version/status/fp | v3 confirmed / 088eead1… | same | 0 semantic |
| Inspection for EC | 2 | 2 | 0 |
| Confirmation for EC | 1 | 1 | 0 |
| Authority receipts for EC | 1 | **3** | **+2** (both blocked) |
| ExecutionAttempt for EC | 0 | **0** | 0 |
| Evidence for EC | 0 | 0 | 0 |
| ReviewBundle for EC | 0 | 0 | 0 |
| LPS | v17 | v17 | 0 |
| Proposal/OptionSet/HD/EC count | unchanged lineage | unchanged | 0 duplicates |
| audit_total | 1413 (pre baseline note) / 1417 at REAL boot | **1425** | + load_failed/finalization + authority events |
| oa.cycle.load_failed since 18:22Z | — | **4** | TRAJECTORY_NOT_FOUND-class bookkeeping; no wrong CTA / authority grant |
| targetPath file | absent | absent | 0 |
| OpenAI LIVE | 0 | 0 | 0 |
| Cursor REAL executions (effectful) | 0 | **0** | 0 |
| Product source mutations | 0 | 0 | 0 |

## 14. Negative oracle matrix (N1–N45 condensed)
| ID | Result | Note |
|---|---|---|
| N1–N4 no duplicate Proposal/OptionSet/HD/EC | PASS | |
| N5 historical blocked AVR remains historical | PASS | `avr:558ab3bb…` intact |
| N6 new grant requires current executor capability | PASS (fail-closed) | no false grant |
| N7 authority scope ≤ EC scope | PASS | no grant |
| N8–N9 inspection + Confirmation required | PASS | present |
| N10 REAL activation mutates EC semantics | PASS | fp/status unchanged |
| N11 Execute unavailable before authority grant | PASS | Execute absent |
| N12–N17 Attempt binding | N/A | no Attempt |
| N18–N24 containment / git remote effects | PASS | no write; no commit/push/PR/merge |
| N25–N26 OpenAI/Nora LIVE | PASS | 0 |
| N27–N33 Evidence/Attempt persistence | N/A | none created |
| N34–N35 no auto re-execute / duplicate Attempt | PASS | |
| N36 no authority widening | PASS | |
| N37–N38 fingerprint/lifecycle | PASS | lifecycle stable; fp stable |
| N39 TRAJECTORY_NOT_FOUND / load_failed | RESERVE | +4 load_failed this campaign window; bookkeeping only |
| N40–N42 anti-claims | PASS | no ADOPTED/READY/generalized |
| N43 reversibility/local | PASS | no effect |
| N44 handoff ≠ Product execution | PASS | |
| N45 no unauthorized external effect | PASS | |

## 15. PASS criteria (P1–P37)
| ID | Result |
|---|---|
| P1 lineage | PASS |
| P2–P3 inspection + Confirmation | PASS |
| P4 EC semantics unchanged by REAL | PASS |
| P5 official REAL executor available (registered) | PARTIAL — registered under REAL=1; not matchable for this EC |
| P6–P9 new authority grant + scope + sufficiency | **FAIL (blocking)** — blocked; honest fail-closed |
| P10–P22 Execute/Attempt/Evidence/FS | **NOT REACHED** — STOP BEFORE EXECUTE; Execute seam also fixture-only |
| P23–P29 LIVE/git/source | PASS |
| P30–P32 reload of effect | N/A |
| P33 audit explainable | PASS |
| P34 semantic vs lifecycle | PASS |
| P35 Review Pack FULL | PASS (this file) |
| P36 handoff | see publish section |
| P37 no maturity overclaim | PASS |

## 16. Screenshots (`.tmp-sfia-review/`)
- `sfia-reproof07-A-fresh-real-enabled.png` / `-ec.png`
- `sfia-reproof07-B-ec-disclosure.png`
- `sfia-reproof07-C-pre-statuer.png` / `-real-on.png`
- `sfia-reproof07-D-authority-blocked-real-on.png` / `-detail.png` / `D2-authority-details.png`

## 17. Reserves (non-repair)
1. **Blocking defect A:** Product authenticated EC scope prose ≠ M4 `studio.gcec.docs_write` allowlist → REAL-on still insufficient for this durable contract.
2. **Blocking defect B (wiring):** Product UI Execute path is fixture-only (`realExecution:false`); cannot expose REAL docs_write via current authenticated CTA without Delivery.
3. Aggregated `capability_not_supported` masks more precise `scope_not_allowed` for the docs_write agent.
4. REAL-on registers broader M4 agents (commit/push/PR); Execute still match-gated; no Execute occurred.
5. Dogfood checkout from detached main → fix branch at campaign start; Product tree vs `origin/main` empty for Studio paths.
6. Statuer receipts +2 vs intended ×1; both blocked identically.
7. `oa.cycle.load_failed` +4 bookkeeping (TNF-class); no functional authority/CTA corruption observed.
8. EC constraints still list historical `NO_CURSOR_REAL` / `NO_ATTEMPT` prepare markers; evaluation used agent match, not those strings, as the blocking reason.
9. Prior remote handoff tip `04c6bdf2` already published a thinner Reproof 07 INCOMPLETE (single AVR); this pack supersedes it with fuller evidence.

## 18. Claims
### Authorized
- Authenticated REAL opt-in was exercised on official `SFIA_STUDIO_CURSOR_REAL` gate.
- Fail-closed authority re-evaluation after REAL enablement proven for this EC.
- Execute boundary correctly refused without grant.
- Zero Attempt / zero docs_write filesystem effect / zero OpenAI LIVE / Product source unchanged.

### Forbidden
- REAL BOUNDARY PROVEN for docs_write
- END-TO-END REAL PROVEN
- runtime v3 ADOPTED / production ready / global L5 / generalized executor safety
- automatic GO for another REAL action

## 19. Next candidate gate
**Delivery cycle (distinct Morris GO):** wire authenticated Product journey EC profile + Execute seam to governed REAL docs_write (`M4_BOUNDED_DOCS_WRITE_SCOPE` / real launch path), without widening authority — then re-run a bounded REAL E2E QA campaign.

No additional REAL effect is authorized by this incomplete campaign.

## 20. Exact final verdict
`AUTHENTICATED-PRODUCT-REPROOF-07 — INCOMPLETE — TOOLING OR WIRING GAP — REAL OPT-IN ON + M4 AGENT REGISTERED — EC SCOPE MISMATCH BLOCKS AUTHORITY — PRODUCT EXECUTE SEAM FIXTURE-ONLY — STOPPED BEFORE EXECUTE — ZERO ATTEMPT — ZERO DOCS_WRITE REAL — ZERO OPENAI LIVE — NO REPAIR — DELIVERY REQUIRED UNDER DISTINCT MORRIS GO`
