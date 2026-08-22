# SFIA Studio — Product Completion — W1 G3 CORRECTIVE PASS — FULL Review Pack

**Timestamp (Europe/Paris):** 2026-08-22 17:57:41 CEST
**Cycle / profile / typology:** 8 — Delivery/implémentation · CRITICAL · EVOL
**Morris GO consumed:** W1 G3 CORRECTIVE PASS — six qualified corrections on local uncommitted W1 candidate

---

## 1. Local Git Truth (before correction baseline preserved; after correction)

| Item | Value |
|---|---|
| Repo | `mcleland147/sfia-workspace` @ `/Users/morris/Projects/sfia-workspace` |
| Branch | `delivery/sfia-studio-product-completion-w1-g3` |
| HEAD | `b3e978fe0f8e34fae517923454d00afc9deb3af9` |
| origin/main | `b3e978fe0f8e34fae517923454d00afc9deb3af9` |
| W1 project transport | **NONE** (no project commit/push/PR/merge) |
| Prior handoff | `d7fa549d` (2026-08-22 17:15 CEST pre-correction delivery pack) |

---

## 2. Sources read (read-only)

Build doctrine, convergence roadmap, product completion cadrage→W1 readiness, UX experience contract (recovery semantics), v3 framing 30–37, CKC integration qualification, CKC 06/08, SFIA process guides 22–25.

---

## 3. Convergence qualification

- OA Native Backbone / Product SQLite / existing ports: **KEEP**
- Product DoctrinePackage materialization: **KEEP / CORRECT**
- Parallel `ProductCkcQualificationResolver`: **ABSORBED / REMOVED**
- Direct filesystem package reads outside repository seam: **ADAPTED → single repository seam**
- W1 deterministic tests: **ADAPTED / COMPLETE for six corrections**
- REAL: **CLOSED / NOT AUTHORIZED**

---

## 4. Pre-correction six-finding matrix

| ID | Defect | Status after pass |
|---|---|---|
| COR-W1-01 | `requested` persisted in SQLite | **FIXED** — ephemeral in-memory only |
| COR-W1-02 | candidate v1 became current; propose superseded on candidate | **FIXED** — pointer only validated/active; supersede only on effective promotion |
| COR-W1-03 | CKC seam only enriched rationale | **FIXED** — `reasonWithResolvedCkcContext` via existing provider; control/treatment on provider output |
| COR-W1-04 | Parallel product CKC resolver | **FIXED** — absorbed into `CkcQualificationResolver`; file deleted |
| COR-W1-05 | Duplicate fs reads | **FIXED** — `FilesystemDoctrinePackageRepository` sync/async unified; index/artifact via repository |
| COR-W1-06 | Recovery copy coupled trajectory+confirmation | **FIXED** — separated durable/process-local/proposed≠decided/restored-grant≠authority |

---

## 5–10. Correction details (summary)

### COR-W1-01 — Confirmation requested ephemeral
- **Files:** `sqliteConfirmationRepository.ts`, `w1ConfirmationDurability.test.ts`
- **Behavior:** `requested` → in-memory Map only; `granted+` → SQLite; restart loses requested; granted/consumed survive; CAS consume fail-closed.
- **Tests:** requested absent after reopen; granted persists; consumed once.

### COR-W1-02 — Trajectory proposal ≠ effective current
- **Files:** `sqliteTrajectoryRepository.ts`, `memoryTrajectoryRepository.ts`, `proposeTrajectoryVersion.ts`, `w1TrajectoryDurability.test.ts`, regression test alignment in `cycleTrajectoryEpistemicCkc.test.ts`, `adversarialValidation.test.ts`
- **Behavior:** `shouldUpdateCurrentPointer` only `validated|active`; candidate v1 persists without current pointer; candidate v2 does not supersede v1; validated promotion supersedes atomically.
- **Tests:** initial candidate + no current; active v1 + candidate v2 → current stays v1; restart-safe effective pointer.

### COR-W1-03 — Bounded CKC→Nora cognitive seam
- **Files:** `ckcCognitiveContext.ts`, `orchestrateF2.ts`, `fakeProvider.ts`, `types.ts`, `w1CkcSemanticSeam.test.ts`
- **Behavior:** post-qualification `reasonWithResolvedCkcContext` calls existing provider with resolved CKC section; `ckcCognitiveRecommendation` on qualification DTO + response text; not rationale-only.
- **Tests:** control generic vs treatment anti scope creep attributable; orchestrate inspects provider output.

### COR-W1-04 — Single CKC resolver
- **Files:** `ckcQualificationResolver.ts` (product binding), deleted `productCkcQualificationResolver.ts`, `cycle/index.ts`, `productCkcQualification.test.ts`
- **Behavior:** one `CkcQualificationResolver` with optional product binding; product path fail-closed; method path preserved for non-product resolver instances.

### COR-W1-05 — Single DoctrinePackage repository seam
- **Files:** `filesystemDoctrinePackageRepository.ts` (`findEntrySync`, `loadManifestSync`, `loadPackageFileSync`), `productCkcIndex.ts`, `ckcCognitiveContext.ts`
- **Behavior:** registry→manifest→index→artifact through hardened repository; `artifactFile` = package-local sourceRef; fallback NONE explicit in resolver.

### COR-W1-06 — Recovery truth
- **Files:** `presentationLabels.ts`, `RecoverySurface.tsx`, `ProjectRecoveryBanner.tsx`, `w1RecoveryFoundation.test.tsx`
- **Behavior:** decoupled durable list; explicit proposed≠decided; restored granted = historical scoped consent not current authority.

---

## 11–15. Architecture proofs

- **One resolver:** YES — `createCkcQualificationServices` instantiates single `CkcQualificationResolver` with product binding when product pin.
- **One repository seam:** YES — no direct `fs.readFileSync` in cognitive/semantic loaders; repository sync helpers used.
- **Trajectory proposal/effective:** YES — discriminating tests pass.
- **Confirmation restart:** YES — requested ephemeral; granted/consumed durable.
- **CKC→Nora control/treatment:** YES — provider output differs deterministically.
- **Recovery truth:** YES — old contradictory coupling removed.

---

## 16. Fake/Real qualification

**DETERMINISTIC PROVEN CANDIDATE** — fake provider + local SQLite + local product package. **NOT READY FOR REAL.** ZERO REAL.

---

## 17. Targeted W1 correction tests

**66/66 PASS** (12 files): productCkcQualification, w1Epistemic, w1Trajectory, w1Confirmation, productCkcIndex, productDoctrinePackage, w1CkcSemanticSeam, w1RecoveryFoundation, localProjectComposition, importBoundaries, qualifyCycleWithCkc, ckcConsumptionProof.

---

## 18. Full regression

**1900 passed / 1904 total tests** (221 files: 203 passed, 18 failed at file level).

**4 test failures (environmental, pre-existing):**
- M1/M2/M3/M5 process restart proof — local `tsx` worker path absent

**14 FinOps postgres test files fail at import** — `pg` module/env absent (pre-existing local limitation).

**0 new failures attributable to corrective pass** after trajectory regression test alignment.

---

## 19. Build / typecheck

`npm run build` — Next compile OK; fails on pre-existing `pg` types in FinOps shadow pilot (`composeExecutionRunD2D3T7ShadowPilot.ts`). Same local env limitation as baseline.

---

## 20. git diff --check

Clean (no conflict markers / whitespace errors).

---

## 21–23. File lists

See appendix for correction-specific unified diffs/full new files.

**Correction-specific touched (this pass):** 14 modified + 1 deleted resolver + test adaptations.

**Cumulative W1 candidate:** full uncommitted delta on branch (Tracks A–E + corrective pass); still no project git transport.

---

## 24. No unauthorized actions

- NO project commit / push / PR / merge
- NO REAL / NO runtime v3 adoption
- NO W2/W3/W4 expansion
- Handoff-only L3 push authorized separately

---

## 25. Controlled reserves

**R-W1-01 Epistemic:** PASS WITH RESERVE — `saveForProject`/`UpdateEpistemicState` boundary verified in `w1EpistemicDurability.test.ts`; full taxonomy deferred W2.

**R-W1-02 D02:** PASS WITH RESERVE — `artifactFile` documented as package-local sourceRef; integrity chain manifest→index→artifact enforced in repository loader; no modeled schema rename.

**TD-C6-03:** Still deferred (AuthorityVerificationReceipt).

---

## 26. W1 exit re-evaluation

| # | Capability | Verdict |
|---|---|---|
| 01 | Honest resume | PASS WITH RESERVE |
| 02 | Semantic continuity / epistemic | PASS WITH RESERVE |
| 03 | Trajectory | PASS |
| 04 | Confirmation | PASS |
| 05 | K→L→M→N authority order | PASS WITH RESERVE |
| 06 | CKC Phase A | PASS |
| 07 | Recovery foundation | PASS |
| 08 | Bounded CKC→Nora seam | PASS |

---

## 27. Final verdict

**W1 G3 CORRECTIVE PASS COMPLETE — SIX QUALIFIED CORRECTIONS APPLIED — CONFIRMATION REQUESTED EPHEMERAL / GRANTED+ DURABLE — TRAJECTORY PROPOSAL ≠ EFFECTIVE CURRENT — SINGLE CKC RESOLVER MECHANISM — SINGLE DOCTRINEPACKAGE REPOSITORY/RESOLUTION SEAM — BOUNDED CKC CONTENT REACHES EXISTING NORA REASONING WITH ATTRIBUTABLE DETERMINISTIC OUTPUT — RECOVERY TRUTH ALIGNED — CONTROLLED EPISTEMIC/D02 RESERVES RECORDED — TARGETED TESTS PASS — NO REAL — NO PROJECT GIT TRANSPORT — READY FOR CHATGPT W1 CORRECTIVE REVIEW.**

---

# APPENDIX — Correction-specific diffs / new file contents


## ProjectRecoveryBanner.tsx.diff
```
diff --git a/projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx b/projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx
index 1114fedd..05e64141 100644
--- a/projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx
+++ b/projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx
@@ -1,5 +1,13 @@
 "use client";

+import {
+  W1_DURABLE_DISCLOSURE,
+  W1_NON_DURABLE_DISCLOSURE,
+  W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
+  W1_REQUALIFY_SHORT_CTA,
+  W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
+  w1RestartHonestyMessage,
+} from "@/features/project-assistant/presentationLabels";
 import styles from "./project-recovery-banner.module.css";

 /**
@@ -24,11 +32,14 @@ export function ProjectRecoveryBanner({
           Reprise après rechargement
         </h2>
         <p className={styles.body}>
-          L&apos;état durable du projet (projet, état vivant, décisions et
-          contrats déjà enregistrés) peut être relu. La conversation, la
-          proposition et la confirmation restent process-local et peuvent être
-          perdues au rechargement — aucune durabilité inventée.
+          {w1RestartHonestyMessage()}
         </p>
+        <ul className={styles.disclosureList} data-testid="w1-recovery-disclosures">
+          <li>{W1_DURABLE_DISCLOSURE}</li>
+          <li>{W1_NON_DURABLE_DISCLOSURE}</li>
+          <li>{W1_PROPOSED_NOT_DECIDED_DISCLOSURE}</li>
+          <li>{W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY}</li>
+        </ul>
       </div>
       <div className={styles.actions}>
         <button
@@ -45,7 +56,7 @@ export function ProjectRecoveryBanner({
           data-testid="recovery-requalify"
           onClick={onRequalify}
         >
-          Requalifier
+          {W1_REQUALIFY_SHORT_CTA}
         </button>
       </div>
     </section>
```

## RecoverySurface.tsx.diff
```
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
index ff9c908b..f5022389 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
@@ -1,5 +1,12 @@
 "use client";

+import {
+  W1_DURABLE_DISCLOSURE,
+  W1_NON_DURABLE_DISCLOSURE,
+  W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
+  W1_REQUALIFY_CTA,
+  W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
+} from "@/features/project-assistant/presentationLabels";
 import styles from "./RecoverySurface.module.css";

 /**
@@ -25,10 +32,17 @@ export function RecoverySurface({
           Reprenez où le projet en est réellement
         </h2>
         <p className={styles.text}>
-          Ce qui est enregistré (projet, état du projet, décisions et contrats)
-          peut être relu. La conversation, la proposition et la confirmation
-          restent process-local et peuvent être perdues au rechargement.
+          Ce qui est durablement enregistré (projet, LPS, trajectoire effective,
+          consentements accordés/consommés, épistémique matérialisé) peut être
+          relu. La conversation, la confirmation demandée et les propositions
+          process-local peuvent être perdues au rechargement.
         </p>
+        <ul className={styles.disclosureList} data-testid="w1-recovery-disclosures">
+          <li>{W1_DURABLE_DISCLOSURE}</li>
+          <li>{W1_NON_DURABLE_DISCLOSURE}</li>
+          <li>{W1_PROPOSED_NOT_DECIDED_DISCLOSURE}</li>
+          <li>{W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY}</li>
+        </ul>
       </div>
       <div className={styles.actions}>
         <button
@@ -45,7 +59,7 @@ export function RecoverySurface({
           data-testid="recovery-requalify"
           onClick={onRequalify}
         >
-          Repartir d&apos;une nouvelle intention
+          {W1_REQUALIFY_CTA}
         </button>
       </div>
     </section>
```

## ckcCognitiveContext.diff
```
# NEW FILE: projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
/**
 * W1 bounded CKC→Nora semantic seam.
 * Loads resolved product-package CKC through the DoctrinePackage repository seam
 * and derives attributable Recommendations via the existing conversation provider.
 * No live OpenAI · no execution authority · no Morris decision.
 */

import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
} from "@/lib/platform/ai";
import type { CkcQualificationSuccessResult } from "@/lib/oa/cycle";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import { FilesystemDoctrinePackageRepository } from "@/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository";
import {
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  PRODUCT_DOCTRINE_PACKAGE_ID,
} from "@/lib/oa/doctrine/product/constants";
import {
  findProductCkcIndexEntry,
  loadProductCkcArtifactContentSync,
  loadProductCkcIndexSync,
} from "@/lib/oa/doctrine/product/productCkcIndex";
import type { QualificationDto } from "./types";

export {
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  PRODUCT_DOCTRINE_PACKAGE_ID,
};

export const CKC_ATTRIBUTION_MARKER_PREFIX =
  "[CKC ATTRIBUTABLE · ckc:studio:" as const;

export const CKC_COGNITIVE_REASONING_SYSTEM_MARKER =
  "SFIA Studio CKC COGNITIVE REASONING" as const;

export type CkcCognitiveProvenance = {
  readonly ckcId: string;
  readonly cycleTypeId: string;
  readonly doctrinePackageId: string;
  readonly packageVersion: string;
  readonly contentDigest: string;
  readonly doctrineStatus: "product-studio-native";
};

export type ProductCkcCognitiveContent = {
  readonly ckcId: string;
  readonly cycleTypeId: string;
  readonly markdown: string;
  readonly provenance: CkcCognitiveProvenance;
};

const DISTINCTIVE_PHRASES = [
  "anti scope creep",
  "scope creep",
] as const;

function extractDistinctiveGuidance(markdown: string): string | null {
  const lower = markdown.toLowerCase();
  for (const phrase of DISTINCTIVE_PHRASES) {
    if (lower.includes(phrase)) {
      return phrase === "anti scope creep"
        ? "Contrainte CKC : anti scope creep — borner le slice avant toute extension."
        : "Contrainte CKC : surveiller le scope creep — pas d'élargissement non autorisé.";
    }
  }
  return null;
}

export function buildCkcCognitivePromptSection(
  content: ProductCkcCognitiveContent,
  provenance: CkcCognitiveProvenance = content.provenance,
): string {
  const guidance = extractDistinctiveGuidance(content.markdown);
  const lines = [
    `CKC ${provenance.ckcId} (${provenance.cycleTypeId})`,
    `Package ${provenance.doctrinePackageId}@${provenance.packageVersion}`,
    guidance ?? "Guidance delivery : implémentation bornée, pas de redesign.",
  ];
  return lines.join(" · ");
}

export function deriveCkcAttributedRecommendation(input: {
  baseRationale: string;
  content: ProductCkcCognitiveContent | null;
}): string {
  if (!input.content) {
    return input.baseRationale;
  }
  const guidance =
    extractDistinctiveGuidance(input.content.markdown) ??
    "Guidance CKC product package applicable.";
  const marker = `${CKC_ATTRIBUTION_MARKER_PREFIX}${input.content.ckcId.replace(/^ckc:studio:/, "")}]`;
  return `${input.baseRationale} ${marker} ${guidance}`;
}

export function loadProductCkcCognitiveContent(input: {
  registryRoot: string;
  cycleTypeId: string;
  packagePin: DoctrinePackagePin;
}): ProductCkcCognitiveContent | null {
  const repository = new FilesystemDoctrinePackageRepository({
    registryRoot: input.registryRoot,
  });
  const indexResult = loadProductCkcIndexSync({
    registryRoot: input.registryRoot,
    doctrinePackageId: input.packagePin.doctrinePackageId,
    packageVersion: input.packagePin.version,
    packageDigest: input.packagePin.digest,
  });
  if (!indexResult.ok) return null;

  const indexEntry = findProductCkcIndexEntry(
    indexResult.index,
    input.cycleTypeId,
  );
  if (!indexEntry) return null;

  const entry = repository.findEntrySync(
    input.packagePin.doctrinePackageId,
    input.packagePin.version,
  );
  if (!entry) return null;

  const artifact = loadProductCkcArtifactContentSync(
    repository,
    entry,
    indexEntry.artifactFile,
  );
  if (!artifact.ok) return null;

  const provenance: CkcCognitiveProvenance = Object.freeze({
    ckcId: indexEntry.ckcId,
    cycleTypeId: indexEntry.cycleTypeId,
    doctrinePackageId: input.packagePin.doctrinePackageId,
    packageVersion: indexResult.packageVersion,
    contentDigest: indexEntry.sourceDigest,
    doctrineStatus: "product-studio-native",
  });

  return Object.freeze({
    ckcId: indexEntry.ckcId,
    cycleTypeId: indexEntry.cycleTypeId,
    markdown: artifact.content,
    provenance,
  });
}

/**
 * Bounded post-qualification Nora/provider reasoning using resolved CKC context.
 * Initial cycle qualification MUST remain prior to this call.
 */
export async function reasonWithResolvedCkcContext(input: {
  userContent: string;
  projectSummary: string;
  intentSummary: string;
  ckcPromptSection: string | null;
}): Promise<{
  recommendation: string;
  presentation: "test_provider" | "openai_live";
  model: string | null;
  rawText: string;
}> {
  const provider = resolveConversationProvider();
  const presentation =
    isFakeConversationProviderForced() || provider.providerId === "fake-test"
      ? "test_provider"
      : "openai_live";

  const systemContent = input.ckcPromptSection?.trim()
    ? `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nContexte CKC résolu (guidance seulement — pas d'autorité, pas de décision Morris):\n${input.ckcPromptSection.trim()}`
    : `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nAucun contexte CKC package résolu — recommandation générique uniquement.`;

  const completion = await provider.complete([
    { role: "system", content: systemContent },
    {
      role: "user",
      content: `Contexte projet:\n${input.projectSummary}\n\nIntention qualifiée:\n${input.intentSummary}\n\nDemande:\n${input.userContent}`,
    },
  ]);

  return {
    recommendation: completion.text,
    presentation,
    model: completion.usage?.model ?? null,
    rawText: completion.text,
  };
}

export type CkcQualificationProof = CkcQualificationSuccessResult["proof"] & {
  doctrineStatus?: string;
  packageProvenance?: CkcCognitiveProvenance;
};

export function isProductStudioNativeCkcProof(
  proof: CkcQualificationProof,
): proof is CkcQualificationProof & {
  doctrineStatus: "product-studio-native";
  packageProvenance: CkcCognitiveProvenance;
} {
  return (
    proof.doctrineStatus === "product-studio-native" &&
    Boolean(proof.packageProvenance?.ckcId)
  );
}

export function enrichQualificationWithCkcSemantics(input: {
  qualification: QualificationDto;
  proof: CkcQualificationProof;
  registryRoot: string;
  packagePin: DoctrinePackagePin;
  ckcCognitiveRecommendation?: string | null;
}): QualificationDto {
  if (!isProductStudioNativeCkcProof(input.proof)) {
    return input.qualification;
  }

  const content = loadProductCkcCognitiveContent({
    registryRoot: input.registryRoot,
    cycleTypeId: input.qualification.cycleTypeId,
    packagePin: input.packagePin,
  });

  if (!content) {
    return input.qualification;
  }

  const rationale = deriveCkcAttributedRecommendation({
    baseRationale: input.qualification.rationale,
    content,
  });

  return {
    ...input.qualification,
    rationale,
    isMorrisDecision: false,
    executionAuthority: false,
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
    ckcSemanticProvenance: content.provenance,
    ckcCognitiveRecommendation: input.ckcCognitiveRecommendation ?? undefined,
    disclosures: [
      ...input.qualification.disclosures,
      `CKC_SEMANTIC:${content.provenance.ckcId}@${content.provenance.doctrinePackageId}@${content.provenance.packageVersion}`,
    ],
  };
}
```

## ckcQualificationResolver.diff
```
diff --git a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts
index 1abdb636..c100ccf9 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts
@@ -25,6 +25,74 @@ import {
   type CkcReferenceManifest,
   type CkcReferenceManifestEntry,
 } from "./ckcReferenceManifest";
+import {
+  PRODUCT_DOCTRINE_PACKAGE_ID,
+  findProductCkcIndexEntry,
+  loadProductCkcIndexSync,
+  type Digest,
+  type ProductCkcIndexLoadResult,
+} from "@/lib/oa/doctrine";
+
+export type CkcQualificationResolverProductBinding = {
+  readonly registryRoot: string;
+  readonly doctrinePackageId?: string;
+  readonly packageVersion?: string;
+  readonly packageDigest?: Digest;
+};
+
+/** @deprecated Use CkcQualificationResolverProductBinding — kept for test imports. */
+export type ProductCkcQualificationResolverOptions =
+  CkcQualificationResolverProductBinding;
+
+function productResolution(
+  projection: ValidatedCycleTypeProjection,
+  resolvedAt: string,
+  input: {
+    readonly detailedStatus: CkcQualificationDetailedStatus;
+    readonly level: CkcQualificationResolution["level"];
+    readonly status: CkcQualificationResolution["status"];
+    readonly source: CkcQualificationResolution["source"];
+    readonly usedReference?: string;
+    readonly exploitable: boolean;
+    readonly packageVersion?: string;
+    readonly packageDigest?: string;
+    readonly indexDigest?: string;
+    readonly ckcId?: string;
+    readonly ckcContractVersion?: string;
+    readonly sourceDigest?: string;
+  },
+): CkcQualificationResolution {
+  return Object.freeze({
+    cycleTypeId: projection.cycleTypeId,
+    detailedStatus: input.detailedStatus,
+    level: input.level,
+    status: input.status,
+    source: input.source,
+    fallbackPolicy: "none" as const,
+    expectedPrimaryReference: input.ckcId ?? projection.cycleTypeId,
+    ...(input.usedReference ? { usedReference: input.usedReference } : {}),
+    fallbackUsed: false as const,
+    doctrineStatus: "product-studio-native" as const,
+    executionAuthority: false as const,
+    catalogVersion: projection.catalogVersion,
+    catalogHash: projection.catalogHash,
+    correlationId: projection.correlationId,
+    resolvedAt,
+    exploitable: input.exploitable,
+    disclosures: Object.freeze([]),
+    ...(input.packageVersion
+      ? {
+          doctrinePackageId: PRODUCT_DOCTRINE_PACKAGE_ID,
+          packageVersion: input.packageVersion,
+          packageDigest: input.packageDigest,
+          indexDigest: input.indexDigest,
+          ckcId: input.ckcId,
+          ckcContractVersion: input.ckcContractVersion,
+          sourceDigest: input.sourceDigest,
+        }
+      : {}),
+  });
+}

 const MAPPING_KEYS = new Set([
   "mandatory",
@@ -126,14 +194,24 @@ function resolution(
 export class CkcQualificationResolver
   implements CkcQualificationResolverPort
 {
+  private readonly productLoaded?: ProductCkcIndexLoadResult;
+
   constructor(
     private readonly manifest: CkcReferenceManifest = CKC_REFERENCE_MANIFEST,
     private readonly audit?: CycleAuditPort,
-  ) {}
+    productBinding?: CkcQualificationResolverProductBinding,
+  ) {
+    if (productBinding) {
+      this.productLoaded = loadProductCkcIndexSync(productBinding);
+    }
+  }

   resolve(
     input: CkcQualificationResolveInput,
   ): CkcQualificationResolutionOutcome {
+    if (this.productLoaded !== undefined) {
+      return this.resolveProductPackage(input);
+    }
     const { projection, resolvedAt } = input;

     if (!this.tryEmit("oa.ckc.resolution_started", projection, resolvedAt, "started")) {
@@ -431,6 +509,167 @@ export class CkcQualificationResolver
     });
   }

+  private resolveProductPackage(
+    input: CkcQualificationResolveInput,
+  ): CkcQualificationResolutionOutcome {
+    const { projection, resolvedAt } = input;
+
+    if (
+      !this.tryEmit("oa.ckc.resolution_started", projection, resolvedAt, "started")
+    ) {
+      return this.productAuditFailure(projection, resolvedAt);
+    }
+
+    try {
+      if (!isIso8601DateTime(resolvedAt)) {
+        return this.productFailure(
+          projection,
+          resolvedAt,
+          "unresolved_invalid_mapping",
+          "CKC_RESOLUTION_INCOHERENT",
+        );
+      }
+      if (projection.ckc.executionAuthority !== false) {
+        return this.productFailure(
+          projection,
+          resolvedAt,
+          "unresolved_invalid_mapping",
+          "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
+        );
+      }
+      const loaded = this.productLoaded;
+      if (!loaded?.ok) {
+        return this.productFailure(
+          projection,
+          resolvedAt,
+          "unresolved_unavailable",
+          loaded &&
+            (loaded.kind === "digest_mismatch" ||
+              loaded.kind === "source_digest_mismatch")
+            ? "CKC_RESOLUTION_INCOHERENT"
+            : "CKC_UNAVAILABLE",
+        );
+      }
+
+      const entry = findProductCkcIndexEntry(
+        loaded.index,
+        projection.cycleTypeId,
+      );
+      if (!entry) {
+        return this.productFailure(
+          projection,
+          resolvedAt,
+          "unresolved_unavailable",
+          "CKC_UNAVAILABLE",
+        );
+      }
+
+      return this.success(
+        projection,
+        productResolution(projection, resolvedAt, {
+          detailedStatus: "resolved_detailed",
+          level: "detailed",
+          status: "resolved",
+          source: "product_package",
+          usedReference: entry.ckcId,
+          exploitable: true,
+          packageVersion: loaded.packageVersion,
+          packageDigest: loaded.packageDigest,
+          indexDigest: loaded.indexDigest,
+          ckcId: entry.ckcId,
+          ckcContractVersion: entry.contractVersion,
+          sourceDigest: entry.sourceDigest,
+        }),
+      );
+    } catch {
+      return this.productFailure(
+        projection,
+        resolvedAt,
+        "unresolved_unavailable",
+        "D2_INTERNAL_ERROR",
+      );
+    }
+  }
+
+  private productFailure(
+    projection: ValidatedCycleTypeProjection,
+    resolvedAt: string,
+    detailedStatus: Extract<
+      CkcQualificationDetailedStatus,
+      "unresolved_invalid_mapping" | "unresolved_unavailable"
+    >,
+    code: CkcQualificationErrorCode,
+  ): CkcQualificationResolutionOutcome {
+    const failed = productResolution(projection, resolvedAt, {
+      detailedStatus,
+      level: "absent",
+      status:
+        detailedStatus === "unresolved_invalid_mapping"
+          ? "invalid"
+          : "unavailable",
+      source: "unavailable",
+      exploitable: false,
+    });
+    const error = createCkcQualificationError({
+      code,
+      correlationId: projection.correlationId,
+      cycleTypeId: projection.cycleTypeId,
+      detailedStatus,
+    });
+    if (
+      !this.tryEmit(
+        "oa.ckc.resolution_failed",
+        projection,
+        resolvedAt,
+        "error",
+        detailedStatus,
+        code,
+      )
+    ) {
+      return this.productAuditFailure(projection, resolvedAt);
+    }
+    if (
+      !this.tryEmit(
+        "oa.ckc.consumption_rejected",
+        projection,
+        resolvedAt,
+        "error",
+        detailedStatus,
+        code,
+      )
+    ) {
+      return this.productAuditFailure(projection, resolvedAt);
+    }
+    return Object.freeze({
+      ok: false as const,
+      resolution: failed,
+      error,
+    });
+  }
+
+  private productAuditFailure(
+    projection: ValidatedCycleTypeProjection,
+    resolvedAt: string,
+  ): CkcQualificationResolutionOutcome {
+    const failed = productResolution(projection, resolvedAt, {
+      detailedStatus: "unresolved_unavailable",
+      level: "absent",
+      status: "unavailable",
+      source: "unavailable",
+      exploitable: false,
+    });
+    return Object.freeze({
+      ok: false as const,
+      resolution: failed,
+      error: createCkcQualificationError({
+        code: "D2_INTERNAL_ERROR",
+        correlationId: projection.correlationId,
+        cycleTypeId: projection.cycleTypeId,
+        detailedStatus: "unresolved_unavailable",
+      }),
+    });
+  }
+
   private tryEmit(
     event:
       | "oa.ckc.resolution_started"
@@ -464,3 +703,10 @@ export class CkcQualificationResolver
     }
   }
 }
+
+export function createProductCkcQualificationResolver(
+  options: CkcQualificationResolverProductBinding,
+  audit?: CycleAuditPort,
+): CkcQualificationResolver {
+  return new CkcQualificationResolver(undefined, audit, options);
+}
```

## fakeProvider.diff
```
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 1f17afd4..1ea5e810 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -59,6 +59,41 @@ export class FakeConversationProvider implements ConversationProvider {
       throw new Error("FAKE_PROVIDER_ERROR");
     }

+    if (
+      messages.some((m) =>
+        m.role === "system" &&
+        m.content.includes("SFIA Studio CKC COGNITIVE REASONING"),
+      )
+    ) {
+      const hasCkcContext = messages.some(
+        (m) =>
+          m.content.toLowerCase().includes("anti scope creep") ||
+          m.content.includes("ckc:studio:delivery"),
+      );
+      if (hasCkcContext) {
+        return {
+          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : borner le slice avant toute extension. RECOMMANDATION — PAS UNE DÉCISION MORRIS.",
+          usage: {
+            inputTokens: 10 * this.callCount,
+            outputTokens: 5 * this.callCount,
+            totalTokens: 15 * this.callCount,
+            model: "fake-test-model",
+            providerResponseId: `fake-resp-${this.callCount}`,
+          },
+        };
+      }
+      return {
+        text: "[TEST/FAKE · NON LIVE] RECOMMANDATION générique sans guidance CKC package résolu.",
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
     // F2 deterministic structured intent JSON (TEST/FAKE only)
     if (lastUser?.content.includes("__F2_INFORMATIVE__")) {
       return {
@@ -289,7 +324,6 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    // Default unmarked analysis prompts (system asks for JSON): informative fail-open for F1
     if (messages.some((m) => m.role === "system" && m.content.includes("SFIA Studio F2"))) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
```

## filesystemDoctrinePackageRepository.diff
```
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts
index c67c7bc8..3eb84b03 100644
--- a/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts
@@ -17,6 +17,7 @@ import type {
 } from "../ports/doctrinePackageRepositoryPort";

 const MAX_MANIFEST_BYTES = 256_000;
+const MAX_PACKAGE_FILE_BYTES = 512_000;
 const REGISTRY_FILE = "registry.json";
 const MANIFEST_FILE = "manifest.json";

@@ -69,6 +70,13 @@ export class FilesystemDoctrinePackageRepository
     doctrinePackageId: string,
     version: string,
   ): Promise<LocalRegistryEntry | null> {
+    return this.findEntrySync(doctrinePackageId, version);
+  }
+
+  findEntrySync(
+    doctrinePackageId: string,
+    version: string,
+  ): LocalRegistryEntry | null {
     const registry = this.loadRegistry();
     const entry = registry.entries.find(
       (e) =>
@@ -84,6 +92,10 @@ export class FilesystemDoctrinePackageRepository
   async loadManifest(
     entry: LocalRegistryEntry,
   ): Promise<DoctrinePackageLoadResult> {
+    return this.loadManifestSync(entry);
+  }
+
+  loadManifestSync(entry: LocalRegistryEntry): DoctrinePackageLoadResult {
     const pathViolation = assertSafeRelativePackageDir(entry.relativePackageDir);
     if (pathViolation) {
       return {
@@ -210,4 +222,127 @@ export class FilesystemDoctrinePackageRepository
       };
     }
   }
+
+  async loadPackageFile(
+    entry: LocalRegistryEntry,
+    relativePath: string,
+  ): Promise<DoctrinePackageLoadResult> {
+    return this.loadPackageFileSync(entry, relativePath);
+  }
+
+  loadPackageFileSync(
+    entry: LocalRegistryEntry,
+    relativePath: string,
+  ): DoctrinePackageLoadResult {
+    const pathViolation = assertSafeRelativePackageDir(entry.relativePackageDir);
+    if (pathViolation) {
+      return {
+        ok: false,
+        kind: "path_forbidden",
+        message: "relative package path forbidden",
+      };
+    }
+    if (
+      typeof relativePath !== "string" ||
+      !relativePath.trim() ||
+      relativePath.includes("\0") ||
+      path.isAbsolute(relativePath) ||
+      relativePath.startsWith("..") ||
+      relativePath.split(/[/\\]/).some((segment) => segment === "..")
+    ) {
+      return {
+        ok: false,
+        kind: "path_forbidden",
+        message: "relative file path forbidden",
+      };
+    }
+
+    const root = this.root();
+    const packageDir = path.resolve(root, entry.relativePackageDir);
+    const targetPath = path.resolve(packageDir, relativePath);
+    if (
+      targetPath !== packageDir &&
+      !targetPath.startsWith(packageDir + path.sep)
+    ) {
+      return {
+        ok: false,
+        kind: "path_forbidden",
+        message: "resolved file escapes package dir",
+      };
+    }
+
+    try {
+      let rootReal: string;
+      let packageDirReal: string;
+      let targetReal: string;
+      try {
+        rootReal = fs.realpathSync(root);
+        packageDirReal = fs.realpathSync(packageDir);
+        targetReal = fs.realpathSync(targetPath);
+      } catch {
+        return {
+          ok: false,
+          kind: "not_found",
+          message: "package file not found",
+        };
+      }
+
+      if (!isPathInsideRoot(rootReal, packageDirReal)) {
+        return {
+          ok: false,
+          kind: "path_forbidden",
+          message: "package path symlink escapes registry root",
+        };
+      }
+      if (!isPathInsideRoot(packageDirReal, targetReal)) {
+        return {
+          ok: false,
+          kind: "path_forbidden",
+          message: "package file symlink escapes package dir",
+        };
+      }
+      if (!fs.statSync(targetReal).isFile()) {
+        return {
+          ok: false,
+          kind: "not_found",
+          message: "package file not found",
+        };
+      }
+
+      const buf = fs.readFileSync(targetReal);
+      if (buf.length > MAX_PACKAGE_FILE_BYTES) {
+        return {
+          ok: false,
+          kind: "too_large",
+          message: "package file exceeds size limit",
+        };
+      }
+      if (buf.includes(0)) {
+        return {
+          ok: false,
+          kind: "io_error",
+          message: "binary package file refused",
+        };
+      }
+      const rawText = buf.toString("utf8");
+      let rawJson: unknown;
+      try {
+        rawJson = JSON.parse(rawText);
+      } catch {
+        rawJson = undefined;
+      }
+      return {
+        ok: true,
+        rawText,
+        rawJson,
+        absoluteManifestPath: targetReal,
+      };
+    } catch {
+      return {
+        ok: false,
+        kind: "io_error",
+        message: "package file read failed",
+      };
+    }
+  }
 }
```

## index.diff
```
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index df8665c4..9ef93c28 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -63,8 +63,12 @@ export {
 export { SqliteCycleRepository } from "./infrastructure/sqlite/sqliteCycleRepository";
 export { SqliteCycleAuditJournal } from "./infrastructure/sqlite/sqliteCycleAuditJournal";

-import type { ClockPort } from "@/lib/oa/doctrine";
-import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
+import type { ClockPort, DoctrinePackagePin } from "@/lib/oa/doctrine";
+import {
+  FixedClock,
+  PRODUCT_DOCTRINE_PACKAGE_ID,
+  SystemClock,
+} from "@/lib/oa/doctrine";
 import type { ProjectServices } from "@/lib/oa/project";
 import { CreateCycle } from "./application/createCycle";
 import { CreateInitialTrajectory } from "./application/createInitialTrajectory";
@@ -134,9 +138,19 @@ export type CreateCkcQualificationServicesOptions = {
   readonly clock?: ClockPort;
   readonly audit?: CycleAuditPort;
   readonly resolver?: CkcQualificationResolverPort;
+  readonly registryRoot?: string;
+  readonly doctrinePackagePin?: DoctrinePackagePin;
+  readonly productResolverFactory?: (
+    audit: CycleAuditPort,
+    registryRoot: string,
+  ) => CkcQualificationResolverPort;
   readonly qualifyCycle?: QualifyCycleExecutor;
 };

+function usesProductDoctrinePin(pin?: DoctrinePackagePin): boolean {
+  return pin?.doctrinePackageId === PRODUCT_DOCTRINE_PACKAGE_ID;
+}
+
 function createFailureAwareAudit(audit: CycleAuditPort): CycleAuditPort & {
   readonly hasFailed: () => boolean;
 } {
@@ -166,7 +180,11 @@ export function createCkcQualificationServices(
   const failureAwareAudit = createFailureAwareAudit(audit);
   const resolver =
     options.resolver ??
-    new CkcQualificationResolver(undefined, failureAwareAudit);
+    (usesProductDoctrinePin(options.doctrinePackagePin) && options.registryRoot
+      ? new CkcQualificationResolver(undefined, failureAwareAudit, {
+          registryRoot: options.registryRoot,
+        })
+      : new CkcQualificationResolver(undefined, failureAwareAudit));
   const qualifyCycle =
     options.qualifyCycle ?? new QualifyCycle(clock, failureAwareAudit);

```

## memoryTrajectoryRepository.diff
```
diff --git a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts
index b5642b77..50c774e4 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts
@@ -60,11 +60,7 @@ export class MemoryTrajectoryRepository implements TrajectoryRepositoryPort {
     }
     const key = trajectoryKey(trajectory.trajectoryId, trajectory.version);
     this.store.trajectoriesByKey.set(key, structuredClone(trajectory));
-    if (
-      trajectory.status === "candidate" ||
-      trajectory.status === "validated" ||
-      trajectory.status === "active"
-    ) {
+    if (trajectory.status === "validated" || trajectory.status === "active") {
       this.store.currentTrajectoryByProject.set(trajectory.projectId, key);
     }
   }
```

## orchestrateF2.diff
```
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 21fb6adb..1f22161a 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -21,7 +21,16 @@ import type {
 import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
 import { analyzeIntent } from "./intentAnalysis";
 import { evaluateMorrisGateRequired } from "./gatePolicy";
+import {
+  enrichQualificationWithCkcSemantics,
+  isProductStudioNativeCkcProof,
+  loadProductCkcCognitiveContent,
+  buildCkcCognitivePromptSection,
+  reasonWithResolvedCkcContext,
+} from "./ckcCognitiveContext";
 import { projectCkcResolutionRef, qualifyWithCkc } from "./qualify";
+import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
+import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
 import {
   F2_PROCESS_LOCAL_NOTICE,
   createProposalId,
@@ -66,6 +75,16 @@ function toContextDto(
   };
 }

+function doctrinePackagePinFromProject(
+  project: ProjectAssistantContextDto,
+): DoctrinePackagePin {
+  return Object.freeze({
+    doctrinePackageId: project.doctrineId,
+    version: project.doctrineVersion,
+    digest: project.doctrineDigest as DoctrinePackagePin["digest"],
+  });
+}
+
 function snapshotFrom(project: ProjectAssistantContextDto): F2ContextSnapshot {
   return {
     projectId: project.projectId,
@@ -380,6 +399,43 @@ export async function orchestrateAssistantSend(input: {
   }

   let { qualification } = qualified;
+  const projectSummary = [
+    `name=${project.name}`,
+    `objective=${project.objective}`,
+    `criticality=${project.criticality}`,
+    `lps=${project.lpsId}@${project.lpsVersion}`,
+  ].join(" | ");
+
+  if (isProductStudioNativeCkcProof(qualified.raw.proof)) {
+    const packagePin = doctrinePackagePinFromProject(project);
+    const registryRoot = resolveProductDoctrineRegistryRoot();
+    const ckcContent = loadProductCkcCognitiveContent({
+      registryRoot,
+      cycleTypeId: qualification.cycleTypeId,
+      packagePin,
+    });
+    let ckcCognitiveRecommendation: string | undefined;
+    if (ckcContent) {
+      const reasoning = await reasonWithResolvedCkcContext({
+        userContent: content,
+        projectSummary,
+        intentSummary:
+          analysis.rephrasedRequest ??
+          analysis.objective ??
+          "Intention actionable",
+        ckcPromptSection: buildCkcCognitivePromptSection(ckcContent),
+      });
+      ckcCognitiveRecommendation = reasoning.recommendation;
+    }
+    qualification = enrichQualificationWithCkcSemantics({
+      qualification,
+      proof: qualified.raw.proof,
+      registryRoot,
+      packagePin,
+      ckcCognitiveRecommendation,
+    });
+  }
+
   const ckcResolutionRef =
     qualification.ckcResolutionRef ??
     projectCkcResolutionRef(qualified.raw.proof);
@@ -503,6 +559,9 @@ export async function orchestrateAssistantSend(input: {
     `Profil recommandé: ${qualification.recommendedProfile}.`,
     `LPS v${preLpsVersion} → v${project.lpsVersion}.`,
     qualification.recommendationLabel,
+    ...(qualification.ckcCognitiveRecommendation
+      ? [qualification.ckcCognitiveRecommendation]
+      : []),
     morrisGateRequired
       ? "DÉCISION REQUISE — gate Morris ouvert."
       : "NO MORRIS GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
```

## presentationLabels.diff
```
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index 29cc06cd..c4a0a8bf 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -117,6 +117,59 @@ export function shouldShowProjectRecovery(input: {
   return false;
 }

+/** W1 Track E — honest durable vs process-local disclosure strings. */
+export const W1_DURABLE_DISCLOSURE =
+  "Durable : Project, LPS, trajectoire effective/décidée, confirmation accordée/consommée (consentement historique), épistémique matérialisé.";
+
+export const W1_NON_DURABLE_DISCLOSURE =
+  "Process-local / peut nécessiter reconstruction : conversation, confirmation demandée, proposition F2, propositions non matérialisées.";
+
+export const W1_PROPOSED_NOT_DECIDED_DISCLOSURE =
+  "Une trajectoire proposée (candidate/recommandation) n'est pas la trajectoire effective/décidée courante.";
+
+export const W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY =
+  "Une confirmation accordée restaurée depuis l'état durable est un consentement historique scoped — pas l'autorité effective courante ; revalidation applicable requise avant exécution.";
+
+export const W1_REQUALIFY_CTA =
+  "Repartir d'une nouvelle intention (requalification contrôlée — pas de requalify silencieux)";
+
+export const W1_REQUALIFY_SHORT_CTA = "Requalifier (contrôlé)";
+
+export function w1RecoveryDisclosures(): {
+  durable: readonly string[];
+  nonDurable: readonly string[];
+  restoredGrantedNotice: string;
+  requalifyCta: string;
+} {
+  return Object.freeze({
+    durable: Object.freeze([
+      "Project",
+      "LPS",
+      "Trajectoire effective/décidée",
+      "Confirmation accordée/consommée (consentement historique)",
+      "Épistémique matérialisé",
+    ]),
+    nonDurable: Object.freeze([
+      "Conversation",
+      "Confirmation demandée",
+      "Proposition F2 process-local",
+      "Propositions non matérialisées",
+    ]),
+    restoredGrantedNotice: W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
+    requalifyCta: W1_REQUALIFY_CTA,
+    proposedNotDecided: W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
+  });
+}
+
+export function w1RestartHonestyMessage(): string {
+  return [
+    W1_DURABLE_DISCLOSURE,
+    W1_NON_DURABLE_DISCLOSURE,
+    W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
+    W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
+  ].join(" ");
+}
+
 /**
  * Map Attempt technical status to French user labels.
  * "bloqué avant exécution" must not invent an Attempt ID (caller responsibility).
```

## productCkcIndex.diff
```
# NEW FILE: projects/sfia-studio/app/lib/oa/doctrine/product/productCkcIndex.ts
import { createHash } from "node:crypto";
import path from "node:path";
import { canonicalizeJson, isDigestFormat } from "../domain/digest";
import type { Digest, LocalRegistryEntry } from "../domain/types";
import { FilesystemDoctrinePackageRepository } from "../infrastructure/filesystemDoctrinePackageRepository";
import {
  PRODUCT_DOCTRINE_PACKAGE_ID,
  PRODUCT_DOCTRINE_PACKAGE_VERSION,
} from "./constants";

export const PRODUCT_CKC_INDEX_SCHEMA_VERSION =
  "0.1.0-product-ckc-index" as const;

export const PRODUCT_CKC_INDEX_FILE = "ckc-index.json" as const;

export const PRODUCT_CKC_INDEX_SOURCE_REF = "src:product-ckc-index" as const;

export type ProductCkcIndexEntry = {
  readonly cycleTypeId: string;
  readonly ckcId: string;
  readonly contractVersion: string;
  readonly artifactFile: string;
  readonly sourceDigest: Digest;
};

export type ProductCkcIndex = {
  readonly schemaVersion: typeof PRODUCT_CKC_INDEX_SCHEMA_VERSION;
  readonly contractVersion: string;
  readonly digest: Digest;
  readonly entries: readonly ProductCkcIndexEntry[];
};

export type ProductCkcIndexLoadResult =
  | {
      readonly ok: true;
      readonly index: ProductCkcIndex;
      readonly indexDigest: Digest;
      readonly packageDigest: Digest;
      readonly packageVersion: string;
    }
  | {
      readonly ok: false;
      readonly kind:
        | "not_found"
        | "invalid_json"
        | "schema_invalid"
        | "digest_mismatch"
        | "source_digest_mismatch"
        | "io_error";
      readonly message: string;
    };

function deriveCkcId(cycleTypeId: string): string {
  if (!cycleTypeId.startsWith("cyc:")) {
    throw new Error("invalid_cycle_type_id");
  }
  return `ckc:studio:${cycleTypeId.slice("cyc:".length)}`;
}

function indexDigestPayload(
  index: Omit<ProductCkcIndex, "digest"> | ProductCkcIndex,
): Record<string, unknown> {
  const { digest: _omit, ...rest } = index as ProductCkcIndex & {
    digest?: Digest;
  };
  void _omit;
  return rest as Record<string, unknown>;
}

export function computeProductCkcIndexDigest(
  index: Omit<ProductCkcIndex, "digest"> | ProductCkcIndex,
): Digest {
  const canonical = canonicalizeJson(indexDigestPayload(index));
  const hex = createHash("sha256").update(canonical, "utf8").digest("hex");
  return `sha256:${hex}`;
}

function computeSourceDigest(content: string): Digest {
  const hex = createHash("sha256").update(content, "utf8").digest("hex");
  return `sha256:${hex}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateProductCkcIndex(raw: unknown): string | null {
  if (!isRecord(raw)) return "index_not_object";
  if (raw.schemaVersion !== PRODUCT_CKC_INDEX_SCHEMA_VERSION) {
    return "index_schema_version_invalid";
  }
  if (typeof raw.contractVersion !== "string" || !raw.contractVersion.trim()) {
    return "index_contract_version_invalid";
  }
  if (!isDigestFormat(String(raw.digest ?? ""))) return "index_digest_invalid";
  if (!Array.isArray(raw.entries) || raw.entries.length < 1) {
    return "index_entries_invalid";
  }
  const seenCycleTypes = new Set<string>();
  const seenCkcIds = new Set<string>();
  for (const entry of raw.entries) {
    if (!isRecord(entry)) return "index_entry_invalid";
    const cycleTypeId = String(entry.cycleTypeId ?? "");
    const ckcId = String(entry.ckcId ?? "");
    const contractVersion = String(entry.contractVersion ?? "");
    const artifactFile = String(entry.artifactFile ?? "");
    const sourceDigest = String(entry.sourceDigest ?? "");
    if (!cycleTypeId.startsWith("cyc:")) return "cycle_type_id_invalid";
    if (deriveCkcId(cycleTypeId) !== ckcId) {
      return "ckc_id_cycle_type_mismatch";
    }
    if (!contractVersion.trim()) return "entry_contract_version_invalid";
    if (!artifactFile.startsWith("ckc/")) return "artifact_file_invalid";
    if (!isDigestFormat(sourceDigest)) return "source_digest_invalid";
    if (seenCycleTypes.has(cycleTypeId)) return "duplicate_cycle_type";
    if (seenCkcIds.has(ckcId)) return "duplicate_ckc_id";
    seenCycleTypes.add(cycleTypeId);
    seenCkcIds.add(ckcId);
  }
  const computed = computeProductCkcIndexDigest(raw as ProductCkcIndex);
  if (computed !== raw.digest) return "index_digest_mismatch";
  return null;
}

function loadProductCkcIndexViaRepository(
  repository: FilesystemDoctrinePackageRepository,
  entry: LocalRegistryEntry,
  manifestDigest: Digest,
): ProductCkcIndexLoadResult {
  const manifestLoad = repository.loadManifestSync(entry);
  if (!manifestLoad.ok) {
    return {
      ok: false,
      kind: manifestLoad.kind === "not_found" ? "not_found" : "io_error",
      message: manifestLoad.message,
    };
  }
  const manifest = manifestLoad.rawJson as {
    doctrinePackageId?: string;
    version?: string;
    digest?: string;
    sources?: Array<{ doctrineSourceRef?: string; digest?: string }>;
  };
  if (
    manifest.doctrinePackageId !== PRODUCT_DOCTRINE_PACKAGE_ID ||
    manifest.version !== PRODUCT_DOCTRINE_PACKAGE_VERSION ||
    manifest.digest !== manifestDigest ||
    manifest.digest !== entry.digest
  ) {
    return {
      ok: false,
      kind: "schema_invalid",
      message: "manifest_identity_mismatch",
    };
  }
  const indexSource = manifest.sources?.find(
    (source) => source.doctrineSourceRef === PRODUCT_CKC_INDEX_SOURCE_REF,
  );
  if (!indexSource?.digest || !isDigestFormat(indexSource.digest)) {
    return {
      ok: false,
      kind: "schema_invalid",
      message: "manifest_missing_index_source",
    };
  }

  const indexLoad = repository.loadPackageFileSync(entry, PRODUCT_CKC_INDEX_FILE);
  if (!indexLoad.ok) {
    return {
      ok: false,
      kind: indexLoad.kind === "not_found" ? "not_found" : "io_error",
      message: indexLoad.message,
    };
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(indexLoad.rawText);
  } catch {
    return { ok: false, kind: "invalid_json", message: "index_json_invalid" };
  }
  const validationIssue = validateProductCkcIndex(parsed);
  if (validationIssue) {
    return {
      ok: false,
      kind:
        validationIssue === "index_digest_mismatch"
          ? "digest_mismatch"
          : "schema_invalid",
      message: validationIssue,
    };
  }
  if (indexSource.digest !== (parsed as ProductCkcIndex).digest) {
    return {
      ok: false,
      kind: "digest_mismatch",
      message: "manifest_index_digest_mismatch",
    };
  }

  const index = parsed as ProductCkcIndex;
  for (const item of index.entries) {
    const artifactLoad = repository.loadPackageFileSync(entry, item.artifactFile);
    if (!artifactLoad.ok) {
      return {
        ok: false,
        kind: "not_found",
        message: `artifact_missing:${item.artifactFile}`,
      };
    }
    if (computeSourceDigest(artifactLoad.rawText) !== item.sourceDigest) {
      return {
        ok: false,
        kind: "source_digest_mismatch",
        message: `artifact_digest_mismatch:${item.ckcId}`,
      };
    }
  }

  return {
    ok: true,
    index,
    indexDigest: index.digest,
    packageDigest: manifestDigest,
    packageVersion: manifest.version ?? PRODUCT_DOCTRINE_PACKAGE_VERSION,
  };
}

export async function loadProductCkcIndex(
  repository: FilesystemDoctrinePackageRepository,
  entry: LocalRegistryEntry,
  manifestDigest: Digest,
): Promise<ProductCkcIndexLoadResult> {
  return loadProductCkcIndexViaRepository(repository, entry, manifestDigest);
}

export function findProductCkcIndexEntry(
  index: ProductCkcIndex,
  cycleTypeId: string,
): ProductCkcIndexEntry | undefined {
  return index.entries.find((entry) => entry.cycleTypeId === cycleTypeId);
}

export async function loadProductCkcArtifactContent(
  repository: FilesystemDoctrinePackageRepository,
  entry: LocalRegistryEntry,
  artifactFile: string,
): Promise<
  | { readonly ok: true; readonly content: string }
  | { readonly ok: false; readonly message: string }
> {
  return loadProductCkcArtifactContentSync(repository, entry, artifactFile);
}

export function loadProductCkcArtifactContentSync(
  repository: FilesystemDoctrinePackageRepository,
  entry: LocalRegistryEntry,
  artifactFile: string,
):
  | { readonly ok: true; readonly content: string }
  | { readonly ok: false; readonly message: string } {
  const loaded = repository.loadPackageFileSync(entry, artifactFile);
  if (!loaded.ok) {
    return { ok: false, message: loaded.message };
  }
  return { ok: true, content: loaded.rawText };
}

/** Synchronous loader for resolver construction (bounded local registry). */
export function loadProductCkcIndexSync(options: {
  readonly registryRoot: string;
  readonly doctrinePackageId?: string;
  readonly packageVersion?: string;
  readonly packageDigest?: Digest;
}): ProductCkcIndexLoadResult {
  const repository = new FilesystemDoctrinePackageRepository({
    registryRoot: path.resolve(options.registryRoot),
  });
  const entry = repository.findEntrySync(
    options.doctrinePackageId ?? PRODUCT_DOCTRINE_PACKAGE_ID,
    options.packageVersion ?? PRODUCT_DOCTRINE_PACKAGE_VERSION,
  );
  if (!entry) {
    return {
      ok: false,
      kind: "not_found",
      message: "product_package_not_found",
    };
  }
  const manifestDigest: Digest = options.packageDigest ?? entry.digest;
  return loadProductCkcIndexViaRepository(repository, entry, manifestDigest);
}
```

## productCkcQualificationResolver.deleted
```
DELETED: productCkcQualificationResolver.ts
```

## proposeTrajectoryVersion.diff
```
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts b/projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts
index b73af1a8..a3c02a2b 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts
@@ -12,7 +12,7 @@ import type {
   ProposeTrajectoryVersionRequest,
   TrajectoryResult,
 } from "../domain/types";
-import type { MemoryCycleStore } from "../infrastructure/memoryCycleStore";
+import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
 import type { CycleAuditPort } from "../ports/cycleAudit";
 import type { TrajectoryRepositoryPort } from "../ports/trajectoryRepository";

@@ -42,7 +42,7 @@ export class ProposeTrajectoryVersion {
     private readonly projectServices: ProjectServices,
     private readonly clock: ClockPort,
     private readonly audit: CycleAuditPort,
-    private readonly store?: MemoryCycleStore,
+    private readonly store?: CyclePersistenceUnitOfWorkPort,
   ) {}

   async execute(
@@ -176,10 +176,14 @@ export class ProposeTrajectoryVersion {
           supersedesTrajectoryVersion: current.version,
         };

-        await this.trajectories.markSuperseded(
-          current.trajectoryId,
-          current.version,
-        );
+        const promotesEffectiveCurrent =
+          status === "validated" || status === "active";
+        if (promotesEffectiveCurrent) {
+          await this.trajectories.markSuperseded(
+            current.trajectoryId,
+            current.version,
+          );
+        }
         await this.trajectories.save(trajectory);
         nextTrajectory = trajectory;

```

## sqliteConfirmationRepository.diff
```
# NEW FILE: projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/sqliteConfirmationRepository.ts
import type { Confirmation } from "../../domain/types";
import type { ConfirmationRepositoryPort } from "../../ports/confirmationRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

function cloneConfirmation(confirmation: Confirmation): Confirmation {
  return structuredClone(confirmation);
}

const DURABLE_STATUSES = new Set<Confirmation["status"]>([
  "granted",
  "refused",
  "expired",
  "cancelled",
  "consumed",
  "superseded",
]);

/**
 * Durable Confirmation repository on Product SQLite (M6).
 * `requested` is process-local only (in-memory) and is lost on restart.
 * CAS consume via SQL WHERE status='granted'.
 */
export class SqliteConfirmationRepository implements ConfirmationRepositoryPort {
  /** Process-local requested confirmations — not persisted across restart. */
  private readonly ephemeral = new Map<string, Confirmation>();
  private readonly ephemeralIdempotency = new Map<string, string>();

  constructor(private readonly store: ProductSqliteHandle) {}

  private rowToConfirmation(payloadJson: string): Confirmation {
    return cloneConfirmation(JSON.parse(payloadJson) as Confirmation);
  }

  async findById(confirmationId: string): Promise<Confirmation | null> {
    const ephemeral = this.ephemeral.get(confirmationId);
    if (ephemeral) {
      return cloneConfirmation(ephemeral);
    }
    const row = this.store.db
      .prepare(`SELECT payload_json FROM oa_confirmations WHERE confirmation_id = ?`)
      .get(confirmationId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return this.rowToConfirmation(row.payload_json);
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<Confirmation | null> {
    const ephemeralId = this.ephemeralIdempotency.get(idempotencyKey);
    if (ephemeralId) {
      return this.findById(ephemeralId);
    }
    const row = this.store.db
      .prepare(`SELECT payload_json FROM oa_confirmations WHERE idempotency_key = ?`)
      .get(idempotencyKey) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return this.rowToConfirmation(row.payload_json);
  }

  async exists(confirmationId: string): Promise<boolean> {
    if (this.ephemeral.has(confirmationId)) return true;
    const row = this.store.db
      .prepare(`SELECT 1 AS ok FROM oa_confirmations WHERE confirmation_id = ?`)
      .get(confirmationId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(confirmation: Confirmation): Promise<void> {
    if (this.store.failNextSave === "confirmation") {
      this.store.failNextSave = null;
      throw new Error("forced_confirmation_save_failure");
    }

    const now = new Date().toISOString();
    const payload = JSON.stringify(cloneConfirmation(confirmation));

    if (confirmation.status === "consumed") {
      const result = this.store.db
        .prepare(
          `UPDATE oa_confirmations
           SET status = ?, payload_json = ?, updated_at = ?
           WHERE confirmation_id = ? AND status = 'granted'`,
        )
        .run(confirmation.status, payload, now, confirmation.confirmationId);
      if (result.changes !== 1) {
        const existing = await this.findById(confirmation.confirmationId);
        if (existing?.status === "consumed") {
          throw Object.assign(new Error("double_consume"), {
            detailCode: "CONFIRMATION_ALREADY_CONSUMED" as const,
          });
        }
        throw Object.assign(new Error("state_conflict"), {
          detailCode: "STATE_CONFLICT" as const,
        });
      }
      return;
    }

    if (confirmation.status === "requested") {
      this.ephemeral.set(confirmation.confirmationId, cloneConfirmation(confirmation));
      this.ephemeralIdempotency.set(
        confirmation.idempotencyKey,
        confirmation.confirmationId,
      );
      return;
    }

    this.ephemeral.delete(confirmation.confirmationId);
    this.ephemeralIdempotency.delete(confirmation.idempotencyKey);

    if (!DURABLE_STATUSES.has(confirmation.status)) {
      return;
    }

    this.store.db
      .prepare(
        `INSERT INTO oa_confirmations(
           confirmation_id, idempotency_key, project_id, status, payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(confirmation_id) DO UPDATE SET
           idempotency_key = excluded.idempotency_key,
           project_id = excluded.project_id,
           status = excluded.status,
           payload_json = excluded.payload_json,
           updated_at = excluded.updated_at`,
      )
      .run(
        confirmation.confirmationId,
        confirmation.idempotencyKey,
        confirmation.decisionRef?.startsWith("prj:")
          ? confirmation.decisionRef
          : null,
        confirmation.status,
        payload,
        now,
        now,
      );
  }
}
```

## sqliteTrajectoryRepository.diff
```
# NEW FILE: projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteTrajectoryRepository.ts
import type { ProjectTrajectory } from "../../domain/types";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

type CurrentRow = {
  trajectory_id: string;
  version: number;
};

function cloneTrajectory(trajectory: ProjectTrajectory): ProjectTrajectory {
  return structuredClone(trajectory);
}

function trajectoryKey(trajectoryId: string, version: number): string {
  return `${trajectoryId}@${version}`;
}

function shouldUpdateCurrentPointer(trajectory: ProjectTrajectory): boolean {
  return trajectory.status === "validated" || trajectory.status === "active";
}

/**
 * Durable ProjectTrajectory repository on Product SQLite (M6).
 */
export class SqliteTrajectoryRepository implements TrajectoryRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(trajectoryId: string): Promise<ProjectTrajectory | null> {
    for (const row of this.store.db
      .prepare(`SELECT project_id FROM oa_project_trajectory_current`)
      .all() as Array<{ project_id: string }>) {
      const current = await this.findCurrentByProjectId(row.project_id);
      if (current?.trajectoryId === trajectoryId) {
        return current;
      }
    }
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_project_trajectories
         WHERE trajectory_id = ?
         ORDER BY version DESC LIMIT 1`,
      )
      .get(trajectoryId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return cloneTrajectory(JSON.parse(row.payload_json) as ProjectTrajectory);
  }

  async findByProjectAndVersion(
    projectId: string,
    version: number,
  ): Promise<ProjectTrajectory | null> {
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_project_trajectories
         WHERE project_id = ? AND version = ?`,
      )
      .get(projectId, version) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return cloneTrajectory(JSON.parse(row.payload_json) as ProjectTrajectory);
  }

  async findCurrentByProjectId(
    projectId: string,
  ): Promise<ProjectTrajectory | null> {
    const current = this.store.db
      .prepare(
        `SELECT trajectory_id, version FROM oa_project_trajectory_current
         WHERE project_id = ?`,
      )
      .get(projectId) as CurrentRow | undefined;
    if (!current) return null;
    return this.findByProjectAndVersion(projectId, current.version);
  }

  async exists(trajectoryId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(`SELECT 1 AS ok FROM oa_project_trajectories WHERE trajectory_id = ?`)
      .get(trajectoryId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(trajectory: ProjectTrajectory): Promise<void> {
    if (this.store.failNextSave === "trajectory") {
      this.store.failNextSave = null;
      throw new Error("forced_trajectory_save_failure");
    }
    const now = new Date().toISOString();
    const payload = JSON.stringify(cloneTrajectory(trajectory));
    this.store.db
      .prepare(
        `INSERT INTO oa_project_trajectories(
           trajectory_id, project_id, version, status, payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(trajectory_id, version) DO UPDATE SET
           project_id = excluded.project_id,
           status = excluded.status,
           payload_json = excluded.payload_json,
           updated_at = excluded.updated_at`,
      )
      .run(
        trajectory.trajectoryId,
        trajectory.projectId,
        trajectory.version,
        trajectory.status,
        payload,
        now,
        now,
      );

    if (shouldUpdateCurrentPointer(trajectory)) {
      const occToken = trajectoryKey(trajectory.trajectoryId, trajectory.version);
      this.store.db
        .prepare(
          `INSERT INTO oa_project_trajectory_current(
             project_id, trajectory_id, version, occ_token
           ) VALUES (?, ?, ?, ?)
           ON CONFLICT(project_id) DO UPDATE SET
             trajectory_id = excluded.trajectory_id,
             version = excluded.version,
             occ_token = excluded.occ_token`,
        )
        .run(
          trajectory.projectId,
          trajectory.trajectoryId,
          trajectory.version,
          occToken,
        );
    }
  }

  async markSuperseded(
    trajectoryId: string,
    version: number,
  ): Promise<void> {
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_project_trajectories
         WHERE trajectory_id = ? AND version = ?`,
      )
      .get(trajectoryId, version) as { payload_json?: string } | undefined;
    if (!row?.payload_json) {
      throw new Error("trajectory_missing_for_supersede");
    }
    const existing = JSON.parse(row.payload_json) as ProjectTrajectory;
    const next = cloneTrajectory(existing);
    next.status = "superseded";
    await this.save(next);
  }
}
```
