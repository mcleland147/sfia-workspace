# ChatGPT Review Pack FULL — P6 Living Reference Semantic Amendments R1–R4

## 1. Horodatage
- UTC: `2026-10-17T14:50:39Z`
- Local: `2026-10-17 16:50 CEST`
- Cycle: `STUDIO-P6-GENERIC-EXECUTION-LIVING-REFERENCE-AMENDMENTS-01`
- Type: 8 — Delivery / implémentation documentaire ciblée
- Profil SFIA: Critical

## 2. Git Truth initial / final

### Integration worktree
- Path: `/Users/morris/Projects/sfia-workspace-p6-generic-execution-integration-consolidation`
- Branch: `integration/sfia-studio-p6-generic-execution-consolidation`
- HEAD: `896ff59c704bfa76df1da1a51705aaf948c1cf0c` (expected `896ff59c704bfa76df1da1a51705aaf948c1cf0c`)
- `origin/main` / remote main: `896ff59c704bfa76df1da1a51705aaf948c1cf0c` / `896ff59c704bfa76df1da1a51705aaf948c1cf0c`

### Source worktree (preserved)
- Path: `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016`
- Branch: `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare`
- HEAD: `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` (expected `b4c1d86211d372f7b0685be7ce8a5ba7de598e37`)
- Porcelain Product: 78 paths (unchanged this cycle)

### Dirty freeze (78 Product + allowlist)
- Freeze file: `.tmp-sfia-review/r1r4-dirty-freeze.json` (count=78)
- Post-amendment verification: **78/78 freeze hashes MATCH** in integration worktree
- Allowlist `importBoundaries.test.ts` freeze match: **YES**
- Extra Product app paths: **NONE**
- Staged Product: **EMPTY**
- Manifest / README: **UNCHANGED** (git diff empty)

### Final dirty composition
- 78 Product candidates (frozen hashes)
- 7 Living Reference volumes amended (R1–R4)
- Manifest frozen; digests NOT written

Parent handoff: `eae8dbe20a1309a884338a87f6a00d38dfafb944`

## 3. Sources
- Convergence Build Doctrine / Roadmap / product-completion cadrage / P6 QA / sfia-v3-framing (read)
- Cycle 8 CKC synthetic map (read)
- Living Reference README + manifest (read; FROZEN)
- Volumes 01–09 (02/03/04/06/07/08/09 amended)
- Parent handoff `eae8dbe2` R1–R4 proposal + ChatGPT amendment contract
- Product candidate paths for verification (read-only; not modified)

## 4. Convergence Pre-check
- Capacity: V3-F05 Conversation → décision → exécution
- Deps: V3-F02 / F06 / F11 / F12 / F14 / F15
- Milestone: P6 Global Integrated Product QA
- State: G-IB **CLOSED**; G-DIGEST **PENDING SEMANTIC CONTENT REVIEW**; P6 PASS **not claimed**; runtime v3 **NON ADOPTED**
- Assets: OA/W2/Nora/F2/Option1/Inspection unified **KEEP**; Living Reference **ADAPT**; Manifest **FREEZE**
- Gap closed this cycle: documentary semantic misalignment R1–R4
- Exit: content ready for ChatGPT review → digest GO distinct
- Debt: documentary sync deferred until digest approval

## 5. GO Morris consommé
**GO P6 LIVING REFERENCE — SEMANTIC AMENDMENTS R1–R4.**

Authorized: documentary R1–R4; targeted Living Reference volumes; reference/invariant checks; candidate-vs-doc control; non-destructive doc tests; Review Pack FULL; L3 handoff.

**NOT authorized / NOT done:** Product code; OA/W2/Nora/Cursor; Product tests; digest promotion; manifest edit; architecture change; Product commit/push/PR/merge; HQA; Cursor REAL; runtime v3 adoption.

## 6. Cycle 8 / Critical
CKC synthetic candidate only. Documentary semantic regularization / integration readiness. Authority-boundary documentation risk justified Critical profile.

## 7. Matrice R1–R4

| ID | Target | Action | Status |
|---|---|---|---|
| R1 | vol 03 F04/F05/F08/F09/F10 | Reclassify flows; no F21; taxonomy kept | APPLIED |
| R2 | vol 04 + 07 | Dual structural / non-structural admission; OA/W2/Nora/Cursor separations | APPLIED |
| R3 | vol 06 | Process-local offer vs durable HD; restart fail-closed; supersession | APPLIED |
| R4 | vol 08 (+02/09) | NO_RUNTIME_SEMANTIC_IMPACT vs TEST_ORACLE_SEMANTIC_CHANGE; two artifact tests | APPLIED |

## 8. Flux F04 / F05 / F08 / F09 / F10 (sections complètes post-amendement)

### F04
```markdown
## F04 — Nora conversation during active cycle
- **Trigger:** Pilot message via product conversation
- **Steps:** Pilot content → Product orchestration (`orchestrateTurn`) → `runNoraCognitiveTurn` (strategy + **adaptive maxTurns**) → Agents Runner (`runNoraAgentsTurn`) → optional **same-turn** RunState continuation under mission/campaign budget → result + Session append → Product status → (optional) prospective Active Cycle Work / Work Recommendation materialization → journal tools
- **Nora Generic PREPARE solicitation (D-ER-16 / Option 2 — AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** `orchestrateTurn` may expose Agents tool `request_generic_execution_prepare` wired to Product `solicitGenericExecutionPrepare`. Cognition may **solicit** PREPARE only. Tool params never create HumanDecision, never create ExecutionAttempt, never authorize or execute. Authority remains OA/W2 Product admission (F08). DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE via `p6.der16.genericNoraToolInvocation.d0.test.ts` (Fake).
- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
- **Nora autonomy (PR #577 INTEGRATED ON MAIN — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality. Merge `d8ceb8ad`.
- **Documentary cognitive reliability / RCD-01 (PR #578 INTEGRATED ON MAIN — DETERMINISTIC):** Guided Document Review acquisition uses the native tool path `git_local_read_file` → `GitLocalReadAdapter` → `ToolRouter` (`prepareGitLocalReadDataForModel`) → Agents Runner tool result. Coverage metadata (`returnedStartLine`/`returnedEndLine`/`completeLineCount`/`nextStartLineHint`/`truncated` vs `documentHasMore`) must describe the **final model-visible** payload after redaction and JSON envelope capping (`CT_MAX_TOOL_RESULT_CHARS` = 12000). Partial lines are never credited; redacted lines still progress; a line that fits the adapter but not the final envelope is skipped via explicit `lineExceedsCap` (no infinite same-line retry; no mid-line offset protocol). On soft `maxTurns` exhaustion, restitution discloses honest incomplete coverage from tool crumbs when available (no invented FULL / HumanDecision / Deliverable). Natural mono-file documentary prompts elevate Focused adaptive budget (≥8, ≤ ceiling 10) without raising FinOps ceilings. Proof: `p6.nora.min09.documentaryReliability.d0.test.ts` R1–R7 — **not** GDR REAL quality. Merge `44006648` / source `9b855d8d`.
- **Work Recommendation materialization (P6-HQA-02 / REC-01):** after a coherent Nora Product turn, Studio may mint durable ACW EpistemicItems via `materializeActiveCycleWork`, but only after `filterActiveCycleWorkItemsForProspectiveMaterialization` (bounded cognitive trust). Nora coverage `COMPLETE`|`PARTIAL`|`UNAVAILABLE` is authoritative for novelty claims — Product reader available ≠ COMPLETE. Ordinary suggestions stay in `conversationGuidance` (zero WR). Historical WR never mutated on the prospective path. `itemSourceIndexes` preserve ACW identity under filter/replay. CONTRADICTORY may persist a typed relation envelope (Option A); never auto-HD / auto-disposition.
- **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
- **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts; Framing continuity UI DETERMINISTIC at tested scope; REC-01 WR path DETERMINISTIC at tested scope (ZERO REAL claim)
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A; `framingContinuityCard.ui.test.tsx`, `framingContinuityRehydrate.ui.test.tsx`, `p6.ux.recommendationContinuity.ui.test.tsx`; REC-01 — `qualifyProspectiveWorkRecommendationMaterialization.d0`, `activeCycleCognitiveWork.d0` (Option A reload + historical replay), `p6.hqa.rec01.minimalStabilization.d0`, Option B context tests
```

### F05
```markdown
## F05 — Active-cycle Artifact materialization
- **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
- **Boundary (CI-HQA-F01 / AS-IMPLEMENTED):** explicit NEW_CYCLE formalization (« préparer / créer / démarrer un cycle … », even when a future deliverable/note is mentioned) is **not** Artifact continuation. `hasExplicitNewCycleFormalizationSignal` keeps those turns on `NEW_CYCLE_FORMALIZATION` so absence of an active cycle does not fail-closed as `no_active_cycle` before `createCycle`. Natural Artifact cues still cover produce/write/materialize of a documentary object under an active cycle (F-C9-04).
- **Admission (Artifact governed continuation):** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533) — unchanged; obligations are not bypassed by Generic PREPARE.
- **Adjacent hand-off (P6-HQA-F05-GD4-01 / PR #586 AS-IMPLEMENTED):** ordinary documentary materialization recognized by ACGC but **without** a closure Artifact obligation resolves as `ACTIVE_CYCLE_CONTINUATION_BLOCKED` / `no_require_artifact` (or, for natural signal without docs_write-compatible effect, may surface `NEW_CYCLE_FORMALIZATION` / `no_compatible_artifact_effect` — see vol 08 oracle semantics). When the turn is actionable for Generic PREPARE, orchestration may **hand off to F08** via `isOptionalDocumentaryWithoutClosureArtifactBlock`. This is **not** Artifact governed continuation, **not** an invented `REQUIRE_ARTIFACT` HumanDecision, and **not** proof that a new CycleInstance was created. Full Generic PREPARE admission/authority lives under **F08**, not F05.
- **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition (D-PC-09); no normal filename micro-gate when cues suffice; clarification only when no coherent cue
- **Continuation fact:** `structurallyResolvedActiveCycleContinuation` is server-owned and local to this Recommendation/Proposal — ≠ Truth C, ≠ HumanDecision, ≠ universal uncertainty resolution; sealed continuation without impacting signals skips gratuitous structural MW5 re-challenge
- **Same CycleInstance:** no silent NEW_CYCLE / re-formalization on the Artifact path
- **Exit (Artifact path):** Proposal `DECISION_REQUIRED`
- **Exit (adjacent → F08):** qualification / pending Generic PREPARE offer or inspectable EC draft under F08 gates — PREPARE ≠ AUTHORIZE; AUTHORIZED ≠ EXECUTED
- **Product spine (UI server actions):** Send → Decide → PrepareResolvedM3 → ConfirmAndExecuteResolvedM3 → RehydrateEvidenceOutcome
- **Nominal chat-first spine:** Send (proposal) → Send (disposition) → PrepareResolvedM3 → … — `projectAssistantDecideAction` remains available but is no longer a required UX step
- **Paths:** `activeCycleGovernedContinuation.ts`, `orchestrateF2.ts` (hand-off), `artifactTargetRouting.ts`, Fake matcher (`__P6_OPTIONAL_DOCUMENTARY_MD__`), `actions.ts` Product actions
- **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` (+ continuity/bridge CORR-01, corrProof07); CI-HQA-F01 — `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`; optional documentary routing — `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts`
- **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro); adjacent Generic PREPARE routing **DETERMINISTIC at tested scope** (PR #586 + candidate consolidation)
- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle (Artifact path); satisfied artifact; other exclusive BLOCKED reasons
```

### F08
```markdown
## F08 — EC PREPARE
- **Trigger (legacy M3):** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
- **Trigger (Generic PREPARE — AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** F2 chat-first GO / Nora tool solicitation (F04) / adjacent F05 hand-off → Product `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
- **Mission qualification:** Product readiness (`assessGenericMissionPrepareReadiness`) + authoritative Materiality CURRENT (`resolveAuthoritativeProductMateriality`). Materiality UNKNOWN → fail-closed (no silent NON_STRUCTURAL).
- **Chemin A — STRUCTURAL (M-HD-01/02):** structural signals (architecture/security/data/irreversible/…) or HD-required materiality → remember CURRENT offer for Pilot seal (process-local) → Accept/Refuse/Amend → durable OA HumanDecision with `genericMissionContext` / `presentationDigest` → `verifyGenericMissionHumanDecisionForPrepare` → PREPARE with verified `decisionRefs`. Structural offer alone ≠ PREPARE admission. Historical HD without mission binding ≠ unlock.
- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
- **S8 project context (D-ER-17):** absence of active CycleInstance does **not** alone block Generic PREPARE; **no invented CycleInstance**.
- **Fidelity (PR #586 + candidate):** pending offer may retain documentary `missionEffects`; exact capability identities only; Nora path candidates non-authoritative until Product resolve.
- **Paths:** `prepareGenericExecutionContractDraft.ts`, `resolveAuthoritativeProductMateriality.ts`, `recordGenericMissionHumanDecision.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `prepareAndResolveM3ProductPath` (legacy), `lib/oa/execution-contract/**`
- **Invariant:** cannot expand DecisionBasis / sealed WHAT; PREPARE ≠ AUTHORIZE ≠ EXECUTE; no ExecutionAttempt on PREPARE
- **Proof:** G-D4 / materiality / M-HD / DER16 / Option1 suites — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
- **Status:** COMPLETE domain (legacy); Generic PREPARE AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION
```

### F09
```markdown
## F09 — EC inspect / Confirmation / authority
- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
- **Unified inspection (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** Conversation / Execution / Trajectory share one exam contract (`ContractInspectionExamPanel` + `contractInspectionExam` helpers). Explicit open ≠ write; Attest requires presented facts; identity binding = `projectId` + `executionContractId` + `version` + `semanticFingerprint`. Contract change → reinspection. PREPARE must not auto-inspect. Trajectory does not invent inspection on PREPARE/Execute alone.
- **requiredInspectedFacts / disclosure:** canonical inspection disclosure on EC; Confirm ≠ Inspect ≠ Authorize ≠ Execute.
- **Product path (legacy):** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
- **Proof:** Pass03/Pass04 UIC suites — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
- **Status:** COMPLETE tables/services; unified exam AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION
```

### F10
```markdown
## F10 — Governed execution (docs_write / Cursor)
- **Gate:** effective Authorization on EC + attempt lifecycle; REAL additionally requires `SFIA_STUDIO_CURSOR_REAL` + managed repo base + Product REAL readiness fail-closed
- **Project-scoped Cursor Select/Start (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse.
- **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
- **Report-required runtime (docs_write nominal):** after Attempt `succeeded`, Product handoff fail-closes with `CURSOR_EXECUTION_REPORT_REQUIRED` / `CURSOR_EXECUTION_REPORT_MALFORMED` / bind mismatch when the structured claim is absent, unparseable, or identity-mismatched. Technical Attempt stays succeeded; Product SUCCESS is never invented. Independently verified artifact bytes may still be persisted as technical Evidence.
- **Proof:** `p6.projectScopedCursorSelection.d0.test.ts` — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake; ZERO Cursor REAL)
- **Status:** BOUNDARY gated; REAL only under distinct Morris GO; Fake docs-write + Fake Select/Start proven at tested scope; no new REAL claim
```

## 9–10. Frontières d'autorité / double chemin

### Volume 04 — Dual Generic PREPARE admission paths
```markdown
## Dual Generic PREPARE admission paths (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

```
Nora tool (F04) / F2 analysis / F05 adjacent hand-off
  → assessGenericMissionPrepareReadiness + resolveAuthoritativeProductMateriality
      ├─ STRUCTURAL / HD-required
      │    → remember CURRENT offer (process-local)
      │    → Pilot seal Accept/Refuse/Amend (UI)
      │    → OA HumanDecision (durable genericMissionContext)
      │    → verifyGenericMissionHumanDecisionForPrepare
      │    → solicitGenericExecutionPrepare (decisionRefs verified)
      │    → F09 inspect → Confirm → Authorize → F10 Execute
      └─ NON_STRUCTURAL CURRENT (Option 1 / G-D4)
           → solicitGenericExecutionPrepare (decisionRefs=[])
           → F09 inspect → Confirm → Authorize → F10 Execute
      UNKNOWN materiality / structural without verified HD → FAIL-CLOSED
```

OA = authority of record. W2 = Product coordination. Nora = cognition/recommendation only. Cursor = controlled execution under Authorization.

```

### Volume 07 — Dual admission + invariants
```markdown
## Dual admission paths — authority summary (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

**Chemin A — STRUCTURAL:** mission signals / HD-required materiality → process-local presentation carrier → Pilot HumanDecision → verify applicability+digest → PREPARE (refs verified) → inspect → Confirm (if required) → Authorize → Execute. No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission.

**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed.

**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN.

**CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: durable HD ≠ CURRENT offer (see vol 06).

```

## 11. Persistance / restart (R3)
```markdown
## Generic Mission / Generic PREPARE restart (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

| Fact | Durability | Restart meaning |
|---|---|---|
| A. Pending Generic PREPARE offer | Process-local only | Lost; must re-qualify / re-offer; no fictional reconstruction |
| B. Generic Mission HumanDecision | Durable OA | Identity + DecisionBasis retained; still subject to CURRENT applicability / digest verify |
| C. Sealed presentation / digest | Sealed into HD basis when recorded; UI carrier process-local | Process-local carrier does **not** become durable merely because HD is durable |
| D. Restart composition | — | Durable HD ≠ CURRENT offer available; absent offer ≠ PREPARE authorized; re-examination required; no artificial HD; no implicit Authorization |
| E. Supersession / stale | — | Do not reuse obsolete presentationDigest / fingerprint against a changed mission; verify against CURRENT sealed presentation |

**Not claimed:** global RESTART SAFE for Generic PREPARE. Candidate recovery paths are those implemented in W2 continuity readers — no invented recovery mechanism.

```

## 12. Tests et sémantique des oracles (R4)
```markdown
## Test-oracle semantic change — Artifact continuity suites (R4)

**Classification (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):**

| Layer | Label | Meaning |
|---|---|---|
| Test file edits | **NO_RUNTIME_SEMANTIC_IMPACT** | Product runtime paths under test are not altered by the test-file diff alone |
| Functional expectations | **TEST_ORACLE_SEMANTIC_CHANGE** | What the suite asserts as correct Product behavior did change |

Parent handoff `eae8dbe2` listed these under `NO_SEMANTIC_IMPACT` (tests). That label is retained for **runtime** impact of the test files; this section records the **oracle** change ChatGPT R4 requires before digest approval.

### `activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts`

| | Historical oracle | Candidate oracle |
|---|---|---|
| Mode | `ACTIVE_CYCLE_CONTINUATION_BLOCKED` | `NEW_CYCLE_FORMALIZATION` |
| Reason | `incompatible_execution_intent` | `no_compatible_artifact_effect` |

- Scenario: natural materialization signal **without** `docs_write`-compatible effect under an active cycle with REQUIRE_ARTIFACT.
- **Does not prove** that a new CycleInstance was created — the same case asserts `countCycles === 1` (resolution alone never invents a cycle).
- Mode name `NEW_CYCLE_FORMALIZATION` here is a resolution **routing** outcome (D-ER-17: not a dead-end; Generic PREPARE may remain eligible on project/active-cycle context) — **≠** Artifact governed continuation, **≠** CREATE_CYCLE proof.
- Ceiling: DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). NOT E2E REAL. NOT READY FOR REAL.

### `corrProof07.artifactMaterialization.d0.test.ts`

Candidate assertions distinguish:

1. **Generic PREPARE eligible** on same active-cycle / project context (no dead-end force-unbind).
2. **Artifact governed materialization not authorized** for the non-`docs_write` natural signal.
3. **No artificial new CycleInstance** (`countCycles` stable; `createCycle` not required by this path).
4. **No misleading Artifact materialization Proposal** bound as active-cycle governed continuation.

Do **not** conflate Generic PREPARE eligibility with Artifact continuation. DETERMINISTIC at tested scope only — oracle change ≠ proof E2E REAL.
```

Tests **not modified** this cycle. Historical Product test files remain dirty from prior consolidation only.

## 13. Documents modifiés

```
M	projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
M	projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
```

```
.../02-runtime-object-catalog.md                   | 14 +++++++-
 .../03-end-to-end-flow-catalog.md                  | 42 ++++++++++++++--------
 .../04-dependency-impact-map.md                    | 23 ++++++++++++
 .../06-persistence-restart-and-recovery.md         | 18 ++++++++--
 .../07-authority-invariants-and-failure-modes.md   | 16 +++++++++
 .../08-test-proof-and-conformance-map.md           | 38 ++++++++++++++++++++
 ...9-known-gaps-reserves-and-current-boundaries.md | 26 +++++++++++---
 7 files changed, 155 insertions(+), 22 deletions(-)
```

Also amended:
- vol 02 — OBJ-GENERIC-MISSION-HD
- vol 09 — P6 consolidation candidate overlay

Frozen: README.md, production-runtime-reference.manifest.json

## 14–15. Diffs COMPLETS + sections complètes

### Volume 02 — OBJ-GENERIC-MISSION-HD (section complète)
```markdown
## OBJ-GENERIC-MISSION-HD — Generic Mission HumanDecision (M-HD-01/02)

- **Status:** AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION (not INTEGRATED_ON_MAIN until Product git merge).
- **Purpose:** Structural / HD-required Generic missions bind a durable OA HumanDecision to a sealed mission presentation before Generic PREPARE may resume.
- **Durable truth:** `oa_human_decisions` with `decisionBasis.genericMissionContext`, `missionSubjectId`, `presentationDigest`.
- **Process-local carrier:** CURRENT pending Generic PREPARE offer (M-HD-02 remember) enables Pilot Accept/Refuse/Amend seal — **≠** non-structural chat-first PREPARE admission; offer alone ≠ Authorization.
- **PREPARE gate:** `verifyGenericMissionHumanDecisionForPrepare` — applicability + digest match; historical HD without binding does not unlock.
- **Non-structural path:** Option 1 / G-D4 may PREPARE with `decisionRefs=[]` when Materiality CURRENT admits — empty refs ≠ structural bypass.
- **UI:** `useProductConversation` + `GovernedGenericMissionDecisionCard` / `genericMissionPresentation` (read continuity; restart without offer → none/stale fail-closed).
- **Paths:** `recordGenericMissionHumanDecision.ts`, `genericMissionDecisionContinuity.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `genericMissionSubject.ts`
- **Invariant:** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation.
```

### Volume 09 — P6 overlay (section complète)
```markdown
## Overlay — P6 Generic Execution consolidation candidate (LIVING REFERENCE R1–R4)

**Status:** AS_IMPLEMENTED_IN_CANDIDATE on integration worktree `integration/sfia-studio-p6-generic-execution-consolidation` @ base `896ff59c` · Product dirty transferred from source `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` · **PENDING_GIT_INTEGRATION** · **NOT INTEGRATED_ON_MAIN**.

| Item | Status |
|---|---|
| G-IB (importBoundaries allowlist +4 W2 type-only RuntimeOaStack) | **CLOSED** (historical gate) |
| G-DIGEST Living Reference digests | **PENDING CONTENT APPROVAL** — manifest **FROZEN**; digests **not** promoted this cycle |
| Living Reference volumes 02/03/04/06/07/08/09 | Semantic amendments R1–R4 applied locally — ChatGPT content review required before digest write |
| 77 Product candidates + allowlist | Preserved dirty; **no** Product commit/push/PR this cycle |
| Pending Generic PREPARE offer | Process-local — restart-unsafe (vol 06) |
| Generic Mission HumanDecision | Durable OA; restart ≠ CURRENT offer; applicability re-check required |
| Cursor REAL / OpenAI LIVE / HQA | **NOT PROVEN / NOT RETESTED** |
| P6 GLOBAL PASS / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
| DETERMINISTIC proof ceiling | Historical 328 targeted PASS + G-IB 5/5 — **not re-executed** this documentary cycle |

**Next (distinct GOs):** ChatGPT semantic content review → Morris digest approval → conformance → Product git decision → PR/CI/merge → HQA reprise. This overlay does **not** claim CURRENT ON MAIN.

```

### COMPLETE DIFF — `02-runtime-object-catalog.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index b4178031..eeca2b2e 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -93,10 +93,22 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.
 - **Paths:** `lib/oa/decision/**`, `f2/recordDecision.ts`, obligation policy HDs in `pilotLifecycleActions.ts`
 - **Examples:** Proposal accept; `OBLIGATION_POLICY_REQUIRE_ARTIFACT`.

+## OBJ-GENERIC-MISSION-HD — Generic Mission HumanDecision (M-HD-01/02)
+
+- **Status:** AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION (not INTEGRATED_ON_MAIN until Product git merge).
+- **Purpose:** Structural / HD-required Generic missions bind a durable OA HumanDecision to a sealed mission presentation before Generic PREPARE may resume.
+- **Durable truth:** `oa_human_decisions` with `decisionBasis.genericMissionContext`, `missionSubjectId`, `presentationDigest`.
+- **Process-local carrier:** CURRENT pending Generic PREPARE offer (M-HD-02 remember) enables Pilot Accept/Refuse/Amend seal — **≠** non-structural chat-first PREPARE admission; offer alone ≠ Authorization.
+- **PREPARE gate:** `verifyGenericMissionHumanDecisionForPrepare` — applicability + digest match; historical HD without binding does not unlock.
+- **Non-structural path:** Option 1 / G-D4 may PREPARE with `decisionRefs=[]` when Materiality CURRENT admits — empty refs ≠ structural bypass.
+- **UI:** `useProductConversation` + `GovernedGenericMissionDecisionCard` / `genericMissionPresentation` (read continuity; restart without offer → none/stale fail-closed).
+- **Paths:** `recordGenericMissionHumanDecision.ts`, `genericMissionDecisionContinuity.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `genericMissionSubject.ts`
+- **Invariant:** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation.
+
 ## OBJ-DECISION-BASIS — DecisionBasis

 - **Purpose:** Sealed WHAT/scope feeding ExecutionContract preparation.
-- **Paths:** execution-contract domain / F2 accept path.
+- **Paths:** execution-contract domain / F2 accept path; Generic Mission seal uses `genericMissionContext` inside DecisionBasis when HD-bound.
 - **Invariant:** EC cannot expand DecisionBasis WHAT.

 ## OBJ-CONFIRMATION — Confirmation
```

### COMPLETE DIFF — `03-end-to-end-flow-catalog.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 99ec0008..e947b90d 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -29,6 +29,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 ## F04 — Nora conversation during active cycle
 - **Trigger:** Pilot message via product conversation
 - **Steps:** Pilot content → Product orchestration (`orchestrateTurn`) → `runNoraCognitiveTurn` (strategy + **adaptive maxTurns**) → Agents Runner (`runNoraAgentsTurn`) → optional **same-turn** RunState continuation under mission/campaign budget → result + Session append → Product status → (optional) prospective Active Cycle Work / Work Recommendation materialization → journal tools
+- **Nora Generic PREPARE solicitation (D-ER-16 / Option 2 — AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** `orchestrateTurn` may expose Agents tool `request_generic_execution_prepare` wired to Product `solicitGenericExecutionPrepare`. Cognition may **solicit** PREPARE only. Tool params never create HumanDecision, never create ExecutionAttempt, never authorize or execute. Authority remains OA/W2 Product admission (F08). DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE via `p6.der16.genericNoraToolInvocation.d0.test.ts` (Fake).
 - **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
 - **Nora autonomy (PR #577 INTEGRATED ON MAIN — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality. Merge `d8ceb8ad`.
 - **Documentary cognitive reliability / RCD-01 (PR #578 INTEGRATED ON MAIN — DETERMINISTIC):** Guided Document Review acquisition uses the native tool path `git_local_read_file` → `GitLocalReadAdapter` → `ToolRouter` (`prepareGitLocalReadDataForModel`) → Agents Runner tool result. Coverage metadata (`returnedStartLine`/`returnedEndLine`/`completeLineCount`/`nextStartLineHint`/`truncated` vs `documentHasMore`) must describe the **final model-visible** payload after redaction and JSON envelope capping (`CT_MAX_TOOL_RESULT_CHARS` = 12000). Partial lines are never credited; redacted lines still progress; a line that fits the adapter but not the final envelope is skipped via explicit `lineExceedsCap` (no infinite same-line retry; no mid-line offset protocol). On soft `maxTurns` exhaustion, restitution discloses honest incomplete coverage from tool crumbs when available (no invented FULL / HumanDecision / Deliverable). Natural mono-file documentary prompts elevate Focused adaptive budget (≥8, ≤ ceiling 10) without raising FinOps ceilings. Proof: `p6.nora.min09.documentaryReliability.d0.test.ts` R1–R7 — **not** GDR REAL quality. Merge `44006648` / source `9b855d8d`.
@@ -42,19 +43,18 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
 - **Boundary (CI-HQA-F01 / AS-IMPLEMENTED):** explicit NEW_CYCLE formalization (« préparer / créer / démarrer un cycle … », even when a future deliverable/note is mentioned) is **not** Artifact continuation. `hasExplicitNewCycleFormalizationSignal` keeps those turns on `NEW_CYCLE_FORMALIZATION` so absence of an active cycle does not fail-closed as `no_active_cycle` before `createCycle`. Natural Artifact cues still cover produce/write/materialize of a documentary object under an active cycle (F-C9-04).
 - **Admission (Artifact governed continuation):** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533) — unchanged; obligations are not bypassed by Generic PREPARE.
-- **Adjacent path (P6-HQA-F05-GD4-01 / PR #586 AS-IMPLEMENTED):** ordinary documentary materialization recognized by ACGC but **without** a closure Artifact obligation resolves as `ACTIVE_CYCLE_CONTINUATION_BLOCKED` / `no_require_artifact`. When the turn is actionable for Generic PREPARE, `orchestrateF2` may route via `isOptionalDocumentaryWithoutClosureArtifactBlock` → Generic PREPARE on the **same** active cycle. This is **not** `NEW_CYCLE_FORMALIZATION`, **not** an invented `REQUIRE_ARTIFACT` HumanDecision, and **not** Artifact governed continuation. Other BLOCKED reasons stay exclusive / fail-closed clarification.
-- **Generic PREPARE fidelity (PR #586):** pending offer may retain documentary `missionEffects` / `docs_write`; capability envelope uses **exact** Product identities only (`cap:studio.cursor.generalist`, `cap:cursor.docs_write` — no substring spoofing); Nora `proposedTargetPath` / filename stay inspectable **candidates** (`proposedTargetPathAuthoritative=false`; `documentaryTargetResolution=unresolved_nora_candidate` when unresolved) — never promoted into authorized `expectedOutputs` solely by memorization.
+- **Adjacent hand-off (P6-HQA-F05-GD4-01 / PR #586 AS-IMPLEMENTED):** ordinary documentary materialization recognized by ACGC but **without** a closure Artifact obligation resolves as `ACTIVE_CYCLE_CONTINUATION_BLOCKED` / `no_require_artifact` (or, for natural signal without docs_write-compatible effect, may surface `NEW_CYCLE_FORMALIZATION` / `no_compatible_artifact_effect` — see vol 08 oracle semantics). When the turn is actionable for Generic PREPARE, orchestration may **hand off to F08** via `isOptionalDocumentaryWithoutClosureArtifactBlock`. This is **not** Artifact governed continuation, **not** an invented `REQUIRE_ARTIFACT` HumanDecision, and **not** proof that a new CycleInstance was created. Full Generic PREPARE admission/authority lives under **F08**, not F05.
 - **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition (D-PC-09); no normal filename micro-gate when cues suffice; clarification only when no coherent cue
 - **Continuation fact:** `structurallyResolvedActiveCycleContinuation` is server-owned and local to this Recommendation/Proposal — ≠ Truth C, ≠ HumanDecision, ≠ universal uncertainty resolution; sealed continuation without impacting signals skips gratuitous structural MW5 re-challenge
-- **Same CycleInstance:** no silent NEW_CYCLE / re-formalization
+- **Same CycleInstance:** no silent NEW_CYCLE / re-formalization on the Artifact path
 - **Exit (Artifact path):** Proposal `DECISION_REQUIRED`
-- **Exit (optional documentary Generic PREPARE):** inspectable ExecutionContract draft under existing Confirm/Authorize gates — PREPARE ≠ AUTHORIZE; AUTHORIZED ≠ EXECUTED; no ExecutionAttempt on prepare/authorize alone
+- **Exit (adjacent → F08):** qualification / pending Generic PREPARE offer or inspectable EC draft under F08 gates — PREPARE ≠ AUTHORIZE; AUTHORIZED ≠ EXECUTED
 - **Product spine (UI server actions):** Send → Decide → PrepareResolvedM3 → ConfirmAndExecuteResolvedM3 → RehydrateEvidenceOutcome
 - **Nominal chat-first spine:** Send (proposal) → Send (disposition) → PrepareResolvedM3 → … — `projectAssistantDecideAction` remains available but is no longer a required UX step
-- **Paths:** `activeCycleGovernedContinuation.ts`, `orchestrateF2.ts` (Generic PREPARE routing), `artifactTargetRouting.ts`, Fake matcher (`__P6_OPTIONAL_DOCUMENTARY_MD__`), `actions.ts` Product actions; adjacent untracked w2 Generic PREPARE / materiality helpers
+- **Paths:** `activeCycleGovernedContinuation.ts`, `orchestrateF2.ts` (hand-off), `artifactTargetRouting.ts`, Fake matcher (`__P6_OPTIONAL_DOCUMENTARY_MD__`), `actions.ts` Product actions
 - **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` (+ continuity/bridge CORR-01, corrProof07); CI-HQA-F01 — `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`; optional documentary routing — `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts`
-- **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro); optional documentary Generic PREPARE **DETERMINISTIC at tested scope** (PR #586)
-- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact; capability outside generalist envelope; stale/absent pending offer
+- **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro); adjacent Generic PREPARE routing **DETERMINISTIC at tested scope** (PR #586 + candidate consolidation)
+- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle (Artifact path); satisfied artifact; other exclusive BLOCKED reasons

 ## F06 — Proposal / Decision Subject / options
 - **Trigger:** F2 turn producing `f2_proposal`
@@ -77,21 +77,33 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status:** COMPLETE durable Work path (deterministic); First Framing START conversational path DETERMINISTIC at tested scope; other Lifecycle transitions Studio-preserved; ZERO REAL claim

 ## F08 — EC PREPARE
-- **Trigger:** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
-- **Paths:** `prepareAndResolveM3ProductPath` → `lib/oa/execution-contract/**`
-- **Invariant:** cannot expand DecisionBasis WHAT; Product UI seals N2 Pilot authority (legacy omit → MORRIS)
-- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (front-door oracle)
+- **Trigger (legacy M3):** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
+- **Trigger (Generic PREPARE — AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** F2 chat-first GO / Nora tool solicitation (F04) / adjacent F05 hand-off → Product `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
+- **Mission qualification:** Product readiness (`assessGenericMissionPrepareReadiness`) + authoritative Materiality CURRENT (`resolveAuthoritativeProductMateriality`). Materiality UNKNOWN → fail-closed (no silent NON_STRUCTURAL).
+- **Chemin A — STRUCTURAL (M-HD-01/02):** structural signals (architecture/security/data/irreversible/…) or HD-required materiality → remember CURRENT offer for Pilot seal (process-local) → Accept/Refuse/Amend → durable OA HumanDecision with `genericMissionContext` / `presentationDigest` → `verifyGenericMissionHumanDecisionForPrepare` → PREPARE with verified `decisionRefs`. Structural offer alone ≠ PREPARE admission. Historical HD without mission binding ≠ unlock.
+- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
+- **S8 project context (D-ER-17):** absence of active CycleInstance does **not** alone block Generic PREPARE; **no invented CycleInstance**.
+- **Fidelity (PR #586 + candidate):** pending offer may retain documentary `missionEffects`; exact capability identities only; Nora path candidates non-authoritative until Product resolve.
+- **Paths:** `prepareGenericExecutionContractDraft.ts`, `resolveAuthoritativeProductMateriality.ts`, `recordGenericMissionHumanDecision.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `prepareAndResolveM3ProductPath` (legacy), `lib/oa/execution-contract/**`
+- **Invariant:** cannot expand DecisionBasis / sealed WHAT; PREPARE ≠ AUTHORIZE ≠ EXECUTE; no ExecutionAttempt on PREPARE
+- **Proof:** G-D4 / materiality / M-HD / DER16 / Option1 suites — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
+- **Status:** COMPLETE domain (legacy); Generic PREPARE AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION

 ## F09 — EC inspect / Confirmation / authority
 - **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
-- **Product path:** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
-- **Status:** COMPLETE tables/services; Product E2E at tested scope
+- **Unified inspection (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** Conversation / Execution / Trajectory share one exam contract (`ContractInspectionExamPanel` + `contractInspectionExam` helpers). Explicit open ≠ write; Attest requires presented facts; identity binding = `projectId` + `executionContractId` + `version` + `semanticFingerprint`. Contract change → reinspection. PREPARE must not auto-inspect. Trajectory does not invent inspection on PREPARE/Execute alone.
+- **requiredInspectedFacts / disclosure:** canonical inspection disclosure on EC; Confirm ≠ Inspect ≠ Authorize ≠ Execute.
+- **Product path (legacy):** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
+- **Proof:** Pass03/Pass04 UIC suites — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
+- **Status:** COMPLETE tables/services; unified exam AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION

 ## F10 — Governed execution (docs_write / Cursor)
-- **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
+- **Gate:** effective Authorization on EC + attempt lifecycle; REAL additionally requires `SFIA_STUDIO_CURSOR_REAL` + managed repo base + Product REAL readiness fail-closed
+- **Project-scoped Cursor Select/Start (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse.
 - **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
 - **Report-required runtime (docs_write nominal):** after Attempt `succeeded`, Product handoff fail-closes with `CURSOR_EXECUTION_REPORT_REQUIRED` / `CURSOR_EXECUTION_REPORT_MALFORMED` / bind mismatch when the structured claim is absent, unparseable, or identity-mismatched. Technical Attempt stays succeeded; Product SUCCESS is never invented. Independently verified artifact bytes may still be persisted as technical Evidence.
-- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro); Fake docs-write proven in front-door oracle; deterministic report envelope + runtime enforcement AS-IMPLEMENTED
+- **Proof:** `p6.projectScopedCursorSelection.d0.test.ts` — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake; ZERO Cursor REAL)
+- **Status:** BOUNDARY gated; REAL only under distinct Morris GO; Fake docs-write + Fake Select/Start proven at tested scope; no new REAL claim

 ## F11 — Attempt terminal → Evidence → ReviewBundle
 - **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
```

### COMPLETE DIFF — `04-dependency-impact-map.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index 394f3663..b1ac22bd 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -38,6 +38,26 @@ LifecycleSurface / lifecyclePresentation
   → does not alone authorize materialization
 ```

+## Dual Generic PREPARE admission paths (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)
+
+```
+Nora tool (F04) / F2 analysis / F05 adjacent hand-off
+  → assessGenericMissionPrepareReadiness + resolveAuthoritativeProductMateriality
+      ├─ STRUCTURAL / HD-required
+      │    → remember CURRENT offer (process-local)
+      │    → Pilot seal Accept/Refuse/Amend (UI)
+      │    → OA HumanDecision (durable genericMissionContext)
+      │    → verifyGenericMissionHumanDecisionForPrepare
+      │    → solicitGenericExecutionPrepare (decisionRefs verified)
+      │    → F09 inspect → Confirm → Authorize → F10 Execute
+      └─ NON_STRUCTURAL CURRENT (Option 1 / G-D4)
+           → solicitGenericExecutionPrepare (decisionRefs=[])
+           → F09 inspect → Confirm → Authorize → F10 Execute
+      UNKNOWN materiality / structural without verified HD → FAIL-CLOSED
+```
+
+OA = authority of record. W2 = Product coordination. Nora = cognition/recommendation only. Cursor = controlled execution under Authorization.
+
 ## DEP edges (stable IDs)

 | ID | From | To | Why |
@@ -52,6 +72,9 @@ LifecycleSurface / lifecyclePresentation
 | DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn |
 | DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-INTENT | deterministic structured analysis |
 | DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity |
+| DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt |
+| DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural PREPARE |
+| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs |

 ## Sample impact analysis A — `activeCycleGovernedContinuation.ts`

```

### COMPLETE DIFF — `06-persistence-restart-and-recovery.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index e11a9db2..c9a43753 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -42,8 +42,10 @@ Do **not** treat Session items as an exhaustive Pilot transcript. Do **not** cla
 | Active cycle | Cycle + LPS pointer | lifecycle projection | proposals may be empty | ok |
 | Recommendation | usually ephemeral | may recompute | yes | Recommendation ≠ HD |
 | Proposal pending | epistemic markers maybe | subject reconstruct or requalify | **Proposal map lost** | no silent invent |
-| Pending Generic PREPARE offer (P6-HQA-F05-GD4-01) | none | must re-offer / requalify | **offer map lost** (process-local) | no silent invent; no stale-offer reuse |
-| HD recorded | `oa_human_decisions` | decision list | proposal may be gone | HD remains authority record |
+| Pending Generic PREPARE offer (P6-HQA-F05-GD4-01 + M-HD carrier) | none | must re-offer / requalify | **offer map lost** (process-local) | no silent invent; no stale-offer reuse; structural carrier ≠ PREPARE admission |
+| Generic Mission HumanDecision (M-HD-01/02) | `oa_human_decisions` (+ DecisionBasis / genericMissionContext / presentationDigest) | decision list + verify path | process-local offer/presentation carrier lost | HD remains durable authority **record**; applicability still re-checked before PREPARE |
+| Generic Mission presentation (UI seal) | none as Presentation store | none / stale if client held digest without reconstitutable offer | **presentation carrier lost** | fail-closed stale; never invent PREPARE from durable HD alone |
+| HD recorded (general) | `oa_human_decisions` | decision list | proposal may be gone | HD remains authority record |

 | EC prepared | `oa_execution_contracts` | EC projection | | |
 | Inspected | attestations | | | |
@@ -61,6 +63,18 @@ Do **not** treat Session items as an exhaustive Pilot transcript. Do **not** cla
 - Proposal: not durable; Pilot may need new Proposal turn.
 - Never invent HumanDecision on restart.

+## Generic Mission / Generic PREPARE restart (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)
+
+| Fact | Durability | Restart meaning |
+|---|---|---|
+| A. Pending Generic PREPARE offer | Process-local only | Lost; must re-qualify / re-offer; no fictional reconstruction |
+| B. Generic Mission HumanDecision | Durable OA | Identity + DecisionBasis retained; still subject to CURRENT applicability / digest verify |
+| C. Sealed presentation / digest | Sealed into HD basis when recorded; UI carrier process-local | Process-local carrier does **not** become durable merely because HD is durable |
+| D. Restart composition | — | Durable HD ≠ CURRENT offer available; absent offer ≠ PREPARE authorized; re-examination required; no artificial HD; no implicit Authorization |
+| E. Supersession / stale | — | Do not reuse obsolete presentationDigest / fingerprint against a changed mission; verify against CURRENT sealed presentation |
+
+**Not claimed:** global RESTART SAFE for Generic PREPARE. Candidate recovery paths are those implemented in W2 continuity readers — no invented recovery mechanism.
+
 ## Additional stores (harvest)

 | Store | Role | Notes |
```

### COMPLETE DIFF — `07-authority-invariants-and-failure-modes.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index eba27ccd..2f7ea1d3 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -26,6 +26,22 @@
 | INV-NO-SILENT-HD | No silent/auto HumanDecision | recordDecision only on Pilot action | bridge T2 |
 | INV-NO-V3-ADOPT | No automatic runtime v3 adoption | docs + absence of adoption flags | this corpus |
 | INV-APPLICABILITY-NE-AUTHORITY | Artifact APPLICABLE ≠ execution authorized | activeCycleGovernedContinuation bridge | bridge CORR-01 |
+| INV-OFFER-NE-AUTH | Pending Generic PREPARE offer ≠ Authorization | pendingGenericPrepareOfferStore + prepare gates | DER16 / M-HD / G-D4 |
+| INV-INSPECT-NE-CONFIRM | Inspection ≠ Confirmation | unified exam + confirm services | Pass03/04 UIC |
+| INV-CONFIRM-NE-AUTH | Confirmation ≠ Authorization | authorize* services | authorizeGeneric / confirmForAuthorization |
+| INV-AUTH-NE-EXEC | Authorization ≠ Execution | governedExecute Select/Start | projectScopedCursorSelection |
+| INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 |
+| INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 |
+
+## Dual admission paths — authority summary (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)
+
+**Chemin A — STRUCTURAL:** mission signals / HD-required materiality → process-local presentation carrier → Pilot HumanDecision → verify applicability+digest → PREPARE (refs verified) → inspect → Confirm (if required) → Authorize → Execute. No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission.
+
+**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed.
+
+**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN.
+
+**CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: durable HD ≠ CURRENT offer (see vol 06).

 ## Failure modes (selected)

```

### COMPLETE DIFF — `08-test-proof-and-conformance-map.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 90b349ac..03626bcd 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -15,6 +15,10 @@
 |---|---|---|
 | F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — oracle traverses Product UI server actions (Send→Decide→PrepareResolvedM3→ConfirmAndExecuteResolvedM3→Rehydrate) |
 | F05 optional documentary → Generic PREPARE (PR #586) | `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (+ G-D4, Product Continuity, HQA-F01) | DETERMINISTIC — `no_require_artifact` routes to Generic PREPARE; Artifact obligation path preserved; exact caps; non-authoritative path candidates; Fake cue `__P6_OPTIONAL_DOCUMENTARY_MD__` ≠ OpenAI LIVE |
+| F04 Nora Generic PREPARE tool (D-ER-16) | `p6.der16.genericNoraToolInvocation.d0.test.ts` | DETERMINISTIC — solicit PREPARE only; structural fail-closed; no Attempt; PENDING_GIT_INTEGRATION |
+| F08 Generic PREPARE / M-HD / Option1 | `p6.mHd01*`, `p6.mHd02*`, `p6.hqa.materialityBlock01*`, `p6.o1.continuityGd4EmptyRefs*` | DETERMINISTIC — structural HD-bound vs NON_STRUCTURAL empty refs; PENDING_GIT_INTEGRATION |
+| F09 unified inspection | `p6.uic.unifiedInspectionContract*`, `p6.r03.inspection*` | DETERMINISTIC — explicit exam/attest; identity binding; PENDING_GIT_INTEGRATION |
+| F10 project-scoped Cursor | `p6.projectScopedCursorSelection.d0.test.ts` | DETERMINISTIC Fake Select→Start→Result; null-cycle admitted only if OA allows; ZERO Cursor REAL |

 | F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
 | F03 First Framing START | p6.hqa.f01.chatFirstCycleStartGate, chatFirstFramingContinuity(.frontDoor) | explicit START; no auto-START; no technical id in Pilot copy |
@@ -31,6 +35,40 @@
 | F10–F11 attempt/evidence | productCycleE2eStabilization.frontDoor + PWR E2E | Fake adapter / Fake docs-write only |
 | Architecture drift | productionRuntimeReference.conformance | living reference |

+## Test-oracle semantic change — Artifact continuity suites (R4)
+
+**Classification (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):**
+
+| Layer | Label | Meaning |
+|---|---|---|
+| Test file edits | **NO_RUNTIME_SEMANTIC_IMPACT** | Product runtime paths under test are not altered by the test-file diff alone |
+| Functional expectations | **TEST_ORACLE_SEMANTIC_CHANGE** | What the suite asserts as correct Product behavior did change |
+
+Parent handoff `eae8dbe2` listed these under `NO_SEMANTIC_IMPACT` (tests). That label is retained for **runtime** impact of the test files; this section records the **oracle** change ChatGPT R4 requires before digest approval.
+
+### `activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts`
+
+| | Historical oracle | Candidate oracle |
+|---|---|---|
+| Mode | `ACTIVE_CYCLE_CONTINUATION_BLOCKED` | `NEW_CYCLE_FORMALIZATION` |
+| Reason | `incompatible_execution_intent` | `no_compatible_artifact_effect` |
+
+- Scenario: natural materialization signal **without** `docs_write`-compatible effect under an active cycle with REQUIRE_ARTIFACT.
+- **Does not prove** that a new CycleInstance was created — the same case asserts `countCycles === 1` (resolution alone never invents a cycle).
+- Mode name `NEW_CYCLE_FORMALIZATION` here is a resolution **routing** outcome (D-ER-17: not a dead-end; Generic PREPARE may remain eligible on project/active-cycle context) — **≠** Artifact governed continuation, **≠** CREATE_CYCLE proof.
+- Ceiling: DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). NOT E2E REAL. NOT READY FOR REAL.
+
+### `corrProof07.artifactMaterialization.d0.test.ts`
+
+Candidate assertions distinguish:
+
+1. **Generic PREPARE eligible** on same active-cycle / project context (no dead-end force-unbind).
+2. **Artifact governed materialization not authorized** for the non-`docs_write` natural signal.
+3. **No artificial new CycleInstance** (`countCycles` stable; `createCycle` not required by this path).
+4. **No misleading Artifact materialization Proposal** bound as active-cycle governed continuation.
+
+Do **not** conflate Generic PREPARE eligibility with Artifact continuation. DETERMINISTIC at tested scope only — oracle change ≠ proof E2E REAL.
+
 ## Oracle weaknesses (updated after PRODUCT-CYCLE-E2E-STABILIZATION-01)

 | Weakness | Classification | Evidence |
```

### COMPLETE DIFF — `09-known-gaps-reserves-and-current-boundaries.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index f663ab90..d9f19039 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -91,18 +91,36 @@
 - Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
 - REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).

-## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (CURRENT MACRO — local candidate)
+## Overlay — P6 Generic Execution consolidation candidate (LIVING REFERENCE R1–R4)

-- **CURRENT MACRO** on branch `delivery/sfia-studio-generic-execution-review-result-convergence-01` · Correction Pass **04 RESUMED AFTER MORRIS DECISION** · **CLOSED FOR CRITICAL REVIEW**.
+**Status:** AS_IMPLEMENTED_IN_CANDIDATE on integration worktree `integration/sfia-studio-p6-generic-execution-consolidation` @ base `896ff59c` · Product dirty transferred from source `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` · **PENDING_GIT_INTEGRATION** · **NOT INTEGRATED_ON_MAIN**.
+
+| Item | Status |
+|---|---|
+| G-IB (importBoundaries allowlist +4 W2 type-only RuntimeOaStack) | **CLOSED** (historical gate) |
+| G-DIGEST Living Reference digests | **PENDING CONTENT APPROVAL** — manifest **FROZEN**; digests **not** promoted this cycle |
+| Living Reference volumes 02/03/04/06/07/08/09 | Semantic amendments R1–R4 applied locally — ChatGPT content review required before digest write |
+| 77 Product candidates + allowlist | Preserved dirty; **no** Product commit/push/PR this cycle |
+| Pending Generic PREPARE offer | Process-local — restart-unsafe (vol 06) |
+| Generic Mission HumanDecision | Durable OA; restart ≠ CURRENT offer; applicability re-check required |
+| Cursor REAL / OpenAI LIVE / HQA | **NOT PROVEN / NOT RETESTED** |
+| P6 GLOBAL PASS / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
+| DETERMINISTIC proof ceiling | Historical 328 targeted PASS + G-IB 5/5 — **not re-executed** this documentary cycle |
+
+**Next (distinct GOs):** ChatGPT semantic content review → Morris digest approval → conformance → Product git decision → PR/CI/merge → HQA reprise. This overlay does **not** claim CURRENT ON MAIN.
+
+## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (historical macro — retained)
+
+- **Historical macro** on branch `delivery/sfia-studio-generic-execution-review-result-convergence-01` · Correction Pass **04 RESUMED AFTER MORRIS DECISION** · **CLOSED FOR CRITICAL REVIEW** (documentary tip retained; superseding Product consolidation is the P6 overlay above).
 - **CP4-01 WIRED** — Product carrier = Proposal `PresentedOptionSet.sealedExecutionBasis` → pursue HumanDecision → DecisionBasis → generic local-write (MD-CP4-01 consumed). MAIN front-door oracle does **not** inject `durableLocalWriteSeal`.
 - **CP4-02 OPTION C IMPLEMENTED** — Studio Product write protection = sandbox floor ∪ `STUDIO_GOVERNANCE_PROTECTED_PATHS` (framing prefix + exact Build Doctrine / Roadmap / D-ER architecture / C1). No blanket `projects/sfia-studio/**` deny. No Campus360/CT `SFIA_DEFAULT_PROTECTED_PATHS` as Product classifier.
-- Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · READY FOR REAL **NO** · runtime v3 **NON ADOPTED**.
+- Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** (at time of that macro) · ZERO REAL · READY FOR REAL **NO** · runtime v3 **NON ADOPTED**.
 - Historical: Correction Pass 04 STOP (Morris decision required on CP4-02) superseded by MD-CP4-01/MD-CP4-02 resume — see prior tip / handoff `2daf0dc3…`.
 - docs_write adapters: **TRANSITIONAL bridge retained** (dual-write Review Material) — exit when historical callers = 0.
 - `durableLocalWriteSeal` domain seam: **TRANSITIONAL** (isolated domain/tests only) — exit when GOVERNED trajectory Product carrier is retired or superseded; never browser/client.
 - NoteLite REAL replay: **NOT DONE** (PAUSED; distinct Morris GO).
 - Retention GC / Git promotion: **NOT IMPLEMENTED**.
-- Next = ChatGPT Critical Review of Correction Pass 04 resume → Morris GO commit/push/PR (distinct).
+- Next after that macro was ChatGPT Critical Review → Morris GO commit/push/PR (distinct). Product consolidation trajectory now tracked under the P6 overlay.

 ### Historical — Correction Pass 04 STOP (superseded)

```


## 16. Preuves Product associées (références — code non recopié)
- `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
- `resolveAuthoritativeProductMateriality` / `assessGenericMissionPrepareReadiness`
- `recordGenericMissionHumanDecision` / `verifyGenericMissionHumanDecisionForPrepare`
- `pendingGenericPrepareOfferStore` (process-local)
- `request_generic_execution_prepare` (Nora tool → Product solicit only)
- `ContractInspectionExamPanel` / `contractInspectionExam`
- `projectScopedCursorSelection` / governed execute Select→Start
- Suites: `p6.der16*`, `p6.mHd01*`, `p6.mHd02*`, `p6.o1*`, `p6.hqa.materialityBlock01*`, `p6.uic*`, `p6.r03*`, `p6.projectScopedCursorSelection*`, continuity CORR-01, corrProof07
- Cumulative Product code reviewed in prior handoffs (`ae40017f`, `eae8dbe2`); this cycle did **not** re-audit all 77 files line-by-line

## 17. Labels épistémiques utilisés
- AS_IMPLEMENTED_IN_CANDIDATE
- PENDING_GIT_INTEGRATION
- DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
- NOT_PROVEN
- NOT INTEGRATED_ON_MAIN
- NO_RUNTIME_SEMANTIC_IMPACT (test files)
- TEST_ORACLE_SEMANTIC_CHANGE (oracle expectations)
- **Not used:** INTEGRATED_ON_MAIN for this candidate; P6 PASS; HQA PASS; READY FOR REAL; runtime v3 ADOPTED

## 18. Réserves
- G-DIGEST pending ChatGPT content approval then distinct Morris digest GO
- Cursor REAL / OpenAI LIVE / HQA not retested
- Visual Figma/runtime NOT PROVEN
- Pending offer process-local restart-unsafe
- No global RESTART SAFE claim
- Historical 328 PASS / typecheck/lint/build / G-IB 5/5 **not re-executed** this cycle
- Product dirty not committed
- Parent seven source/test digest drifts retained; **+7 volume digests** now drifted by R1–R4

## 19–20. Digests actuels vs candidats

Manifest remains FROZEN. Digests NOT written.

Tracked digests: 44. Drift count: 14.

### Volume digests (this cycle)

| File | Manifest digest | Candidate digest |
|---|---|---|
| `02-runtime-object-catalog.md` | `f820789e8f4d7af3` | `243b7c0e390eb19f` |
| `03-end-to-end-flow-catalog.md` | `2e53911afec78653` | `854b94741d7412ec` |
| `04-dependency-impact-map.md` | `f7f8d21a0efb997b` | `7a1689f3b1cb3e9e` |
| `06-persistence-restart-and-recovery.md` | `e65f13a723097cff` | `179057f68b7a363d` |
| `07-authority-invariants-and-failure-modes.md` | `3dbdf5191b9b4670` | `6a648b21c7445423` |
| `08-test-proof-and-conformance-map.md` | `a9adba70a42a1e55` | `9ee8dde351556e12` |
| `09-known-gaps-reserves-and-current-boundaries.md` | `716f81a3b1cb5937` | `e9868b78e0a79e7c` |

### Product source/test digests still drifted (parent + consolidation; unchanged this cycle)

| Path | Manifest | Candidate |
|---|---|---|
| `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts` | `1b8d5cd3ff4f3383` | `8150d48197019412` |
| `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts` | `6200659a4be2f20c` | `bf17440e75fd1d6a` |
| `projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts` | `57646c517d2ccdb6` | `93852ec0c2193c86` |
| `projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts` | `21dfef1c7b08764a` | `16d3c4a2141b205f` |
| `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts` | `53eb3081b6bb2c23` | `7eb2fa5f7fb56ac0` |
| `projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts` | `323b22fa466fc23b` | `23513b92d5cfa5d3` |
| `projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts` | `29485cbfb95f7939` | `c2862434ad6fe670` |

Full machine JSON: `.tmp-sfia-review/r1r4-candidate-digests.json`

## 21. Manifest inchangé
- `production-runtime-reference.manifest.json` — no git diff
- `lastReviewedCommit` / `lastReviewedAt` / `schemaVersion` / components / flows / dependencies / invariants — untouched
- README.md — untouched

## 22. Contrôles
- `git diff --check` — clean (no whitespace errors)
- `git diff --name-status` — 7 volumes only under production-runtime-reference/
- Links / function names / test refs — spot-checked against candidate paths
- Conformance checker (non-destructive): **4 PASS / 1 FAIL** on digest match (expected; first mismatch vol 02 `f820789e8f4d7af3` vs `243b7c0e390eb19f`)
- No runtime ADOPTED claim; no new authority; no false REAL; no candidat/main mix; no new architecture
- 77 Product candidates + allowlist (=78 freeze) unchanged
- Source worktree HEAD + Product dirty preserved
- Staged Product empty

## 23. Git Review Index
| Artifact | Ref |
|---|---|
| Parent gates handoff | `eae8dbe20a1309a884338a87f6a00d38dfafb944` |
| Preflight handoff | `ae40017f` (historical) |
| Integration HEAD | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| Source HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| Remote main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| This handoff commit | *(filled after publish)* |

## 24. Fichiers Product préservés
78/78 freeze hash match. No Product edit this cycle.

## 25. G-IB préservé
Allowlist `importBoundaries.test.ts` hash unchanged vs freeze (`d0b513bab345cc83…`). G-IB remains CLOSED.

## 26. Fake / Real
- Applicable: YES (authority boundaries covered by Fake tests)
- Entry: DETERMINISTIC PROVEN at tested scope (historical)
- Expected after this cycle: **DOCUMENTARY SEMANTIC REVIEW READY**
- OUT: new REAL proof; E2E REAL PROVEN; HQA PASS; P6 PASS; runtime v3 ADOPTED
- GO REAL: **NO**
- DETERMINISTIC PROVEN ≠ READY FOR REAL

## 27. Dette / exit
- Debt: digest sync deferred until ChatGPT approves content
- Exit proof this cycle: R1–R4 corrected; authority invariants preserved; no false maturity; complete doc diffs; handoff published
- Next capacity: Git integration of V3-F05 candidate **after** digest approval + distinct GO

## 28. Gates Morris
| Gate | State |
|---|---|
| G-IB | CLOSED |
| G-DIGEST | **PENDING CONTENT APPROVAL** (not closed; digests not promoted) |
| Product commit/push/PR | NOT AUTHORIZED |
| HQA / REAL | NOT AUTHORIZED |

## 29. Verdict

**R1-R4 DOCUMENTARY AMENDMENTS COMPLETE — SEMANTIC CONTENT READY FOR CHATGPT REVIEW — G-DIGEST PENDING APPROVAL**

### Instruction ChatGPT
Lire ce Review Handoff distant au SHA publié. Contrôler R1 classification F04/F05/F08/F09/F10; R2 chemins d'autorité; R3 restart/process-local; R4 test oracle semantics; cohérence candidat; contenu complet des sections; labels candidat/main; manifest inchangé; digests non promus; Product dirty préservé; absence d'effets interdits.

Après revue sémantique: recommander explicitement **APPROVE / AMEND / STOP**.

Ne pas générer automatiquement de prompt commit/push/PR. Ne pas annoncer G-DIGEST CLOSED / DIGESTS PROMOTED / FULL CI PASS / READY FOR PRODUCT COMMIT / HQA READY.
