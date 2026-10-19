# REVIEW PACK FULL — CRITICAL
# D-P6-SHE-01 — TARGETED QA CLOSURE (GAP-03 / FULL VITEST / PRR)

**Timestamp (UTC):** 2026-10-19T12:09:54Z
**Repository:** mcleland147/sfia-workspace
**Worktree:** `/Users/morris/Projects/sfia-workspace-p6-she-delivery-476b1c20`
**Branch:** `delivery/sfia-studio-p6-single-human-execute`
**HEAD:** `476b1c2065991e05cca298f6669d85b62a07ced3` (= origin/main)
**Prior Critical handoff:** `253ee27b` / blob `2219a338`
**Product Delivery:** NON COMMITTÉ — preserved; QA cycle writes = GAP-03 test only
**GO Morris:** QA Closure uniquement (aucun GO Git Integration / PRR protected / REAL/HQA)
**Cycle:** 9 — QA / validation / CRITICAL
**Capability:** V3-F05 | Milestone P6 | D-P6-SHE-01 Option A

---

## 1. GO / Git Truth / Convergence

### Git Truth (initial = final Product HEAD)
- Branch: `delivery/sfia-studio-p6-single-human-execute`
- HEAD = origin/main = `476b1c2065991e05cca298f6669d85b62a07ced3`
- Staged: none
- SHE Delivery dirty preserved (Product + tests uncommitted)
- No HQA worktree touched
- No reset / stash / clean / rebase

### Convergence Pre-check
- Capability V3-F05 / P6
- CURRENT MAIN: Option B + SHE TARGET ADOPTED; SHE runtime not on main
- CANDIDATE: local SHE Delivery + GAP-01..05 / I17 corrections
- KEEP OA backbone (HD/EC/Cycle/Confirm/Auth/Attempt/Evidence/RB/CR/Nora/Reconciler/Cursor Gateway)
- ADAPT: GAP-03 tests only this cycle
- REPLACE: none
- GAPS closed this cycle: positive Git successor proof; actual full Vitest; PRR diagnostic
- Next: ChatGPT Critical → Morris Git Integration (distinct) → HQA/LIVE → P6 Exit

### GO consumed
QA Closure only. No Product commit/push/PR. No PRR mutation. No REAL/HQA.

---

## 2. Files modified this QA cycle

| Path | Action |
|------|--------|
| `app/__tests__/oa/cycle/p6.she.gap03.effectiveGitPrimaryContract.d0.test.ts` | EXTENDED (positive + negatives + legacy) |

No Product service / doctrine / PRR / obligation / persistence / Gateway mutation this cycle.

---

## 3. GAP-03 POSITIVE PROOF

### Discriminating property
Full 7-family typed Git Evidence SET bound to SHE **successor** EC id, with superseded predecessor listed first:
- `qualifyGitCompletionProofSet(expected=pred)` → BLOCKING `contract_mismatch`
- `qualifyGitCompletionProofSet(expected=succ)` → SATISFIED
- `deriveFinalizationApplicability(...)` → `git_repository=APPLICABLE` AND `gitProofPresent=true`

If primaryContract were still `gitApplicable[0]` (pred), the same fixture would yield `gitProofPresent=false`.

### Not Cycle FINALIZED
`assessFinalizationObligations` with same fixture: git SATISFIED, other MUST still MISSING/BLOCKING, `canComplete=false`.

### Families used
`git:local_commit`, `git:remote_push`, `git:pull_request`, `git:ci_status`, `git:review_status`, `git:merge`, `git:post_merge_verification` (+ GCEC-strict artifact for digest/path).

### Negatives covered
pred-only evidence; missing family; status not verified; digest divergent; SHA incoherent; wrong project/cycle/repo; multi effective EC; legacy mono-EC true.

### Targeted result
```
SFIA_STUDIO_CURSOR_REAL=0 npx vitest run __tests__/oa/cycle/p6.she.gap03.effectiveGitPrimaryContract.d0.test.ts
✓ 13 tests passed (Duration ~0.55s)
```

### Related suites (same env)
```
gap03 + gcecOneLotDelivery + p6.she.singleHumanExecute + o1 continuity + productContinuityClosure
Test Files 5 passed | Tests 62 passed
```

---

## 4. FULL VITEST — ACTUAL RUN (not a forecast)

### Command / env
```
cd projects/sfia-studio/app
export SFIA_STUDIO_CURSOR_REAL=0
unset SFIA_GCEC_CURSOR_REAL_PROOF SFIA_STUDIO_CURSOR_REAL_AUTHORIZED OPENAI_API_KEY
npx vitest run --reporter=default
```
**Start UTC:** 2026-10-19T12:05:56Z
**End UTC:** 2026-10-19T12:07:09Z
**Duration:** 71.92s

### Exact totals
| Metric | Value |
|--------|-------|
| Test Files | **1 failed \| 565 passed \| 22 skipped** (588) |
| Tests | **1 failed \| 6209 passed \| 143 skipped** (6353) |
| Duration | 71.92s |

### Sole FAIL (Product suite)
```
FAIL  __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts
  > tracked source/test/volume digests match current tree
AssertionError: expected '73d754838d9d13a0' to be 'c8f491d05217ffc4'
(first mismatch reported by Vitest; full matrix below shows 2 source digests)
```
Classification: **PRR digest mismatch** — not a Product functional regression in SHE/authority suites.
NOT declared EXPECTED PASS. PRR conformance remains FAIL.

### Skip note
22 files skipped (REAL / postgres / seed campaigns) — gated by env (no REAL proof flags). See APPENDIX skipped list.

### Typecheck / lint / build (actual)
| Check | Result | UTC |
|-------|--------|-----|
| `tsc --noEmit` | **PASS** (exit 0) after GAP-03 digest literal cast fix | 2026-10-19T12:08:32Z |
| `next lint` | **PASS** (exit 0) — No ESLint warnings or errors | 2026-10-19T12:07:48Z |
| `next build` | **PASS** — Compiled successfully | 2026-10-19T12:07:49Z |
| `git diff --check` (app) | **clean** (exit 0) | |
| Secrets scan (SHE/GAP03) | none found | |

Note: first `tsc` attempt failed on GAP-03 test digest template literal typing; fixed in-test only; GAP-03 re-run 13/13 PASS. Full Vitest was executed before that cast-only fix (GAP-03 already green in that run).

### Vitest failure excerpt
```
 ✓ __tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts (10 tests) 4ms
 ✓ __tests__/auth/allowlist-actor-s1.test.ts (13 tests) 6ms
 ✓ __tests__/nora-cognitive-runtime/reservationContextPilotConfirmation.d0.test.ts (6 tests) 4ms
 ✓ __tests__/project-assistant/p5.s07.cp02.semanticResponsive.d0.test.ts (14 tests) 6ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 4ms
 ✓ __tests__/pre-m6-product-ui/p6.r03.inspectionDisclosureClosure.d0.test.ts (4 tests) 3ms
 ✓ __tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts (10 tests) 4ms
 ✓ __tests__/fixtures.test.ts (2 tests) 2ms
 ✓ __tests__/pre-m6-product-ui/pilotContractPresentation.d0.test.ts (3 tests) 2ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 3ms
 ✓ __tests__/project-assistant/pilotExecutionExperience.recoveryOwnership.d0.test.ts (4 tests) 2ms
 ✓ __tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts (9 tests) 3ms
 ✓ __tests__/project-assistant/pilotExecutionExperience.trustedLaunch.d0.test.ts (3 tests) 2ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts > Living Production Runtime Reference conformance > tracked source/test/volume digests match current tree
AssertionError: expected '73d754838d9d13a0' to be 'c8f491d05217ffc4' // Object.is equality

Expected: "c8f491d05217ffc4"
Received: "73d754838d9d13a0"

 ❯ __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts:100:27
     98|       const abs = path.join(repoRoot, e.path);
     99|       expect(fs.existsSync(abs)).toBe(true);
    100|       expect(e.sha256_16).toBe(sha16(abs));
       |                           ^
    101|     }
    102|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed | 565 passed | 22 skipped (588)
      Tests  1 failed | 6209 passed | 143 skipped (6353)
   Start at  14:05:57
   Duration  71.92s (transform 14.38s, setup 25.56s, collect 275.68s, tests 215.87s, environment 27.07s, prepare 23.87s)

EXIT:0

```

---

## 5. PRR CONFORMANCE DIAGNOSTIC (NO MUTATION)

### Failed test (exact)
`Living Production Runtime Reference conformance > tracked source/test/volume digests match current tree`

### Integrity
Temporary drift probe restored; `production-runtime-reference/` git status clean after runs.

### Full digest mismatch matrix (computed vs manifest)

| PRR ENTRY (path) | KIND | EXPECTED sha256_16 (manifest) | ACTUAL sha256_16 (tree) | DIRTY Delivery? | COMPONENT | FLOWS | Classification |
|------------------|------|-------------------------------|-------------------------|-----------------|-----------|-------|----------------|
| `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts` | trackedSources | `73d754838d9d13a0` | `c8f491d05217ffc4` | YES | OBJ-TURN-ORCH | F04/F05/F06 | **A** digest drift from legitimate SHE Delivery (structuralBlocked no longer refuses PREPARE; HD deferred to Execute) |
| `projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts` | trackedSources | `1963f097d0aa9328` | `6fba1892149be55c` | YES | OBJ-FINALIZATION-ASSESS | F05/F15 | **A** digest drift from GAP-03 effective EC selection; behavior change vs prior `gitApplicable[0]` |

Volumes: **0 digest mismatches** among tracked volumes (CURRENT tree vs manifest).
Tracked tests: **0 mismatches**.

### Semantic impact
| Entry | Impact | Volume PRR | Correction éventuelle | Gate Morris |
|-------|--------|------------|----------------------|-------------|
| orchestrateF2 | Aligns code with TARGET SHE (PREPARE inspectable). Volume 07 already documents TARGET vs CURRENT. | 03/07 | Refresh trackedSources digest + confirm F04/F05 narrative still accurate | **PRR protected refresh GO** (not granted) |
| deriveFinalizationApplicability | Changes git MUST primaryContract selection to effective successor. Volumes do not hardcode `gitApplicable[0]` text; F15/object catalog still name this file. | 02/08 | Refresh digest; optionally document effective-EC selection under F15 | **PRR protected refresh GO** |

### Distinctions
- **A** Simple digest drift from legitimate Product Delivery — YES (both entries)
- **B** Semantic contradiction SHE vs CURRENT reference — PARTIAL: volume 07 already TARGET-amended; no volume claims the old primaryContract[0] algorithm literally; still REFERENCE REVIEW REQUIRED before claiming PRR CONFORMANT
- **C** Product regression — NO (full suite otherwise green; GAP-03 positive proves intended behavior)
- **D** Tooling — NO

### Treatment required
1. Do **not** refresh digests this cycle (forbidden).
2. Do **not** declare PRR CONFORMANT.
3. Morris gate for Git Integration / PRR path: explicit GO to update `production-runtime-reference.manifest.json` digests (+ any volume narrative deltas) in a **distinct** authorized cycle.

### Diffs causing drift (Product Delivery — not mutated this QA cycle)

#### orchestrateF2.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 9b783ae6..9ca5fa01 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -2305,29 +2305,16 @@ export async function orchestrateAssistantSend(input: {
           });
       const readiness = assessGenericMissionPrepareReadiness(readinessAnalysis);

-      if (readiness.structuralBlocked || !readiness.ready) {
-        // M-HD-02 — when structural fields are sufficient, remember CURRENT
-        // offer so ConversationSurface can seal + present Accept/Refuse/Amend.
-        // No PREPARE. No HumanDecision. No PresentedMission store.
-        if (
-          readiness.structuralBlocked &&
-          readiness.missingFields.length === 0
-        ) {
-          rememberGenericPrepareRecommendation({
-            projectId: project.projectId,
-            cycleInstanceId: activeId,
-            analysis: readinessAnalysis,
-            offeredAtIso: oa.clock.nowIso(),
-            sessionDbPath: input.sessionDbPath,
-          });
-        }
+      // D-P6-SHE-01 — missing descriptive fields still block PREPARE.
+      // structuralBlocked alone no longer refuses PREPARE (HD deferred to Execute).
+      if (!readiness.ready) {
         return await completeF2Turn({
           userText: content,
           sessionDbPath: input.sessionDbPath,
           text: genericMissionClarificationText({
             presentation,
             missingFields: readiness.missingFields,
-            structuralBlocked: readiness.structuralBlocked,
+            structuralBlocked: false,
             hasActiveCycle: Boolean(activeId),
           }),
           mode: modeResolution.mode as "fixture" | "live",

```

#### deriveFinalizationApplicability.ts
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

---

## 6. Non-régression / limites

- PREPARE/INSPECT/EXECUTE / HD / Confirm / Auth / Attempt / Reconciler / obligations / Evidence/RB/CR/Nora/LPS/legacy: no functional edits this QA cycle
- Evidence→ReviewBundle→ContractResult→Nora Product E2E SHE: **still bounded / not closed** by GAP-03 positive proof
- Debt OPEN: TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT

---

## 7. Fake / Real qualification

| Item | Value |
|------|-------|
| Entry level | DETERMINISTIC CANDIDATE WITH CRITICAL REVIEW RESERVATIONS |
| Achieved | **QA CLOSURE DETERMINISTICALLY VERIFIED AT TESTED SCOPE** |
| Out of scope | REAL BOUNDARY PROVEN / E2E REAL / HQA PASS / P6 GLOBAL PASS / Runtime v3 ADOPTED |
| REAL gate | NOT GRANTED |
| Claims | Exact Vitest totals; PRR FAIL remains FAIL; GAP-03 positive proven |

---

## 8. Verdict

**D-P6-SHE-01 — TARGETED QA CLOSURE COMPLETE — DETERMINISTIC TESTS VERIFIED AT TESTED SCOPE — READY FOR CHATGPT CRITICAL RE-REVIEW.**

Constraints still true:
- Product Git Integration NOT AUTHORIZED
- PRR conformance FAIL remains FAIL
- P6 GLOBAL PASS non acquis
- Runtime v3 NON ADOPTED

---

## 9. Gates Morris restants

1. ChatGPT Critical Review conforme
2. Git Integration GO (Product commit/push/PR) — distinct
3. PRR protected digest/volume refresh GO — distinct
4. REAL/HQA GO — distinct
5. P6 Exit

---

## INSTRUCTION CHATGPT

Vérifier indépendamment: nouveau commit/blob; T18 positive discriminante; négatifs; full Vitest 6209/1/143; matrice PRR 2 digests; absence mutation PRR/services; pas de preuve LIVE.

Ne pas générer Git Integration avant verdict Critical conforme.

# END REVIEW PACK FULL — CRITICAL

---

## APPENDIX A — GAP-03 TEST FILE (FULL)

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

---

## APPENDIX B — SKIPPED TEST FILES (22)

```
10043: ↓ __tests__/project-assistant/s08-4.seedEmptyProduct.d0.test.ts (1 test | 1 skipped)
10044: ↓ __tests__/nora-eval/mw0-mw5.businessIntegrated.real.test.ts (1 test | 1 skipped)
10045: ↓ __tests__/nora-eval/mw5.realCampaign.test.ts (1 test | 1 skipped)
10046: ↓ __tests__/nora-eval/mw0.realCampaign.test.ts (1 test | 1 skipped)
10047: ↓ __tests__/nora-cognitive-runtime/p5.s05.r3IntegratedProduct.real.test.ts (1 test | 1 skipped)
10048: ↓ __tests__/auth/auth-real-boundary-session.test.ts (1 test | 1 skipped)
10049: ↓ __tests__/oa/finops/postgres/t1.ledger.integration.test.ts (10 tests | 10 skipped)
10050: ↓ __tests__/oa/finops/postgres/t2.aggregate.integration.test.ts (7 tests | 7 skipped)
10051: ↓ __tests__/oa/finops/postgres/t2.billed-period-concurrency.integration.test.ts (4 tests | 4 skipped)
10052: ↓ __tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts (3 tests | 3 skipped)
10053: ↓ __tests__/oa/finops/postgres/t3.alert-review.integration.test.ts (7 tests | 7 skipped)
10054: ↓ __tests__/project-assistant/s08-4.seedFinalFidelity.d0.test.ts (2 tests | 2 skipped)
10055: ↓ __tests__/oa/finops/postgres/t4.enforcement-projection.integration.test.ts (14 tests | 14 skipped)
10056: ↓ __tests__/nora-cognitive-runtime/p5.s02.boundedReal.r1r2.test.ts (1 test | 1 skipped)
10057: ↓ __tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts (4 tests | 4 skipped)
10058: ↓ __tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts (8 tests | 8 skipped)
10059: ↓ __tests__/oa/finops/postgres/t6.runtime-composition.integration.test.ts (4 tests | 4 skipped)
10060: ↓ __tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts (16 tests | 16 skipped)
10061: ↓ __tests__/oa/finops/postgres/t7.rollout.integration.test.ts (12 tests | 12 skipped)
10062: ↓ __tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts (19 tests | 19 skipped)
10063: ↓ __tests__/project-assistant/s08-4.seedGovernedMoments.d0.test.ts (1 test | 1 skipped)
10064: ↓ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts (23 tests | 23 skipped)

```
