import { createDoctrineError } from "../domain/errors";
import type {
  ActorReference,
  DoctrineResolveRequest,
  DoctrineResolveResult,
} from "../domain/types";
import type { AuditJournalPort } from "../ports/auditJournalPort";
import type { ClockPort } from "../ports/clockPort";
import type { DigestVerificationPort } from "../ports/digestVerificationPort";
import type { DoctrinePackageRepositoryPort } from "../ports/doctrinePackageRepositoryPort";
import type { DoctrinePackageResolverPort } from "../ports/doctrinePackageResolverPort";
import type { SchemaValidationPort } from "../ports/schemaValidationPort";
import {
  ValidateDoctrinePackage,
  resolutionProvenance,
} from "./validateDoctrinePackage";

const DEFAULT_RESOLVER_ACTOR: ActorReference = {
  actorId: "sys:doctrine-resolver",
  role: "system",
};

function digestSuffix(digest: string | undefined): string | undefined {
  if (!digest || digest.length < 12) return undefined;
  return digest.slice(-12);
}

/**
 * Application use-case: resolve a DoctrinePackage pin via ports only.
 * No filesystem access. Fail-closed. No v2.6 / method / OPS1 fallback.
 */
export class ResolveDoctrinePackage implements DoctrinePackageResolverPort {
  private readonly validate: ValidateDoctrinePackage;

  constructor(
    private readonly repository: DoctrinePackageRepositoryPort,
    schemaValidation: SchemaValidationPort,
    digestVerification: DigestVerificationPort,
    private readonly clock: ClockPort,
    private readonly audit: AuditJournalPort,
  ) {
    this.validate = new ValidateDoctrinePackage(
      schemaValidation,
      digestVerification,
    );
  }

  async resolve(request: DoctrineResolveRequest): Promise<DoctrineResolveResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId =
      request.correlationId ?? `cor:doctrine-${started.toString(36)}`;
    const { pin } = request;
    const adapter = "local-registry";

    const fail = (
      outcome: Exclude<DoctrineResolveResult, { outcome: "resolved" }>["outcome"],
      detailCode: Parameters<typeof createDoctrineError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: { expectedDigest?: string; observedDigest?: string },
    ): DoctrineResolveResult => {
      const durationMs = Date.now() - started;
      const error = createDoctrineError({
        detailCode,
        timestamp,
        correlationId,
        doctrinePackageId: pin.doctrinePackageId,
        version: pin.version,
        expectedDigest: extra?.expectedDigest ?? pin.digest,
        observedDigest: extra?.observedDigest,
        internalCauseRef,
      });
      this.audit.append({
        event: "oa.doctrine.resolution",
        ts: timestamp,
        correlationId,
        doctrinePackageId: pin.doctrinePackageId,
        packageVersion: pin.version,
        expectedDigestSuffix: digestSuffix(pin.digest),
        observedDigestSuffix: digestSuffix(extra?.observedDigest),
        result: outcome,
        detailCode,
        durationMs,
        adapter,
      });
      return { outcome, error, durationMs };
    };

    try {
      const entry = await this.repository.findEntry(
        pin.doctrinePackageId,
        pin.version,
      );
      if (!entry) {
        return fail("not_found", "DOCTRINE_UNRESOLVED", "registry_entry_missing");
      }

      if (entry.digest !== pin.digest) {
        return fail(
          "digest_mismatch",
          "DOCTRINE_DIGEST_MISMATCH",
          "registry_digest_mismatch_pin",
          { expectedDigest: pin.digest, observedDigest: entry.digest },
        );
      }

      const loaded = await this.repository.loadManifest(entry);
      if (!loaded.ok) {
        if (loaded.kind === "not_found") {
          return fail("not_found", "DOCTRINE_UNRESOLVED", loaded.kind);
        }
        if (loaded.kind === "path_forbidden") {
          return fail(
            "source_not_allowed",
            "DOCTRINE_SOURCE_FORBIDDEN",
            loaded.kind,
          );
        }
        if (loaded.kind === "invalid_json") {
          return fail(
            "invalid_manifest",
            "DOCTRINE_MANIFEST_INVALID",
            loaded.kind,
          );
        }
        return fail(
          "internal_resolution_error",
          "INTERNAL_RESOLUTION_ERROR",
          loaded.kind,
          undefined,
        );
      }

      const validated = await this.validate.execute({
        pin,
        rawJson: loaded.rawJson,
        correlationId,
        timestamp,
      });

      if (!validated.ok) {
        const durationMs = Date.now() - started;
        this.audit.append({
          event: "oa.doctrine.resolution",
          ts: timestamp,
          correlationId,
          doctrinePackageId: pin.doctrinePackageId,
          packageVersion: pin.version,
          expectedDigestSuffix: digestSuffix(pin.digest),
          observedDigestSuffix: digestSuffix(
            validated.error.observedDigest,
          ),
          result: validated.outcome,
          detailCode: validated.error.detailCode,
          durationMs,
          adapter,
        });
        return {
          outcome: validated.outcome,
          error: validated.error,
          durationMs,
        };
      }

      const resolverActor = request.resolverActor ?? DEFAULT_RESOLVER_ACTOR;
      const provenance = resolutionProvenance({
        timestamp,
        correlationId,
        doctrinePackageId: pin.doctrinePackageId,
        version: pin.version,
        digest: pin.digest,
      });
      const durationMs = Date.now() - started;
      const result: DoctrineResolveResult = {
        outcome: "resolved",
        manifest: validated.manifest,
        ref: {
          doctrinePackageId: pin.doctrinePackageId,
          version: pin.version,
          digest: pin.digest,
          resolvedAt: timestamp,
          resolver: resolverActor,
          status: "resolved",
        },
        provenance,
        durationMs,
      };
      this.audit.append({
        event: "oa.doctrine.resolution",
        ts: timestamp,
        correlationId,
        doctrinePackageId: pin.doctrinePackageId,
        packageVersion: pin.version,
        expectedDigestSuffix: digestSuffix(pin.digest),
        observedDigestSuffix: digestSuffix(validated.computedDigest),
        result: "resolved",
        durationMs,
        adapter,
      });
      return result;
    } catch {
      return fail(
        "internal_resolution_error",
        "INTERNAL_RESOLUTION_ERROR",
        "unexpected_exception",
      );
    }
  }
}
