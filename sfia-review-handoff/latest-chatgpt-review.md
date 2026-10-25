# SFIA Review Pack — LIGHT (H4-01)
# AKG-M5 / L2-D2 — PRE-REAL QUALIFICATION H4-01
# ENVIRONMENT AND PERSISTENCE BOUNDARY ASSESSMENT

## 0. Meta
- Generated (UTC): 2026-10-25T07:16:47Z
- Generated (local): 2026-10-25 08:16:47 +0100
- Cycle: 6 Architecture technique + bloc 9 QA proportionnée
- Profile: Critical · Typology: EVOL / QUALIFICATION
- Capacity: O-01 · Milestone: AKG-M5 L2-D2 post-merge verified / G-ACTIVATION preparation
- Mode: READ-ONLY investigation · publish-in-cycle L3 handoff
- NO code change · NO PRR/Roadmap edit · NO project commit/push/PR/merge · NO G-REAL · NO G-ACTIVATION

## 1. GO Morris
Engage preparatory H4-01 qualification after verified PR #617 integration.
Qualify prerequisites of a first isolated Studio instance for later bounded REAL validations.
Does NOT cover: G-REAL, G-ACTIVATION, migration, cutover, code/doctrine/v3 changes.

## 2. Git Truth
- Repo: mcleland147/sfia-workspace
- Reading WT: /Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-activation-prep-bounded
- Branch: feat/akg-m5-l2-d2-activation-prep-bounded @ cdc9909d8adaa6b31df3b75e33e58a8d27c88317
- origin/main: 7db8afd7c27720712f08000274dbbc4e1a62d935 (EXPECTED MATCH — PR #617 merge)
- PR #617: MERGED
- CI post-merge 40169014052: SUCCESS (event=push, head=7db8afd7)
- Local dirty: only `.tmp-sfia-review/chatgpt-review.md` (this pack)
- No branch switch / no new project branch / no reset/clean/force
- Other worktrees preserved (list observed; not mutated)

## 3. Sources (Git; SHAs via main tip)
- Process: cycle template · routing · operating model · guardrails
- Convergence: build-doctrine · roadmap (CURRENT TIP still cites PR #614 — divergence noted §9)
- Product completion cadrage · AKG-M5 blueprint + 04 L2-D0 §08 H4 checklist
- Doctrine v3 30/32/34/35/37 — NON ADOPTED
- PRR README + 03–09 + manifest (CURRENT as-implemented reference)
- Code: `app/lib/d1/**`, `oa/project/**` paths/db/snapshot, `nora-cognitive-runtime/sessionPaths`, `ops1/paths`, wrap Proxy
- Entry handoff: sfia/review-handoff @ 86223858 (PR617 merge verification)

## 4. R23 / R24
- R23: PRR + code + DET proofs confronted for H4 boundaries — see matrices below
- R24: NO SEMANTIC IMPACT — no behaviour/doc mutation this cycle
- Roadmap status lag: CURRENT TIP still **PR #614** while Git establishes **PR #617 POST-MERGE VERIFIED** — signalled only; no Roadmap overwrite; defer to authorized truth-sync cycle

## 5. Environment candidates (no invented machine / App Support path / owner)

| ID | Type | Identified? | Owner | Notes |
|----|------|-------------|-------|-------|
| CAND-DET | DET / synthetic Vitest tmpdir | YES (code/tests) | test harness | S1–S4 scope · **≠ H4 instance** |
| CAND-WT-LOCAL | Local operational · cwd-relative `.sfia-exec` under studio root | PATTERN YES · this WT: default DBs **absent** | UNASSIGNED | Worktree-coupled · multi-WT risk · not Application Support–class |
| CAND-ABS-A | Isolated absolute paths via `SFIA_STUDIO_PRODUCT_DB_PATH` + `SFIA_STUDIO_NORA_SESSION_DB_PATH` (+ optional `D1_SQLITE_PATH`) — Option A design | PATTERN YES · **instance NOT DESIGNATED** | UNASSIGNED | Preferred future H4 candidate class · Morris must name path + owner + population policy |
| CAND-PROD | Production | UNKNOWN | UNKNOWN | R-VOL-01 OPEN · **out of scope** · ≠ empty |

**H4 REAL — NOT QUALIFIED** (no designated real instance).
**Recommendation:** Morris designate **CAND-ABS-A** (or reject) before any G-REAL / exclusive arming.

## 6. H4 checklist §08 (14) — AS-IS against designated REAL instance

| # | Element | Status | Evidence level |
|---|---------|--------|----------------|
| 1 | Environnement identifié | FAIL for REAL — no named env in GO | DOCUMENTED pattern only |
| 2 | Owners / autorités | FAIL — UNASSIGNED (D0 D6) | DOCUMENTED |
| 3 | Writers D1 utilisés | PARTIAL — code inventory known; **effective usage on REAL env unknown** | COVERAGE VERIFIED (code) · BEHAVIOR PROVEN DET only |
| 4 | Readers / parcours historiques | PARTIAL — D4 Option A code CURRENT; LIVE HTTP NOT PROVEN | COVERAGE VERIFIED (code) |
| 5 | Volumes / identités | FAIL for REAL — prod UNKNOWN; local Q0 historical 131/43 not re-scanned; this WT defaults absent | KNOWN GAP / DOCUMENTED |
| 6 | Utilisateurs / parcours affectés | FAIL — not qualified for a designated instance | KNOWN GAP |
| 7 | Obligations de conservation | FAIL — owner/policy UNASSIGNED | DOCUMENTED OPEN |
| 8 | Disponibilité données / backup | PARTIAL — VACUUM INTO DET PROVEN; LIVE instance procedure NOT PROVEN | BEHAVIOR PROVEN DET · KNOWN GAP LIVE |
| 9 | Politique anciens liens | PARTIAL — D4 Option A DET; LIVE NOT PROVEN | BEHAVIOR PROVEN DET |
| 10 | Plan reprise / fallback | PARTIAL — S4 DET RO diagnostic ≠ Q12 product | KNOWN GAP Q12 |
| 11 | Tests NR Q7–Q12 env scope | PARTIAL — DET suites exist; env-scoped REAL missing | KNOWN GAP |
| 12 | Preuve absence writer D1 post-freeze | PARTIAL — DET freeze/injected/S2; LIVE NOT PROVEN | BEHAVIOR PROVEN DET |
| 13 | Stop conditions | DOCUMENTED (writer leak · dual-write · prod sans preuve) | DOCUMENTED |
| 14 | Gate Morris env-limited | NOT CONSUMED for a named REAL env | OPEN |

## 7. Persistence inventory (config/code — no user DB opened)

### A. Product Truth C
- File: `oa-product.sqlite` · override `SFIA_STUDIO_PRODUCT_DB_PATH` · default `…/.sfia-exec/product/oa-product.sqlite`
- Role: Project / LPS / decisions / executions — Product truth
- Writer: OA Product services (`lib/oa/project` SqliteProductStore — `new DatabaseSync` in product db.ts — **not** D1)
- Reader: Studio OA / project-assistant / product UI
- Restart: file durable under configured path; cwd-relative defaults are worktree-sensitive
- Snapshot: `productSqliteSnapshot.ts` VACUUM INTO — DET PROVEN; LIVE NOT PROVEN
- Exit: KEEP

### B. Nora Memory B
- File: `nora-session.sqlite` · `SFIA_STUDIO_NORA_SESSION_DB_PATH` · default sibling under `.sfia-exec/product/`
- Role: conversation/context — **≠** Truth C (collision guards vs product/d1/ops1)
- Writer: `productSqliteSession.ts` / Nora runtime
- Exit: KEEP distinct

### C. D1 historical
- File: `d1.sqlite` · `D1_SQLITE_PATH` or `OPS1_EXEC_ROOT/.../state` or default `…/.sfia-exec/local-i1/state/d1.sqlite`
- Role: intake/audit historical · FREEZE when exclusive trim=`"1"` · RETIRE LATER
- Applicative open: `openD1Db` → allowlist Proxy + authorizer + seal singleton
- Exit: FREEZE gated / RETIRE LATER — no physical removal in L2-D2

### D. Other
- OPS1: `ops1.sqlite` under `.sfia-exec/local-i1` — parallel; not Product Truth C
- M4 launch safety SQLite (`sqliteLaunchSafetyJournal.ts`) — separate
- Exclusive marker: `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` DEFAULT OFF — process-local; **not** global across worktrees
- This Delivery WT: default product/nora/d1/ops1 paths **do not exist** (presence check only; **no SQLite open**)
- Application Support: **no scan of real volumes** (authorization not granted)

## 8. R-03 D1 boundaries (recommendation classes ≠ adopted exemptions)

| Path | Characterisation | Risk class (recommendation) |
|------|------------------|-----------------------------|
| `openD1Db` + wrap + seal + injected writers | DET BEHAVIOR PROVEN | Baseline for exclusive ON |
| `setAuthorizer` non-exposable; iterate refuse-always | CR-S2-01/02 DET | Contained on applicative path |
| Raw `new DatabaseSync` on **D1 file** outside `openD1Db` | Theoretical residual; honest negative tests | **BLOCKING FOR G-ACTIVATION** honesty · **BLOCKING FOR G-REAL** containment claim · **NON-BLOCKING WITH EXIT** for H4 *designation* of isolated empty instance |
| Product/Nora/OPS1/launch-safety `new DatabaseSync` | Other stores — not D1 freeze surface | Out of R-03 D1 residual (separate ownership) |
| RO disposable D1 opens in tests | Diagnostic only | ≠ Q12 |

**Policy options for Morris (raw-DB):**
1. Accept residual + document STOP if raw D1 open detected on H4 instance (monitor/process review).
2. Require all D1 access via `openD1Db` only + forbid/detect raw opens (future Delivery — not this cycle).
3. Defer G-ACTIVATION until chosen policy + exit proof.

R-03 FULL CLOSE — **NOT CLAIMED**.

## 9. Q12 / recovery
| Item | Status |
|------|--------|
| Coherent snapshot VACUUM INTO | DET ACQUIRED |
| Restore disposable | DET ACQUIRED |
| Integrity RO | DET ACQUIRED |
| Diagnostic RO under exclusive | DET (S4) ≠ Q12 |
| Product Q12 RO fallback | **OPEN / NOT IMPLEMENTED** |
| R-CUT LIVE | NOT PROVEN |
| Restore on operational instance | NOT PROVEN |
| D1 write re-enable | FORBIDDEN without reconciliation + distinct GO |

Missing proofs before REAL cutover claims: designated instance quiesce · operator snapshot/restore on that instance · Q12 product behaviour · R-CUT LIVE oracle with exclusive held.

## 10. Exit matrix (compressed)

| Capacity/prereq | State | Primary proof | Gap | Risk | Decision | Exit proof | Next |
|-----------------|-------|---------------|-----|------|----------|------------|------|
| H4 env identified | NOT for REAL | Code path patterns | No designated instance | High if arm exclusive blindly | Morris name CAND-ABS-A | Named path+owner+scope | H4 instance-scoped |
| Owner | UNASSIGNED | D0 | Policy | Medium | Assign owner | Named authority | D6/H4 |
| Writers inventoriés | Code YES / REAL NO | db.ts / repository / audit | Effective REAL usage | High on shared DB | Inventory on designated env | Usage evidence | G-REAL prep |
| R-03 residual | OPEN | S2 negative test | Raw D1 | High for activation claim | Raw-DB policy | Policy+proof | G-ACTIVATION |
| Q12 | OPEN | S4 ≠ Q12 | Product fallback | High for recovery story | Scope Q12 Delivery | Behaviour proof | R-CUT LIVE |
| Snapshot LIVE | NOT PROVEN | S1 DET | Instance procedure | High | H4 then LIVE snapshot GO | Operator evidence | G-ACTIVATION |
| D4/R-CUT LIVE | NOT PROVEN | DET only | HTTP/LIVE | High | After H4 | LIVE suites | G-REAL |

Explicit answers:
- H4 environnement identifié? **NO (REAL)**
- Owner connu? **NO**
- Données identifiées? **NO on REAL** (WT defaults absent; prod UNKNOWN)
- Writers inventoriés? **YES at code** / **NO at REAL usage**
- Couverture lecteurs? **PARTIAL (code/DET)**
- R-03 impact caractérisé? **YES (recommendation classes)**
- Q12 nécessaire et cadré? **YES necessary · NOT implemented**
- Snapshot opérationnel prouvé? **NO (DET only)**
- D4 LIVE admissible? **NO**
- R-CUT LIVE admissible? **NO**
- Instance candidat REAL acceptable? **NO until Morris designates**

## 11. Fake / Real
- Entry: DETERMINISTIC PROVEN AT TESTED SCOPE
- This cycle: **ENVIRONMENT BOUNDARY ASSESSED AT READ-ONLY EVIDENCE SCOPE**
- NOT: REAL BOUNDARY PROVEN · LIVE CUTOVER · E2E REAL
- G-REAL / G-ACTIVATION: **NOT GRANTED**
- DETERMINISTIC ≠ READY FOR REAL

## 12. Critical path
O-01 (DET integrated) → **H4 designate instance** → R-03/Q12 policy → G-REAL → D4 HTTP / R-CUT LIVE proofs → éventuel G-ACTIVATION
Do NOT divert to L3/OPS1 rebuild / L4 / L5 without distinct qualification.

## 13. Decisions requested of Morris
1. Designate (or refuse) **CAND-ABS-A**: absolute Product + Nora (+ optional D1) paths, owner, isolation rule vs worktrees.
2. Assign conservation/policy owner (D6) or keep UNASSIGNED with explicit STOP on data actions.
3. Choose raw-DB residual policy option (1/2/3 above) before G-ACTIVATION.
4. Authorize a later Roadmap tip sync acknowledging PR #617 (separate docs cycle).
5. Do **not** grant G-REAL / G-ACTIVATION on this pack alone.

## 14. Verdict
**H4 PRE-QUALIFICATION COMPLETE — CANDIDATE RECOMMENDED, MORRIS DECISION REQUIRED**
**H4 PRE-QUALIFICATION — EVIDENCE-BASED / NO REAL ACTIVATION**
**H4 REAL — NOT QUALIFIED**
**NO READY FOR REAL**
**G-REAL — NOT GRANTED · G-ACTIVATION — NOT GRANTED**
**AKG-M5 GLOBAL — OPEN · RUNTIME V3 — NON ADOPTED**
**R24 — NO SEMANTIC IMPACT**

END_OF_PACK
