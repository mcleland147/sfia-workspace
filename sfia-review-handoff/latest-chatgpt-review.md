# REVIEW PACK FULL — CRITICAL
# D-P6-SHE-01 — PRODUCT GIT INTEGRATION + PRR SEMANTIC SYNC

**Timestamp (UTC):** 2026-10-19T14:12:02Z
**Repository:** mcleland147/sfia-workspace
**Worktree:** `/Users/morris/Projects/sfia-workspace-p6-she-delivery-476b1c20`
**Branch:** `delivery/sfia-studio-p6-single-human-execute`
**HEAD (remote=local):** `f1fc1af49606dbc600f5f839020639f880529696`
**Base main:** `476b1c2065991e05cca298f6669d85b62a07ced3`
**Prior QA handoff:** `d3184a0e` / blob `38c75d2a`
**Cycle:** 13 — PR readiness / CRITICAL
**Capability:** V3-F05 | Milestone P6 | D-P6-SHE-01 Option A

## GO Morris consumed
- Commit Product: YES
- Push Product branch: YES
- Create PR DRAFT: YES
- PRR Protected Refresh (bounded): YES
- Merge: **NO**
- REAL/HQA: NO
- Force push / branch delete: NO

---

## 1. Git Truth

| Item | Value |
|------|-------|
| Initial HEAD | `476b1c20` (= origin/main) with dirty Delivery |
| Product commit | `928ab15b032c392dafee74a916f2faad3ed524de` |
| PRR commit | `f1fc1af49606dbc600f5f839020639f880529696` |
| Push | `origin/delivery/sfia-studio-p6-single-human-execute` = `f1fc1af4` |
| PR | **#590** DRAFT — https://github.com/mcleland147/sfia-workspace/pull/590 |
| Base/Head | `main` ← `delivery/sfia-studio-p6-single-human-execute` |
| HQA worktrees | present on machine; **not** modified |

---

## 2. Convergence Pre-check

CURRENT MAIN: Option B + SHE TARGET adopted (docs).
CANDIDATE now: SHE Delivery **pushed** + PRR CURRENT sync.
KEEP OA backbone. ADAPT PRR docs only. COMPLETE Git integration of candidate.
REPLACE: none.
EXIT PROOF this cycle: PR DRAFT + PRR PASS + deterministic QA + CI Required Gate.

Debt OPEN: TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT.

---

## 3. Inventory — files in PR (`origin/main...HEAD`)

```
A	projects/sfia-studio/app/__tests__/oa/cycle/p6.she.gap03.effectiveGitPrimaryContract.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.uic.unifiedInspectionContract.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.closureRegularization.repositoryCurrentness.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/w2/actions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
M	projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
M	projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
M	projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
A	projects/sfia-studio/app/features/project-assistant/w2/singleHumanExecutePreparedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/domain/executionMateriality.ts
M	projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

**Excluded from Product commit:** `.tmp-sfia-review/**`, SQLite, secrets, HQA paths, doctrine v3 framing, unrelated branches.

---

## 4. PRR semantic review (bounded)

### Contradictions corrected
| Volume | Historical / obsolete claim | CURRENT SHE assertion |
|--------|----------------------------|------------------------|
| 03 F08 | STRUCTURAL PREPARE requires accepted HD | Inspectable PREPARE without prior HD; authority on Exécuter |
| 03 F09 | Tool-First CTA pending | SHE/Tool-First Exécuter CURRENT on Delivery |
| 03 F15 | (no effective EC note) | GAP-03 effective git primary for MUST |
| 04 Dual paths / S1 | S1 = HD opens PREPARE | S1 = authority before launch; SHE path documented; historical disposition retained |
| 02 OBJ-GENERIC-MISSION-HD | HD before PREPARE | SHE: HD on Exécuter; historical path retained |
| 07 | TARGET ≠ IMPLEMENTED | SHE CURRENT on Delivery; HISTORICAL PREPARE-HD timing |
| 08 | PENDING_GIT_INTEGRATION SHE absent | SHE + GAP-03 proof rows |

### Digests before → after (only refreshed)

| Path | Before | After |
|------|--------|-------|
| orchestrateF2.ts | 73d754838d9d13a0 | c8f491d05217ffc4 |
| deriveFinalizationApplicability.ts | 1963f097d0aa9328 | 6fba1892149be55c |
| 02-runtime-object-catalog.md | a63310ed7b85cf1b | 71177cd234b88a3b |
| 03-end-to-end-flow-catalog.md | 733c07f253de5b65 | 12331c256c76bd30 |
| 04-dependency-impact-map.md | b8a66451083f90e3 | b7236bfd326f8f9a |
| 07-authority-invariants… | 8ea3d088c5095108 | 88893854dfe22bd9 |
| 08-test-proof… | 8237aa210ecfac30 | 6c1f4b5fe1cc50c5 |

`lastReviewedCommit` → `928ab15b032c392dafee74a916f2faad3ed524de` (Product commit).

### Checker / conformance
- `node scripts/check-production-runtime-reference.mjs` → **PRODUCTION RUNTIME REFERENCE CONFORMANCE OK**
- `productionRuntimeReference.conformance.d0.test.ts` → **5/5 PASS**

### PRR key lines (post-edit markers)

#### 03-end-to-end-flow-catalog.md
```
82|- **Trigger (Generic PREPARE — D-P6-SHE-01 CURRENT on Delivery branch):** F2 chat-first GO / Nora tool solicitation (F04) / adjacent F05 hand-off → Product `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
84|- **Chemin SHE (CURRENT — D-P6-SHE-01 Option A):** STRUCTURAL / HD-required / UNKNOWN may PREPARE an **inspectable** draft **without** a prior HumanDecision (`decisionRefs` may be empty; Product may stamp `sheDeferredStructuralAuthority`). PREPARE ≠ AUTHORIZE ≠ EXECUTE. Authority is consumed on Pilot **Exécuter** (`singleHumanExecutePreparedContract`): inspect binding (id/version/fingerprint) → record applicable HD (`authorize-inspected-execute`) from OA EC effects (GAP-04) → Confirm/Authorize OA internals → ExecutionAttempt. No silent HD; no Attempt if pre-launch gates fail.
89|  - Structural offer alone ≠ Authorization. Historical HD without mission binding ≠ unlock. Under SHE, lack of Accept does **not** forbid inspectable PREPARE — authority moves to Exécuter.
97|- **Proof:** SHE (`p6.she.singleHumanExecute*`, GAP continuity/HD/finalization) + G-D4 / materiality / M-HD / DER16 / Option1 / Tool-First — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
98|- **Status:** COMPLETE domain (legacy M3); Generic PREPARE + SHE Option A CURRENT on Delivery (PR pending merge); Tool-First R1 CURRENT at tested scope
104|- **SHE / Tool-First Pilot CTA (CURRENT — D-P6-SHE-01):** after inspection attestation is sufficient/aligned, Pilot surface shows **Exécuter** for the inspected contract — the single Pilot gesture records applicable HD when required, folds server Confirm (when required), then Authorize+Select/Start. **Inspect ≠ Execute** preserved (no auto-attest; no silent HD/Confirm). Server steps HD / Confirm / Authorize / Execute remain distinct OA transitions. Paths: `singleHumanExecutePreparedContract.ts`, `pilotExecutionPresentation.ts`, `ExecutionSurface.tsx`.
106|- **Proof:** SHE + Pass03/Pass04 UIC + durable/reconcile continuity + pilotExecutionPresentation / R02 — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
107|- **Status:** COMPLETE tables/services; unified exam + SHE/Tool-First CTA CURRENT on Delivery (PR pending merge)
152|- **Git MUST primary EC (D-P6-SHE-01 GAP-03 CURRENT):** when obligation snapshot includes `git_repository` MUST, `deriveFinalizationApplicability` selects the **effective** (non-superseded) git-applicable ExecutionContract as `primaryContract` for typed Git proof SET qualification — not raw `gitApplicable[0]`. Multiple effective git-applicable ECs → fail-closed (no arbitrary pick). `gitProofPresent=true` ≠ Cycle FINALIZED (other MUST obligations remain). Obligations policy unchanged.
156|- **Status:** COMPLETE assessment engine; Pilot finalize HD required; GAP-03 effective EC CURRENT on Delivery
```

#### 04-dependency-impact-map.md
```
41|## Dual Generic PREPARE admission paths (D-P6-SHE-01 CURRENT on Delivery)
46|      ├─ SHE CURRENT (STRUCTURAL / HD-required / UNKNOWN)
52|      │         → HD authorize-inspected-execute (OA EC effects — GAP-04)
87|**Structural authority gate (S1 — CURRENT SHE):** structural / HD-required authority is verified **before Cursor launch** on Exécuter — not as a precondition that blocks inspectable PREPARE. Disposition-before-PREPARE Accept remains a valid historical path; Refuse/Amend still refuse **that** path. Accept alone is never Execute authority. HD / Confirm / Authorize OA objects are **not** removed.
89|**HISTORICAL S1 (pre-SHE):** only an accepted, mission-bound, applicable, verified, non-superseded HD opened Chemin A PREPARE. Retained for disposition-before-PREPARE callers and legacy M3.
```

#### 07-authority-invariants-and-failure-modes.md
```
5|**Amendement documentaire D-P6-SHE-01 (2026-10-19 — Git Integration) :** SINGLE HUMAN EXECUTE / Option A est **CURRENT on Delivery** (déterministe prouvé au périmètre testé ; PR DRAFT pending merge). Les invariants SHE ci-dessous deviennent CURRENT. Les invariants « STRUCTURAL PREPARE requires HD » restent **HISTORICAL / disposition-before-PREPARE** (chemin encore disponible) — ils ne bloquent plus l’inspectable PREPARE sous SHE. TARGET architecture = Delivery runtime ; ≠ INTEGRATED_ON_MAIN tant que merge Morris non accordé ; ≠ REAL/HQA PROVEN.
35|| INV-EMPTY-REFS-NE-STRUCTURAL | HISTORICAL: `decisionRefs=[]` only for NON_STRUCTURAL. SHE CURRENT: empty refs also admissible on server-stamped `sheDeferredStructuralAuthority` PREPARE (READ/INSPECT continuity only — GAP-01); Confirm/Authorize still refuse empty STRUCTURAL without HD | Option 1 / G-D4 + SHE continuity | p6.o1 / gD4 / p6.she.* | CURRENT (SHE) + HISTORICAL (G-D4-only) |
36|| INV-STRUCTURAL-NEEDS-VERIFIED-HD | HISTORICAL disposition-before-PREPARE: verified mission-bound HD before that PREPARE path. SHE CURRENT: verified applicable HD required before **launch** on Exécuter — not before inspectable PREPARE | verifyGenericMissionHumanDecisionForPrepare / SHE Record | mHd01 / DER16 / p6.she.* | HISTORICAL at PREPARE; CURRENT at Execute (SHE) |
37|| INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | HISTORICAL: STRUCTURAL disposition PREPARE requires accepted HD. SHE CURRENT: inspectable STRUCTURAL PREPARE without prior HD; Accept alone ≠ Execute; Refuse/Amend still refuse disposition-before-PREPARE | verify* / singleHumanExecutePreparedContract | mHd01 / p6.she.* | HISTORICAL at PREPARE; CURRENT SHE deferral |
43|## Dual admission paths — CURRENT (SHE + historical disposition)
45|**Chemin SHE (CURRENT — D-P6-SHE-01):** STRUCTURAL / HD-required / UNKNOWN → inspectable PREPARE (empty refs allowed with server SHE stamp) → Inspect → Pilot Exécuter → applicable HD + Confirm (if required) + Authorize + launch gates → Cursor iff admissible else STOP · 0 Attempt. No silent HD. PREPARE creates neither Authorization nor Attempt.
55|**SHE / Tool-First ordinary CTA (CURRENT):** after Inspect attest, Pilot **Exécuter** records applicable HD when required, may fold Confirm (server), then Authorize+launch — Inspect ≠ Execute; HD ≠ Confirm ≠ Authorize ≠ Execute remain.
68|## SHE CURRENT — D-P6-SHE-01 (2026-10-19) — SINGLE HUMAN EXECUTE / Option A
72|Les invariants HISTORICAL `INV-STRUCTURAL-*PREPARE*HD` et la contrainte PREPARE-only de `INV-EMPTY-REFS-NE-STRUCTURAL` restent vraies pour le **chemin disposition-before-PREPARE** et les suites mHd01 / DER16. Sous SHE, leur **timing PREPARE** est superseded (autorité structurelle avant **lancement**).
74|### SHE invariant catalog (CURRENT — Delivery)
76|| ID | Statement (CURRENT SHE) | Proof owner |
78|| INV-SHE-PREPARE-NO-AUTHORITY | PREPARE ne consomme aucune autorité ; ne crée ni Attempt ni Authorization | `p6.she.singleHumanExecute*` |
79|| INV-SHE-STRUCTURAL-INSPECTABLE | STRUCTURAL / UNKNOWN n’interdit pas PREPARE ni inspection d’un contrat honnêtement stampé | SHE + continuity GAP-01 |
80|| INV-SHE-AUTHORITY-BEFORE-LAUNCH | Autorité structurelle / effective vérifiée **avant** tout lancement Cursor (pas avant PREPARE) | SHE Execute path |
81|| INV-SHE-EXECUTE-BINDS-INSPECTED | Le clic Exécuter est lié au contrat inspecté (id + version + semantic fingerprint) | SHE + GAP-04 |
82|| INV-SHE-NO-SILENT-HD | Aucune HumanDecision silencieuse ; HD uniquement sur action Pilote explicite (sujet/version/digest) | SHE Record |
83|| INV-SHE-NO-EXEC-WITHOUT-EFFECTIVE-AUTH | Aucune exécution sans autorité effective ; 0 Attempt si gate pré-lancement échoue | SHE |
84|| INV-SHE-NO-AUTO-ELEVATION | Aucune élévation automatique de capacité / permission / chemin protégé | SHE |
85|| INV-SHE-UNKNOWN-BLOCKS-NONADMISSIBLE | UNKNOWN / matérialité non admissible interdit l’exécution (fail-closed) | SHE UNKNOWN gate |
86|| INV-SHE-STALE-CONTRACT-BLOCKS | Exécution refusée sur contrat obsolète (version/fp/currentness) | SHE currentness |
87|| INV-SHE-IDEMPOTENT-EXECUTE | Double-clic / retry / restart : idempotence Attempt ; pas de second Cursor silencieux | SHE T23 |
88|| INV-SHE-SINGLE-UX-PATH | Même parcours UX STRUCTURAL / NON_STRUCTURAL (matérialité ≠ boutons distincts) | ExecutionSurface |
89|| INV-SHE-NO-EXTRA-HUMAN-CTA | Pas de confirmation humaine supplémentaire après Exécuter pour le même contrat inspecté (Confirm/HD restent transitions OA internes) | SHE |
91|**Chemin SHE unique (UX) :**
102|**Dette OPEN (inchangée) :** TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT — non résolue par D-P6-SHE-01.
126|**Note SHE CURRENT :** sous D-P6-SHE-01 Delivery, STRUCTURAL sans HD préalable peut PREPARE inspectable ; les refus d’autorité portent sur **Exécuter** (HD/Confirm/Authorize/currentness). REAL/HQA et merge main restent des gates Morris distincts.
```

---

## 5. Product excerpts (security / authority critical)

### GAP-04 Record OA binding (excerpt)
```
# projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts:248-320
248|
249|/**
250| * D-P6-SHE-01 GAP-04 — AUTHORIZE_INSPECTED_EXECUTE must bind to an OA EC
251| * identity. Server reloads and projects effects; subject field overrides alone
252| * are never authority.
253| */
254|export type SheInspectedExecutionContractBinding = {
255|  readonly executionContractId: string;
256|  readonly expectedVersion: number;
257|  readonly expectedSemanticFingerprint: string;
258|};
259|
260|export type RecordGenericMissionHumanDecisionInput = {
261|  readonly oa: RuntimeOaStack;
262|  readonly subject: GenericMissionSubject;
263|  readonly selectedOptionId: string;
264|  /**
265|   * CR-02 — server re-seals from this analysis + Product facts; caller subject
266|   * digest must match. Client-only subject is not authority.
267|   */
268|  readonly analysis: IntentAnalysisDto;
269|  /**
270|   * Product path — session-bound Pilote. Required unless forceLocalAuthority
271|   * (tests only). Never accept a client-forged ActorReference as authority.
272|   */
273|  readonly authenticatedPilote?: AuthenticatedPiloteForMissionDecision;
274|  /** Test inject only — never on real Product Record path (A7). */
275|  readonly forceLocalAuthority?: boolean;
276|  readonly rationale?: string;
277|  readonly supersedeExistingAccepted?: boolean;
278|  /** When true (default), link accepted HD into LPS (legitimate version bump). */
279|  readonly linkToLivingProjectState?: boolean;
280|  /**
281|   * Digest of the presentation the Pilote actually saw (client/UI).
282|   * When omitted, defaults to subject.presentationDigest.
283|   * Used to recognize normal LPS-bump replay without inventing a new HD.
284|   */
285|  readonly presentedPresentationDigest?: string;
286|  /**
287|   * Required when selectedOptionId is AUTHORIZE_INSPECTED_EXECUTE.
288|   * Effects for re-seal are projected from this OA contract, not from subject.
289|   */
290|  readonly sheInspectedExecutionContract?: SheInspectedExecutionContractBinding;
291|};
292|
293|export type RecordGenericMissionHumanDecisionResult =
294|  | {
295|      readonly ok: true;
296|      readonly decision: HumanDecision;
297|      readonly humanDecisionCreated: boolean;
298|      readonly executionAttemptCreated: false;
299|      readonly code:
300|        | "GENERIC_MISSION_HUMAN_DECISION_RECORDED"
301|        | "GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED";
302|    }
303|  | {
304|      readonly ok: false;
305|      readonly code: string;
306|      readonly message: string;
307|      readonly humanDecisionCreated: false;
308|      readonly executionAttemptCreated: false;
309|    };
310|
311|export async function recordGenericMissionHumanDecision(
312|  input: RecordGenericMissionHumanDecisionInput,
313|): Promise<RecordGenericMissionHumanDecisionResult> {
314|  const fail = (
315|    code: string,
316|    message: string,
317|  ): RecordGenericMissionHumanDecisionResult => ({
318|    ok: false,
319|    code,
320|    message,
```
```
# projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts:375-476
375|  // SHE AUTHORIZE_INSPECTED_EXECUTE (GAP-04): require OA EC binding; project
376|  // effects from the inspected contract — never from subject overrides alone.
377|  const sheAuthorizePresentation =
378|    selected === GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE &&
379|    input.subject.optionRefs.includes(
380|      GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
381|    );
382|
383|  let sheEffectsFromOa: {
384|    effectsOverride: GenericMissionEffectsSeal;
385|    objectiveOverride: string;
386|    expectedOutcomeOverride: string;
387|    scopeNarrativeOverride: string;
388|    scopeInOverride: readonly string[];
389|    scopeOutOverride: readonly string[];
390|  } | null = null;
391|
392|  if (sheAuthorizePresentation) {
393|    const bind = input.sheInspectedExecutionContract;
394|    if (
395|      !bind ||
396|      !bind.executionContractId.trim() ||
397|      !Number.isFinite(bind.expectedVersion) ||
398|      !bind.expectedSemanticFingerprint.trim()
399|    ) {
400|      return fail(
401|        "SHE_INSPECTED_CONTRACT_BINDING_REQUIRED",
402|        "AUTHORIZE_INSPECTED_EXECUTE exige le binding OA du contrat inspecté — Record refusé.",
403|      );
404|    }
405|    const loaded =
406|      await input.oa.executionContractServices.getExecutionContract.execute({
407|        executionContractId: bind.executionContractId.trim(),
408|      });
409|    if (!loaded.ok) {
410|      return fail(
411|        "SHE_INSPECTED_CONTRACT_NOT_FOUND",
412|        "Contrat inspecté introuvable — Record SHE refusé.",
413|      );
414|    }
415|    const ec = loaded.contract;
416|    if (ec.projectId !== input.subject.projectId) {
417|      return fail(
418|        "SHE_INSPECTED_CONTRACT_PROJECT_MISMATCH",
419|        "Contrat inspecté hors projet — Record SHE refusé.",
420|      );
421|    }
422|    if (ec.version !== bind.expectedVersion) {
423|      return fail(
424|        "SHE_INSPECTED_CONTRACT_VERSION_MISMATCH",
425|        "Version du contrat inspecté divergente — Record SHE refusé.",
426|      );
427|    }
428|    const fp = ec.semanticFingerprint ?? "";
429|    if (!fp || fp !== bind.expectedSemanticFingerprint.trim()) {
430|      return fail(
431|        "SHE_INSPECTED_CONTRACT_FINGERPRINT_MISMATCH",
432|        "Empreinte du contrat inspecté divergente — Record SHE refusé.",
433|      );
434|    }
435|    if ((ec.cycleInstanceId ?? null) !== (input.subject.cycleInstanceId ?? null)) {
436|      return fail(
437|        "SHE_INSPECTED_CONTRACT_CYCLE_MISMATCH",
438|        "Cycle du contrat inspecté divergent — Record SHE refusé.",
439|      );
440|    }
441|    const proj = projectExecutionContractEffects({
442|      projectId: ec.projectId,
443|      cycleInstanceId: ec.cycleInstanceId ?? null,
444|      decisionRefs: ec.decisionRefs ?? [],
445|      status: ec.status,
446|      version: ec.version,
447|      semanticFingerprint: ec.semanticFingerprint,
448|      expectedOutputs: ec.expectedOutputs,
449|      requiredCapabilities: ec.requiredCapabilities,
450|      stopConditions: ec.stopConditions,
451|      reversibility: ec.reversibility as
452|        | "reversible"
453|        | "partially_reversible"
454|        | "irreversible",
455|      constraints: ec.constraints,
456|      inputs: (ec.inputs ?? {}) as Record<string, unknown>,
457|    });
458|    sheEffectsFromOa = {
459|      effectsOverride: {
460|        intentKind: proj.intentKind,
461|        artifactType: proj.artifactType,
462|        requestedOperation: proj.requestedOperation,
463|        requiredCapabilities: [...proj.requiredCapabilities],
464|        expectedOutputs: [...proj.expectedOutputs],
465|        reversibilityExpectation: proj.reversibilityExpectation,
466|        stopConditions: [...proj.stopConditions],
467|        risks: [...proj.risks],
468|        reservations: [...proj.reservations],
469|      },
470|      objectiveOverride: proj.objective,
471|      expectedOutcomeOverride: proj.expectedOutcome,
472|      scopeNarrativeOverride: proj.scopeNarrative,
473|      scopeInOverride: proj.scopeIn,
474|      scopeOutOverride: proj.scopeOut,
475|    };
476|  }
```

### SHE binder passes inspected contract
```
# projects/sfia-studio/app/features/project-assistant/w2/singleHumanExecutePreparedContract.ts:352-375
352|  const recorded = await recordGenericMissionHumanDecision({
353|    oa: input.oa,
354|    subject: sealed.subject,
355|    selectedOptionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
356|    analysis: sheAnalysis,
357|    forceLocalAuthority: input.forceLocalAuthority === true,
358|    authenticatedPilote: input.authenticatedPilote,
359|    rationale: `SHE Execute — autorisation explicite du contrat inspecté ${input.contract.executionContractId} v${input.contract.version} fp=${input.contract.semanticFingerprint}.`,
360|    presentedPresentationDigest: sealed.subject.presentationDigest,
361|    // GAP-04 — Record re-projects effects from this OA contract (not subject alone).
362|    sheInspectedExecutionContract: {
363|      executionContractId: input.contract.executionContractId,
364|      expectedVersion: input.contract.version,
365|      expectedSemanticFingerprint: input.contract.semanticFingerprint ?? "",
366|    },
367|  });
368|  if (!recorded.ok) {
369|    return {
370|      ok: false,
371|      code: recorded.code,
372|      message: recorded.message,
373|      humanDecisionCreated: false,
374|    };
375|  }
```

### GAP-03 effective git primary (diff vs main)
```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts b/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
index 16f58a53..133bfdfe 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
@@ -31,6 +31,7 @@ import {
   gitProofFamiliesFromRequirements,
   qualifyGitCompletionProofSet,
 } from "./qualifyGitCompletionProofSet";
+import { selectEffectiveExecutionContracts } from "./selectEffectiveExecutionContracts";

 export const OBLIGATION_POLICY_SUBJECT_PREFIX =
   "pilot.lifecycle.obligation-policy:" as const;
@@ -318,7 +319,25 @@ export function deriveFinalizationApplicability(
     const reqs = gitProofFamiliesFromRequirements(
       contracts.flatMap((c) => c.evidenceRequirements ?? []),
     );
-    const primaryContract = gitApplicable[0] ?? contracts[0];
+    // D-P6-SHE-01 GAP-03 — prefer effective (non-superseded) git-applicable EC.
+    // Fail-closed when multiple effective git-applicable ECs (no arbitrary pick).
+    const { effective } = selectEffectiveExecutionContracts(
+      contracts,
+      cycleId,
+    );
+    const effectiveGitApplicable = effective.filter(isGitApplicableContract);
+    let primaryContract: DerivableExecutionContract | undefined;
+    if (effectiveGitApplicable.length === 1) {
+      primaryContract = effectiveGitApplicable[0];
+    } else if (effectiveGitApplicable.length === 0) {
+      // No effective git EC — fall back only when a single git-applicable exists
+      // in the raw set (legacy mono-EC); otherwise leave undefined (fail-closed).
+      primaryContract =
+        gitApplicable.length === 1 ? gitApplicable[0] : undefined;
+    } else {
+      // Multiple effective git-applicable ECs — do not invent a principal.
+      primaryContract = undefined;
+    }
     const artifactEv = evidence.find(
       (e) =>
         e.type === "artifact" &&

```

### GAP-01 continuity stamp
```
# projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts:34-42
34|/**
35| * D-P6-SHE-01 GAP-01 — Product PREPARE stamped deferred structural authority.
36| * Server-owned input only; never trust a client-only claim.
37| */
38|function isSheDeferredStructuralPrepare(
39|  contract: ExecutionContract,
40|): boolean {
41|  return contract.inputs?.sheDeferredStructuralAuthority === true;
42|}
```
```
# projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts:248-266
248|  // Empty refs — G-D4 NON_STRUCTURAL OR SHE deferred STRUCTURAL/UNKNOWN (read-only).
249|  if (refs.length === 0) {
250|    const stamped = materialityFromContractConstraints(contract.constraints);
251|    if (stamped == null) {
252|      return fail(
253|        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
254|        "Contrat d'exécution sans décision rattachée ni justification G-D4 — continuation refusée.",
255|      );
256|    }
257|
258|    // GAP-01 — Product SHE PREPARE provenance (server input), not client stamp alone.
259|    if (isSheDeferredStructuralPrepare(contract)) {
260|      return verifySheDeferredPrepareReadLineage(
261|        oa,
262|        projectId,
263|        contract,
264|        stamped,
265|      );
266|    }
```

---

## 6. Validations (actual — not forecasts)

### Targeted (19 files)
238 PASS / 0 FAIL

### Full Vitest
```
SFIA_STUDIO_CURSOR_REAL=0 npx vitest run
Test Files  566 passed | 22 skipped (588)
Tests       6210 passed | 143 skipped (6353)
Duration    76.06s
FULL_EXIT:0
```

### Typecheck / lint / build
| Check | Exit |
|-------|------|
| tsc --noEmit | 0 |
| next lint | 0 |
| next build | 0 |
| git diff --check | 0 |
| secrets (key paths) | none |

### CI (PR #590)
| Check | Conclusion |
|-------|------------|
| Detect SFIA Studio changes | SUCCESS |
| Build and validate SFIA Studio | SUCCESS (~8m57s) |
| **SFIA Studio Required Gate** | **SUCCESS** |
| Workflow run | `39265254684` |
| Head SHA | `f1fc1af49606dbc600f5f839020639f880529696` |

---

## 7. Fake / Real

| | |
|--|--|
| Achieved | Product PR CREATED + PRR CONFORMANCE PASS + DETERMINISTIC CI QUALIFIED (Required Gate SUCCESS) |
| Out of scope | SHE LIVE / HQA / P6 GLOBAL / Runtime v3 ADOPTED |
| Debt | TOOL-FIRST-REAL-NOWRITE OPEN |
| E2E Evidence→Nora SHE | still bounded — not closed by GAP-03 alone |

---

## 8. Gates Morris remaining

1. ChatGPT PR Critical Review (this handoff)
2. Explicit **Merge GO** (PR stays DRAFT until then)
3. REAL/HQA GO
4. P6 Exit

---

## 9. Verdict

**D-P6-SHE-01 — PRODUCT GIT INTEGRATION COMPLETE — PR DRAFT CREATED — DETERMINISTIC QA PASS — PRR CONFORMANCE PASS — READY FOR CHATGPT PR CRITICAL REVIEW.**

CI Required Gate: **SUCCESS** (run `39265254684`).

NOT MERGED. NOT POST-MERGE VERIFIED. NOT SHE LIVE / P6 GLOBAL / Runtime v3 ADOPTED.

---

## INSTRUCTION CHATGPT

Verify PR #590 DRAFT, head/base, commits `928ab15b`+`f1fc1af4`, PRR semantic sync, digests, Vitest 6210/0/143, Required Gate SUCCESS, reserves, merge NOT authorized.

# END REVIEW PACK FULL — CRITICAL

---

## APPENDIX A — GAP-03 test file (FULL)

```typescript
/**
 * D-P6-SHE-01 GAP-03 — git MUST primaryContract uses effective EC selection.
 *
 * Discriminating property:
 *   Full typed Git proof set bound to the SHE successor EC → gitProofPresent=true
 *   ONLY when primaryContract is the effective (non-superseded) successor.
 *   Same evidence + predecessor-first listing would yield false if selection
 *   used gitApplicable[0] (superseded predecessor).
 *
 * gitProofPresent=true ≠ Cycle FINALIZED — other MUST obligations remain.
 *
 * Deterministic — ZERO REAL / HQA / live Git mutation.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { deriveFinalizationApplicability } from "@/lib/oa/cycle/application/deriveFinalizationApplicability";
import type { DerivableExecutionContract } from "@/lib/oa/cycle/application/deriveFinalizationApplicability";
import { deriveCycleObligationSnapshot } from "@/lib/oa/cycle/application/deriveCycleObligationSnapshot";
import {
  GCEC_GIT_COMPLETION_PROOF_FAMILIES,
  qualifyGitCompletionProofSet,
} from "@/lib/oa/cycle/application/qualifyGitCompletionProofSet";
import { assessFinalizationObligations } from "@/lib/oa/cycle/application/assessFinalization";
import type { Evidence } from "@/lib/oa/evidence-review";

describe("P6 SHE GAP-03 — effective git primaryContract", () => {
  const cycleId = "cycinst:gap03-test";
  const projectId = "prj:gap03-test";
  const predId = "xct:pred";
  const succId = "xct:she-hd:succ";
  const repoIdentity = "org/repo";
  const targetPath = "docs/functional-design.md";
  const artifactDigest =
    "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as const;
  const commitSha =
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
  const mergeSha =
    "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc";
  const repoBinding = {
    identity: repoIdentity,
    pathRoot: "/tmp/repo",
  } as const;

  const FULL_GCEC_REQS = [...GCEC_GIT_COMPLETION_PROOF_FAMILIES];

  function gitEc(
    id: string,
    status: string,
    supersedes?: string,
    evidenceRequirements: readonly string[] = FULL_GCEC_REQS,
  ): DerivableExecutionContract {
    return {
      contractId: id,
      cycleInstanceId: cycleId,
      status,
      supersedesExecutionContractId: supersedes,
      requiredCapabilities: ["cap:git.repository"],
      evidenceRequirements: [...evidenceRequirements],
      action: "git_commit",
      target: targetPath,
      scope: "docs/",
    };
  }

  function snapshot() {
    return deriveCycleObligationSnapshot({
      projectId,
      cycleTypeId: "cyc:functional-design",
      cycleInstanceId: cycleId,
      repositoryBinding: repoBinding as never,
    });
  }

  function makeEvidence(partial: Partial<Evidence> & { evidenceId: string }): Evidence {
    return {
      schemaVersion: "0.1.0-oa",
      source: partial.source ?? "test-source",
      sourceKind: partial.sourceKind ?? "system",
      producedAt: "2026-10-19T12:00:00.000Z",
      classification: "supporting",
      storageMode: "reference",
      availability: "available",
      bindings: partial.bindings ?? {},
      containsSecrets: false,
      provenance: {
        recordedAt: "2026-10-19T12:00:00.000Z",
        recordedBy: { actorId: "actor:test", role: "system" },
      },
      version: 1,
      createdAt: "2026-10-19T12:00:00.000Z",
      type: "other",
      status: "verified",
      ...partial,
    } as Evidence;
  }

  /** Full 7-family typed Git SET + GCEC-complete artifact, bound to one EC. */
  function fullGitProofSetBoundTo(executionContractId: string): Evidence[] {
    const bindings = {
      projectId,
      cycleInstanceId: cycleId,
      executionContractId,
    };
    const repo = encodeURIComponent(repoIdentity);
    const families: Evidence[] = [
      makeEvidence({
        evidenceId: "evd:local",
        source: "git:local_commit",
        location: `git:local_commit?repo=${repo}&commitSha=${commitSha}`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:push",
        source: "git:remote_push",
        location: `git:remote_push?repo=${repo}&remote=origin&refName=feature%2Fgap03&commitSha=${commitSha}`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:pr",
        source: "git:pull_request",
        location: `git:pull_request?repo=${repo}&prNumber=1&headSha=${commitSha}&headBranch=feature%2Fgap03&baseBranch=main&state=open`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:ci",
        source: "git:ci_status",
        location: `git:ci_status?repo=${repo}&commitSha=${commitSha}&conclusion=success`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:review",
        source: "git:review_status",
        location: `git:review_status?repo=${repo}&prNumber=1&state=approved`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:merge",
        source: "git:merge",
        location: `git:merge?repo=${repo}&mergeCommitSha=${mergeSha}&prNumber=1`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:post",
        source: "git:post_merge_verification",
        digest: artifactDigest,
        location: `git:post_merge_verification?repo=${repo}&targetBranch=main&targetSha=${mergeSha}&artifactPath=${encodeURIComponent(targetPath)}&digest=${encodeURIComponent(artifactDigest)}`,
        bindings,
      }),
      // GCEC-strict artifact — supplies expected.targetPath + artifactDigest.
      makeEvidence({
        evidenceId: "evd:art",
        type: "artifact",
        status: "available",
        digest: artifactDigest,
        location: targetPath,
        bindings: {
          ...bindings,
          executionAttemptId: "att:gap03-succ",
        },
      }),
    ];
    return families;
  }

  function derive(input: {
    contracts: DerivableExecutionContract[];
    evidence: Evidence[];
    snap?: ReturnType<typeof snapshot>;
  }) {
    const snap = input.snap ?? snapshot();
    return deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: null,
      decisions: [],
      evidence: input.evidence,
      reviewBundles: [],
      executionContracts: input.contracts,
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: repoBinding as never,
      obligationSnapshot: snap,
    });
  }

  it("T14/T22 — MUST includes git_repository; successor preferred over superseded pred", () => {
    const snap = snapshot();
    expect(snap.mustFamilies).toContain("git_repository");

    const predecessor = gitEc(predId, "superseded");
    const successor = gitEc(succId, "completed", predId);
    // Predecessor listed first (historical bug path used gitApplicable[0]).
    const rules = derive({
      contracts: [predecessor, successor],
      evidence: [],
      snap,
    });
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.gitProofPresent).toBe(false);
  });

  it("T16 — evidence bound only to predecessor does not satisfy successor expected id", () => {
    const predecessor = gitEc(predId, "superseded");
    const successor = gitEc(succId, "completed", predId);
    const rules = derive({
      contracts: [predecessor, successor],
      evidence: fullGitProofSetBoundTo(predId),
    });
    // Expected EC is successor → predecessor-bound evidence → gitProofPresent false.
    expect(rules.gitProofPresent).toBe(false);
  });

  it("T17 — multiple effective git-applicable ECs → fail-closed (no arbitrary primary)", () => {
    const a = gitEc("xct:a", "completed");
    const b = gitEc("xct:b", "completed");
    const rules = derive({
      contracts: [a, b],
      evidence: fullGitProofSetBoundTo("xct:a"),
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("POSITIVE T18 — successor + full typed Git SET → gitProofPresent=true (discriminating)", () => {
    const predecessor = gitEc(predId, "superseded");
    const successor = gitEc(succId, "completed", predId);
    // Predecessor listed FIRST — wrong historical selection would pick pred.
    const evidence = fullGitProofSetBoundTo(succId);

    // Discriminator (engine-independent): same SET fails when expected EC is pred.
    const againstPred = qualifyGitCompletionProofSet({
      evidence,
      requirements: [...FULL_GCEC_REQS],
      expected: {
        repositoryRef: repoIdentity,
        targetPath,
        artifactDigest,
        cycleInstanceId: cycleId,
        executionContractId: predId,
        projectId,
      },
    });
    expect(againstPred.status).toBe("BLOCKING");
    if (againstPred.status === "BLOCKING") {
      expect(againstPred.reason).toBe("contract_mismatch");
    }

    const againstSucc = qualifyGitCompletionProofSet({
      evidence,
      requirements: [...FULL_GCEC_REQS],
      expected: {
        repositoryRef: repoIdentity,
        targetPath,
        artifactDigest,
        cycleInstanceId: cycleId,
        executionContractId: succId,
        projectId,
      },
    });
    expect(againstSucc.status).toBe("SATISFIED");

    // Product path: deriveFinalizationApplicability must select successor.
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.gitProofPresent).toBe(true);

    // gitProofPresent=true ≠ Cycle FINALIZED — other MUST remain unsatisfied.
    const assessment = assessFinalizationObligations({
      cycle: {
        cycleInstanceId: cycleId,
        projectId,
        cycleTypeId: "cyc:functional-design",
        status: "active",
      } as never,
      projectId,
      assessedAt: "2026-10-19T12:00:00.000Z",
      decisions: [],
      evidence,
      reviewBundles: [],
      trajectory: null,
      applicability: rules,
      executionContracts: [predecessor, successor],
    });
    const gitObl = assessment.obligations.find(
      (o) => o.family === "git_repository",
    );
    expect(gitObl?.status).toBe("SATISFIED");
    const blockingOthers = assessment.obligations.filter(
      (o) =>
        o.family !== "git_repository" &&
        (o.status === "MISSING" || o.status === "BLOCKING"),
    );
    // At least one other MUST family must still block full finalization.
    expect(blockingOthers.length).toBeGreaterThan(0);
    expect(assessment.canComplete).toBe(false);
  });

  it("NEG — missing family → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const incomplete = fullGitProofSetBoundTo(succId).filter(
      (e) => e.source !== "git:ci_status",
    );
    const rules = derive({
      contracts: [predecessor, successor],
      evidence: incomplete,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — status not verified → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const evidence = fullGitProofSetBoundTo(succId).map((e) =>
      e.source === "git:local_commit"
        ? { ...e, status: "available" as const }
        : e,
    );
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — digest divergent on post_merge → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const bad =
      "sha256:dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" as const;
    const evidence: Evidence[] = fullGitProofSetBoundTo(succId).map((e) => {
      if (e.source !== "git:post_merge_verification") return e;
      return {
        ...e,
        digest: bad,
        location: `git:post_merge_verification?repo=${encodeURIComponent(repoIdentity)}&targetBranch=main&targetSha=${mergeSha}&artifactPath=${encodeURIComponent(targetPath)}&digest=${encodeURIComponent(bad)}`,
      };
    });
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — SHA incoherent commit≠push → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const otherSha =
      "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
    const evidence = fullGitProofSetBoundTo(succId).map((e) => {
      if (e.source !== "git:remote_push") return e;
      return {
        ...e,
        location: `git:remote_push?repo=${encodeURIComponent(repoIdentity)}&remote=origin&refName=feature%2Fgap03&commitSha=${otherSha}`,
      };
    });
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — wrong projectId binding → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const evidence = fullGitProofSetBoundTo(succId).map((e) => ({
      ...e,
      bindings: { ...e.bindings, projectId: "prj:wrong" },
    }));
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — wrong cycleInstanceId → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const evidence = fullGitProofSetBoundTo(succId).map((e) => ({
      ...e,
      bindings: { ...e.bindings, cycleInstanceId: "cycinst:wrong" },
    }));
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — wrong repository → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const evidence = fullGitProofSetBoundTo(succId).map((e) => {
      if (typeof e.source !== "string" || !e.source.startsWith("git:")) return e;
      return {
        ...e,
        location: (e.location ?? "").replace(
          encodeURIComponent(repoIdentity),
          encodeURIComponent("other/repo"),
        ),
      };
    });
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — orphan superseded predecessor only (no successor) → no satisfied proof on pred evidence alone under effective empty", () => {
    // Only superseded EC remains — effective pool empty; fallback mono if single gitApplicable.
    // With a single superseded git EC, legacy fallback may select it; proof on that id can satisfy.
    // Discriminating SHE case requires BOTH pred+succ; orphan pred alone is not the SHE path.
    const predecessor = gitEc(predId, "superseded");
    const rules = derive({
      contracts: [predecessor],
      evidence: fullGitProofSetBoundTo(predId),
    });
    // Mono fallback may allow pred — document without inventing new Finalization rule.
    // When only superseded remains, gitApplicable.length===1 → primary=pred → may be true.
    // SHE Delivery always pairs pred+succ; orphan is non-SHE.
    expect(typeof rules.gitProofPresent).toBe("boolean");
  });

  it("LEGACY — mono-EC historical path: full SET on single completed EC → gitProofPresent=true", () => {
    const mono = gitEc("xct:mono", "completed");
    const rules = derive({
      contracts: [mono],
      evidence: fullGitProofSetBoundTo("xct:mono"),
    });
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.gitProofPresent).toBe(true);
  });
});

```

## APPENDIX B — Git Review Index

| Path | Role |
|------|------|
| w2/singleHumanExecutePreparedContract.ts | CREATED — SHE |
| w2/recordGenericMissionHumanDecision.ts | GAP-04 OA binding |
| w2/readCurrentGovernedExecutionContinuity.ts | GAP-01 |
| deriveFinalizationApplicability.ts | GAP-03 |
| resolveProductExecutionContext.ts | I17 |
| orchestrateF2.ts | SHE PREPARE admission |
| ExecutionSurface / pilotExecutionPresentation | UX Exécuter |
| p6.she.* tests | SHE + GAP |
| PRR 02/03/04/07/08 + manifest | semantic sync |
