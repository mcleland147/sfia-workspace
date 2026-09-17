# ChatGPT Review Pack — FULL
## PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 — R9 recovery CTA blocked by pre-existing generic EC runtime precedence

**Timestamp (UTC):** 2026-09-17T21:42:46Z
**Pack kind:** FULL (diagnostic READ-ONLY — no Product code modification in this lot)
**Pack revision:** R9 — recovery CTA blocked by pre-existing generic EC runtime precedence
**Automation:** L3 handoff publish only; **NO** project commit/push/PR/merge; **ZERO REAL**; **NO Execute**; **NO Attempt**; **NO HumanDecision**; **NO SQLite mutation**; **NO inspect/confirm/authorize** of wrong EC

---

## 1. Git Truth

| Field | Value |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| Branch | `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| origin/main | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| Baseline match | YES |
| Macro | PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 |
| Cycle | 9 — QA / Validation |
| Typologie | EVOL |
| Profil | CRITICAL |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
 M projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/package-lock.json
?? .tmp-sfia-review/checkpoint-e-prepare-fix.diff
?? .tmp-sfia-review/checkpoint-e-r4-evidence-coherence.diff
?? .tmp-sfia-review/checkpoint-e-resume-full.diff
?? .tmp-sfia-review/checkpoint-f-r6-observability.diff
?? .tmp-sfia-review/checkpoint-f-r7-recovery-options.diff
?? .tmp-sfia-review/checkpoint-f-r8-recovery-successor.diff
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceRematerialize.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointE.prepareResume.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/docsWriteEvidenceContradictionView.ts
?? projects/sfia-studio/app/features/project-assistant/f3/processFailureDiagnostic.ts
?? projects/sfia-studio/app/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements.ts
?? projects/sfia-studio/app/features/project-assistant/f3/resolveDurableBoundaryProofMode.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareReadyProposalPursueContinuation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
```

### Preservation

- R1–R8 Product dirty files: **preserved** (no edits this lot)
- `package-lock.json`: hors scope — untouched
- Campaign DB: **read-only** (mtime not mutated by this diagnostic)
- Wrong generic EC: **not** inspected / confirmed / authorized / cancelled
- Attempt count: **1** (`xat:w3a:1f49d8e25e20837a` failed)
- Target: **ABSENT**
- REAL budget remaining: **1**

---

## 2. Qualification

Diagnostic QA CRITICAL sur precedence runtime après R8. Capacité v3: FAIL → recovery HD → successor EC — **bloquée à l'accès CTA**, pas à la sémantique prepare.

Sources relues: cycle template · Build Doctrine · Roadmap · C1 · framing 32/34/35 · R8 handoff · TrajectorySurface · `w2ReadRecoveryExecutionBindingAction` · `resolveRecoveryExecutionBinding` · `readCurrentGovernedExecutionContinuity` · `cancelWrongGenericCurrentIfNeeded` (R8 prepare).

---

## 3. Root cause (answers Q1–Q7)

### Q1 — Branch/render path qui gagne

**Current EC continuity gagne.** Sur reload:

1. `rehydrateActiveDecisionSubject` → `kind: "none"` pour HD trajectory recovery (seul `pursue_prepare_ready` proposal remplit `decision`).
2. `rehydrateGovernedExecutionContinuity` → `kind: "active"` pour `xct:w3a:dec:w2-trj:7e6ca68a-…` (`confirmation_required`).
3. `setContract(...)` peuplé avec le wrong generic.
4. CTA R8 gated par `!contract && recoveryDocsWritePrepareReady && recoveryBinding` → **jamais rendu**.
5. Bloc contrat + « Inspecter » monopolise la prochaine action (`proposalSubjectOwnsNextAction` car `contract != null`).

Même si `recoveryBinding` était chargé, **`!contract` le masque**.

### Q2 — `w2ReadRecoveryExecutionBindingAction` appelée ?

**Sur restart/reload campagne: effectivement non (short-circuit client).**

```ts
// TrajectorySurface useEffect R8
if (!decision || decision.proposalId || decision.selectedOptionRef !== GOVERNED_OPTION_REF) {
  setRecoveryBinding(null);
  return; // ← short-circuit: decision === null après reload trajectory HD
}
```

`decision` n'est **pas** rehydraté pour ProjectTrajectory recovery HD (`readActiveProposalDecisionSubject` → `none`). Seule `continuityDecisionRef` reçoit `dec:w2-trj:7e6ca68a-…` via continuity — **non branchée** sur le load binding.

Si appelée serveur avec `decisionId` campagne: binding **serait** résolvable (voir Q5).

### Q3 — Continuity masque-t-elle le recovery CTA ?

**Oui.** `readCurrentGovernedExecutionContinuity` classe tout EC pré-exécution courant unique (`confirmation_required` ∈ PRE_EXECUTION_STATUSES) comme `kind: "active"`. Wrong generic non terminal / non superseded → current. UI set `contract` → CTA recovery inaccessible. Continuity **ne consulte pas** RecoveryExecutionBinding.

### Q4 — R8 T4 couvrait-il wrong generic déjà current avant restart ?

**Non.**

T4 UI: propose → decide → mock binding → assert CTA, avec continuity mock default `kind: "none"` (`contract` null).

T5 durable: crée wrong generic puis appelle **directement** `prepareDocsWriteRecoverySuccessorFromDecision` (API), sans surface restart.

**Test manquant exact:**

> Après HD recovery + wrong generic EC durable `confirmation_required` current pour la même HD → remount/rehydrate continuity → surface doit exposer CTA recovery (pas monopoliser Inspect) → clic PREPARE explicite cancel + successor ; **aucun** auto-cancel au load.

### Q5 — Binding résolvable malgré wrong generic plus récent ?

**Oui (durable).** DB campagne (read-only):

| Asset | State |
|---|---|
| Failed EC `xct:m3-ev:8aaa188b3a3bd7a7` | failed · `cursor.docs_write.apply` · path sandbox |
| Attempt `xat:w3a:1f49d8e25e20837a` | failed |
| Evidence `ev:w3b:0b7609835db72e9a` | available |
| W3C `epi:w3c-rec:a5b6220be2cc1e84` | recover / FAIL / same attempt |
| HD `dec:w2-trj:7e6ca68a-…` | accepted · governed-gated · `trajectory_option` |
| Wrong EC | confirmation_required · generate-temporary-artifact |

`resolveRecoveryExecutionBinding` lit RecoveryContext + failed EC — **ignore** le current generic. Wrong EC n'invalide pas le binding.

### Q6 — Notion « replaceable before inspection » ?

**Oui côté PREPARE R8, non côté UI/continuity.**

`cancelWrongGenericCurrentIfNeeded` dans `prepareDocsWriteRecoverySuccessor.ts`:

- continuity active
- current ≠ docs_write
- `continuity.decisionRef === recoveryDecisionId`
- → Cancel canonique (authority scope = wrong EC scope)

**Absent:** read-model / next-action ownership exposant ce cas à la surface avant clic PREPARE.

### Q7 — Plus petit wiring

**MINIMAL — UI + restart decision wiring only. No new persistence. No new lifecycle. No auto-cancel on reload.**

1. **Restart:** quand continuity `decisionRef` = HD recovery gouvernée, charger RecoveryExecutionBinding avec ce `decisionId` même si `decision` state client est null (ou rehydrater une projection HD minimale depuis continuity lineage — sans nouvelle HD).
2. **Precedence render:** si RecoveryExecutionBinding cohérent **et** current EC = non-docs_write pre-exec lié à **la même** HD (uninspected / unconfirmed / unexecuted) :
   - présenter CTA recovery PREPARE comme prochaine action utile ;
   - conserver wrong EC visible en historique / détail non monopolisant ;
   - **ne pas** auto-Cancel au reload ;
   - **ne pas** auto-PREPARE ;
   - clic PREPARE → chemin R8 existant (Cancel + successor).
3. Garder Inspect générique pour les cas **sans** RecoveryExecutionBinding.

STOP non déclenché: Cancel existant suffit ; pas de nouvelle sémantique supersede requise.

---

## 4. Classification

**A + B (primary)**

| Code | Applicabilité |
|---|---|
| **A. UI render precedence** | YES — `!contract` cache le CTA même si binding présent |
| **B. current-execution continuity precedence** | YES — wrong generic `confirmation_required` = current monopolisant |
| C. Binding not resolved with generic present | NO (serveur) / YES-client restart short-circuit (`decision` null) |
| D. missing persisted relationship | NO — assets durables cohérents |
| E. structural | NO — wiring UI/restart minimal |

---

## 5. Topology

### Runtime actuel (campagne)

```
Reload
 → Subject = none (trajectory HD non rehydratée en `decision`)
 → Continuity = active(wrong generic confirmation_required)
 → setContract(wrong)
 → R8 binding effect short-circuit (!decision)
 → CTA recovery ABSENT
 → Inspect monopolise
```

### Cible minimale

```
Reload
 → Continuity = active(wrong)  [historique préservé]
 → Binding load via continuityDecisionRef / HD lineage
 → Next-action = recovery PREPARE CTA (explicit)
 → Wrong EC visible non-monopolisant
 → PREPARE click → Cancel wrong + successor docs_write (R8)
 → No auto-cancel / no auto-PREPARE
```

---

## 6. Campaign state (read-only)

| Check | Value |
|---|---|
| Attempt count | 1 failed |
| Failed docs_write EC | present / failed / path OK |
| Wrong generic EC | confirmation_required / uninspected |
| Recovery HD | accepted / governed-gated |
| W3C recover | present / FAIL / same attempt |
| Target file | ABSENT |
| REAL this lot | 0 |
| REAL budget remaining | 1 |

**R8 deterministic proof:** valide sur scope tests.
**R8 runtime acceptance:** **NON acquise** tant que CTA inaccessible sur campagne.

---

## 7. Claims

**Autorisés**
- recovery CTA blocked by current generic EC UI/continuity precedence — diagnostically proven
- RecoveryExecutionBinding durable still resolvable
- ZERO REAL / no Attempt / no HD / no SQLite mutation this lot
- previous Attempt remains FAIL

**Interdits**
- fix implemented · retry executed · REAL PASS · READY · runtime acceptance R8

---

## 8. Gate suivant

Lot correctif minimal (wiring only): restart binding load + render precedence pour wrong generic replaceable → CTA accessible → Pilot PREPARE explicite → inspection successor.

Puis seulement: Confirmation / authority / ONE FRESH CURSOR REAL.

---

## 9. Verdict unique

**RECOVERY CTA RUNTIME PRECEDENCE BLOCKER — MINIMAL FIX IDENTIFIED**
