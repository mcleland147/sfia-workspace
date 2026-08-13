import "./serverGuard";

/**
 * D-V2-05 runtime disclosures — always attached to runtime results.
 * M2: Project/LPS + CycleInstance subset Product SQLite restart-safe;
 * conversation/proposal/decision/contract/attempt/evidence remain process-local.
 * Not a product-ready / v3-ADOPTED claim surface.
 */
export interface RuntimeDisclosures {
  readonly runtimeMode: "LOCAL_PROCESS";
  /** Partial: Project/LPS + CycleInstance M2 durable; other OA stacks process-local. */
  readonly persistence: "PARTIAL_PROJECT_LPS_CYCLE_DURABLE";
  readonly agentExecution: "DISABLED";
  readonly iam: "NOT_SELECTED";
  readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
  readonly delivery: "NOT_AUTHORIZED";
  readonly cutover: "NOT_AUTHORIZED";
  /** True because conversation/proposal/decision/contract/attempt/evidence remain volatile. */
  readonly localDataVolatile: true;
  /** True for non-M2 OA state; Project/LPS/CycleInstance survive restart. */
  readonly restartMayLoseState: true;
  readonly projectLpsRestartSafe: true;
  readonly cycleInstanceRestartSafe: true;
  readonly messages: readonly string[];
}

export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
  "Mode local process-bound: the runtime lives in a single Node process.",
  "Project/LPS + CycleInstance Product persistence uses an isolated node:sqlite store (G0-B / M1 / M2).",
  "Conversation, Proposal F2, HumanDecision, ExecutionContract, Attempt, and Evidence remain process-local and may be lost on restart.",
  "Trajectory/Epistemic Memory remain process-local (out of M2 durability).",
  "IAM is not configured.",
  "Real agent execution is disabled.",
  "Delivery and cutover are not authorized.",
  "Runtime v3 is not ADOPTED.",
]);

export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
  runtimeMode: "LOCAL_PROCESS",
  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DURABLE",
  agentExecution: "DISABLED",
  iam: "NOT_SELECTED",
  productPersistence: "SQLITE_OA_PRODUCT_STORE",
  delivery: "NOT_AUTHORIZED",
  cutover: "NOT_AUTHORIZED",
  localDataVolatile: true,
  restartMayLoseState: true,
  projectLpsRestartSafe: true,
  cycleInstanceRestartSafe: true,
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
