# STUDYFLOW NATURAL POST-INTEGRATION REPROOF
## Phase A — DURABLE STATE REHYDRATION / READ-ONLY
## FULL Review Pack — Cursor → ChatGPT

Generated: 2026-09-25T19:58:42Z
Campaign: STUDYFLOW NATURAL POST-INTEGRATION REPROOF
Phase: A — DURABLE STATE REHYDRATION / READ-ONLY
Cycle: 9 — QA / validation
Profile: CRITICAL
Morris GO consumed: **GO STUDYFLOW RESUME — READ-ONLY DURABLE STATE REHYDRATION FIRST.**
Cursor REAL: NOT RUN
Product mutations: NONE
HumanDecision / Reservation resolve / EC amend / Attempt: NONE
Roadmap sync / GAP-15 fix / fresh Project: NONE

---

## 1. GO MORRIS CONSUMED

GO STUDYFLOW RESUME — READ-ONLY DURABLE STATE REHYDRATION FIRST.

Authorized and consumed: local Git Truth Check · safe FF to integrated main SHA · Product SQLite discovery · SQLite read-only · Journal/conversation implementation trace · StudyFlow durable qualification · Critical report · L3 handoff publish.

Not authorized / not performed: Cursor REAL · `SFIA_STUDIO_CURSOR_REAL=1` · docs_write REAL · new Project · StudyFlow mutation · HD · Reservation resolve/defer · EC create/amend · Attempt launch/retry · Evidence write · durable Nora side-effects · Pilot action by Cursor · code change · project commit/push/PR/merge · Roadmap sync · GAP-15 fix · next macro auto-start.

---

## 2. GIT TRUTH

| Field | Value |
|-------|-------|
| Repository | `mcleland147/sfia-workspace` |
| Local branch | `feat/sfia-studio-pilot-execution-experience-recovery-simplification-01` |
| Local HEAD | `49249101bab1bd1e3a1d91b469fe7b41341c5a01` |
| `origin/main` | `49249101bab1bd1e3a1d91b469fe7b41341c5a01` |
| Expected framing SHA | `49249101bab1bd1e3a1d91b469fe7b41341c5a01` |
| Match | **YES** — merge commit of PR #522 |
| Checkout note | Dedicated `main` worktree already occupied elsewhere; current branch was **fast-forward-only** from `dbefeb15` → `49249101` (no merge commit, no rebase, no hard reset). HEAD ≡ `origin/main`. |
| Project dirty | None observed outside ignored `.tmp-sfia-review/**` |
| PR #522 | MERGED |
| Post-merge CI (cadrage) | SFIA Studio CI #605 · run `36180077825` · SUCCESS · Required Gate PASS (prior verification; not re-run this pass) |

---

## 3. SOURCES READ (obligation set)

Process: `prompts/templates/sfia-cycle-execution-template.md` · `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` · `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` · `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` · `method/sfia-fast-track/checklists/sfia-validation-checklist.md` · `method/sfia-fast-track/automation/sfia-validation-engine.md` · `docs/architecture/2026-06-27-sfia-decision-engine.md` · `prompts/templates/04-validate-cursor-result.md` · `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`

Studio: `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` · `sfia-studio-convergence-roadmap.md` · `product-completion/01-product-completion-cadrage.md`

Doctrine v3: `32-living-project-state-and-dynamic-trajectory.md` · `34-agent-capabilities-reversibility-and-execution-governance.md` · `35-artifact-evidence-debt-and-controlled-learning.md` · `ckc/09-qa-validation.md`

Runtime/persistence: `paths.ts` · `db.ts` · `sqliteProductStore.ts` · `vertical-slice-runtime/service.ts` · `liveProjectContext.ts` · `studio-projects/**` · `project-assistant/**` · `nora-cognitive-runtime/productSqliteSession.ts` · `cycleJournalStore.ts` · `sessionPaths.ts`

Prior remote handoff: `origin/sfia/review-handoff` @ `dbef91dd…` · blob `92beef00e337cd84f225929f24845d96c4eaeea2` (post-merge #522 pack) — read before conclusion.

---

## 4. PRODUCT SQLITE — READ-ONLY METHOD

| Field | Value |
|-------|-------|
| Override source | `projects/sfia-studio/app/.env.local` key `SFIA_STUDIO_PRODUCT_DB_PATH` only (no other secrets printed) |
| DB path used | `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/new-project-campaign-01/product/oa-product.sqlite` |
| Default path (not used for StudyFlow) | `projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` — exists but **does not** contain StudyFlow |
| Exists | YES (~3.4 MB, mtime 2026-09-25) |
| Open method | Python `sqlite3` URI `file:<path>?mode=ro` + `PRAGMA query_only=ON` (also verified with `sqlite3 -readonly`) |
| Migrations / `openProductSqlite` | **NOT** used |
| `integrity_check` | **ok** |
| `schema_meta.schema_version` | `m8-0.1.0` |
| Writes | NONE |

Known Product tables present and used: `oa_projects`, `oa_lps`, `oa_lps_current`, `oa_cycle_instances`, `oa_human_decisions`, `oa_execution_contracts`, `oa_execution_attempts`, `oa_evidence`, `oa_review_bundles`, `oa_project_trajectories`, `oa_project_trajectory_current`, `oa_confirmations`, `oa_epistemic_items`, `oa_ec_inspection_attestations`, `oa_authority_verification_receipts`, `oa_claim_evaluations`, `oa_audit_events` (+ idempotency/budget helpers).

---

## 5. STUDYFLOW PROJECT RESOLUTION

| Field | Value |
|-------|-------|
| Candidates titled StudyFlow | **1** |
| `projectId` | `prj:34e7351c-770c-474a-8edc-9c82a07be41d` |
| Title | StudyFlow |
| Status | `active` |
| `projectWorkspaceKey` | `studyflow` |
| Repository binding | GitHub `mcleland147/sfia-workspace` · `pathRoot=projects/studyflow` · defaultBranch `main` |
| Current LPS pointer | `lps:e6310b5566af7207` |
| `activeCycleInstanceId` (project payload) | `cyc:trj-2ee956d99383359aadd408d1` |
| Created | 2026-09-25T07:38:46.140Z |
| Updated | 2026-09-25T17:00:18.732Z |
| Uniqueness | **UNIQUELY RESOLVED** |

Other projects in same DB (not StudyFlow): FocusFlow, KidPlan, MealFlow, multiple RC Visual/Debug/Smoke harness projects — ignored for resume.

On-disk managed path `projects/studyflow/` / `01-cadrage/`: **absent** at inspection (consistent with failed REAL attempt; no artifact created).

---

## 6. DURABLE STATE REHYDRATION

### A. Project
See §5. Doctrine package `pkg:sfia-studio-doctrine-v3@1.0.0` resolved.

### B. Living Project State (current)
| Field | Value |
|-------|-------|
| LPS version | **32** |
| `lpsVersionId` | `lps:e6310b5566af7207` |
| Status | `active` |
| Objective | Petite app web de révision étudiant (matières, tâches/objectifs, échéances, planning, suivi terminé/retard/à revoir) |
| `activeCycleInstanceId` | `cyc:trj-2ee956d99383359aadd408d1` |
| `ckcResolutionRef` | `ckc:m2-273168644546-400c74a1a3237135` |
| Trajectory binding | `trj:lr-bridge-039d11e6fe6b` @ **v3** |
| `nextStep` | `recovery_diagnose_or_replan` |
| Evidence refs | `ev:w3b:7b9022c9c4221122` |
| ReviewBundle refs | `rb:w3b:7b9022c9c4221122` |
| Decision IDs (LPS) | 5 HDs listed (trajectory approvals + W2 props + recovery traj) |
| Context tail | Durable W3C post-evidence Nora analysis embedded — FAIL / `base_head_sha_missing` / recover / no auto-success |

### C. Cycles
| cycleInstanceId | type | profile | status | notes |
|-----------------|------|---------|--------|-------|
| `cyc:trj-2ee956d99383359aadd408d1` | `cyc:framing` | Light | **active** | Primary StudyFlow framing cycle; acknowledged 07:42Z; **not closed** |
| `cyc:f2-539d66d7d03aaff6` | `cyc:framing` | Light | acknowledged | Secondary; no trajectory bind in payload |

Cycle payload still references `trajectoryVersion: 1` / `trajectoryStepId: stp:cadrage-9ec83efa` while LPS/current trajectory are at **v3** — see findings.

### D. ProjectTrajectory
| Field | Value |
|-------|-------|
| Current pointer | `trj:lr-bridge-039d11e6fe6b` @ **v3** |
| Status | **validated** |
| Decided by | `dec:w2-trj:328b70a0-9481-4e01-9bf0-a96aec87bb01` |
| Decided option | `opt:trajectory:clarify-first` |
| Steps | (1) Lire Evidence/RB/stopReason — **pending**; (2) Clarifier diagnostic — **pending**; (3) Réinstruire options recovery — **pending**, gate `human_decision` |
| History | v1 superseded · v2 superseded · v3 current |

### E. Epistemic / Reservations
| Type | active | other |
|------|--------|-------|
| Observation | 42 | 2 resolved |
| Recommendation | 25 | 2 superseded |
| Option | 17 | — |
| Hypothesis | 6 | — |
| DecisionRef | 4 | — |
| Contradiction | 1 | — |
| **Reservation** | **0 active** | **1 resolved** |

Only Reservation: `epi:rsv:9792a9411d8249f66077a99c` — « Rappels avant échéance… » — **resolved**, `blocking: false`, `finalizationRelevance: may_affect`. **No active Reservation blocks.**

Journal `openPoints` are **not** Reservations (all four journal topics have `open_points_json: []`).

### F. HumanDecisions (6, all `accepted` / pilot)
1. `dec:gf-trj:…` — approve trajectory v1 as-is
2. `dec:pilot-life:…` — **require artifact** before finalize (`opt:require-artifact`)
3. `dec:w2-prop:b6cd4e21…` — **amend** proposal subject
4. `dec:w2-prop:0d65e1cd…` — **pursue** proposal subject (docs_write framing note path)
5. `dec:w2-trj:3e36856c…` — governed-gated retry (earlier recovery HD)
6. `dec:w2-trj:328b70a0…` — **clarify-first** (current; owns trajectory v3)

### G. ExecutionContracts
| EC | status | action | authority | notes |
|----|--------|--------|-----------|-------|
| `xct:m3:dec:w2-prop:0d65e1cd…` | superseded | `cursor.docs_write.apply` | MORRIS | Pre-M6 prepare superseded |
| `xct:m3-res:dec:w2-prop:0d65e1cd…` | **confirmed** @ v3 | `cursor.docs_write.apply` | MORRIS | Bounded docs-write; target `projects/studyflow/01-cadrage/note-de-cadrage.md` |

### H. Inspections / authority
- Inspection `insp:b9ff5388…` on successor EC @ v2 by Pilote
- Authority receipts `avr:ad99db4b…` + `avr:56051c23…` — outcome **authorized**, requiredAuthority MORRIS, confirmationRefs to `cfm:w2:…:v2`

### I. Attempts
| Attempt | EC | status | stopReason |
|---------|----|--------|------------|
| `xat:w3a:0a9d88215cf8f884` | successor @ v3 | **failed** | `REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing` |
| failedAt | 2026-09-25T15:14:47.279Z | | |

Contract inputs included a `baseHeadSha` value; REAL launch still failed with `base_head_sha_missing` — environmental/workspace invalidity, not a Product success.

### J. Evidence
`ev:w3b:7b9022c9c4221122` — status **available**, freshness **fresh**, `storageMode: metadata_only`, type `log_ref`, binds to failed attempt. **Not** claimable business success evidence.

### K. ReviewBundles
`rb:w3b:7b9022c9c4221122` — frozen with that Evidence; claim evaluation `clm:w3b:7b9022c9c4221122` status **fail** (`productOutcome` FAIL).

### L. Confirmations
`cfm:w2:xct:m3-res:dec:w2-prop:0d65e1cd…:v2` — status **consumed**; `project_id` column NULL but payload binds StudyFlow EC (related). ≠ HumanDecision.

### M. Audit
Recent `oa_audit_events` used as chronology only; Truth C objects above dominate.

---

## 7. JOURNAL / CONVERSATION — IMPLEMENTATION QUALIFICATION

| Question | Finding |
|----------|---------|
| Where durable? | Separate Nora **Session** SQLite (default `…/.sfia-exec/product/nora-session.sqlite`; no `SFIA_STUDIO_NORA_SESSION_DB_PATH` override) |
| Tables | `cycle_journal_entries`, `cycle_journal_mutation_ledger`, `pilot_transcript_turns`, `session_items`, (+ logical turn tables) |
| Code doctrine | `cycleJournalStore.ts`: « Session ≠ Truth C »; compaction of `session_items` must not mutate journal/transcript tables |
| StudyFlow journal | **4** active entries on cycle `cyc:trj-2ee956d99383359aadd408d1`, topicOrdinal 1–4, rich `stabilizedPoints`, empty `openPoints` |
| Transcript | **44** pilot turns (42 on active cycle) |
| Classification | **Durable Memory B / Session store** — reconstructible resume aid; **not** Truth C LPS/HD/Evidence/Reservation |
| Truth C Product DB | Does **not** host journal tables |

Journal topics align with campaign V1 semantics (matières/tâches, lifecycle, planning today+7d, reminders excluded) — corroborates narration but does not replace Product objects.

---

## 8. CURRENT RECOMMENDATION / RECOVERY CONTEXT

Reconstructible from durables only:

| Question | Answer |
|----------|--------|
| Active durable Recommendation? | YES — W3C recover `epi:w3c-rec:8b8aa750bdc51ff8` + W2 recommend `epi:rec-w2-2100b28b16c3` (clarify-first) + LPS `nextStep=recovery_diagnose_or_replan` |
| Process-local Proposal vanished? | Likely — Proposal IDs appear in HD subjects (`prop:f2:e55d6751…`) but are not Truth C rows; **do not reinstate by invention** |
| Inspectable EC? | YES — confirmed successor docs_write EC (terminal episode already attempted) |
| Terminal Attempt? | YES — failed `base_head_sha_missing` |
| Sufficient Evidence for success claim? | NO — fail / metadata diagnostic only |
| Legitimate recovery context? | **clarify-first** already decided (HD + trajectory v3); diagnose Evidence/stopReason before any new attempt/options reinstruction |
| Should #522 naturally propose Relancer / structural recovery / new HD / none? | **None of “auto Relancer”** in this pass. Natural next is **execute clarify-first step 1–2 (read/diagnose)**; step 3 later needs Pilot HD. #522 recovery UX is integrated on main but **not exercised** here. |

---

## 9. FINDINGS CLASSIFICATION

| ID | Finding | Class |
|----|---------|-------|
| F1 | Unique StudyFlow Project + LPS v32 + active framing cycle reconstructible | EXPECTED |
| F2 | Terminal REAL docs_write FAIL with `base_head_sha_missing`; no cadrage artifact on disk | EXPECTED |
| F3 | Pilot HD chose clarify-first; trajectory v3 pending diagnosis steps | EXPECTED |
| F4 | Zero active Reservations; reminders Reservation resolved | EXPECTED |
| F5 | Cycle payload trajectory pointer still v1 / old step vs LPS/trajectory current v3 | LEGACY / NON-BLOCKING RESERVE (stale cycle payload field; LPS+trajectory_current authoritative) |
| F6 | Secondary acknowledged framing cycle unused | LEGACY |
| F7 | Roadmap still lists MealFlow as next campaign wording | DOCUMENTARY DRIFT — NON-BLOCKING RESERVE |
| F8 | GAP-15 remains open reserve; StudyFlow existing path did **not** naturally re-hit greenfield START deadlock this pass | NON-BLOCKING RESERVE |
| F9 | Natural StudyFlow REAL / docs_write REAL E2E post-#522 | NOT PROVEN (this pass read-only) — Fake/Real |
| F10 | Journal durable in Session DB ≠ Truth C | EXPECTED (implementation truth) |
| F11 | Product DB path via campaign override; default DB lacks StudyFlow | EXPECTED / ops note |

No NEW SEMANTIC GAP opened that requires immediate construction. No REGRESSION claimed against #522 (not exercised live).

### Challenge (grouped)
- Useful now? Yes — resume StudyFlow without inventing state.
- v3 capacity? Continuity LPS→Nora→HD→EC→Attempt→Evidence→replan (observe, don’t claim complete).
- Bug vs reserve? Stale cycle traj pointer = reserve/legacy; REAL workspace SHA = environmental precondition for later REAL.
- Simpler? Resume existing project; do not create fresh StudyFlow.
- Reusable assets? Project, LPS, journal, clarify-first trajectory.
- Parallel architecture? Not indicated.
- E2E proof required? Later cycle only, after clarify + GO REAL.
- Human arbitration? Yes at trajectory step 3 (reinstruct options).
- Morris gate? Required before any Cursor REAL retry.
- Next capability? **Not preselected** — derive after natural resume evidence.

---

## 10. GAP-15

Status unchanged: **OPEN RESERVE** · OUT OF #522 MACRO · **NON-BLOCKING**.
Not reopened. Not reproduced on existing StudyFlow. No lifecycle/START/qualification edits.

---

## 11. ROADMAP

`sfia-studio-convergence-roadmap.md` still frames MealFlow as next campaign historically.
Campaign truth transmitted: **StudyFlow**.
Class: **DOCUMENTARY DRIFT — NON-BLOCKING RESERVE**.
File **not** modified this pass.

---

## 12. FAKE / REAL QUALIFICATION

| Level | Status |
|-------|--------|
| #522 deterministic proof | PROVEN at declared scope (prior) |
| Authenticated visual harness | PROVEN at declared scope (prior) |
| Natural StudyFlow REAL reproof | **NOT PROVEN** |
| Cursor docs_write REAL E2E post-#522 | **NOT PROVEN** |
| This pass | **DURABLE STATE READ-ONLY REHYDRATION ONLY** |
| REAL BOUNDARY PROVEN / E2E REAL PROVEN | **FORBIDDEN claims** — not made |
| Fixtures used | NONE |
| Gate Morris REAL | **REQUIRED** before any REAL boundary |

Rule: DETERMINISTIC PROVEN ≠ READY FOR REAL.

---

## 13. CLAIMS AUTHORIZED / FORBIDDEN

**Authorized:** StudyFlow durable state rehydrated; resume existing project recommended; next action = clarify-first inspect; gates as stated.

**Forbidden (not claimed):** runtime v3 ADOPTED · global L5 ADOPTED · READY FOR REAL global · Product Completion newly COMPLETE · Nora Cognitive Completion complete · global semantic Reservation quality proven · StudyFlow E2E REAL proven · docs_write REAL proven · GAP-15 closed · Roadmap synced · next macro selected.

---

## 14. NEXT NATURAL ACTION (SINGLE)

**Business-first next action:**
On existing StudyFlow, execute clarify-first step 1 — **inspect durable Evidence `ev:w3b:7b9022c9c4221122` / ReviewBundle `rb:w3b:…` / Attempt `xat:w3a:…` stopReason (`base_head_sha_missing`)** and confront them to the Pilot’s already-accepted clarify-first trajectory — without launching REAL, without new HD, without inventing a Proposal.

**Authority / Gate:**
**A — ordinary read / inspect** for this immediate step.
Later: trajectory step 3 reinstruction = **PILOT ACTION REQUIRED** (HumanDecision).
Any docs_write retry = **GO REAL REQUIRED** (+ Morris authority already latent on EC).
No fresh Project. No Product/architecture change indicated.

---

## 15. VERDICT

**STUDYFLOW DURABLE STATE REHYDRATED — RESUME EXISTING PROJECT RECOMMENDED**

- projectId: `prj:34e7351c-770c-474a-8edc-9c82a07be41d`
- LPS: v32 (`lps:e6310b5566af7207`) · `nextStep=recovery_diagnose_or_replan`
- Cycle: `cyc:trj-2ee956d99383359aadd408d1` framing Light **active**
- Trajectory: `trj:lr-bridge-039d11e6fe6b` @ v3 **validated** · clarify-first · steps pending
- Active Reservations: **0**
- Latest HDs: require-artifact · pursue docs_write subject · **clarify-first** recovery
- EC/Attempt/Evidence: confirmed docs_write EC · Attempt **failed** (`base_head_sha_missing`) · Evidence available fail diagnostic · claim **fail**
- Recommendation/recovery: durable recover/clarify-first reconstructible
- Next action: inspect Evidence/RB/stopReason (ordinary read)
- Gate now: none structural beyond read-only resume; Pilot HD later; GO REAL before any REAL retry

---

## 16. INSTRUCTION TO CHATGPT

Analyser le Review Handoff distant et la vérité Git, qualifier si le Project StudyFlow existant peut reprendre naturellement, puis décider du prochain contrat.

NE PAS continuer automatiquement la campagne.
NE PAS lancer Cursor REAL.
NE PAS prendre une HumanDecision à la place du Pilote.
