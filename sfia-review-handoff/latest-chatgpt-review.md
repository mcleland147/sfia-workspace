# ChatGPT Review Pack — SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01

- **Date/heure:** 2026-09-27 13:18:35 CEST
- **Macro:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
- **Amendment:** harvest ABSENT/PARTIAL addendum absorbed into volumes 02/06/09; digests refreshed; conformance re-PASS
- **HEAD/base:** `b4aa09bdef29a635e624bb5c396711e75057df4d`
- **Verdict Cursor:** READY FOR REVIEW — LIVING PRODUCTION RUNTIME REFERENCE — FOUNDATION COMPLETE

## Harvest follow-up

Repository-wide harvest confirmed Product SQLite M1–M8 and clarified:
- ContractResult / LifecycleRecommendation: no dedicated tables
- Hybrid Context: composer-only
- MaturityAssessment / ExecutionRun: memory-primary / parallel BC
- Launch safety / OPS1 / D1: isolated stores

Full prior pack volumes remain under `projects/sfia-studio/production-runtime-reference/**` (canonical). Conformance checker PASS after digest refresh.

## Instruction ChatGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` et le corpus `production-runtime-reference/` au HEAD docs branch.

## Verdict

**READY FOR REVIEW — LIVING PRODUCTION RUNTIME REFERENCE — FOUNDATION COMPLETE**

## Canonical corpus files (post-harvest)

### `projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md`

```
# 01 — System Runtime Overview

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

## Layers (factual)

```
Browser / Product UI (pre-m6-product-ui, studio routes)
        ↓ server actions
Project Assistant (features/project-assistant)
  orchestrateTurn / actions / F2 orchestrateF2 / intentAnalysis
        ↓
Nora Cognitive Runtime (lib/nora-cognitive-runtime)
  ProductSqliteSession · Cycle Journal · MW5 critical challenge · CWP hooks
        ↓
OA domain aggregates (lib/oa/{project,cycle,decision,execution-contract,
  execution-attempt,evidence-review,doctrine,git-ports})
        ↓
Product SQLite (oa-product.sqlite) + Nora Session SQLite (nora-session.sqlite)
        ↓ (REAL only, gated)
Cursor / Git / GitHub adapters (execution-run, managed repos)
```

## Composition entry

- `lib/vertical-slice-runtime/singleton.ts` → `getRuntimeApplicationService`
- `lib/vertical-slice-runtime/service.ts` → OA service wiring + product DB path
- Product DB path: `SFIA_STUDIO_PRODUCT_DB_PATH` or default under `.sfia-exec/product/`
- Nora Session path: `SFIA_STUDIO_NORA_SESSION_DB_PATH` or default sibling `nora-session.sqlite` resolved from `process.cwd()` (`sessionPaths.ts`)

## Primary product surfaces

| Surface | Path |
|---|---|
| Studio projects | `app/studio/projects/[id]/page.tsx` |
| Product conversation hook | `features/pre-m6-product-ui/hooks/useProductConversation.ts` |
| Lifecycle UI | `features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx` |
| Project Assistant send | `features/project-assistant/actions.ts` → `projectAssistantSendAction` |

## Cognitive vs Truth C

| Concern | Store | Authority |
|---|---|---|
| Transcript / Journal / Memory B session items | `nora-session.sqlite` | Working context ≠ Truth C |
| Project / LPS / Cycle / HD / EC / Attempt / Evidence / RB | `oa-product.sqlite` | Truth C / durable product |
| F2 Proposal map | process-local `proposalStore.ts` | Not sole restart authority |

## Fake vs REAL boundary (overview)

- Conversation provider: `OPS1_CONVERSATION_PROVIDER=fake|openai` (`lib/platform/ai`)
- Cursor REAL: `SFIA_STUDIO_CURSOR_REAL=1` mutually exclusive with deterministic Cursor E2E boundary
- Same product state machine is intended across Fake/Real at the server decision boundary; linguistic/classifier non-determinism remains on the REAL provider side

## Runtime v3

**NON ADOPTED.** Doctrine v3 framing is destination guidance only.

```

### `projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md`

```
# 02 — Runtime Object Catalog

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**. Fields marked UNKNOWN when not confirmed in harvest.

## OBJ-PROJECT — Project

- **Purpose:** Durable product container (name, objective, binding, workspace key).
- **SoT / persistence:** `oa_projects` (+ payload_json) via OA project store.
- **Create:** `RuntimeApplicationService.createProject` / LocalProjectComposition.
- **Upstream:** server-owned repository binding env (`SFIA_STUDIO_PROJECT_REPOSITORY_*`).
- **Downstream:** LPS, trajectories, cycles, decisions, contracts.
- **Paths:** `lib/oa/project/**`, `lib/vertical-slice-runtime/service.ts`
- **Restart:** survives product DB.

## OBJ-REPO-BINDING — RepositoryBinding

- **Purpose:** Explicit GitHub identity/remote/branch/pathRoot for Project.
- **SoT:** Project payload / binding fields — server-owned; never client-authored.
- **Paths:** project domain + `SFIA_STUDIO_PROJECT_REPOSITORY_*` in `.env.example`
- **Authority:** configuration ≠ authority; enables docs_write composition.

## OBJ-LPS — LivingProjectState

- **Purpose:** Versioned living state; current pointer `oa_lps_current`.
- **Persistence:** `oa_lps`, `oa_lps_current` (OCC via version).
- **Paths:** `lib/oa/project/**`
- **Downstream:** activeCycleInstanceId, ckcResolutionRef projections.

## OBJ-CYCLE — CycleInstance

- **Purpose:** Governed cycle execution unit (type, profile, status).
- **Persistence:** `oa_cycle_instances`.
- **Paths:** `lib/oa/cycle/**`, `pilotLifecycleActions.ts`
- **Invariant:** Project ≠ CycleInstance; old-cycle HD ≠ current authority.

## OBJ-CYCLE-TYPE — CycleType / Catalog

- **Purpose:** Catalogued cycle types + CKC refs + workspace segments.
- **Paths:** `lib/oa/cycle/domain/cycleTypeCatalog.ts`
- **Example:** `cyc:functional-design` drives F14 obligation snapshot when repo-backed.

## OBJ-CKC — CKC / CkcResolution

- **Purpose:** Cycle Knowledge Contract qualification/consumption for cycle type.
- **Paths:** `lib/oa/cycle/domain/ckc*.ts`, F2 `ckcCognitiveContext.ts`
- **Failure codes:** `CKC_*` (see volume 07).

## OBJ-TRAJECTORY — ProjectTrajectory

- **Purpose:** Versioned project trajectory; current pointer with OCC token.
- **Persistence:** `oa_project_trajectories`, `oa_project_trajectory_current`.
- **Paths:** cycle/project trajectory services; greenfield continuity readers.

## OBJ-PROPOSAL — F2 Proposal

- **Purpose:** Structured decision subject presented to Pilot (DECISION_REQUIRED).
- **Persistence:** **process-local** `f2/proposalStore.ts` (Map on globalThis).
- **Notice:** `F2_PROCESS_LOCAL_NOTICE` — conversation/proposal not durable aggregate.
- **Downstream:** HumanDecision via `recordDecision.ts`.
- **Restart:** NOT sole restart authority; subject may need reconstruction/requalification.

## OBJ-PENDING-SUBJECT / OptionSet

- **Purpose:** Effective decision subject / presented options for Pilot.
- **Maturity:** PARTIAL as standalone named aggregate — carried inside Proposal DTO / epistemic markers.
- **Paths:** proposal types, epistemic items table `oa_epistemic_items`.

## OBJ-RECOMMENDATION — Recommendation / LifecycleRecommendation

- **Purpose:** Non-authoritative next-step guidance (≠ HumanDecision).
- **Paths:** `lifecycleRecommendation/**`, presentation labels, conversationGuidance.
- **Invariant:** Recommendation ≠ HumanDecision.

## OBJ-RESERVATION — Reservation

- **Purpose:** Bounded reservation context for piloting (cognitive / cycle reservation).
- **Paths:** `reservationInteractionContext.ts`, nora reservation modules.
- **Authority:** recommendation-class; not execution grant.

## OBJ-HD — HumanDecision

- **Purpose:** Durable Pilot decision (accept/refuse/…); authority evidence scoped.
- **Persistence:** `oa_human_decisions`.
- **Paths:** `lib/oa/decision/**`, `f2/recordDecision.ts`, obligation policy HDs in `pilotLifecycleActions.ts`
- **Examples:** Proposal accept; `OBLIGATION_POLICY_REQUIRE_ARTIFACT`.

## OBJ-DECISION-BASIS — DecisionBasis

- **Purpose:** Sealed WHAT/scope feeding ExecutionContract preparation.
- **Paths:** execution-contract domain / F2 accept path.
- **Invariant:** EC cannot expand DecisionBasis WHAT.

## OBJ-CONFIRMATION — Confirmation

- **Purpose:** Explicit confirmation records (≠ HumanDecision).
- **Persistence:** `oa_confirmations`.
- **Invariant:** HumanDecision ≠ Confirmation.

## OBJ-EC — ExecutionContract

- **Purpose:** Prepared execution contract after required Pilot decision/authority.
- **Persistence:** `oa_execution_contracts`.
- **Paths:** `lib/oa/execution-contract/**`
- **Gate:** no EC before required Proposal HD (product path).

## OBJ-INSPECTION — InspectionAttestation

- **Purpose:** EC inspection attestation before launch.
- **Persistence:** `oa_ec_inspection_attestations`.

## OBJ-AUTH-RECEIPT — AuthorityVerificationReceipt

- **Purpose:** Durable authority verification evidence.
- **Persistence:** `oa_authority_verification_receipts`.
- **Invariant:** Capability ≠ Authority.

## OBJ-CAPABILITY — AgentCapability

- **Purpose:** Declared agent capabilities (e.g. `cap:cursor.docs_write`).
- **Authority:** capability presence ≠ permission to execute.

## OBJ-ATTEMPT — ExecutionAttempt

- **Purpose:** Bounded attempt against an EC; terminal statuses recorded.
- **Persistence:** `oa_execution_attempts`, active pointer, result budget tables.
- **Invariant:** Attempt terminal ≠ Product Result PROVEN.

## OBJ-ARTIFACT — Artifact obligation / materialization

- **Purpose:** Whether deliverable is required (applicability) and materialization continuation.
- **Applicability SoT:** `deriveCycleObligationSnapshot` + `deriveFinalizationApplicability` + assess.
- **Continuation gate:** `activeCycleGovernedContinuation.ts` — REQUIRE_ARTIFACT HD **OR** canonical APPLICABLE∧¬SATISFIED.
- **Routing:** `artifactTargetRouting.ts` (workspace + cycle segment composition).
- **Invariant:** UNKNOWN ≠ APPLICABLE; Applicability ≠ execution authority.

## OBJ-EVIDENCE — Evidence

- **Purpose:** Durable evidence records tied to attempts/artifacts.
- **Persistence:** `oa_evidence` (+ idempotency).

## OBJ-RB — ReviewBundle

- **Purpose:** Review bundle aggregation over evidence.
- **Persistence:** `oa_review_bundles`.

## OBJ-CLAIM — ClaimEvaluation / ContractResult

- **Purpose:** Claim evaluation / contract result semantics post-evidence.
- **Persistence:** `oa_claim_evaluations` (+ idempotency).
- **Invariant:** Technical SUCCESS ≠ READY.

## OBJ-EPISTEMIC — EpistemicItem

- **Purpose:** Durable epistemic markers (observation / decision-subject continuity aids).
- **Persistence:** `oa_epistemic_items`.

## OBJ-CONTRADICTION / OBJ-COG-STOP

- **Purpose:** MW3 contradiction candidates / cognitive STOP signals (non-authoritative alone).
- **Paths:** intentAnalysis cognitive fields; nora-cognitive-runtime MW3 modules.
- **Maturity:** modeled as signals; never silent HumanDecision.

## OBJ-MEMORY-B — ProductSqliteSession / Memory B

- **Purpose:** Session working memory, transcript, journal — ≠ Truth C.
- **Persistence:** `nora-session.sqlite` tables: `session_items`, `logical_product_turns`, `pilot_transcript_turns`, `cycle_journal_*`.
- **Paths:** `productSqliteSession.ts`, `sessionPaths.ts`, `cycleJournalStore.ts`
- **Invariant:** Memory B ≠ Truth C.
- **Ops note:** path defaults relative to worktree `cwd` unless `SFIA_STUDIO_NORA_SESSION_DB_PATH` is absolute — worktree switches can orphan transcript (observed in campaign ops).

## OBJ-HYBRID — Hybrid Context Envelope

- **Purpose:** Composed cognitive context for turns (studioCognitiveContext / activeCycleCognitiveContext).
- **Paths:** `f2/studioCognitiveContext.ts`, `activeCycleCognitiveContext.ts`

## OBJ-CWP — Cognitive Workload / Strategy

- **Purpose:** Internal CWP assessment influencing strategy — not profile authority.
- **Paths:** intentAnalysis `cognitiveWorkload`; nora CWP decision hooks.

## OBJ-RECOVERY — Recovery / post-Evidence context

- **Purpose:** Continuity after attempt/evidence; recovery ownership projections.
- **Paths:** recovery-related project-assistant modules; EC rehydration; greenfield continuity readers.
- **Maturity:** multiple seams — lineage E2E re-proof deferred to next macro.

## OBJ-MW5-CHALLENGE — MW5 Critical Challenge session

- **Purpose:** Challenge/clarification loop before structurally advancing some turns.
- **Paths:** `criticalChallengeClarification.ts`, `mw5ChallengeSessionStore.ts`, `resolveMw5ProductAuthorityFromOa.ts`
- **Risk:** may re-challenge structurally resolved continuation (campaign observation — see vol 09).

## Harvest addendum — ABSENT / PARTIAL aggregates (repo-verified)

| Concept | Finding | Paths |
|---|---|---|
| ContractResult table | **ABSENT** — subject of ClaimEvaluation + derived verdict projection | `lib/oa/evidence-review/domain/contractResultTypes.ts`, `evaluateContractResult.ts` |
| LifecycleRecommendation table | **ABSENT** — EpistemicItem Recommendation payload | `lib/oa/cycle/application/lifecycleRecommendation/*` |
| Hybrid Context store | **ABSENT** — composer only | `f2/studioCognitiveContext.ts` |
| Dedicated Recovery aggregate | **ABSENT** — projections over Attempt/Evidence/RB/Epistemic | `features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts` et al. |
| CWP persistence table | **ABSENT** — turn/policy signals | `lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts` |
| Contradiction standalone table | **ABSENT** — EpistemicItem type + disposition policy | `contradictionDisposition.ts` |
| MaturityAssessment Product SQLite | **PARTIAL** — domain + memory store only (“out of minimal M5”) | `memoryMaturityAssessmentStore.ts` |
| ExecutionRun Product SQLite | **ABSENT** — memory-only parallel BC | `lib/oa/execution-run/**` |
| DebtItem / RiskItem BC | **PARTIAL** — LPS id fields exist; dedicated tables not found | LPS type fields |
| OPS1 ↔ OA unified session | **ABSENT by design** — separate DBs | `lib/ops1/db.ts` vs product OA |

Source: repository harvest at `b4aa09bd` (architecture inventory agent).

```

### `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

```
# 03 — End-to-End Flow Catalog

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

## F01 — Project creation / greenfield
- **Trigger:** Studio create project
- **Steps:** LocalProjectComposition → oa_projects/LPS → optional trajectory bootstrap
- **Paths:** `vertical-slice-runtime/service.ts`, project create use cases
- **Status:** COMPLETE (deterministic); greenfield continuity corrections on main (#531)

## F02 — Project load / restart
- **Trigger:** Open `/studio/projects/[id]`
- **Reads:** Product DB Truth C + Nora session continuity action
- **Paths:** `projectAssistantConversationContinuityAction` in `actions.ts`
- **Status:** PARTIAL — transcript availability depends on session DB path colocation

## F03 — Cycle qualification / activation
- **Trigger:** F2 qualification / Pilot lifecycle start
- **Objects:** CycleInstance, CKC, LPS active pointer
- **Paths:** `f2/qualify.ts`, `orchestrateF2.ts`, `pilotLifecycle.start`
- **Status:** COMPLETE deterministic core

## F04 — Nora conversation during active cycle
- **Trigger:** Pilot message via product conversation
- **Steps:** orchestrateTurn → provider analyze/respond → session append → journal tools
- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider
- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts

## F05 — Active-cycle Artifact materialization
- **Trigger:** Natural “matérialise … livrable du cycle”
- **Steps:** intentAnalysis → `resolveActiveCycleGovernedContinuation` → Proposal or in-cycle clarification
- **Admission:** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE∧¬SATISFIED (#532+#533)
- **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher
- **Status:** DETERMINISTIC PROVEN for routing/bridge; REAL journey reserves remain (vol 09)
- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact

## F06 — Proposal / Decision Subject / options
- **Trigger:** F2 turn producing `f2_proposal`
- **Persistence:** process-local proposal store
- **Status:** COMPLETE for in-process; PARTIAL across restart

## F07 — HumanDecision on Proposal
- **Trigger:** Pilot accept/refuse
- **Paths:** `recordDecision.ts` → `oa_human_decisions`
- **Status:** COMPLETE durable path

## F08 — EC PREPARE
- **Trigger:** After required HD / authority path
- **Paths:** `lib/oa/execution-contract/**`
- **Invariant:** cannot expand DecisionBasis WHAT
- **Status:** COMPLETE domain; product journey integration PARTIAL/NOT PROVEN as single lineage

## F09 — EC inspect / Confirmation / authority
- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
- **Status:** COMPLETE tables/services; journey continuity PARTIAL

## F10 — Governed execution (docs_write / Cursor)
- **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro)

## F11 — Attempt terminal → Evidence → ReviewBundle
- **Paths:** execution-attempt + evidence-review aggregates
- **Status:** COMPLETE domain; E2E lineage re-proof deferred

## F12 — ContractResult / ClaimEvaluation
- **Paths:** claim evaluation tables/services
- **Status:** PRESENT; journey proof PARTIAL

## F13 — Nora post-Evidence
- **Status:** PARTIAL — product surfaces exist; campaign re-proof deferred

## F14 — LPS / trajectory continuation or recovery
- **Paths:** trajectory services; recovery ownership continuity
- **Status:** PARTIAL (greenfield/recovery fixes integrated; broader matrix open)

## F15 — Cycle finalization
- **Paths:** `assessFinalization.ts`, lifecycle finalize decision path
- **Status:** COMPLETE assessment engine; Pilot finalize HD required

## F16 — Replan
- **Invariant:** No silent replan
- **Status:** PARTIAL — explicit replan seams exist; silent replan forbidden

## F17 — Restart at Proposal pending
- **Expected:** process-local proposal may be absent → requalify; Truth C intact
- **Status:** PARTIAL / known honesty notice in proposalStore

## F18 — Restart after HD / before execution
- **Survives:** HD, LPS, cycle; EC if prepared
- **Status:** PARTIAL proven by domain tests

## F19 — Restart post-Evidence
- **Survives:** Evidence/RB/claims in product DB; session transcript if session path stable
- **Status:** PARTIAL

## F20 — Legacy / historical compatibility
- **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
- **Status:** ACTIVE compatibility paths remain

```

### `projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md`

```
# 04 — Dependency & Impact Map

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

## Impact analysis procedure (mandatory for future changes)

Given changed paths:

1. Map paths → component IDs (manifest `components[].trackedSourcePaths`).
2. Collect direct `dependsOn` / `dependedBy`.
3. Walk transitive closure (cap depth 6).
4. Union `flowIds`.
5. Union `invariantIds`.
6. Note persistence/restart flags on components.
7. Note authority-sensitive components (`authoritySensitive: true`).
8. Note Fake/Real boundary flags.
9. Collect `testPaths` as mandatory regression set.
10. List doc volumes requiring review; after content review only, refresh digests.

## Core dependency edges (harvested)

```
intentAnalysis / Fake provider
  → activeCycleGovernedContinuation
    → artifactTargetRouting
    → deriveCycleObligationSnapshot / assessFinalization
    → Proposal (proposalStore)
      → recordDecision (HumanDecision)
        → ExecutionContract prepare
          → Attempt → Evidence → ReviewBundle → ClaimEvaluation

criticalChallengeClarification (MW5)
  → orchestrateTurn / F2 progression
  → may delay or re-enter clarification before Proposal continuation

LifecycleSurface / lifecyclePresentation
  → reads assessFinalization obligations (APPLICABLE display)
  → does not alone authorize materialization
```

## DEP edges (stable IDs)

| ID | From | To | Why |
|---|---|---|---|
| DEP-ACGC-ART | OBJ-ARTIFACT-CONTINUATION | OBJ-ARTIFACT-ROUTING | target composition under workspace |
| DEP-ACGC-ASSESS | OBJ-ARTIFACT-CONTINUATION | OBJ-FINALIZATION-ASSESS | APPLICABLE/SATISFIED gate |
| DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification |
| DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision |
| DEP-HD-EC | OBJ-HD | OBJ-EC | prepare after authority |
| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | launch |
| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence |
| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn |
| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-INTENT | deterministic structured analysis |
| DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity |

## Sample impact analysis A — `activeCycleGovernedContinuation.ts`

**Changed path:** `features/project-assistant/f2/activeCycleGovernedContinuation.ts`

| Step | Result |
|---|---|
| Components | OBJ-ARTIFACT-CONTINUATION |
| Direct deps | Artifact routing, finalization assess/obligation snapshot, Proposal emission, Fake/intent hints |
| Transitive | DecisionBasis/EC/Attempt/Evidence (via Proposal→HD), Lifecycle UI wording consumers |
| Flows | F05 primary; F04/F06/F07 adjacent; F17 restart at proposal |
| Invariants | INV-APPLICABILITY-NE-AUTHORITY, INV-UNKNOWN-NE-APPLICABLE, INV-NO-AUTO-HD, INV-NO-EXEC-BEFORE-AUTH, INV-OLD-CYCLE-HD |
| Persistence | Reads product DB assess/decisions; writes none directly; Proposal process-local |
| Authority | Opens Proposal path only; never EC |
| Fake/Real | Server gate identical; provider may omit continuationKind (mitigated by natural signal) |
| Tests | continuity CORR-01, bridge CORR-01, corrProof07/06, fakeProvider materialization |
| Docs | volumes 02,03,04,06,07,08,09 |

## Sample impact analysis B — `criticalChallengeClarification.ts` (MW5)

**Changed path:** `lib/nora-cognitive-runtime/criticalChallengeClarification.ts`

| Step | Result |
|---|---|
| Components | OBJ-MW5-CHALLENGE |
| Direct deps | Turn orchestration, MW5 session store, product authority facts |
| Transitive | Intent→active-cycle materialization Proposal path (F05) can be delayed/re-challenged; Fake may pre-satisfy challengeAssessment |
| Flows | F04, F05, F06 |
| Invariants | INV-RECOMMENDATION-NE-HD, INV-COGNITION-NE-AUTHORITY, INV-NO-SILENT-HD |
| Persistence | MW5 session store (process/session — verify store type in code); transcript appends |
| Authority | Challenge is cognitive gate, not execution authority |
| Fake/Real | High REAL sensitivity — classifier/challenge sufficiency |
| Tests | MW5-related nora-cognitive / project-assistant continuity tests; **oracle weakness:** local tests may pre-satisfy challenge |
| Docs | 02,03,04,08,09 |

## Component → flows (summary)

| Component | Flows |
|---|---|
| OBJ-ARTIFACT-CONTINUATION | F05, F06, F17 |
| OBJ-MW5-CHALLENGE | F04, F05, F06 |
| OBJ-PROPOSAL | F06, F07, F17 |
| OBJ-EC | F08–F11, F18 |
| OBJ-MEMORY-B | F02, F04, F19 |

```

### `projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md`

```
# 05 — Environments, Configuration & Boundaries

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**
**Primary source:** `app/.env.example` + `process.env` harvest (no secret values).

## Distinction

| Kind | Meaning |
|---|---|
| Configuration | Paths, provider selection, feature gates |
| Capability | What an agent *can* do technically |
| Authority | What a Pilot/Morris *may* authorize |

## Inventory (selected, factual)

| Name | Purpose | Required | Default/notes | Boundaries |
|---|---|---|---|---|
| `SFIA_STUDIO_PRODUCT_DB_PATH` | Absolute product SQLite | optional | else `.sfia-exec/product/oa-product.sqlite` | Truth C |
| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | Absolute Nora session SQLite | optional | else cwd-relative `.sfia-exec/product/nora-session.sqlite` | Memory B; **worktree-sensitive** |
| `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY` | Server-owned repo identity | yes Product local | fail-closed if absent | config |
| `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` | Server-owned remote | yes Product local | fail-closed | config |
| `SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH` | Default branch | optional | `main` | config |
| `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` | Managed clone root | yes for REAL docs_write | fail-closed if blank | config |
| `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY` | Local Pilot N3 gate | yes single-user profile | fail-closed | TEMPORARY WITH EXIT |
| `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` | Deprecated alias | compat | prefer canonical | TEMPORARY |
| `SFIA_STUDIO_CURSOR_REAL` | Enable Cursor REAL | optional default OFF | exclusive vs deterministic boundary | REAL gate |
| `SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY` | Test double Cursor | test only | must not combine with REAL=1 | Fake boundary |
| `OPS1_CONVERSATION_PROVIDER` | `fake` / openai | tests often `fake` | | Fake/Real cognition |
| `OPENAI_API_KEY` / `OPENAI_MODEL` / `OPENAI_REASONING_EFFORT` | Live provider | REAL cognition | never commit secrets | REAL |
| `BETTER_AUTH_SECRET` / `BETTER_AUTH_URL` | Auth | yes for auth routes | secret | auth |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | OAuth | yes auth | secret | auth |
| `SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS` | Allowlist | optional local | | authz |
| `OPS1_EXEC_ROOT` | Ops1 exec root | ops1 | | ops |
| `SFIA_V2_RUNTIME_ALLOW_RESET` | Test reset | tests | | test only |

## Fake / Real architecture

- **FakeConversationProvider** (`lib/platform/ai/fakeProvider.ts`): deterministic structured intent including path-less active-cycle materialization matcher; may synthesize `note-de-cadrage.md` leaf in some framings.
- **OpenAI live:** same schemas; non-deterministic linguistics; may omit filename/`continuationKind`.
- **Cursor REAL:** gated; mutual exclusion with deterministic Cursor E2E boundary asserted in runtime helpers.

## Server vs client

- Product binding/authority envs are **server-only** (never `NEXT_PUBLIC_*`).
- Browser must not supply repository binding or Pilot authority claims.

```

### `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md`

```
# 06 — Persistence, Restart & Recovery

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

## Store topology

| Store | Path resolution | Contents |
|---|---|---|
| Product OA SQLite | `SFIA_STUDIO_PRODUCT_DB_PATH` or default | Truth C tables (`oa_*`) |
| Nora Session SQLite | `SFIA_STUDIO_NORA_SESSION_DB_PATH` or cwd-relative default | Memory B transcript/journal/session items |
| F2 Proposal store | process memory (`proposalStore.ts`) | Proposal DTOs |
| MW5 challenge store | `mw5ChallengeSessionStore.ts` | challenge session (process-scoped) |
| Ops1 / D1 sqlite | separate (`lib/ops1`, `lib/d1`) | historical/ops surfaces — not Product Truth C |
| Launch safety journal | under exec/m4 | attempt safety |

### Product tables (from `lib/oa/project/infrastructure/sqlite/db.ts`)

`schema_meta`, `oa_projects`, `oa_lps`, `oa_lps_current`, `oa_idempotency`, `oa_audit_events`, `oa_cycle_instances`, `oa_human_decisions`, `oa_execution_contracts`, `oa_execution_attempts`, `oa_execution_attempt_active`, `oa_execution_attempt_result_budget`, `oa_evidence`, `oa_evidence_idempotency`, `oa_review_bundles`, `oa_review_bundle_idempotency`, `oa_project_trajectories`, `oa_project_trajectory_current`, `oa_confirmations`, `oa_epistemic_items`, `oa_ec_inspection_attestations`, `oa_authority_verification_receipts`, `oa_claim_evaluations`, `oa_claim_evaluation_idempotency`

### Nora session tables

`session_items`, `logical_product_turns`, `logical_product_turn_retry_bindings`, `pilot_transcript_turns`, `cycle_journal_entries`, `cycle_journal_mutation_ledger`

## Restart checkpoint matrix

| Checkpoint | Survives (product DB) | Rehydrated | Process-local lost? | Fail-closed expectation |
|---|---|---|---|---|
| Fresh project | Project/LPS | UI load | n/a | ok |
| Active cycle | Cycle + LPS pointer | lifecycle projection | proposals may be empty | ok |
| Recommendation | usually ephemeral | may recompute | yes | Recommendation ≠ HD |
| Proposal pending | epistemic markers maybe | subject reconstruct or requalify | **Proposal map lost** | no silent invent |
| HD recorded | `oa_human_decisions` | decision list | proposal may be gone | HD remains authority record |
| EC prepared | `oa_execution_contracts` | EC projection | | |
| Inspected | attestations | | | |
| Confirmed/authorized | confirmations + receipts | | | |
| Attempt accepted/terminal | attempts | | | |
| Evidence/RB | evidence/RB | | | |
| ContractResult | claim evaluations | | | |
| Post-Evidence | Truth C + session if path stable | Nora continuity | session orphan if path drifts | |
| Finalization | finalize HD + assessment | | | |

## Reconstruction rules

- Truth C objects: reload from SQLite repositories.
- Transcript/journal: reload from Nora session DB **at resolved path**.
- Proposal: not durable; Pilot may need new Proposal turn.
- Never invent HumanDecision on restart.

## Additional stores (harvest)

| Store | Role | Notes |
|---|---|---|
| M4 launch safety SQLite | Gate D grants / launch frontier | `sqliteLaunchSafetyJournal.ts` — separate from Truth C |
| OPS1 sqlite | Historical ops1 sessions/journals | Isolated; not Product Truth C |
| D1 sqlite | D1 projects/assignments | Isolated parallel surface |
| ExecutionRun memory store | Parallel BC | Not Product SQLite |
| MaturityAssessment memory | Out of minimal M5 product path | Memory-primary |

```

### `projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md`

```
# 07 — Authority Invariants & Failure Modes

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

## Invariant catalog

| ID | Statement | Enforcing code (examples) | Tests |
|---|---|---|---|
| INV-REC-NE-HD | Recommendation ≠ HumanDecision | presentation labels; decision services | recommendation-vs-decision tests |
| INV-HD-NE-CONF | HumanDecision ≠ Confirmation | OA decision vs confirmation aggregates | domain tests |
| INV-CAP-NE-AUTH | Capability ≠ Authority | EC/authority receipts | execution-contract tests |
| INV-PROJ-NE-CYCLE | Project ≠ CycleInstance | cycle create/link | cycle tests |
| INV-MEMB-NE-TRUTHC | Memory B ≠ Truth C | sessionPaths vs product DB | continuity actions |
| INV-COG-NE-AUTH | Cognition ≠ Authority | intentAnalysis non-authoritative hints | corrProof07/09 |
| INV-PROP-NE-HD | Proposal ≠ HumanDecision | proposalStore vs recordDecision | F2 tests |
| INV-EC-NO-EXPAND-WHAT | EC cannot expand DecisionBasis WHAT | execution-contract domain | EC tests |
| INV-NO-EXEC-BEFORE-AUTH | No execution before effective authority | REAL gates + EC/attempt | launch safety |
| INV-ARTIFACT-COND | Artifact conditional (applicability) | obligation snapshot + assess | corrProof06 |
| INV-ATTEMPT-NE-PROVEN | Attempt terminal ≠ Product Result PROVEN | claim/result semantics | evidence-review |
| INV-SUCCESS-NE-READY | Technical SUCCESS ≠ READY | result disclosures | journey integrity |
| INV-FAKE-REAL-SM | Fake/Real share product state machine at boundary | provider boundary + server gates | Fake/Real tests |
| INV-PROP-NOT-SOLE-RESTART | Proposal process-local ≠ sole restart authority | proposalStore notice | journey integrity |
| INV-OLD-CYCLE-HD | Old-cycle HD ≠ current-cycle authority | `hasCurrentRequireArtifactObligation` subject scoping | corrProof07 T13/CR05-B |
| INV-UNKNOWN-NE-APPLICABLE | UNKNOWN ≠ APPLICABLE | assessFinalization / bridge gate | bridge CORR-01 T4 |
| INV-NO-SILENT-REPLAN | No silent replan | replan guards | replan tests |
| INV-NO-SILENT-HD | No silent/auto HumanDecision | recordDecision only on Pilot action | bridge T2 |
| INV-NO-V3-ADOPT | No automatic runtime v3 adoption | docs + absence of adoption flags | this corpus |
| INV-APPLICABILITY-NE-AUTHORITY | Artifact APPLICABLE ≠ execution authorized | activeCycleGovernedContinuation bridge | bridge CORR-01 |

## Failure modes (selected)

| Code/State | Layer | Trigger | User effect | Mutations | Fail-closed |
|---|---|---|---|---|---|
| `no_require_artifact` | ACGC | UNKNOWN/N/A without policy HD | blocked continuation message | none | yes |
| `artifact_already_satisfied` | ACGC | Artifact SATISFIED | blocked | none | yes |
| `lifecycle_assess_failed` | ACGC | assess throw/!ok | blocked | none | yes |
| `no_active_cycle` | ACGC | missing active id | blocked | none | yes |
| `NEW_CYCLE_FORMALIZATION` | ACGC | no materialization intent | historical new-cycle path | may createCycle on other path | intent-gated |
| `CKC_*` | CKC | incoherent/unavailable mapping | qualification fail | none unauthorized | yes |
| `AUTHORITY_NOT_CONFIGURED` | authz | missing local Pilot gate | cannot decide | none | yes |
| `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | docs_write | missing managed root | cannot REAL write | none | yes |
| Session path orphan | Memory B | worktree cwd default | empty transcript UI | Truth C intact | operational |

Governance STOP ≠ product defect: blocked continuation for UNKNOWN Artifact is **expected**.

```

### `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`

```
# 08 — Test, Proof & Conformance Map

**As-implemented @ HEAD (see manifest lastReviewedCommit)**

## Suite topology

- Unit/domain + application-path: Vitest under `app/__tests__/**`
- UI: Vitest + Testing Library for pre-m6 surfaces
- E2E: Playwright `app/e2e/**` (often harness/boundary routes)
- Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Flow → tests (selected)

| Flow | Deterministic tests | Notes |
|---|---|---|
| F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, fakeProvider materialization | DETERMINISTIC PROVEN routing/bridge |
| F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
| F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
| F01 greenfield | greenfield continuity tests on main | #531 |
| Architecture drift | productionRuntimeReference.conformance | this macro |

## Oracle weaknesses (do not fix here)

| Weakness | Classification | Evidence |
|---|---|---|
| Seam tests green while natural Product journey regresses | CONFIRMED pattern (campaign) | PocketTasks vs local suites |
| Tests bypass conversation front door (direct resolver/AP seed) | CONFIRMED for many d0 tests | direct `resolveActiveCycleGovernedContinuation` calls |
| Fake synthesizes `note-de-cadrage.md` where REAL may leave filename null | CONFIRMED in Fake code | `fakeProvider.ts` framing cue |
| Local tests may pre-satisfy MW5 `challengeResponseAssessment` | PROBABLE | test fixtures set `sufficient` |
| Historical E2E uses QA/boundary routes | CONFIRMED | `app/api/e2e/**` |
| Clarification accepted where product contract wants seamless continuation | OBSERVATION | PocketTasks filename ask vs D-PC-09 |

## Proof levels

- DETERMINISTIC PROVEN
- REAL BOUNDARY / E2E REAL — require distinct Morris GO; not claimed by this corpus

```

### `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

```
# 09 — Known Gaps, Reserves & Current Boundaries

## Hard boundaries

- Runtime v3 **NON ADOPTED**
- This corpus does not change product behavior
- PocketTasks bugs / MW5 defects **not fixed** here
- No CI workflow changes

## Current campaign findings (verified against repo where possible)

| Finding | Class | Notes |
|---|---|---|
| Natural active-cycle materialization routing corrected (#532) | CONFIRMED | continuity tests on main |
| Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) | product-completion cadrage amendment |
| REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
| Fake may derive `note-de-cadrage.md`; REAL may leave null | CONFIRMED Fake / PROBABLE REAL | Fake code path exists |
| MW5 may re-challenge structurally resolved continuation | PROBABLE | seam exists; journey observation |
| Local tests pre-satisfy challenge assessment | PROBABLE | fixtures |
| E2E backbone can bypass natural conversation front door | CONFIRMED | e2e API routes |
| Pending Proposal / reinstruction continuity = downstream impact seam | CONFIRMED structural | process-local proposalStore |
| EC→Attempt→Evidence→Recovery single lineage needs re-proof | NOT PROVEN as one journey | next macro |

## Next macro

`PRODUCT-CYCLE-E2E-STABILIZATION-01` must use this reference for impact analysis, then resume PocketTasks as acceptance journey.

## Uncertainties

- Dependency graph is representative, not exhaustive of every file.
- Failure-mode catalog is selected, not every string code in repo.
- Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.

## Harvest follow-up absorbed

Post-foundation repository harvest confirmed Product SQLite M1–M8 topology and clarified ABSENT/PARTIAL aggregates (ContractResult/LR tables absent; MaturityAssessment/ExecutionRun memory-primary; Hybrid Context composer-only). Volumes 02 and 06 updated accordingly. No product behavior change.

```

### `projects/sfia-studio/production-runtime-reference/README.md`

```
# SFIA Studio — Living Production Runtime Reference

**Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
**Reviewed commit:** `b4aa09bdef29a635e624bb5c396711e75057df4d`
**Reviewed at:** 2026-09-27T13:10:51+0200
**Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01

## What this corpus is

This corpus describes **how SFIA Studio actually works now** in the checked-out Git tree:

- objects and responsibilities;
- end-to-end flows;
- upstream/downstream dependencies;
- persistence / restart / recovery;
- authority / cognition / execution boundaries;
- environments and configuration;
- tests and proof oracles;
- impact-analysis procedure for future changes.

It is the primary **impact-analysis substrate** for future Studio corrections.

## What this corpus is NOT

It does **not** replace:

- doctrine produit v3 (`sfia-v3-framing/**`);
- Build Doctrine / Roadmap (`convergence/**`);
- Product Completion C1 (`product-completion/**`);
- Morris decisions;
- Pilot HumanDecisions;
- the Transmission Guide as pedagogy/history.

It does **not** invent architecture, promote Runtime v3, or change product behavior.

## Source hierarchy (authority of facts)

1. **Git current tree** (code + tests + schemas + config examples)
2. **Deterministic product tests** (behavior oracles — with documented weaknesses)
3. Product Completion / doctrine / Transmission Guide — **guidance / intent / history only**

When docs conflict with code: **code wins**; mark the conflict as a gap.

## Relation to Transmission Guide

| Corpus | Role |
|---|---|
| `sfia-studio-transmission-guide.md` | Bootstrap / why / pedagogy / capitalization chronology |
| `production-runtime-reference/` | Current machine / how it works **now** |

Do not treat the Transmission Guide as the as-implemented oracle.

## Volumes

| File | Purpose |
|---|---|
| [01-system-runtime-overview.md](./01-system-runtime-overview.md) | System map, composition, layers |
| [02-runtime-object-catalog.md](./02-runtime-object-catalog.md) | Runtime objects |
| [03-end-to-end-flow-catalog.md](./03-end-to-end-flow-catalog.md) | E2E flows F01–F20 |
| [04-dependency-impact-map.md](./04-dependency-impact-map.md) | Dependencies + impact procedure + samples |
| [05-environments-configuration-and-boundaries.md](./05-environments-configuration-and-boundaries.md) | Env/config / Fake-Real |
| [06-persistence-restart-and-recovery.md](./06-persistence-restart-and-recovery.md) | Stores + restart matrix |
| [07-authority-invariants-and-failure-modes.md](./07-authority-invariants-and-failure-modes.md) | Invariants + failure modes |
| [08-test-proof-and-conformance-map.md](./08-test-proof-and-conformance-map.md) | Tests / oracles / bypasses |
| [09-known-gaps-reserves-and-current-boundaries.md](./09-known-gaps-reserves-and-current-boundaries.md) | Gaps + campaign findings |
| [production-runtime-reference.manifest.json](./production-runtime-reference.manifest.json) | Machine-readable index |

## Living maintenance contract

For any Studio change touching tracked paths in the manifest:

1. Run **impact analysis** (see volume 04).
2. Review affected object cards, flows, dependencies, invariants.
3. Review env / persistence / restart if applicable.
4. Run mapped regression tests.
5. Update architecture **content** if semantics changed.
6. Refresh digests **only after** human/ChatGPT review of content.
7. Record `NO SEMANTIC IMPACT` when only implementation changed.

**AUTOMATE DRIFT DETECTION — NEVER AUTOMATE STRUCTURAL ARBITRATION.**

A digest mismatch means: `REFERENCE REVIEW REQUIRED`.
Refreshing a digest ≠ validating semantic correctness.

## Conformance tooling

- Manifest: `production-runtime-reference.manifest.json`
- Checker script: `projects/sfia-studio/app/scripts/check-production-runtime-reference.mjs`
- Vitest: `projects/sfia-studio/app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Explicit non-claims

- Runtime v3 **NON ADOPTED**
- Product Journey **not** declared READY
- E2E REAL **not** declared PROVEN
- PocketTasks campaign gaps are recorded, not fixed here

```

### `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

```
{
  "schemaVersion": 1,
  "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
  "lastReviewedCommit": "b4aa09bdef29a635e624bb5c396711e75057df4d",
  "lastReviewedAt": "2026-09-27T11:14:45Z",
  "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
  "volumes": [
    {
      "path": "projects/sfia-studio/production-runtime-reference/README.md",
      "sha256_16": "10690d4de1a55498"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
      "sha256_16": "109183af7b0f167e"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
      "sha256_16": "0899fb8fc72e30cc"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
      "sha256_16": "5ebba023d84a09f7"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
      "sha256_16": "0269b99d4d6c6c5f"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
      "sha256_16": "fe345ec23f0546b2"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
      "sha256_16": "0fc09ae3105d36ed"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
      "sha256_16": "90a3ea63bda274bd"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
      "sha256_16": "ac65dc664ef48adc"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
      "sha256_16": "35e9107fb39f5a53"
    }
  ],
  "components": [
    {
      "id": "OBJ-ARTIFACT-CONTINUATION",
      "title": "Active-cycle Artifact governed continuation",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts",
        "projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts",
        "projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts",
        "projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts"
      ],
      "flowIds": [
        "F05",
        "F06",
        "F17"
      ],
      "invariantIds": [
        "INV-APPLICABILITY-NE-AUTHORITY",
        "INV-UNKNOWN-NE-APPLICABLE",
        "INV-NO-SILENT-HD",
        "INV-OLD-CYCLE-HD"
      ],
      "testPaths": [
        "projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts",
        "projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts",
        "projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts"
      ],
      "dependsOn": [
        "OBJ-FINALIZATION-ASSESS",
        "OBJ-ARTIFACT-ROUTING",
        "OBJ-PROPOSAL"
      ],
      "dependencyIds": [
        "DEP-ACGC-ART",
        "DEP-ACGC-ASSESS",
        "DEP-ACGC-PROP"
      ],
      "authoritySensitive": true,
      "persistence": "reads-product-db"
    },
    {
      "id": "OBJ-MW5-CHALLENGE",
      "title": "MW5 critical challenge clarification",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/mw5ChallengeSessionStore.ts"
      ],
      "flowIds": [
        "F04",
        "F05",
        "F06"
      ],
      "invariantIds": [
        "INV-COG-NE-AUTH",
        "INV-NO-SILENT-HD"
      ],
      "testPaths": [],
      "dependsOn": [
        "OBJ-TURN-ORCH"
      ],
      "dependencyIds": [
        "DEP-MW5-TURN"
      ],
      "authoritySensitive": false,
      "persistence": "session-or-process"
    },
    {
      "id": "OBJ-PROPOSAL",
      "title": "F2 Proposal process-local store",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts"
      ],
      "flowIds": [
        "F06",
        "F07",
        "F17"
      ],
      "invariantIds": [
        "INV-PROP-NE-HD",
        "INV-PROP-NOT-SOLE-RESTART"
      ],
      "testPaths": [],
      "dependsOn": [
        "OBJ-HD"
      ],
      "dependencyIds": [
        "DEP-PROP-HD"
      ],
      "authoritySensitive": true,
      "persistence": "process-local"
    },
    {
      "id": "OBJ-HD",
      "title": "HumanDecision",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts"
      ],
      "flowIds": [
        "F07",
        "F08",
        "F15"
      ],
      "invariantIds": [
        "INV-REC-NE-HD",
        "INV-NO-SILENT-HD"
      ],
      "testPaths": [],
      "dependsOn": [],
      "dependencyIds": [
        "DEP-HD-EC"
      ],
      "authoritySensitive": true,
      "persistence": "oa_human_decisions"
    },
    {
      "id": "OBJ-ARTIFACT-ROUTING",
      "title": "Artifact target routing",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts"
      ],
      "flowIds": [
        "F05",
        "F08"
      ],
      "invariantIds": [
        "INV-EC-NO-EXPAND-WHAT"
      ],
      "testPaths": [],
      "dependsOn": [],
      "dependencyIds": [],
      "authoritySensitive": false,
      "persistence": "none"
    },
    {
      "id": "OBJ-FINALIZATION-ASSESS",
      "title": "Finalization assessment / obligations",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts",
        "projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts",
        "projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts"
      ],
      "flowIds": [
        "F05",
        "F15"
      ],
      "invariantIds": [
        "INV-ARTIFACT-COND",
        "INV-UNKNOWN-NE-APPLICABLE"
      ],
      "testPaths": [
        "projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts"
      ],
      "dependsOn": [],
      "dependencyIds": [],
      "authoritySensitive": false,
      "persistence": "derived-read"
    },
    {
      "id": "OBJ-TURN-ORCH",
      "title": "Project assistant / Nora turn orchestration",
      "docSection": "01-system-runtime-overview.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/features/project-assistant/actions.ts",
        "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
        "projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts"
      ],
      "flowIds": [
        "F04",
        "F05",
        "F06"
      ],
      "invariantIds": [
        "INV-COG-NE-AUTH"
      ],
      "testPaths": [],
      "dependsOn": [
        "OBJ-MEMORY-B",
        "OBJ-MW5-CHALLENGE"
      ],
      "dependencyIds": [],
      "authoritySensitive": false,
      "persistence": "mixed"
    },
    {
      "id": "OBJ-MEMORY-B",
      "title": "ProductSqliteSession / transcript / journal",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",
        "projects/sfia-studio/app/lib/nora-cognitive-runtime/sessionPaths.ts",
        "projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/canonicalConversationSession.ts"
      ],
      "flowIds": [
        "F02",
        "F04",
        "F19"
      ],
      "invariantIds": [
        "INV-MEMB-NE-TRUTHC"
      ],
      "testPaths": [],
      "dependsOn": [],
      "dependencyIds": [
        "DEP-SESSION-TURN"
      ],
      "authoritySensitive": false,
      "persistence": "nora-session.sqlite"
    },
    {
      "id": "OBJ-FAKE-PROVIDER",
      "title": "FakeConversationProvider",
      "docSection": "05-environments-configuration-and-boundaries.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts"
      ],
      "flowIds": [
        "F04",
        "F05"
      ],
      "invariantIds": [
        "INV-FAKE-REAL-SM"
      ],
      "testPaths": [
        "projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts"
      ],
      "dependsOn": [],
      "dependencyIds": [
        "DEP-FAKE-INTENT"
      ],
      "authoritySensitive": false,
      "persistence": "none"
    },
    {
      "id": "OBJ-EC",
      "title": "ExecutionContract aggregate",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts"
      ],
      "flowIds": [
        "F08",
        "F09",
        "F10",
        "F18"
      ],
      "invariantIds": [
        "INV-EC-NO-EXPAND-WHAT",
        "INV-NO-EXEC-BEFORE-AUTH"
      ],
      "testPaths": [],
      "dependsOn": [
        "OBJ-HD"
      ],
      "dependencyIds": [
        "DEP-EC-ATT"
      ],
      "authoritySensitive": true,
      "persistence": "oa_execution_contracts"
    },
    {
      "id": "OBJ-UI-LIFECYCLE",
      "title": "Lifecycle UI presentation",
      "docSection": "01-system-runtime-overview.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
        "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts",
        "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts"
      ],
      "flowIds": [
        "F02",
        "F05",
        "F15"
      ],
      "invariantIds": [
        "INV-APPLICABILITY-NE-AUTHORITY"
      ],
      "testPaths": [],
      "dependsOn": [
        "OBJ-FINALIZATION-ASSESS"
      ],
      "dependencyIds": [],
      "authoritySensitive": false,
      "persistence": "none"
    },
    {
      "id": "OBJ-RUNTIME-COMPOSITION",
      "title": "Vertical-slice runtime composition",
      "docSection": "01-system-runtime-overview.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts",
        "projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts",
        "projects/sfia-studio/app/.env.example"
      ],
      "flowIds": [
        "F01",
        "F02"
      ],
      "invariantIds": [
        "INV-NO-V3-ADOPT"
      ],
      "testPaths": [],
      "dependsOn": [],
      "dependencyIds": [],
      "authoritySensitive": false,
      "persistence": "product-db-path"
    }
  ],
  "flows": [
    {
      "id": "F01",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F02",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F03",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F04",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F05",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F06",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F07",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F08",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F09",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F10",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F11",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F12",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F13",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F14",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F15",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F16",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F17",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F18",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F19",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F20",
      "docSection": "03-end-to-end-flow-catalog.md"
    }
  ],
  "invariants": [
    {
      "id": "INV-REC-NE-HD",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-HD-NE-CONF",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-CAP-NE-AUTH",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-PROJ-NE-CYCLE",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-MEMB-NE-TRUTHC",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-COG-NE-AUTH",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-PROP-NE-HD",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-EC-NO-EXPAND-WHAT",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-NO-EXEC-BEFORE-AUTH",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-ARTIFACT-COND",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-ATTEMPT-NE-PROVEN",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-SUCCESS-NE-READY",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-FAKE-REAL-SM",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-PROP-NOT-SOLE-RESTART",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-OLD-CYCLE-HD",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-UNKNOWN-NE-APPLICABLE",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-NO-SILENT-REPLAN",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-NO-SILENT-HD",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-NO-V3-ADOPT",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-APPLICABILITY-NE-AUTHORITY",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    }
  ],
  "dependencies": [
    {
      "id": "DEP-ACGC-ART",
      "from": "OBJ-ARTIFACT-CONTINUATION",
      "to": "OBJ-ARTIFACT-ROUTING"
    },
    {
      "id": "DEP-ACGC-ASSESS",
      "from": "OBJ-ARTIFACT-CONTINUATION",
      "to": "OBJ-FINALIZATION-ASSESS"
    },
    {
      "id": "DEP-ACGC-PROP",
      "from": "OBJ-ARTIFACT-CONTINUATION",
      "to": "OBJ-PROPOSAL"
    },
    {
      "id": "DEP-PROP-HD",
      "from": "OBJ-PROPOSAL",
      "to": "OBJ-HD"
    },
    {
      "id": "DEP-HD-EC",
      "from": "OBJ-HD",
      "to": "OBJ-EC"
    },
    {
      "id": "DEP-EC-ATT",
      "from": "OBJ-EC",
      "to": "OBJ-EC"
    },
    {
      "id": "DEP-MW5-TURN",
      "from": "OBJ-MW5-CHALLENGE",
      "to": "OBJ-TURN-ORCH"
    },
    {
      "id": "DEP-FAKE-INTENT",
      "from": "OBJ-FAKE-PROVIDER",
      "to": "OBJ-TURN-ORCH"
    },
    {
      "id": "DEP-SESSION-TURN",
      "from": "OBJ-MEMORY-B",
      "to": "OBJ-TURN-ORCH"
    }
  ],
  "trackedSources": [
    {
      "path": "projects/sfia-studio/app/features/project-assistant/actions.ts",
      "sha256_16": "95eb520bec78561f"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
      "sha256_16": "992416c411b262cc"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
      "sha256_16": "7810e4ae103ff7c5"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
      "sha256_16": "a478be993184e78a"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts",
      "sha256_16": "9f8c137569cc301f"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts",
      "sha256_16": "c4a5ff1ec041343b"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts",
      "sha256_16": "4d6a43b0c2c9fe3e"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts",
      "sha256_16": "28d9f987998b6847"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/canonicalConversationSession.ts",
      "sha256_16": "c4434a8c3447f926"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/mw5ChallengeSessionStore.ts",
      "sha256_16": "3b2dbd8a49169860"
    },
    {
      "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts",
      "sha256_16": "ab5707a7761399da"
    },
    {
      "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
      "sha256_16": "4e1da407cf383fd8"
    },
    {
      "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",
      "sha256_16": "37d79b9db14322c3"
    },
    {
      "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/sessionPaths.ts",
      "sha256_16": "d76d75e72451048a"
    },
    {
      "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts",
      "sha256_16": "f3780f7c36792984"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts",
      "sha256_16": "67ed985474e4e22b"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts",
      "sha256_16": "21dfef1c7b08764a"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts",
      "sha256_16": "52e6055fa1013a3c"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts",
      "sha256_16": "1963f097d0aa9328"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts",
      "sha256_16": "8a6cf2210f14e672"
    },
    {
      "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts",
      "sha256_16": "015b001efc49aedb"
    },
    {
      "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts",
      "sha256_16": "0b11238665e07712"
    },
    {
      "path": "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
      "sha256_16": "15850bc0103d5f23"
    },
    {
      "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
      "sha256_16": "32b7a2bb4be0f688"
    },
    {
      "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts",
      "sha256_16": "0b25b629a4a889d5"
    },
    {
      "path": "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts",
      "sha256_16": "4fede1ca3c195356"
    },
    {
      "path": "projects/sfia-studio/app/.env.example",
      "sha256_16": "c14369cbe6ac4f42"
    }
  ],
  "trackedTests": [
    {
      "path": "projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts",
      "sha256_16": "942ee978958679cd"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts",
      "sha256_16": "866294bc20ff538e"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts",
      "sha256_16": "29485cbfb95f7939"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts",
      "sha256_16": "80a56713fcbf1c40"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts",
      "sha256_16": "8995d4d266fa3cd6"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts",
      "sha256_16": "9ed95e13d8f41f09"
    }
  ],
  "maintenance": {
    "digestMismatchMeans": "REFERENCE REVIEW REQUIRED",
    "refreshDigestDoesNotValidateSemantics": true,
    "automateDriftDetection": true,
    "automateStructuralArbitration": false
  }
}

```

### `projects/sfia-studio/app/scripts/check-production-runtime-reference.mjs`

```
#!/usr/bin/env node
/**
 * Deterministic Living Production Runtime Reference conformance checker.
 *
 * - Validates manifest structure and ID resolution
 * - Verifies tracked source/test/volume paths exist
 * - Detects sha256_16 digest drift vs current tree
 *
 * Digest mismatch ⇒ REFERENCE REVIEW REQUIRED
 * Refreshing digests ≠ semantic validation.
 *
 * Usage:
 *   node scripts/check-production-runtime-reference.mjs
 *   node scripts/check-production-runtime-reference.mjs --write-digests
 *
 * --write-digests only rewrites sha256_16 fields after human review of content.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(appRoot, "../../..");
const manifestRel =
  "projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json";
const manifestPath = path.join(repoRoot, manifestRel);

const writeDigests = process.argv.includes("--write-digests");

function sha16(abs) {
  const buf = fs.readFileSync(abs);
  return crypto.createHash("sha256").update(buf).digest("hex").slice(0, 16);
}

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  process.exitCode = 1;
}

function ok(msg) {
  console.log(`OK: ${msg}`);
}

if (!fs.existsSync(manifestPath)) {
  fail(`manifest missing: ${manifestRel}`);
  process.exit(1);
}

/** @type {any} */
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

if (manifest.schemaVersion !== 1) fail("schemaVersion must be 1");
if (manifest.kind !== "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE") {
  fail("kind mismatch");
}
if (!manifest.canonicalReadme) fail("canonicalReadme missing");
if (!manifest.lastReviewedCommit) fail("lastReviewedCommit missing");

const readmeAbs = path.join(repoRoot, manifest.canonicalReadme);
if (!fs.existsSync(readmeAbs)) fail(`canonical README missing: ${manifest.canonicalReadme}`);
else ok("canonical README exists");

const componentIds = new Set();
const flowIds = new Set((manifest.flows || []).map((f) => f.id));
const invariantIds = new Set((manifest.invariants || []).map((i) => i.id));
const dependencyIds = new Set((manifest.dependencies || []).map((d) => d.id));

for (const c of manifest.components || []) {
  if (!c.id) {
    fail("component without id");
    continue;
  }
  if (componentIds.has(c.id)) fail(`duplicate component id ${c.id}`);
  componentIds.add(c.id);
}
for (const f of manifest.flows || []) {
  if (!f.id) fail("flow without id");
}
if (new Set((manifest.flows || []).map((f) => f.id)).size !== (manifest.flows || []).length) {
  fail("duplicate flow ids");
}
if (new Set((manifest.invariants || []).map((i) => i.id)).size !== (manifest.invariants || []).length) {
  fail("duplicate invariant ids");
}
if (
  new Set((manifest.dependencies || []).map((d) => d.id)).size !==
  (manifest.dependencies || []).length
) {
  fail("duplicate dependency ids");
}

for (const c of manifest.components || []) {
  for (const fid of c.flowIds || []) {
    if (!flowIds.has(fid)) fail(`component ${c.id} references unknown flow ${fid}`);
  }
  for (const iid of c.invariantIds || []) {
    if (!invariantIds.has(iid)) fail(`component ${c.id} references unknown invariant ${iid}`);
  }
  for (const dep of c.dependsOn || []) {
    if (!componentIds.has(dep)) fail(`component ${c.id} dependsOn unknown ${dep}`);
  }
  for (const did of c.dependencyIds || []) {
    if (!dependencyIds.has(did)) fail(`component ${c.id} dependencyIds unknown ${did}`);
  }
  for (const p of c.trackedSourcePaths || []) {
    if (!fs.existsSync(path.join(repoRoot, p))) fail(`missing trackedSourcePath ${p}`);
  }
  for (const p of c.testPaths || []) {
    if (!fs.existsSync(path.join(repoRoot, p))) fail(`missing testPath ${p}`);
  }
}

for (const d of manifest.dependencies || []) {
  if (!componentIds.has(d.from)) fail(`dependency ${d.id} from unknown ${d.from}`);
  if (!componentIds.has(d.to)) fail(`dependency ${d.id} to unknown ${d.to}`);
}

function checkDigestList(label, entries) {
  for (const e of entries || []) {
    const abs = path.join(repoRoot, e.path);
    if (!fs.existsSync(abs)) {
      fail(`${label} path missing: ${e.path}`);
      continue;
    }
    const current = sha16(abs);
    if (writeDigests) {
      e.sha256_16 = current;
    } else if (e.sha256_16 !== current) {
      fail(
        `${label} digest drift for ${e.path}: manifest=${e.sha256_16} current=${current} ⇒ REFERENCE REVIEW REQUIRED`,
      );
    }
  }
}

checkDigestList("volume", manifest.volumes);
checkDigestList("trackedSource", manifest.trackedSources);
checkDigestList("trackedTest", manifest.trackedTests);

if (writeDigests) {
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log("WROTE digests — semantic review still required before accepting.");
}

if (process.exitCode) {
  console.error("RESULT: REFERENCE REVIEW REQUIRED / CONFORMANCE FAILED");
  process.exit(process.exitCode);
}
console.log("RESULT: PRODUCTION RUNTIME REFERENCE CONFORMANCE OK");

```

### `projects/sfia-studio/app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

```
/**
 * Living Production Runtime Reference — deterministic conformance.
 *
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "../..");
const repoRoot = path.resolve(appRoot, "../../..");
const manifestRel =
  "projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json";
const manifestPath = path.join(repoRoot, manifestRel);

function sha16(abs: string): string {
  return createHash("sha256").update(fs.readFileSync(abs)).digest("hex").slice(0, 16);
}

describe("Living Production Runtime Reference conformance", () => {
  it("manifest exists and is valid JSON schema v1", () => {
    expect(fs.existsSync(manifestPath)).toBe(true);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    expect(manifest.schemaVersion).toBe(1);
    expect(manifest.kind).toBe(
      "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
    );
    expect(manifest.canonicalReadme).toBeTruthy();
    expect(manifest.lastReviewedCommit).toMatch(/^[0-9a-f]{40}$/);
    expect(manifest.maintenance?.digestMismatchMeans).toBe(
      "REFERENCE REVIEW REQUIRED",
    );
    expect(manifest.maintenance?.refreshDigestDoesNotValidateSemantics).toBe(
      true,
    );
  });

  it("canonical README and all volumes exist", () => {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    expect(
      fs.existsSync(path.join(repoRoot, manifest.canonicalReadme)),
    ).toBe(true);
    for (const v of manifest.volumes) {
      expect(fs.existsSync(path.join(repoRoot, v.path))).toBe(true);
    }
  });

  it("component / flow / invariant / dependency IDs are unique and resolve", () => {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const componentIds = new Set<string>();
    for (const c of manifest.components) {
      expect(componentIds.has(c.id)).toBe(false);
      componentIds.add(c.id);
    }
    const flowIds = new Set(manifest.flows.map((f: { id: string }) => f.id));
    const invariantIds = new Set(
      manifest.invariants.map((i: { id: string }) => i.id),
    );
    const dependencyIds = new Set(
      manifest.dependencies.map((d: { id: string }) => d.id),
    );
    expect(flowIds.size).toBe(manifest.flows.length);
    expect(invariantIds.size).toBe(manifest.invariants.length);
    expect(dependencyIds.size).toBe(manifest.dependencies.length);

    for (const c of manifest.components) {
      for (const fid of c.flowIds ?? []) expect(flowIds.has(fid)).toBe(true);
      for (const iid of c.invariantIds ?? [])
        expect(invariantIds.has(iid)).toBe(true);
      for (const dep of c.dependsOn ?? [])
        expect(componentIds.has(dep)).toBe(true);
      for (const did of c.dependencyIds ?? [])
        expect(dependencyIds.has(did)).toBe(true);
      for (const p of c.trackedSourcePaths ?? []) {
        expect(fs.existsSync(path.join(repoRoot, p))).toBe(true);
      }
      for (const p of c.testPaths ?? []) {
        expect(fs.existsSync(path.join(repoRoot, p))).toBe(true);
      }
    }
    for (const d of manifest.dependencies) {
      expect(componentIds.has(d.from)).toBe(true);
      expect(componentIds.has(d.to)).toBe(true);
    }
  });

  it("tracked source/test/volume digests match current tree", () => {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const lists = [
      ...manifest.volumes,
      ...manifest.trackedSources,
      ...manifest.trackedTests,
    ];
    for (const e of lists) {
      const abs = path.join(repoRoot, e.path);
      expect(fs.existsSync(abs)).toBe(true);
      expect(e.sha256_16).toBe(sha16(abs));
    }
  });

  it("intentional digest drift is detectable (temporary mutation)", () => {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const sample = manifest.trackedSources[0];
    const abs = path.join(repoRoot, sample.path);
    const original = fs.readFileSync(abs);
    const marker = `\n/* PRR-DRIFT-PROBE-${Date.now()} */\n`;
    try {
      fs.appendFileSync(abs, marker);
      expect(sha16(abs)).not.toBe(sample.sha256_16);
    } finally {
      fs.writeFileSync(abs, original);
    }
    // restored
    expect(sha16(abs)).toBe(sample.sha256_16);
  });
});

```
