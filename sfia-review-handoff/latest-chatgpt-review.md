# Review Pack FULL — MATERIALITY-BLOCK-01 correction (republication avec diffs)

| Field | Value |
| --- | --- |
| **Horodatage** | 2026-10-17 10:47:16 CEST |
| **Nature** | Republication handoff — diffs complets + preuves négatives + qualification der16 |
| **Branche Product** | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| **HEAD** | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| **origin/main** | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| **Product dirty FP (excl. .tmp)** | `ae0f68e69d3733c7f7e76c62bee9a2c6c2063248a26081af76b3ca272bf58a4a` |
| **Handoff précédent correction** | `029dea9d` |
| **Verdict Cursor** | **CORRECTION IMPLEMENTED — DETERMINISTIC PASS — READY FOR CHATGPT REVIEW** (contenu enrichi pour verdict technique) |

---

## 1. Objectif de cette republication

Fournir à ChatGPT :
1. les **diffs / contenus complets et exploitables** des quatre fichiers du correctif MATERIALITY-BLOCK-01 ;
2. les **preuves des tests négatifs** (MB01 C1–C4 + A/B) ;
3. les **éléments de qualification** des deux échecs `p6.der16` (E12 F2 structural, R5 static decisionRefs).

---

## 2. Local Git Truth

- Repo / branche / HEAD cohérents avec le périmètre connu.
- Staged vide.
- Dirty préexistant M-HD-01/02 **préservé** ; delta correction inchangé depuis pass précédent.
- HQA SQLite non mutée par cette republication.
- Aucun commit/push Product.

---

## 3. Les quatre fichiers du correctif

| # | Fichier | Nature |
| --- | --- | --- |
| 1 | `w2/resolveGenericPrepareDocumentaryTarget.ts` | **NOUVEAU** — contenu intégral ci-dessous |
| 2 | `lib/oa/project/domain/artifactTargetRouting.ts` | **MODIFIÉ** — diff unifié vs HEAD |
| 3 | `w2/prepareGenericExecutionContractDraft.ts` | **MODIFIÉ** — diff materiality-only (extrait) + sections numérotées WT ; note dirty M-HD superposé |
| 4 | `__tests__/…/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts` | **NOUVEAU** — contenu intégral |

### Note sur le fichier 3

`prepareGenericExecutionContractDraft.ts` porte aussi le dirty M-HD-01 (HD verified / `decisionRefs: [...verifiedDecisionRefs]`).
Le diff **materiality-only** ci-dessous filtre les hunks contenant les marqueurs MATERIALITY-BLOCK / documentaryBind / resolvedAuthoritative*.
Les sections WT numérotées permettent la relecture ligne à ligne du raccordement.

---

## 4. FICHIER 1 — resolveGenericPrepareDocumentaryTarget.ts (INTÉGRAL)

```typescript
/**
 * MATERIALITY-BLOCK-01 — bind Generic PREPARE documentary missions to the
 * existing Product artifact target routing (pathRoot + cycle workspace).
 *
 * Reuses enrichExecutionIntentFromBinding / resolveArtifactTargetUnderCycleWorkspace.
 * Does NOT invent Git identity, widen pathRoot, authorize, or execute.
 * Nora path/filename proposals remain NON-AUTHORITATIVE candidates (D-PC-09).
 */

import { enrichExecutionIntentFromBinding } from "../f2/activeCycleGovernedContinuation";
import type { IntentAnalysisDto } from "../f2/types";
import type { ExecutionIntentPayload } from "../f2/executionIntentSchema";
import {
  extractArtifactFileNameCandidate,
  resolveNonAuthoritativeDocumentaryArtifactLeafCandidate,
} from "@/lib/oa/project/domain/artifactTargetRouting";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { collectConcreteMissionPaths } from "./resolveAuthoritativeProductMateriality";

export type GenericPrepareDocumentaryTargetResolution =
  | {
      readonly kind: "not_documentary";
      readonly analysis: IntentAnalysisDto;
      readonly resolvedAuthoritativeTargetPath: null;
      readonly documentaryTargetResolution: "not_applicable";
    }
  | {
      readonly kind: "already_concrete";
      readonly analysis: IntentAnalysisDto;
      readonly resolvedAuthoritativeTargetPath: string | null;
      readonly documentaryTargetResolution:
        | "not_applicable"
        | "unresolved_nora_candidate";
    }
  | {
      readonly kind: "resolved";
      readonly analysis: IntentAnalysisDto;
      readonly resolvedAuthoritativeTargetPath: string;
      readonly cycleWorkspaceRoot: string | null;
      readonly artifactFileName: string;
      readonly documentaryTargetResolution: "resolved_product";
      readonly proposedTargetPath: string | null;
      readonly proposedArtifactFileName: string | null;
    }
  | {
      readonly kind: "needs_clarification";
      readonly analysis: IntentAnalysisDto;
      readonly code: string;
      readonly message: string;
      readonly documentaryTargetResolution: "unresolved_needs_clarification";
      readonly resolvedAuthoritativeTargetPath: null;
    }
  | {
      readonly kind: "blocked";
      readonly analysis: IntentAnalysisDto;
      readonly code: string;
      readonly message: string;
      readonly documentaryTargetResolution: "blocked";
      readonly resolvedAuthoritativeTargetPath: null;
    };

function normalizeHaystack(
  parts: readonly (string | null | undefined)[],
): string {
  return parts
    .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
    .join("\n")
    .normalize("NFC")
    .toLowerCase()
    .replace(/[àáâäã]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôöõ]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/ç/g, "c");
}

/**
 * Documentary eligibility for Generic PREPARE destination composition.
 * Broader than ACGC Artifact-continuation verbs (includes « réaliser ») and
 * includes expectedOutcome/scope — without reclassifying code-like missions.
 */
export function isGenericPrepareDocumentaryMission(
  analysis: IntentAnalysisDto,
): boolean {
  if (!analysis.parseOk) return false;
  if (analysis.executionIntent?.intentKind === "docs_write") return true;

  const hay = normalizeHaystack([
    analysis.objective,
    analysis.rephrasedRequest,
    analysis.expectedOutcome,
    analysis.scope,
    analysis.executionIntent?.artifactBrief,
    analysis.executionIntent?.targetPath,
    ...(analysis.executionIntent?.contentRequirements ?? []),
  ]);
  if (!hay.trim()) return false;
  if (
    /\b(parlons|parler|qu'est[- ]ce|explique|expliquer|explique-moi)\b/.test(
      hay,
    ) ||
    /\?\s*$/.test(hay.trim())
  ) {
    return false;
  }
  // Code / refactor missions stay non-documentary even with a repo frame.
  // Note: pending-offer rebuild may set intentKind "other" while text remains
  // documentary — do not treat intentKind=other as an automatic non-doc gate.
  if (
    /\b(refactor|refactore|module|fonction|classe|api|endpoint|service|compil)\b/.test(
      hay,
    ) &&
    !/\b(document|note|markdown|\.md\b|livrable|specification|cahier)\b/.test(
      hay,
    )
  ) {
    return false;
  }

  const productionVerb =
    /\bmaterialis/.test(hay) ||
    /\b(realiser|produire|produis|ecrire|rediger|deposer|creer|prepare|preparer|consolider|capitaliser)\b/.test(
      hay,
    );
  const documentaryObject =
    /\b(livrable|fichier|document|note|markdown|\.md\b|specification|cahier|memoire)\b/.test(
      hay,
    );
  const repoOrDeliverableFrame =
    /\b(depot|repo|repository|git|workspace|projet|cycle|emplacement|reference)\b/.test(
      hay,
    ) || Boolean(analysis.executionIntent?.targetPath?.trim());

  return productionVerb && documentaryObject && repoOrDeliverableFrame;
}

function leafFromAnalysis(analysis: IntentAnalysisDto): string | null {
  const ei = analysis.executionIntent;
  return extractArtifactFileNameCandidate({
    artifactFileName: ei?.artifactFileName,
    targetPath: ei?.targetPath,
  });
}

/**
 * When documentary WHERE is absent, compose a server-owned destination under
 * Project.pathRoot + active cycle repositoryWorkspaceSegment before materiality.
 */
export async function resolveGenericPrepareDocumentaryTarget(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly analysis: IntentAnalysisDto;
}): Promise<GenericPrepareDocumentaryTargetResolution> {
  const analysis = input.analysis;
  if (!isGenericPrepareDocumentaryMission(analysis)) {
    return {
      kind: "not_documentary",
      analysis,
      resolvedAuthoritativeTargetPath: null,
      documentaryTargetResolution: "not_applicable",
    };
  }

  const existingPaths = collectConcreteMissionPaths(analysis);
  // Already has concrete WHERE (path-like scopeIn / target / outputs) — do not
  // re-route or force docs_write taxonomy. Nora targetPath stays a candidate
  // until a separate Product resolution path marks it authoritative.
  if (existingPaths.length > 0) {
    return {
      kind: "already_concrete",
      analysis,
      resolvedAuthoritativeTargetPath: null,
      documentaryTargetResolution: analysis.executionIntent?.targetPath?.trim()
        ? "unresolved_nora_candidate"
        : "not_applicable",
    };
  }

  const projectResult = await input.oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (!projectResult.ok) {
    return {
      kind: "blocked",
      analysis,
      code: "PRODUCT_PROJECT_UNAVAILABLE",
      message:
        "Projet Product indisponible — destination documentaire non résoluble (fail-closed).",
      documentaryTargetResolution: "blocked",
      resolvedAuthoritativeTargetPath: null,
    };
  }

  const binding = projectResult.project.repositoryBinding ?? null;
  if (!binding?.identity?.trim() || !binding.pathRoot?.trim()) {
    return {
      kind: "blocked",
      analysis,
      code: "REPOSITORY_BINDING_UNAVAILABLE",
      message:
        "Repository binding Product absent ou incomplet — destination documentaire non résoluble (fail-closed).",
      documentaryTargetResolution: "blocked",
      resolvedAuthoritativeTargetPath: null,
    };
  }

  const requestedCycleId = input.cycleInstanceId?.trim() || null;
  let activeCycleTypeId: string | null = null;
  if (!requestedCycleId) {
    // Pathless documentary under automatic workspaces requires an active cycle
    // segment (01-cadrage, …). Binding checked first; then cycle.
    return {
      kind: "needs_clarification",
      analysis,
      code: "DOCUMENTARY_TARGET_CYCLE_REQUIRED",
      message:
        "Mission documentaire sans chemin concret et sans cycle actif — précisez un fichier Markdown sûr ou activez le cycle de workspace avant préparation.",
      documentaryTargetResolution: "unresolved_needs_clarification",
      resolvedAuthoritativeTargetPath: null,
    };
  }

  const cycleLoad = await input.oa.cycleServices.getCycle.execute({
    cycleInstanceId: requestedCycleId,
  });
  if (!cycleLoad.ok || cycleLoad.cycle.projectId !== input.projectId) {
    return {
      kind: "blocked",
      analysis,
      code: "ACTIVE_CYCLE_INCOHERENT",
      message:
        "Cycle demandé incohérent avec le projet — destination documentaire non résoluble (fail-closed).",
      documentaryTargetResolution: "blocked",
      resolvedAuthoritativeTargetPath: null,
    };
  }
  if (cycleLoad.cycle.status !== "active") {
    return {
      kind: "blocked",
      analysis,
      code: "ACTIVE_CYCLE_NOT_ACTIVE",
      message:
        "Cycle référencé non actif — destination documentaire non résoluble (fail-closed).",
      documentaryTargetResolution: "blocked",
      resolvedAuthoritativeTargetPath: null,
    };
  }
  activeCycleTypeId = cycleLoad.cycle.cycleTypeId;

  const proposedTargetPath =
    analysis.executionIntent?.targetPath?.trim() || null;
  const proposedArtifactFileName =
    analysis.executionIntent?.artifactFileName?.trim() || null;

  const leaf =
    leafFromAnalysis(analysis) ||
    resolveNonAuthoritativeDocumentaryArtifactLeafCandidate({
      textFields: [
        analysis.objective,
        analysis.rephrasedRequest,
        analysis.expectedOutcome,
        analysis.scope,
        analysis.executionIntent?.artifactBrief,
      ],
      cycleTypeId: activeCycleTypeId,
    });

  if (!leaf && !proposedTargetPath) {
    return {
      kind: "needs_clarification",
      analysis,
      code: "DOCUMENTARY_TARGET_FILENAME_REQUIRED",
      message:
        "Mission documentaire sans fichier Markdown déterminable — indiquez un nom de fichier sûr (ex. note-de-cadrage.md) ; le serveur composera le chemin sous le workspace Project et le cycle actif.",
      documentaryTargetResolution: "unresolved_needs_clarification",
      resolvedAuthoritativeTargetPath: null,
    };
  }

  const seedIntent: ExecutionIntentPayload = {
    ...(analysis.executionIntent ?? {}),
    intentKind: "docs_write",
    artifactFileName: leaf ?? proposedArtifactFileName,
    targetPath: proposedTargetPath,
    // Candidate capability only — envelope still resolved at PREPARE.
    requiredCapabilities:
      analysis.executionIntent?.requiredCapabilities?.length
        ? analysis.executionIntent.requiredCapabilities
        : ["cap:cursor.docs_write"],
  };

  const enriched = enrichExecutionIntentFromBinding({
    analysisIntent: seedIntent,
    binding,
    activeCycleTypeId,
  });

  if (enriched.needsTargetClarification || !enriched.executionIntent?.targetPath) {
    return {
      kind: "needs_clarification",
      analysis: {
        ...analysis,
        executionIntent: enriched.executionIntent,
      },
      code: "DOCUMENTARY_TARGET_UNRESOLVED",
      message:
        "Destination documentaire non résoluble sous pathRoot/cycle workspace — chemin invalide, hors périmètre, ou clarification Pilote requise (fail-closed, aucun rewrite silencieux).",
      documentaryTargetResolution: "unresolved_needs_clarification",
      resolvedAuthoritativeTargetPath: null,
    };
  }

  const resolvedPath = enriched.executionIntent.targetPath.trim();
  const resolvedLeaf =
    enriched.executionIntent.artifactFileName?.trim() || leaf || "";

  return {
    kind: "resolved",
    analysis: {
      ...analysis,
      executionIntent: enriched.executionIntent,
    },
    resolvedAuthoritativeTargetPath: resolvedPath,
    cycleWorkspaceRoot:
      enriched.executionIntent.scopeIn?.[0]?.trim() || null,
    artifactFileName: resolvedLeaf,
    documentaryTargetResolution: "resolved_product",
    proposedTargetPath,
    proposedArtifactFileName,
  };
}
```

---

## 5. FICHIER 2 — artifactTargetRouting.ts (DIFF vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts b/projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts
index bd48b2f7..511e8f22 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts
@@ -443,5 +443,56 @@ export function assessProjectWorkspaceCollision(input: {
   return "ambiguous_collision";
 }

+/**
+ * Non-authoritative Markdown leaf cue from mission wording (D-PC-09).
+ * Used when Nora did not supply a safe leaf / in-bounds path.
+ * Not a task catalog — ambiguous wording returns null (clarification).
+ *
+ * Framing note convention (cyc:framing + note|document|livrable + cadrage):
+ * `note-de-cadrage.md` under the cycle workspace segment.
+ */
+export function resolveNonAuthoritativeDocumentaryArtifactLeafCandidate(input: {
+  readonly textFields: readonly (string | null | undefined)[];
+  readonly cycleTypeId?: string | null;
+}): string | null {
+  const hay = input.textFields
+    .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
+    .join("\n")
+    .normalize("NFC")
+    .toLowerCase()
+    .replace(/[àáâäã]/g, "a")
+    .replace(/[èéêë]/g, "e")
+    .replace(/[ìíîï]/g, "i")
+    .replace(/[òóôöõ]/g, "o")
+    .replace(/[ùúûü]/g, "u")
+    .replace(/ç/g, "c");
+  if (!hay.trim()) return null;
+
+  const framingCycle = input.cycleTypeId?.trim() === "cyc:framing";
+  if (
+    (framingCycle || /\bcadrage\b/.test(hay)) &&
+    /\b(note|document|livrable)\b/.test(hay) &&
+    /\bcadrage\b/.test(hay)
+  ) {
+    return "note-de-cadrage.md";
+  }
+  if (
+    /\bspecification\b/.test(hay) &&
+    /\bfonctionnelle\b/.test(hay)
+  ) {
+    return "specification-fonctionnelle.md";
+  }
+  if (/\bcahier\b/.test(hay) && /\bcharges\b/.test(hay)) {
+    return "cahier-des-charges.md";
+  }
+  if (/\bspecification\b/.test(hay)) {
+    return "specification.md";
+  }
+  if (/\blivrable\b/.test(hay) && /\breference\b/.test(hay)) {
+    return "livrable-de-reference.md";
+  }
+  return null;
+}
+
 /** Re-export normalize for callers that must share identical path rules. */
 export { normalizeRepoRelativePath as normalizeArtifactRepoRelativePath };
```

---

## 6. FICHIER 3 — prepareGenericExecutionContractDraft.ts

### 6.1 Diff materiality-only (hunks filtrés vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 37daec50..995d5120 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -1,14 +1,14 @@

@@ -64,6 +64,16 @@ import {
   resolveGenericPrepareCapabilityEnvelope,
   type GenericPrepareCapabilityResolution,
 } from "./genericPrepareCapabilityEnvelope";
+import {
+  mapReversibilityExpectationToOa,
+} from "./genericMissionSubject";
+import {
+  verifyGenericMissionHumanDecisionForContract,
+  verifyGenericMissionHumanDecisionForPrepare,
+} from "./verifyGenericMissionHumanDecisionForPrepare";
+import {
+  resolveGenericPrepareDocumentaryTarget,
+} from "./resolveGenericPrepareDocumentaryTarget";

 export {
   GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,

@@ -540,30 +561,77 @@ export function getCurrentGenericPrepareOffer(

 /**
  * Build (+ optional Validate) an inspectable generalist ExecutionContract.
- * Empty decisionRefs when non-structural. Never records HumanDecision.
+ * Empty decisionRefs when non-structural. Structural resume requires verified HD.
+ * Never records HumanDecision. Never auto-EXECUTE.
  */
 export async function prepareGenericExecutionContractDraft(
   input: PrepareGenericExecutionContractDraftInput,
 ): Promise<PrepareGenericExecutionContractDraftResult> {
   const readiness = assessGenericMissionPrepareReadiness(input.analysis);
-  if (readiness.structuralBlocked) {
+  if (readiness.missingFields.length > 0) {
     return {
       ok: false,
-      code: "STRUCTURAL_HUMAN_DECISION_REQUIRED",
-      message:
-        "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
+      code: "MISSION_INSUFFICIENTLY_QUALIFIED",
+      message: `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
     };
   }
-  if (!readiness.ready) {
+
+  // MATERIALITY-BLOCK-01 — documentary missions without concrete WHERE reuse
+  // Product artifact target routing (pathRoot + cycle segment) BEFORE materiality.
+  const documentaryBind = await resolveGenericPrepareDocumentaryTarget({
+    oa: input.oa,
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    analysis: input.analysis,
+  });
+  if (
+    documentaryBind.kind === "needs_clarification" ||
+    documentaryBind.kind === "blocked"
+  ) {
     return {
       ok: false,
-      code: "MISSION_INSUFFICIENTLY_QUALIFIED",
-      message: `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
+      code: documentaryBind.code,
+      message: documentaryBind.message,
     };
   }
+  const analysis = documentaryBind.analysis;
+  const productDocumentaryTargetResolution =
+    documentaryBind.documentaryTargetResolution;
+  const resolvedAuthoritativeTargetPath =
+    documentaryBind.kind === "resolved"
+      ? documentaryBind.resolvedAuthoritativeTargetPath
+      : documentaryBind.resolvedAuthoritativeTargetPath;
+
+  const decisionId = input.decisionId?.trim() || null;
+  let verifiedDecisionRefs: string[] = [];
+  let verifiedPresentationDigest: string | null = null;
+  let verifiedMissionSubjectId: string | null = null;
+  let sealedHdEffects: {
+    readonly requestedOperation: string | null;
+    readonly reversibilityExpectation:
+      | "reversible"
+      | "irreversible"
+      | "unknown"
+      | null;
+    readonly risks: readonly string[];
+    readonly reservations: readonly string[];
+    readonly intentKind: string | null;
+    readonly artifactType: string | null;
+    readonly expectedOutputs: readonly string[];
+    readonly stopConditions: readonly string[];
+    readonly repositoryBindingIdentity: string | null;
+    readonly pathRoot: string | null;
+    readonly impactSignals: {
+      readonly structuralChange: boolean;
+      readonly securityImpact: boolean;
+      readonly architectureImpact: boolean;
+      readonly dataImpact: boolean;
+      readonly irreversible: boolean;
+    };
+  } | null = null;

   const proposedCapabilities =
-    input.analysis.executionIntent?.requiredCapabilities ?? [];
+    analysis.executionIntent?.requiredCapabilities ?? [];
   const capabilityResolution =
     resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
   if (!capabilityResolution.ok) {

@@ -605,42 +719,55 @@ export async function prepareGenericExecutionContractDraft(
   }

   const objective = (
-    input.analysis.objective ??
-    input.analysis.rephrasedRequest ??
+    analysis.objective ??
+    analysis.rephrasedRequest ??
     ""
   ).trim();
-  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
-  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
-  const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
-  const outOfScope = input.analysis.outOfScope ?? [];
+  const expectedOutcome = (analysis.expectedOutcome ?? objective).trim();
+  const scopeNarrative = (analysis.scope ?? expectedOutcome).trim();
+  // Concrete WHERE after Product documentary bind (may include cycle workspace root).
+  const scopeIn = analysis.executionIntent?.scopeIn ?? [];
+  const outOfScope = analysis.outOfScope ?? [];
   const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;
-  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
-  // D-PC-09 / Pass 02 regularization — Nora path/filename/expectedOutputs are
-  // candidates only until Product resolves an authoritative destination.
-  // Generic PREPARE does not yet compose a server-owned documentary targetPath,
-  // so contract.expectedOutputs must NOT list unresolved candidates as if they
-  // were authorized destinations. Keep a readable documentary outcome instead.
+  // Nora proposals from the inbound analysis only — never promote Product-resolved
+  // path as a Nora "proposal" (D-PC-09 / MATERIALITY-BLOCK-01).
+  const noraMissionEffects = extractMissionEffectsFromAnalysis(input.analysis);
+  const missionEffects =
+    documentaryBind.kind === "resolved"
+      ? {
+          ...extractMissionEffectsFromAnalysis(analysis),
+          proposedTargetPath: noraMissionEffects.proposedTargetPath,
+          proposedArtifactFileName: noraMissionEffects.proposedArtifactFileName,
+        }
+      : extractMissionEffectsFromAnalysis(analysis);
   const proposedDocumentaryOutputCandidates = [
-    ...missionEffects.expectedOutputs,
-    ...(missionEffects.proposedTargetPath
-      ? [missionEffects.proposedTargetPath]
+    ...noraMissionEffects.expectedOutputs,
+    ...(noraMissionEffects.proposedTargetPath
+      ? [noraMissionEffects.proposedTargetPath]
       : []),
-    ...(missionEffects.proposedArtifactFileName
-      ? [missionEffects.proposedArtifactFileName]
+    ...(noraMissionEffects.proposedArtifactFileName
+      ? [noraMissionEffects.proposedArtifactFileName]
       : []),
   ].filter((v, i, arr) => v.trim().length > 0 && arr.indexOf(v) === i);
-  const documentaryTargetResolution:
-    | "unresolved_nora_candidate"
-    | "not_applicable" =
-    missionEffects.intentKind === "docs_write" ||
-    proposedDocumentaryOutputCandidates.length > 0
-      ? "unresolved_nora_candidate"
-      : "not_applicable";
-  // Contract expectedOutputs = inspectable requested outcome, never unresolved path authority.
-  const contractExpectedOutputs = [expectedOutcome];
+  const documentaryTargetResolution =
+    productDocumentaryTargetResolution === "resolved_product"
+      ? "resolved_product"
+      : productDocumentaryTargetResolution === "unresolved_nora_candidate"
+        ? "unresolved_nora_candidate"
+        : missionEffects.intentKind === "docs_write" ||
+            proposedDocumentaryOutputCandidates.length > 0
+          ? "unresolved_nora_candidate"
+          : "not_applicable";
+  // Contract expectedOutputs: Product-resolved path when available; else outcome text.
+  // Never list unresolved Nora path candidates as authorized destinations.
+  const contractExpectedOutputs = sealedHdEffects
+    ? [...sealedHdEffects.expectedOutputs]
+    : resolvedAuthoritativeTargetPath
+      ? [resolvedAuthoritativeTargetPath]
+      : [expectedOutcome];

   // D — source grounding / trusted launch when mission implies repository work.
-  const impliesGit = missionImpliesRepositoryWork(input.analysis);
+  const impliesGit = missionImpliesRepositoryWork(analysis);
   let launchInputs: Record<string, unknown> = {};
   let sourcesToRead: string[] = [];
   let sourceGroundingPayload: unknown = null;

@@ -788,25 +951,54 @@ export async function prepareGenericExecutionContractDraft(
       scopeOut: outOfScope,
       sourcesToRead,
       cursorDeterminesHow: true,
-      prepareWithoutSystematicHumanDecision: true,
+      prepareWithoutSystematicHumanDecision: verifiedDecisionRefs.length === 0,
+      verifiedGenericMissionHumanDecisionId: verifiedDecisionRefs[0] ?? null,
+      missionSubjectId: verifiedMissionSubjectId,
+      presentationDigest: verifiedPresentationDigest,
       humanDecisionCreated: false,
       executionAttemptCreated: false,
       prepareStatus: "draft_inspectable",
       materialityFacts,
-      // Intent fidelity — inspectable mission effects (Pass 02).
-      intentKind: missionEffects.intentKind,
-      artifactType: missionEffects.artifactType,
+      // Intent fidelity — inspectable mission effects (Pass 02 / EC↔HD).
+      intentKind: stampedIntentKind,
+      artifactType: stampedArtifactType,
+      requestedOperation: stampedRequestedOperation,
+      reversibilityExpectation: stampedRevExpectation,
+      risks: sealedOrAnalysisRisks,
+      reservations: sealedOrAnalysisReservations,
+      repositoryBindingIdentity: stampedRepoIdentity,
+      pathRoot: stampedPathRoot,
+      // Historical accepted impact signals (not a live Nora re-qualification).
+      impactSignals: sealedHdEffects?.impactSignals ??
+        (analysis.signals
+          ? {
+              structuralChange: Boolean(analysis.signals.structuralChange),
+              securityImpact: Boolean(analysis.signals.securityImpact),
+              architectureImpact: Boolean(analysis.signals.architectureImpact),
+              dataImpact: Boolean(analysis.signals.dataImpact),
+              irreversible: Boolean(analysis.signals.irreversible),
+            }
+          : null),
       artifactBrief: missionEffects.artifactBrief,
       contentRequirements: [...missionEffects.contentRequirements],
       validationExpectations: [...missionEffects.validationExpectations],
       // D-PC-09 — Nora path/name candidates are NON-AUTHORITATIVE.
-      proposedTargetPath: missionEffects.proposedTargetPath,
-      proposedArtifactFileName: missionEffects.proposedArtifactFileName,
+      proposedTargetPath: noraMissionEffects.proposedTargetPath,
+      proposedArtifactFileName: noraMissionEffects.proposedArtifactFileName,
       proposedDocumentaryOutputCandidates,
       proposedTargetPathAuthoritative: false,
       documentaryTargetResolution,
-      // No authoritative resolved path at Generic PREPARE in this surface.
-      resolvedAuthoritativeTargetPath: null,
+      // Server-owned destination when Product routing resolved it (≠ Nora candidate).
+      resolvedAuthoritativeTargetPath,
+      ...(resolvedAuthoritativeTargetPath
+        ? {
+            targetPath: resolvedAuthoritativeTargetPath,
+            artifactFileName:
+              documentaryBind.kind === "resolved"
+                ? documentaryBind.artifactFileName
+                : missionEffects.proposedArtifactFileName,
+          }
+        : {}),
       proposedRequiredCapabilities: [
         ...capabilityResolution.proposedCapabilities,
       ],
```

### 6.2 Sections worktree numérotées (raccordement)

```

===== prepareGenericExecutionContractDraft.ts L65-85 =====
65|  type GenericPrepareCapabilityResolution,
66|} from "./genericPrepareCapabilityEnvelope";
67|import {
68|  mapReversibilityExpectationToOa,
69|} from "./genericMissionSubject";
70|import {
71|  verifyGenericMissionHumanDecisionForContract,
72|  verifyGenericMissionHumanDecisionForPrepare,
73|} from "./verifyGenericMissionHumanDecisionForPrepare";
74|import {
75|  resolveGenericPrepareDocumentaryTarget,
76|} from "./resolveGenericPrepareDocumentaryTarget";
77|
78|export {
79|  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
80|  isCapabilityWithinGenericPrepareEnvelope,
81|  resolveGenericPrepareCapabilityEnvelope,
82|};
83|export type { GenericPrepareCapabilityResolution };
84|
85|export type GenericMissionPrepareReadiness = {

===== prepareGenericExecutionContractDraft.ts L560-650 =====
560|}
561|
562|/**
563| * Build (+ optional Validate) an inspectable generalist ExecutionContract.
564| * Empty decisionRefs when non-structural. Structural resume requires verified HD.
565| * Never records HumanDecision. Never auto-EXECUTE.
566| */
567|export async function prepareGenericExecutionContractDraft(
568|  input: PrepareGenericExecutionContractDraftInput,
569|): Promise<PrepareGenericExecutionContractDraftResult> {
570|  const readiness = assessGenericMissionPrepareReadiness(input.analysis);
571|  if (readiness.missingFields.length > 0) {
572|    return {
573|      ok: false,
574|      code: "MISSION_INSUFFICIENTLY_QUALIFIED",
575|      message: `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
576|    };
577|  }
578|
579|  // MATERIALITY-BLOCK-01 — documentary missions without concrete WHERE reuse
580|  // Product artifact target routing (pathRoot + cycle segment) BEFORE materiality.
581|  const documentaryBind = await resolveGenericPrepareDocumentaryTarget({
582|    oa: input.oa,
583|    projectId: input.projectId,
584|    cycleInstanceId: input.cycleInstanceId,
585|    analysis: input.analysis,
586|  });
587|  if (
588|    documentaryBind.kind === "needs_clarification" ||
589|    documentaryBind.kind === "blocked"
590|  ) {
591|    return {
592|      ok: false,
593|      code: documentaryBind.code,
594|      message: documentaryBind.message,
595|    };
596|  }
597|  const analysis = documentaryBind.analysis;
598|  const productDocumentaryTargetResolution =
599|    documentaryBind.documentaryTargetResolution;
600|  const resolvedAuthoritativeTargetPath =
601|    documentaryBind.kind === "resolved"
602|      ? documentaryBind.resolvedAuthoritativeTargetPath
603|      : documentaryBind.resolvedAuthoritativeTargetPath;
604|
605|  const decisionId = input.decisionId?.trim() || null;
606|  let verifiedDecisionRefs: string[] = [];
607|  let verifiedPresentationDigest: string | null = null;
608|  let verifiedMissionSubjectId: string | null = null;
609|  let sealedHdEffects: {
610|    readonly requestedOperation: string | null;
611|    readonly reversibilityExpectation:
612|      | "reversible"
613|      | "irreversible"
614|      | "unknown"
615|      | null;
616|    readonly risks: readonly string[];
617|    readonly reservations: readonly string[];
618|    readonly intentKind: string | null;
619|    readonly artifactType: string | null;
620|    readonly expectedOutputs: readonly string[];
621|    readonly stopConditions: readonly string[];
622|    readonly repositoryBindingIdentity: string | null;
623|    readonly pathRoot: string | null;
624|    readonly impactSignals: {
625|      readonly structuralChange: boolean;
626|      readonly securityImpact: boolean;
627|      readonly architectureImpact: boolean;
628|      readonly dataImpact: boolean;
629|      readonly irreversible: boolean;
630|    };
631|  } | null = null;
632|
633|  const proposedCapabilities =
634|    analysis.executionIntent?.requiredCapabilities ?? [];
635|  const capabilityResolution =
636|    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
637|  if (!capabilityResolution.ok) {
638|    return {
639|      ok: false,
640|      code: capabilityResolution.code,
641|      message: `Capacités hors enveloppe généraliste Product — clarification ou gate requis : ${capabilityResolution.elevated.join(", ")}. Aucune HumanDecision artificielle ; aucune élévation silencieuse.`,
642|    };
643|  }
644|
645|  const materialityResolution = await resolveAuthoritativeProductMateriality({
646|    oa: input.oa,
647|    projectId: input.projectId,
648|    analysis,
649|    cycleInstanceId: input.cycleInstanceId,
650|  });

===== prepareGenericExecutionContractDraft.ts L720-820 =====
720|
721|  const objective = (
722|    analysis.objective ??
723|    analysis.rephrasedRequest ??
724|    ""
725|  ).trim();
726|  const expectedOutcome = (analysis.expectedOutcome ?? objective).trim();
727|  const scopeNarrative = (analysis.scope ?? expectedOutcome).trim();
728|  // Concrete WHERE after Product documentary bind (may include cycle workspace root).
729|  const scopeIn = analysis.executionIntent?.scopeIn ?? [];
730|  const outOfScope = analysis.outOfScope ?? [];
731|  const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;
732|  // Nora proposals from the inbound analysis only — never promote Product-resolved
733|  // path as a Nora "proposal" (D-PC-09 / MATERIALITY-BLOCK-01).
734|  const noraMissionEffects = extractMissionEffectsFromAnalysis(input.analysis);
735|  const missionEffects =
736|    documentaryBind.kind === "resolved"
737|      ? {
738|          ...extractMissionEffectsFromAnalysis(analysis),
739|          proposedTargetPath: noraMissionEffects.proposedTargetPath,
740|          proposedArtifactFileName: noraMissionEffects.proposedArtifactFileName,
741|        }
742|      : extractMissionEffectsFromAnalysis(analysis);
743|  const proposedDocumentaryOutputCandidates = [
744|    ...noraMissionEffects.expectedOutputs,
745|    ...(noraMissionEffects.proposedTargetPath
746|      ? [noraMissionEffects.proposedTargetPath]
747|      : []),
748|    ...(noraMissionEffects.proposedArtifactFileName
749|      ? [noraMissionEffects.proposedArtifactFileName]
750|      : []),
751|  ].filter((v, i, arr) => v.trim().length > 0 && arr.indexOf(v) === i);
752|  const documentaryTargetResolution =
753|    productDocumentaryTargetResolution === "resolved_product"
754|      ? "resolved_product"
755|      : productDocumentaryTargetResolution === "unresolved_nora_candidate"
756|        ? "unresolved_nora_candidate"
757|        : missionEffects.intentKind === "docs_write" ||
758|            proposedDocumentaryOutputCandidates.length > 0
759|          ? "unresolved_nora_candidate"
760|          : "not_applicable";
761|  // Contract expectedOutputs: Product-resolved path when available; else outcome text.
762|  // Never list unresolved Nora path candidates as authorized destinations.
763|  const contractExpectedOutputs = sealedHdEffects
764|    ? [...sealedHdEffects.expectedOutputs]
765|    : resolvedAuthoritativeTargetPath
766|      ? [resolvedAuthoritativeTargetPath]
767|      : [expectedOutcome];
768|
769|  // D — source grounding / trusted launch when mission implies repository work.
770|  const impliesGit = missionImpliesRepositoryWork(analysis);
771|  let launchInputs: Record<string, unknown> = {};
772|  let sourcesToRead: string[] = [];
773|  let sourceGroundingPayload: unknown = null;
774|
775|  if (impliesGit) {
776|    const launch = await resolveTrustedProductLaunchContext({
777|      oa: input.oa,
778|      projectId: input.projectId,
779|      pinnedBaseHeadSha: input.pinnedBaseHeadSha,
780|      managedRepoRootBase: input.managedRepoRootBase,
781|    });
782|    if (!launch.ok) {
783|      return {
784|        ok: false,
785|        code: launch.code,
786|        message: launch.message,
787|      };
788|    }
789|    launchInputs = {
790|      ...launchContextAsContractInputs(launch.context),
791|      trustedLaunchContextPinnedAtPrepare: true,
792|    };
793|    // Declared READ sources only — mutation scopeIn is NOT a read claim
794|    // (search ≠ read). Empty declared → honesty NOT_APPLICABLE when no reader.
795|    const declaredReadSources: string[] = [];
796|    const sourceGrounding = await resolveContractSourceGroundingForPrepare({
797|      projectId: input.projectId,
798|      cycleInstanceId: cycleInstanceId ?? "",
799|      declaredSources: declaredReadSources,
800|      repositoryIdentity: launch.context.repositoryBindingIdentity,
801|      repositoryHeadSha: launch.context.baseHeadSha,
802|      reader: input.sourceGroundingReader ?? null,
803|    });
804|    const groundingHonest = assertContractSourceGroundingHonest(sourceGrounding);
805|    if (!groundingHonest.ok) {
806|      return {
807|        ok: false,
808|        code: groundingHonest.code,
809|        message: groundingHonest.message,
810|      };
811|    }
812|    sourceGroundingPayload = sourceGrounding;
813|    const groundedSourceRefs = sourceGrounding.readRefs
814|      .filter((ref) =>
815|        isCurrentFullRepositoryRead({
816|          ref,
817|          expectedRepositoryHeadSha: sourceGrounding.repositoryHeadSha,
818|          expectedCycleInstanceId: sourceGrounding.cycleInstanceId,
819|        }),
820|      )

===== prepareGenericExecutionContractDraft.ts L930-1010 =====
930|  const stampedRepoIdentity =
931|    sealedHdEffects?.repositoryBindingIdentity ??
932|    currentness?.repositoryIdentity ??
933|    null;
934|  const stampedPathRoot =
935|    sealedHdEffects?.pathRoot ?? currentness?.pathRoot ?? null;
936|  const oaReversibility = mapReversibilityExpectationToOa(stampedRevExpectation);
937|
938|  const built = await services.buildExecutionContract.execute({
939|    executionContractId,
940|    projectId: input.projectId,
941|    cycleInstanceId,
942|    decisionRefs: [...verifiedDecisionRefs],
943|    action: PRODUCT_CANONICAL_EXECUTION_ACTION,
944|    target: PRODUCT_CANONICAL_EXECUTION_TARGET,
945|    scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
946|    inputs: {
947|      objective,
948|      expectedOutcome,
949|      missionScopeNarrative: scopeNarrative,
950|      scopeIn,
951|      scopeOut: outOfScope,
952|      sourcesToRead,
953|      cursorDeterminesHow: true,
954|      prepareWithoutSystematicHumanDecision: verifiedDecisionRefs.length === 0,
955|      verifiedGenericMissionHumanDecisionId: verifiedDecisionRefs[0] ?? null,
956|      missionSubjectId: verifiedMissionSubjectId,
957|      presentationDigest: verifiedPresentationDigest,
958|      humanDecisionCreated: false,
959|      executionAttemptCreated: false,
960|      prepareStatus: "draft_inspectable",
961|      materialityFacts,
962|      // Intent fidelity — inspectable mission effects (Pass 02 / EC↔HD).
963|      intentKind: stampedIntentKind,
964|      artifactType: stampedArtifactType,
965|      requestedOperation: stampedRequestedOperation,
966|      reversibilityExpectation: stampedRevExpectation,
967|      risks: sealedOrAnalysisRisks,
968|      reservations: sealedOrAnalysisReservations,
969|      repositoryBindingIdentity: stampedRepoIdentity,
970|      pathRoot: stampedPathRoot,
971|      // Historical accepted impact signals (not a live Nora re-qualification).
972|      impactSignals: sealedHdEffects?.impactSignals ??
973|        (analysis.signals
974|          ? {
975|              structuralChange: Boolean(analysis.signals.structuralChange),
976|              securityImpact: Boolean(analysis.signals.securityImpact),
977|              architectureImpact: Boolean(analysis.signals.architectureImpact),
978|              dataImpact: Boolean(analysis.signals.dataImpact),
979|              irreversible: Boolean(analysis.signals.irreversible),
980|            }
981|          : null),
982|      artifactBrief: missionEffects.artifactBrief,
983|      contentRequirements: [...missionEffects.contentRequirements],
984|      validationExpectations: [...missionEffects.validationExpectations],
985|      // D-PC-09 — Nora path/name candidates are NON-AUTHORITATIVE.
986|      proposedTargetPath: noraMissionEffects.proposedTargetPath,
987|      proposedArtifactFileName: noraMissionEffects.proposedArtifactFileName,
988|      proposedDocumentaryOutputCandidates,
989|      proposedTargetPathAuthoritative: false,
990|      documentaryTargetResolution,
991|      // Server-owned destination when Product routing resolved it (≠ Nora candidate).
992|      resolvedAuthoritativeTargetPath,
993|      ...(resolvedAuthoritativeTargetPath
994|        ? {
995|            targetPath: resolvedAuthoritativeTargetPath,
996|            artifactFileName:
997|              documentaryBind.kind === "resolved"
998|                ? documentaryBind.artifactFileName
999|                : missionEffects.proposedArtifactFileName,
1000|          }
1001|        : {}),
1002|      proposedRequiredCapabilities: [
1003|        ...capabilityResolution.proposedCapabilities,
1004|      ],
1005|      capabilityResolution: capabilityResolution.resolution,
1006|      contractCapabilitySurface: PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
1007|      ...launchInputs,
1008|      ...(sourceGroundingPayload
1009|        ? { [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: sourceGroundingPayload }
1010|        : {}),
```

---

## 7. FICHIER 4 — p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts (INTÉGRAL)

```typescript
/**
 * MATERIALITY-BLOCK-01 — Generic PREPARE documentary destination bind.
 *
 * Pathless framing documentary mission + repositoryBinding + active Cadrage
 * → Product composes note-de-cadrage.md under pathRoot/01-cadrage before
 * materiality → inspectable EC. No HD. No Attempt. No Cursor REAL.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  rememberGenericPrepareRecommendation,
  analysisFromPendingGenericPrepareOffer,
  solicitGenericExecutionPrepare,
  getCurrentGenericPrepareOffer,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  isGenericPrepareDocumentaryMission,
  resolveGenericPrepareDocumentaryTarget,
} from "@/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget";
import { resolveNonAuthoritativeDocumentaryArtifactLeafCandidate } from "@/lib/oa/project/domain/artifactTargetRouting";
import { collectConcreteMissionPaths } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

describe("MATERIALITY-BLOCK-01 documentary Generic PREPARE bind", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let sessionDbPath: string;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("mat-block01-session.sqlite");
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("mat-block01-product.sqlite"),
      idPrefix: "mb01",
    });
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedFramingProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `MB01 ${suffix}`,
      objective: "Organisation des bénévoles (fixture)",
      context: "mat-block-01",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `MB${suffix.toUpperCase().slice(0, 4)}`,
      idempotencyKey: `idem:mb01-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const pathRoot = `projects/mb01-${suffix}`;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });

    const cycleInstanceId = `cyc:mb01-${suffix}`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:framing",
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
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-10-17T10:00:00.000Z",
      forceEnable: true,
    });
    if (!auth.ok) throw new Error("auth");
    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");
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
    if (!started.ok) throw new Error(`start: ${started.error?.detailCode}`);

    const identity = `acme/mb01-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot,
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa, pathRoot, identity };
  }

  const pathlessFramingMission = {
    objective:
      "Réaliser un document de cadrage du projet dans le dépôt Git, en consolidant besoins, objectifs et points ouverts.",
    expectedOutcome:
      "Un document de cadrage lisible et réutilisable, ajouté dans un emplacement documentaire approprié du dépôt.",
    scope:
      "Documentation du projet dans le dépôt Git ; chemin précis à déterminer après inspection. Exclure code et architecture.",
    contextNotes:
      "Le projet est en Cadrage actif. Version de travail à examiner avant validation. Ne pas clore le cycle.",
  };

  it("leaf convention — framing note/document de cadrage → note-de-cadrage.md", () => {
    expect(
      resolveNonAuthoritativeDocumentaryArtifactLeafCandidate({
        textFields: ["Réaliser un document de cadrage dans le dépôt"],
        cycleTypeId: "cyc:framing",
      }),
    ).toBe("note-de-cadrage.md");
    expect(
      resolveNonAuthoritativeDocumentaryArtifactLeafCandidate({
        textFields: ["Refactorer le module d'export"],
        cycleTypeId: "cyc:framing",
      }),
    ).toBeNull();
  });

  it("A — pathless framing documentary solicit → EC with Product target under 01-cadrage", async () => {
    const { projectId, cycleInstanceId, oa, pathRoot } =
      await seedFramingProject("a");
    const expectedTarget = `${pathRoot}/01-cadrage/note-de-cadrage.md`;
    const expectedCycleRoot = `${pathRoot}/01-cadrage`;

    const analysis = buildIntentAnalysisFromSolicitedMission(
      pathlessFramingMission,
    );
    expect(analysis.executionIntent).toBeNull();
    expect(collectConcreteMissionPaths(analysis)).toEqual([]);
    expect(isGenericPrepareDocumentaryMission(analysis)).toBe(true);

    const bind = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
    });
    expect(bind.kind).toBe("resolved");
    if (bind.kind !== "resolved") throw new Error("expected resolved");
    expect(bind.resolvedAuthoritativeTargetPath).toBe(expectedTarget);
    expect(bind.artifactFileName).toBe("note-de-cadrage.md");
    expect(bind.cycleWorkspaceRoot).toBe(expectedCycleRoot);

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId,
      mission: pathlessFramingMission,
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.code).toBe("GENERIC_PREPARE_DRAFTED");
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.materiality).not.toBe("unknown");

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.inputs?.documentaryTargetResolution).toBe(
      "resolved_product",
    );
    expect(loaded.contract.inputs?.resolvedAuthoritativeTargetPath).toBe(
      expectedTarget,
    );
    expect(loaded.contract.inputs?.targetPath).toBe(expectedTarget);
    expect(loaded.contract.inputs?.proposedTargetPathAuthoritative).toBe(false);
    expect(loaded.contract.inputs?.scopeIn).toEqual([expectedCycleRoot]);
    expect(loaded.contract.expectedOutputs).toContain(expectedTarget);
    expect(prep.executionAttemptCreated).toBe(false);
  });

  it("B — recommend offer then accept-GO prepare converges on same Product target", async () => {
    const { projectId, cycleInstanceId, oa, pathRoot } =
      await seedFramingProject("b");
    const expectedTarget = `${pathRoot}/01-cadrage/note-de-cadrage.md`;
    const analysis = buildIntentAnalysisFromSolicitedMission(
      pathlessFramingMission,
    );

    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
      sessionDbPath,
    });
    const offer = getCurrentGenericPrepareOffer(projectId, { sessionDbPath });
    expect(offer).toBeTruthy();
    // Offer may still lack concrete paths — Product resolves at PREPARE time.
    expect(offer!.scopeIn.length).toBe(0);

    const fromOffer = analysisFromPendingGenericPrepareOffer(offer!);
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: fromOffer,
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.contract.inputs?.resolvedAuthoritativeTargetPath).toBe(
      expectedTarget,
    );
    expect(prep.contract.inputs?.documentaryTargetResolution).toBe(
      "resolved_product",
    );
  });

  it("C1 — missing cycle / incoherent cycle fail-closed without inventing destination", async () => {
    const { projectId, oa, pathRoot } = await seedFramingProject("c1");
    const analysis = buildIntentAnalysisFromSolicitedMission(
      pathlessFramingMission,
    );
    const noCycle = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    expect(noCycle.kind).toBe("needs_clarification");
    if (noCycle.kind !== "needs_clarification") throw new Error("clarify");
    expect(noCycle.code).toBe("DOCUMENTARY_TARGET_CYCLE_REQUIRED");
    expect(JSON.stringify(noCycle)).not.toContain("note-de-cadrage");
    expect(JSON.stringify(noCycle)).not.toContain(pathRoot);

    const badCycle = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId: "cyc:mb01-does-not-exist",
      analysis,
    });
    expect(badCycle.kind).toBe("blocked");
    if (badCycle.kind !== "blocked") throw new Error("blocked");
    expect(badCycle.code).toBe("ACTIVE_CYCLE_INCOHERENT");

    const missingProject = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId: "prj:mb01-missing",
      cycleInstanceId: "cyc:mb01-c1",
      analysis,
    });
    expect(missingProject.kind).toBe("blocked");
    if (missingProject.kind !== "blocked") throw new Error("proj");
    expect(missingProject.code).toBe("PRODUCT_PROJECT_UNAVAILABLE");
  });

  it("C2 — invalid proposed path (traversal) → clarification, no basename salvage", async () => {
    const { projectId, cycleInstanceId, oa } = await seedFramingProject("trav");
    const analysis = buildIntentAnalysisFromSolicitedMission(
      pathlessFramingMission,
    );
    const withBadPath = {
      ...analysis,
      executionIntent: {
        intentKind: "docs_write" as const,
        targetPath: "../secret.md",
        scopeIn: [],
        scopeOut: [],
      },
    };
    // concrete path present (../secret.md has /) — already_concrete path;
    // materiality/authority must still fail closed at prepare.
    const paths = collectConcreteMissionPaths(withBadPath);
    expect(paths).toContain("../secret.md");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: withBadPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("must refuse");
    expect(JSON.stringify(prep)).not.toMatch(/01-cadrage\/secret\.md/);
  });

  it("C3 — non-documentary code-like mission is not forced to docs_write routing", async () => {
    const { projectId, cycleInstanceId, oa, pathRoot } =
      await seedFramingProject("code");
    const analysis = buildIntentAnalysisFromSolicitedMission({
      objective: "Refactorer le module d'export du projet",
      expectedOutcome: "Module simplifié",
      scope: "Code source du module d'export — pas de document",
    });
    expect(isGenericPrepareDocumentaryMission(analysis)).toBe(false);
    const bind = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
    });
    expect(bind.kind).toBe("not_documentary");
    expect(bind.analysis.executionIntent).toBeNull();
    // No invented framing note path.
    expect(JSON.stringify(bind)).not.toContain(`${pathRoot}/01-cadrage`);
  });

  it("C4 — pathless documentary without determinable leaf → clarification", async () => {
    const { projectId, cycleInstanceId, oa } = await seedFramingProject("ambig");
    const analysis = buildIntentAnalysisFromSolicitedMission({
      objective: "Réaliser un fichier Markdown dans le dépôt Git du projet",
      expectedOutcome: "Un fichier Markdown consultable",
      scope: "Documentation du dépôt Git — type de livrable non précisé",
    });
    expect(isGenericPrepareDocumentaryMission(analysis)).toBe(true);
    const bind = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
    });
    expect(bind.kind).toBe("needs_clarification");
    if (bind.kind !== "needs_clarification") throw new Error("expected clarify");
    expect(bind.code).toBe("DOCUMENTARY_TARGET_FILENAME_REQUIRED");
  });
});
```

---

## 8. Preuves tests — MB01 (nominal + négatifs)

### 8.1 Journal vitest (rejoué 2026-10-17 10:47:16 CEST)

```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/projects/sfia-studio/app

 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > leaf convention — framing note/document de cadrage → note-de-cadrage.md 38ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > A — pathless framing documentary solicit → EC with Product target under 01-cadrage 40ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > B — recommend offer then accept-GO prepare converges on same Product target 24ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > C1 — missing cycle / incoherent cycle fail-closed without inventing destination 19ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > C2 — invalid proposed path (traversal) → clarification, no basename salvage 19ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > C3 — non-documentary code-like mission is not forced to docs_write routing 20ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > C4 — pathless documentary without determinable leaf → clarification 20ms

 Test Files  1 passed (1)
      Tests  7 passed (7)
   Start at  10:46:42
   Duration  1.88s (transform 876ms, setup 49ms, collect 1.46s, tests 180ms, environment 0ms, prepare 37ms)

```

### 8.2 Matrice attendue / preuve

| Test | Attendu | Résultat |
| --- | --- | --- |
| leaf convention | `note-de-cadrage.md` pour document+cadrage+cyc:framing ; null pour refactor | PASS |
| A pathless framing solicit | EC ; `resolved_product` ; target `…/01-cadrage/note-de-cadrage.md` ; Attempt=0 ; HD=false | PASS |
| B offer→accept-GO | même `resolvedAuthoritativeTargetPath` | PASS |
| C1 no cycle | `DOCUMENTARY_TARGET_CYCLE_REQUIRED` ; pas de path inventé | PASS |
| C1 bad cycle | `ACTIVE_CYCLE_INCOHERENT` | PASS |
| C1 missing project | `PRODUCT_PROJECT_UNAVAILABLE` | PASS |
| C2 traversal `../secret.md` | PREPARE fail ; **aucun** `01-cadrage/secret.md` | PASS |
| C3 code-like | `not_documentary` ; pas de force docs_write / path cadrage | PASS |
| C4 leaf ambigu | `DOCUMENTARY_TARGET_FILENAME_REQUIRED` | PASS |

### 8.3 Non-régression liée (pass précédent, toujours valide)

- `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` : 7/7 PASS
- `projectWorkspaceArtifactRouting.d0.test.ts` : 26/26 PASS
- der16 E9/E10 subset : PASS

---

## 9. Qualification des deux échecs der16

### 9.1 Journal vitest (rejoué, filtres E12 F2 + R5)

```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/projects/sfia-studio/app

 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E8 — tool registered only when solicitPrepare injected; no taxonomy params; Agents-local
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E8 — invoke → Generic PREPARE (EC draft/validated), executionAttemptCreated false, no Attempt, no HD, no cycle
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E8 — tool cannot force an Attempt flag; hostile solicit result is normalized; insufficient mission fails honestly
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E9 — natural documentary (no docs_write / no artifactMaterializationOperation) on active cycle → recommend → OK → EC; same cycle; no HD
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E9b — code-like mission (intentKind other, no docs taxonomy gate) on active cycle → same Generic path
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E10 — project WITHOUT active cycle: natural documentary → recommend (null-cycle offer) → OK → EC; NO CycleInstance created
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E10 — null-cycle offer binds only to null-cycle GO (no cross-bind with a cycle)
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E10 — explicit prepare intent on a code-like mission WITHOUT active cycle → direct Generic PREPARE (cycleInstanceId null)
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E10 — explicit NEW_CYCLE formalization WITHOUT cycle stays on the historical createCycle path (not hijacked)
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E11 — natural signal WITHOUT docs_write → NEW_CYCLE_FORMALIZATION (no_compatible_artifact_effect), not BLOCKED; explicit hostile kind stays BLOCKED
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E12 — tool: structural impact signal → STRUCTURAL_HUMAN_DECISION_REQUIRED; no EC, no Attempt
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E12 — tool: server materiality for a protected path stays fail-closed (model cannot declare non-structural to bypass)
 × __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E12 — F2: structural signals on natural documentary → STRUCTURAL clarification; no offer, no EC 83ms
   → expected { projectId: 'prj:d16-1', …(21) } to be null
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E14 — accept OK without a CURRENT offer clarifies (no invented prepare) — with cycle and without
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > NR — REQUIRE_ARTIFACT CURRENT + docs_write-compatible effect keeps Artifact governed (no Generic PREPARE offer)
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > NR — natural doc signal WITH REQUIRE_ARTIFACT but no docs_write effect still reaches Generic (not Artifact obligation dead-end)
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R1 — BEHAVIORAL: F2 Generic PREPARE goes through solicitGenericExecutionPrepare({analysis}); Nora tool goes through the SAME service ({mission})
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R1 — BEHAVIORAL: F2 maps whatever the shared service returns (forced refusal surfaces in F2; no EC; F2 cannot bypass admission)
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R1 — static complement: orchestrateF2 no longer imports prepareGenericExecutionContractDraft directly
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R2a — [MODEL TOOL SELECTION SCRIPTED · PRODUCT BEHAVIOR PROVEN] runNoraAgentsTurn: Pilote message → Runner invokes request_generic_execution_prepare → Product prepare → EC
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R2a — [MODEL TOOL SELECTION SCRIPTED] Runner path with a hostile/structural tool call still fails closed (no EC, no Attempt)
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R2b — [MODEL TOOL SELECTION SCRIPTED via Fake provider toolScript · PRODUCT BEHAVIOR PROVEN] orchestrateProjectAssistantTurn real wiring → Runner → request_generic_execution_prepare → Product prepare → EC
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R3 — S8 qualification carries NO catalog cycleTypeId (null) and honest disclosures; no CycleInstance fields
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R4 — S8 no-cycle: solicit → inspect → AUTHORIZE accepted with project binding only (no CycleInstance, no HD, no Attempt)
 ↓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R4 — Project-scoped Select: null-cycle AUTHORIZED PRODUCT_GOVERNED EC → Attempt accepted (no invented cycle; Cursor access not gated by methodological profile)
 ✓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R5 — structural blocked WITHOUT HD for every structural impact flag (tool + service), no EC / no Attempt / no HD created 23ms
 × __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R5 — a REAL accepted HumanDecision in the Project does NOT silently unlock structural Generic PREPARE; Nora text/params cannot smuggle an HD (no HD→mission binding exists on Generic path → STOP E12 positive) 41ms
   → expected undefined to be 1 // Object.is equality

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 2 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E12 — F2: structural signals on natural documentary → STRUCTURAL clarification; no offer, no EC
AssertionError: expected { projectId: 'prj:d16-1', …(21) } to be null

- Expected:
null

+ Received:
{
  "contradictionConflictPresent": false,
  "cycleInstanceId": "cyc:d16-e12c",
  "expectedOutcome": "Spécification consultable dans le dépôt du projet",
  "missionEffects": {
    "artifactBrief": null,
    "artifactType": null,
    "contentRequirements": [],
    "evidenceRequirements": [],
    "exitRequirementKinds": [],
    "expectedOutputs": [],
    "intentKind": null,
    "proposedArtifactFileName": null,
    "proposedRequiredCapabilities": [],
    "proposedTargetPath": null,
    "proposedTargetRepositoryRef": null,
    "requestedOperation": null,
    "reversibilityExpectation": null,
    "validationExpectations": [],
  },
  "missionKey": "2228271bdec91e58e62b6535",
  "objective": "Écrire une spécification Markdown dans le dépôt du projet",
  "offerFingerprint": "2228271bdec91e58e62b6535",
  "offeredAtIso": "2026-08-23T04:30:00.000Z",
  "outOfScope": [],
  "projectId": "prj:d16-1",
  "reservations": [],
  "risks": [],
  "scopeIn": [],
  "scopeNarrative": "projects/demo/docs",
  "scopeOut": [],
  "sessionKey": "sessdb:/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-w2-tQVtwI/p6-der16-session.sqlite",
  "signalArchitectureImpact": true,
  "signalDataImpact": false,
  "signalIrreversible": false,
  "signalSecurityImpact": false,
  "signalStructuralChange": false,
  "stopConditions": [
    "AUCUNE EXÉCUTION SANS AUTORISATION",
  ],
}

 ❯ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts:954:7
    952|         resolvePrepareOfferSessionKey({ sessionDbPath }),
    953|       ),
    954|     ).toBeNull();
       |       ^
    955|     expect(await countAttempts(oa, projectId)).toBe(0);
    956|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯

 FAIL  __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R5 — a REAL accepted HumanDecision in the Project does NOT silently unlock structural Generic PREPARE; Nora text/params cannot smuggle an HD (no HD→mission binding exists on Generic path → STOP E12 positive)
AssertionError: expected undefined to be 1 // Object.is equality

- Expected:
1

+ Received:
undefined

 ❯ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts:1677:56
    1675|       "utf8",
    1676|     );
    1677|     expect(svc.match(/decisionRefs:\s*\[\]/g)?.length).toBe(1);
       |                                                        ^
    1678|     expect(svc).not.toMatch(/decisionRefs\??:\s*readonly string\[\]/);
    1679|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯


 Test Files  1 failed (1)
      Tests  2 failed | 1 passed | 24 skipped (27)
   Start at  10:46:44
   Duration  1.88s (transform 1.03s, setup 26ms, collect 1.57s, tests 148ms, environment 0ms, prepare 29ms)

```

### 9.2 E12 — F2 structural → attend `offer=null`

**Assertion test (L939–954)** : après mission structurelle (`architectureImpact: true`), `getPendingGenericPrepareOffer(...)` doit être `null`.

**Observation runtime** : une offre est mémorisée (`signalArchitectureImpact: true`, scopeNarrative `projects/demo/docs`).

**Cause — hors correctif MATERIALITY-BLOCK-01** :

Worktree dirty **M-HD-02** dans `orchestrateF2.ts` :

```
2142:          readiness.structuralBlocked &&
2143-          readiness.missingFields.length === 0
2144-        ) {
2145-          rememberGenericPrepareRecommendation({
2146-            projectId: project.projectId,
2147-            cycleInstanceId: activeId,
2148-            analysis: readinessAnalysis,
2149-            offeredAtIso: oa.clock.nowIso(),
2150-            sessionDbPath: input.sessionDbPath,
2151-          });
2152-        }
2153-        return await completeF2Turn({
2154-          userText: content,
2155-          sessionDbPath: input.sessionDbPath,
2156-          text: genericMissionClarificationText({

```

Sur **HEAD commit `b4c1d862`**, la recherche `rememberGenericPrepareRecommendation` dans le même fichier (via `git show HEAD:…`) ne montre **pas** ce gate `structuralBlocked && missingFields.length === 0` qui mémorise l'offre avant clarification :

```
HEAD rememberGenericPrepareRecommendation hits:
135:  rememberGenericPrepareRecommendation,
2095:        rememberGenericPrepareRecommendation({

```

(HEAD n'avait pas le bloc `structuralBlocked && missingFields.length === 0` → remember.)

**Lien avec MATERIALITY-BLOCK-01** : **AUCUN**. Le bind documentaire n'est pas atteint quand `structuralBlocked` court-circuite avant PREPARE ; l'échec est une **divergence test↔dirty M-HD-02** (offre retenue pour carte HD), pas une régression du WHERE Product.

**Qualification** : `PREEXISTING_DIRTY_MHD02_TEST_DRIFT` — **ne bloque pas** le verdict technique du correctif materiality.

### 9.3 R5 — static `decisionRefs: []` count === 1

**Assertion test (L1670–1677)** : lit le source de `prepareGenericExecutionContractDraft.ts` et exige exactement **une** occurrence littérale `/decisionRefs:\s*\[\]/`.

| Base | Count `decisionRefs: []` |
| --- | --- |
| HEAD `b4c1d862` | **1** |
| Worktree dirty actuel | **0** |

Worktree : `decisionRefs: [...verifiedDecisionRefs]` (L942) — introduit par dirty **M-HD-01** (resume structural via HD vérifiée).
Le correctif MATERIALITY-BLOCK-01 n'a pas inventé ce pattern ; il compose sur le même fichier dirty.

**Qualification** : `PREEXISTING_DIRTY_MHD01_STATIC_ASSERTION_DRIFT` — **ne bloque pas** le verdict materiality. La sémantique runtime « non-structural ⇒ refs vides » reste vraie (`verifiedDecisionRefs` vide ⇒ `[...]` = `[]`).

### 9.4 Synthèse qualification der16

| Échec | Bloque le correctif MATERIALITY ? | Action recommandée |
| --- | --- | --- |
| E12 F2 offer non-null | **NON** | Aligner test der16 sur M-HD-02 **ou** retirer remember structural — GO M-HD séparé |
| R5 decisionRefs literal | **NON** | Aligner assertion static sur `decisionRefs: [...verifiedDecisionRefs]` / count flexible — GO M-HD séparé |

---

## 10. Architecture réutilisée (rappel)

- `enrichExecutionIntentFromBinding` → `resolveArtifactTargetUnderCycleWorkspace` / `composeCycleWorkspaceRoot`
- `repositoryBinding.pathRoot` + `cyc:framing` → segment `01-cadrage`
- Materiality fail-closed conservé
- PREPARE ≠ AUTHORIZE ≠ EXECUTE

Destination test A : `projects/mb01-a/01-cadrage/note-de-cadrage.md`

---

## 11. Décisions Morris / instruction ChatGPT

1. Rendre le **verdict technique sur le correctif materiality** à partir des diffs + preuves négatives ci-dessus.
2. Traiter E12/R5 comme **dette dirty M-HD**, hors GO materiality, sauf si ChatGPT démontre un couplage causal (non observé ici).
3. Reprise HQA-FRESH-01 seulement après GO Morris explicite.

**Instruction ChatGPT** : relire ce fichier canonique distant (`sfia-review-handoff/latest-chatgpt-review.md`) au SHA publié avant verdict.

---

## 12. Verdict Cursor (inchangé sur le fond)

**CORRECTION IMPLEMENTED — DETERMINISTIC PASS — READY FOR CHATGPT REVIEW**

HQA-FRESH-01 préservé : oui. Cursor REAL : non. Attempt : 0.
