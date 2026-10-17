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
| INV-OFFER-NE-AUTH | Pending Generic PREPARE offer ≠ Authorization | pendingGenericPrepareOfferStore + prepare gates | DER16 / M-HD / G-D4 |
| INV-INSPECT-NE-CONFIRM | Inspection ≠ Confirmation | unified exam + confirm services | Pass03/04 UIC |
| INV-CONFIRM-NE-AUTH | Confirmation ≠ Authorization | authorize* services | authorizeGeneric / confirmForAuthorization |
| INV-AUTH-NE-EXEC | Authorization ≠ Execution | governedExecute Select/Start | projectScopedCursorSelection |
| INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 |
| INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 |
| INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | STRUCTURAL PREPARE requires **accepted**, applicable, verified, mission-bound, non-superseded HD — Refuse (`HD_REFUSED`) and Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) are not prepare paths; Accept alone ≠ Execute | verifyGenericMissionHumanDecisionForPrepare | mHd01 (incl. refuse/amend cases) / DER16 |

## Dual admission paths — authority summary (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

**Chemin A — STRUCTURAL:** mission signals / HD-required materiality → process-local presentation carrier → Pilot disposition:
- **Accept** → durable HD `accepted` → verify basis/identity/mission/digest/CURRENT/non-superseded → PREPARE (refs verified) → inspect → Confirm (if required) → Authorize → Execute.
- **Refuse** → HD refused → PREPARE forbidden (`HD_REFUSED`); no Authorization; no Attempt.
- **Amend** → new presentation required → PREPARE forbidden (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new accepted applicable HD.
No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission. Accept alone ≠ Execute.

**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed.

**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN.

**CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: process-local offer loss ≠ universal PREPARE ban when durable accepted HD remains verifiable (see vol 06 / HD11).

## Failure modes (selected)

| Code/State | Layer | Trigger | User effect | Mutations | Fail-closed |
|---|---|---|---|---|---|
| `no_require_artifact` | ACGC | materialization signal without CURRENT REQUIRE_ARTIFACT / APPLICABLE∧¬SATISFIED | when actionable: Generic PREPARE on same cycle (P6-HQA-F05-GD4-01); else clarification — **never** invent REQUIRE_ARTIFACT HD | none unauthorized | yes |
| `artifact_already_satisfied` | ACGC | Artifact SATISFIED | blocked | none | yes |
| `lifecycle_assess_failed` | ACGC | assess throw/!ok | blocked | none | yes |
| `no_active_cycle` | ACGC | missing active id | blocked | none | yes |
| `NEW_CYCLE_FORMALIZATION` | ACGC | no materialization intent / explicit new-cycle formalization | historical new-cycle path — **not** aliased from optional documentary `no_require_artifact` | may createCycle on other path | intent-gated |
| `CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE` | Generic PREPARE | unknown / privileged / spoofed capability identity | prepare refused | none | yes — exact identity match only |
| `CKC_*` | CKC | incoherent/unavailable mapping | qualification fail | none unauthorized | yes |
| `AUTHORITY_NOT_CONFIGURED` | authz | missing local Pilot gate | cannot decide | none | yes |
| `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | docs_write | missing managed root | cannot REAL write | none | yes |
| Session path orphan | Memory B | worktree cwd default | empty transcript UI | Truth C intact | operational |

Governance STOP ≠ product defect: blocked continuation for UNKNOWN Artifact is **expected**.
