# ChatGPT Review Pack — CORR-PROOF-02 B1-PR-CI-01 Collateral

## 1. Timestamp (UTC)
2026-09-06T17:44:23Z

## 2. Cycle ID
`SFIA-STUDIO-PRODUCT-PROOF-CORR-02-B1-PR-CI-COLLATERAL-01`

Parent: `SFIA-STUDIO-PRODUCT-PROOF-CORR-02-B1-PRODUCT-GIT-PR-01`

## 3. Exact Morris GO consumed
GO MORRIS — PR #473 CI COLLATERAL B1-PR-CI-01 — UPDATE ONLY `mw2.corr04.truthCIntentStability.d0.test.ts` TO THE ADOPTED B1 ADVISORY-DEFAULT CONTRACT WHILE PRESERVING AMBIGUOUS INTENT / TRUTH-C STABILITY / ZERO-MUTATION / ZERO-AUTHORITY ASSERTIONS — RUN TARGETED TEST + FULL REQUIRED CI — COMMIT + PUSH FOLLOW-UP TO PR #473 AUTHORIZED — NO PRODUCT SOURCE CHANGE — NO ARCHITECTURE CHANGE — MERGE NOT AUTHORIZED — REAL NOT AUTHORIZED.

## 4. Repo / worktree / branch
- Repo: `mcleland147/sfia-workspace`
- Worktree: `/Users/morris/Projects/sfia-workspace-proof-corr-02-b1-delivery`
- Branch: `delivery/sfia-studio-proof-corr-02-b1-advisory-default`

## 5. Entry HEAD / origin/main / remote tip
- Entry HEAD: `1de72d7cb14309f8c90c1408d5b50ed4d1f5242e`
- origin/main: `bf6c2104941fee46b66396114f8c22f882973aa2`
- Remote delivery tip at entry: `1de72d7cb14309f8c90c1408d5b50ed4d1f5242e`

## 6. Input Review Handoff
- tip: `19c4e9e0b0ceca3147c78654acc3318e4eef3004`
- path: `sfia-review-handoff/latest-chatgpt-review.md`

## 7. PR #473
https://github.com/mcleland147/sfia-workspace/pull/473
- OPEN / not draft / not merged at entry
- base: `bf6c2104941fee46b66396114f8c22f882973aa2`
- head at entry: `1de72d7cb14309f8c90c1408d5b50ed4d1f5242e` (9 B1 files)
- Required Gate was FAIL due to legacy D0-05

## 8. Classification
**CI COLLATERAL / LEGACY TEST CONTRACT DRIFT** after B1 advisory-default adoption.
Finding ID: **B1-PR-CI-01**.

## 9. Convergence / v3
- Primary: V3-F05
- Support: V3-F04
- Preserve: V3-F11 / V3-F12 / V3-F15
- Milestone: PRODUCT PROOF — CORR-PROOF-02 B1
- B1 implementation: **KEEP**
- Legacy D0-05 contract: **ADAPT**
- Architecture: none new
- runtime v3: NON ADOPTED · Stage B: NOT AUTHORIZED

## 10. Modified path (exact)
`projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts`

No product source modified. Accepted B1 9-file candidate unchanged.

## 11. Old vs new D0-05 contract
| | Old (legacy) | New (B1 advisory-default) |
|--|--|--|
| Title | structural underspecification still clarifies | structural underspecification stays ambiguous and routes to safe advisory |
| Scripted intent | `ambiguous` | `ambiguous` (**preserved**) |
| Expected surface | `/Clarification requise/i` (MW5 front-door) | `turnKind=f1_informative`; **not** Clarification requise / MW5 marker |
| Formalization | implicit via clarify | qualification/proposal/decision **null** |
| Truth C / LPS | not asserted | version + activeCycleInstanceId unchanged |
| Authority | not asserted | no synthesized HD/GO/Confirmation |

## 12. Proof checklist
- intentClass ambiguous preserved: **YES** (scripted + asserted)
- F1 advisory routing: **YES** (`f1_informative`)
- MW5 front-door not reintroduced: **YES**
- zero formalization: **YES**
- zero authority: **YES** (`containsSynthesizedHumanAct` false)
- Truth C/LPS non-mutation: **YES**

## 13. Exploitable full commit diff

```diff
commit 16a3e5a64e1a8252115dd3628dd32fabff031ba4
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Sep 6 19:43:19 2026 +0200

    test(sfia-studio): align mw2 ambiguity contract with B1

diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts
index 9f1f3eb9..c05a1457 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts
@@ -18,6 +18,8 @@ import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/Pro
 import {
   isOpenAiLiveF1Provider,
   shouldUseProviderAgentsModelAdapter,
+  containsSynthesizedHumanAct,
+  MW5_CLARIFY_MARKER,
 } from "@/lib/nora-cognitive-runtime";
 import {
   getRuntimeApplicationService,
@@ -315,7 +317,9 @@ describe("CORR-MW2-REAL-04 — Truth-C + intent/CWP stability", () => {
     expect(result.f2?.turnKind).not.toBe("f1_informative");
   });

-  it("D0-05 — structural underspecification still clarifies", async () => {
+  it("D0-05 — structural underspecification stays ambiguous and routes to safe advisory", async () => {
+    // B1 advisory-default: ambiguous intent remains visible, but does not force
+    // MW5 front-door CLARIFY; without formalization readiness → F1 advisory.
     const projectId = await createProject({
       criticality: "STANDARD",
       name: "Ambiguous Fixture",
@@ -324,7 +328,15 @@ describe("CORR-MW2-REAL-04 — Truth-C + intent/CWP stability", () => {
       constraints: ["LECTURE SEULE"],
       shortReference: "AMB",
     });
+
+    const before = await getRuntimeApplicationService().getProject(projectId);
+    expect(before.ok).toBe(true);
+    if (!before.ok) throw new Error("before project load failed");
+    const preVersion = before.livingState.version;
+    const preCycle = before.livingState.activeCycleInstanceId ?? null;
+
     const provider = new FakeConversationProvider({
+      // Keep scripted intentClass="ambiguous" — do not mask the B1 contract.
       scripted: [intentJson({ intentClass: "ambiguous", cognitiveWorkload: null })],
     });
     const result = await orchestrateAssistantSend({
@@ -334,7 +346,29 @@ describe("CORR-MW2-REAL-04 — Truth-C + intent/CWP stability", () => {
     });
     expect(result.ok).toBe(true);
     if (!result.ok) throw new Error("failed");
-    expect(result.text).toMatch(/Clarification requise/i);
+
+    // A — intent preserved as ambiguous
+    expect(result.f2?.intentClass).toBe("ambiguous");
+
+    // B — B1 advisory routing (not MW5 generic front-door clarify)
+    expect(result.f2?.turnKind).toBe("f1_informative");
+    expect(result.text).not.toMatch(/Clarification requise/i);
+    expect(result.text).not.toContain(MW5_CLARIFY_MARKER);
+    expect(result.mw5).toBeNull();
+
+    // C — zero formalization / zero authority
+    expect(result.f2?.qualification ?? null).toBeNull();
+    expect(result.f2?.proposal ?? null).toBeNull();
+    expect(result.f2?.decision ?? null).toBeNull();
+    expect(containsSynthesizedHumanAct(result.text)).toBe(false);
+    expect(result.text).not.toMatch(/\bGO\b.*Morris|HumanDecision\s*[:=]/i);
+
+    // D — Truth C / LPS stability (no Cycle/LPS mutation on advisory path)
+    const after = await getRuntimeApplicationService().getProject(projectId);
+    expect(after.ok).toBe(true);
+    if (!after.ok) throw new Error("after project load failed");
+    expect(after.livingState.version).toBe(preVersion);
+    expect(after.livingState.activeCycleInstanceId ?? null).toBe(preCycle);
   });

   it("D0-06 — cognitive ambiguity may be high while intent stays informative", () => {
```

## 14. Targeted validation
Command: `npm test -- __tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts`
Result: **12/12 PASS** (file suite)

Command: `npm run typecheck`
Result: **PASS**

## 15. Commit
- SHA: `16a3e5a64e1a8252115dd3628dd32fabff031ba4`
- Parent: `1de72d7cb14309f8c90c1408d5b50ed4d1f5242e` (**PASS**)
- Tree: `1dcfb32edba22ea6311fc67b6416aed85eef0f3d`
- Message: `test(sfia-studio): align mw2 ambiguity contract with B1`
- Path scope: **exactly** the authorized file (**PASS**)

## 16. Push / remote
- Push: standard (no force) **PASS**
- Remote tip: `16a3e5a64e1a8252115dd3628dd32fabff031ba4`

## 17. PR parity after push
- head: `16a3e5a64e1a8252115dd3628dd32fabff031ba4`
- base: `bf6c2104941fee46b66396114f8c22f882973aa2`
- state: OPEN / not draft
- files: **10** = 9 accepted B1 + 1 collateral D0 file (**PASS**)

## 18. CI / Required Gate
- Workflow run ID: `34049489732`
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/34049489732
- headSha: `16a3e5a64e1a8252115dd3628dd32fabff031ba4`
- Detect SFIA Studio changes: **PASS** (job `101530391661`)
- Build and validate SFIA Studio: **PASS** (~4m6s, job `101530413690`)
  - Typecheck: success
  - Lint: success
  - Build: success
  - Unit tests (Vitest): success
- SFIA Studio Required Gate: **PASS** (job `101530981281`)
- Workflow conclusion: **success**


## 19. Fake / Real qualification
- Fake: FakeConversationProvider / deterministic Vitest — **USED**
- REAL: INTERDIT / not run
- Entry: DETERMINISTIC PROVEN CANDIDATE / PR CI FAIL due legacy test contract
- Exit ceiling: DETERMINISTIC PROVEN / FULL CI PASS (if gate green)
- Product Proof complete: **NO**
- END-TO-END REAL PROVEN: **NO**
- Stage B: NOT AUTHORIZED
- production model routing: NOT SELECTED
- runtime v3: NON ADOPTED

## 20. ZERO REAL
Confirmed.

## 21. Reserves (unchanged)
- MW0 S03 legacy scorer lag
- `/synthese` onboarding MAJOR gap
- Session append-after-Truth-C-mutation hardening reserve
- R-GMR-AGGREGATE-COUNTER-SEMANTICS-01

## 22. Product Proof
**OPEN / BLOCKED** pending ChatGPT PR review → Morris merge → post-merge → separate REAL gate

## 23. Merge
**NOT AUTHORIZED / NOT PERFORMED**

## 24. Verdict
**READY FOR CHATGPT B1-PR-CI-01 REVIEW — TARGETED PASS — FULL CI PASS — REQUIRED GATE PASS — PR #473 NOT MERGED — REAL NOT RUN**


## 25. Next Morris gate
ChatGPT B1-PR-CI-01 / PR #473 review → Morris MERGE decision only if accepted. REAL remains separate.

## 26. Review Handoff publication
- HANDOFF_PARENT: `19c4e9e0b0ceca3147c78654acc3318e4eef3004`
- Publisher: `scripts/sfia/publish-review-handoff.sh`
- Message: `docs(review-handoff): review CORR-PROOF-02 B1-PR-CI-01`
- FINAL tip/blob filled after publisher verification in Cursor report if pack body lags one tip.
