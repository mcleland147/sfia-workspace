# ChatGPT Review Pack FULL — P6 Living Reference Final Semantic Corrections S1 / S2

## 1. Horodatage
- UTC: `2026-10-17T15:07:59Z`
- Local: `2026-10-17 17:07 CEST`
- Cycle: `STUDIO-P6-GENERIC-EXECUTION-LIVING-REFERENCE-SEMANTIC-CLOSURE-02`
- Parent: `STUDIO-P6-GENERIC-EXECUTION-LIVING-REFERENCE-AMENDMENTS-01`
- Parent handoff: `3c1b5c83ad76a37bf912f24f3d1ded8fda34ade8` (blob `c2243b81871e463b16adb85e50c9ba0bdbe958c3`) — verified local/remote
- Type: 8 — Delivery / implémentation documentaire
- Profil: Critical

## 2. Repo / branche / HEAD / base
- Repo: `mcleland147/sfia-workspace`
- Integration: `/Users/morris/Projects/sfia-workspace-p6-generic-execution-integration-consolidation` · `integration/sfia-studio-p6-generic-execution-consolidation` · HEAD `896ff59c704bfa76df1da1a51705aaf948c1cf0c`
- `origin/main`: `896ff59c704bfa76df1da1a51705aaf948c1cf0c` / remote `896ff59c704bfa76df1da1a51705aaf948c1cf0c`
- Source: `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` · `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` · `b4c1d86211d372f7b0685be7ce8a5ba7de598e37`
- Parent review-handoff tip (pre-publish): `3c1b5c83ad76a37bf912f24f3d1ded8fda34ade8`

## 3. Git Truth initial / final

### Initial
- HEAD / main match expected `896ff59c`
- Parent handoff SHA/blob match expected
- Staged Product: empty
- Product freeze baseline: 78/78 match prior R1R4 freeze
- Docs baseline digests (pre-S1S2): 03=`854b94741d7412ec` 04=`7a1689f3b1cb3e9e` 06=`179057f68b7a363d` 07=`6a648b21c7445423`
- Frozen keep: 02/08/09/manifest/README unchanged this cycle

### Final
- Product 78/78 freeze MATCH (unchanged)
- Modified only vols 03/04/06/07
- Vols 02/08/09 + README + manifest KEEP OK
- Source worktree HEAD + 78 porcelain preserved
- Staged Product empty
- No Product commit/push

## 4. Décision Morris consommée
**GO P6 LIVING REFERENCE — FINAL SEMANTIC CORRECTIONS S1–S2.**

Authorized: documentary S1/S2 on vols 03/04/06/07 only; Review Pack FULL; L3 handoff.
Not done: Product code/tests; digests; manifest; R1/R4 reopen; HQA; REAL; Product git.

## 5. Sources canoniques
- Convergence Build Doctrine / Roadmap / product-completion / P6 QA / sfia-v3-framing (read)
- Cycle 8 CKC synthetic (read)
- Living Reference README + manifest (FROZEN)
- Volumes 02–09 (03/04/06/07 amended; 02/08/09 frozen this cycle)
- Parent handoff `3c1b5c83` (R1–R4)
- M-HD-01 handoff / HD11: `p6.mHd01.genericMissionHumanDecision.d0.test.ts` HD11 + `verifyGenericMissionHumanDecisionForPrepare.ts` (`HD_REFUSED`, `HD_AMEND_REQUIRES_NEW_PRESENTATION`)
- Historical M-HD tip reference `86ad2dab` (HD11 scenario)

## 6. Convergence Pre-check
- Capacity V3-F05; deps F02/F06/F11/F12/F14/F15; Milestone P6
- G-IB CLOSED; R1/R4 ACCEPTED; R2/R3 S1–S2 addressed this cycle; G-DIGEST OPEN
- P6 PASS NOT CLAIMED; runtime v3 NON ADOPTED
- Assets KEEP; Living Reference ADAPT; Manifest FREEZE
- Gap: two authority/restart documentary formulations
- Exit: S1/S2 corrected → ChatGPT final content review → digest GO distinct

## 7. Cycle 8 / Critical
CKC synthetic candidate. Semantic closure on authority + restart resume. Critical: incorrect HD/PREPARE wording could invent authority.

## 8. Capacité / milestone
V3-F05 / P6 Global Integrated Product QA — documentary gate only.

## 9. Diagnostic S1
**Problème:** vol 04 (and F08) presented Accept/Refuse/Amend as one chain into verify→PREPARE, implying Refuse/Amend could prepare.
**Correction:** three explicit branches — Accept (only prepare path after verify), Refuse (`HD_REFUSED`), Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`). Accept ≠ Execute.
**Files:** 03 F08, 04 dual graph, 07 invariant `INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD`.

## 10. Diagnostic S2
**Problème:** vol 06 could be read as “offer lost ⇒ PREPARE impossible without new offer.”
**Correction:** four situations A offer / B UI / C durable HD / D PREPARE resume. HD11 proves accepted HD + decisionId + analysis can PREPARE after offer clear + new runtime same SQLite. UI not auto-rehydrated. No global RESTART SAFE.
**File:** 06 restart matrix + section.

## 11. Preuves OA / M-HD
- `verifyGenericMissionHumanDecisionForPrepare.ts` — status gates: accepted only; refused→`HD_REFUSED`; amended→`HD_AMEND_REQUIRES_NEW_PRESENTATION`; superseded/revoked fail-closed
- HD11 — `p6.mHd01.genericMissionHumanDecision.d0.test.ts` lines ~539–570: seal accept → `clearPendingGenericPrepareOffer` → `bootW2Runtime` same SQLite → `getHumanDecision` → `prepareGenericExecutionContractDraft` with `decisionId` → ok; `decisionRefs` bound
- DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE; NOT UI E2E; NOT REAL/HQA

## 12. Matrice statut HumanDecision (S1)

| Disposition | HD status (Product) | PREPARE structural | Code |
|---|---|---|---|
| Accept | `accepted` + verified applicable mission-bound non-superseded | Allowed iff all gates | verify + prepare |
| Refuse | `refused` | Forbidden | `HD_REFUSED` |
| Amend | `amended` | Forbidden until new accepted HD | `HD_AMEND_REQUIRES_NEW_PRESENTATION` |
| Superseded / revoked / other | fail-closed | Forbidden | `HD_SUPERSEDED` / `HD_REVOKED` / `HD_REFUSED` |

Accept alone ≠ Inspection ≠ Confirmation ≠ Authorization ≠ Execute.

## 13. Matrice reprise après restart (S2)

| Situation | Meaning |
|---|---|
| A Offer process-local | Lost; no auto-reconstruct carrier |
| B UI continuity | none/stale honest; no PresentedMission store |
| C Durable OA HD | Recoverable from SQLite; still verified |
| D PREPARE resume | Accepted verified HD may PREPARE without offer when Product supplies decisionId+context (HD11); offer absence ≠ universal ban; HD presence ≠ universal auth |

## 14–17. Diffs COMPLETS + sections complètes

### Diffstat (4 files vs HEAD; cumulative R1–R4 + S1/S2)
```
.../03-end-to-end-flow-catalog.md                  | 46 +++++++++++++++-------
 .../04-dependency-impact-map.md                    | 36 +++++++++++++++++
 .../06-persistence-restart-and-recovery.md         | 25 +++++++++++-
 .../07-authority-invariants-and-failure-modes.md   | 21 ++++++++++
 4 files changed, 111 insertions(+), 17 deletions(-)
```

### F08 (section complète post-S1)
```markdown
## F08 — EC PREPARE
- **Trigger (legacy M3):** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
- **Trigger (Generic PREPARE — AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** F2 chat-first GO / Nora tool solicitation (F04) / adjacent F05 hand-off → Product `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
- **Mission qualification:** Product readiness (`assessGenericMissionPrepareReadiness`) + authoritative Materiality CURRENT (`resolveAuthoritativeProductMateriality`). Materiality UNKNOWN → fail-closed (no silent NON_STRUCTURAL).
- **Chemin A — STRUCTURAL (M-HD-01/02):** structural signals (architecture/security/data/irreversible/…) or HD-required materiality → remember CURRENT offer for Pilot seal (process-local) → Pilot disposition on sealed presentation. **Three distinct branches (not a single Accept/Refuse/Amend→PREPARE chain):**
  - **Accept** → durable OA HumanDecision `accepted` with `genericMissionContext` / `presentationDigest` → `verifyGenericMissionHumanDecisionForPrepare` (DecisionBasis, identity/mission/digest, CURRENT applicability, non-superseded) → structural PREPARE with verified `decisionRefs` **iff** all gates pass. Accept alone ≠ Inspection ≠ Confirmation ≠ Authorization ≠ Execute.
  - **Refuse** → durable refused HD recordable → PREPARE **forbidden** (`HD_REFUSED`); no implicit Authorization; no Attempt.
  - **Amend** → new presentation / re-seal required → prior presentation does **not** unlock PREPARE (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new **accepted** applicable HD exists.
  - Structural offer alone ≠ PREPARE admission. Historical HD without mission binding ≠ unlock. Only an **accepted**, mission-bound, applicable, verified, non-superseded HD opens structural PREPARE.
- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
- **S8 project context (D-ER-17):** absence of active CycleInstance does **not** alone block Generic PREPARE; **no invented CycleInstance**.
- **Fidelity (PR #586 + candidate):** pending offer may retain documentary `missionEffects`; exact capability identities only; Nora path candidates non-authoritative until Product resolve.
- **Paths:** `prepareGenericExecutionContractDraft.ts`, `resolveAuthoritativeProductMateriality.ts`, `recordGenericMissionHumanDecision.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `prepareAndResolveM3ProductPath` (legacy), `lib/oa/execution-contract/**`
- **Invariant:** cannot expand DecisionBasis / sealed WHAT; PREPARE ≠ AUTHORIZE ≠ EXECUTE; no ExecutionAttempt on PREPARE
- **Proof:** G-D4 / materiality / M-HD / DER16 / Option1 suites — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
- **Status:** COMPLETE domain (legacy); Generic PREPARE AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION
```

### Volume 04 Dual admission (section complète post-S1)
```markdown
## Dual Generic PREPARE admission paths (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

```
Nora tool (F04) / F2 analysis / F05 adjacent hand-off
  → assessGenericMissionPrepareReadiness + resolveAuthoritativeProductMateriality
      ├─ STRUCTURAL / HD-required
      │    → remember CURRENT offer (process-local)
      │    → Pilot disposition on sealed presentation (UI)
      │         ├─ ACCEPT
      │         │    → OA HumanDecision status=accepted (durable genericMissionContext)
      │         │    → verifyGenericMissionHumanDecisionForPrepare
      │         │         (basis / identity / mission / digest / CURRENT / non-superseded)
      │         │    → solicitGenericExecutionPrepare (decisionRefs verified)
      │         │    → F09 inspect → Confirm → Authorize → F10 Execute
      │         │         (PREPARE ≠ Inspect ≠ Confirm ≠ Authorize ≠ Execute)
      │         ├─ REFUSE
      │         │    → OA HumanDecision refused (recordable)
      │         │    → PREPARE forbidden (HD_REFUSED)
      │         │    → no Authorization / no Attempt
      │         └─ AMEND
      │              → HD_AMEND_REQUIRES_NEW_PRESENTATION
      │              → re-present / re-seal required
      │              → PREPARE forbidden until new accepted applicable HD
      └─ NON_STRUCTURAL CURRENT (Option 1 / G-D4)
           → solicitGenericExecutionPrepare (decisionRefs=[])
           → F09 inspect → Confirm → Authorize → F10 Execute
      UNKNOWN materiality / structural without accepted+verified HD → FAIL-CLOSED
```

OA = authority of record. W2 = Product coordination. Nora = cognition/recommendation only. Cursor = controlled execution under Authorization.

**Structural PREPARE gate (S1):** only an **accepted**, mission-bound, applicable, verified, non-superseded HumanDecision opens Chemin A PREPARE. Refuse and Amend are **not** admissible prepare paths. Accept alone is not Execute authority.

```

### Volume 06 restart (matrix rows + section complète post-S2)
```markdown
| Pending Generic PREPARE offer (P6-HQA-F05-GD4-01 + M-HD carrier) | none | UI re-offer / re-present as needed | **offer map lost** (process-local) | no silent invent; no stale-offer reuse; offer loss ≠ universal PREPARE ban (see HD11) |
| Generic Mission HumanDecision (M-HD-01/02) | `oa_human_decisions` (+ DecisionBasis / genericMissionContext / presentationDigest) | decision list + verify path | process-local offer/presentation carrier lost | HD remains durable authority **record**; accepted+verified HD may resume PREPARE without restoring offer (HD11) |
| Generic Mission presentation (UI seal) | none as Presentation store | none / stale if client held digest without reconstitutable offer | **presentation carrier lost** | UI fail-closed stale; no PresentedMission store invented |
| HD recorded (general) | `oa_human_decisions` | decision list | proposal may be gone | HD remains authority record |

## Generic Mission / Generic PREPARE restart (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

Four situations must stay distinct (S2 / M-HD-01 HD11):

| Situation | Durability | Restart meaning |
|---|---|---|
| A. Pending Generic PREPARE offer | Process-local only | Lost at restart; **no** automatic reconstruction of the presentation carrier |
| B. UI continuity | Process-local carrier | Absent offer may prevent immediate reconstitution of the Pilot card / sealed presentation UI → honest `none` / `stale` per existing continuity contract; **no** durable PresentedMission store invented |
| C. Durable OA HumanDecision | Durable OA (`oa_human_decisions`) | Recoverable after restart from Product SQLite; identity + DecisionBasis retained; still subject to CURRENT applicability / digest / supersession verify |
| D. PREPARE resume | Uses durable HD + Product/OA gates | An **accepted**, mission-bound, applicable, verified HD may resume structural PREPARE **without** restoring the process-local offer when the Product path supplies `decisionId` + coherent mission analysis / project context and all gates pass (HD11). Absence of offer is **not** by itself a universal PREPARE refusal. Presence of HD alone is **not** a universal Authorization |

**Mandatory PREPARE-resume checks (unchanged Product/OA):** project; mission; identity; DecisionBasis; digest; status `accepted`; non-superseded; materiality/currentness; other Product/OA gates via `verifyGenericMissionHumanDecisionForPrepare` / `prepareGenericExecutionContractDraft`.

**Never invent on restart:** new HumanDecision; new presentation; new mission; new CycleInstance; implicit Authorization.

**Proof:** HD11 (`p6.mHd01.genericMissionHumanDecision.d0.test.ts`) — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (clear offer → new runtime same SQLite → load HD → PREPARE with `decisionId` + analysis). Does **not** prove automatic UI rehydration.

**Not claimed:** global RESTART SAFE; UI automatically rehydrated; unconditional PREPARE after restart; REAL/HQA restart proven. No invented recovery mechanism beyond candidate W2/OA paths.

```

### Volume 07 invariants + dual summary (post-S1)
```markdown
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

```

### S1/S2-ONLY DIFF — `03-end-to-end-flow-catalog.md` (post-R1R4 → post-S1S2)

```diff
--- a/03-end-to-end-flow-catalog.md (post-R1R4)
+++ b/03-end-to-end-flow-catalog.md (S1S2)
@@ -80,7 +80,11 @@
 - **Trigger (legacy M3):** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
 - **Trigger (Generic PREPARE — AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** F2 chat-first GO / Nora tool solicitation (F04) / adjacent F05 hand-off → Product `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
 - **Mission qualification:** Product readiness (`assessGenericMissionPrepareReadiness`) + authoritative Materiality CURRENT (`resolveAuthoritativeProductMateriality`). Materiality UNKNOWN → fail-closed (no silent NON_STRUCTURAL).
-- **Chemin A — STRUCTURAL (M-HD-01/02):** structural signals (architecture/security/data/irreversible/…) or HD-required materiality → remember CURRENT offer for Pilot seal (process-local) → Accept/Refuse/Amend → durable OA HumanDecision with `genericMissionContext` / `presentationDigest` → `verifyGenericMissionHumanDecisionForPrepare` → PREPARE with verified `decisionRefs`. Structural offer alone ≠ PREPARE admission. Historical HD without mission binding ≠ unlock.
+- **Chemin A — STRUCTURAL (M-HD-01/02):** structural signals (architecture/security/data/irreversible/…) or HD-required materiality → remember CURRENT offer for Pilot seal (process-local) → Pilot disposition on sealed presentation. **Three distinct branches (not a single Accept/Refuse/Amend→PREPARE chain):**
+  - **Accept** → durable OA HumanDecision `accepted` with `genericMissionContext` / `presentationDigest` → `verifyGenericMissionHumanDecisionForPrepare` (DecisionBasis, identity/mission/digest, CURRENT applicability, non-superseded) → structural PREPARE with verified `decisionRefs` **iff** all gates pass. Accept alone ≠ Inspection ≠ Confirmation ≠ Authorization ≠ Execute.
+  - **Refuse** → durable refused HD recordable → PREPARE **forbidden** (`HD_REFUSED`); no implicit Authorization; no Attempt.
+  - **Amend** → new presentation / re-seal required → prior presentation does **not** unlock PREPARE (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new **accepted** applicable HD exists.
+  - Structural offer alone ≠ PREPARE admission. Historical HD without mission binding ≠ unlock. Only an **accepted**, mission-bound, applicable, verified, non-superseded HD opens structural PREPARE.
 - **Chemin B — NON_STRUCTURAL (Option 1 / G-D4):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
 - **S8 project context (D-ER-17):** absence of active CycleInstance does **not** alone block Generic PREPARE; **no invented CycleInstance**.
 - **Fidelity (PR #586 + candidate):** pending offer may retain documentary `missionEffects`; exact capability identities only; Nora path candidates non-authoritative until Product resolve.
```

### FULL DIFF vs HEAD — `03-end-to-end-flow-catalog.md` (includes R1–R4 + S1/S2)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 99ec0008..13e01c2e 100644
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
@@ -77,21 +77,37 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status:** COMPLETE durable Work path (deterministic); First Framing START conversational path DETERMINISTIC at tested scope; other Lifecycle transitions Studio-preserved; ZERO REAL claim

 ## F08 — EC PREPARE
-- **Trigger:** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
-- **Paths:** `prepareAndResolveM3ProductPath` → `lib/oa/execution-contract/**`
-- **Invariant:** cannot expand DecisionBasis WHAT; Product UI seals N2 Pilot authority (legacy omit → MORRIS)
-- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (front-door oracle)
+- **Trigger (legacy M3):** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
+- **Trigger (Generic PREPARE — AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** F2 chat-first GO / Nora tool solicitation (F04) / adjacent F05 hand-off → Product `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
+- **Mission qualification:** Product readiness (`assessGenericMissionPrepareReadiness`) + authoritative Materiality CURRENT (`resolveAuthoritativeProductMateriality`). Materiality UNKNOWN → fail-closed (no silent NON_STRUCTURAL).
+- **Chemin A — STRUCTURAL (M-HD-01/02):** structural signals (architecture/security/data/irreversible/…) or HD-required materiality → remember CURRENT offer for Pilot seal (process-local) → Pilot disposition on sealed presentation. **Three distinct branches (not a single Accept/Refuse/Amend→PREPARE chain):**
+  - **Accept** → durable OA HumanDecision `accepted` with `genericMissionContext` / `presentationDigest` → `verifyGenericMissionHumanDecisionForPrepare` (DecisionBasis, identity/mission/digest, CURRENT applicability, non-superseded) → structural PREPARE with verified `decisionRefs` **iff** all gates pass. Accept alone ≠ Inspection ≠ Confirmation ≠ Authorization ≠ Execute.
+  - **Refuse** → durable refused HD recordable → PREPARE **forbidden** (`HD_REFUSED`); no implicit Authorization; no Attempt.
+  - **Amend** → new presentation / re-seal required → prior presentation does **not** unlock PREPARE (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new **accepted** applicable HD exists.
+  - Structural offer alone ≠ PREPARE admission. Historical HD without mission binding ≠ unlock. Only an **accepted**, mission-bound, applicable, verified, non-superseded HD opens structural PREPARE.
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

### S1/S2-ONLY DIFF — `04-dependency-impact-map.md` (post-R1R4 → post-S1S2)

```diff
--- a/04-dependency-impact-map.md (post-R1R4)
+++ b/04-dependency-impact-map.md (S1S2)
@@ -45,18 +45,31 @@
   → assessGenericMissionPrepareReadiness + resolveAuthoritativeProductMateriality
       ├─ STRUCTURAL / HD-required
       │    → remember CURRENT offer (process-local)
-      │    → Pilot seal Accept/Refuse/Amend (UI)
-      │    → OA HumanDecision (durable genericMissionContext)
-      │    → verifyGenericMissionHumanDecisionForPrepare
-      │    → solicitGenericExecutionPrepare (decisionRefs verified)
-      │    → F09 inspect → Confirm → Authorize → F10 Execute
+      │    → Pilot disposition on sealed presentation (UI)
+      │         ├─ ACCEPT
+      │         │    → OA HumanDecision status=accepted (durable genericMissionContext)
+      │         │    → verifyGenericMissionHumanDecisionForPrepare
+      │         │         (basis / identity / mission / digest / CURRENT / non-superseded)
+      │         │    → solicitGenericExecutionPrepare (decisionRefs verified)
+      │         │    → F09 inspect → Confirm → Authorize → F10 Execute
+      │         │         (PREPARE ≠ Inspect ≠ Confirm ≠ Authorize ≠ Execute)
+      │         ├─ REFUSE
+      │         │    → OA HumanDecision refused (recordable)
+      │         │    → PREPARE forbidden (HD_REFUSED)
+      │         │    → no Authorization / no Attempt
+      │         └─ AMEND
+      │              → HD_AMEND_REQUIRES_NEW_PRESENTATION
+      │              → re-present / re-seal required
+      │              → PREPARE forbidden until new accepted applicable HD
       └─ NON_STRUCTURAL CURRENT (Option 1 / G-D4)
            → solicitGenericExecutionPrepare (decisionRefs=[])
            → F09 inspect → Confirm → Authorize → F10 Execute
-      UNKNOWN materiality / structural without verified HD → FAIL-CLOSED
+      UNKNOWN materiality / structural without accepted+verified HD → FAIL-CLOSED
 ```

 OA = authority of record. W2 = Product coordination. Nora = cognition/recommendation only. Cursor = controlled execution under Authorization.
+
+**Structural PREPARE gate (S1):** only an **accepted**, mission-bound, applicable, verified, non-superseded HumanDecision opens Chemin A PREPARE. Refuse and Amend are **not** admissible prepare paths. Accept alone is not Execute authority.

 ## DEP edges (stable IDs)

```

### FULL DIFF vs HEAD — `04-dependency-impact-map.md` (includes R1–R4 + S1/S2)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index 394f3663..fdcedba7 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -38,6 +38,39 @@ LifecycleSurface / lifecyclePresentation
   → does not alone authorize materialization
 ```

+## Dual Generic PREPARE admission paths (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)
+
+```
+Nora tool (F04) / F2 analysis / F05 adjacent hand-off
+  → assessGenericMissionPrepareReadiness + resolveAuthoritativeProductMateriality
+      ├─ STRUCTURAL / HD-required
+      │    → remember CURRENT offer (process-local)
+      │    → Pilot disposition on sealed presentation (UI)
+      │         ├─ ACCEPT
+      │         │    → OA HumanDecision status=accepted (durable genericMissionContext)
+      │         │    → verifyGenericMissionHumanDecisionForPrepare
+      │         │         (basis / identity / mission / digest / CURRENT / non-superseded)
+      │         │    → solicitGenericExecutionPrepare (decisionRefs verified)
+      │         │    → F09 inspect → Confirm → Authorize → F10 Execute
+      │         │         (PREPARE ≠ Inspect ≠ Confirm ≠ Authorize ≠ Execute)
+      │         ├─ REFUSE
+      │         │    → OA HumanDecision refused (recordable)
+      │         │    → PREPARE forbidden (HD_REFUSED)
+      │         │    → no Authorization / no Attempt
+      │         └─ AMEND
+      │              → HD_AMEND_REQUIRES_NEW_PRESENTATION
+      │              → re-present / re-seal required
+      │              → PREPARE forbidden until new accepted applicable HD
+      └─ NON_STRUCTURAL CURRENT (Option 1 / G-D4)
+           → solicitGenericExecutionPrepare (decisionRefs=[])
+           → F09 inspect → Confirm → Authorize → F10 Execute
+      UNKNOWN materiality / structural without accepted+verified HD → FAIL-CLOSED
+```
+
+OA = authority of record. W2 = Product coordination. Nora = cognition/recommendation only. Cursor = controlled execution under Authorization.
+
+**Structural PREPARE gate (S1):** only an **accepted**, mission-bound, applicable, verified, non-superseded HumanDecision opens Chemin A PREPARE. Refuse and Amend are **not** admissible prepare paths. Accept alone is not Execute authority.
+
 ## DEP edges (stable IDs)

 | ID | From | To | Why |
@@ -52,6 +85,9 @@ LifecycleSurface / lifecyclePresentation
 | DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn |
 | DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-INTENT | deterministic structured analysis |
 | DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity |
+| DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt |
+| DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural PREPARE |
+| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs |

 ## Sample impact analysis A — `activeCycleGovernedContinuation.ts`

```

### S1/S2-ONLY DIFF — `06-persistence-restart-and-recovery.md` (post-R1R4 → post-S1S2)

```diff
--- a/06-persistence-restart-and-recovery.md (post-R1R4)
+++ b/06-persistence-restart-and-recovery.md (S1S2)
@@ -42,9 +42,9 @@
 | Active cycle | Cycle + LPS pointer | lifecycle projection | proposals may be empty | ok |
 | Recommendation | usually ephemeral | may recompute | yes | Recommendation ≠ HD |
 | Proposal pending | epistemic markers maybe | subject reconstruct or requalify | **Proposal map lost** | no silent invent |
-| Pending Generic PREPARE offer (P6-HQA-F05-GD4-01 + M-HD carrier) | none | must re-offer / requalify | **offer map lost** (process-local) | no silent invent; no stale-offer reuse; structural carrier ≠ PREPARE admission |
-| Generic Mission HumanDecision (M-HD-01/02) | `oa_human_decisions` (+ DecisionBasis / genericMissionContext / presentationDigest) | decision list + verify path | process-local offer/presentation carrier lost | HD remains durable authority **record**; applicability still re-checked before PREPARE |
-| Generic Mission presentation (UI seal) | none as Presentation store | none / stale if client held digest without reconstitutable offer | **presentation carrier lost** | fail-closed stale; never invent PREPARE from durable HD alone |
+| Pending Generic PREPARE offer (P6-HQA-F05-GD4-01 + M-HD carrier) | none | UI re-offer / re-present as needed | **offer map lost** (process-local) | no silent invent; no stale-offer reuse; offer loss ≠ universal PREPARE ban (see HD11) |
+| Generic Mission HumanDecision (M-HD-01/02) | `oa_human_decisions` (+ DecisionBasis / genericMissionContext / presentationDigest) | decision list + verify path | process-local offer/presentation carrier lost | HD remains durable authority **record**; accepted+verified HD may resume PREPARE without restoring offer (HD11) |
+| Generic Mission presentation (UI seal) | none as Presentation store | none / stale if client held digest without reconstitutable offer | **presentation carrier lost** | UI fail-closed stale; no PresentedMission store invented |
 | HD recorded (general) | `oa_human_decisions` | decision list | proposal may be gone | HD remains authority record |

 | EC prepared | `oa_execution_contracts` | EC projection | | |
@@ -65,15 +65,22 @@

 ## Generic Mission / Generic PREPARE restart (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

-| Fact | Durability | Restart meaning |
+Four situations must stay distinct (S2 / M-HD-01 HD11):
+
+| Situation | Durability | Restart meaning |
 |---|---|---|
-| A. Pending Generic PREPARE offer | Process-local only | Lost; must re-qualify / re-offer; no fictional reconstruction |
-| B. Generic Mission HumanDecision | Durable OA | Identity + DecisionBasis retained; still subject to CURRENT applicability / digest verify |
-| C. Sealed presentation / digest | Sealed into HD basis when recorded; UI carrier process-local | Process-local carrier does **not** become durable merely because HD is durable |
-| D. Restart composition | — | Durable HD ≠ CURRENT offer available; absent offer ≠ PREPARE authorized; re-examination required; no artificial HD; no implicit Authorization |
-| E. Supersession / stale | — | Do not reuse obsolete presentationDigest / fingerprint against a changed mission; verify against CURRENT sealed presentation |
+| A. Pending Generic PREPARE offer | Process-local only | Lost at restart; **no** automatic reconstruction of the presentation carrier |
+| B. UI continuity | Process-local carrier | Absent offer may prevent immediate reconstitution of the Pilot card / sealed presentation UI → honest `none` / `stale` per existing continuity contract; **no** durable PresentedMission store invented |
+| C. Durable OA HumanDecision | Durable OA (`oa_human_decisions`) | Recoverable after restart from Product SQLite; identity + DecisionBasis retained; still subject to CURRENT applicability / digest / supersession verify |
+| D. PREPARE resume | Uses durable HD + Product/OA gates | An **accepted**, mission-bound, applicable, verified HD may resume structural PREPARE **without** restoring the process-local offer when the Product path supplies `decisionId` + coherent mission analysis / project context and all gates pass (HD11). Absence of offer is **not** by itself a universal PREPARE refusal. Presence of HD alone is **not** a universal Authorization |

-**Not claimed:** global RESTART SAFE for Generic PREPARE. Candidate recovery paths are those implemented in W2 continuity readers — no invented recovery mechanism.
+**Mandatory PREPARE-resume checks (unchanged Product/OA):** project; mission; identity; DecisionBasis; digest; status `accepted`; non-superseded; materiality/currentness; other Product/OA gates via `verifyGenericMissionHumanDecisionForPrepare` / `prepareGenericExecutionContractDraft`.
+
+**Never invent on restart:** new HumanDecision; new presentation; new mission; new CycleInstance; implicit Authorization.
+
+**Proof:** HD11 (`p6.mHd01.genericMissionHumanDecision.d0.test.ts`) — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (clear offer → new runtime same SQLite → load HD → PREPARE with `decisionId` + analysis). Does **not** prove automatic UI rehydration.
+
+**Not claimed:** global RESTART SAFE; UI automatically rehydrated; unconditional PREPARE after restart; REAL/HQA restart proven. No invented recovery mechanism beyond candidate W2/OA paths.

 ## Additional stores (harvest)

```

### FULL DIFF vs HEAD — `06-persistence-restart-and-recovery.md` (includes R1–R4 + S1/S2)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index e11a9db2..4dd9bed1 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -42,8 +42,10 @@ Do **not** treat Session items as an exhaustive Pilot transcript. Do **not** cla
 | Active cycle | Cycle + LPS pointer | lifecycle projection | proposals may be empty | ok |
 | Recommendation | usually ephemeral | may recompute | yes | Recommendation ≠ HD |
 | Proposal pending | epistemic markers maybe | subject reconstruct or requalify | **Proposal map lost** | no silent invent |
-| Pending Generic PREPARE offer (P6-HQA-F05-GD4-01) | none | must re-offer / requalify | **offer map lost** (process-local) | no silent invent; no stale-offer reuse |
-| HD recorded | `oa_human_decisions` | decision list | proposal may be gone | HD remains authority record |
+| Pending Generic PREPARE offer (P6-HQA-F05-GD4-01 + M-HD carrier) | none | UI re-offer / re-present as needed | **offer map lost** (process-local) | no silent invent; no stale-offer reuse; offer loss ≠ universal PREPARE ban (see HD11) |
+| Generic Mission HumanDecision (M-HD-01/02) | `oa_human_decisions` (+ DecisionBasis / genericMissionContext / presentationDigest) | decision list + verify path | process-local offer/presentation carrier lost | HD remains durable authority **record**; accepted+verified HD may resume PREPARE without restoring offer (HD11) |
+| Generic Mission presentation (UI seal) | none as Presentation store | none / stale if client held digest without reconstitutable offer | **presentation carrier lost** | UI fail-closed stale; no PresentedMission store invented |
+| HD recorded (general) | `oa_human_decisions` | decision list | proposal may be gone | HD remains authority record |

 | EC prepared | `oa_execution_contracts` | EC projection | | |
 | Inspected | attestations | | | |
@@ -61,6 +63,25 @@ Do **not** treat Session items as an exhaustive Pilot transcript. Do **not** cla
 - Proposal: not durable; Pilot may need new Proposal turn.
 - Never invent HumanDecision on restart.

+## Generic Mission / Generic PREPARE restart (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)
+
+Four situations must stay distinct (S2 / M-HD-01 HD11):
+
+| Situation | Durability | Restart meaning |
+|---|---|---|
+| A. Pending Generic PREPARE offer | Process-local only | Lost at restart; **no** automatic reconstruction of the presentation carrier |
+| B. UI continuity | Process-local carrier | Absent offer may prevent immediate reconstitution of the Pilot card / sealed presentation UI → honest `none` / `stale` per existing continuity contract; **no** durable PresentedMission store invented |
+| C. Durable OA HumanDecision | Durable OA (`oa_human_decisions`) | Recoverable after restart from Product SQLite; identity + DecisionBasis retained; still subject to CURRENT applicability / digest / supersession verify |
+| D. PREPARE resume | Uses durable HD + Product/OA gates | An **accepted**, mission-bound, applicable, verified HD may resume structural PREPARE **without** restoring the process-local offer when the Product path supplies `decisionId` + coherent mission analysis / project context and all gates pass (HD11). Absence of offer is **not** by itself a universal PREPARE refusal. Presence of HD alone is **not** a universal Authorization |
+
+**Mandatory PREPARE-resume checks (unchanged Product/OA):** project; mission; identity; DecisionBasis; digest; status `accepted`; non-superseded; materiality/currentness; other Product/OA gates via `verifyGenericMissionHumanDecisionForPrepare` / `prepareGenericExecutionContractDraft`.
+
+**Never invent on restart:** new HumanDecision; new presentation; new mission; new CycleInstance; implicit Authorization.
+
+**Proof:** HD11 (`p6.mHd01.genericMissionHumanDecision.d0.test.ts`) — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (clear offer → new runtime same SQLite → load HD → PREPARE with `decisionId` + analysis). Does **not** prove automatic UI rehydration.
+
+**Not claimed:** global RESTART SAFE; UI automatically rehydrated; unconditional PREPARE after restart; REAL/HQA restart proven. No invented recovery mechanism beyond candidate W2/OA paths.
+
 ## Additional stores (harvest)

 | Store | Role | Notes |
```

### S1/S2-ONLY DIFF — `07-authority-invariants-and-failure-modes.md` (post-R1R4 → post-S1S2)

```diff
--- a/07-authority-invariants-and-failure-modes.md (post-R1R4)
+++ b/07-authority-invariants-and-failure-modes.md (S1S2)
@@ -32,16 +32,21 @@
 | INV-AUTH-NE-EXEC | Authorization ≠ Execution | governedExecute Select/Start | projectScopedCursorSelection |
 | INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 |
 | INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 |
+| INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | STRUCTURAL PREPARE requires **accepted**, applicable, verified, mission-bound, non-superseded HD — Refuse (`HD_REFUSED`) and Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) are not prepare paths; Accept alone ≠ Execute | verifyGenericMissionHumanDecisionForPrepare | mHd01 (incl. refuse/amend cases) / DER16 |

 ## Dual admission paths — authority summary (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

-**Chemin A — STRUCTURAL:** mission signals / HD-required materiality → process-local presentation carrier → Pilot HumanDecision → verify applicability+digest → PREPARE (refs verified) → inspect → Confirm (if required) → Authorize → Execute. No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission.
+**Chemin A — STRUCTURAL:** mission signals / HD-required materiality → process-local presentation carrier → Pilot disposition:
+- **Accept** → durable HD `accepted` → verify basis/identity/mission/digest/CURRENT/non-superseded → PREPARE (refs verified) → inspect → Confirm (if required) → Authorize → Execute.
+- **Refuse** → HD refused → PREPARE forbidden (`HD_REFUSED`); no Authorization; no Attempt.
+- **Amend** → new presentation required → PREPARE forbidden (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new accepted applicable HD.
+No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission. Accept alone ≠ Execute.

 **Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed.

 **Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN.

-**CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: durable HD ≠ CURRENT offer (see vol 06).
+**CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: process-local offer loss ≠ universal PREPARE ban when durable accepted HD remains verifiable (see vol 06 / HD11).

 ## Failure modes (selected)

```

### FULL DIFF vs HEAD — `07-authority-invariants-and-failure-modes.md` (includes R1–R4 + S1/S2)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index eba27ccd..bee84335 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -26,6 +26,27 @@
 | INV-NO-SILENT-HD | No silent/auto HumanDecision | recordDecision only on Pilot action | bridge T2 |
 | INV-NO-V3-ADOPT | No automatic runtime v3 adoption | docs + absence of adoption flags | this corpus |
 | INV-APPLICABILITY-NE-AUTHORITY | Artifact APPLICABLE ≠ execution authorized | activeCycleGovernedContinuation bridge | bridge CORR-01 |
+| INV-OFFER-NE-AUTH | Pending Generic PREPARE offer ≠ Authorization | pendingGenericPrepareOfferStore + prepare gates | DER16 / M-HD / G-D4 |
+| INV-INSPECT-NE-CONFIRM | Inspection ≠ Confirmation | unified exam + confirm services | Pass03/04 UIC |
+| INV-CONFIRM-NE-AUTH | Confirmation ≠ Authorization | authorize* services | authorizeGeneric / confirmForAuthorization |
+| INV-AUTH-NE-EXEC | Authorization ≠ Execution | governedExecute Select/Start | projectScopedCursorSelection |
+| INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 |
+| INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 |
+| INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | STRUCTURAL PREPARE requires **accepted**, applicable, verified, mission-bound, non-superseded HD — Refuse (`HD_REFUSED`) and Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) are not prepare paths; Accept alone ≠ Execute | verifyGenericMissionHumanDecisionForPrepare | mHd01 (incl. refuse/amend cases) / DER16 |
+
+## Dual admission paths — authority summary (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)
+
+**Chemin A — STRUCTURAL:** mission signals / HD-required materiality → process-local presentation carrier → Pilot disposition:
+- **Accept** → durable HD `accepted` → verify basis/identity/mission/digest/CURRENT/non-superseded → PREPARE (refs verified) → inspect → Confirm (if required) → Authorize → Execute.
+- **Refuse** → HD refused → PREPARE forbidden (`HD_REFUSED`); no Authorization; no Attempt.
+- **Amend** → new presentation required → PREPARE forbidden (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new accepted applicable HD.
+No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission. Accept alone ≠ Execute.
+
+**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed.
+
+**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN.
+
+**CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: process-local offer loss ≠ universal PREPARE ban when durable accepted HD remains verifiable (see vol 06 / HD11).

 ## Failure modes (selected)

```


## 18. Compatibilité R1 / R4
- R1 taxonomy F04/F05/F08/F09/F10 preserved; S1 only clarifies Chemin A dispositions inside F08
- R4 oracle semantics in vol 08 **untouched** this cycle (KEEP hash)
- Structural vs NON_STRUCTURAL / UNKNOWN fail-closed / Materiality CURRENT / PREPARE≠AUTHORIZE separations preserved

## 19. Digests candidats (non promus)

| File | Manifest | Pre-S1S2 (R1R4) | Candidate S1S2 |
|---|---|---|---|
| `03-end-to-end-flow-catalog.md` | `2e53911afec78653` | `854b94741d7412ec` | `efdc700181d6a2cc` |
| `04-dependency-impact-map.md` | `f7f8d21a0efb997b` | `7a1689f3b1cb3e9e` | `0e1a3472427bdb90` |
| `06-persistence-restart-and-recovery.md` | `e65f13a723097cff` | `179057f68b7a363d` | `93e604fb84081c98` |
| `07-authority-invariants-and-failure-modes.md` | `3dbdf5191b9b4670` | `6a648b21c7445423` | `8e81c1fd63d604b0` |

Manifest **not** written. G-DIGEST remains PENDING APPROVAL.
JSON: `.tmp-sfia-review/s1s2-candidate-digests.json`

## 20. Manifest inchangé
- `production-runtime-reference.manifest.json` hash KEEP `9a004d6fdac6581e…`
- README KEEP `d6e17088b0cc5762…`
- Vols 02/08/09 KEEP (pre-S1S2 hashes)

## 21. Contrôles
- `git diff --check` clean
- Only 03/04/06/07 content changed this cycle (02/08/09 frozen)
- Product freeze 78/78
- Source preserved
- Staged empty
- Labels: AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION / DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE / NOT_PROVEN
- No INTEGRATED_ON_MAIN / P6 PASS / READY FOR REAL / runtime v3 ADOPTED
- Historical 328 / G-IB 5/5 / typecheck — **not re-executed** this cycle
- Conformance digest FAIL still expected (not run as pass claim)

## 22. Product freeze 78/78
Verified against `.tmp-sfia-review/s1s2-dirty-freeze.json` (matches R1R4 freeze).

## 23. Worktree source préservé
`fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` · porcelain 78 · no edits this cycle.

## 24. Fake / Real
- Applicable YES
- Fake: HD11 + M-HD refuse/amend suites
- REAL corresponding: authenticated Product SQLite restart + external provider + Cursor REAL — **NOT RUN**
- Entry DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE → exit SEMANTIC CONTENT READY FOR CHATGPT REVIEW
- GO REAL: NO

## 25. Risques / réserves
- G-DIGEST still open until ChatGPT approves then distinct Morris digest GO
- UI restart rehydration NOT PROVEN (honest none/stale)
- HD11 scope only — no unconditional PREPARE
- HQA / REAL / Visual NOT PROVEN
- Product dirty still uncommitted

## 26. Dette / exit
- Debt: digest sync deferred
- Exit this cycle: S1/S2 corrected; HD status matrix; HD11 resume described; UI process-local distinguished; no artificial authority; complete diffs; Product preserved; handoff published
- Next: ChatGPT final content review → digest GO → conformance → Product git GO

## 27. Git Review Index
| Artifact | Ref |
|---|---|
| Parent R1–R4 handoff | `3c1b5c83` / blob `c2243b81` |
| Integration HEAD | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| Source HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| This handoff | *(post-publish)* |

## 28. Gates Morris
| Gate | State |
|---|---|
| G-IB | CLOSED |
| R1/R4 | ACCEPTED (preserved) |
| S1/S2 content | READY FOR CHATGPT FINAL CONTENT REVIEW |
| G-DIGEST | **PENDING APPROVAL** (not closed; digests not promoted) |
| Product git / HQA / REAL | NOT AUTHORIZED |

## 29. Verdict

**S1-S2 SEMANTIC CORRECTIONS COMPLETE — READY FOR CHATGPT FINAL CONTENT REVIEW — G-DIGEST PENDING APPROVAL**

### Instruction ChatGPT
Lire le Review Handoff distant au SHA publié. Vérifier S1 accepted/refused/amended; structural PREPARE only under applicable accepted HD; S2 HD11 resume without offer; UI carrier process-local; F08/vol04/vol06/vol07 coherence; complete diffs; other volumes frozen; digests non promus; Product dirty préservé.

Rendre: **APPROVE / AMEND / STOP**.

Ne pas générer de prompt commit/push/PR Product. Ne pas annoncer G-DIGEST CLOSED / DIGESTS PROMOTED / FULL CI PASS / PRODUCT GIT INTEGRATED / READY FOR HQA / READY FOR REAL / P6 PASS / runtime v3 ADOPTED.
