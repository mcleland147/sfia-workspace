import {
  coordinateExecutionRun,
  type CoordinateExecutionRunResult,
} from "../application/coordinateExecutionRun";
import {
  createExecutionProjection,
  type CreateExecutionProjectionResult,
} from "../application/executionProjection";
import {
  assessExecutionReadiness,
  type ExecutionReadinessAssessment,
} from "../application/executionReadiness";
import type { ClockPort } from "../ports/clockPort";
import type { ExecutionRun } from "../domain/types";
import { composeExecutionRunMemory } from "./composeExecutionRunMemory";
import {
  composeExecutionRunProvidersFake,
  type ExecutionRunProviderComposition,
} from "./composeExecutionRunProviders";
import { assertServerOnly } from "./serverOnly";

export type ExecutionRunD2D3Composition = {
  readonly coordinate: (
    input: unknown,
  ) => Promise<CoordinateExecutionRunResult>;
  /** Project a stored run by canonical runId — never accept an arbitrary caller run object. */
  readonly projectById: (
    runId: string,
  ) => Promise<CreateExecutionProjectionResult>;
  /** Assess readiness from the stored run + a freshly validated projection. */
  readonly assessById: (
    runId: string,
  ) => Promise<ExecutionReadinessAssessment>;
  readonly getById: (runId: string) => Promise<ExecutionRun | null>;
  readonly disclosure: {
    readonly sources: readonly ["fixture"];
    readonly cursorLive: false;
    readonly cursorVerified: false;
    readonly providersLive: false;
    readonly gitWrite: false;
    readonly persistence: "memory_process_local";
    readonly durable: false;
    readonly multiInstance: false;
    readonly restartSafe: false;
    readonly gD2dCursor01: "NOT_CONSUMED";
    readonly gD2dPersist01: "NOT_CONSUMED";
  };
};

/**
 * D2-D3 fixture-first composition. It assembles the existing single memory
 * authority and D2-D2 ports; it does not introduce another store or runtime.
 * Source authority is fixture-only and is not injectable.
 */
export function composeExecutionRunD2D3(options?: {
  readonly providers?: ExecutionRunProviderComposition;
  readonly clock?: ClockPort;
  readonly clockIso?: string;
  readonly finops?: import("../../finops/ports/finopsCapturePort").FinOpsCapturePort;
  /**
   * Optional FinOps T4 enforcement — pass-through ONLY when provided.
   * No default T4 instance, pool, config, threshold, env, or S30 activation.
   */
  readonly finopsEnforcement?: import("../../finops/ports/finopsEnforcementPort").FinOpsEnforcementPort;
}): ExecutionRunD2D3Composition {
  assertServerOnly();
  const clockIso = options?.clockIso ?? "2026-08-04T09:15:00.000Z";
  const execution = composeExecutionRunMemory({ clockIso });
  const providers = options?.providers ?? composeExecutionRunProvidersFake();
  const clock: ClockPort = options?.clock ?? { nowIso: () => clockIso };

  const projectById = async (
    runId: string,
  ): Promise<CreateExecutionProjectionResult> => {
    const run = await execution.getById(runId);
    if (!run) {
      return {
        ok: false,
        failure: { code: "RUN_NOT_FOUND", message: "Execution run not found" },
      };
    }
    const provisional = createExecutionProjection({ run });
    if (!provisional.ok) return provisional;
    const readiness = assessExecutionReadiness({
      run,
      projection: provisional.projection,
    });
    return createExecutionProjection({
      run,
      readinessAssessment: readiness,
      openReserves: readiness.openReserves,
    });
  };

  return {
    coordinate: (input) =>
      coordinateExecutionRun(input, {
        execution,
        providers,
        events: providers.events,
        clock,
        ...(options?.finops ? { finops: options.finops } : {}),
        ...(options?.finopsEnforcement
          ? { finopsEnforcement: options.finopsEnforcement }
          : {}),
      }),
    projectById,
    assessById: async (runId) => {
      const projected = await projectById(runId);
      if (!projected.ok) {
        return assessExecutionReadiness({});
      }
      const run = await execution.getById(runId);
      if (!run) return assessExecutionReadiness({});
      return assessExecutionReadiness({
        run,
        projection: projected.projection,
      });
    },
    getById: execution.getById,
    disclosure: {
      sources: ["fixture"],
      cursorLive: false,
      cursorVerified: false,
      providersLive: false,
      gitWrite: false,
      persistence: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
      gD2dCursor01: "NOT_CONSUMED",
      gD2dPersist01: "NOT_CONSUMED",
    },
  };
}
