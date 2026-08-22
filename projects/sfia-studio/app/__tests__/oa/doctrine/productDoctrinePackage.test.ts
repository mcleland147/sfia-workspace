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
