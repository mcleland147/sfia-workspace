import { createHash } from "node:crypto";
import path from "node:path";
import { canonicalizeJson, isDigestFormat } from "../domain/digest";
import type { Digest, LocalRegistryEntry } from "../domain/types";
import { FilesystemDoctrinePackageRepository } from "../infrastructure/filesystemDoctrinePackageRepository";
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

function loadProductCkcIndexViaRepository(
  repository: FilesystemDoctrinePackageRepository,
  entry: LocalRegistryEntry,
  manifestDigest: Digest,
): ProductCkcIndexLoadResult {
  const manifestLoad = repository.loadManifestSync(entry);
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

  const indexLoad = repository.loadPackageFileSync(entry, PRODUCT_CKC_INDEX_FILE);
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
    const artifactLoad = repository.loadPackageFileSync(entry, item.artifactFile);
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

export async function loadProductCkcIndex(
  repository: FilesystemDoctrinePackageRepository,
  entry: LocalRegistryEntry,
  manifestDigest: Digest,
): Promise<ProductCkcIndexLoadResult> {
  return loadProductCkcIndexViaRepository(repository, entry, manifestDigest);
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
  return loadProductCkcArtifactContentSync(repository, entry, artifactFile);
}

export function loadProductCkcArtifactContentSync(
  repository: FilesystemDoctrinePackageRepository,
  entry: LocalRegistryEntry,
  artifactFile: string,
):
  | { readonly ok: true; readonly content: string }
  | { readonly ok: false; readonly message: string } {
  const loaded = repository.loadPackageFileSync(entry, artifactFile);
  if (!loaded.ok) {
    return { ok: false, message: loaded.message };
  }
  return { ok: true, content: loaded.rawText };
}

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
