# SFIA STUDIO — GOVERNED CYCLE EXECUTION COMPLETION
# ONE-LOT CONSTRUCTION QUALIFICATION
# ARCHITECTURE-TO-DELIVERY CONTRACT
# REVIEW PACK — FULL (READ-ONLY)

## 0. TIMESTAMP

- **timestamp (Europe/Paris):** 2026-09-11 09:24:13 CEST
- **worktree:** `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- **branch:** `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- **HEAD:** `6a2e3c9d71275145b20b514d02ab54533a72a2a7`
- **parent:** `4a80965a5f1687f805544c56be66e5d2ead3ea29`
- **origin/main:** `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- **prior GCEC capability handoff:** `sfia/review-handoff` `df51a6e5f66f364dfadf185a19ca48f75a70ce15`
- **External cycle:** 6 — Architecture technique · EVOL · CRITICAL
- **GO Morris:** ADOPT D-GCEC-01 A BOUNDED, D-GCEC-02 EXPLICIT BINDING + DEDICATED PROOF REPO, D-GCEC-03 A BOUNDED DOCS-WRITE, D-GCEC-05 OPTION 1 TEMPORARY WITH EXIT, D-GCEC-06/07 ADAPT EXISTING, D-GCEC-08 SAME-LOT · AUTHORIZE GCEC ONE-LOT CONSTRUCTION QUALIFICATION
- **Product Completion:** CLOSED · **runtime v3:** NON ADOPTED
- **Implementation in this cycle:** NONE

## 1. GIT TRUTH

```
branch = delivery/sfia-studio-product-proof-qual-to-governed-cycle
HEAD   = 6a2e3c9d71275145b20b514d02ab54533a72a2a7
HEAD^  = 4a80965a5f1687f805544c56be66e5d2ead3ea29
origin/main = a9f6c310a0826d0e5bd6f7264603382a86564db1
handoff tip at start = df51a6e5 (parent 0163ba31)
```

Tracked Product tree clean. Dirt only `.tmp-sfia-review/**`.

## 2. SOURCES

Process template · routing · operating model · guardrails · v2.5 cycles · CKC architecture technique · Build Doctrine · Roadmap · Product Completion cadrage · v3 23/30–35/37 · GCEC qualification handoff `df51a6e5` · Product traces (Project/Decision/EC/Evidence/Attempt/F3/M4/TrajectorySurface).

Hierarchy: Git > Morris decisions consumed > HD facts > sources > memory > hypothesis.
v2.6 = PROCESS only — no runtime markdown dependency.

## 3. CONVERGENCE PRE-CHECK

Build Doctrine ACTIVE · Product Completion CLOSED · runtime v3 NON ADOPTED · F3 Product path SoT · execution-run OUT as completion SoT · Recommendation ≠ HD · Nora ≠ execution authority.

## 4. MORRIS DECISIONS CONSUMED

| ID | Adoption | Bound meaning |
|----|----------|---------------|
| D-GCEC-01 | A BOUNDED | DoctrinePackage + F14 semantics + cycle/context binding; no parallel obligation engine |
| D-GCEC-02 | Explicit Project binding + dedicated proof repo vehicle | Ambient sfia-workspace ≠ target; dedicated Gestion de tâches repo = first vehicle only |
| D-GCEC-03 | A BOUNDED DOCS-WRITE | Sibling AgentCapability; do not break RO contract |
| D-GCEC-04 | Doctrine-resolved | Local write/commit/push/PR/CI read/merge/post-merge under gates; no autonomous merge |
| D-GCEC-05 | Option 1 TEMPORARY + EXIT | Producing CycleInstance stays active through post-merge for first vertical only |
| D-GCEC-06 | ADAPT existing | No new Artifact aggregate/table unless forced |
| D-GCEC-07 | Typed Git via existing Evidence | Merge + target verify + artifact identity + CI/review when Git APPLICABLE |
| D-GCEC-08 | Same-lot ADAPT | Trajectory reprepare fix inside Delivery lot |

## 5. CURRENT REAL PROJECT STATE (RO)

`prj:22fc4a03-ff89-4f97-98a2-877dc9ea781e` Gestion de tâches · LPS **v12** · active=null · framing **completed** · step **done** · `opt:no-governed-effects` · FINALIZE accepted · EC/Evidence/RB=0.

Lifecycle-mechanics evidence only — not repo-backed Cadrage completeness. Do not reopen.

## 6. CAN ONE-LOT BE IMPLEMENTED WITHOUT NEW PERSISTENCE?

# **YES**

All required durable state fits existing SQLite aggregates as `payload_json` / existing columns. No new table. No migration. No new persistence boundary.

If Delivery invents a first-class `oa_artifacts` table → **GATE GCEC-PERSIST / STOP**. Not required under D-GCEC-06.

---

## 7. PERSISTENCE IMPACT MATRIX

| OBJECT | CURRENT STORE | PROPOSED DELTA | SCHEMA CHANGE? | MIGRATION? | BACK-COMPAT | STATUS |
|--------|---------------|----------------|----------------|------------|-------------|--------|
| Project | `oa_projects.payload_json` | Add optional `repositoryBinding` object | **NO** | **NO** | Additive JSON | READY |
| DecisionBasis | inside `oa_human_decisions.payload_json` | Extend `executionBasis` fields | **NO** | **NO** | Additive | READY |
| ExecutionContract | `oa_execution_contracts` + payload | Use existing action/target/scope/inputs/EO/caps/constraints | **NO** | **NO** | — | READY |
| ExecutionAttempt | `oa_execution_attempts` | Allow docs-write agent class in start/grant paths | **NO** | **NO** | — | READY |
| Evidence | `oa_evidence` + payload | Typed Git via `source`/`location` discriminators; KEEP EvidenceType enum | **NO** | **NO** | Additive convention | READY |
| ReviewBundle | `oa_review_bundles` | Reference artifact/git evidence ids | **NO** | **NO** | — | READY |
| CycleInstance | `oa_cycle_instances` | No required delta for Option 1 | **NO** | **NO** | — | READY |
| LPS | `oa_lps` | Links only; no new columns | **NO** | **NO** | — | READY |
| ProjectTrajectory | `oa_project_trajectories` | No schema; presentation ADAPT | **NO** | **NO** | — | READY |
| AgentCapability | in-memory registry | Sibling descriptor | N/A SQL | N/A | — | READY |
| F14 obligations | derived (no table) | On-demand binder module | **NO** | **NO** | — | READY |

**PERSISTENCE VERDICT: NO SCHEMA CHANGE REQUIRED → Delivery qualification may proceed.**

---

## 8. F14 / OBLIGATION BINDING (D-GCEC-01)

### Chosen option: **A — derive on demand** (schema-free)

Do **not** create Cycle Obligation Engine or new table.

**Runtime binder (new module):** compose from:
1. DoctrinePackage pin + cycle type (`cycleTypeCatalog` + CKC cognitive refs — narrative → machine mapping table in TS, not markdown parse)
2. Project context class (esp. `repositoryBinding` present ⇒ repo-backed)
3. Intrinsic defaults for proof vehicle `cyc:functional-design` (or catalog key) when repo-backed: artifact/EC/evidence/review/git **APPLICABLE**
4. Human exception HD (obligation-policy) with **monotone contradiction**: MUST cannot be silently erased by `opt:no-governed-effects`

**Integration:** `deriveFinalizationApplicability` consumes binder snapshot **before** row presence. Absence → UNKNOWN/missing proof → BLOCKING.

**Rules:**
- deterministic MUST > generic no-governed-effects
- N/A against MUST → fail-closed contradiction or explicit governed exception UX (Pilot-owned; no auto DebtItem)
- Nora does not own applicability

**Files:** BUILD `deriveCycleObligationSnapshot.ts` (name flexible) · ADAPT `deriveFinalizationApplicability.ts` · ADAPT obligation-policy UI to disable/contradict generic N/A when MUST bound · KEEP HD subject model.

---

## 9. PROJECT → REPOSITORY BINDING (D-GCEC-02)

### Minimum durable fields (on Project.payload_json)

```ts
repositoryBinding?: {
  provider: "github"; // first slice
  identity: string;   // "owner/repo"
  remoteUrl: string;  // https://github.com/owner/repo.git
  defaultBranch: string; // "main"
  baseSha?: string;   // optional pin; else resolve at prepare
  pathRoot?: string;  // e.g. "docs/" allowlist root
}
```

Ambient `repoRoot` from Studio compose remains **Studio implementation workspace**, never Project target.

### First proof vehicle (DO NOT CREATE NOW)

| Item | Recommendation |
|------|----------------|
| Name | `sfia-pp-gestion-de-taches` (or `gestion-de-taches-product-proof`) |
| Host | GitHub under Morris-controlled org/user |
| Default branch | `main` |
| Bootstrap | README + `docs/` directory; empty or minimal LICENSE |
| Auth | existing GitHub credentials via Product/git provider ports — never print secrets |
| Creation gate | **GATE GCEC-REPO-CREATE** separate GO |

Validation: remote reachable · defaultBranch exists · pathRoot inside repo · no sfia-workspace identity unless explicitly bound (forbidden for this vehicle).

Stale-base: EC `inputs.baseHeadSha` must match worktree HEAD at Gate D; mismatch → STOP / re-confirm.

---

## 10. DECISIONBASIS EXECUTION INTENT

KEEP DecisionBasis on HumanDecision. ADAPT `executionBasis` additively:

| Field | Purpose |
|-------|---------|
| `intentKind` | e.g. `docs_write` |
| `artifactType` | e.g. `functional_design` |
| `targetRepositoryRef` | binding identity |
| `targetPath` | relative path under pathRoot |
| `scopeIn` / `scopeOut` | strings/lists |
| `expectedOutputs` | paths/digests claims |
| `requiredCapabilities` | e.g. `cap:cursor.docs_write` |
| `validationExpectations` | commands/checks |
| `evidenceRequirements` | `evreq:*` |
| existing `stopConditions` / extend `reversibility` | |
| provenance | HD provenance + cycle/Nora refs already available |

Nora structured output: **ADAPT** existing F2 strict `json_schema` pattern (`intentAnalysis.ts`) — **COMBINE** / **BUILD ONLY SFIA-SPECIFIC DELTA** for execution-intent schema. No second LLM. No prose parser. Unresolved fields remain fail-closed at PREPARE.

Persistence: additive JSON in HD payload — **no migration**.

---

## 11. EXECUTIONCONTRACT RESOLUTION

Preserve PREPARE → RESOLVE.

**PREPARE:** map DecisionBasis → draft EC; fail-closed if target/caps unresolved when intent claims docs_write.

**RESOLVE profile:** `boundedDocsWrite` (sibling of `boundedReadOnlyM3ResolutionProfile`):
- action: `cursor.docs_write.apply` (exact ID locked in Delivery)
- target: isolated worktree target id / path
- requiredCapabilities: `[cap:cursor.docs_write]`
- inputs: `baseHeadSha`, `repositoryIdentity`, `pathAllowlist`, `createOrModify`
- expectedOutputs: artifact path
- constraints: `NO_GIT_REMOTE`, `NO_COMMIT`, `PATH_ALLOWLIST_ONLY`, `TEXT_DOCS_ONLY`
- evidenceRequirements: artifact digest + touched files
- Confirmation / Gate D required before start

EC schema: **KEEP** — no new columns.

---

## 12. DOCS-WRITE AGENT (D-GCEC-03)

| Item | Spec |
|------|------|
| Capability ID | `cap:cursor.docs_write` |
| Agent type | sibling of M4 RO — **do not mutate** RO descriptor |
| Action | `cursor.docs_write.apply` |
| Target | `workspace.isolated.docs_write` |
| Scope | project-bound repo + pathAllowlist |
| Mode | Cursor REAL agent mode (not `--mode ask`) — branched in gateway |
| Files | text/markdown/docs only; create/modify explicit; no delete in v1 |
| Forbidden | protected paths · arbitrary shell · commit/push/PR · repo-wide write |
| Validation | bounded allowlisted commands only |
| Evidence | exact touched files + digests |
| Fail | dirty unexpected · out-of-scope · digest mismatch · base SHA drift |
| Cleanup | worktree remove per existing workspace port |

Reuse: `studioGitWorktreeWorkspace`, Attempt FSM, registry, Gate D. ADAPT: `startExecution` / `grantGateD` / `studioCursorRealLaunchGateway` / `vertical-slice-runtime/service.ts` registration.

---

## 13. WORKTREE

KEEP `studioGitWorktreeWorkspace`. ADAPT compose to take Project `repositoryBinding` + clone/worktree of **proof repo**, not ambient sfia-workspace. Containment: execRoot ≠ repoRoot; path allowlist under pathRoot; symlink escape checks.

---

## 14. ARTIFACT COMPLETENESS (D-GCEC-06)

No new Artifact table.

Representation:
- Evidence `type: "artifact"` + digest + location path + bindings (project/cycle/EC/attempt)
- F14 checklist evaluated in completeness function (sections/sources/status/reserves)
- ReviewBundle refs artifact evidence ids
- FinalizationAssessment: artifact family SATISFIED only when completeness evaluator PASS + evidence available/verified per policy

---

## 15. TYPED GIT EVIDENCE (D-GCEC-07)

KEEP EvidenceType enum. Discriminator on `source` (and `location` git:// markers):

`git:working_tree_diff` · `git:local_commit` · `git:remote_push` · `git:pull_request` · `git:ci_status` · `git:review_status` · `git:merge` · `git:post_merge_verification`

Payloads carried in existing fields (location/source/digest/bindings/provenance/technicalResultRef as needed) — document typed JSON conventions in TS validators.

**First vertical Git SATISFIED only when:**
merge evidence exists **AND** post_merge_verification proves target branch SHA + artifact path/digest identity **AND** required CI/review evidence satisfied.

Local diff/commit/push/PR alone → still BLOCKING.

ADAPT `qualifyGitEvidence` accordingly.

---

## 16. GIT PORTS / EFFECT BOUNDARIES

| Phase | Port | Authority | Confirmation | Evidence |
|-------|------|-----------|--------------|----------|
| A Workspace mutation | docs-write agent | EC∩cap∩Gate D | Gate D | touched files + digest |
| B Local Git review | status/diff read | read | — | working_tree_diff |
| C Local commit | gitCommitPort | N2 Pilote | explicit | local_commit |
| D Push | gitPushPort | N3 | explicit | remote_push |
| E PR | gitHubPrPort | N3 | explicit | pull_request |
| F CI/review | status read | read | — | ci_status / review_status |
| G Merge | gitMergePort | N3 | explicit; never auto | merge |
| H Post-merge verify | verifyPort | read | — | post_merge_verification |

Classify existing: worktree/git read = KEEP/HARVEST · ops1 commit deny = OUT · handoff publisher = OUT for cycle · execution-run write reject = OUT SoT.

No broad "execute Git" permission.

---

## 17. AUTHORITY / CONFIRMATIONS

`valid HD ∩ EC scope ∩ AgentCapability ∩ runtime policy ∩ Confirmations = effective authority`.

| Effect | Gate |
|--------|------|
| docs write | Gate D + EC |
| validation | fail-closed auto |
| commit | Pilote N2 Confirmation |
| push | Pilote N3 Confirmation |
| PR | Pilote N3 Confirmation |
| merge | Pilote N3 Confirmation; campaign Morris control for Product Proof |

Morris: Studio construction / sfia-workspace gates.
Pilot: runtime Product project + proof repo.
Do not transplant Morris-only Studio rules onto proof repo as automatic identity — but remote/irreversible still need N3 Confirmations.

---

## 18. OPTION 1 TEMPORARY MODEL (D-GCEC-05)

Producing CycleInstance stays **active** through A→H. Progress = EC/Attempt/Evidence/RB accumulation + FinalizationAssessment blockers — **not** new CycleInstances / nesting / catalog change.

**TEMP-GCEC-PRPM-01**
- Target: requalify with distinct `cyc:pr-readiness` / `cyc:post-merge` after first E2E REAL GCEC proof
- Exit: first END-TO-END REAL GCEC accepted + dedicated architecture qualification
- Owner: Morris construction
- Not global doctrine

---

## 19. FINALIZATION

At obligation bind (repo-backed functional-design):
Artifact/EC/Evidence/RB/Git/Exit = **APPLICABLE**.

Progression:
write → artifact may SATISFIED · Git BLOCKING
… through commit/push/PR/CI … Git BLOCKING
merge + post-merge verify + artifact identity → Git SATISFIED
Pilot FINALIZE explicit.

Generic `no-governed-effects`: unavailable or contradiction when MUST bound. Minimum UI: hide/disable or fail with explicit contradiction code — no silent exception.

---

## 20. TRAJECTORY REPREPARE (D-GCEC-08)

Root: `buildPreCycleCandidateApprovalPresentation` returns `alreadyDecided` without checking completed CycleInstance; `TrajectorySurface` shows « Préparer le cycle ».

Desired: completed step + no active → **no prepare CTA** for that completed type; may show terminal history / separate next candidate when qualified; **no** auto-start / fabricated trajectory.

Files: `approveCandidateTrajectory.ts` · `TrajectorySurface.tsx` · tests ADAPT.

---

## 21. SECURITY BOUNDARY

path traversal · symlink · repoRoot/worktree containment · dirty tree · protected paths · command injection · branch/remote validation · force-push ban · no secret logging · GitHub token via existing secret channels · PR/merge target validation · stale SHA · Confirmation→effect TOCTOU re-check baseSha · retry idempotency · partial failure leave Attempt failed + no false Evidence.

---

## 22. FAILURE / RECOVERY (summary)

Cursor fail / OOS write / validation fail / dirty / digest mismatch → Attempt failed; no Git phase; retry needs new Confirmation if Gate D consumed.
Evidence ingest fail after Attempt success → durable Attempt truth; retry ingest without rewrite if idempotent.
commit/push/PR/CI/merge fail → phase Evidence absent; stay active; re-confirm for remote effects.
merge success + Evidence fail → Git remote true; Studio must recover Evidence recording before FINALIZE.
post-merge mismatch → Git BLOCKING; no FINALIZE.
Studio restart → resume from durable EC/Attempt/Evidence; no phantom progress.

No second orchestration engine.

---

## 23. TEST PLAN

UNIT: obligation derive · N/A contradiction · repo binding validation · DecisionBasis map · EC resolve · path allowlist · typed Git qualify · finalization blockers · trajectory reprepare.
INTEGRATION: SQLite Project binding · EC+cap · worktree docs-write · unexpected file · Attempt/Evidence/RB · commit boundary.
DETERMINISTIC fake Git provider at boundary.
LOCAL REAL CURSOR: docs-write on disposable proof clone (**GATE GCEC-CURSOR-REAL**).
REMOTE GIT REAL: push/PR/CI/merge (**gates**).
POST-MERGE REAL: SHA+digest.
RECOVERY: restart after each durable phase.

---

## 24. ONE-LOT INTERNAL STAGES

1. Obligation binder + Project repositoryBinding + DecisionBasis intent + trajectory reprepare
2. boundedDocsWrite profile + agent + worktree binding + Artifact/Evidence completeness
3. Git ports (commit/push/PR/CI/merge/verify) + typed Evidence
4. Finalization wiring + UI gates + deterministic suites
5. REAL readiness (separate campaign GOs)

Stages ≠ separate readiness claims.

---

## 25. ARCHITECTURE PARALLELISM CHECK

Reuse HD · DecisionBasis · EC · Attempt · AgentCapability · F3 · worktree · Evidence · RB · LPS · Trajectory · deriveFinalizationApplicability.
Reject: execution-run SoT · second worktree engine · second Git SoT · new Artifact DB · parallel obligation engine · Nora authority · v2.6 runtime parse.

Why existing insufficient alone: Project lacks repo binding; DecisionBasis lacks target/caps; only RO agent; Evidence lacks typed Git convention; applicability lacks pre-exec F14 bind; trajectory UI ignores completed cycle.

---

## 26. OPENAI FIT CHECK (R22)

Current Product already uses OpenAI **strict json_schema** for F2 intent (`intentAnalysis.ts`).
**Disposition: COMBINE / BUILD ONLY SFIA-SPECIFIC DELTA** — extend structured-output schema for non-authoritative execution intent; reuse same provider path.
ZERO REAL calls this cycle. No second LLM. No provider campaign.

---

## 27. EXACT FILE SCOPE

| Path | Exist | Class | Reason | Persistence |
|------|-------|-------|--------|-------------|
| `lib/oa/project/domain/types.ts` | Y | ADAPT | repositoryBinding | payload JSON |
| `lib/oa/project/domain/invariants.ts` | Y | ADAPT | validate binding | — |
| `lib/oa/project/infrastructure/sqlite/*` | Y | KEEP | opaque JSON | none |
| project UI create/edit binding | Y/partial | ADAPT | set binding | — |
| `lib/oa/decision/domain/types.ts` | Y | ADAPT | executionBasis | HD JSON |
| `lib/oa/decision/domain/invariants.ts` | Y | ADAPT | validate intent | — |
| F2 structured output schema / prompt | Y | ADAPT | emit intent | — |
| `f3/prepareM3FromDecision.ts` | Y | ADAPT | map intent | — |
| `f3/selectProductM3ResolutionProfile.ts` | Y | ADAPT | add docsWrite kind | — |
| `f3/boundedReadOnlyM3ResolutionProfile.ts` | Y | KEEP | RO untouched | — |
| `f3/boundedDocsWriteM3ResolutionProfile.ts` | N | BUILD | resolve profile | — |
| `f3/resolveM3ExecutionContract.ts` | Y | KEEP/light ADAPT | supersede | — |
| `f3/validateResolvedM3ExecutionBoundary.ts` | Y | ADAPT | docs-write boundary | — |
| `lib/oa/execution-contract/domain/types.ts` | Y | KEEP | existing fields | — |
| `lib/oa/cycle/application/deriveCycleObligationSnapshot.ts` | N | BUILD | F14 on-demand | none |
| `lib/oa/cycle/application/deriveFinalizationApplicability.ts` | Y | ADAPT | consume snapshot | — |
| `lib/oa/cycle/application/assessFinalization.ts` | Y | KEEP | — | — |
| `lib/oa/cycle/application/qualifyGitEvidence.ts` | Y | ADAPT | typed sources | — |
| `lib/oa/evidence-review/domain/types.ts` | Y | KEEP | no enum expand | — |
| evidence ingest helpers | Y | ADAPT | typed git builders | — |
| `f3/ingestEvidenceAndRecommend.ts` | Y | ADAPT | — | — |
| `f3/postEvidenceNoraAnalysis.ts` | Y | KEEP | — | — |
| `m4BoundedReadOnlyCursorAgent.ts` | Y | KEEP | RO contract | — |
| `m4BoundedDocsWriteCursorAgent.ts` (name flex) | N | BUILD | sibling agent | memory |
| `memoryAgentRegistry.ts` / `vertical-slice-runtime/service.ts` | Y | ADAPT | register | — |
| `studioCursorRealLaunchGateway.ts` | Y | ADAPT | branch write mode | — |
| `startExecution.ts` / `grantGateD.ts` | Y | ADAPT | allow write agent | — |
| `studioGitWorktreeWorkspace.ts` | Y | KEEP | — | — |
| compose Product real boundary | Y | ADAPT | project-bound repo | — |
| NEW git ports: commit/push/pr/ci/merge/verify | N | BUILD | effect-separated | — |
| harvest existing git read adapters | Y | HARVEST | — | — |
| `approveCandidateTrajectory.ts` | Y | ADAPT | reprepare | — |
| `TrajectorySurface.tsx` | Y | ADAPT | CTA gate | — |
| LifecycleSurface obligation UI | Y | ADAPT | MUST vs N/A | — |
| focused/unit/integration tests | Y/N | BUILD/ADAPT | matrix §23 | — |
| modeled project.schema.json (optional) | Y | ADAPT | non-DDL | — |
| roadmap truth-sync | Y | DEFER | only if Delivery materially changes | — |

---

## 28. GATES

| Gate | Trigger |
|------|---------|
| **GCEC-PERSIST** | any new table/migration → Morris before implement |
| **GCEC-REPO-CREATE** | create dedicated proof repo → separate GO |
| **GCEC-CURSOR-REAL** | first write Cursor REAL → campaign GO |
| **GCEC-PUSH** | first remote push → Confirmation + campaign GO |
| **GCEC-PR** | PR create → Confirmation + campaign GO |
| **GCEC-MERGE** | merge → Confirmation + Morris campaign control; never autonomous |
| **GCEC-RUNTIME-V3** | no promotion; NON ADOPTED |

---

## 29. TEMPORARY DEBT / EXIT

**TEMP-GCEC-PRPM-01** — Option 1 PR/merge/post-merge inside producing cycle.
Exit: first E2E REAL GCEC accepted → requalify catalog cycle relationship.
Owner: Morris.

Other temporary: docs-only write · proof-repo-only Git · typed Evidence by convention not enum — exits when later lots expand.

---

## 30. DELIVERY READINESS CONTRACT

**NAME:** GCEC ONE-LOT DELIVERY
**CAPABILITY:** Governed Cycle Execution Completion
**TYPE:** EVOL · **PROFILE:** CRITICAL

**OBJECTIVE:** Implement one thin vertical enabling Gestion de tâches Conception fonctionnelle to produce a durable functional-design artifact via bounded Cursor docs-write and gated Git integration through post-merge verification, then explicit Pilot FINALIZE.

**IN:** F14 on-demand obligations · Project repositoryBinding · DecisionBasis intent · boundedDocsWrite EC/agent · typed Evidence · Git phase ports · Finalization ADAPT · trajectory reprepare · tests

**OUT:** new Artifact table · nested cycles · catalog rewrite · RO agent mutation · autonomous merge · force push · arbitrary shell · sfia-workspace as target · reopen Product Completion · runtime v3 promotion · REAL Cursor/Git in Delivery without gates

**STRUCTURAL DECISIONS:** D-GCEC-01/02/03/05/06/07/08 consumed · D-GCEC-04 doctrine-resolved

**OPEN GATES:** GCEC-PERSIST (must stay closed) · REPO-CREATE · CURSOR-REAL · PUSH · PR · MERGE · RUNTIME-V3

**PERSISTENCE:** **schema-free**

**AGENT:** `cap:cursor.docs_write` sibling

**PROOF VEHICLE:** Gestion de tâches / Conception fonctionnelle / dedicated proof repo (not created here)

**DETERMINISTIC EXIT:** unit+integration+fake provider PASS; trajectory reprepare PASS; obligation MUST blocks N/A; EC resolve docsWrite PASS

**REAL BOUNDARY EXIT:** LOCAL REAL Cursor docs-write on proof clone under GCEC-CURSOR-REAL

**END-TO-END REAL EXIT:** P1–P25 including merge+post-merge artifact identity under remote gates

**TEMPORARY DEBT:** TEMP-GCEC-PRPM-01

**NEXT:** Product Proof campaign after construction accepted

---

## 31. ANTI-CLAIMS

qualification ≠ implementation · design ≠ REAL · proof-repo decision ≠ repo created · write agent design ≠ Cursor REAL · Git ports ≠ push/PR/merge authorized · Product Completion CLOSED · runtime v3 NON ADOPTED · no Product commit/push

## 32. VERDICT

**PASS — GCEC ONE-LOT CONSTRUCTION QUALIFIED / DELIVERY CONTRACT READY**

Schema-free path proven. Delivery may proceed under consumed D-GCEC decisions and listed gates without reopening architecture unless a Delivery discovery forces GCEC-PERSIST.
