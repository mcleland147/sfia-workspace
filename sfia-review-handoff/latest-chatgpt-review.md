# REVIEW PACK FULL — CRITICAL
# D-P6-SHE-01 — CROSS-COMPONENT IMPACT & REGRESSION AUDIT

**Timestamp (UTC):** 2026-10-19T11:05:00Z
**Mode:** AUDIT ONLY — no Product mutation this cycle
**Repository:** mcleland147/sfia-workspace
**Worktree:** `/Users/morris/Projects/sfia-workspace-p6-she-delivery-476b1c20`
**Branch:** `delivery/sfia-studio-p6-single-human-execute`
**HEAD:** `476b1c2065991e05cca298f6669d85b62a07ced3`
**origin/main:** `476b1c2065991e05cca298f6669d85b62a07ced3`
**Prior SHE Critical handoff:** `77224812d9b14fc3f2ee73f6179a1f771f4a78c3` / blob `5644837c0583951c0a839b85e91b5f4e893ecbcb`
**Product Delivery:** NON COMMITTÉ — preserved (no Product edits this audit)
**GO Morris:** Audit transversal autorisé
**Cycle:** 9 — QA / validation | **Profil:** CRITICAL
**Capability:** V3-F05 | **Milestone:** P6 | **Décision:** D-P6-SHE-01 Option A
**Typologie:** EVOL / QA / IMPACT AUDIT

---

## 1. GO Morris / Git Truth

GO = Cross-component impact audit only. No architecture decision. No Product mutation.
Git Truth verified: branch Delivery, HEAD=origin/main=`476b1c20…`, dirty Delivery candidate intact, cached empty.
Product file inventory at audit end identical to audit start (only this Review Pack temp file rewritten).

### Delivery inventory
**CREATED:** `w2/singleHumanExecutePreparedContract.ts`, `__tests__/…/p6.she.singleHumanExecute.d0.test.ts`
**MODIFIED Product:** genericMissionSubject, record/verify HD, prepare, actions, orchestrateF2, executionMateriality, ExecutionSurface, pilotExecutionPresentation
**MODIFIED tests:** p5.s03.*, p6.r02, p6.uic, p6.authorityChatFirst, p6.closure*, p6.der16, p6.gD4, p6.mHd01*, p6.mHd02*, p6.projectScoped*, p6.toolFirst*

---

## 2. Convergence Pre-check

KEEP: Project, CycleInstance, CKC, LPS, Trajectory, HD, EC, Confirm, Authz, Attempt, Evidence, ReviewBundle, ContractResult, ClaimEvaluation, Nora, Reconciler, Cursor Gateway, Generic Execution OA.
ADAPT/REPLACE this cycle: none.
Debt: TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT OPEN.
Axes: MAIN CURRENT vs DELIVERY CANDIDATE vs TARGET — PRR still historical CURRENT (not SHE candidate).

---

## 3. Dependency graph

### Direct consumers (non-test)
| Symbol | Consumers |
|--------|-----------|
| singleHumanExecutePreparedContract | w2/actions.ts |
| w2SingleHumanExecute | actions → ExecutionSurface |
| AUTHORIZE_INSPECTED_EXECUTE | genericMissionSubject, record*, SHE, verify* |
| sheDeferredStructuralAuthority | prepare ↔ SHE |
| prepareGenericExecutionContractDraft | F2 coordinator, orchestrateF2, orchestrateTurn, actions, continuity |
| verifyGenericMissionHumanDecisionForPrepare | authorize*, confirmForAuthorization, prepare |

### Transitive depth ≤6 (critical)
```
SHE Exécuter
 → inspect + currentness
 → HD AUTHORIZE_INSPECTED_EXECUTE
 → supersede xct:she-hd:* (effect-preserving)
 → confirm / authorize
 → (caller) Attempt → Evidence → RB/CE → Nora/LPS
 → (if cycle-bound) selectEffective → assessFinalization / qualifyGitCompletionProofSet
```
```
STRUCTURAL PREPARE empty refs
 → sheDeferredStructuralAuthority
 → readCurrentGovernedExecutionContinuity.verifyDecisionLineage
    [G-D4: empty refs only NON_STRUCTURAL]  ← GAP vs SHE UX
 → ExecutionSurface preExec must be active for Consulter/Exécuter
```

---

## 4. Flows F03–F20

| Flow | Appl. | Impact | Verdict |
|------|-------|--------|---------|
| F03 | Y | PREPARE/SHE ≠ START | COMPATIBLE_PROVEN |
| F04 | Y | F2 allows structural PREPARE | COMPATIBLE_WITH_RESERVATION |
| F05–F06 | adj | — | NOT_APPLICABLE primary |
| F07 | Y | sourceType isolation | COMPATIBLE_PROVEN |
| F08 | Y | STRUCTURAL empty refs | COMPATIBLE_WITH_RESERVATION + M02 FAIL |
| F09–F10 | Y | SHE HD→auth path | COMPATIBLE_PROVEN (SHE) |
| F11 | Y | Evidence exact EC | PROOF_MISSING SHE e2e |
| F11b | Y | continuity STRUCTURAL | **REGRESSION_CONFIRMED / GAP** |
| F12–F13 | Y | CR/W3-C shared | COMPATIBLE_PROVEN / PROOF_MISSING SHE |
| F14 | Y | SHE HD ≠ trajectory | COMPATIBLE_PROVEN |
| F15 | Y | draft open; git primaryContract gap | COMPATIBLE_WITH_RESERVATION |
| F16 | adj | — | NOT_APPLICABLE primary |
| F17–F19 | partial | SHE restart | PROOF_MISSING |
| F20 | Y | legacy KEEP | COMPATIBLE_PROVEN |

---

## 5. Impact matrix (mandatory)

| ID | SOURCE→CONSUMER | BEFORE→AFTER | RISK | PROOF | MISSING | SEV | VERDICT |
|----|-----------------|--------------|------|-------|---------|-----|---------|
| I01 | STRUCTURAL PREPARE→F08 | blocked→inspectable empty refs | authority confusion | SHE B/D/E | continuity inspect-only | HIGH | COMPATIBLE_WITH_RESERVATION |
| I02 | continuity→ExecutionSurface | refuse STRUCTURAL empty unchanged while PREPARE creates them | Exécuter CTA blocked after refresh | o1 T2 refuse PASS | admit inspect-only XOR alt present path | **CRITICAL** | **REGRESSION_CONFIRMED** (SHE UX) |
| I03 | M02 test→prepare | expect prep.ok=false | CI red | **FAIL** | requalify M02 | HIGH | REGRESSION_CONFIRMED |
| I04 | AUTHORIZE vs ACCEPT | additive | assimilation | SHE T04/T05; verify PREPARE narrow | SHE→PREPARE refuse test | MED | COMPATIBLE_PROVEN |
| I05 | SHE HD→START/FINALIZE | subjects distinct | parasite lifecycle | assessStart/Finalize | cross-negatives | MED | COMPATIBLE_PROVEN |
| I06 | supersede→selectEffective | pred superseded | orphan | corrProof05 EC6–8 | SHE status+cycle asserts | MED | COMPATIBLE_PROVEN / PROOF_MISSING |
| I07 | gitApplicable[0]→git proof | single→multi EC | false-negative finalize | code | selectEffective+SHE | HIGH | COMPATIBLE_WITH_RESERVATION |
| I08 | draft→assessFinalization | PENDING open | false completed | EC1–3,9 | SHE GCEC draft | LOW | COMPATIBLE_PROVEN |
| I09 | Record SHE effectsOverride | ACCEPT forge OK; SHE override | forged authorize | PR02 | **CR-02 SHE forge** | HIGH | PROOF_MISSING |
| I10 | Attempt successor | SHE no Attempt | wrong EC | SHE Select | Evidence e2e | MED | COMPATIBLE_PROVEN bounded |
| I11 | Evidence EC exact | unchanged | mismatch | qualifyGit code | contract_mismatch test | MED | COMPATIBLE_PROVEN / PROOF_MISSING |
| I12 | W3-C SUCCESS | Evidence+CE | fake SUCCESS | w3c PASS | SHE→W3-C | LOW | COMPATIBLE_PROVEN |
| I13 | Cycle create | PREPARE≠create | parasite | arch+der16 | — | LOW | COMPATIBLE_PROVEN |
| I14 | MUST GCEC | unchanged | soften | snapshot MUST | — | — | COMPATIBLE_PROVEN KEEP |
| I15 | Legacy ACCEPT/docs_write | kept | retroactive | mHd suites | — | LOW | COMPATIBLE_PROVEN |
| I16 | UNKNOWN Execute | code refuse | silent | code | p6.she case | MED | PROOF_MISSING |
| I17 | resolveProductContext latest | may include superseded | stale | — | prefer effective | MED | COMPATIBLE_WITH_RESERVATION |
| I18 | Concurrent Exécuter | one chain | double Attempt | SHE T23 | — | LOW | COMPATIBLE_PROVEN |

---

## 6. Domain audits

### A Cycle Lifecycle — COMPATIBLE_PROVEN
PREPARE/SHE do not create CycleInstance. START requires `pilot.lifecycle.start+trajectory:{cycleId}`. FINALIZE requires finalize subject. SHE uses `gms:` + `generic_mission` sourceType.

### B Finalization — COMPATIBLE_WITH_RESERVATION
MUST set repo-backed cyc:functional-design unchanged (artifact, execution_contract, evidence, review_bundle, git_repository, exit_criteria). Draft → execution_contract_open. Correct successor does not leave predecessor blocking when supersedesExecutionContractId set. **Gap I07:** primaryContract ignores selectEffective.

### C HumanDecision — COMPATIBLE_PROVEN + PROOF_MISSING (CR-02 SHE)
PREPARE still requires ACCEPT_PREPARE after load helper. SHE records AUTHORIZE_INSPECTED_EXECUTE. Trajectory HD cannot authorize EC (sourceType gate).

### D Structural draft continuity — REGRESSION_CONFIRMED (SHE UX)
See citations below. Inspect-by-id and Confirm/Authorize refuse empty STRUCTURAL remain. Continuity admission blocks Product UI Exécuter for STRUCTURAL SHE drafts.

### E Successor/Attempt — COMPATIBLE_PROVEN (null-cycle) / PROOF_MISSING (cycle-bound)
### F Evidence/RB/CR — COMPATIBLE_PROVEN shared / PROOF_MISSING SHE e2e
### G Nora/LPS/Trajectory — COMPATIBLE_WITH_RESERVATION
### H Legacy — COMPATIBLE_PROVEN

---

## 7. Code citations


### Continuity verifyDecisionLineage (G-D4 empty refs)

```
# projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts:140-218
140|/**
141| * HD-bound lineage OR admissible G-D4 empty-refs (NON_STRUCTURAL + CURRENT).
142| * Reuses Confirm/Authorize materiality gates — never invents a HumanDecision.
143| * READ-ONLY: no HD / inspection / confirmation / authorize / Attempt writes.
144| */
145|async function verifyDecisionLineage(
146|  oa: RuntimeOaStack,
147|  projectId: string,
148|  contract: ExecutionContract,
149|): Promise<
150|  | { ok: true; decisionRef: string | null }
151|  | W2Failure
152|> {
153|  const refs = contract.decisionRefs ?? [];
154|
155|  // G-D4 empty refs — admit only with NON_STRUCTURAL stamp + CURRENT revalidation.
156|  if (refs.length === 0) {
157|    const stamped = materialityFromContractConstraints(contract.constraints);
158|    if (stamped == null) {
159|      return fail(
160|        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
161|        "Contrat d'exécution sans décision rattachée ni justification G-D4 — continuation refusée.",
162|      );
163|    }
164|
165|    const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;
166|    const factsRaw =
167|      contractInputs.materialityFacts &&
168|      typeof contractInputs.materialityFacts === "object"
169|        ? (contractInputs.materialityFacts as Record<string, unknown>)
170|        : null;
171|    const stampedCurrentness = parseStampedProductCurrentness(factsRaw);
172|
173|    // Stamp alone is never sufficient — prepare-time currentness witness required.
174|    if (stampedCurrentness == null) {
175|      return fail(
176|        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
177|        "Faits de matérialité / currentness absents sur le contrat — continuation sans décision refusée.",
178|      );
179|    }
180|
181|    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
182|      oa,
183|      projectId,
184|      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
185|      cycleInstanceId: contract.cycleInstanceId ?? null,
186|      stampedMateriality: stamped,
187|      stampedCurrentness,
188|    });
189|    if (!revalidated.ok) {
190|      return fail(
191|        revalidated.code === "MATERIALITY_CURRENTNESS_STALE" ||
192|          revalidated.code === "MATERIALITY_CURRENT_MISMATCH" ||
193|          revalidated.code === "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE" ||
194|          revalidated.code === "REPOSITORY_BINDING_STALE" ||
195|          revalidated.code === "REPOSITORY_BINDING_UNAVAILABLE" ||
196|          revalidated.code.startsWith("SCOPE_") ||
197|          revalidated.code === "MATERIALITY_STRUCTURAL" ||
198|          revalidated.code === "MATERIALITY_UNKNOWN"
199|          ? revalidated.code
200|          : "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
201|        revalidated.message,
202|      );
203|    }
204|
205|    const recomputed = revalidated.current.assessment;
206|    const admissible = assertDecisionRefsAdmissibleForConfirm({
207|      decisionRefs: refs,
208|      stampedMateriality: stamped,
209|      recomputed,
210|    });
211|    if (!admissible.ok) {
212|      return fail(
213|        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
214|        "Contrat sans décision humaine non admissible pour la continuité G-D4 — continuation refusée.",
215|      );
216|    }
217|
218|    return { ok: true, decisionRef: null };
```

### SHE STRUCTURAL PREPARE deferral

```
# projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts:658-712
658|  const hdRequired =
659|    readiness.structuralBlocked || materiality.humanDecisionRequired;
660|  /**
661|   * D-P6-SHE-01 — STRUCTURAL / UNKNOWN may PREPARE an inspectable contract with
662|   * empty decisionRefs. HumanDecision is deferred to the explicit Execute
663|   * gesture (INV-SHE-PREPARE-NO-AUTHORITY / INV-SHE-STRUCTURAL-INSPECTABLE).
664|   * Optional pre-bound decisionId remains supported for resume paths.
665|   */
666|  let sheDeferredStructuralAuthority = false;
667|
668|  if (hdRequired && decisionId) {
669|    const verified = await verifyGenericMissionHumanDecisionForPrepare({
670|      oa: input.oa,
671|      projectId: input.projectId,
672|      cycleInstanceId: input.cycleInstanceId?.trim() || null,
673|      decisionId,
674|      analysis,
675|    });
676|    if (!verified.ok) {
677|      return {
678|        ok: false,
679|        code: verified.code,
680|        message: verified.message,
681|      };
682|    }
683|    verifiedDecisionRefs = [verified.verified.decisionId];
684|    verifiedPresentationDigest = verified.verified.presentationDigest;
685|    verifiedMissionSubjectId = verified.verified.missionSubjectId;
686|    const sealedCtx =
687|      verified.verified.decision.decisionBasis?.genericMissionContext;
688|    if (!sealedCtx) {
689|      return {
690|        ok: false,
691|        code: "HD_BASIS_INVALID",
692|        message: "genericMissionContext absent après vérification HD.",
693|      };
694|    }
695|    // Authoritative accepted effects — stamp EC from sealed HD, not a parallel re-derivation.
696|    sealedHdEffects = {
697|      requestedOperation: sealedCtx.requestedOperation ?? null,
698|      reversibilityExpectation: sealedCtx.reversibilityExpectation ?? null,
699|      risks: [...sealedCtx.risks],
700|      reservations: [...sealedCtx.reservations],
701|      intentKind: sealedCtx.intentKind ?? null,
702|      artifactType: sealedCtx.artifactType ?? null,
703|      expectedOutputs: [...sealedCtx.expectedOutputs],
704|      stopConditions: [...sealedCtx.stopConditions],
705|      repositoryBindingIdentity: sealedCtx.repositoryBindingIdentity,
706|      pathRoot: sealedCtx.pathRoot,
707|      impactSignals: { ...sealedCtx.impactSignals },
708|    };
709|  } else if (hdRequired) {
710|    sheDeferredStructuralAuthority = true;
711|    // decisionRefs stay []; honest MATERIALITY stamp remains on constraints.
712|  }
```

### ExecutionSurface requires active preExec

```
# projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx:274-298
274|  /**
275|   * Mutating actions require verified pre-execution continuity — never
276|   * projection.executionContractId alone (R1).
277|   */
278|  const resolveActivePreContract = useCallback((): {
279|    executionContractId: string;
280|    expectedVersion: number;
281|    semanticFingerprint: string;
282|    inspectionSufficient: boolean;
283|  } | null => {
284|    if (
285|      !preExec ||
286|      !preExec.ok ||
287|      preExec.kind !== "active" ||
288|      !preExec.contract.executionContractId
289|    ) {
290|      return null;
291|    }
292|    return {
293|      executionContractId: preExec.contract.executionContractId,
294|      expectedVersion: preExec.contract.version,
295|      semanticFingerprint: preExec.contract.semanticFingerprint ?? "",
296|      inspectionSufficient: preExec.inspection.inspectionSufficient === true,
297|    };
298|  }, [preExec]);
```

### Git primaryContract without selectEffective

```
# projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts:302-338
302|  const gitApplicable = contracts.filter(isGitApplicableContract);
303|  if (gitApplicable.length > 0) {
304|    markPositiveApplicable(
305|      rules,
306|      positiveSources,
307|      "git_repository",
308|      "ec_capability_git",
309|    );
310|  }
311|  const gitIds = new Set(gitApplicable.map((c) => c.contractId));
312|
313|  // CR-GCEC-05 — when obligation snapshot has git MUST, require full proof SET.
314|  // Legacy git-applicable EC cycles keep single-row / lexical completion.
315|  const gitMust = snapshot?.mustFamilies.includes("git_repository") === true;
316|
317|  if (gitMust) {
318|    const reqs = gitProofFamiliesFromRequirements(
319|      contracts.flatMap((c) => c.evidenceRequirements ?? []),
320|    );
321|    const primaryContract = gitApplicable[0] ?? contracts[0];
322|    const artifactEv = evidence.find(
323|      (e) =>
324|        e.type === "artifact" &&
325|        evaluateFunctionalDesignArtifactCompleteness(e).ok,
326|    );
327|    const expected = {
328|      repositoryRef:
329|        input.repositoryBinding?.identity ??
330|        (typeof artifactEv?.location === "string"
331|          ? artifactEv.location
332|          : "unknown/repo"),
333|      targetPath: artifactEv?.location?.trim() || "docs/functional-design.md",
334|      artifactDigest: artifactEv?.digest ?? "",
335|      cycleInstanceId: cycleId,
336|      executionContractId: primaryContract?.contractId,
337|      projectId: input.projectId,
338|    };
```

### selectEffectiveExecutionContracts

```
# projects/sfia-studio/app/lib/oa/cycle/application/selectEffectiveExecutionContracts.ts:25-55
25|export function selectEffectiveExecutionContracts<
26|  T extends SelectableExecutionContract,
27|>(
28|  contracts: readonly T[],
29|  cycleInstanceId: string,
30|): SelectEffectiveExecutionContractsResult<T> {
31|  const cycleBound = contracts.filter(
32|    (c) => !c.cycleInstanceId || c.cycleInstanceId === cycleInstanceId,
33|  );
34|
35|  const supersededPredecessorIds = new Set(
36|    cycleBound
37|      .map((c) => c.supersedesExecutionContractId)
38|      .filter((id): id is string => Boolean(id)),
39|  );
40|
41|  const effective = cycleBound.filter(
42|    (c) =>
43|      !supersededPredecessorIds.has(c.contractId) && c.status !== "superseded",
44|  );
45|
46|  const orphanedSuperseded = cycleBound.filter(
47|    (c) =>
48|      c.status === "superseded" &&
49|      !cycleBound.some(
50|        (other) => other.supersedesExecutionContractId === c.contractId,
51|      ),
52|  );
53|
54|  return { effective, orphanedSuperseded };
55|}
```

### GCEC MUST families

```
# projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts:54-101
54|const REPO_BACKED_FUNCTIONAL_DESIGN_MUST: readonly CycleObligationFamily[] = [
55|  "artifact",
56|  "execution_contract",
57|  "evidence",
58|  "review_bundle",
59|  "git_repository",
60|  "exit_criteria",
61|] as const;
62|
63|/**
64| * On-demand binder: DoctrinePackage/catalog semantics + Project context.
65| * First vertical: repo-backed `cyc:functional-design` ⇒ governed MUST set.
66| * Unknown/unmodeled: UNKNOWN (fail-closed for proof presence).
67| *
68| * TEMP-GCEC-F14-BIND-01 — obligation snapshot is derived on demand from
69| * cycleTypeId + repositoryBinding until durable F14 bind lands; do not
70| * treat absence of a persisted snapshot row as NOT_APPLICABLE.
71| */
72|export function deriveCycleObligationSnapshot(
73|  input: DeriveCycleObligationSnapshotInput,
74|): CycleObligationSnapshot {
75|  const cycleTypeId = input.cycleTypeId.trim();
76|  const repositoryBound =
77|    input.forceRepoBacked === true ||
78|    (input.repositoryBinding != null &&
79|      typeof input.repositoryBinding.identity === "string" &&
80|      input.repositoryBinding.identity.trim().length > 0);
81|
82|  const entries: CycleObligationEntry[] = [];
83|  const mustFamilies: CycleObligationFamily[] = [];
84|
85|  if (cycleTypeId === "cyc:functional-design" && repositoryBound) {
86|    for (const family of REPO_BACKED_FUNCTIONAL_DESIGN_MUST) {
87|      const sourceKind: CycleObligationSourceKind =
88|        family === "git_repository" || family === "artifact"
89|          ? "contextual"
90|          : "intrinsic";
91|      entries.push({
92|        family,
93|        applicability: "APPLICABLE",
94|        sourceKind,
95|        reason:
96|          family === "git_repository"
97|            ? "repo_backed_functional_design_git_must"
98|            : `repo_backed_functional_design_${family}_must`,
99|      });
100|      mustFamilies.push(family);
101|    }
```

### PREPARE still requires ACCEPT_PREPARE

```
# projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts:443-453
443|  // PREPARE path — only ACCEPT_PREPARE unblocks. SHE authorize-execute is not
444|  // a substitute for the historical PREPARE-gate option.
445|  if (
446|    decision.selectedOptionId !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE ||
447|    ctx.selectedOptionRef !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE
448|  ) {
449|    return {
450|      ok: false,
451|      code: "HD_REFUSED",
452|      message: "Option accept-prepare absente — PREPARE non débloqué.",
453|    };
```

### Record SHE effectsOverride (CR-02 tension)

```
# projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts:355-384
355|  // CR-02 — Product-qualified re-seal from analysis + CURRENT Product.
356|  // Default ACCEPT_PREPARE presentations: never trust subject field overrides
357|  // (forged objective + recomputed digest must diverge → HD_SUBJECT_STALE).
358|  // SHE authorize-inspected-execute: effects were sealed from the inspected EC
359|  // projection; re-apply the same presentation fields so Record stays coherent
360|  // with that inspected contract (still re-reads CURRENT LPS/repo anchors).
361|  const sheAuthorizePresentation =
362|    selected === GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE &&
363|    input.subject.optionRefs.includes(
364|      GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
365|    );
366|  const fresh = await sealGenericMissionForPresentation({
367|    oa: input.oa,
368|    projectId: input.subject.projectId,
369|    cycleInstanceId: input.subject.cycleInstanceId,
370|    analysis: input.analysis,
371|    missionSubjectId: input.subject.missionSubjectId,
372|    optionRefs: input.subject.optionRefs,
373|    ...(sheAuthorizePresentation
374|      ? {
375|          effectsOverride: input.subject.effects,
376|          impactSignalsOverride: input.subject.impactSignals,
377|          objectiveOverride: input.subject.objective,
378|          expectedOutcomeOverride: input.subject.expectedOutcome,
379|          scopeNarrativeOverride: input.subject.scopeNarrative,
380|          scopeInOverride: input.subject.scopeIn,
381|          scopeOutOverride: input.subject.scopeOut,
382|        }
383|      : {}),
384|  });
```

### M02 failing assertion

```
# projects/sfia-studio/app/__tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts:331-343
331|    expect(mat.assessment.materiality).not.toBe("non_structural");
332|    expect(mat.assessment.humanDecisionRequired).toBe(true);
333|
334|    const prep = await prepareGenericExecutionContractDraft({
335|      oa,
336|      projectId,
337|      cycleInstanceId,
338|      analysis,
339|      forceLocalAuthority: true,
340|      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
341|    });
342|    expect(prep.ok).toBe(false);
343|  });
```


---

## 8. Confirmed gaps → trajectory

| ID | Class | Proposition | Files | Morris gate |
|----|-------|-------------|-------|-------------|
| GAP-01 continuity STRUCTURAL | **B** (or **C** if refused) | Admit STRUCTURAL empty refs for READ/INSPECT only; Confirm/Authorize stay refuse | readCurrentGovernedExecutionContinuity.ts + o1/SHE tests | Yes if C |
| GAP-02 M02 | B | Requalify: PREPARE ok + HD still required at Execute | p6.productContinuityClosure.integrated.d0.test.ts | No |
| GAP-03 git primaryContract | B | Use selectEffective for expected.executionContractId | deriveFinalizationApplicability.ts + GCEC test | No |
| GAP-04 CR-02 SHE forge | B | Adversarial forge test; optional OA EC re-project | record* + tests | No |
| GAP-05 SHE Evidence/cycle | B | Extend SHE tests | p6.she / new | No |
| DOC-01 PRR | D later | Refresh after integrate | PRR (forbidden now) | Post-integrate |

STOP — CYCLE OBLIGATION DESIGN: **NOT** triggered (KEEP MUST set).
No second engine. No obligation deletion.

---

## 9. Tests executed

Env: `SFIA_STUDIO_CURSOR_REAL=0`; Product/HQA DB unset.

| Suite | Files | Passed | Failed |
|-------|-------|--------|--------|
| 1 core | 14 | 303 | 0 |
| 2 evidence/GCEC/continuity | 12 | 115 | **1 M02** |
| 3 HD/lifecycle | 5 | 72 | 0 |
| **Total** | **31** | **490** | **1** |

Suite1 includes: p6.she, p6.o1.continuityGd4EmptyRefs (T2 STRUCTURAL refuse PASS), p6.gD4, mHd01×2, mHd02, der16, authorityChatFirst, cycleLifecycleVsGenericPrepare, hqa.f01 cycle start gate, corrProof05 (136), supersedeCancelAuthz, p5.s03×2.
Suite2 FAIL detail: `p6.productContinuityClosure.integrated.d0.test.ts` M02 `expect(prep.ok).toBe(false)` received `true`.

Labels: TEST_EXISTANT_PASS (490), TEST_EXISTANT_FAIL (M02), TEST_MANQUANT (GAP-01..05 cases), REAL_REQUIRED (Cursor/OpenAI/HQA).

---

## 10. Fake / Real

Achieved: CROSS-COMPONENT DETERMINISTIC IMPACT QUALIFIED AT TESTED SCOPE.
Out of scope: REAL BOUNDARY PROVEN, E2E REAL, SHE LIVE PASS, P6 GLOBAL PASS.
DETERMINISTIC PROVEN ≠ READY FOR REAL. Gate REAL Morris: NON ACCORDÉ.

---

## 11. PRR impact (no digest refresh)

Semantic impact volumes: F08 sequencing, F09 HD option, F11b continuity admission, F15 git expected EC selection.
PRR digests NOT refreshed. Doc drift: vol07 still says TARGET unproven while local SHE DET tests exist.

---

## 12. Product mutation check

Audit modified only `.tmp-sfia-review/chatgpt-review.md`.
Delivery Product sources/tests: unchanged vs entry inventory.

---

## 13. Verdict

**CROSS-COMPONENT IMPACT AUDIT COMPLETE — TARGETED COMPATIBILITY CORRECTIONS REQUIRED — PRODUCT GIT INTEGRATION NOT READY.**

(Verdict B)

No GO Git Integration / REAL / HQA / P6 GLOBAL / Runtime v3 ADOPTED.

---

## INSTRUCTION CHATGPT

Lire ce handoff. Vérifier I01–I18, GAP-01 continuity, M02, git primaryContract, CR-02 SHE, obligations KEEP, absence mutation Product, B/C classification, gates.

Ne pas générer de prompt Git Integration avant revue Critical conforme + corrections B.

# END REVIEW PACK FULL — CRITICAL AUDIT
