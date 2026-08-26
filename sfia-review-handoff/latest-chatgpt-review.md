# SFIA Studio — W3-D Review Pack FULL

**Date/heure:** 2026-08-26 05:35:28 CEST
**Cycle:** SFIA Studio Product Completion W3-D — FULL CKC TRACK + CATALOG EVOLVABILITY
**Profil:** CRITICAL · Typologie v2.4: EVOL · Type cycle: 8 Delivery/implémentation
**Décision Morris consommée:** GO MORRIS — W3-D DELIVERY — FULL CKC TRACK + CATALOG EVOLVABILITY — ASSIGN W3-D — SCOPE US-P1-09 + US-P1-14 — TARGET FINAL W3 IMPLEMENTATION SLICE — CLOSE ALL COHERENT W3 CKC/CATALOG GAPS IN THIS LOT — REUSE / ADAPT EXISTING OA + DOCTRINEPACKAGE + PRODUCT CKC + NORA SUBSTRATE — NO NEW CYCLE ENGINE / PARALLEL RESOLVER / PARALLEL STORE / PARALLEL ORCHESTRATOR — C6 CLOSED / IMPLEMENT-ONLY / DO NOT REOPEN — CANONICAL /studio PRODUCT PATH — DETERMINISTIC PRODUCT-NATIVE PROOF — REAL OUT — FINOPS/T7 FREEZE — W4 OUT — RUNTIME V3 NON ADOPTED — W3 REMAINS OPEN UNTIL FINAL CLOSURE QUALIFICATION — NO PROJECT COMMIT / PUSH / PR / MERGE IN THIS EXECUTION PASS — AFTER W3-D EXIT PROOF: W3 FINAL CLOSURE QUALIFICATION.

---

## 1. Local Git Truth Check (réel)

| Champ | Valeur |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-w3d-full-ckc-catalog` (worktree dédié W3-D) |
| Repo root | `/Users/morris/Projects/sfia-workspace` (shared) |
| Branche active | `delivery/sfia-studio-product-completion-w3-d-full-ckc-catalog` |
| HEAD | `8e1d548f1adabc173f08bb5a70ae8ed751350a26` |
| origin/main | `8e1d548f1adabc173f08bb5a70ae8ed751350a26` (match attendu ✓) |
| Status | modifications W3-D locales non commités + 1 fichier untracked test |
| Staged | aucun |
| Worktree propre à l'entrée | oui (branche créée depuis main exact) |
| Project commit/push/PR/merge cette passe | **NON** |

---

## 2. Sources consultées

- Build Doctrine + Convergence Roadmap (READ ONLY)
- Product Completion 01–03, 05–11 (READ ONLY)
- UX Product Experience 01–03 (READ ONLY — aucun nouveau contrat UX)
- Doctrine v3 30, 31, 33, 37 (READ ONLY)
- Template / routing / operating model / guardrails (process externe seulement)
- Runtime harvest: cycleTypeCatalog, catalogFingerprint/projection, qualifyCycleWithCkc, ckcQualificationResolver, productCkcIndex, ckcCognitiveContext, orchestrateF2, proposeTrajectoryOptions, decideTrajectory, postEvidenceNoraAnalysis, w3cPostEvidenceLoop, FakeConversationProvider, W2 Phase B + W3-A/B/C tests/E2E

---

## 3. État entrant préservé

- W1 CLOSED · W2 CLOSED BY MORRIS · W3-A/B/C CLOSED BY MORRIS
- W3 IN PROGRESS / NOT CLOSED
- C6 CLOSED / IMPLEMENT-ONLY
- Product Completion INCOMPLETE · REAL OUT · FinOps FREEZE · W4 OUT · runtime v3 NON ADOPTED

---

## 4. Classification KEEP / ADAPT / COMPLETE / CREATE

| Disposition | Actifs |
|---|---|
| **KEEP** | OA Native Backbone · Product SQLite · DoctrinePackage repo/resolution · Product CKC index · existing CKC resolver · F2/Nora substrate · W2 Phase B · W2 Trajectory propose/decide · W3-A/B/C · /studio · published package `pkg-sfia-studio-doctrine-v3-1.0.0` (READ ONLY — non modifié) |
| **ADAPT** | `cycleTypeCatalog.ts` validator (casse invariant structurel 15) · `postEvidenceNoraAnalysis.ts` (inject CKC prompt) · `w3cPostEvidenceLoop.ts` (load product CKC avant Nora) · `fakeProvider.ts` (causalité content-marker + scripted precedence) · tests catalogue / W3-C / E2E assertions |
| **COMPLETE** | Couverture catalogue 100% active · évolutivité test-only · causalité Nora représentative · fail-closed · provenance · post-Evidence Phase B |
| **CREATE** | `w3dFullCkcCatalog.test.ts` uniquement (preuve; aucun moteur/store/resolver parallèle) |

**NO PARALLEL ARCHITECTURE** confirmé: aucun nouveau engine / store / resolver / orchestrator / catalogue concurrent.

---

## 5. Matrice requirement / gap / disposition

| Requirement | Current asset | Gap | Disposition | Target | Proof |
|---|---|---|---|---|---|
| US-P1-09 evolvability | cycleTypeCatalog validator | structural `===15`, exact 1…15, detailed=4, synthetic=11 | ADAPT | `cycleTypeCatalog.ts` | validator accepts N+1; baseline content remains 15 |
| Catalog↔package consistency | ProductCkcIndex (variable size) | catalog treated 15 as identity | ADAPT binding only | existing seams | full active coverage parametrized |
| US-P1-14 full Phase B | W2 Phase B bounded; post-Evidence facts-only | `consumed=true` ≠ semantic; post-Evidence sans CKC | COMPLETE wiring | `w3cPostEvidenceLoop` + `postEvidenceNoraAnalysis` | causal Nora + post-Evidence CKC |
| Coverage 100% active | product package 15 entries | pas de parcours générique exhaustif | CREATE test | `w3dFullCkcCatalog.test.ts` | parametrized over `listCycleTypes()` |
| Product-native /studio | W2 E2E Phase B; W3-C E2E | post-Evidence sans assert CKC | ADAPT E2E | `studio-w3c-post-evidence-replan-runtime.spec.ts` | anti scope creep on `w3c-nora-analysis` |

---

## 6. Architecture réellement utilisée

```
CycleTypeCatalog (variable cardinality validation)
  → fingerprint/projection (content-hash, not count===15)
  → QualifyCycleWithCkc / Product CKC resolver (existing)
  → loadProductCkcCognitiveContent (DoctrinePackage)
  → buildCkcCognitivePromptSection / reasonWithResolvedCkcContext
  → Nora outputs (F2 / W2 Options / post-Evidence)
  → provenance (package→index→ckc→digest→fingerprint)
  → /studio product path
```

Post-Evidence W3-D: `resolveW2QualificationInputs` → `loadProductCkcCognitiveContent` → `analyzePostEvidenceWithProvider({ ckcPromptSection })`. Fail-closed `CKC_UNAVAILABLE` avant mutation LPS/Epistemic.

---

## 7. Fichiers créés / modifiés

### Modifiés
- `projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts`
- `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
- `projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts`
- `projects/sfia-studio/app/__tests__/oa/doctrine/productCkcIndex.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts`
- `projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts`

### Créés
- `projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts`

### git diff --stat
```
 .../__tests__/oa/cycle/cycleTypeCatalog.test.ts    | 86 ++++++++++-----------
 .../__tests__/oa/doctrine/productCkcIndex.test.ts  |  2 +-
 .../project-assistant/w3cPostEvidenceLoop.test.ts  | 17 +++++
 ...studio-w3c-post-evidence-replan-runtime.spec.ts |  7 ++
 .../f3/postEvidenceNoraAnalysis.ts                 | 40 +++++++++-
 .../project-assistant/w2/w3cPostEvidenceLoop.ts    | 66 ++++++++++++----
 .../app/lib/oa/cycle/domain/cycleTypeCatalog.ts    | 88 +++++++---------------
 .../app/lib/platform/ai/fakeProvider.ts            | 67 ++++++++++++++++
 8 files changed, 253 insertions(+), 120 deletions(-)
```

### git diff --name-status
```
M	projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
M	projects/sfia-studio/app/__tests__/oa/doctrine/productCkcIndex.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
M	projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
M	projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
M	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
A       projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts
```

---

## 8. Contenu exploitable des modifications (diff complet)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
index 0102fc02..01814905 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
@@ -14,7 +14,9 @@ import {
   CKC_PILOT_QA_VALIDATION_PATH,
   CKC_SYNTHETIC_MAP_PATH,
   CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_BASELINE_ENTRY_COUNT,
   CYCLE_TYPE_CATALOG_VERSION,
+  METHOD_CYCLES_DOC_PATH,
   getCycleTypeById,
   isKnownCycleTypeId,
   listCycleTypes,
@@ -64,12 +66,42 @@ function cloneCatalog(
 }

 describe("V3.1-D1 cycle type catalog", () => {
-  it("exposes catalog version and exactly fifteen entries", () => {
+  it("exposes catalog version and current baseline of fifteen content entries", () => {
     expect(CYCLE_TYPE_CATALOG.version).toBe("0.1.0-v3.1-d1");
-    expect(CYCLE_TYPE_CATALOG.entries).toHaveLength(15);
+    expect(CYCLE_TYPE_CATALOG.entries).toHaveLength(
+      CYCLE_TYPE_CATALOG_BASELINE_ENTRY_COUNT,
+    );
     expect(ADOPTED_CYCLE_TYPE_IDS).toEqual([...EXPECTED_IDS]);
   });

+  it("W3-D: structural cardinality 15 is not a validator invariant", () => {
+    const extended = cloneCatalog((entries) => {
+      entries.push({
+        cycleTypeId: "cyc:w3d-extension-probe",
+        canonicalKey: "w3d-extension-probe",
+        label: "Extension probe",
+        shortDescription: "Test-only extension for catalog evolvability",
+        displayOrder: 16,
+        lifecycleStatus: "active",
+        methodCycleNumber: 16,
+        methodReference: `${METHOD_CYCLES_DOC_PATH} §probe`,
+        ckc: {
+          mandatory: true,
+          primaryLevel: "synthetic",
+          primaryReference: CKC_SYNTHETIC_MAP_PATH,
+          fallbackPolicy: "none",
+          executionAuthority: false,
+          doctrineStatus: "method-candidate",
+          unavailableBehavior: "fail-closed",
+        },
+        aliases: [],
+      });
+      return entries;
+    });
+    expect(extended.entries).toHaveLength(16);
+    expect(validateCycleTypeCatalog(extended)).toEqual([]);
+  });
+
   it("lists exact adopted cycleTypeId set in order", () => {
     expect(listCycleTypes().map((e) => e.cycleTypeId)).toEqual([
       ...EXPECTED_IDS,
@@ -270,7 +302,7 @@ describe("V3.1-D1 cycle type catalog negatives", () => {
     );
     expect(
       validateCycleTypeCatalog(catalog).some(
-        (i) => i.code === "CAPITALIZATION_MISSING" || i.code === "COUNT",
+        (i) => i.code === "CAPITALIZATION_MISSING",
       ),
     ).toBe(true);
   });
@@ -551,66 +583,40 @@ describe("V3.1-D1 QA reinforcement — validator negatives & edges", () => {
     ).toBe(true);
   });

-  it("detects methodCycleNumber unique but outside 1…15", () => {
+  it("W3-D: accepts methodCycleNumber beyond historical 1…15 when unique and positive", () => {
     const catalog = cloneCatalog((entries) => {
       entries[0] = { ...entries[0], methodCycleNumber: 16 };
       return entries;
     });
-    expect(
-      validateCycleTypeCatalog(catalog).some(
-        (i) =>
-          i.code === "METHOD_NUMBER_RANGE" ||
-          i.code === "METHOD_NUMBER_SET" ||
-          i.message.toLowerCase().includes("methodcyclenumber"),
-      ),
-    ).toBe(true);
+    expect(validateCycleTypeCatalog(catalog)).toEqual([]);
   });

-  it("detects displayOrder unique but outside 1…15", () => {
+  it("detects non-positive displayOrder", () => {
     const catalog = cloneCatalog((entries) => {
       entries[0] = { ...entries[0], displayOrder: 0 };
       return entries;
     });
     expect(
       validateCycleTypeCatalog(catalog).some(
-        (i) =>
-          i.code === "DISPLAY_ORDER_RANGE" ||
-          i.code === "DISPLAY_ORDER_SET" ||
-          i.message.toLowerCase().includes("displayorder"),
+        (i) => i.code === "DISPLAY_ORDER_RANGE",
       ),
     ).toBe(true);
   });

-  it("detects incomplete methodCycleNumber set (unique but not exact 1…15)", () => {
+  it("W3-D: accepts incomplete historical 1…15 methodCycleNumber set when unique positive ints", () => {
     const catalog = cloneCatalog((entries) => {
       entries[0] = { ...entries[0], methodCycleNumber: 16 };
       return entries;
     });
-    // Unique still holds for 2..15 + 16; exact set 1..15 must fail.
-    const issues = validateCycleTypeCatalog(catalog);
-    expect(
-      issues.some(
-        (i) =>
-          i.code === "METHOD_NUMBER_SET" ||
-          i.code === "METHOD_NUMBER_RANGE" ||
-          i.message.includes("1") && i.message.includes("15"),
-      ),
-    ).toBe(true);
+    expect(validateCycleTypeCatalog(catalog)).toEqual([]);
   });

-  it("detects incomplete displayOrder set (unique but not exact 1…15)", () => {
+  it("W3-D: accepts displayOrder outside historical 1…15 when unique and positive", () => {
     const catalog = cloneCatalog((entries) => {
       entries[14] = { ...entries[14], displayOrder: 99 };
       return entries;
     });
-    expect(
-      validateCycleTypeCatalog(catalog).some(
-        (i) =>
-          i.code === "DISPLAY_ORDER_SET" ||
-          i.code === "DISPLAY_ORDER_RANGE" ||
-          i.message.toLowerCase().includes("displayorder"),
-      ),
-    ).toBe(true);
+    expect(validateCycleTypeCatalog(catalog)).toEqual([]);
   });

   it("detects alias collision between two entries", () => {
@@ -672,11 +678,7 @@ describe("V3.1-D1 QA reinforcement — validator negatives & edges", () => {
     });
     expect(
       validateCycleTypeCatalog(catalog).some(
-        (i) =>
-          i.code === "CKC_PRIMARY_LEVEL" ||
-          i.code === "DETAILED_COUNT" ||
-          i.code === "SYNTHETIC_COUNT" ||
-          i.message.toLowerCase().includes("primary"),
+        (i) => i.code === "CKC_PRIMARY_LEVEL",
       ),
     ).toBe(true);
   });
diff --git a/projects/sfia-studio/app/__tests__/oa/doctrine/productCkcIndex.test.ts b/projects/sfia-studio/app/__tests__/oa/doctrine/productCkcIndex.test.ts
index 48401ba4..b625002c 100644
--- a/projects/sfia-studio/app/__tests__/oa/doctrine/productCkcIndex.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/doctrine/productCkcIndex.test.ts
@@ -16,7 +16,7 @@ const APP_ROOT = path.resolve(__dirname, "../../..");
 const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");

 describe("Product CKC index", () => {
-  it("loads index with 15 cycleType mappings", () => {
+  it("loads index with current baseline of fifteen cycleType mappings", () => {
     const loaded = loadProductCkcIndexSync({ registryRoot: PRODUCT_ROOT });
     expect(loaded.ok).toBe(true);
     if (!loaded.ok) return;
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
index 2d47592e..dfdd7021 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
@@ -207,6 +207,23 @@ describe("W3C-P02 Nora analysis", () => {
     );
     expect(hasText || hasUnavailable).toBe(true);
   });
+
+  it("W3-D: post-Evidence Nora analysis is CKC-informed on delivery path", async () => {
+    const ctx = await authorizeTempArtifact("w3d-ckc");
+    const { materialized } = await materializeSuccess(ctx);
+    expect(materialized.postEvidence?.ok).toBe(true);
+    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
+    expect(materialized.postEvidence.analysisText).toBeTruthy();
+    expect(materialized.postEvidence.analysisText!.toLowerCase()).toMatch(
+      /anti scope creep/,
+    );
+    expect(materialized.postEvidence.analysisText).not.toMatch(/ckc:studio:/);
+    expect(materialized.postEvidence.recommendation.authority).toBe("none");
+    expect(materialized.postEvidence.recommendation.decisionCreated).toBe(
+      false,
+    );
+    expect(materialized.postEvidence.replanInvoked).toBe(false);
+  });
 });

 describe("W3C-P03 recommendation anti-authority", () => {
diff --git a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
index 6af4b21a..b4b8bc47 100644
--- a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
@@ -119,6 +119,13 @@ async function assertW3cPostEvidence(page: Page, kind: string) {
     "none — Recommendation ≠ HumanDecision",
   );
   await expect(page.getByTestId("w3c-nora-analysis")).toBeVisible();
+  // W3-D / US-P1-14 — post-Evidence Nora consumes product CKC (delivery default).
+  await expect(page.getByTestId("w3c-nora-analysis")).toContainText(
+    /anti scope creep/i,
+  );
+  await expect(page.getByTestId("w3c-nora-analysis")).not.toContainText(
+    /ckc:studio:/,
+  );
   await expect(page.getByTestId("w3c-lps-version")).not.toHaveText("—");
   await expect(page.getByTestId("w3b-nora-replan")).toContainText(
     "replan auto: non",
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
index 3d12c519..dced1c77 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
@@ -2,10 +2,22 @@
  * GAP-4 — bounded post-Evidence Nora/provider analysis.
  * Uses resolveConversationProvider() only. Never instantiates OpenAI here.
  * Result is a Recommendation, never a HumanDecision / GO / new contract.
+ *
+ * W3-D / US-P1-14: when a resolved product-native CKC prompt section is supplied,
+ * it is injected into the same cognitive marker seam used by F2/W2 — no parallel
+ * resolver / orchestrator. Absence of CKC is handled by the caller (fail-closed).
+ *
+ * IMPORTANT: do not import `@/features/project-assistant/f2/ckcCognitiveContext`
+ * here — that module loads Node filesystem doctrine I/O and must stay off the
+ * client presentation graph (presentationLabels → postEvidenceNoraAnalysis).
  */

 import { resolveConversationProvider } from "@/lib/platform/ai";

+/** Same marker string as f2/ckcCognitiveContext — keep in sync (string only). */
+const CKC_COGNITIVE_REASONING_SYSTEM_MARKER =
+  "SFIA Studio CKC COGNITIVE REASONING" as const;
+
 export const POST_EVIDENCE_NORA_SENTINEL =
   "[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]" as const;
 export const POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL =
@@ -85,15 +97,41 @@ function boundedFactsJson(facts: PostEvidenceAnalysisFacts): string {
   });
 }

+export type AnalyzePostEvidenceOptions = {
+  /**
+   * Product-native CKC prompt section already built via
+   * `buildCkcCognitivePromptSection` — never raw package paths for Pilote.
+   */
+  readonly ckcPromptSection?: string | null;
+};
+
+function buildPostEvidenceSystemPrompt(
+  ckcPromptSection: string | null | undefined,
+): string {
+  const trimmed = ckcPromptSection?.trim();
+  if (!trimmed) {
+    return ANALYSIS_SYSTEM;
+  }
+  return `${ANALYSIS_SYSTEM}
+
+${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}
+Contexte CKC résolu (guidance seulement — pas d'autorité, pas de décision humaine):
+${trimmed}`;
+}
+
 export async function analyzePostEvidenceWithProvider(
   facts: PostEvidenceAnalysisFacts,
+  options?: AnalyzePostEvidenceOptions,
 ): Promise<PostEvidenceAnalysisResult> {
   let providerId: string | null = null;
   try {
     const provider = resolveConversationProvider();
     providerId = provider.providerId;
     const completion = await provider.complete([
-      { role: "system", content: ANALYSIS_SYSTEM },
+      {
+        role: "system",
+        content: buildPostEvidenceSystemPrompt(options?.ckcPromptSection),
+      },
       {
         role: "user",
         content: `Faits durables post-Evidence (bornés):\n${boundedFactsJson(facts)}`,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index dc9b67b0..ef3c256c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
@@ -22,8 +22,14 @@ import {
   formatW3cRecommendationPayloadForLps,
   lastW3cEvidenceIdInLpsContext,
 } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
+import {
+  buildCkcCognitivePromptSection,
+  loadProductCkcCognitiveContent,
+} from "@/features/project-assistant/f2/ckcCognitiveContext";
+import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
 import type { NextActionCode } from "@/lib/oa/evidence-review/domain/coordinationTypes";
 import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";
+import { resolveW2QualificationInputs } from "./qualificationInputs";

 export type W3cRecommendationKind =
   | "continue"
@@ -979,28 +985,56 @@ export async function runW3cPostEvidenceLoop(input: {
     }
   }

-  noraInvoked = true;
-  const analysis = await analyzePostEvidenceWithProvider({
-    projectId,
-    executionContractId: product.technicalDetail.executionContractId,
-    executionContractStatus: contractStatus,
-    executionContractAction: contractAction,
-    attemptId,
-    attemptStatus,
-    selectedAgentRef,
-    adapterRef,
-    executionMode,
-    realProcessInvoked,
-    evidenceId: product.evidenceId,
-    reviewBundleId: product.reviewBundleId,
-    technicalResultRef: product.technicalDetail.resultRef,
-    reservations: product.reservations,
+  // W3-D / US-P1-14 — full CKC Phase B on post-Evidence Nora path.
+  // Same product-native load + prompt seam as W2 Options (no parallel resolver).
+  const qualification = await resolveW2QualificationInputs({ oa, projectId });
+  if (!qualification.ok) {
+    return failClosed(
+      qualification.code,
+      `Qualification durable indisponible avant analyse post-Evidence — ${qualification.message}`,
+    );
+  }
+  const registryRoot = resolveProductDoctrineRegistryRoot();
+  const ckcContent = loadProductCkcCognitiveContent({
+    registryRoot,
+    cycleTypeId: qualification.qualification.inputs.cycleTypeId,
+    packagePin: qualification.qualification.packagePin,
   });
+  if (!ckcContent) {
+    return failClosed(
+      "CKC_UNAVAILABLE",
+      "CKC product-native introuvable ou incohérent pour le cycle actif — aucune mutation LPS/Epistemic post-Evidence.",
+    );
+  }
+  const ckcPromptSection = buildCkcCognitivePromptSection(ckcContent);
+
+  noraInvoked = true;
+  const analysis = await analyzePostEvidenceWithProvider(
+    {
+      projectId,
+      executionContractId: product.technicalDetail.executionContractId,
+      executionContractStatus: contractStatus,
+      executionContractAction: contractAction,
+      attemptId,
+      attemptStatus,
+      selectedAgentRef,
+      adapterRef,
+      executionMode,
+      realProcessInvoked,
+      evidenceId: product.evidenceId,
+      reviewBundleId: product.reviewBundleId,
+      technicalResultRef: product.technicalDetail.resultRef,
+      reservations: product.reservations,
+    },
+    { ckcPromptSection },
+  );
   if (analysis.ok) {
     analysisText = analysis.text;
     analysisProviderId = analysis.providerId;
   } else {
     // Never invent Nora analysis when unavailable.
+    // Provider failure after CKC resolve: still durable Recommendation base
+    // without fabricated cognitive text (W3-C honesty preserved).
     analysisUnavailableReason = analysis.message;
     analysisProviderId = analysis.providerId;
   }
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
index 9968f040..1c8710a5 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
@@ -1,10 +1,14 @@
 /**
  * V3.1-D1 — Cycle Type Catalog runtime contract (pure domain).
  *
- * Immutable projection of the fifteen Morris-adopted cycle types and their
+ * Immutable projection of the current Morris-adopted cycle types and their
  * mandatory CKC mapping metadata. No I/O, no resolver orchestration, no UI.
  *
- * Decisions: D-V3.1-CAT-01…08 (see framing doc 14).
+ * Content baseline (W3-D): fifteen entries remain the published product snapshot.
+ * Cardinality 15 / detailed=4 / synthetic=11 are NOT structural runtime invariants —
+ * catalog evolvability (US-P1-09) requires uniqueness + fail-closed rules only.
+ *
+ * Decisions: D-V3.1-CAT-01…08 (see framing doc 14) · W3-D ADAPT for US-P1-09.
  */

 import { isOaIdentifier } from "./invariants";
@@ -13,10 +17,16 @@ import { CAPITALIZATION_CYCLE_TYPE_ID } from "./types";
 /** Contract version of the static catalog snapshot. */
 export const CYCLE_TYPE_CATALOG_VERSION = "0.1.0-v3.1-d1" as const;

-/** Canonical Git path of the fifteen-cycles synthetic CKC map. */
+/**
+ * Canonical Git path of the historical synthetic CKC map (method provenance).
+ * Product runtime SoT remains the Product DoctrinePackage / Product CKC index.
+ */
 export const CKC_SYNTHETIC_MAP_PATH =
   "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md" as const;

+/** Current published product catalog entry count (content baseline — not a validator invariant). */
+export const CYCLE_TYPE_CATALOG_BASELINE_ENTRY_COUNT = 15 as const;
+
 /** Method candidate document used for doctrinal provenance. */
 export const METHOD_CYCLES_DOC_PATH =
   "method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md" as const;
@@ -53,7 +63,7 @@ export type CycleTypeCkcMapping = {
   primaryReference: string;
   /**
    * Fallback policy:
-   * - synthetic_map: use fifteen-cycles synthetic map
+   * - synthetic_map: use historical synthetic map (method provenance)
    * - none: synthetic primary with no further fallback (fail-closed if invalid)
    */
   fallbackPolicy: "synthetic_map" | "none";
@@ -123,7 +133,8 @@ function methodRef(section: string): string {

 /**
  * Immutable catalog entries — Morris-adopted CAT-I1 IDs.
- * Order is displayOrder / methodCycleNumber 1…15.
+ * Current content baseline uses displayOrder / methodCycleNumber 1…15.
+ * Validator no longer treats that cardinality as a structural invariant (W3-D / US-P1-09).
  */
 const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
   Object.freeze({
@@ -356,30 +367,17 @@ const ALLOWED_PRIMARY_LEVELS: ReadonlySet<string> = new Set([
   "synthetic",
 ]);

-const CANONICAL_ONE_TO_FIFTEEN: readonly number[] = Object.freeze([
-  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
-]);
-
-/** Exact membership of the closed set {1…15}. */
-function isExactOneToFifteen(values: ReadonlySet<number>): boolean {
-  if (values.size !== 15) {
-    return false;
-  }
-  for (const n of CANONICAL_ONE_TO_FIFTEEN) {
-    if (!values.has(n)) {
-      return false;
-    }
-  }
-  return true;
-}
-
-function isIntegerInOneToFifteen(value: number): boolean {
-  return Number.isInteger(value) && value >= 1 && value <= 15;
+/** Positive integer used for methodCycleNumber / displayOrder (no closed upper bound). */
+function isPositiveInteger(value: number): boolean {
+  return Number.isInteger(value) && value >= 1;
 }

 /**
  * Pure validation of a catalog snapshot (used by tests / future governance).
  * Does not mutate production data. Returns issues — never throws on invalid entries.
+ *
+ * W3-D / US-P1-09: structural cardinality (15 / 4 detailed / 11 synthetic / exact 1…15)
+ * is intentionally NOT enforced. Uniqueness, lifecycle, and fail-closed CKC mapping rules remain.
  */
 export function validateCycleTypeCatalog(
   catalog: CycleTypeCatalog,
@@ -394,10 +392,10 @@ export function validateCycleTypeCatalog(
     });
   }

-  if (entries.length !== 15) {
+  if (entries.length < 1) {
     issues.push({
       code: "COUNT",
-      message: `expected 15 entries, got ${entries.length}`,
+      message: `expected at least 1 catalog entry, got ${entries.length}`,
     });
   }

@@ -411,8 +409,6 @@ export function validateCycleTypeCatalog(
   const keys = new Set<string>();
   const numbers = new Set<number>();
   const orders = new Set<number>();
-  let detailedCount = 0;
-  let syntheticCount = 0;

   for (const entry of entries) {
     if (!isOaIdentifier(entry.cycleTypeId)) {
@@ -450,10 +446,10 @@ export function validateCycleTypeCatalog(
       });
     }
     numbers.add(entry.methodCycleNumber);
-    if (!isIntegerInOneToFifteen(entry.methodCycleNumber)) {
+    if (!isPositiveInteger(entry.methodCycleNumber)) {
       issues.push({
         code: "METHOD_NUMBER_RANGE",
-        message: `methodCycleNumber out of range 1…15 for ${entry.cycleTypeId}: ${String(entry.methodCycleNumber)}`,
+        message: `methodCycleNumber must be a positive integer for ${entry.cycleTypeId}: ${String(entry.methodCycleNumber)}`,
       });
     }

@@ -464,10 +460,10 @@ export function validateCycleTypeCatalog(
       });
     }
     orders.add(entry.displayOrder);
-    if (!isIntegerInOneToFifteen(entry.displayOrder)) {
+    if (!isPositiveInteger(entry.displayOrder)) {
       issues.push({
         code: "DISPLAY_ORDER_RANGE",
-        message: `displayOrder out of range 1…15 for ${entry.cycleTypeId}: ${String(entry.displayOrder)}`,
+        message: `displayOrder must be a positive integer for ${entry.cycleTypeId}: ${String(entry.displayOrder)}`,
       });
     }

@@ -536,7 +532,6 @@ export function validateCycleTypeCatalog(
         message: `unknown primaryLevel for ${entry.cycleTypeId}: ${String(entry.ckc.primaryLevel)}`,
       });
     } else if (entry.ckc.primaryLevel === "detailed") {
-      detailedCount += 1;
       if (
         entry.ckc.fallbackPolicy !== "synthetic_map" ||
         entry.ckc.fallbackReference !== CKC_SYNTHETIC_MAP_PATH
@@ -547,7 +542,6 @@ export function validateCycleTypeCatalog(
         });
       }
     } else if (entry.ckc.primaryLevel === "synthetic") {
-      syntheticCount += 1;
       if (entry.ckc.primaryReference !== CKC_SYNTHETIC_MAP_PATH) {
         issues.push({
           code: "CKC_SYNTHETIC_REF",
@@ -586,19 +580,6 @@ export function validateCycleTypeCatalog(
     }
   }

-  if (!isExactOneToFifteen(numbers)) {
-    issues.push({
-      code: "METHOD_NUMBER_SET",
-      message: "methodCycleNumber set must be exactly 1…15",
-    });
-  }
-  if (!isExactOneToFifteen(orders)) {
-    issues.push({
-      code: "DISPLAY_ORDER_SET",
-      message: "displayOrder set must be exactly 1…15",
-    });
-  }
-
   if (!ids.has(CAPITALIZATION_CYCLE_TYPE_ID)) {
     issues.push({
       code: "CAPITALIZATION_MISSING",
@@ -611,19 +592,6 @@ export function validateCycleTypeCatalog(
     });
   }

-  if (detailedCount !== 4) {
-    issues.push({
-      code: "DETAILED_COUNT",
-      message: `expected 4 detailed CKC mappings, got ${detailedCount}`,
-    });
-  }
-  if (syntheticCount !== 11) {
-    issues.push({
-      code: "SYNTHETIC_COUNT",
-      message: `expected 11 synthetic CKC mappings, got ${syntheticCount}`,
-    });
-  }
-
   // Cross-entry alias collisions (shared alias between two entries).
   const aliasOwners = new Map<string, string>();
   for (const entry of entries) {
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 793c550e..86968b39 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -64,6 +64,25 @@ export class FakeConversationProvider implements ConversationProvider {
       throw new Error("FAKE_PROVIDER_ERROR");
     }

+    // Explicit scripted replies win over content-marker specialization (W3-C
+    // correction tests inject deterministic Nora strings).
+    if (this.scripted !== undefined) {
+      const historyLen = messages.length;
+      const text =
+        this.scripted[this.callCount - 1] ??
+        `[TEST/FAKE · NON LIVE] Réponse fake #${this.callCount} (historique=${historyLen}). Echo: « ${(lastUser?.content ?? "").slice(0, 80)} »`;
+      return {
+        text,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+
     if (
       messages.some((m) =>
         m.role === "system" &&
@@ -73,6 +92,17 @@ export class FakeConversationProvider implements ConversationProvider {
       // Specialized Fake CKC cognition keys off CONTENT markers only.
       // CKC IDs (ckc:studio:*) must never trigger specialized behavior (R1-01).
       const joined = messages.map((m) => m.content).join("\n").toLowerCase();
+      const hasFraming =
+        joined.includes("intention") &&
+        (joined.includes("périmètre") ||
+          joined.includes("perimetre") ||
+          joined.includes("besoin réel") ||
+          joined.includes("besoin reel"));
+      const hasQa =
+        joined.includes("verdict evidence-based") ||
+        joined.includes("claims interdits") ||
+        joined.includes("confirmation bias") ||
+        joined.includes("green ci");
       const hasSecurity =
         joined.includes("risque résiduel") ||
         joined.includes("risque residuel") ||
@@ -83,6 +113,19 @@ export class FakeConversationProvider implements ConversationProvider {
         joined.includes("scope creep") ||
         joined.includes("implémentation bornée") ||
         joined.includes("implementation bornee");
+      const hasExtensionProbe = joined.includes("w3d_extension_probe_marker");
+      if (hasExtensionProbe) {
+        return {
+          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — W3D_EXTENSION_PROBE_MARKER : type d'extension test-only via même chemin cognitif. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
+          usage: {
+            inputTokens: 10 * this.callCount,
+            outputTokens: 5 * this.callCount,
+            totalTokens: 15 * this.callCount,
+            model: "fake-test-model",
+            providerResponseId: `fake-resp-${this.callCount}`,
+          },
+        };
+      }
       if (hasSecurity) {
         return {
           text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — posture adversarial : risque résiduel majeures → HumanDecision explicite ; secret en repo → STOP. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
@@ -107,6 +150,30 @@ export class FakeConversationProvider implements ConversationProvider {
           },
         };
       }
+      if (hasQa) {
+        return {
+          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — verdict evidence-based : claims interdits sans preuve ; refuser confirmation bias / green CI = validé. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
+          usage: {
+            inputTokens: 10 * this.callCount,
+            outputTokens: 5 * this.callCount,
+            totalTokens: 15 * this.callCount,
+            model: "fake-test-model",
+            providerResponseId: `fake-resp-${this.callCount}`,
+          },
+        };
+      }
+      if (hasFraming) {
+        return {
+          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — cadrage : clarifier intention et périmètre utile avant conception ; séparer besoin réel et solution présumée. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
+          usage: {
+            inputTokens: 10 * this.callCount,
+            outputTokens: 5 * this.callCount,
+            totalTokens: 15 * this.callCount,
+            model: "fake-test-model",
+            providerResponseId: `fake-resp-${this.callCount}`,
+          },
+        };
+      }
       return {
         text: "[TEST/FAKE · NON LIVE] RECOMMANDATION générique sans guidance CKC package résolu.",
         usage: {
```

### Nouveau fichier — w3dFullCkcCatalog.test.ts (complet)

```typescript
// @vitest-environment node
/**
 * W3-D — FULL CKC TRACK + CATALOG EVOLVABILITY (US-P1-09 + US-P1-14).
 * Deterministic product-native proof · FakeConversationProvider only · no REAL.
 * Proof ceiling: DETERMINISTIC PRODUCT-NATIVE PROVEN ≠ READY FOR REAL.
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  buildCkcCognitivePromptSection,
  computeCkcSemanticFingerprint,
  loadProductCkcCognitiveContent,
  reasonWithResolvedCkcContext,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import { analyzePostEvidenceWithProvider } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
import {
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_BASELINE_ENTRY_COUNT,
  CYCLE_TYPE_CATALOG_VERSION,
  CKC_SYNTHETIC_MAP_PATH,
  METHOD_CYCLES_DOC_PATH,
  listCycleTypes,
  projectCatalogFingerprint,
  serializeCatalogFingerprint,
  validateCycleTypeCatalog,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import {
  computeProductCkcIndexDigest,
  findProductCkcIndexEntry,
  loadProductCkcIndexSync,
  validateProductCkcIndex,
  type ProductCkcIndex,
} from "@/lib/oa/doctrine/product/productCkcIndex";
import { computeManifestDigest } from "@/lib/oa/doctrine/domain/digest";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

const PRODUCT_REGISTRY = resolveProductDoctrineRegistryRoot();

const REPRESENTATIVE_CAUSAL_TYPES = [
  {
    cycleTypeId: "cyc:framing",
    expectReco: /intention|périmètre|besoin réel/i,
    label: "framing",
  },
  {
    cycleTypeId: "cyc:delivery",
    expectReco: /anti scope creep/i,
    label: "delivery",
  },
  {
    cycleTypeId: "cyc:security",
    expectReco: /adversarial|risque résiduel|secret/i,
    label: "security",
  },
  {
    cycleTypeId: "cyc:qa-validation",
    expectReco: /verdict evidence-based|claims interdits|confirmation bias/i,
    label: "qa-validation",
  },
] as const;

function sha256File(content: string): `sha256:${string}` {
  return `sha256:${createHash("sha256").update(content, "utf8").digest("hex")}`;
}

function cloneCatalog(
  mutate: (entries: CycleTypeDefinition[]) => CycleTypeDefinition[],
): CycleTypeCatalog {
  return {
    version: CYCLE_TYPE_CATALOG_VERSION,
    entries: mutate(
      CYCLE_TYPE_CATALOG.entries.map((entry) => ({
        ...entry,
        ckc: { ...entry.ckc },
        aliases: [...entry.aliases],
      })),
    ),
  };
}

function extensionCatalogEntry(): CycleTypeDefinition {
  return {
    cycleTypeId: "cyc:w3d-extension-probe",
    canonicalKey: "w3d-extension-probe",
    label: "Extension probe",
    shortDescription: "Test-only catalog evolvability probe",
    displayOrder: 16,
    lifecycleStatus: "active",
    methodCycleNumber: 16,
    methodReference: `${METHOD_CYCLES_DOC_PATH} §w3d-probe`,
    ckc: {
      mandatory: true,
      primaryLevel: "synthetic",
      primaryReference: CKC_SYNTHETIC_MAP_PATH,
      fallbackPolicy: "none",
      executionAuthority: false,
      doctrineStatus: "method-candidate",
      unavailableBehavior: "fail-closed",
    },
    aliases: [],
  };
}

/**
 * Test-only extended product registry — same FilesystemDoctrinePackageRepository
 * + loadProductCkcCognitiveContent production path. Never a product cycle 16.
 */
function materializeExtendedProductRegistry(): {
  registryRoot: string;
  packagePin: typeof DEFAULT_PRODUCT_DOCTRINE_PIN;
  cleanup: () => void;
} {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w3d-ext-"));
  const srcRoot = PRODUCT_REGISTRY;
  const relDir = "packages/pkg-sfia-studio-doctrine-v3-1.0.0";
  fs.cpSync(srcRoot, tmp, { recursive: true });

  const pkgDir = path.join(tmp, relDir);
  const artifactRel = "ckc/16-w3d-extension-probe.md";
  const markdown = `# Studio CKC — W3-D extension probe (TEST ONLY)

## Finalité

Exerciser l'évolutivité catalogue via W3D_EXTENSION_PROBE_MARKER sans moteur dédié.

## Nora posture & guidance

### Guidance (condensé)

- W3D_EXTENSION_PROBE_MARKER
- Recommendation seulement — jamais HumanDecision
`;
  fs.writeFileSync(path.join(pkgDir, artifactRel), markdown, "utf8");

  const indexPath = path.join(pkgDir, "ckc-index.json");
  const rawIndex = JSON.parse(fs.readFileSync(indexPath, "utf8")) as ProductCkcIndex & {
    digest?: string;
  };
  const entries = [
    ...rawIndex.entries,
    {
      cycleTypeId: "cyc:w3d-extension-probe",
      ckcId: "ckc:studio:w3d-extension-probe",
      contractVersion: "0.1.0",
      artifactFile: artifactRel,
      sourceDigest: sha256File(markdown),
    },
  ];
  const withoutDigest = {
    schemaVersion: rawIndex.schemaVersion,
    contractVersion: rawIndex.contractVersion,
    entries,
  };
  const indexDigest = computeProductCkcIndexDigest(withoutDigest);
  const nextIndex = { ...withoutDigest, digest: indexDigest };
  expect(validateProductCkcIndex(nextIndex)).toBeNull();
  fs.writeFileSync(indexPath, `${JSON.stringify(nextIndex, null, 2)}\n`, "utf8");

  const manifestPath = path.join(pkgDir, "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as Record<
    string,
    unknown
  >;
  const sources = (manifest.sources as Array<Record<string, unknown>>).map(
    (source) =>
      source.doctrineSourceRef === "src:product-ckc-index"
        ? { ...source, digest: indexDigest }
        : source,
  );
  const { digest: _old, ...manifestBody } = manifest;
  void _old;
  const nextManifestBody = { ...manifestBody, sources };
  const packageDigest = computeManifestDigest(
    nextManifestBody as Parameters<typeof computeManifestDigest>[0],
  );
  const nextManifest = { ...nextManifestBody, digest: packageDigest };
  fs.writeFileSync(
    manifestPath,
    `${JSON.stringify(nextManifest, null, 2)}\n`,
    "utf8",
  );

  const registryPath = path.join(tmp, "registry.json");
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf8")) as {
    schemaVersion: string;
    entries: Array<Record<string, unknown>>;
  };
  registry.entries = registry.entries.map((entry) =>
    entry.doctrinePackageId === DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId
      ? { ...entry, digest: packageDigest }
      : entry,
  );
  fs.writeFileSync(registryPath, `${JSON.stringify(registry, null, 2)}\n`, "utf8");

  return {
    registryRoot: tmp,
    packagePin: {
      ...DEFAULT_PRODUCT_DOCTRINE_PIN,
      digest: packageDigest,
    },
    cleanup: () => fs.rmSync(tmp, { recursive: true, force: true }),
  };
}

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  setConversationProviderForTests(null);
  cleanupW2TempDirs();
});

describe("W3-D US-P1-09 — catalog evolvability", () => {
  it("X-W3D-01/02: baseline fifteen still valid; 15 is not structural", () => {
    expect(CYCLE_TYPE_CATALOG.entries).toHaveLength(
      CYCLE_TYPE_CATALOG_BASELINE_ENTRY_COUNT,
    );
    expect(validateCycleTypeCatalog(CYCLE_TYPE_CATALOG)).toEqual([]);
    const source = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../lib/oa/cycle/domain/cycleTypeCatalog.ts",
      ),
      "utf8",
    );
    expect(source).not.toMatch(/entries\.length\s*===\s*15/);
    expect(source).not.toMatch(/detailedCount\s*!==\s*4/);
    expect(source).not.toMatch(/syntheticCount\s*!==\s*11/);
    expect(source).not.toMatch(/METHOD_NUMBER_SET/);
    expect(source).not.toMatch(/isExactOneToFifteen/);
  });

  it("X-W3D-03: extended catalog validates + fingerprints via same production helpers", () => {
    const extended = cloneCatalog((entries) => {
      entries.push(extensionCatalogEntry());
      return entries;
    });
    expect(extended.entries).toHaveLength(16);
    expect(validateCycleTypeCatalog(extended)).toEqual([]);
    const fp = projectCatalogFingerprint(extended);
    expect(fp).toHaveLength(16);
    expect(serializeCatalogFingerprint(extended)).toContain(
      "cyc:w3d-extension-probe",
    );
  });

  it("X-W3D-03: extension type traverses same cognitive load + Nora path (test package)", async () => {
    const fixture = materializeExtendedProductRegistry();
    try {
      const content = loadProductCkcCognitiveContent({
        registryRoot: fixture.registryRoot,
        cycleTypeId: "cyc:w3d-extension-probe",
        packagePin: fixture.packagePin,
      });
      expect(content).toBeTruthy();
      expect(content?.ckcId).toBe("ckc:studio:w3d-extension-probe");
      expect(content?.markdown).toContain("W3D_EXTENSION_PROBE_MARKER");
      if (!content) return;
      const treatment = await reasonWithResolvedCkcContext({
        userContent: "Instruire Options",
        projectSummary: "name=W3D-ext",
        intentSummary: "cyc:w3d-extension-probe",
        ckcPromptSection: buildCkcCognitivePromptSection(content),
      });
      expect(treatment.recommendation).toMatch(/W3D_EXTENSION_PROBE_MARKER/);
      expect(treatment.recommendation).toContain("PAS UNE DÉCISION HUMAINE");
      expect(treatment.recommendation).not.toMatch(/ckc:studio:/);
    } finally {
      fixture.cleanup();
    }
  });
});

describe("W3-D US-P1-09/14 — full applicable coverage + package consistency", () => {
  it("X-W3D-04/05: every active catalog entry has resolvable Product CKC binding", () => {
    const loaded = loadProductCkcIndexSync({
      registryRoot: PRODUCT_REGISTRY,
      doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    const active = listCycleTypes();
    expect(active.length).toBeGreaterThanOrEqual(1);
    for (const entry of active) {
      const binding = findProductCkcIndexEntry(loaded.index, entry.cycleTypeId);
      expect(binding, `silent uncovered: ${entry.cycleTypeId}`).toBeTruthy();
      const content = loadProductCkcCognitiveContent({
        registryRoot: PRODUCT_REGISTRY,
        cycleTypeId: entry.cycleTypeId,
        packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      });
      expect(content, `unresolvable CKC content: ${entry.cycleTypeId}`).toBeTruthy();
      expect(content?.ckcId).toBe(binding?.ckcId);
      expect(content?.provenance.contentDigest).toBe(binding?.sourceDigest);
      expect(content?.provenance.packageDigest).toBe(
        DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
      );
    }
  });

  it("X-W3D-05 negative: unknown / uncovered cycleType fails closed (no silent)", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:does-not-exist",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).toBeNull();
  });
});

describe("W3-D US-P1-14 — semantic consumption + causality", () => {
  it("X-W3D-06: consumed=true alone is insufficient — content must reach Nora", async () => {
    const control = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: null,
    });
    expect(control.recommendation.toLowerCase()).toContain("générique");

    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(delivery).toBeTruthy();
    if (!delivery) return;
    const treatment = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: buildCkcCognitivePromptSection(delivery),
    });
    expect(treatment.recommendation.toLowerCase()).toMatch(/anti scope creep/);
    expect(treatment.recommendation).not.toBe(control.recommendation);
  });

  it("X-W3D-07: representative materially different CKCs differentiate Nora outputs", async () => {
    const outputs: string[] = [];
    for (const sample of REPRESENTATIVE_CAUSAL_TYPES) {
      const content = loadProductCkcCognitiveContent({
        registryRoot: PRODUCT_REGISTRY,
        cycleTypeId: sample.cycleTypeId,
        packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      });
      expect(content, sample.label).toBeTruthy();
      if (!content) return;
      const reasoned = await reasonWithResolvedCkcContext({
        userContent: "Instruire Options",
        projectSummary: `name=${sample.label}`,
        intentSummary: sample.cycleTypeId,
        ckcPromptSection: buildCkcCognitivePromptSection(content),
      });
      expect(reasoned.recommendation).toMatch(sample.expectReco);
      expect(reasoned.recommendation).toContain("PAS UNE DÉCISION HUMAINE");
      outputs.push(reasoned.recommendation);
    }
    const unique = new Set(outputs);
    expect(unique.size).toBe(REPRESENTATIVE_CAUSAL_TYPES.length);
  });

  it("X-W3D-06/08/11: W2 product path proposes with CKC attribution, no HD/authority", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("w3d-p1.sqlite"),
      idPrefix: "w3dp1",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "w3d",
      cycleTypeId: "cyc:delivery",
    });
    const proposed = await proposeW2OptionsForProject(
      runtime,
      seeded.projectId,
    );
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.ckcCognitionCompletedBeforeMutation).toBe(true);
    expect(proposed.recommendation.rationale.toLowerCase()).toMatch(
      /anti scope creep/,
    );
    expect(proposed.recommendation.isHumanDecision).toBe(false);
    expect(proposed.recommendation.promotesTrajectory).toBe(false);
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
    expect(proposed.recommendation.ckcProvenance?.ckcId).toBe(
      "ckc:studio:delivery",
    );
    expect(proposed.recommendation.ckcProvenance?.contentDigest).toMatch(
      /^sha256:/,
    );
    expect(proposed.recommendation.ckcProvenance?.semanticFingerprint).toMatch(
      /^sha256:/,
    );
    expect(proposed.recommendation.rationale).not.toMatch(/\[CKC:/);
    expect(proposed.recommendation.rationale).not.toMatch(/ckc:studio:/);
  });

  it("X-W3D-06: post-Evidence Nora consumes same CKC cognitive seam", async () => {
    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(delivery).toBeTruthy();
    if (!delivery) return;
    const analysis = await analyzePostEvidenceWithProvider(
      {
        projectId: "prj:w3d",
        executionContractId: "ec:w3d",
        executionContractStatus: "executed",
        executionContractAction: "noop",
        attemptId: "att:w3d",
        attemptStatus: "succeeded",
        selectedAgentRef: "agent:test",
        adapterRef: "adp:test",
        executionMode: "fixture",
        realProcessInvoked: false,
        evidenceId: "ev:w3d",
        reviewBundleId: "rb:w3d",
        technicalResultRef: null,
        reservations: [],
      },
      { ckcPromptSection: buildCkcCognitivePromptSection(delivery) },
    );
    expect(analysis.ok).toBe(true);
    if (!analysis.ok) return;
    expect(analysis.text.toLowerCase()).toMatch(/anti scope creep/);
    expect(analysis.text).toContain("PAS UNE DÉCISION HUMAINE");
  });
});

describe("W3-D fail-closed / negative / no method fallback", () => {
  it("X-W3D-09: provider cognition failure blocks W2 mutation", async () => {
    setConversationProviderForTests(
      new FakeConversationProvider({ failOnCall: 1 }),
    );
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("w3d-fail.sqlite"),
      idPrefix: "w3dfail",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "fail",
      cycleTypeId: "cyc:delivery",
    });
    const proposed = await proposeW2OptionsForProject(
      runtime,
      seeded.projectId,
    );
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROVIDER_COGNITION_FAILED");
    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);
  });

  it("X-W3D-09: CKC unavailable blocks W2 mutation", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("w3d-uncov.sqlite"),
      idPrefix: "w3dunc",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "uncov",
      cycleTypeId: "cyc:delivery",
    });
    // Corrupt pin digest → load fails closed
    const oa = runtime.oa!;
    const { resolveW2QualificationInputs } = await import(
      "@/features/project-assistant/w2/qualificationInputs"
    );
    const { proposeTrajectoryOptions } = await import(
      "@/features/project-assistant/w2/proposeTrajectoryOptions"
    );
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: {
        ...qualification.qualification.packagePin,
        digest: ("sha256:" + "0".repeat(64)) as `sha256:${string}`,
      },
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("CKC_UNAVAILABLE");
  });

  it("X-W3D-10: no method/v2.6 fallback strings on cognitive path", () => {
    const ckcCtx = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/f2/ckcCognitiveContext.ts",
      ),
      "utf8",
    );
    const propose = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/w2/proposeTrajectoryOptions.ts",
      ),
      "utf8",
    );
    const post = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/w2/w3cPostEvidenceLoop.ts",
      ),
      "utf8",
    );
    for (const src of [ckcCtx, propose, post]) {
      expect(src).not.toMatch(/sfia-fast-track/);
      expect(src).not.toMatch(/method\/sfia/);
      expect(src).not.toMatch(/v2\.6.*fallback/i);
    }
  });

  it("X-W3D-11: provenance chain reconstructible for representative type", () => {
    const loaded = loadProductCkcIndexSync({
      registryRoot: PRODUCT_REGISTRY,
      packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:security",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    })!;
    const binding = findProductCkcIndexEntry(loaded.index, "cyc:security")!;
    expect(content.provenance.doctrinePackageId).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    );
    expect(content.provenance.packageVersion).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    );
    expect(content.provenance.packageDigest).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    );
    expect(loaded.indexDigest).toBe(loaded.index.digest);
    expect(content.ckcId).toBe(binding.ckcId);
    expect(content.provenance.contentDigest).toBe(binding.sourceDigest);
    expect(computeCkcSemanticFingerprint(content.provenance)).toMatch(
      /^sha256:/,
    );
  });
});
```

---

## 9. Commandes exécutées + résultats

| Commande | Résultat |
|---|---|
| `npm test` cycleTypeCatalog + w3dFullCkcCatalog | **PASS** 60 tests |
| `npm test` OA cycle/** + productCkcIndex + Phase B + W3-C loop/correction + W3-D | **PASS** 404 tests / 26 files |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** (0 warnings) |
| `npm run build` | **PASS** (après correction import client: pas d'import ckcCognitiveContext depuis postEvidenceNoraAnalysis) |
| `git diff --check` | **PASS** (clean) |

E2E Playwright /studio W3-C: assertions CKC ajoutées; suite non rejouée dans cette passe (dépendance serveur/runtime). Preuve product-native couverte par: W2 E2E historique Phase B harvest + W3-C loop vitest full materialize path (`anti scope creep` post-Evidence) + E2E assert code prêt.

---

## 10. Matrice X-W3D-01…16

| ID | Statut | Preuve |
|---|---|---|
| X-W3D-01 CURRENT BASELINE | **PASS** | catalog 15 valide; Phase B 24 PASS; W3-C non-régression |
| X-W3D-02 15 NOT STRUCTURAL | **PASS** | validator sans ===15 / METHOD_NUMBER_SET / DETAILED_COUNT / SYNTHETIC_COUNT |
| X-W3D-03 EVOLVABILITY | **PASS** | catalog N+1 valide; test package extension → même `loadProductCkcCognitiveContent` + Nora |
| X-W3D-04 PACKAGE/CATALOG CONSISTENCY | **PASS** | Product CKC index + pin digests; fail-closed mismatch |
| X-W3D-05 FULL APPLICABLE COVERAGE | **PASS** | `listCycleTypes()` × Product CKC load; unknown → null |
| X-W3D-06 CKC REAL SEMANTIC CONSUMPTION | **PASS** | control générique vs treatment; post-Evidence CKC-informed |
| X-W3D-07 COGNITIVE CAUSALITY | **PASS** | framing/delivery/security/qa outputs distincts attribuables |
| X-W3D-08 AUTHORITY SEPARATION | **PASS** | Recommendation only; no HD/auto trajectory/authority |
| X-W3D-09 FAIL CLOSED | **PASS** | provider fail / CKC unavailable bloquent mutations W2; post-Evidence CKC_UNAVAILABLE avant LPS |
| X-W3D-10 NO METHOD FALLBACK | **PASS** | source scan + product package SoT |
| X-W3D-11 PROVENANCE | **PASS** | package→index→ckcId→sourceDigest→fingerprint |
| X-W3D-12 NO PARALLEL ARCHITECTURE | **PASS** | ADAPT only; no new engine/store/resolver/orchestrator |
| X-W3D-13 PRODUCT-NATIVE | **PASS** | W2 /studio Phase B harvest + W3-C materialize vitest + E2E asserts CKC |
| X-W3D-14 W1/W2/W3 A-B-C NON REGRESSION | **PASS** | 404 targeted regression PASS |
| X-W3D-15 PROOF CEILING | **PASS** | DETERMINISTIC PRODUCT-NATIVE PROVEN only |
| X-W3D-16 W3 TRAJECTORY | **PASS** | recommander uniquement W3 FINAL CLOSURE QUALIFICATION |

---

## 11. Fake/Real Qualification

| Champ | Valeur |
|---|---|
| Applicable | OUI |
| Frontière | conversation / reasoning provider |
| Fake | FakeConversationProvider (même chemin product cognition) |
| REAL | NON — OUT |
| Niveau entrée | DETERMINISTIC PROVEN (bounded W2 Phase B) |
| Niveau sortie | **DETERMINISTIC PRODUCT-NATIVE PROVEN — FULL W3-D** |
| GO REAL | NON |

---

## 12. Preuves ciblées

### Couverture catalogue
Paramétrée sur toutes les entrées `active` de `listCycleTypes()`; chaque `cycleTypeId` résout un binding Product CKC + contenu markdown + digests alignés.

### Évolutivité
Validator accepte entrée 16; fingerprint générique; fixture registry test-only avec `cyc:w3d-extension-probe` traverse `loadProductCkcCognitiveContent` + `reasonWithResolvedCkcContext` — **pas** d'entrée produit réelle.

### Causalité CKC→Nora
Représentatif justifié par contenu CKC distinct: framing / delivery / security / qa-validation → 4 outputs Fake distincts content-marker.

### Fail-closed
Provider fail → `PROVIDER_COGNITION_FAILED` sans trajectoire; pin digest corrupt → `CKC_UNAVAILABLE`; post-Evidence sans CKC → fail-closed avant LPS.

### Provenance
Chaîne package pin → indexDigest → ckcId → sourceDigest → semanticFingerprint reconstructible.

---

## 13. Réserves / dettes / realism gaps

- E2E Playwright W3-C non rejoué runtime dans cette passe (code assert ajouté; preuve vitest materialize product path OK).
- Marker string `SFIA Studio CKC COGNITIVE REASONING` dupliqué en literal dans `postEvidenceNoraAnalysis` pour éviter import Node vers client bundle — garder sync manuelle.
- Package produit publié **non modifié** (pas de cycle 16 produit).
- W3 **reste ouverte** — pas de fermeture W3 dans ce cycle.
- REAL / FinOps / W4 / runtime v3 adoption: OUT.

**Décisions Morris requises maintenant:** aucune structurante. Intégration Git (commit/push/PR) sous gate séparée après review ChatGPT.

---

## 14. Verdict

**PASS — W3-D IMPLEMENTATION + EXIT PROOF CANDIDATE COMPLETE — DETERMINISTIC PRODUCT-NATIVE PROVEN — READY FOR CHATGPT REVIEW — W3 REMAINS OPEN — NEXT CANDIDATE: W3 FINAL CLOSURE QUALIFICATION.**

Project Git actions cette passe: commit=NON · push=NON · PR=NON · merge=NON.
