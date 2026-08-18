/**
 * R3 — StartExecution ACK → awaitCompletion → terminal Attempt.
 * Does not change StartExecution spawn-ACK semantics.
 * No fixture fallback. No queue / worker / scheduler.
 */
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  type ExecutionAttempt,
  type ExecutionAttemptServices,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";

export const NORA_STDOUT_CAP = 4 * 1024;
export const NORA_STDERR_CAP = 4 * 1024;

export type BoundedLaunchObservationFacts = {
  attemptId: string;
  processRef: string;
  exitCode: number | null;
  timedOut: boolean;
  durationMs: number;
  realProcessInvoked: boolean;
  technicalResultRef: string | null;
  stdout: string;
  stderr: string;
};

export type CompleteBoundedReadOnlyLaunchResult =
  | {
      ok: true;
      status: "succeeded";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation;
      facts: BoundedLaunchObservationFacts;
    }
  | {
      ok: true;
      status: "running";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation | null;
      facts: null;
    }
  | {
      ok: true;
      status: "failed" | "timeout";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation | null;
      facts: BoundedLaunchObservationFacts | null;
    }
  | { ok: false; code: string; message: string };

function capBytes(value: string, cap: number): string {
  if (value.length <= cap) return value;
  return value.slice(0, cap);
}

function resultRefForAttempt(attemptId: string): string {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const ref = `res:m4:${segment}`.slice(0, 128);
  return ref;
}

function hasAwaitCompletion(
  port: unknown,
): port is { awaitCompletion: (processRef: string) => Promise<RealProcessObservation | null> } {
  return (
    !!port &&
    typeof port === "object" &&
    typeof (port as { awaitCompletion?: unknown }).awaitCompletion ===
      "function"
  );
}

export function toNoraObservationFacts(input: {
  attemptId: string;
  observation: RealProcessObservation;
  technicalResultRef: string | null;
}): BoundedLaunchObservationFacts {
  return {
    attemptId: input.attemptId,
    processRef: input.observation.processRef,
    exitCode: input.observation.exitCode,
    timedOut: input.observation.timedOut,
    durationMs: input.observation.durationMs,
    realProcessInvoked: input.observation.realProcessInvoked,
    technicalResultRef: input.technicalResultRef,
    stdout: capBytes(input.observation.stdout ?? "", NORA_STDOUT_CAP),
    stderr: capBytes(input.observation.stderr ?? "", NORA_STDERR_CAP),
  };
}

export async function completeBoundedReadOnlyLaunch(input: {
  attempt: ExecutionAttempt;
  services: ExecutionAttemptServices;
}): Promise<CompleteBoundedReadOnlyLaunchResult> {
  const realBoundary = input.services.realBoundary;
  if (!realBoundary) {
    return {
      ok: false,
      code: "REAL_BOUNDARY_REQUIRED",
      message:
        "Completion REAL refusée — realBoundary absent (fail-closed, pas de fallback fixture).",
    };
  }

  const frontiers = await realBoundary.safetyJournal.findFrontierByAttempt(
    input.attempt.attemptId,
  );
  const launched = frontiers.find(
    (row) =>
      row.kind === "LAUNCHED" &&
      typeof row.processRef === "string" &&
      row.processRef.trim().length > 0,
  );
  if (!launched?.processRef) {
    return {
      ok: false,
      code: "REAL_LAUNCH_FRONTIER_REQUIRED",
      message:
        "Frontier LAUNCHED / processRef absent — fail-closed, pas de fallback fixture.",
    };
  }
  if (launched.attemptId !== input.attempt.attemptId) {
    return {
      ok: false,
      code: "REAL_LAUNCH_FRONTIER_MISMATCH",
      message: "Frontier LAUNCHED / Attempt mismatch — fail-closed.",
    };
  }

  if (!hasAwaitCompletion(realBoundary.launchPort)) {
    return {
      ok: false,
      code: "REAL_AWAIT_COMPLETION_REQUIRED",
      message:
        "Launch port sans awaitCompletion — fail-closed, pas de resultRef inventé.",
    };
  }

  let observation: RealProcessObservation | null = null;
  if (typeof realBoundary.launchPort.observe === "function") {
    observation = await realBoundary.launchPort.observe(launched.processRef);
  }
  const pendingObservation =
    observation !== null &&
    observation.realProcessInvoked === true &&
    observation.timedOut !== true &&
    observation.exitCode === null;
  if (pendingObservation) {
    return {
      ok: true,
      status: "running",
      attempt: input.attempt,
      observation,
      facts: null,
    };
  }

  if (!observation) {
    observation = await realBoundary.launchPort.awaitCompletion(
      launched.processRef,
    );
  }
  if (!observation) {
    return {
      ok: false,
      code: "REAL_COMPLETION_OBSERVATION_REQUIRED",
      message: "Observation de completion nulle — fail-closed.",
    };
  }
  if (observation.processRef !== launched.processRef) {
    return {
      ok: false,
      code: "REAL_COMPLETION_PROCESS_MISMATCH",
      message: "processRef observation ≠ frontier — fail-closed.",
    };
  }

  if (
    observation.timedOut !== true &&
    observation.exitCode === null &&
    observation.realProcessInvoked === true
  ) {
    return {
      ok: true,
      status: "running",
      attempt: input.attempt,
      observation,
      facts: null,
    };
  }

  if (observation.timedOut === true) {
    const timed = await input.services.triggerAttemptTimeout.execute({
      attemptId: input.attempt.attemptId,
      autoSafety: true,
      expectedAttemptVersion: input.attempt.version,
    });
    if (!timed.ok || !timed.attempt) {
      const failed = await input.services.recordExecutionFailure.execute({
        attemptId: input.attempt.attemptId,
        adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
        stopReason: "EXECUTION_TIMEOUT",
        durationMs: observation.durationMs,
        expectedAttemptVersion: input.attempt.version,
      });
      if (!failed.ok || !failed.attempt) {
        return {
          ok: false,
          code: timed.ok ? "REAL_TIMEOUT_RECORD_FAILED" : timed.error.detailCode,
          message:
            timed.ok
              ? "Timeout Cursor observé mais Attempt non terminalisé."
              : timed.error.message,
        };
      }
      return {
        ok: true,
        status: "timeout",
        attempt: failed.attempt,
        observation,
        facts: toNoraObservationFacts({
          attemptId: input.attempt.attemptId,
          observation,
          technicalResultRef: null,
        }),
      };
    }
    return {
      ok: true,
      status: "timeout",
      attempt: timed.attempt,
      observation,
      facts: toNoraObservationFacts({
        attemptId: input.attempt.attemptId,
        observation,
        technicalResultRef: null,
      }),
    };
  }

  const success =
    observation.realProcessInvoked === true &&
    observation.timedOut === false &&
    observation.exitCode === 0;

  if (!success) {
    const failed = await input.services.recordExecutionFailure.execute({
      attemptId: input.attempt.attemptId,
      adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
      stopReason: "REAL_PROCESS_NONZERO_EXIT",
      technicalExitCode: observation.exitCode ?? undefined,
      durationMs: observation.durationMs,
      expectedAttemptVersion: input.attempt.version,
    });
    if (!failed.ok || !failed.attempt) {
      return {
        ok: false,
        code: failed.ok ? "REAL_FAILURE_RECORD_FAILED" : failed.error.detailCode,
        message: failed.ok
          ? "Échec Cursor observé mais Attempt non terminalisé."
          : failed.error.message,
      };
    }
    return {
      ok: true,
      status: "failed",
      attempt: failed.attempt,
      observation,
      facts: toNoraObservationFacts({
        attemptId: input.attempt.attemptId,
        observation,
        technicalResultRef: null,
      }),
    };
  }

  const resultRef = resultRefForAttempt(input.attempt.attemptId);
  const recorded = await input.services.recordExecutionResult.execute({
    attemptId: input.attempt.attemptId,
    adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
    resultRef,
    technicalExitCode: 0,
    durationMs: observation.durationMs,
    expectedAttemptVersion: input.attempt.version,
  });
  if (!recorded.ok || !recorded.attempt) {
    return {
      ok: false,
      code: recorded.ok
        ? "REAL_RESULT_RECORD_FAILED"
        : recorded.error.detailCode,
      message: recorded.ok
        ? "RecordExecutionResult n'a pas terminalisé l'Attempt."
        : recorded.error.message,
    };
  }
  if (recorded.attempt.status !== "succeeded" || !recorded.attempt.resultRef) {
    return {
      ok: false,
      code: "REAL_RESULT_NOT_SUCCEEDED",
      message:
        "Attempt post-RecordExecutionResult n'est pas succeeded+resultRef.",
    };
  }

  return {
    ok: true,
    status: "succeeded",
    attempt: recorded.attempt,
    observation,
    facts: toNoraObservationFacts({
      attemptId: recorded.attempt.attemptId,
      observation,
      technicalResultRef: recorded.attempt.resultRef,
    }),
  };
}
