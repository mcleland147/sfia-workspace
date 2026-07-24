/**
 * Modeled DoctrinePackageManifest schema executed via T-A0 AJV adapter.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  AjvSchemaValidationAdapter,
  computeManifestDigest,
} from "@/lib/oa/doctrine";

const APP_ROOT = path.resolve(__dirname, "../../..");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const MODELED_EXAMPLE = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/examples/doctrine-package-manifest.valid.json",
);
const FIXTURE = path.join(
  APP_ROOT,
  "lib/oa/doctrine/fixtures/packages/pkg-studio-v3-oa-1.0.0/manifest.json",
);

describe("T-A0 AJV schema validation", () => {
  it("accepts T-A0 fixture manifest", async () => {
    const adapter = new AjvSchemaValidationAdapter({ schemasRoot: SCHEMAS });
    const raw = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
    const result = await adapter.validateDoctrinePackageManifest(raw);
    expect(result).toEqual({ ok: true });
  });

  it("accepts modeled example after digest/provenance alignment", async () => {
    const adapter = new AjvSchemaValidationAdapter({ schemasRoot: SCHEMAS });
    const raw = JSON.parse(fs.readFileSync(MODELED_EXAMPLE, "utf8"));
    // Modeled example uses placeholder digest and omits provenance —
    // schema allows optional provenance; placeholder digest still matches pattern.
    const result = await adapter.validateDoctrinePackageManifest(raw);
    expect(result.ok).toBe(true);
  });

  it("rejects manifest missing required compatibility", async () => {
    const adapter = new AjvSchemaValidationAdapter({ schemasRoot: SCHEMAS });
    const raw = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
    delete raw.compatibility;
    raw.digest = computeManifestDigest(raw);
    const result = await adapter.validateDoctrinePackageManifest(raw);
    expect(result.ok).toBe(false);
  });
});
