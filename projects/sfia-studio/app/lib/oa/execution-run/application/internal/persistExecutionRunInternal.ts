/**
 * Internal-only persistence path for D2-D1 ExecutionRun.
 * Not part of the public barrel or server composition surface.
 * Invariants then schema validation before repository save.
 * Does not decide transitions — create/transition remain state authority.
 */
import { checkExecutionRunInvariants } from "../../domain/invariants";
import { normalizedFailure } from "../../domain/errors";
import type { ExecutionRun, NormalizedFailure } from "../../domain/types";
import type { ExecutionRunRepositoryPort } from "../../ports/executionRunRepository";
import type { ExecutionRunSchemaValidationPort } from "../../ports/executionRunSchemaValidation";

export type PersistExecutionRunInternalResult =
  | { ok: true }
  | { ok: false; failure: NormalizedFailure };

export async function persistExecutionRunInternal(
  run: ExecutionRun,
  deps: {
    repository: ExecutionRunRepositoryPort;
    schemas: ExecutionRunSchemaValidationPort;
  },
): Promise<PersistExecutionRunInternalResult> {
  const issues = checkExecutionRunInvariants(run);
  if (issues.length > 0) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: `Run invariants failed: ${issues.map((i) => i.code).join(",")}`,
        retryable: false,
        correlationId: run.correlationId,
      }),
    };
  }

  const schema = await deps.schemas.validate("execution-run", run);
  if (!schema.ok) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Execution run failed schema validation before persistence",
        retryable: false,
        correlationId: run.correlationId,
      }),
    };
  }

  await deps.repository.save(run);
  return { ok: true };
}
