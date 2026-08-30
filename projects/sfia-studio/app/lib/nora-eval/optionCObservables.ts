/**
 * Nora-eval observability helpers for Option C.
 * Does not create a second eval framework — extends MW0 harness metadata only.
 */

export type NoraCognitiveRuntimeObservable = {
  cognitiveRuntime: "agents" | "unknown";
  sessionPath: "product_sqlite_session" | "none";
  toolExecutionPath: "routeToolCall" | "unknown";
  responsesCompactionAdopted: false;
};

/** Default Option C observables for evidence packs / parity prep. */
export function optionCRuntimeObservables(
  cognitiveRuntime: "agents" | "unknown" = "unknown",
): NoraCognitiveRuntimeObservable {
  return {
    cognitiveRuntime,
    sessionPath:
      cognitiveRuntime === "agents" ? "product_sqlite_session" : "none",
    toolExecutionPath: "routeToolCall",
    responsesCompactionAdopted: false,
  };
}
