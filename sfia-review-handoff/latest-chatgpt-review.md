# SFIA Studio — Product Completion — W1 G3 Local Delivery — FULL Review Pack

## 1. Timestamp (Europe/Paris)

**Timestamp:** 2026-08-22 17:05 CEST (+0200) *(target ~2026-08-22 17:05 Europe/Paris)*

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

## 15. Inline created artifacts (FULL where required)

### `registry.json` (FULL)

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

### `manifest.json` (FULL)

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

### `ckc-index.json` (first 50 lines + note)

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
```

*(… truncated; file continues — **15 entries** total in `entries[]`, matching active product cycle-type catalog coverage.)*

### `constants.ts` (FULL)

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

### `productCkcQualificationResolver.ts`

**File:** `projects/sfia-studio/app/lib/oa/cycle/infrastructure/productCkcQualificationResolver.ts` (353 lines)

**Role:** Package-bound Phase A resolver (D02 Option B). Loads `ckc-index.json` from resolved product DoctrinePackage directory via doctrine registry root; fail-closed `fallbackPolicy: none`; emits `doctrineStatus: product-studio-native`; builds `CkcConsumptionProof` with package/index/artifact digests; no method-path SoT; no schema mutation on manifest contract.

**Key exports:** `createProductCkcQualificationResolver(options)` implementing `CkcQualificationResolverPort`.

**Evidence tests:** `__tests__/oa/cycle/productCkcQualification.test.ts`, `__tests__/oa/doctrine/productDoctrinePackage.test.ts`, `__tests__/oa/cycle/qualifyCycleWithCkc.test.ts`, `__tests__/oa/cycle/ckcConsumptionProof.test.ts`.

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
