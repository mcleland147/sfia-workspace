# SFIA Studio V3.1-D2-B — PR Readiness Full Review Pack

- **Date/heure/fuseau:** 2026-08-03 00:54:33 CEST (+0200)
- **Rôle:** Cursor PR readiness Critical
- **Cycle:** 13 — PR readiness
- **Profil:** Critical
- **Typologie:** INC
- **CKC fallback:** method/.../02-fifteen-cycles-synthetic-map.md — method-candidate — experimental cognitive guidance — no execution authority
- **Template:** prompts/templates/sfia-cycle-execution-template.md

## GO Morris consommé

```
GO PR READINESS SFIA STUDIO V3.1-D2-B CKC RESOLVER —
REVIEW THE QA-REVALIDATED THIRTEEN-FILE PACKAGE, FINAL DIFF, FILE INVENTORY, PACKAGE HASHES, TEST EVIDENCE, FINDINGS, RESERVES, COMMIT BOUNDARY, RISK AND ROLLBACK —
VERIFY D2-A ISOLATION, D2-C EXCLUSION AND MORRIS FAIL-CLOSED AUDIT DECISION —
PREPARE A PR CANDIDATE REVIEW PACK —
NO PROJECT COMMIT — NO PROJECT PUSH — NO PR —
NO D2-C — NO D2-D — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION
```

**Date/heure GO:** 2026-08-03 00:46 CEST (+0200)

## Anti-claims

QA PASS ≠ PR ready · PR readiness ≠ merge ready · tests verts ≠ absence de bug · package gelé ≠ D2-C · FAIL-CLOSED ≠ observabilité prod · CKC candidate ≠ baseline · body préparé ≠ PR créée · READY ≠ GO commit/push/PR/merge.

## Local Git Truth initial

```
=== PR READINESS GIT TRUTH 2026-08-03 00:53:17 CEST (+0200) ===
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
branch=delivery/sfia-studio-v3-1-d2-b-ckc-resolver
HEAD=bb685f1205b33f887ee27b42ac918c96386a6e33
main=bb685f1205b33f887ee27b42ac918c96386a6e33
origin_main=bb685f1205b33f887ee27b42ac918c96386a6e33
divergence=0	0
--- status ---
 M projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts
?? projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts
?? projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts
?? projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts
--- cached ---
CACHED_CHECK_PASS
--- branch vv ---
* delivery/sfia-studio-v3-1-d2-b-ckc-resolver                                   bb685f1 Merge pull request #300 from mcleland147/post-merge/sfia-studio-v3-1-d2-a-documentary-closure-final-status
--- remote D2-B ---
--- PRs ---
--- handoff ---
handoff_tip=883fccac003f58d642b1c40f5f05af3e4450224e
100644 blob 6a84275f44e929ef6f57ceaec462087dce77382f	sfia-review-handoff/latest-chatgpt-review.md
# SFIA Studio V3.1-D2-B — QA Revalidation Full Review Pack

- **Date/heure/fuseau:** 2026-08-02 23:31:33 CEST (+0200)
- **Rôle:** Cursor QA Critical read-only
- **Cycle:** 9 — QA / validation

```

## Handoff QA source

- tip: `883fccac003f58d642b1c40f5f05af3e4450224e`
- blob: `6a84275f44e929ef6f57ceaec462087dce77382f`
- titre: SFIA Studio V3.1-D2-B — QA Revalidation Full Review Pack
- F-QA-01…06 CLOSED ; R-QA-REV-01/02 MINOR ; package gelé

## Package freeze & inventory

```
# Package freeze & inventory — PR readiness
date=2026-08-03 00:53:35 CEST (+0200)
count=13
OK projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
OK projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts
OK projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts
OK projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts
OK projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts
OK projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts
OK projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
OK projects/sfia-studio/app/lib/oa/cycle/index.ts
OK projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts
OK projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts
OK projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts
OK projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts
OK projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts

POST_D2B_ORIGINAL_12=b9a4e5099ef7f27346f74686eb7f2a80a25222a2399728dd0bf62d41cc98f815
expected_12=b9a4e5099ef7f27346f74686eb7f2a80a25222a2399728dd0bf62d41cc98f815
MATCH_12
POST_FULL_13=290dcb04ef4662096ab515db1eef19372ad03cb2351e4ee27d64ca113e7a632e
expected_13=290dcb04ef4662096ab515db1eef19372ad03cb2351e4ee27d64ca113e7a632e
MATCH_13
POST_GIT_DIFF=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
expected_git=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
MATCH_GIT

## Protected-8
89d528b3917c035f8b6ed5ae2300468a403a35459e5f77a75a8c734ef911507f  projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
025f34191576c58222643356836fb7c62c193b3315d6b5be9085958e8609a279  projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts
96e14671e3bd4aa9f3771589041ba81057759730182d2c234f6a1f9e54c75fda  projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts
7beadca57bb27f171a1755f872d7176e288c102416784a30a7e52838d8fce875  projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts
79bd36209a723ddeb91fc3c40333d624e600b42958af23a8c3f029f498c52d7a  projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
5eb4a81c40e6a33856320f725cbf2e50b008c5410365788d509e2815b7dbd42a  projects/sfia-studio/app/lib/oa/cycle/index.ts
f2c7454ca20b07452777cff8129381f14e65c32ab0a28e7c6250a5c0342c7ba2  projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts
e553dead1f56ae4c92699dfdedb90ed263a5f4bb46cf7dca174bc66e8b96966c  projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
PROTECTED8_UNCHANGED

## git diff package
 .../oa/cycle/catalogProjection.qa.test.ts          | 19 +++++++++--
 .../oa/cycle/domain/ckcQualificationContracts.ts   | 38 ++++++++++++++++++++++
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |  5 +++
 .../app/lib/oa/cycle/ports/cycleAudit.ts           | 16 +++++++++
 4 files changed, 76 insertions(+), 2 deletions(-)
M	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
17	2	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
38	0	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
5	0	projects/sfia-studio/app/lib/oa/cycle/index.ts
16	0	projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
DIFF_CHECK_PASS

## unexpected project paths outside package+tmp
NONE

```

| path | git | role |
|---|---|---|
| domain/ckcQualificationContracts.ts | M tracked | D2-A/B contracts |
| domain/ckcQualificationErrors.ts | ?? new | D2-B errors |
| domain/ckcConsumptionProof.ts | ?? new | D2-B proof |
| ports/ckcQualificationResolver.ts | ?? new | D2-B port |
| infrastructure/ckcReferenceManifest.ts | ?? new | D2-B manifest |
| infrastructure/ckcQualificationResolver.ts | ?? new | D2-B resolver |
| ports/cycleAudit.ts | M tracked | T-A2 audit events additive |
| index.ts | M tracked | barrel additive D2-B |
| ckcReferenceManifest.test.ts | ?? new | tests |
| ckcQualificationResolver.test.ts | ?? new | tests |
| ckcConsumptionProof.test.ts | ?? new | tests |
| ckcQualificationResolver.qa.test.ts | ?? new | tests |
| catalogProjection.qa.test.ts | M tracked | D2-A boundary phase-aware |


## Diff tracked (complet)

```diff
=== TRACKED DIFF vs HEAD ===
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
index 1ba9408..9400a69 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
@@ -613,7 +613,7 @@ describe("V3.1-D2-A QA — public fingerprint/catalog binding (critical)", () =>
 });

 describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
-  it("keeps index.ts limited to the three additive D2-A exports", () => {
+  it("keeps the public boundary limited to adopted D2-A and D2-B exports", () => {
     const source = readFileSync(
       path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
       "utf8",
@@ -623,8 +623,23 @@ describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
     );
     expect(source).toContain('export * from "./domain/catalogFingerprint";');
     expect(source).toContain('export * from "./domain/catalogProjection";');
+    expect(source).toContain(
+      'export * from "./domain/ckcQualificationErrors";',
+    );
+    expect(source).toContain(
+      'export * from "./domain/ckcConsumptionProof";',
+    );
+    expect(source).toContain(
+      'export * from "./ports/ckcQualificationResolver";',
+    );
+    expect(source).toContain(
+      'export * from "./infrastructure/ckcReferenceManifest";',
+    );
+    expect(source).toContain(
+      'export * from "./infrastructure/ckcQualificationResolver";',
+    );
     expect(source).not.toMatch(
-      /ckcQualificationResolver|ConsumptionProof|QualifyCycleBridge|createD2|D2Factory/,
+      /QualifyCycleBridge|qualifyCycleWithCkc|ckcQualificationResult|createD2|D2Factory|createCkcQualificationServices/,
     );
   });

diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
index d611410..b7b4256 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
@@ -2,6 +2,12 @@ import type {
   CycleTypeCkcMapping,
   CycleTypeLifecycleStatus,
 } from "./cycleTypeCatalog";
+import type {
+  CkcFallbackPolicy,
+  CkcLevel,
+  CkcSource,
+  CkcStatus,
+} from "./types";

 /** Read-only context required to select a cycle type from the D1 catalog. */
 export type CatalogSelectionContext = {
@@ -73,3 +79,35 @@ export type CatalogProjectionFailure = {
 export type CatalogProjectionResult =
   | CatalogProjectionSuccess
   | CatalogProjectionFailure;
+
+/** Detailed D2-B state retained alongside the deliberately coarser T-A2 types. */
+export type CkcQualificationDetailedStatus =
+  | "resolved_detailed"
+  | "resolved_synthetic"
+  | "resolved_fallback_synthetic"
+  | "unresolved_invalid_mapping"
+  | "unresolved_unavailable"
+  | "unresolved_catalog_incompatible"
+  | "unresolved_cycle_not_selectable";
+
+/** Immutable output of the D2-B resolver before consumption proof validation. */
+export type CkcQualificationResolution = {
+  readonly cycleTypeId: string;
+  readonly detailedStatus: CkcQualificationDetailedStatus;
+  readonly level: CkcLevel;
+  readonly status: CkcStatus;
+  readonly source: CkcSource;
+  readonly fallbackPolicy: CkcFallbackPolicy;
+  readonly expectedPrimaryReference: string;
+  readonly usedReference?: string;
+  readonly fallbackUsed: boolean;
+  readonly fallbackReference?: string;
+  readonly doctrineStatus: "method-candidate";
+  readonly executionAuthority: false;
+  readonly catalogVersion: string;
+  readonly catalogHash: string;
+  readonly correlationId: string;
+  readonly resolvedAt: string;
+  readonly exploitable: boolean;
+  readonly disclosures: readonly string[];
+};
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 9ad18b7..499b0cb 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -11,6 +11,8 @@ export * from "./domain/invariants";
 export * from "./domain/qualification";
 export * from "./domain/cycleTypeCatalog";
 export * from "./domain/ckcQualificationContracts";
+export * from "./domain/ckcQualificationErrors";
+export * from "./domain/ckcConsumptionProof";
 export * from "./domain/catalogFingerprint";
 export * from "./domain/catalogProjection";

@@ -18,6 +20,7 @@ export * from "./ports/cycleRepository";
 export * from "./ports/trajectoryRepository";
 export * from "./ports/epistemicRepository";
 export * from "./ports/ckcResolver";
+export * from "./ports/ckcQualificationResolver";
 export * from "./ports/cycleAudit";

 export { QualifyCycle } from "./application/qualifyCycle";
@@ -46,6 +49,8 @@ export {
   ConsoleCycleAuditJournal,
   MemoryCycleAuditJournal,
 } from "./infrastructure/observability";
+export * from "./infrastructure/ckcReferenceManifest";
+export * from "./infrastructure/ckcQualificationResolver";

 import type { ClockPort } from "@/lib/oa/doctrine";
 import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
diff --git a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
index 06c1b12..fa3875b 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
@@ -78,6 +78,22 @@ export type CycleAuditEvent =
       detailCode?: string;
       durationMs: number;
     }
+  | {
+      event:
+        | "oa.ckc.resolution_started"
+        | "oa.ckc.resolution_succeeded"
+        | "oa.ckc.resolution_failed"
+        | "oa.ckc.fallback_used"
+        | "oa.ckc.consumption_validated"
+        | "oa.ckc.consumption_rejected";
+      ts: string;
+      correlationId: string;
+      cycleTypeId: string;
+      result: "started" | "ok" | "error" | "fallback";
+      detailedStatus?: string;
+      detailCode?: string;
+      durationMs?: number;
+    }
   | {
       event: "oa.cycle.load_failed";
       ts: string;

```

## Numstat tracked / untracked

```
17	2	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
38	0	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
5	0	projects/sfia-studio/app/lib/oa/cycle/index.ts
16	0	projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts

52	0	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts (new)
207	0	projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts (new)
30	0	projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts (new)
172	0	projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts (new)
466	0	projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts (new)
116	0	projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts (new)
331	0	projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts (new)
227	0	projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts (new)
323	0	projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (new)

```

## Contenu complet des treize fichiers


### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts` (tracked modified — full post-change content)

```typescript
import type {
  CycleTypeCkcMapping,
  CycleTypeLifecycleStatus,
} from "./cycleTypeCatalog";
import type {
  CkcFallbackPolicy,
  CkcLevel,
  CkcSource,
  CkcStatus,
} from "./types";

/** Read-only context required to select a cycle type from the D1 catalog. */
export type CatalogSelectionContext = {
  readonly cycleTypeId: string;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
};

/** Closed projection of contractually relevant catalog fields for HASH-A. */
export type CatalogFingerprintEntry = {
  readonly cycleTypeId: string;
  readonly canonicalKey: string;
  readonly lifecycleStatus: CycleTypeLifecycleStatus;
  readonly methodCycleNumber: number;
  readonly ckc: {
    readonly mandatory: true;
    readonly primaryLevel: "detailed" | "synthetic";
    readonly primaryReference: string;
    readonly fallbackPolicy: "synthetic_map" | "none";
    readonly fallbackReference: string | null;
    readonly executionAuthority: false;
    readonly doctrineStatus: "method-candidate";
    readonly unavailableBehavior: "fail-closed";
  };
};

/** Validated read-only D1 projection passed to the later D2-B boundary. */
export type ValidatedCycleTypeProjection = {
  readonly cycleTypeId: string;
  readonly label: string;
  readonly shortDescription: string;
  readonly lifecycleStatus: CycleTypeLifecycleStatus;
  readonly ckc: Readonly<CycleTypeCkcMapping>;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
};

export type CatalogProjectionErrorCode =
  | "CATALOG_CORRELATION_ID_REQUIRED"
  | "CATALOG_VERSION_INCOMPATIBLE"
  | "CATALOG_FINGERPRINT_STALE"
  | "CYCLE_TYPE_UNKNOWN"
  | "CYCLE_TYPE_NOT_SELECTABLE"
  | "CYCLE_TYPE_MAPPING_INVALID";

export type CatalogProjectionError = {
  readonly code: CatalogProjectionErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId?: string;
  readonly cycleTypeId?: string;
  readonly lifecycleStatus?: CycleTypeLifecycleStatus;
};

export type CatalogProjectionSuccess = {
  readonly ok: true;
  readonly projection: ValidatedCycleTypeProjection;
};

export type CatalogProjectionFailure = {
  readonly ok: false;
  readonly error: CatalogProjectionError;
};

export type CatalogProjectionResult =
  | CatalogProjectionSuccess
  | CatalogProjectionFailure;

/** Detailed D2-B state retained alongside the deliberately coarser T-A2 types. */
export type CkcQualificationDetailedStatus =
  | "resolved_detailed"
  | "resolved_synthetic"
  | "resolved_fallback_synthetic"
  | "unresolved_invalid_mapping"
  | "unresolved_unavailable"
  | "unresolved_catalog_incompatible"
  | "unresolved_cycle_not_selectable";

/** Immutable output of the D2-B resolver before consumption proof validation. */
export type CkcQualificationResolution = {
  readonly cycleTypeId: string;
  readonly detailedStatus: CkcQualificationDetailedStatus;
  readonly level: CkcLevel;
  readonly status: CkcStatus;
  readonly source: CkcSource;
  readonly fallbackPolicy: CkcFallbackPolicy;
  readonly expectedPrimaryReference: string;
  readonly usedReference?: string;
  readonly fallbackUsed: boolean;
  readonly fallbackReference?: string;
  readonly doctrineStatus: "method-candidate";
  readonly executionAuthority: false;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
  readonly resolvedAt: string;
  readonly exploitable: boolean;
  readonly disclosures: readonly string[];
};

```

### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts` (untracked new — full content)

```typescript
import type { CkcQualificationDetailedStatus } from "./ckcQualificationContracts";

export type CkcQualificationErrorCode =
  | "CKC_MAPPING_INVALID"
  | "CKC_UNAVAILABLE"
  | "CKC_SYNTHETIC_INVALID"
  | "CKC_RESOLUTION_INCOHERENT"
  | "CKC_EXECUTION_AUTHORITY_FORBIDDEN"
  | "D2_INTERNAL_ERROR";

export type CkcQualificationError = {
  readonly code: CkcQualificationErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId: string;
  readonly cycleTypeId: string;
  readonly detailedStatus?: CkcQualificationDetailedStatus;
};

const SAFE_MESSAGES: Readonly<Record<CkcQualificationErrorCode, string>> =
  Object.freeze({
    CKC_MAPPING_INVALID: "The CKC mapping is invalid.",
    CKC_UNAVAILABLE: "No authorized CKC source is available.",
    CKC_SYNTHETIC_INVALID: "The authorized synthetic CKC source is unavailable.",
    CKC_RESOLUTION_INCOHERENT: "The CKC resolution is incoherent.",
    CKC_EXECUTION_AUTHORITY_FORBIDDEN:
      "A CKC cannot hold execution authority.",
    D2_INTERNAL_ERROR: "The CKC resolution could not be completed.",
  });

export function createCkcQualificationError(input: {
  readonly code: CkcQualificationErrorCode;
  readonly correlationId: string;
  readonly cycleTypeId: string;
  readonly detailedStatus?: CkcQualificationDetailedStatus;
}): CkcQualificationError {
  const retryable = input.code === "D2_INTERNAL_ERROR";
  return Object.freeze({
    code: input.code,
    message: SAFE_MESSAGES[input.code],
    blocking: true as const,
    retryable,
    recoverable: retryable,
    correlationId: input.correlationId,
    cycleTypeId: input.cycleTypeId,
    ...(input.detailedStatus
      ? { detailedStatus: input.detailedStatus }
      : {}),
  });
}

```

### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts` (untracked new — full content)

```typescript
import type {
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "./ckcQualificationContracts";
import {
  createCkcQualificationError,
  type CkcQualificationError,
} from "./ckcQualificationErrors";
import type { CkcLevel, CkcSource, CkcStatus } from "./types";

export type CkcConsumptionProof = {
  readonly cycleTypeId: string;
  readonly detailedStatus:
    | "resolved_detailed"
    | "resolved_synthetic"
    | "resolved_fallback_synthetic";
  readonly level: CkcLevel;
  readonly status: CkcStatus;
  readonly source: CkcSource;
  readonly expectedPrimaryReference: string;
  readonly usedReference: string;
  readonly fallbackUsed: boolean;
  readonly fallbackReference?: string;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
  readonly resolvedAt: string;
  readonly doctrineStatus: "method-candidate";
  readonly executionAuthority: false;
  readonly consumed: true;
  readonly disclosures: readonly string[];
};

export type CkcConsumptionProofResult =
  | { readonly ok: true; readonly proof: CkcConsumptionProof }
  | { readonly ok: false; readonly error: CkcQualificationError };

const RESOLVED_STATES = new Set([
  "resolved_detailed",
  "resolved_synthetic",
  "resolved_fallback_synthetic",
]);

const FALLBACK_DISCLOSURE = "CKC_FALLBACK_USED";

const ISO_DATE_TIME =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/;

/** Pure ISO-8601 / RFC3339 date-time check with explicit timezone. */
export function isIso8601DateTime(value: string): boolean {
  if (typeof value !== "string" || value.length === 0 || value !== value.trim()) {
    return false;
  }
  const match = ISO_DATE_TIME.exec(value);
  if (!match) {
    return false;
  }
  const ms = Date.parse(value);
  if (!Number.isFinite(ms)) {
    return false;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const second = Number(match[6]);
  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31 ||
    hour > 23 ||
    minute > 59 ||
    second > 59
  ) {
    return false;
  }
  const probe = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  return (
    probe.getUTCFullYear() === year &&
    probe.getUTCMonth() === month - 1 &&
    probe.getUTCDate() === day &&
    probe.getUTCHours() === hour &&
    probe.getUTCMinutes() === minute &&
    probe.getUTCSeconds() === second
  );
}

function expectedFallbackPolicy(
  projection: ValidatedCycleTypeProjection,
): "intra_v3_only" | "none" {
  return projection.ckc.fallbackPolicy === "synthetic_map"
    ? "intra_v3_only"
    : "none";
}

function fallbackDisclosureCount(
  disclosures: readonly string[],
): number {
  return disclosures.filter((item) => item === FALLBACK_DISCLOSURE).length;
}

function isProjectionConsistent(
  projection: ValidatedCycleTypeProjection,
  resolution: CkcQualificationResolution,
): boolean {
  if (
    projection.cycleTypeId !== resolution.cycleTypeId ||
    projection.catalogVersion !== resolution.catalogVersion ||
    projection.catalogHash !== resolution.catalogHash ||
    projection.correlationId !== resolution.correlationId ||
    projection.ckc.primaryReference !== resolution.expectedPrimaryReference ||
    projection.ckc.fallbackReference !== resolution.fallbackReference ||
    resolution.doctrineStatus !== "method-candidate" ||
    resolution.executionAuthority !== false ||
    !isIso8601DateTime(resolution.resolvedAt) ||
    !resolution.usedReference ||
    !resolution.exploitable ||
    !RESOLVED_STATES.has(resolution.detailedStatus) ||
    resolution.fallbackPolicy !== expectedFallbackPolicy(projection)
  ) {
    return false;
  }

  const disclosureCount = fallbackDisclosureCount(resolution.disclosures);

  if (resolution.detailedStatus === "resolved_detailed") {
    return (
      resolution.level === "detailed" &&
      resolution.status === "resolved" &&
      resolution.source === "repository_candidate" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference &&
      disclosureCount === 0
    );
  }

  if (resolution.detailedStatus === "resolved_synthetic") {
    return (
      projection.ckc.primaryLevel === "synthetic" &&
      resolution.level === "synthetic" &&
      resolution.status === "synthetic" &&
      resolution.source === "intra_v3_synthetic" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference &&
      disclosureCount === 0
    );
  }

  return (
    projection.ckc.primaryLevel === "detailed" &&
    projection.ckc.fallbackPolicy === "synthetic_map" &&
    Boolean(projection.ckc.fallbackReference) &&
    resolution.level === "synthetic" &&
    resolution.status === "synthetic" &&
    resolution.source === "intra_v3_synthetic" &&
    resolution.fallbackUsed === true &&
    resolution.usedReference === projection.ckc.fallbackReference &&
    disclosureCount === 1
  );
}

/** Pure fail-closed proof builder. Functional failures are values, not throws. */
export function buildCkcConsumptionProof(
  projection: ValidatedCycleTypeProjection,
  resolution: CkcQualificationResolution,
): CkcConsumptionProofResult {
  if (!isProjectionConsistent(projection, resolution)) {
    return {
      ok: false,
      error: createCkcQualificationError({
        code: "CKC_RESOLUTION_INCOHERENT",
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        detailedStatus: resolution.detailedStatus,
      }),
    };
  }

  const proof = {
    cycleTypeId: resolution.cycleTypeId,
    detailedStatus: resolution.detailedStatus as
      | "resolved_detailed"
      | "resolved_synthetic"
      | "resolved_fallback_synthetic",
    level: resolution.level,
    status: resolution.status,
    source: resolution.source,
    expectedPrimaryReference: resolution.expectedPrimaryReference,
    usedReference: resolution.usedReference as string,
    fallbackUsed: resolution.fallbackUsed,
    ...(resolution.fallbackReference
      ? { fallbackReference: resolution.fallbackReference }
      : {}),
    catalogVersion: resolution.catalogVersion,
    catalogHash: resolution.catalogHash,
    correlationId: resolution.correlationId,
    resolvedAt: resolution.resolvedAt,
    doctrineStatus: "method-candidate" as const,
    executionAuthority: false as const,
    consumed: true as const,
    disclosures: Object.freeze([...resolution.disclosures]),
  };

  return { ok: true, proof: Object.freeze(proof) };
}

```

### `projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts` (untracked new — full content)

```typescript
import type {
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "../domain/ckcQualificationContracts";
import type { CkcConsumptionProof } from "../domain/ckcConsumptionProof";
import type { CkcQualificationError } from "../domain/ckcQualificationErrors";

export type CkcQualificationResolveInput = {
  readonly projection: ValidatedCycleTypeProjection;
  readonly resolvedAt: string;
};

export type CkcQualificationResolutionOutcome =
  | {
      readonly ok: true;
      readonly resolution: CkcQualificationResolution;
      readonly proof: CkcConsumptionProof;
    }
  | {
      readonly ok: false;
      readonly resolution: CkcQualificationResolution;
      readonly error: CkcQualificationError;
    };

/** Synchronous D2-B boundary: manifest-backed, deterministic and I/O-free. */
export interface CkcQualificationResolverPort {
  resolve(
    input: CkcQualificationResolveInput,
  ): CkcQualificationResolutionOutcome;
}

```

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts` (untracked new — full content)

```typescript
import {
  CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
  CKC_PILOT_CADRAGE_PATH,
  CKC_PILOT_CONCEPTION_PATH,
  CKC_PILOT_QA_VALIDATION_PATH,
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  type CycleTypeCatalog,
} from "../domain/cycleTypeCatalog";
import type { CkcSource } from "../domain/types";

export type CkcReferenceManifestEntry = {
  readonly reference: string;
  readonly level: "detailed" | "synthetic";
  readonly version: string | null;
  readonly doctrineStatus: "method-candidate";
  readonly source: Extract<
    CkcSource,
    "repository_candidate" | "intra_v3_synthetic"
  >;
  readonly availability: "available" | "unavailable";
  readonly executionAuthority: false;
};

export type CkcReferenceManifest = {
  readonly entries: readonly CkcReferenceManifestEntry[];
};

export type CkcReferenceManifestIssue = {
  readonly code:
    | "MANIFEST_DUPLICATE"
    | "MANIFEST_UNKNOWN_REFERENCE"
    | "MANIFEST_REFERENCE_MISSING"
    | "MANIFEST_LEVEL_INCOHERENT"
    | "MANIFEST_METADATA_INVALID";
  readonly message: string;
};

function entry(
  value: CkcReferenceManifestEntry,
): CkcReferenceManifestEntry {
  return Object.freeze(value);
}

export const CKC_REFERENCE_MANIFEST: CkcReferenceManifest = Object.freeze({
  entries: Object.freeze([
    entry({
      reference: CKC_PILOT_CADRAGE_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_PILOT_CONCEPTION_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_PILOT_QA_VALIDATION_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_SYNTHETIC_MAP_PATH,
      level: "synthetic",
      version: null,
      doctrineStatus: "method-candidate",
      source: "intra_v3_synthetic",
      availability: "available",
      executionAuthority: false,
    }),
  ]),
});

export function getCkcManifestEntry(
  reference: string,
  manifest: CkcReferenceManifest = CKC_REFERENCE_MANIFEST,
): CkcReferenceManifestEntry | undefined {
  return manifest.entries.find((candidate) => candidate.reference === reference);
}

/** Pure catalogue-to-manifest allowlist validation. */
export function validateCkcReferenceManifest(
  manifest: CkcReferenceManifest = CKC_REFERENCE_MANIFEST,
  catalog: CycleTypeCatalog = CYCLE_TYPE_CATALOG,
): CkcReferenceManifestIssue[] {
  const issues: CkcReferenceManifestIssue[] = [];
  const expected = new Map<string, "detailed" | "synthetic">();

  for (const catalogEntry of catalog.entries) {
    expected.set(
      catalogEntry.ckc.primaryReference,
      catalogEntry.ckc.primaryLevel,
    );
    if (catalogEntry.ckc.fallbackReference) {
      expected.set(catalogEntry.ckc.fallbackReference, "synthetic");
    }
  }

  const seen = new Set<string>();
  for (const manifestEntry of manifest.entries) {
    if (seen.has(manifestEntry.reference)) {
      issues.push({
        code: "MANIFEST_DUPLICATE",
        message: "The CKC manifest contains a duplicate reference.",
      });
      continue;
    }
    seen.add(manifestEntry.reference);

    const expectedLevel = expected.get(manifestEntry.reference);
    if (!expectedLevel) {
      issues.push({
        code: "MANIFEST_UNKNOWN_REFERENCE",
        message: "The CKC manifest contains an unauthorized reference.",
      });
    } else if (
      manifestEntry.level !== expectedLevel ||
      (manifestEntry.level === "detailed" &&
        manifestEntry.source !== "repository_candidate") ||
      (manifestEntry.level === "synthetic" &&
        manifestEntry.source !== "intra_v3_synthetic")
    ) {
      issues.push({
        code: "MANIFEST_LEVEL_INCOHERENT",
        message: "The CKC manifest level or source is incoherent.",
      });
    }

    if (
      manifestEntry.doctrineStatus !== "method-candidate" ||
      manifestEntry.executionAuthority !== false ||
      !["available", "unavailable"].includes(manifestEntry.availability)
    ) {
      issues.push({
        code: "MANIFEST_METADATA_INVALID",
        message: "The CKC manifest metadata is invalid.",
      });
    }
  }

  for (const reference of expected.keys()) {
    if (!seen.has(reference)) {
      issues.push({
        code: "MANIFEST_REFERENCE_MISSING",
        message: "An authorized catalogue CKC reference is missing.",
      });
    }
  }

  return issues;
}

```

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts` (untracked new — full content)

```typescript
import {
  buildCkcConsumptionProof,
  isIso8601DateTime,
  type CkcConsumptionProofResult,
} from "../domain/ckcConsumptionProof";
import type {
  CkcQualificationDetailedStatus,
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "../domain/ckcQualificationContracts";
import {
  createCkcQualificationError,
  type CkcQualificationErrorCode,
} from "../domain/ckcQualificationErrors";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type {
  CkcQualificationResolutionOutcome,
  CkcQualificationResolveInput,
  CkcQualificationResolverPort,
} from "../ports/ckcQualificationResolver";
import {
  CKC_REFERENCE_MANIFEST,
  getCkcManifestEntry,
  validateCkcReferenceManifest,
  type CkcReferenceManifest,
  type CkcReferenceManifestEntry,
} from "./ckcReferenceManifest";

const MAPPING_KEYS = new Set([
  "mandatory",
  "primaryLevel",
  "primaryReference",
  "fallbackPolicy",
  "fallbackReference",
  "executionAuthority",
  "doctrineStatus",
  "unavailableBehavior",
]);

function isMappingShapeValid(
  projection: ValidatedCycleTypeProjection,
): boolean {
  const mapping = projection.ckc;
  if (
    !mapping ||
    Object.keys(mapping).some((key) => !MAPPING_KEYS.has(key)) ||
    mapping.mandatory !== true ||
    mapping.doctrineStatus !== "method-candidate" ||
    mapping.unavailableBehavior !== "fail-closed"
  ) {
    return false;
  }

  if (mapping.primaryLevel === "detailed") {
    return (
      mapping.fallbackPolicy === "synthetic_map" &&
      typeof mapping.fallbackReference === "string" &&
      Boolean(mapping.fallbackReference.trim())
    );
  }

  return (
    mapping.primaryLevel === "synthetic" &&
    mapping.fallbackPolicy === "none" &&
    mapping.fallbackReference === undefined
  );
}

function isUsable(
  entry: CkcReferenceManifestEntry | undefined,
  level: "detailed" | "synthetic",
): entry is CkcReferenceManifestEntry {
  return Boolean(
    entry &&
      entry.level === level &&
      entry.availability === "available" &&
      entry.doctrineStatus === "method-candidate" &&
      entry.executionAuthority === false &&
      ((level === "detailed" && entry.source === "repository_candidate") ||
        (level === "synthetic" &&
          entry.source === "intra_v3_synthetic")),
  );
}

function resolution(
  projection: ValidatedCycleTypeProjection,
  resolvedAt: string,
  input: {
    readonly detailedStatus: CkcQualificationDetailedStatus;
    readonly level: CkcQualificationResolution["level"];
    readonly status: CkcQualificationResolution["status"];
    readonly source: CkcQualificationResolution["source"];
    readonly usedReference?: string;
    readonly fallbackUsed: boolean;
    readonly exploitable: boolean;
    readonly disclosures?: readonly string[];
  },
): CkcQualificationResolution {
  return Object.freeze({
    cycleTypeId: projection.cycleTypeId,
    detailedStatus: input.detailedStatus,
    level: input.level,
    status: input.status,
    source: input.source,
    fallbackPolicy:
      projection.ckc.fallbackPolicy === "synthetic_map"
        ? ("intra_v3_only" as const)
        : ("none" as const),
    expectedPrimaryReference: projection.ckc.primaryReference,
    ...(input.usedReference ? { usedReference: input.usedReference } : {}),
    fallbackUsed: input.fallbackUsed,
    ...(projection.ckc.fallbackReference
      ? { fallbackReference: projection.ckc.fallbackReference }
      : {}),
    doctrineStatus: "method-candidate" as const,
    executionAuthority: false as const,
    catalogVersion: projection.catalogVersion,
    catalogHash: projection.catalogHash,
    correlationId: projection.correlationId,
    resolvedAt,
    exploitable: input.exploitable,
    disclosures: Object.freeze([...(input.disclosures ?? [])]),
  });
}

export class CkcQualificationResolver
  implements CkcQualificationResolverPort
{
  constructor(
    private readonly manifest: CkcReferenceManifest = CKC_REFERENCE_MANIFEST,
    private readonly audit?: CycleAuditPort,
  ) {}

  resolve(
    input: CkcQualificationResolveInput,
  ): CkcQualificationResolutionOutcome {
    const { projection, resolvedAt } = input;

    if (!this.tryEmit("oa.ckc.resolution_started", projection, resolvedAt, "started")) {
      return this.auditFailure(projection, resolvedAt);
    }

    try {
      if (!isIso8601DateTime(resolvedAt)) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_RESOLUTION_INCOHERENT",
        );
      }
      if (projection.ckc.executionAuthority !== false) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
        );
      }
      if (!isMappingShapeValid(projection)) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_MAPPING_INVALID",
        );
      }

      const manifestIssues = validateCkcReferenceManifest(this.manifest);
      if (manifestIssues.length > 0) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_RESOLUTION_INCOHERENT",
        );
      }

      const allowlistedPrimary = getCkcManifestEntry(
        projection.ckc.primaryReference,
        CKC_REFERENCE_MANIFEST,
      );
      const allowlistedFallback = projection.ckc.fallbackReference
        ? getCkcManifestEntry(
            projection.ckc.fallbackReference,
            CKC_REFERENCE_MANIFEST,
          )
        : undefined;
      if (
        !allowlistedPrimary ||
        allowlistedPrimary.level !== projection.ckc.primaryLevel ||
        (projection.ckc.primaryLevel === "detailed" &&
          (!allowlistedFallback ||
            allowlistedFallback.level !== "synthetic")) ||
        (projection.ckc.primaryLevel === "synthetic" && allowlistedFallback)
      ) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_MAPPING_INVALID",
        );
      }

      const primary = getCkcManifestEntry(
        projection.ckc.primaryReference,
        this.manifest,
      );

      if (projection.ckc.primaryLevel === "synthetic") {
        if (!isUsable(primary, "synthetic")) {
          return this.failure(
            projection,
            resolvedAt,
            "unresolved_unavailable",
            "CKC_SYNTHETIC_INVALID",
          );
        }
        return this.success(
          projection,
          resolution(projection, resolvedAt, {
            detailedStatus: "resolved_synthetic",
            level: "synthetic",
            status: "synthetic",
            source: "intra_v3_synthetic",
            usedReference: projection.ckc.primaryReference,
            fallbackUsed: false,
            exploitable: true,
          }),
        );
      }

      if (isUsable(primary, "detailed")) {
        return this.success(
          projection,
          resolution(projection, resolvedAt, {
            detailedStatus: "resolved_detailed",
            level: "detailed",
            status: "resolved",
            source: "repository_candidate",
            usedReference: projection.ckc.primaryReference,
            fallbackUsed: false,
            exploitable: true,
          }),
        );
      }

      const fallbackReference = projection.ckc.fallbackReference as string;
      const fallback = getCkcManifestEntry(
        fallbackReference,
        this.manifest,
      );
      if (!isUsable(fallback, "synthetic")) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_unavailable",
          "CKC_UNAVAILABLE",
        );
      }

      const resolved = resolution(projection, resolvedAt, {
        detailedStatus: "resolved_fallback_synthetic",
        level: "synthetic",
        status: "synthetic",
        source: "intra_v3_synthetic",
        usedReference: fallbackReference,
        fallbackUsed: true,
        exploitable: true,
        disclosures: ["CKC_FALLBACK_USED"],
      });
      if (
        !this.tryEmit(
          "oa.ckc.fallback_used",
          projection,
          resolvedAt,
          "fallback",
          resolved.detailedStatus,
          "CKC_FALLBACK_USED",
        )
      ) {
        return this.auditFailure(projection, resolvedAt);
      }
      return this.success(projection, resolved);
    } catch {
      return this.failure(
        projection,
        resolvedAt,
        "unresolved_unavailable",
        "D2_INTERNAL_ERROR",
      );
    }
  }

  private success(
    projection: ValidatedCycleTypeProjection,
    resolved: CkcQualificationResolution,
  ): CkcQualificationResolutionOutcome {
    if (
      !this.tryEmit(
        "oa.ckc.resolution_succeeded",
        projection,
        resolved.resolvedAt,
        "ok",
        resolved.detailedStatus,
      )
    ) {
      return this.auditFailure(projection, resolved.resolvedAt);
    }
    const proofResult: CkcConsumptionProofResult =
      buildCkcConsumptionProof(projection, resolved);
    if (!proofResult.ok) {
      if (
        !this.tryEmit(
          "oa.ckc.consumption_rejected",
          projection,
          resolved.resolvedAt,
          "error",
          resolved.detailedStatus,
          proofResult.error.code,
        )
      ) {
        return this.auditFailure(projection, resolved.resolvedAt);
      }
      return Object.freeze({
        ok: false as const,
        resolution: resolved,
        error: proofResult.error,
      });
    }
    if (
      !this.tryEmit(
        "oa.ckc.consumption_validated",
        projection,
        resolved.resolvedAt,
        "ok",
        resolved.detailedStatus,
      )
    ) {
      return this.auditFailure(projection, resolved.resolvedAt);
    }
    return Object.freeze({
      ok: true as const,
      resolution: resolved,
      proof: proofResult.proof,
    });
  }

  private failure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
    detailedStatus: Extract<
      CkcQualificationDetailedStatus,
      "unresolved_invalid_mapping" | "unresolved_unavailable"
    >,
    code: CkcQualificationErrorCode,
  ): CkcQualificationResolutionOutcome {
    const failed = resolution(projection, resolvedAt, {
      detailedStatus,
      level: "absent",
      status:
        detailedStatus === "unresolved_invalid_mapping"
          ? "invalid"
          : "unavailable",
      source: "unavailable",
      fallbackUsed: false,
      exploitable: false,
    });
    const error = createCkcQualificationError({
      code,
      correlationId: projection.correlationId,
      cycleTypeId: projection.cycleTypeId,
      detailedStatus,
    });
    if (
      !this.tryEmit(
        "oa.ckc.resolution_failed",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.auditFailure(projection, resolvedAt);
    }
    if (
      !this.tryEmit(
        "oa.ckc.consumption_rejected",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.auditFailure(projection, resolvedAt);
    }
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error,
    });
  }

  /**
   * Morris FAIL-CLOSED: audit sink failure returns a safe structured outcome.
   * Never re-emits on the failing sink. Never exposes a proof or consumed=true.
   */
  private auditFailure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
  ): CkcQualificationResolutionOutcome {
    const failed = resolution(projection, resolvedAt, {
      detailedStatus: "unresolved_unavailable",
      level: "absent",
      status: "unavailable",
      source: "unavailable",
      fallbackUsed: false,
      exploitable: false,
    });
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error: createCkcQualificationError({
        code: "D2_INTERNAL_ERROR",
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        detailedStatus: "unresolved_unavailable",
      }),
    });
  }

  private tryEmit(
    event:
      | "oa.ckc.resolution_started"
      | "oa.ckc.resolution_succeeded"
      | "oa.ckc.resolution_failed"
      | "oa.ckc.fallback_used"
      | "oa.ckc.consumption_validated"
      | "oa.ckc.consumption_rejected",
    projection: ValidatedCycleTypeProjection,
    ts: string,
    result: "started" | "ok" | "error" | "fallback",
    detailedStatus?: CkcQualificationDetailedStatus,
    detailCode?: string,
  ): boolean {
    if (!this.audit) {
      return true;
    }
    try {
      this.audit.append({
        event,
        ts,
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        result,
        ...(detailedStatus ? { detailedStatus } : {}),
        ...(detailCode ? { detailCode } : {}),
      });
      return true;
    } catch {
      return false;
    }
  }
}

```

### `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts` (tracked modified — full post-change content)

```typescript
/**
 * Minimal audit/observability sink for T-A2.
 */
export type CycleAuditEvent =
  | {
      event: "oa.cycle.qualified";
      ts: string;
      correlationId?: string;
      recommendedProfile: string;
      result: "ok";
      durationMs?: number;
    }
  | {
      event: "oa.cycle.created";
      ts: string;
      correlationId?: string;
      projectId: string;
      cycleInstanceId: string;
      profile: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.created";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      version: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.version_proposed";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      version: number;
      previousVersion?: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.version_conflict";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      expectedVersion?: number;
      currentVersion?: number;
      result: "conflict";
      detailCode: "TRAJECTORY_VERSION_CONFLICT";
      durationMs: number;
    }
  | {
      event: "oa.epistemic.updated";
      ts: string;
      correlationId?: string;
      projectId: string;
      itemCount: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.ckc.resolved";
      ts: string;
      correlationId?: string;
      cycleTypeId: string;
      level: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event:
        | "oa.ckc.resolution_started"
        | "oa.ckc.resolution_succeeded"
        | "oa.ckc.resolution_failed"
        | "oa.ckc.fallback_used"
        | "oa.ckc.consumption_validated"
        | "oa.ckc.consumption_rejected";
      ts: string;
      correlationId: string;
      cycleTypeId: string;
      result: "started" | "ok" | "error" | "fallback";
      detailedStatus?: string;
      detailCode?: string;
      durationMs?: number;
    }
  | {
      event: "oa.cycle.load_failed";
      ts: string;
      correlationId?: string;
      projectId?: string;
      result: "error";
      detailCode?: string;
      durationMs: number;
    };

export interface CycleAuditPort {
  append(event: CycleAuditEvent): void;
}

```

### `projects/sfia-studio/app/lib/oa/cycle/index.ts` (tracked modified — full post-change content)

```typescript
/**
 * T-A2 Cycle / Trajectory / Epistemic / CKC Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A1 project + T-A0 doctrine
 * public APIs only. Does not replace d1 / OPS1 / MethodMode. In-memory only.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export * from "./domain/qualification";
export * from "./domain/cycleTypeCatalog";
export * from "./domain/ckcQualificationContracts";
export * from "./domain/ckcQualificationErrors";
export * from "./domain/ckcConsumptionProof";
export * from "./domain/catalogFingerprint";
export * from "./domain/catalogProjection";

export * from "./ports/cycleRepository";
export * from "./ports/trajectoryRepository";
export * from "./ports/epistemicRepository";
export * from "./ports/ckcResolver";
export * from "./ports/ckcQualificationResolver";
export * from "./ports/cycleAudit";

export { QualifyCycle } from "./application/qualifyCycle";
export { CreateCycle } from "./application/createCycle";
export { GetCycle } from "./application/getCycle";
export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
export { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
export { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
export {
  ProposeTrajectoryVersion,
  TrajectoryVersionConflictSignal,
} from "./application/proposeTrajectoryVersion";
export { GetEpistemicState } from "./application/getEpistemicState";
export { UpdateEpistemicState } from "./application/updateEpistemicState";
export { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";

export { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
export { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
export { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
export { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
export {
  MemoryCkcResolver,
  type CkcRegistryEntry,
} from "./infrastructure/memoryCkcResolver";
export {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
export * from "./infrastructure/ckcReferenceManifest";
export * from "./infrastructure/ckcQualificationResolver";

import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { CreateCycle } from "./application/createCycle";
import { CreateInitialTrajectory } from "./application/createInitialTrajectory";
import { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
import { GetCycle } from "./application/getCycle";
import { GetEpistemicState } from "./application/getEpistemicState";
import { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
import { ProposeTrajectoryVersion } from "./application/proposeTrajectoryVersion";
import { QualifyCycle } from "./application/qualifyCycle";
import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
import { UpdateEpistemicState } from "./application/updateEpistemicState";
import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
import { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
import { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
import { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
import {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
import type { CycleAuditPort } from "./ports/cycleAudit";
import type { CkcResolverPort } from "./ports/ckcResolver";

export type CycleServices = {
  store: MemoryCycleStore;
  cycles: MemoryCycleRepository;
  trajectories: MemoryTrajectoryRepository;
  epistemic: MemoryEpistemicRepository;
  ckc: CkcResolverPort;
  audit: CycleAuditPort;
  qualifyCycle: QualifyCycle;
  createCycle: CreateCycle;
  getCycle: GetCycle;
  createInitialTrajectory: CreateInitialTrajectory;
  getCurrentTrajectory: GetCurrentTrajectory;
  getTrajectoryVersion: GetTrajectoryVersion;
  proposeTrajectoryVersion: ProposeTrajectoryVersion;
  getEpistemicState: GetEpistemicState;
  updateEpistemicState: UpdateEpistemicState;
  resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
};

export type CreateInMemoryCycleServicesOptions = {
  projectServices: ProjectServices;
  clock?: ClockPort;
  audit?: CycleAuditPort;
  ckcResolver?: CkcResolverPort;
};

/** Factory for in-memory Cycle/Trajectory/Epistemic/CKC services. */
export function createInMemoryCycleServices(
  options: CreateInMemoryCycleServicesOptions,
): CycleServices {
  const store = new MemoryCycleStore();
  const cycles = new MemoryCycleRepository(store);
  const trajectories = new MemoryTrajectoryRepository(store);
  const epistemic = new MemoryEpistemicRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const ckc = options.ckcResolver ?? new MemoryCkcResolver();

  return {
    store,
    cycles,
    trajectories,
    epistemic,
    ckc,
    audit,
    qualifyCycle: new QualifyCycle(clock, audit),
    createCycle: new CreateCycle(
      cycles,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCycle: new GetCycle(cycles, clock, audit),
    createInitialTrajectory: new CreateInitialTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCurrentTrajectory: new GetCurrentTrajectory(trajectories, clock, audit),
    getTrajectoryVersion: new GetTrajectoryVersion(trajectories, clock, audit),
    proposeTrajectoryVersion: new ProposeTrajectoryVersion(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
    updateEpistemicState: new UpdateEpistemicState(
      epistemic,
      clock,
      audit,
      store,
    ),
    resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
      ckc,
      clock,
      audit,
    ),
  };
}

export function createTestCycleServices(
  options: CreateInMemoryCycleServicesOptions & {
    audit?: MemoryCycleAuditJournal;
    fixedNowIso?: string;
    ckcResolver?: MemoryCkcResolver;
  },
): CycleServices & { audit: MemoryCycleAuditJournal } {
  const audit = options.audit ?? new MemoryCycleAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T06:00:00.000Z"));
  return createInMemoryCycleServices({
    ...options,
    clock,
    audit,
  }) as CycleServices & { audit: MemoryCycleAuditJournal };
}

```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts` (untracked new — full content)

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  validateCkcReferenceManifest,
  type CkcReferenceManifest,
  type CkcReferenceManifestEntry,
} from "@/lib/oa/cycle";

function manifest(
  entries: readonly CkcReferenceManifestEntry[],
): CkcReferenceManifest {
  return { entries };
}

describe("V3.1-D2-B CKC reference manifest", () => {
  it("contains exactly the five allowlisted catalogue references", () => {
    expect(CKC_REFERENCE_MANIFEST.entries).toHaveLength(5);
    expect(
      new Set(CKC_REFERENCE_MANIFEST.entries.map((entry) => entry.reference))
        .size,
    ).toBe(5);
    expect(validateCkcReferenceManifest()).toEqual([]);

    const expected = new Set(
      CYCLE_TYPE_CATALOG.entries.flatMap((entry) => [
        entry.ckc.primaryReference,
        ...(entry.ckc.fallbackReference
          ? [entry.ckc.fallbackReference]
          : []),
      ]),
    );
    expect(
      new Set(CKC_REFERENCE_MANIFEST.entries.map((entry) => entry.reference)),
    ).toEqual(expected);
  });

  it("declares four versioned detailed pilots and one unversioned synthetic map", () => {
    const detailed = CKC_REFERENCE_MANIFEST.entries.filter(
      (entry) => entry.level === "detailed",
    );
    expect(detailed).toHaveLength(4);
    expect(detailed.every((entry) => entry.version === "0.1.0")).toBe(true);
    expect(
      CKC_REFERENCE_MANIFEST.entries.find(
        (entry) => entry.reference === CKC_SYNTHETIC_MAP_PATH,
      ),
    ).toMatchObject({
      level: "synthetic",
      version: null,
      source: "intra_v3_synthetic",
    });
  });

  it("is deeply frozen at collection and entry boundaries", () => {
    expect(Object.isFrozen(CKC_REFERENCE_MANIFEST)).toBe(true);
    expect(Object.isFrozen(CKC_REFERENCE_MANIFEST.entries)).toBe(true);
    expect(
      CKC_REFERENCE_MANIFEST.entries.every((entry) =>
        Object.isFrozen(entry),
      ),
    ).toBe(true);
  });

  it("rejects duplicates, unknowns, missing entries and incoherent levels", () => {
    const entries = CKC_REFERENCE_MANIFEST.entries;
    expect(
      validateCkcReferenceManifest(manifest([...entries, entries[0]])).map(
        (issue) => issue.code,
      ),
    ).toContain("MANIFEST_DUPLICATE");
    expect(
      validateCkcReferenceManifest(
        manifest([
          ...entries,
          { ...entries[0], reference: "caller/arbitrary.md" },
        ]),
      ).map((issue) => issue.code),
    ).toContain("MANIFEST_UNKNOWN_REFERENCE");
    expect(
      validateCkcReferenceManifest(manifest(entries.slice(1))).map(
        (issue) => issue.code,
      ),
    ).toContain("MANIFEST_REFERENCE_MISSING");
    expect(
      validateCkcReferenceManifest(
        manifest([
          { ...entries[0], level: "synthetic" },
          ...entries.slice(1),
        ]),
      ).map((issue) => issue.code),
    ).toContain("MANIFEST_LEVEL_INCOHERENT");
  });

  it("rejects invalid doctrine and execution authority without I/O", () => {
    for (const replacement of [
      {
        ...CKC_REFERENCE_MANIFEST.entries[0],
        doctrineStatus: "baseline",
      },
      {
        ...CKC_REFERENCE_MANIFEST.entries[0],
        executionAuthority: true,
      },
    ]) {
      const invalid = replacement as unknown as CkcReferenceManifestEntry;
      expect(
        validateCkcReferenceManifest(
          manifest([invalid, ...CKC_REFERENCE_MANIFEST.entries.slice(1)]),
        ).map((issue) => issue.code),
      ).toContain("MANIFEST_METADATA_INVALID");
    }
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts` (untracked new — full content)

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  projectSelectableCycleType,
  type CkcReferenceManifest,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

function withAvailability(
  references: readonly string[],
  availability: "available" | "unavailable",
): CkcReferenceManifest {
  return {
    entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
      references.includes(entry.reference)
        ? { ...entry, availability }
        : entry,
    ),
  };
}

describe("V3.1-D2-B CKC qualification resolver", () => {
  it.each([
    "cyc:framing",
    "cyc:functional-design",
    "cyc:technical-architecture",
    "cyc:qa-validation",
  ])("resolves detailed pilot %s", (cycleTypeId) => {
    const selected = projection(cycleTypeId);
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_detailed",
      level: "detailed",
      status: "resolved",
      source: "repository_candidate",
      usedReference: selected.ckc.primaryReference,
      fallbackUsed: false,
      executionAuthority: false,
    });
    expect(result.proof.consumed).toBe(true);
    expect(result.proof.disclosures).toEqual([]);
  });

  it("resolves a synthetic primary without a second fallback", () => {
    const selected = projection("cyc:delivery");
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_synthetic",
      level: "synthetic",
      status: "synthetic",
      source: "intra_v3_synthetic",
      usedReference: selected.ckc.primaryReference,
      fallbackUsed: false,
    });
    expect(result.proof.consumed).toBe(true);
  });

  it("substitutes only the declared synthetic fallback", () => {
    const selected = projection("cyc:framing");
    const resolver = new CkcQualificationResolver(
      withAvailability([selected.ckc.primaryReference], "unavailable"),
    );
    const result = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_fallback_synthetic",
      usedReference: selected.ckc.fallbackReference,
      fallbackUsed: true,
      disclosures: ["CKC_FALLBACK_USED"],
    });
    expect(result.proof.consumed).toBe(true);
  });

  it("fails closed when detailed primary and fallback are unavailable", () => {
    const selected = projection("cyc:framing");
    const result = new CkcQualificationResolver(
      withAvailability(
        [
          selected.ckc.primaryReference,
          selected.ckc.fallbackReference as string,
        ],
        "unavailable",
      ),
    ).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("Expected fail-closed result");
    expect(result.error.code).toBe("CKC_UNAVAILABLE");
    expect(result.resolution).toMatchObject({
      detailedStatus: "unresolved_unavailable",
      level: "absent",
      status: "unavailable",
      source: "unavailable",
      exploitable: false,
    });
    expect(result).not.toHaveProperty("proof");
  });

  it("fails closed when the synthetic primary is unavailable", () => {
    const selected = projection("cyc:delivery");
    const result = new CkcQualificationResolver(
      withAvailability([selected.ckc.primaryReference], "unavailable"),
    ).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("Expected fail-closed result");
    expect(result.error.code).toBe("CKC_SYNTHETIC_INVALID");
    expect(result).not.toHaveProperty("proof");
  });

  it("rejects non-allowlisted and extended mappings without reflecting input", () => {
    const selected = projection("cyc:framing");
    for (const ckc of [
      { ...selected.ckc, primaryReference: "caller/private/path.md" },
      { ...selected.ckc, dynamicSource: true },
      { ...selected.ckc, mandatory: false },
      { ...selected.ckc, unavailableBehavior: "fail-open" },
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: {
          ...selected,
          ckc,
        } as unknown as ValidatedCycleTypeProjection,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (result.ok) throw new Error("Expected invalid mapping");
      expect(result.error.code).toBe("CKC_MAPPING_INVALID");
      expect(result.error.message).not.toContain("caller/private");
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("forbids execution authority in mapping and manifest", () => {
    const selected = projection("cyc:framing");
    const mappingResult = new CkcQualificationResolver().resolve({
      projection: {
        ...selected,
        ckc: { ...selected.ckc, executionAuthority: true },
      } as unknown as ValidatedCycleTypeProjection,
      resolvedAt: RESOLVED_AT,
    });
    expect(mappingResult.ok).toBe(false);
    if (!mappingResult.ok) {
      expect(mappingResult.error.code).toBe(
        "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
      );
    }

    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? ({
              ...entry,
              executionAuthority: true,
            } as unknown as typeof entry)
          : entry,
      ),
    };
    const manifestResult = new CkcQualificationResolver(manifest).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(manifestResult.ok).toBe(false);
    if (!manifestResult.ok) {
      // Global manifest validation (F-QA-05) rejects before per-entry lookup.
      expect(manifestResult.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
  });

  it("rejects invalid resolvedAt before resolution (F-QA-06)", () => {
    const selected = projection("cyc:framing");
    for (const resolvedAt of [
      "not-an-iso-timestamp",
      "2026-08-02",
      "2026-08-02T21:00:00",
      "2026-02-31T00:00:00.000Z",
      "",
      "   ",
      " 2026-08-02T19:47:00.000Z",
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: selected,
        resolvedAt,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result).not.toHaveProperty("proof");
        expect(result.resolution.exploitable).toBe(false);
      }
    }
  });

  it("accepts ISO-8601 resolvedAt with Z, offset and milliseconds (F-QA-06)", () => {
    const selected = projection("cyc:framing");
    for (const resolvedAt of [
      "2026-08-02T19:47:00.000Z",
      "2026-08-02T21:47:00+02:00",
      "2026-08-02T19:47:00.123Z",
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: selected,
        resolvedAt,
      });
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.proof.consumed).toBe(true);
        expect(result.proof.resolvedAt).toBe(resolvedAt);
      }
    }
  });

  it("rejects globally incoherent injected manifests before lookup (F-QA-05)", () => {
    const selected = projection("cyc:framing");
    const base = CKC_REFERENCE_MANIFEST.entries;

    const foreign: CkcReferenceManifest = {
      entries: [
        ...base,
        {
          ...base[0],
          reference: "caller/private/foreign.md",
        },
      ],
    };
    const missingCanonical: CkcReferenceManifest = {
      entries: base.filter(
        (entry) => entry.reference !== selected.ckc.fallbackReference,
      ),
    };
    const duplicate: CkcReferenceManifest = {
      entries: [...base, base[0]],
    };
    const invalidMetaUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference === selected.ckc.fallbackReference
          ? ({ ...entry, availability: "maybe" } as unknown as typeof entry)
          : entry,
      ),
    };
    const invalidDoctrineUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference !== selected.ckc.primaryReference
          ? ({
              ...entry,
              doctrineStatus: "baseline",
            } as unknown as typeof entry)
          : entry,
      ),
    };
    const authorityUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference === selected.ckc.fallbackReference
          ? ({
              ...entry,
              executionAuthority: true,
            } as unknown as typeof entry)
          : entry,
      ),
    };

    for (const manifest of [
      foreign,
      missingCanonical,
      duplicate,
      invalidMetaUnselected,
      invalidDoctrineUnselected,
      authorityUnselected,
    ]) {
      const result = new CkcQualificationResolver(manifest).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result.error.message).not.toContain("foreign");
        expect(result.error.message).not.toContain("caller/private");
        expect(result).not.toHaveProperty("proof");
      }
    }
  });

  it("accepts a valid reordered canonical manifest deterministically (F-QA-05)", () => {
    const selected = projection("cyc:delivery");
    const reordered: CkcReferenceManifest = {
      entries: [...CKC_REFERENCE_MANIFEST.entries].reverse(),
    };
    const canonical = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    const reorderedResult = new CkcQualificationResolver(reordered).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(canonical.ok).toBe(true);
    expect(reorderedResult.ok).toBe(true);
    expect(reorderedResult).toEqual(canonical);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts` (untracked new — full content)

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  buildCkcConsumptionProof,
  projectSelectableCycleType,
  type CkcQualificationResolution,
  type CkcReferenceManifest,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:proof:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

function resolved(
  selected: ValidatedCycleTypeProjection,
  manifest?: CkcReferenceManifest,
): CkcQualificationResolution {
  const outcome = new CkcQualificationResolver(manifest).resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  if (!outcome.ok) throw new Error(outcome.error.message);
  return outcome.resolution;
}

describe("V3.1-D2-B CKC consumption proof", () => {
  it.each([
    ["cyc:framing", "resolved_detailed"],
    ["cyc:delivery", "resolved_synthetic"],
  ] as const)("builds immutable proof for %s", (cycleTypeId, status) => {
    const selected = projection(cycleTypeId);
    const result = buildCkcConsumptionProof(selected, resolved(selected));
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.proof).toMatchObject({
      detailedStatus: status,
      consumed: true,
      executionAuthority: false,
      doctrineStatus: "method-candidate",
      catalogVersion: selected.catalogVersion,
      catalogHash: selected.catalogHash,
      correlationId: selected.correlationId,
    });
    expect(Object.isFrozen(result.proof)).toBe(true);
    expect(Object.isFrozen(result.proof.disclosures)).toBe(true);
  });

  it("builds a fallback proof with disclosure", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const result = buildCkcConsumptionProof(
      selected,
      resolved(selected, manifest),
    );
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.proof).toMatchObject({
      detailedStatus: "resolved_fallback_synthetic",
      fallbackUsed: true,
      usedReference: selected.ckc.fallbackReference,
      disclosures: ["CKC_FALLBACK_USED"],
      consumed: true,
    });
  });

  it("rejects identity, catalogue and reference mismatches", () => {
    const selected = projection("cyc:framing");
    const valid = resolved(selected);
    const mutations: Partial<CkcQualificationResolution>[] = [
      { cycleTypeId: "cyc:other" },
      { catalogVersion: "stale" },
      { catalogHash: "stale" },
      { correlationId: "cor:lost" },
      { expectedPrimaryReference: "other" },
      { usedReference: "other" },
      { fallbackReference: "other" },
    ];
    for (const mutation of mutations) {
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        ...mutation,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
      }
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects status, T-A2 projection, doctrine and authority mismatches", () => {
    const selected = projection("cyc:delivery");
    const valid = resolved(selected);
    const mutations: Partial<CkcQualificationResolution>[] = [
      { fallbackUsed: true },
      { level: "detailed" },
      { status: "resolved" },
      { source: "repository_candidate" },
      { detailedStatus: "unresolved_unavailable", exploitable: false },
      { doctrineStatus: "baseline" as "method-candidate" },
      { executionAuthority: true as false },
      { resolvedAt: "" },
      { usedReference: undefined },
    ];
    for (const mutation of mutations) {
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        ...mutation,
      });
      expect(result.ok).toBe(false);
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects fallback without CKC_FALLBACK_USED and duplicate disclosure (F-QA-01)", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const valid = resolved(selected, manifest);

    const missing = buildCkcConsumptionProof(selected, {
      ...valid,
      disclosures: [],
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) {
      expect(missing.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
    expect(missing).not.toHaveProperty("proof");

    const duplicated = buildCkcConsumptionProof(selected, {
      ...valid,
      disclosures: ["CKC_FALLBACK_USED", "CKC_FALLBACK_USED"],
    });
    expect(duplicated.ok).toBe(false);
    if (!duplicated.ok) {
      expect(duplicated.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
    expect(duplicated).not.toHaveProperty("proof");
  });

  it("rejects CKC_FALLBACK_USED outside fallback statuses (F-QA-02)", () => {
    for (const cycleTypeId of ["cyc:framing", "cyc:delivery"] as const) {
      const selected = projection(cycleTypeId);
      const valid = resolved(selected);
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        disclosures: ["CKC_FALLBACK_USED"],
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
      }
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects incoherent fallbackPolicy against D2-A projection (F-QA-03)", () => {
    const detailed = projection("cyc:framing");
    const detailedValid = resolved(detailed);
    const detailedBad = buildCkcConsumptionProof(detailed, {
      ...detailedValid,
      fallbackPolicy: "none",
    });
    expect(detailedBad.ok).toBe(false);
    if (!detailedBad.ok) {
      expect(detailedBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    const synthetic = projection("cyc:delivery");
    const syntheticValid = resolved(synthetic);
    const syntheticBad = buildCkcConsumptionProof(synthetic, {
      ...syntheticValid,
      fallbackPolicy: "intra_v3_only",
    });
    expect(syntheticBad.ok).toBe(false);
    if (!syntheticBad.ok) {
      expect(syntheticBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    const fallbackManifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === detailed.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const fallbackValid = resolved(detailed, fallbackManifest);
    const fallbackBad = buildCkcConsumptionProof(detailed, {
      ...fallbackValid,
      fallbackPolicy: "none",
    });
    expect(fallbackBad.ok).toBe(false);
    if (!fallbackBad.ok) {
      expect(fallbackBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    expect(buildCkcConsumptionProof(detailed, detailedValid).ok).toBe(true);
    expect(buildCkcConsumptionProof(synthetic, syntheticValid).ok).toBe(true);
    expect(buildCkcConsumptionProof(detailed, fallbackValid).ok).toBe(true);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts` (untracked new — full content)

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  projectSelectableCycleType,
  type CkcReferenceManifest,
  type CycleAuditEvent,
  type CycleAuditPort,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

class AuditJournal implements CycleAuditPort {
  readonly events: CycleAuditEvent[] = [];
  append(event: CycleAuditEvent): void {
    this.events.push(event);
  }
}

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:qa:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

describe("V3.1-D2-B resolver QA", () => {
  it("emits minimal success, fallback and consumption events", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(manifest, audit).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.fallback_used",
      "oa.ckc.resolution_succeeded",
      "oa.ckc.consumption_validated",
    ]);
    for (const event of audit.events) {
      expect(event).toMatchObject({
        ts: RESOLVED_AT,
        correlationId: selected.correlationId,
        cycleTypeId: selected.cycleTypeId,
      });
      expect(event).not.toHaveProperty("objective");
      expect(event).not.toHaveProperty("scope");
      expect(event).not.toHaveProperty("profile");
      expect(event).not.toHaveProperty("reference");
    }
  });

  it("emits fail-closed failure and consumption rejection", () => {
    const selected = projection("cyc:delivery");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(manifest, audit).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(false);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.resolution_failed",
      "oa.ckc.consumption_rejected",
    ]);
    expect(audit.events[1]).toMatchObject({
      detailCode: "CKC_SYNTHETIC_INVALID",
      result: "error",
    });
  });

  it("fails closed for incoherent synthetic manifest metadata", () => {
    const selected = projection("cyc:delivery");
    for (const replacement of [
      { level: "detailed" },
      { doctrineStatus: "baseline" },
      { source: "repository_candidate" },
    ]) {
      const manifest: CkcReferenceManifest = {
        entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
          entry.reference === selected.ckc.primaryReference
            ? ({ ...entry, ...replacement } as typeof entry)
            : entry,
        ),
      };
      const result = new CkcQualificationResolver(manifest).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        // F-QA-05: global manifest validation rejects before synthetic lookup.
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result).not.toHaveProperty("proof");
      }
    }
  });

  it("maps unexpected failures to a safe D2 error", () => {
    const selected = projection("cyc:delivery");
    const throwingEntries = new Proxy(CKC_REFERENCE_MANIFEST.entries, {
      get() {
        throw new Error(
          "/Users/private/secret.md should never cross the boundary",
        );
      },
    });
    const result = new CkcQualificationResolver({
      entries: throwingEntries,
    }).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.code).toBe("D2_INTERNAL_ERROR");
      expect(result.error.message).not.toContain("/Users/");
      expect(result.error.message).not.toContain("secret");
    }
  });

  it("is deeply deterministic for identical explicit inputs", () => {
    const selected = projection("cyc:delivery");
    const resolver = new CkcQualificationResolver();
    const first = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    const second = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(second).toEqual(first);
  });

  it("keeps the historical audit event contract accepted", () => {
    const audit = new AuditJournal();
    audit.append({
      event: "oa.ckc.resolved",
      ts: RESOLVED_AT,
      correlationId: "cor:historical",
      cycleTypeId: "cyc:delivery",
      level: "synthetic",
      status: "synthetic",
      result: "ok",
      durationMs: 0,
    });
    expect(audit.events[0].event).toBe("oa.ckc.resolved");
  });

  it("keeps pure resolve when audit is undefined (F-QA-04)", () => {
    const selected = projection("cyc:framing");
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.proof.consumed).toBe(true);
    }
  });

  it("keeps nominal behavior when audit append succeeds (F-QA-04)", () => {
    const selected = projection("cyc:delivery");
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(
      CKC_REFERENCE_MANIFEST,
      audit,
    ).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.resolution_succeeded",
      "oa.ckc.consumption_validated",
    ]);
  });

  it("returns sanitized D2_INTERNAL_ERROR for every audit append throw (F-QA-04)", () => {
    const selected = projection("cyc:framing");
    const hostile =
      "/Users/private/secret.md payload=ckc-body token=sk-hostile-f4ke";
    const scenarios: Array<{
      readonly failingEvent:
        | "oa.ckc.resolution_started"
        | "oa.ckc.resolution_succeeded"
        | "oa.ckc.resolution_failed"
        | "oa.ckc.fallback_used"
        | "oa.ckc.consumption_validated"
        | "oa.ckc.consumption_rejected";
      readonly expectedAppendCalls: number;
      readonly manifest: CkcReferenceManifest;
    }> = [
      {
        failingEvent: "oa.ckc.resolution_started",
        expectedAppendCalls: 1,
        manifest: CKC_REFERENCE_MANIFEST,
      },
      {
        failingEvent: "oa.ckc.resolution_succeeded",
        expectedAppendCalls: 2,
        manifest: CKC_REFERENCE_MANIFEST,
      },
      {
        failingEvent: "oa.ckc.fallback_used",
        expectedAppendCalls: 2,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.consumption_validated",
        expectedAppendCalls: 4,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.resolution_failed",
        expectedAppendCalls: 2,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference ||
            entry.reference === selected.ckc.fallbackReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.consumption_rejected",
        expectedAppendCalls: 3,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference ||
            entry.reference === selected.ckc.fallbackReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
    ];

    for (const scenario of scenarios) {
      let appendCalls = 0;
      const seenAfterThrow: string[] = [];
      let thrown = false;
      const audit: CycleAuditPort = {
        append(event) {
          appendCalls += 1;
          if (thrown) {
            seenAfterThrow.push(event.event);
          }
          if (event.event === scenario.failingEvent) {
            thrown = true;
            throw new Error(hostile);
          }
        },
      };

      const result = new CkcQualificationResolver(
        scenario.manifest,
        audit,
      ).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("D2_INTERNAL_ERROR");
        expect(result.error.blocking).toBe(true);
        expect(result.error.retryable).toBe(true);
        expect(result.error.recoverable).toBe(true);
        expect(result.error.correlationId).toBe(selected.correlationId);
        expect(result.error.cycleTypeId).toBe(selected.cycleTypeId);
        expect(result.error.message).toBe(
          "The CKC resolution could not be completed.",
        );
        expect(result.error.message).not.toContain("/Users/");
        expect(result.error.message).not.toContain("secret");
        expect(result.error.message).not.toContain("sk-hostile");
        expect(result.error.message).not.toContain("payload");
        expect(result).not.toHaveProperty("proof");
        expect(result.resolution.exploitable).toBe(false);
      }

      expect(appendCalls).toBe(scenario.expectedAppendCalls);
      expect(seenAfterThrow).toEqual([]);
    }
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts` (tracked modified — full post-change content)

```typescript
/**
 * V3.1-D2-A — Independent QA reinforcement for Catalog Projection.
 * Production and Delivery tests must remain untouched.
 * Evidence of public seam / fingerprint binding defects must stay failing.
 * @vitest-environment node
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  ADOPTED_CYCLE_TYPE_IDS,
  CKC_PILOT_CADRAGE_PATH,
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  projectSelectableCycleType,
  serializeCatalogFingerprint,
  type CatalogProjectionErrorCode,
  type CatalogSelectionContext,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";

function context(
  overrides: Partial<CatalogSelectionContext> = {},
): CatalogSelectionContext {
  return {
    cycleTypeId: "cyc:delivery",
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: "cor:d2-a-qa",
    ...overrides,
  };
}

function cloneCatalog(
  mutate: (entries: CycleTypeDefinition[]) => void,
): CycleTypeCatalog {
  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
    ...entry,
    ckc: { ...entry.ckc },
    aliases: [...entry.aliases],
  }));
  mutate(entries);
  return { version: CYCLE_TYPE_CATALOG_VERSION, entries };
}

function expectFailure(
  result: ReturnType<typeof projectSelectableCycleType>,
  code: CatalogProjectionErrorCode,
): void {
  expect(result.ok).toBe(false);
  if (result.ok) {
    throw new Error(`Expected failure ${code}, got success`);
  }
  expect(result.error.code).toBe(code);
  expect(result.error.blocking).toBe(true);
  expect(typeof result.error.message).toBe("string");
  expect(result.error.message.length).toBeGreaterThan(0);
  expect(result).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("ckc");
}

function expectPublicRejectsDivergentCatalog(
  catalog: CycleTypeCatalog,
  cycleTypeId = "cyc:delivery",
): void {
  const result = projectSelectableCycleType(context({ cycleTypeId }), catalog);
  // INV-D2A-11/12: public API must not accept a contractually divergent catalog
  // while still validating the static canonical fingerprint.
  expect(result.ok).toBe(false);
  if (result.ok) {
    throw new Error(
      "Public Catalog Projection accepted a divergent catalog with canonical fingerprint",
    );
  }
}

describe("V3.1-D2-A QA — Catalog Projection nominals", () => {
  it("projects every active adopted cycle type with frozen read-only success", () => {
    for (const cycleTypeId of ADOPTED_CYCLE_TYPE_IDS) {
      const result = projectSelectableCycleType(context({ cycleTypeId }));
      expect(result.ok).toBe(true);
      if (!result.ok) throw new Error(result.error.message);
      const production = CYCLE_TYPE_CATALOG.entries.find(
        (entry) => entry.cycleTypeId === cycleTypeId,
      )!;
      expect(result.projection).toMatchObject({
        cycleTypeId,
        label: production.label,
        shortDescription: production.shortDescription,
        lifecycleStatus: "active",
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
        correlationId: "cor:d2-a-qa",
      });
      expect(result.projection.ckc).toEqual(production.ckc);
      expect(Object.isFrozen(result)).toBe(true);
      expect(Object.isFrozen(result.projection)).toBe(true);
      expect(Object.isFrozen(result.projection.ckc)).toBe(true);
      expect(result.projection).not.toHaveProperty("profile");
      expect(result.projection).not.toHaveProperty("recommendedProfile");
      expect(result.projection).not.toHaveProperty("gate");
      expect(result.projection).not.toHaveProperty("consumed");
      expect(result.projection).not.toHaveProperty("isMorrisDecision");
    }
  });
});

describe("V3.1-D2-A QA — fail-closed priority and exact variants", () => {
  it("rejects empty/whitespace correlationId before other checks", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          correlationId: "   ",
          catalogVersion: "wrong",
          catalogHash: "wrong",
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_CORRELATION_ID_REQUIRED",
    );
  });

  it("rejects incompatible version before fingerprint", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          catalogVersion: "stale",
          catalogHash: "wrong",
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_VERSION_INCOMPATIBLE",
    );
  });

  it("rejects stale fingerprint before type lookup", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          catalogHash: `sha256:${"0".repeat(64)}`,
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_FINGERPRINT_STALE",
    );
  });

  it("rejects unknown type before lifecycle/mapping", () => {
    expectFailure(
      projectSelectableCycleType(context({ cycleTypeId: "cyc:unknown" })),
      "CYCLE_TYPE_UNKNOWN",
    );
  });

  it.each([
    ["version whitespace", { catalogVersion: ` ${CYCLE_TYPE_CATALOG_VERSION}` }],
    ["version case", { catalogVersion: CYCLE_TYPE_CATALOG_VERSION.toUpperCase() }],
    [
      "version suffix",
      { catalogVersion: `${CYCLE_TYPE_CATALOG_VERSION}-extra` },
    ],
  ] as const)("rejects version variant: %s", (_label, overrides) => {
    expectFailure(
      projectSelectableCycleType(context(overrides)),
      "CATALOG_VERSION_INCOMPATIBLE",
    );
  });

  it.each([
    [
      "hash whitespace",
      { catalogHash: ` ${CYCLE_TYPE_CATALOG_FINGERPRINT}` },
    ],
    [
      "hash uppercase",
      { catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT.toUpperCase() },
    ],
    ["hash wrong prefix", { catalogHash: `md5:${"a".repeat(64)}` }],
    ["hash short", { catalogHash: `sha256:${"a".repeat(63)}` }],
  ] as const)("rejects fingerprint variant: %s", (_label, overrides) => {
    expectFailure(
      projectSelectableCycleType(context(overrides)),
      "CATALOG_FINGERPRINT_STALE",
    );
  });

  it("rejects empty cycleTypeId and propagates valid correlationId on failure", () => {
    const result = projectSelectableCycleType(context({ cycleTypeId: "" }));
    expectFailure(result, "CYCLE_TYPE_UNKNOWN");
    if (!result.ok) {
      expect(result.error.correlationId).toBe("cor:d2-a-qa");
    }
  });
});

describe("V3.1-D2-A QA — lifecycle and mapping negatives", () => {
  it.each(["deprecated", "unavailable", "future-status"] as const)(
    "rejects lifecycle %s",
    (lifecycleStatus) => {
      const catalog = cloneCatalog((entries) => {
        entries[7] = {
          ...entries[7],
          lifecycleStatus:
            lifecycleStatus as CycleTypeDefinition["lifecycleStatus"],
        };
      });
      const result = projectSelectableCycleType(context(), catalog);
      expectFailure(result, "CYCLE_TYPE_NOT_SELECTABLE");
    },
  );

  it("rejects mandatory=false", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, mandatory: false as unknown as true },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects unknown primaryLevel", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          primaryLevel: "unknown" as "synthetic",
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects empty/whitespace primaryReference", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, primaryReference: "  " },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects executionAuthority=true", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          executionAuthority: true as unknown as false,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects invalid doctrineStatus and unavailableBehavior", () => {
    for (const field of ["doctrineStatus", "unavailableBehavior"] as const) {
      const catalog = cloneCatalog((entries) => {
        entries[7] = {
          ...entries[7],
          ckc: { ...entries[7].ckc, [field]: "invalid" },
        } as CycleTypeDefinition;
      });
      expectFailure(
        projectSelectableCycleType(context(), catalog),
        "CYCLE_TYPE_MAPPING_INVALID",
      );
    }
  });

  it("rejects detailed mappings without canonical fallback", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          fallbackPolicy: "none",
          fallbackReference: undefined,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        catalog,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects detailed with wrong fallbackPolicy or fallbackReference", () => {
    const wrongPolicy = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: { ...entries[0].ckc, fallbackPolicy: "none" },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        wrongPolicy,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const wrongRef = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          fallbackReference:
            "method/wrong.md" as typeof CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        wrongRef,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference", () => {
    const badPrimary = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          primaryReference: "method/non-canonical.md",
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badPrimary),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const badPolicy = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, fallbackPolicy: "synthetic_map" },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badPolicy),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const badFallback = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badFallback),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const emptyFallback = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          fallbackReference: "" as unknown as typeof CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), emptyFallback),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects extended mapping properties", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          dynamicResolution: true,
        } as CycleTypeDefinition["ckc"],
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });
});

describe("V3.1-D2-A QA — error contract", () => {
  it("covers the six documented error codes with blocking safe failures", () => {
    const cases: Array<[CatalogProjectionErrorCode, () => ReturnType<typeof projectSelectableCycleType>]> =
      [
        [
          "CATALOG_CORRELATION_ID_REQUIRED",
          () => projectSelectableCycleType(context({ correlationId: "" })),
        ],
        [
          "CATALOG_VERSION_INCOMPATIBLE",
          () => projectSelectableCycleType(context({ catalogVersion: "x" })),
        ],
        [
          "CATALOG_FINGERPRINT_STALE",
          () =>
            projectSelectableCycleType(
              context({ catalogHash: `sha256:${"1".repeat(64)}` }),
            ),
        ],
        [
          "CYCLE_TYPE_UNKNOWN",
          () =>
            projectSelectableCycleType(context({ cycleTypeId: "cyc:missing" })),
        ],
        [
          "CYCLE_TYPE_NOT_SELECTABLE",
          () =>
            projectSelectableCycleType(
              context(),
              cloneCatalog((entries) => {
                entries[7] = { ...entries[7], lifecycleStatus: "deprecated" };
              }),
            ),
        ],
        [
          "CYCLE_TYPE_MAPPING_INVALID",
          () =>
            projectSelectableCycleType(
              context(),
              cloneCatalog((entries) => {
                entries[7] = {
                  ...entries[7],
                  ckc: {
                    ...entries[7].ckc,
                    executionAuthority: true as unknown as false,
                  },
                };
              }),
            ),
        ],
      ];

    for (const [code, run] of cases) {
      const result = run();
      expectFailure(result, code);
      if (!result.ok) {
        expect(Object.isFrozen(result)).toBe(true);
        expect(Object.isFrozen(result.error)).toBe(true);
      }
    }
  });

  it("documents retryable/recoverable classification for catalog stale errors", () => {
    const version = projectSelectableCycleType(
      context({ catalogVersion: "wrong" }),
    );
    const hash = projectSelectableCycleType(
      context({ catalogHash: `sha256:${"2".repeat(64)}` }),
    );
    expect(version.ok).toBe(false);
    expect(hash.ok).toBe(false);
    if (!version.ok && !hash.ok) {
      expect(version.error.retryable).toBe(true);
      expect(hash.error.retryable).toBe(true);
      expect(version.error.recoverable).toBe(true);
      expect(hash.error.recoverable).toBe(true);
    }
  });
});

describe("V3.1-D2-A QA — public fingerprint/catalog binding (critical)", () => {
  it("exposes the catalog seam on the public API signature", () => {
    // JS Function.length ignores parameters with defaults; inspect source instead.
    const source = readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/cycle/domain/catalogProjection.ts",
      ),
      "utf8",
    );
    expect(source).toMatch(
      /export function projectSelectableCycleType\(\s*context: CatalogSelectionContext,\s*catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,/,
    );
    const indexSource = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(indexSource).toContain(
      'export * from "./domain/catalogProjection";',
    );
  });

  it("rejects a catalog with modified canonicalKey under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        canonicalKey: `${entries[7].canonicalKey}-divergent`,
      };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog with modified methodCycleNumber under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = { ...entries[7], methodCycleNumber: 99 };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog with swapped still-valid contractual CKC mapping", () => {
    const catalog = cloneCatalog((entries) => {
      // Convert synthetic delivery into a still-valid detailed mapping that
      // differs from the authoritative D1 contract for cyc:delivery.
      entries[7] = {
        ...entries[7],
        ckc: {
          mandatory: true,
          primaryLevel: "detailed",
          primaryReference: CKC_PILOT_CADRAGE_PATH,
          fallbackPolicy: "synthetic_map",
          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
          executionAuthority: false,
          doctrineStatus: "method-candidate",
          unavailableBehavior: "fail-closed",
        },
      };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    const result = projectSelectableCycleType(context(), catalog);
    expect(result.ok).toBe(false);
    if (result.ok) {
      // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.
      expect(result.projection.ckc.primaryLevel).not.toBe("detailed");
    }
  });

  it("rejects a reordered catalog under canonical fingerprint", () => {
    const catalog: CycleTypeCatalog = {
      version: CYCLE_TYPE_CATALOG_VERSION,
      entries: [
        ...CYCLE_TYPE_CATALOG.entries.slice(1, 2),
        ...CYCLE_TYPE_CATALOG.entries.slice(0, 1),
        ...CYCLE_TYPE_CATALOG.entries.slice(2),
      ].map((entry) => ({
        ...entry,
        ckc: { ...entry.ckc },
        aliases: [...entry.aliases],
      })),
    };
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog, "cyc:framing");
  });

  it("rejects a catalog with an extra entry under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries.push({
        ...entries[0],
        cycleTypeId: "cyc:extra-qa",
        canonicalKey: "extra-qa",
        methodCycleNumber: 16,
        displayOrder: 16,
      });
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog missing an entry under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries.splice(14, 1);
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });
});

describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
  it("keeps the public boundary limited to adopted D2-A and D2-B exports", () => {
    const source = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(source).toContain(
      'export * from "./domain/ckcQualificationContracts";',
    );
    expect(source).toContain('export * from "./domain/catalogFingerprint";');
    expect(source).toContain('export * from "./domain/catalogProjection";');
    expect(source).toContain(
      'export * from "./domain/ckcQualificationErrors";',
    );
    expect(source).toContain(
      'export * from "./domain/ckcConsumptionProof";',
    );
    expect(source).toContain(
      'export * from "./ports/ckcQualificationResolver";',
    );
    expect(source).toContain(
      'export * from "./infrastructure/ckcReferenceManifest";',
    );
    expect(source).toContain(
      'export * from "./infrastructure/ckcQualificationResolver";',
    );
    expect(source).not.toMatch(
      /QualifyCycleBridge|qualifyCycleWithCkc|ckcQualificationResult|createD2|D2Factory|createCkcQualificationServices/,
    );
  });

  it("keeps production projection free of D2-B/C and runtime I/O imports", () => {
    for (const relative of [
      "ckcQualificationContracts.ts",
      "catalogFingerprint.ts",
      "catalogProjection.ts",
    ]) {
      const source = readFileSync(
        path.resolve(__dirname, `../../../lib/oa/cycle/domain/${relative}`),
        "utf8",
      );
      expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
      expect(source).not.toMatch(/infrastructure\//);
      expect(source).not.toMatch(
        /QualifyCycle|ResolveCycleKnowledgeContract|CkcResolverPort|CycleAuditEvent|CreateCycle|consumed|recommendedProfile|isMorrisDecision/,
      );
    }
  });

  it("does not mutate production catalog entries across calls", () => {
    const before = serializeCatalogFingerprint();
    const first = CYCLE_TYPE_CATALOG.entries[0];
    const firstCkc = first.ckc;
    projectSelectableCycleType(context());
    projectSelectableCycleType(context({ cycleTypeId: "cyc:framing" }));
    expect(serializeCatalogFingerprint()).toBe(before);
    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(first);
    expect(CYCLE_TYPE_CATALOG.entries[0].ckc).toBe(firstCkc);
    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
    expect(Object.isFrozen(first)).toBe(true);
    expect(Object.isFrozen(firstCkc)).toBe(true);
  });
});

```


## Validations (extrait terminal)

```
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 69ms
 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 9ms
 ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 9ms
 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 21ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 5ms
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 9ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (8 tests) 5ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 5ms
 ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 9ms
 ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 5ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 4ms
 ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3521ms
   ✓ SFIA action compiler > compiles valid CREATE and persists ActionCandidate  303ms
   ✓ SFIA action compiler > denies commit/push operations  336ms
   ✓ SFIA action compiler > denies protected path  424ms
   ✓ SFIA action compiler > denies context stale  357ms
   ✓ SFIA action compiler > instantiates cursor prompt from real template  361ms
   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  406ms
   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  466ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (9 tests) 7ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 7ms
 ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 6ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 3ms
 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 4ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (14 tests) 6ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 4ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 7ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 2ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 5ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 2ms
 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 3ms

 Test Files  98 passed (98)
      Tests  949 passed (949)
   Start at  00:53:46
   Duration  7.28s (transform 3.93s, setup 4.31s, collect 13.67s, tests 21.91s, environment 7.67s, prepare 4.07s)

FULL:0
=== build ===

> sfia-studio@0.1.0 build
> next build

   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 968ms
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/10) ...
   Generating static pages (2/10)
   Generating static pages (4/10)
   Generating static pages (7/10)
 ✓ Generating static pages (10/10)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      127 B         103 kB
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                         3.82 kB         119 kB
├ ○ /decision                            5.53 kB         120 kB
├ ƒ /nouvelle-demande                    10.1 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
├ ƒ /projects/[id]                       2.66 kB         108 kB
├ ○ /projects/new                        2.62 kB         108 kB
├ ƒ /studio/projects/[id]                2.15 kB         112 kB
├ ○ /studio/projects/new                 4.07 kB         114 kB
├ ○ /synthese                            4.83 kB         120 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

BUILD:0
```

## Probes indépendantes

```
[PROBE] P1_foreign_entry: REJECT_CKC_RESOLUTION_INCOHERENT | validatorUnknown=true | CLOSED
[PROBE] P2_missing_nonselected: REJECT_CKC_RESOLUTION_INCOHERENT | validatorMissing=true | CLOSED
[PROBE] P3_duplicate_find: REJECT_CKC_RESOLUTION_INCOHERENT | validatorDuplicate=true | CLOSED
[PROBE] P4_non_iso_resolvedAt: ALL_INVALID_REJECTED_AND_VALID_ACCEPTED | rejects=13 | CLOSED
[PROBE] P5_fallback_no_disclosure: REJECT_CKC_RESOLUTION_INCOHERENT | dup=CKC_RESOLUTION_INCOHERENT | CLOSED
[PROBE] P6_nonfallback_with_disclosure: PROOF_REJECTS_BOTH | detailed+synthetic | CLOSED
[PROBE] P7_incoherent_fallbackPolicy: PROOF_REJECTS_INCOHERENT_ACCEPTS_COHERENT | CLOSED
[PROBE] P8_oa.ckc.resolution_started: CONTROLLED_D2_INTERNAL_ERROR | calls=1 expected=1 afterThrow=0 leak=false | CLOSED
[PROBE] P8_oa.ckc.resolution_succeeded: CONTROLLED_D2_INTERNAL_ERROR | calls=2 expected=2 afterThrow=0 leak=false | CLOSED
[PROBE] P8_oa.ckc.fallback_used: CONTROLLED_D2_INTERNAL_ERROR | calls=2 expected=2 afterThrow=0 leak=false | CLOSED
[PROBE] P8_oa.ckc.consumption_validated: CONTROLLED_D2_INTERNAL_ERROR | calls=4 expected=4 afterThrow=0 leak=false | CLOSED
[PROBE] P8_oa.ckc.resolution_failed: CONTROLLED_D2_INTERNAL_ERROR | calls=2 expected=2 afterThrow=0 leak=false | CLOSED
[PROBE] P8_oa.ckc.consumption_rejected: CONTROLLED_D2_INTERNAL_ERROR | calls=3 expected=3 afterThrow=0 leak=false | CLOSED
[PROBE] P8_audit_matrix: ALL_SIX_FAIL_CLOSED | CLOSED
[PROBE] P8b_audit_absent_and_functional: NOMINAL | events=oa.ckc.resolution_started|oa.ckc.resolution_succeeded|oa.ckc.consumption_validated | CLOSED
[PROBE] P9_invalid_metadata_nonselected: REJECT_CKC_RESOLUTION_INCOHERENT | validatorInvalid=true | CLOSED
[PROBE] P10_reorder_determinism: EQUAL | CLOSED
[PROBE] P11_validate_before_lookup: ORDER_OK | validateAt=4991 primaryLookupAt=6159 | CLOSED
[PROBE] P12_invalid_resolvedAt_event_ts: STARTED_EMITTED_WITH_TS=not-an-iso-timestamp | outcome=CKC_RESOLUTION_INCOHERENT; events=oa.ckc.resolution_started|oa.ckc.resolution_failed|oa.ckc.consumption_rejected | CLOSED
PROBE_SUMMARY_JSON=[
PROBE_CLOSED=19/19
PROBE_OPEN=0
```

## Secrets scan

```
=== secrets scan package 2026-08-03T00:53:45+02:00 ===
NO_SECRET_PATTERNS_IN_PACKAGE
=== hostile fixtures in tests (expected adversarial strings only) ===
projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts:128:          "/Users/private/secret.md should never cross the boundary",
projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts:205:      "/Users/private/secret.md payload=ckc-body token=sk-hostile-f4ke";
projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts:313:        expect(result.error.message).not.toContain("sk-hostile");

```

## Réserves

### R-QA-REV-01 MINOR — retained
`resolution_started` (and failure events) may carry invalid `ts` when `resolvedAt` is invalid because started precedes ISO validation. No success/proof/`consumed=true`. Document in PR body; do not fix in this cycle.

### R-QA-REV-02 MINOR — retained
Probes via temporary vite-node outside Vitest `__tests__/**`. Tooling limit; package unmodified.

## Commit strategy

# Commit strategy

Recommendation: **one atomic commit** containing all thirteen package files.

Rationale:
- Atomic D2-B livrable (contracts + errors + proof + port + manifest + resolver + barrel/audit additives + tests)
- Partial commits would leave non-coherent intermediate states
- No functional split justifies multiple commits
- Exclude `.tmp-sfia-review/**` entirely

Candidate subject: `feat(sfia-studio): add V3.1-D2-B CKC resolver contract`


## Draft PR title

`feat(sfia-studio): add V3.1-D2-B CKC resolver contract`

## Draft PR body (complete — NOT created)

## Summary

Adds the SFIA Studio V3.1-D2-B CKC Resolution and Consumption package as a thirteen-file local delivery against `main` (`bb685f1205b33f887ee27b42ac918c96386a6e33`): specialized CKC qualification resolver, static typed reference manifest, consumption proof builder, additive audit events, structured D2-B errors, and adversarial/regression tests. Preserves D2-A isolation and excludes D2-C / D2-D / D3 / UI / CreateCycle.

## Morris decisions (already validated — not reopened)

1. **Audit FAIL-CLOSED** when `CycleAuditPort` is injected and `append` throws:
   - outcome `ok=false`, code `D2_INTERNAL_ERROR`, `blocking=true`, `retryable=true`, `recoverable=true`
   - no raw exception, no proof, no `consumed=true`, no recursive audit attempt
   - audit undefined remains pure-resolve OK
2. **QA revalidation** closed F-QA-01…06 with package freeze; two minor non-blocking reserves retained (below).

## Scope

In scope: BL-D2-B-01…06 package only (13 files under `projects/sfia-studio/app/lib/oa/cycle/**` and related `__tests__/oa/cycle/**`).

Out of scope: D2-C QualifyCycle bridge, D2-D, D3, UI, CreateCycle, method promotion, production observability, deploy/release.

## File inventory

| Path | Git | Role |
|---|---|---|
| `lib/oa/cycle/domain/ckcQualificationContracts.ts` | modified | D2 contracts / statuses |
| `lib/oa/cycle/domain/ckcQualificationErrors.ts` | new | Safe D2-B error factory |
| `lib/oa/cycle/domain/ckcConsumptionProof.ts` | new | Pure proof builder + ISO helper |
| `lib/oa/cycle/ports/ckcQualificationResolver.ts` | new | Specialized sync port |
| `lib/oa/cycle/infrastructure/ckcReferenceManifest.ts` | new | Static typed allowlist + validator |
| `lib/oa/cycle/infrastructure/ckcQualificationResolver.ts` | new | Resolver adapter |
| `lib/oa/cycle/ports/cycleAudit.ts` | modified | Additive D2-B events |
| `lib/oa/cycle/index.ts` | modified | Additive public exports |
| `__tests__/oa/cycle/ckcReferenceManifest.test.ts` | new | Manifest tests |
| `__tests__/oa/cycle/ckcQualificationResolver.test.ts` | new | Resolver tests |
| `__tests__/oa/cycle/ckcConsumptionProof.test.ts` | new | Proof tests |
| `__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts` | new | Audit/QA tests |
| `__tests__/oa/cycle/catalogProjection.qa.test.ts` | modified | Phase-aware D2-A/B allow, D2-C forbid |

## Runtime / domain contract

- Input: `ValidatedCycleTypeProjection` + `resolvedAt`
- Success: resolution + immutable `consumed=true` proof
- Failure: structured error, no proof property
- Deterministic for identical inputs; no filesystem/Markdown I/O

## Manifest validation

`validateCkcReferenceManifest(this.manifest)` runs before any injected-manifest lookup. Unknown, missing, duplicate, incoherent level/source/doctrine/authority, and invalid metadata fail closed with `CKC_RESOLUTION_INCOHERENT`.

## Consumption Proof invariants

- Fallback requires `CKC_FALLBACK_USED` exactly once; builder does not auto-repair
- Non-fallback statuses forbid that disclosure
- `fallbackPolicy` compared to D2-A projection mapping (`intra_v3_only` / `none`)
- Identity/catalog/reference/status mismatches never yield `consumed=true`

## Audit FAIL-CLOSED policy

Applies to all six D2-B events. Public message remains the existing `D2_INTERNAL_ERROR` safe string. Hostile append throws are sanitized; no recursive re-emit.

## QA history

- Initial QA: F-QA-01…06 MAJOR → FAIL
- Morris arbitration: FAIL-CLOSED adopted
- Corrective delivery: F-QA-01…06 fixed in five allowed files
- QA revalidation: PASS WITH RESERVES (minor only)

## F-QA-01…06 closure

Closed by regression tests and independent probes (19/19 CLOSED). Not reopened by PR readiness.

## Validation evidence (local, this cycle)

- Proof 8/8
- Resolver+QA 23/23
- D2-B 36/36
- D2-A 86/86
- oa/cycle 216/216
- typecheck PASS
- lint PASS (no `--fix`)
- full suite 949/949
- build PASS
- `git diff --check` PASS
- probes 19/19 CLOSED, 0 OPEN
- package freeze hashes unchanged vs QA revalidation

## D2-A isolation

Catalog projection production modules remain free of D2-B/C runtime I/O. Public boundary test asserts D2-A + D2-B exports and forbids D2-C factory/bridge symbols.

## D2-C / D2-D / D3 exclusions

No QualifyCycleBridge, qualifyCycleWithCkc, createCkcQualificationServices, Success/Failure D3 envelope, UI, or CreateCycle wiring in this package.

## Risks and reserves

### R-QA-REV-01 MINOR (retained)

`oa.ckc.resolution_started` (and associated failure events) may carry `ts` equal to an invalid caller `resolvedAt` because started is emitted before ISO validation. No success event, no proof, no `consumed=true`. Document-only; not corrected in this PR candidate.

### R-QA-REV-02 MINOR (retained)

Independent adversarial probes run via temporary `vite-node` outside Vitest `__tests__/**` include. Tooling limit only; package not mutated.

## Commit strategy

**Single atomic commit** for all thirteen files. The package is one D2-B livrable; splitting would create non-buildable intermediate states. Exclude all `.tmp-sfia-review/**` artifacts.

Candidate message:

```
feat(sfia-studio): add V3.1-D2-B CKC resolver contract

Introduce the thirteen-file CKC resolution/consumption package with
fail-closed audit policy, global manifest validation, ISO resolvedAt
checks, and consumption-proof invariants. Preserve D2-A isolation and
exclude D2-C/D2-D/D3.
```

## Rollback

Revert the single commit (or discard the thirteen-file working tree changes) to restore `main` at `bb685f1205b33f887ee27b42ac918c96386a6e33`. No data migration.

## Test plan

- [ ] Proof / resolver / D2-B / D2-A / oa/cycle suites green locally
- [ ] typecheck, lint, full suite, build green
- [ ] Confirm no method/UI/CreateCycle files in PR
- [ ] Confirm R-QA-REV-01/02 disclosed in PR description
- [ ] Confirm CI on draft PR once branch is pushed (future GO)

## Review guidance

Focus on: proof disclosure/fallbackPolicy invariants; global manifest validation order; FAIL-CLOSED audit sanitization/no recursion; public boundary D2-A/B vs D2-C forbid; absence of secrets.

## Checklist

- [x] Package exactly 13 files vs main
- [x] Freeze hashes match QA revalidation
- [x] F-QA-01…06 remain closed
- [x] Minor reserves disclosed
- [x] No project commit/push/PR in readiness cycle
- [ ] Future Morris GO for commit / project push / draft PR

## Explicit boundaries

- Not production-ready
- Not method baseline / no method promotion
- Not D2-C open
- Not merge-authorized
- Draft PR body prepared only — PR not created by this cycle


## Readiness matrix

# Readiness matrix

| Control | Status |
|---|---|
| Git truth | PASS |
| package inventory (13) | PASS |
| package freeze | PASS |
| diff scope | PASS |
| forbidden paths | PASS |
| tests (949) | PASS |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| probes 19/19 | PASS |
| secrets | PASS |
| D2-A isolation | PASS |
| D2-C exclusion | PASS |
| reserves disclosure | PASS WITH RESERVE |
| rollback | PASS |
| commit boundary | PASS |
| PR body | PASS |
| handoff readiness | PASS (pending publish) |


## Risks / rollback

- Risk: premature PR without disclosing minor reserves → mitigated by body sections
- Risk: package drift before commit GO → freeze hashes verified before/after validations
- Rollback: discard thirteen-file working tree / revert future single commit to `bb685f1205b33f887ee27b42ac918c96386a6e33`

## Files created/modified by this cycle

- overwritten: `.tmp-sfia-review/chatgpt-review.md`
- created under: `.tmp-sfia-review/v3-1-d2-b-pr-readiness/**`
- **zero** versioned project files modified

## Décisions Morris requises (suivantes)

GO distinct pour: commit projet + push branche projet + création draft PR (peut être groupé si READY WITH RESERVES). Aucun GO merge.

## Verdict

V3.1-D2-B CKC RESOLVER PR READINESS PASS WITH RESERVES —
THIRTEEN-FILE PACKAGE FREEZE CONFIRMED —
F-QA-01…06 REMAIN CLOSED —
R-QA-REV-01 AND R-QA-REV-02 RETAINED AS MINOR NON-BLOCKING RESERVES —
COMMIT BOUNDARY AND DRAFT PR BODY READY —
READY FOR DISTINCT MORRIS GO COMMIT / PROJECT PUSH / DRAFT PR —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR CREATED —
NO MERGE —
NO D2-C —
NO D2-D —
NO D3 —
NO METHOD PROMOTION
