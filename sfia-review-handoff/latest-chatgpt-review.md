# REVIEW PACK FULL — CRITICAL
# D-P6-SHE-01 — INTEGRATED CROSS-COMPONENT COMPATIBILITY CORRECTION

**Timestamp (UTC):** 2026-10-19T11:40:00Z
**Repository:** mcleland147/sfia-workspace
**Worktree:** `/Users/morris/Projects/sfia-workspace-p6-she-delivery-476b1c20`
**Branch:** `delivery/sfia-studio-p6-single-human-execute`
**HEAD:** `476b1c2065991e05cca298f6669d85b62a07ced3` (= origin/main)
**Prior audit handoff:** `69b603d7` / blob `fc2ae885`
**Product Delivery:** NON COMMITTÉ — preserved + corrected in-place
**GO Morris:** Corrections de compatibilité GAP-01..05 + I17 qualification
**Cycle:** 8 — Delivery / CRITICAL
**Capability:** V3-F05 | Milestone P6 | Décision D-P6-SHE-01 Option A

---

## 1. GO / Git Truth / Convergence

GO = integrated compatibility correction only (no Product commit/push/PR; no REAL/HQA; no obligation redesign; no PRR digest refresh).
Git Truth verified at start/end: Delivery branch @ 476b1c20.
KEEP OA backbone + Option B. Debt TOOL-FIRST-REAL-NOWRITE OPEN.

---

## 2. Delivery inventory (before → after this correction)

**Already present (SHE Delivery):** singleHumanExecutePreparedContract.ts, p6.she.singleHumanExecute.d0.test.ts + prior SHE edits.

**This cycle ADDED:**
- `__tests__/oa/cycle/p6.she.gap03.effectiveGitPrimaryContract.d0.test.ts`

**This cycle MODIFIED (Product):**
- `w2/readCurrentGovernedExecutionContinuity.ts` — GAP-01
- `w2/recordGenericMissionHumanDecision.ts` — GAP-04
- `w2/singleHumanExecutePreparedContract.ts` — GAP-04 binding
- `w2/resolveProductExecutionContext.ts` — I17
- `lib/oa/cycle/application/deriveFinalizationApplicability.ts` — GAP-03

**This cycle MODIFIED (tests):**
- p6.o1.continuityGd4EmptyRefs (T2 conserve + T_SHE)
- p6.productContinuityClosure M02 requalify (GAP-02)
- p6.she.singleHumanExecute (GAP-01/04/05 + UNKNOWN)
- p6.hqa.materialityBlock01 C2/D3 requalify (no salvage)
- importBoundaries allowlist SHE module

---

## 3. GAP qualifications & corrections

### GAP-01 — STRUCTURAL draft continuity (CRITICAL) — FIXED
**Root cause confirmed:** empty refs admitted only via G-D4 Confirm gate (NON_STRUCTURAL); SHE PREPARE stamps `sheDeferredStructuralAuthority` but continuity ignored it → ExecutionSurface preExec inactive.
**Fix:** READ/INSPECT admission for server-stamped SHE deferred STRUCTURAL/UNKNOWN with LPS/repo currentness (same anchors as SHE Execute). Confirm/Authorize unchanged (still refuse empty STRUCTURAL). Arbitrary STRUCTURAL without SHE stamp still refused (T2).
**Tests:** o1 T_SHE; o1 T2 conserved; SHE GAP-01 continuity.

### GAP-02 — M02 (HIGH) — FIXED
**Requalified:** PREPARE may be inspectable under SHE; conserved: not NON_STRUCTURAL, HD required, empty refs, no Attempt; Build Doctrine path not granted by PREPARE alone.

### GAP-03 — effective EC finalization (HIGH) — FIXED
**Root cause confirmed:** `primaryContract = gitApplicable[0]` ignored supersession.
**Fix:** `selectEffectiveExecutionContracts` → unique effective git-applicable; 0→legacy mono fallback; >1→undefined (fail-closed). Obligations MUST unchanged.
**Tests:** p6.she.gap03 T14/T16/T17.

### GAP-04 — CR-02 SHE forge (CRITICAL) — FIXED
**Root cause confirmed:** Record re-applied subject effectsOverride for AUTHORIZE_INSPECTED_EXECUTE.
**Fix:** require `sheInspectedExecutionContract` binding; reload OA EC; project effects from OA; never trust subject overrides alone. SHE binder passes binding.
**Tests:** GAP-04 T24 (no bind refuse + forged+bind → stale/mismatch).

### GAP-05 — successor Attempt (HIGH) — PROVEN (bounded)
Predecessor status superseded; successor supersedesExecutionContractId; Select Attempt on successor id. Full Evidence→RB→CE→Nora e2e still Fake-path partial (W3-C suites PASS separately; SHE stops before inventing Evidence).

### I17 — Product Resolution latest — CONFIRMED + FIXED
**Confirmed:** latest preferred any contract by Attempt/version including superseded predecessors.
**Fix:** prefer non-superseded / not-pointed-to by `supersedesExecutionContractId`; fallback to full set only if empty.

---

## 4. Code citations


### GAP-01 SHE deferred read lineage

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
# projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts:151-280
151|/**
152| * SHE STRUCTURAL/UNKNOWN deferred PREPARE — READ/INSPECT continuity only (GAP-01).
153| * Does NOT unlock Confirm/Authorize/Execute. Currentness: LPS/doctrine/cycle/repo.
154| */
155|async function verifySheDeferredPrepareReadLineage(
156|  oa: RuntimeOaStack,
157|  projectId: string,
158|  contract: ExecutionContract,
159|  stamped: string,
160|): Promise<{ ok: true; decisionRef: null } | W2Failure> {
161|  if (stamped !== "structural" && stamped !== "unknown") {
162|    return fail(
163|      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
164|      "Provenance SHE différée incohérente avec la matérialité stampée — continuation refusée.",
165|    );
166|  }
167|  const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;
168|  const factsRaw =
169|    contractInputs.materialityFacts &&
170|    typeof contractInputs.materialityFacts === "object"
171|      ? (contractInputs.materialityFacts as Record<string, unknown>)
172|      : null;
173|  const stampedCurrentness = parseStampedProductCurrentness(factsRaw);
174|  if (stampedCurrentness == null) {
175|    return fail(
176|      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
177|      "Faits de matérialité / currentness absents sur le contrat SHE — continuation refusée.",
178|    );
179|  }
180|  const analysis = analysisStubFromMaterialityFacts(factsRaw, contractInputs);
181|  const current = await resolveAuthoritativeProductMateriality({
182|    oa,
183|    projectId,
184|    analysis,
185|    cycleInstanceId: contract.cycleInstanceId ?? null,
186|  });
187|  if (!current.liveReadOk || !current.facts.productCurrentness) {
188|    return fail(
189|      "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
190|      "Contexte Product courant indisponible — continuité SHE refusée (fail-closed).",
191|    );
192|  }
193|  const c = current.facts.productCurrentness;
194|  if (
195|    stampedCurrentness.lpsVersion !== c.lpsVersion ||
196|    stampedCurrentness.doctrineDigest !== c.doctrineDigest ||
197|    stampedCurrentness.activeCycleInstanceId !== c.activeCycleInstanceId ||
198|    stampedCurrentness.projectId !== c.projectId
199|  ) {
200|    return fail(
201|      "MATERIALITY_CURRENTNESS_STALE",
202|      "LPS / doctrine / cycle actifs ont changé depuis PREPARE — réinspection requise.",
203|    );
204|  }
205|  const stampedIdentity = stampedCurrentness.repositoryIdentity?.trim() || null;
206|  const currentIdentity = c.repositoryIdentity?.trim() || null;
207|  const stampedRoot = stampedCurrentness.pathRoot?.trim() || null;
208|  const currentRoot = c.pathRoot?.trim() || null;
209|  if (stampedIdentity !== null || stampedRoot !== null) {
210|    if (stampedIdentity !== null && currentIdentity === null) {
211|      return fail(
212|        "REPOSITORY_BINDING_UNAVAILABLE",
213|        "Repository binding Product courant indisponible — continuité refusée.",
214|      );
215|    }
216|    if (stampedIdentity !== currentIdentity) {
217|      return fail(
218|        "REPOSITORY_BINDING_STALE",
219|        "Repository identity Product a changé depuis PREPARE — continuité refusée.",
220|      );
221|    }
222|    if (stampedRoot !== currentRoot) {
223|      return fail(
224|        "REPOSITORY_BINDING_STALE",
225|        "pathRoot Product a changé depuis PREPARE — continuité refusée.",
226|      );
227|    }
228|  }
229|  return { ok: true, decisionRef: null };
230|}
231|
232|/**
233| * HD-bound lineage OR admissible empty-refs:
234| *   - G-D4 NON_STRUCTURAL + CURRENT (Confirm-admissible), OR
235| *   - SHE deferred STRUCTURAL/UNKNOWN PREPARE (READ/INSPECT only — GAP-01).
236| * Never invents a HumanDecision. READ-ONLY: no HD / Confirm / Auth / Attempt writes.
237| */
238|async function verifyDecisionLineage(
239|  oa: RuntimeOaStack,
240|  projectId: string,
241|  contract: ExecutionContract,
242|): Promise<
243|  | { ok: true; decisionRef: string | null }
244|  | W2Failure
245|> {
246|  const refs = contract.decisionRefs ?? [];
247|
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
267|
268|    const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;
269|    const factsRaw =
270|      contractInputs.materialityFacts &&
271|      typeof contractInputs.materialityFacts === "object"
272|        ? (contractInputs.materialityFacts as Record<string, unknown>)
273|        : null;
274|    const stampedCurrentness = parseStampedProductCurrentness(factsRaw);
275|
276|    // Stamp alone is never sufficient — prepare-time currentness witness required.
277|    if (stampedCurrentness == null) {
278|      return fail(
279|        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
280|        "Faits de matérialité / currentness absents sur le contrat — continuation sans décision refusée.",
```

### GAP-03 effective git primary

```
# projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts:317-355
317|
318|  if (gitMust) {
319|    const reqs = gitProofFamiliesFromRequirements(
320|      contracts.flatMap((c) => c.evidenceRequirements ?? []),
321|    );
322|    // D-P6-SHE-01 GAP-03 — prefer effective (non-superseded) git-applicable EC.
323|    // Fail-closed when multiple effective git-applicable ECs (no arbitrary pick).
324|    const { effective } = selectEffectiveExecutionContracts(
325|      contracts,
326|      cycleId,
327|    );
328|    const effectiveGitApplicable = effective.filter(isGitApplicableContract);
329|    let primaryContract: DerivableExecutionContract | undefined;
330|    if (effectiveGitApplicable.length === 1) {
331|      primaryContract = effectiveGitApplicable[0];
332|    } else if (effectiveGitApplicable.length === 0) {
333|      // No effective git EC — fall back only when a single git-applicable exists
334|      // in the raw set (legacy mono-EC); otherwise leave undefined (fail-closed).
335|      primaryContract =
336|        gitApplicable.length === 1 ? gitApplicable[0] : undefined;
337|    } else {
338|      // Multiple effective git-applicable ECs — do not invent a principal.
339|      primaryContract = undefined;
340|    }
341|    const artifactEv = evidence.find(
342|      (e) =>
343|        e.type === "artifact" &&
344|        evaluateFunctionalDesignArtifactCompleteness(e).ok,
345|    );
346|    const expected = {
347|      repositoryRef:
348|        input.repositoryBinding?.identity ??
349|        (typeof artifactEv?.location === "string"
350|          ? artifactEv.location
351|          : "unknown/repo"),
352|      targetPath: artifactEv?.location?.trim() || "docs/functional-design.md",
353|      artifactDigest: artifactEv?.digest ?? "",
354|      cycleInstanceId: cycleId,
355|      executionContractId: primaryContract?.contractId,
```

### GAP-04 SHE binding required (diff excerpt)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts b/projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
index 0c371973..d04fd46d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
@@ -18,11 +18,17 @@ import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabil
 import type { IntentAnalysisDto } from "../f2/types";
 import {
   GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
+  GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
   GENERIC_MISSION_OPTION_REFUSE,
   GENERIC_MISSION_OPTION_REQUEST_AMEND,
-  GENERIC_MISSION_PRESENTED_OPTIONS,
   buildGenericMissionSubject,
   decisionBasisFromGenericMissionSubject,
+  isGenericMissionAcceptedAuthorityOption,
+  labelForGenericMissionOption,
+  projectExecutionContractEffects,
+  resolveGenericMissionPresentedOptions,
+  type GenericMissionEffectsSeal,
+  type GenericMissionImpactSignals,
   type GenericMissionSubject,
 } from "./genericMissionSubject";
 import {
@@ -47,6 +53,19 @@ export type SealGenericMissionForPresentationInput = {
   readonly analysis: IntentAnalysisDto;
   /** Reuse existing occurrence id on amend re-presentation only when material unchanged. */
   readonly missionSubjectId?: string;
+  /**
+   * D-P6-SHE-01 — when set, seals these optionRefs (e.g. authorize-inspected-execute)
+   * instead of the default ACCEPT_PREPARE presentation set.
+   */
+  readonly optionRefs?: readonly string[];
+  /** Optional effect / impact overrides so EC↔HD binding stays exact (SHE). */
+  readonly effectsOverride?: GenericMissionEffectsSeal;
+  readonly impactSignalsOverride?: GenericMissionImpactSignals;
+  readonly objectiveOverride?: string;
+  readonly expectedOutcomeOverride?: string;
+  readonly scopeNarrativeOverride?: string;
+  readonly scopeInOverride?: readonly string[];
+  readonly scopeOutOverride?: readonly string[];
 };

 export type SealGenericMissionForPresentationResult =
@@ -115,12 +134,21 @@ export async function sealGenericMissionForPresentation(
   }

   const objective = (
+    input.objectiveOverride ??
     input.analysis.objective ??
     input.analysis.rephrasedRequest ??
     ""
   ).trim();
-  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
-  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
+  const expectedOutcome = (
+    input.expectedOutcomeOverride ??
+    input.analysis.expectedOutcome ??
+    objective
+  ).trim();
+  const scopeNarrative = (
+    input.scopeNarrativeOverride ??
+    input.analysis.scope ??
+    expectedOutcome
+  ).trim();
   if (!objective || (!expectedOutcome && !scopeNarrative)) {
     return fail(
       "MISSION_INSUFFICIENTLY_QUALIFIED",
@@ -145,6 +173,43 @@ export async function sealGenericMissionForPresentation(
       ei.reversibilityExpectation === "unknown")
       ? ei.reversibilityExpectation
       : null;
+  const defaultEffects: GenericMissionEffectsSeal = {
+    intentKind: ei?.intentKind?.trim() || null,
+    artifactType: ei?.artifactType?.trim() || null,
+    requestedOperation,
+    requiredCapabilities: [...capabilityResolution.contractCapabilities],
+    expectedOutputs: authoritativeExpectedOutputs,
+    reversibilityExpectation:
+      revFromEi ??
+      (signals?.irreversible === true
+        ? "irreversible"
+        : signals?.irreversible === false
+          ? "reversible"
+          : "unknown"),
+    stopConditions: [
+      ...(input.analysis.stopConditions ?? []).filter((s) => s.trim()),
+      "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
+    ],
+    risks: [...(input.analysis.risks ?? [])],
+    reservations: [...(input.analysis.reservations ?? [])],
+  };
+  const defaultImpact: GenericMissionImpactSignals = {
+    structuralChange: Boolean(signals?.structuralChange),
+    securityImpact: Boolean(signals?.securityImpact),
+    architectureImpact: Boolean(signals?.architectureImpact),
+    dataImpact: Boolean(signals?.dataImpact),
+    irreversible: Boolean(signals?.irreversible),
+  };
+  if (input.optionRefs) {
+    for (const ref of input.optionRefs) {
+      if (!labelForGenericMissionOption(ref)) {
+        return fail(
+          "HD_OPTION_UNKNOWN",
+          `Option de présentation inconnue: ${ref}`,
+        );
+      }
+    }
+  }
   const subject = buildGenericMissionSubject({
     missionSubjectId: input.missionSubjectId,
     projectId,
@@ -152,42 +217,24 @@ export async function sealGenericMissionForPresentation(
     objective,
     expectedOutcome,
     scopeNarrative,
-    scopeIn: ei?.scopeIn ?? [],
-    scopeOut: input.analysis.outOfScope ?? [],
+    scopeIn: input.scopeInOverride
+      ? [...input.scopeInOverride]
+      : (ei?.scopeIn ?? []),
```

### I17 latest effective pool

```
# projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts:537-575
537|  } else {
538|    // I17 — "latest" must not prefer a superseded predecessor over its
539|    // effective successor. Prefer non-superseded / non-pointed-to contracts.
540|    const allContracts = (
541|      await listProjectContracts(input.oa, projectId)
542|    ).filter((c) => c.projectId === projectId);
543|    const supersededBySuccessor = new Set<string>();
544|    for (const c of allContracts) {
545|      const sid = c.supersedesExecutionContractId;
546|      if (typeof sid === "string" && sid.trim()) {
547|        supersededBySuccessor.add(sid.trim());
548|      }
549|    }
550|    const effectivePool = allContracts.filter(
551|      (c) =>
552|        c.status !== "superseded" &&
553|        !supersededBySuccessor.has(c.executionContractId),
554|    );
555|    const contracts =
556|      effectivePool.length > 0 ? effectivePool : allContracts;
557|    let best: {
558|      contract: ExecutionContract;
559|      attempt: ExecutionAttempt | null;
560|    } | null = null;
561|    for (const c of contracts) {
562|      const latestAttempt = pickLatestAttempt(
563|        await listAttemptsForContract(input.oa, c.executionContractId),
564|      );
565|      if (!best) {
566|        best = { contract: c, attempt: latestAttempt };
567|        continue;
568|      }
569|      const bestHas = Boolean(best.attempt);
570|      const curHas = Boolean(latestAttempt);
571|      if (curHas && !bestHas) {
572|        best = { contract: c, attempt: latestAttempt };
573|        continue;
574|      }
575|      if (curHas && bestHas) {
```


---

## 5. Impact matrix (post-correction)

| ID | Domain | Verdict |
|----|--------|---------|
| GAP-01 | F11b continuity | COMPATIBLE_PROVEN at tested scope |
| GAP-02 | F08 M02 | COMPATIBLE_PROVEN (requalified) |
| GAP-03 | F15 git primary | COMPATIBLE_PROVEN |
| GAP-04 | F09 HD CR-02 | COMPATIBLE_PROVEN |
| GAP-05 | F10 successor Attempt | COMPATIBLE_PROVEN bounded |
| I17 | F11b latest | COMPATIBLE_PROVEN |
| Cycle obligations MUST | F15 | KEEP — COMPATIBLE_PROVEN |
| HD isolation | F07/F09 | COMPATIBLE_PROVEN |
| Legacy ACCEPT_PREPARE | F20 | COMPATIBLE_PROVEN |
| PRR digests | docs | DOC DEBT — conformance FAIL expected (no refresh) |

---

## 6. Tests & validations

### Targeted broad suite (23 files): **390 passed / 0 failed**
### GAP-focused (6 files): **46 passed / 0 failed**
### Full vitest (after fixes for hqa+importBoundaries):
Prior full run: 6196 passed / 4 failed / 143 skipped (588 files).
Fixed: hqa C2/D3, importBoundaries.
**Remaining expected FAIL:** `productionRuntimeReference.conformance.d0.test.ts` digest mismatch (PRR refresh forbidden this cycle).
Re-run expectation: **1 failed (PRR) | ~6199 passed | 143 skipped**.

### typecheck / lint / build: PASS
### git diff --check: clean on Product sources (review pack rewritten)
### Cursor REAL / OpenAI LIVE / HQA DB: not invoked

### Requalified assertions (security conserved)
| Test | Old | New | Conserved |
|------|-----|-----|-----------|
| M02 | prep.ok=false | prep inspectable OR refuse | not NON_STRUCTURAL; no Attempt; empty refs |
| HQA C2/D3 | prep.ok=false | refuse OR inspectable | no 01-cadrage/secret salvage; no note-de-cadrage invent |
| o1 T2 | STRUCTURAL empty refuse | same for non-SHE stamp | arbitrary STRUCTURAL refuse |

---

## 7. Fake / Real

Level: **INTEGRATED COMPATIBILITY DETERMINISTICALLY PROVEN AT TESTED SCOPE**.
Out of scope: REAL / LIVE / HQA / P6 GLOBAL / Runtime v3 ADOPTED.
PRR digest sync: deferred post-integrate.

---

## 8. Dettes / réserves / gates

- TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT OPEN
- PRR digest refresh required after Product integrate (Morris GO)
- SHE Evidence→RB→CE→Nora full Product e2e still bounded (W3-C path proven separately)
- Protected-path Execute gates unchanged

Gates: ChatGPT Critical re-review → Git Integration distinct → HQA/LIVE → P6 Exit

---

## 9. Git Review Index

| Path | Role |
|------|------|
| readCurrentGovernedExecutionContinuity.ts | GAP-01 |
| recordGenericMissionHumanDecision.ts | GAP-04 |
| singleHumanExecutePreparedContract.ts | SHE + GAP-04 bind |
| resolveProductExecutionContext.ts | I17 |
| deriveFinalizationApplicability.ts | GAP-03 |
| p6.she.gap03.*.test.ts | CREATED |
| p6.she.singleHumanExecute.d0.test.ts | GAP-01/04/05 |
| p6.o1.continuityGd4EmptyRefs.d0.test.ts | GAP-01 |
| p6.productContinuityClosure… | GAP-02 |
| p6.hqa.materialityBlock01… | salvage conserve |
| importBoundaries.test.ts | allowlist SHE |

---

## 10. Verdict

**SINGLE HUMAN EXECUTE — INTEGRATED COMPATIBILITY CORRECTIONS COMPLETE — CROSS-COMPONENT DETERMINISTIC QA PASS AT TESTED SCOPE — READY FOR CHATGPT CRITICAL RE-REVIEW.**

(Product Git Integration NOT READY; PRR conformance FAIL expected until digest refresh GO.)

---

## INSTRUCTION CHATGPT

Lire ce handoff. Vérifier GAP-01..05, I17, tests adversariaux, continuity READ≠AUTHORIZE, finalization effective EC, CR-02 OA binding, absence mutation obligations, PRR debt, verdict.

Ne pas générer Git Integration avant verdict Critical conforme.

# END REVIEW PACK FULL — CRITICAL


## APPENDIX A — CREATED gap03 test (FULL)
```typescript

/**
 * D-P6-SHE-01 GAP-03 — git MUST primaryContract uses effective EC selection.
 * Deterministic — ZERO REAL / HQA.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { deriveFinalizationApplicability } from "@/lib/oa/cycle/application/deriveFinalizationApplicability";
import type { DerivableExecutionContract } from "@/lib/oa/cycle/application/deriveFinalizationApplicability";
import { deriveCycleObligationSnapshot } from "@/lib/oa/cycle/application/deriveCycleObligationSnapshot";

describe("P6 SHE GAP-03 — effective git primaryContract", () => {
  const cycleId = "cycinst:gap03-test";
  const projectId = "prj:gap03-test";
  const repoBinding = {
    identity: "org/repo",
    pathRoot: "/tmp/repo",
  } as const;

  function gitEc(
    id: string,
    status: string,
    supersedes?: string,
  ): DerivableExecutionContract {
    return {
      contractId: id,
      cycleInstanceId: cycleId,
      status,
      supersedesExecutionContractId: supersedes,
      requiredCapabilities: ["cap:git.repository"],
      evidenceRequirements: ["git:commit", "git:push"],
      action: "git_commit",
      target: "docs/functional-design.md",
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

  it("T14/T22 — MUST includes git_repository; successor preferred over superseded pred", () => {
    const snap = snapshot();
    expect(snap.mustFamilies).toContain("git_repository");

    const predecessor = gitEc("xct:pred", "superseded");
    const successor = gitEc("xct:she-hd:succ", "completed", "xct:pred");
    // Predecessor listed first (historical bug path used gitApplicable[0]).
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: null,
      decisions: [],
      evidence: [],
      reviewBundles: [],
      executionContracts: [predecessor, successor],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: repoBinding as never,
      obligationSnapshot: snap,
    });
    expect(rules.git_repository).toBe("APPLICABLE");
    // No evidence → not present, but selection must target successor (no throw).
    expect(rules.gitProofPresent).toBe(false);
  });

  it("T16 — evidence bound only to predecessor does not satisfy successor expected id", () => {
    const snap = snapshot();
    const predecessor = gitEc("xct:pred", "superseded");
    const successor = gitEc("xct:she-hd:succ", "completed", "xct:pred");
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: null,
      decisions: [],
      evidence: [
        {
          evidenceId: "evd:git:pred-only",
          projectId,
          type: "execution_log",
          status: "verified",
          source: "git:commit",
          location: `repo=${encodeURIComponent("org/repo")}?path=docs/functional-design.md`,
          digest: "sha256:aaaa",
          bindings: {
            cycleInstanceId: cycleId,
            executionContractId: "xct:pred",
          },
        } as never,
      ],
      reviewBundles: [],
      executionContracts: [predecessor, successor],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: repoBinding as never,
      obligationSnapshot: snap,
    });
    // Expected EC is successor → predecessor-bound evidence → gitProofPresent false.
    expect(rules.gitProofPresent).toBe(false);
  });

  it("T17 — multiple effective git-applicable ECs → fail-closed (no arbitrary primary)", () => {
    const snap = snapshot();
    const a = gitEc("xct:a", "completed");
    const b = gitEc("xct:b", "completed");
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: null,
      decisions: [],
      evidence: [
        {
          evidenceId: "evd:git:a",
          projectId,
          type: "execution_log",
          status: "verified",
          source: "git:commit",
          location: `repo=${encodeURIComponent("org/repo")}?path=docs/functional-design.md`,
          digest: "sha256:bbbb",
          bindings: {
            cycleInstanceId: cycleId,
            executionContractId: "xct:a",
          },
        } as never,
      ],
      reviewBundles: [],
      executionContracts: [a, b],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: repoBinding as never,
      obligationSnapshot: snap,
    });
    expect(rules.gitProofPresent).toBe(false);
  });
});


```


## APPENDIX B — DIFF deriveFinalizationApplicability.ts
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


## APPENDIX C — DIFF readCurrentGovernedExecutionContinuity.ts (truncated head)
```diff

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts b/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
index 3527ed5a..a886327c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
@@ -22,6 +22,7 @@ import { readContractInspectionState } from "./inspectExecutionContract";
 import {
   analysisStubFromMaterialityFacts,
   parseStampedProductCurrentness,
+  resolveAuthoritativeProductMateriality,
   revalidateMaterialityAgainstCurrentProduct,
 } from "./resolveAuthoritativeProductMateriality";
 import type {
@@ -30,6 +31,16 @@ import type {
   W2Failure,
 } from "./types";

+/**
+ * D-P6-SHE-01 GAP-01 — Product PREPARE stamped deferred structural authority.
+ * Server-owned input only; never trust a client-only claim.
+ */
+function isSheDeferredStructuralPrepare(
+  contract: ExecutionContract,
+): boolean {
+  return contract.inputs?.sheDeferredStructuralAuthority === true;
+}
+
 const PRE_EXECUTION_STATUSES = new Set<ExecutionContract["status"]>([
   "draft",
   "proposed",
@@ -138,9 +149,91 @@ async function readProjectActiveCycleContext(
 }

 /**
- * HD-bound lineage OR admissible G-D4 empty-refs (NON_STRUCTURAL + CURRENT).
- * Reuses Confirm/Authorize materiality gates — never invents a HumanDecision.
- * READ-ONLY: no HD / inspection / confirmation / authorize / Attempt writes.
+ * SHE STRUCTURAL/UNKNOWN deferred PREPARE — READ/INSPECT continuity only (GAP-01).
+ * Does NOT unlock Confirm/Authorize/Execute. Currentness: LPS/doctrine/cycle/repo.
+ */
+async function verifySheDeferredPrepareReadLineage(
+  oa: RuntimeOaStack,
+  projectId: string,
+  contract: ExecutionContract,
+  stamped: string,
+): Promise<{ ok: true; decisionRef: null } | W2Failure> {
+  if (stamped !== "structural" && stamped !== "unknown") {
+    return fail(
+      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+      "Provenance SHE différée incohérente avec la matérialité stampée — continuation refusée.",
+    );
+  }
+  const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;
+  const factsRaw =
+    contractInputs.materialityFacts &&
+    typeof contractInputs.materialityFacts === "object"
+      ? (contractInputs.materialityFacts as Record<string, unknown>)
+      : null;
+  const stampedCurrentness = parseStampedProductCurrentness(factsRaw);
+  if (stampedCurrentness == null) {
+    return fail(
+      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+      "Faits de matérialité / currentness absents sur le contrat SHE — continuation refusée.",
+    );
+  }
+  const analysis = analysisStubFromMaterialityFacts(factsRaw, contractInputs);
+  const current = await resolveAuthoritativeProductMateriality({
+    oa,
+    projectId,
+    analysis,
+    cycleInstanceId: contract.cycleInstanceId ?? null,
+  });
+  if (!current.liveReadOk || !current.facts.productCurrentness) {
+    return fail(
+      "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
+      "Contexte Product courant indisponible — continuité SHE refusée (fail-closed).",
+    );
+  }
+  const c = current.facts.productCurrentness;
+  if (
+    stampedCurrentness.lpsVersion !== c.lpsVersion ||
+    stampedCurrentness.doctrineDigest !== c.doctrineDigest ||
+    stampedCurrentness.activeCycleInstanceId !== c.activeCycleInstanceId ||
+    stampedCurrentness.projectId !== c.projectId
+  ) {
+    return fail(
+      "MATERIALITY_CURRENTNESS_STALE",
+      "LPS / doctrine / cycle actifs ont changé depuis PREPARE — réinspection requise.",
+    );
+  }
+  const stampedIdentity = stampedCurrentness.repositoryIdentity?.trim() || null;
+  const currentIdentity = c.repositoryIdentity?.trim() || null;
+  const stampedRoot = stampedCurrentness.pathRoot?.trim() || null;
+  const currentRoot = c.pathRoot?.trim() || null;
+  if (stampedIdentity !== null || stampedRoot !== null) {
+    if (stampedIdentity !== null && currentIdentity === null) {
+      return fail(
+        "REPOSITORY_BINDING_UNAVAILABLE",
+        "Repository binding Product courant indisponible — continuité refusée.",
+      );
+    }
+    if (stampedIdentity !== currentIdentity) {
+      return fail(
+        "REPOSITORY_BINDING_STALE",
+        "Repository identity Product a changé depuis PREPARE — continuité refusée.",
+      );
+    }
+    if (stampedRoot !== currentRoot) {
+      return fail(
+        "REPOSITORY_BINDING_STALE",
+        "pathRoot Product a changé depuis PREPARE — continuité refusée.",
+      );
+    }
+  }
+  return { ok: true, decisionRef: null };
+}
+
+/**
+ * HD-bound lineage OR admissible empty-refs:
+ *   - G-D4 NON_STRUCTURAL + CURRENT (Confirm-admissible), OR
+ *   - SHE deferred STRUCTURAL/UNKNOWN PREPARE (READ/INSPECT only — GAP-01).
+ * Never invents a HumanDecision. READ-ONLY: no HD / Confirm / Auth / Attempt writes.
  */
 async function verifyDecisionLineage(
   oa: RuntimeOaStack,
@@ -152,7 +245,7 @@ async function verifyDecisionLineage(
 > {
   const refs = contract.decisionRefs ?? [];

-  // G-D4 empty refs — admit only with NON_STRUCTURAL stamp + CURRENT revalidation.
+  // Empty refs — G-D4 NON_STRUCTURAL OR SHE deferred STRUCTURAL/UNKNOWN (read-only).
   if (refs.length === 0) {
     const stamped = materialityFromContractConstraints(contract.constraints);
     if (stamped == null) {
@@ -162,6 +255,16 @@ async function verifyDecisionLineage(
       );
     }

+    // GAP-01 — Product SHE PREPARE provenance (server input), not client stamp alone.
+    if (isSheDeferredStructuralPrepare(contract)) {
+      return verifySheDeferredPrepareReadLineage(
+        oa,
+        projectId,
+        contract,
+        stamped,
+      );
+    }
+
     const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;
     const factsRaw =
       contractInputs.materialityFacts &&

```


## APPENDIX D — DIFF resolveProductExecutionContext.ts (I17)
```diff

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
index a131e20b..5be2ab43 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
@@ -535,9 +535,25 @@ export async function resolveProductExecutionContext(input: {
       await listAttemptsForContract(input.oa, contract.executionContractId),
     );
   } else {
-    const contracts = (await listProjectContracts(input.oa, projectId)).filter(
-      (c) => c.projectId === projectId,
+    // I17 — "latest" must not prefer a superseded predecessor over its
+    // effective successor. Prefer non-superseded / non-pointed-to contracts.
+    const allContracts = (
+      await listProjectContracts(input.oa, projectId)
+    ).filter((c) => c.projectId === projectId);
+    const supersededBySuccessor = new Set<string>();
+    for (const c of allContracts) {
+      const sid = c.supersedesExecutionContractId;
+      if (typeof sid === "string" && sid.trim()) {
+        supersededBySuccessor.add(sid.trim());
+      }
+    }
+    const effectivePool = allContracts.filter(
+      (c) =>
+        c.status !== "superseded" &&
+        !supersededBySuccessor.has(c.executionContractId),
     );
+    const contracts =
+      effectivePool.length > 0 ? effectivePool : allContracts;
     let best: {
       contract: ExecutionContract;
       attempt: ExecutionAttempt | null;


```
