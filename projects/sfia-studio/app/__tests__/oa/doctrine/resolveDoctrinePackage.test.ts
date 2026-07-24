/**
 * T-A0 Doctrine Foundation — resolution, fail-closed, anti-legacy.
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
  computeManifestDigest,
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackageManifest,
} from "@/lib/oa/doctrine";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

function buildResolver(registryRoot = FIXTURES) {
  const audit = new MemoryDoctrineAuditJournal();
  const resolver = new ResolveDoctrinePackage(
    new FilesystemDoctrinePackageRepository({ registryRoot }),
    new AjvSchemaValidationAdapter({ schemasRoot: SCHEMAS }),
    new Sha256DigestVerificationAdapter(),
    new FixedClock("2026-07-24T03:00:00.000Z"),
    audit,
  );
  return { resolver, audit };
}

function writeTempRegistry(mutate: (dir: string) => void): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "oa-doctrine-"));
  fs.cpSync(FIXTURES, dir, { recursive: true });
  mutate(dir);
  return dir;
}

describe("T-A0 doctrine digest", () => {
  it("computes deterministic digest independent of key order", () => {
    const a = {
      schemaVersion: "0.1.0-oa" as const,
      doctrinePackageId: "pkg:studio-v3-oa",
      version: "1.0.0",
      status: "published" as const,
      sources: [
        {
          doctrineSourceRef: "src:framing-30-37",
          kind: "framing" as const,
          label: "Doctrine v3",
        },
      ],
      allowlist: ["sfia-v3-framing", "v3-native-option-a"],
      publishedAt: "2026-07-23T21:00:00.000Z",
      freshness: "current" as const,
      compatibility: {
        studioNativeV3: true as const,
        legacyV26Fallback: false as const,
      },
      provenance: {
        schemaVersion: "0.1.0-oa" as const,
        provenanceRecordId: "prv:pkg-studio-v3-oa-1",
        actor: { actorId: "sys:doctrine-publisher", role: "system" as const },
        source: "system" as const,
        timestamp: "2026-07-23T21:00:00.000Z",
        correlationId: "cor:t-a0-fixture",
      },
    };
    const b = JSON.parse(JSON.stringify(a));
    expect(computeManifestDigest(a)).toBe(VALID_DIGEST);
    expect(computeManifestDigest(b)).toBe(VALID_DIGEST);
  });
});

describe("T-A0 doctrine resolution success", () => {
  it("resolves valid pin with provenance and audit", async () => {
    const { resolver, audit } = buildResolver();
    const result = await resolver.resolve({
      pin: VALID_PIN,
      correlationId: "cor:t-a0-success",
    });
    expect(result.outcome).toBe("resolved");
    if (result.outcome !== "resolved") return;
    expect(result.manifest.doctrinePackageId).toBe("pkg:studio-v3-oa");
    expect(result.ref.status).toBe("resolved");
    expect(result.ref.digest).toBe(VALID_DIGEST);
    expect(result.provenance.correlationId).toBe("cor:t-a0-success");
    expect(result.provenance.source).toBe("system");
    expect(audit.events).toHaveLength(1);
    expect(audit.events[0]?.result).toBe("resolved");
  });

  it("is deterministic across repeated resolves", async () => {
    const { resolver } = createTestDoctrineResolver({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const a = await resolver.resolve({ pin: VALID_PIN, correlationId: "cor:a" });
    const b = await resolver.resolve({ pin: VALID_PIN, correlationId: "cor:b" });
    expect(a.outcome).toBe("resolved");
    expect(b.outcome).toBe("resolved");
    if (a.outcome === "resolved" && b.outcome === "resolved") {
      expect(a.manifest.digest).toBe(b.manifest.digest);
      expect(a.ref.digest).toBe(b.ref.digest);
    }
  });
});

describe("T-A0 doctrine fail-closed", () => {
  it("rejects missing package", async () => {
    const { resolver } = buildResolver();
    const result = await resolver.resolve({
      pin: {
        doctrinePackageId: "pkg:missing",
        version: "1.0.0",
        digest: VALID_DIGEST,
      },
    });
    expect(result.outcome).toBe("not_found");
    if (result.outcome === "resolved") return;
    expect(result.error.detailCode).toBe("DOCTRINE_UNRESOLVED");
    expect(result.error.code).toBe("DOCTRINE_UNRESOLVED");
  });

  it("rejects invalid JSON", async () => {
    const dir = writeTempRegistry((root) => {
      fs.writeFileSync(
        path.join(root, "packages/pkg-studio-v3-oa-1.0.0/manifest.json"),
        "{not-json",
        "utf8",
      );
    });
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({ pin: VALID_PIN });
    expect(result.outcome).toBe("invalid_manifest");
  });

  it("rejects schema-invalid manifest", async () => {
    const dir = writeTempRegistry((root) => {
      const manifestPath = path.join(
        root,
        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
      );
      const m = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      delete m.compatibility;
      m.digest = computeManifestDigest(m);
      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
      const registry = JSON.parse(
        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
      );
      registry.entries[0].digest = m.digest;
      fs.writeFileSync(
        path.join(root, "registry.json"),
        JSON.stringify(registry),
        "utf8",
      );
    });
    const registry = JSON.parse(
      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
    );
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({
      pin: {
        ...VALID_PIN,
        digest: registry.entries[0].digest,
      },
    });
    expect(result.outcome).toBe("schema_mismatch");
    if (result.outcome === "resolved") return;
    expect(result.error.detailCode).toBe("DOCTRINE_SCHEMA_MISMATCH");
  });

  it("rejects packageId mismatch", async () => {
    const dir = writeTempRegistry((root) => {
      const manifestPath = path.join(
        root,
        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
      );
      const m = JSON.parse(
        fs.readFileSync(manifestPath, "utf8"),
      ) as DoctrinePackageManifest;
      m.doctrinePackageId = "pkg:other";
      m.digest = computeManifestDigest(m);
      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
      const registry = JSON.parse(
        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
      );
      registry.entries[0].digest = m.digest;
      fs.writeFileSync(
        path.join(root, "registry.json"),
        JSON.stringify(registry),
        "utf8",
      );
    });
    const registry = JSON.parse(
      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
    );
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({
      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
    });
    expect(result.outcome).toBe("invalid_manifest");
  });

  it("rejects version mismatch", async () => {
    const dir = writeTempRegistry((root) => {
      const manifestPath = path.join(
        root,
        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
      );
      const m = JSON.parse(
        fs.readFileSync(manifestPath, "utf8"),
      ) as DoctrinePackageManifest;
      m.version = "9.9.9";
      m.digest = computeManifestDigest(m);
      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
      const registry = JSON.parse(
        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
      );
      registry.entries[0].digest = m.digest;
      fs.writeFileSync(
        path.join(root, "registry.json"),
        JSON.stringify(registry),
        "utf8",
      );
    });
    const registry = JSON.parse(
      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
    );
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({
      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
    });
    expect(result.outcome).toBe("invalid_manifest");
  });

  it("rejects digest mismatch against registry pin", async () => {
    const { resolver } = buildResolver();
    const wrong =
      "sha256:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" as Digest;
    const result = await resolver.resolve({
      pin: { ...VALID_PIN, digest: wrong },
    });
    expect(result.outcome).toBe("digest_mismatch");
    if (result.outcome === "resolved") return;
    expect(result.error.detailCode).toBe("DOCTRINE_DIGEST_MISMATCH");
  });

  it("rejects digest mismatch when registry pin matches but content differs", async () => {
    const dir = writeTempRegistry((root) => {
      const manifestPath = path.join(
        root,
        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
      );
      const m = JSON.parse(
        fs.readFileSync(manifestPath, "utf8"),
      ) as DoctrinePackageManifest;
      m.sources[0]!.label = "tampered";
      // keep old digest on purpose
      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
    });
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({ pin: VALID_PIN });
    expect(result.outcome).toBe("digest_mismatch");
    if (result.outcome === "resolved") return;
    expect(result.error.detailCode).toBe("DOCTRINE_DIGEST_MISMATCH");
  });

  it("rejects forbidden method/** source", async () => {
    const dir = writeTempRegistry((root) => {
      const manifestPath = path.join(
        root,
        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
      );
      const m = JSON.parse(
        fs.readFileSync(manifestPath, "utf8"),
      ) as DoctrinePackageManifest;
      m.sources = [
        {
          doctrineSourceRef: "src:method-core",
          kind: "other",
          label: "method/sfia-fast-track/core/rules.md",
        },
      ];
      m.digest = computeManifestDigest(m);
      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
      const registry = JSON.parse(
        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
      );
      registry.entries[0].digest = m.digest;
      fs.writeFileSync(
        path.join(root, "registry.json"),
        JSON.stringify(registry),
        "utf8",
      );
    });
    const registry = JSON.parse(
      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
    );
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({
      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
    });
    expect(result.outcome).toBe("source_not_allowed");
  });

  it("rejects v2.6 allowlist entry", async () => {
    const dir = writeTempRegistry((root) => {
      const manifestPath = path.join(
        root,
        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
      );
      const m = JSON.parse(
        fs.readFileSync(manifestPath, "utf8"),
      ) as DoctrinePackageManifest;
      m.allowlist = ["sfia-v2.6-legacy"];
      m.digest = computeManifestDigest(m);
      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
      const registry = JSON.parse(
        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
      );
      registry.entries[0].digest = m.digest;
      fs.writeFileSync(
        path.join(root, "registry.json"),
        JSON.stringify(registry),
        "utf8",
      );
    });
    const registry = JSON.parse(
      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
    );
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({
      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
    });
    expect(result.outcome).toBe("source_not_allowed");
  });

  it("rejects permissive failurePolicy", async () => {
    const dir = writeTempRegistry((root) => {
      const manifestPath = path.join(
        root,
        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
      );
      const m = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      m.failurePolicy = "permissive";
      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
    });
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({ pin: VALID_PIN });
    expect(result.outcome).toBe("source_not_allowed");
  });

  it("rejects unsupported schemaVersion", async () => {
    const dir = writeTempRegistry((root) => {
      const manifestPath = path.join(
        root,
        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
      );
      const m = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      m.schemaVersion = "9.9.9";
      m.digest = computeManifestDigest(m);
      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
      const registry = JSON.parse(
        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
      );
      registry.entries[0].digest = m.digest;
      fs.writeFileSync(
        path.join(root, "registry.json"),
        JSON.stringify(registry),
        "utf8",
      );
    });
    const registry = JSON.parse(
      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
    );
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({
      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
    });
    // schema const fails first
    expect(["schema_mismatch", "unsupported_version"]).toContain(
      result.outcome,
    );
  });

  it("rejects path traversal in registry entry", async () => {
    const dir = writeTempRegistry((root) => {
      const registry = JSON.parse(
        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
      );
      registry.entries[0].relativePackageDir = "../packages/pkg-studio-v3-oa-1.0.0";
      fs.writeFileSync(
        path.join(root, "registry.json"),
        JSON.stringify(registry),
        "utf8",
      );
    });
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({ pin: VALID_PIN });
    expect(result.outcome).toBe("not_found");
  });

  it("rejects method/** package path", async () => {
    const dir = writeTempRegistry((root) => {
      const registry = JSON.parse(
        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
      );
      registry.entries[0].relativePackageDir = "method/sfia-core";
      fs.writeFileSync(
        path.join(root, "registry.json"),
        JSON.stringify(registry),
        "utf8",
      );
    });
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({ pin: VALID_PIN });
    expect(result.outcome).toBe("not_found");
  });

  it("rejects stale freshness", async () => {
    const dir = writeTempRegistry((root) => {
      const manifestPath = path.join(
        root,
        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
      );
      const m = JSON.parse(
        fs.readFileSync(manifestPath, "utf8"),
      ) as DoctrinePackageManifest;
      m.freshness = "stale";
      m.digest = computeManifestDigest(m);
      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
      const registry = JSON.parse(
        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
      );
      registry.entries[0].digest = m.digest;
      fs.writeFileSync(
        path.join(root, "registry.json"),
        JSON.stringify(registry),
        "utf8",
      );
    });
    const registry = JSON.parse(
      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
    );
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({
      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
    });
    expect(result.outcome).toBe("stale_package");
    if (result.outcome === "resolved") return;
    expect(result.error.code).toBe("CONTEXT_STALE");
  });

  it("rejects revoked status", async () => {
    const dir = writeTempRegistry((root) => {
      const manifestPath = path.join(
        root,
        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
      );
      const m = JSON.parse(
        fs.readFileSync(manifestPath, "utf8"),
      ) as DoctrinePackageManifest;
      m.status = "revoked";
      m.digest = computeManifestDigest(m);
      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
      const registry = JSON.parse(
        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
      );
      registry.entries[0].digest = m.digest;
      fs.writeFileSync(
        path.join(root, "registry.json"),
        JSON.stringify(registry),
        "utf8",
      );
    });
    const registry = JSON.parse(
      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
    );
    const { resolver } = buildResolver(dir);
    const result = await resolver.resolve({
      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
    });
    expect(result.outcome).toBe("unsupported_version");
  });
});
