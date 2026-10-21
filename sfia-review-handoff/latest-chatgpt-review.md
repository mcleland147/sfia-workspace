# AKG-M3 G7-MERGE-01 — CONTROLLED PR #599 MERGE — REVIEW PACK FULL (CRITICAL)

```text
TIMESTAMP_UTC: 2026-10-21T18:19:24Z
CYCLE: AKG-M3 G7-MERGE-01 — Controlled PR #599 Merge
CHANTIER: SFIA-STUDIO-ARCHITECTURAL-KNOWLEDGE-AND-CONSTRUCTION-GOVERNANCE
MILESTONE: AKG-M3 — Reference Consolidation
TYPE: Cycle 13 — PR Readiness / Merge Gate
PROFIL: CRITICAL
TYPOLOGIE: DOC / GIT INTEGRATION
CAPACITY: V3-F05 · V3-F12
QA: CRITICAL MERGE VERIFICATION
REVIEW_PACK: FULL
REVIEW_HANDOFF: REQUIRED — publish-in-cycle (L3)
METHOD: GitHub merge commit (--merge)
FORMAL_EXIT: NOT AUTHORIZED
AKG_M4: NOT AUTHORIZED
BRANCH_DELETE: NOT AUTHORIZED
```

---

## 1. Horodatage UTC

**2026-10-21T18:19:24Z**

---

## 2. Cycle / profil / GO Morris

| Field | Value |
|---|---|
| Cycle | G7-MERGE-01 — Controlled Merge |
| Profile | CRITICAL |
| Typology | DOC / GIT INTEGRATION |
| GO Morris | **OK GO MERGE** — PR #599 — 2026-10-21 — **CONSUMED** |
| Method authorized | `gh pr merge 599 --merge --match-head-commit d21fbb86…` |
| Forbidden | squash · rebase · --admin · --auto · --delete-branch · force push · Product edit · Formal Exit · M4 |

---

## 3. Git Truth initial

| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-akg-m2-global-g1-roadmap-local` |
| Branch | `docs/sfia-studio-akg-m3-g7-prr-consolidation` |
| HEAD | `d21fbb86d69671987ee9660be768dc16f69a5ca1` |
| origin/main (pre) | `c2b3d00ceb73b07eab44243ac45ecbe75e6e5bfd` |
| ls-remote main | `c2b3d00c…` — MATCH snapshot |
| ls-remote PR branch | `d21fbb86…` — MATCH |
| Staged | none |
| Repo | `mcleland147/sfia-workspace` |

Merge executed **remotely** via GitHub API; no local checkout of `main` required.

---

## 4. Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md` (via G7/method continuity)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (routing Cycle 13)
- Convergence Build Doctrine / Roadmap (trajectory; **not edited**)
- Product Completion cadrage (context; **not edited**)
- PRR volumes on PR HEAD `d21fbb86` + manifest
- Handoff G7 immutable: commit `82c772c95af8a821c1dc63568e12dfdbecd7fc7a` / blob `2af33a2d7e037ab9d0503929f70e9b006d83b8b6`
- GitHub PR #599 live preflight

---

## 5. Convergence Pre-check

AKG-M0/M1/M2 CLOSED BY MORRIS (bounded). AKG-M3 Reference Consolidation in progress. G6 semantic PASS · CORR-01/02 · Digest Sync ACCEPTED · G7 Git Integration Review PASS · CI SUCCESS verified before merge. Roadmap / Build Doctrine / Product **unchanged** by this merge cycle.

---

## 6. R23 / R24

| Rule | Verdict |
|---|---|
| R23 | Provenance preserved: merge of previously reviewed G6 candidate `d21fbb86` onto `c2b3d00c` — no new Product mutation |
| R24 | **NO NEW SEMANTIC IMPACT** — merge only; zero content rewrite |

---

## 7. Handoff G7 lu et validé

| Field | Expected | Observed |
|---|---|---|
| Commit | `82c772c95af8a821c1dc63568e12dfdbecd7fc7a` | MATCH |
| Blob | `2af33a2d7e037ab9d0503929f70e9b006d83b8b6` | MATCH |
| Cycle in pack | AKG-M3 G7 | confirmed via `git show` header |

ChatGPT G7 review: PASS (CI was PENDING at handoff; later SUCCESS revalidated).

---

## 8. PR #599 preflight (live)

| Field | Expected | Observed |
|---|---|---|
| Number | 599 | 599 |
| Title | docs(studio-prr): AKG-M3 G6 reference consolidation | MATCH |
| State | OPEN | OPEN (pre-merge) |
| Draft | false | false |
| Merged | false | false (pre-merge) |
| Mergeable | MERGEABLE | MERGEABLE |
| mergeStateStatus | CLEAN | CLEAN |
| Base | main | main |
| Base SHA | `c2b3d00ceb73b07eab44243ac45ecbe75e6e5bfd` | MATCH |
| Head branch | `docs/sfia-studio-akg-m3-g7-prr-consolidation` | MATCH |
| Head SHA | `d21fbb86d69671987ee9660be768dc16f69a5ca1` | MATCH |
| Commits | 1 | 1 |
| Changed files | 7 | 7 |
| Diff | +178 / −62 | +178 / −62 |
| reviewDecision | (empty / no blocking) | empty |

URL: https://github.com/mcleland147/sfia-workspace/pull/599

---

## 9. Base / head / commit

```text
baseRefOid  = c2b3d00ceb73b07eab44243ac45ecbe75e6e5bfd
headRefOid  = d21fbb86d69671987ee9660be768dc16f69a5ca1
commit msg  = docs(studio-prr): consolidate AKG-M3 G6 reference
parent of head = c2b3d00c… (= main tip pre-merge)
```

---

## 10. Fichiers exacts (pre-merge PR files)

```text
M projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
M projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

ABSENT from PR: Roadmap · Product · tests · checker · doctrine · scripts.

---

## 11. Required checks (pre-merge)

```text
Build and validate SFIA Studio	pass	8m52s	https://github.com/mcleland147/sfia-workspace/actions/runs/39648590504/job/119390718113
Detect SFIA Studio changes	pass	6s	https://github.com/mcleland147/sfia-workspace/actions/runs/39648590504/job/119390644611
SFIA Studio Required Gate	pass	3s	https://github.com/mcleland147/sfia-workspace/actions/runs/39648590504/job/119395305977
```

Run: https://github.com/mcleland147/sfia-workspace/actions/runs/39648590504

All three SUCCESS including **SFIA Studio Required Gate**.

---

## 12. Review / mergeability gates

```text
mergeable=MERGEABLE
mergeStateStatus=CLEAN
reviewDecision=<empty — no blocking review required observed>
branch protection: satisfied without --admin
```

---

## 13. Commande de merge et résultat

```bash
gh pr merge 599 \
  --repo mcleland147/sfia-workspace \
  --merge \
  --match-head-commit d21fbb86d69671987ee9660be768dc16f69a5ca1
```

```text
MERGE START 2026-10-21T18:17:49Z
exit=0
MERGE CMD DONE 2026-10-21T18:17:53Z
```

No `--squash` / `--rebase` / `--admin` / `--auto` / `--delete-branch`.

---

## 14. PR status après commande

| Field | Value |
|---|---|
| state | **MERGED** |
| mergedAt | `2026-10-21T18:17:52Z` |
| mergeCommit | `d41c6a660196ac26a401297c53f4be6f7ac98882` |

---

## 15. Merge SHA et parents

```text
commit d41c6a660196ac26a401297c53f4be6f7ac98882
Merge: c2b3d00c d21fbb86
Author:     mcleland147 <m.cleland@live.fr>
AuthorDate: Wed Oct 21 20:17:51 2026 +0200
Commit:     GitHub <noreply@github.com>
CommitDate: Wed Oct 21 20:17:51 2026 +0200

    Merge pull request #599 from mcleland147/docs/sfia-studio-akg-m3-g7-prr-consolidation

    docs(studio-prr): AKG-M3 G6 reference consolidation

 .../02-runtime-object-catalog.md                   | 22 +++++--
 .../03-end-to-end-flow-catalog.md                  | 45 +++++++++----
 .../04-dependency-impact-map.md                    | 43 +++++++-----
 ...05-environments-configuration-and-boundaries.md |  2 +-
 .../07-authority-invariants-and-failure-modes.md   |  6 +-
 ...9-known-gaps-reserves-and-current-boundaries.md | 77 ++++++++++++++++++----
 .../production-runtime-reference.manifest.json     | 45 +++++++++++--
 7 files changed, 178 insertions(+), 62 deletions(-)
```

Parents verified:

| Parent | SHA | Role |
|---|---|---|
| ^1 | `c2b3d00ceb73b07eab44243ac45ecbe75e6e5bfd` | previous main |
| ^2 | `d21fbb86d69671987ee9660be768dc16f69a5ca1` | PR head |

---

## 16. Main SHA après merge

| Field | Value |
|---|---|
| origin/main | `d41c6a660196ac26a401297c53f4be6f7ac98882` |
| API branches/main | `d41c6a660196ac26a401297c53f4be6f7ac98882` |
| Equals merge_commit_sha | **YES** |

---

## 17. Diff main avant/après (`c2b3d00c` → `d41c6a66`)

### name-status

```text
M	projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
M	projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

### stat

```text
.../02-runtime-object-catalog.md                   | 22 +++++--
 .../03-end-to-end-flow-catalog.md                  | 45 +++++++++----
 .../04-dependency-impact-map.md                    | 43 +++++++-----
 ...05-environments-configuration-and-boundaries.md |  2 +-
 .../07-authority-invariants-and-failure-modes.md   |  6 +-
 ...9-known-gaps-reserves-and-current-boundaries.md | 77 ++++++++++++++++++----
 .../production-runtime-reference.manifest.json     | 45 +++++++++++--
 7 files changed, 178 insertions(+), 62 deletions(-)
```

Exactly **7** PRR paths. No Roadmap/Product.

### Full useful diff (immutable merge delta)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index b7342699..a284704d 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -95,7 +95,7 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 ## OBJ-GENERIC-MISSION-HD — Generic Mission HumanDecision (M-HD-01/02 + SHE)

-- **Status:** CURRENT on Delivery (D-P6-SHE-01) — not INTEGRATED_ON_MAIN until Product PR merge.
+- **Status:** **CURRENT ON MAIN** (D-P6-SHE-01 / Single Human Execute Option A) — Product integrated via **PR #590** merge `c9abdbc3` (ancestor of main tip). DETERMINISTIC at tested scope. ≠ REAL / HQA PROVEN · ≠ P6 GLOBAL PASS · runtime v3 NON ADOPTED.
 - **Purpose (SHE CURRENT):** Structural / HD-required Generic missions may PREPARE an inspectable draft without prior HD; durable OA HumanDecision (`authorize-inspected-execute`) is recorded on Pilot Exécuter, bound to the inspected EC (OA-projected effects — GAP-04). HD is **not** deleted; timing moves from PREPARE to Execute.
 - **Purpose (HISTORICAL disposition-before-PREPARE):** bind a durable OA HumanDecision to a sealed mission presentation before disposition-path PREPARE may resume (`verifyGenericMissionHumanDecisionForPrepare`).
 - **Durable truth:** `oa_human_decisions` with `decisionBasis.genericMissionContext`, `missionSubjectId`, `presentationDigest`.
@@ -120,11 +120,13 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 ## OBJ-EC — ExecutionContract

-- **Purpose:** Prepared execution contract after required Pilot decision/authority.
+- **Purpose:** Prepared (inspectable) execution contract draft/aggregate. **PREPARE ≠ AUTHORIZE ≠ EXECUTE** — a prepared EC is **not** automatically authorized for launch.
 - **Persistence:** `oa_execution_contracts`.
 - **Paths:** `lib/oa/execution-contract/**`
-- **Gate:** no EC before required Proposal HD (product path).
-- **Tool-First pathless stamp (local candidate — PENDING_GIT_INTEGRATION):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`).
+- **Gate (scoped — not universal):**
+  - **Legacy / Proposal / disposition-before-PREPARE product path:** no EC prepare on that path before the required Proposal / mission-bound HumanDecision (HD-bound PREPARE).
+  - **SHE CURRENT (D-P6-SHE-01 / PR #590):** STRUCTURAL / HD-required / UNKNOWN may obtain an **inspectable** PREPARE **without** prior HD when Product qualification admits (`sheDeferredStructuralAuthority` stamp possible). Authority is consumed on Pilot **Exécuter** (`singleHumanExecutePreparedContract`): Inspect binding → applicable HD (if required) → Confirm (if required) → Authorize → launch gates. **0 Attempt** if pre-launch gates fail. Historical disposition-before-PREPARE remains available at its own boundary.
+- **Tool-First pathless stamp (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`). DETERMINISTIC at tested scope · REAL no-write enforcement OPEN (`TOOL-FIRST-REAL-NOWRITE`).

 ## OBJ-INSPECTION — InspectionAttestation

@@ -144,9 +146,15 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 ## OBJ-ATTEMPT — ExecutionAttempt

-- **Purpose:** Bounded attempt against an EC; terminal statuses recorded.
-- **Persistence:** `oa_execution_attempts`, active pointer, result budget tables.
-- **Invariant:** Attempt terminal ≠ Product Result PROVEN.
+- **Purpose:** Bounded attempt against an AUTHORIZED ExecutionContract; Select→Start→Result lifecycle unit. Distinct from ExecutionContract (PREPARE/inspect/authority).
+- **Lifecycle statuses (`ExecutionAttemptStatus` — 7):** `accepted` · `running` · `result_pending` · `succeeded` · `failed` · `timeout` · `cancelled` (`lib/oa/execution-attempt/domain/types.ts`).
+  - **Non-terminal / active (`ActiveExecutionAttemptStatus` — 3):** `accepted` · `running` · `result_pending` — hold the active-by-contract invariant.
+  - **Terminal (`TerminalExecutionAttemptStatus` — 4):** `succeeded` · `failed` · `timeout` · `cancelled`.
+- **Persistence:** `oa_execution_attempts`, `oa_execution_attempt_active`, `oa_execution_attempt_result_budget`.
+- **Paths:** `lib/oa/execution-attempt/**` (domain types; `selectExecutionAgent` / `startExecution`); SQLite tables in `lib/oa/project/infrastructure/sqlite/db.ts`; Product R2 gate `features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts`.
+- **Manifest index (AKG-M3 G6):** curated `components[]` includes **OBJ-ATTEMPT**; dependency **DEP-EC-ATT** = `OBJ-EC` → `OBJ-ATTEMPT` (conformance endpoints ∈ components).
+- **Invariant:** Attempt **terminal** ≠ Product Result PROVEN (`INV-ATTEMPT-NE-PROVEN`); no execution before authority (`INV-NO-EXEC-BEFORE-AUTH`). PREPARE ≠ AUTHORIZE ≠ EXECUTE · Inspect ≠ Execute.
+- **Proof ceiling:** DETERMINISTIC at tested scope (lifecycle + Tool-First R2 Fake/DET) · REAL NOT PROVEN · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED.

 ## OBJ-ARTIFACT — Artifact obligation / materialization

diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 46433f6b..3dcefc30 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -29,8 +29,8 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 ## F04 — Nora conversation during active cycle
 - **Trigger:** Pilot message via product conversation
 - **Steps:** Pilot content → Product orchestration (`orchestrateTurn`) → `runNoraCognitiveTurn` (strategy + **adaptive maxTurns**) → Agents Runner (`runNoraAgentsTurn`) → optional **same-turn** RunState continuation under mission/campaign budget → result + Session append → Product status → (optional) prospective Active Cycle Work / Work Recommendation materialization → journal tools
-- **Nora Generic PREPARE solicitation (D-ER-16 / Option 2 — AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** `orchestrateTurn` may expose Agents tool `request_generic_execution_prepare` wired to Product `solicitGenericExecutionPrepare`. Cognition may **solicit** PREPARE only. Tool params never create HumanDecision, never create ExecutionAttempt, never authorize or execute. Authority remains OA/W2 Product admission (F08). DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE via `p6.der16.genericNoraToolInvocation.d0.test.ts` (Fake).
-- **Tool-First mission fields (local candidate — PENDING_GIT_INTEGRATION):** tool / orchestration may forward structured `repositoryMutation` (`none`/`read`/`write`/`unknown`) into Product mission admission. Nora proposal alone is **not** sufficient authority for NON_STRUCTURAL pathless qualification (see F08 R1). Paths: `productExecutionAgentsTools.ts`, `orchestrateTurn.ts`.
+- **Nora Generic PREPARE solicitation (D-ER-16 / Option 2 — CURRENT ON MAIN at tested scope):** `orchestrateTurn` may expose Agents tool `request_generic_execution_prepare` wired to Product `solicitGenericExecutionPrepare`. Cognition may **solicit** PREPARE only. Tool params never create HumanDecision, never create ExecutionAttempt, never authorize or execute. Authority remains OA/W2 Product admission (F08). DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE via `p6.der16.genericNoraToolInvocation.d0.test.ts` (Fake). ≠ REAL / OpenAI LIVE.
+- **Tool-First mission fields (CURRENT ON MAIN — PR #588 merge `304e30e8`):** tool / orchestration may forward structured `repositoryMutation` (`none`/`read`/`write`/`unknown`) into Product mission admission. Nora proposal alone is **not** sufficient authority for NON_STRUCTURAL pathless qualification (see F08 R1). Paths: `productExecutionAgentsTools.ts`, `orchestrateTurn.ts`.
 - **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
 - **Nora autonomy (PR #577 INTEGRATED ON MAIN — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality. Merge `d8ceb8ad`.
 - **Documentary cognitive reliability / RCD-01 (PR #578 INTEGRATED ON MAIN — DETERMINISTIC):** Guided Document Review acquisition uses the native tool path `git_local_read_file` → `GitLocalReadAdapter` → `ToolRouter` (`prepareGitLocalReadDataForModel`) → Agents Runner tool result. Coverage metadata (`returnedStartLine`/`returnedEndLine`/`completeLineCount`/`nextStartLineHint`/`truncated` vs `documentHasMore`) must describe the **final model-visible** payload after redaction and JSON envelope capping (`CT_MAX_TOOL_RESULT_CHARS` = 12000). Partial lines are never credited; redacted lines still progress; a line that fits the adapter but not the final envelope is skipped via explicit `lineExceedsCap` (no infinite same-line retry; no mid-line offset protocol). On soft `maxTurns` exhaustion, restitution discloses honest incomplete coverage from tool crumbs when available (no invented FULL / HumanDecision / Deliverable). Natural mono-file documentary prompts elevate Focused adaptive budget (≥8, ≤ ceiling 10) without raising FinOps ceilings. Proof: `p6.nora.min09.documentaryReliability.d0.test.ts` R1–R7 — **not** GDR REAL quality. Merge `44006648` / source `9b855d8d`.
@@ -57,6 +57,21 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro); adjacent Generic PREPARE routing **DETERMINISTIC at tested scope** (PR #586 + candidate consolidation)
 - **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle (Artifact path); satisfied artifact; other exclusive BLOCKED reasons

+### Routing table — NEW_CYCLE / ACGC / F08 / Tool-First / SHE (documentary · AKG-M3 G6)
+
+Descriptive Product routing map for the same conversational front door. **Does not** close **B-M2B-03** (same utterance → mode ambiguity remains OPEN). Not a parallel execution engine.
+
+| Branch | Entry signal | Gate / refuse | Product responsibility | Authority | Exit | Proof / ceiling |
+|---|---|---|---|---|---|---|
+| **NEW_CYCLE_FORMALIZATION** | Explicit new-cycle language (`hasExplicitNewCycleFormalizationSignal`) even if a future deliverable is mentioned | Not Artifact continuation; avoid `no_active_cycle` fail-closed before `createCycle` | Formalization / `createCycle` path | Pilot/Product cycle authority | New CycleInstance path | F05 CI-HQA-F01 DET · ≠ REAL |
+| **ACTIVE_CYCLE_GOVERNED_CONTINUATION (ACGC)** | Active cycle + Artifact obligation (REQUIRE_ARTIFACT HD **OR** APPLICABLE∧¬SATISFIED) | Refuse invent HD; UNKNOWN≠APPLICABLE | `activeCycleGovernedContinuation` / materialization | Artifact gates ≠ exec authority | Proposal / materialization continuation | F05 DET · B-M2B-03 OPEN |
+| **ACTIVE_CYCLE_CONTINUATION_BLOCKED** | e.g. `no_require_artifact` | Blocked reason only | Clarification / refusal messaging | No invented REQUIRE_ARTIFACT | May set `eligibleForGenericPrepareRouting` when optional documentary | F05 GD4-01 DET |
+| **Adjacent → F08 Generic PREPARE** | Optional documentary without closure Artifact + conversation admission + actionable/`execution_request` + prepareGo/readiness | PREPARE≠AUTHORIZE; Nora solicit≠authority | `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft` | OA/W2 Product admission (F08) | Inspectable EC draft / pending offer | F08 + D-ER-16 Fake DET |
+| **Tool-First pathless NON_STRUCTURAL** | Positive non-mutating claim (R1: `read_only` **OR** `repositoryMutationDeclared ∈ {none,read}`) | Absent positive claim / write/unknown/contradiction → refuse | Materiality→PREPARE qualification | Product admission ≠ Cursor sandbox | Pathless EC stamp possible | Tool-First R1 DET · REAL OPEN |
+| **SHE structural / Exécuter** | STRUCTURAL / HD-required / UNKNOWN after inspectable PREPARE | INV-NO-EXEC-BEFORE-AUTH; STOP · 0 Attempt if pre-launch fails | Inspect → HD/Confirm/Authorize → Attempt | HumanDecision / receipts on Exécuter | AUTHORIZED EC → F10 Select/Start | SHE DET (PR #590) · REAL OPEN |
+| **Nora Generic PREPARE solicitation** | Agents tool `request_generic_execution_prepare` | Never creates HD/Attempt/execute | Cognition solicits only | Remains F08 Product | Solicitation only | D-ER-16 Fake |
+| **Ambiguity / clarification / STOP** | Utterance without qualifying signal | Do not invent mode | Ask clarification | No silent PREPARE | Clarification / refuse | B-M2B-03 scenarios OPEN |
+
 ## F06 — Proposal / Decision Subject / options
 - **Trigger:** F2 turn producing `f2_proposal`
 - **Persistence:** process-local proposal store; durable pending marker + `PresentedOptionSet` Observation in Epistemic
@@ -79,7 +94,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## F08 — EC PREPARE
 - **Trigger (legacy M3):** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
-- **Trigger (Generic PREPARE — D-P6-SHE-01 CURRENT on Delivery branch):** F2 chat-first GO / Nora tool solicitation (F04) / adjacent F05 hand-off → Product `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
+- **Trigger (Generic PREPARE — D-P6-SHE-01 CURRENT ON MAIN — PR #590 lineage):** F2 chat-first GO / Nora tool solicitation (F04) / adjacent F05 hand-off → Product `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
 - **Mission qualification:** Product readiness (`assessGenericMissionPrepareReadiness`) + authoritative Materiality CURRENT (`resolveAuthoritativeProductMateriality`). Materiality UNKNOWN may yield an **inspectable** PREPARE stamp; UNKNOWN still **blocks Execute** (fail-closed — no silent NON_STRUCTURAL elevation).
 - **Chemin SHE (CURRENT — D-P6-SHE-01 Option A):** STRUCTURAL / HD-required / UNKNOWN may PREPARE an **inspectable** draft **without** a prior HumanDecision (`decisionRefs` may be empty; Product may stamp `sheDeferredStructuralAuthority`). PREPARE ≠ AUTHORIZE ≠ EXECUTE. Authority is consumed on Pilot **Exécuter** (`singleHumanExecutePreparedContract`): inspect binding (id/version/fingerprint) → record applicable HD (`authorize-inspected-execute`) from OA EC effects (GAP-04) → Confirm/Authorize OA internals → ExecutionAttempt. No silent HD; no Attempt if pre-launch gates fail.
 - **Chemin A — STRUCTURAL disposition-before-PREPARE (HISTORICAL / still available):** structural signals or HD-required materiality → remember CURRENT offer for Pilot seal (process-local) → Pilot disposition on sealed presentation. **Three distinct branches:**
@@ -88,14 +103,14 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
   - **Amend** → new presentation / re-seal required → prior presentation does **not** unlock this disposition PREPARE (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new **accepted** applicable HD exists.
   - Structural offer alone ≠ Authorization. Historical HD without mission binding ≠ unlock. Under SHE, lack of Accept does **not** forbid inspectable PREPARE — authority moves to Exécuter.
 - **Chemin B — NON_STRUCTURAL (Option 1 / G-D4 + Tool-First R1):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
-  - **Pathless bounded non-mutating analysis (local candidate — PENDING_GIT_INTEGRATION):** when concrete WHERE is empty, Product may qualify NON_STRUCTURAL **only** with a **positive** structured non-mutating claim — `executionIntent.intentKind === "read_only"` **or** `repositoryMutationDeclared ∈ {none, read}` — **plus** live Product context, generalist envelope, and no structural/write/docs_write/materialization/elevated contradiction (`qualifyBoundedNonMutatingAnalysisMission`). Positive declaration ≠ Product authority by itself. **Not a positive claim:** `repositoryMutation` absent **when** `read_only` is also absent; `unknown`; `write`. An admissible `read_only` claim is **not** invalidated by the mere absence of `repositoryMutation`. **No invented documentary/Git path.** CycleInstance and Artifact remain optional when gates allow. No systematic HumanDecision on this path.
+  - **Pathless bounded non-mutating analysis (CURRENT ON MAIN — Tool-First R1 / PR #588):** when concrete WHERE is empty, Product may qualify NON_STRUCTURAL **only** with a **positive** structured non-mutating claim — `executionIntent.intentKind === "read_only"` **or** `repositoryMutationDeclared ∈ {none, read}` — **plus** live Product context, generalist envelope, and no structural/write/docs_write/materialization/elevated contradiction (`qualifyBoundedNonMutatingAnalysisMission`). Positive declaration ≠ Product authority by itself. **Not a positive claim:** `repositoryMutation` absent **when** `read_only` is also absent; `unknown`; `write`. An admissible `read_only` claim is **not** invalidated by the mere absence of `repositoryMutation`. **No invented documentary/Git path.** CycleInstance and Artifact remain optional when gates allow. No systematic HumanDecision on this path.
   - Contract may stamp `boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` — stamp ≠ REAL no-write enforcement (see F10 R2).
 - **S8 project context (D-ER-17):** absence of active CycleInstance does **not** alone block Generic PREPARE; **no invented CycleInstance**.
 - **Fidelity (PR #586 + candidate):** pending offer may retain documentary `missionEffects`; exact capability identities only; Nora path candidates non-authoritative until Product resolve.
 - **Paths:** `prepareGenericExecutionContractDraft.ts`, `singleHumanExecutePreparedContract.ts`, `resolveAuthoritativeProductMateriality.ts`, `recordGenericMissionHumanDecision.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `prepareAndResolveM3ProductPath` (legacy), `lib/oa/execution-contract/**`
 - **Invariant:** cannot expand DecisionBasis / sealed WHAT; PREPARE ≠ AUTHORIZE ≠ EXECUTE; no ExecutionAttempt on PREPARE
 - **Proof:** SHE (`p6.she.singleHumanExecute*`, GAP continuity/HD/finalization) + G-D4 / materiality / M-HD / DER16 / Option1 / Tool-First — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
-- **Status:** COMPLETE domain (legacy M3); Generic PREPARE + SHE Option A CURRENT on Delivery (PR pending merge); Tool-First R1 CURRENT at tested scope
+- **Status:** COMPLETE domain (legacy M3); Generic PREPARE + SHE Option A **CURRENT ON MAIN** (PR #590 `c9abdbc3`); Tool-First R1 **CURRENT ON MAIN** at tested scope (PR #588). DETERMINISTIC proof · ≠ REAL · ≠ P6 GLOBAL PASS

 ## F09 — EC inspect / Confirmation / authority
 - **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
@@ -104,12 +119,12 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **SHE / Tool-First Pilot CTA (CURRENT — D-P6-SHE-01):** after inspection attestation is sufficient/aligned, Pilot surface shows **Exécuter** for the inspected contract — the single Pilot gesture records applicable HD when required, folds server Confirm (when required), then Authorize+Select/Start. **Inspect ≠ Execute** preserved (no auto-attest; no silent HD/Confirm). Server steps HD / Confirm / Authorize / Execute remain distinct OA transitions. Paths: `singleHumanExecutePreparedContract.ts`, `pilotExecutionPresentation.ts`, `ExecutionSurface.tsx`.
 - **Product path (legacy M3):** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
 - **Proof:** SHE + Pass03/Pass04 UIC + durable/reconcile continuity + pilotExecutionPresentation / R02 — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
-- **Status:** COMPLETE tables/services; unified exam + SHE/Tool-First CTA CURRENT on Delivery (PR pending merge)
+- **Status:** COMPLETE tables/services; unified exam + SHE/Tool-First CTA **CURRENT ON MAIN** (PR #590 / #588 lineages) at tested scope · ≠ REAL

 ## F10 — Governed execution (docs_write / Cursor)
 - **Gate:** effective Authorization on EC + attempt lifecycle; REAL additionally requires `SFIA_STUDIO_CURSOR_REAL` + managed repo base + Product REAL readiness fail-closed
-- **Project-scoped Cursor Select/Start (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse.
-- **R2 — pathless non-mutating vs Cursor REAL (local candidate — PENDING_GIT_INTEGRATION):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product applies `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts`) at **two distinct phases**:
+- **Project-scoped Cursor Select/Start (CURRENT ON MAIN at tested scope):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse. DETERMINISTIC Fake/DET · ≠ REAL BOUNDARY PROVEN.
+- **R2 — pathless non-mutating vs Cursor REAL (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product applies `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts`) at **two distinct phases**:
   - **Select (`governedExecuteSelectAgent`):** refuse **before** creating a new Attempt — no accepted Attempt from that Select; no REAL process.
   - **Start (`governedExecuteStart`):** if an Attempt is already `accepted` (e.g. Fake Select earlier), re-evaluate and refuse Start — Attempt stays `accepted` (not `running`); launch-port calls unchanged; no REAL process.
   Fake/DET (`CURSOR_REAL≠1`) remains admissible. Ordinary write / concrete-path contracts are **not** blocked by this gate. **ZERO Cursor REAL** claimed by this candidate.
@@ -125,6 +140,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## F11b — Product Continuity / Shared Knowledge (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01)

+- **INDEX POLICY (AKG-M3 G6 — D2):** F11b is a **narrative sub-flow** of Product Continuity / execution reconcile spanning journeys already indexed as **F10–F14**. Curated `manifest.flows[]` retains **F01–F20** only; **F11b is not indexed separately**. Absence from `flows[]` **≠** absence of Product behaviour. DET proofs remain historical coverage at tested scope. ZERO REAL · runtime v3 NON ADOPTED unchanged.
 - **Shared Product Resolution (READ-ONLY):** `resolveProductExecutionContext` composes Project-bound EC / Attempt / Cursor CLAIM / Artifact / Evidence / RB / CE / post-Evidence Recommendation without a new store or knowledge domain. Evidence/RB/CE resolved via current Contract Result CE + `contractResultBindings.evidenceRefs`, then validated by canonical `contractResultBindingsMatchCurrentFacts` against Attempt-bound snapshot (Project / Cycle / EC id / version / semantic fingerprint / Attempt / RB id+frozenVersion / ordered Evidence refs). Never ID-prefix or repository-order preference; ambiguous multi-Evidence without CE → `EVIDENCE_LINEAGE_AMBIGUOUS`.
 - **Execution Continuity Projection:** `deriveGovernedExecutionContinuityProjection` derives reachable stages only: PRE_EXECUTION | ATTEMPT_ACCEPTED | RUNNING | PRODUCT_MATERIALIZATION_PENDING | POST_EVIDENCE_PENDING | POST_EVIDENCE_COMPLETE | RECOVERY_REQUIRED. Closed lineage integrity codes (e.g. `CONTRACT_RESULT_BINDINGS_MISMATCH`, `CLAIM_EVALUATION_AMBIGUOUS`, `EVIDENCE_LINEAGE_AMBIGUOUS`) project to `RECOVERY_REQUIRED`; query errors such as `ATTEMPT_NOT_FOUND` remain resolve errors.
 - **Server Reconciler:** `reconcileGovernedExecution` (intent observe|execute|continue) owns deterministic next steps; stops immediately on `recoveryRequired` without rematerialize / new Attempt / new CE. TrajectorySurface is command+projection only (no Select→Start→Complete→Materialize ownership). Restart after ACCEPTED and during RUNNING reuses the same Attempt (deterministic tested scope).
@@ -153,7 +169,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Undisposed Recommendations (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** finalization fails closed while an **active** Recommendation published on a presented governed subject (`source` = `optset:…`) is not closed by an active `DecisionRef`. Blocker code `undisposed_recommendations`, reported through the existing `blockers` obligation family — no second engine, no new obligation family. `resolved` / `rejected` / `superseded` Recommendations never block. An unreadable Epistemic source reports `recommendation_source_unreadable` and stays blocking.
 - **Explicitly NOT an authority:** Cycle Journal open points are not Truth C and do not gate finalization; only existing Reservation mechanisms do.
 - **Proof at tested scope:** `p6.she.gap03.effectiveGitPrimaryContract.d0.test.ts`, `undisposedRecommendations.d0.test.ts`, `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case K
-- **Status:** COMPLETE assessment engine; Pilot finalize HD required; GAP-03 effective EC CURRENT on Delivery
+- **Status:** COMPLETE assessment engine; Pilot finalize HD required; GAP-03 effective EC **CURRENT ON MAIN** at tested scope (SHE/Generic Execution lineage) · ≠ REAL

 ## F16 — Replan
 - **Invariant:** No silent replan
@@ -167,12 +183,13 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status:** DETERMINISTIC proven at tested scope (both front-door oracles); Proposal store remains process-local

 ## F18 — Restart after HD / before execution
-- **Survives:** HD, LPS, cycle; EC if prepared
-- **Status:** PARTIAL proven by domain tests
+- **Survives (durable):** HD / DecisionBasis, LPS, cycle; EC if prepared
+- **Process-local:** pending Generic PREPARE offer / presentation carrier — **lost** at restart (offer loss ≠ universal PREPARE ban when verified HD + gates allow — HD11)
+- **Status:** **PARTIAL** proven by domain tests (DET). Automatic UI offer rehydration **NOT PROVEN**. REAL **NOT PROVEN**. Do **not** promote to COMPLETE without new proof.

 ## F19 — Restart post-Evidence
-- **Survives:** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
-- **Status:** PARTIAL — front-door rehydrate assertions at tested scope
+- **Survives (durable):** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
+- **Status:** **PARTIAL** — front-door rehydrate assertions at tested scope (DET). Cross-restart RunState DEFER. REAL SprintBoard re-proof requires distinct Morris GO. Do **not** promote to COMPLETE without new proof.

 ## F20 — Legacy / historical compatibility
 - **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
@@ -183,7 +200,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## Generic Execution → Review → Result (CURRENT — Correction Pass 02 candidate)

-Nominal Product path (architecture D-ER; delivery candidate, LOCAL CANDIDATE / NOT INTEGRATED ON MAIN):
+Nominal Product path (architecture D-ER; **CURRENT ON MAIN** at deterministic tested scope — prior “LOCAL CANDIDATE / NOT INTEGRATED ON MAIN” wording is **HISTORICAL** relative to Generic Execution / Tool-First / SHE merges on main; ≠ REAL · ≠ P6 GLOBAL PASS):

 HumanDecision (durable DecisionBasis + local-write seal) → Generic EC `studio.cursor.generalist.execute` (authorized `EFFECT_CLASS:local-write` / filesystem.create|modify — **≠** Product write taxonomy) → Cursor Generalist → isolated Git worktree → CursorExecutionReport [CLAIM] + native Cursor Review End Of [CLAIM executor-only; missing ⇒ PARTIAL / no Studio synthesis] → Studio `NodeLocalGitStatusDiffPort` / `observeVerifiedChangeSet` [FACTS] (Git delta only; OBSERVED vs UNAVAILABLE — never invent empty FACTS; never full-repo scan in Git mode) → Generic Execution Review Material → Verification Evidence `ev:execution-review:*` + Mission Evidence → same ReviewBundle / ClaimEvaluation / ContractResult (mismatch ⇒ ≠ PASS) → Product Resolution (`executionReview`) → scheduled UI continue (no abandonment counter) + remount auto-resume → Nora Deep Review (shared Agents core; actual `execution_review_*` tool calls) → Result Surface (real fields + Pilot `w2ReadExecutionReviewItemAction` by itemId).

diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index bfa68d82..9ac33e79 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -38,7 +38,7 @@ LifecycleSurface / lifecyclePresentation
   → does not alone authorize materialization
 ```

-## Dual Generic PREPARE admission paths (D-P6-SHE-01 CURRENT on Delivery)
+## Dual Generic PREPARE admission paths (D-P6-SHE-01 CURRENT ON MAIN — PR #590)

 ```
 Nora tool (F04) / F2 analysis / F05 adjacent hand-off
@@ -88,25 +88,34 @@ OA = authority of record. W2 = Product coordination. Nora = cognition/recommenda

 **HISTORICAL S1 (pre-SHE):** only an accepted, mission-bound, applicable, verified, non-superseded HD opened Chemin A PREPARE. Retained for disposition-before-PREPARE callers and legacy M3.

-**Tool-First R1/R2 (CURRENT at tested scope):** R1 gates pathless NON_STRUCTURAL at Materiality→PREPARE (positive claim + Product checks). R2 is a Product dependency of F10 Select/Start on the Cursor REAL boundary — stamp ≠ technical no-write; Fake/DET path unchanged. Not a new OA object; not a parallel engine.
+**Tool-First R1/R2 (CURRENT ON MAIN — PR #588 merge `304e30e8`, DET at tested scope):** R1 gates pathless NON_STRUCTURAL at Materiality→PREPARE (positive claim + Product checks). R2 is a Product dependency of F10 Select/Start on the Cursor REAL boundary — stamp ≠ technical no-write; Fake/DET path unchanged. Not a new OA object; not a parallel engine. **OPEN:** `TOOL-FIRST-REAL-NOWRITE` (Product gate ≠ technical Cursor REAL no-write sandbox).

 ## DEP edges (stable IDs)

-| ID | From | To | Why |
-|---|---|---|---|
-| DEP-ACGC-ART | OBJ-ARTIFACT-CONTINUATION | OBJ-ARTIFACT-ROUTING | target composition under workspace |
-| DEP-ACGC-ASSESS | OBJ-ARTIFACT-CONTINUATION | OBJ-FINALIZATION-ASSESS | APPLICABLE/SATISFIED gate |
-| DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification |
-| DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision |
-| DEP-HD-EC | OBJ-HD | OBJ-EC | prepare after authority |
-| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | Select→Attempt; Tool-First R2 may refuse Select (no Attempt) or Start (Attempt stays accepted) when REAL+pathless non-mutating |
-| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence |
-| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn |
-| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-INTENT | deterministic structured analysis |
-| DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity |
-| DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt |
-| DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural PREPARE |
-| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs; Tool-First R1 pathless positive-claim gate |
+**Index note (AKG-M3 G6 / CORR-01):** Curated `manifest.dependencies[]` holds exactly **9** edges; both endpoints ∈ `manifest.components[]` (13 after OBJ-ATTEMPT). **DEP-EC-ATT** = `OBJ-EC` → `OBJ-ATTEMPT` (prior self-edge was a conformance-preserving stub — R-M3A-01). Distinguish: (1) **curated indexed edge** (in the nine); (2) **historical narrative endpoint label** on a curated edge (e.g. old `OBJ-INTENT` wording for DEP-FAKE-INTENT — not a curated component); (3) **purely descriptive / non-indexed** edges (not in the nine — not auto-promoted).
+
+### Curated nine (manifest.dependencies[])
+
+| ID | From | To | Why | Manifest curated? |
+|---|---|---|---|---|
+| DEP-ACGC-ART | OBJ-ARTIFACT-CONTINUATION | OBJ-ARTIFACT-ROUTING | target composition under workspace | YES |
+| DEP-ACGC-ASSESS | OBJ-ARTIFACT-CONTINUATION | OBJ-FINALIZATION-ASSESS | APPLICABLE/SATISFIED gate | YES |
+| DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification | YES |
+| DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision | YES |
+| DEP-HD-EC | OBJ-HD | OBJ-EC | HD-bound / historical disposition-before-PREPARE and Proposal→prepare linkage — **not** a universal precondition of SHE inspectable PREPARE. Under SHE CURRENT, an inspectable PREPARE does not require prior HD. Any applicable HD is recorded within the Pilot's Exécuter gesture, after inspection, followed by conditional Confirmation and Authorization before any new Attempt or Cursor launch. | YES |
+| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | Select→Attempt; Tool-First R2 may refuse Select (no Attempt) or Start (Attempt stays `accepted`) when REAL+pathless non-mutating | YES |
+| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn | YES |
+| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-TURN-ORCH | deterministic structured analysis into turn orch (**curated to=`OBJ-TURN-ORCH`**). Historical narrative sometimes labelled the consumer `OBJ-INTENT` — that label is **not** a curated component and does **not** mean this edge is absent from the manifest | YES |
+| DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity | YES |
+
+### Descriptive / non-indexed (narrative only — not in manifest.dependencies[])
+
+| ID | From | To | Why | Manifest curated? |
+|---|---|---|---|---|
+| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence | NO (narrative) |
+| DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt | NO (narrative) |
+| DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural disposition-before-PREPARE | NO (narrative) |
+| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs; Tool-First R1 pathless positive-claim gate | NO (narrative) |

 ## Sample impact analysis A — `activeCycleGovernedContinuation.ts`

diff --git a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
index af05ac4f..8513b780 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -38,7 +38,7 @@
 - **FakeConversationProvider** (`lib/platform/ai/fakeProvider.ts`): deterministic structured intent including path-less active-cycle materialization matcher; may synthesize `note-de-cadrage.md` leaf in some framings.
 - **OpenAI live:** same schemas; non-deterministic linguistics; may omit filename/`continuationKind`.
 - **Cursor REAL:** gated; mutual exclusion with deterministic Cursor E2E boundary asserted in runtime helpers.
-- **Tool-First R2 (local candidate — PENDING_GIT_INTEGRATION):** `SFIA_STUDIO_CURSOR_REAL=1` arms REAL generalist. Pathless non-mutating ECs hit Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` because REAL generalist has **no** technical no-write sandbox: **Select** refuses before new Attempt; **Start** refuses launch while an existing Attempt stays `accepted`. Env flag alone does not prove REAL BOUNDARY. Fake/DET (`CURSOR_REAL≠1`) remains the deterministic path for those missions.
+- **Tool-First R2 (CURRENT ON MAIN — PR #588 merge `304e30e8`):** `SFIA_STUDIO_CURSOR_REAL=1` arms REAL generalist. Pathless non-mutating ECs hit Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` because REAL generalist has **no** technical no-write sandbox: **Select** refuses before new Attempt; **Start** refuses launch while an existing Attempt stays `accepted`. Product gate ≠ technical sandbox. Env flag alone does not prove REAL BOUNDARY. **OPEN:** `TOOL-FIRST-REAL-NOWRITE`. Fake/DET (`CURSOR_REAL≠1`) remains the deterministic proof path for those missions at tested scope.

 ## Server vs client

diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 659effc5..aef82ade 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -2,7 +2,7 @@

 **As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`** (baseline documentaire historique)

-**Amendement documentaire D-P6-SHE-01 (2026-10-19 — Git Integration) :** SINGLE HUMAN EXECUTE / Option A est **CURRENT on Delivery** (déterministe prouvé au périmètre testé ; PR DRAFT pending merge). Les invariants SHE ci-dessous deviennent CURRENT. Les invariants « STRUCTURAL PREPARE requires HD » restent **HISTORICAL / disposition-before-PREPARE** (chemin encore disponible) — ils ne bloquent plus l’inspectable PREPARE sous SHE. TARGET architecture = Delivery runtime ; ≠ INTEGRATED_ON_MAIN tant que merge Morris non accordé ; ≠ REAL/HQA PROVEN.
+**Amendement documentaire D-P6-SHE-01 (requalifié AKG-M3 G6 — 2026-10-21) :** SINGLE HUMAN EXECUTE / Option A est **CURRENT ON MAIN** — Product integrated via **PR #590** merge `c9abdbc3` (ancestor of main tip `c2b3d00c…`). DETERMINISTIC at tested scope. Les invariants SHE ci-dessous restent CURRENT. Les invariants « STRUCTURAL PREPARE requires HD » restent **HISTORICAL / disposition-before-PREPARE** (chemin encore disponible) — ils ne bloquent plus l’inspectable PREPARE sous SHE. Prior wording « CURRENT on Delivery / PR DRAFT pending merge / NOT INTEGRATED ON MAIN » is **HISTORICAL**. ≠ REAL/HQA PROVEN · ≠ P6 GLOBAL PASS · runtime v3 NON ADOPTED.

 ## Invariant catalog — CURRENT IMPLEMENTED

@@ -71,7 +71,7 @@ Fake/DET (`CURSOR_REAL≠1`) remains admissible for both phases. Ordinary write

 Les invariants HISTORICAL `INV-STRUCTURAL-*PREPARE*HD` et la contrainte PREPARE-only de `INV-EMPTY-REFS-NE-STRUCTURAL` restent vraies pour le **chemin disposition-before-PREPARE** et les suites mHd01 / DER16. Sous SHE, leur **timing PREPARE** est superseded (autorité structurelle avant **lancement**).

-### SHE invariant catalog (CURRENT — Delivery)
+### SHE invariant catalog (CURRENT ON MAIN — DET at tested scope)

 | ID | Statement (CURRENT SHE) | Proof owner |
 |---|---|---|
@@ -123,4 +123,4 @@ sinon STOP · 0 Attempt

 Governance STOP ≠ product defect: blocked continuation for UNKNOWN Artifact is **expected**.

-**Note SHE CURRENT :** sous D-P6-SHE-01 Delivery, STRUCTURAL sans HD préalable peut PREPARE inspectable ; les refus d’autorité portent sur **Exécuter** (HD/Confirm/Authorize/currentness). REAL/HQA et merge main restent des gates Morris distincts.
+**Note SHE CURRENT :** sous D-P6-SHE-01 (**CURRENT ON MAIN**), STRUCTURAL sans HD préalable peut PREPARE inspectable ; les refus d’autorité portent sur **Exécuter** (HD/Confirm/Authorize/currentness). REAL/HQA / P6 GLOBAL PASS restent des gates Morris distincts (non acquis).
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index eb600e9c..915639c9 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -93,21 +93,45 @@

 ## Overlay — P6 Generic Execution consolidation candidate (LIVING REFERENCE R1–R4)

-**Status:** AS_IMPLEMENTED_IN_CANDIDATE on integration worktree `integration/sfia-studio-p6-generic-execution-consolidation` @ base `896ff59c` · Product dirty transferred from source `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` · **PENDING_GIT_INTEGRATION** · **NOT INTEGRATED_ON_MAIN**.
+### A — HISTORICAL AT MACRO TIME (snapshot preserved)

-| Item | Status |
+**Do not read this subsection as CURRENT.** It records the consolidation-candidate documentary tip as authored then.
+
+- Integration worktree: `integration/sfia-studio-p6-generic-execution-consolidation` @ base `896ff59c`
+- Product dirty transferred from source `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862`
+- Then-status: **AS_IMPLEMENTED_IN_CANDIDATE** · **PENDING_GIT_INTEGRATION** · **NOT INTEGRATED_ON_MAIN**
+
+| Item (historical tip) | Status **at macro time** |
 |---|---|
 | G-IB (importBoundaries allowlist +4 W2 type-only RuntimeOaStack) | **CLOSED** (historical gate) |
-| G-DIGEST Living Reference digests | **PENDING CONTENT APPROVAL** — manifest **FROZEN**; digests **not** promoted this cycle |
-| Living Reference volumes 02/03/04/06/07/08/09 | Semantic amendments R1–R4 applied locally — ChatGPT content review required before digest write |
-| 77 Product candidates + allowlist | Preserved dirty; **no** Product commit/push/PR this cycle |
+| G-DIGEST Living Reference digests | **PENDING CONTENT APPROVAL** — manifest **FROZEN**; digests **not** promoted that cycle |
+| Living Reference volumes 02/03/04/06/07/08/09 | Semantic amendments R1–R4 applied locally — ChatGPT content review required before digest write (that tip) |
+| 77 Product candidates + allowlist | Preserved dirty; **no** Product commit/push/PR that cycle (**historical** — not a claim about today’s worktree) |
 | Pending Generic PREPARE offer | Process-local — restart-unsafe (vol 06) |
 | Generic Mission HumanDecision | Durable OA; restart ≠ CURRENT offer; applicability re-check required |
 | Cursor REAL / OpenAI LIVE / HQA | **NOT PROVEN / NOT RETESTED** |
 | P6 GLOBAL PASS / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
-| DETERMINISTIC proof ceiling | Historical 328 targeted PASS + G-IB 5/5 — **not re-executed** this documentary cycle |
+| DETERMINISTIC proof ceiling | Historical **328 targeted PASS** + G-IB 5/5 — **not re-executed** in later documentary cycles |
+
+### B — CURRENT ON MAIN (Git requalification)
+
+Consolidation / Tool-First / SHE lineages absorbed via **PR #587** merge `e03c7b9f`, **PR #588** merge `304e30e8`, **PR #590** merge `c9abdbc3` (ancestors of main tip `c2b3d00c…`). Product behaviour for Generic PREPARE / optional Artifact / Tool-First R1/R2 / SHE is **CURRENT ON MAIN** only at deterministic tested scopes documented in vols 03/05/07. **OPEN / NOT PROVEN:** Cursor REAL · OpenAI LIVE · HQA · P6 GLOBAL PASS · READY FOR REAL · runtime v3 ADOPTED · `TOOL-FIRST-REAL-NOWRITE`.
+
+### C — G6 / CORR-01 LOCAL CANDIDATE (this documentary track)
+
+| Item | Status **now** |
+|---|---|
+| G6 PRR semantic sync authoring | Local dirty candidate (seven PRR paths) — **not** project-integrated |
+| G6-CORR-01 semantic corrections | Local candidate under Critical Re-Review — digests **not** written |
+| G-DIGEST / sha256_16 refresh | **PENDING MORRIS GO Digest Sync** — EXPECTED DIGEST DRIFT until authorized |
+| Global PRR conformance | **NOT ACQUIRED** while digests drift |
+| Project Git integration (commit/push/PR/merge) | **NOT AUTHORIZED** |

-**Next (distinct GOs):** ChatGPT semantic content review → Morris digest approval → conformance → Product git decision → PR/CI/merge → HQA reprise. This overlay does **not** claim CURRENT ON MAIN.
+### D — Gaps / reserves (continuity)
+
+R-M3A-01 OPEN · R-M3B-01 OPEN · R-G6-SR-01…04 = correction candidates under re-review (**not CLOSED** until Critical Re-Review accepts) · M2 38×20 identities preserved · F18/F19 PARTIAL · REAL NOT PROVEN.
+
+**Do not** promote Layer A PENDING_GIT_INTEGRATION / G-DIGEST historical rows into CURRENT after main absorption.

 ## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (historical macro — retained)

@@ -171,11 +195,13 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | REAL SprintBoard / Cursor REAL re-proof | NOT PROVEN — ZERO REAL this macro |
 | New store/table / parallel engines | NONE |

-## Overlay — Tool-First Generic Execution + R1/R2 (local candidate — PENDING_GIT_INTEGRATION)
+## Overlay — Tool-First Generic Execution + R1/R2
+
+**Epistemic requalification (AKG-M3 G6):** Prior title « local candidate — PENDING_GIT_INTEGRATION » is **HISTORICAL**. Product R1/R2 integrated via **PR #588** merge `304e30e8` → **CURRENT ON MAIN** at deterministic tested scope (see README R-S02 / vols 03/05/07).

 | Item | Status |
 |---|---|
-| Pathless analysis PREPARE without invented file path | AS-IMPLEMENTED_IN_CANDIDATE — positive non-mutating claim required (R1) |
+| Pathless analysis PREPARE without invented file path | **CURRENT ON MAIN** — positive non-mutating claim required (R1) |
 | Systematic HD / mandatory CycleInstance / mandatory Artifact for ordinary pathless | **NOT REQUIRED** when NON_STRUCTURAL gates admit |
 | Positive claim forms (R1) | `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` — either form may qualify **iff** complementary Product gates pass |
 | `repositoryMutation` absent **with** admissible `read_only` | **NOT** an automatic refuse of the positive-claim step — `read_only` alone can satisfy that step |
@@ -185,12 +211,12 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED** — HD / refuse paths KEEP |
 | Inspect ≠ Execute; server Confirm/Authorize/Execute distinct | **PRESERVED** — Exécuter may fold Confirm after attest only |
 | Cursor REAL generalist technical no-write | **ABSENT** — debt open |
-| R2 Select (REAL + pathless non-mutating) | AS-IMPLEMENTED_IN_CANDIDATE — refuse **before new Attempt**; code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` |
-| R2 Start (REAL + pathless non-mutating, Attempt already `accepted`) | AS-IMPLEMENTED_IN_CANDIDATE — refuse Start; Attempt stays `accepted`; zero launch-port calls; same code |
+| R2 Select (REAL + pathless non-mutating) | **CURRENT ON MAIN** — refuse **before new Attempt**; code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` |
+| R2 Start (REAL + pathless non-mutating, Attempt already `accepted`) | **CURRENT ON MAIN** — refuse Start; Attempt stays `accepted`; zero launch-port calls; same code |
 | Fake/DET pathless non-mutating Select/Start | ADMISSIBLE — DETERMINISTIC at tested scope |
-| Integration on main / GitHub CI / HQA / P6 GLOBAL PASS | **NOT CLAIMED** — PENDING_GIT_INTEGRATION |
+| Integration on main (Product R1/R2) | **CURRENT ON MAIN** (PR #588) — ≠ HQA / P6 GLOBAL PASS |
 | REAL BOUNDARY PROVEN / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
-| Debt `TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT` | OPEN — sandbox or Product-bound RO agent requires distinct Morris architecture GO |
+| Debt `TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT` | **OPEN** — Product gate ≠ technical sandbox; requires distinct Morris architecture GO |
 | Exit for debt | Enforceable no-write at REAL generalist (or equivalent) + GO + Bounded REAL proof |

 ## Overlay — P6-HQA-F05-GD4-01 / PR #586 (optional Artifact / Generic PREPARE)
@@ -291,3 +317,28 @@ No `retired-components-ledger.md` — zero components removed.
 - NoteLite REAL re-proof deferred (Morris GO distinct)
 - Nora model/provider tuning deferred
 - `durableLocalWriteSeal` domain API transitional (tests/domain only — not Product front door)
+
+## AKG-M3 G6 — PRR Semantic Sync authoring (LOCAL CANDIDATE) + CORR-01
+
+**Authority:** Morris GO G6 PRR Semantic Sync Authoring (2026-10-21) · Morris GO G6-CORR-01 Bounded Semantic Correction Pass (2026-10-21). Digests / project commit / PR **NOT** authorized.
+
+| ID | Status | Note |
+|---|---|---|
+| **R-M3A-01** | **OPEN** — technical index candidate applied locally (OBJ-ATTEMPT + DEP-EC-ATT retarget); **not FORMALLY CLOSED** pending Critical Re-Review + Digest Sync + conformance | Formal owner NOT ASSIGNED |
+| **R-M3B-01** | **OPEN** — G6 scope completeness (vols 02/03/04/05/07/09 + manifest covered in authoring; README/01/06/08 READ-ONLY) | Formal owner NOT ASSIGNED |
+| **R-G6-SR-01** | Correction candidate (Attempt active vs terminal statuses) — **OPEN under re-review** | Formal owner NOT ASSIGNED |
+| **R-G6-SR-02** | Correction candidate (SHE authority timing / DEP-HD-EC Why) — **OPEN under re-review** | Formal owner NOT ASSIGNED |
+| **R-G6-SR-03** | Correction candidate (curated vs narrative DEP description) — **OPEN under re-review** | Formal owner NOT ASSIGNED |
+| **R-G6-SR-04** | Correction candidate (historical P6 provenance layers) — **OPEN under re-review** | Formal owner NOT ASSIGNED |
+| R-M2A-04 | OPEN/GOVERNED | preserved |
+| R-M2B-03 | PASS WITH GOVERNED RESERVE | preserved |
+| B-M2B-01…05 | OPEN | B-M2B-03 routing ambiguity **not** behaviourally closed by documentary table |
+| RS-03 | OPEN | preserved |
+| TOOL-FIRST-REAL-NOWRITE | OPEN | preserved |
+| F18 / F19 | PARTIAL | preserved — no COMPLETE promotion |
+| REAL | NOT PROVEN | preserved |
+| F11b INDEX SCOPE | POLICY RECORDED (subflow; not in flows[]) | ≠ missing Product |
+| DEP-EC-ATT | LOCAL CANDIDATE fidelity fix (EC→Attempt) | awaiting semantic+digest gates |
+| M2 debt register 38×20 | identities/statuses conserved | `df77b8a2…` immuable |
+
+**Anti-claims:** CORR-01 authoring ≠ Critical Re-Review APPROVED ≠ Digest Sync AUTHORIZED ≠ GLOBAL CONFORMANCE PASS ≠ project Git integrated ≠ AKG-M3 CLOSED ≠ P6/v3/REAL.
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index a25297d5..1cdc1863 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -15,19 +15,19 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
-      "sha256_16": "71177cd234b88a3b"
+      "sha256_16": "61d089bf93c1676a"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "12331c256c76bd30"
+      "sha256_16": "f0ec94936c4d8572"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "b7236bfd326f8f9a"
+      "sha256_16": "631fc37fa374c7c1"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
-      "sha256_16": "2f13a6917c240eb7"
+      "sha256_16": "9883dc02a7856cf9"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
@@ -35,7 +35,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "88893854dfe22bd9"
+      "sha256_16": "f19dd23a99dc896a"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
@@ -43,7 +43,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "252e18777ad9e04b"
+      "sha256_16": "8e0ff7d45b1b33fa"
     }
   ],
   "components": [
@@ -316,6 +316,37 @@
       "authoritySensitive": true,
       "persistence": "oa_execution_contracts"
     },
+    {
+      "id": "OBJ-ATTEMPT",
+      "title": "ExecutionAttempt",
+      "docSection": "02-runtime-object-catalog.md",
+      "trackedSourcePaths": [
+        "projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts",
+        "projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts",
+        "projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts",
+        "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts",
+        "projects/sfia-studio/app/features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts"
+      ],
+      "flowIds": [
+        "F10",
+        "F11",
+        "F18"
+      ],
+      "invariantIds": [
+        "INV-ATTEMPT-NE-PROVEN",
+        "INV-NO-EXEC-BEFORE-AUTH"
+      ],
+      "testPaths": [
+        "projects/sfia-studio/app/__tests__/oa/execution-attempt/lifecycleFoundation.test.ts",
+        "projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts"
+      ],
+      "dependsOn": [
+        "OBJ-EC"
+      ],
+      "dependencyIds": [],
+      "authoritySensitive": true,
+      "persistence": "oa_execution_attempts"
+    },
     {
       "id": "OBJ-UI-LIFECYCLE",
       "title": "Lifecycle UI presentation",
@@ -557,7 +588,7 @@
     {
       "id": "DEP-EC-ATT",
       "from": "OBJ-EC",
-      "to": "OBJ-EC"
+      "to": "OBJ-ATTEMPT"
     },
     {
       "id": "DEP-MW5-TURN",

```

---

## 18. Manifest / digests après merge (on origin/main)

```text
counts: 13 20 20 9
02-runtime-object-catalog.md 61d089bf93c1676a
03-end-to-end-flow-catalog.md f0ec94936c4d8572
04-dependency-impact-map.md 631fc37fa374c7c1
05-environments-configuration-and-boundaries.md 9883dc02a7856cf9
07-authority-invariants-and-failure-modes.md f19dd23a99dc896a
09-known-gaps-reserves-and-current-boundaries.md 8e0ff7d45b1b33fa
OBJ-ATTEMPT True
deps_sample [('DEP-HD-EC', 'OBJ-HD', 'OBJ-EC'), ('DEP-EC-ATT', 'OBJ-EC', 'OBJ-ATTEMPT')]
F11b_in_flows False
```

Index: **13 / 20 / 20 / 9**. Digests six volumes MATCH G6-DIGEST-SYNC. OBJ-ATTEMPT present. DEP-EC-ATT / DEP-HD-EC present. F11b absent from flows[].

Immutable PR head content identity preserved via second parent `d21fbb86`.

---

## 19. Workflows post-merge (observe only)

| Run | Status | Head | Note |
|---|---|---|---|
| `39651441205` | **IN_PROGRESS / PENDING** at pack time | `d41c6a66` | SFIA Studio CI on main after merge |
| Detect job | SUCCESS (observed early) | | |
| Build and validate | IN_PROGRESS | | **NOT declared SUCCESS** |

Pre-merge CI SUCCESS is the merge gate evidence. Post-merge CI PENDING ≠ SUCCESS; deferred to Post-Merge cycle.

URL: https://github.com/mcleland147/sfia-workspace/actions/runs/39651441205

---

## 20. Fake / Real Qualification

| Item | Verdict |
|---|---|
| Applicable | YES |
| New REAL execution | NONE |
| New fakes | NONE |
| Entry level | DETERMINISTIC PROVEN AT TESTED SCOPE |
| New proof | Git Merge / main provenance (`d41c6a66`) |
| REAL | NOT PROVEN |
| P6 GLOBAL | NOT PASSED |
| Runtime v3 | NON ADOPTED |
| F18/F19 | PARTIAL |
| TOOL-FIRST-REAL-NOWRITE | OPEN |

---

## 21. Réserves et dettes

| Reserve | Status |
|---|---|
| R-M3A-01 | OPEN |
| R-M3B-01 | OPEN |
| R-G6-SR-01…04 | semantically resolved; formal closure not automatic |
| R-M2A-04 | OPEN/GOVERNED |
| R-M2B-03 | PASS WITH GOVERNED RESERVE |
| B-M2B-01…05 | OPEN |
| M2 debt register | preserved |
| REAL / P6 / v3 | unchanged |

No debt closed by merge alone.

---

## 22. Gates Morris restants

1. ChatGPT Critical Merge Verification (this handoff)
2. Post-Merge verification cycle under **distinct** Morris GO
3. AKG-M3 Formal Exit under **distinct** Morris GO
4. AKG-M4 under **distinct** Morris GO
5. Merge GO already consumed — **no re-merge**

Branch `docs/sfia-studio-akg-m3-g7-prr-consolidation` **retained** (not deleted).

---

## 23. Verdict

**G7 MERGE COMPLETE — REMOTE VERIFIED — READY FOR POST-MERGE ARBITRATION.**

Anti-claims:

```text
MERGE COMPLETE
≠ POST-MERGE VALIDATED
≠ AKG-M3 FORMAL EXIT
≠ AKG-M4 STARTED
≠ P6 GLOBAL PASS
≠ REAL BOUNDARY PROVEN
≠ RUNTIME V3 ADOPTED
```

---

## 24. Instruction ChatGPT

Lire Git branche `sfia/review-handoff` fichier `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier cycle **G7-MERGE-01**.

Contrôler :

- GO Morris « OK GO MERGE » consommé
- PR #599 MERGED
- merge SHA `d41c6a660196ac26a401297c53f4be6f7ac98882`
- parents `c2b3d00c` + `d21fbb86`
- origin/main = merge SHA
- exactement 7 fichiers PRR · +178/−62
- digests six volumes
- pre-merge CI SUCCESS (Required Gate included)
- post-merge CI observed PENDING (not claimed SUCCESS)
- absence Product/Roadmap mutation
- handoff L3
- réserves OPEN
- pas de delete-branch / Formal Exit / M4

Produire **ChatGPT Critical Merge Verification**.

Si conforme : proposer cycle **Post-Merge AKG-M3** sous GO Morris distinct.

Si anomalie : STOP / MORRIS DECISION REQUIRED.

---

## Appendix A — Immutable references

| Ref | SHA |
|---|---|
| Pre-main | `c2b3d00ceb73b07eab44243ac45ecbe75e6e5bfd` |
| PR head | `d21fbb86d69671987ee9660be768dc16f69a5ca1` |
| Merge commit | `d41c6a660196ac26a401297c53f4be6f7ac98882` |
| G7 handoff | `82c772c95af8a821c1dc63568e12dfdbecd7fc7a` |
| G7 handoff blob | `2af33a2d7e037ab9d0503929f70e9b006d83b8b6` |
| DIGEST SYNC handoff | `22b0b06f43f78c387f297ec5c6ab044ad5a53f5a` |

END — AKG-M3 G7-MERGE-01
