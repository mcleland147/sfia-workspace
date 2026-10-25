# SFIA Review Pack — FULL (proportionné)
# AKG-M5 / L2-D2 — H4-02 OA-ONLY CONVERGENCE & D1 EXIT QUALIFICATION
# ARCHITECTURE-INFORMED / REPO-FIRST / READ-ONLY

## 0. Meta
- Generated (UTC): 2026-10-25T08:24:31Z
- Generated (local): 2026-10-25 09:24:31 +0100
- Cycle: 6 Architecture + bloc 9 QA
- Profile: Critical · Typology: EVOL / ARCHITECTURE / QUALIFICATION
- Capacity: O-01 · Milestone: AKG-M5 L2-D2 post-merge / G-ACTIVATION PREPARATION
- Entry: S1–S4+CORR-01+CR-S2-02 on main via PR #617 · CI post-merge SUCCESS
- Mode: READ-ONLY · publish-in-cycle L3 only
- NO code/PRR/Roadmap mutation · NO project commit/push/PR/merge
- NO G-REAL · NO G-ACTIVATION · NO D1 structural removal · NO exclusive arming

## 1. GO Morris / Intention
Reorient H4 toward **OA-only** and preparation of **D1 exit**.
Central question: what still prevents Studio from operating the nominal OA Project path without operational D1 dependence?
Explicitly **not**: generic SQLite audit, new Proxy/hardening, parallel engine, theoretical test campaign, D1 rewrite.

Authorized: RO qualification, targeted consumer inventory, evidence analysis, blockers, exit proposal, Fresh Start class, Morris decisions, pack+handoff.
Forbidden: delete D1, runtime change, migration, create/inspect user DBs, G-REAL/G-ACTIVATION, v3 promotion.

## 2. Git Truth
- Repo: mcleland147/sfia-workspace
- Reading WT: …/sfia-workspace-feat-akg-m5-l2-d2-activation-prep-bounded
- WT branch/HEAD: feat/… @ `cdc9909d` (**pre-merge tip**; ancestor of main — **not** treated as current main)
- **origin/main (CURRENT):** `7db8afd7c27720712f08000274dbbc4e1a62d935` (PR #617 merge)
- SOURCE_ON_MAIN(cdc9909d): YES · key OA blobs match between HEAD and origin/main for investigated trees
- CI post-merge `40169014052`: SUCCESS
- Dirty local: `.tmp-sfia-review/chatgpt-review.md` only
- No rebase/reset/move of worktrees · other WTs preserved
- Entry handoff H4-01: `cb093db0` / blob `544d8ecf…` — **reused** (persistences, CAND-ABS-A, R-03/Q12 OPEN, H4 NOT QUALIFIED)

## 3. Sources
Process v2.6 · Build Doctrine · Roadmap · Product Completion · AKG-M5 blueprint + L2-D0 §08 · M4 target architecture §4 · doctrine v3 30/32/34/35/37 (NON ADOPTED) · PRR README+03–09 · H4-01 handoff.
Code (targeted): `lib/d1/**`, `lib/oa/project/**`, `lib/vertical-slice-runtime/**`, `lib/vertical-slice-core/localProjectComposition.ts`, `features/project-assistant/**`, `features/pre-m6-product-ui/**`, `features/d1/**`, `app/studio/**`, `app/projects/**`, `app/workspace/**`, `app/page.tsx`, O-01 DET `l2d2O01ProductUiIntegrated.test.tsx`.

## 4. R23 / R24
- R23: architecture-informed evidence from code+tests on main tip content
- R24: **NO SEMANTIC IMPACT** (no Product/doc mutation)
- Roadmap CURRENT TIP still **PR #614** while Git has **PR #617** integrated — truth-sync debt; **no** docs cycle this pack

## 5. Frontiers CURRENT (AS-IS)
| Frontier | Truth | D1 role |
|----------|-------|---------|
| Studio UI `/studio/**` | Product shell (pre-m6-product-ui) | **None** (no `@/lib/d1` imports) |
| Project Assistant | OA `projectServices` | **None** (no d1 imports) |
| OA Product Project/LPS | Truth C `oa-product.sqlite` | Isolated (collision guards vs d1/ops1) |
| Nora Memory B | `nora-session.sqlite` | Distinct · ≠ Truth C · ≠ D1 |
| Vertical Slice Runtime | wires OA SqliteProduct + optional cycle audit port | D1 BoundedAtomicAudit = **transient adapter option** · L1: core must not import lib/d1 · default composition uses Product Sqlite audit |
| D1 historical | `/workspace`, `/projects/*`, `/nouvelle-demande`, features/d1 | Active **when those routes hit** and exclusive OFF |
| Legacy nav helpers | D4 Option A | Redirect/notFound **only if** exclusive ON |
| `/` home | redirects to `/synthese` (POC fixture) | Not D1 · also **not** Product `/studio` (M4 target gap) |

## 6. O-01 OA-only nominal path

| Step | Component | SoT | D1 dep? | Path | Proof | Gap | O-01 impact |
|------|-----------|-----|---------|------|-------|-----|-------------|
| 1 Create Project | `createProjectRuntimeAction` → OA CreateProject | Truth C | **No** | `/studio/projects/new` + runtime | DET O-01 integrated · COVERAGE VERIFIED code | LIVE HTTP NOT PROVEN | Unblocked for OA-only |
| 2 Persist OA | SqliteProductStore | Truth C | No | product db.ts `new DatabaseSync` (Product, not D1) | M1 + O-01 DET | LIVE instance | Unblocked |
| 3 LPS create/read | OA LPS services | Truth C | No | same stack | O-01 DET | LIVE | Unblocked |
| 4 List/consult | ProjectsPage / studio | Truth C | No | `/studio` | O-01 DET UI | LIVE | Unblocked |
| 5 Reopen/restart | Product SQLite file | Truth C | No | path env/default | M1 durability DET | LIVE restart on designated instance | Unblocked conceptually |
| 6 Nora continuity | session sqlite | Memory B | No | distinct path | session path guards | LIVE | Unblocked |
| 7 Product audit | SqliteProjectAuditJournal default | Truth C `oa_audit_events` | No (default) | localProjectComposition L2-D1/D5 | D5 DET | — | Unblocked |
| 8 Nav Studio | `/studio/**` | — | No | ProductShell | code | `/`→synthese not studio | Prefer enter via `/studio` |

**Classification of D1 touchpoints relative to O-01:**
- **A. Runtime nominal → D1:** **Not on `/studio` O-01 path** (COVERAGE VERIFIED).
- **B. Import unused:** N/A for studio/PA/OA (no imports).
- **C. Adapter still required by Product:** **No** for default composition (Product audit on Truth C).
- **D. Distinct historical user path:** YES — `/workspace`, `/projects/new`, `/projects/[id]`, `/nouvelle-demande` + `features/d1/**` call `lib/d1/commands` / actions when exclusive OFF → **opens D1**.
- **E. Test/compat:** D1 suites + O-01 probe that exclusive blocks D1 create.
- **F. Historical data w/o active consumer:** Fresh Start has none; prod UNKNOWN (H4-01).

### Verdict O-01
**OA-ONLY NOMINAL PATH — COVERAGE VERIFIED** (code + DET for `/studio` Product create/list/reopen; no D1 SoT).
Caveat: **not** REAL BOUNDARY PROVEN · **not** global “D1 unused in process” while legacy routes remain live under exclusive OFF.

## 7. Minimal D1 dependency matrix (exit-relevant only)

| Component | Real consumer | Exec path | Utility now | Proof | Class | Proposed action | Dep | Exit proof | Gate |
|-----------|---------------|-----------|-------------|-------|-------|-----------------|-----|------------|------|
| `/studio` + PA + OA Product | O-01 operators | Product runtime | Primary Product | O-01 DET + imports | **KEEP** | Continue | — | LIVE later | H4/G-REAL |
| Nora session | chat context | Memory B | KEEP distinct | path guards | **KEEP** | Continue | — | — | — |
| `openD1Db` + Proxy | Legacy D1 pages/commands | when legacy hit / exclusive OFF | Historical intake | code | **FREEZE** candidate / **RETIRE LATER** | Neutralize consumers first | exclusive or route ADAPT | No open under OA-only policy | Morris |
| `lib/d1/commands` create/get/list | `app/projects/*`, workspace, nouvelle-demande | SSR/actions | Historical UI | page imports | **RETIRE LATER** | After nav ADAPT / exclusive policy | D4 | Routes dead or redirect | Delivery GO |
| `features/d1/**` | same routes | UI | Historical | imports | **RETIRE LATER** / **HARVEST** only if UI pattern needed (not engine) | Do not harden | — | No Product dep | L6/retire GO |
| D4 legacyNavigation | gated by exclusive | redirect/notFound | Cutover aid | DET D4 | **KEEP** until routes retired | Optional: ADAPT redirect **without** exclusive (future Delivery) | G-ACTIVATION vs nav Delivery | Routes never open D1 | Morris choose |
| BoundedAtomicAudit D1 | optional cycle audit inject | not default Product path | HARVEST port already | L1 comments | **HARVEST** (port) · store **RETIRE LATER** | No Product requirement | — | Product audit independent | — |
| Raw `new DatabaseSync` D1 | theoretical / tests | outside openD1Db | Residual R-03 | S2 negative | KNOWN GAP | **No new hardening** if OA-only excludes D1 path | — | Instance-scoped non-applicability | see §8 |
| Historical D1 data 131/43 | prior local Q0 | — | Conservation policy | H4-01 | **F** for Fresh Start | Do not import into Fresh Start | D6 owner | Policy | H4/D6 |
| Tests D1 | CI | vitest | Compat | suites | **KEEP** (tests) until retire | — | — | — | — |

**RETIRE LATER ≠ permission to delete.** Structural removal needs explicit Morris GO.

## 8. R-03 — qualification, not hardening
Morris position: no new D1 guardians unless they block OA-only exit.

Facts: openD1Db Proxy DET PROVEN · raw constructions KNOWN GAP · R-03 FULL CLOSE NOT CLAIMED.

**Fresh Start OA-only impact:**
If instance uses absolute Product+Nora paths, operators stay on `/studio`, and legacy D1 routes are not exercised (and/or later neutralized), then raw D1 `DatabaseSync` **cannot affect Product Truth C** and has **no operational D1 file to mutate**.
→ **R-03 NON-APPLICABLE TO THIS INSTANCE** under those **explicit conditions**.
→ Does **NOT** close R-03 globally · does **NOT** authorize exclusive arming · does **NOT** recommend new Proxy/monkey-patch/surveillance.

If legacy routes remain reachable on the same process with default exclusive OFF, D1 can still open via Class D paths → residual process-level exposure until nav policy or exclusive GO.

**No additional D1 hardening recommended** — actual blocker for OA-only exit is **legacy route reachability / instance designation**, not missing Proxy coverage on applicative openD1Db.

## 9. H4 Fresh Start (CAND-ABS-A reuse)
Architecture candidate: Studio → Truth C + Nora B · **no nominal D1** · absolute instance paths · outside worktree defaults.
**NOT** inventing App Support path · **NOT** creating DB · **NOT** launching Studio · **NOT** arming exclusive · **NOT** H4 PASS.

Checklist §08 for Fresh Start **without historical data**:

| # | Element | Fresh Start reading |
|---|---------|---------------------|
| 1 Env | Still **not designated** — pattern CAND-ABS-A only |
| 2 Owner | UNASSIGNED |
| 3 Writers | Product+Nora writers only if OA-only policy held; D1 writers N/A if routes unused |
| 4 Readers | `/studio` Product readers; legacy D1 readers = residual if routes live |
| 5 Volumes | Fresh Start: empty/new files · **do not import** 131/43 · prod UNKNOWN unchanged |
| 6 Users | To be named with instance |
| 7 Conservation | **N/A** for empty Fresh Start historical D1 · still document “none demonstrated” |
| 8 Backup | Product VACUUM INTO DET proven · LIVE procedure still required before broad activation |
| 9 Navigation | Prefer `/studio`; `/`→`/synthese` POC; legacy D1 routes residual |
| 10 Fallback | STOP without D1 write re-enable; S4 RO ≠ Q12 |
| 11 Q7–Q12 | DET partial; env-scoped REAL missing |
| 12 Absence D1 writers | DET under exclusive; Fresh Start can achieve by **non-use + later route neutralize** without claiming exclusive LIVE |
| 13 Stops | Dual-write · shared WT paths · exclusive without H4 · prod cutover |
| 14 Gate Morris | Designate instance + OA-only scope GO |

**H4 REAL — NOT QUALIFIED until instance designated.**

## 10. Q12 / recovery (no implementation)
Strict Fresh Start needs:
- Product snapshot capability (DET: VACUUM INTO) + integrity
- Data availability on designated paths
- On cutover/activation failure: **STOP opérationnel sans mutation D1** (option D) — sufficient for first bounded REAL prep
- Controlled Product restore (C) when proving recovery on that instance — later GO
- Product Q12 RO fallback (B) — **not** imperative for empty Fresh Start if D1 not in nominal path; remains OPEN for broader activation

S4 diagnostic RO ≠ Q12. No restore executed this cycle.

## 11. Trajectories

### MINIMAL PATH (indispensable for OA-only instance)
1. Morris designates **CAND-ABS-A** (absolute Product + Nora paths, owner, isolation vs worktrees).
2. Operate **O-01 solely via `/studio`** (documented entry); do not use legacy D1 URLs on that instance.
3. Rely on existing Product snapshot DET tooling for operator backup procedure (no new engine).
4. Treat D1 as **out of nominal path**; no exclusive arming required solely to “prove OA-only” if routes unused — optional later.
5. Evidence next: bounded REAL on that instance (distinct G-REAL) — create/list/reopen Project.

**Removes blocker:** missing designated isolated SoT for Product/Nora.
**Does not require:** new D1 Proxy, Q12 product impl, D1 deletion, Roadmap edit.

### LATER CLEANUP (non-blocking for first OA-only)
1. ADAPT legacy routes → always redirect/`notFound` to `/studio` (or retire) — eliminates Class D D1 opens without more freeze tech.
2. Align `/` with M4 (`/studio`) when docs/UI GO allows.
3. Harvest any UI patterns if needed; retire `features/d1` + commands under structural GO.
4. Data policy for any remaining historical D1 volumes (D6) — separate from Fresh Start.
5. Roadmap tip sync PR #617.
6. Only then: structural D1 removal GO.

### Why no new D1 hardening cycle
Applicative freeze already DET-proven; OA-only exit is blocked by **instance designation + residual legacy navigation**, not by incomplete Proxy.

## 12. Fake / Real
- Entry: S1–S4 DETERMINISTIC PROVEN
- This cycle: **OA-only execution-path and dependency qualification at read-only code scope**
- NOT claimed: REAL BOUNDARY · LIVE OA-only success · LIVE D4/R-CUT · H4 REAL PASS · global R-03 CLOSE
- G-REAL / G-ACTIVATION: **NOT GRANTED**

## 13. Evidence / gaps / exit (summary)
| Item | Level | Gap | Exit |
|------|-------|-----|------|
| OA `/studio` O-01 path free of D1 SoT | COVERAGE VERIFIED + DET BEHAVIOR | LIVE | Designate H4 + G-REAL |
| Legacy D1 routes active if exclusive OFF | COVERAGE VERIFIED | LIVE neutralize | Nav Delivery or exclusive GO |
| R-03 instance-scoped non-applicability | DOCUMENTED conditional | Misuse of legacy routes | Policy + optional route ADAPT |
| Q12 product | KNOWN GAP | — | Later if activation broadens |
| H4 instance | KNOWN GAP | designation | Morris |
| Roadmap tip lag | DOCUMENTED | #614 vs #617 | Docs GO |

## 14. Decisions requested of Morris
1. **Accept OA-only strategy** for next H4: Fresh Start CAND-ABS-A, D1 out of nominal path.
2. **Designate** instance paths + owner (or refuse).
3. Choose residual legacy handling: (a) procedural non-use for first REAL, (b) Delivery to redirect/retire routes, (c) later G-ACTIVATION exclusive — **prefer a/b over new D1 hardening**.
4. Confirm **no structural D1 removal** until consumers neutralized + explicit retire GO.
5. Defer Roadmap #617 tip sync to authorized docs cycle.
6. Do **not** grant G-REAL/G-ACTIVATION on this pack alone.

## 15. Next capability / smallest useful Delivery
**Next:** Morris H4 instance designation (CAND-ABS-A) → then bounded G-REAL OA-only on that instance.
**Smallest useful code Delivery (if Morris wants mechanical D1 non-reachability without exclusive):** unconditional D4-style redirect of legacy D1 entry routes to `/studio` / `notFound` — **not** more Proxy work.
Avoid: raw-DB hardening campaigns; Q12 impl before instance exists; D1 delete.

## 16. Verdict
**H4-02 OA-ONLY QUALIFICATION — EVIDENCE-BASED**
**OA-ONLY NOMINAL PATH — COVERAGE VERIFIED**
**D1 DEPENDENCY EXIT PATH — QUALIFIED** (residual Class D legacy routes = LATER / optional nav Delivery; **not** blocked by missing D1 hardening)
**NO ADDITIONAL D1 HARDENING RECOMMENDED UNLESS AN ACTUAL BLOCKER IS PROVEN**
**H4 REAL — NOT QUALIFIED UNTIL INSTANCE DESIGNATED**
**G-REAL — NOT GRANTED · G-ACTIVATION — NOT GRANTED**
**D1 STRUCTURAL REMOVAL — NOT AUTHORIZED**
**R-03 — instance-scoped non-applicable under OA-only conditions; globally OPEN**
**AKG-M5 GLOBAL — OPEN · RUNTIME V3 — NON ADOPTED**
**R24 — NO SEMANTIC IMPACT**

END_OF_PACK
