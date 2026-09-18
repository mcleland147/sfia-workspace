/**
 * Resolve durable boundaryProofMode for post-Evidence provenance (Checkpoint F / R6).
 *
 * Priority (no invented state):
 * 1. Attempt.processDiagnostic.boundaryProofMode (when failure recorded it)
 * 2. Launch frontier LAUNCHED payload_json.boundaryProofMode
 * 3. Composed launchPort.boundaryProofMode when available
 *
 * Never infers Cursor REAL from agent identity alone.
 */
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { BoundaryProofMode } from "@/lib/oa/execution-attempt";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

function parseFrontierProofMode(
  payloadJson: string | undefined,
): BoundaryProofMode | null {
  if (!payloadJson) return null;
  try {
    const payload = JSON.parse(payloadJson) as {
      boundaryProofMode?: unknown;
    };
    if (
      payload.boundaryProofMode === "cursor_real" ||
      payload.boundaryProofMode === "deterministic_fake"
    ) {
      return payload.boundaryProofMode;
    }
  } catch {
    /* ignore malformed durable payload */
  }
  return null;
}

export async function resolveDurableBoundaryProofMode(input: {
  readonly oa: Pick<RuntimeOaStack, "executionAttemptServices">;
  readonly attempt: ExecutionAttempt;
}): Promise<BoundaryProofMode | null> {
  const fromDiagnostic = input.attempt.processDiagnostic?.boundaryProofMode;
  if (
    fromDiagnostic === "cursor_real" ||
    fromDiagnostic === "deterministic_fake"
  ) {
    return fromDiagnostic;
  }

  const journal =
    input.oa.executionAttemptServices?.realBoundary?.safetyJournal;
  if (journal?.findFrontierByAttempt) {
    const frontiers = await journal.findFrontierByAttempt(
      input.attempt.attemptId,
    );
    const launched = frontiers.find((row) => row.kind === "LAUNCHED");
    const fromFrontier = parseFrontierProofMode(launched?.payloadJson);
    if (fromFrontier) return fromFrontier;
  }

  const portMode =
    input.oa.executionAttemptServices?.realBoundary?.launchPort
      ?.boundaryProofMode;
  if (portMode === "cursor_real" || portMode === "deterministic_fake") {
    return portMode;
  }

  return null;
}
