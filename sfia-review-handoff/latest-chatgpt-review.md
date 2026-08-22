# SFIA Studio — Product Completion — W1 G3 — COR-W1-07 CKC Phase A Fail-Closed — FULL Review Pack

**Timestamp (Europe/Paris):** 2026-08-22 19:05:16 CEST
**Cycle / profile / typology:** 8 — Delivery/implémentation · CRITICAL · EVOL
**Morris GO consumed:** W1 G3 FINAL CKC PHASE A CORRECTION — Product pin must never fall back to method resolution when Product binding/registry is missing or invalid

---

## 1. Local Git Truth

| Item | Value |
|---|---|
| Repo | `mcleland147/sfia-workspace` @ `/Users/morris/Projects/sfia-workspace` |
| Branch | `delivery/sfia-studio-product-completion-w1-g3` |
| HEAD | `b3e978fe0f8e34fae517923454d00afc9deb3af9` |
| origin/main | `b3e978fe0f8e34fae517923454d00afc9deb3af9` |
| Working tree | Cumulative uncommitted W1 candidate preserved + COR-W1-07 applied |
| Staged project files | NONE |
| W1 project transport | **NONE** (no project commit/push/PR/merge) |
| Prior handoff | `2641cf17` (corrective pass six corrections) |

---

## 2. Sources read (read-only)

Build Doctrine; Convergence Roadmap (not rewritten); Product Completion 01–03/05–07; DoctrinePackage runtime CKC qualification; framing 31; CKC 08; SFIA process guides; current cumulative W1 diff; latest handoff `2641cf17`.

---

## 3. Pre-correction behavior of `createCkcQualificationServices`

Exact logic before COR-W1-07:

```ts
const resolver =
  options.resolver ??
  (usesProductDoctrinePin(options.doctrinePackagePin) && options.registryRoot
    ? new CkcQualificationResolver(... product binding ...)
    : new CkcQualificationResolver(... legacy method ...));
```

**Defect confirmed: YES**

When Product pin was present but `registryRoot` was absent/undefined, the factory selected the **legacy method** `CkcQualificationResolver` without product binding → possible silent `method-candidate` resolution under Product identity.

---

## 4. COR-W1-07 implementation

### Approach (minimal)

1. **Factory (`cycle/index.ts`):** Product pin (`pkg:sfia-studio-doctrine-v3`) ALWAYS selects product-bound `CkcQualificationResolver`. Missing `registryRoot` no longer gates method fallback.
2. **Index loader (`productCkcIndex.ts` `loadProductCkcIndexSync`):** Empty/blank registryRoot returns not_found (`product_registry_root_required`); IO/registry errors caught → io_error so construction never throws into a method path.
3. **Resolver:** Existing product path already fails closed as `product-studio-native` + `source=unavailable` + `CKC_UNAVAILABLE` / `CKC_RESOLUTION_INCOHERENT` with `fallbackPolicy=none`.

### Files modified
- `projects/sfia-studio/app/lib/oa/cycle/index.ts`
- `projects/sfia-studio/app/lib/oa/doctrine/product/productCkcIndex.ts`
- `projects/sfia-studio/app/__tests__/oa/cycle/productCkcQualification.test.ts`

### Files NOT modified (preserved)
Confirmation, Trajectory, Epistemic, Recovery UI, Nora Phase B, C6, schema, CKC corpus.

---

## 5. Product fail-closed decision table

| Case | Input | Outcome |
|---|---|---|
| A Valid | Product pin + valid Product root | `product-studio-native` / `product_package` / `fallbackPolicy=none` / `fallbackUsed=false` / `executionAuthority=false` |
| B Missing root | Product pin + no registryRoot | FAIL CLOSED via product path: ok=false, doctrineStatus=product-studio-native, source=unavailable, CKC_UNAVAILABLE — NOT method-candidate |
| C Missing package | Product pin + nonexistent root | FAIL CLOSED product path — NOT method |
| D Corrupt integrity | Product pin + tampered index digest | FAIL CLOSED CKC_RESOLUTION_INCOHERENT — NOT method |
| E Historical | Explicit `new CkcQualificationResolver()` without product binding | method-candidate allowed ONLY as deliberate non-product historical context |

---

## 6. Negative proof

**CAN PRODUCT PIN SILENTLY RESOLVE method-candidate? NO**

Proven by T2/T3/T4: Product pin without/with invalid binding never returns `method-candidate`, never uses `CKC_SYNTHETIC_MAP_PATH`, never references `method/`.

---

## 7. Architecture check

| Question | Answer |
|---|---|
| One CKC resolver mechanism? | YES (`CkcQualificationResolver` only) |
| One DoctrinePackage repository? | YES |
| Second registry? | NO |
| Method Product fallback? | NO |
| New orchestrator? | NO |
| C6 unchanged? | YES |
| W2 untouched? | YES |

---

## 8. Tests

`productCkcQualification.test.ts`: **7/7 PASS** (T1–T6 + thin alias)

Targeted suite (11 files): **68/68 PASS**

---

## 9. Full regression

**1905 passed / 1909 total** (221 files: 203 passed files, 18 failed at file level).

**4 test failures (environmental, pre-existing):**
- M1/M2/M3/M5 process restart proof — local `tsx` worker path absent

**FinOps postgres suites:** fail at import (`pg` / DATABASE absent) — pre-existing local limitation.

**0 new regressions attributable to COR-W1-07.**

---

## 10. Build / typecheck

`npm run build` — Next compile OK; fails on pre-existing FinOps `pg` types (`composeExecutionRunD2D3T7ShadowPilot.ts`). Same baseline limitation.

---

## 11. git diff --check

Clean for COR-W1-07 touched files.

---

## 12. Fake / Real

**DETERMINISTIC PROVEN** — ZERO REAL — NOT READY FOR REAL.

---

## 13. W1 exit matrix (W1 scope only)

| Exit | Verdict |
|---|---|
| 01 Honest resume | **PASS** |
| 02 Semantic continuity / epistemic W1 | **PASS** |
| 03 ProjectTrajectory | **PASS** |
| 04 Confirmation | **PASS** |
| 05 K→L→M→N authority order | **PASS** |
| 06 CKC Phase A | **PASS** |
| 07 Recovery foundation | **PASS** |
| 08 bounded CKC→Nora seam | **PASS** |

### DOWNSTREAM — OUTSIDE W1 EXIT VERDICT
- full epistemic taxonomy → W2
- full CKC Phase B → W2/W3
- TD-C6-03 AuthorityVerificationReceipt → downstream governed scope
- full Recovery E2E → W3
- Product Experience closure → W4
- REAL → separate Morris gate

---

## 14. Unauthorized-actions check

- NO project commit / push / PR / merge
- NO REAL / NO runtime v3 adoption
- NO W2/W3/W4 expansion
- Handoff-only L3 push authorized separately

---

## 15. Final verdict

**W1 G3 CKC PHASE A FAIL-CLOSED CORRECTION COMPLETE — PRODUCT PIN CAN NO LONGER SILENTLY FALL BACK TO METHOD RESOLUTION — VALID PRODUCT BINDING RESOLVES PRODUCT-STUDIO-NATIVE — MISSING/INVALID PRODUCT BINDING FAILS CLOSED — FALLBACK NONE PRESERVED — SINGLE CKC RESOLVER MECHANISM PRESERVED — NO PARALLEL ARCHITECTURE — ALL EIGHT W1 EXIT CONTRACTS PASS ON THEIR W1 SCOPE — DOWNSTREAM W2/W3/W4 CAPABILITIES KEPT OUTSIDE W1 VERDICT — TARGETED TESTS PASS — ZERO REAL — NO PROJECT GIT TRANSPORT — READY FOR CHATGPT W1 FINAL REVIEW.**

---

# APPENDIX — COR-W1-07 modified / created content

## A. `createCkcQualificationServices` excerpt (current)

```ts
function createDefaultCkcQualificationResolver(
  options: CreateCkcQualificationServicesOptions,
  audit: CycleAuditPort,
): CkcQualificationResolverPort {
  if (usesProductDoctrinePin(options.doctrinePackagePin)) {
    const pin = options.doctrinePackagePin!;
    return new CkcQualificationResolver(undefined, audit, {
      // Empty/absent root is handled fail-closed inside product index load.
      registryRoot: options.registryRoot ?? "",
      doctrinePackageId: pin.doctrinePackageId,
      packageVersion: pin.version,
      packageDigest: pin.digest,
    });
  }
  return new CkcQualificationResolver(undefined, audit);
}

/** Read-only D2-A → D2-B → D2-C composition without repositories or mutation. */
export function createCkcQualificationServices(
  options: CreateCkcQualificationServicesOptions = {},
): CkcQualificationServices {
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const failureAwareAudit = createFailureAwareAudit(audit);
  const resolver =
    options.resolver ??
    createDefaultCkcQualificationResolver(options, failureAwareAudit);
  const qualifyCycle =
    options.qualifyCycle ?? new QualifyCycle(clock, failureAwareAudit);

  return Object.freeze({
    audit,
    resolver,
    qualifyCycleWithCkc: new QualifyCycleWithCkc(
      resolver,
      qualifyCycle,
      clock,
      failureAwareAudit,
    ),
  });
}


```

## B. Unified diff — `lib/oa/cycle/index.ts` (vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index df8665c4..e566fcaa 100644
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
@@ -157,6 +171,32 @@ function createFailureAwareAudit(audit: CycleAuditPort): CycleAuditPort & {
   };
 }

+/**
+ * Default CKC resolver selection (COR-W1-07).
+ *
+ * Product doctrine pin (`pkg:sfia-studio-doctrine-v3`) ALWAYS selects the
+ * product-bound resolver path. Missing/invalid registryRoot must fail closed
+ * as Product CKC unavailable — NEVER silently fall back to method-candidate.
+ *
+ * Explicit `options.resolver` injection remains for deliberate test/DI only.
+ */
+function createDefaultCkcQualificationResolver(
+  options: CreateCkcQualificationServicesOptions,
+  audit: CycleAuditPort,
+): CkcQualificationResolverPort {
+  if (usesProductDoctrinePin(options.doctrinePackagePin)) {
+    const pin = options.doctrinePackagePin!;
+    return new CkcQualificationResolver(undefined, audit, {
+      // Empty/absent root is handled fail-closed inside product index load.
+      registryRoot: options.registryRoot ?? "",
+      doctrinePackageId: pin.doctrinePackageId,
+      packageVersion: pin.version,
+      packageDigest: pin.digest,
+    });
+  }
+  return new CkcQualificationResolver(undefined, audit);
+}
+
 /** Read-only D2-A → D2-B → D2-C composition without repositories or mutation. */
 export function createCkcQualificationServices(
   options: CreateCkcQualificationServicesOptions = {},
@@ -166,7 +206,7 @@ export function createCkcQualificationServices(
   const failureAwareAudit = createFailureAwareAudit(audit);
   const resolver =
     options.resolver ??
-    new CkcQualificationResolver(undefined, failureAwareAudit);
+    createDefaultCkcQualificationResolver(options, failureAwareAudit);
   const qualifyCycle =
     options.qualifyCycle ?? new QualifyCycle(clock, failureAwareAudit);


```

## C. `loadProductCkcIndexSync` current (untracked W1 file; COR-W1-07 guards)

```ts
/** Synchronous loader for resolver construction (bounded local registry). */
export function loadProductCkcIndexSync(options: {
  readonly registryRoot: string;
  readonly doctrinePackageId?: string;
  readonly packageVersion?: string;
  readonly packageDigest?: Digest;
}): ProductCkcIndexLoadResult {
  // COR-W1-07: product pin without a usable registry root must fail closed —
  // never throw into a path that could be replaced by method resolution.
  if (
    typeof options.registryRoot !== "string" ||
    options.registryRoot.trim().length === 0
  ) {
    return {
      ok: false,
      kind: "not_found",
      message: "product_registry_root_required",
    };
  }
  try {
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
  } catch {
    return {
      ok: false,
      kind: "io_error",
      message: "product_registry_unavailable",
    };
  }
}

```

## D. FULL `productCkcQualification.test.ts` (created/replaced by this correction)

```ts
/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  createCkcQualificationServices,
  createProductCkcQualificationResolver,
  projectSelectableCycleType,
} from "@/lib/oa/cycle";
import { CKC_SYNTHETIC_MAP_PATH } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine";

const APP_ROOT = path.resolve(__dirname, "../../..");
const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const RESOLVED_AT = "2026-08-22T12:00:00.000Z";

const tempDirs: string[] = [];

afterEach(() => {
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

function deliveryProjection(correlationId: string) {
  const projectionResult = projectSelectableCycleType({
    cycleTypeId: "cyc:delivery",
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId,
  });
  expect(projectionResult.ok).toBe(true);
  if (!projectionResult.ok) {
    throw new Error("projection_setup_failed");
  }
  return projectionResult.projection;
}

describe("Product CKC qualification — COR-W1-07 fail-closed", () => {
  it("T1 — Product pin + valid root resolves product-studio-native (no method path)", () => {
    const projection = deliveryProjection("cor:delivery-product");
    const services = createCkcQualificationServices({
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      registryRoot: PRODUCT_ROOT,
    });
    const result = services.resolver.resolve({
      projection,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.resolution.doctrineStatus).toBe("product-studio-native");
    expect(result.resolution.source).toBe("product_package");
    expect(result.resolution.usedReference).toBe("ckc:studio:delivery");
    expect(result.resolution.fallbackPolicy).toBe("none");
    expect(result.resolution.fallbackUsed).toBe(false);
    expect(result.resolution.executionAuthority).toBe(false);
    expect(result.resolution.usedReference).not.toContain("method/");
    expect(result.proof.doctrineStatus).toBe("product-studio-native");
    expect(result.proof.ckcId).toBe("ckc:studio:delivery");
    expect(result.proof.doctrinePackageId).toBe("pkg:sfia-studio-doctrine-v3");
    expect(result.proof.executionAuthority).toBe(false);
  });

  it("T2 — Product pin + NO registryRoot fails closed (never method-candidate)", () => {
    const projection = deliveryProjection("cor:delivery-missing-root");
    const services = createCkcQualificationServices({
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      // registryRoot intentionally omitted
    });
    const result = services.resolver.resolve({
      projection,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.resolution.doctrineStatus).toBe("product-studio-native");
    expect(result.resolution.source).toBe("unavailable");
    expect(result.resolution.exploitable).toBe(false);
    expect(result.resolution.fallbackPolicy).toBe("none");
    expect(result.resolution.fallbackUsed).toBe(false);
    expect(result.resolution.executionAuthority).toBe(false);
    expect(result.error.code).toMatch(/^CKC_/);
    // Must NEVER silently substitute legacy method doctrine.
    expect(result.resolution.doctrineStatus).not.toBe("method-candidate");
    expect(JSON.stringify(result)).not.toContain(CKC_SYNTHETIC_MAP_PATH);
    expect(JSON.stringify(result)).not.toContain("method/");
  });

  it("T3 — Product pin + nonexistent Product root fails closed (no method fallback)", () => {
    const missingRoot = path.join(
      os.tmpdir(),
      `sfia-missing-product-registry-${Date.now()}`,
    );
    const projection = deliveryProjection("cor:delivery-missing-pkg");
    const services = createCkcQualificationServices({
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      registryRoot: missingRoot,
    });
    const result = services.resolver.resolve({
      projection,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.resolution.doctrineStatus).toBe("product-studio-native");
    expect(result.resolution.doctrineStatus).not.toBe("method-candidate");
    expect(result.resolution.fallbackPolicy).toBe("none");
    expect(result.resolution.fallbackUsed).toBe(false);
    expect(result.resolution.executionAuthority).toBe(false);
    expect(JSON.stringify(result)).not.toContain(CKC_SYNTHETIC_MAP_PATH);
  });

  it("T4 — Product pin + corrupt index digest fails closed via product path", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-corrupt-ckc-"));
    tempDirs.push(dir);
    const relativePackageDir = "packages/pkg-sfia-studio-doctrine-v3-1.0.0";
    const packagesDir = path.join(dir, relativePackageDir);
    fs.cpSync(path.join(PRODUCT_ROOT, relativePackageDir), packagesDir, {
      recursive: true,
    });
    fs.copyFileSync(
      path.join(PRODUCT_ROOT, "registry.json"),
      path.join(dir, "registry.json"),
    );
    const indexPath = path.join(packagesDir, "ckc-index.json");
    const index = JSON.parse(fs.readFileSync(indexPath, "utf8")) as {
      digest: string;
      entries: Array<{ sourceDigest: string }>;
    };
    // Tamper index digest while leaving structure otherwise intact.
    index.digest =
      "sha256:0000000000000000000000000000000000000000000000000000000000000001";
    fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));

    const projection = deliveryProjection("cor:delivery-corrupt-index");
    const services = createCkcQualificationServices({
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      registryRoot: dir,
    });
    const result = services.resolver.resolve({
      projection,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.resolution.doctrineStatus).toBe("product-studio-native");
    expect(result.resolution.doctrineStatus).not.toBe("method-candidate");
    expect(result.resolution.fallbackPolicy).toBe("none");
    expect(result.resolution.fallbackUsed).toBe(false);
    expect(result.resolution.executionAuthority).toBe(false);
    expect(
      result.error.code === "CKC_RESOLUTION_INCOHERENT" ||
        result.error.code === "CKC_UNAVAILABLE",
    ).toBe(true);
    expect(JSON.stringify(result)).not.toContain(CKC_SYNTHETIC_MAP_PATH);
  });

  it("T5 — explicit historical resolver remains available outside product binding", () => {
    const projection = deliveryProjection("cor:delivery-method");
    // Deliberate non-product / historical instantiation — NOT Product fallback.
    const result = new CkcQualificationResolver().resolve({
      projection,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.resolution.doctrineStatus).toBe("method-candidate");
    expect(result.resolution.usedReference).toBe(CKC_SYNTHETIC_MAP_PATH);
    expect(result.resolution.executionAuthority).toBe(false);
  });

  it("T6 — product happy and failure paths never grant executionAuthority", () => {
    const projection = deliveryProjection("cor:delivery-auth");
    const happy = createCkcQualificationServices({
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      registryRoot: PRODUCT_ROOT,
    }).resolver.resolve({ projection, resolvedAt: RESOLVED_AT });
    expect(happy.ok).toBe(true);
    if (happy.ok) {
      expect(happy.resolution.executionAuthority).toBe(false);
      expect(happy.proof.executionAuthority).toBe(false);
    }

    const failed = createCkcQualificationServices({
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    }).resolver.resolve({ projection, resolvedAt: RESOLVED_AT });
    expect(failed.ok).toBe(false);
    if (!failed.ok) {
      expect(failed.resolution.executionAuthority).toBe(false);
    }
  });

  it("createProductCkcQualificationResolver remains a thin alias of the single resolver", () => {
    const projection = deliveryProjection("cor:delivery-alias");
    const resolver = createProductCkcQualificationResolver({
      registryRoot: PRODUCT_ROOT,
    });
    expect(resolver).toBeInstanceOf(CkcQualificationResolver);
    const result = resolver.resolve({
      projection,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.resolution.doctrineStatus).toBe("product-studio-native");
  });
});

```
