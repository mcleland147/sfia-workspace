# SFIA Review Pack — CORR-MW5-PR-02 (requestedOperation qualifier compatibility)

## 1. Timestamp (Europe/Paris)
2026-09-04 07:24:24 CEST

## 2. Cycle
CORR-MW5-PR-02

## 3. Cycle 8 / RUN / CRITICAL
Cycle **8** — Delivery / implémentation · **RUN** — correctif · **CRITICAL**

## 4. Exact GO Morris
GO MORRIS — CORR-MW5-PR-02 — ENFORCE REQUESTED-OPERATION QUALIFIER COMPATIBILITY — ZERO REAL — TARGETED + FULL REGRESSION — UPDATE EXISTING PR #463 — PROJECT COMMIT + NORMAL BRANCH PUSH AUTHORIZED — REVIEW HANDOFF L3 — CHATGPT FINAL CRITICAL PR RE-REVIEW — NO MERGE — NO MW5 CLOSURE — NO MW6.

## 5. Git truth entry
- worktree: /Users/morris/Projects/sfia-workspace-nora-mw5-critical-challenge-clarification
- branch: delivery/sfia-studio-nora-mw5-critical-challenge-clarification
- HEAD entry: b95893981c13018ac1db3ef9404f535184e1a5d9
- origin/main: 9b45f0d7700a3127fa28c13f37ffae40432ae05c
- merge-base: 9b45f0d7700a3127fa28c13f37ffae40432ae05c

## 6. PR #463 entry
OPEN · NOT MERGED · base main · head delivery/… · head SHA b95893981c13018ac1db3ef9404f535184e1a5d9

## 7. Entry Review Handoff
tip eea34dc05c42012cfca6084b87d0193529a6cae7 · CORR-MW5-PR-01 · prior CI 33838293930 SUCCESS

## 8. Sources read
Process templates + CKC synthetic map Cycle 8 · convergence · Product Completion · Nora C3/C5 · v3 30/33 · mw5ProductAuthorityFacts + PR-01 tests · entry handoff.

## 9. Convergence pre-check
MW0–MW4 CLOSED · MW5 PR #463 NOT INTEGRATED / COMPLETE NOT DECIDED · CORR-MW5-PR-01 materially corrected but requestedOperation contradiction still ignored · CORR-MW5-PR-02 ACTIVE · Cognitive Completion NOT PROVEN · runtime v3 NON ADOPTED · MW6 NOT AUTHORIZED · H17 FAIL 141/100 retained · H18 INCONCLUSIVE · ZERO REAL.

## 10. Prior CORR-MW5-PR-01 state
Objective-anchored identity · scope/requestedOperation never alone · incompatible scopes fail-closed · UI metadata LPS.scope ignored · OR-of-fields closed.

## 11. Residual finding
decisionBasisMatchesClaimStructured ignored requestedOperation after objective match → generic prior HD could skip Critical challenge for a distinct operation.

## 12. Exact root cause
After PR-01, matcher stopped at objective + scope; contradictory substantive requestedOperation was never consulted.

## 13. Final matching contract
OBJECTIVE_MATCH ∩ SCOPE_NOT_CONTRADICTED ∩ REQUESTED_OPERATION_NOT_CONTRADICTED
- objective required both sides
- scope / requestedOperation optional qualifiers
- missing optional → no invented contradiction
- both substantive + incompatible → false
- requestedOperation never creates true alone
- Truth C unchanged (no requestedOperation field)

## 14. Exact implementation
Added optionalStructuredQualifierCompatible(left, right).
substantiveScopesCompatible now delegates to it (via structuralScopeText).
decisionBasisMatchesClaimStructured also checks optionalStructuredQualifierCompatible(substantive(claim.requestedOperation), substantive(decision.requestedOperation)).

## 15. Full useful diff
```
 .../mw5.product-authority.facts.d0.test.ts         | 106 +++++++++++++++++++++
 .../mw5.challenge.clarification.product.d0.test.ts |  89 +++++++++++++++++
 .../mw5ProductAuthorityFacts.ts                    |  37 +++++--
 3 files changed, 226 insertions(+), 6 deletions(-)

```

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.product-authority.facts.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.product-authority.facts.d0.test.ts
index 74508974..df811056 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.product-authority.facts.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.product-authority.facts.d0.test.ts
@@ -502,3 +502,109 @@ describe("CORR-MW5-PR-01 — claim identity fail-closed (adversarial)", () => {
     ).toBe(true);
   });
 });
+
+describe("CORR-MW5-PR-02 — requestedOperation qualifier compatibility", () => {
+  const linkedAccepted = {
+    decisionId: "dec:op",
+    status: "accepted" as const,
+    subject: "Prior structural decision",
+    linkedToCurrentLps: true,
+    hasDecisionBasis: true,
+  };
+
+  it("HD-NEG-05 same objective + scope unavailable + different requestedOperation → false", () => {
+    expect(
+      decisionBasisMatchesClaimStructured(
+        {
+          ...linkedAccepted,
+          executionObjective: "Faire évoluer l'architecture produit",
+          executionScope: undefined,
+          requestedOperation: "migrate project database",
+        },
+        {
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Identity and access boundary",
+          recommendedProfile: "Critical",
+          requestedOperation: "replace authentication mechanism",
+        },
+      ),
+    ).toBe(false);
+  });
+
+  it("HD-NEG-06 same objective + compatible scope + different requestedOperation → false", () => {
+    expect(
+      decisionBasisMatchesClaimStructured(
+        {
+          ...linkedAccepted,
+          executionObjective: "Faire évoluer l'architecture produit",
+          executionScope: "Changement d'architecture structurant",
+          requestedOperation: "migrate project database",
+        },
+        {
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Changement d'architecture structurant",
+          recommendedProfile: "Critical",
+          requestedOperation: "replace authentication mechanism",
+        },
+      ),
+    ).toBe(false);
+  });
+
+  it("HD-POS-03 same objective + compatible scope + requestedOperation absent one side → true", () => {
+    expect(
+      decisionBasisMatchesClaimStructured(
+        {
+          ...linkedAccepted,
+          executionObjective: "Faire évoluer l'architecture produit",
+          executionScope: "Changement d'architecture structurant",
+          requestedOperation: undefined,
+        },
+        {
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Changement d'architecture structurant",
+          recommendedProfile: "Critical",
+          requestedOperation: "architecture change",
+        },
+      ),
+    ).toBe(true);
+  });
+
+  it("HD-POS-04 same objective + compatible scope + same requestedOperation → true", () => {
+    expect(
+      decisionBasisMatchesClaimStructured(
+        {
+          ...linkedAccepted,
+          executionObjective: "Faire évoluer l'architecture produit",
+          executionScope: "Changement d'architecture structurant",
+          requestedOperation: "architecture change",
+        },
+        {
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Changement d'architecture structurant",
+          recommendedProfile: "Critical",
+          requestedOperation: "architecture change",
+        },
+      ),
+    ).toBe(true);
+  });
+
+  it("HD-POS-05 same objective + requestedOperation strong containment → true", () => {
+    expect(
+      decisionBasisMatchesClaimStructured(
+        {
+          ...linkedAccepted,
+          executionObjective: "Faire évoluer l'architecture produit",
+          executionScope: "Changement d'architecture structurant",
+          requestedOperation:
+            "architecture change for product modular target",
+        },
+        {
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Changement d'architecture structurant",
+          recommendedProfile: "Critical",
+          requestedOperation: "architecture change for product",
+        },
+      ),
+    ).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
index 9f366cd7..69695a1d 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
@@ -679,4 +679,93 @@ describe("MW5 F2 product path D0", () => {
     expect(result.mw5?.disposition).toBe("CONTINUE");
     expect(result.f2?.proposal).toBeTruthy();
   });
+
+  it("CORR-MW5-PR-02 PATH-NEG-03 — same objective + different requestedOperation must CHALLENGE", async () => {
+    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
+      await import(
+        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
+      );
+    const runtime = getRuntimeApplicationService();
+    expect(runtime.oa).toBeTruthy();
+    if (!runtime.oa) return;
+
+    const created = await runtime.createProject({
+      name: "Projet MW5 HD op-mismatch",
+      objective: "Objectif projet générique MW5 op-mismatch",
+      context: "Contexte sans correspondance structurante claim.",
+      criticality: "STANDARD",
+      constraints: [],
+      shortReference: "MW5P",
+      idempotencyKey: `idem:mw5-hd-opmism-${Date.now()}-${Math.random()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+
+    const lps = await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId: created.projectId,
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+
+    const scope = `decision:mw5-opmism-${created.projectId}`;
+    const reg = registerM3LocalMorrisAuthority({
+      authorityResolver: runtime.oa.authorityResolver,
+      scope,
+      issuedAt: "2026-09-03T18:00:00.000Z",
+      forceEnable: true,
+      evidenceId: `evd:mw5-hd-opmism-${created.projectId}`,
+    });
+    expect(reg.ok).toBe(true);
+    if (!reg.ok) return;
+
+    // Same structural objective as FakeProvider __F2_STRUCTURING__ claim,
+    // but a distinct substantive requestedOperation ("migrate project database"
+    // vs claim "architecture change"). Scope left unavailable so the blocker
+    // is the operation qualifier, not scope.
+    const recorded = await runtime.oa.decisionServices.recordHumanDecision.execute({
+      decisionId: `dec:mw5-opmism-${created.projectId}`,
+      projectId: created.projectId,
+      subject: "Prior architecture HD with DB migration operation",
+      options: [{ optionId: "opt:go", label: "GO" }],
+      selectedOptionId: "opt:go",
+      actor: LOCAL_MORRIS_M3_ACTOR,
+      authority: "morris",
+      reversible: true,
+      scope,
+      authorityEvidenceId: reg.evidenceId,
+      linkToLivingProjectState: true,
+      expectedLpsVersion: lps.livingProjectState.version,
+      decisionBasis: {
+        sourceType: "proposal",
+        sourceRef: "prop:mw5-opmism-test",
+        sourceDigest: "d".repeat(64),
+        projectId: created.projectId,
+        proposalContext: {
+          lpsId: lps.livingProjectState.lpsVersionId,
+          lpsVersion: lps.livingProjectState.version,
+          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
+        },
+        executionBasis: {
+          objective: "Faire évoluer l'architecture produit",
+          requestedOperation: "migrate project database",
+        },
+      },
+    });
+    expect(recorded.ok).toBe(true);
+    if (!recorded.ok) return;
+
+    const result = await orchestrateAssistantSend({
+      projectId: created.projectId,
+      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.mw5?.disposition).toBe("CHALLENGE");
+    expect(result.mw5?.recommendationAllowed).toBe(false);
+    expect(result.f2?.proposal).toBeNull();
+    expect(result.f2?.labels.recommendation).toBeNull();
+    expect(result.mw5?.synthesizedHumanDecision).toBeFalsy();
+    expect(result.mw5?.synthesizedGo).toBeFalsy();
+    expect(containsSynthesizedHumanAct(result.text)).toBe(false);
+  });
 });
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts.ts
index 255ec08b..bc0abf59 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts.ts
@@ -109,6 +109,21 @@ function structuredFieldPairMatch(
   );
 }

+/**
+ * Optional structured qualifier compatibility (CORR-MW5-PR-02).
+ * Inputs are already substantive-normalized or null.
+ * Missing either side → no contradiction invented.
+ * Both present → must structuredFieldPairMatch.
+ * Never produces positive identity by itself.
+ */
+function optionalStructuredQualifierCompatible(
+  left: string | null,
+  right: string | null,
+): boolean {
+  if (!left || !right) return true;
+  return structuredFieldPairMatch(left, right);
+}
+
 /**
  * When both sides expose substantive structural scopes, they must be compatible.
  * A missing/optional qualifier (incl. UI metadata-as-scope) does not invent
@@ -118,10 +133,10 @@ function substantiveScopesCompatible(
   left: string | null | undefined,
   right: string | null | undefined,
 ): boolean {
-  const a = structuralScopeText(left);
-  const b = structuralScopeText(right);
-  if (!a || !b) return true;
-  return structuredFieldPairMatch(a, b);
+  return optionalStructuredQualifierCompatible(
+    structuralScopeText(left),
+    structuralScopeText(right),
+  );
 }

 /**
@@ -146,13 +161,15 @@ export function truthCMatchesClaimStructured(
 }

 /**
- * Fail-closed DecisionBasis relevance vs claim (CORR-MW5-PR-01).
+ * Fail-closed DecisionBasis relevance vs claim (CORR-MW5-PR-01 / PR-02).
  *
  * Contract:
  * - objective is the primary structural anchor (required on both sides);
  * - requestedOperation is a qualifier — never sufficient alone;
  * - scope is a qualifier — never sufficient alone;
- * - explicit incompatible substantive scopes block even when objective matches;
+ * - explicit incompatible substantive scopes OR requestedOperations block
+ *   even when objective matches;
+ * - missing optional qualifier does not invent contradiction;
  * - insufficient structured evidence → false (prefer reopen challenge).
  */
 export function decisionBasisMatchesClaimStructured(
@@ -174,6 +191,14 @@ export function decisionBasisMatchesClaimStructured(
   ) {
     return false;
   }
+  if (
+    !optionalStructuredQualifierCompatible(
+      substantive(claim.requestedOperation),
+      substantive(decision.requestedOperation),
+    )
+  ) {
+    return false;
+  }
   return true;
 }


```

## 16–21. Adversarial matrix
| ID | Result |
|----|--------|
| HD-NEG-05 same obj + scope unavailable + different op | PASS |
| HD-NEG-06 same obj + compatible scope + different op | PASS |
| HD-POS-03 op absent one side | PASS |
| HD-POS-04 same op | PASS |
| HD-POS-05 op strong containment (≥24) | PASS |
| PATH-NEG-03 product OA HD → F2 CHALLENGE | PASS |
| PATH-POS-01 preserved | PASS |
| All CORR-MW5-PR-01 cases | PASS (non-regression) |

## 22. CORR-MW5-PR-01 non-regression
All prior HD/TC/PATH adversarial cases remain green in facts + disposition + product suites (71 targeted tests PASS).

## 23–28. Validation
targeted PASS · tsc PASS · lint PASS · npm test PASS (2638 passed / 134 skipped) · build PASS · diff-check PASS

## 29–30. ZERO REAL / Fake-Real
MW5_RUN_REAL / MW0_MW5_RUN_REAL unset · REAL suites SKIP · proof ceiling = DETERMINISTIC PROVEN

## 31–32. H17 / H18
H17 FAIL 141/100 retained · H18 INCONCLUSIVE · no rewrite

## 33–34. Reserves / anti-claims
Carried non-blocking reserves unchanged · MW5 NOT COMPLETE · Cognitive Completion NOT PROVEN · runtime v3 NON ADOPTED · MW6 NOT AUTHORIZED · H17 NOT PASS · merge NOT performed

## 35. Project diff
3 files · +226 / −6 (pre-commit)

## 36. Readiness verdict
**CORR-MW5-PR-02 — DETERMINISTIC PASS CANDIDATE**
REQUESTED OPERATION QUALIFIER COMPATIBILITY — FAIL-CLOSED AT TESTED SCOPE
CORR-MW5-PR-01 + CORR-MW5-PR-02 COMBINED AUTHORITY MATCH CONTRACT — PASS CANDIDATE
ZERO REAL · READY TO UPDATE PR #463 · MERGE NOT AUTHORIZED.

## 37–45. Project Git / PR / CI / Handoff (final — 2026-09-04 07:29:55 CEST)

### 37. Project commit
- SHA: `642c502d649a3dad46b66ade95bdea1b5ed8b787`
- tree: `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3`
- parent: `b95893981c13018ac1db3ef9404f535184e1a5d9`
- message: fix(sfia-studio): enforce MW5 operation qualifier compatibility
- files: 3 (+226 / −6)

### 38. Push parity
remote tip == local HEAD == `642c502d649a3dad46b66ade95bdea1b5ed8b787` · force push NO

### 39. PR #463 update
CORR-MW5-PR-02 section appended · PR-01 section preserved · OPEN · NOT MERGED
https://github.com/mcleland147/sfia-workspace/pull/463

### 40. CI final head
- run: **33840376722** SUCCESS
- headSha: `642c502d649a3dad46b66ade95bdea1b5ed8b787`
- Detect / Build+validate / Required Gate: PASS
- url: https://github.com/mcleland147/sfia-workspace/actions/runs/33840376722

### 41. Final Git truth
origin/main = merge-base = `9b45f0d7700a3127fa28c13f37ffae40432ae05c`
local = remote delivery = PR head = `642c502d649a3dad46b66ade95bdea1b5ed8b787`

### 42. Review Handoff publication
*(this publication)*

### 43. Merge
NOT PERFORMED

### 44. Final verdict
**CORR-MW5-PR-02 — PASS CANDIDATE**
PRODUCT AUTHORITY CLAIM IDENTITY — OBJECTIVE-ANCHORED + SCOPE/REQUESTED-OPERATION FAIL-CLOSED QUALIFIERS — DETERMINISTICALLY PROVEN AT TESTED SCOPE
CORR-MW5-PR-01/02 — CLOSED CANDIDATE PENDING CHATGPT FINAL CRITICAL PR RE-REVIEW
PR #463 — CI QUALIFIED AT FINAL HEAD
READY FOR CHATGPT FINAL CRITICAL PR RE-REVIEW
PENDING DISTINCT MORRIS MERGE GATE

### 45. Next gate
CHATGPT FINAL CRITICAL PR RE-REVIEW → if PASS → DISTINCT GO MORRIS MERGE
