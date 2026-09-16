# SFIA Studio — AUTHENTICATED PRODUCT REPROOF 04
## POST-PR491 REHYDRATION / READ-ONLY COHERENCE — FULL Review Pack

**Timestamp (UTC):** 2026-09-16T09:12:00Z
**Review Pack:** FULL
**Cycle:** 9 — QA / validation
**Typology:** RUN
**Profile:** Critical

**Verdict:**
`AUTHENTICATED-PRODUCT-REPROOF-REHYDRATION — FAIL — DURABLE EXECUTIONCONTRACT EXISTS BUT PRODUCT PROJECTION IS NOT RESTART-SAFE — PRODUCT CONTINUITY / EC REHYDRATION GAP — ZERO RECOVERY MUTATION — ZERO REAL — REMEDIATION REQUALIFICATION REQUIRED`

---

## A. Timestamp

2026-09-16T09:12:00Z (observation window ≈ 09:07–09:11Z UTC).

## B. Git truth

| Item | Value |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| `origin/main` | `c2c8280b7cfaa1b3a5656fb55b1e46ba73b23130` (matches MAIN TARGET) |
| Prior handoff tip | `49511ffeebbbd5858711065d8a3f6ca356a0ce71` (matches expected) |
| Dogfood worktree | `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d` |
| Initial HEAD | `3626e1c1` (detached, historical pre-PR491 / post-#490) |
| Initial status | Tracked Product source clean; only `.tmp-sfia-review/*` dirt (review evidence) |
| Alignment | Existing dogfood detached to `origin/main` (authorized; no Product branch; no reset --hard; no stash of Product source) |
| Final/aligned HEAD | `c2c8280b7cfaa1b3a5656fb55b1e46ba73b23130` |
| Final Product source status | Clean (no tracked Product source dirty). Untracked/review-only under `.tmp-sfia-review/` |

## C. Cycle / typology / profile

Cycle **9 — QA / validation**, typology **RUN**, profile **Critical**.
Critical reason: restart-safe continuity on HumanDecision → DecisionBasis → ExecutionContract → Inspection → Confirmation → effective authority.

## D. Morris GO consumed / prohibitions

**Consumed:** this phase only — Git truth, source inspection, clean dogfood align to integrated main, stop obsolete :3020 if needed, DB forensic backup + read-only SQLite, start Studio fake/REAL-off, reuse Better Auth session, read-only browser reload/screenshots/detail expand, compare durable vs UI, FULL Review Pack, canonical Review Handoff publish.

**NOT consumed / NOT performed:** Nora send; Reformuler; Instruire les options; Décider; Préparer; Inspecter; Confirmer; Statuer; Exécuter; Attempt; OpenAI LIVE; Cursor/docs_write REAL; Product source change; Product commit/push/PR/merge; any repair.

## E. Convergence

- **V3-F11** (native durable inspectable ExecutionContract) — KEEP durable / VERIFY projection.
- **V3-F12** (effect / Confirmation / authority governance) — KEEP durable / VERIFY fail-closed next step.
- **A3 stage:** EC prepared → inspected → Confirmation if required → authority.
- Product Completion C1 + Build Doctrine + Roadmap present on integrated main.
- Runtime v3: **NON ADOPTED** (observation only).

## F. CKC QA guidance

`method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` — cognitive guidance only; no architecture decision; no construction.

## G. Source-level rehydration analysis (A–F)

Observed on integrated main `c2c8280b`:

**A. Durable current-ExecutionContract read path usable by Product UI?**
**YES (server/domain), partial (history), NO (TrajectorySurface governed card).**
- Durable reads: `GetExecutionContract`, `GetContractInspectionState`, `readContractInspectionState` (`inspectExecutionContract.ts`), `listExecutionContractHistory` via `w2ReadProjectHistoryAction` / `projectHistory.ts`.
- UI card state is **client-local** `useState` in `TrajectorySurface.tsx` (`contract`, `inspection`, authorization-related local state).

**B. Invoked automatically on fresh project load?**
**NO for EC card / inspection state.**
Auto `useEffect`s only call:
- `refreshPreCycleCandidate`
- `rehydrateActiveDecisionSubject` (`w2ReadActiveDecisionSubjectAction` → `readActiveProposalDecisionSubject`)
No effect loads current EC into `setContract`.

**C. InspectionAttestation re-evaluated automatically on load?**
**NO** in Product UI. `readContractInspectionState` / `GetContractInspectionState` exist and are used by confirm/authorize/amend paths, not by fresh-load TrajectorySurface effects.

**D. Can already-decided Proposal-backed HD / DecisionBasis reconstruct to continue at existing EC rather than PREPARE?**
**Durable: YES. Product trajectory UI: NO.**
HD `dec:w2-prop:ca889356-…` + embedded `decisionBasis` + EC remain in SQLite. TrajectorySurface does not reconstruct `decision`/`contract` from them on load; local `decision` is set only by `decide()`, `contract` by PREPARE/amend/confirm. After DecisionRef closure, subject rehydrate returns non-`bound_awaiting_decision`, leaving trajectory with **« Instruire les options »** as the visible primary CTA.

**E. Exact reconstruction path if it exists?**
**Does not exist for the governed EC card.** Closest durable projection: History surface via `w2ReadProjectHistoryAction` → `listExecutionContractHistory` (shows version/status/decision attachment, not full disclosure card). W3B rehydrate paths cover terminal Attempt outcomes, not pre-inspect EC continuity.

**F. If no path:** stated — **no automatic EC/inspection rehydration into TrajectorySurface** — runtime observation continued and **confirmed the gap**.

### Client-local state
- Contract client-local: **YES** (`useState` + setters from PREPARE/amend/confirm).
- Inspection client-local: **YES** (`setInspection` from Inspect/amend paths only).

## H. Product DB path + backup

| Item | Value |
|---|---|
| Configured path (code) | `resolveProductSqlitePath` → `SFIA_STUDIO_PRODUCT_DB_PATH` or `projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` |
| Dogfood symlink | `…/product-proof-preflight-35b1371d/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` → `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` |
| Actual durable file | `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` |
| WAL/SHM at backup | absent |
| Forensic backup dir | `/tmp/sfia-reproof04-db-backup-20260916T090716Z/` |
| Backup copy SHA-256 | `5a9bc2da0619a91ac9bbb3c0c5b7cc1a4a2466d5e8b625e582c8449803824901` |
| `.backup` SHA-256 | `81ea31a2c8a9677c974aaec1c27ade4edae3959d276794fa6a7c3d5cf763bd81` |
| Original preserved | YES (read-only inspection; no INSERT/UPDATE/DELETE/VACUUM/migration) |

## I. Durable BEFORE campaign state

| Field | Actual |
|---|---|
| projectId | `prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6` |
| title | Gestion de tâches |
| LPS | `lps:3a8e02537e45d5b9` **version 17** |
| active CycleInstance | `cyc:trj-0a9c5104b7b6a3debe95eb8d` (active) |
| repositoryBinding | `mcleland147/sfia-workspace`, branch `main`, pathRoot `projects/sfia-studio/.sandbox` |
| Proposal (campaign) | `prop:f2:edba677a-123f-4f5e-baad-50533a65a3a0` (DecisionRef closes subject; pending marker resolved) |
| PresentedOptionSet | `optset:w2-b3be0236b91a` / `epi:set-w2-b3be0236b91a` (active Observation) |
| HumanDecision | `dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411` accepted; selected `opt:proposal-subject:pursue` |
| DecisionBasis | embedded in HD payload; `sourceType=proposal`, `sourceRef=prop:f2:edba677a-…` |
| ExecutionContract | `xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411` |
| EC version/status | **2** / **confirmation_required** |
| EC action/target | `cursor.docs_write.apply` / `workspace.isolated.docs_write` |
| targetRepositoryRef | `mcleland147/sfia-workspace` |
| targetPath | `projects/sfia-studio/.sandbox/gestion-de-taches.md` |
| InspectionAttestation | `insp:05042f3b6040838e` (fingerprint match; legacy facts) |
| Confirmation | **0** |
| AuthorityVerificationReceipt | **0** for this EC |
| ExecutionAttempt | **0** |
| Evidence / ReviewBundle for EC | **0** |

Safety baseline held: no Confirmation / AUTHORIZED receipt / Attempt / effect for this EC.

## J. Proposal / HD / DecisionBasis / EC relationships

```
prop:f2:edba677a-123f-4f5e-baad-50533a65a3a0
  → HD dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411 (pursue)
      → DecisionBasis.sourceRef = same Proposal
      → EC xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411 (v2, confirmation_required)
          → Attestation insp:05042f3b6040838e (pre-PR491 fact set)
```

## K. Historical inspectedFacts

```
action, target, scope, requiredAuthority, requiredCapabilities,
constraints, stopConditions, reversibility, semanticFingerprint
```

Missing vs integrated required docs_write profile (non-exhaustive):
`inputs.targetRepositoryRef`, `inputs.targetPath`, `inputs.scopeIn`, `inputs.createOrModify`, `inputs.noDelete`, `inputs.contentRequirements`, `evidenceRequirements`, `expectedOutputs`.

## L. Integrated interpretation of old attestation

From `requiredInspectedFactsForContract` + `evaluateInspectionSufficiency` on main:

- fingerprint matches
- **sufficient = false**
- **reason = inspected_facts_incomplete**
- expected business UX if EC card were projected: réinspection requise / fail-closed

**Not observed in UI** because EC card/inspection state did not rehydrate.
**Not a PR491 sufficiency regression:** domain code would fail closed **if** `GetContractInspectionState` were invoked with dynamic required facts. Gap is **projection/rehydration**, not sufficiency logic.

## M. Old runtime

localhost:3020 — **no listener** at start of this phase (nothing to stop).

## N. New runtime

| Item | Value |
|---|---|
| Shell PID | 38666 (`npm run dev`) |
| Listening node PID | **38690** |
| CWD | `…/sfia-studio-product-proof-preflight-35b1371d/projects/sfia-studio/app` |
| Command | `next dev --port 3020` |
| Serving Git SHA | `c2c8280b7cfaa1b3a5656fb55b1e46ba73b23130` |
| Env | `OPS1_CONVERSATION_PROVIDER=fake`, `SFIA_STUDIO_CURSOR_REAL=0`, `OPS1_CURSOR_REAL=0` |
| Classification | cognition **fake**; Cursor REAL **OFF** |

## O. Authentication

Normal Better Auth session reused in existing localhost browser tab (`Pilote` / `P`).
No test identity injection, no cookie forge, no auth bypass.
Authenticated project URL loaded successfully after restart.

## P. Fresh-page evidence

- Fresh Studio start on integrated main.
- Hard reload of `/studio/projects/prj%3Aae9bd0de-…`.
- Project title, LPS v17, repository binding fields, History EC row, Trajectory « Instruire les options » observed.
- Expanded read-only LPS « Détails techniques » only.
- **No** business CTA clicked.

## Q. Acceptance oracle R1–R17

| ID | Result | Note |
|---|---|---|
| R1 | **FAIL** | Durable EC exists; TrajectorySurface does not auto-surface it to Pilot |
| R2 | **FAIL** | No EC card; competing CTA is instruct options (not continue-at-EC) |
| R3 | **FAIL** | Full `xct:…` not shown on governed surface (History shows decision attachment only) |
| R4 | **PARTIAL** | History shows `confirmation_required`; governed card absent |
| R5 | **FAIL** | action not visible on governed surface |
| R6 | **FAIL** | technical target not visible on governed surface |
| R7 | **FAIL** | exact path not visible before Inspect |
| R8 | **PASS** | repository binding fields show `mcleland147/sfia-workspace` |
| R9 | **FAIL** | scope/constraints/stops/reversibility not on governed surface |
| R10 | **N/A→FAIL** | cannot treat as insufficient in UI — inspection panel absent |
| R11 | **FAIL** | no reinspection / fail-closed inspection messaging for this EC |
| R12 | **PASS*** | Confirm CTA absent/unavailable (*vacuously — no EC card) |
| R13 | **PASS** | no Execute CTA |
| R14 | **FAIL** | primary useful CTA presented: **Instruire les options**; LPS next action: « Poursuivre la qualification avec Nora, puis décider » — not re-inspect existing EC |
| R15 | **PASS** | no duplicate Proposal/HD/Basis/EC rows from page load |
| R16 | **PASS** | LPS remains v17 |
| R17 | **PASS** | no Confirmation / authority grant / Attempt / execution |

## R. Screenshots (review-evidence only; not Product Git)

Under dogfood `.tmp-sfia-review/` (also copied to agent workspace `.tmp-sfia-review/`):

- `sfia-reproof04-A-fresh-workspace.png` — fresh authenticated workspace + recovery banner
- `sfia-reproof04-B-repo-and-trajectory.png` — repo binding + trajectory **Instruire les options**
- `sfia-reproof04-D-history-ec.png` / `sfia-reproof04-E-history-ec-and-instruct-cta.png` — History EC row + competing CTA
- `sfia-reproof04-G-cta-area.png` — LPS next-action / pilotage CTAs

## S. Durable AFTER state

Business semantic rows for campaign: **identical** to BEFORE (LPS 17, EC v2/confirmation_required, attestation count 1, HD count 6, conf/receipt/attempt 0, epistemic count 54). Row content hashes unchanged for EC/attestation/HD/LPS/epistemic tables.

## T. BEFORE/AFTER semantic diff

**Product semantic delta = ZERO** for LPS / Proposal epistemic closure / HD / DecisionBasis / EC / InspectionAttestation / Confirmation / Authority / Attempt / Evidence / ReviewBundle.

**Separate non-semantic durable write observed:** +8 `oa_audit_events` during page load (`oa.cycle.finalization_assessed` ×4, `oa.cycle.load_failed` TRAJECTORY_NOT_FOUND ×4). Reported as audit/bookkeeping side-effect of read paths — **not** mislabeled as business-semantic Product mutation. Live DB file SHA changed accordingly; campaign semantic hashes unchanged.

## U–AA. Mutation / REAL / source controls

| Control | Result |
|---|---|
| Product semantic mutation | **ZERO** (business entities) |
| OpenAI LIVE | **ZERO** |
| Cursor / docs_write REAL | **ZERO** |
| Confirmation created | **NO** |
| Authorization action invoked | **NO** |
| ExecutionAttempt created | **NO** |
| Product source modified | **ZERO** |
| Product commit / push / PR | **NONE** |

## AB. Exact observed blocker

**PRODUCT CONTINUITY / EC REHYDRATION GAP**

Durable EC `xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411` (v2, `confirmation_required`, docs_write target + path) exists and appears in History, but fresh Product TrajectorySurface does **not** reconstruct `contract`/`inspection`/`decision` into the governed execution card. Competing CTA: **Instruire les options**. Exact path / inspection fail-closed messaging not available to Pilot without a forbidden PREPARE/Inspect recovery.

## AC. Next action recommendation

**FAIL →** bounded remediation requalification under a **NEW DISTINCT Morris GO** (restart-safe EC + inspection projection into TrajectorySurface / equivalent; do not paper over with PREPARE).
Do **not** authorize re-inspect Product action until continuity is repaired or explicitly re-scoped.

## AD. Claims authorized / forbidden

**Authorized claims:** durable campaign anchors verified; source gap A–F; UI non-rehydration observed; semantic ZERO; REAL ZERO; handoff publish for this QA report.
**Forbidden claims:** PASS continuity; that History row alone satisfies R1–R14; that legacy attestation was UI-evaluated; any Product repair in this cycle.

## AE. Verdict

**AUTHENTICATED-PRODUCT-REPROOF-REHYDRATION — FAIL — DURABLE EXECUTIONCONTRACT EXISTS BUT PRODUCT PROJECTION IS NOT RESTART-SAFE — PRODUCT CONTINUITY / EC REHYDRATION GAP — ZERO RECOVERY MUTATION — ZERO REAL — REMEDIATION REQUALIFICATION REQUIRED**

STOP. No re-inspection. No Product remediation in this cycle.
