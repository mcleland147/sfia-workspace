/**
 * T-A0 Doctrine Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Does not replace sfia-context /
 * canonicalPaths / sourceLoader / contextResolver. No MethodMode / OPS1 cutover.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/digest";
export * from "./domain/invariants";

export * from "./ports/doctrinePackageRepositoryPort";
export * from "./ports/doctrinePackageResolverPort";
export * from "./ports/schemaValidationPort";
export * from "./ports/digestVerificationPort";
export * from "./ports/clockPort";
export * from "./ports/auditJournalPort";

export {
  ValidateDoctrinePackage,
  resolutionProvenance,
} from "./application/validateDoctrinePackage";
export { ResolveDoctrinePackage } from "./application/resolveDoctrinePackage";

export { AjvSchemaValidationAdapter } from "./infrastructure/ajvSchemaValidationAdapter";
export { Sha256DigestVerificationAdapter } from "./infrastructure/sha256DigestVerificationAdapter";
export { FilesystemDoctrinePackageRepository } from "./infrastructure/filesystemDoctrinePackageRepository";
export {
  SystemClock,
  FixedClock,
} from "./infrastructure/systemClock";
export {
  ConsoleDoctrineAuditJournal,
  MemoryDoctrineAuditJournal,
} from "./infrastructure/observability";

import path from "node:path";
import { ResolveDoctrinePackage } from "./application/resolveDoctrinePackage";
import { AjvSchemaValidationAdapter } from "./infrastructure/ajvSchemaValidationAdapter";
import { FilesystemDoctrinePackageRepository } from "./infrastructure/filesystemDoctrinePackageRepository";
import {
  ConsoleDoctrineAuditJournal,
  MemoryDoctrineAuditJournal,
} from "./infrastructure/observability";
import { Sha256DigestVerificationAdapter } from "./infrastructure/sha256DigestVerificationAdapter";
import { SystemClock } from "./infrastructure/systemClock";
import type { AuditJournalPort } from "./ports/auditJournalPort";
import type { DoctrinePackageResolverPort } from "./ports/doctrinePackageResolverPort";

export type CreateLocalDoctrineResolverOptions = {
  registryRoot: string;
  schemasRoot: string;
  audit?: AuditJournalPort;
};

/** Factory for the bounded local registry resolver (tests / internal API). */
export function createLocalDoctrineResolver(
  options: CreateLocalDoctrineResolverOptions,
): DoctrinePackageResolverPort {
  return new ResolveDoctrinePackage(
    new FilesystemDoctrinePackageRepository({
      registryRoot: path.resolve(options.registryRoot),
    }),
    new AjvSchemaValidationAdapter({
      schemasRoot: path.resolve(options.schemasRoot),
    }),
    new Sha256DigestVerificationAdapter(),
    new SystemClock(),
    options.audit ?? new ConsoleDoctrineAuditJournal(),
  );
}

export function createTestDoctrineResolver(
  options: CreateLocalDoctrineResolverOptions & {
    audit?: MemoryDoctrineAuditJournal;
  },
): {
  resolver: DoctrinePackageResolverPort;
  audit: MemoryDoctrineAuditJournal;
} {
  const audit = options.audit ?? new MemoryDoctrineAuditJournal();
  return {
    resolver: createLocalDoctrineResolver({ ...options, audit }),
    audit,
  };
}
