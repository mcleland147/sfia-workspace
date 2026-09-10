# ChatGPT Critical Review Pack — FULL

## Meta
- **timestamp**: 2026-09-10T00:25:14Z
- **Cycle ID**: SFIA-STUDIO-GREENFIELD-CANDIDATE-TRAJECTORY-HUMANDECISION-CONTRACT-QUALIFICATION-01
- **Milestone**: Greenfield Product Proof — Governed Cycle Entry
- **SFIA Cycle**: 3 — Architecture fonctionnelle / qualification de contrat
- **Typologie**: RUN — read-only qualification
- **Profile**: CRITICAL
- **Justification CRITICAL**: qualifies the contract that will let a structuring Pilote HumanDecision promote a candidate ProjectTrajectory to decided/current. Error here risks implicit authority, under-bound decision, or promotion of stale state.
- **GO Morris consumed**: GO MORRIS — GREENFIELD CANDIDATE TRAJECTORY → HUMANDECISION CONTRACT — READ-ONLY QUALIFICATION
- **Candidate SHA**: 2177277c11c342e72aec4f0b1545cb5cd5c8476f
- **Parent SHA**: 9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2
- **origin/main**: a9f6c310a0826d0e5bd6f7264603382a86564db1
- **Worktree**: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- **Branch**: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- **Product files changed**: ZERO
- **Product commit / push / PR**: NONE
- **REAL / model calls**: ZERO
- **Final verdict**: GREENFIELD CANDIDATE TRAJECTORY → HUMANDECISION CONTRACT — STRUCTURAL DECISION REQUIRED

## Local Git Truth
- toplevel: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: 2177277c11c342e72aec4f0b1545cb5cd5c8476f (= expected 2177277c)
- parent: 9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2 (= expected 9d9c8ce7)
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
- staged: empty
- Product dirty: none (only `.tmp-sfia-review/*` artifacts)
- No stash / reset / clean / discard / amend / rebase

```
 M .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/candidate-bridge-diffs/
?? .tmp-sfia-review/candidate-f70-diffs/
?? .tmp-sfia-review/live-diagnostic/
?? .tmp-sfia-review/runtime-captures/
```

## Sources read
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md
- projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md
- projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md
- projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
- handoff worktree canonical: sfia-review-handoff/latest-chatgpt-review.md @ 06395d4e (LIVE provenance replay)

## Convergence Pre-check / CKC
- V3-F02 Living Project State — served
- V3-F04 epistemology / provenance — LIVE BOUNDARY PROVEN (Option B)
- V3-F05 conversation → decision → execution — doctrine VALIDATED; greenfield HD path not yet contracted
- V3-F06 ProjectTrajectory — candidate LIVE PROVEN
- V3-F09 governed trajectory evolution — next gate is Pilote HD
- CKC: not required for this qualification; START also does not require CKC today

## Entry LIVE proof (carried + RO reconfirmed)
- Project: `prj:6962aa82-4d49-4452-b113-670c37fc889c`
- trajectoryId: `trj:lr-bridge-c59749e43fa2` · version 1 · status candidate · 1 step Cadrage pending · decidedByDecisionRef null · not current
- provenanceObservationId: `epi:trj-prov-bcdbdd9cf80078e2`
- recommendationId: `epi:lr:9331c894bf68f55e:20260909T235654843Z`
- semanticKey: `9331c894bf68f55e5bff4bf266229f67`
- targetCycleTypeId: `cyc:framing`
- Resolver RO re-read this cycle: **RESOLVED** (exact IDs)
- HumanDecision=0 · CycleInstance=0 · START=none · ExecutionContract=0
- No button click / no HD recorded in this cycle
- RESERVE-TRJ-PROVENANCE-01: CLOSED AT LIVE BOUNDARY PROVEN SCOPE
- RESERVE-QA-MOCK-01: OPEN / NON-BLOCKING

## Files inspected (READ-ONLY)
### Decision domain
- `lib/oa/decision/domain/types.ts`
- `lib/oa/decision/domain/invariants.ts`
- `lib/oa/decision/domain/decisionBasisDigest.ts`
- `lib/oa/decision/application/recordHumanDecision.ts`
- `lib/oa/decision/application/getHumanDecision.ts` (referenced via W2)
- `lib/oa/decision/infrastructure/localSingleUserAuthority.ts`
- `lib/oa/decision/infrastructure/sqlite/sqliteDecisionRepository.ts`

### W2 / promotion / trajectory
- `features/project-assistant/w2/decideTrajectory.ts`
- `features/project-assistant/w2/presentedOptionSet.ts` (contract role)
- `features/project-assistant/w2/qualificationInputs.ts` (contract role)
- `lib/oa/cycle/application/promoteDecidedTrajectory.ts`
- `lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryProvenance.ts`
- `lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts`
- `features/project-assistant/preCycleCandidateTrajectoryActions.ts`
- `features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

### Actual START / CycleInstance paths located
- **CycleInstance create**: `lib/oa/cycle/application/createCycle.ts` (`CreateCycle.execute`)
- **START**: `lib/oa/cycle/application/pilotLifecycleTransitions.ts` (`PilotLifecycleTransitions.start`) — **no** `startCycle.ts`
- **START readiness**: `lib/oa/cycle/application/assessStartReadiness.ts`
- **START HD matcher**: `lib/oa/cycle/application/assessFinalization.ts` (`isAcceptedStartTrajectoryDecision`, subject `pilot.lifecycle.start+trajectory:{cycleInstanceId}`)
- Product wrappers: `features/project-assistant/f2/pilotLifecycleActions.ts`, `features/project-assistant/actions.ts`

---

## Classification des actifs

| Asset | Class |
| --- | --- |
| RecordHumanDecision | **KEEP** (explicit HD, authority verify, UoW/LPS append) |
| HumanDecision | **KEEP** object; **ADAPT** usage for unary APPROVAL options |
| DecisionBasis.sourceType union | **STRUCTURAL DELTA** required for honest greenfield binding |
| DecisionBasisProposalContext | **KEEP** for proposal/F2 paths; **REJECT** as sole greenfield SoT |
| DecisionBasisTrajectoryContext | **KEEP** for W2 OptionSet; **REJECT** reuse without real OptionSet |
| computeDecisionBasisSourceDigest | **HARVEST** for presentation/candidate digest |
| AuthorityResolver | **KEEP** |
| LOCAL_PILOTE_ACTOR | **KEEP** (generic Pilote; not persona) |
| registerLocalPiloteAuthority | **KEEP** (TEMPORARY WITH EXIT env gate) |
| PromoteDecidedTrajectory | **KEEP** (decisionRef mandatory; candidate-only) |
| W2 assertDecisionAuthorizesPromotion | **HARVEST pattern**; **REJECT** direct reuse (hard-requires trajectory_option + OptionSet fields) |
| W2 decideTrajectory outer Product UoW | **HARVEST** atomic HD→readback→promote |
| W2 PresentedOptionSet | **REJECT** for greenfield (no multi-option arbitration) |
| candidateTrajectoryProvenance | **KEEP**; **ADAPT** historical vs selectability split (non-structural) |
| readPreCycleCandidateTrajectory | **KEEP** / future ADAPT for decision presentation DTO |
| LPS | **KEEP** |
| cycle catalog | **KEEP** |
| START / CreateCycle path | **KEEP** untouched this Delivery; future-compatible if trajectory becomes validated |

---

## Current HumanDecision object model
- Requires ≥1 `DecisionOption` + `selectedOptionId` ∈ options
- `authority`: morris | delegated | system_non_structuring
- Structuring promotion today uses `authority: "morris"` + verified N3 + `canActAsMorris`
- `decisionBasis?: DecisionBasis` embedded in payload_json
- SQLite: full HumanDecision in `oa_human_decisions.payload_json` — **no DDL needed for new basis fields**, but **domain/schema contract change ≠ absence of SQL migration**

## Current DecisionBasis matrix
```
sourceType: "proposal" | "trajectory_option"
sourceRef: opaque (proposal id OR option-set ref)
sourceDigest: SHA-256 canonical JSON
proposalContext: { lpsId, lpsVersion, doctrineDigest?, activeCycleInstanceId?, ckcResolutionRef? }
trajectoryContext?: ONLY when sourceType === "trajectory_option"
  { trajectoryId, candidateVersion, optionRefs[], selectedOptionRef, recommendedOptionRef?, epistemicRefs?, optionSetDigest? }
executionBasis: free-form operational fields (cycleTypeId optional)
```

No third sourceType exists on candidate HEAD.

## RecordHumanDecision behaviour
- Snapshots fields before awaits (hostile post-mutation ignored)
- Validates options/selected/authority/ids
- Verifies authority via AuthorityResolver (morris ⇒ N3 + canActAsMorris)
- Does **not** semantically validate DecisionBasis.sourceType against business object
- Optional same-UoW LPS decision append
- Optional epistemic DecisionRef link when requested
- Critical: stores whatever DecisionBasis TypeScript allows

## Authority model
- Runtime actor: `LOCAL_PILOTE_ACTOR` (`actor:local-pilote`, role=decision_maker, displayName=Pilote)
- Domain authority **class** for structuring decisions: `authority: "morris"` — **not** a persona
- Evidence: `registerLocalPiloteAuthority` ⇒ N3 + canActAsMorris under env `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1`
- Client `canActAsMorris` / `claimedAuthorityLevel`: **never trusted** (W2 voids them)
- Temporary debt: local single-user authority with explicit exit to real Pilote provider
- **Rename DecisionAuthority enum**: NOT required for Delivery if Morris accepts class reuse; if rename desired → STRUCTURAL

## W2 decision/promotion contract
- Outer Product UoW: RecordHumanDecision → durable readback → `assertDecisionAuthorizesPromotion` → PromoteDecidedTrajectory
- Guard requires: accepted + authority morris + sourceType **trajectory_option** + trajectoryContext match + selectedOptionRef ∈ optionRefs
- Seals selected option **steps** onto promoted trajectory (W2 multi-option case)
- Epistemic DecisionRef: **best-effort after** atomic commit (not correctness SoT)

## PromoteDecidedTrajectory contract
- Requires decisionRef identifier
- Only promotes `status === candidate`
- Sets decidedByDecisionRef (+ optional decidedOptionRef / steps)
- Product path must verify HD acceptance/basis (OA does not)

## Actual START path + future compatibility
- START = `PilotLifecycleTransitions.start` (not startCycle.ts)
- Requires: CycleInstance proposed|acknowledged, trajectory current present & not stale/superseded, doctrine pin, LPS OCC, Pilote N3 evidence
- If trajectory.status === candidate → requires **START-subject** HD (`pilot.lifecycle.start+trajectory:{cycleInstanceId}`) — **different subject** from W2/greenfield promotion HD
- `decidedByDecisionRef` is **NOT** a START guard
- After greenfield promotion to **validated/current**: START does **not** require START-subject HD for that reason alone
- **No blocking incompatibility** if HD Delivery stops before CycleInstance/START
- Remaining future work: CreateCycle + START as separate capability

---

# Q1 — Acte humain exact
**Verdict: A — APPROVAL** of the already-materialized unary candidate (“Valider cette trajectoire telle qu’elle est”).

Not B (W2 multi-option CHOICE). Not OptionSet arbitration.

HumanDecision can represent APPROVAL with a **single honest DecisionOption** (label e.g. “Valider cette trajectoire”) + explicit selectedOptionId. That satisfies `options.length >= 1` without fabricating rival options.

Distinction:
- **APPROVAL** = accept this sealed candidate as-is
- **CHOICE/ARBITRATION** = select among presented alternatives (W2)

---

# Q2 — DecisionBasis actuel (answers)
1. **sourceType=proposal** for pre-cycle candidate? **NO** — semantically F2/proposal; comment enumerates proposal id / option-set ref only.
2. **sourceRef → candidate/provenance** under proposal? Technically possible as opaque string, but **semantic abuse** + no typed reconstructible fields.
3. **sourceDigest alone**? Can seal facts, but without typed context the promotion guard cannot honestly re-verify without inventing a parallel opaque protocol (= de facto new contract).
4. **trajectoryContext with sourceType=proposal**? Domain comment forbids: trajectoryContext present when trajectory_option. Contradicts current contract.
5. **trajectory_option without OptionSet**? Requires synthetic optionRefs/selectedOptionRef/(optionSetDigest). **REJECT** — fake W2 to satisfy schema.
6. **Existing better primitive?** **NO** on this HEAD.

---

# Q3 — Minimum Decision Basis (MATERIAL matrix)

| Fact | Class |
| --- | --- |
| projectId | MATERIAL |
| trajectoryId | MATERIAL |
| candidateVersion | MATERIAL |
| candidate status at decision time (must be candidate) | MATERIAL |
| exact candidate steps/content (digest + server re-read) | MATERIAL |
| provenanceObservationId | MATERIAL |
| source recommendationId | MATERIAL |
| semanticKey | MATERIAL |
| canonical targetCycleTypeId | MATERIAL |
| LPS version at decision time | MATERIAL |
| doctrine package id/version/digest | MATERIAL (when present on LPS/project) |
| exact presented object / presentationDigest | MATERIAL (TOCTOU) |
| decision-time sourceDigest | MATERIAL |
| actor Pilote | MATERIAL |
| authority evidence id | MATERIAL |
| selected/approved outcome (unary option) | MATERIAL |
| decision timestamp / status | MATERIAL |
| step labels for UI | PRESENTATION ONLY |
| Nora narrative/rationale text | PRESENTATION ONLY (optional display) |
| catalog label “Cadrage” | PRESENTATION ONLY (not identity) |
| targetCycleTypeId from LR | DERIVABLE EXACTLY via provenance RESOLVED |
| semanticKey from LR | DERIVABLE EXACTLY via provenance |
| isEffectiveCurrent | DERIVABLE from trajectory_current |

---

# Q4 — TOCTOU / presented object
Required chain:
1. Server builds presentation DTO from durable candidate + RESOLVED provenance
2. Server computes `presentationDigest = computeDecisionBasisSourceDigest(canonicalMaterialPayload)`
3. Client receives digest + display fields; returns **only** `projectId` + presentationDigest (and maybe trajectoryId as hint)
4. On click: server re-loads durable candidate + provenance; recomputes digest; mismatch ⇒ STALE / STOP
5. Client never supplies authority, recommendationId, steps, or decision content as SoT

Harvest `computeDecisionBasisSourceDigest`. Prefer no new table for tokens — digest travels with UI session / request and is revalidated against durable store.

---

# Q5 — Provenance & currentness refuse gates
Refuse decision when:
- provenance MISSING / AMBIGUOUS / INVALID
- recommendationId / trajectoryId / version mismatch vs presentation
- candidate status ≠ candidate
- trajectory already current/validated/active/stale/superseded
- LPS version mismatch (OCC)
- incompatible accepted HD already on same subject
- activeCycleInstanceId already set (unexpected for this greenfield path)
- target cycle **not currently selectable** (separate gate; see Q6)
- never: label “Cadrage” → cyc:framing

---

# Q6 — Historical identity vs current selectability
**Fact:** `resolveCandidateTrajectoryProvenance` currently requires `getCycleTypeById` + `lifecycleStatus === "active"` — mixes historical identity with current selectability.

**Contract target:**
- Provenance RESOLVED = historical exact link (IDs + LR payload), **even if** cycle later deprecated
- HD gate separately enforces **current selectability** of targetCycleTypeId
- Adaptation of resolver/gate split: **NON-STRUCTURAL ADAPTATION** (application helper), required **before** HD Delivery
- Changing domain object schemas not required for this split

---

# Q7 — Authority Pilote
1. Reusable as-is for bounded greenfield Delivery: **YES** (class `morris` + LOCAL_PILOTE_ACTOR)
2. Persona invisible in UX: **YES** (displayName “Pilote”; authority class not UX persona)
3. Client influence authority/evidence: **NO** (verified)
4. Debt: `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` temporary with exit
5. Exit: real Pilote authority provider replacing local env gate; do not rewrite historical HDs
6. Renaming DecisionAuthority: **MORRIS STRUCTURAL** if pursued; **not required** for correctness of greenfield HD

---

# Q8 — Confirmation verdict
**GREENFIELD TRAJECTORY HD CONFIRMATION: NOT REQUIRED**

Justification:
- Explicit CTA “Valider cette trajectoire” **is** the HumanDecision act
- Doctrine: HumanDecision explicit; Confirmation proportionnée; no free micro-confirmation
- Execution-effect Confirmations belong to later EC/START paths — do not import here
- Extra modal would duplicate the structuring decision without adding distinct effect-inspection

---

# Q9 — Atomicité HD + promotion
**HARVEST** W2 outer Product UoW invariant:
- No accepted HD orphan without promotion
- No promotion without accepted HD

Expected rollbacks (throw → outer TX abort):
- HD save fail
- LPS decision append fail
- durable HD readback fail
- basis/digest mismatch
- concurrent trajectory change
- promotion fail
- LPS OCC during promotion

Existing Product SQLite nested UoW pattern (already proven on provenance bridge + W2) supports this **without new architecture**.

---

# Q10 — Promotion guard
Need product-level guard **analogue** to W2, **not** OptionSet-dependent.

Must verify:
decision exists · accepted · project match · actor/authority valid · DecisionBasis exact (new candidate context) · trajectoryId · candidateVersion · candidate digest · provenance exact · targetCycleTypeId exact · approved outcome exact · still candidate.

Reuse: extract shared “durable readback + fail-closed” pattern from W2; **do not** call `assertDecisionAuthorizesPromotion` as-is.

---

# Q11 — Steps after decision
**ACCEPT as-is**:
PromoteDecidedTrajectory with **same steps** (omit steps override or pass byte/semantic-equivalent).
status → validated · decidedByDecisionRef = HD · becomes current · **no silent step replacement**.

If Pilote wants modification: conversation/replan → new candidate — out of scope.

---

# Q12 — Refusal / amend
**Recommend A for first Delivery:**
- Only “Valider cette trajectoire”
- No click ⇒ no HD
- “Demander une modification” / composer returns to conversation — no fake refused HD required
- Pilote not trapped (composer libre / requalification available)

Refused HD status support: defer unless UX proves imprisonment.

---

# Q13 — DecisionRef épistémique
**Disposition: OPTIONAL / USEFUL PROJECTION / DEFER**

Correctness SoT:
- HumanDecision durable
- ProjectTrajectory.decidedByDecisionRef
- LPS

W2 already treats Epistemic DecisionRef as best-effort post-commit. Not required for greenfield correctness.

---

# Q14 — Future START compatibility
See START section above. Greenfield validated trajectory does not create START impasse. Separate CycleInstance + START capability remains future work. Do not redesign START here.

---

# Q15 — UX minimale
Before:
- Trajectoire proposée · Cycle proposé: Cadrage · En attente de décision · Aucun cycle démarré
- Show: proposed cycle, that Nora recommends but does not decide, that validate makes trajectory decided/current, that it does **not** start a cycle
- CTA verb: **“Valider cette trajectoire”** (not Continuer/Suivant/OK)

After future Delivery:
- Décision humaine enregistrée · Trajectoire décidée/courante · Aucun cycle démarré · STOP before START

IDs secondary. Figma: N/A.

---

# Options A→E

## OPTION A — existing proposal DecisionBasis
- Correctness: weak (wrong semantic object)
- Exact binding: only via opaque digest protocol
- **REJECT** as sole path (semantic dishonesty)

## OPTION B — trajectory_option without W2 OptionSet
- Requires synthetic option set fields
- **REJECT** (fake W2)

## OPTION C — NEW candidate_trajectory sourceType + context (**RECOMMENDED**)
- Add `sourceType: "candidate_trajectory"`
- Add `candidateTrajectoryContext` with material IDs + digests
- Domain/schema contract change; **payload_json only** — **no SQL DDL/migration required**
- Honest; restart-safe; TOCTOU-capable; W2 untouched
- **STRUCTURAL DOMAIN DECISION**

## OPTION D — new context without new sourceType
- Would force misuse of proposal or trajectory_option
- Inferior to C; still structural if new context fields added under wrong sourceType
- **REJECT vs C**

## OPTION E — new PresentedDecision table
- **REJECT** by default: digest + durable HD/trajectory/provenance suffice for TOCTOU

### Comparison (C wins)
correctness / semantic honesty / exact binding / restart / stale / TOCTOU / authority / atomicity / reuse / no parallel architecture / no DDL / W2 isolation / START compatible / UX clear / bounded debt / Morris gate required once.

---

# Structural gate

## MORRIS STRUCTURAL DECISION REQUIRED

Existing DecisionBasis cannot honestly and exactly bind a pre-cycle candidate ProjectTrajectory + provenance without either:
- semantic abuse of proposal/trajectory_option, or
- fake W2 OptionSet.

Therefore: **no Delivery** until Morris decides the domain delta.

---

# MORRIS DECISION PACK (minimal)

## Decision ID proposé
**D-GF-HD-01** — Greenfield candidate ProjectTrajectory DecisionBasis sourceType

## Problem
Pilote must explicitly accept a unary candidate trajectory with exact durable provenance. Current DecisionBasis only models `proposal` and `trajectory_option` (W2 OptionSet).

## Existing contract
`DecisionBasis.sourceType = "proposal" | "trajectory_option"` with trajectoryContext reserved to OptionSet arbitration.

## Gap
No honest typed basis for: candidate trajectory approval + provenanceObservationId + recommendationId + semanticKey + targetCycleTypeId + candidate digest/TOCTOU.

## Options
- A proposal reuse — REJECT
- B trajectory_option without OptionSet — REJECT
- C new `candidate_trajectory` sourceType + context — RECOMMENDED
- D context-only under old sourceType — REJECT
- E new table — REJECT

## Recommended option
**C**

## Exact minimal delta (conceptual — not implemented)
```
DecisionBasis.sourceType |= "candidate_trajectory"

DecisionBasisCandidateTrajectoryContext = {
  trajectoryId: string
  candidateVersion: number
  provenanceObservationId: string
  recommendationId: string
  semanticKey: string
  targetCycleTypeId: string
  candidateContentDigest: string   // steps + material trajectory fields
  presentationDigest: string      // digest shown to Pilote
  // optional: doctrinePackageId/version/digest if not already in proposalContext
}

DecisionBasis = {
  sourceType: "proposal" | "trajectory_option" | "candidate_trajectory"
  sourceRef: string                 // e.g. trajectoryId or provenanceObservationId (stable)
  sourceDigest: string              // seals context + presentation
  projectId: string
  proposalContext: { lpsId, lpsVersion, doctrineDigest?, ... }
  trajectoryContext?: ...           // unchanged W2-only
  candidateTrajectoryContext?: DecisionBasisCandidateTrajectoryContext  // when sourceType=candidate_trajectory
  executionBasis: { ... cycleTypeId may mirror target for display only ... }
}
```

HumanDecision.options: unary APPROVAL option only.
Promotion guard: new product guard (not W2 OptionSet guard).
Atomicity: harvest W2 outer UoW.
Steps: accept as-is.

## Why now
Without this, Delivery would either lie about DecisionBasis or invent W2 OptionSet — both CRITICAL governance failures.

## Why simpler alternatives fail
See Options A/B/D/E.

## Persistence impact
HumanDecision remains payload_json. **No new table. No SQL migration.**

## Migration impact
None for DDL. Old decisions unchanged. New sourceType only on new greenfield HDs.

## Backward compatibility
W2 path untouched. proposal path untouched. Readers that switch on sourceType must tolerate unknown until Delivery (fail-closed for promotion).

## W2 impact
None if greenfield uses dedicated path/guard.

## START impact
None immediate. Validated trajectory remains START-compatible; CycleInstance/START still future.

## Debt/exit
Local Pilote authority temporary; DecisionAuthority class name “morris” remains domain class until separate Morris decision.

## Anti-claims
Does not prove HD LIVE. Does not authorize START. Does not close RESERVE-QA-MOCK-01. Does not adopt runtime v3.

## Decision wording ready for Morris
> **D-GF-HD-01 — ADOPT Option C:** extend DecisionBasis with sourceType `candidate_trajectory` and a dedicated `candidateTrajectoryContext` carrying exact candidate + provenance material fields and presentation digest, without new SQL tables and without reusing W2 OptionSet. Greenfield Pilote approval uses a unary explicit HumanDecision option and an atomic HD→PromoteDecidedTrajectory Product path, stopping before CycleInstance/START.

---

## Confirmation verdict (explicit)
**GREENFIELD TRAJECTORY HD CONFIRMATION: NOT REQUIRED**

## Historical vs selectability verdict
Split required before HD Delivery · **NON-STRUCTURAL ADAPTATION** of provenance resolver vs HD selectability gate · provenance historical ≠ current authorization

## Authority verdict
KEEP LOCAL_PILOTE_ACTOR + structuring authority class `morris` · client cannot supply authority · temporary env gate remains · rename NOT required for this Delivery

## Approval vs choice verdict
**APPROVAL** (unary accept-as-is), not W2 CHOICE

## Future Delivery boundary (ONLY AFTER Morris ADOPTS D-GF-HD-01)
candidate + exact provenance
→ explicit “Valider cette trajectoire”
→ server re-resolve / stale guards / selectability gate
→ accepted HumanDecision (unary)
→ durable readback guard
→ PromoteDecidedTrajectory validated (steps as-is)
→ LPS updated · trajectory current
→ 0 CycleInstance · 0 START · 0 EC · STOP

## Future negative test matrix (specify only — do not write tests)
provenance MISSING/AMBIGUOUS/INVALID · stale candidate version/content · LPS OCC · target cycle unavailable/deprecated · digest mismatch · hostile client ids/authority · missing authority evidence · duplicate click · concurrent decision · HD save fail · promotion fail after logical HD · no orphan HD · no promotion without accepted HD · existing accepted same-subject · W2 unaffected · 0 CycleInstance · 0 START · 0 EC

## Product files changed
ZERO

## ZERO REAL
YES

## Reserves
- RESERVE-TRJ-PROVENANCE-01: CLOSED AT LIVE BOUNDARY PROVEN SCOPE
- RESERVE-QA-MOCK-01: OPEN / NON-BLOCKING
- Remaining: D-GF-HD-01 undecided; HD Delivery; CycleInstance; START; EC; local authority exit

## Next capability
Await Morris decision on **D-GF-HD-01**. If ADOPTED → Delivery of greenfield HD→validated trajectory (STOP before START).

## Anti-claims
NOT claimed: HumanDecision proven · trajectory promotion proven · START proven · END-TO-END REAL · DecisionBasis already sufficient · fake OptionSet acceptable · PR READY · runtime v3 ADOPTED · RESERVE-QA-MOCK-01 closed

## Final verdict
**GREENFIELD CANDIDATE TRAJECTORY → HUMANDECISION CONTRACT — STRUCTURAL DECISION REQUIRED**
