/**
 * Local filesystem DoctrinePackage repository — allowlisted registry only.
 * Read-only. Path ≠ business id. Deny-by-default + traversal protection.
 */
import fs from "node:fs";
import path from "node:path";
import { assertSafeRelativePackageDir } from "../domain/invariants";
import type {
  Digest,
  LocalDoctrineRegistry,
  LocalRegistryEntry,
} from "../domain/types";
import type {
  DoctrinePackageLoadResult,
  DoctrinePackageRepositoryPort,
} from "../ports/doctrinePackageRepositoryPort";

const MAX_MANIFEST_BYTES = 256_000;
const REGISTRY_FILE = "registry.json";
const MANIFEST_FILE = "manifest.json";

export type FilesystemDoctrinePackageRepositoryOptions = {
  /** Absolute path to registry root containing registry.json + packages/. */
  registryRoot: string;
};

function isDigest(value: unknown): value is Digest {
  return typeof value === "string" && /^sha256:[a-f0-9]{64}$/.test(value);
}

export class FilesystemDoctrinePackageRepository
  implements DoctrinePackageRepositoryPort
{
  private registry: LocalDoctrineRegistry | null = null;

  constructor(
    private readonly options: FilesystemDoctrinePackageRepositoryOptions,
  ) {}

  private root(): string {
    return path.resolve(this.options.registryRoot);
  }

  private loadRegistry(): LocalDoctrineRegistry {
    if (this.registry) return this.registry;
    const registryPath = path.join(this.root(), REGISTRY_FILE);
    const raw = fs.readFileSync(registryPath, "utf8");
    const parsed = JSON.parse(raw) as LocalDoctrineRegistry;
    if (parsed.schemaVersion !== "0.1.0-oa-registry") {
      throw new Error("unsupported_registry_schema");
    }
    if (!Array.isArray(parsed.entries)) {
      throw new Error("invalid_registry_entries");
    }
    this.registry = parsed;
    return parsed;
  }

  async findEntry(
    doctrinePackageId: string,
    version: string,
  ): Promise<LocalRegistryEntry | null> {
    const registry = this.loadRegistry();
    const entry = registry.entries.find(
      (e) =>
        e.doctrinePackageId === doctrinePackageId && e.version === version,
    );
    if (!entry) return null;
    if (!isDigest(entry.digest)) return null;
    const pathViolation = assertSafeRelativePackageDir(entry.relativePackageDir);
    if (pathViolation) return null;
    return entry;
  }

  async loadManifest(
    entry: LocalRegistryEntry,
  ): Promise<DoctrinePackageLoadResult> {
    const pathViolation = assertSafeRelativePackageDir(entry.relativePackageDir);
    if (pathViolation) {
      return {
        ok: false,
        kind: "path_forbidden",
        message: "relative package path forbidden",
      };
    }

    const root = this.root();
    const packageDir = path.resolve(root, entry.relativePackageDir);
    if (packageDir !== root && !packageDir.startsWith(root + path.sep)) {
      return {
        ok: false,
        kind: "path_forbidden",
        message: "resolved path escapes registry root",
      };
    }

    const manifestPath = path.join(packageDir, MANIFEST_FILE);
    if (
      path.resolve(manifestPath) !== manifestPath ||
      !manifestPath.startsWith(packageDir + path.sep)
    ) {
      return {
        ok: false,
        kind: "path_forbidden",
        message: "manifest path invalid",
      };
    }

    try {
      if (!fs.existsSync(manifestPath) || !fs.statSync(manifestPath).isFile()) {
        return {
          ok: false,
          kind: "not_found",
          message: "manifest not found",
        };
      }
      const buf = fs.readFileSync(manifestPath);
      if (buf.length > MAX_MANIFEST_BYTES) {
        return {
          ok: false,
          kind: "too_large",
          message: "manifest exceeds size limit",
        };
      }
      if (buf.includes(0)) {
        return {
          ok: false,
          kind: "io_error",
          message: "binary manifest refused",
        };
      }
      const rawText = buf.toString("utf8");
      let rawJson: unknown;
      try {
        rawJson = JSON.parse(rawText);
      } catch {
        return {
          ok: false,
          kind: "invalid_json",
          message: "manifest json parse failed",
        };
      }
      return {
        ok: true,
        rawText,
        rawJson,
        absoluteManifestPath: manifestPath,
      };
    } catch {
      return {
        ok: false,
        kind: "io_error",
        message: "manifest read failed",
      };
    }
  }
}
