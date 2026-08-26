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
  it("loads index with current baseline of fifteen cycleType mappings", () => {
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
