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
