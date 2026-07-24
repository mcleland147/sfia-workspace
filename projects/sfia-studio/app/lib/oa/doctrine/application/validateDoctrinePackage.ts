import { createDoctrineError } from "../domain/errors";
import {
  inspectRawManifestSemantics,
  validateManifestSemantics,
} from "../domain/invariants";
import type {
  DoctrinePackageManifest,
  DoctrinePackagePin,
  ProvenanceRecord,
} from "../domain/types";
import type { DigestVerificationPort } from "../ports/digestVerificationPort";
import type { SchemaValidationPort } from "../ports/schemaValidationPort";

export type ValidateDoctrinePackageInput = {
  pin: DoctrinePackagePin;
  rawJson: unknown;
  correlationId?: string;
  timestamp: string;
};

export type ValidateDoctrinePackageOk = {
  ok: true;
  manifest: DoctrinePackageManifest;
  computedDigest: string;
};

export type ValidateDoctrinePackageErr = {
  ok: false;
  outcome:
    | "invalid_manifest"
    | "schema_mismatch"
    | "digest_mismatch"
    | "source_not_allowed"
    | "unsupported_version"
    | "stale_package";
  error: ReturnType<typeof createDoctrineError>;
};

export type ValidateDoctrinePackageResult =
  | ValidateDoctrinePackageOk
  | ValidateDoctrinePackageErr;

export class ValidateDoctrinePackage {
  constructor(
    private readonly schemaValidation: SchemaValidationPort,
    private readonly digestVerification: DigestVerificationPort,
  ) {}

  async execute(
    input: ValidateDoctrinePackageInput,
  ): Promise<ValidateDoctrinePackageResult> {
    const { pin, rawJson, correlationId, timestamp } = input;

    const rawSemantic = inspectRawManifestSemantics(rawJson);
    if (rawSemantic) {
      return {
        ok: false,
        outcome:
          rawSemantic.detailCode === "DOCTRINE_SOURCE_FORBIDDEN"
            ? "source_not_allowed"
            : rawSemantic.detailCode === "DOCTRINE_VERSION_UNSUPPORTED"
              ? "unsupported_version"
              : "invalid_manifest",
        error: createDoctrineError({
          detailCode: rawSemantic.detailCode,
          timestamp,
          correlationId,
          doctrinePackageId: pin.doctrinePackageId,
          version: pin.version,
          expectedDigest: pin.digest,
          internalCauseRef: rawSemantic.reason,
        }),
      };
    }

    const schema = await this.schemaValidation.validateDoctrinePackageManifest(
      rawJson,
    );
    if (!schema.ok) {
      return {
        ok: false,
        outcome: "schema_mismatch",
        error: createDoctrineError({
          detailCode: "DOCTRINE_SCHEMA_MISMATCH",
          timestamp,
          correlationId,
          doctrinePackageId: pin.doctrinePackageId,
          version: pin.version,
          expectedDigest: pin.digest,
          internalCauseRef: "schema_validation_failed",
        }),
      };
    }

    const manifest = rawJson as DoctrinePackageManifest;
    const computed = this.digestVerification.computeManifestDigest(manifest);

    if (!this.digestVerification.verify(pin.digest, computed)) {
      return {
        ok: false,
        outcome: "digest_mismatch",
        error: createDoctrineError({
          detailCode: "DOCTRINE_DIGEST_MISMATCH",
          timestamp,
          correlationId,
          doctrinePackageId: pin.doctrinePackageId,
          version: pin.version,
          expectedDigest: pin.digest,
          observedDigest: computed,
          internalCauseRef: "computed_digest_mismatch_pin",
        }),
      };
    }

    if (!this.digestVerification.verify(manifest.digest, computed)) {
      return {
        ok: false,
        outcome: "digest_mismatch",
        error: createDoctrineError({
          detailCode: "DOCTRINE_DIGEST_MISMATCH",
          timestamp,
          correlationId,
          doctrinePackageId: pin.doctrinePackageId,
          version: pin.version,
          expectedDigest: manifest.digest,
          observedDigest: computed,
          internalCauseRef: "computed_digest_mismatch_manifest",
        }),
      };
    }

    const semantic = validateManifestSemantics(manifest, {
      doctrinePackageId: pin.doctrinePackageId,
      version: pin.version,
      digest: pin.digest,
    });
    if (semantic) {
      const outcome =
        semantic.detailCode === "DOCTRINE_DIGEST_MISMATCH"
          ? "digest_mismatch"
          : semantic.detailCode === "DOCTRINE_SOURCE_FORBIDDEN"
            ? "source_not_allowed"
            : semantic.detailCode === "DOCTRINE_VERSION_UNSUPPORTED"
              ? "unsupported_version"
              : semantic.detailCode === "CONTEXT_STALE"
                ? "stale_package"
                : "invalid_manifest";
      return {
        ok: false,
        outcome,
        error: createDoctrineError({
          detailCode: semantic.detailCode,
          timestamp,
          correlationId,
          doctrinePackageId: pin.doctrinePackageId,
          version: pin.version,
          expectedDigest: pin.digest,
          observedDigest: computed,
          internalCauseRef: semantic.reason,
        }),
      };
    }

    return {
      ok: true,
      manifest,
      computedDigest: computed,
    };
  }
}

export function resolutionProvenance(input: {
  timestamp: string;
  correlationId: string;
  doctrinePackageId: string;
  version: string;
  digest: string;
}): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: `prv:resolve-${input.doctrinePackageId}-${input.version}`,
    actor: { actorId: "sys:doctrine-resolver", role: "system" },
    source: "system",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    doctrinePackageRef: `${input.doctrinePackageId}@${input.version}#${input.digest}`,
  };
}
