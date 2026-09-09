# SFIA Studio Review Pack — FULL

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-09-09 20:13:44 CEST |
| **Cycle ID** | `SFIA-STUDIO-PRE-CYCLE-ROUTING-BOUNDARY-LIVE-DIAGNOSTIC-01` |
| **Type** | 9 — QA / validation · RUN · CRITICAL |
| **Décision Morris consommée** | `GO MORRIS — LIVE ROUTING-BOUNDARY ROOT-CAUSE READ-ONLY DIAGNOSTIC` |
| **Product files changed** | **ZERO** |
| **ZERO NEW REAL** | OUI — aucun nouvel appel OpenAI/Nora |
| **Verdict** | LIVE ROUTING-BOUNDARY ROOT CAUSE — PROVEN |

---

## 1. Local Git Truth

| Check | Observed |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| HEAD | `e79f16ba467c227470328d7f723f1c2b53fdf2fb` |
| parent | `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0` |
| origin/main | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| staged | empty |
| dirty | `.tmp-sfia-review/*` only (review + prior captures + this diagnostic texts) |

**PASS** — no unexplained Product divergence.

---

## 2. Project identity proof

| Field | Value | Evidence class |
| --- | --- | --- |
| projectId | `prj:8d86862e-5ba2-4f4d-a749-76f60189c32c` | OBSERVED |
| title | `Application de gestion de tâches — routing boundary replay` | OBSERVED |
| createdAt | `2026-09-09T17:48:11.169Z` | OBSERVED |
| LPS | `lps:2833396b-8608-425c-afbd-99553430e664` · version **1** | OBSERVED |
| objective | matches live intent (quotidien / progressive) | OBSERVED |
| context | `Projet personnel / application web` | OBSERVED |
| session | `nora-session.sqlite` · `project_id` + `session_key=f1-default` · 11 items | OBSERVED |
| session timestamps vs product DB | both mtime `2026-09-09T19:59:26+0200` | OBSERVED |

Rejected siblings (same DB, different titles/times):
- `prj:3240c12d-…` — “corrective replay” @ 15:14Z
- `prj:f2d16280-…` — earlier “Application de gestion de tâches” @ 11:13Z

**Identity: UNIQUE / NOT AMBIGUOUS.**

---

## 3. Read-only proof

| Artifact | sha256 before | sha256 after | mtime |
| --- | --- | --- | --- |
| product.sqlite (greenfield path via env) | `74b0a7a9005f2fb2db71989f395d6921322dd08418aa3ca892de1a09bcf28b52` | identical | 2026-09-09T19:59:26+0200 |
| nora-session.sqlite (corr `.sfia-exec/product`) | `c5405e39cd848c49e27d1cf629a4e37c3dcb9c90ae578d42cd90f0bc451ee5f8` | identical | 2026-09-09T19:59:26+0200 |

Access method: `sqlite3 file:…?mode=ro` / `sqlite3.connect(uri, uri=True)` — no writes.

---

## 4. Durable Truth Check (OBSERVED)

For `prj:8d86862e-…`:

| Fact | Count / value |
| --- | --- |
| CycleInstance | **0** |
| activeCycleInstanceId | **null** |
| HumanDecision | **0** |
| EpistemicItem (all) | **0** |
| EpistemicItem lifecycle-recommendation | **0** |
| ProjectTrajectory rows | **0** |
| trajectory current | **0** |
| LPS version | **1** |
| Audit events | 24 × `oa.cycle.load_failed` / `TRAJECTORY_NOT_FOUND` |

UI observation (aucune LR CURRENT / aucun cycle) is **confirmed by durable state**.

---

## 5. Raw structured output recovery

**Result: RECOVERABLE (OBSERVED).**

Source: Memory B / ProductSqliteSession `session_items.item_json` for assistant messages.
Content is the **Agents product-turn JSON string** (narrative + preCycleRoutingAssessment + lifecycleRecommendation).

Artifacts written (text only, under `.tmp-sfia-review/live-diagnostic/`):
- `timeline.json`
- `assistant-seq-{1,4,7,10}.json`

No new model call.

Note: session contains **4** assistant structured turns. User-facing campaign described 3; seq7+seq10 are two “formalise…” attempts (seq5 and seq8 identical user text). Turn-3 narrative quoted by Morris matches **seq10**.

---

## 6. Per-turn evidence matrix

| Turn | User (OBSERVED) | Asst seq | Assessment | Disposition (DERIVED) | LR present raw? | Coherence | Materialize (DERIVED) | Durable LR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | “Je veux commencer…” | 1 | READY_TO_EMIT booleans | EMIT | YES NEXT_CYCLE target=`Cadrage` | keep | `LR_TRAJECTORY_REQUIRED` | none |
| 2 | “Oui… Cadrage” | 4 | READY_TO_EMIT | EMIT | YES | keep | `LR_TRAJECTORY_REQUIRED` | none |
| 3a | “formalise… Cadrage…” | 7 | READY_TO_EMIT | EMIT | YES | keep | `LR_TRAJECTORY_REQUIRED` | none |
| 3b | same formalise (retry) | 10 | READY_TO_EMIT | EMIT | YES | keep | `LR_TRAJECTORY_REQUIRED` | none |

Hypothesis A (CONTINUE + null): **REJECTED** — OBSERVED assessment is EMIT with LR non-null.
Hypothesis B (suppressed by coherence): **REJECTED** — DERIVED coherence keeps LR.
Hypothesis C (EMIT+LR but materialization fails): **PROVEN**.
Hypothesis D (persisted but not CURRENT): **REJECTED** — epistemic count 0.
Hypothesis E (output not recoverable): **REJECTED** — recovered from session.


#### Assistant seq=1 (OBSERVED from session_items)

**narrative (OBSERVED):**
> Le besoin établi est de disposer d’une application web personnelle pour suivre les tâches quotidiennes et construire progressivement une première version utile. Pour avancer sans présumer de la solution, le prochain travail pertinent est de clarifier la valeur recherchée, le périmètre utile, les situations concrètes à soutenir et les critères de réussite. Je recommande donc un cycle de Cadrage ; nous n’avons pas encore à choisir la technologie, l’architecture ou les fonctionnalités détaillées.

**preCycleRoutingAssessment (OBSERVED):**
```json
{
  "routingBlockingUnknownPresent": false,
  "candidateCycleSupportable": true,
  "remainingUnknownsAreCycleOwned": true,
  "multiplePlausibleCycles": false,
  "activeCycleAlreadyCoversWork": false
}
```

**lifecycleRecommendation BEFORE coherence (OBSERVED = session raw):**
```json
{
  "intent": "NEXT_CYCLE",
  "statement": "Passer à un cycle de Cadrage pour transformer le besoin de suivi quotidien en périmètre utile et vérifiable.",
  "subjectCycleInstanceId": null,
  "targetCycleInstanceId": null,
  "targetCycleTypeId": "Cadrage",
  "rationale": "L’intention est claire, mais la valeur, le périmètre, les contraintes et les critères de succès restent à clarifier ; ces inconnues appartiennent au Cadrage.",
  "authority": "none",
  "isHumanDecision": false
}
```

**derivePreCycleRoutingDisposition (DERIVED FROM CODE + OBSERVED assessment):** `EMIT_LIFECYCLE_RECOMMENDATION`

**AFTER coherence (DERIVED):** LR preserved; `lifecycleRecommendationSuppressed=false`; `boundaryContradiction=null`

**validateLifecycleRecommendation with hasTrajectoryContext=false (DERIVED / reproducible offline):**
`ok:false` · code=`LR_TRAJECTORY_REQUIRED` · reason=`next_cycle_requires_trajectory`

**validate with hasTrajectoryContext=true (DERIVED):** `ok:true` · targetCycleTypeId=`Cadrage` (accepted by validator; no catalog ID check)


#### Assistant seq=4 (OBSERVED from session_items)

**narrative (OBSERVED):**
> D’accord. Le Cadrage est le prochain travail recommandé. Ton accord confirme l’orientation dans notre échange, mais n’ouvre pas automatiquement un cycle actif. Une fois le Cadrage matérialisé par Studio, nous pourrons clarifier la valeur recherchée, le périmètre utile et les critères de réussite.

**preCycleRoutingAssessment (OBSERVED):**
```json
{
  "routingBlockingUnknownPresent": false,
  "candidateCycleSupportable": true,
  "remainingUnknownsAreCycleOwned": true,
  "multiplePlausibleCycles": false,
  "activeCycleAlreadyCoversWork": false
}
```

**lifecycleRecommendation BEFORE coherence (OBSERVED = session raw):**
```json
{
  "intent": "NEXT_CYCLE",
  "statement": "Ouvrir un cycle de Cadrage pour clarifier le besoin et définir une première version utile.",
  "subjectCycleInstanceId": null,
  "targetCycleInstanceId": null,
  "targetCycleTypeId": "Cadrage",
  "rationale": "L’orientation a été acceptée dans la conversation ; le travail de clarification reste à mener dans le cycle candidat.",
  "authority": "none",
  "isHumanDecision": false
}
```

**derivePreCycleRoutingDisposition (DERIVED FROM CODE + OBSERVED assessment):** `EMIT_LIFECYCLE_RECOMMENDATION`

**AFTER coherence (DERIVED):** LR preserved; `lifecycleRecommendationSuppressed=false`; `boundaryContradiction=null`

**validateLifecycleRecommendation with hasTrajectoryContext=false (DERIVED / reproducible offline):**
`ok:false` · code=`LR_TRAJECTORY_REQUIRED` · reason=`next_cycle_requires_trajectory`

**validate with hasTrajectoryContext=true (DERIVED):** `ok:true` · targetCycleTypeId=`Cadrage` (accepted by validator; no catalog ID check)


#### Assistant seq=7 (OBSERVED from session_items)

**narrative (OBSERVED):**
> Recommandation de Cadrage formalisée pour transmission à Studio, sans ouverture ni démarrage de cycle. Elle vise à clarifier le besoin réel, la valeur attendue, le périmètre utile et les critères de réussite avant toute conception ou réalisation. Aucun cycle n’est actuellement actif.

**preCycleRoutingAssessment (OBSERVED):**
```json
{
  "routingBlockingUnknownPresent": false,
  "candidateCycleSupportable": true,
  "remainingUnknownsAreCycleOwned": true,
  "multiplePlausibleCycles": false,
  "activeCycleAlreadyCoversWork": false
}
```

**lifecycleRecommendation BEFORE coherence (OBSERVED = session raw):**
```json
{
  "intent": "NEXT_CYCLE",
  "statement": "Recommander un cycle de Cadrage pour clarifier le besoin et définir une première version utile de l’application de gestion de tâches.",
  "subjectCycleInstanceId": null,
  "targetCycleInstanceId": null,
  "targetCycleTypeId": "Cadrage",
  "rationale": "L’intention est suffisamment claire pour recommander le Cadrage ; les inconnues restantes — valeur, périmètre, contraintes et succès — relèvent de ce cycle. Cette recommandation n’ouvre ni ne démarre le cycle.",
  "authority": "none",
  "isHumanDecision": false
}
```

**derivePreCycleRoutingDisposition (DERIVED FROM CODE + OBSERVED assessment):** `EMIT_LIFECYCLE_RECOMMENDATION`

**AFTER coherence (DERIVED):** LR preserved; `lifecycleRecommendationSuppressed=false`; `boundaryContradiction=null`

**validateLifecycleRecommendation with hasTrajectoryContext=false (DERIVED / reproducible offline):**
`ok:false` · code=`LR_TRAJECTORY_REQUIRED` · reason=`next_cycle_requires_trajectory`

**validate with hasTrajectoryContext=true (DERIVED):** `ok:true` · targetCycleTypeId=`Cadrage` (accepted by validator; no catalog ID check)


#### Assistant seq=10 (OBSERVED from session_items)

**narrative (OBSERVED):**
> La recommandation structurée de Cadrage est émise pour matérialisation éventuelle par Studio. Je ne prétends pas qu’elle a été enregistrée ; aucun cycle n’est ouvert ni démarré.

**preCycleRoutingAssessment (OBSERVED):**
```json
{
  "routingBlockingUnknownPresent": false,
  "candidateCycleSupportable": true,
  "remainingUnknownsAreCycleOwned": true,
  "multiplePlausibleCycles": false,
  "activeCycleAlreadyCoversWork": false
}
```

**lifecycleRecommendation BEFORE coherence (OBSERVED = session raw):**
```json
{
  "intent": "NEXT_CYCLE",
  "statement": "Recommander un cycle de Cadrage pour clarifier le besoin et définir une première version utile.",
  "subjectCycleInstanceId": null,
  "targetCycleInstanceId": null,
  "targetCycleTypeId": "Cadrage",
  "rationale": "Les inconnues restantes — valeur, périmètre, contraintes et critères de succès — relèvent du Cadrage. Cette recommandation n’autorise ni l’ouverture ni le démarrage du cycle.",
  "authority": "none",
  "isHumanDecision": false
}
```

**derivePreCycleRoutingDisposition (DERIVED FROM CODE + OBSERVED assessment):** `EMIT_LIFECYCLE_RECOMMENDATION`

**AFTER coherence (DERIVED):** LR preserved; `lifecycleRecommendationSuppressed=false`; `boundaryContradiction=null`

**validateLifecycleRecommendation with hasTrajectoryContext=false (DERIVED / reproducible offline):**
`ok:false` · code=`LR_TRAJECTORY_REQUIRED` · reason=`next_cycle_requires_trajectory`

**validate with hasTrajectoryContext=true (DERIVED):** `ok:true` · targetCycleTypeId=`Cadrage` (accepted by validator; no catalog ID check)


---

## 7. Code execution trace (INFERRED FROM CODE @ e79f16ba + OBSERVED inputs)

```
User send
→ projectAssistantSendAction / orchestrateProjectAssistantTurn
→ runNoraCognitiveTurn → runNoraAgentsTurn (Agents Runner + NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE)
→ finalOutput object/string → structuredOutput
→ normalizeNoraProductTurnStructuredOutput / applyPreCycleRoutingBoundaryCoherence
→ extractLifecycleCandidateFromStructuredOutput
→ materializeLifecycleRecommendationFromStructuredOutput
   → facts.trajectory = null (getCurrentTrajectory not ok; TRAJECTORY_NOT_FOUND audited)
   → hasTrajectoryContext = Boolean(null) = false
   → produceLifecycleRecommendation → validateLifecycleRecommendation
   → FAIL LR_TRAJECTORY_REQUIRED
→ NO updateEpistemicState persist
→ selectCurrentLifecycleRecommendations → empty
→ LifecycleSurface CURRENT empty
```

Important orchestration detail (CODE):
When `getCurrentTrajectory` returns `ok:false`, `orchestrateTurn` sets `trajectory=null` **without** adding `"trajectory"` to `failedMaterialDimensions` (only catch-path does). Failure therefore surfaces as **`LR_TRAJECTORY_REQUIRED`** (validator), not `LR_BASIS_TRAJECTORY_UNAVAILABLE` (material reader).

`lifecycleRecommendationCode` is returned on the send DTO but **not rendered** in pre-m6 Lifecycle/Conversation UI (CODE search) — Pilot sees narrative only + empty CURRENT.

Materialization runs **after** the model turn. Nora cannot observe materializer success when writing narrative (CODE).

---

## 8. Persistence / observability map

| Seam | Persist? | Post-turn recoverable? |
| --- | --- | --- |
| Agents structured product turn JSON | Session message content | **YES** (this diagnostic) |
| coherence disposition / suppressReason | No durable field | DERIVED only |
| materialization code | DTO ephemeral only | NOT durable; not UI-visible |
| EpistemicItem LR | durable if ok | none present |
| CURRENT projection | derived from epistemic | empty |
| TRAJECTORY_NOT_FOUND | oa_audit_events | **YES** (24 events) |

---

## 9. Fake vs Real delta

| Aspect | Deterministic BAR path | This LIVE path |
| --- | --- | --- |
| Trajectory before LR | BAR-RB creates `createInitialTrajectory` | Fresh Project create → **no trajectory** |
| targetCycleTypeId | tests use `cyc:framing` / `cyc:delivery` | LIVE model emitted label **`Cadrage`** |
| Materialization | succeeds when READY+LR+trajectory | fails `LR_TRAJECTORY_REQUIRED` |
| UI | not the BAR focus | CURRENT empty; failure code invisible |

Routing-boundary cognitive property (EMIT when ready) **held in REAL**.
Lifecycle durable materialization **did not**.

Secondary (non-blocking for this failure, but real risk): validator accepts non-catalog `targetCycleTypeId="Cadrage"`. If trajectory existed, a LR might persist with non-canonical type id unless another gate rejects later.

---

## 10. Narrative / structured coherence

Contract **allows** narrative “je recommande Cadrage” with EMIT+LR (observed).
Contract also allows contradictory CONTINUE+null (server does not parse narrative) — **not** what happened here.

Prompt @ e79f16ba already says: do not claim Recommendation is **enregistrée** without product confirmation; server may materialize.

Turn 3b narrative:
> “La recommandation structurée de Cadrage est émise pour matérialisation éventuelle… Je ne prétends pas qu’elle a été enregistrée”

### Structured-emission claim verdict

| Claim layer | Verdict |
| --- | --- |
| Structured field `lifecycleRecommendation` present in model output | **SUPPORTED CLAIM** (OBSERVED) |
| Studio durable/CURRENT LR materialized | **UNSUPPORTED** relative to Product truth (OBSERVED empty epistemic) |
| LIVE-RB-FINDING-02 as absolute “unsupported structured emission” | **PARTIALLY MISFRAMED** — emission structured **did** occur; durable materialization **did not** |

---

## 11. Root cause

**PRIMARY ROOT CAUSE (PROVEN):**

> Fresh greenfield Project has **no ProjectTrajectory**.
> Every LIVE turn emitted EMIT + NEXT_CYCLE LR, but server materialization fail-closed with **`LR_TRAJECTORY_REQUIRED`**.
> Therefore no EpistemicItem / no CURRENT Lifecycle Recommendation, despite correct routing-boundary structured emission.

**Contributing factors:**
1. Project create path does not initialize a trajectory (CODE + OBSERVED empty tables).
2. Materialization failure code not surfaced in Pilote UI (CODE).
3. Model uses human label `Cadrage` as `targetCycleTypeId` (OBSERVED) — secondary catalog hygiene risk.

**Confidence:** **HIGH** — raw structured payloads OBSERVED + durable empty LR OBSERVED + offline validator reproduction + audit TRAJECTORY_NOT_FOUND OBSERVED.

---

## 12. Recommended next corrective scope (NO CODE THIS CYCLE)

Candidate scope after Morris GO (distinct gate):

1. **Greenfield trajectory precondition for NEXT_CYCLE materialization**
   - either create initial trajectory at Project create / first Product path;
   - or redefine validator policy for greenfield NEXT_CYCLE without trajectory (architecture decision);
   - or fail closed with Pilote-visible explanation.

2. **Surface materialization failure** to Pilote (code + short reason) without claiming authority.

3. **Canonicalize `targetCycleTypeId`** to catalog ids (`cyc:framing`) — prompt and/or server validation — without domain keyword matrices.

4. Optional observability: persist materialization attempt result (non-authoritative) for diagnostics.

**NOT recommended here:** prose parser; second model; new cognitive engine.

**Architecture non-decision:** whether NEXT_CYCLE may exist without trajectory remains a Morris/doctrine question if changing validator semantics.

---

## 13. Files potentially involved (future corrective — not modified)

- `orchestrateTurn.ts` (trajectory reader → failedMaterialDimensions / visible code)
- `validateLifecycleRecommendation.ts` / `materializeFromProductTurn.ts`
- Project create / runtime composition (trajectory initialization)
- `buildProjectSystemPrompt.ts` (targetCycleTypeId catalog guidance) — optional
- Lifecycle UI presentation of `lifecycleRecommendationCode`

---

## 14. ZERO NEW REAL

- No OpenAI/Nora live call in this cycle.
- Only read-only SQLite + code inspection + offline pure functions on OBSERVED payloads.

---

## 15. Reserves

- RESERVE-QA-MOCK-01
- RESERVE-RB-UX-01
- LIVE LIFECYCLE MATERIALIZATION NOT PROVEN
- R2 OPEN
- runtime v3 NON ADOPTED

---

## 16. Instruction to ChatGPT

Lire ce handoff et confirmer la root cause.
Si PASS: proposer un gate Morris distinct pour le corrective trajectoire / materialization visibility / catalog type id — **pas** un nouveau REAL avant design.

---

## 17. Verdict

**LIVE ROUTING-BOUNDARY ROOT CAUSE — PROVEN**

Routing boundary cognitive emission worked in REAL.
Durable Lifecycle Recommendation failed because **trajectory missing** → `LR_TRAJECTORY_REQUIRED`.
