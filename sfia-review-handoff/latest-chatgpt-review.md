# ChatGPT Critical Review Pack — FULL

- timestamp: 2026-09-10T10:56:39Z
- Cycle ID: SFIA-STUDIO-GREENFIELD-ACTIVE-CYCLE-CYCLE-WORK-EXECUTIONCONTRACT-CONTRACT-QUALIFICATION-01
- Level: FULL
- Typologie: RUN — read-only qualification
- Cycle SFIA: 3 — Architecture fonctionnelle / qualification de contrat
- Profil: CRITICAL
- GO Morris consumed: GO MORRIS — GREENFIELD ACTIVE CYCLE → CYCLE WORK / EXECUTIONCONTRACT CONTRACT — READ-ONLY QUALIFICATION
- Candidate Product: 2b595718eafec1a902650619040b21f75e86031e
- Parent: 2506775578c04d6aab069b7d5f9d42b4f02a56be
- Product files changed: ZERO
- Env delta: ZERO
- Model calls: ZERO
- Nora turns: ZERO
- EC / Attempt / Confirmation / HD mutations: ZERO

## Local Git Truth

- worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: 2b595718eafec1a902650619040b21f75e86031e — MATCH
- parent: 2506775578c04d6aab069b7d5f9d42b4f02a56be — MATCH
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
- origin/sfia/review-handoff: abde66b23baf1cb14f8e28e9eba18f62c30aaf02
- handoff blob: 9906ea7d31324096ca184be524bad7ae20032b64 — MATCH
- Dirty: .tmp-sfia-review/** only

## Convergence Pre-check

- Capacities: V3-F01/F02/F04/F05/F06/F09 + F11/F12 frontier
- Entry: LIVE BOUNDARY PROVEN active Cadrage on fresh Project (START LIVE replay)
- Gap: Studio can START; contract between active-cycle work and governed execution is incomplete
- Exit of this cycle: functional contract map + structural gate + Morris Decision Pack if required

## CKC Cycle 3

- Detailed CKC: ABSENT
- Fallback: 02-fifteen-cycles-synthetic-map.md + method Architecture fonctionnelle
- status: method-candidate · executionAuthority: none
- Note: this qualification cycle uses Cycle 3 process externally; the LIVE project active cycle remains cyc:framing (Cadrage)

## Fake / Real

- DETERMINISTIC / CONTRACT READ-ONLY ONLY
- ZERO NEW REAL
- LIVE Project inspected READ-ONLY only as entry proof

## LIVE active-cycle entry state (READ-ONLY)

| Field | Value |
|---|---|
| projectId | prj:4bb97828-4890-4014-9c9b-189bcc48ca95 |
| cycleInstanceId | cyc:trj-14e7d943c84fe033aa01204f |
| status | active |
| profile | Light |
| cycleTypeId | cyc:framing |
| trajectoryId | trj:lr-bridge-f95e5e15e015 |
| trajectoryVersion | 1 |
| trajectoryStepId | stp:cadrage-a2dc6d94 |
| step state | active |
| ckcResolutionRef | ckc:m2-273168644546-8eaf020a83d9553c |
| trajectory HD | dec:gf-trj:ca0deba0-9ade-4f65-8aec-536bde354da4 |
| LPS | v5 |
| EC / Attempt / Confirmation | 0 / 0 / 0 |

## Sources read

- prompts/templates/sfia-cycle-execution-template.md
- method/.../sfia-cycle-routing-guide.md
- method/.../02-fifteen-cycles-synthetic-map.md
- method/.../sfia-v2.5-project-cycles-method-candidate.md (Cycle 3 section as external process)
- convergence build doctrine + roadmap
- product-completion cadrage
- framings 30–35
- sfia-review-handoff/latest-chatgpt-review.md (LIVE START pack)
- Product seams listed below (READ-ONLY)

## Files inspected (structuring)

- features/project-assistant/actions.ts
- features/project-assistant/f2/orchestrateF2.ts
- features/project-assistant/orchestrateTurn.ts
- features/project-assistant/buildProjectSystemPrompt.ts
- features/project-assistant/f2/studioCognitiveContext.ts
- features/project-assistant/f2/methodOrientation.ts
- features/project-assistant/f2/ckcCognitiveContext.ts
- lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
- lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
- lib/oa/cycle/application/updateEpistemicState.ts
- lib/oa/cycle/application/assessFinalization.ts
- lib/oa/project/application/appendLivingProjectStateVersion.ts
- lib/oa/decision/domain/types.ts
- lib/oa/decision/application/recordHumanDecision.ts
- lib/oa/execution-contract/application/buildExecutionContract.ts
- lib/oa/execution-contract/application/validateExecutionContract.ts
- lib/oa/execution-contract/application/recordContractInspection.ts
- lib/oa/execution-attempt/application/selectExecutionAgent.ts
- lib/oa/execution-attempt/application/startExecution.ts
- features/project-assistant/f3/prepareM3FromDecision.ts
- features/project-assistant/f3/resolveM3ExecutionContract.ts
- lifecycle START / prepare / HD / trajectory paths (carried from prior cycles)

---

## Q1 — Cycle work taxonomy (repo-grounded)

| Layer | Name | Meaning | Existing carriers |
|---|---|---|---|
| A | COGNITIVE WORK | Nora conversation / analysis / challenge | Memory B session (NOT Truth C) |
| B | FACTUAL STATE UPDATE | Durable governed facts | LPS append, EpistemicItem, Evidence ids |
| C | STRUCTURING DECISION | Pilote authority-bearing choice | HumanDecision + DecisionBasis |
| D | GOVERNED EXECUTION | External/repo/agent effects | ExecutionContract → Attempt → StartExecution |

These four layers MUST NOT be collapsed.

## Q2 — Active Cycle Nora context

**Verdict: ACTIVE CYCLE COGNITIVE CONTEXT: GAP**

Path:
`projectAssistantSendAction` → `orchestrateAssistantSend` → `composeStudioCognitiveContext` → `orchestrateProjectAssistantTurn` → `buildProjectSystemPrompt` → `runNoraCognitiveTurn`

| Field | Presence |
|---|---|
| projectId | PRESENT IN PROMPT |
| activeCycleInstanceId | PRESENT IN PROMPT (Studio Cognitive “Cycle ACTIVE…”) |
| LPS id/version | PRESENT IN PROMPT |
| trajectory (if current) | PRESENT IN PROMPT |
| cycleTypeId (active) | ABSENT |
| CycleProfile (active) | ABSENT (`trustedSfiaProfile: null`) |
| ckcResolutionRef | ABSENT from F1 prompt; opaque analyzeIntent hint only |
| CKC content of active cycle | ABSENT |
| Tool-resolvable cycle/CKC | ABSENT (tools = git/github only) |

Evidence: `studioCognitiveContext.ts` sets `projectTruth.activeCycleInstanceId` but does not load CycleInstance type/profile/CKC. `methodOrientation.ts` loads CKC via intent `candidateCycleTypeId`, not active `ckcResolutionRef`.

## Q3 — Active Cycle CKC consumption

**Verdict: ACTIVE CYCLE CKC CONSUMPTION: ABSENT**

`loadProductCkcCognitiveContent({ cycleTypeId, packagePin })` never takes active `ckcResolutionRef`.
Durable START pins CKC on CycleInstance/LPS; Nora in-cycle turns do not consume that pin.

## Q4 — Active cycle vs pre-cycle routing

Contract: structured `preCycleRoutingAssessment.activeCycleAlreadyCoversWork` → disposition `DEFER_TO_ACTIVE_CYCLE` suppresses premature `NEXT_CYCLE` LR (FINALIZE may remain).

Server does **not** auto-set the flag from LPS.activeCycleInstanceId; it is model-asserted.

Expected for a Cadrage-belonging Pilote message while Cadrage is active:
- remain in active Cadrage (if model sets coversWork=true / DEFER)
- NOT emit NEXT_CYCLE
- produce no new trajectory HD automatically
- may later emit FINALIZE_CURRENT_CYCLE recommendation under separate contract

**Gap:** even when deferred, Nora still lacks active-cycle CKC/type/profile grounding.

## Q5 — Conversation ≠ Truth C

**Anti-silent spine: EXISTING CONTRACT**

Writers (explicit only):
- LR → Epistemic Recommendation (Nora, authority none) via `materializeLifecycleRecommendation`
- prepare trajectory → candidate Trajectory + provenance Observation
- Pilote HD → RecordHumanDecision (+ optional LPS decisionIds)
- Promote trajectory / LPS append / createCycle / START
- Evidence ingest → system factual LPS id write-back
- MaterializeFromMemoryB (explicit class; never silent)

Session Memory B is NOT Truth C.

**ACTIVE CYCLE DURABLE WORK PRODUCT: GAP** for structured Cadrage outcomes (need/value/scope-out/success/hypotheses) on top of that spine.

## Q6 — Cadrage durable-field matrix

| Information | Current carrier | Target (recommended pending Morris) | Gap |
|---|---|---|---|
| need / intention | LPS.objective (weak) + Memory B | LPS/Epistemic composition | PARTIAL |
| value | NOT MODELED | Epistemic Observation/Recommendation or LPS context | GAP |
| scope IN | LPS.scope free text | LPS.scope (structured later if needed) | PARTIAL |
| scope OUT | NOT MODELED | Epistemic / LPS context | GAP |
| constraints | LPS.constraints typed but append cannot set (stuck []) | ADAPT LPS append or Epistemic | GAP |
| success criteria | TrajectoryStep.exitCriteria optional | step exitCriteria / Epistemic | PARTIAL |
| hypotheses | Epistemic type unused in production | Epistemic Hypothesis | GAP |
| risks | step.risks partial; LPS.riskItemIds unused | Epistemic / step risks | PARTIAL |
| decisions | HumanDecision | HumanDecision | EXISTING |
| next trajectory | Trajectory + LR + LPS pointer | existing | EXISTING |
| active cycle / CKC | CycleInstance + LPS | existing + Nora consumption ADAPT | EXISTING durable / GAP cognitive |

## Q7 — Non-structuring vs structuring

| Utterance class | Treatment |
|---|---|
| Simple Observation | Epistemic Observation (if/when writer exists for cycle work) — not HD |
| Factual accepted by explicit interaction | LPS append / Epistemic with provenance — may need explicit Pilote ack depending on class |
| Hypothesis | Epistemic Hypothesis — not HD |
| Recommendation | Epistemic Recommendation — authority none |
| Structuring Option | OptionSet / Recommendation → HD |
| Explicit validation of scope/architecture/finalize/execute | HumanDecision |

Phrase utilisateur ≠ HumanDecision automatically.

## Q8 — HumanDecision during cycle

**TRAJECTORY HD REUSABLE AS CYCLE EXECUTION DECISION: NO**

`dec:gf-trj:ca0deba0-…` sourceType=`candidate_trajectory`; executionBasis.requestedOperation=`approve_candidate_trajectory_as_is`; stopConditions include AUCUN CYCLE / AUCUN START / AUCUN EXECUTION_CONTRACT historically for that act.

It authorizes trajectory validation only — not Cadrage execution, not Cursor, not EC.

Structuring acts that need HD:
- validate scope / choose option / architecture choice / trajectory change / finalize / authorize execution

Confirmation ≠ HD ≠ START ≠ EC.

DecisionBasis sourceTypes on HEAD:
```
"proposal" | "trajectory_option" | "candidate_trajectory"
```
No cycle-work / execution-intent sourceType.

## Q9 — ExecutionContract applicability

**EXECUTION APPLICABILITY CONTRACT GAP**

`assessFinalization` / derivation:
- `executionRequired===false` + no contracts → NOT_APPLICABLE
- `executionRequired===true` OR contracts present → APPLICABLE
- else → UNKNOWN (fail-closed)

Product `pilotLifecycleTransitions` does **not** set `executionRequired`.
Product SoT today ≈ presence of EC rows + obligation-policy HD (`opt:no-execution` / `opt:no-governed-effects`) in some paths.

Cannot be: client bool, “cycle active ⇒ true”, “Cadrage ⇒ false” hardcoded, Profile Light ⇒ false, Nora Recommendation as decision.

## Q10 — Pure cognitive Cadrage without EC

**Conceptually REQUIRED to be possible; currently PARTIAL.**

Doctrine forbids fake EC whose action is “think about cadrage”.
Pure path should be:
active Cadrage → Nora cognitive work → durable factual/epistemic state → HD only if structuring → executionRequired=false with authoritative source → FINALIZE under existing assessFinalization.

Gaps blocking honesty today:
1. Nora active-cycle CKC/context
2. durable cadrage field carriers
3. authoritative executionRequired=false source without inventing EC

## Q11 — Cognitive READ tools vs EC

Git/GitHub READ tools in Nora Agents path = cognitive grounding / Tool Authorization — **not** ExecutionContract.
EC is for governed external effects / Cursor Attempt launch.
Do not expand connector surface in this cycle.

## Q12 — Path to real execution (conceptual)

active Cycle → cognition → executable intent → options/Recommendation if needed → relevant HumanDecision → executionRequired=true → Build EC → Validate → Inspect → Confirmation if required → CheckExecutionAuthorization → SelectExecutionAgent (Attempt accepted) → StartExecution (Cursor/adapter).

## Q13 — ExecutionContract field authority matrix

| Field | Current source | Target source | Durable? | HD? | Server derivable? | Gap? | Structural? |
|---|---|---|---|---|---|---|---|
| executionContractId | server | server | Y | N | Y | N | N |
| projectId | caller/server | active Project | Y | N | Y | N | N |
| cycleInstanceId | caller | active CycleInstance | Y | N | Y | N | N |
| decisionRefs | caller HD id | relevant cycle-work HD | Y | Y | N | Y — wrong HD risk | Y if new sourceType |
| doctrinePackageRef | project pin | project pin | Y | N | Y | N | N |
| action | F3: executionBasis/UNRESOLVED | durable executable intent | Y | usually Y | partial | Y | Y |
| target | F3: UNRESOLVED_TARGET | durable intent | Y | usually Y | partial | Y | Y |
| scope | decision/scope string | HD/LPS/cycle | Y | often Y | partial | Y | maybe |
| inputs | caller | durable intent + LPS | Y | often Y | partial | Y | maybe |
| expectedOutputs | caller | durable intent | Y | often Y | partial | Y | maybe |
| requiredCapabilities | F3: cap:unresolved | action policy / capability registry | Y | N | Y target | Y | Y |
| requiredAuthority | F3: hardcoded MORRIS | effect/policy derivation | Y | N | Y target | Y | Y |
| constraints | F3 prepare markers | policy + effects | Y | N | Y | Y | maybe |
| stopConditions | F3 + basis | intent + policy | Y | partial | partial | Y | maybe |
| evidenceRequirements | caller/policy | policy/CKC | Y | N | Y | PARTIAL | maybe |
| reversibility | F3 fail-closed unresolved | system analysis +/or Pilote | Y | maybe | Y target | Y | Y |
| executionWindowClass | caller | policy | Y | N | Y | PARTIAL | N |
| idempotencyKey | caller | server+intent | Y | N | Y | N | N |
| correlationId | caller/server | server | Y | N | Y | N | N |
| status | server state machine | server | Y | N | Y | N | N |
| adapterExportRef | resolve/start | executor adapter | Y | N | Y | PARTIAL | N |
| semanticFingerprint | server compute | server | Y | N | Y | N | N |

## Q14 — action/target/capability/reversibility

F3 prepare intentionally leaves UNRESOLVED_* then resolveM3ExecutionContract fills explicitly.
Greenfield must not ship executable EC with unresolved sentinels.
Sources must be durable (HD DecisionBasis / composition / dedicated intent) — not client convenience.
Capabilities: prefer server derivation from action policy.
Reversibility: system analysis with fail-closed; Pilote may accept residual risk via Confirmation/HD — not silent.

## Q15 — DecisionBasis

Local sourceTypes only: proposal | trajectory_option | candidate_trajectory.
candidate_trajectory MUST NOT be abused as EC basis for cycle work.
If cycle-work HD / executable intent requires a new sourceType/context → **MORRIS STRUCTURAL DECISION REQUIRED**.

## Q16 — EC ↔ Cycle ↔ Trajectory lineage

Presumption accepted: `ExecutionContract.cycleInstanceId` → CycleInstance → trajectoryId/version/stepId is sufficient lineage.
Do NOT duplicate trajectory fields on EC unless audit/correctness later proves otherwise.
**S6 NOT REQUIRED** (current analysis).

## Q17 — BuildExecutionContract authority semantics

**EXECUTIONCONTRACT BUILD AUTHORITY SEMANTIC GAP**

Build verifies caller against `requiredAuthority` before persist.
`requiredAuthority` field also names the authority class needed to *execute* effects.
Same field serves prepare-write gate and execute-class declaration → incompatible with Build Doctrine:
Studio prepares → Pilote inspects → Confirmation conditional → effective authority before Execute.

**S5 REQUIRED** — separate prepare/build authority from requiredExecutionAuthority (exact naming Morris).

## Q18 — requiredAuthority derivation

Must NOT inherit from CycleProfile Light→N1 or Pilote=Morris persona.
Target: action/effect + reversibility + protected boundaries + ActionPolicy/AgentCapability + Confirmation policy.
**AUTHORITY DERIVATION CONTRACT GAP** until S5 + policy mapping decided.

## Q19 — ValidateExecutionContract

After authority re-verify (no inspection):
- EFFECT_CONFIRMATION_REQUIRED* → confirmation_required
- else N1 → validated
- else N2/N3/MORRIS → confirmation_required

Validate ≠ human acceptance of effects.
Inspection is product-layer (W2), not Validate-owned.
F3 confirm/execute currently can skip inspection — **ADAPT required** for greenfield product path.

## Q20 — Contract inspection

RecordContractInspection: binds contractVersion + inspectionFingerprint + semanticFingerprint; `grantsAuthority=false`; does not mutate status.
W2 authorize path requires sufficient inspection before Confirmation.
F3 greenfield reuse without inspection = doctrine gap.

## Q21 — Confirmation

Confirmation ≠ HumanDecision.
Required when Validate → confirmation_required (authority class or effect constraint).
Binding: scope/level/decisionRef; W2 adds inspection sufficiency + version/fingerprint discipline.
START needed no Confirmation; EC may.
**EXECUTION CONFIRMATION CONTRACT: ADAPTATION REQUIRED** (inspection-before-confirm for greenfield).

## Q22 — Effective authority

valid human authorization ∩ EC scope ∩ AgentCapability ∩ runtime policy ∩ required Confirmations = effective authority.
Implemented across verifyRequiredAuthority + CheckExecutionAuthorization + W2 evaluateExecutionAuthorization.
Separate: prepare authority / confirmation authority / execution authority / Morris construction gate.

## Q23 — EC ≠ Execution

Build ≠ Attempt; Validate ≠ Attempt; Inspect ≠ Attempt; Confirm ≠ Attempt; CheckAuthorization ≠ Attempt.
**Attempt created by SelectExecutionAgent (`accepted`).**
**Cursor/adapter launch only in StartExecution** requiring existing accepted Attempt.

## Q24–Q25 — Legacy F3 classification (file-level)

| Asset | Class |
|---|---|
| Build/Validate/Inspect/Confirm/CheckAuth primitives | KEEP |
| SelectExecutionAgent / StartExecution | KEEP |
| prepareM3FromDecision | HARVEST / REJECT FOR GREENFIELD PRODUCT PATH (unresolved+MORRIS stamp) |
| resolveM3ExecutionContract | HARVEST (fail-closed resolve pattern) |
| prepareAndResolveM3ProductPath | FREEZE / not greenfield product default |
| confirmAndExecute* F3 | ADAPT needed (inspection) / REJECT as default greenfield |
| fixture F3 entries | REJECT FOR PRODUCT |
| systemFactualWriter | KEEP |
| ingestEvidenceAndRecommend | KEEP/ADAPT post-attempt |

OPTION E (reuse F3 greenfield as target) REJECTED as product path.

## Q26 — Active cycle work product carrier

Prefer **composition** of LPS + EpistemicItems + HD + Trajectory + LR.
No new aggregate unless Morris decides composition cannot honestly hold Cadrage outcomes.
**S1 INCONCLUSIVE→lean NOT REQUIRED if composition ADAPT lands; REQUIRED only if Morris rejects composition.**

## Q27 — Artifact / Evidence

Artifact: model unbound → applicability UNKNOWN in assessFinalization (not auto N/A).
Evidence: existing post-Attempt path; not required for pure cognitive Cadrage.
Do not invent Artifact=required for Cadrage.

## Q28 — FINALIZE_CURRENT_CYCLE

Recommendation FINALIZE ≠ finalize action.
FINALIZE remains separate HD + assessFinalization obligations.
Active-cycle-work path must not dead-end before FINALIZE is possible; pure no-EC path must remain open.

## Q29 — Happy path sans execution

| Arrow | Status |
|---|---|
| active Cadrage + exact CKC → Nora | GAP (context/CKC) |
| Nora → durable governed state | GAP (cadrage fields) |
| Recommendation/HD when structuring | EXISTS (HD) / ADAPT (basis) |
| executionRequired=false authoritative | GAP |
| no fake EC | DOCTRINE KEEP |
| FINALIZE later | EXISTS with UNKNOWN risks if applicability unset |

## Q30 — Happy path with execution

| Arrow | Status |
|---|---|
| cognition → executable intent | GAP |
| Recommendation/HD | ADAPT DecisionBasis |
| executionRequired=true | GAP source |
| EC prepared fully sourced | GAP + S5 |
| inspect | EXISTS (W2) / ADAPT F3 |
| Confirmation conditional | EXISTS / ADAPT |
| effective authority | EXISTS |
| Attempt/Start | EXISTS |
| Evidence | EXISTS |

## Q31 — Executable intent source

Must not be arbitrary client/caller.
Candidates: enriched DecisionBasis (Morris), dedicated Epistemic subtype (Morris), composition LPS+Recommendation+HD.
**If caller-only: STRUCTURAL GAP.** Current F3 unresolved prepare proves insufficiency.

## Q32 — R22 / OpenAI-native-first

If new Nora material output needed: ADAPT existing Agents structured Product turn — no second LLM call / regex engine.
OpenAI fit: COMBINE/ADAPT on existing NORA_PRODUCT_TURN schema; no external capability fact required for this qualification.
**STOP — OPENAI CAPABILITY FACT NOT LOCALLY PROVEN** not triggered (no new provider capability claim).

## Q33 — UI functional states only

Cycle en cours · travail/éléments établis · décision requise · exécution non requise · exécution proposée · EC à inspecter · Confirmation requise/non · prêt à exécuter.
Conversation dominante; IDs secondary.
No “Créer EC” vanity button.
FIGMA: N/A.

## Q34 — Restart / continuity

Must survive: active cycle identity, CKC ref, cycle-work facts, hypotheses, recommendations, HDs, execution applicability, EC, inspection, Confirmation, next action.
Session alone cannot be SoT.

## Q35 — TOCTOU / idempotence (policy targets)

| Event | Disposition |
|---|---|
| Nora recommendation stale | REQUALIFY / SUPERSEDE |
| LPS change before HD | REFUSE or REQUALIFY |
| cycle paused/cancelled before EC | REFUSE |
| trajectory replan before EC | REPLAN / REFUSE |
| decision superseded | REFUSE / SUPERSEDE |
| applicability change | REQUALIFY |
| duplicate EC prepare | IDEMPOTENT SUCCESS |
| contract changed after inspection | RECONFIRM / invalidate inspection |
| confirmation on stale version | REFUSE |
| authority/capability drift | REFUSE / REQUALIFY |

---

## KEEP / ADAPT / HARVEST / REJECT / FREEZE / RETIRE

| Asset | Class | Why |
|---|---|---|
| LPS + append UoW | KEEP | Truth C spine |
| Epistemic UpdateEpistemicState | KEEP | durable cognition outputs |
| HumanDecision / RecordHumanDecision | KEEP | structuring authority |
| Trajectory + greenfield START | KEEP | entry proven |
| preCycleRouting DEFER_TO_ACTIVE_CYCLE | KEEP | boundary |
| Build/Validate/Inspect/Confirm/CheckAuth/Select/Start | KEEP | EC backbone |
| assessFinalization | KEEP | with applicability gap noted |
| buildProjectSystemPrompt / studioCognitiveContext | ADAPT | inject active cycle type/profile/CKC |
| methodOrientation CKC load | ADAPT | prefer active ckcResolutionRef when cycle active |
| DecisionBasis | ADAPT or STRUCTURAL | may need new sourceType (Morris) |
| executionRequired SoT | ADAPT/STRUCTURAL | missing authoritative writer |
| Build requiredAuthority semantics | STRUCTURAL | S5 |
| prepareM3FromDecision as greenfield default | REJECT FOR GREENFIELD PATH | unresolved+MORRIS |
| resolveM3ExecutionContract | HARVEST | pattern |
| F3 fixture execute paths | REJECT FOR PRODUCT | |
| Fake EC for cognitive work | REJECT | doctrine |
| Direct Nora→EC | REJECT | |
| EC for every active cycle | REJECT | |

## Options A→G

| Option | Verdict |
|---|---|
| A Composition existante | **RECOMMENDED BASE** for cycle-work durable state + Nora ADAPT |
| B DecisionBasis adaptation | **RECOMMENDED for structuring/executable HD** pending Morris sourceType |
| C Dedicated execution intent object | Only if A+B fail Morris correctness |
| D CycleWork aggregate | Only if composition proven insufficient |
| E Legacy F3 greenfield reuse | **REJECT** as target product path |
| F EC for every active cycle | **REJECT** |
| G Direct Nora→EC | **REJECT** |

## Structural S1→S10 matrix

| ID | Question | Disposition |
|---|---|---|
| S1 | new CycleWork aggregate | NOT REQUIRED if composition ADAPT; else Morris |
| S2 | new DecisionBasis sourceType/context | **REQUIRED** (for cycle-work/executable HD) — Morris |
| S3 | dedicated execution-intent carrier | INCONCLUSIVE — prefer B first |
| S4 | durable executionRequired semantics | **REQUIRED** — Morris |
| S5 | buildAuthority vs requiredExecutionAuthority | **REQUIRED** — Morris |
| S6 | EC↔trajectory lineage duplicate fields | NOT REQUIRED |
| S7 | Confirmation lifecycle change | ADAPTATION (inspection-before-confirm) — may be Delivery without new domain if W2 reused |
| S8 | Artifact applicability semantics | NOT REQUIRED now |
| S9 | new structured Nora output material | INCONCLUSIVE — prefer ADAPT existing SO; Morris if new material fields |
| S10 | new LPS contract | PARTIAL ADAPT (constraints writable?) — Morris if schema |

## Critical challenges — conclusions

1. **Build authority:** incompatible dual use of requiredAuthority → S5 Morris.
2. **First Cadrage next move:** continue Nora work on besoin/valeur/scope/succès — **priority GAP** is active-cycle cognitive context + durable cadrage carriers (not EC).
3. **No premature EC:** Cycle.active alone must not create EC → S4 Morris.

---

## MORRIS DECISION PACK

### Decision ID proposed
`D-GF-ACW-01` — Greenfield Active Cycle Work / Execution Applicability / EC Authority Boundary

### Problem
Studio can START a greenfield CycleInstance, but cannot yet honestly:
1. ground Nora in the exact active cycle type/profile/CKC;
2. persist Cadrage cognitive results as governed Truth C;
3. declare executionRequired true/false authoritatively;
4. prepare a fully sourced ExecutionContract without unresolved sentinels / hardcoded MORRIS;
5. separate authority to prepare an EC from authority to execute it.

### Current runtime contract
- START LIVE proven (carried).
- Nora sees activeCycleInstanceId + LPS + trajectory, not active CKC content/type/profile.
- Truth C writers exist but Cadrage fields largely unmodeled.
- DecisionBasis sourceTypes lack cycle-work/executable intent.
- F3 prepare creates MORRIS+unresolved EC envelopes.
- Build verifies requiredAuthority at write time.
- Attempt only via Select; Cursor only via Start.

### Observed gaps
ACTIVE CYCLE COGNITIVE CONTEXT GAP
ACTIVE CYCLE CKC CONSUMPTION ABSENT
ACTIVE CYCLE DURABLE WORK PRODUCT GAP
EXECUTION APPLICABILITY CONTRACT GAP
EXECUTIONCONTRACT BUILD AUTHORITY SEMANTIC GAP
AUTHORITY DERIVATION CONTRACT GAP
DecisionBasis cycle-work source ABSENT

### Why now
Next user-visible move on LIVE Project is Cadrage work — not Cursor. Wrong contract would create fake ECs, reuse trajectory HD, or invent authority.

### Why active Cadrage exposes it
Cadrage is cognitive-first; Profile Light; CKC detailed exists for framing; no external effect yet. Forces pure no-EC path + later EC path to be distinguished.

### Current reusable assets
LPS, EpistemicItem, HD, Trajectory, LR, START UoW, Build/Validate/Inspect/Confirm/CheckAuth/Select/Start, DEFER_TO_ACTIVE_CYCLE, W2 inspection discipline, CKC loaders, system factual writer.

### Structural questions for Morris
1. Approve ADAPT Nora active-cycle context to consume exact CycleInstance + ckcResolutionRef CKC content?
2. Approve composition (LPS+Epistemic+HD+Trajectory) as Cadrage work-product carrier without new aggregate?
3. Approve new DecisionBasis sourceType/context for cycle-work / executable intent (exact naming)?
4. Approve durable executionRequired / applicability SoT (who writes; how; fail-closed)?
5. Approve separation of EC prepare/build authority from requiredExecutionAuthority?
6. Reject F3 prepare unresolved+MORRIS as greenfield product path?
7. Confirm trajectory HD is never reusable as unrelated execution decision?

### Options (for Morris)
- Prefer A+B with Nora ADAPT; reject E/F/G; hold C/D unless A+B fail.
- S5 mandatory for any EC Delivery.
- S4 mandatory before FINALIZE/no-EC claims harden.
- S2 mandatory before any greenfield EC from cycle work.

### Recommended option
**A + B + Nora/CKC ADAPT + S4 + S5**, with **E/F/G rejected**.
Do **not** implement until Morris adopts.

### Why recommended
Maximizes reuse of OA spine; preserves doctrine (no fake EC; HD explicit; inspection before confirm); unblocks first Cadrage continuation first; keeps EC as conditional branch.

### Why simpler alternatives fail
- E: unresolved executable fields + MORRIS stamp.
- F: Cycle.active≠execution.
- G: Nora authority none cannot create EC.
- D first: premature aggregate before composition ADAPT attempted.
- Skip S5: Build Doctrine contradiction remains.

### Exact minimal delta (pending adoption)
1. ADAPT studioCognitiveContext/methodOrientation/buildProjectSystemPrompt for active cycle type/profile/CKC.
2. ADAPT durable writers for Cadrage factual/epistemic outcomes (composition).
3. Decide DecisionBasis extension (S2).
4. Decide execution applicability SoT (S4).
5. Decide EC authority split (S5).
6. Delivery later implements; no EC/Cursor in first Delivery unless Morris expands scope.

### Impacts
- Domain: possible DecisionBasis + authority field semantics
- LPS: possible constraints/write ADAPT
- Epistemic: more Observation/Hypothesis/Recommendation use
- Trajectory: unchanged SoT
- EC: authority semantics; no lineage duplicate
- Confirmation: reuse W2 inspection gate
- Nora/OpenAI: ADAPT existing structured turn; no second engine
- Persistence/DDL: unknown until Morris; stop if migration required without gate
- Legacy F3: harvest only
- First Cadrage: cognitive+durable, no EC
- Future execution: fully sourced EC branch
- Debt/exit: temporary M3 local authority remains TEMPORARY WITH EXIT

### Morris gates
Adoption of D-GF-ACW-01 (or split decisions) before any Delivery coding.
Distinct GO for Delivery; distinct GO for any REAL cycle-work replay; distinct GO for EC LIVE.

### Anti-claims
This pack does not prove Cadrage executed, EC greenfield proven, Cursor proven, FINALIZE proven, Greenfield complete, PR ready, runtime v3 adopted.

### Decision wording ready for Morris
“ADOPT D-GF-ACW-01: (1) Nora must consume exact active CycleInstance identity+CKC for in-cycle turns; (2) Cadrage durable outcomes use existing composition pending proven insufficiency; (3) trajectory HD is not an execution decision; (4) executionRequired needs an authoritative SoT; (5) EC prepare authority is separated from requiredExecutionAuthority; (6) F3 unresolved+MORRIS prepare is not the greenfield product path; (7) no EC unless execution applicability is proven.”

---

## Future BAR-WORK matrix (spec only — not implemented)

BAR-WORK-01…30 as specified in the GO (active cycle identity/CKC; no silent HD; provenance writes; restart; trajectory HD non-reuse; executionRequired false/unknown/true; EC lineage; action/target/capabilities/reversibility sources; authority not from CycleProfile; no implicit MORRIS; build≠execute; inspection grants no authority; drift invalidates inspection; Confirmation only when applicable; inspection before Confirmation; effective authority before execute; no Attempt before boundary; pure Cadrage without fake EC; HD when required; stale blocks; idempotent prepare; no F3 parallel path; FINALIZE own conditions).

## Reserve dispositions

- RESERVE-START-LIVE-01 = CLOSED AT LIVE BOUNDARY PROVEN SCOPE (carried)
- RESERVE-START-PROFILE-SIGNAL-LIVE-01 = CLOSED AT LIVE BOUNDARY PROVEN SCOPE (carried)
- RESERVE-START-STEP-LINK/PROFILE-SIGNAL/CKC-BIND = CLOSED DETERMINISTICALLY + LIVE CORROBORATED (carried)
- RESERVE-START-CONCURRENCY-REALISM-01 = OPEN
- RESERVE-HD-CONCURRENCY-REALISM-01 = OPEN
- RESERVE-QA-MOCK-01 = OPEN / NON-BLOCKING
- RESERVE-START-UI-READ-NOISE-01 = OPEN / NON-BLOCKING
- NEW: RESERVE-ACW-NORA-ACTIVE-CONTEXT-01 = OPEN / BLOCKING FOR DELIVERY
- NEW: RESERVE-ACW-DURABLE-CADRAGE-STATE-01 = OPEN / BLOCKING FOR DELIVERY
- NEW: RESERVE-ACW-EXECUTION-APPLICABILITY-01 = OPEN / BLOCKING FOR EC/FINALIZE CLAIMS
- NEW: RESERVE-ACW-EC-BUILD-AUTHORITY-01 = OPEN / BLOCKING FOR EC DELIVERY

## Next capability

Await Morris decision on D-GF-ACW-01.
If adopted: Delivery deterministic of first active-cycle-work frontier (Nora grounding + durable composition + no fake EC) — **not** Cursor execution by default.

## Product / REAL immutability assertion

- Product source changed: ZERO
- Env changed: ZERO
- Model calls: ZERO
- Nora turns: ZERO
- New Project: ZERO
- HumanDecision: ZERO
- Confirmation: ZERO
- ExecutionContract: ZERO
- ExecutionAttempt: ZERO
- Cursor REAL: ZERO
- Cycle lifecycle mutation: ZERO
- Historical/LIVE Project untouched (read-only)

## Structural gate

**B. MORRIS STRUCTURAL DECISION REQUIRED**

## Final verdict

GREENFIELD ACTIVE CYCLE → CYCLE WORK / EXECUTIONCONTRACT CONTRACT — STRUCTURAL DECISION REQUIRED
