# SFIA Studio — P6-HQA-F05-GD4-01 Safety Regularization — Review Pack FULL

- **Horodatage** : 2026-10-15T21:39:33+0200 (Europe/Paris)
- **GO Morris** : P6 HUMAN QA — RÉGULARISATION DE SORTIE — PASS 02
- **Finding** : P6-HQA-F05-GD4-01
- **Profil** : CRITICAL
- **Cycle** : 8 — Delivery / implémentation
- **CKC** : ckc:studio:delivery (guidance only)

## 1. Git Truth initial

| Check | Valeur |
|---|---|
| origin/main | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-hqa-optional-artifact-generic-prepare` |
| Pass 01+02 préservés | OUI |
| Staged | AUCUN |
| Handoff Pass 02 tip | `c8714067…` / blob `1b85cc46…` |

## 2. Sources consultées

- Cycle template / routing / guardrails ; convergence ; product-completion ; product-simplification 02/07
- Framing 30/32/35 ; CKC 08-delivery
- Handoff Pass 02 distant
- Runtime : `genericPrepareCapabilityEnvelope.ts`, `prepareGenericExecutionContractDraft.ts`, `resolveAuthoritativeProductMateriality.ts`, `pendingGenericPrepareOfferStore.ts`, `w3aProductExecutionSemantics.ts`, `executionIntentSchema.ts`

## 3. Convergence

Pass 01 (routing) + Pass 02 (intent fidelity) KEEP.
Gaps régularisés :
- A. matching capacité par substring `includes("generalist")`
- B. chemins Nora dans `ExecutionContract.expectedOutputs` comme destinations implicites

## 4. Référence Pass 01 + 02

- Pass 01 : optional documentary sans REQUIRE_ARTIFACT → Generic PREPARE
- Pass 02 : missionEffects + reconstruction docs_write + capability resolution + contrat inspectable
- Présents et non écrasés

## 5. Deux risques régularisés

### A — Capability envelope exact match
Avant : `c.includes("generalist")` acceptait toute chaîne contenant le terme.
Après : uniquement `PRODUCT_CANONICAL_EXECUTION_CAPABILITY` et `GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY` (égalité exacte).
Matérialité consomme le même helper → pas de divergence.

### B — Documentary target authority
Avant : `proposedTargetPath` / filename / expectedOutputs candidats étaient aussi poussés dans `contract.expectedOutputs`.
Après :
- candidats → `inputs.proposed*` + `proposedDocumentaryOutputCandidates`
- `documentaryTargetResolution: "unresolved_nora_candidate"`
- `resolvedAuthoritativeTargetPath: null`
- `proposedTargetPathAuthoritative: false`
- `contract.expectedOutputs = [expectedOutcome]` (outcome lisible, pas path autorisé)
Aucun mécanisme Product de composition targetPath autoritative au stade Generic PREPARE → CAS 2 honnête (pas de simulation).

## 6. Alternatives écartées

- Garder includes("generalist")
- Inventer une résolution path autoritative fake
- Nouvelle couche de routing
- STOP DOCUMENTARY TARGET AUTHORITY GAP (évité : protections explicites + expectedOutputs non autoritaires + pathRoot materiality inchangé)

## 7. Fichier créé / contenu complet — genericPrepareCapabilityEnvelope.ts

```typescript
/**
 * Generic PREPARE capability envelope — shared by offer reconstruction,
 * materiality, and ExecutionContract PREPARE.
 *
 * Documentary effect-class `cap:cursor.docs_write` may be proposed by Nora.
 * Product Generic PREPARE resolves it onto studio.cursor.generalist — never
 * silently dropped, never treated as elevated authority by itself.
 */

import { PRODUCT_CANONICAL_EXECUTION_CAPABILITY } from "./w3aProductExecutionSemantics";

export const GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY =
  "cap:cursor.docs_write" as const;

/**
 * Exact Product identities only — no substring / prefix / suffix matching.
 * Unknown strings that merely contain "generalist" are outside the envelope.
 */
export const GENERIC_PREPARE_ENVELOPE_CAPABILITY_IDENTITIES = Object.freeze([
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
] as const);

export function isCapabilityWithinGenericPrepareEnvelope(cap: string): boolean {
  const c = cap.trim();
  if (!c) return true;
  return (GENERIC_PREPARE_ENVELOPE_CAPABILITY_IDENTITIES as readonly string[]).includes(
    c,
  );
}

export type GenericPrepareCapabilityResolution =
  | {
      readonly ok: true;
      readonly contractCapabilities: readonly [
        typeof PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
      ];
      readonly proposedCapabilities: readonly string[];
      readonly resolution:
        | "no_proposed_capabilities_default_generalist"
        | "docs_write_effect_resolved_onto_generalist_product_surface"
        | "already_generalist_envelope";
    }
  | {
      readonly ok: false;
      readonly code: "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE";
      readonly elevated: readonly string[];
      readonly proposedCapabilities: readonly string[];
    };

export function resolveGenericPrepareCapabilityEnvelope(
  proposed: readonly string[] | null | undefined,
): GenericPrepareCapabilityResolution {
  const cleaned = (proposed ?? [])
    .map((c) => c.trim())
    .filter((c) => c.length > 0);
  if (cleaned.length === 0) {
    return {
      ok: true,
      contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
      proposedCapabilities: [],
      resolution: "no_proposed_capabilities_default_generalist",
    };
  }
  const elevated = cleaned.filter(
    (c) => !isCapabilityWithinGenericPrepareEnvelope(c),
  );
  if (elevated.length > 0) {
    return {
      ok: false,
      code: "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE",
      elevated,
      proposedCapabilities: cleaned,
    };
  }
  const hasDocsWrite = cleaned.includes(
    GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
  );
  return {
    ok: true,
    contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
    proposedCapabilities: cleaned,
    resolution: hasDocsWrite
      ? "docs_write_effect_resolved_onto_generalist_product_surface"
      : "already_generalist_envelope",
  };
}

```

## 8. Sections préparées — documentary target

### documentary target resolution (lines 615-645)
```typescript
615|  const outOfScope = input.analysis.outOfScope ?? [];
616|  const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;
617|  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
618|  // D-PC-09 / Pass 02 regularization — Nora path/filename/expectedOutputs are
619|  // candidates only until Product resolves an authoritative destination.
620|  // Generic PREPARE does not yet compose a server-owned documentary targetPath,
621|  // so contract.expectedOutputs must NOT list unresolved candidates as if they
622|  // were authorized destinations. Keep a readable documentary outcome instead.
623|  const proposedDocumentaryOutputCandidates = [
624|    ...missionEffects.expectedOutputs,
625|    ...(missionEffects.proposedTargetPath
626|      ? [missionEffects.proposedTargetPath]
627|      : []),
628|    ...(missionEffects.proposedArtifactFileName
629|      ? [missionEffects.proposedArtifactFileName]
630|      : []),
631|  ].filter((v, i, arr) => v.trim().length > 0 && arr.indexOf(v) === i);
632|  const documentaryTargetResolution:
633|    | "unresolved_nora_candidate"
634|    | "not_applicable" =
635|    missionEffects.intentKind === "docs_write" ||
636|    proposedDocumentaryOutputCandidates.length > 0
637|      ? "unresolved_nora_candidate"
638|      : "not_applicable";
639|  // Contract expectedOutputs = inspectable requested outcome, never unresolved path authority.
640|  const contractExpectedOutputs = [expectedOutcome];
641|
642|  // D — source grounding / trusted launch when mission implies repository work.
643|  const impliesGit = missionImpliesRepositoryWork(input.analysis);
644|  let launchInputs: Record<string, unknown> = {};
645|  let sourcesToRead: string[] = [];
```

### contract inputs + expectedOutputs (lines 790-825)
```typescript
790|      cursorDeterminesHow: true,
791|      prepareWithoutSystematicHumanDecision: true,
792|      humanDecisionCreated: false,
793|      executionAttemptCreated: false,
794|      prepareStatus: "draft_inspectable",
795|      materialityFacts,
796|      // Intent fidelity — inspectable mission effects (Pass 02).
797|      intentKind: missionEffects.intentKind,
798|      artifactType: missionEffects.artifactType,
799|      artifactBrief: missionEffects.artifactBrief,
800|      contentRequirements: [...missionEffects.contentRequirements],
801|      validationExpectations: [...missionEffects.validationExpectations],
802|      // D-PC-09 — Nora path/name candidates are NON-AUTHORITATIVE.
803|      proposedTargetPath: missionEffects.proposedTargetPath,
804|      proposedArtifactFileName: missionEffects.proposedArtifactFileName,
805|      proposedDocumentaryOutputCandidates,
806|      proposedTargetPathAuthoritative: false,
807|      documentaryTargetResolution,
808|      // No authoritative resolved path at Generic PREPARE in this surface.
809|      resolvedAuthoritativeTargetPath: null,
810|      proposedRequiredCapabilities: [
811|        ...capabilityResolution.proposedCapabilities,
812|      ],
813|      capabilityResolution: capabilityResolution.resolution,
814|      contractCapabilitySurface: PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
815|      ...launchInputs,
816|      ...(sourceGroundingPayload
817|        ? { [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: sourceGroundingPayload }
818|        : {}),
819|      protectedPathHitsAtPrepare: collectProtectedPathHits(input.analysis),
820|    },
821|    expectedOutputs: contractExpectedOutputs,
822|    requiredCapabilities: [...capabilityResolution.contractCapabilities],
823|    requiredAuthority,
824|    constraints,
825|    stopConditions: mergedStops,
```

## 9. Diff prepareGenericExecutionContractDraft (cumul vs main baseline, inclut Pass 02 + régularisation)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 2172b911..37daec50 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -51,8 +51,26 @@ import {
   rememberPendingGenericPrepareOffer,
   clearPendingGenericPrepareOffer,
   resolvePrepareOfferSessionKey,
+  type PendingGenericPrepareMissionEffects,
   type PendingGenericPrepareOffer,
 } from "./pendingGenericPrepareOfferStore";
+import {
+  validateExecutionIntentPayload,
+  type ExecutionIntentPayload,
+} from "../f2/executionIntentSchema";
+import {
+  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
+  isCapabilityWithinGenericPrepareEnvelope,
+  resolveGenericPrepareCapabilityEnvelope,
+  type GenericPrepareCapabilityResolution,
+} from "./genericPrepareCapabilityEnvelope";
+
+export {
+  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
+  isCapabilityWithinGenericPrepareEnvelope,
+  resolveGenericPrepareCapabilityEnvelope,
+};
+export type { GenericPrepareCapabilityResolution };

 export type GenericMissionPrepareReadiness = {
   readonly ready: boolean;
@@ -316,13 +334,49 @@ function stableMissionKey(input: {
   return createHash("sha256").update(raw).digest("hex").slice(0, 24);
 }

+export function extractMissionEffectsFromAnalysis(
+  analysis: IntentAnalysisDto,
+): PendingGenericPrepareMissionEffects {
+  const rawEi = analysis.executionIntent ?? null;
+  const validated = rawEi ? validateExecutionIntentPayload(rawEi) : null;
+  const ei: ExecutionIntentPayload | null =
+    validated && validated.ok ? validated.payload : null;
+  const rev = ei?.reversibilityExpectation ?? null;
+  return {
+    intentKind: ei?.intentKind?.trim() || null,
+    artifactType: ei?.artifactType?.trim() || null,
+    proposedTargetPath: ei?.targetPath?.trim() || null,
+    proposedArtifactFileName: ei?.artifactFileName?.trim() || null,
+    proposedTargetRepositoryRef: ei?.targetRepositoryRef?.trim() || null,
+    artifactBrief: ei?.artifactBrief?.trim() || null,
+    contentRequirements: [...(ei?.contentRequirements ?? [])],
+    expectedOutputs: [...(ei?.expectedOutputs ?? [])],
+    proposedRequiredCapabilities: [...(ei?.requiredCapabilities ?? [])],
+    validationExpectations: [...(ei?.validationExpectations ?? [])],
+    evidenceRequirements: [...(ei?.evidenceRequirements ?? [])],
+    requestedOperation:
+      ei?.requestedOperation?.trim() ||
+      analysis.requestedOperation?.trim() ||
+      null,
+    reversibilityExpectation:
+      rev === "reversible" || rev === "irreversible" || rev === "unknown"
+        ? rev
+        : null,
+    exitRequirementKinds: [...(ei?.exitRequirementKinds ?? [])],
+  };
+}
+
 function offerFingerprintFor(input: {
   readonly projectId: string;
   readonly cycleInstanceId: string;
   readonly objective: string;
   readonly expectedOutcome: string;
   readonly scope: string;
+  readonly scopeIn: readonly string[];
+  readonly scopeOut: readonly string[];
+  readonly missionEffects: PendingGenericPrepareMissionEffects;
 }): string {
+  const e = input.missionEffects;
   return createHash("sha256")
     .update(
       [
@@ -331,6 +385,17 @@ function offerFingerprintFor(input: {
         input.objective,
         input.expectedOutcome,
         input.scope,
+        input.scopeIn.join("|"),
+        input.scopeOut.join("|"),
+        e.intentKind ?? "",
+        e.artifactType ?? "",
+        e.proposedTargetPath ?? "",
+        e.proposedArtifactFileName ?? "",
+        e.proposedRequiredCapabilities.join("|"),
+        e.expectedOutputs.join("|"),
+        e.requestedOperation ?? "",
+        e.artifactBrief ?? "",
+        e.contentRequirements.join("|"),
       ].join("\n"),
     )
     .digest("hex")
@@ -359,12 +424,16 @@ export function rememberGenericPrepareRecommendation(input: {
   const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
   const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
   const scopeOut = input.analysis.executionIntent?.scopeOut ?? [];
+  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
   const fp = offerFingerprintFor({
     projectId: input.projectId,
     cycleInstanceId: input.cycleInstanceId,
     objective,
     expectedOutcome,
     scope: scopeNarrative,
+    scopeIn,
+    scopeOut,
+    missionEffects,
   });
   rememberPendingGenericPrepareOffer({
     projectId: input.projectId,
@@ -391,6 +460,7 @@ export function rememberGenericPrepareRecommendation(input: {
     ),
     offeredAtIso: input.offeredAtIso,
     offerFingerprint: fp,
+    missionEffects,
   });
   return fp;
 }
@@ -399,6 +469,27 @@ export function rememberGenericPrepareRecommendation(input: {
 export function analysisFromPendingGenericPrepareOffer(
   offer: PendingGenericPrepareOffer,
 ): IntentAnalysisDto {
+  const effects = offer.missionEffects;
+  const intentKind = effects?.intentKind?.trim() || "other";
+  const executionIntent: NonNullable<IntentAnalysisDto["executionIntent"]> = {
+    intentKind,
+    artifactType: effects?.artifactType ?? null,
+    // Candidate only — Product pathRoot / workspace still authoritative at PREPARE.
+    targetPath: effects?.proposedTargetPath ?? null,
+    artifactFileName: effects?.proposedArtifactFileName ?? null,
+    targetRepositoryRef: effects?.proposedTargetRepositoryRef ?? null,
+    scopeIn: [...offer.scopeIn],
+    scopeOut: [...offer.scopeOut],
+    expectedOutputs: [...(effects?.expectedOutputs ?? [])],
+    requiredCapabilities: [...(effects?.proposedRequiredCapabilities ?? [])],
+    validationExpectations: [...(effects?.validationExpectations ?? [])],
+    evidenceRequirements: [...(effects?.evidenceRequirements ?? [])],
+    requestedOperation: effects?.requestedOperation ?? null,
+    reversibilityExpectation: effects?.reversibilityExpectation ?? null,
+    artifactBrief: effects?.artifactBrief ?? null,
+    contentRequirements: [...(effects?.contentRequirements ?? [])],
+    exitRequirementKinds: [...(effects?.exitRequirementKinds ?? [])],
+  };
   return {
     parseOk: true,
     intentClass: "actionable",
@@ -426,12 +517,8 @@ export function analysisFromPendingGenericPrepareOffer(
     activatedBlocks: [],
     expectedOutcome: offer.expectedOutcome,
     criticalJustification: null,
-    requestedOperation: null,
-    executionIntent: {
-      intentKind: "other",
-      scopeIn: [...offer.scopeIn],
-      scopeOut: [...offer.scopeOut],
-    } as IntentAnalysisDto["executionIntent"],
+    requestedOperation: effects?.requestedOperation ?? null,
+    executionIntent,
   };
 }

@@ -475,6 +562,18 @@ export async function prepareGenericExecutionContractDraft(
     };
   }

+  const proposedCapabilities =
+    input.analysis.executionIntent?.requiredCapabilities ?? [];
+  const capabilityResolution =
+    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
+  if (!capabilityResolution.ok) {
+    return {
+      ok: false,
+      code: capabilityResolution.code,
+      message: `Capacités hors enveloppe généraliste Product — clarification ou gate requis : ${capabilityResolution.elevated.join(", ")}. Aucune HumanDecision artificielle ; aucune élévation silencieuse.`,
+    };
+  }
+
   const materialityResolution = await resolveAuthoritativeProductMateriality({
     oa: input.oa,
     projectId: input.projectId,
@@ -515,6 +614,30 @@ export async function prepareGenericExecutionContractDraft(
   const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
   const outOfScope = input.analysis.outOfScope ?? [];
   const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;
+  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
+  // D-PC-09 / Pass 02 regularization — Nora path/filename/expectedOutputs are
+  // candidates only until Product resolves an authoritative destination.
+  // Generic PREPARE does not yet compose a server-owned documentary targetPath,
+  // so contract.expectedOutputs must NOT list unresolved candidates as if they
+  // were authorized destinations. Keep a readable documentary outcome instead.
+  const proposedDocumentaryOutputCandidates = [
+    ...missionEffects.expectedOutputs,
+    ...(missionEffects.proposedTargetPath
+      ? [missionEffects.proposedTargetPath]
+      : []),
+    ...(missionEffects.proposedArtifactFileName
+      ? [missionEffects.proposedArtifactFileName]
+      : []),
+  ].filter((v, i, arr) => v.trim().length > 0 && arr.indexOf(v) === i);
+  const documentaryTargetResolution:
+    | "unresolved_nora_candidate"
+    | "not_applicable" =
+    missionEffects.intentKind === "docs_write" ||
+    proposedDocumentaryOutputCandidates.length > 0
+      ? "unresolved_nora_candidate"
+      : "not_applicable";
+  // Contract expectedOutputs = inspectable requested outcome, never unresolved path authority.
+  const contractExpectedOutputs = [expectedOutcome];

   // D — source grounding / trusted launch when mission implies repository work.
   const impliesGit = missionImpliesRepositoryWork(input.analysis);
@@ -670,18 +793,40 @@ export async function prepareGenericExecutionContractDraft(
       executionAttemptCreated: false,
       prepareStatus: "draft_inspectable",
       materialityFacts,
+      // Intent fidelity — inspectable mission effects (Pass 02).
+      intentKind: missionEffects.intentKind,
+      artifactType: missionEffects.artifactType,
+      artifactBrief: missionEffects.artifactBrief,
+      contentRequirements: [...missionEffects.contentRequirements],
+      validationExpectations: [...missionEffects.validationExpectations],
+      // D-PC-09 — Nora path/name candidates are NON-AUTHORITATIVE.
+      proposedTargetPath: missionEffects.proposedTargetPath,
+      proposedArtifactFileName: missionEffects.proposedArtifactFileName,
+      proposedDocumentaryOutputCandidates,
+      proposedTargetPathAuthoritative: false,
+      documentaryTargetResolution,
+      // No authoritative resolved path at Generic PREPARE in this surface.
+      resolvedAuthoritativeTargetPath: null,
+      proposedRequiredCapabilities: [
+        ...capabilityResolution.proposedCapabilities,
+      ],
+      capabilityResolution: capabilityResolution.resolution,
+      contractCapabilitySurface: PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
       ...launchInputs,
       ...(sourceGroundingPayload
         ? { [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: sourceGroundingPayload }
         : {}),
       protectedPathHitsAtPrepare: collectProtectedPathHits(input.analysis),
     },
-    expectedOutputs: [expectedOutcome],
-    requiredCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
+    expectedOutputs: contractExpectedOutputs,
+    requiredCapabilities: [...capabilityResolution.contractCapabilities],
     requiredAuthority,
     constraints,
     stopConditions: mergedStops,
-    evidenceRequirements: ["evreq:generic-prepare-mission-evidence"],
+    evidenceRequirements: [
+      "evreq:generic-prepare-mission-evidence",
+      ...missionEffects.evidenceRequirements,
+    ],
     reversibility: "partially_reversible",
     idempotencyKey,
     correlationId,

```

## 10. Assertions tests (extraits)

### Target non autorisé dans expectedOutputs
```typescript
expect(inputs.documentaryTargetResolution).toBe("unresolved_nora_candidate");
    expect(inputs.resolvedAuthoritativeTargetPath).toBeNull();
    expect(inputs.proposedTargetPath).toMatch(/note-cadrage\.md$/);
    expect(
      (inputs.proposedDocumentaryOutputCandidates as string[]).some((o) =>
        /note-cadrage\.md/.test(o),
      ),
    ).toBe(true);
    // Unresolved Nora path must NOT appear as authorized contract expectedOutputs.
    expect(
      (loaded.contract.expectedOutputs ?? []).some((o) =>
        /note-cadrage\.md/.test(o),
      ),
    ).toBe(false);
    expect((loaded.contract.expectedOutputs ?? []).length).toBeGreaterThan(0);
    expect(inputs.capabilityResolution).toBe(
      "docs_write_effect_resolved_onto_generalist_product_surface",
    );
    expect(loaded.contract.requiredCapabilities).toEqual([
      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
    ]);
```

### Regularization-A spoofing
```typescript
it("Regularization-A — capability exact match; substring spoofing refused", () => {
    expect(
      isCapabilityWithinGenericPrepareEnvelope(PRODUCT_CANONICAL_EXECUTION_CAPABILITY),
    ).toBe(true);
    expect(isCapabilityWithinGenericPrepareEnvelope("cap:cursor.docs_write")).toBe(
      true,
    );
    // Spoofing / substring — must NOT match.
    expect(
      isCapabilityWithinGenericPrepareEnvelope("cap:evil.generalist.escalate"),
    ).toBe(false);
    expect(
      isCapabilityWithinGenericPrepareEnvelope("prefix-cap:studio.cursor.generalist"),
    ).toBe(false);
    expect(
      isCapabilityWithinGenericPrepareEnvelope(
        `${PRODUCT_CANONICAL_EXECUTION_CAPABILITY}.extra`,
      ),
    ).toBe(false);
    expect(isCapabilityWithinGenericPrepareEnvelope("generalist")).toBe(false);
    expect(
      isCapabilityWithinGenericPrepareEnvelope("cap:github.pr.merge"),
    ).toBe(false);

    const spoof = resolveGenericPrepareCapabilityEnvelope([
      "cap:evil.generalist.escalate",
    ]);
    expect(spoof.ok).toBe(false);
    if (!spoof.ok) {
      expect(spoof.code).toBe("CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE");
      expect(spoof.elevated).toContain("cap:evil.generalist.escalate");
    }

    const canonicalOnly = resolveGenericPrepareCapabilityEnvelope([
      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
    ]);
    expect(canonicalOnly.ok).toBe(true);
    if (canonicalOnly.ok) {
      expect(canonicalOnly.resolution).toBe("already_generalist_envelope");
    }
  });
```

## 11. Validations

| Suite | Résultat |
|---|---|
| F05 optional routing | **7/7 PASS** |
| Artifact Continuity | PASS |
| Artifact Applicability Bridge | PASS |
| G-D4 | PASS |
| Product Continuity | PASS |
| HQA-F01 | PASS |
| Repository Currentness | PASS |
| **Total batch** | **60/60 PASS** (réf. Pass 02 : 59/59 ; +1 spoofing) |
| typecheck | PASS |
| lint | PASS |
| OpenAI/Cursor REAL / :3020 / e66 | NON |

## 12. Fake / Real

DETERMINISTIC SAFETY ADJUSTMENTS PROVEN AT TESTED SCOPE.
REAL non exécuté. Gate Morris REAL non consommé.
Gaps : OpenAI LIVE, e66, Auth, managed pathRoot, process-local offer, Cursor REAL, Evidence REAL, browser HQA.

## 13. Réserves

- Pending offer process-local
- resolvedAuthoritativeTargetPath reste null au PREPARE (composition path server-owned à l'exécution REAL / mécanismes existants hors ce pass)
- Branche fix non poussée ; :3020 non redéployé

## 14. Git Truth final

```
branch=fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare
HEAD=52f3688476e41cbab8fbe230f0ef4ddddb9aa56e
origin/main=52f3688476e41cbab8fbe230f0ef4ddddb9aa56e
status:
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts

diff --stat:
 .../f2/activeCycleGovernedContinuation.ts          |  21 ++-
 .../features/project-assistant/f2/orchestrateF2.ts |  16 +-
 .../w2/pendingGenericPrepareOfferStore.ts          |  59 ++++++++
 .../w2/prepareGenericExecutionContractDraft.ts     | 163 +++++++++++++++++++--
 .../w2/resolveAuthoritativeProductMateriality.ts   |  15 +-
 .../app/lib/platform/ai/fakeProvider.ts            |  64 ++++++++
 6 files changed, 321 insertions(+), 17 deletions(-)

cached: (vide)
```

## 15. Gates Morris

1. FINAL CRITICAL CLOSURE REVIEW ChatGPT
2. GO Git Integration
3. Redéploiement :3020
4. Human QA e66
5. Qualification P6

## 16. Verdict

**LOCAL SAFETY REGULARIZATION COMPLETE**
**DETERMINISTIC VALIDATION PASS**
**READY FOR CHATGPT FINAL CRITICAL REVIEW**

## 17. Instruction ChatGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier : capabilities exact match ; documentary target non autoritaire ; Pass 01/02 conservés ; diffs ; tests positifs/négatifs ; invariants ; Git Truth ; réserves ; commit/blob distant.

Produire : **P6-HQA-F05-GD4-01 FINAL CRITICAL CLOSURE REVIEW**.
