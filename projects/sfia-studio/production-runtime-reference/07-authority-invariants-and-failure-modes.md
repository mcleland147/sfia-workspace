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

