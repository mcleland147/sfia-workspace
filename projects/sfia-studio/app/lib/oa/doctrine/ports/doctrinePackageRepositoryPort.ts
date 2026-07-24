import type {
  Digest,
  DoctrinePackageManifest,
  LocalRegistryEntry,
} from "../domain/types";

export type DoctrinePackageLoadOk = {
  ok: true;
  rawText: string;
  rawJson: unknown;
  absoluteManifestPath: string;
};

export type DoctrinePackageLoadErr = {
  ok: false;
  kind: "not_found" | "io_error" | "path_forbidden" | "too_large" | "invalid_json";
  message: string;
};

export type DoctrinePackageLoadResult =
  | DoctrinePackageLoadOk
  | DoctrinePackageLoadErr;

/**
 * Bounded local registry / filesystem adapter.
 * Does not treat filesystem paths as business identifiers.
 */
export interface DoctrinePackageRepositoryPort {
  findEntry(
    doctrinePackageId: string,
    version: string,
  ): Promise<LocalRegistryEntry | null>;

  loadManifest(
    entry: LocalRegistryEntry,
  ): Promise<DoctrinePackageLoadResult>;
}

export interface DoctrinePackageMetadata {
  doctrinePackageId: string;
  version: string;
  digest: Digest;
  status: DoctrinePackageManifest["status"];
}
