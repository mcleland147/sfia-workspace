# SFIA Studio — Product Completion — W1 G3 Local Delivery — FULL Review Pack

## 1. Timestamp (Europe/Paris)

**Timestamp:** 2026-08-22 17:15 CEST (+0200) *(updated — complete inline of all 34 W1-created files in §15)*

---

## 2. Cycle 8 CRITICAL EVOL + Morris G3 GO (consumed verbatim summary)

| Champ | Valeur |
|---|---|
| **Cycle** | **8 — Delivery / implémentation** |
| **Profil SFIA** | **CRITICAL** |
| **Typologie** | **EVOL** |
| **GO Morris consommé (G3 W1 Delivery)** | **GO MORRIS W1 DELIVERY (G3) — SFIA STUDIO PRODUCT COMPLETION CYCLE 8 — CRITICAL EVOL — UMBRELLA AUTHORIZES LOCAL IMPLEMENTATION OF W1 TRACK A + B + C + D + E UNDER DECISIONS ALREADY ADOPTED (C6 CLOSED IMPLEMENT-ONLY · D01-NARROW · D02 OPTION B · D05 NONE · G2 `pkg:sfia-studio-doctrine-v3@1.0.0` OPTION A PRODUCT ROOT) — NO REAL — RUNTIME V3 NON ADOPTED — NO PHASE B CLOSURE · NO RECOVERY E2E CLOSURE · NO PRODUCT GIT COMMIT/PUSH/PR/MERGE WITHOUT DISTINCT TRANSPORT GO — TD-C6-03 DEFERRED (NO AuthorityVerificationReceipt TABLE IN THIS DELIVERY)** |
| **Anti-leak** | G3 **≠** REAL · G3 **≠** runtime v3 ADOPTED · G3 **≠** Delivery authorization on `main` until transport · local implementation **≠** merged product truth |

---

## 3. Local Git Truth

| Field | Value |
|---|---|
| **repo** | `mcleland147/sfia-workspace` |
| **pwd** | `/Users/morris/Projects/sfia-workspace` |
| **branch** | `delivery/sfia-studio-product-completion-w1-g3` |
| **HEAD** | `b3e978fe0f8e34fae517923454d00afc9deb3af9` |
| **origin/main** | `b3e978fe0f8e34fae517923454d00afc9deb3af9` *(same SHA as local HEAD — W1 work is **uncommitted** working-tree delta)* |
| **PR #394** | **MERGED** — `docs(sfia-studio): record G2 DoctrinePackage materialization decision` — mergedAt `2026-08-22T14:27:36Z` |
| **push/main CI** | SFIA Studio CI **run #278** · databaseId **`32578764427`** · conclusion **SUCCESS** · head `b3e978fe0f8e34fae517923454d00afc9deb3af9` |
| **Transport** | **NO** project commit · **NO** push · **NO** PR · **NO** merge of W1 implementation |

---

## 4. Convergence pre-check

| Gate / source | Status |
|---|---|
| **Build Doctrine** | Consumed as process-only guardrail · no parallel engine introduced |
| **C1 / C2 / FA** | W1 scope aligned · no structural architecture gap claimed |
| **Backlog** (`05-product-completion-backlog-user-stories.md`) | **INTEGRATED ON MAIN** (PR #393) · G1 **CLOSED** |
| **C6 delta** | **CLOSED / ADOPTED BY MORRIS — implement-only** · **NOT implemented before G3** · this delivery implements TD-C6-01/02/04/05/06 · **TD-C6-03 DEFERRED** |
| **G1** | **CLOSED** (PR #393 + CI #274) |
| **G2** | **DECIDED BY MORRIS** · PR #394 merged · `pkg:sfia-studio-doctrine-v3@1.0.0` · OPTION A root |
| **G3** | **CONSUMED** for **local** W1 implementation (this pack) · **≠** merged on `main` |
| **runtime v3** | **NON ADOPTED** |

---

## 5. Runtime before inventory (pre-G3 `@ origin/main`)

| Area | Before W1 local work |
|---|---|
| **DoctrinePackage registry** | Fixture `pkg:studio-v3-oa@1.0.0` under `lib/oa/doctrine/fixtures/` · `DEFAULT_LOCAL_DOCTRINE_PIN` → fixture |
| **Product package** | `pkg:sfia-studio-doctrine-v3` **absent** from runtime registry/materialization |
| **CKC Phase A** | Method-path manifest + `ckcQualificationResolver` · `doctrineStatus: method-candidate` |
| **Trajectory / Epistemic / Confirmation** | **Memory** repositories even in SQLite product stack |
| **Product SQLite schema** | Through **M5** only (`m5-0.1.0`) |
| **F2 seam** | Qualify chain without package-index SoT · no bounded CKC cognitive injection |
| **REAL** | **ZERO** · not attempted in W1 |

---

## 6. Tracks A–E — implementation + evidence summaries

### Track A — Phase A / DoctrinePackage materialization (G2 + D02 Option B)

- **A1** Product registry + package tree under `lib/oa/doctrine/product/` (`registry.json`, `constants.ts`, `pkg-sfia-studio-doctrine-v3-1.0.0/`).
- **A2/A3** Package-internal `ckc-index.json` (15 entries) + CKC markdown artifacts copied into package tree.
- **A4** `productCkcQualificationResolver.ts` — package-bound resolver; wired via `vertical-slice-runtime/service.ts` + `localProjectComposition.ts`.
- **A5** `ckcConsumptionProof.ts` extended for package identity fields (packageVersion, packageDigest, indexDigest, ckcId, sourceDigest).
- **Evidence:** `productDoctrinePackage.test.ts`, `productCkcIndex.test.ts`, `productCkcQualification.test.ts`, `ckcConsumptionProof.test.ts`, `qualifyCycleWithCkc.test.ts`, `localProjectComposition.test.ts`.

### Track B — C6 durability (SQLite adapters + M6)

- **B1** `sqliteTrajectoryRepository.ts` + wiring in `createSqliteCycleServices.ts` (TD-C6-01/06).
- **B2** `sqliteConfirmationRepository.ts` + wiring in `createSqliteDecisionServices.ts` (TD-C6-02/05).
- **B3** `sqliteEpistemicRepository.ts` + selective materialization in cycle services (TD-C6-04).
- **B5** M6 additive schema in `db.ts` (`m6-0.1.0`).
- **Evidence:** `w1TrajectoryDurability.test.ts`, `w1ConfirmationDurability.test.ts`, `w1EpistemicDurability.test.ts`, `m6ProductSchemaMigration.test.ts`, `m3ProductSchemaMigration.test.ts`, `m5ProductSchemaMigration.test.ts`.

### Track C — Composition / qualify chain

- Product pin → resolve package → product CKC resolver in runtime service composition.
- `qualify.ts` / `orchestrateF2.ts` consume qualification + cognitive context path.
- **Evidence:** `localProjectComposition.test.ts`, `qualifyCycleWithCkc.test.ts`, `importBoundaries.test.ts` (runtime boundary guard).

### Track D — Bounded CKC → Nora seam (W1 slice)

- `ckcCognitiveContext.ts` + F2 orchestration/context injection + presentation labels.
- **Evidence:** `w1CkcSemanticSeam.test.ts` (6 tests · anti-claim Phase A ≠ Phase B).

### Track E — Product recovery foundation

- `RecoverySurface.tsx`, `ProjectRecoveryBanner.tsx`, workspace wiring — honest resume disclosure.
- **Evidence:** `w1RecoveryFoundation.test.tsx`.

---

## 7. Schema M6 details

| Item | Value |
|---|---|
| **Version constant** | `PRODUCT_SCHEMA_VERSION_M6 = "m6-0.1.0"` · `PRODUCT_SCHEMA_VERSION` → M6 |
| **Migration** | Additive on existing product SQLite (`M1→M2→M3→M5→M6` path in `openProductSqliteDatabase`) |
| **New tables** | `oa_project_trajectories`, `oa_project_trajectory_current`, `oa_confirmations`, `oa_epistemic_items` |
| **TD-C6-03** | **NOT** implemented — no `AuthorityVerificationReceipt` table |
| **Evidence** | `m6ProductSchemaMigration.test.ts` |

---

## 8. Product package — `pkg:sfia-studio-doctrine-v3@1.0.0`

| Artifact | Digest |
|---|---|
| **manifest.json** (package) | `sha256:4c8a85cf684331720c34a01f9e1dfe3a91305dd1e6f52306c50fc59bd3355608` |
| **ckc-index.json** (index) | `sha256:79e6f559f1ba5c931b143ca2dbe562f25f6cd7c78de71afc943dd9f7eda7631c` |
| **Registry pin** | Same manifest digest on `registry.json` entry |

---

## 9. D02 Option B via manifest `sources[]` `src:product-ckc-index` — NO schema mutation

- Manifest uses existing OA manifest schema (`schemaVersion: 0.1.0-oa`).
- CKC binding is **manifest `sources[]`** entry `doctrineSourceRef: "src:product-ckc-index"` pointing at index digest — **not** a new manifest schema version.
- Resolver reads index from package directory; **no** method-path SoT on product path.

---

## 10. W1 exit matrix 01–08 (each **PASS** — local evidence)

| # | Exit criterion (readiness §22) | Verdict | Evidence |
|---|---|---|---|
| **01** | Reprise honnête / no invented authority | **PASS** | `w1RecoveryFoundation.test.tsx` |
| **02** | LPS + epistemic materialized survive restart | **PASS** | `w1EpistemicDurability.test.ts` |
| **03** | Trajectory proposed/decided + current pointer durable | **PASS** | `w1TrajectoryDurability.test.ts` |
| **04** | Confirmation `granted` durable · scope-bound | **PASS** | `w1ConfirmationDurability.test.ts` |
| **05** | Order K→L→M→N enforced | **PASS** | Covered by decision/cycle integration suites + F2 orchestration guards (existing OA tests remain green) |
| **06** | Phase A package-bound · no method-path SoT · fail-closed NONE · proof schema | **PASS** | `productCkcQualification.test.ts`, `productDoctrinePackage.test.ts`, `productCkcIndex.test.ts`, `ckcConsumptionProof.test.ts`, `qualifyCycleWithCkc.test.ts` |
| **07** | Recovery foundation slice (no E2E closure) | **PASS** | `w1RecoveryFoundation.test.tsx` |
| **08** | Bounded seam CKC → Nora · ≠ Phase B closure | **PASS** | `w1CkcSemanticSeam.test.ts` |

---

## 11. TD-C6-03 — **DEFERRED**

- **AuthorityVerificationReceipt** persistence **not** implemented.
- No SQLite table · no repository adapter · backlog allows optional W1 scope — explicitly **deferred** in this G3 local delivery.

---

## 12. Test commands + results

**Working directory:** `projects/sfia-studio/app`

### W1 targeted

```bash
cd projects/sfia-studio/app && npm test -- --run \
  __tests__/oa/cycle/productCkcQualification.test.ts \
  __tests__/oa/cycle/w1EpistemicDurability.test.ts \
  __tests__/oa/cycle/w1TrajectoryDurability.test.ts \
  __tests__/oa/decision/w1ConfirmationDurability.test.ts \
  __tests__/oa/doctrine/productCkcIndex.test.ts \
  __tests__/oa/doctrine/productDoctrinePackage.test.ts \
  __tests__/oa/project/m6ProductSchemaMigration.test.ts \
  __tests__/project-assistant/w1CkcSemanticSeam.test.ts \
  __tests__/project-assistant/w1RecoveryFoundation.test.tsx \
  __tests__/vertical-slice-core/localProjectComposition.test.ts \
  __tests__/vertical-slice-runtime/importBoundaries.test.ts \
  __tests__/oa/decision/m3ProductSchemaMigration.test.ts \
  __tests__/oa/project/m5ProductSchemaMigration.test.ts \
  __tests__/oa/cycle/qualifyCycleWithCkc.test.ts \
  __tests__/oa/cycle/ckcConsumptionProof.test.ts
```

**Result:** **65/65 PASS** *(W1 delivery targeted suite — verified during G3 local implementation)*

### Full suite

```bash
cd projects/sfia-studio/app && npm test
```

**Result:** **1897/1902 PASS** · **5 FAIL** *(pre-existing / environment)*:
- **4×** process-restart proof tests (`m1RestartProcessProof`, `m2RestartProcessProof`, `m3RestartProcessProof`, `m5RestartProcessProof`) — **`tsx` worker path missing** locally (`fs.existsSync(TSX) === false`).
- **1×** FinOps Postgres integration — **missing `pg` / DATABASE env** in local environment (FinOps wiring tests).

### Build

```bash
cd projects/sfia-studio/app && npm run build
```

**Result:** **BLOCKED** — pre-existing typecheck failure: `Cannot find module 'pg'` in FinOps composition (`composeExecutionRunD2D3T7ShadowPilot.ts`) — **not introduced by W1 diff** · same class of local dependency gap as FinOps pg tests.

---

## 13. Fake / Real

| Mode | Status |
|---|---|
| **Deterministic / FAKE product path** | **PROVEN** — SQLite + package-bound CKC + F2 seam tests green |
| **REAL agent execution** | **NOT ATTEMPTED** · **ZERO REAL** maintained |

---

## 14. Complete file lists (from `git status` — `projects/sfia-studio/app`)

### Modified (33)

```
M __tests__/oa/decision/m3ProductSchemaMigration.test.ts
M __tests__/oa/project/m5ProductSchemaMigration.test.ts
M __tests__/vertical-slice-core/localProjectComposition.test.ts
M __tests__/vertical-slice-runtime/importBoundaries.test.ts
M features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M features/pre-m6-product-ui/surfaces/RecoverySurface.module.css
M features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
M features/project-assistant/f2/intentAnalysis.ts
M features/project-assistant/f2/orchestrateF2.ts
M features/project-assistant/f2/qualify.ts
M features/project-assistant/f2/types.ts
M features/project-assistant/presentationLabels.ts
M features/studio-projects/ProjectRecoveryBanner.tsx
M features/studio-projects/project-recovery-banner.module.css
M features/vertical-slice-ui/ProjectWorkspaceView.tsx
M lib/oa/cycle/application/createInitialTrajectory.ts
M lib/oa/cycle/application/proposeTrajectoryVersion.ts
M lib/oa/cycle/application/updateEpistemicState.ts
M lib/oa/cycle/domain/ckcConsumptionProof.ts
M lib/oa/cycle/domain/ckcQualificationContracts.ts
M lib/oa/cycle/domain/types.ts
M lib/oa/cycle/index.ts
M lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
M lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts
M lib/oa/doctrine/index.ts
M lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts
M lib/oa/doctrine/ports/doctrinePackageRepositoryPort.ts
M lib/oa/project/index.ts
M lib/oa/project/infrastructure/sqlite/db.ts
M lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
M lib/vertical-slice-core/localProjectComposition.ts
M lib/vertical-slice-runtime/paths.ts
M lib/vertical-slice-runtime/service.ts
```

### Created (untracked — W1 implementation)

```
?? __tests__/oa/cycle/productCkcQualification.test.ts
?? __tests__/oa/cycle/w1EpistemicDurability.test.ts
?? __tests__/oa/cycle/w1TrajectoryDurability.test.ts
?? __tests__/oa/decision/w1ConfirmationDurability.test.ts
?? __tests__/oa/doctrine/productCkcIndex.test.ts
?? __tests__/oa/doctrine/productDoctrinePackage.test.ts
?? __tests__/oa/project/m6ProductSchemaMigration.test.ts
?? __tests__/project-assistant/w1CkcSemanticSeam.test.ts
?? __tests__/project-assistant/w1RecoveryFoundation.test.tsx
?? features/project-assistant/f2/ckcCognitiveContext.ts
?? lib/oa/cycle/infrastructure/productCkcQualificationResolver.ts
?? lib/oa/cycle/infrastructure/sqlite/sqliteEpistemicRepository.ts
?? lib/oa/cycle/infrastructure/sqlite/sqliteTrajectoryRepository.ts
?? lib/oa/decision/infrastructure/sqlite/sqliteConfirmationRepository.ts
?? lib/oa/doctrine/product/   (registry, constants, package tree, 15 CKC artifacts)
```

Raw status excerpt:

```
M projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
 M projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/qualify.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
 M projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx
 M projects/sfia-studio/app/features/studio-projects/project-recovery-banner.module.css
 M projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
 M projects/sfia-studio/app/lib/oa/cycle/application/createInitialTrajectory.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
 M projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts
 M projects/sfia-studio/app/lib/oa/doctrine/index.ts
 M projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts
 M projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageRepositoryPort.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/paths.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/productCkcQualification.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/w1EpistemicDurability.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/w1TrajectoryDurability.test.ts
?? projects/sfia-studio/app/__tests__/oa/decision/w1ConfirmationDurability.test.ts
?? projects/sfia-studio/app/__tests__/oa/doctrine/productCkcIndex.test.ts
?? projects/sfia-studio/app/__tests__/oa/doctrine/productDoctrinePackage.test.ts
?? projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/w1CkcSemanticSeam.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
?? projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
?? projects/sfia-studio/app/lib/oa/cycle/infrastructure/productCkcQualificationResolver.ts
?? projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteEpistemicRepository.ts
?? projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteTrajectoryRepository.ts
?? projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/sqliteConfirmationRepository.ts
?? projects/sfia-studio/app/lib/oa/doctrine/product/
```

---

## 15. Inline created artifacts — **COMPLETE FILE CONTENTS** (all W1 new files)

**Pack completeness update:** 2026-08-22 17:14 UTC+02:00 — every untracked W1-created file under `projects/sfia-studio/app` is inlined below in full.

**File count:** 34 created files.

### `lib/oa/doctrine/product/registry.json` (FULL — 352 bytes)
```json
{
  "schemaVersion": "0.1.0-oa-registry",
  "entries": [
    {
      "doctrinePackageId": "pkg:sfia-studio-doctrine-v3",
      "version": "1.0.0",
      "digest": "sha256:4c8a85cf684331720c34a01f9e1dfe3a91305dd1e6f52306c50fc59bd3355608",
      "relativePackageDir": "packages/pkg-sfia-studio-doctrine-v3-1.0.0",
      "status": "published"
    }
  ]
}
```

### `lib/oa/doctrine/product/constants.ts` (FULL — 1620 bytes)
```typescript
import { computeManifestDigest } from "../domain/digest";
import type {
  Digest,
  DoctrinePackageManifest,
  DoctrinePackagePin,
} from "../domain/types";

export const PRODUCT_DOCTRINE_PACKAGE_ID = "pkg:sfia-studio-doctrine-v3" as const;

export const PRODUCT_DOCTRINE_PACKAGE_VERSION = "1.0.0" as const;

const PRODUCT_MANIFEST_DIGEST_PAYLOAD: Omit<
  DoctrinePackageManifest,
  "digest"
> = {
  schemaVersion: "0.1.0-oa",
  doctrinePackageId: PRODUCT_DOCTRINE_PACKAGE_ID,
  version: PRODUCT_DOCTRINE_PACKAGE_VERSION,
  status: "published",
  sources: [
    {
      doctrineSourceRef: "src:product-ckc-index",
      kind: "other",
      label: "Product CKC index v0.1.0",
      digest:
        "sha256:79e6f559f1ba5c931b143ca2dbe562f25f6cd7c78de71afc943dd9f7eda7631c" as Digest,
    },
  ],
  allowlist: ["sfia-v3-framing", "v3-native-option-a"],
  publishedAt: "2026-08-22T12:00:00.000Z",
  freshness: "current",
  compatibility: {
    studioNativeV3: true,
    legacyV26Fallback: false,
  },
  provenance: {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:pkg-sfia-studio-doctrine-v3-1",
    actor: { actorId: "sys:doctrine-publisher", role: "system" },
    source: "system",
    timestamp: "2026-08-22T12:00:00.000Z",
    correlationId: "cor:w1-g3-product-package",
  },
};

/** Pin digest matches materialized product package manifest (registry.json). */
export const DEFAULT_PRODUCT_DOCTRINE_PIN: DoctrinePackagePin = Object.freeze({
  doctrinePackageId: PRODUCT_DOCTRINE_PACKAGE_ID,
  version: PRODUCT_DOCTRINE_PACKAGE_VERSION,
  digest: computeManifestDigest(PRODUCT_MANIFEST_DIGEST_PAYLOAD),
});
```

### `lib/oa/doctrine/product/productCkcIndex.ts` (FULL — 12575 bytes)
```typescript
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { canonicalizeJson, isDigestFormat } from "../domain/digest";
import type { Digest, LocalRegistryEntry } from "../domain/types";
import type { FilesystemDoctrinePackageRepository } from "../infrastructure/filesystemDoctrinePackageRepository";
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

export async function loadProductCkcIndex(
  repository: FilesystemDoctrinePackageRepository,
  entry: LocalRegistryEntry,
  manifestDigest: Digest,
): Promise<ProductCkcIndexLoadResult> {
  const manifestLoad = await repository.loadManifest(entry);
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
    sources?: Array<{
      doctrineSourceRef?: string;
      digest?: string;
    }>;
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

  const indexLoad = await repository.loadPackageFile(entry, PRODUCT_CKC_INDEX_FILE);
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
    const artifactLoad = await repository.loadPackageFile(entry, item.artifactFile);
    if (!artifactLoad.ok) {
      return {
        ok: false,
        kind: artifactLoad.kind === "not_found" ? "not_found" : "io_error",
        message: `artifact_missing:${item.artifactFile}`,
      };
    }
    const artifactDigest = computeSourceDigest(artifactLoad.rawText);
    if (artifactDigest !== item.sourceDigest) {
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
  const loaded = await repository.loadPackageFile(entry, artifactFile);
  if (!loaded.ok) {
    return { ok: false, message: loaded.message };
  }
  return { ok: true, content: loaded.rawText };
}

function readPackageFileSync(
  registryRoot: string,
  relativePackageDir: string,
  relativePath: string,
): { ok: true; rawText: string } | { ok: false; message: string } {
  const packageDir = path.resolve(registryRoot, relativePackageDir);
  const targetPath = path.resolve(packageDir, relativePath);
  if (
    targetPath !== packageDir &&
    !targetPath.startsWith(packageDir + path.sep)
  ) {
    return { ok: false, message: "path_forbidden" };
  }
  if (!fs.existsSync(targetPath) || !fs.statSync(targetPath).isFile()) {
    return { ok: false, message: "not_found" };
  }
  return { ok: true, rawText: fs.readFileSync(targetPath, "utf8") };
}

/** Synchronous loader for resolver construction (bounded local registry). */
export function loadProductCkcIndexSync(options: {
  readonly registryRoot: string;
  readonly doctrinePackageId?: string;
  readonly packageVersion?: string;
  readonly packageDigest?: Digest;
}): ProductCkcIndexLoadResult {
  const registryRoot = path.resolve(options.registryRoot);
  const registry = JSON.parse(
    fs.readFileSync(path.join(registryRoot, "registry.json"), "utf8"),
  ) as {
    entries: Array<{
      doctrinePackageId: string;
      version: string;
      digest: Digest;
      relativePackageDir: string;
    }>;
  };
  const entry = registry.entries.find(
    (item) =>
      item.doctrinePackageId ===
        (options.doctrinePackageId ?? PRODUCT_DOCTRINE_PACKAGE_ID) &&
      item.version ===
        (options.packageVersion ?? PRODUCT_DOCTRINE_PACKAGE_VERSION),
  );
  if (!entry) {
    return {
      ok: false,
      kind: "not_found",
      message: "product_package_not_found",
    };
  }

  const manifestDigest: Digest = options.packageDigest ?? entry.digest;
  const manifestLoad = readPackageFileSync(
    registryRoot,
    entry.relativePackageDir,
    "manifest.json",
  );
  if (!manifestLoad.ok) {
    return {
      ok: false,
      kind: "not_found",
      message: "manifest_not_found",
    };
  }
  const manifest = JSON.parse(manifestLoad.rawText) as {
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

  const indexLoad = readPackageFileSync(
    registryRoot,
    entry.relativePackageDir,
    PRODUCT_CKC_INDEX_FILE,
  );
  if (!indexLoad.ok) {
    return { ok: false, kind: "not_found", message: "index_not_found" };
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
    const artifactLoad = readPackageFileSync(
      registryRoot,
      entry.relativePackageDir,
      item.artifactFile,
    );
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
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/manifest.json` (FULL — 1013 bytes)
```json
{
  "schemaVersion": "0.1.0-oa",
  "doctrinePackageId": "pkg:sfia-studio-doctrine-v3",
  "version": "1.0.0",
  "status": "published",
  "sources": [
    {
      "doctrineSourceRef": "src:product-ckc-index",
      "kind": "other",
      "label": "Product CKC index v0.1.0",
      "digest": "sha256:79e6f559f1ba5c931b143ca2dbe562f25f6cd7c78de71afc943dd9f7eda7631c"
    }
  ],
  "allowlist": [
    "sfia-v3-framing",
    "v3-native-option-a"
  ],
  "publishedAt": "2026-08-22T12:00:00.000Z",
  "freshness": "current",
  "compatibility": {
    "studioNativeV3": true,
    "legacyV26Fallback": false
  },
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:pkg-sfia-studio-doctrine-v3-1",
    "actor": {
      "actorId": "sys:doctrine-publisher",
      "role": "system"
    },
    "source": "system",
    "timestamp": "2026-08-22T12:00:00.000Z",
    "correlationId": "cor:w1-g3-product-package"
  },
  "digest": "sha256:4c8a85cf684331720c34a01f9e1dfe3a91305dd1e6f52306c50fc59bd3355608"
}
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc-index.json` (FULL — 4380 bytes)
```json
{
  "schemaVersion": "0.1.0-product-ckc-index",
  "contractVersion": "0.1.0",
  "entries": [
    {
      "cycleTypeId": "cyc:framing",
      "ckcId": "ckc:studio:framing",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/01-cadrage.md",
      "sourceDigest": "sha256:6dff6cc6b69915867df9f9eee446f1aace0047125d321241d309a2bae06e9e29"
    },
    {
      "cycleTypeId": "cyc:functional-design",
      "ckcId": "ckc:studio:functional-design",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/02-conception-fonctionnelle.md",
      "sourceDigest": "sha256:f6f99654e7c91bd7ca2b19f74425b9903293baf3181c4f910c5cc585924bac88"
    },
    {
      "cycleTypeId": "cyc:functional-architecture",
      "ckcId": "ckc:studio:functional-architecture",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/03-architecture-fonctionnelle.md",
      "sourceDigest": "sha256:06f24ed94d03d011fbaaf930071394b1a755b733593bcec7bfdd3fcae1322e47"
    },
    {
      "cycleTypeId": "cyc:ux-ui",
      "ckcId": "ckc:studio:ux-ui",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/04-ux-ui.md",
      "sourceDigest": "sha256:4b5cc9d37d9e3eda3acd2d2d9790ffedc25edc4925d6b6a4e852930c2d2e5f50"
    },
    {
      "cycleTypeId": "cyc:backlog",
      "ckcId": "ckc:studio:backlog",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/05-backlog-user-stories.md",
      "sourceDigest": "sha256:dafb51ae28c07ec8b9b48fcc0c69d4d272c893ebd97c4c3260afb850b7e337bb"
    },
    {
      "cycleTypeId": "cyc:technical-architecture",
      "ckcId": "ckc:studio:technical-architecture",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/06-architecture-technique.md",
      "sourceDigest": "sha256:7d6d9cb9ac438a3965daf87a37b3f263f9b99e9a0045663cb3c5dc316224646e"
    },
    {
      "cycleTypeId": "cyc:integration-devops",
      "ckcId": "ckc:studio:integration-devops",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/07-integration-devops.md",
      "sourceDigest": "sha256:934959b29fa94af01d9b4db1e48674d9ac8da79c9fe9c05859bd6c13fd0a192e"
    },
    {
      "cycleTypeId": "cyc:delivery",
      "ckcId": "ckc:studio:delivery",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/08-delivery-implementation.md",
      "sourceDigest": "sha256:3b5b31426bf13a55d7288f604e0366759850c6c25547f1897cd3c3fbc9fda433"
    },
    {
      "cycleTypeId": "cyc:qa-validation",
      "ckcId": "ckc:studio:qa-validation",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/09-qa-validation.md",
      "sourceDigest": "sha256:15f8185b024b45976846d2db24800e2ca274829e5c904535eaa7b81326e5e6a2"
    },
    {
      "cycleTypeId": "cyc:security",
      "ckcId": "ckc:studio:security",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/10-securite-rssi.md",
      "sourceDigest": "sha256:1b115e5fee19591977f1388ab1983ca983a35799bbcc6ae9085667131d850f79"
    },
    {
      "cycleTypeId": "cyc:release",
      "ckcId": "ckc:studio:release",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/11-deploiement-release.md",
      "sourceDigest": "sha256:e5ad45b6d4d5634130ebd04903d7c49844db2d916cced0779f52e7ac7f7f909d"
    },
    {
      "cycleTypeId": "cyc:observability",
      "ckcId": "ckc:studio:observability",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/12-observabilite-run-readiness.md",
      "sourceDigest": "sha256:d89591e6c3f6ba5c959c9b6377ac08963d407ea4415be80639ae16d2049289c6"
    },
    {
      "cycleTypeId": "cyc:pr-readiness",
      "ckcId": "ckc:studio:pr-readiness",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/13-pr-readiness.md",
      "sourceDigest": "sha256:a486c2f42b3ed892d393c40795ccdd0f2f0ea6f080d6357e56f8e5e879018a63"
    },
    {
      "cycleTypeId": "cyc:post-merge",
      "ckcId": "ckc:studio:post-merge",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/14-post-merge.md",
      "sourceDigest": "sha256:52c13c1fae6132f32008287a35d0198c602a0f03fbf098aa40bed48f3f634048"
    },
    {
      "cycleTypeId": "cyc:capitalization",
      "ckcId": "ckc:studio:capitalization",
      "contractVersion": "0.1.0",
      "artifactFile": "ckc/15-capitalisation-rex.md",
      "sourceDigest": "sha256:94002ef5c669e8b84f1cea2ea223dea18b26e244f665ac20531839a111cf844c"
    }
  ],
  "digest": "sha256:79e6f559f1ba5c931b143ca2dbe562f25f6cd7c78de71afc943dd9f7eda7631c"
}
```

### `lib/oa/cycle/infrastructure/productCkcQualificationResolver.ts` (FULL — 9743 bytes)
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
  PRODUCT_DOCTRINE_PACKAGE_ID,
  findProductCkcIndexEntry,
  loadProductCkcIndexSync,
  type Digest,
  type ProductCkcIndexLoadResult,
} from "@/lib/oa/doctrine";

export type ProductCkcQualificationResolverOptions = {
  readonly registryRoot: string;
  readonly doctrinePackageId?: string;
  readonly packageVersion?: string;
  readonly packageDigest?: Digest;
};

function productResolution(
  projection: ValidatedCycleTypeProjection,
  resolvedAt: string,
  input: {
    readonly detailedStatus: CkcQualificationDetailedStatus;
    readonly level: CkcQualificationResolution["level"];
    readonly status: CkcQualificationResolution["status"];
    readonly source: CkcQualificationResolution["source"];
    readonly usedReference?: string;
    readonly exploitable: boolean;
    readonly packageVersion?: string;
    readonly packageDigest?: string;
    readonly indexDigest?: string;
    readonly ckcId?: string;
    readonly ckcContractVersion?: string;
    readonly sourceDigest?: string;
  },
): CkcQualificationResolution {
  return Object.freeze({
    cycleTypeId: projection.cycleTypeId,
    detailedStatus: input.detailedStatus,
    level: input.level,
    status: input.status,
    source: input.source,
    fallbackPolicy: "none" as const,
    expectedPrimaryReference: input.ckcId ?? projection.cycleTypeId,
    ...(input.usedReference ? { usedReference: input.usedReference } : {}),
    fallbackUsed: false as const,
    doctrineStatus: "product-studio-native" as const,
    executionAuthority: false as const,
    catalogVersion: projection.catalogVersion,
    catalogHash: projection.catalogHash,
    correlationId: projection.correlationId,
    resolvedAt,
    exploitable: input.exploitable,
    disclosures: Object.freeze([]),
    ...(input.packageVersion
      ? {
          doctrinePackageId: PRODUCT_DOCTRINE_PACKAGE_ID,
          packageVersion: input.packageVersion,
          packageDigest: input.packageDigest,
          indexDigest: input.indexDigest,
          ckcId: input.ckcId,
          ckcContractVersion: input.ckcContractVersion,
          sourceDigest: input.sourceDigest,
        }
      : {}),
  });
}

export class ProductCkcQualificationResolver
  implements CkcQualificationResolverPort
{
  private readonly loaded: ProductCkcIndexLoadResult;

  constructor(
    options: ProductCkcQualificationResolverOptions,
    private readonly audit?: CycleAuditPort,
  ) {
    this.loaded = loadProductCkcIndexSync(options);
  }

  resolve(
    input: CkcQualificationResolveInput,
  ): CkcQualificationResolutionOutcome {
    const { projection, resolvedAt } = input;

    if (
      !this.tryEmit(
        "oa.ckc.resolution_started",
        projection,
        resolvedAt,
        "started",
      )
    ) {
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
      if (!this.loaded.ok) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_unavailable",
          this.loaded.kind === "digest_mismatch" ||
            this.loaded.kind === "source_digest_mismatch"
            ? "CKC_RESOLUTION_INCOHERENT"
            : "CKC_UNAVAILABLE",
        );
      }

      const entry = findProductCkcIndexEntry(
        this.loaded.index,
        projection.cycleTypeId,
      );
      if (!entry) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_unavailable",
          "CKC_UNAVAILABLE",
        );
      }

      return this.success(
        projection,
        productResolution(projection, resolvedAt, {
          detailedStatus: "resolved_detailed",
          level: "detailed",
          status: "resolved",
          source: "product_package",
          usedReference: entry.ckcId,
          exploitable: true,
          packageVersion: this.loaded.packageVersion,
          packageDigest: this.loaded.packageDigest,
          indexDigest: this.loaded.indexDigest,
          ckcId: entry.ckcId,
          ckcContractVersion: entry.contractVersion,
          sourceDigest: entry.sourceDigest,
        }),
      );
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
    const failed = productResolution(projection, resolvedAt, {
      detailedStatus,
      level: "absent",
      status:
        detailedStatus === "unresolved_invalid_mapping"
          ? "invalid"
          : "unavailable",
      source: "unavailable",
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

  private auditFailure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
  ): CkcQualificationResolutionOutcome {
    const failed = productResolution(projection, resolvedAt, {
      detailedStatus: "unresolved_unavailable",
      level: "absent",
      status: "unavailable",
      source: "unavailable",
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
      | "oa.ckc.consumption_validated"
      | "oa.ckc.consumption_rejected",
    projection: ValidatedCycleTypeProjection,
    ts: string,
    result: "started" | "ok" | "error",
    detailedStatus?: CkcQualificationDetailedStatus,
    detailCode?: string,
  ): boolean {
    if (!this.audit) return true;
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

export function createProductCkcQualificationResolver(
  options: ProductCkcQualificationResolverOptions,
  audit?: CycleAuditPort,
): ProductCkcQualificationResolver {
  return new ProductCkcQualificationResolver(options, audit);
}
```

### `lib/oa/cycle/infrastructure/sqlite/sqliteTrajectoryRepository.ts` (FULL — 5129 bytes)
```typescript
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
  if (trajectory.status === "validated" || trajectory.status === "active") {
    return true;
  }
  return trajectory.status === "candidate" && trajectory.version === 1;
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

### `lib/oa/cycle/infrastructure/sqlite/sqliteEpistemicRepository.ts` (FULL — 3213 bytes)
```typescript
import type { EpistemicItem } from "../../domain/types";
import type { EpistemicRepositoryPort } from "../../ports/epistemicRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

function cloneItem(item: EpistemicItem): EpistemicItem {
  return structuredClone(item);
}

/**
 * Selective epistemic persistence on Product SQLite (M6).
 * Only materialized items are saved via saveForProject.
 */
export class SqliteEpistemicRepository implements EpistemicRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async listByProject(projectId: string): Promise<EpistemicItem[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_epistemic_items
         WHERE project_id = ? AND materialized = 1
         ORDER BY created_at ASC, epistemic_item_id ASC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneItem(JSON.parse(row.payload_json) as EpistemicItem),
    );
  }

  async findById(epistemicItemId: string): Promise<EpistemicItem | null> {
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_epistemic_items WHERE epistemic_item_id = ?`,
      )
      .get(epistemicItemId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return cloneItem(JSON.parse(row.payload_json) as EpistemicItem);
  }

  async save(item: EpistemicItem): Promise<void> {
    void item;
    // Non-materialized drafts remain process-local by design.
  }

  async saveForProject(projectId: string, item: EpistemicItem): Promise<void> {
    if (this.store.failNextSave === "epistemic") {
      this.store.failNextSave = null;
      throw new Error("forced_epistemic_save_failure");
    }
    const now = new Date().toISOString();
    const payload = JSON.stringify(cloneItem(item));
    this.store.db
      .prepare(
        `INSERT INTO oa_epistemic_items(
           epistemic_item_id, project_id, type, status, materialized, payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, 1, ?, ?, ?)
         ON CONFLICT(epistemic_item_id) DO UPDATE SET
           project_id = excluded.project_id,
           type = excluded.type,
           status = excluded.status,
           materialized = excluded.materialized,
           payload_json = excluded.payload_json,
           updated_at = excluded.updated_at`,
      )
      .run(
        item.epistemicItemId,
        projectId,
        item.type,
        item.status,
        payload,
        now,
        now,
      );
  }

  async markSuperseded(epistemicItemId: string): Promise<void> {
    const existing = await this.findById(epistemicItemId);
    if (!existing) {
      throw new Error("epistemic_missing_for_supersede");
    }
    const next = cloneItem(existing);
    next.status = "superseded";
    await this.saveForProject(
      next.relatedObjects?.find((id) => id.startsWith("prj:")) ??
        (this.store.db
          .prepare(
            `SELECT project_id FROM oa_epistemic_items WHERE epistemic_item_id = ?`,
          )
          .get(epistemicItemId) as { project_id?: string } | undefined
        )?.project_id ??
        "",
      next,
    );
  }
}
```

### `lib/oa/decision/infrastructure/sqlite/sqliteConfirmationRepository.ts` (FULL — 3867 bytes)
```typescript
import type { Confirmation } from "../../domain/types";
import type { ConfirmationRepositoryPort } from "../../ports/confirmationRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

function cloneConfirmation(confirmation: Confirmation): Confirmation {
  return structuredClone(confirmation);
}

const DURABLE_STATUSES = new Set<Confirmation["status"]>([
  "requested",
  "granted",
  "refused",
  "expired",
  "cancelled",
  "consumed",
  "superseded",
]);

/**
 * Durable Confirmation repository on Product SQLite (M6).
 * CAS consume via SQL WHERE status='granted'.
 */
export class SqliteConfirmationRepository implements ConfirmationRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  private rowToConfirmation(payloadJson: string): Confirmation {
    return cloneConfirmation(JSON.parse(payloadJson) as Confirmation);
  }

  async findById(confirmationId: string): Promise<Confirmation | null> {
    const row = this.store.db
      .prepare(`SELECT payload_json FROM oa_confirmations WHERE confirmation_id = ?`)
      .get(confirmationId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return this.rowToConfirmation(row.payload_json);
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<Confirmation | null> {
    const row = this.store.db
      .prepare(`SELECT payload_json FROM oa_confirmations WHERE idempotency_key = ?`)
      .get(idempotencyKey) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return this.rowToConfirmation(row.payload_json);
  }

  async exists(confirmationId: string): Promise<boolean> {
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

### `features/project-assistant/f2/ckcCognitiveContext.ts` (FULL — 6981 bytes)
```typescript
/**
 * W1 Track D — bounded CKC→Nora semantic seam.
 * Loads resolved product-package CKC markdown and derives attributable Recommendations only.
 * No live OpenAI · no execution authority · no Morris decision.
 */

import fs from "node:fs";
import path from "node:path";
import type { CkcQualificationSuccessResult } from "@/lib/oa/cycle";
import {
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  PRODUCT_DOCTRINE_PACKAGE_ID,
} from "@/lib/oa/doctrine/product/constants";
import {
  findProductCkcIndexEntry,
  loadProductCkcIndexSync,
} from "@/lib/oa/doctrine/product/productCkcIndex";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { QualificationDto } from "./types";

export {
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  PRODUCT_DOCTRINE_PACKAGE_ID,
};

export const CKC_ATTRIBUTION_MARKER_PREFIX =
  "[CKC ATTRIBUTABLE · ckc:studio:" as const;

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

function readArtifactSync(
  registryRoot: string,
  relativePackageDir: string,
  artifactFile: string,
): string | null {
  const packageDir = path.resolve(registryRoot, relativePackageDir);
  const targetPath = path.resolve(packageDir, artifactFile);
  if (
    targetPath !== packageDir &&
    !targetPath.startsWith(packageDir + path.sep)
  ) {
    return null;
  }
  try {
    return fs.readFileSync(targetPath, "utf8");
  } catch {
    return null;
  }
}

function resolveRegistryEntry(
  registryRoot: string,
  packagePin: DoctrinePackagePin,
): { relativePackageDir: string } | null {
  try {
    const registry = JSON.parse(
      fs.readFileSync(path.join(path.resolve(registryRoot), "registry.json"), "utf8"),
    ) as {
      entries: Array<{
        doctrinePackageId: string;
        version: string;
        digest: string;
        relativePackageDir: string;
      }>;
    };
    const entry = registry.entries.find(
      (candidate) =>
        candidate.doctrinePackageId === packagePin.doctrinePackageId &&
        candidate.version === packagePin.version &&
        candidate.digest === packagePin.digest,
    );
    return entry ? { relativePackageDir: entry.relativePackageDir } : null;
  } catch {
    return null;
  }
}

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

  const registryEntry = resolveRegistryEntry(input.registryRoot, input.packagePin);
  if (!registryEntry) return null;

  const markdown = readArtifactSync(
    input.registryRoot,
    registryEntry.relativePackageDir,
    indexEntry.artifactFile,
  );
  if (!markdown) return null;

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
    markdown,
    provenance,
  });
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
    disclosures: [
      ...input.qualification.disclosures,
      `CKC_SEMANTIC:${content.provenance.ckcId}@${content.provenance.doctrinePackageId}@${content.provenance.packageVersion}`,
    ],
  };
}
```

### `__tests__/oa/doctrine/productDoctrinePackage.test.ts` (FULL — 2825 bytes)
```typescript
/**
 * W1 G3 — Product DoctrinePackage materialization.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  AjvSchemaValidationAdapter,
  FilesystemDoctrinePackageRepository,
  FixedClock,
  MemoryDoctrineAuditJournal,
  ResolveDoctrinePackage,
  Sha256DigestVerificationAdapter,
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  PRODUCT_DOCTRINE_PACKAGE_ID,
  computeManifestDigest,
} from "@/lib/oa/doctrine";

const APP_ROOT = path.resolve(__dirname, "../../..");
const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

function buildResolver(registryRoot = PRODUCT_ROOT) {
  return new ResolveDoctrinePackage(
    new FilesystemDoctrinePackageRepository({ registryRoot }),
    new AjvSchemaValidationAdapter({ schemasRoot: SCHEMAS }),
    new Sha256DigestVerificationAdapter(),
    new FixedClock("2026-08-22T12:00:00.000Z"),
    new MemoryDoctrineAuditJournal(),
  );
}

describe("Product DoctrinePackage", () => {
  it("resolves pkg:sfia-studio-doctrine-v3 with matching digest", async () => {
    const resolver = buildResolver();
    const result = await resolver.resolve({
      pin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      correlationId: "cor:product-package",
    });
    expect(result.outcome).toBe("resolved");
    if (result.outcome !== "resolved") return;
    expect(result.manifest.doctrinePackageId).toBe(PRODUCT_DOCTRINE_PACKAGE_ID);
    expect(result.manifest.digest).toBe(DEFAULT_PRODUCT_DOCTRINE_PIN.digest);
    expect(result.ref.digest).toBe(DEFAULT_PRODUCT_DOCTRINE_PIN.digest);
  });

  it("rejects corrupt manifest digest", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "oa-product-corrupt-"));
    fs.cpSync(PRODUCT_ROOT, dir, { recursive: true });
    const manifestPath = path.join(
      dir,
      "packages/pkg-sfia-studio-doctrine-v3-1.0.0/manifest.json",
    );
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    manifest.sources[0].label = "tampered";
    fs.writeFileSync(manifestPath, JSON.stringify(manifest), "utf8");
    const resolver = buildResolver(dir);
    const result = await resolver.resolve({ pin: DEFAULT_PRODUCT_DOCTRINE_PIN });
    expect(result.outcome).toBe("digest_mismatch");
  });

  it("computes stable manifest digest for product package", () => {
    const manifestPath = path.join(
      PRODUCT_ROOT,
      "packages/pkg-sfia-studio-doctrine-v3-1.0.0/manifest.json",
    );
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const { digest: _omit, ...rest } = manifest;
    void _omit;
    expect(computeManifestDigest(rest)).toBe(DEFAULT_PRODUCT_DOCTRINE_PIN.digest);
  });
});
```

### `__tests__/oa/doctrine/productCkcIndex.test.ts` (FULL — 2283 bytes)
```typescript
/**
 * W1 G3 — Product CKC index integrity.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { FilesystemDoctrinePackageRepository, DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine";
import {
  findProductCkcIndexEntry,
  loadProductCkcIndexSync,
  validateProductCkcIndex,
} from "@/lib/oa/doctrine/product/productCkcIndex";

const APP_ROOT = path.resolve(__dirname, "../../..");
const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");

describe("Product CKC index", () => {
  it("loads index with 15 cycleType mappings", () => {
    const loaded = loadProductCkcIndexSync({ registryRoot: PRODUCT_ROOT });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.index.entries).toHaveLength(15);
    expect(loaded.packageDigest).toBe(DEFAULT_PRODUCT_DOCTRINE_PIN.digest);
  });

  it("maps cyc:delivery to ckc:studio:delivery", () => {
    const loaded = loadProductCkcIndexSync({ registryRoot: PRODUCT_ROOT });
    if (!loaded.ok) throw new Error("index load failed");
    const entry = findProductCkcIndexEntry(loaded.index, "cyc:delivery");
    expect(entry?.ckcId).toBe("ckc:studio:delivery");
    expect(entry?.contractVersion).toBe("0.1.0");
    expect(entry?.artifactFile).toBe("ckc/08-delivery-implementation.md");
  });

  it("fails closed on digest tamper", () => {
    const raw = JSON.parse(
      fs.readFileSync(
        path.join(
          PRODUCT_ROOT,
          "packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc-index.json",
        ),
        "utf8",
      ),
    );
    raw.entries[0].sourceDigest = "sha256:" + "0".repeat(64);
    expect(validateProductCkcIndex(raw)).toBe("index_digest_mismatch");
  });

  it("verifies artifact digests through repository loader", async () => {
    const repo = new FilesystemDoctrinePackageRepository({
      registryRoot: PRODUCT_ROOT,
    });
    const entry = await repo.findEntry(
      DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    );
    expect(entry).not.toBeNull();
    if (!entry) return;
    const artifact = await repo.loadPackageFile(
      entry,
      "ckc/01-cadrage.md",
    );
    expect(artifact.ok).toBe(true);
  });
});
```

### `__tests__/oa/cycle/productCkcQualification.test.ts` (FULL — 2692 bytes)
```typescript
/** @vitest-environment node */
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  createProductCkcQualificationResolver,
  projectSelectableCycleType,
} from "@/lib/oa/cycle";
import { CKC_SYNTHETIC_MAP_PATH } from "@/lib/oa/cycle/domain/cycleTypeCatalog";

const APP_ROOT = path.resolve(__dirname, "../../..");
const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const RESOLVED_AT = "2026-08-22T12:00:00.000Z";

describe("Product CKC qualification", () => {
  it("cyc:delivery resolves studio CKC from product package (no method path)", () => {
    const projectionResult = projectSelectableCycleType({
      cycleTypeId: "cyc:delivery",
      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
      correlationId: "cor:delivery-product",
    });
    expect(projectionResult.ok).toBe(true);
    if (!projectionResult.ok) return;

    const resolver = createProductCkcQualificationResolver({
      registryRoot: PRODUCT_ROOT,
    });
    const result = resolver.resolve({
      projection: projectionResult.projection,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.resolution.doctrineStatus).toBe("product-studio-native");
    expect(result.resolution.source).toBe("product_package");
    expect(result.resolution.usedReference).toBe("ckc:studio:delivery");
    expect(result.resolution.fallbackPolicy).toBe("none");
    expect(result.resolution.fallbackUsed).toBe(false);
    expect(result.resolution.usedReference).not.toContain("method/");
    expect(result.proof.doctrineStatus).toBe("product-studio-native");
    expect(result.proof.ckcId).toBe("ckc:studio:delivery");
    expect(result.proof.doctrinePackageId).toBe("pkg:sfia-studio-doctrine-v3");
  });

  it("method resolver still uses synthetic map for cyc:delivery", () => {
    const projectionResult = projectSelectableCycleType({
      cycleTypeId: "cyc:delivery",
      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
      correlationId: "cor:delivery-method",
    });
    expect(projectionResult.ok).toBe(true);
    if (!projectionResult.ok) return;

    const result = new CkcQualificationResolver().resolve({
      projection: projectionResult.projection,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.resolution.doctrineStatus).toBe("method-candidate");
    expect(result.resolution.usedReference).toBe(CKC_SYNTHETIC_MAP_PATH);
  });
});
```

### `__tests__/oa/project/m6ProductSchemaMigration.test.ts` (FULL — 4328 bytes)
```typescript
/**
 * M6 — Product SQLite migration M5→M6.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  DEFAULT_PRODUCT_DOCTRINE_PIN,
} from "@/lib/oa/doctrine";
import {
  PRODUCT_SCHEMA_VERSION,
  PRODUCT_SCHEMA_VERSION_M5,
  createTestSqliteProductProjectServices,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";

const APP_ROOT = path.resolve(__dirname, "../../..");
const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m6-mig-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function buildProjectServices(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: PRODUCT_ROOT,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

function tableExists(db: DatabaseSync, name: string): boolean {
  const row = db
    .prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`)
    .get(name) as { name?: string } | undefined;
  return row?.name === name;
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("M6 Product SQLite schema migration", () => {
  it("migrates M5 DB additively to m6", async () => {
    const dbPath = tempDbPath("m5-legacy.sqlite");
    {
      const bootstrap = buildProjectServices(dbPath);
      await bootstrap.createProject.execute({
        projectId: "prj:m6-mig",
        title: "M5 legacy",
        objective: "preserve",
        context: "ctx",
        scope: "scope",
        doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
        createdBy: {
          actorId: "actor:morris",
          role: "project_owner",
          displayName: "Morris",
          authorityLevel: "N3",
        },
        lpsVersionId: "lps:m6-mig-v1",
        idempotencyKey: "idem:m6-mig",
      });
      bootstrap.dispose();
      openServices.pop();
    }

    {
      const db = new DatabaseSync(dbPath);
      db.exec("DROP TABLE IF EXISTS oa_epistemic_items");
      db.exec("DROP TABLE IF EXISTS oa_confirmations");
      db.exec("DROP TABLE IF EXISTS oa_project_trajectory_current");
      db.exec("DROP TABLE IF EXISTS oa_project_trajectories");
      db.prepare(
        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
      ).run(PRODUCT_SCHEMA_VERSION_M5);
      db.close();
    }

    const svc = buildProjectServices(dbPath);
    const version = svc.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
    expect(PRODUCT_SCHEMA_VERSION).toBe("m6-0.1.0");
    expect(tableExists(svc.store.db, "oa_project_trajectories")).toBe(true);
    expect(tableExists(svc.store.db, "oa_project_trajectory_current")).toBe(
      true,
    );
    expect(tableExists(svc.store.db, "oa_confirmations")).toBe(true);
    expect(tableExists(svc.store.db, "oa_epistemic_items")).toBe(true);

    const project = await svc.getProject.execute({ projectId: "prj:m6-mig" });
    expect(project.ok).toBe(true);
  });

  it("fails closed on unknown schema version", () => {
    const dbPath = tempDbPath("unknown.sqlite");
    const db = new DatabaseSync(dbPath);
    db.exec(`
CREATE TABLE schema_meta (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);
INSERT INTO schema_meta(key, value) VALUES ('schema_version', 'm99-future');
`);
    db.close();
    expect(() => buildProjectServices(dbPath)).toThrow(
      /product_sqlite_unsupported_schema/,
    );
  });
});
```

### `__tests__/oa/cycle/w1TrajectoryDurability.test.ts` (FULL — 4785 bytes)
```typescript
/**
 * W1 — Trajectory SQLite durability.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  DEFAULT_PRODUCT_DOCTRINE_PIN,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import {
  createTestSqliteCycleServices,
  type TrajectoryStep,
} from "@/lib/oa/cycle";

const APP_ROOT = path.resolve(__dirname, "../../..");
const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const STEPS_V1: TrajectoryStep[] = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" },
  { stepId: "stp:decide", order: 2, label: "Decide", state: "pending" },
];

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w1-trj-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

async function boot(dbPath: string, createProject = true) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: PRODUCT_ROOT,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
    dbPath,
  });
  openServices.push(projects);
  if (createProject) {
    await projects.createProject.execute({
      projectId: "prj:w1-trj",
      title: "Trajectory durability",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:w1-trj-v1",
      idempotencyKey: "idem:w1-trj",
    });
  }
  const cycles = createTestSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
  });
  return { projects, cycles };
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("W1 trajectory durability", () => {
  it("persists current trajectory across reopen", async () => {
    const dbPath = tempDbPath("trj.sqlite");
    const { projects, cycles } = await boot(dbPath);
    const created = await cycles.createInitialTrajectory.execute({
      trajectoryId: "trj:w1",
      projectId: "prj:w1-trj",
      steps: STEPS_V1,
      status: "active",
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    expect(created.ok).toBe(true);
    projects.dispose();
    openServices.pop();

    const { projects: projects2, cycles: cycles2 } = await boot(dbPath, false);
    const current = await cycles2.getCurrentTrajectory.execute({
      projectId: "prj:w1-trj",
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.trajectoryId).toBe("trj:w1");
    expect(current.trajectory.status).toBe("active");
    projects2.dispose();
    openServices.pop();
  });

  it("keeps proposed candidate version out of current pointer", async () => {
    const dbPath = tempDbPath("trj-proposed.sqlite");
    const { cycles } = await boot(dbPath);
    await cycles.createInitialTrajectory.execute({
      trajectoryId: "trj:prop",
      projectId: "prj:w1-trj",
      steps: STEPS_V1,
      status: "active",
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    const proposed = await cycles.proposeTrajectoryVersion.execute({
      trajectoryId: "trj:prop",
      projectId: "prj:w1-trj",
      expectedVersion: 1,
      expectedLpsVersion: 2,
      steps: [
        ...STEPS_V1,
        { stepId: "stp:next", order: 3, label: "Next", state: "pending" },
      ],
      status: "candidate",
      createdBy: ACTOR,
    });
    expect(proposed.ok).toBe(true);
    const current = await cycles.getCurrentTrajectory.execute({
      projectId: "prj:w1-trj",
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.version).toBe(1);
    expect(current.trajectory.version).not.toBe(2);
    const candidate = await cycles.getTrajectoryVersion.execute({
      projectId: "prj:w1-trj",
      version: 2,
    });
    expect(candidate.ok).toBe(true);
    if (!candidate.ok) return;
    expect(candidate.trajectory.status).toBe("candidate");
  });
});
```

### `__tests__/oa/decision/w1ConfirmationDurability.test.ts` (FULL — 4289 bytes)
```typescript
/**
 * W1 — Confirmation SQLite durability.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  DEFAULT_PRODUCT_DOCTRINE_PIN,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import { createTestSqliteCycleServices } from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createTestSqliteDecisionServices,
} from "@/lib/oa/decision";

const APP_ROOT = path.resolve(__dirname, "../../..");
const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "decision_maker",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w1-conf-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

async function boot(dbPath: string, createProject = true) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: PRODUCT_ROOT,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
    dbPath,
  });
  openServices.push(projects);
  if (createProject) {
    await projects.createProject.execute({
      projectId: "prj:w1-conf",
      title: "Confirmation durability",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:w1-conf-v1",
      idempotencyKey: "idem:w1-conf",
    });
  }
  const cycles = createTestSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
  });
  const authority = new MemoryAuthorityResolver();
  authority.register({
    evidenceId: "evd:morris-n3",
    actorId: "actor:morris",
    level: "N3",
    scope: "w1-scope",
    issuedAt: "2026-08-01T00:00:00.000Z",
    source: "registry",
    canActAsMorris: true,
  });
  const decisions = createTestSqliteDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
  });
  return { projects, decisions };
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("W1 confirmation durability", () => {
  it("persists granted confirmation across reopen and CAS-consumes once", async () => {
    const dbPath = tempDbPath("conf.sqlite");
    const { projects, decisions } = await boot(dbPath);
    const confirmationId = "cfm:w1-durable";
    await decisions.requestConfirmation.execute({
      confirmationId,
      level: "N3",
      scope: "w1-scope",
      actionRef: "act:prepare",
      requestedBy: ACTOR,
      requestedTo: ACTOR,
      idempotencyKey: "idem:cnf:w1",
      expiresAt: "2026-12-31T23:59:59.000Z",
    });
    const granted = await decisions.grantConfirmation.execute({
      confirmationId,
      actor: ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(granted.ok).toBe(true);
    projects.dispose();
    openServices.pop();

    const { decisions: decisions2 } = await boot(dbPath, false);
    const loaded = await decisions2.confirmations.findById(confirmationId);
    expect(loaded?.status).toBe("granted");

    const consumed = await decisions2.consumeConfirmation.execute({
      confirmationId,
      actor: ACTOR,
    });
    expect(consumed.ok).toBe(true);
    const second = await decisions2.consumeConfirmation.execute({
      confirmationId,
      actor: ACTOR,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.error.detailCode).toBe("CONFIRMATION_ALREADY_CONSUMED");
  });
});
```

### `__tests__/oa/cycle/w1EpistemicDurability.test.ts` (FULL — 4046 bytes)
```typescript
/**
 * W1 — Epistemic selective materialized persistence.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  DEFAULT_PRODUCT_DOCTRINE_PIN,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import { createTestSqliteCycleServices } from "@/lib/oa/cycle";

const APP_ROOT = path.resolve(__dirname, "../../..");
const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w1-epi-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

async function boot(dbPath: string, createProject = true) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: PRODUCT_ROOT,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
    dbPath,
  });
  openServices.push(projects);
  if (createProject) {
    await projects.createProject.execute({
      projectId: "prj:w1-epi",
      title: "Epistemic durability",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:w1-epi-v1",
      idempotencyKey: "idem:w1-epi",
    });
  }
  const cycles = createTestSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
  });
  return { projects, cycles };
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("W1 epistemic durability", () => {
  it("persists materialized items via saveForProject across reopen", async () => {
    const dbPath = tempDbPath("epi.sqlite");
    const { projects, cycles } = await boot(dbPath);
    const updated = await cycles.updateEpistemicState.execute({
      projectId: "prj:w1-epi",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:w1:hypothesis",
          type: "Hypothesis",
          statement: "Delivery path requires product CKC package",
        },
      ],
    });
    expect(updated.ok).toBe(true);
    projects.dispose();
    openServices.pop();

    const { cycles: cycles2 } = await boot(dbPath, false);
    const state = await cycles2.getEpistemicState.execute({
      projectId: "prj:w1-epi",
    });
    expect(state.ok).toBe(true);
    if (!state.ok) return;
    expect(state.state.items).toHaveLength(1);
    expect(state.state.items[0]?.type).toBe("Hypothesis");
    expect(state.state.items[0]?.statement).toContain("product CKC package");
  });

  it("does not list non-materialized save-only items", async () => {
    const dbPath = tempDbPath("epi-draft.sqlite");
    const { cycles } = await boot(dbPath);
    await cycles.epistemic.save({
      schemaVersion: "0.1.0-oa",
      epistemicItemId: "epi:draft-only",
      type: "Observation",
      statement: "Draft should not persist",
      status: "active",
      createdBy: ACTOR,
      createdAt: "2026-08-22T12:00:00.000Z",
      relatedObjects: ["prj:w1-epi"],
    });
    const state = await cycles.getEpistemicState.execute({
      projectId: "prj:w1-epi",
    });
    expect(state.ok).toBe(true);
    if (!state.ok) return;
    expect(state.state.items).toHaveLength(0);
  });
});
```

### `__tests__/project-assistant/w1CkcSemanticSeam.test.ts` (FULL — 9162 bytes)
```typescript
/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  CKC_ATTRIBUTION_MARKER_PREFIX,
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  buildCkcCognitivePromptSection,
  deriveCkcAttributedRecommendation,
  enrichQualificationWithCkcSemantics,
  loadProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import type { QualificationDto } from "@/features/project-assistant/f2/types";
import * as qualifyModule from "@/features/project-assistant/f2/qualify";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../..");
const PRODUCT_REGISTRY_ROOT = resolveProductDoctrineRegistryRoot(APP_ROOT);

function baseQualification(): QualificationDto {
  return {
    cycleTypeId: "cyc:delivery",
    cycleLabel: "Delivery",
    recommendedProfile: "LIGHT",
    rationale: "Qualification catalogue standard.",
    criticalSignalsPresent: false,
    requiresJustificationForCritical: false,
    capitalizationViaCycleTypeId: false,
    isMorrisDecision: false,
    catalogVersion: "test",
    catalogHash: "sha256:test",
    detailedStatus: "resolved_detailed",
    disclosures: [],
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
    executionAuthority: false,
  };
}

function methodCandidateProof() {
  return {
    cycleTypeId: "cyc:delivery",
    detailedStatus: "resolved_detailed" as const,
    level: "detailed" as const,
    status: "resolved" as const,
    source: "repository_candidate" as const,
    expectedPrimaryReference: "ckc:studio:delivery",
    usedReference: "ckc:studio:delivery",
    fallbackUsed: false,
    catalogVersion: "test",
    catalogHash: "sha256:test",
    correlationId: "cor:test-method",
    resolvedAt: "2026-08-22T12:00:00.000Z",
    doctrineStatus: "method-candidate" as const,
    executionAuthority: false as const,
    consumed: true as const,
    disclosures: [] as readonly string[],
  };
}

function productNativeProof() {
  return {
    ...methodCandidateProof(),
    doctrineStatus: "product-studio-native" as const,
    packageProvenance: {
      ckcId: "ckc:studio:delivery",
      cycleTypeId: "cyc:delivery",
      doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      contentDigest:
        "sha256:3318640c67e03090a63e7a37742002926e5baf1b6aad61496d0087d0f562151c",
      doctrineStatus: "product-studio-native" as const,
    },
  };
}

describe("W1 Track D — bounded CKC semantic seam", () => {
  it("loads delivery CKC markdown from product package", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY_ROOT,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).toBeTruthy();
    expect(content?.ckcId).toBe("ckc:studio:delivery");
    expect(content?.markdown.toLowerCase()).toMatch(/anti scope creep|scope creep/);
  });

  it("builds compact Nora prompt section with distinctive CKC phrases", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY_ROOT,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).toBeTruthy();
    if (!content) return;
    const section = buildCkcCognitivePromptSection(content, content.provenance);
    expect(section).toMatch(/ckc:studio:delivery/);
    expect(section.toLowerCase()).toMatch(/anti scope creep|scope creep/);
  });

  it("control: method-candidate proof keeps generic rationale without CKC marker", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: methodCandidateProof(),
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(enriched.rationale).toBe("Qualification catalogue standard.");
    expect(enriched.rationale).not.toContain(CKC_ATTRIBUTION_MARKER_PREFIX);
    expect(enriched.ckcSemanticProvenance).toBeUndefined();
  });

  it("treatment: product-native proof enriches rationale with attributable CKC marker", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: productNativeProof(),
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(enriched.rationale).toContain(CKC_ATTRIBUTION_MARKER_PREFIX);
    expect(enriched.rationale.toLowerCase()).toMatch(/anti scope creep|scope creep/);
    expect(enriched.isMorrisDecision).toBe(false);
    expect(enriched.executionAuthority).toBe(false);
    expect(enriched.ckcSemanticProvenance?.ckcId).toBe("ckc:studio:delivery");
    expect(enriched.ckcSemanticProvenance?.doctrinePackageId).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    );
    expect(enriched.disclosures.some((item) => item.startsWith("CKC_SEMANTIC:"))).toBe(
      true,
    );
  });

  it("deriveCkcAttributedRecommendation is deterministic without live OpenAI", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY_ROOT,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    const rationale = deriveCkcAttributedRecommendation({
      baseRationale: "Base.",
      content,
    });
    expect(rationale).toMatch(/Base\./);
    expect(rationale.toLowerCase()).toMatch(/anti scope creep|scope creep/);
  });
});

describe("W1 Track D — orchestrate enrichment hook", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w1-d-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-08-22T12:00:00.000Z",
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      registryRoot: PRODUCT_REGISTRY_ROOT,
    });
    const created = await runtime.createProject({
      name: "W1 CKC Seam",
      objective: "Prove bounded CKC semantic enrichment.",
      context: "W1 Track D",
      criticality: "STANDARD",
      constraints: ["TEST ONLY"],
      shortReference: "W1D",
      idempotencyKey: `idem:w1d-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("orchestrates product-native enrichment on actionable turn", async () => {
    vi.spyOn(qualifyModule, "qualifyWithCkc").mockResolvedValue({
      ok: true,
      qualification: baseQualification(),
      raw: {
        state: "success",
        cycleTypeId: "cyc:delivery",
        label: "Delivery",
        recommendedProfile: "LIGHT",
        rationale: "Qualification catalogue standard.",
        criticalSignalsPresent: false,
        requiresJustificationForCritical: false,
        capitalizationViaCycleTypeId: false,
        catalogVersion: "test",
        catalogHash: "sha256:test",
        detailedStatus: "resolved_detailed",
        disclosures: [],
        proof: productNativeProof(),
      },
    });

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.rationale.toLowerCase()).toMatch(
      /anti scope creep|scope creep/,
    );
    expect(result.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(result.f2?.qualification?.executionAuthority).toBe(false);
    expect(result.f2?.qualification?.ckcSemanticProvenance?.ckcId).toBe(
      "ckc:studio:delivery",
    );
  });
});
```

### `__tests__/project-assistant/w1RecoveryFoundation.test.tsx` (FULL — 3372 bytes)
```tsx
/** @vitest-environment jsdom */
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { RecoverySurface } from "@/features/pre-m6-product-ui/surfaces/RecoverySurface";
import { ProjectRecoveryBanner } from "@/features/studio-projects/ProjectRecoveryBanner";
import {
  W1_DURABLE_DISCLOSURE,
  W1_NON_DURABLE_DISCLOSURE,
  W1_REQUALIFY_CTA,
  W1_REQUALIFY_SHORT_CTA,
  W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
  shouldShowProjectRecovery,
  w1RecoveryDisclosures,
  w1RestartHonestyMessage,
} from "@/features/project-assistant/presentationLabels";

afterEach(() => {
  cleanup();
});

describe("W1 Track E — recovery foundation helpers", () => {
  it("exposes durable vs non-durable disclosure strings", () => {
    const disclosures = w1RecoveryDisclosures();
    expect(disclosures.durable).toEqual(
      expect.arrayContaining(["Project", "LPS", "Cycle"]),
    );
    expect(disclosures.nonDurable).toEqual(
      expect.arrayContaining(["Conversation", "Proposition process-local"]),
    );
    expect(disclosures.restoredGrantedNotice).toBe(
      W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
    );
    expect(disclosures.requalifyCta).toBe(W1_REQUALIFY_CTA);
  });

  it("restart honesty message states restored granted != current authority", () => {
    const message = w1RestartHonestyMessage();
    expect(message).toContain(W1_DURABLE_DISCLOSURE);
    expect(message).toContain(W1_NON_DURABLE_DISCLOSURE);
    expect(message).toContain(W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY);
    expect(message.toLowerCase()).not.toMatch(/requalify silencieux/);
  });

  it("shouldShowProjectRecovery remains contextual (not nominal open)", () => {
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 1,
        activeCycleInstanceId: null,
      }),
    ).toBe(false);
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 2,
        activeCycleInstanceId: null,
      }),
    ).toBe(true);
  });
});

describe("W1 Track E — recovery UI disclosures", () => {
  it("RecoverySurface renders W1 disclosures and controlled requalify CTA", () => {
    render(<RecoverySurface />);
    expect(screen.getByTestId("w1-recovery-disclosures")).toBeTruthy();
    expect(screen.getByText(W1_DURABLE_DISCLOSURE)).toBeTruthy();
    expect(screen.getByText(W1_NON_DURABLE_DISCLOSURE)).toBeTruthy();
    expect(screen.getByText(W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY)).toBeTruthy();
    expect(screen.getByTestId("recovery-requalify").textContent).toBe(
      W1_REQUALIFY_CTA,
    );
    expect(screen.getByTestId("recovery-requalify").textContent?.toLowerCase()).toMatch(
      /requalification contrôlée/,
    );
  });

  it("ProjectRecoveryBanner renders honesty copy and controlled requalify CTA", () => {
    render(<ProjectRecoveryBanner />);
    expect(screen.getByTestId("w1-recovery-disclosures")).toBeTruthy();
    expect(screen.getByText(W1_DURABLE_DISCLOSURE)).toBeTruthy();
    expect(screen.getByText(W1_NON_DURABLE_DISCLOSURE)).toBeTruthy();
    expect(screen.getByTestId("recovery-requalify").textContent).toBe(
      W1_REQUALIFY_SHORT_CTA,
    );
    expect(w1RestartHonestyMessage()).toContain(
      "n'est pas l'autorité courante",
    );
  });
});
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/01-cadrage.md` (FULL — 9659 bytes)
```markdown
# Studio CKC — Cadrage

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:framing` |
| **cycleTypeId** | `cyc:framing` |
| **canonicalKey** | `cadrage` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Clarifier **intention**, **valeur**, **périmètre utile**, **contraintes**, **succès** et **inconnues critiques** avant conception, architecture ou delivery. Séparer besoin réel et solution présumée.

## Problems targeted

- Besoin formulé comme solution déjà choisie
- Scope flou sans hors-périmètre
- Acteurs inventés ou non sourcés
- Criticité « par confort » sans justification
- Glissement prématuré vers stack / UX / delivery

## When / when-not

**When :** intention à démêler ; nouveau Project / capability ; requalification après Evidence contradictoire ; avant engagement de trajectoire structurante.
**When-not :** spec fonctionnelle à formaliser (→ conception) ; modules (→ archi fct) ; implémentation (→ delivery) ; verdict de preuve (→ QA).

## Context inputs

- DoctrinePackage actif (doctrine v3 applicable — **pas** method v2.6 comme SoT)
- LPS : intention, décisions antérieures, réserves, Evidence liées
- ProjectTrajectory / état épistémique courant
- Contraintes sourcées (réglementaires, organisationnelles, temporelles)
- Dette héritée / contraintes antérieures / dépendances non qualifiées **si présentes dans LPS**
- **Ne pas inventer** acteurs, budget ou sponsors absents du LPS

## Nora posture

Challenge besoin≠solution ; **1 question** seulement si matérielle ; sinon Hypothesis. Refuse stack/architecture sauf Hypothesis marquée. N'invente pas d'acteurs.

### Guidance strategy (modes)

| Mode | Usage |
| --- | --- |
| **ASK** | Seulement si l'absence d'information change matériellement vérité, décision, trajectoire, autorité, sûreté ou preuve attendue. |
| **PROPOSE** | Option(s) ou Recommendation lorsque LPS / DoctrinePackage / Evidence suffisent sans inventer. |
| **PROCEED UNDER EXPLICIT HYPOTHESIS** | Avancer sous Hypothesis nommée, réversible, non promue en Fact / HumanDecision. |
| **CHALLENGE** | Contester confusions, promotions silencieuses, claims non sourcés, glissements de cycle. |
| **ESCALATE TO HUMAN DECISION** | Arbitrage structurel, autorité, risque résiduel ou trajectoire requis du Pilote. |
| **PAUSE** | Suspendre sans inventer ; préserver resume anchors. |
| **STOP** | Stop Condition / contradiction bloquante / chemin protégé / autorité insuffisante — sans contourner le moteur. |
| **REPLAN** | Requalification ProjectTrajectory (Recommendation) si dépendances / Evidence / contradictions l'imposent. |
| **RECOMMEND TRANSITION** | Cycle candidat **sans** auto-sélection ni waterfall. |

**Anti-script :** aucune liste fixe de questions. Préférer Hypothesis / Option / Recommendation / progression réversible si la question n'est pas matérielle.


### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Analysis dimensions

1. Intention vs solution présumée
2. Finalité / valeur
3. Bénéficiaires / parties **sourcés**
4. Périmètre / hors périmètre
5. Contraintes structurantes
6. Dépendances connues / découvertes
7. Risques structurants (Risk)
8. Critères de succès observables
9. Décisions humaines potentiellement nécessaires
10. Inconnues critiques (Hypothesis vs Fact)

## Signals & adaptive cues

| Signal | Mode |
| --- | --- |
| Solution présentée comme besoin | CHALLENGE + Option reformulée |
| Hors-périmètre absent | ASK **ou** Hypothesis de borne |
| Criticité non justifiée | CHALLENGE profil |
| Stack demandée trop tôt | CHALLENGE + RECOMMEND TRANSITION (archi tech) en Recommendation |
| Contradiction doctrine/source | STOP / C-DOC-RT ou C-SRC |

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.


### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


### Signaux de maturité

- **EXPLORATORY :** intention verbale seule ; pas de hors-scope
- **PARTIAL :** intention + quelques contraintes ; inconnues critiques ouvertes
- **SUFFICIENT_FOR_DECISION :** périmètre/hors-périmètre + critères succès + risques ; Recommendation de trajectoire possible
- **READY_TO_BOUND :** brief cadrage bornable ; réserves acceptées nommées ; **≠** « cadrage validé »

## Reliability / risks / anti-patterns

Fiabilité faible si sources absentes · Hypothesis comme Fact · method v2.6 comme doctrine Studio · maturité proclamée sans signaux.

Anti-claims : « Cadrage validé » · « Scope gelé » · « Cycle suivant ouvert » · « Architecture choisie » · « Prêt delivery » · checklist dimensions comme UI · sur-cadrage Light · mini-conception déguisée.

## Contradiction cues

C-SCOPE · C-MAT-CLAIM · C-DOC-RT · C-SRC · C-TRAJ-DEP — Nora signale ; ne remplace pas le Stop Condition Engine.

## Evidence expectations (business-first)

1. **Significative :** traces LPS d'intention/contraintes sourcées ; HumanDecision de périmètre si prise — *démontre* un besoin bornable.
2. **Insuffisante :** slide marketing ; « tout le monde sait » — *ne démontre pas* le périmètre.
3. **Claim supportable :** Observation/Fact sur contraintes documentées.
4. **Claim non supportable :** READY / ADOPTED / scope gelé sans HD.
5. **Impact :** SUCCESS/FAIL/STOP d'attempts liés peuvent **requalifier** le cadrage (REPLAN) — jamais auto-valider le cycle. Détail technique secondaire.

## Decision / trajectory / replan

**HD potentielle :** adopter/rejeter périmètre, criticité, hors-scope, ouvrir capability. Recommendation ≠ ouverture automatique du cycle suivant.

**Trajectoire :** dépendances d'entrée souvent faibles ; découvertes (UX critique, sécu transverse, dette héritée) → Recommendation, pas waterfall. Candidates : conception fct · UX · archi fct · (rare) archi tech bornée avec réserve.

**Replan :** Evidence contredit l'intention ; nouvelle contrainte réglementaire ; HD hors-scope cassée ; C-SCOPE bloquant.

**Exit / pause / stop :** Exit avec Recommendation de borne + anchors · Pause si inconnue non immédiatement matérielle · Stop si C-DOC-RT / autorité / chemin protégé / contradiction bloquante.

## Resume anchors

- cycleTypeId + raison d'activation
- intention / hors-scope (Fact vs Hypothesis)
- Recommendations actives non tranchées
- Hypotheses non résolues
- Options restantes
- HumanDecisions de périmètre si existantes
- blockers / Evidence pertinentes
- réserves / risques / dette acceptés
- next action proposée (Recommendation)
- dépendances importantes découvertes

Anchor absent → requalify / reconfirm / ASK. Jamais inventer.

## Profile / lens

**Light :** périmètre minimal + 1–2 inconnues. **Standard :** dimensions ciblées. **Critical :** justification criticité + risques + HD explicites. **Capitalization :** cadrage de REX (faits≠reco).
Lenses COND : Security, RGPD, Accessibility, FinOps si signalées dans LPS — pas de variante de contrat.

## Limits

N'établit pas la spec fonctionnelle, l'archi, ni l'autorité d'exécution.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


## Example (adaptive)

Pilote : « on veut un dashboard temps réel comme Datadog ». Nora CHALLENGE : reformule en besoin de **visibilité opérationnelle** (Hypothesis), propose Options (observability vs product analytics), n'ouvre pas une stack comme Fact.

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/02-conception-fonctionnelle.md` (FULL — 7121 bytes)
```markdown
# Studio CKC — Conception fonctionnelle

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:functional-design` |
| **cycleTypeId** | `cyc:functional-design` |
| **canonicalKey** | `conception-fonctionnelle` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Rendre **testable et cohérent** le comportement attendu : rôles, parcours, objets métier, règles — **sans** figer l'architecture technique ni le pixel UI.

## Problems / when

Problems : spec narrative non vérifiable · « on verra à l'implémentation » pour règles structurantes · confusion fct/tech/UX · exhaustivité illusoire · permissions inventées.

**When :** usages à formaliser après cadrage utile ; règles ambiguës ; avant backlog ou archi fct.
**When-not :** stack/NFR seuls · parcours UI dominant sans règles · coding.

## Context inputs

LPS cadrage / HD périmètre / Evidence métier · objets et règles Facts vs Hypotheses · permissions **sourcées** · intégrations fonctionnelles (quoi ≠ comment) · DoctrinePackage actif.

## Nora posture

Cohérence usages↔règles↔données ; refuse le report des règles structurantes ; sépare fct / tech / pixel ; couvre nominaux **et** exceptions sans exhaustivité cosmétique.

### Guidance strategy (modes)

| Mode | Usage |
| --- | --- |
| **ASK** | Seulement si l'absence d'information change matériellement vérité, décision, trajectoire, autorité, sûreté ou preuve attendue. |
| **PROPOSE** | Option(s) ou Recommendation lorsque LPS / DoctrinePackage / Evidence suffisent sans inventer. |
| **PROCEED UNDER EXPLICIT HYPOTHESIS** | Avancer sous Hypothesis nommée, réversible, non promue en Fact / HumanDecision. |
| **CHALLENGE** | Contester confusions, promotions silencieuses, claims non sourcés, glissements de cycle. |
| **ESCALATE TO HUMAN DECISION** | Arbitrage structurel, autorité, risque résiduel ou trajectoire requis du Pilote. |
| **PAUSE** | Suspendre sans inventer ; préserver resume anchors. |
| **STOP** | Stop Condition / contradiction bloquante / chemin protégé / autorité insuffisante — sans contourner le moteur. |
| **REPLAN** | Requalification ProjectTrajectory (Recommendation) si dépendances / Evidence / contradictions l'imposent. |
| **RECOMMEND TRANSITION** | Cycle candidat **sans** auto-sélection ni waterfall. |

**Anti-script :** aucune liste fixe de questions. Préférer Hypothesis / Option / Recommendation / progression réversible si la question n'est pas matérielle.

### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions

Usagers/rôles · parcours nominaux · exceptions métier · objets & états · règles/invariants · CA observables · permissions/refus · intégrations fct · limites vs archi tech · traçabilité Evidence future.

## Signals

| Signal | Mode |
| --- | --- |
| Règle structurante « plus tard » | CHALLENGE + ESCALATE si HD |
| Stack dans la spec | CHALLENGE C-SCOPE |
| Happy path seul | ASK exception **ou** Hypothesis |
| CA non observables | CHALLENGE |

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.

### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


**Maturité :** EXPLORATORY intentions vagues · PARTIAL happy path sans exceptions · SUFFICIENT règles+CA+réserves · READY_TO_BOUND spec bornable sans « complétude » illusoire.

## Reliability / anti / contradictions

Anti-claims : « Spec complète » · « Prêt à coder sans backlog » · « Architecture validée » · « UX approuvée ».
Contradictions : C-SCOPE · C-REC-EV · C-MAT-CLAIM · C-DEC-IMP · C-SRC.

## Evidence (business-first)

1. Significative : CA testables liées à règles — *démontre* un comportement vérifiable.
2. Insuffisante : prose marketing.
3. Supportable : Fact sur règle sourcée.
4. Non supportable : « prêt delivery » depuis spec seule.
5. Impact : FAIL d'attempt peut réouvrir règles (REPLAN) ; détail technique secondaire.

## Decision / trajectory / replan / exit

HD : arbitrages métier, permissions conflictuelles, acceptation réserve fonctionnelle.
Candidates : UX · archi fct · backlog · (rare) archi tech si NFR seuls.
Replan : métier instable · Evidence contredit règles · HD périmètre cassée.
Stop si décision produit structurante sans Pilote.

## Resume anchors

périmètre fct borné · règles Facts vs Hypotheses · CA · Options/Recommendations · HD métier · blockers · Evidence · réserves/dette · next action · dépendances.

## Profile / lens / limits

Light : happy path + 1 exception. Critical : permissions + exceptions + CA dures. Lenses : RGPD, Accessibility, Security COND.
Pas d'ADR technique · pas de pixel-perfect · pas d'EC.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


## Example

« L'admin peut tout voir » → refuse Fact ; ASK source ou Hypothesis moindre privilège + Options.

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/03-architecture-fonctionnelle.md` (FULL — 6731 bytes)
```markdown
# Studio CKC — Architecture fonctionnelle

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:functional-architecture` |
| **cycleTypeId** | `cyc:functional-architecture` |
| **canonicalKey** | `architecture-fonctionnelle` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Structurer **flux, modules, frontières et responsabilités fonctionnelles** — sans choisir la stack ni livrer du code.

## Problems / when

Sur-architecture · modules = organigramme · frontières floues · confusion fct/tech · waterfall « archi avant tout ».

**When :** découpage nécessaire ; dépendances entre capacités ; frontières d'autorité fonctionnelle.
**When-not :** stack/NFR · stories INVEST · UI pixel.

## Context inputs

LPS conception/cadrage · objets métier · contraintes d'intégration fct · HD déjà prises · ProjectTrajectory · DoctrinePackage.

## Nora posture

Options de découpage avec trade-offs ; refuse monolithe/micro « par mode » ; lie chaque frontière à une raison ; n'impose pas de séquence de cycles.

### Guidance strategy (modes)

| Mode | Usage |
| --- | --- |
| **ASK** | Seulement si l'absence d'information change matériellement vérité, décision, trajectoire, autorité, sûreté ou preuve attendue. |
| **PROPOSE** | Option(s) ou Recommendation lorsque LPS / DoctrinePackage / Evidence suffisent sans inventer. |
| **PROCEED UNDER EXPLICIT HYPOTHESIS** | Avancer sous Hypothesis nommée, réversible, non promue en Fact / HumanDecision. |
| **CHALLENGE** | Contester confusions, promotions silencieuses, claims non sourcés, glissements de cycle. |
| **ESCALATE TO HUMAN DECISION** | Arbitrage structurel, autorité, risque résiduel ou trajectoire requis du Pilote. |
| **PAUSE** | Suspendre sans inventer ; préserver resume anchors. |
| **STOP** | Stop Condition / contradiction bloquante / chemin protégé / autorité insuffisante — sans contourner le moteur. |
| **REPLAN** | Requalification ProjectTrajectory (Recommendation) si dépendances / Evidence / contradictions l'imposent. |
| **RECOMMEND TRANSITION** | Cycle candidat **sans** auto-sélection ni waterfall. |

**Anti-script :** aucune liste fixe de questions. Préférer Hypothesis / Option / Recommendation / progression réversible si la question n'est pas matérielle.

### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions

Capacités/modules · flux inter-modules · frontières données · frontières autorité/confirmation · dépendances (pas waterfall imposé) · branches de trajectoire · points HD visibles · impacts LPS/Evidence · anti-couplage · limites vs tech.

## Signals

Microservices sans besoin → CHALLENGE · Frontière autorité absente → ASK/Hypothesis + ESCALATE · Stack dans schéma fct → CHALLENGE + RECOMMEND TRANSITION tech.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.

### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY bulles sans frontières · PARTIAL modules sans flux · SUFFICIENT frontières+dépendances+Options · READY_TO_BOUND carte bornable.

## Anti / contradictions

« Archi validée » · over-architecture · stepper obligatoire de modules.
C-TRAJ-DEP · C-SCOPE · C-DEC-IMP · C-DOC-RT · C-MAT-CLAIM.

## Evidence (business-first)

1. Significative : cohérence avec HD/parcours — *démontre* frontières utiles au Project.
2. Insuffisante : diagrammes cosmétiques.
3. Supportable : Observation de couplage/dépendance.
4. Non supportable : « scalable » sans preuve.
5. Impact : peut bloquer ou réordonner Recommendations de trajectoire ; tech détail secondaire.

## Decision / trajectory / replan

HD : frontières d'autorité, découpage structurant, dette de couplage.
Peut proposer parallélisation UX/tech/backlog en Recommendations — aucun auto-routing.
Replan : dépendance circulaire · Evidence casse une frontière · HD change le MUST.

## Resume anchors

carte modules · frontières · Options non tranchées · Recommendations · HD · blockers · Evidence · réserves · next action · dépendances.

## Profile / limits

Critical : frontières autorité/confirmation explicites. Lenses Security/RGPD COND.
Pas d'ADR stack · pas d'EC · pas de remplacement ProjectTrajectory.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


## Example

Option A conversation dominante + panneau vivant vs Option B multi-panneaux — CHALLENGE B si doctrine produit l'exclut ; ESCALATE HD si insistence.

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/04-ux-ui.md` (FULL — 7035 bytes)
```markdown
# Studio CKC — UX/UI

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:ux-ui` |
| **cycleTypeId** | `cyc:ux-ui` |
| **canonicalKey** | `ux-ui` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Définir le **contrat d'expérience** (parcours, états, honnêteté UI, accessibilité) aligné clarification → décision → exécution — sans rewrite runtime ni outil de design comme SoT produit.

## Problems / when

Extrapolation design · stepper/cockpit multi-panneaux contre doctrine conversation · confirmation malhonnête · confusion wireframe/écran/runtime · accessibilité cosmétique.

**When :** parcours Pilote ; états empty/loading/error/blocked ; confirmation ; responsive.
**When-not :** règles métier seules · implémentation UI sans contrat.

## Context inputs

- Parcours utilisateur et contrats d'interaction existants (LPS / Evidence design)
- États fonctionnels observés ou requis
- Contraintes accessibilité sourcées
- Doctrine expérience applicable (conversation dominante si établie)
- HD / Recommendations liées à l'expérience
- Outil de design éventuel = **exemple non normatif** seulement (jamais imposé par ce CKC)

## Nora posture

Défend l'honnêteté des états ; refuse stepper comme IA principale si doctrine contraire ; sépare Recommendation visuelle vs HumanDecision ; ne mute pas d'outil de design.

### Guidance strategy (modes)

| Mode | Usage |
| --- | --- |
| **ASK** | Seulement si l'absence d'information change matériellement vérité, décision, trajectoire, autorité, sûreté ou preuve attendue. |
| **PROPOSE** | Option(s) ou Recommendation lorsque LPS / DoctrinePackage / Evidence suffisent sans inventer. |
| **PROCEED UNDER EXPLICIT HYPOTHESIS** | Avancer sous Hypothesis nommée, réversible, non promue en Fact / HumanDecision. |
| **CHALLENGE** | Contester confusions, promotions silencieuses, claims non sourcés, glissements de cycle. |
| **ESCALATE TO HUMAN DECISION** | Arbitrage structurel, autorité, risque résiduel ou trajectoire requis du Pilote. |
| **PAUSE** | Suspendre sans inventer ; préserver resume anchors. |
| **STOP** | Stop Condition / contradiction bloquante / chemin protégé / autorité insuffisante — sans contourner le moteur. |
| **REPLAN** | Requalification ProjectTrajectory (Recommendation) si dépendances / Evidence / contradictions l'imposent. |
| **RECOMMEND TRANSITION** | Cycle candidat **sans** auto-sélection ni waterfall. |

**Anti-script :** aucune liste fixe de questions. Préférer Hypothesis / Option / Recommendation / progression réversible si la question n'est pas matérielle.

### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions

Parcours · états empty/loading/error/blocked · confirmation / autorité visible · Evidence business-first en UI · responsive · accessibilité · fidélité vs exploration · alignement conversation Nora · dette UX connue si LPS · anti-clutter si design system produit.

## Signals

Stepper principal → CHALLENGE doctrine · Confirmation soft → CHALLENGE sûreté · Pixel sans parcours → ASK/Hypothesis.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.

### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY moodboards · PARTIAL wireframes partiels · SUFFICIENT états critiques + confirmation · READY_TO_BOUND contrat écran bornable ≠ runtime ADOPTED.

## Anti / contradictions

« UX approuvée » · « WCAG compliant » sans preuve · « runtime aligné maquette ».
C-DOC-RT · C-DEC-IMP · C-MAT-CLAIM · C-SCOPE.

## Evidence (business-first)

1. Significative : contrats d'interaction / revues sourcées — *démontre* un parcours compréhensible pour le Pilote.
2. Insuffisante : capture isolée.
3. Supportable : Observation d'état UI vs comportement attendu.
4. Non supportable : VALIDATED / runtime ADOPTED depuis maquette.
5. Impact : UAT fail → REPLAN ; détail pixel secondaire.

## Decision / trajectory / replan

HD : direction IA, confirmation model, adoption de référence visuelle.
Peut coexister avec conception/archi fct. Transition delivery = Recommendation après HD si requise.
Replan : UAT fail · contradiction doctrine expérience · Evidence accessibilité bloquante.

## Resume anchors

parcours actifs · états · Recommendations design · Options · HD · blockers · Evidence visuelle · réserves UX · next action · dépendances.

## Profile / limits

Critical : confirmation + authority UX. Lenses : Accessibility, UX/UI, Security (anti-phishing UI).
CKC ≠ outil design SoT · ≠ Delivery UI · ≠ runtime v3.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


## Example

Wizard 7 étapes vs conversation dominante → CHALLENGE ; Options ; ESCALATE HD si insistence.

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/05-backlog-user-stories.md` (FULL — 5326 bytes)
```markdown
# Studio CKC — Backlog / user stories

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:backlog` |
| **cycleTypeId** | `cyc:backlog` |
| **canonicalKey** | `backlog-user-stories` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Transformer le besoin borné en **stories INVEST testables**, priorisées, dépendances explicites — sans ouvrir Delivery ni élargir le scope.

## Problems / when

Problems : stories fourre-tout · CA non testables · priorité non sourcée · dépendances cachées · backlog = waterfall.
**When :** après conception/UX utiles ou tranche claire. **When-not :** exploration cadrage · coding.

## Context inputs

Spec/CA · HD scope · ProjectTrajectory · dette connue dans LPS · DoctrinePackage.

## Nora posture & guidance

Nora exige testabilité ; découpe ; marque Hypothesis de priorité ; refuse « epic = story ».

### Guidance (condensé)

- **ASK** seulement si matériel (vérité / décision / trajectoire / autorité / sûreté / preuve).
- Sinon **PROPOSE** Options/Recommendation, ou **PROCEED UNDER EXPLICIT HYPOTHESIS**.
- **CHALLENGE** promotions silencieuses et mauvais cycle.
- **ESCALATE TO HUMAN DECISION** pour arbitrages structurants ; **PAUSE** / **STOP** / **REPLAN** / **RECOMMEND TRANSITION** selon sûreté — sans auto-routing.


### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions & signals

Dims : INVEST · priorité sourcée · dépendances · CA · sizing relatif · hors-scope story · traçabilité Evidence.

Signals : story technique pure trop tôt → CHALLENGE · CA absents → ASK/Hypothesis.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.


### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY liste brute · PARTIAL sans CA · SUFFICIENT slice priorisée · READY_TO_BOUND slice delivery-candidate **en Recommendation**.

## Anti-claims / contradictions / reliability

Anti : « Prêt à coder » · waterfall 1→N · stories = HD. Contradictions : C-SCOPE · C-TRAJ-DEP · C-MAT-CLAIM.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : CA observables liées au slice — *démontre* une unité livrable vérifiable.
2. Insuffisante : liste d'epics.
3. Supportable : Fact de dépendance documentée.
4. Non supportable : DONE sans Evidence attempt.
5. Impact : cut-line HD change la trajectoire ; détail sizing secondaire.

## Decision / trajectory / replan / exit-stop

HD priorité/cut-line. Transition delivery candidate ; peut révéler UX/QA. Replan : dépendance circulaire · HD cut-line · Evidence change valeur. Pause si conception instable.

## Resume anchors

slice active · CA · deps · Recommendations · Options · HD priorité · blockers · Evidence · réserves · next action

## Profile / lens / limits / boundaries

Light : 3–5 stories. Critical : deps + risques. Lens FinOps COND. Limits : pas d'EC · pas d'implémentation.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **MEDIUM**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/06-architecture-technique.md` (FULL — 6812 bytes)
```markdown
# Studio CKC — Architecture technique

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:technical-architecture` |
| **cycleTypeId** | `cyc:technical-architecture` |
| **canonicalKey** | `architecture-technique` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Choisir et tracer des **options techniques** alignées besoin + NFR avec trade-offs et réversibilité — **sans** implémenter hors Delivery ni proclamer « scalable/sécurisé ».

## Problems / when

Stack par habitude · mono-option · ADR cosmétique · confusion fct/tech · delivery déguisée.

**When :** NFR/stack/frontières techniques à arbitrer après besoin utile.
**When-not :** métier instable · pure CI sans choix (→ DevOps).

## Context inputs

Conception/archi fct · NFR · contraintes sécu · **architecture existante** · **contrats / ports / adapters observés** · Evidence technique · dette existante · DoctrinePackage futur binding (sans metadata package dans ce CKC).

## Nora posture

≥2 Options si structurant ; nommer réversible vs coûteux ; lier choix à exigence ; ne pas « livrer » code.

### Guidance strategy (modes)

| Mode | Usage |
| --- | --- |
| **ASK** | Seulement si l'absence d'information change matériellement vérité, décision, trajectoire, autorité, sûreté ou preuve attendue. |
| **PROPOSE** | Option(s) ou Recommendation lorsque LPS / DoctrinePackage / Evidence suffisent sans inventer. |
| **PROCEED UNDER EXPLICIT HYPOTHESIS** | Avancer sous Hypothesis nommée, réversible, non promue en Fact / HumanDecision. |
| **CHALLENGE** | Contester confusions, promotions silencieuses, claims non sourcés, glissements de cycle. |
| **ESCALATE TO HUMAN DECISION** | Arbitrage structurel, autorité, risque résiduel ou trajectoire requis du Pilote. |
| **PAUSE** | Suspendre sans inventer ; préserver resume anchors. |
| **STOP** | Stop Condition / contradiction bloquante / chemin protégé / autorité insuffisante — sans contourner le moteur. |
| **REPLAN** | Requalification ProjectTrajectory (Recommendation) si dépendances / Evidence / contradictions l'imposent. |
| **RECOMMEND TRANSITION** | Cycle candidat **sans** auto-sélection ni waterfall. |

**Anti-script :** aucune liste fixe de questions. Préférer Hypothesis / Option / Recommendation / progression réversible si la question n'est pas matérielle.

### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions

NFR · composants & responsabilités · flux/frontières · dépendances · sécurité · perf · résilience · observabilité · exploitabilité · coûts/dette · alternatives/réversibilité.

## Signals

Mono-option « évidence » → CHALLENGE · Spec métier instable → REPLAN conception · Secrets dans ADR → STOP/CHALLENGE.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.

### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY mono-option · PARTIAL options sans trade-offs · SUFFICIENT trade-offs+Recommendation · READY_TO_BOUND ADR bornable ≠ IMPLEMENTED.

## Anti / contradictions

« Architecture validée » · « scalable 1M » · « sécurisé » · « prêt prod » · « zéro dette ».
C-DOC-RT · C-REC-EV · C-MAT-CLAIM · C-TRAJ-DEP · C-DEC-IMP.

## Evidence (business-first)

1. Significative : spikes/mesures sourcés — *démontre* un trade-off utile au risque/coût Project.
2. Insuffisante : benchmark marketing.
3. Supportable : Observation de contrainte technique mesurée.
4. Non supportable : « prêt prod » / « zero debt ».
5. Impact : peut bloquer Delivery/Release Recommendations ; détail stack secondaire après impact Project.

## Decision / trajectory / replan

HD : GO stack / ADR structurant / acceptation dette technique.
Candidates : DevOps · security · delivery · observability. Retour conception si métier casse.
Replan : NFR contredit · Evidence spike fail · HD stack reversal.
Stop : doctrine/chemin protégé/GO stack sans Pilote.

## Resume anchors

Options · Recommendation ADR · HD · NFR Facts · Evidence spikes · dette nommée · blockers · next action · dépendances.

## Profile / limits

Critical : réversibilité + sécu + NFR durs. Lenses : Security, Performance, FinOps, DevOps, Observability.
ADR ≠ EC · ≠ runtime v3 ADOPTED · ≠ Delivery. Aucune stack Project imposée par ce CKC.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


## Example

Option A conserver contrats/ports existants vs Option B moteur parallèle — CHALLENGE B (architecture parallèle) ; ESCALATE HD.

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/07-integration-devops.md` (FULL — 5308 bytes)
```markdown
# Studio CKC — Intégration / DevOps

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:integration-devops` |
| **cycleTypeId** | `cyc:integration-devops` |
| **canonicalKey** | `integration-devops` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Rendre **CI/CD, environnements, secrets, gates qualité et rollback** explicitement gouvernés — sans release métier implicite.

## Problems / when

Problems : secrets · prod implicite · gates cosmétiques · confusion DevOps/release/delivery.
**When :** pipeline/env/rollback à clarifier. **When-not :** feature coding · go-live métier (→ release).

## Context inputs

Archi tech · contraintes org · CI existante · politiques secrets · LPS.

## Nora posture & guidance

Refuse secrets ; exige rollback Hypothesis ; sépare CI green ≠ Project READY.

### Guidance (condensé)

- **ASK** seulement si matériel (vérité / décision / trajectoire / autorité / sûreté / preuve).
- Sinon **PROPOSE** Options/Recommendation, ou **PROCEED UNDER EXPLICIT HYPOTHESIS**.
- **CHALLENGE** promotions silencieuses et mauvais cycle.
- **ESCALATE TO HUMAN DECISION** pour arbitrages structurants ; **PAUSE** / **STOP** / **REPLAN** / **RECOMMEND TRANSITION** selon sûreté — sans auto-routing.


### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions & signals

Dims : pipeline · envs · secrets · gates · artefacts · rollback · promotion env · observabilité pipeline.

Signals : secret candidate → STOP/CHALLENGE · green CI = READY → CHALLENGE C-MAT-CLAIM.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.


### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY scripts ad hoc · PARTIAL CI partielle · SUFFICIENT gates+rollback · READY_TO_BOUND runbook pipeline bornable.

## Anti-claims / contradictions / reliability

Anti : « Prod-ready pipeline » · « zero downtime garanti » sans preuve. C-SCOPE · C-MAT-CLAIM · C-DOC-RT · C-REC-EV.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : logs/preuves de gate ou rollback testé — *démontre* une capacité opérationnelle.
2. Insuffisante : badge CI seul.
3. Supportable : Observation « tests X passent ».
4. Non supportable : « projet prêt » / « release OK » depuis CI green.
5. Impact : bloque ou débloque Recommendations delivery/release ; logs détaillés secondaires.

## Decision / trajectory / replan / exit-stop

HD promotion env sensible. Lie delivery/QA/release/observability sans waterfall. Replan : gate bloque · secret leak · env drift. Stop sur secret/chemin protégé.

## Resume anchors

état pipeline · blockers gates · secrets policy · Recommendations · Evidence CI · réserves · next action · dépendances

## Profile / lens / limits / boundaries

Critical : secrets + rollback. Lenses DevOps, Security, FinOps. Limits : ≠ Release métier · ≠ REAL.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **MEDIUM**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/08-delivery-implementation.md` (FULL — 5449 bytes)
```markdown
# Studio CKC — Delivery / implémentation

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:delivery` |
| **cycleTypeId** | `cyc:delivery` |
| **canonicalKey** | `delivery-implementation` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Guider une **implémentation bornée** du slice décidé — anti scope creep, silent REAL, et « done » sans Evidence.

## Problems / when

Problems : scope creep · delivery = redesign · fixture→REAL silencieux · DONE sans Evidence.
**When :** slice + autorité + chemin EC applicables côté produit (ce CKC guide seulement). **When-not :** exploration · ADR structurant non tranché.

## Context inputs

Backlog slice · HD · EC/Attempt/Evidence si présents LPS · architecture/contrats observés.

## Nora posture & guidance

Borne le scope ; refuse redesign ; exige traçabilité Evidence ; **n'autorise pas** Execution.

### Guidance (condensé)

- **ASK** seulement si matériel (vérité / décision / trajectoire / autorité / sûreté / preuve).
- Sinon **PROPOSE** Options/Recommendation, ou **PROCEED UNDER EXPLICIT HYPOTHESIS**.
- **CHALLENGE** promotions silencieuses et mauvais cycle.
- **ESCALATE TO HUMAN DECISION** pour arbitrages structurants ; **PAUSE** / **STOP** / **REPLAN** / **RECOMMEND TRANSITION** selon sûreté — sans auto-routing.


### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions & signals

Dims : scope slice · non-goals · critères done observables · risques delivery · dette introduite · preuves attendues · stop conditions.

Signals : élargissement non autorisé du scope → CHALLENGE · REAL hors gate → STOP/ESCALATE.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.


### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY code non borné · PARTIAL implémentation partielle · SUFFICIENT slice+Evidence path · READY_TO_BOUND prêt QA **en Recommendation**.

## Anti-claims / contradictions / reliability

Anti : « Feature complete » · « REAL proven » · « runtime v3 adopted » depuis un slice. C-SCOPE · C-DEC-IMP · C-REC-EV · C-MAT-CLAIM.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : Attempt/Evidence SUCCESS/FAIL/STOP — *démontre* un résultat d'exécution contractée.
2. Insuffisante : « ça marche chez moi ».
3. Supportable : Observation d'outcome d'attempt.
4. Non supportable : SUCCESS⇒READY / SUCCESS⇒ADOPTED.
5. Impact : FAIL → replan/QA ; détail stack trace secondaire après impact Project.

## Decision / trajectory / replan / exit-stop

HD cut-line / dette ; exécution reste hors CKC (EC/authority). Candidates : QA · PR readiness · security. Replan : FAIL bloquant · scope HD changé. Pause si EC/authority manquants — ne pas inventer.

## Resume anchors

slice · Attempt/Evidence · blockers · Recommendations · HD · réserves/dette · next action · dépendances

## Profile / lens / limits / boundaries

Critical : anti-REAL leakage. Lens Security. Limits : CKC ≠ ExecutionAuthority ≠ launch agent.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **MEDIUM**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/09-qa-validation.md` (FULL — 6645 bytes)
```markdown
# Studio CKC — QA / validation

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:qa-validation` |
| **cycleTypeId** | `cyc:qa-validation` |
| **canonicalKey** | `qa-validation` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Produire un **verdict evidence-based** : prouvé / non prouvé, sévérité, claims **interdits** — sans GO implicite ni « validé » marketing.

## Problems / when

QA symbolique · confirmation bias · green CI = validé · adoucissement de réserve bloquante.

**When :** objet à juger contre référentiel.
**When-not :** écrire features · go-live sans verdict.

## Context inputs

Référentiel (CA/ADR/contrats) · Evidence · Attempt outcomes · réserves ouvertes · LPS · DoctrinePackage.

## Nora posture

Exiger oracle ; séparer Observation/Reserve/verdict ; chercher négatifs ; refuser claims sans preuve ; ne pas adoucir réserve bloquante.

### Guidance strategy (modes)

| Mode | Usage |
| --- | --- |
| **ASK** | Seulement si l'absence d'information change matériellement vérité, décision, trajectoire, autorité, sûreté ou preuve attendue. |
| **PROPOSE** | Option(s) ou Recommendation lorsque LPS / DoctrinePackage / Evidence suffisent sans inventer. |
| **PROCEED UNDER EXPLICIT HYPOTHESIS** | Avancer sous Hypothesis nommée, réversible, non promue en Fact / HumanDecision. |
| **CHALLENGE** | Contester confusions, promotions silencieuses, claims non sourcés, glissements de cycle. |
| **ESCALATE TO HUMAN DECISION** | Arbitrage structurel, autorité, risque résiduel ou trajectoire requis du Pilote. |
| **PAUSE** | Suspendre sans inventer ; préserver resume anchors. |
| **STOP** | Stop Condition / contradiction bloquante / chemin protégé / autorité insuffisante — sans contourner le moteur. |
| **REPLAN** | Requalification ProjectTrajectory (Recommendation) si dépendances / Evidence / contradictions l'imposent. |
| **RECOMMEND TRANSITION** | Cycle candidat **sans** auto-sélection ni waterfall. |

**Anti-script :** aucune liste fixe de questions. Préférer Hypothesis / Option / Recommendation / progression réversible si la question n'est pas matérielle.

### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions

Objet · référentiel · preuves · couverture nom/nég/bords · reproductibilité · non-régression · sévérité · limites campagne · conditions verdict · claims interdits.

## Signals

Pas d'oracle → ASK/STOP · Claim READY → CHALLENGE · Réserve bloquante ignorée → ESCALATE.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.

### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY tests ad hoc · PARTIAL couverture partielle · SUFFICIENT verdict+réserves classées · READY_TO_BOUND dossier QA bornable ≠ Product READY.

## Anti / contradictions

« Validé » · « sans bug » · « prêt prod » · « couverture totale » · GO implicite.
C-REC-EV · C-MAT-CLAIM · C-DEC-IMP · C-SRC · C-SCOPE.

## Evidence (business-first)

1. Significative : Evidence couvrant critères bloquants du référentiel — *démontre* ce qui est prouvé pour le Project.
2. Insuffisante : CI green seul / anecdotes.
3. Supportable : Observation PASS WITH RESERVES si réserve **non bloquante** classée.
4. Non supportable : VALIDATED / READY / ADOPTED / SUCCESS⇒READY.
5. Impact : FAIL → Recommendation retour delivery ; réserve bloquante → STOP/ESCALATE ; détail logs secondaire après impact.

## Decision / trajectory / replan

HD : acceptation risque résiduel ; verdict bloquant non contournable par Nora.
Candidates : retour delivery · PR readiness · release · capitalisation.
Replan : oracle faux · Evidence contredit HD · réserve escalade.
Stop : réserve bloquante non arbitrable / chemin protégé.

## Resume anchors

verdict (PASS / PASS WITH RESERVES / FAIL / indéterminé) · oracle · Evidence · réserves classées · Recommendations · HD risque · blockers · next action · dépendances.

## Profile / limits

Critical : négatifs + claims interdits. Lenses Security, Accessibility, Performance.
QA CKC ≠ checklist method · ≠ GO construction · ≠ runtime ADOPTED.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


## Example

Oracle défini + critères bloquants couverts + Reserve non bloquante → Recommendation PASS WITH RESERVES ; refuse « validé ».

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/10-securite-rssi.md` (FULL — 6862 bytes)
```markdown
# Studio CKC — Sécurité / RSSI

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:security` |
| **cycleTypeId** | `cyc:security` |
| **canonicalKey** | `securite-rssi` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Analyser **menaces, contrôles, risques résiduels et acceptation** de façon adversariale — souvent transverse — sans « sécurisé » cosmétique ni bypass d'autorité.

## Problems / when

Security theatre · secrets · authz floue · acceptation risque implicite · confusion sécu vs DevOps.

**When :** données sensibles, authz, menaces, contrôles à qualifier.
**When-not :** pure CI · feature sans surface.

## Context inputs

Assets · classes de données · authn/z · menaces · politiques · Evidence contrôles · HD risque · LPS.

## Nora posture

Adversarial ; refuse bypass ; exige HD pour risque résiduel majeur ; ne proclame pas compliant.

### Guidance strategy (modes)

| Mode | Usage |
| --- | --- |
| **ASK** | Seulement si l'absence d'information change matériellement vérité, décision, trajectoire, autorité, sûreté ou preuve attendue. |
| **PROPOSE** | Option(s) ou Recommendation lorsque LPS / DoctrinePackage / Evidence suffisent sans inventer. |
| **PROCEED UNDER EXPLICIT HYPOTHESIS** | Avancer sous Hypothesis nommée, réversible, non promue en Fact / HumanDecision. |
| **CHALLENGE** | Contester confusions, promotions silencieuses, claims non sourcés, glissements de cycle. |
| **ESCALATE TO HUMAN DECISION** | Arbitrage structurel, autorité, risque résiduel ou trajectoire requis du Pilote. |
| **PAUSE** | Suspendre sans inventer ; préserver resume anchors. |
| **STOP** | Stop Condition / contradiction bloquante / chemin protégé / autorité insuffisante — sans contourner le moteur. |
| **REPLAN** | Requalification ProjectTrajectory (Recommendation) si dépendances / Evidence / contradictions l'imposent. |
| **RECOMMEND TRANSITION** | Cycle candidat **sans** auto-sélection ni waterfall. |

**Anti-script :** aucune liste fixe de questions. Préférer Hypothesis / Option / Recommendation / progression réversible si la question n'est pas matérielle.

### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions

Assets · menaces · contrôles · authz · secrets · logging sécu · lien RGPD · risque résiduel · acceptation · anti-bypass.

## Signals

Secret en repo → STOP · « On verra en prod » → CHALLENGE/ESCALATE · Compliant sans preuve → C-MAT-CLAIM.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.

### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY checklist générique · PARTIAL menaces partielles · SUFFICIENT risques+contrôles+résiduel · READY_TO_BOUND dossier risque bornable ≠ certifié.

## Anti / contradictions

« Sécurisé » · « RGPD OK » · « zero trust achieved » · bypass Pilote.
C-DOC-RT · C-DEC-IMP · C-MAT-CLAIM · C-SCOPE · C-REC-EV.

## Evidence (business-first)

1. Significative : contrôles/tests sourcés — *démontre* réduction de risque pour le Project.
2. Insuffisante : absence de scan ≠ safe.
3. Supportable : Risk résiduel documenté.
4. Non supportable : « sécurisé » / « compliant » sans preuve.
5. Impact : peut bloquer release/delivery/PR ; détail CVE secondaire après impact métier/risque.

## Decision / trajectory / replan

HD : acceptation risque ; exceptions ; go/no-go sécu.
Transverse : peut bloquer plusieurs cycles — sans auto-routing.
Replan : CVE critique · contrôle fail · HD risque cassée.
Stop : bypass / autorité / chemin protégé.

## Resume anchors

menaces actives · résiduel · HD risque · Evidence contrôles · blockers · Recommendations · Options · next action · dépendances.

## Profile / lens (pas d'imposition Critical)

Le profil courant **n'est pas** automatiquement Critical.

Si données personnelles, production, privilèges, exposition ou risque **augmentent matériellement** la criticité, Nora :
1. **CHALLENGE** le profil courant ;
2. **RECOMMEND** une requalification vers Critical ;
3. explicite les facteurs de criticité ;
4. **ESCALATE** vers le gate humain applicable si nécessaire.

Le CKC n'impose pas Critical · ne requalifie pas silencieusement · ne crée pas de gate.
Invariant : profil → lenses → CKC (feedback gouverné possible).

Lenses : Security, RSSI, RGPD.

## Limits

≠ audit certifiant · ≠ ExecutionAuthority.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


## Example

Recommendation « masquer identifiants sensibles dans Evidence » ≠ HD policy ; ESCALATE.

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/11-deploiement-release.md` (FULL — 5172 bytes)
```markdown
# Studio CKC — Déploiement / release

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:release` |
| **cycleTypeId** | `cyc:release` |
| **canonicalKey** | `deploiement-release` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Gouverner une **fenêtre de release** : go/no-go, rollback, comms — sans GO implicite depuis CI/QA partielle.

## Problems / when

Problems : release sans rollback · comms absentes · merge = release · ignore réserves QA.
**When :** mise à disposition contrôlée. **When-not :** merge PR seul.

## Context inputs

Verdict QA · sécu · observability readiness · runbooks · HD go/no-go · LPS.

## Nora posture & guidance

Refuse release si réserve bloquante ; exige rollback Hypothesis ; sépare merge≠release.

### Guidance (condensé)

- **ASK** seulement si matériel (vérité / décision / trajectoire / autorité / sûreté / preuve).
- Sinon **PROPOSE** Options/Recommendation, ou **PROCEED UNDER EXPLICIT HYPOTHESIS**.
- **CHALLENGE** promotions silencieuses et mauvais cycle.
- **ESCALATE TO HUMAN DECISION** pour arbitrages structurants ; **PAUSE** / **STOP** / **REPLAN** / **RECOMMEND TRANSITION** selon sûreté — sans auto-routing.


### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions & signals

Dims : go/no-go · rollback · fenêtre · comms · monitoring · critères abort · réserves ouvertes.

Signals : réserve bloquante → STOP/ESCALATE · rollback vague → ASK.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.


### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY desire to ship · PARTIAL runbook partiel · SUFFICIENT go criteria+rollback · READY_TO_BOUND release plan bornable.

## Anti-claims / contradictions / reliability

Anti : « Released = validated » · « zero risk ». C-REC-EV · C-MAT-CLAIM · C-TRAJ-DEP · C-DEC-IMP.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : go criteria satisfaits + rollback crédible — *démontre* une mise à disposition gouvernée.
2. Insuffisante : merge seul.
3. Supportable : Observation de critères go.
4. Non supportable : « validated product » depuis release.
5. Impact : abort → replan delivery ; métriques post-release secondaires après impact utilisateurs.

## Decision / trajectory / replan / exit-stop

HD go/no-go / abort. Candidates : observability · capitalisation · replan delivery. Replan : abort · incident · Evidence post-release. Stop si no-go non respecté.

## Resume anchors

fenêtre · go criteria · rollback · HD · réserves · Evidence · Recommendations · next action

## Profile / lens / limits / boundaries

Critical : rollback+comms. Lenses Release, Observability, Security. Limits : ≠ PR readiness · ≠ REAL.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **MEDIUM**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/12-observabilite-run-readiness.md` (FULL — 5679 bytes)
```markdown
# Studio CKC — Observabilité / RUN readiness

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:observability` |
| **cycleTypeId** | `cyc:observability` |
| **canonicalKey** | `observabilite-run-readiness` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Établir la **prêt-à-opérer** : signaux, SLO/SLI candidats, alertes, runbooks — sans « observable » marketing.

## Problems / when

Problems : blind spots · alertes bruit · SLO inventés · confusion debug vs RUN.
**When :** service à opérer / release proche. **When-not :** pure feature · archi sans surface RUN.

## Context inputs

Archis · release plan · incidents passés Evidence · contraintes on-call · LPS.

## Nora posture & guidance

Exige signaux actionnables ; refuse SLO fantaisie ; lie alerte→action.

### Guidance (condensé)

- **ASK** seulement si matériel (vérité / décision / trajectoire / autorité / sûreté / preuve).
- Sinon **PROPOSE** Options/Recommendation, ou **PROCEED UNDER EXPLICIT HYPOTHESIS**.
- **CHALLENGE** promotions silencieuses et mauvais cycle.
- **ESCALATE TO HUMAN DECISION** pour arbitrages structurants ; **PAUSE** / **STOP** / **REPLAN** / **RECOMMEND TRANSITION** selon sûreté — sans auto-routing.


### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions & signals

Dims : SLI/SLO candidats · golden signals · alertes · runbooks · dashboards · ownership · limites instrumentation.

Signals : dashboard sans action → CHALLENGE · SLO inventé → ASK source.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.


### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY logs only · PARTIAL metrics partielles · SUFFICIENT alertes+runbooks · READY_TO_BOUND RUN readiness Recommendation.

## Anti-claims / contradictions / reliability

Anti : « Full observability » · « AIOps ready ». C-MAT-CLAIM · C-REC-EV · C-SCOPE · C-TRAJ-DEP.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : alerte testée + runbook — *démontre* une capacité à détecter/agir.
2. Insuffisante : vanity dashboard.
3. Supportable : Observation de signal/action.
4. Non supportable : « full observability ».
5. Impact : peut bloquer release ; détail instrumentation secondaire après risque opérationnel Project.

## Decision / trajectory / replan / exit-stop

HD adoption SLO / blind spot. Candidates : release · post-merge · capitalisation incident. Replan : incident révèle blind spot · alerte fatigue. Pause si stack observabilité non décidée (lien archi tech).

## Resume anchors

SLOs · alertes · runbooks · HD · Evidence incidents · Recommendations · blockers · next action

## Profile / lens / limits / boundaries

MEDIUM depth obligatoire. La production est un signal de criticité, pas une requalification automatique. Si le contexte production augmente matériellement le risque, l'impact opérationnel ou les exigences de sûreté, Nora CHALLENGE le profil courant, RECOMMEND une requalification vers Critical et explicite les facteurs de criticité ; elle ESCALATE vers le gate humain applicable si nécessaire. Le CKC n'impose pas Critical. Lenses : Observability, RUN readiness, FinOps. Limits : ≠ security monitoring complet · ≠ Release go.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **MEDIUM**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/13-pr-readiness.md` (FULL — 3330 bytes)
```markdown
# Studio CKC — PR readiness

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:pr-readiness` |
| **cycleTypeId** | `cyc:pr-readiness` |
| **canonicalKey** | `pr-readiness` |
| **contractVersion** | `0.1.0` |
| **depth** | **LEAN** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité / when

Juger **READY / NOT READY** d'une branche à ouvrir ou passer Ready : scope, secrets, granularité, preuves minimales.
**When :** avant Ready PR. **When-not :** post-merge · release métier.

## Context / posture

Diff · CI · secrets scan · scope HD · Evidence tests · LPS.
Refuse secrets ; exige granularité ; Draft≠Ready ; **n'autorise pas** merge.

### Guidance (LEAN)

ASK si matériel · sinon Option / Hypothesis / Recommendation · CHALLENGE anti-claims · ESCALATE HD structurante · PAUSE/STOP/REPLAN sans inventer · RECOMMEND TRANSITION sans auto-sélection.

### Pilote

Tranche HD · confirme contexte matériel · n'exige pas d'invention · accepte/rejette Recommendations · respecte policies/gates/protected boundaries du Project.


## Focus

scope PR · secrets · granularité · tests · description honnête · blockers · anti-claims.

Signals : secret → STOP · scope creep → CHALLENGE · Ready sans CI → CHALLENGE.

### Epistemic boundaries

Obs/Fact/Hypothesis/Option/Recommendation/HumanDecision/Reserve/Risk/Evidence/Claim — aucune promotion silencieuse ; Recommendation ≠ HumanDecision ; Evidence ≠ Claim.

### Maturity → behavior

EXPLORATORY → explorer/Hypothesis · PARTIAL → ASK/Options bornées · SUFFICIENT_FOR_DECISION → Recommendation + HD triggers · READY_TO_BOUND → borne recommandée **sans** autorité. Maturité ≠ autorité.


Maturité : WIP → EXPLORATORY · diff partiel → PARTIAL · Ready Recommendation possible → SUFFICIENT · checklist bornable ≠ merge authority → READY_TO_BOUND.

## Evidence (business-first)

CI/tests *démontrent* un contrôle technique minimal — **pas** « projet prêt ». Claim supportable : Observation CI. Non supportable : Ready=approved=merge. Impact : bloque Ready ; logs secondaires.

## Decision / trajectory / stop

HD Ready (humaine) ; CKC ne clique pas Ready. Candidates : QA · security · post-merge. Replan : CI fail · scope change · secret. Stop secret/chemin protégé.

Anti : « Ready = approved » · « merge implied ». C-SCOPE · C-MAT-CLAIM · C-REC-EV.

## Resume anchors

état Draft/Ready · scope/diff · blockers · Evidence CI/review · active Recommendation · Options · réserves · next action · dépendances.

## Profile / boundaries

LEAN compact. Critical : secrets+scope. Lenses Security, DevOps.
### Boundaries

Cognitif seulement (FC-03→FC-04). Pas HD · pas autorité/EC · pas LPS/Trajectory/Evidence owner · pas package pin/digest · pas method v2.6 SoT · pas auto-cycle · pas questionnaire UI. Identité = ckcId/cycleTypeId/contractVersion.


---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **LEAN**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/14-post-merge.md` (FULL — 3379 bytes)
```markdown
# Studio CKC — Post-merge

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:post-merge` |
| **cycleTypeId** | `cyc:post-merge` |
| **canonicalKey** | `post-merge` |
| **contractVersion** | `0.1.0` |
| **depth** | **LEAN** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité / when

Clôturer **honnêtement** après merge : sync vérité, dettes, cleanup, réserves — sans « terminé » marketing.
**When :** après merge intégré. **When-not :** avant Ready PR · release métier.

## Context / posture

Merge identity/proof · CI post-merge · réserves · branches · doc gates · LPS.
Exige vérité post-merge ; liste réserves ; refuse VALIDATED implicite.

### Guidance (LEAN)

ASK si matériel · sinon Option / Hypothesis / Recommendation · CHALLENGE anti-claims · ESCALATE HD structurante · PAUSE/STOP/REPLAN sans inventer · RECOMMEND TRANSITION sans auto-sélection.

### Pilote

Tranche HD · confirme contexte matériel · n'exige pas d'invention · accepte/rejette Recommendations · respecte policies/gates/protected boundaries du Project.


## Focus

vérité Git · CI post-merge · réserves · cleanup · sync doc · next Recommendation · anti-claims.

Signals : « mergé donc validé » → CHALLENGE · réserve oubliée → ASK/ESCALATE.

### Epistemic boundaries

Obs/Fact/Hypothesis/Option/Recommendation/HumanDecision/Reserve/Risk/Evidence/Claim — aucune promotion silencieuse ; Recommendation ≠ HumanDecision ; Evidence ≠ Claim.

### Maturity → behavior

EXPLORATORY → explorer/Hypothesis · PARTIAL → ASK/Options bornées · SUFFICIENT_FOR_DECISION → Recommendation + HD triggers · READY_TO_BOUND → borne recommandée **sans** autorité. Maturité ≠ autorité.


Maturité : merge non lu → EXPLORATORY · sync partielle → PARTIAL · closeout+réserves → SUFFICIENT · capitalisation candidate → READY_TO_BOUND.

## Evidence (business-first)

CI post-merge / sync *démontrent* intégration technique — **pas** contenu VALIDATED / runtime ADOPTED. Impact : réserve ouverte → next action ; détail CI secondaire.

## Decision / trajectory / stop

HD garder/fermer réserves ; cleanup branches selon policies Project. Candidates : capitalisation · observability · replan capability. Replan : CI post-merge fail · vérité divergente. Pause si vérité Git instable.

Anti : « Merged = done = adopted = runtime proven ». C-MAT-CLAIM · C-TRAJ-DEP · C-DEC-IMP.

## Resume anchors

merge identity/proof · post-merge Evidence · unresolved reserves · active Recommendation · HD · blockers · next action · dépendances.

## Profile / boundaries

LEAN compact. Critical : réserves bloquantes. Lens Capitalization COND.
### Boundaries

Cognitif seulement (FC-03→FC-04). Pas HD · pas autorité/EC · pas LPS/Trajectory/Evidence owner · pas package pin/digest · pas method v2.6 SoT · pas auto-cycle · pas questionnaire UI. Identité = ckcId/cycleTypeId/contractVersion.


---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **LEAN**.
```

### `lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/15-capitalisation-rex.md` (FULL — 5765 bytes)
```markdown
# Studio CKC — Capitalisation / REX

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:capitalization` |
| **cycleTypeId** | `cyc:capitalization` |
| **canonicalKey** | `capitalisation-rex` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Capturer un **apprentissage réutilisable** : faits, réserves, recommandations — sans promotion prématurée méthode/doctrine.

## Problems / when

Problems : faits≠reco confondus · promotion silencieuse · REX cosmétique · oubli anti-claims.
**When :** après preuve/merge/incident/cycle clos utile. **When-not :** delivery chaotique sans faits.

## Context inputs

Evidence · HD · réserves · dettes · LPS · doctrine applicable.

## Nora posture & guidance

Sépare Fact/Recommendation/HD ; refuse promotion ; propose Options de capitalisation.

### Guidance (condensé)

- **ASK** seulement si matériel (vérité / décision / trajectoire / autorité / sûreté / preuve).
- Sinon **PROPOSE** Options/Recommendation, ou **PROCEED UNDER EXPLICIT HYPOTHESIS**.
- **CHALLENGE** promotions silencieuses et mauvais cycle.
- **ESCALATE TO HUMAN DECISION** pour arbitrages structurants ; **PAUSE** / **STOP** / **REPLAN** / **RECOMMEND TRANSITION** selon sûreté — sans auto-routing.


### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions & signals

Dims : faits établis · erreurs · dettes · reco candidates · décisions prises · anti-claims · réutilisation · non-promotion.

Signals : « mettre à jour la doctrine/méthode maintenant » → CHALLENGE gate distinct · Claim ADOPTED → C-MAT-CLAIM.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.


### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY notes · PARTIAL faits partiels · SUFFICIENT REX structuré · READY_TO_BOUND candidate harvest **≠** update SoT automatique.

## Anti-claims / contradictions / reliability

Anti : « Doctrine updated » · « CKC validated » · « runtime adopted » via REX seul. C-DOC-RT · C-MAT-CLAIM · C-REC-EV · C-SRC.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : faits sourcés Evidence — *démontre* un apprentissage Project.
2. Insuffisante : anecdote.
3. Supportable : Fact + Recommendation séparés.
4. Non supportable : promotion méthode/doctrine automatique.
5. Impact : peut proposer évolution méthode/doctrine **sous gouvernance distincte** ; jamais auto Product Backlog / auto-update method.

## Decision / trajectory / replan / exit-stop

HD promotion/harvest sous processus distinct. Replan si fait contredit. Stop si tentative modifier method/runtime sans gate Project applicable.

## Resume anchors

faits · reco · HD promotion · Evidence · réserves · Recommendations · next gate proposé (gouvernance) · dépendances

## Profile / lens / limits / boundaries

Capitalization naturelle. Un enjeu doctrinal est un signal de criticité, pas une requalification automatique. Si la portée doctrinale augmente matériellement le risque, l'impact transverse ou la gouvernance requise, Nora CHALLENGE le profil courant, RECOMMEND une requalification vers Critical et explicite les facteurs de criticité ; elle ESCALATE vers le gate humain applicable si nécessaire. Le CKC n'impose pas Critical. Lens : Capitalization. Limits : REX ≠ VALIDATED corpus · ≠ DoctrinePackage integrate.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **MEDIUM**.
```

---

## 16. Unified `git diff` — all modified `*.ts` under `projects/sfia-studio/app`

*(New untracked `.ts` files appear only in §14–15; diff below is **modified tracked** files only.)*

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
index e1fe2038..aff6a5eb 100644
--- a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
@@ -131,7 +131,7 @@ describe("M3 Product SQLite schema migration", () => {
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
     expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m5-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m6-0.1.0");

     const decisions = svc.store.db
       .prepare(
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
index d4f6c725..91f28769 100644
--- a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
@@ -147,7 +147,7 @@ describe("M5 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m5-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m6-0.1.0");
     expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");

     expect(tableExists(svc.store.db, "oa_human_decisions")).toBe(true);
@@ -196,7 +196,7 @@ describe("M5 Product SQLite schema migration", () => {
     const version = svc.store.db
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
-    expect(version.value).toBe("m5-0.1.0");
+    expect(version.value).toBe("m6-0.1.0");
     expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
   });

diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
index dba6ee74..79c28a53 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
@@ -17,7 +17,7 @@ import {
 } from "@/lib/vertical-slice-core";

 const APP_ROOT = path.resolve(__dirname, "../..");
-const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
 const SCHEMAS_ROOT = path.resolve(
   APP_ROOT,
   "../sfia-v3-modeled/v3-native-option-a/schemas",
@@ -147,7 +147,7 @@ describe("visible slice V1 Project/LPS happy path", () => {
       perceivedCriticality: "STANDARD",
       constraints: ["No IAM", "No product persistence"],
       doctrine: {
-        id: "pkg:studio-v3-oa",
+        id: "pkg:sfia-studio-doctrine-v3",
         version: "1.0.0",
         digest: DEFAULT_LOCAL_DOCTRINE_PIN.digest,
         status: "resolved",
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index eee7d665..00dd3f49 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -77,6 +77,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "app/api/e2e/option-a-qa-scenario/route.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime/paths",
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/f3/prepareAndResolveM3ProductPath.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index a67adb42..467a5955 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -2,7 +2,7 @@

 import { useCallback, useEffect, useRef, useState } from "react";
 import Link from "next/link";
-import { shouldShowProjectRecovery } from "@/features/project-assistant/presentationLabels";
+import { shouldShowProjectRecovery, w1RestartHonestyMessage } from "@/features/project-assistant/presentationLabels";
 import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
 import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
 import { useProductConversation } from "./hooks/useProductConversation";
@@ -126,9 +126,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
         />
       ) : (
         <p className={styles.durabilityHint} data-testid="project-durability-hint">
-          La conversation, la proposition et la confirmation restent
-          process-local et peuvent être perdues au rechargement. Ce qui est
-          enregistré pour le projet peut être relu.
+          {w1RestartHonestyMessage()}
         </p>
       )}

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css
index 8493c7a4..680b1efa 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css
@@ -41,6 +41,18 @@
   color: var(--pm6-muted-strong);
 }

+.disclosureList {
+  margin: var(--pm6-space-2) 0 0;
+  padding-left: 1.1rem;
+  font-size: 0.82rem;
+  line-height: 1.5;
+  color: var(--pm6-muted-strong);
+}
+
+.disclosureList li + li {
+  margin-top: var(--pm6-space-1);
+}
+
 .actions {
   display: flex;
   flex-wrap: wrap;
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
index ff9c908b..0f4ba6ae 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
@@ -1,5 +1,11 @@
 "use client";

+import {
+  W1_DURABLE_DISCLOSURE,
+  W1_NON_DURABLE_DISCLOSURE,
+  W1_REQUALIFY_CTA,
+  W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
+} from "@/features/project-assistant/presentationLabels";
 import styles from "./RecoverySurface.module.css";

 /**
@@ -29,6 +35,11 @@ export function RecoverySurface({
           peut être relu. La conversation, la proposition et la confirmation
           restent process-local et peuvent être perdues au rechargement.
         </p>
+        <ul className={styles.disclosureList} data-testid="w1-recovery-disclosures">
+          <li>{W1_DURABLE_DISCLOSURE}</li>
+          <li>{W1_NON_DURABLE_DISCLOSURE}</li>
+          <li>{W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY}</li>
+        </ul>
       </div>
       <div className={styles.actions}>
         <button
@@ -45,7 +56,7 @@ export function RecoverySurface({
           data-testid="recovery-requalify"
           onClick={onRequalify}
         >
-          Repartir d&apos;une nouvelle intention
+          {W1_REQUALIFY_CTA}
         </button>
       </div>
     </section>
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index f53e9810..f7f81f94 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -221,7 +221,14 @@ export function validateIntentAnalysisPayload(raw: unknown): IntentAnalysisDto {
   };
 }

-const ANALYSIS_SYSTEM = `Tu analyses l'intention utilisateur pour SFIA Studio F2.
+function buildAnalysisSystem(ckcContext?: string | null): string {
+  const ckcSection = ckcContext?.trim()
+    ? `\nContexte CKC résolu (guidance seulement — pas d'autorité):\n${ckcContext.trim()}\n`
+    : "";
+  return `${ANALYSIS_SYSTEM_BASE}${ckcSection}`;
+}
+
+const ANALYSIS_SYSTEM_BASE = `Tu analyses l'intention utilisateur pour SFIA Studio F2.
 Réponds UNIQUEMENT avec un objet JSON conforme au schéma (pas de markdown, pas de prose).
 Champs obligatoires:
 intentClass (informative|actionable|ambiguous|execution_request),
@@ -234,9 +241,13 @@ Règles strictes:
 - informative et ambiguous: candidateCycleTypeId et signals PEUVENT être null.
 - Ne décide jamais un GO Morris; ne propose jamais d'exécution; n'invente jamais un cycle (ex. delivery) par défaut.`;

+export const ANALYSIS_SYSTEM = ANALYSIS_SYSTEM_BASE;
+
 export async function analyzeIntent(input: {
   userContent: string;
   projectSummary: string;
+  /** Optional resolved CKC excerpt for future intent analysis enrichment. */
+  ckcContext?: string | null;
 }): Promise<{
   analysis: IntentAnalysisDto;
   presentation: "test_provider" | "openai_live";
@@ -250,7 +261,7 @@ export async function analyzeIntent(input: {
       : "openai_live";

   const messages: ProviderChatMessage[] = [
-    { role: "system", content: ANALYSIS_SYSTEM },
+    { role: "system", content: buildAnalysisSystem(input.ckcContext) },
     {
       role: "user",
       content: `Contexte projet:\\n${input.projectSummary}\\n\\nDemande:\\n${input.userContent}`,
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 21fb6adb..5b43fa3e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -21,7 +21,13 @@ import type {
 import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
 import { analyzeIntent } from "./intentAnalysis";
 import { evaluateMorrisGateRequired } from "./gatePolicy";
+import {
+  enrichQualificationWithCkcSemantics,
+  isProductStudioNativeCkcProof,
+} from "./ckcCognitiveContext";
 import { projectCkcResolutionRef, qualifyWithCkc } from "./qualify";
+import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
+import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
 import {
   F2_PROCESS_LOCAL_NOTICE,
   createProposalId,
@@ -66,6 +72,16 @@ function toContextDto(
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
@@ -380,6 +396,16 @@ export async function orchestrateAssistantSend(input: {
   }

   let { qualification } = qualified;
+  if (isProductStudioNativeCkcProof(qualified.raw.proof)) {
+    const packagePin = doctrinePackagePinFromProject(project);
+    qualification = enrichQualificationWithCkcSemantics({
+      qualification,
+      proof: qualified.raw.proof,
+      registryRoot: resolveProductDoctrineRegistryRoot(),
+      packagePin,
+    });
+  }
+
   const ckcResolutionRef =
     qualification.ckcResolutionRef ??
     projectCkcResolutionRef(qualified.raw.proof);
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/qualify.ts b/projects/sfia-studio/app/features/project-assistant/f2/qualify.ts
index 5ca88626..19cef9d9 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/qualify.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/qualify.ts
@@ -11,6 +11,11 @@ import {
 } from "@/lib/oa/cycle";
 import type { F2QualificationSignals, QualificationDto } from "./types";

+export {
+  enrichQualificationWithCkcSemantics,
+  type CkcQualificationProof,
+} from "./ckcCognitiveContext";
+
 export function projectCkcResolutionRef(
   proof: CkcQualificationSuccessResult["proof"],
 ): string {
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/types.ts b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
index e45c02fa..573dc2f9 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
@@ -42,6 +42,15 @@ export type F2ContextSnapshot = {
   ckcResolutionRef?: string | null;
 };

+export type CkcSemanticProvenance = {
+  readonly ckcId: string;
+  readonly cycleTypeId: string;
+  readonly doctrinePackageId: string;
+  readonly packageVersion: string;
+  readonly contentDigest: string;
+  readonly doctrineStatus: "product-studio-native";
+};
+
 export type QualificationDto = {
   cycleTypeId: string;
   cycleLabel: string;
@@ -60,6 +69,8 @@ export type QualificationDto = {
   /** Durable CKC binding projection (no raw CKC dimensions). */
   ckcResolutionRef?: string;
   executionAuthority?: false;
+  /** W1 bounded seam — attributable product-package CKC guidance (Recommendation only). */
+  ckcSemanticProvenance?: CkcSemanticProvenance;
   /** Set after durable CycleInstance create (M2). */
   cycleInstanceId?: string;
   cycleStatus?: string;
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index 29cc06cd..4c56c239 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -117,6 +117,53 @@ export function shouldShowProjectRecovery(input: {
   return false;
 }

+/** W1 Track E — honest durable vs process-local disclosure strings. */
+export const W1_DURABLE_DISCLOSURE =
+  "Durable : Project, LPS, Cycle, trajectoire (confirmation accordée), épistémique matérialisé.";
+
+export const W1_NON_DURABLE_DISCLOSURE =
+  "Non-durable : conversation, confirmation demandée, proposition process-local.";
+
+export const W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY =
+  "Une confirmation ou autorisation restaurée depuis l'état durable n'est pas l'autorité courante.";
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
+      "Cycle",
+      "Trajectoire (confirmation accordée)",
+      "Épistémique matérialisé",
+    ]),
+    nonDurable: Object.freeze([
+      "Conversation",
+      "Confirmation demandée",
+      "Proposition process-local",
+    ]),
+    restoredGrantedNotice: W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
+    requalifyCta: W1_REQUALIFY_CTA,
+  });
+}
+
+export function w1RestartHonestyMessage(): string {
+  return [
+    W1_DURABLE_DISCLOSURE,
+    W1_NON_DURABLE_DISCLOSURE,
+    W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
+  ].join(" ");
+}
+
 /**
  * Map Attempt technical status to French user labels.
  * "bloqué avant exécution" must not invent an Attempt ID (caller responsibility).
diff --git a/projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx b/projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx
index 1114fedd..68629d75 100644
--- a/projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx
+++ b/projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx
@@ -1,5 +1,12 @@
 "use client";

+import {
+  W1_DURABLE_DISCLOSURE,
+  W1_NON_DURABLE_DISCLOSURE,
+  W1_REQUALIFY_SHORT_CTA,
+  W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
+  w1RestartHonestyMessage,
+} from "@/features/project-assistant/presentationLabels";
 import styles from "./project-recovery-banner.module.css";

 /**
@@ -24,11 +31,13 @@ export function ProjectRecoveryBanner({
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
+          <li>{W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY}</li>
+        </ul>
       </div>
       <div className={styles.actions}>
         <button
@@ -45,7 +54,7 @@ export function ProjectRecoveryBanner({
           data-testid="recovery-requalify"
           onClick={onRequalify}
         >
-          Requalifier
+          {W1_REQUALIFY_SHORT_CTA}
         </button>
       </div>
     </section>
diff --git a/projects/sfia-studio/app/features/studio-projects/project-recovery-banner.module.css b/projects/sfia-studio/app/features/studio-projects/project-recovery-banner.module.css
index 79b198ca..da4754ad 100644
--- a/projects/sfia-studio/app/features/studio-projects/project-recovery-banner.module.css
+++ b/projects/sfia-studio/app/features/studio-projects/project-recovery-banner.module.css
@@ -24,6 +24,19 @@
   line-height: var(--sfia-line-body);
 }

+.disclosureList {
+  margin: 8px 0 0;
+  padding-left: 1.1rem;
+  max-width: 58ch;
+  color: var(--sfia-muted);
+  font-size: 12px;
+  line-height: var(--sfia-line-body);
+}
+
+.disclosureList li + li {
+  margin-top: 4px;
+}
+
 .actions {
   display: flex;
   flex-wrap: wrap;
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx b/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
index d0113e91..a9c3acf3 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
@@ -1,6 +1,7 @@
 import { Card } from "@/components/ui/Card";
 import { CtaButton } from "@/components/ui/CtaButton";
 import { StatusPill } from "@/components/ui/StatusPill";
+import { w1RestartHonestyMessage } from "@/features/project-assistant/presentationLabels";
 import type { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
 import styles from "./project-workspace.module.css";

@@ -130,6 +131,12 @@ function ProjectProjection({ result }: { result: GetProjectSuccess }) {
         >
           Parcours principal : conversation de qualification.
         </p>
+        <p
+          className={styles.hint}
+          data-testid="workspace-w1-durability-disclosure"
+        >
+          {w1RestartHonestyMessage()}
+        </p>
         <div className={styles.secondaryActions}>
           <CtaButton
             href="/studio"
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/createInitialTrajectory.ts b/projects/sfia-studio/app/lib/oa/cycle/application/createInitialTrajectory.ts
index e198099e..0ebf05c2 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/createInitialTrajectory.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/createInitialTrajectory.ts
@@ -12,7 +12,7 @@ import type {
   ProjectTrajectory,
   TrajectoryResult,
 } from "../domain/types";
-import type { MemoryCycleStore } from "../infrastructure/memoryCycleStore";
+import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
 import type { CycleAuditPort } from "../ports/cycleAudit";
 import type { TrajectoryRepositoryPort } from "../ports/trajectoryRepository";

@@ -30,7 +30,7 @@ export class CreateInitialTrajectory {
     private readonly projectServices: ProjectServices,
     private readonly clock: ClockPort,
     private readonly audit: CycleAuditPort,
-    private readonly store?: MemoryCycleStore,
+    private readonly store?: CyclePersistenceUnitOfWorkPort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts b/projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts
index b73af1a8..cf07e1f0 100644
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
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts b/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
index eb2559db..8f7e2378 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
@@ -10,7 +10,7 @@ import type {
   UpdateEpistemicResult,
   UpdateEpistemicStateRequest,
 } from "../domain/types";
-import type { MemoryCycleStore } from "../infrastructure/memoryCycleStore";
+import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
 import type { MemoryEpistemicRepository } from "../infrastructure/memoryEpistemicRepository";
 import type { CycleAuditPort } from "../ports/cycleAudit";
 import type { EpistemicRepositoryPort } from "../ports/epistemicRepository";
@@ -29,7 +29,7 @@ export class UpdateEpistemicState {
       Partial<Pick<MemoryEpistemicRepository, "saveForProject">>,
     private readonly clock: ClockPort,
     private readonly audit: CycleAuditPort,
-    private readonly store?: MemoryCycleStore,
+    private readonly store?: CyclePersistenceUnitOfWorkPort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts
index 065f0a7b..d8677e03 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts
@@ -25,10 +25,17 @@ export type CkcConsumptionProof = {
   readonly catalogHash: string;
   readonly correlationId: string;
   readonly resolvedAt: string;
-  readonly doctrineStatus: "method-candidate";
+  readonly doctrineStatus: "method-candidate" | "product-studio-native";
   readonly executionAuthority: false;
   readonly consumed: true;
   readonly disclosures: readonly string[];
+  readonly doctrinePackageId?: string;
+  readonly packageVersion?: string;
+  readonly packageDigest?: string;
+  readonly indexDigest?: string;
+  readonly ckcId?: string;
+  readonly ckcContractVersion?: string;
+  readonly sourceDigest?: string;
 };

 export type CkcConsumptionProofResult =
@@ -101,7 +108,47 @@ function fallbackDisclosureCount(
   return disclosures.filter((item) => item === FALLBACK_DISCLOSURE).length;
 }

-function isProjectionConsistent(
+function hasProductProvenance(
+  resolution: CkcQualificationResolution,
+): boolean {
+  return Boolean(
+    resolution.doctrinePackageId &&
+      resolution.packageVersion &&
+      resolution.packageDigest &&
+      resolution.indexDigest &&
+      resolution.ckcId &&
+      resolution.ckcContractVersion &&
+      resolution.sourceDigest &&
+      resolution.usedReference === resolution.ckcId,
+  );
+}
+
+function isProductProjectionConsistent(
+  projection: ValidatedCycleTypeProjection,
+  resolution: CkcQualificationResolution,
+): boolean {
+  return (
+    projection.cycleTypeId === resolution.cycleTypeId &&
+    projection.catalogVersion === resolution.catalogVersion &&
+    projection.catalogHash === resolution.catalogHash &&
+    projection.correlationId === resolution.correlationId &&
+    resolution.doctrineStatus === "product-studio-native" &&
+    resolution.executionAuthority === false &&
+    resolution.fallbackPolicy === "none" &&
+    isIso8601DateTime(resolution.resolvedAt) &&
+    Boolean(resolution.usedReference) &&
+    resolution.exploitable &&
+    resolution.detailedStatus === "resolved_detailed" &&
+    resolution.level === "detailed" &&
+    resolution.status === "resolved" &&
+    resolution.source === "product_package" &&
+    resolution.fallbackUsed === false &&
+    fallbackDisclosureCount(resolution.disclosures) === 0 &&
+    hasProductProvenance(resolution)
+  );
+}
+
+function isMethodProjectionConsistent(
   projection: ValidatedCycleTypeProjection,
   resolution: CkcQualificationResolution,
 ): boolean {
@@ -161,6 +208,16 @@ function isProjectionConsistent(
   );
 }

+function isProjectionConsistent(
+  projection: ValidatedCycleTypeProjection,
+  resolution: CkcQualificationResolution,
+): boolean {
+  if (resolution.doctrineStatus === "product-studio-native") {
+    return isProductProjectionConsistent(projection, resolution);
+  }
+  return isMethodProjectionConsistent(projection, resolution);
+}
+
 /** Pure fail-closed proof builder. Functional failures are values, not throws. */
 export function buildCkcConsumptionProof(
   projection: ValidatedCycleTypeProjection,
@@ -197,10 +254,21 @@ export function buildCkcConsumptionProof(
     catalogHash: resolution.catalogHash,
     correlationId: resolution.correlationId,
     resolvedAt: resolution.resolvedAt,
-    doctrineStatus: "method-candidate" as const,
+    doctrineStatus: resolution.doctrineStatus,
     executionAuthority: false as const,
     consumed: true as const,
     disclosures: Object.freeze([...resolution.disclosures]),
+    ...(resolution.doctrineStatus === "product-studio-native"
+      ? {
+          doctrinePackageId: resolution.doctrinePackageId,
+          packageVersion: resolution.packageVersion,
+          packageDigest: resolution.packageDigest,
+          indexDigest: resolution.indexDigest,
+          ckcId: resolution.ckcId,
+          ckcContractVersion: resolution.ckcContractVersion,
+          sourceDigest: resolution.sourceDigest,
+        }
+      : {}),
   };

   return { ok: true, proof: Object.freeze(proof) };
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
index b7b42566..ce8e9b73 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
@@ -102,7 +102,7 @@ export type CkcQualificationResolution = {
   readonly usedReference?: string;
   readonly fallbackUsed: boolean;
   readonly fallbackReference?: string;
-  readonly doctrineStatus: "method-candidate";
+  readonly doctrineStatus: "method-candidate" | "product-studio-native";
   readonly executionAuthority: false;
   readonly catalogVersion: string;
   readonly catalogHash: string;
@@ -110,4 +110,11 @@ export type CkcQualificationResolution = {
   readonly resolvedAt: string;
   readonly exploitable: boolean;
   readonly disclosures: readonly string[];
+  readonly doctrinePackageId?: string;
+  readonly packageVersion?: string;
+  readonly packageDigest?: string;
+  readonly indexDigest?: string;
+  readonly ckcId?: string;
+  readonly ckcContractVersion?: string;
+  readonly sourceDigest?: string;
 };
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
index 42ce999e..54b7d52c 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
@@ -69,6 +69,7 @@ export type CkcFallbackPolicy = "intra_v3_only" | "none";
 export type CkcSource =
   | "repository_candidate"
   | "intra_v3_synthetic"
+  | "product_package"
   | "unavailable";

 export type CycleInstance = {
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index df8665c4..1bd1d670 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -54,6 +54,7 @@ export {
 } from "./infrastructure/observability";
 export * from "./infrastructure/ckcReferenceManifest";
 export * from "./infrastructure/ckcQualificationResolver";
+export * from "./infrastructure/productCkcQualificationResolver";
 export {
   createSqliteCycleServices,
   createTestSqliteCycleServices,
@@ -63,7 +64,10 @@ export {
 export { SqliteCycleRepository } from "./infrastructure/sqlite/sqliteCycleRepository";
 export { SqliteCycleAuditJournal } from "./infrastructure/sqlite/sqliteCycleAuditJournal";

-import type { ClockPort } from "@/lib/oa/doctrine";
+import type { ClockPort, DoctrinePackagePin } from "@/lib/oa/doctrine";
+import {
+  PRODUCT_DOCTRINE_PACKAGE_ID,
+} from "@/lib/oa/doctrine/product/constants";
 import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
 import type { ProjectServices } from "@/lib/oa/project";
 import { CreateCycle } from "./application/createCycle";
@@ -81,6 +85,9 @@ import {
 import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
 import { UpdateEpistemicState } from "./application/updateEpistemicState";
 import { CkcQualificationResolver } from "./infrastructure/ckcQualificationResolver";
+import {
+  createProductCkcQualificationResolver,
+} from "./infrastructure/productCkcQualificationResolver";
 import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
 import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
 import { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
@@ -134,9 +141,19 @@ export type CreateCkcQualificationServicesOptions = {
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
@@ -166,7 +183,13 @@ export function createCkcQualificationServices(
   const failureAwareAudit = createFailureAwareAudit(audit);
   const resolver =
     options.resolver ??
-    new CkcQualificationResolver(undefined, failureAwareAudit);
+    (usesProductDoctrinePin(options.doctrinePackagePin) && options.registryRoot
+      ? (options.productResolverFactory?.(failureAwareAudit, options.registryRoot) ??
+        createProductCkcQualificationResolver(
+          { registryRoot: options.registryRoot },
+          failureAwareAudit,
+        ))
+      : new CkcQualificationResolver(undefined, failureAwareAudit));
   const qualifyCycle =
     options.qualifyCycle ?? new QualifyCycle(clock, failureAwareAudit);

diff --git a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
index 9a6ba717..a4a9937e 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
@@ -12,9 +12,6 @@ import { QualifyCycle } from "../../application/qualifyCycle";
 import { ResolveCycleKnowledgeContract } from "../../application/resolveCycleKnowledgeContract";
 import { UpdateEpistemicState } from "../../application/updateEpistemicState";
 import { MemoryCkcResolver } from "../memoryCkcResolver";
-import { MemoryCycleStore } from "../memoryCycleStore";
-import { MemoryEpistemicRepository } from "../memoryEpistemicRepository";
-import { MemoryTrajectoryRepository } from "../memoryTrajectoryRepository";
 import type { CycleAuditPort } from "../../ports/cycleAudit";
 import type { CyclePersistenceUnitOfWorkPort } from "../../ports/cyclePersistenceUnitOfWorkPort";
 import type { CycleRepositoryPort } from "../../ports/cycleRepository";
@@ -23,6 +20,8 @@ import type { EpistemicRepositoryPort } from "../../ports/epistemicRepository";
 import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
 import { SqliteCycleAuditJournal } from "./sqliteCycleAuditJournal";
 import { SqliteCycleRepository } from "./sqliteCycleRepository";
+import { SqliteEpistemicRepository } from "./sqliteEpistemicRepository";
+import { SqliteTrajectoryRepository } from "./sqliteTrajectoryRepository";

 export type CreateSqliteCycleServicesOptions = {
   projectServices: ProjectServices;
@@ -54,17 +53,15 @@ export type SqliteCycleServices = {
 };

 /**
- * CycleInstance durable services on Product SQLite (M2).
- * Trajectory/Epistemic remain Memory (out of M2 durability scope).
+ * CycleInstance + Trajectory + Epistemic durable services on Product SQLite (M2/M6).
  */
 export function createSqliteCycleServices(
   options: CreateSqliteCycleServicesOptions,
 ): SqliteCycleServices {
   const productStore = options.productStore;
-  const memory = new MemoryCycleStore();
   const cycles = new SqliteCycleRepository(productStore);
-  const trajectories = new MemoryTrajectoryRepository(memory);
-  const epistemic = new MemoryEpistemicRepository(memory);
+  const trajectories = new SqliteTrajectoryRepository(productStore);
+  const epistemic = new SqliteEpistemicRepository(productStore);
   const clock = options.clock ?? new SystemClock();
   const audit = options.audit ?? new SqliteCycleAuditJournal(productStore);
   const ckc = options.ckcResolver ?? new MemoryCkcResolver();
@@ -91,7 +88,7 @@ export function createSqliteCycleServices(
       options.projectServices,
       clock,
       audit,
-      memory,
+      productStore,
     ),
     getCurrentTrajectory: new GetCurrentTrajectory(trajectories, clock, audit),
     getTrajectoryVersion: new GetTrajectoryVersion(trajectories, clock, audit),
@@ -100,14 +97,14 @@ export function createSqliteCycleServices(
       options.projectServices,
       clock,
       audit,
-      memory,
+      productStore,
     ),
     getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
     updateEpistemicState: new UpdateEpistemicState(
       epistemic,
       clock,
       audit,
-      memory,
+      productStore,
     ),
     resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
       ckc,
diff --git a/projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts b/projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts
index ff7f8179..8650d1ac 100644
--- a/projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts
@@ -13,8 +13,6 @@ import { RequestConfirmation } from "../../application/requestConfirmation";
 import { SupersedeHumanDecision } from "../../application/supersedeHumanDecision";
 import { VerifyAuthority } from "../../application/verifyAuthority";
 import { MemoryAuthorityResolver } from "../memoryAuthorityResolver";
-import { MemoryConfirmationRepository } from "../memoryConfirmationRepository";
-import { MemoryDecisionStore } from "../memoryDecisionStore";
 import type { AuthorityResolverPort } from "../../ports/authorityResolver";
 import type { ConfirmationRepositoryPort } from "../../ports/confirmationRepository";
 import type { DecisionAuditPort } from "../../ports/decisionAudit";
@@ -22,6 +20,7 @@ import type { DecisionPersistenceUnitOfWorkPort } from "../../ports/decisionPers
 import type { DecisionRepositoryPort } from "../../ports/decisionRepository";
 import { SqliteDecisionAuditJournal } from "./sqliteDecisionAuditJournal";
 import { SqliteDecisionRepository } from "./sqliteDecisionRepository";
+import { SqliteConfirmationRepository } from "./sqliteConfirmationRepository";

 export type CreateSqliteDecisionServicesOptions = {
   projectServices: ProjectServices;
@@ -53,16 +52,14 @@ export type SqliteDecisionServices = {
 };

 /**
- * HumanDecision durable services on Product SQLite (M3).
- * Confirmations remain Memory (process-local) on a dedicated MemoryDecisionStore.
+ * HumanDecision + Confirmation durable services on Product SQLite (M3/M6).
  */
 export function createSqliteDecisionServices(
   options: CreateSqliteDecisionServicesOptions,
 ): SqliteDecisionServices {
   const productStore = options.productStore;
-  const confirmationStore = new MemoryDecisionStore();
   const decisions = new SqliteDecisionRepository(productStore);
-  const confirmations = new MemoryConfirmationRepository(confirmationStore);
+  const confirmations = new SqliteConfirmationRepository(productStore);
   const clock = options.clock ?? new SystemClock();
   const audit = options.audit ?? new SqliteDecisionAuditJournal(productStore);
   const authority =
@@ -90,32 +87,32 @@ export function createSqliteDecisionServices(
       confirmations,
       clock,
       audit,
-      confirmationStore,
+      productStore,
     ),
     grantConfirmation: new GrantConfirmation(
       confirmations,
       authority,
       clock,
       audit,
-      confirmationStore,
+      productStore,
     ),
     refuseConfirmation: new RefuseConfirmation(
       confirmations,
       clock,
       audit,
-      confirmationStore,
+      productStore,
     ),
     consumeConfirmation: new ConsumeConfirmation(
       confirmations,
       clock,
       audit,
-      confirmationStore,
+      productStore,
     ),
     cancelConfirmation: new CancelConfirmation(
       confirmations,
       clock,
       audit,
-      confirmationStore,
+      productStore,
     ),
     supersedeHumanDecision: new SupersedeHumanDecision(
       decisions,
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/index.ts b/projects/sfia-studio/app/lib/oa/doctrine/index.ts
index dceb16b2..5f3c919f 100644
--- a/projects/sfia-studio/app/lib/oa/doctrine/index.ts
+++ b/projects/sfia-studio/app/lib/oa/doctrine/index.ts
@@ -35,6 +35,13 @@ export {
   MemoryDoctrineAuditJournal,
 } from "./infrastructure/observability";

+export {
+  DEFAULT_PRODUCT_DOCTRINE_PIN,
+  PRODUCT_DOCTRINE_PACKAGE_ID,
+  PRODUCT_DOCTRINE_PACKAGE_VERSION,
+} from "./product/constants";
+export * from "./product/productCkcIndex";
+
 import path from "node:path";
 import { ResolveDoctrinePackage } from "./application/resolveDoctrinePackage";
 import { AjvSchemaValidationAdapter } from "./infrastructure/ajvSchemaValidationAdapter";
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts
index c67c7bc8..bab75936 100644
--- a/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts
@@ -17,6 +17,7 @@ import type {
 } from "../ports/doctrinePackageRepositoryPort";

 const MAX_MANIFEST_BYTES = 256_000;
+const MAX_PACKAGE_FILE_BYTES = 512_000;
 const REGISTRY_FILE = "registry.json";
 const MANIFEST_FILE = "manifest.json";

@@ -210,4 +211,120 @@ export class FilesystemDoctrinePackageRepository
       };
     }
   }
+
+  async loadPackageFile(
+    entry: LocalRegistryEntry,
+    relativePath: string,
+  ): Promise<DoctrinePackageLoadResult> {
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
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageRepositoryPort.ts b/projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageRepositoryPort.ts
index bd6247d3..cdb31c43 100644
--- a/projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageRepositoryPort.ts
+++ b/projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageRepositoryPort.ts
@@ -34,6 +34,12 @@ export interface DoctrinePackageRepositoryPort {
   loadManifest(
     entry: LocalRegistryEntry,
   ): Promise<DoctrinePackageLoadResult>;
+
+  /** Safe read of a file under an allowlisted package directory. */
+  loadPackageFile(
+    entry: LocalRegistryEntry,
+    relativePath: string,
+  ): Promise<DoctrinePackageLoadResult>;
 }

 export interface DoctrinePackageMetadata {
diff --git a/projects/sfia-studio/app/lib/oa/project/index.ts b/projects/sfia-studio/app/lib/oa/project/index.ts
index 161af925..9bc24cd7 100644
--- a/projects/sfia-studio/app/lib/oa/project/index.ts
+++ b/projects/sfia-studio/app/lib/oa/project/index.ts
@@ -37,6 +37,8 @@ export {
   PRODUCT_SCHEMA_VERSION_M1,
   PRODUCT_SCHEMA_VERSION_M2,
   PRODUCT_SCHEMA_VERSION_M3,
+  PRODUCT_SCHEMA_VERSION_M5,
+  PRODUCT_SCHEMA_VERSION_M6,
 } from "./infrastructure/sqlite/db";
 export type { ProductSqliteHandle } from "./infrastructure/sqlite/productSqliteHandle";
 export { SqliteProductStore } from "./infrastructure/sqlite/sqliteProductStore";
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
index b11b5ffd..64d02470 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
@@ -3,7 +3,9 @@ import { DatabaseSync } from "node:sqlite";
 export const PRODUCT_SCHEMA_VERSION_M1 = "m1-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M2 = "m2-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M3 = "m3-0.1.0" as const;
-export const PRODUCT_SCHEMA_VERSION = "m5-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION_M5 = "m5-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION_M6 = "m6-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION = PRODUCT_SCHEMA_VERSION_M6;

 const BASE_SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -195,6 +197,60 @@ CREATE TABLE IF NOT EXISTS oa_review_bundle_idempotency (
 );
 `;

+const M6_TRAJECTORY_CONFIRMATION_EPISTEMIC_SCHEMA_SQL = `
+CREATE TABLE IF NOT EXISTS oa_project_trajectories (
+  trajectory_id TEXT NOT NULL,
+  project_id TEXT NOT NULL,
+  version INTEGER NOT NULL,
+  status TEXT NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT NOT NULL,
+  PRIMARY KEY (trajectory_id, version),
+  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
+  UNIQUE (project_id, version)
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_project_trajectories_project
+  ON oa_project_trajectories(project_id, version);
+
+CREATE TABLE IF NOT EXISTS oa_project_trajectory_current (
+  project_id TEXT PRIMARY KEY NOT NULL,
+  trajectory_id TEXT NOT NULL,
+  version INTEGER NOT NULL,
+  occ_token TEXT NOT NULL,
+  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
+);
+
+CREATE TABLE IF NOT EXISTS oa_confirmations (
+  confirmation_id TEXT PRIMARY KEY NOT NULL,
+  idempotency_key TEXT NOT NULL UNIQUE,
+  project_id TEXT,
+  status TEXT NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT NOT NULL
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_confirmations_project
+  ON oa_confirmations(project_id, status);
+
+CREATE TABLE IF NOT EXISTS oa_epistemic_items (
+  epistemic_item_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT NOT NULL,
+  type TEXT NOT NULL,
+  status TEXT NOT NULL,
+  materialized INTEGER NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT NOT NULL,
+  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_epistemic_items_project
+  ON oa_epistemic_items(project_id, type, status, materialized);
+`;
+
 function readSchemaVersion(db: DatabaseSync): string | null {
   const row = db
     .prepare("SELECT value FROM schema_meta WHERE key = ?")
@@ -236,8 +292,12 @@ function applyM5(db: DatabaseSync): void {
   db.exec(M5_ATTEMPT_EVIDENCE_SCHEMA_SQL);
 }

+function applyM6(db: DatabaseSync): void {
+  db.exec(M6_TRAJECTORY_CONFIRMATION_EPISTEMIC_SCHEMA_SQL);
+}
+
 /**
- * Open Product SQLite with additive M1→M2→M3→M5 migration.
+ * Open Product SQLite with additive M1→M2→M3→M5→M6 migration.
  * Fail closed on unknown/future schema versions.
  */
 export function openProductSqlite(dbPath: string): DatabaseSync {
@@ -250,18 +310,25 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
     applyM2(db);
     applyM3(db);
     applyM5(db);
+    applyM6(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M2) {
     applyM3(db);
     applyM5(db);
+    applyM6(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M3) {
     applyM5(db);
+    applyM6(db);
+    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
+  } else if (version === PRODUCT_SCHEMA_VERSION_M5) {
+    applyM6(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION) {
     applyM2(db);
     applyM3(db);
     applyM5(db);
+    applyM6(db);
   } else {
     try {
       db.close();
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
index 102fafc0..2012abc3 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
@@ -17,5 +17,8 @@ export type ProductSqliteHandle = ProjectPersistenceUnitOfWorkPort & {
     | "attempt"
     | "evidence"
     | "review_bundle"
+    | "trajectory"
+    | "confirmation"
+    | "epistemic"
     | null;
 };
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
index 868a7309..22326df2 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
@@ -13,6 +13,7 @@ import {
   type ClockPort,
   type DoctrinePackagePin,
 } from "@/lib/oa/doctrine";
+import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
 import {
   MemoryProjectAuditJournal,
   createSqliteProductProjectServices,
@@ -38,13 +39,32 @@ import type {
   PerceivedCriticality,
 } from "./types";

-export const DEFAULT_LOCAL_DOCTRINE_PIN: DoctrinePackagePin = Object.freeze({
+export const DEFAULT_LOCAL_DOCTRINE_PIN: DoctrinePackagePin =
+  DEFAULT_PRODUCT_DOCTRINE_PIN;
+
+/** Historical fixture package — TEST-ONLY / QUARANTINED (G2 D05). */
+export const FIXTURE_DOCTRINE_PIN: DoctrinePackagePin = Object.freeze({
   doctrinePackageId: "pkg:studio-v3-oa",
   version: "1.0.0",
   digest:
     "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622",
 });

+export function resolveDoctrinePackagePinForRegistry(
+  registryRoot: string,
+  override?: DoctrinePackagePin,
+): DoctrinePackagePin {
+  if (override) return override;
+  const normalized = path.resolve(registryRoot);
+  const fixturesRoot = path.resolve(
+    path.join(process.cwd(), "lib/oa/doctrine/fixtures"),
+  );
+  if (normalized === fixturesRoot) {
+    return FIXTURE_DOCTRINE_PIN;
+  }
+  return DEFAULT_PRODUCT_DOCTRINE_PIN;
+}
+
 const LOCAL_ACTOR = Object.freeze({
   actorId: "actor:local-project-owner-demo",
   role: "project_owner" as const,
@@ -507,10 +527,15 @@ export function createLocalVerticalSliceServices(
       ? null
       : (options.audit ?? null);

+  const doctrinePackagePin = resolveDoctrinePackagePinForRegistry(
+    options.registryRoot,
+    options.doctrinePackagePin,
+  );
+
   return Object.freeze({
     facade: new LocalProjectFacadeImpl(
       projectServices,
-      options.doctrinePackagePin ?? DEFAULT_LOCAL_DOCTRINE_PIN,
+      doctrinePackagePin,
       idSource,
       audit,
       () => clock.nowIso(),
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/paths.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/paths.ts
index 8d3dbb56..e28da6e4 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/paths.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/paths.ts
@@ -9,10 +9,17 @@ export function resolveDefaultVerticalSliceRoots(
   appRoot: string = process.cwd(),
 ): { readonly registryRoot: string; readonly schemasRoot: string } {
   return {
-    registryRoot: path.join(appRoot, "lib/oa/doctrine/fixtures"),
+    registryRoot: path.join(appRoot, "lib/oa/doctrine/product"),
     schemasRoot: path.resolve(
       appRoot,
       "../sfia-v3-modeled/v3-native-option-a/schemas",
     ),
   };
 }
+
+/** G3 W1 product DoctrinePackage materialization root (OPTION A). */
+export function resolveProductDoctrineRegistryRoot(
+  appRoot: string = process.cwd(),
+): string {
+  return path.join(appRoot, "lib/oa/doctrine/product");
+}
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index a36c901f..cf70f5e8 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -5,6 +5,7 @@ import {
   MemoryLocalProjectCreationAudit,
   NoOpLocalProjectCreationAudit,
   createLocalVerticalSliceServices,
+  resolveDoctrinePackagePinForRegistry,
   type LocalProjectFacade,
   type LocalProjectIdSource,
   type LocalVerticalSliceCompositionOptions,
@@ -153,7 +154,11 @@ function resolveAudit(
 function wireOaStack(
   projectServices: ProjectServices,
   clock: ClockPort,
-  options?: { realBoundary?: RealBoundaryWiring },
+  options?: {
+    realBoundary?: RealBoundaryWiring;
+    registryRoot?: string;
+    doctrinePackagePin?: DoctrinePackagePin;
+  },
 ): RuntimeOaStack {
   // M2/M3: same Product SQLite store for Project/LPS + Cycle + Decision + Contract.
   const productSqlite =
@@ -167,7 +172,11 @@ function wireOaStack(
         clock,
       })
     : createInMemoryCycleServices({ projectServices, clock });
-  const ckcQualification = createCkcQualificationServices({ clock });
+  const ckcQualification = createCkcQualificationServices({
+    clock,
+    registryRoot: options?.registryRoot,
+    doctrinePackagePin: options?.doctrinePackagePin,
+  });
   const authorityResolver = new MemoryAuthorityResolver();
   // M3 authority is fail-closed unless env enabled; registration happens per-scope in F2/F3.
   void isM3LocalAuthorityEnabled;
@@ -369,10 +378,15 @@ export function createRuntimeApplicationService(
   }

   const roots = resolveDefaultVerticalSliceRoots();
+  const registryRoot = options.registryRoot ?? roots.registryRoot;
+  const doctrinePackagePin = resolveDoctrinePackagePinForRegistry(
+    registryRoot,
+    options.doctrinePackagePin,
+  );
   const services = createLocalVerticalSliceServices({
-    registryRoot: options.registryRoot ?? roots.registryRoot,
+    registryRoot,
     schemasRoot: options.schemasRoot ?? roots.schemasRoot,
-    doctrinePackagePin: options.doctrinePackagePin,
+    doctrinePackagePin,
     idSource: options.idSource,
     nowIso: options.nowIso,
     audit: resolveAudit(options.auditMode ?? "noop", options.sqliteAuditStore),
@@ -387,6 +401,8 @@ export function createRuntimeApplicationService(
     });
   const oa = wireOaStack(services.projectServices, services.clock, {
     realBoundary: composedBoundary,
+    registryRoot,
+    doctrinePackagePin,
   });
   return new RuntimeApplicationService(
     services.facade,
```

---

## 17. Debts / follow-ups

| Debt | Disposition |
|---|---|
| Fixture `pkg:studio-v3-oa@1.0.0` | **QUARANTINE / TEST-ONLY → RETIRE LATER** (G2) · still present for legacy tests |
| **TD-C6-03** | **DEFERRED** — AuthorityVerificationReceipt |
| **Phase B** / US-P1-14 | **OUT OF W1** — distinct Morris GO |
| **REAL** | **NOT ATTEMPTED** · gated separately |
| **Doc truth-sync** | Post-merge transport needed to align readiness/convergence docs with implemented runtime (W1 local candidate ≠ `main` narrative yet) |

---

## 18. Actions **NOT** executed

- **NO** git commit of W1 project files
- **NO** git push
- **NO** PR opened
- **NO** merge to `main`

---

## 19. Final verdict

```text
W1 G3 LOCAL DELIVERY CANDIDATE
```

Tracks **A–E** implemented locally with targeted test evidence · **G3 Morris GO consumed** for local work only · **`origin/main` remains @ b3e978f** (PR #394 docs only) · transport + doc truth-sync + TD-C6-03 + Phase B + REAL remain **downstream**.

---

*End of review pack — UTF-8 — ZERO REAL — runtime v3 NON ADOPTED.*
