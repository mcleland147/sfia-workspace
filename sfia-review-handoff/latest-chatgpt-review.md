# SFIA Studio V3.1-D2-B — Commit / Project Push / Draft PR Full Review Pack

- **Date/heure/fuseau:** 2026-08-03 01:04:07 CEST (+0200)
- **Rôle:** Cursor Git publication Critical
- **Cycle:** 13 — PR readiness (phase exécution post-readiness)
- **Profil:** Critical
- **Typologie:** INC

## GO Morris consommé

```
GO COMMIT + PROJECT PUSH + DRAFT PR SFIA STUDIO V3.1-D2-B CKC RESOLVER —
COMMIT THE FROZEN THIRTEEN-FILE PACKAGE AS ONE ATOMIC COMMIT —
PUSH delivery/sfia-studio-v3-1-d2-b-ckc-resolver —
CREATE THE PREPARED DRAFT PR AGAINST main —
RETAIN R-QA-REV-01 AND R-QA-REV-02 AS MINOR NON-BLOCKING RESERVES —
NO MERGE — NO D2-C — NO D2-D — NO D3 — NO METHOD PROMOTION
```

**Date/heure GO:** 2026-08-03 00:58 CEST (+0200)

## Anti-claims

commit ≠ CI validée · branche poussée ≠ PR validée · draft PR ≠ merge ready · tests locaux ≠ CI distante · PR readiness ≠ merge · D2-B ≠ D2-C · candidate ≠ baseline · FAIL-CLOSED ≠ observabilité prod.

## Git Truth initial

```
=== GIT PUBLICATION TRUTH 2026-08-03 01:02:46 CEST (+0200) ===
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
CACHED_CHECK_OK
--- remote D2-B ---
--- PRs ---
--- handoff ---
tip=a323d9a21ed376f68ca4925149fdd59dd6e35854
100644 blob 8bdcff151ea1181ce11fafd52339821bf42232d7	sfia-review-handoff/latest-chatgpt-review.md
# SFIA Studio V3.1-D2-B — PR Readiness Full Review Pack

- **Date/heure/fuseau:** 2026-08-03 00:54:33 CEST (+0200)
- **Rôle:** Cursor PR readiness Critical
- **Cycle:** 13 — PR readiness
- **Profil:** Critical
--- gh ---
github.com
  ✓ Logged in to github.com account mcleland147 (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'

```

## Handoff source PR readiness

- tip: `a323d9a21ed376f68ca4925149fdd59dd6e35854`
- blob: `8bdcff151ea1181ce11fafd52339821bf42232d7`

## Package freeze before commit

```
=== freeze before staging ===
POST_D2B_ORIGINAL_12=b9a4e5099ef7f27346f74686eb7f2a80a25222a2399728dd0bf62d41cc98f815
POST_FULL_13=290dcb04ef4662096ab515db1eef19372ad03cb2351e4ee27d64ca113e7a632e
POST_GIT_DIFF=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
MATCH_12
MATCH_13
MATCH_GIT
DIFF_CHECK_PASS
PROTECTED8_OK

```

## Staging exact

```
=== staged ===
M	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
A	projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts
A	projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts
A	projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts
A	projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts
A	projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
A	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
A	projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts
A	projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts
A	projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts
M	projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
count=13
 .../oa/cycle/catalogProjection.qa.test.ts          |  19 +-
 .../__tests__/oa/cycle/ckcConsumptionProof.test.ts | 227 ++++++++++
 .../oa/cycle/ckcQualificationResolver.qa.test.ts   | 323 ++++++++++++++
 .../oa/cycle/ckcQualificationResolver.test.ts      | 331 +++++++++++++++
 .../oa/cycle/ckcReferenceManifest.test.ts          | 116 +++++
 .../app/lib/oa/cycle/domain/ckcConsumptionProof.ts | 207 +++++++++
 .../oa/cycle/domain/ckcQualificationContracts.ts   |  38 ++
 .../lib/oa/cycle/domain/ckcQualificationErrors.ts  |  52 +++
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   5 +
 .../infrastructure/ckcQualificationResolver.ts     | 466 +++++++++++++++++++++
 .../cycle/infrastructure/ckcReferenceManifest.ts   | 172 ++++++++
 .../lib/oa/cycle/ports/ckcQualificationResolver.ts |  30 ++
 .../app/lib/oa/cycle/ports/cycleAudit.ts           |  16 +
 13 files changed, 2000 insertions(+), 2 deletions(-)
17	2	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
227	0	projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts
323	0	projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts
331	0	projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts
116	0	projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts
207	0	projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts
38	0	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
52	0	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts
5	0	projects/sfia-studio/app/lib/oa/cycle/index.ts
466	0	projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts
172	0	projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts
30	0	projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts
16	0	projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
CACHED_DIFF_CHECK_PASS
STAGE_SCOPE_OK

```

## Commit projet

- SHA: `dd63b20828e33d96be7c686d9e793bab4c4845b6`
- Parent: `bb685f1205b33f887ee27b42ac918c96386a6e33`
- Message: `feat(sfia-studio): add V3.1-D2-B CKC resolver contract`
- Files: exactly 13
- Package working tree vs HEAD after commit: empty

## Push projet

- Branch: `delivery/sfia-studio-v3-1-d2-b-ckc-resolver`
- Remote SHA: `dd63b20828e33d96be7c686d9e793bab4c4845b6`
- Local = remote: verified

## Draft PR

- Number: **301**
- URL: https://github.com/mcleland147/sfia-workspace/pull/301
- Title: `feat(sfia-studio): add V3.1-D2-B CKC resolver contract`
- state: OPEN · isDraft: true · base: main · head: delivery/sfia-studio-v3-1-d2-b-ckc-resolver
- headOid: `dd63b20828e33d96be7c686d9e793bab4c4845b6`
- commits: 1 · files: 13 · mergeStateStatus: BLOCKED

### Body PR complet

```markdown
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

```

## CI immédiate

```
Build and validate SFIA Studio	pending	0	https://github.com/mcleland147/sfia-workspace/actions/runs/30771445892/job/91559197454
Detect SFIA Studio changes	pass	6s	https://github.com/mcleland147/sfia-workspace/actions/runs/30771445892/job/91559185077

```

Classification: **PENDING** (Detect SFIA Studio changes = pass; Build and validate SFIA Studio = pending). Not claimed green.

## Réserves (retained)

### R-QA-REV-01 MINOR
`resolution_started` / failure events may carry invalid `ts` when `resolvedAt` invalid. No success/proof/`consumed=true`.

### R-QA-REV-02 MINOR
Probes via temporary vite-node outside Vitest `__tests__/**`.

## Diff utile des quatre fichiers modifiés

```diff
commit dd63b20828e33d96be7c686d9e793bab4c4845b6
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Mon Aug 3 01:03:09 2026 +0200

    feat(sfia-studio): add V3.1-D2-B CKC resolver contract

    Co-authored-by: Cursor <cursoragent@cursor.com>

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

## Contenu complet des neuf fichiers ajoutés


### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts`

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

### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts`

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

### `projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts`

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

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts`

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

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts`

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

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts`

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

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts`

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

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts`

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

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts`

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


## Confirmations

- second commit: no
- amend: no
- force push: no
- merge: no
- D2-C/D2-D/D3: closed
- method promotion: no
- .tmp-sfia-review excluded from commit: yes

## Git Truth final

```
branch=delivery/sfia-studio-v3-1-d2-b-ckc-resolver
HEAD=dd63b20828e33d96be7c686d9e793bab4c4845b6
origin_branch=dd63b20828e33d96be7c686d9e793bab4c4845b6
origin_main=bb685f1205b33f887ee27b42ac918c96386a6e33
staged=0
?? .tmp-sfia-review/

```

## Risks / rollback

- CI may fail → corrective Delivery distinct required; do not amend this commit in this cycle
- Rollback: close draft PR, delete remote branch only with distinct Morris GO, or revert commit `dd63b20`

## Verdict

V3.1-D2-B CKC RESOLVER COMMIT / PROJECT PUSH / DRAFT PR EXECUTION PASS WITH RESERVES —
FROZEN THIRTEEN-FILE PACKAGE COMMITTED AS ONE ATOMIC COMMIT —
REMOTE PROJECT BRANCH VERIFIED —
DRAFT PR CREATED AGAINST main —
R-QA-REV-01 AND R-QA-REV-02 RETAINED AS MINOR NON-BLOCKING RESERVES —
CI PENDING OR NOT YET AVAILABLE —
NOT MERGE READY —
NO MERGE —
NO D2-C —
NO D2-D —
NO D3 —
NO METHOD PROMOTION
