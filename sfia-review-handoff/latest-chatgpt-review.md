# SFIA STUDIO — GREENFIELD PRODUCT PROOF
# REAL CAMPAIGN RESUMPTION — ENVIRONMENT RESTORE / READINESS
# REVIEW PACK — LIGHT

## 0. Metadata

- **timestamp (Europe/Paris):** 2026-09-11 07:29:41 CEST
- **repo / worktree:** `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- **branch:** `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- **HEAD:** `6a2e3c9d71275145b20b514d02ab54533a72a2a7`
- **parent:** `4a80965a5f1687f805544c56be66e5d2ead3ea29`
- **origin/main:** `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- **accepted prior handoff:** `sfia/review-handoff` `0fbf1495ceb92413be294319702161ce6755f230`
- **Campaign:** Greenfield Product Proof
- **Phase:** REAL CAMPAIGN RESUMPTION — ENVIRONMENT RESTORE / READINESS
- **SFIA external cycle:** 9 — QA / Validation
- **Typologie:** EVOL · Profile CRITICAL
- **GO Morris consumed:** `GO MORRIS — RESUME GREENFIELD PRODUCT PROOF REAL ON 6a2e3c9d`
- **Product Completion:** COMPLETE / CLOSED
- **Runtime v3:** NON ADOPTED
- **Product source changes:** NONE
- **Product commit / push / PR / merge:** NONE

## 1. Git truth

```
branch = delivery/sfia-studio-product-proof-qual-to-governed-cycle
HEAD   = 6a2e3c9d71275145b20b514d02ab54533a72a2a7
HEAD^  = 4a80965a5f1687f805544c56be66e5d2ead3ea29
origin/main = a9f6c310a0826d0e5bd6f7264603382a86564db1
```

Tracked Product tree clean. Dirt only under `.tmp-sfia-review/**`.

## 2. Convergence / binding

Git = SoT · Build Doctrine = HOW · Roadmap = WHERE · v3 = destination (NON ADOPTED) · v2.6 = external process · Recommendation ≠ HumanDecision · Pilote owns runtime structural decisions · Morris owns construction/gates · deterministic ≠ REAL.

## 3. ZERO REAL during readiness

- No Nora composer send
- No OpenAI probe / chat completion / batch eval
- No automatic Nora prompts
- `OPS1_CONVERSATION_PROVIDER` not forced to `fake` on REAL runtime
- Claims: environment readiness only

## 4. Configuration paths inspected (no secret values)

- `projects/sfia-studio/app/.env.local` (keys present; values not printed except non-secret model/url/path)
- Product path resolver: `lib/oa/project/infrastructure/sqlite/paths.ts`
- Nora session resolver: `lib/nora-cognitive-runtime/sessionPaths.ts`
- Disposable Phase-B DBs under `.tmp-sfia-review/phase-b-ui-captures/*` identified and **not used**

## 5. REAL Product DB

Resolved from `.env.local` `SFIA_STUDIO_PRODUCT_DB_PATH`:

`/Users/morris/Projects/sfia-product-proof-greenfield-task-app-a9f6c310/projects/sfia-studio/.sfia-exec/product-proof-greenfield-task-app/product.sqlite`

- Contains project **Gestion de tâches**
- Exact id: `prj:22fc4a03-ff89-4f97-98a2-877dc9ea781e`
- Disposable DBs (`product-cr-followup-captures.sqlite`, `product-phase-b-captures.sqlite`) **NOT used**
- Stale port-3020 deterministic/fake process stopped before REAL start

## 6. REAL project durable state (candidate 6a2e3c9d interpretation)

| Fact | Value |
|------|-------|
| projectId | `prj:22fc4a03-ff89-4f97-98a2-877dc9ea781e` |
| title | Gestion de tâches |
| LPS version | **10** |
| LPS activeCycleInstanceId | `cyc:trj-bc8bfdc19942868116fc4b53` |
| Cycle | `cyc:framing` · Light · **active** |
| Trajectory | `trj:lr-bridge-4db9f4b59463` v1 validated · step `stp:cadrage-231ff2b3` **active** |
| Obligation-policy HD | **0** |
| Blocking reservation | 1 active — « proche de l’échéance » définition opérationnelle |
| CURRENT lifecycle Recommendations | **none** (historical LRs derive STALE) |

Historical LR notes (durable, not repaired):
- `epi:lr:23501980575bcac3:…` FINALIZE_CURRENT_CYCLE — **STALE**
- older NEXT_CYCLE framing LRs — **STALE** / superseded
- Do not infer CURRENT from Nora prose.

## 7. Historical FINALIZE HD interpretation — RECOVERY CONDITION

- Finalize HDs for active cycle: **8** total (Phase A count match)
- **7 superseded** + **1 accepted current:** `dec:pilot-life:aab3f5da-9197-4d86-8a7c-68820dde12a8`
- FinalizationAssessment under 6a2e3c9d:
  - `human_decision` obligation = **SATISFIED** (`finalize_decision:dec:pilot-life:aab3f5da-…`)
  - `canComplete` = **false**
  - blockers: `exit_criteria_open`, five `*_applicability_unknown`, `blocking_reservations`
- UI shows **Décision finale du Pilote — Satisfait** and **does not** currently show Finaliser (blockers remain)
- **Flag:** `REAL CAMPAIGN RECOVERY CONDITION — HISTORICAL FINALIZE HD ALREADY PRESENT`
- Implication for Morris manual campaign: after other blockers are resolved, a path that reassesses/completes using the existing accepted FINALIZE HD may close the cycle **without** creating a new FINALIZE HD. Do not click REEVALUATE / resolve aids casually without ChatGPT+Morris step control.
- Historical HDs were **not** deleted, superseded, or fabricated during readiness.

## 8. FinalizationAssessment / CTAs (read-only)

Blockers (canonical):
1. exit_criteria_open (trajectory step still active)
2. artifact_applicability_unknown
3. execution_contract_applicability_unknown
4. evidence_applicability_unknown
5. review_bundle_applicability_unknown
6. git_repository_applicability_unknown
7. blocking_reservations

Visible Pilot aids (not clicked): Clôturer étape trajectoire · Marquer réserve résolue · Confirmer aucun effet gouverné · Vérifier conditions de finalisation.

## 9. REAL Nora Session

- Override `SFIA_STUDIO_NORA_SESSION_DB_PATH`: ABSENT
- Default resolved path: `projects/sfia-studio/.sfia-exec/product/nora-session.sqlite` (current worktree)
- File present (`nora-session.sqlite`, ~98 KiB)
- Not deleted / not pointed at disposable QA session
- Conversation-only; not Truth C

## 10. REAL provider config (presence only)

| Variable | State |
|----------|-------|
| OPS1_CONVERSATION_PROVIDER | ABSENT (does **not** force fake) |
| OPENAI_API_KEY | PRESENT |
| OPENAI_MODEL | `gpt-5.6-luna` |
| OPENAI_REASONING_EFFORT | ABSENT (optional; not invented) |

No provider/model change. No token spend during readiness.

## 11. Auth readiness

| Item | State |
|------|-------|
| BETTER_AUTH_SECRET | PRESENT |
| BETTER_AUTH_URL | `http://localhost:3020` |
| GITHUB_CLIENT_ID | PRESENT |
| GITHUB_CLIENT_SECRET | PRESENT |
| SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS | PRESENT |
| SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY | `1` |

## 12. Runtime

- Command: `npm run dev` from `projects/sfia-studio/app`
- URL: `http://localhost:3020`
- Environments loaded: `.env.local`
- Product HEAD process tree from worktree at `6a2e3c9d`
- Disposable/fake 3020 process was stopped first

## 13. HTTP / auth smoke (ZERO Nora turns)

| Route | Result |
|-------|--------|
| `/` | 307 → login NO_SESSION |
| `/login` | 200 · Connexion · GitHub button · static assets OK · no crash markers |
| `/studio` | 307 → `/login?error=NO_SESSION&from=%2Fstudio` |
| project URL unauthenticated | 307 → login with from= project |

## 14. Project read-only UI smoke

Existing authenticated browser session reused (no credential automation).

Observed on `Gestion de tâches` / `prj:22fc4a03-…`:
- Cycle: **En cours · active**
- LPS: **État enregistré · v 10**
- Recommandation Nora lifecycle: **Aucune recommandation lifecycle courante**
- Finalization: Pilot decision Satisfait; exit criteria / applicability / reservation blockers visible
- No Finaliser CTA at this readiness moment
- No mutation CTAs clicked
- Composer send disabled / not used

## 15. Readiness side-effects on REAL DB (honest)

Durable campaign objects (Project / LPS / Cycle / Trajectory / HD / Reservation) **unchanged** by readiness intent.

Observational audit journal appends occurred:
1. One accidental `oa.cycle.finalization_assessed` during an early readiness `assess()` call before pure-readonly refactor (row_id 296, canComplete=false). **Not purged.**
2. Additional `oa.cycle.finalization_assessed` (+ one `TRAJECTORY_NOT_FOUND` load_failed) during normal UI project load assessment path (rows ~297–300). Observational only.

No HD created · no FINALIZE · no REEVALUATE completion · no reservation resolve · no trajectory step close · no obligation-policy HD · no LPS rewrite · no cycle status change.

## 16. Anti-claims

- Environment ready ≠ Product REAL proof complete
- ZERO calls during readiness ≠ REAL behavior proven
- Campaign authorized ≠ runtime v3 ADOPTED
- Product Completion remains CLOSED
- No Product push / PR / merge

## 17. Verdict

**PASS WITH RECOVERY CONDITION — REAL ENVIRONMENT READY / HISTORICAL CAMPAIGN STATE REQUIRES MANUAL CONTROL**

Ready for Morris manual campaign resumption on preserved `Gestion de tâches` under Product candidate `6a2e3c9d`, with explicit control around the already-accepted FINALIZE HD.
