# SFIA Studio Review Pack — FULL

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-09-10 01:09:31 CEST |
| **Cycle ID** | `SFIA-STUDIO-CANDIDATE-TRAJECTORY-PROVENANCE-QUALIFICATION-01` |
| **Cycle SFIA** | 9 — QA / validation (qualification) |
| **Typologie** | RUN — READ-ONLY qualification |
| **Profil** | CRITICAL |
| **GO Morris consommé** | GO MORRIS — CANDIDATE TRAJECTORY PROVENANCE READ-ONLY QUALIFICATION |
| **Candidate** | `9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2` |
| **Parent** | `3d986d042dacdfae873f07467eee1a20fae1f6d6` |
| **origin/main** | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| **Branch** | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| **Product files changed** | **ZERO** |
| **REAL calls** | **ZERO** |
| **Code / correction** | **NONE** |
| **Verdict** | **CANDIDATE TRAJECTORY PROVENANCE — EXISTING CONTRACT SUFFICIENT / DELIVERY QUALIFIED** |

---

## 1. Local Git Truth

| Check | Result |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| HEAD | `9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2` |
| origin/main | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| Product status | clean |
| Amend / Product push / PR | NON |

Git Truth = PASS.

Dirty tree limited to `.tmp-sfia-review/*` (review artifacts only).

---

## 2. Sources

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
- `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`
- Handoff LIVE prior: `SFIA-STUDIO-GREENFIELD-CURRENT-RECOMMENDATION-TO-CANDIDATE-TRAJECTORY-FRESH-LIVE-REPLAY-01`

---

## 3. Convergence qualification

| Capacité | État |
| --- | --- |
| V3-F02 / F04 / F06 / F09 | servies (candidate bridge LIVE proven) |
| Gap de ce cycle | **provenance durable exacte** LR ↔ candidate après restart |
| Capacité suivante | candidate → HumanDecision Pilote (**hors scope**) |
| Ce cycle | READ-ONLY qualification only |

---

## 4. LIVE evidence d'entrée (read-only)

| Champ | Valeur |
| --- | --- |
| Project | `prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b` |
| Product DB | `…/product-proof-greenfield-task-app/product.sqlite` |
| DB digest before/after | `8d9f12a4ba4bc60333e787a1e6d967ef49f25019fc5548ae8a42f2af7a5a794a` / `8d9f12a4ba4bc60333e787a1e6d967ef49f25019fc5548ae8a42f2af7a5a794a` · **READ_ONLY_DIGEST_OK** |
| traj / epi / hd / cycle / ec | **1 / 1 / 0 / 0 / 0** |
| Mutations | **NONE** |

### Durable objects observed

**ProjectTrajectory payload**

```json
{
  "schemaVersion": "0.1.0-oa",
  "trajectoryId": "trj:lr-bridge-7718d7a6c017",
  "projectId": "prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b",
  "version": 1,
  "status": "candidate",
  "steps": [
    {
      "stepId": "stp:cadrage-5121a66b",
      "order": 1,
      "label": "Cadrage",
      "state": "pending"
    }
  ]
}
```

Fields present: `['projectId', 'schemaVersion', 'status', 'steps', 'trajectoryId', 'version']`.
Step fields: `['label', 'order', 'state', 'stepId']`.

**Absent on trajectory:** `recommendationId`, `semanticKey`, `targetCycleTypeId`, `sourceRecommendationRef`, `decidedByDecisionRef`.

**Epistemic LR (source)**

| Field | Value |
| --- | --- |
| epistemicItemId | `epi:lr:e6048253416545fa:20260909T224757475Z` |
| relatedObjects | `['prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b']` |
| contains trajectoryId | **False** |
| semanticKey | `e6048253416545fa763613b737145503` |
| targetCycleTypeId | `cyc:framing` |
| basisRefs.trajectoryId | `None` |
| provenance | `None` |

**LPS**

```json
[
  {
    "version": 1,
    "created_at": "2026-09-09T22:47:06.127Z",
    "activeCycleInstanceId": null,
    "trajectoryId": null,
    "trajectoryVersion": null,
    "keys_traj_related": [
      "correlationId",
      "provenance"
    ],
    "correlationId": "cor:ddc5d6f4-1462-429a-a8a0-ff041a5302cb",
    "epistemicItemIds": [],
    "decisionIds": []
  },
  {
    "version": 2,
    "created_at": "2026-09-09T22:51:22.418Z",
    "activeCycleInstanceId": null,
    "trajectoryId": "trj:lr-bridge-7718d7a6c017",
    "trajectoryVersion": 1,
    "keys_traj_related": [
      "trajectoryId",
      "trajectoryVersion",
      "correlationId",
      "provenance"
    ],
    "correlationId": "cor:4a10b91ea2fd52c5",
    "epistemicItemIds": [],
    "decisionIds": []
  }
]
```

LPS v2 points to candidate `trajectoryId` / `trajectoryVersion=1`.
`epistemicItemIds=[]` — LPS does **not** list the LR id.
LPS v1 correlationId ≠ LPS v2 correlationId (create vs bridge).

**Audit (oa_audit_events)**

- `oa.epistemic.updated` — projectId + itemCount; **no recommendationId / trajectoryId**
- `oa.trajectory.created` — projectId + trajectoryId + version + correlationId `cor:4a10b91ea2fd52c5`; **no recommendationId / semanticKey / targetCycleTypeId**

```json
{
  "epistemic_updated": [
    {
      "event_type": "oa.epistemic.updated",
      "correlation_id": "f1:prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b",
      "created_at": null,
      "payload": {
        "event": "oa.epistemic.updated",
        "ts": "2026-09-09T22:47:57.477Z",
        "correlationId": "f1:prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b",
        "projectId": "prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b",
        "itemCount": 1,
        "result": "ok",
        "durationMs": 1
      },
      "row": {
        "row_id": 84,
        "event_type": "oa.epistemic.updated",
        "occurred_at": "2026-09-09T22:47:57.477Z",
        "project_id": "prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b",
        "correlation_id": "f1:prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b"
      }
    }
  ],
  "trajectory_created": [
    {
      "event_type": "oa.trajectory.created",
      "correlation_id": "cor:4a10b91ea2fd52c5",
      "created_at": null,
      "payload": {
        "event": "oa.trajectory.created",
        "ts": "2026-09-09T22:51:22.417Z",
        "correlationId": "cor:4a10b91ea2fd52c5",
        "projectId": "prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b",
        "trajectoryId": "trj:lr-bridge-7718d7a6c017",
        "version": 1,
        "result": "ok",
        "durationMs": 3
      },
      "row": {
        "row_id": 86,
        "event_type": "oa.trajectory.created",
        "occurred_at": "2026-09-09T22:51:22.417Z",
        "project_id": "prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b",
        "correlation_id": "cor:4a10b91ea2fd52c5"
      }
    }
  ]
}
```

**Cross-link exact probe:** `False`

---

## 5. Code inspected (candidate `9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2`)

| Seam | Path |
| --- | --- |
| Bridge | `…/prepareCandidateTrajectoryFromCurrentRecommendation.ts` |
| Actions | `…/preCycleCandidateTrajectoryActions.ts` |
| CreateInitialTrajectory | `…/createInitialTrajectory.ts` |
| Domain types | `…/cycle/domain/types.ts` |
| LR types / LR-D01/D03 | `…/lifecycleRecommendation/types.ts` |
| Materialize / relatedObjects | `…/materializeLifecycleRecommendation.ts`, `basisFingerprint.ts` |
| Currentness | `…/currentness.ts` |
| UpdateEpistemicState | `…/updateEpistemicState.ts` |
| Epistemic SQLite | `oa_epistemic_items.payload_json` |
| Trajectory SQLite | `oa_project_trajectories.payload_json` |
| LPS append | `appendLivingProjectStateVersion` / `LivingProjectState` |
| Audit | `oa_audit_events` |
| HumanDecision / DecisionBasis | `…/decision/domain/types.ts` |
| RecordHumanDecision / PromoteDecidedTrajectory / W2 | inspected as comparison only |

---

## 6. Object relationship map (today)

```text
EpistemicItem Recommendation (LR)
  epistemicItemId = recommendationId
  semanticKey, targetCycleTypeId durable in payload
  relatedObjects = [projectId] only
  basisRefs.trajectory* = null (greenfield produce)
  derivedCurrentness after bridge = non-CURRENT / STALE
        ✗ no durable arrow to trajectory

ProjectTrajectory candidate v1
  trajectoryId, version, status, steps[{label:Cadrage}]
  ✗ no recommendationId / semanticKey / targetCycleTypeId

LPS v2
  trajectoryId + trajectoryVersion → candidate pointer
  ✗ epistemicItemIds empty
  ✗ no LR refs

Audit oa.trajectory.created
  trajectoryId + correlationId
  ✗ no recommendationId

Bridge action response (ephemeral only)
  returns recommendationId + semanticKey + targetCycleTypeId + trajectoryId
  ✗ not persisted as link
```

---

## 7. Exact reconstruction matrix

| Question | After restart | Classification |
| --- | --- | --- |
| Q1 trajectory → recommendationId | no field | **NOT AVAILABLE** |
| Q1 trajectory → semanticKey | no field | **NOT AVAILABLE** |
| Q1 trajectory → targetCycleTypeId | label reverse-map only | **HEURISTIC ONLY** (forbidden as authority) |
| Q1 LR alone → its own ids | yes in epistemic payload | **PROVEN** (LR identity) |
| Q1 LR → trajectoryId | relatedObjects/basisRefs lack it | **NOT AVAILABLE** |
| Q1 LPS → trajectory | yes | **PROVEN** |
| Q1 LPS → recommendationId | no | **NOT AVAILABLE** |
| Q1 audit → recommendationId | no | **NOT AVAILABLE** |
| Q1 bridge response after restart | ephemeral | **NOT AVAILABLE** |

**Label reverse-mapping** (`Cadrage` → `cyc:framing` via unique catalog label) is explicitly **not** an acceptable identity proof.

---

## 8. Q2 — Epistemic existing contract

| Capability | Assessment |
| --- | --- |
| Persist LR with semanticKey + targetCycleTypeId | **YES** (proven LIVE) |
| Persist relatedObjects array in SQLite payload | **YES** |
| Query relatedObjects as SQL column | **NO** — payload scan only |
| LR relatedObjects currently includes trajectoryId | **NO** (`[projectId]` only) |
| UpdateEpistemicState can overwrite relatedObjects | **YES** (capability) |
| Bridge updates LR after create | **NO** |
| LR-D01 / LR-D03 | Explicit: **no relatedObjects machine protocol** for Lifecycle Recommendation encoding |
| Updating LR basisRefs.trajectoryId post-bridge | Would realign fingerprint → risk **false CURRENT** resurrection — unsafe |
| Creating second CURRENT Recommendation | Must be avoided; relation item must have **authority none** and not be a NEXT_CYCLE LR |

**Conclusion Q2:** primitives **can** store an exact durable relation **without new table**, but **not via treating LR.relatedObjects as machine protocol** (prior LR decision) and **not via mutating LR basisRefs** (currentness hazard). A **non-LR EpistemicItem** relation is the coherent reuse path.

---

## 9. Q3 — Update vs new epistemic relation

| Path | Technically possible | Doctrinally coherent | Restart-safe if written |
| --- | --- | --- | --- |
| **A. Enrich source LR** (relatedObjects or basisRefs) | Yes | **Weak / conflict**: LR-D01/D03 bans relatedObjects machine protocol; basisRefs update risks CURRENT resurrection | relatedObjects-only: possible; basisRefs: unsafe |
| **B. New EpistemicItem relation** (Observation/Fact) linking projectId + recommendationId + trajectoryId | Yes | **Strong**: V3-F04 Observation/Fact; authority none; no fake LR | Yes if atomic with trajectory create |
| **C. Reconstruct from facts as-is** | Only heuristically | Insufficient for HD authority | **No** (exact) |

---

## 10. Q4 — Audit / correlation

| Item | Verdict |
| --- | --- |
| Durable | YES (`oa_audit_events`) |
| Contains recommendationId | **NO** |
| Contains semanticKey / targetCycleTypeId | **NO** |
| Shared correlation across LR produce and trajectory create | **NO** (different correlationIds) |
| Role | **Observability only** — insufficient as métier truth for future HumanDecision |

Do **not** promote audit to second business SoT.

---

## 11. Q5 — ProjectTrajectory domain delta

A field such as `sourceRecommendationRef` / `sourceRecommendationSemanticKey` / `targetCycleTypeId` on ProjectTrajectory/Step would make reconstruction exact **from trajectory alone**.

| Question | Answer |
| --- | --- |
| Strictly necessary given Option B? | **No** — Epistemic relation can carry the FK without Trajectory schema change |
| When it would become necessary | If Morris rejects Epistemic relation as SoT for this link, or requires trajectory-local self-description |
| Impacts if chosen | domain types + SQLite payload convention + read models + migration/compat for existing candidates; **Morris structural gate** |

**This qualification does not choose Option C.** It records it as optional structural alternative.

---

## 12. Q6 — Future HumanDecision basis (minimum before Pilote decides)

Required durable facts before candidate → HD:

| Need | Today | Gap |
| --- | --- | --- |
| projectId | YES | — |
| trajectoryId | YES | — |
| candidateVersion | YES | — |
| cycle canonique (`targetCycleTypeId`) | HEURISTIC via label | **exact id missing on candidate** |
| provenance of proposition (recommendationId / semanticKey) | ephemeral / LR exists but unlinkable | **exact link missing** |
| exact object presented to Pilote | UI candidate block | need sealed digest/refs at decide time |
| absence of stale/drift at decide | CURRENT LR already STALE (expected) | decide must bind **source LR id at bridge time**, not “current LR now” |
| 0 CycleInstance / no fake OptionSet | YES today | preserve — do not force W2 active-cycle path |

### W2 DecisionBasis comparison (reuse, do not force)

`DecisionBasis.trajectoryContext` already has:

- `trajectoryId`, `candidateVersion`, `optionRefs`, `selectedOptionRef`, `recommendedOptionRef?`, `epistemicRefs?`, `optionSetDigest?`

**Reusable pattern:** bind decision to trajectory version + epistemic refs + digest of presented object.

**Greenfield-specific:** no active CycleInstance; no W2 OptionSet; single candidate step from LR — must **not** invent OptionSet / CycleInstance. A greenfield DecisionBasis adaptation should reference:

- trajectoryId + candidateVersion
- epistemicRefs including **source recommendationId** (+ optional provenance Observation id)
- canonical `targetCycleTypeId` recovered via provenance (not label hack)
- proposalContext.lpsVersion at decide time
- sourceDigest over sealed presented candidate surface

---

## 13. Options A→E

### OPTION A — Reuse LR.relatedObjects / provenance on source Recommendation

| Dimension | Note |
| --- | --- |
| Correctness | Incomplete today; writable but conflicts with LR-D01/D03 machine-protocol ban |
| Restart exactitude | Possible if written **and** protocol allowed |
| Currentness hazard | basisRefs mutation unsafe |
| Authority | Must not resurrect CURRENT |
| Recommendation | **REJECT** as primary machine protocol (doctrinal conflict + hazard) |

### OPTION B — Dedicated Epistemic relation item (existing schema, no new table)

| Dimension | Note |
| --- | --- |
| Correctness | Exact if relatedObjects includes `projectId` + `recommendationId` + `trajectoryId` |
| Restart | Load Observation by trajectoryId ∈ relatedObjects → recommendationId → LR payload (semanticKey, targetCycleTypeId) |
| Atomicity | Same transaction/unit as CreateInitialTrajectory + UpdateEpistemicState |
| Idempotence | Bridge already fail-closed if trajectory exists; relation create must be once |
| Authority | Observation/Fact · authority none · not a NEXT_CYCLE LR |
| Doctrine v3 | Aligns V3-F04 provenance |
| Parallel architecture | No |
| Persistence / migration | Existing `oa_epistemic_items` only |
| Future HD | `epistemicRefs` can cite Observation + Recommendation |
| Debt | Need typed convention/query helper (not new table) |
| Complexity | Low–moderate |
| Recommendation | **ADAPT / KEEP existing store — RECOMMENDED** |

### OPTION C — ProjectTrajectory / Step provenance fields

| Dimension | Note |
| --- | --- |
| Correctness | Strong self-describing trajectory |
| Restart | Exact from trajectory alone |
| Persistence | Domain + payload convention; possible soft migration |
| Structural | **Yes — Morris gate** |
| Recommendation | **KEEP as alternative** — only if B rejected by Morris |

### OPTION D — Audit/correlation only

| Dimension | Note |
| --- | --- |
| Correctness | Missing recommendationId |
| Métier truth | Insufficient |
| Recommendation | **REJECT** as sole provenance SoT |

### OPTION E — New relational table/store

| Dimension | Note |
| --- | --- |
| Necessity | **Not proven** — existing Epistemic store can carry the link |
| Recommendation | **REJECT by default** |

---

## 14. Recommendation (≠ Morris decision)

**Recommend OPTION B** for the next Delivery:

1. At successful bridge (same atomic unit as CreateInitialTrajectory):
   - persist one EpistemicItem (Observation or Fact) with `relatedObjects` containing at least `projectId`, `recommendationId`, `trajectoryId`;
   - authority none; not a Lifecycle Recommendation; no CURRENT semantics;
   - optional: store `semanticKey` / `targetCycleTypeId` only by **reference** to the source LR (lookup), not by inventing a second LR.
2. Read path for future HD / UI:
   - reconstruct exact provenance from Observation → Recommendation;
   - **forbid** label reverse-mapping as authority.
3. Do **not** mutate source LR basisRefs.
4. Do **not** force W2 OptionSet / CycleInstance.
5. Keep audit as observability; optionally enrich audit payload later without making it SoT.

**Structural gate:**

### NO NEW STRUCTURAL DOMAIN DECISION REQUIRED

Rationale: completion uses **existing** EpistemicItem + UpdateEpistemicState + Trajectory + LPS primitives without new table/schema field on ProjectTrajectory.

If Morris prefers trajectory-local fields (Option C) instead, then escalate to **MORRIS STRUCTURAL DECISION REQUIRED** — Decision Pack minimal would be: adopt `sourceRecommendationRef` (+ optional semanticKey/targetCycleTypeId) on ProjectTrajectory candidate create.

---

## 15. RESERVE dispositions

| Reserve | Disposition |
| --- | --- |
| **RESERVE-TRJ-PROVENANCE-01** | **OPEN / NON-BLOCKING** — exact durable link **not yet written**; contract path **qualified** for Delivery |
| **RESERVE-QA-MOCK-01** | **OPEN / NON-BLOCKING** |

Reserve is **not closed** by this qualification.

---

## 16. Next capability / Delivery contract (describe only — no code)

**Next Delivery (gated by Morris acceptance of this recommendation):**

`candidate provenance durable (Option B) → HumanDecision Pilote (greenfield)`

Must prove:

- atomic write of provenance Observation with trajectory create (or explicit repair path for already-LIVE candidate `prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b` under separate GO);
- restart reconstruction exact for recommendationId + semanticKey + targetCycleTypeId;
- decide path binds sealed presented candidate + epistemicRefs;
- 0 CycleInstance invention; 0 START; 0 EC;
- RESERVE-TRJ-PROVENANCE-01 closable only after LIVE or deterministic proof of restart-exact link.

**This cycle implements nothing.**

---

## 17. Anti-claims

- RESERVE-TRJ-PROVENANCE-01 **not** CLOSED
- HumanDecision bridge **not** proven
- trajectory validated / START / R2 / PR / runtime v3 ADOPTED — **not** claimed
- ZERO REAL · Product files changed ZERO

---

## 18. Final verdict

**CANDIDATE TRAJECTORY PROVENANCE — EXISTING CONTRACT SUFFICIENT / DELIVERY QUALIFIED**

Meaning:

- today, exact restart reconstruction of candidate ↔ LR is **NOT AVAILABLE**;
- existing Epistemic persistence is **sufficient** to carry the missing link without new table/schema;
- recommended next Delivery = Option B (dedicated Epistemic relation item);
- **no Morris structural domain decision required** unless Option C is preferred instead;
- reserve stays OPEN until Delivery proves the write + restart reconstruction.
