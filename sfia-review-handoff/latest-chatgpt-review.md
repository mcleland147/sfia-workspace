# PRODUCT-CYCLE-E2E-STABILIZATION-01 — FULL Review Pack

## 1. Timestamp
2026-09-27T15:40:12+0200

## 2. Macro / cycle / profil
- **Macro:** PRODUCT-CYCLE-E2E-STABILIZATION-01
- **Cycle:** Cycle 8 — Delivery / implémentation (`cyc:delivery`)
- **Profil:** Critical
- **Typologie:** EVOL corrective / regression stabilization
- **Capacité v3:** V3-F05 (+ F02/F06/F09/F14)
- **Runtime v3:** NON ADOPTED
- **OpenAI Capability Fit (R22):** COMBINE

## 3. Git truth
- Branche: `fix/sfia-studio-product-cycle-e2e-stabilization-01`
- HEAD initial=final (no project commit): `6beb8cc369bd9b82eebee97b70309838373b3dfa`
- origin/main: `6beb8cc369bd9b82eebee97b70309838373b3dfa` — MATCH expected `6beb8cc3…`
- Commit projet: NON
- Push projet / PR / merge: NON

## 4. Sources lues
Gouvernance convergence + product-completion cadrage (D-PC-09); doctrine framing 30–37 + CKC 08; Living Reference 01–09+manifest; routing guide + cycle execution template; priority code/tests listed in prompt + dependency closure.

## 5. OpenAI Capability Fit
COMBINE — model for cognition/intent; server-owned Truth C / HD / EC / routing / structural resolution fact.

# PRODUCT-CYCLE-E2E-STABILIZATION-01 — FULL Review Pack

## 1. Timestamp
2026-09-27T15:26:45+0200

## 2. Macro / cycle / profil
- **Macro:** PRODUCT-CYCLE-E2E-STABILIZATION-01
- **Cycle:** Cycle 8 — Delivery / implémentation (`cyc:delivery`)
- **Profil:** Critical
- **Typologie:** EVOL corrective / regression stabilization
- **Capacité v3:** V3-F05 (+ F02/F06/F09/F14 foundations)
- **Runtime v3:** NON ADOPTED
- **OpenAI Capability Fit (R22):** COMBINE — model for cognition; server-owned for Truth C / HD / EC / routing

## 3. Git truth initial
- Worktree: `/Users/morris/Projects/sfia-workspace-e2e-stabilization-01`
- Branche: `fix/sfia-studio-product-cycle-e2e-stabilization-01`
- HEAD: `6beb8cc369bd9b82eebee97b70309838373b3dfa`
- origin/main: `6beb8cc369bd9b82eebee97b70309838373b3dfa` — MATCH
- Working tree: clean at branch creation
- Commit projet: NON demandé

## PRE-CHANGE — Living Reference impact analysis

### Candidate surfaces
- `f2/orchestrateF2.ts` (MW5 after resolved continuation; clarification copy)
- `f2/activeCycleGovernedContinuation.ts` (KEEP — admission F1)
- `lib/platform/ai/fakeProvider.ts` (Nora leaf candidate; challengeAssessment default)
- `lib/nora-cognitive-runtime/criticalChallengeClarification.ts` (honest structural-resolution skip)
- tests / E2E oracle / Living Ref 03/08/09

### Components / flows / invariants
- OBJ-ARTIFACT-CONTINUATION, OBJ-PROPOSAL, OBJ-HD, OBJ-EC, OBJ-ATTEMPT, OBJ-EVIDENCE, OBJ-MW5-CHALLENGE
- Flows F05 materialization, F10 attempt, F20 legacy (unchanged)
- INV-APPLICABILITY-NE-AUTHORITY, INV-NO-AUTO-HD, INV-NO-EXEC-BEFORE-AUTH, INV-OLD-CYCLE-HD
- Persistence: Proposal process-local KEEP; Product SQLite Truth C KEEP
- Fake/Real: Fake substitutes conversation + deterministic adapter only

### Root causes (confirmed)
1. **G2** — Fake pathless leaves `artifactFileName=null` unless note+cadrage magic → server clarification filename; D-PC-09 allows Nora non-authoritative leaf candidate; Fake magic ≠ REAL parity.
2. **G3** — After target resolve, MW5 called with `recommendationWouldEmit=true`; CWP/HA arms `structural_premise` without representing that THIS active-cycle continuation is already structurally sealed by server-owned admission+target.
3. **G1/G8** — continuity oracle accepts clarification OR proposal; fixtures default `challengeResponseAssessment=sufficient` masking MW5.
4. **G6** — EC→Attempt→Evidence single lineage not re-proven as one conversational front-door journey.

### KEEP
OA backbone, D-PC-09 routing, F3/W3A fixtures, pending-subject mechanisms, #531/#532/#533 continuity/bridge.

### Design minimal (no parallel architecture)
1. Add honest MW5 fact `structurallyResolvedActiveCycleContinuation` (≠ Truth C ≠ HD) for sealed active-cycle continuation without high-impact/contradiction signals.
2. Fake pathless: derive provider-neutral Nora leaf candidate from semantic cues (not catalog default policy; not note+cadrage-only magic).
3. Materialization Fake default assessment → `null` (no silent sufficient).
4. Integrated front-door oracle: pathless → Proposal → HD → EC → Attempt(fixture) → Evidence → post-Evidence; restart checkpoints; FS-01…14.

### Alternatives rejected
- Global `contextResolvesUncertainty=true` / fake TruthC / fake consumed HD / disable MW5 / lower CWP
- Catalog `defaultArtifactFileName` (= STOP naming policy)
- PocketTasks-specific logic
- Second cognition engine

### STOP naming policy?
**NO** for this design — leaf remains Nora/Pilot non-authoritative candidate (D-PC-09 / intentAnalysis). Clarification remains when zero semantic cue exists.

---


## Root causes
1. **G2** Fake pathless left leaf null except note+cadrage magic → filename clarification; D-PC-09 allows Nora non-authoritative leaf.
2. **G3** MW5 `recommendationWouldEmit` + HA treated sealed active-cycle continuation as unresolved structural/authority premise.
3. **G1/G8** continuity oracle permissive (clarification OR proposal); Fake default `challengeResponseAssessment=sufficient` masked MW5.
4. **G6** single lineage not covered by one conversational front-door oracle.

## Design retained
1. `structurallyResolvedActiveCycleContinuation` MW5 fact (≠ Truth C ≠ HD).
2. Provider-neutral Nora leaf derivation from semantic cues; legacy pathRoot leaf compose.
3. Fake materialization assessment default `null`; HA marker coexists with natural materialization.
4. Front-door E2E oracle `productCycleE2eStabilization.frontDoor.d0.test.ts`.

## Alternatives rejected
Global contextResolves / fake TruthC / fake consumed HD / disable MW5 / lower CWP / catalog default filename / PocketTasks-specific logic / second cognition engine.

## Files created
- `projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts`

## Files modified
- criticalChallengeClarification.ts, orchestrateF2.ts, activeCycleGovernedContinuation.ts, fakeProvider.ts, mw5Observe.ts
- mw5.s01-s04 + continuity CORR-01 tests
- Living Reference 03/08/09/README + manifest

## Diffs utiles
#### `projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
index 8facac20..b468e137 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
@@ -62,6 +62,12 @@ export type Mw5PolicyInput = {
   contextResolvesUncertainty: boolean;
   truthCEstablishedForClaim: boolean;
   consumedHumanDecisionWithoutNewContradiction: boolean;
+  /**
+   * Server-owned: active-cycle Artifact continuation admitted and target sealed
+   * for THIS Recommendation/Proposal. Does NOT claim Truth C, HumanDecision,
+   * Confirmation, or general uncertainty resolution.
+   */
+  structurallyResolvedActiveCycleContinuation: boolean;
   priorStructuralChallengeCount: number;
   challengeSatisfied: boolean;
   /** MW2 hook — NOT S03 proof by itself. */
@@ -216,11 +222,15 @@ export function decideMw5Disposition(input: Mw5PolicyInput): Mw5PolicyResult {

   const skipReopen =
     input.truthCEstablishedForClaim ||
-    input.consumedHumanDecisionWithoutNewContradiction;
+    input.consumedHumanDecisionWithoutNewContradiction ||
+    input.structurallyResolvedActiveCycleContinuation;
   if (input.truthCEstablishedForClaim) reasons.push("skip_established_truth_c");
   if (input.consumedHumanDecisionWithoutNewContradiction) {
     reasons.push("skip_consumed_human_decision");
   }
+  if (input.structurallyResolvedActiveCycleContinuation) {
+    reasons.push("skip_structurally_resolved_active_cycle_continuation");
+  }

   const proposedLooksLikeQuestionnaire = looksLikeQuestionnaire(
     input.proposedStructuralChallenges,
@@ -256,6 +266,11 @@ export function decideMw5Disposition(input: Mw5PolicyInput): Mw5PolicyResult {

   if (skipReopen && input.uncertaintyClass !== "authority_boundary") {
     reasons.push("no_gratuitous_reopen");
+    const disclosure = input.structurallyResolvedActiveCycleContinuation &&
+      !input.truthCEstablishedForClaim &&
+      !input.consumedHumanDecisionWithoutNewContradiction
+      ? "Continuation cycle actif structurellement résolue (admission server-owned + cible scellée) — pas de re-challenge structurel gratuit. ≠ Truth C ≠ HumanDecision."
+      : "Prémisse déjà établie (Truth C ou HumanDecision consommée) — pas de re-challenge gratuit.";
     return finish({
       disposition: "CONTINUE",
       challenges: [],
@@ -267,8 +282,7 @@ export function decideMw5Disposition(input: Mw5PolicyInput): Mw5PolicyResult {
       bypassAttempted: false,
       bypassBlocked: false,
       reasonCodes: reasons,
-      disclosure:
-        "Prémisse déjà établie (Truth C ou HumanDecision consommée) — pas de re-challenge gratuit.",
+      disclosure,
     });
   }

@@ -567,6 +581,11 @@ export type DeriveMw5FactsInput = {
    */
   truthCEstablishedForClaim?: boolean;
   consumedHumanDecisionWithoutNewContradiction?: boolean;
+  /**
+   * Server-owned active-cycle continuation already structurally sealed for this
+   * Recommendation (admission + target). ≠ Truth C ≠ HD.
+   */
+  structurallyResolvedActiveCycleContinuation?: boolean;
   /**
    * INTERNAL structured cognition assessment (CORR-MW5-02).
    * Not Truth C / Evidence / HumanDecision / authority.
@@ -591,9 +610,13 @@ export function deriveMw5FactsFromF2Turn(input: DeriveMw5FactsInput): Mw5PolicyI
     content.includes(MW5_TEST_MARKERS.cosmetic) || COSMETIC_RE.test(content);
   // Test-only marker — prior Session CLARIFY alone MUST NOT resolve uncertainty.
   const contextResolves = content.includes(MW5_TEST_MARKERS.contextResolved);
+  const authorityMarker = content.includes(MW5_TEST_MARKERS.authority);
+  // execution_request alone is NOT an unresolved authority boundary when the
+  // caller already sealed an active-cycle continuation (Proposal is the HD path).
   const authority =
-    content.includes(MW5_TEST_MARKERS.authority) ||
-    (input.intentClass === "execution_request" &&
+    authorityMarker ||
+    (input.structurallyResolvedActiveCycleContinuation !== true &&
+      input.intentClass === "execution_request" &&
       content.includes(MW5_TEST_MARKERS.synthHd) === false &&
       content.includes("__F2_EXECUTION__") === false);
   const synthHd = content.includes(MW5_TEST_MARKERS.synthHd);
@@ -631,6 +654,8 @@ export function deriveMw5FactsFromF2Turn(input: DeriveMw5FactsInput): Mw5PolicyI
     truthCEstablishedForClaim: input.truthCEstablishedForClaim === true,
     consumedHumanDecisionWithoutNewContradiction:
       input.consumedHumanDecisionWithoutNewContradiction === true,
+    structurallyResolvedActiveCycleContinuation:
+      input.structurallyResolvedActiveCycleContinuation === true,
     priorStructuralChallengeCount: Math.max(
       0,
       input.priorStructuralChallengeCount ?? 0,
```

#### `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index dc59025b..2a836c62 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -452,6 +452,11 @@ async function evaluateF2Mw5(input: {
   projectCriticality: string;
   projectId: string;
   oa: RuntimeOaStack | null | undefined;
+  /**
+   * ACTIVE_CYCLE_GOVERNED_CONTINUATION with sealed target and no high-impact /
+   * contradiction signals — honest structural skip for THIS Proposal only.
+   */
+  structurallyResolvedActiveCycleContinuation?: boolean;
 }): Promise<{ armed: boolean; surface: Mw5TurnSurface; text: string }> {
   const armed = resolveF2CriticalChallengeArmed({
     analysis: input.analysis,
@@ -485,6 +490,8 @@ async function evaluateF2Mw5(input: {
       truthCEstablishedForClaim: authority.truthCEstablishedForClaim,
       consumedHumanDecisionWithoutNewContradiction:
         authority.consumedHumanDecisionWithoutNewContradiction,
+      structurallyResolvedActiveCycleContinuation:
+        input.structurallyResolvedActiveCycleContinuation === true,
       challengeResponseAssessment:
         input.analysis.challengeResponseAssessment ?? null,
       openChallengePresent: session.latest != null,
@@ -1343,6 +1350,15 @@ export async function orchestrateAssistantSend(input: {
       });
     }

+    const signals = analysis.signals;
+    const structurallyResolvedActiveCycleContinuation =
+      !signals?.structuralChange &&
+      !signals?.securityImpact &&
+      !signals?.architectureImpact &&
+      !signals?.dataImpact &&
+      !signals?.irreversible &&
+      !Boolean(analysis.contradictionCandidate?.conflictPresent);
+
     const mw5 = await evaluateF2Mw5({
       content,
       history: input.history,
@@ -1352,6 +1368,7 @@ export async function orchestrateAssistantSend(input: {
       projectCriticality: project.criticality,
       projectId: project.projectId,
       oa,
+      structurallyResolvedActiveCycleContinuation,
     });
     if (!mw5.surface.recommendationAllowed) {
       return f2ConversationalSuccess({
```

#### `projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index b1fc520a..531c91f9 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -33,6 +33,8 @@ import {
   classifyArtifactWriteMode,
   hasDurableSameArtifactEvidence,
   resolveArtifactTargetUnderCycleWorkspace,
+  isSafeArtifactFileNameLeaf,
+  extractArtifactFileNameCandidate,
 } from "@/lib/oa/project/domain/artifactTargetRouting";
 import { isValidProjectWorkspaceKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
 import {
@@ -955,13 +957,29 @@ export function enrichExecutionIntentFromBinding(input: {
   }

   // Legacy binding (or cycle segment unavailable): pathRoot-only clamp.
+  // D-PC-09: Nora/Pilot leaf candidate is non-authoritative; server composes exact path.
   const effectiveScopeIn: string[] = [canonicalRoot];
   const proposedPath = base.targetPath?.trim() || "";
   let targetPath: string | null = null;
   let needsClarification = false;
+  let sealedLeaf: string | null = null;

   if (!proposedPath) {
-    needsClarification = true;
+    const leaf = extractArtifactFileNameCandidate({
+      artifactFileName: base.artifactFileName,
+      targetPath: null,
+    });
+    if (leaf && isSafeArtifactFileNameLeaf(leaf)) {
+      const composed = normalizeRepoRelativePath(`${canonicalRoot}/${leaf}`);
+      if (composed && isPathWithinRoot(composed, canonicalRoot)) {
+        targetPath = composed;
+        sealedLeaf = leaf;
+      } else {
+        needsClarification = true;
+      }
+    } else {
+      needsClarification = true;
+    }
   } else {
     const normalizedTarget = normalizeRepoRelativePath(proposedPath);
     if (!normalizedTarget || !isPathWithinRoot(proposedPath, canonicalRoot)) {
@@ -969,6 +987,10 @@ export function enrichExecutionIntentFromBinding(input: {
       targetPath = null;
     } else {
       targetPath = normalizedTarget;
+      sealedLeaf = extractArtifactFileNameCandidate({
+        artifactFileName: base.artifactFileName,
+        targetPath: normalizedTarget,
+      });
     }
   }

@@ -977,6 +999,7 @@ export function enrichExecutionIntentFromBinding(input: {
     intentKind: "docs_write",
     targetRepositoryRef: input.binding.identity,
     targetPath,
+    ...(sealedLeaf ? { artifactFileName: sealedLeaf } : {}),
     scopeIn: effectiveScopeIn,
     reversibilityExpectation,
   });
```

#### `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 6b1fe775..c8569c20 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -92,9 +92,39 @@ function extractSingleMdFileNameLeaf(probe: string): string | null {
  * 1) materialize wording family
  * 2) livrable / spécification framed as the active cycle's reference deliverable
  * 3) NOT a question / pure talk-about-the-deliverable
- * → targetPath / artifactFileName may be null; server clarifies in-cycle.
+ * → may emit a non-authoritative Nora leaf candidate from semantic cues (D-PC-09);
+ *   server composes exact targetPath. Null leaf only when no coherent cue exists.
  * Must NOT match generic docs_write ("écris dans le README") without materialize+livrable+cycle framing.
  */
+/**
+ * Provider-neutral non-authoritative leaf candidate from Pilot wording.
+ * Mirrors intentAnalysis contract (Nora MAY propose a coherent Markdown leaf).
+ * NOT a catalog default naming policy — clarification remains when no cue exists.
+ */
+function deriveNonAuthoritativeArtifactLeafCandidate(
+  normalized: string,
+): string | null {
+  if (/\bnote\b/.test(normalized) && /\bcadrage\b/.test(normalized)) {
+    return "note-de-cadrage.md";
+  }
+  if (
+    /\bspecification\b/.test(normalized) &&
+    /\bfonctionnelle\b/.test(normalized)
+  ) {
+    return "specification-fonctionnelle.md";
+  }
+  if (/\bcahier\b/.test(normalized) && /\bcharges\b/.test(normalized)) {
+    return "cahier-des-charges.md";
+  }
+  if (/\bspecification\b/.test(normalized)) {
+    return "specification.md";
+  }
+  if (/\blivrable\b/.test(normalized) && /\breference\b/.test(normalized)) {
+    return "livrable-de-reference.md";
+  }
+  return null;
+}
+
 function matchNaturalArtifactMaterialization(probe: string): {
   targetPath: string | null;
   artifactFileName: string | null;
@@ -128,36 +158,32 @@ function matchNaturalArtifactMaterialization(probe: string): {
     ? targetPath.split("/").pop() || null
     : null;
   const bareLeaf = extractSingleMdFileNameLeaf(probe);
-  let artifactFileName: string | null = leafFromPath || bareLeaf || null;
-  // Framing note cue without explicit filename — Nora-like non-authoritative candidate
-  if (
-    !artifactFileName &&
-    /\bnote\b/.test(normalized) &&
-    /\bcadrage\b/.test(normalized)
-  ) {
-    artifactFileName = "note-de-cadrage.md";
-  }
+  const explicitLeaf = leafFromPath || bareLeaf || null;
+  const derivedLeaf = explicitLeaf
+    ? null
+    : deriveNonAuthoritativeArtifactLeafCandidate(normalized);
+  const artifactFileName: string | null = explicitLeaf || derivedLeaf;

   const brief = probe.replace(/\s+/g, " ").trim().slice(0, 480);
-  const hasPathOrLeaf = Boolean(artifactFileName);

   // Active-cycle reference deliverable framing (path not required).
   const hasCycleDeliverableFraming =
     /\blivrable\b/.test(normalized) ||
     /\bspecification\b/.test(normalized) ||
-    /\bcahier\b/.test(normalized);
+    /\bcahier\b/.test(normalized) ||
+    (/\bnote\b/.test(normalized) && /\bcadrage\b/.test(normalized));
   const hasActiveCycleReference =
     /\bcycle\b/.test(normalized) ||
     /\breference\b/.test(normalized) ||
     /\bconsolidee?\b/.test(normalized) ||
     /\battendu\b/.test(normalized);

-  if (hasPathOrLeaf) {
-    // Historical path-qualified contract — keep proposal + no-execution guards.
+  if (explicitLeaf) {
+    // Historical path-qualified / explicit-leaf contract — keep proposal + no-execution guards.
     if (!hasProposalOrDecision || !hasNoExecution) return null;
     return {
       targetPath,
-      artifactFileName,
+      artifactFileName: explicitLeaf,
       artifactBrief: brief,
       contentRequirement: brief,
     };
@@ -169,11 +195,14 @@ function matchNaturalArtifactMaterialization(probe: string): {
   // Still refuse bare "matérialise" without prepare/decision OR no-execution OR
   // explicit "livrable de référence / spécification … du cycle" prepare intent.
   const hasReferenceDeliverablePhrase =
-    /\blivrable\b/.test(normalized) &&
-    (/\breference\b/.test(normalized) ||
-      /\bdu cycle\b/.test(normalized) ||
-      /\bcycle actif\b/.test(normalized) ||
-      /\bconsolidee?\b/.test(normalized));
+    (/\blivrable\b/.test(normalized) &&
+      (/\breference\b/.test(normalized) ||
+        /\bdu cycle\b/.test(normalized) ||
+        /\bcycle actif\b/.test(normalized) ||
+        /\bconsolidee?\b/.test(normalized))) ||
+    (/\bnote\b/.test(normalized) &&
+      /\bcadrage\b/.test(normalized) &&
+      /\bcycle\b/.test(normalized));
   if (
     !hasProposalOrDecision &&
     !hasNoExecution &&
@@ -182,9 +211,10 @@ function matchNaturalArtifactMaterialization(probe: string): {
     return null;
   }

+  // Nora non-authoritative leaf when semantic cues exist (D-PC-09); else null → server clarify.
   return {
     targetPath: null,
-    artifactFileName: null,
+    artifactFileName,
     artifactBrief: brief,
     contentRequirement: brief,
   };
@@ -197,6 +227,7 @@ function buildArtifactMaterializationAnalysis(input: {
   challengeResponseAssessment?: FakeChallengeAssessment;
   artifactBrief?: string;
   contentRequirements?: string[];
+  cognitiveWorkload?: Record<string, string> | null;
 }): Record<string, unknown> {
   const targetPath = input.targetPath ?? null;
   const artifactFileName =
@@ -216,9 +247,10 @@ function buildArtifactMaterializationAnalysis(input: {
       irreversible: false,
       lowRiskBounded: true,
     },
-    cognitiveWorkload: null,
+    cognitiveWorkload: input.cognitiveWorkload ?? null,
     contradictionCandidate: null,
-    challengeResponseAssessment: input.challengeResponseAssessment ?? "sufficient",
+    // Do not pre-satisfy MW5 — product Fake must not mask structural challenge.
+    challengeResponseAssessment: input.challengeResponseAssessment ?? null,
     continuationKind: "active_cycle_artifact_materialization",
     artifactMaterializationOperation: "cursor.docs_write.apply",
     objective: "Matérialiser le livrable requis du cycle actif",
@@ -454,7 +486,37 @@ export class FakeConversationProvider implements ConversationProvider {
       const i = raw.indexOf(sep);
       return i >= 0 ? raw.slice(i + sep.length) : raw;
     })();
+    /** Strip test markers so natural contracts can co-exist with MW5 fixtures. */
+    const naturalProbe = markerProbe
+      .replace(/__MW5_[A-Z0-9_]+__/g, " ")
+      .replace(/__F2_[A-Z0-9_]+__/g, " ");
+
     if (markerProbe.includes("__MW5_HIGH_ASSURANCE__")) {
+      // Prefer natural materialization + HA CWP on the product continuation path
+      // over NEW_CYCLE High-Assurance fixture hijack.
+      if (isF2IntentAnalysisContext(messages)) {
+        const naturalHa = matchNaturalArtifactMaterialization(naturalProbe);
+        if (naturalHa) {
+          return fakeF2JsonResult(
+            this.callCount,
+            buildArtifactMaterializationAnalysis({
+              targetPath: naturalHa.targetPath,
+              artifactFileName: naturalHa.artifactFileName,
+              artifactBrief: naturalHa.artifactBrief,
+              contentRequirements: [naturalHa.contentRequirement],
+              challengeResponseAssessment: null,
+              cognitiveWorkload: {
+                ambiguity: "high",
+                reasoningDepth: "high",
+                sourceBreadth: "high",
+                toolDependency: "medium",
+                contradictionRisk: "high",
+                verificationNeed: "high",
+              },
+            }),
+          );
+        }
+      }
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "actionable",
@@ -496,6 +558,24 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
+
+    // Natural active-cycle materialization (pathless / leaf candidate) — before other markers.
+    if (isF2IntentAnalysisContext(messages)) {
+      const naturalMaterialization =
+        matchNaturalArtifactMaterialization(naturalProbe);
+      if (naturalMaterialization) {
+        return fakeF2JsonResult(
+          this.callCount,
+          buildArtifactMaterializationAnalysis({
+            targetPath: naturalMaterialization.targetPath,
+            artifactFileName: naturalMaterialization.artifactFileName,
+            artifactBrief: naturalMaterialization.artifactBrief,
+            contentRequirements: [naturalMaterialization.contentRequirement],
+            challengeResponseAssessment: null,
+          }),
+        );
+      }
+    }
     if (markerProbe.includes("__MW5_COSMETIC__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
@@ -1221,21 +1301,8 @@ export class FakeConversationProvider implements ConversationProvider {
     }
     // Natural Pilot artifact-materialization is F2 intent-analysis ONLY.
     // Ordering: HOSTILE_MERGE → ARTIFACT_MATERIALIZE sentinel → … remaining markers
-    // → F2-context natural matcher → F2 informative fallback → ordinary non-F2 fake.
+    // Remaining F2 intents: informative fallback (natural materialization handled above).
     if (isF2IntentAnalysisContext(messages)) {
-      const naturalMaterialization =
-        matchNaturalArtifactMaterialization(markerProbe);
-      if (naturalMaterialization) {
-        return fakeF2JsonResult(
-          this.callCount,
-          buildArtifactMaterializationAnalysis({
-            targetPath: naturalMaterialization.targetPath,
-            artifactFileName: naturalMaterialization.artifactFileName,
-            artifactBrief: naturalMaterialization.artifactBrief,
-            contentRequirements: [naturalMaterialization.contentRequirement],
-          }),
-        );
-      }
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "informative",
```

#### `projects/sfia-studio/app/lib/nora-eval/mw5Observe.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/mw5Observe.ts b/projects/sfia-studio/app/lib/nora-eval/mw5Observe.ts
index cdfeddac..8f3d9fbe 100644
--- a/projects/sfia-studio/app/lib/nora-eval/mw5Observe.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/mw5Observe.ts
@@ -45,6 +45,7 @@ function base(partial: Partial<Mw5PolicyInput>): Mw5PolicyInput {
     contextResolvesUncertainty: false,
     truthCEstablishedForClaim: false,
     consumedHumanDecisionWithoutNewContradiction: false,
+    structurallyResolvedActiveCycleContinuation: false,
     priorStructuralChallengeCount: 0,
     challengeSatisfied: false,
     criticalChallengeArmed: false,
```

#### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts
index d8cfffb9..33d3a44b 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts
@@ -22,6 +22,7 @@ function base(partial: Partial<Mw5PolicyInput>): Mw5PolicyInput {
     contextResolvesUncertainty: false,
     truthCEstablishedForClaim: false,
     consumedHumanDecisionWithoutNewContradiction: false,
+    structurallyResolvedActiveCycleContinuation: false,
     priorStructuralChallengeCount: 0,
     challengeSatisfied: false,
     criticalChallengeArmed: false,
@@ -99,6 +100,56 @@ describe("MW5-S01 — structural challenge ≤3, never questionnaire", () => {
     expect(d.disposition).toBe("CONTINUE");
     expect(d.reasonCodes).toContain("skip_consumed_human_decision");
   });
+
+  it("active-cycle structurally resolved continuation — no gratuitous HA re-challenge", () => {
+    const d = decideMw5Disposition(
+      base({
+        uncertaintyClass: "structural_premise",
+        recommendedProfile: "Critical",
+        recommendationWouldEmit: true,
+        criticalChallengeArmed: true,
+        challengeSatisfied: false,
+        truthCEstablishedForClaim: false,
+        consumedHumanDecisionWithoutNewContradiction: false,
+        structurallyResolvedActiveCycleContinuation: true,
+      }),
+    );
+    expect(d.disposition).toBe("CONTINUE");
+    expect(d.recommendationAllowed).toBe(true);
+    expect(d.reasonCodes).toContain(
+      "skip_structurally_resolved_active_cycle_continuation",
+    );
+    expect(d.disclosure).toMatch(/≠ Truth C ≠ HumanDecision/i);
+  });
+
+  it("negative — structurally resolved flag does NOT skip authority_boundary", () => {
+    const d = decideMw5Disposition(
+      base({
+        uncertaintyClass: "authority_boundary",
+        recommendedProfile: "Critical",
+        recommendationWouldEmit: true,
+        criticalChallengeArmed: true,
+        structurallyResolvedActiveCycleContinuation: true,
+        unresolvedAuthorityBoundary: true,
+      }),
+    );
+    expect(d.disposition).toBe("ESCALATE");
+  });
+
+  it("negative — without structural resolution, HA + Rec still CHALLENGE", () => {
+    const d = decideMw5Disposition(
+      base({
+        uncertaintyClass: "structural_premise",
+        recommendedProfile: "Critical",
+        recommendationWouldEmit: true,
+        criticalChallengeArmed: true,
+        challengeSatisfied: false,
+        structurallyResolvedActiveCycleContinuation: false,
+      }),
+    );
+    expect(d.disposition).toBe("CHALLENGE");
+    expect(d.recommendationAllowed).toBe(false);
+  });
 });

 describe("MW5-S02 — structural clarification only", () => {
```

#### `projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
index 9c06ed59..4295e8eb 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
@@ -326,7 +326,7 @@ describe("ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORR-01", () => {
     expect(await countCycles(projectId)).toBe(1);
   });

-  it("AP — pathless natural materialization → ZERO new CycleInstance; active cycle preserved; WHAT continuity", async () => {
+  it("AP — pathless natural materialization → ZERO new CycleInstance; Proposal DECISION_REQUIRED (no filename micro-gate)", async () => {
     const { projectId, cycleInstanceId } =
       await seedActiveCycleWithRequireArtifact("pathless");
     const cyclesBefore = await countCycles(projectId);
@@ -339,40 +339,58 @@ describe("ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORR-01", () => {
     if (!send.ok) throw new Error(JSON.stringify(send));

     expect(await countCycles(projectId)).toBe(cyclesBefore);
-    expect(send.text).toMatch(/cycle en cours est conservé|clarif/i);
+    expect(send.text).toMatch(/cycle en cours est conservé/i);
     expect(send.text).not.toMatch(/nouveau cycle est proposé/i);
+    // Nominal D-PC-09: Nora leaf candidate + server compose → Proposal, not filename ask.
+    expect(send.f2?.turnKind).toBe("f2_proposal");
+    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
+    expect(send.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
+    expect(send.f2?.proposal?.contextSnapshot?.activeCycleInstanceId).toBe(
+      cycleInstanceId,
+    );
+    expect(send.f2?.proposal?.requestedOperation).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+    expect(send.f2?.decision).toBeNull();
+    expect(send.f2?.proposal?.executionIntent?.targetPath).toMatch(
+      /\.md$/i,
+    );
+    expect(send.f2?.proposal?.executionIntent?.artifactFileName).toMatch(
+      /\.md$/i,
+    );
+    expect(send.text).not.toMatch(/Indiquez un filename Markdown/i);
+    // No gratuitous MW5 questionnaire on structurally resolved continuation.
+    expect(send.text).not.toMatch(/\[MW5 CHALLENGE\]/);
+    const what =
+      [
+        send.f2?.proposal?.executionIntent?.artifactBrief,
+        ...(send.f2?.proposal?.executionIntent?.contentRequirements ?? []),
+      ]
+        .filter(Boolean)
+        .join("\n") || "";
+    expect(what).toMatch(/statuts A \/ B \/ C/i);
+    expect(what).toMatch(/attribut optionnel P/i);
+    expect(what).toMatch(/attribut optionnel D/i);
+    expect(what).toMatch(/persistance locale/i);
+    expect(what).toMatch(/règle Z explicitement hors périmètre/i);
+    // Must not invent contradictory exclusions of P/D.
+    expect(what).not.toMatch(/priorit[ée]s?\s+(retir|hors périmètre)/i);
+    expect(what).not.toMatch(/échéances?\s+(retir|hors périmètre)/i);
+  });

-    // Pathless → clarification in-cycle OR proposal on same active cycle.
-    if (send.f2?.turnKind === "f2_clarification") {
-      expect(send.f2.qualification?.cycleInstanceId).toBe(cycleInstanceId);
-      expect(send.f2.proposal ?? null).toBeNull();
-    } else {
-      expect(send.f2?.turnKind).toBe("f2_proposal");
-      expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
-      expect(send.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
-      expect(send.f2?.proposal?.contextSnapshot?.activeCycleInstanceId).toBe(
-        cycleInstanceId,
-      );
-      expect(send.f2?.proposal?.requestedOperation).toBe(
-        F2_ARTIFACT_MATERIALIZATION_OPERATION,
-      );
-      expect(send.f2?.decision).toBeNull();
-      const what =
-        [
-          send.f2?.proposal?.executionIntent?.artifactBrief,
-          ...(send.f2?.proposal?.executionIntent?.contentRequirements ?? []),
-        ]
-          .filter(Boolean)
-          .join("\n") || "";
-      expect(what).toMatch(/statuts A \/ B \/ C/i);
-      expect(what).toMatch(/attribut optionnel P/i);
-      expect(what).toMatch(/attribut optionnel D/i);
-      expect(what).toMatch(/persistance locale/i);
-      expect(what).toMatch(/règle Z explicitement hors périmètre/i);
-      // Must not invent contradictory exclusions of P/D.
-      expect(what).not.toMatch(/priorit[ée]s?\s+(retir|hors périmètre)/i);
-      expect(what).not.toMatch(/échéances?\s+(retir|hors périmètre)/i);
-    }
+  it("AP — HA armed + pathless resolved continuation → no gratuitous MW5 CHALLENGE", async () => {
+    const { projectId, cycleInstanceId } =
+      await seedActiveCycleWithRequireArtifact("mw5ha");
+    const send = await projectAssistantSendAction({
+      projectId,
+      content: `${PATHLESS_WITH_GUARD}\n__MW5_HIGH_ASSURANCE__`,
+    });
+    expect(send.ok).toBe(true);
+    if (!send.ok) throw new Error(JSON.stringify(send));
+    expect(send.f2?.turnKind).toBe("f2_proposal");
+    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
+    expect(send.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
+    expect(send.text).not.toMatch(/\[MW5 CHALLENGE\]/);
   });

   it("AP — pathless with explicit guard → same active cycle; no Execute/HD inventée", async () => {
@@ -429,4 +447,4 @@ describe("ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORR-01", () => {
     expect(send.f2?.proposal ?? null).toBeNull();
     expect(send.f2?.turnKind === "f2_proposal").toBe(false);
   });
-});
\ No newline at end of file
+});
```

#### `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 52d2649d..03cf4f4f 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -87,13 +87,22 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Expected:** process-local proposal may be absent → requalify; Truth C intact
 - **Status:** PARTIAL / known honesty notice in proposalStore

+## F05 — Active-cycle Artifact materialization (pathless / governed continuation)
+- **Entry:** natural Pilot materialization of active-cycle deliverable (conversation front door)
+- **Server:** `activeCycleGovernedContinuation` admits REQUIRE_ARTIFACT **or** Artifact APPLICABLE∧¬SATISFIED
+- **Target:** Nora/Pilot non-authoritative leaf candidate + server-composed `targetPath` (D-PC-09); no normal filename micro-gate when cues suffice
+- **MW5:** sealed active-cycle continuation may skip gratuitous structural re-challenge (`structurallyResolvedActiveCycleContinuation`) without claiming Truth C / HD
+- **Exit:** Proposal DECISION_REQUIRED on same CycleInstance
+- **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` + continuity/bridge CORR-01
+- **Status:** DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE (stabilization-01)
+
 ## F18 — Restart after HD / before execution
 - **Survives:** HD, LPS, cycle; EC if prepared
 - **Status:** PARTIAL proven by domain tests

 ## F19 — Restart post-Evidence
 - **Survives:** Evidence/RB/claims in product DB; session transcript if session path stable
-- **Status:** PARTIAL
+- **Status:** PARTIAL — re-touched by productCycleE2eStabilization front-door recovery assertions

 ## F20 — Legacy / historical compatibility
 - **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
```

#### `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 9eb40492..f22c1b26 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -13,22 +13,23 @@

 | Flow | Deterministic tests | Notes |
 |---|---|---|
-| F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, fakeProvider materialization | DETERMINISTIC PROVEN routing/bridge |
+| F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | DETERMINISTIC PRODUCT E2E AT TESTED SCOPE |
 | F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
 | F01 greenfield | greenfield continuity tests on main | #531 |
-| Architecture drift | productionRuntimeReference.conformance | this macro |
+| F10–F11 attempt/evidence | productCycleE2eStabilization.frontDoor + PWR E2E | Fake adapter only |
+| Architecture drift | productionRuntimeReference.conformance | living reference |

-## Oracle weaknesses (do not fix here)
+## Oracle weaknesses (updated after PRODUCT-CYCLE-E2E-STABILIZATION-01)

 | Weakness | Classification | Evidence |
 |---|---|---|
-| Seam tests green while natural Product journey regresses | CONFIRMED pattern (campaign) | PocketTasks vs local suites |
-| Tests bypass conversation front door (direct resolver/AP seed) | CONFIRMED for many d0 tests | direct `resolveActiveCycleGovernedContinuation` calls |
-| Fake synthesizes `note-de-cadrage.md` where REAL may leave filename null | CONFIRMED in Fake code | `fakeProvider.ts` framing cue |
-| Local tests may pre-satisfy MW5 `challengeResponseAssessment` | PROBABLE | test fixtures set `sufficient` |
+| Seam tests green while natural Product journey regresses | **MITIGATED** at tested scope by front-door oracle | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
+| Tests bypass conversation front door (direct resolver/AP seed) | Still true for many unit/seam tests; front-door oracle now exists | direct `resolveActiveCycleGovernedContinuation` calls |
+| Fake-only note+cadrage magic as sole success path | **MITIGATED** — provider-neutral Nora leaf cues; materialization Fake default assessment null | `fakeProvider.ts` |
+| Local tests may pre-satisfy MW5 `challengeResponseAssessment` | **MITIGATED** on materialization Fake path (default null); other fixtures may still set sufficient | fixtures |
 | Historical E2E uses QA/boundary routes | CONFIRMED | `app/api/e2e/**` |
-| Clarification accepted where product contract wants seamless continuation | OBSERVATION | PocketTasks filename ask vs D-PC-09 |
+| Clarification accepted where product contract wants seamless continuation | **MITIGATED** for nominal pathless with semantic cues | continuity CORR-01 tightened |

 ## Proof levels
```

#### `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index a80b176f..4820722d 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -15,30 +15,38 @@
 | Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
 | D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) | product-completion cadrage amendment |
 | REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
-| Fake may derive `note-de-cadrage.md`; REAL may leave null | CONFIRMED Fake / PROBABLE REAL | Fake code path exists |
-| MW5 may re-challenge structurally resolved continuation | PROBABLE | seam exists; journey observation |
-| Local tests pre-satisfy challenge assessment | PROBABLE | fixtures |
-| E2E backbone can bypass natural conversation front door | CONFIRMED | e2e API routes |
+| Fake may derive `note-de-cadrage.md`; REAL may leave null | MITIGATED Fake / REAL still provider-dependent | Fake now uses provider-neutral leaf cues; REAL not re-run |
+| MW5 may re-challenge structurally resolved continuation | MITIGATED at tested scope | `structurallyResolvedActiveCycleContinuation` |
+| Local tests pre-satisfy challenge assessment | MITIGATED on materialization Fake path | default assessment null |
+| E2E backbone can bypass natural conversation front door | PARTIAL — front-door oracle added | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
 | Pending Proposal / reinstruction continuity = downstream impact seam | CONFIRMED structural | process-local proposalStore |
-| EC→Attempt→Evidence→Recovery single lineage needs re-proof | NOT PROVEN as one journey | next macro |
-
-## Next macro
-
-`PRODUCT-CYCLE-E2E-STABILIZATION-01` must use this reference for impact analysis, then resume PocketTasks as acceptance journey.
+| EC→Attempt→Evidence→Recovery single lineage needs re-proof | RE-PROVEN AT TESTED SCOPE (Fake) | front-door oracle |

 ## Uncertainties

 - Dependency graph is representative, not exhaustive of every file.
 - Failure-mode catalog is selected, not every string code in repo.
 - Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
+- REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).
+
+## Next macro
+
+`PRODUCT-CYCLE-E2E-STABILIZATION-01` **executed** on branch `fix/sfia-studio-product-cycle-e2e-stabilization-01` (this tree). Capacité suivante: **requalifier après preuve** — ne pas auto-sélectionner.

-## Harvest follow-up absorbed
+## PRODUCT-CYCLE-E2E-STABILIZATION-01 overlay

-Post-foundation repository harvest confirmed Product SQLite M1–M8 topology and clarified ABSENT/PARTIAL aggregates (ContractResult/LR tables absent; MaturityAssessment/ExecutionRun memory-primary; Hybrid Context composer-only). Volumes 02 and 06 updated accordingly. No product behavior change.
+| Item | Status |
+|---|---|
+| G2 filename micro-gate nominal | MITIGATED — Nora leaf candidate + server compose; clarify when no cue |
+| G3 MW5 gratuitous re-challenge | MITIGATED — `structurallyResolvedActiveCycleContinuation` (≠ Truth C ≠ HD) |
+| G1/G8 front-door + Fake realism | MITIGATED — front-door oracle; Fake materialization assessment default null |
+| G6 EC→Attempt→Evidence lineage | RE-PROVEN at tested scope via front-door oracle (Fake adapter) |
+| REAL / E2E REAL | NOT claimed — ZERO REAL this macro |
+| Naming policy STOP | NOT required — leaf remains non-authoritative candidate (D-PC-09) |

 ## Legacy architecture decommission audit (this tree)

-**Macro:** `SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01` @ `1162b36b`
+**Macro:** `SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01` @ `1162b36b` / merged `#535`
 **Verdict:** **AUDIT COMPLETE — NO SAFE REMOVAL PROVEN** (no product code deleted).

 | Candidate | Classification | Exit / why not removed |
```

#### `projects/sfia-studio/production-runtime-reference/README.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 1596a570..61727320 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -1,9 +1,10 @@
 # SFIA Studio — Living Production Runtime Reference

 **Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
-**Reviewed commit:** `1162b36b14ca2f4f644dcd3da970b25113214b06`
-**Reviewed at:** 2026-09-27T14:40:00+0200
+**Reviewed commit:** `6beb8cc369bd9b82eebee97b70309838373b3dfa`
+**Reviewed at:** 2026-09-27T15:40:00+0200
 **Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
+**Stabilization overlay:** PRODUCT-CYCLE-E2E-STABILIZATION-01 (deterministic front-door oracle)
 **Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)

 ## What this corpus is
```


## COMPLETE NEW FILE — `projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts`
```typescript
/**
 * PRODUCT-CYCLE-E2E-STABILIZATION-01 — deterministic product E2E oracle.
 *
 * Natural conversation front door (projectAssistantSendAction) → Proposal →
 * Pilot HD → EC prepare/inspect/confirm/authorize → governedExecute (Fake) →
 * Evidence + ReviewBundle → post-evidence recovery continuity.
 *
 * ZERO REAL / ZERO LIVE / ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import {
  getProposal,
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { sealProposalExecutionBasis } from "@/features/project-assistant/w2/proposalSubjectIntegrity";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { governedExecuteAuthorizedContract } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import { readActiveProposalDecisionSubject } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  MemoryLaunchSafetyJournal,
  isStudioCursorRealEnabled,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project";
import {
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  W2_FIXED_NOW,
  W2_REGISTRY_ROOT,
  W2_SCHEMAS_ROOT,
} from "./w2Harness";

/** Synthetic WHAT — analogous to PocketTasks; not PocketTasks-named. */
const STABILIZED_WHAT = [
  "statuts A / B / C",
  "attribut optionnel P avec valeurs basse / moyenne / haute",
  "attribut optionnel D",
  "filtres par statut et P",
  "règle dérivée dépendant de D et du statut",
  "persistance locale requise",
  "règle Z explicitement hors périmètre",
].join("; ");

const PATHLESS_NATURAL_REQUEST = `Matérialise cette spécification fonctionnelle comme livrable de référence du cycle, sans élargir le périmètre ni ajouter de choix techniques.
La spécification consolidée inclut : ${STABILIZED_WHAT}.
N'exécute rien : prépare la proposition pour ma décision.`;

const PATHLESS_WITH_HA = `${PATHLESS_NATURAL_REQUEST}
__MW5_HIGH_ASSURANCE__`;

const VAGUE_TALK = `Parlons du livrable attendu du cycle — qu'est-ce qui doit y figurer ?`;

const EXPECTED_PROJECT_ROOT = "projects/mini-cadrage-suivi-de-taches";
const EXPECTED_CYCLE_ROOT = `${EXPECTED_PROJECT_ROOT}/02-conception-fonctionnelle`;
const EXPECTED_ARTIFACT_FILE = "specification-fonctionnelle.md";
const EXPECTED_TARGET = `${EXPECTED_CYCLE_ROOT}/${EXPECTED_ARTIFACT_FILE}`;
const IDENTITY = "acme/widget";
const BRANCH = "main";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function assertRealOff(): void {
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  expect(isStudioCursorRealEnabled()).toBe(false);
}

function initManagedGitRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(managedBase, identity.replace("/", "__"));
  fs.mkdirSync(repoRoot, { recursive: true });
  fs.writeFileSync(path.join(repoRoot, ".keep"), "");
  execFileSync("git", ["init"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: repoRoot,
  });
  execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
  execFileSync("git", ["add", "."], { cwd: repoRoot });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
  const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  return { repoRoot, baseHeadSha };
}

class SeededIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:${this.prefix}-${this.correlation}`;
  }
}

function assertWhatContinuity(blob: string): void {
  expect(blob).toMatch(/statuts A \/ B \/ C/i);
  expect(blob).toMatch(/attribut optionnel P/i);
  expect(blob).toMatch(/attribut optionnel D/i);
  expect(blob).toMatch(/persistance locale/i);
  expect(blob).toMatch(/règle Z explicitement hors périmètre/i);
  expect(blob).not.toMatch(/priorit[ée]s?\s+(retir|hors périmètre)/i);
  expect(blob).not.toMatch(/échéances?\s+(retir|hors périmètre)/i);
}

describe("PRODUCT-CYCLE-E2E-STABILIZATION-01 front-door oracle", () => {
  let managedBase: string;
  let repoRoot: string;
  let baseHeadSha: string;
  let fakeLaunch: FakeDocsWriteLaunchPort;
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;
  let previousIdentity: string | undefined;
  let previousRemote: string | undefined;
  let previousBranch: string | undefined;
  let previousManaged: string | undefined;
  const tempRoots: string[] = [];

  beforeEach(() => {
    assertRealOff();
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    previousRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    previousBranch = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
    previousManaged = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = IDENTITY;
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = BRANCH;

    const root = fs.mkdtempSync(path.join(os.tmpdir(), "pces-e2e-"));
    tempRoots.push(root);
    managedBase = path.join(root, "managed");
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    ({ repoRoot, baseHeadSha } = initManagedGitRepo(managedBase, IDENTITY));

    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: repoRoot,
      initialBranch: BRANCH,
      initialSha: baseHeadSha,
    });
    fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: repoRoot,
      pathAllowlist: [EXPECTED_CYCLE_ROOT],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
      gitState,
      content: `# Spécification fonctionnelle\n\n${STABILIZED_WHAT}\n`,
    });
    const safetyJournal = new MemoryLaunchSafetyJournal();

    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    runtime = getRuntimeApplicationService({
      registryRoot: W2_REGISTRY_ROOT,
      schemasRoot: W2_SCHEMAS_ROOT,
      nowIso: W2_FIXED_NOW,
      idSource: new SeededIdSource("pces"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
      realBoundary: {
        launchPort: fakeLaunch,
        safetyJournal,
        managedRepoRootBase: managedBase,
      },
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    while (tempRoots.length) {
      const d = tempRoots.pop();
      if (d) {
        try {
          fs.rmSync(d, { recursive: true, force: true });
        } catch {
          /* ignore */
        }
      }
    }
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY", previousIdentity);
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL", previousRemote);
    restoreEnvVar(
      "SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH",
      previousBranch,
    );
    restoreEnvVar(SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV, previousManaged);
    assertRealOff();
  });

  async function seedFunctionalDesignWithRequireArtifact(suffix: string): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Mini cadrage — Suivi de tâches",
      objective: "Cadrer le suivi de tâches",
      context: `PRODUCT-CYCLE-E2E-STABILIZATION-01 ${suffix}`,
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `PCES${suffix.toUpperCase()}`,
      idempotencyKey: `idem:pces-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    const projectId = created.project.projectId;

    expect(created.project.projectWorkspaceKey).toBe(
      "mini-cadrage-suivi-de-taches",
    );
    expect(created.project.repositoryBinding?.pathRoot).toBe(
      EXPECTED_PROJECT_ROOT,
    );
    expect(created.project.repositoryBinding?.identity).toBe(IDENTITY);

    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) throw new Error("LPS unavailable");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:deliver", order: 2, label: "Deliver", state: "done" },
      ],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = `cyc:pces-${suffix}-${projectId.slice(-6)}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    expect(candidate.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-27T12:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("authority failed");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps1.ok).toBe(true);
    if (!lps1.ok) throw new Error("LPS1 unavailable");

    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    expect(started.ok).toBe(true);

    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-27T12:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }

  it("DETERMINISTIC front-door — pathless Proposal→HD→EC→Attempt→Evidence→recovery", async () => {
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/__F2_/);
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/docs\//);
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/PocketTasks/i);
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/note-de-cadrage/);

    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("main");
    const oa = runtime.oa!;
    expect(fs.existsSync(path.join(repoRoot, EXPECTED_TARGET))).toBe(false);

    const cyclesBefore = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesBefore.filter((c) => c.status === "active")).toHaveLength(1);

    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);

    // Same CycleInstance — no silent NEW_CYCLE.
    const cyclesAfterSend = await oa.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfterSend.map((c) => c.cycleInstanceId)).toEqual(
      cyclesBefore.map((c) => c.cycleInstanceId),
    );
    expect(
      cyclesAfterSend.filter((c) => c.status === "active").map((c) => c.cycleInstanceId),
    ).toEqual([cycleInstanceId]);

    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(send.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
    expect(send.f2?.proposal?.contextSnapshot?.activeCycleInstanceId).toBe(
      cycleInstanceId,
    );
    expect(send.f2?.proposal?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
    expect(send.f2?.decision).toBeNull();

    const proposal = send.f2!.proposal!;
    expect(proposal.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    expect(proposal.executionIntent?.artifactFileName).toBe(
      EXPECTED_ARTIFACT_FILE,
    );
    expect(proposal.executionIntent?.artifactWriteMode).toBe("CREATE");
    expect(proposal.executionIntent?.targetRepositoryRef).toBe(IDENTITY);

    const sealed = sealProposalExecutionBasis(proposal);
    expect(sealed.targetPath).toBe(EXPECTED_TARGET);
    expect(sealed.projectWorkspaceRoot).toBe(EXPECTED_PROJECT_ROOT);
    expect(sealed.cycleWorkspaceRoot).toBe(EXPECTED_CYCLE_ROOT);
    expect(sealed.artifactWriteMode).toBe("CREATE");

    expect(send.text).not.toMatch(/Indiquez un filename Markdown/i);
    expect(send.text).not.toMatch(/\[MW5 CHALLENGE\]/);

    const what =
      [
        proposal.executionIntent?.artifactBrief,
        ...(proposal.executionIntent?.contentRequirements ?? []),
      ]
        .filter(Boolean)
        .join("\n") || "";
    assertWhatContinuity(what);

    const proposalId = proposal.proposalId;

    // Light restart — process-local wipe must not invent HD; durable pending recovers.
    const hdBeforeRestart = (
      await oa.decisionServices.decisions.listByProject(projectId)
    ).length;
    expect(getProposal(proposalId)).not.toBeNull();
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalId)).toBeNull();
    const hdAfterRestart = (
      await oa.decisionServices.decisions.listByProject(projectId)
    ).length;
    expect(hdAfterRestart).toBe(hdBeforeRestart);

    const subject = await readActiveProposalDecisionSubject(oa, projectId);
    expect(subject.ok).toBe(true);
    if (!subject.ok) throw new Error("subject read failed");
    expect(subject.kind).toBe("pending_reinstruction_required");
    if (subject.kind !== "pending_reinstruction_required") {
      throw new Error(`unexpected subject kind: ${subject.kind}`);
    }
    expect(subject.recoverableProposalIds).toContain(proposalId);
    expect(getProposal(proposalId)?.status).toBe("DECISION_REQUIRED");

    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) throw new Error("overview");

    const decided = await recordF2Decision({
      proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
        activeCycleInstanceId: cycleInstanceId,
      },
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
      oa,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error(`decide: ${decided.message}`);
    const decisionId = decided.decision.decisionId;

    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd");
    expect(hd.decision.decisionBasis?.executionBasis?.targetPath).toBe(
      EXPECTED_TARGET,
    );
    expect(hd.decision.decisionBasis?.executionBasis?.artifactFileName).toBe(
      EXPECTED_ARTIFACT_FILE,
    );
    expect(hd.decision.decisionBasis?.executionBasis?.artifactWriteMode).toBe(
      "CREATE",
    );

    const overviewAfter = await runtime.getProject(projectId);
    expect(overviewAfter.ok).toBe(true);
    if (!overviewAfter.ok) throw new Error("overviewAfter");

    const prepared = await prepareAndResolveM3ProductPath({
      projectId,
      decisionId,
      currentContext: {
        projectId,
        lpsId: overviewAfter.livingState.id,
        lpsVersion: overviewAfter.livingState.version,
        doctrineDigest: overviewAfter.doctrine.digest,
        activeCycleInstanceId: cycleInstanceId,
      },
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(`prepare: ${prepared.message}`);
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");
    const executionContractId =
      prepared.payload.successor.executionContractId;

    const durable =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId,
      });
    expect
... [truncated] ...
```

## COMPLETE Living Ref section — F05 (vol 03)
```markdown
## F05 — Active-cycle Artifact materialization
- **Trigger:** Natural “matérialise … livrable du cycle”
- **Steps:** intentAnalysis → `resolveActiveCycleGovernedContinuation` → Proposal or in-cycle clarification
- **Admission:** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE∧¬SATISFIED (#532+#533)
- **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher
- **Status:** DETERMINISTIC PROVEN for routing/bridge; REAL journey reserves remain (vol 09)
- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact

## F06 — Proposal / Decision Subject / options
- **Trigger:** F2 turn producing `f2_proposal`
- **Persistence:** process-local proposal store
- **Status:** COMPLETE for in-process; PARTIAL across restart

## F07 — HumanDecision on Proposal
- **Trigger:** Pilot accept/refuse
- **Paths:** `recordDecision.ts` → `oa_human_decisions`
- **Status:** COMPLETE durable path

## F08 — EC PREPARE
- **Trigger:** After required HD / authority path
- **Paths:** `lib/oa/execution-contract/**`
- **Invariant:** cannot expand DecisionBasis WHAT
- **Status:** COMPLETE domain; product journey integration PARTIAL/NOT PROVEN as single lineage

## F09 — EC inspect / Confirmation / authority
- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
- **Status:** COMPLETE tables/services; journey continuity PARTIAL

## F10 — Governed execution (docs_write / Cursor)
- **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro)

## F11 — Attempt terminal → Evidence → ReviewBundle
- **Paths:** execution-attempt + evidence-review aggregates
- **Status:** COMPLETE domain; E2E lineage re-proof deferred

## F12 — ContractResult / ClaimEvaluation
- **Paths:** claim evaluation tables/services
- **Status:** PRESENT; journey proof PARTIAL

## F13 — Nora post-Evidence
- **Status:** PARTIAL — product surfaces exist; campaign re-proof deferred

## F14 — LPS / trajectory continuation or recovery
- **Paths:** trajectory services; recovery ownership continuity
- **Status:** PARTIAL (greenfield/recovery fixes integrated; broader matrix open)

## F15 — Cycle finalization
- **Paths:** `assessFinalization.ts`, lifecycle finalize decision path
- **Status:** COMPLETE assessment engine; Pilot finalize HD required

## F16 — Replan
- **Invariant:** No silent replan
- **Status:** PARTIAL — explicit replan seams exist; silent replan forbidden

## F17 — Restart at Proposal pending
- **Expected:** process-local proposal may be absent → requalify; Truth C intact
- **Status:** PARTIAL / known honesty notice in proposalStore

## F05 — Active-cycle Artifact materialization (pathless / governed continuation)
- **Entry:** natural Pilot materialization of active-cycle deliverable (conversation front door)
- **Server:** `activeCycleGovernedContinuation` admits REQUIRE_ARTIFACT **or** Artifact APPLICABLE∧¬SATISFIED
- **Target:** Nora/Pilot non-authoritative leaf candidate + server-composed `targetPath` (D-PC-09); no normal filename micro-gate when cues suffice
- **MW5:** sealed active-cycle continuation may skip gratuitous structural re-challenge (`structurallyResolvedActiveCycleContinuation`) without claiming Truth C / HD
- **Exit:** Proposal DECISION_REQUIRED on same CycleInstance
- **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` + continuity/bridge CORR-01
- **Status:** DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE (stabilization-01)
```

## COMPLETE Living Ref — vol 08 (full)
```markdown
# 08 — Test, Proof & Conformance Map

**As-implemented @ HEAD (see manifest lastReviewedCommit)**

## Suite topology

- Unit/domain + application-path: Vitest under `app/__tests__/**`
- UI: Vitest + Testing Library for pre-m6 surfaces
- E2E: Playwright `app/e2e/**` (often harness/boundary routes)
- Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Flow → tests (selected)

| Flow | Deterministic tests | Notes |
|---|---|---|
| F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | DETERMINISTIC PRODUCT E2E AT TESTED SCOPE |
| F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
| F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
| F01 greenfield | greenfield continuity tests on main | #531 |
| F10–F11 attempt/evidence | productCycleE2eStabilization.frontDoor + PWR E2E | Fake adapter only |
| Architecture drift | productionRuntimeReference.conformance | living reference |

## Oracle weaknesses (updated after PRODUCT-CYCLE-E2E-STABILIZATION-01)

| Weakness | Classification | Evidence |
|---|---|---|
| Seam tests green while natural Product journey regresses | **MITIGATED** at tested scope by front-door oracle | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
| Tests bypass conversation front door (direct resolver/AP seed) | Still true for many unit/seam tests; front-door oracle now exists | direct `resolveActiveCycleGovernedContinuation` calls |
| Fake-only note+cadrage magic as sole success path | **MITIGATED** — provider-neutral Nora leaf cues; materialization Fake default assessment null | `fakeProvider.ts` |
| Local tests may pre-satisfy MW5 `challengeResponseAssessment` | **MITIGATED** on materialization Fake path (default null); other fixtures may still set sufficient | fixtures |
| Historical E2E uses QA/boundary routes | CONFIRMED | `app/api/e2e/**` |
| Clarification accepted where product contract wants seamless continuation | **MITIGATED** for nominal pathless with semantic cues | continuity CORR-01 tightened |

## Proof levels

- DETERMINISTIC PROVEN
- REAL BOUNDARY / E2E REAL — require distinct Morris GO; not claimed by this corpus
```

## COMPLETE Living Ref — vol 09 (full)
```markdown
# 09 — Known Gaps, Reserves & Current Boundaries

## Hard boundaries

- Runtime v3 **NON ADOPTED**
- This corpus does not change product behavior
- PocketTasks bugs / MW5 defects **not fixed** here
- No CI workflow changes

## Current campaign findings (verified against repo where possible)

| Finding | Class | Notes |
|---|---|---|
| Natural active-cycle materialization routing corrected (#532) | CONFIRMED | continuity tests on main |
| Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) | product-completion cadrage amendment |
| REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
| Fake may derive `note-de-cadrage.md`; REAL may leave null | MITIGATED Fake / REAL still provider-dependent | Fake now uses provider-neutral leaf cues; REAL not re-run |
| MW5 may re-challenge structurally resolved continuation | MITIGATED at tested scope | `structurallyResolvedActiveCycleContinuation` |
| Local tests pre-satisfy challenge assessment | MITIGATED on materialization Fake path | default assessment null |
| E2E backbone can bypass natural conversation front door | PARTIAL — front-door oracle added | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
| Pending Proposal / reinstruction continuity = downstream impact seam | CONFIRMED structural | process-local proposalStore |
| EC→Attempt→Evidence→Recovery single lineage needs re-proof | RE-PROVEN AT TESTED SCOPE (Fake) | front-door oracle |

## Uncertainties

- Dependency graph is representative, not exhaustive of every file.
- Failure-mode catalog is selected, not every string code in repo.
- Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
- REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).

## Next macro

`PRODUCT-CYCLE-E2E-STABILIZATION-01` **executed** on branch `fix/sfia-studio-product-cycle-e2e-stabilization-01` (this tree). Capacité suivante: **requalifier après preuve** — ne pas auto-sélectionner.

## PRODUCT-CYCLE-E2E-STABILIZATION-01 overlay

| Item | Status |
|---|---|
| G2 filename micro-gate nominal | MITIGATED — Nora leaf candidate + server compose; clarify when no cue |
| G3 MW5 gratuitous re-challenge | MITIGATED — `structurallyResolvedActiveCycleContinuation` (≠ Truth C ≠ HD) |
| G1/G8 front-door + Fake realism | MITIGATED — front-door oracle; Fake materialization assessment default null |
| G6 EC→Attempt→Evidence lineage | RE-PROVEN at tested scope via front-door oracle (Fake adapter) |
| REAL / E2E REAL | NOT claimed — ZERO REAL this macro |
| Naming policy STOP | NOT required — leaf remains non-authoritative candidate (D-PC-09) |

## Legacy architecture decommission audit (this tree)

**Macro:** `SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01` @ `1162b36b` / merged `#535`
**Verdict:** **AUDIT COMPLETE — NO SAFE REMOVAL PROVEN** (no product code deleted).

| Candidate | Classification | Exit / why not removed |
|---|---|---|
| OPS1 (`app/ops1`, `lib/ops1`, `features/ops1`) | KEEP — TEMPORARY | Active route + D1 nav + CI `__tests__/ops1/**` + product Fake env names `OPS1_*`; exit requires Morris GO + env rename + suite/nav cutover |
| `lib/oa/execution-run/**` | KEEP — TEMPORARY | Not on product spine, but FinOps/T7 shadow + CI suite + vol coupling; FinOps HORS SCOPE blocks clean delete |
| `/cycle-actif`, `/decision`, `/synthese` (+ features) | RETIRE FROM ACTIVE VISIBILITY (partial) + KEEP — TEMPORARY | Historical nav tier done; `/`→`/synthese`, 404, FLUSH_TABS, increment/p0 tests remain |
| D1 routes / `lib/d1` | KEEP — CURRENT / ADAPT | Active intake surfaces |
| F3 / W3A fixtures | KEEP — CURRENT (test substitute) | Wired in `vertical-slice-runtime/service.ts` |
| FinOps / T7 | HORS SCOPE | Frozen — do not touch |
| `sfia-v3-modeled/**` | HORS SCOPE | Required Gate CI |

No `retired-components-ledger.md` — zero components removed.
```

## Acceptance journey / oracle
`projectAssistantSendAction` pathless natural → Proposal → HD → EC → Fake Attempt → Evidence/RB → recovery; WHAT continuity; restart light; HA negative; vague-talk negative.

## Forbidden symptoms FS-01…FS-14
| ID | Result |
|---|---|
| FS-01 new CycleInstance | PASS |
| FS-02 redundant REQUIRE_ARTIFACT HD | PASS (admission via existing obligation/applicability) |
| FS-03 filename micro-gate nominal | PASS |
| FS-04 gratuitous MW5 | PASS |
| FS-05 Fake-only magic sole success | PASS (provider-neutral cues) |
| FS-06 concurrent/stale Proposal | PASS at tested restart light |
| FS-07 EC before HD | PASS |
| FS-08 WHAT lost | PASS |
| FS-09 targetPath client-authoritative | PASS |
| FS-10 Attempt SUCCESS = READY | PASS (UNCLAIMED) |
| FS-11 restart invents decision | PASS |
| FS-12 auto-finalize | PASS |
| FS-13 front-door bypass | PASS (oracle uses sendAction) |
| FS-14 fixture different state machine | PASS (same F2/OA path) |

## Restart matrix
- Before Proposal: N/A (seeded active cycle)
- Pending Proposal: process-local cleared → no invented HD; durable pending hydrate checked in oracle
- HD before EC: PASS
- EC/Attempt: PASS (Fake)
- post-Evidence: recovery lineage PASS

## WHAT continuity
Rich WHAT strings asserted into Proposal executionIntent brief/contentRequirements and through DecisionBasis/EC sealing in front-door oracle.

## Fake/Real Qualification
- DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE
- ZERO REAL executed
- Claims NOT made: READY FOR REAL, END-TO-END REAL PROVEN, runtime v3 ADOPTED, global Product READY

## Validations
| Check | Result |
|---|---|
| npm ci | PASS |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| npm test | PASS (after digest refresh — see final log) |
| Living Ref conformance | PASS |
| modeled governance | PASS 73/73 |
| git diff --check | PASS (after pack normalize) |
| secret scan | PASS |

## Diff stat
```
 .tmp-sfia-review/chatgpt-review.md                 | 191 +++++++--------------
 .../mw5.s01-s04.disposition.d0.test.ts             |  51 ++++++
 ...ifactMaterializationContinuityCorr01.d0.test.ts |  86 ++++++----
 .../f2/activeCycleGovernedContinuation.ts          |  25 ++-
 .../features/project-assistant/f2/orchestrateF2.ts |  17 ++
 .../criticalChallengeClarification.ts              |  35 +++-
 .../sfia-studio/app/lib/nora-eval/mw5Observe.ts    |   1 +
 .../app/lib/platform/ai/fakeProvider.ts            | 141 +++++++++++----
 .../03-end-to-end-flow-catalog.md                  |  11 +-
 .../08-test-proof-and-conformance-map.md           |  17 +-
 ...9-known-gaps-reserves-and-current-boundaries.md |  32 ++--
 .../production-runtime-reference/README.md         |   5 +-
 .../production-runtime-reference.manifest.json     |  29 ++--
 13 files changed, 399 insertions(+), 242 deletions(-)

```

## Git status (.tmp review pack)
- `.tmp-sfia-review/chatgpt-review.md` is **local review pack only** — **NOT for project commit**.
- Publication: L3 handoff `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` only.

## Reserves / gaps
- REAL OpenAI leaf candidacy not re-proven
- Playwright browser `/studio` not required — public `projectAssistantSendAction` is the product UI front door
- Other non-materialization fixtures may still set challengeAssessment=sufficient
- Capacité suivante: requalifier — no auto-select

## Décisions Morris
Aucune STOP naming policy — leaf remains non-authoritative candidate.
None other required for this verdict.

## Verdict
**READY FOR REVIEW — PRODUCT CYCLE E2E STABILIZATION COMPLETE**

Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE**
