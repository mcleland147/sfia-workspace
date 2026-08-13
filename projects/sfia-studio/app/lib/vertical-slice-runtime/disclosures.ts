import "./serverGuard";

/**
 * D-V2-05 runtime disclosures — always attached to runtime results.
 * M1: Project/LPS Product SQLite is restart-safe; other OA stacks remain process-local.
 * Not a product-ready / v3-ADOPTED claim surface.
 */
export interface RuntimeDisclosures {
  readonly runtimeMode: "LOCAL_PROCESS";
  /** Partial: T-A1 Project/LPS durable; T-A2…T-A6 still process-local Memory. */
  readonly persistence: "PARTIAL_PROJECT_LPS_DURABLE";
  readonly agentExecution: "DISABLED";
  readonly iam: "NOT_SELECTED";
  readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
  readonly delivery: "NOT_AUTHORIZED";
  readonly cutover: "NOT_AUTHORIZED";
  /** True because non-T-A1 OA state remains volatile. */
  readonly localDataVolatile: true;
  /** True for cycle/decision/contract/attempt/evidence Memory; Project/LPS survive restart. */
  readonly restartMayLoseState: true;
  readonly projectLpsRestartSafe: true;
  readonly messages: readonly string[];
}

export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
  "Mode local process-bound: the runtime lives in a single Node process.",
  "Project/LPS Product persistence uses an isolated node:sqlite store (G0-B / M1).",
  "Other OA business state (cycle/decision/contract/attempt/evidence) remains process-local Memory and may be lost on restart.",
  "IAM is not configured.",
  "Real agent execution is disabled.",
  "Delivery and cutover are not authorized.",
  "Runtime v3 is not ADOPTED.",
]);

export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
  runtimeMode: "LOCAL_PROCESS",
  persistence: "PARTIAL_PROJECT_LPS_DURABLE",
  agentExecution: "DISABLED",
  iam: "NOT_SELECTED",
  productPersistence: "SQLITE_OA_PRODUCT_STORE",
  delivery: "NOT_AUTHORIZED",
  cutover: "NOT_AUTHORIZED",
  localDataVolatile: true,
  restartMayLoseState: true,
  projectLpsRestartSafe: true,
  messages: RUNTIME_DISCLOSURE_MESSAGES,
});

/**
 * Honest readiness projection for future Overview UI.
 * Never claims HARD closed, T-A6 complete, RUN READY, or product ready.
 */
export interface RuntimeReadinessProjection {
  readonly status: "NOT_READY";
  readonly hard: "OPEN";
  readonly tA6: "INCOMPLETE";
  readonly iam: "NOT_SELECTED";
  readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
  readonly realAgentExecution: "DISABLED";
  readonly delivery: "NOT_AUTHORIZED";
  readonly cutover: "NOT_AUTHORIZED";
  readonly runReady: false;
  readonly productReady: false;
}

export const RUNTIME_READINESS_NOT_READY: RuntimeReadinessProjection =
  Object.freeze({
    status: "NOT_READY",
    hard: "OPEN",
    tA6: "INCOMPLETE",
    iam: "NOT_SELECTED",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    realAgentExecution: "DISABLED",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    runReady: false,
    productReady: false,
  });
