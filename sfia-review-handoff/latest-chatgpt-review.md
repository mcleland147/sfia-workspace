# SFIA Review Pack — CORR-MW5-PR-01 (product authority claim identity fail-closed)

## 1. Timestamp (Europe/Paris)
2026-09-04 06:50:16 CEST

## 2. Macro-lot
CORR-MW5-PR-01

## 3. Cycle / typologie / profil
Cycle **8** — Delivery / implémentation · **RUN** — correctif · **CRITICAL**

## 4. GO Morris consommé
GO MORRIS — CORR-MW5-PR-01 — TIGHTEN PRODUCT AUTHORITY CLAIM IDENTITY MATCHING + ADVERSARIAL REGRESSION TESTS — UPDATE PR #463 — ZERO REAL INITIALLY — FULL CI — CHATGPT CRITICAL RE-REVIEW — NO MERGE.

## 5. Git truth d'entrée
- worktree: /Users/morris/Projects/sfia-workspace-nora-mw5-critical-challenge-clarification
- branch: delivery/sfia-studio-nora-mw5-critical-challenge-clarification
- HEAD entry: a2c0bc2eef8959667d2c00b2bc917639eda70e5d
- origin/main: 9b45f0d7700a3127fa28c13f37ffae40432ae05c
- merge-base: 9b45f0d7700a3127fa28c13f37ffae40432ae05c
- PR #463 OPEN / NOT MERGED
- handoff entry tip: 0d42aaac1cfa87b4080a79ec516924ce29108a08
- handoff entry blob: d9fe2e4d9027766d80a1f16f1a70bf82e6302bd6
- versionable dirty at entry: none (only .tmp / test-results EXCLUDE)

## 6. Sources lues
Process templates + convergence roadmap/doctrine + Product Completion + Nora C3/C5 + v3 30/33 + entry handoff NORA-MW5-INTEGRATION-LIFECYCLE-01 H3.

## 7. Convergence Pre-check
MW4 CLOSED · MW5 PR #463 candidate · MW5 COMPLETE NOT DECIDED · Cognitive Completion NOT PROVEN · runtime v3 NON ADOPTED · MW6 NOT AUTHORIZED · Option C KEEP · no new provider/classifier/persistence.

## 8. Finding initial
CORR-MW5-PR-01 — PRODUCT AUTHORITY CLAIM MATCHING OVER-BROAD
`decisionBasisMatchesClaimStructured` returned true on ANY single exact field among objective/scope/requestedOperation.
`truthCMatchesClaimStructured` returned true on objective OR scope alone.
Effect: false skipReopen → CONTINUE → Critical Recommendation unlocked without challenge.

## 9. Root cause
OR-of-fields identity matching treated qualifiers (requestedOperation, broad/generic scope) as sufficient authority anchors.

## 10. Matching contract retained (fail-closed)
- objective = primary structural anchor (required both sides; exact or strong containment ≥24)
- requestedOperation = qualifier only (never alone)
- scope = qualifier only (never alone)
- both substantive structural scopes present + incompatible → false
- Studio UI metadata JSON in LPS.scope (`sfia-visible-slice-project-ui`) treated as qualifier-unavailable (not a structural scope)
- insufficient evidence → false (prefer reopen challenge)

## 11. Fichiers modifiés
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts.ts`- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.product-authority.facts.d0.test.ts`- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts`- `projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts`
## 12. Diff exploitable
```
 .../mw5.product-authority.facts.d0.test.ts         | 279 ++++++++++++++++++++-
 .../mw5.s01-s04.disposition.d0.test.ts             | 127 ++++++++++
 .../mw5.challenge.clarification.product.d0.test.ts | 195 ++++++++++++++
 .../mw5ProductAuthorityFacts.ts                    | 116 ++++++---
 4 files changed, 676 insertions(+), 41 deletions(-)

```

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.product-authority.facts.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.product-authority.facts.d0.test.ts
index 4bba10c7..74508974 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.product-authority.facts.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.product-authority.facts.d0.test.ts
@@ -1,6 +1,6 @@
 /** @vitest-environment node */
 /**
- * CORR-MW5-01B — authoritative product-fact projection (fail-closed).
+ * CORR-MW5-01B / CORR-MW5-PR-01 — authoritative product-fact projection (fail-closed).
  */
 import { describe, expect, it } from "vitest";
 import {
@@ -22,7 +22,7 @@ describe("resolveMw5ProductAuthorityFacts (CORR-MW5-01B)", () => {
       truthC: {
         objective: "Faire évoluer l'architecture produit",
         context: "Contexte générique sans tag orphelin.",
-        scope: "Périmètre projet",
+        scope: "Changement d'architecture structurant",
         decisionIds: [],
       },
       consumedDecisions: [],
@@ -30,7 +30,7 @@ describe("resolveMw5ProductAuthorityFacts (CORR-MW5-01B)", () => {
     });
     expect(facts.truthCEstablishedForClaim).toBe(true);
     expect(facts.reasonCodes).toContain(
-      "truth_c_structured_objective_or_scope_match",
+      "truth_c_structured_objective_anchor_match",
     );
   });

@@ -229,3 +229,276 @@ describe("resolveMw5ProductAuthorityFacts (CORR-MW5-01B)", () => {
     expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(false);
   });
 });
+
+describe("CORR-MW5-PR-01 — claim identity fail-closed (adversarial)", () => {
+  const linkedAccepted = {
+    decisionId: "dec:prior",
+    status: "accepted" as const,
+    subject: "Prior structural decision",
+    linkedToCurrentLps: true,
+    hasDecisionBasis: true,
+  };
+
+  it("HD-NEG-01 same requestedOperation + different objective/scope → false", () => {
+    const claim = {
+      objective: "Remplacer le mécanisme d'authentification",
+      scope: "Identity and access",
+      recommendedProfile: "Critical",
+      requestedOperation: "architecture change",
+    };
+    const decision = {
+      ...linkedAccepted,
+      executionObjective: "Migrer la persistence du Project",
+      executionScope: "Project persistence",
+      requestedOperation: "architecture change",
+    };
+    expect(decisionBasisMatchesClaimStructured(decision, claim)).toBe(false);
+    const facts = resolveMw5ProductAuthorityFacts({
+      truthC: {
+        objective: "obj unrelated short",
+        context: "ctx",
+        scope: "scp unrelated",
+        decisionIds: ["dec:prior"],
+      },
+      consumedDecisions: [decision],
+      claim,
+    });
+    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(false);
+  });
+
+  it("HD-NEG-02 same broad scope + different objective → false", () => {
+    const claim = {
+      objective: "Remplacer le mécanisme d'authentification",
+      scope: "Changement d'architecture structurant",
+      recommendedProfile: "Critical",
+      requestedOperation: "architecture change",
+    };
+    expect(
+      decisionBasisMatchesClaimStructured(
+        {
+          ...linkedAccepted,
+          executionObjective: "Migrer la persistence du Project",
+          executionScope: "Changement d'architecture structurant",
+          requestedOperation: "other operation",
+        },
+        claim,
+      ),
+    ).toBe(false);
+  });
+
+  it("HD-NEG-03 same objective + incompatible substantive scope → false", () => {
+    expect(
+      decisionBasisMatchesClaimStructured(
+        {
+          ...linkedAccepted,
+          executionObjective: "Faire évoluer l'architecture produit",
+          executionScope: "Project persistence layer only",
+          requestedOperation: "architecture change",
+        },
+        {
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Identity and access boundary",
+          recommendedProfile: "Critical",
+          requestedOperation: "architecture change",
+        },
+      ),
+    ).toBe(false);
+  });
+
+  it("HD-NEG-04 requestedOperation only / insufficient objective → false", () => {
+    expect(
+      decisionBasisMatchesClaimStructured(
+        {
+          ...linkedAccepted,
+          executionObjective: undefined,
+          executionScope: undefined,
+          requestedOperation: "architecture change",
+        },
+        {
+          objective: null,
+          scope: null,
+          recommendedProfile: "Critical",
+          requestedOperation: "architecture change",
+        },
+      ),
+    ).toBe(false);
+    expect(
+      decisionBasisMatchesClaimStructured(
+        {
+          ...linkedAccepted,
+          executionObjective: "Migrer la persistence du Project",
+          requestedOperation: "architecture change",
+        },
+        {
+          objective: null,
+          scope: "Identity and access",
+          recommendedProfile: "Critical",
+          requestedOperation: "architecture change",
+        },
+      ),
+    ).toBe(false);
+  });
+
+  it("HD-POS-01 matching objective + compatible scope + LPS link → consumed", () => {
+    const claim = {
+      objective: "Faire évoluer l'architecture produit",
+      scope: "Changement d'architecture structurant",
+      recommendedProfile: "Critical",
+      requestedOperation: "architecture change",
+    };
+    const facts = resolveMw5ProductAuthorityFacts({
+      truthC: {
+        objective: "obj unrelated short",
+        context: "ctx",
+        scope: "scp unrelated",
+        decisionIds: ["dec:prior"],
+      },
+      consumedDecisions: [
+        {
+          ...linkedAccepted,
+          executionObjective: "Faire évoluer l'architecture produit",
+          executionScope: "Changement d'architecture structurant",
+          requestedOperation: "architecture change",
+        },
+      ],
+      claim,
+    });
+    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(true);
+  });
+
+  it("HD-POS-02 matching objective + optional scope unavailable → consumed", () => {
+    expect(
+      decisionBasisMatchesClaimStructured(
+        {
+          ...linkedAccepted,
+          executionObjective: "Faire évoluer l'architecture produit",
+          executionScope: undefined,
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
+  it("TC-NEG-01 same broad scope + different objective → false", () => {
+    expect(
+      truthCMatchesClaimStructured(
+        {
+          objective: "Migrer la persistence du Project",
+          context: "ctx",
+          scope: "Changement d'architecture structurant",
+          decisionIds: [],
+        },
+        {
+          objective: "Remplacer le mécanisme d'authentification",
+          scope: "Changement d'architecture structurant",
+          recommendedProfile: "Critical",
+          requestedOperation: "architecture change",
+        },
+      ),
+    ).toBe(false);
+  });
+
+  it("TC-NEG-02 different objective + scope containment only → false", () => {
+    expect(
+      truthCMatchesClaimStructured(
+        {
+          objective: "Livrer la documentation marketing",
+          context: "ctx",
+          scope:
+            "Changement d'architecture structurant pour le périmètre projet entier",
+          decisionIds: [],
+        },
+        {
+          objective: "Remplacer le mécanisme d'authentification",
+          scope: "Changement d'architecture structurant",
+          recommendedProfile: "Critical",
+          requestedOperation: "architecture change",
+        },
+      ),
+    ).toBe(false);
+  });
+
+  it("TC-NEG-03 objective match + incompatible substantive scope → false", () => {
+    expect(
+      truthCMatchesClaimStructured(
+        {
+          objective: "Faire évoluer l'architecture produit",
+          context: "ctx",
+          scope: "Project persistence layer only",
+          decisionIds: [],
+        },
+        {
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Identity and access boundary",
+          recommendedProfile: "Critical",
+          requestedOperation: "architecture change",
+        },
+      ),
+    ).toBe(false);
+  });
+
+  it("TC-POS-01 same objective + compatible scope → true", () => {
+    expect(
+      truthCMatchesClaimStructured(
+        {
+          objective: "Faire évoluer l'architecture produit",
+          context: "ctx",
+          scope: "Changement d'architecture structurant",
+          decisionIds: [],
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
+  it("TC-POS-02 strong objective containment remains safe", () => {
+    expect(
+      truthCMatchesClaimStructured(
+        {
+          objective:
+            "Faire évoluer l'architecture produit vers une cible modulaire",
+          context: "ctx",
+          scope: "Changement d'architecture structurant",
+          decisionIds: [],
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
+  it("TC-POS — Studio UI metadata LPS.scope does not block objective anchor", () => {
+    expect(
+      truthCMatchesClaimStructured(
+        {
+          objective: "Faire évoluer l'architecture produit",
+          context: "ctx",
+          scope:
+            '{"schemaVersion":"sfia-visible-slice-project-ui.1","shortReference":"T","perceivedCriticality":"STANDARD","constraints":[]}',
+          decisionIds: [],
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
+});
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts
index 0a053aa5..d8cfffb9 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts
@@ -12,6 +12,7 @@ import {
   deriveMw5FactsFromF2Turn,
   formatMw5AssistantText,
   looksLikeQuestionnaire,
+  resolveMw5ProductAuthorityFacts,
   type Mw5PolicyInput,
 } from "@/lib/nora-cognitive-runtime";

@@ -329,3 +330,129 @@ describe("MW5 derive facts — fail-closed challenge satisfaction (CORR-MW5-02/0
     expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(false);
   });
 });
+
+describe("CORR-MW5-PR-01 — disposition path gate (facts → CHALLENGE)", () => {
+  it("PATH-NEG-01 prior HD same requestedOperation only must not skipReopen", () => {
+    const facts = resolveMw5ProductAuthorityFacts({
+      truthC: {
+        objective: "obj unrelated short",
+        context: "ctx",
+        scope: "scp unrelated",
+        decisionIds: ["dec:prior"],
+      },
+      consumedDecisions: [
+        {
+          decisionId: "dec:prior",
+          status: "accepted",
+          subject: "Prior persistence decision",
+          linkedToCurrentLps: true,
+          hasDecisionBasis: true,
+          executionObjective: "Migrer la persistence du Project",
+          executionScope: "Project persistence",
+          requestedOperation: "architecture change",
+        },
+      ],
+      claim: {
+        objective: "Remplacer le mécanisme d'authentification",
+        scope: "Identity and access",
+        recommendedProfile: "Critical",
+        requestedOperation: "architecture change",
+      },
+    });
+    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(false);
+    expect(facts.truthCEstablishedForClaim).toBe(false);
+
+    const d = decideMw5Disposition(
+      base({
+        uncertaintyClass: "structural_premise",
+        recommendedProfile: "Critical",
+        recommendationWouldEmit: true,
+        truthCEstablishedForClaim: facts.truthCEstablishedForClaim,
+        consumedHumanDecisionWithoutNewContradiction:
+          facts.consumedHumanDecisionWithoutNewContradiction,
+        proposedStructuralChallenges: [
+          "Quelle prémisse structurelle change ?",
+          "Quel impact sur l'autorité existante ?",
+        ],
+      }),
+    );
+    expect(d.disposition).toBe("CHALLENGE");
+    expect(d.recommendationAllowed).toBe(false);
+    expect(d.reasonCodes).not.toContain("skip_consumed_human_decision");
+    expect(d.reasonCodes).not.toContain("skip_established_truth_c");
+  });
+
+  it("PATH-NEG-02 Truth C broad scope only must not skip challenge", () => {
+    const facts = resolveMw5ProductAuthorityFacts({
+      truthC: {
+        objective: "Migrer la persistence du Project",
+        context: "ctx",
+        scope: "Changement d'architecture structurant",
+        decisionIds: [],
+      },
+      consumedDecisions: [],
+      claim: {
+        objective: "Remplacer le mécanisme d'authentification",
+        scope: "Changement d'architecture structurant",
+        recommendedProfile: "Critical",
+        requestedOperation: "architecture change",
+      },
+    });
+    expect(facts.truthCEstablishedForClaim).toBe(false);
+
+    const d = decideMw5Disposition(
+      base({
+        uncertaintyClass: "structural_premise",
+        recommendedProfile: "Critical",
+        recommendationWouldEmit: true,
+        truthCEstablishedForClaim: facts.truthCEstablishedForClaim,
+        proposedStructuralChallenges: ["Prémisse A ?", "Prémisse B ?"],
+      }),
+    );
+    expect(d.disposition).toBe("CHALLENGE");
+    expect(d.recommendationAllowed).toBe(false);
+  });
+
+  it("PATH-POS-01 genuine matching consumed HD still skips re-challenge", () => {
+    const facts = resolveMw5ProductAuthorityFacts({
+      truthC: {
+        objective: "obj unrelated short",
+        context: "ctx",
+        scope: "scp unrelated",
+        decisionIds: ["dec:match"],
+      },
+      consumedDecisions: [
+        {
+          decisionId: "dec:match",
+          status: "accepted",
+          subject: "Architecture cible validée",
+          linkedToCurrentLps: true,
+          hasDecisionBasis: true,
+          executionObjective: "Faire évoluer l'architecture produit",
+          executionScope: "Changement d'architecture structurant",
+          requestedOperation: "architecture change",
+        },
+      ],
+      claim: {
+        objective: "Faire évoluer l'architecture produit",
+        scope: "Changement d'architecture structurant",
+        recommendedProfile: "Critical",
+        requestedOperation: "architecture change",
+      },
+    });
+    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(true);
+
+    const d = decideMw5Disposition(
+      base({
+        uncertaintyClass: "structural_premise",
+        recommendedProfile: "Critical",
+        recommendationWouldEmit: true,
+        consumedHumanDecisionWithoutNewContradiction:
+          facts.consumedHumanDecisionWithoutNewContradiction,
+      }),
+    );
+    expect(d.disposition).toBe("CONTINUE");
+    expect(d.recommendationAllowed).toBe(true);
+    expect(d.reasonCodes).toContain("skip_consumed_human_decision");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
index 705d067f..9f366cd7 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
@@ -484,4 +484,199 @@ describe("MW5 F2 product path D0", () => {
     expect(result.f2?.proposal).toBeNull();
     expect(containsSynthesizedHumanAct(result.text)).toBe(false);
   });
+
+  it("CORR-MW5-PR-01 PATH-NEG-01 — HD same requestedOperation only does NOT skip Critical challenge", async () => {
+    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
+      await import(
+        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
+      );
+    const runtime = getRuntimeApplicationService();
+    expect(runtime.oa).toBeTruthy();
+    if (!runtime.oa) return;
+
+    const created = await runtime.createProject({
+      name: "Projet MW5 HD op-only",
+      objective: "Objectif projet générique MW5 op-only",
+      context: "Contexte sans correspondance structurante claim.",
+      criticality: "STANDARD",
+      constraints: [],
+      shortReference: "MW5O",
+      idempotencyKey: `idem:mw5-hd-op-${Date.now()}-${Math.random()}`,
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
+    const scope = `decision:mw5-op-${created.projectId}`;
+    const reg = registerM3LocalMorrisAuthority({
+      authorityResolver: runtime.oa.authorityResolver,
+      scope,
+      issuedAt: "2026-09-03T18:00:00.000Z",
+      forceEnable: true,
+      evidenceId: `evd:mw5-hd-op-${created.projectId}`,
+    });
+    expect(reg.ok).toBe(true);
+    if (!reg.ok) return;
+
+    const recorded = await runtime.oa.decisionServices.recordHumanDecision.execute({
+      decisionId: `dec:mw5-op-${created.projectId}`,
+      projectId: created.projectId,
+      subject: "Persistence migrée antérieurement",
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
+        sourceRef: "prop:mw5-op-test",
+        sourceDigest: "b".repeat(64),
+        projectId: created.projectId,
+        proposalContext: {
+          lpsId: lps.livingProjectState.lpsVersionId,
+          lpsVersion: lps.livingProjectState.version,
+          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
+        },
+        executionBasis: {
+          objective: "Migrer la persistence du Project",
+          scope: "Project persistence",
+          requestedOperation: "architecture change",
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
+  });
+
+  it("CORR-MW5-PR-01 PATH-NEG-02 — Truth C different objective does NOT skip (broad-scope-only covered in facts/disposition)", async () => {
+    const runtime = getRuntimeApplicationService();
+    expect(runtime.oa).toBeTruthy();
+    if (!runtime.oa) return;
+
+    // Product LPS.scope is the Studio UI metadata envelope, not a semantic
+    // structural scope. Broad-scope-only false-match is proven in
+    // mw5.product-authority.facts + disposition PATH-NEG-02. Here we prove the
+    // product path still challenges when Truth C objective differs from claim.
+    const created = await runtime.createProject({
+      name: "Projet MW5 TruthC obj-mismatch",
+      objective: "Migrer la persistence du Project maintenant",
+      context: "Contexte Truth C sans objectif claim.",
+      criticality: "STANDARD",
+      constraints: [],
+      shortReference: "MW5S",
+      idempotencyKey: `idem:mw5-tc-obj-${Date.now()}-${Math.random()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
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
+  });
+
+  it("CORR-MW5-PR-01 PATH-POS-01 — genuine matching consumed HD still skips", async () => {
+    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
+      await import(
+        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
+      );
+    const runtime = getRuntimeApplicationService();
+    if (!runtime.oa) return;
+
+    const created = await runtime.createProject({
+      name: "Projet MW5 HD match",
+      objective: "Objectif projet générique MW5 match",
+      context: "Contexte sans correspondance structurante claim.",
+      criticality: "STANDARD",
+      constraints: [],
+      shortReference: "MW5M",
+      idempotencyKey: `idem:mw5-hd-match-${Date.now()}-${Math.random()}`,
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
+    const scope = `decision:mw5-match-${created.projectId}`;
+    const reg = registerM3LocalMorrisAuthority({
+      authorityResolver: runtime.oa.authorityResolver,
+      scope,
+      issuedAt: "2026-09-03T18:00:00.000Z",
+      forceEnable: true,
+      evidenceId: `evd:mw5-hd-match-${created.projectId}`,
+    });
+    expect(reg.ok).toBe(true);
+    if (!reg.ok) return;
+
+    const recorded = await runtime.oa.decisionServices.recordHumanDecision.execute({
+      decisionId: `dec:mw5-match-${created.projectId}`,
+      projectId: created.projectId,
+      subject: "Architecture cible validée",
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
+        sourceRef: "prop:mw5-match-test",
+        sourceDigest: "c".repeat(64),
+        projectId: created.projectId,
+        proposalContext: {
+          lpsId: lps.livingProjectState.lpsVersionId,
+          lpsVersion: lps.livingProjectState.version,
+          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
+        },
+        executionBasis: {
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Changement d'architecture structurant",
+          requestedOperation: "architecture change",
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
+    expect(result.mw5?.disposition).toBe("CONTINUE");
+    expect(result.f2?.proposal).toBeTruthy();
+  });
 });
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts.ts
index 00ef5d57..255ec08b 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts.ts
@@ -76,40 +76,84 @@ function substantive(text: string | null | undefined): string | null {
 }

 /**
- * Fail-closed structured match on LPS objective/scope vs claim.
+ * LPS.scope may carry Studio UI metadata JSON (visible-slice envelope), which is
+ * not a structural Truth C / DecisionBasis scope qualifier for MW5 claim identity.
+ * Treat that payload as qualifier-unavailable rather than an incompatible scope.
+ */
+function structuralScopeText(text: string | null | undefined): string | null {
+  const raw = (text ?? "").trim();
+  if (!raw) return null;
+  if (
+    raw.startsWith("{") &&
+    /sfia-visible-slice-project-ui/i.test(raw)
+  ) {
+    return null;
+  }
+  return substantive(raw);
+}
+
+/**
  * Exact normalized equality, or strong containment (shorter ≥ 24 chars).
  * Never uses orphan ESTABLISHED_CLAIM tags or single-token fuzzy overlap.
  */
+function structuredFieldPairMatch(
+  a: string | null,
+  b: string | null,
+): boolean {
+  if (!a || !b) return false;
+  if (a === b) return true;
+  const shorter = a.length <= b.length ? a : b;
+  const longer = a.length <= b.length ? b : a;
+  return (
+    shorter.length >= MIN_STRONG_CONTAINMENT_LEN && longer.includes(shorter)
+  );
+}
+
+/**
+ * When both sides expose substantive structural scopes, they must be compatible.
+ * A missing/optional qualifier (incl. UI metadata-as-scope) does not invent
+ * incompatibility.
+ */
+function substantiveScopesCompatible(
+  left: string | null | undefined,
+  right: string | null | undefined,
+): boolean {
+  const a = structuralScopeText(left);
+  const b = structuralScopeText(right);
+  if (!a || !b) return true;
+  return structuredFieldPairMatch(a, b);
+}
+
+/**
+ * Fail-closed Truth C vs claim identity (CORR-MW5-PR-01).
+ *
+ * Contract:
+ * - objective is the primary structural anchor (required on both sides);
+ * - scope is a qualifier — never sufficient alone;
+ * - explicit incompatible substantive scopes block even when objective matches;
+ * - insufficient structured evidence → false (prefer reopen challenge).
+ */
 export function truthCMatchesClaimStructured(
   truthC: Mw5TruthCProjection,
   claim: Mw5ClaimProjection,
 ): boolean {
   const claimObjective = substantive(claim.objective);
-  const claimScope = substantive(claim.scope);
-  if (!claimObjective && !claimScope) return false;
-
   const lpsObjective = substantive(truthC.objective);
-  const lpsScope = substantive(truthC.scope);
-
-  const pairMatch = (a: string | null, b: string | null): boolean => {
-    if (!a || !b) return false;
-    if (a === b) return true;
-    const shorter = a.length <= b.length ? a : b;
-    const longer = a.length <= b.length ? b : a;
-    return (
-      shorter.length >= MIN_STRONG_CONTAINMENT_LEN && longer.includes(shorter)
-    );
-  };
-
-  return (
-    pairMatch(claimObjective, lpsObjective) || pairMatch(claimScope, lpsScope)
-  );
+  if (!claimObjective || !lpsObjective) return false;
+  if (!structuredFieldPairMatch(claimObjective, lpsObjective)) return false;
+  if (!substantiveScopesCompatible(claim.scope, truthC.scope)) return false;
+  return true;
 }

 /**
- * Fail-closed DecisionBasis relevance vs claim.
- * Requires non-empty structured fields on both sides and exact normalized equality
- * on at least one of objective / scope / requestedOperation.
+ * Fail-closed DecisionBasis relevance vs claim (CORR-MW5-PR-01).
+ *
+ * Contract:
+ * - objective is the primary structural anchor (required on both sides);
+ * - requestedOperation is a qualifier — never sufficient alone;
+ * - scope is a qualifier — never sufficient alone;
+ * - explicit incompatible substantive scopes block even when objective matches;
+ * - insufficient structured evidence → false (prefer reopen challenge).
  */
 export function decisionBasisMatchesClaimStructured(
   decision: Mw5ConsumedDecisionProjection,
@@ -119,22 +163,18 @@ export function decisionBasisMatchesClaimStructured(
   if (!decision.linkedToCurrentLps) return false;
   if (!CONSUMED_HD_STATUSES.has(decision.status)) return false;

-  const pairs: Array<[string | null | undefined, string | null | undefined]> = [
-    [claim.objective, decision.executionObjective],
-    [claim.scope, decision.executionScope],
-    [claim.requestedOperation, decision.requestedOperation],
-  ];
-
-  let sawSubstantiveClaimField = false;
-  for (const [claimField, decisionField] of pairs) {
-    const c = substantive(claimField);
-    const d = substantive(decisionField);
-    if (c) sawSubstantiveClaimField = true;
-    if (c && d && c === d) return true;
+  const claimObjective = substantive(claim.objective);
+  const decisionObjective = substantive(decision.executionObjective);
+  if (!claimObjective || !decisionObjective) return false;
+  if (!structuredFieldPairMatch(claimObjective, decisionObjective)) {
+    return false;
+  }
+  if (
+    !substantiveScopesCompatible(claim.scope, decision.executionScope)
+  ) {
+    return false;
   }
-  // Empty / insufficient claim never match-all.
-  if (!sawSubstantiveClaimField) return false;
-  return false;
+  return true;
 }

 /**
@@ -161,7 +201,7 @@ export function resolveMw5ProductAuthorityFacts(input: {
   const truthCEstablishedForClaim =
     truthC != null && truthCMatchesClaimStructured(truthC, input.claim);
   if (truthCEstablishedForClaim) {
-    reasons.push("truth_c_structured_objective_or_scope_match");
+    reasons.push("truth_c_structured_objective_anchor_match");
   } else if (truthCContextAvailable) {
     reasons.push("truth_c_no_structured_claim_match");
   }

```

## 13. Matrice tests adversariaux
| ID | Result |
|----|--------|
| HD-NEG-01 requestedOperation-only / different obj+scope | PASS |
| HD-NEG-02 same broad scope / different objective | PASS |
| HD-NEG-03 same objective / incompatible scope | PASS |
| HD-NEG-04 requestedOperation only / insufficient objective | PASS |
| HD-POS-01 matching objective+scope LPS-linked | PASS |
| HD-POS-02 matching objective / optional scope unavailable | PASS |
| TC-NEG-01 same broad scope / different objective | PASS |
| TC-NEG-02 different objective / scope containment only | PASS |
| TC-NEG-03 objective match / incompatible scope | PASS |
| TC-POS-01 same objective + compatible scope | PASS |
| TC-POS-02 strong objective containment | PASS |
| TC-POS UI metadata LPS.scope ignored | PASS |
| PATH-NEG-01 disposition + product (HD op-only) | PASS |
| PATH-NEG-02 disposition (broad scope) + product (obj mismatch) | PASS |
| PATH-POS-01 disposition + product (genuine HD) | PASS |

## 14. Targeted results
65 passed (facts + disposition + product MW5 paths)

## 15. Validation locale
- tsc --noEmit PASS
- lint PASS
- npm test PASS (2632 passed / 134 skipped)
- build PASS
- diff --check PASS on authorized files
- MW5_RUN_REAL / MW0_MW5_RUN_REAL unset
- ZERO REAL / no OPENAI_API_KEY in tests

## 16. Fake/Real qualification
Correction proof ceiling = **DETERMINISTIC PROVEN**. ZERO NEW REAL. Historical REAL-03 / cumulative evidence retained at prior tested scope only.

## 17. H17 / H18 impact
None. H17 remains FAIL 141/100 (retained historical governance deviation accepted by Morris for MW5 integration). H18 remains INCONCLUSIVE.

## 18. Reserves
Carried non-blocking prior reserves unchanged (R-MW4-PR-CI-02-LOCAL-TIMING, RA-06/07, MW2-R01–03, R-MW4-REAL-02).

## 19. Anti-claims
MW5 COMPLETE NOT DECIDED · Cognitive Completion NOT PROVEN · runtime v3 NON ADOPTED · MW6 NOT AUTHORIZED · H17 NOT PASS · campaign NOT governance-compliant · merge NOT performed.

## 20. Verdict avant Git integration
**CORR-MW5-PR-01 DETERMINISTIC PASS CANDIDATE — READY TO UPDATE PR #463 — MERGE NOT AUTHORIZED.**

## Project Git / PR / CI (final)

### Commit
- old project head: `a2c0bc2eef8959667d2c00b2bc917639eda70e5d`
- new final project head: `b95893981c13018ac1db3ef9404f535184e1a5d9`
- tree: `19ea6946a4c3668ce76e0dbbef8da8f0a8519987`
- parent: `a2c0bc2eef8959667d2c00b2bc917639eda70e5d`
- message: fix(sfia-studio): tighten MW5 authority claim matching
- files: 4 (+676 / −41)

### Push
remote tip == local HEAD == `b95893981c13018ac1db3ef9404f535184e1a5d9` · force push NO

### PR #463
- updated body with CORR-MW5-PR-01 section
- url: https://github.com/mcleland147/sfia-workspace/pull/463
- base main · head delivery/sfia-studio-nora-mw5-critical-challenge-clarification
- OPEN · NOT MERGED

### CI final head
- run: **33838293930** SUCCESS
- url: https://github.com/mcleland147/sfia-workspace/actions/runs/33838293930
- Detect / Build+validate / Required Gate: PASS
- headSha: `b95893981c13018ac1db3ef9404f535184e1a5d9`

### Final Git Truth (2026-09-04 06:55:22 CEST)
- origin/main: `9b45f0d7700a3127fa28c13f37ffae40432ae05c`
- merge-base: `9b45f0d7700a3127fa28c13f37ffae40432ae05c`
- local HEAD = remote delivery = PR head = `b95893981c13018ac1db3ef9404f535184e1a5d9`

### Final verdict
**CORR-MW5-PR-01 — PASS CANDIDATE**
PRODUCT AUTHORITY CLAIM IDENTITY — FAIL-CLOSED AT TESTED DETERMINISTIC SCOPE
PR #463 UPDATED · CI FINAL HEAD PASS · ZERO NEW REAL · H17 FAIL RETAINED · H18 INCONCLUSIVE RETAINED
MW5 COMPLETE NOT DECIDED · COGNITIVE COMPLETION NOT PROVEN · RUNTIME V3 NON ADOPTED · MW6 NOT AUTHORIZED
MERGE NOT PERFORMED
READY FOR CHATGPT CRITICAL PR RE-REVIEW
PENDING DISTINCT MORRIS MERGE GATE

### Instruction ChatGPT
Lire le Review Handoff Git distant (tip/blob after this publication).
request = ChatGPT Critical PR Re-Review
PR = 463 · project commit = b95893981c13018ac1db3ef9404f535184e1a5d9
CI = SUCCESS run 33838293930 · merge = NOT PERFORMED
